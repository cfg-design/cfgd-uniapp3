<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { AvatarTextProps } from './types.d'
import { computed } from 'vue'
import { useColors, useRadius, useFontSizes, getSize, getSizes } from '../../styles'
import { getPropsBoolean, omitProps, mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  props?: AvatarTextProps
  cClase?: AvatarTextProps['cClass']
  cStyle?: AvatarTextProps['cStyle']
  /**
   * 配置名。使用 `useAvatarTextConfigs()` 查看配置数据。使用 `setAvatarTextConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: AvatarTextProps['c']
  /**
   * 背景颜色。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  color?: AvatarTextProps['color']
  /**
   * 头像文字
   * 默认： `undefined`
   */
  text?: AvatarTextProps['text']
  /**
   * 头像文字的颜色。详情查看 c-text props.color
   * 默认： `undefined`
   */
  textColor?: AvatarTextProps['textColor']
  /**
   * 详情查看 c-text props
   * 默认： `undefined`
   */
  textProps?: AvatarTextProps['textProps']
  /**
   * 头像大小。
   * 默认： `undefined`
   */
  size?: AvatarTextProps['size']
  /**
   * 圆角值。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
   * 默认： `undefined`
   */
  radius?: AvatarTextProps['radius']
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: AvatarTextProps['round']
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const configs = useConfigs()
const colors = useColors()
const radiuses = useRadius()
const fontSizes = useFontSizes()

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
const colorC = computed(() => {
  const { color } = propsC.value
  return color ? colors.value[color] || color : '#fff'
})
const sizeC = computed(() => getSize(fontSizes.value, propsC.value.size || 100))
const fontSize = computed(() => sizeC.value ? `calc(${sizeC.value} * 0.5)` : undefined)
const radius1 = computed(() => propsC.value.radius !== undefined ? propsC.value.radius : 'm')
const radius2 = computed(() => getSizes(radiuses.value, radius1.value))
const roundC = computed(() => getPropsBoolean(propsC.value.round))
const radiusC = computed(() => roundC.value ? '9999px' : radius2.value)
const style = computed<CSSProperties>(() => ({
  backgroundColor: colorC.value,
  borderRadius: radiusC.value,
  width: sizeC.value,
  height: sizeC.value,
}))
const styleC = computed(() => mergeProps({ x: [style.value] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: ['c-avatar-text'] }, { x: propsC.value.cClass }).x)
</script>

<template>
<view :class="classC" :style="(styleC as any)">
  <c-text :props="{ size: fontSize, ...propsC.textProps }" :text="propsC.text" :color="propsC.textColor"><slot v-if="!propsC.text" /></c-text>
</view>
</template>

<style lang="scss" scoped>
.c-avatar-text {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  box-sizing: border-box;

  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
}
</style>
