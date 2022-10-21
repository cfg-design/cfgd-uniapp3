<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { BottomBarProps } from './types.d'
import { computed, ref, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue'
import { toCssUnit } from '../../styles'
import { getPropsBoolean, omitProps, mergeProps, getRect } from '../../utils'
import { useConfigs } from './use'

interface Props {
  props?: BottomBarProps
  cClass?: BottomBarProps['cClass']
  cStyle?: BottomBarProps['cStyle']
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: BottomBarProps['c']
  /**
   * 元素层级 z-index。
   * 默认： undefined
   */
  zIndex?: BottomBarProps['zIndex']
  /**
   * fixed 顶部的距离。
   * 默认： undefined
   */
  bottom?: BottomBarProps['bottom']
  /**
   * 无空间。
   * 默认： `undefined`
   */
  noSpace?: BottomBarProps['noSpace']
  /**
   * 不固定。
   * 默认： `undefined`
   */
  noFixed?: BottomBarProps['noFixed']
  /**
   * 是否留出底部安全距离。
   * 默认： `undefined`
   */
  safeAreaInsetBottom?: BottomBarProps['safeAreaInsetBottom']
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const configs = useConfigs()

const heightR = ref(0)

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
const noSpaceC = computed(() => getPropsBoolean(propsC.value.noSpace))
const noFixedC = computed(() => getPropsBoolean(propsC.value.noFixed))
const safeAreaInsetBottomC = computed(() => getPropsBoolean(propsC.value.safeAreaInsetBottom))
const barStyle = computed(() => {
  const style: CSSProperties = {}
  if (!noSpaceC.value && !noFixedC.value) {
    style.paddingTop = heightR.value + 'px'
  }
  return style
})
const zIndexC = computed(() => Number(propsC.value.zIndex) || 2)
const bottomC = computed(() => toCssUnit(propsC.value.bottom || 0))
const paddingBottom = computed(() => safeAreaInsetBottomC.value ? 'env(safe-area-inset-bottom)' : '0')

const style = computed<CSSProperties>(() => ({
  zIndex: zIndexC.value,
  bottom: bottomC.value,
  paddingBottom: paddingBottom.value
}))
const styleC = computed(() => mergeProps({ x: [style.value] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: ['c-bottom-bar__wrap', { 'c-bottom-bar__fixed': !noFixedC.value }] }, { x: propsC.value.cClass }).x)

const that = getCurrentInstance()!

const handleInit = () => {
  clearTimeout(handleInit.timer)
  handleInit.num ++

  if (handleInit.num > 10) return undefined

  getRect(that, '.c-bottom-bar__wrap').then(({ height }) => {
    heightR.value = height || 0

    if (!height) {
      handleInit.timer = setTimeout(handleInit, 100)
    }
  })
}
handleInit.timer = 0
handleInit.num = 0

onMounted(handleInit)
onBeforeUnmount(() => clearTimeout(handleInit.timer))
</script>

<template>
<view class="c-bottom-bar" :style="barStyle">
  <view :class="classC" :style="(styleC as any)">
    <slot />
  </view>
</view>
</template>

<style lang="scss" scoped>
.c-bottom-bar {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;

  &__ {
    &wrap {
      /* #ifndef APP-NVUE */
      display: flex;
      /* #endif */

      flex-direction: column;
      align-items: stretch;
      box-sizing: border-box;
      background-color: #fff;
    }

    &fixed {
      position: fixed;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    }
  }
}
</style>
