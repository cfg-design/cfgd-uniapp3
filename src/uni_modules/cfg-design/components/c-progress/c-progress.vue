<script setup lang="ts">
import type { ProgressProps } from './types.d'
import { computed } from 'vue'
import { useFontSizes, getSize, toCssUnit } from '../../styles'
import { getPropsBoolean, mergeProps } from '../../utils'
import { useConfigs } from './use'
import { useConfigs as useTextConfig } from '../c-text/use'

interface Props {
  /**
   * 配置名。使用 `useProgressConfigs()` 查看配置数据。使用 `setProgressConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: ProgressProps['c']
  /**
   * 百分比0~100。
   * 默认： `undefined`
   */
  percent?: ProgressProps['percent']
  /**
   * 大小。
   * 默认： `undefined`
   */
  size?: ProgressProps['size']
  /**
   * 进度。详情 c-line props 。
   * 默认： `undefined`
   */
  activeProps?: ProgressProps['activeProps']
  /**
   * 背景。详情 c-line props 。
   * 默认： `undefined`
   */
  bgProps?: ProgressProps['bgProps']
  /**
   * 背景。详情 c-text props 。
   * 默认： `undefined`
   */
  textProps?: ProgressProps['textProps']
  /**
   * 是否显示百分比的值。
   * 默认： `undefined`
   */
  showText?: ProgressProps['showText']
  /**
   * 是否显示为圆角。
   * 默认： `undefined`
   */
  round?: ProgressProps['showText']
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const fontSizes = useFontSizes()
const textConfig = useTextConfig()
const configs = useConfigs()

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
const percentC = computed(() => (propsC.value.percent || 0) + '%')
const showTextC = computed(() => getPropsBoolean(propsC.value.showText))
const sizeC = computed(() => {
  const { size, textProps } = propsC.value

  if (size) return getSize(fontSizes.value, size)

  if (!showTextC.value) return toCssUnit(8)

  const textSize = textProps?.size || textConfig.value[textProps?.c || 'default'].size

  return getSize(fontSizes.value, textSize).replace(/\d+/, (v) => Math.floor(Number(v) * 1.25) + '')
})
const textSizeC = computed(() => {
  const { size, textProps } = propsC.value

  if (!showTextC.value || textProps?.size) return textProps?.size

  return size ? `calc(${sizeC.value} * 0.8)` : undefined
})
const textPropsC = computed(() => mergeProps<Props['textProps']>({
  textBind: {
    style: [{
      padding: `0 calc(${sizeC.value} * 0.3)`,
      width: percentC.value,
      lineHeight: sizeC.value
    }]
  }
}, propsC.value.textProps))
</script>

<template>
<view class="c-progress">
  <c-line length="100%" :width="sizeC" :round="round" v-bind="propsC.bgProps" />
  <c-line :length="percentC" :width="sizeC" :round="round" v-bind="propsC.activeProps" />
  <c-text v-if="showTextC" color="#fff" :size="textSizeC" v-bind="textPropsC"><slot>{{ percentC }}</slot></c-text>
</view>
</template>

<style lang="scss">
.c-progress {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  position: relative;

  :deep(.c-text),
  :deep(.c-line:last-of-type) {
    position: absolute;
    top: 0;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  :deep(.c-text) {
    flex-direction: column;
    align-items: stretch;
    text-align: end;
    white-space: nowrap;
  }
}
</style>
