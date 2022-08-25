<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { LoadMoreProps } from './types.d'
import { computed } from 'vue'
import { useColors, toCssUnit } from '../../styles'
import { getPropsBoolean, mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  /**
   * 配置名。使用 `useLindConfigs()` 查看配置数据。使用 `setLindConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: LoadMoreProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: LoadMoreProps['viewBind']
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

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
const loadingC = computed(() => getPropsBoolean(propsC.value.loading))
const noMore = computed(() => getPropsBoolean(propsC.value.noMore))
const textC = computed(() => loadingC.value ? propsC.value.loadingText : noMore.value ? propsC.value.noMoreText : propsC.value.text)

const onClick = () => !loadingC.value && !noMore.value && emits('load-more')
</script>

<template>
<view class="c-load-more" v-bind="(propsC.viewBind as any)" @click="onClick">
  <c-line v-bind="propsC.lineProps" />
  <c-spin v-if="loadingC" color="main" v-bind="propsC.spinProps" />
  <c-text v-bind="propsC.textProps">{{ textC }}</c-text>
  <c-line v-bind="propsC.lineProps" />
</view>
</template>

<style lang="scss">
.c-load-more {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  align-items: center;
  justify-content: center;
  padding: 30rpx;

  :deep(.c-line) {
    flex-shrink: 1;
    margin: 0 30rpx;
  }

  :deep(.c-spin) {
    margin-right: 20rpx;
  }

  :deep(.c-text) {
    white-space: nowrap;
  }
}
</style>
