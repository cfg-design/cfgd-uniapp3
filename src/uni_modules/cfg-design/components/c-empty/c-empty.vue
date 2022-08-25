<script setup lang="ts">
import type { EmptyProps } from './types.d'
import { computed } from 'vue'
import { mergeProps } from '../../utils'
import { toCssUnit } from '../../styles'
import { useConfigs } from './use'

interface Props {
  /**
   * 配置名。使用 `useEmptyConfigs()` 查看配置数据。使用 `setEmptyConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: EmptyProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: EmptyProps['viewBind']
  /**
   * 图标名； icon 、 image 二选一。
   * 默认： `undefined`
   */
  icon?: EmptyProps['icon']
  /**
   * c-icon props 。
   * 默认： `undefined`
   */
  iconProps?: EmptyProps['iconProps']
  /**
   * 图片路径； icon 、 image 二选一。
   * 默认： `undefined`
   */
  image?: EmptyProps['image']
  /**
   * c-image props 。
   * 默认： `undefined`
   */
  imageProps?: EmptyProps['imageProps']
  /**
   * 文字。
   * 默认： `undefined`
   */
  text?: EmptyProps['text']
  /**
   * c-text props 。
   * 默认： `undefined`
   */
  textProps?: EmptyProps['textProps']
  /**
   * c-button props 。
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

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
const textPropsC = computed(() => mergeProps<Props['textProps']>({ textBind: { style: [{ marginTop: toCssUnit(20) }] } }, propsC.value.textProps))
const buttonPropsC = computed(() => mergeProps<Props['buttonProps']>({ buttonBind: { style: [{ marginTop: toCssUnit(20) }] } }, propsC.value.buttonProps))

const onButtonClick = (e: MouseEvent) => emits('click:button', e)
</script>

<template>
<view class="c-empty" v-bind="(propsC.viewBind as any)">
  <c-image v-if="propsC.image" :src="propsC.image" width="100" height="100" v-bind="propsC.imageProps" />
  <c-icon v-else-if="propsC.icon" :name="propsC.icon" color="secondary" size="100" v-bind="propsC.iconProps" />
  <c-text color="secondary" v-bind="textPropsC">{{ propsC.text }}</c-text>
  <c-button v-if="propsC.buttonProps?.text" v-bind="buttonPropsC" @click="onButtonClick">{{ propsC.buttonProps.text }}</c-button>
  <slot />
</view>
</template>

<style lang="scss">
.c-empty {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30rpx;
  box-sizing: border-box;
}
</style>
