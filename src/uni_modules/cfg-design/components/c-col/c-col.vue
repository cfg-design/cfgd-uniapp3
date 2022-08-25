<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { ColProps } from './types.d'
import { computed, inject, ref } from 'vue'
import { mergeProps } from '../../utils'
import { rowInjectionKeyCols, rowInjectionKeyGutter } from '../c-row/use'
import { useConfigs } from './use'

interface Props {
  /**
   * 配置名。使用 `useColConfigs()` 查看配置数据。使用 `setColConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: ColProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: ColProps['viewBind']
  /**
   * 栅格占据的列数。
   * 默认： `undefined`
   */
  span?: ColProps['span']
  /**
   * 当前组件对齐方式（相对 flex 父级）。
   * 默认： `undefined`
   */
  alignSelf?: ColProps['alignSelf']
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const configs = useConfigs()
const gutterS = inject(rowInjectionKeyGutter, ref(['']))
const cols = inject(rowInjectionKeyCols, ref(12))

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
const padding = computed(() => {
  let [top, right] = gutterS.value
  top = top ? `calc(${top} * 0.5)` : '0'
  right = right ? `calc(${right} * 0.5)` : '0'
  return `${top} ${right}`
})

const styles = computed<CSSProperties[]>(() => {
  const result: CSSProperties = {
    alignSelf: propsC.value.alignSelf
  }

  if (padding.value) {
    result.padding = padding.value
  }

  if (propsC.value.span === 'auto') {
    return [result]
  }

  const span = Number(propsC.value.span)

  if (span === 0) {
    result.display = 'none'

    return [result]
  }

  if (!span) {
    result.flexGrow = 1
  } else if (cols.value) {
    result.width = span / cols.value * 100 + '%'
  }

  return [result]
})
</script>

<template>
<view class="c-col" v-bind="(propsC.viewBind as any)" :style="(styles as any)">
  <slot></slot>
</view>
</template>

<style lang="scss">
.c-col {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  flex-direction: column;
  box-sizing: border-box;
}
</style>
