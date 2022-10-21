<script setup lang="ts">
import type { LoadMoreProps } from './types.d'
import { computed } from 'vue'
import { getPropsBoolean, omitProps, mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  props?: LoadMoreProps
  cClass?: LoadMoreProps['cClass']
  cStyle?: LoadMoreProps['cStyle']
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: LoadMoreProps['c']
  /**
   * 是否加载中。
   * 默认： `undefined`
   */
  loading?: LoadMoreProps['loading']
  /**
   * 是否有更多。
   * 默认： `undefined`
   */
  noMore?: LoadMoreProps['noMore']
  /**
   * 默认文案。
   * 默认： `undefined`
   */
  text?: LoadMoreProps['text']
  /**
   * 加载中的文案。
   * 默认： `undefined`
   */
  loadingText?: LoadMoreProps['loadingText']
  /**
   * 没有更多的文案。
   * 默认： `undefined`
   */
  noMoreText?: LoadMoreProps['noMoreText']
  /**
   * c-text props。
   * 默认： `undefined`
   */
  textProps?: LoadMoreProps['textProps']
  /**
   * c-line props。
   * 默认： `undefined`
   */
  lineProps?: LoadMoreProps['lineProps']
  /**
   * c-spin props。
   * 默认： `undefined`
   */
  spinProps?: LoadMoreProps['spinProps']
}

interface Emits {
  (e: 'load-more'): void
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const configs = useConfigs()

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
const loadingC = computed(() => getPropsBoolean(propsC.value.loading))
const noMore = computed(() => getPropsBoolean(propsC.value.noMore))
const textC = computed(() => loadingC.value
  ? propsC.value.loadingText || '正在加载'
  : noMore.value
  ? propsC.value.noMoreText || '没有更多了'
  : propsC.value.text || '加载更多'
)
const linePropsC = computed(() => mergeProps({ length: '160', color: 'placeholder', cStyle: [{ flexShrink: 1, margin: '0 30rpx' }] }, propsC.value.lineProps))
const textPropsC = computed(() => mergeProps({ color: 'tertiary', cStyle: [{ whiteSpace: 'nowrap' }] }, propsC.value.textProps))
const spinPropsC = computed(() => mergeProps({ color: 'tertiary', size: 'l', cStyle: [{ marginRight: '20rpx' }] }, propsC.value.spinProps))
const styleC = computed(() => mergeProps({ x: [] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: ['c-load-more'] }, { x: propsC.value.cClass }).x)

const onClick = () => !loadingC.value && !noMore.value && emits('load-more')
</script>

<template>
<view :class="classC" :style="(styleC as any)" @click="onClick">
  <c-line :props="linePropsC" />
  <c-spin v-if="loadingC" :props="spinPropsC" />
  <c-text :props="textPropsC" :text="textC" />
  <c-line :props="linePropsC" />
</view>
</template>

<style lang="scss" scoped>
.c-load-more {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 30rpx;
}
</style>
