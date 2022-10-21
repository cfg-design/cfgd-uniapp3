<script setup lang="ts">
import type { BadgeProps } from './types.d'
import { computed } from 'vue'
import { useColors, useRadius, useFontSizes, getSize, getSizes } from '../../styles'
import { getPropsBoolean, omitProps, mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  props?: BadgeProps
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: BadgeProps['c']
  /**
   * 背景颜色， [使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/colors.html) 。
   * 默认： `undefined`
   */
  color?: BadgeProps['color']
  /**
   * 文字
   * 默认： `undefined`
   */
  text?: BadgeProps['text']
  /**
   * 文字的颜色，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/colors.html) 。
   * 默认： `undefined`
   */
  textColor?: BadgeProps['textColor']
  /**
   * 文字的字体大小，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/font-sizes.html) 。
   * 默认： `undefined`
   */
  size?: BadgeProps['size']
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  textProps?: BadgeProps['textProps']
  /**
   * 圆角值，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/radiuses.html) 。
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

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
const colorC = computed<BadgeProps['color']>(() => {
  const { color } = propsC.value
  return color ? colors.value[color] || color : colors.value.primary
})
const sizeC = computed<string>(() => getSize(fontSizes.value, propsC.value.size || 's'))
const radius1 = computed(() => propsC.value.radius !== undefined ? propsC.value.radius : 'xs')
const radius2 = computed(() => getSizes(radiuses.value, radius1.value))
const roundC = computed(() => getPropsBoolean(propsC.value.round))
const radiusC = computed(() => roundC.value ? '9999px' : radius2.value)

const textPropsC = computed(() => mergeProps<BadgeProps['textProps']>({ cStyle: { padding: `0 calc(${sizeC.value} * 0.4)` } }, propsC.value.textProps))
</script>

<template>
<c-text
  :props="textPropsC"
  :c-class="['c-badge']"
  :c-style="[{
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1.25,
    backgroundColor: colorC,
    borderRadius: radiusC,
  }]"
  :text="text"
  :color="propsC.textColor || '#fff'"
  :size="sizeC"
  ><slot v-if="!propsC.text" /></c-text
>
</template>
