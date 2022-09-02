<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { ProgressProps } from './types.d'
import { computed } from 'vue'
import { useFontSizes, getSize, toCssUnit } from '../../styles'
import { getPropsBoolean, omitProps, mergeProps } from '../../utils'
import { useConfigs } from './use'
import { useConfigs as useTextConfig } from '../c-text/use'

interface Props {
  props?: ProgressProps
  cClase?: ProgressProps['cClass']
  cStyle?: ProgressProps['cStyle']
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

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
const percentC = computed(() => (propsC.value.percent || 0) + '%')
const showTextC = computed(() => getPropsBoolean(propsC.value.showText))
const sizeC = computed(() => {
  const { size, textProps } = propsC.value

  if (size) return getSize(fontSizes.value, size)

  if (!showTextC.value) return toCssUnit(8)

  const textSize = textProps?.size || textConfig.value[textProps?.c || 'default'].size || 'm'

  return getSize(fontSizes.value, textSize).replace(/\d+/, (v) => Math.floor(Number(v) * 1.25) + '')
})
const textSizeC = computed(() => {
  const { size, textProps } = propsC.value

  if (!showTextC.value || textProps?.size) return textProps?.size

  return size ? `calc(${sizeC.value} * 0.8)` : undefined
})

const styleC = computed(() => mergeProps({ x: [] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: ['c-progress'] }, { x: propsC.value.cClass }).x)
const absoluteStyle = computed<CSSProperties>(() => ({
  position: 'absolute',
  top: '0',
  left: '0',
  transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
}))
const progresLineProps = computed(() => mergeProps({
  color: 'primary',
  length: percentC.value,
  width: sizeC.value,
  round: propsC.value.round,
  cStyle: [absoluteStyle.value]
}, propsC.value.activeProps))
const textPropsC = computed(() => mergeProps({
  color: '#fff',
  size: textSizeC.value,
  cStyle: [
    absoluteStyle.value,
    {
      padding: `0 calc(${sizeC.value} * 0.3)`,
      width: percentC.value,
      lineHeight: sizeC.value,
      flexDirection: 'column',
      alignItems: 'stretch',
      textAlign: 'end',
      whiteSpace: 'nowrap'
    }
  ]
}, propsC.value.textProps))
</script>

<template>
<view :class="classC" :style="(styleC as any)">
  <c-line style="width:100%" :props="{ length: '100%', width: sizeC, round: propsC.round, ...propsC.bgProps }" />
  <c-line :props="progresLineProps" />
  <c-text v-if="showTextC" :props="textPropsC"><slot>{{ percentC }}</slot></c-text>
</view>
</template>

<style lang="scss" scoped>
.c-progress {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  box-sizing: border-box;
  position: relative;
}
</style>
