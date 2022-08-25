<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { ImageProps } from './types.d'
import { computed, ref, watch } from 'vue'
import { useRadius, getSizes, toCssUnit } from '../../styles'
import { getPropsBoolean, mergeProps, pickNoUndefined } from '../../utils'
import { useConfigs } from './use'

interface Props {
  /**
   * 配置名。使用 `useImageConfigs()` 查看配置数据。使用 `setImageConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: ImageProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: ImageProps['viewBind']
  /**
   * image 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  imageBind?: ImageProps['imageBind']
  /**
   * 图片链接地址。
   * 默认： `undefined`
   */
  src?: ImageProps['src']
  /**
   * 图片裁剪、缩放的模式。详情： https://uniapp.dcloud.io/component/image.html
   * 默认： `undefined`
   */
  mode?: ImageProps['mode']
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
   * 圆角值。 default 配置为 `m`。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
   * 默认： `undefined`
   */
  radius?: ImageProps['radius']
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: ImageProps['round']
  /**
   * 详情查看 c-icon props 。 `src` 为空时，显示 `icon` 图标。 default 配置为 `{ name: 'image-2-fill' }`
   * 默认： `undefined`
   */
  iconProps?: ImageProps['iconProps']
  /**
   * 详情查看 c-icon props 。 加载图片失败时，显示 `icon` 图标。 default 配置为 `{ name: 'error-warning-fill', color: 'tertiary' }`
   * 默认： `undefined`
   */
  errorProps?: ImageProps['errorProps']
  /**
   * 详情查看 c-spin props 。
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

const loading = ref(false)
const isErr = ref(false)


const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
const widthC = computed(() => toCssUnit(propsC.value.width))
const heightC = computed(() => toCssUnit(propsC.value.height))
const iconSize = computed(() => widthC.value ? `calc(${widthC.value} * 0.618)` : 'xl')
const radiusC1 = computed(() => getSizes(radiuses.value, propsC.value.radius))
const roundC = computed(() => getPropsBoolean(propsC.value.round))
const radiusC = computed(() => roundC.value ? '9999px' : radiusC1.value)
const sizeStyle = computed<CSSProperties[]>(() => [{ width: widthC.value, height: heightC.value }])
const viewStyle = computed<CSSProperties[]>(() => [
  ...sizeStyle.value,
  { borderRadius: radiusC.value }
])
const imageBindC = computed<NonNullable<Props['imageBind']>>(() => ({
  ...propsC.value.imageBind,
  ...pickNoUndefined({ src: propsC.value.src, mode: propsC.value.mode })
}))
const spinVisible = computed(() => !getPropsBoolean(propsC.value.noSpin) && loading.value)

const onError = (e: Event) => {
  isErr.value = true
  loading.value = false
  emits('error', e)
}

const onLoad = (e: Event) => {
  loading.value = false
  emits('load', e)
}

watch(() => imageBindC.value.src, () => {
  isErr.value = false
  loading.value = true
})

// todo: h5 延时加载功能
</script>

<template>
<view class="c-image" v-bind="(propsC.viewBind as any)" :style="viewStyle">
  <image
    v-if="imageBindC.src && !isErr"
    v-bind="(imageBindC as any)"
    class="c-image__image"
    :style="!loading ? sizeStyle : undefined"
    @error="onError"
    @load="onLoad"
  />
  <c-icon v-else-if="!imageBindC.src" v-bind="{ size: iconSize, ...propsC.iconProps }" />
  <c-icon v-else v-bind="{ size: iconSize, ...propsC.errorProps }" />
  <c-spin v-if="spinVisible" v-bind="{ iconSize: iconSize, ...propsC.spinProps }" />
</view>
</template>

<style lang="scss">
.c-image {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  &__image {
    width: auto;
    height: auto;
  }

  position: relative;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;

  :deep(.c-spin) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
