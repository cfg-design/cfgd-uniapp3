<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { RowProps } from './types.d'
import { computed, provide, getCurrentInstance, onMounted, ref } from 'vue'
import { is } from 'ramda'
import { toCssUnit } from '../../styles'
import { getPropsBoolean, omitProps, mergeProps, getRect } from '../../utils'
import {
  useConfigs,
  rowInjectionKeyGutter,
  rowInjectionKeyCols,
  rowInjectionKeyWidth
} from './use'

interface Props {
  props?: RowProps
  cClase?: RowProps['cClass']
  cStyle?: RowProps['cStyle']
  /**
   * 配置名。使用 `useRowConfigs()` 查看配置数据。使用 `setRowConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: RowProps['c']
  /**
   * 显示的栅格数量。
   * 默认： `undefined`
   */
  cols?: RowProps['cols']
  /**
   * 栅格间隔。
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
   * 是否垂直布局。
   * 默认： `undefined`
   */
  vertical?: RowProps['vertical']
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const configs = useConfigs()

const widthR = ref(0)

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
const verticalC = computed(() => getPropsBoolean(propsC.value.vertical))
const gutterC = computed<[string, string]>(() => {
  let { gutter } = propsC.value
  if (is(Array, gutter)) {
    gutter = gutter.join(' ')
  }
  const res = toCssUnit(gutter).split(' ')
  return [res[0], res[1] || res[0]]
})
const margin = computed(() => {
  let [top, right] = gutterC.value
  top = top ? `calc(-${top} * 0.5)` : '0'
  right = right ? `calc(-${right} * 0.5)` : '0'
  return `${top} ${right}`
})
const colsC = computed(() => Number(propsC.value.cols) || 12)

const style = computed(() => {
  const result: CSSProperties = {}
  const { align, justify } = propsC.value

  if (align) {
    result.alignItems = align
  }

  if (justify) {
    result.justifyContent = justify
  }

  if (margin.value !== '0 0') {
    result.margin = margin.value
  }

  if (verticalC.value) {
    result.flexDirection = 'column'
  }

  return result
})
const styles = computed(() => mergeProps({ x: [style.value] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: ['c-row'] }, { x: propsC.value.cClass }).x)

onMounted(() => {
  getRect(getCurrentInstance()!, '.c-row').then(({ width }) => {
    widthR.value = width || 0
  })
})

provide(rowInjectionKeyGutter, gutterC)
provide(rowInjectionKeyCols, colsC)
provide(rowInjectionKeyWidth, widthR)
</script>

<template>
<view :class="classC" :style="(styles as any)"><slot /></view>
</template>

<style lang="scss" scoped>
.c-row {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 1;
  overflow: hidden;
}
</style>
