<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { SpinProps } from './types.d'
import { computed } from 'vue'
import { omitProps, mergeProps } from '../../utils/props'
import { useConfigs } from './use'

interface Props {
  props?: SpinProps
  cClass?: SpinProps['cClass']
  cStyle?: SpinProps['cStyle']
  /**
   * 配置名。使用 useSpinConfigs() 查看配置数据。使用 setSpinConfigs() 进行配置。
   * 默认： default
   */
  c?: SpinProps['c']
   /**
    * 图标和文案的颜色。`useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
    * 默认： `undefined`
    */
   color?: SpinProps['color']
   /**
    * 图标大小。`useFontSizes()` 可以查看配置数据。使用 setFontSizes() 进行配置。
    * 默认： `undefined`
    */
   size?: SpinProps['size']
  /**
   * 旋转图标名称或代码。
   * 默认： `undefined`
   */
  icon?: SpinProps['icon']
  /**
   * 详情查看 c-icon props
   * 默认： `undefined`
   */
  iconProps?: SpinProps['iconProps']
  /**
   * 加载文案
   * 默认： `undefined`
   */
  tip?: SpinProps['tip']
  /**
   * 详情查看 c-text props
   * 默认： `undefined`
   */
  tipProps?: SpinProps['tipProps']
  /**
   * 图标和方案排列。
   * 默认： `undefined`
   */
  direction?: SpinProps['direction']
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const configs = useConfigs()

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
const colorC = computed(() => propsC.value.color)

const styleC = computed(() => {
  const style: CSSProperties = {}
  const { direction, cStyle } = propsC.value

  if (direction) {
    style.flexDirection = direction
  }

  return mergeProps({ x: [style] }, { x: cStyle }).x
})

const iconPropsC = computed(() => {
  const { icon, iconProps, size } = propsC.value

  return mergeProps({
    name: icon || 'loader-5-line',
    color: colorC.value,
    size,
    textProps: { cStyle: [{ verticalAlign: 'middle' }] }
  }, iconProps)
})

const tipPropsC = computed(() => {
  const style: CSSProperties = {}
  const { tip, direction, tipProps, size } = propsC.value

  if (!tip) return {}

  switch (direction) {
    case 'column':
      style.marginTop = '8rpx'
      break
    case 'column-reverse':
      style.marginBottom = '8rpx'
      break
    case 'row-reverse':
      style.marginRight = '8rpx'
      break
    default:
      style.marginLeft = '8rpx'
  }

  return mergeProps({ size, color: colorC.value, cStyle: [style] }, tipProps)
})

const classC = computed(() => mergeProps({ x: ['c-spin'] }, { x: propsC.value.cClass }).x)
</script>

<template>
<view :class="classC" :style="(styleC as any)">
  <view class="c-spin__icon-wrap">
    <c-icon :props="iconPropsC" />
  </view>
  <c-text v-if="propsC.tip" :props="tipPropsC" :text="propsC.tip" />
</view>
</template>

<style lang="scss" scoped>
.c-spin {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* #ifndef APP-NVUE */
  &__icon-wrap {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */

    box-sizing: border-box;
    transform: rotate(0deg);
    animation: rotate 1.5s linear infinite;
  }
  /* #endif */
}

/* #ifndef APP-NVUE */
@keyframes rotate {
  0% {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
}
/* #endif */
</style>
