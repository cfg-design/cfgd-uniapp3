<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { ColProps } from './types.d'
import { computed, inject, ref } from 'vue'
import { omitProps, mergeProps } from '../../utils'
import { rowInjectionKeyCols, rowInjectionKeyGutter, rowInjectionKeyWidth } from '../c-row/use'
import { useConfigs } from './use'

interface Props {
  props?: ColProps
  cClase?: ColProps['cClass']
  cStyle?: ColProps['cStyle']
  /**
   * 配置名。使用 `useColConfigs()` 查看配置数据。使用 `setColConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: ColProps['c']
  /**
   * 栅格占据的列数。
   * 默认： `undefined`
   */
  span?: ColProps['span']
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const configs = useConfigs()
const gutterS = inject(rowInjectionKeyGutter, ref(['']))
const cols = inject(rowInjectionKeyCols, ref(12))
const rowWidth = inject(rowInjectionKeyWidth, ref(0))

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
const padding = computed(() => {
  let [top, right] = gutterS.value
  top = top ? `calc(${top} * 0.5)` : '0'
  right = right ? `calc(${right} * 0.5)` : '0'
  return `${top} ${right}`
})

const style = computed(() => {
  const result: CSSProperties = {}

  if (padding.value !== '0 0') {
    result.padding = padding.value
  }

  const spanNum = Number(propsC.value.span)

  if (spanNum && cols.value) {
    result.width = spanNum / cols.value * rowWidth.value + 'px'
  }

  return result
})
const styleC = computed(() => mergeProps({ x: [style.value] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: ['c-col'] }, { x: propsC.value.cClass }).x)
</script>

<template>
<view v-if="Number(propsC.span) !== 0" :class="classC" :style="(styleC as any)"><slot /></view>
</template>

<style lang="scss" scoped>
.c-col {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  box-sizing: border-box;
  flex-direction: column;
}
</style>
