<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { ImageProps } from './types.d'
import { computed, ref, watch } from 'vue'
import { useRadius, getSizes, toCssUnit } from '../../styles'
import { getPropsBoolean, mergeProps, omitProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  props?: ImageProps
  cClass?: ImageProps['cClass']
  cStyle?: ImageProps['cStyle']
  imageClass?: ImageProps['imageClass']
  imageStyle?: ImageProps['imageStyle']
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: ImageProps['c']
  /**
   * 图片资源地址
   */
  src?: ImageProps['src']
  /**
   * 图片裁剪、缩放的模式
   */
  mode?: ImageProps['mode']
  /**
   * 图片懒加载。只针对page与scroll-view下的image有效。
   * 微信小程序、百度小程序、字节跳动小程序、飞书小程序
   */
  lazyLoad?: ImageProps['lazyLoad']
  /**
   * 图片显示动画效果。
   * 仅App-nvue 2.3.4+ Android有效
   */
  fadeShow?: ImageProps['fadeShow']
  /**
   * 在系统不支持webp的情况下是否单独启用webp。默认false，只支持网络资源。webp支持详见下面说明。
   * 微信小程序2.9.0
   */
  webp?: ImageProps['webp']
  /**
   * 开启长按图片显示识别小程序码菜单。
   * 微信小程序2.7.0
   */
  showMenuByLongpress?: ImageProps['showMenuByLongpress']
  /**
   * 是否能拖动图片。
   * H5 3.1.1+、App（iOS15+）
   */
  draggable?: ImageProps['draggable']
  /**
   * 图片宽度。
   * 默认： `undefined`
   */
  width?: ImageProps['width']
  /**
   * 图片高度。
   * 默认： `undefined`
   */
  height?: ImageProps['height']
  /**
   * 圆角值，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/radiuses.html) 。
   * 默认： `undefined`
   */
  radius?: ImageProps['radius']
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: ImageProps['round']
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。 `src` 为空时，显示 `icon` 图标。
   * 默认： `undefined`
   */
  iconProps?: ImageProps['iconProps']
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。 加载图片失败时，显示 `icon` 图标。
   * 默认： `undefined`
   */
  errorProps?: ImageProps['errorProps']
  /**
   * [SpinProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/spin.html#props) 。
   * 默认： `undefined`
   */
  spinProps?: ImageProps['spinProps']
  /**
   * 不显示 spin 加载
   * 默认： `undefined`
   */
  noSpin?: ImageProps['noSpin']
}

interface Emits {
  (e: 'error', event: Event): void
  (e: 'load', event: Event): void
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const configs = useConfigs()
const radiuses = useRadius()

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))

const loading = ref(!!propsC.value.src)
const isErr = ref(false)

const widthC = computed(() => toCssUnit(propsC.value.width))
const heightC = computed(() => toCssUnit(propsC.value.height))
const iconSize = computed(() => widthC.value ? `calc(${widthC.value} * 0.618)` : 'xl')
const radius1 = computed(() => propsC.value.radius !== undefined ? propsC.value.radius : 'm')
const radius2 = computed(() => getSizes(radiuses.value, radius1.value))
const roundC = computed(() => getPropsBoolean(propsC.value.round))
const radiusC = computed(() => roundC.value ? '9999px' : radius2.value)
const sizeStyle = computed<CSSProperties>(() => ({ width: widthC.value, height: heightC.value }))
const spinVisible = computed(() => !getPropsBoolean(propsC.value.noSpin) && loading.value)
const imageStyles = computed(() => loading.value ? { width: '0', height: '0' } : mergeProps({ x: [sizeStyle.value] }, { x: propsC.value.imageStyle }).x)
const imageClass = computed(() => mergeProps({ x: ['c-image__image'] }, { x: propsC.value.imageClass }).x)

const styleC = computed(() => {
  const style: CSSProperties = {
    ...sizeStyle.value,
    borderRadius: radiusC.value
  }

  return mergeProps({ x: [style] }, { x: propsC.value.cStyle }).x
})

const classC = computed(() => mergeProps({ x: ['c-image'] }, { x: propsC.value.cClass }).x)

const onError = (e: Event) => {
  isErr.value = true
  loading.value = false
  emits('error', e)
}

const onLoad = (e: Event) => {
  loading.value = false
  emits('load', e)
}

watch(() => propsC.value.src, (val, old) => {
  isErr.value = false
  loading.value = !!val && val !== old
})

// todo: h5 延时加载功能
</script>

<template>
<view :class="classC" :style="(styleC as any)">
  <c-icon v-if="isErr" :props="{ name: 'error-warning-fill', color: 'placeholder', size: iconSize, ...propsC.errorProps }" />
  <image
    v-else-if="propsC.src"
    :class="imageClass"
    :style="(imageStyles as any)"
    :src="propsC.src"
    :mode="propsC.mode"
    :lazy-load="getPropsBoolean(propsC.lazyLoad)"
    :fade-show="propsC.fadeShow !== false"
    :webp="getPropsBoolean(propsC.webp)"
    :show-menu-by-longpress="getPropsBoolean(propsC.showMenuByLongpress)"
    :draggable="propsC.draggable !== false"
    @error="onError"
    @load="onLoad"
  />
  <c-icon v-else :props="{ name: 'image-2-fill', color: 'placeholder', size: iconSize, ...propsC.iconProps }" />
  <c-spin v-if="spinVisible" :props="{ size: iconSize, color: 'placeholder', ...propsC.spinProps }" />
</view>
</template>

<style lang="scss" scoped>
.c-image {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>
