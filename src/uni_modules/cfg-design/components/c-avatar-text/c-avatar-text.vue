<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { AvatarTextProps } from './types.d'
import { computed } from 'vue'
import { useColors, useRadius, useFontSizes, getSize, getSizes } from '../../styles'
import { getPropsBoolean, mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  /**
   * 配置名。使用 `useAvatarTextConfigs()` 查看配置数据。使用 `setAvatarTextConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: AvatarTextProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: AvatarTextProps['viewBind']
  /**
   * 背景颜色。 default 配置为 `#fff`。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
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
   * 头像大小。 default 配置为 `100rpx`。
   * 默认： `undefined`
   */
  size?: AvatarTextProps['size']
  /**
   * 圆角值。 default 配置为 `m`。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
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

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
const colorC = computed<CSSProperties['color']>(() => {
  const { color } = propsC.value
  return color ? colors.value[color] || color : configs.value.default.color
})
const sizeC = computed(() => getSize(fontSizes.value, propsC.value.size || configs.value.default.size))
const fontSize = computed(() => sizeC.value ? `calc(${sizeC.value} * 0.5)` : undefined)
const radiusC = computed(() => getSizes(radiuses.value, propsC.value.radius))
const roundC = computed(() => getPropsBoolean(propsC.value.round))
const radiusC2 = computed(() => roundC.value ? '9999px' : radiusC.value)
const viewStyle = computed<CSSProperties[]>(() => [{
  backgroundColor: colorC.value,
  borderRadius: radiusC2.value,
  width: sizeC.value,
  height: sizeC.value,
}])
</script>

<template>
<view class="c-avatar-text" v-bind="(propsC.viewBind as any)" :style="viewStyle">
  <c-text v-bind="{ size: fontSize, ...propsC.textProps }" :color="propsC.textColor">{{ propsC.text }}<slot v-if="!propsC.text" /></c-text>
</view>
</template>

<style lang="scss">
.c-avatar-text {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  position: relative;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
}
</style>
