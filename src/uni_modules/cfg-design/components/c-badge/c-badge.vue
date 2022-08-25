<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { BadgeProps } from './types.d'
import { computed } from 'vue'
import { useColors, useRadius, useFontSizes, getSize, getSizes } from '../../styles'
import { getPropsBoolean, mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  /**
   * 配置名。使用 `useBadgeConfigs()` 查看配置数据。使用 `setBadgeConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: BadgeProps['c']
  /**
   * 背景颜色。 default 配置为 `primary`。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  color?: BadgeProps['color']
  /**
   * 文字
   * 默认： `undefined`
   */
  text?: BadgeProps['text']
  /**
   * 文字的颜色。default 配置为 `#fff`。详情查看 c-text props.color
   * 默认： `undefined`
   */
  textColor?: BadgeProps['textColor']
  /**
   * 文字的字体大小。default 配置为 `s`。详情查看 c-text props.size
   * 默认： `undefined`
   */
  size?: BadgeProps['size']
  /**
   * 详情查看 c-text props
   * 默认： `undefined`
   */
  textProps?: BadgeProps['textProps']
  /**
   * 圆角值。 default 配置为 `xs`。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
   * 默认： `undefined`
   */
  radius?: BadgeProps['radius']
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: BadgeProps['round']
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const configs = useConfigs()
const colors = useColors()
const fontSizes = useFontSizes()
const radiuses = useRadius()

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
const colorC = computed<BadgeProps['color']>(() => {
  const { color } = propsC.value
  return color ? colors.value[color] || color : configs.value.default.color
})
const sizeC = computed<CSSProperties['fontSize']>(() => getSize(fontSizes.value, propsC.value.size || configs.value.default.size))
const radiusC = computed(() => getSizes(radiuses.value, propsC.value.radius))
const roundC = computed(() => getPropsBoolean(propsC.value.round))
const radiusC2 = computed(() => roundC.value ? '9999px' : radiusC.value)

const styles1 = computed<CSSProperties[]>(() => [{
  padding: `0 calc(${sizeC.value} * 0.4)`,
}])

const styles2 = computed<CSSProperties[]>(() => [{
  backgroundColor: colorC.value,
  borderRadius: radiusC2.value,
}])

const textPropsC1 = computed<BadgeProps['textProps']>(() =>
  mergeProps<BadgeProps['textProps']>(
    { textBind: { style: styles1.value } },
    propsC.value.textProps
 )
)

const textPropsC2 = computed<BadgeProps['textProps']>(() => ({
  textBind: { style: styles2.value },
  color: propsC.value.textColor,
  size: propsC.value.size,
}))

const textPropsC = computed<BadgeProps['textProps']>(() => mergeProps(textPropsC1.value, textPropsC2.value))
</script>

<template>
<c-text v-bind="textPropsC">{{ text }}<slot v-if="!propsC.text" /></c-text>
</template>
