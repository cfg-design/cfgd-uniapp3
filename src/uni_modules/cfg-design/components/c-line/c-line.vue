<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { LineProps } from './types.d'
import { computed } from 'vue'
import { useColors, toCssUnit } from '../../styles'
import { getPropsBoolean, omitProps, mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  props?: LineProps
  cClase?: LineProps['cClass']
  cStyle?: LineProps['cStyle']
  /**
   * 配置名。使用 `useLindConfigs()` 查看配置数据。使用 `setLindConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: LineProps['c']
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

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))

const colorC = computed<CSSProperties['color']>(() => {
  const { color } = propsC.value
  return color ? colors.value[color] || color : '#ebedf0'
})

const verticalC = computed(() => getPropsBoolean(propsC.value.vertical))
const roundC = computed(() => getPropsBoolean(propsC.value.round))
const lengthC = computed(() => toCssUnit(propsC.value.length))
const borderStyleC = computed(() => propsC.value.borderStyle || 'solid')

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
    result.borderTopStyle = borderStyleC.value
    result.height = '0'
    if (lengthC.value) {
      result.width = lengthC.value
    }
  } else {
    result.borderLeftWidth = width
    result.borderLeftColor = colorC.value
    result.borderLeftStyle = borderStyleC.value
    result.width = '0'
    if (lengthC.value) {
      result.height = lengthC.value
    }
  }

  return result
})

const styles = computed<CSSProperties[]>(() => [
  lineStyle.value,
  {
    borderRadius: roundC.value ? '9999px' : '0'
  }
])

const styleC = computed(() => mergeProps({ x: styles.value }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: ['c-line'] }, { x: propsC.value.cClass }).x)
</script>

<template>
<view :class="classC" :style="(styleC as any)" />
</template>

<style lang="scss" scoped>
.c-line {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
}
</style>
