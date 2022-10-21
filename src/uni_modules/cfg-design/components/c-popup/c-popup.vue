<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { PopupProps } from './types.d'
import { computed, ref, watch } from 'vue'
import { getFixedZIndex, useRadius, getSizes } from '../../styles'
import { getPropsBoolean, omitProps, mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  props?: PopupProps
  cClass?: PopupProps['cClass']
  cStyle?: PopupProps['cStyle']
  maskClass?: PopupProps['maskClass']
  maskStyle?: PopupProps['maskStyle']
  contentClass?: PopupProps['contentClass']
  contentStyle?: PopupProps['contentStyle']
  closeWrapClass?: PopupProps['closeWrapClass']
  closeWrapStyle?: PopupProps['closeWrapStyle']
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: PopupProps['c']
  /**
   * 是否展示弹窗 。
   * 默认： `undefined`
   */
  visible?: PopupProps['visible']
  /**
   * 展示的位置 。
   * 默认： `undefined`
   */
  placement?: PopupProps['placement']
  /**
   * 弹窗的 z-index 。
   * 默认： `undefined`
   */
  zIndex?: PopupProps['zIndex']
  /**
   * 圆角值，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/radiuses.html) 。
   * 默认： `undefined`
   */
  radius?: PopupProps['radius']
  /**
   * 是否显示关闭图标 。
   * 默认： `undefined`
   */
  closable?: PopupProps['closable']
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  closeIconProps?: PopupProps['closeIconProps']
  /**
   * 是否不显示遮罩。
   * 默认： `undefined`
   */
  noMask?: PopupProps['noMask']
  /**
   * 点击遮罩时是否执行关闭。
   * 默认： `undefined`
   */
  maskClosable?: PopupProps['maskClosable']
  /**
   * 是否留出底部安全距离。
   * 默认： `undefined`
   */
  safeAreaInsetBottom?: PopupProps['safeAreaInsetBottom']
  /**
   * 显示顶部状态栏高度；在 style 使用 padding-top 占位。
   * 默认： `undefined`
   */
  statusBar?: PopupProps['statusBar']
}

interface Emits {
  (e: 'update:visible', v: Props['visible']): void
  (e: 'show'): void
  (e: 'close'): void
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const configs = useConfigs()
const radiuses = useRadius()

const visibleR = ref<boolean>(false)
const styleR = ref<CSSProperties>({})
const maskStyleR = ref<CSSProperties>({})
const contentStyleR = ref<CSSProperties>({})
const closeWrapStyleR = ref<CSSProperties>({})
const statusBarHeight = ref('')

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
const placementC = computed(() => propsC.value.placement !== undefined ? propsC.value.placement : 'left')
const visibleC = computed(() => getPropsBoolean(propsC.value.visible))
const closableC = computed(() => getPropsBoolean(propsC.value.closable))
const noMaskC = computed(() => getPropsBoolean(propsC.value.noMask))
const maskClosableC = computed(() => getPropsBoolean(propsC.value.maskClosable))
const safeAreaInsetBottomC = computed(() => getPropsBoolean(propsC.value.safeAreaInsetBottom))
const statusBarC = computed(() => getPropsBoolean(propsC.value.statusBar))
const radius1 = computed(() => propsC.value.radius !== undefined ? propsC.value.radius : 'm')
const radius = computed(() => {
  const items = getSizes(radiuses.value, radius1.value).split(' ')
  items[1] = items[1] || items[0]
  items[2] = items[2] || items[0]
  items[3] = items[3] || items[1]
  return items.join(' ')
})

const style1 = computed(() => {
  const style: CSSProperties = {}

  switch (placementC.value) {
    case 'right':
      style.alignItems = 'flex-end'
      break
    case 'bottom':
      style.justifyContent = 'flex-end'
      break
    case 'center':
      style.alignItems = 'center'
      style.justifyContent = 'center'
      break
  }

  return mergeProps({ x: [style] }, { x: propsC.value.cStyle }).x
})

const styleC = computed(() => mergeProps({ x: style1.value }, { x: [styleR.value] }).x)
const classC = computed(() => mergeProps({ x: ['c-popup', { 'c-popup__visible': visibleR.value }] }, { x: propsC.value.cClass }).x)

const maskStyleC = computed(() => mergeProps({ x: propsC.value.maskStyle }, { x: [maskStyleR.value] }).x)
const maskClassC = computed(() => mergeProps({ x: ['c-popup__mask'] }, { x: propsC.value.maskClass }).x)

const contentStyle1 = computed(() => {
  const style: CSSProperties = {}

  switch (placementC.value) {
    case 'top':
      style.width = '100%'
      style.transform = 'translateY(-100%)'
      style.borderRadius = radius.value.replace(/^(.+) (.+) (.+) (.+)/, '0 0 $3 $4')
      break
    case 'bottom':
      style.width = '100%'
      style.transform = 'translateY(100%)'
      style.borderRadius = radius.value.replace(/^(.+) (.+) (.+) (.+)/, '$1 $2 0 0')
      break
    case 'right':
      style.height = '100%'
      style.transform = 'translateX(100%)'
      style.borderRadius = radius.value.replace(/^(.+) (.+) (.+) (.+)/, '$1 0 0 $4')
      break
    case 'left':
      style.height = '100%'
      style.transform = 'translateX(-100%)'
      style.borderRadius = radius.value.replace(/^(.+) (.+) (.+) (.+)/, '0 $2 $3 0')
      break
    case 'center':
      style.transform = 'scale(1.2)'
      style.borderRadius = radius.value
      break
  }

  return mergeProps({ x: [style] }, { x: propsC.value.contentStyle }).x
})
const contentStyleC = computed(() => mergeProps({ x: contentStyle1.value }, { x: [contentStyleR.value] }).x)
const contentClassC = computed(() => mergeProps({ x: ['c-popup__content'] }, { x: propsC.value.contentClass }).x)

const closeWrapStyleC = computed(() => mergeProps({ x: propsC.value.closeWrapStyle }, { x: [closeWrapStyleR.value] }).x)
const closeWrapClassC = computed(() => mergeProps({ x: ['c-popup__close-wrap'] }, { x: propsC.value.closeWrapClass }).x)

statusBarC.value && uni.getSystemInfo({
  success(res) {
    statusBarHeight.value = res.statusBarHeight + 'px'
  }
})

const show = () => {
  if (visibleR.value) return undefined

  let { zIndex } = propsC.value
  zIndex = zIndex !== undefined ? zIndex : getFixedZIndex()
  visibleR.value = true

  styleR.value.zIndex = zIndex
  closeWrapStyleR.value.zIndex = zIndex

  maskStyleR.value = {
    zIndex,
    opacity: 1
  }
  contentStyleR.value = {
    zIndex,
    opacity: 1,
    transform: placementC.value === 'center' ? 'scale(1)' : 'translate(0, 0)'
  }

  emits('show')
}

const hide = () => {
  if (!visibleR.value) return undefined

  maskStyleR.value = {}
  contentStyleR.value = {}
  contentStyleR.value = {}

  setTimeout(() => {
    visibleR.value = false
    emits('close')
  }, 350)
}

visibleC.value && show()

watch(() => visibleC.value, (val) => val !== visibleR.value && (val ? show() : hide()))
watch(() => visibleR.value, (val) => emits('update:visible', val))

defineExpose({ show, hide })
</script>

<template>
<view :class="classC" :style="(styleC as any)">
  <view v-if="!noMaskC" :class="maskClassC" :style="(maskStyleC as any)" @click="maskClosableC && hide()" />
  <view v-if="statusBarC" :style="{ height: statusBarHeight }" />
  <view :class="contentClassC" :style="(contentStyleC as any)">
    <slot />
    <view v-if="closableC" :class="closeWrapClassC" :style="(closeWrapStyleC as any)" @click="hide">
      <c-icon :props="{ name: 'close-line', size: '3xl', color: 'secondary', ...propsC.closeIconProps }" />
    </view>
    <view v-if="safeAreaInsetBottomC" style="height: env(safe-area-inset-bottom)" />
  </view>
</view>
</template>

<style lang="scss" scoped>
.c-popup {
  position: fixed;
  flex-direction: column;
  align-items: flex-start;
  left: 200vw;
  top: 200vh;

  &__visible {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &,
  &__mask,
  &__content {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */

    box-sizing: border-box;
  }

  &,
  &__mask {
    margin: auto;
    width: 100vw;
    height: 100vh;
  }

  &__mask {
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  &__content {
    position: relative;
    flex-direction: column;
    align-items: stretch;
    background-color: #fff;
    transform: translate3d(0, 0, 0), scale(1);
    opacity: 0;
    transition: transform 0.35s ease, opacity 0.35s ease;
  }

  &__close-wrap {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20rpx;
  }
}
</style>
