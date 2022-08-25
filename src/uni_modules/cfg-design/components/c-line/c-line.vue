<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { LineProps } from './types.d'
import { computed } from 'vue'
import { useColors, toCssUnit } from '../../styles'
import { getPropsBoolean, mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  /**
   * 配置名。使用 `useLindConfigs()` 查看配置数据。使用 `setLindConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: LineProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: LineProps['viewBind']
  /**
   * 线条长度。
   * 默认： `undefined`
   */
  length?: LineProps['length']
  /**
   * 线条粗细。
   * 默认： `undefined`
   */
  width?: LineProps['width']
  /**
   * 线条颜色。 default 配置默认值为 `#ebedf0` 。
   * 默认： `undefined`
   */
  color?: LineProps['color']
  /**
   * 线条样式。
   * 默认： `undefined`
   */
  borderStyle?: LineProps['borderStyle']
  /**
   * 是否垂直。
   * 默认： `undefined`
   */
  vertical?: LineProps['vertical']
  /**
   * 是否显示为圆角。
   * 默认： `undefined`
   */
  round?: LineProps['round']
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const colors = useColors()
const configs = useConfigs()

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))

const colorC = computed<CSSProperties['color']>(() => {
  const { color } = propsC.value
  return color ? colors.value[color] || color : configs.value.default.color
})

const verticalC = computed(() => getPropsBoolean(propsC.value.vertical))
const roundC = computed(() => getPropsBoolean(propsC.value.round))
const lengthC = computed(() => toCssUnit(propsC.value.length))

const lineStyle = computed<CSSProperties>(() => {
  const result: CSSProperties = {}
  let width = propsC.value.width || 1

  if (typeof width === 'number' || /^\d$/.test(width)) {
    width = Number(width)

    if (width < 2) {
      result.transform = !verticalC.value ? 'scale(1, 0.5)' : 'scale(0.5, 1)'
      width = 2 * width
    }
  }

  width = toCssUnit(width)

  if (!verticalC.value) {
    result.borderTopWidth = width
    result.borderTopColor = colorC.value
    result.borderTopStyle = propsC.value.borderStyle
    result.width = lengthC.value
    result.height = '0'
  } else {
    result.borderLeftWidth = width
    result.borderLeftColor = colorC.value
    result.borderLeftStyle = propsC.value.borderStyle
    result.width = '0'
    result.height = lengthC.value
  }

  return result
})

const styles = computed<(string | CSSProperties)[]>(() => [
  lineStyle.value,
  {
    borderRadius: roundC.value ? '9999px' : ''
  }
])
</script>

<template>
<view class="c-line" v-bind="propsC.viewBind" :style="(styles as any)" />
</template>

<style lang="scss">
.c-line {
  border-width: 0;
}
</style>
