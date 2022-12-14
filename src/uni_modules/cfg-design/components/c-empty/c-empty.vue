<script setup lang="ts">
import type { EmptyProps } from './types.d'
import { computed } from 'vue'
import { omitProps, mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  props?: EmptyProps
  cClass?: EmptyProps['cClass']
  cStyle?: EmptyProps['cStyle']
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: EmptyProps['c']
  /**
   * 图标名； icon 、 image 二选一。
   * 默认： `undefined`
   */
  icon?: EmptyProps['icon']
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  iconProps?: EmptyProps['iconProps']
  /**
   * 图片路径； icon 、 image 二选一。
   * 默认： `undefined`
   */
  image?: EmptyProps['image']
  /**
   * [ImageProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/image.html#api) 。
   * 默认： `undefined`
   */
  imageProps?: EmptyProps['imageProps']
  /**
   * 文字。
   * 默认： `undefined`
   */
  text?: EmptyProps['text']
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  textProps?: EmptyProps['textProps']
  /**
   * [ButtonProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/button.html#props) 。 。
   * 默认： `undefined`
   */
  buttonProps?: EmptyProps['buttonProps']
}

interface Emits {
  (e: 'click:button', payload: MouseEvent): void
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const configs = useConfigs()

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
const styleC = computed(() => mergeProps({ x: [] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: ['c-empty'] }, { x: propsC.value.cClass }).x)
const textPropsC = computed(() => mergeProps({
  color: 'secondary',
  cClass: ['c-empty__text'],
  cStyle: [{ marginTop: '20rpx' }]
}, propsC.value.textProps))
const buttonPropsC = computed(() => mergeProps({
  cClass: ['c-empty__button'],
  cStyle: [{ marginTop: '20rpx' }]
}, propsC.value.buttonProps))

const onButtonClick = (e: MouseEvent) => emits('click:button', e)
</script>

<template>
<view :class="classC" :style="(styleC as any)">
  <c-image v-if="propsC.image" :props="{ src: propsC.image, width: 100, height: 100, ...propsC.imageProps }" />
  <c-icon v-else :props="{ name: propsC.icon || 'empty-data', color: 'secondary', size: 100, ...propsC.iconProps }" />
  <c-text :props="textPropsC" :text="propsC.text || '数据为空'" />
  <c-button v-if="propsC.buttonProps?.text" :props="buttonPropsC" @click="onButtonClick" />
  <slot />
</view>
</template>

<style lang="scss" scoped>
.c-empty {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30rpx;
}
</style>
