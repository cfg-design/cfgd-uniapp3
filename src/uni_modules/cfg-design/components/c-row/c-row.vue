<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { RowProps } from './types.d'
import { computed, provide } from 'vue'
import { is } from 'ramda'
import { toCssUnit } from '../../styles'
import { getPropsBoolean, mergeProps } from '../../utils'
import {
  useConfigs,
  rowInjectionKeyGutter,
  rowInjectionKeyCols,
} from './use'

interface Props {
  /**
   * 配置名。使用 `useRowConfigs()` 查看配置数据。使用 `setRowConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: RowProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: RowProps['viewBind']
  /**
   * 显示的栅格数量。
   * 默认： `undefined`
   */
  cols?: RowProps['cols']
  /**
   * 栅格水平间隔。
   * 默认： `undefined`
   */
  gutter?: RowProps['gutter']
  /**
   * 垂直排列方式。
   * 默认： `undefined`
   */
  align?: RowProps['align']
  /**
   * 水平排列方式。
   * 默认： `undefined`
   */
  justify?: RowProps['justify']
  /**
   * 是否超出换行。
   * 默认： `undefined`
   */
  wrap?: RowProps['wrap']
  /**
   * 是否垂直布局。
   * 默认： `undefined`
   */
  vertical?: RowProps['vertical']
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const configs = useConfigs()

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
const wrapC = computed(() => getPropsBoolean(propsC.value.wrap))
const verticalC = computed(() => getPropsBoolean(propsC.value.vertical))
const gutterS = computed<[string, string]>(() => {
  let { gutter } = propsC.value
  if (is(Array, gutter)) {
    gutter = gutter.join(' ')
  }
  const res = toCssUnit(gutter).split(' ')
  return [res[0], res[1] || res[0]]
})
const margin = computed(() => {
  let [top, right] = gutterS.value
  top = top ? `calc(-${top} * 0.5)` : '0'
  right = right ? `calc(-${right} * 0.5)` : '0'
  return `${top} ${right}`
})
const colsC = computed(() => Number(propsC.value.cols))

const styles = computed<CSSProperties[]>(() => {
  const result: CSSProperties = {
    alignItems: propsC.value.align,
    justifyContent: propsC.value.justify,
  }

  if (propsC.value.gutter) {
    result.margin = margin.value
  }

  if (wrapC.value) {
    result.flexWrap = 'wrap'
  }

  if (verticalC.value) {
    result.flexDirection = 'column'
  }

  return [result]
})

provide(rowInjectionKeyGutter, gutterS)
provide(rowInjectionKeyCols, colsC)
</script>

<template>
<view class="c-row" v-bind="(propsC.viewBind as any)" :style="(styles as any)"><slot /></view>
</template>

<style lang="scss">
.c-row {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  flex-direction: row;
  flex-grow: 1;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
