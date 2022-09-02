<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { TopBarProps } from './types.d'
import { computed, ref, onMounted, getCurrentInstance } from 'vue'
import { toCssUnit } from '../../styles'
import { omitProps, getPropsBoolean, mergeProps, getRect } from '../../utils'
import { useConfigs } from './use'

interface Props {
  props?: TopBarProps
  cClass?: TopBarProps['cClass']
  cStyle?: TopBarProps['cStyle']
  /**
   * 配置名。使用 `useTopBarConfigs()` 查看配置数据。使用 `setTopBarConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: TopBarProps['c']
  /**
   * 元素层级 z-index。
   * 默认： undefined
   */
  zIndex?: TopBarProps['zIndex']
  /**
   * fixed 顶部的距离。
   * 默认： undefined
   */
  top?: TopBarProps['top']
  /**
   * 无空间。
   * 默认： `undefined`
   */
  noSpace?: TopBarProps['noSpace']
  /**
   * 不固定。
   * 默认： `undefined`
   */
  noFixed?: TopBarProps['noFixed']
  /**
   * 显示顶部状态栏高度。
   * 默认： `undefined`
   */
  statusBar?: TopBarProps['statusBar']
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const configs = useConfigs()

const statusBarHeight = ref('')
const heightR = ref(0)

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
const noSpaceC = computed(() => getPropsBoolean(propsC.value.noSpace))
const noFixedC = computed(() => getPropsBoolean(propsC.value.noFixed))

const wrapViewStyle = computed(() => ({
  zIndex: Number(propsC.value.zIndex) || 2,
  top: toCssUnit(propsC.value.top),
  paddingTop: statusBarHeight.value,
}))

const style1 = computed(() => {
  const style: CSSProperties = {}
  if (!noSpaceC.value && !noFixedC.value) {
    style.paddingTop = heightR.value + 'px'
  }
  return style
})
const styles = computed(() => mergeProps({ x: [style1.value] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: ['c-top-bar'] }, { x: propsC.value.cClass }).x)

getPropsBoolean(propsC.value.statusBar) && uni.getSystemInfo({
  success(res) {
    statusBarHeight.value = res.statusBarHeight + 'px'
  }
})

const handleInit = () => getRect(getCurrentInstance()!, '.c-top-bar__wrap')
  .then(({ height }) => {
    heightR.value = height || 0
  })

onMounted(handleInit)
</script>

<template>
<view :class="classC" :style="(styles as any)">
  <view
    :class="['c-top-bar__wrap', { 'c-top-bar__fixed': !noFixedC }]"
    :style="wrapViewStyle"
  >
    <slot />
  </view>
</view>
</template>

<style lang="scss" scoped>
.c-top-bar {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  box-sizing: border-box;
  flex-direction: column;
  align-items: stretch;

  &__ {
    &wrap {
      /* #ifndef APP-NVUE */
      display: flex;
      /* #endif */

      box-sizing: border-box;
      flex-direction: column;
      align-items: stretch;
      background-color: #fff;
    }

    &fixed {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      margin: auto;
    }
  }
}
</style>
