<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { BottomBarProps } from './types.d'
import { computed, ref, onMounted, getCurrentInstance } from 'vue'
import { toCssUnit } from '../../styles'
import { getPropsBoolean, mergeProps, getRect } from '../../utils'
import { useConfigs } from './use'

interface Props {
  /**
   * 配置名。使用 `useTopBarConfigs()` 查看配置数据。使用 `setTopBarConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: BottomBarProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: BottomBarProps['viewBind']
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

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
const noSpaceC = computed(() => getPropsBoolean(propsC.value.noSpace))
const noFixedC = computed(() => getPropsBoolean(propsC.value.noFixed))
const safeAreaInsetBottomC = computed(() => getPropsBoolean(propsC.value.safeAreaInsetBottom))
const barStyle = computed<CSSProperties>(() => ({ paddingTop: !noSpaceC.value && !noFixedC.value ? heightR.value + 'px' : undefined }))
const zIndexC = computed(() => Number(propsC.value.zIndex) || 2)
const bottomC = computed(() => toCssUnit(propsC.value.bottom))
const paddingBottom = computed(() => safeAreaInsetBottomC.value ? 'env(safe-area-inset-bottom)' : '')

const viewClass = computed(() => ({ 'c-bottom-bar__fixed': !noFixedC.value }))
const viewStyle = computed<CSSProperties>(() => ({
  zIndex: zIndexC.value,
  bottom: bottomC.value,
  paddingBottom: paddingBottom.value
}))
const viewBindC = computed(() => mergeProps<Props['viewBind']>({ class: [viewClass.value], style: [viewStyle.value]}, propsC.value.viewBind))

const handleInit = () => getRect(getCurrentInstance()!, '.c-bottom-bar__wrap')
  .then(({ height }) => {
    heightR.value = height || 0
  })

onMounted(handleInit)
</script>

<template>
<view class="c-bottom-bar" :style="barStyle">
  <view class="c-bottom-bar__wrap" v-bind="(viewBindC as any)">
    <slot />
  </view>
</view>
</template>

<style lang="scss">
.c-bottom-bar {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  flex-direction: column;
  align-items: stretch;

  &__ {
    &wrap {
      /* #ifndef APP-NVUE */
      display: flex;
      /* #endif */

      flex-direction: column;
      align-items: stretch;
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
