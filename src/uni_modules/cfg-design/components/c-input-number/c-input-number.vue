<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { InputNumberProps } from './types.d'
import { computed, inject, ref, nextTick, watch } from 'vue'
import { getPropsBoolean, omitProps, mergeProps } from '../../utils'
import { useFontSizes, useColors, useRadius, getSize, getSizes, toCssUnit } from '../../styles'
import CInput from '../c-input/c-input.vue'
import {
  formInjectionKeyDisabled,
} from '../c-form/use'
import {
  formItemInjectionKeySize,
  formItemInjectionKeyDisabled,
} from '../c-form-item/use'
import { useConfigs } from './use'

interface Props {
  props?: InputNumberProps
  cClass?: InputNumberProps['cClass']
  cStyle?: InputNumberProps['cStyle']
  /**
   * 配置名。使用 `useInputNumberConfigs()` 查看配置数据。使用 `setInputNumberConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: InputNumberProps['c']
  /**
   * 输入框的内容。
   * 默认： `undefined`
   */
  value?: InputNumberProps['value']
  /**
   * 最小值。
   * 默认： `undefined`
   */
  min?: InputNumberProps['min']
  /**
   * 最大值。
   * 默认： `undefined`
   */
  max?: InputNumberProps['max']
  /**
   * 每次改变步数。
   * 默认： `undefined`
   */
  step?: InputNumberProps['step']
  /**
   * 颜色。 useColors() 可以查看配置数据。使用 setColors() 进行配置。
   * 默认： undefined
   */
  color?: InputNumberProps['color']
  /**
   * 字体的大小。
   * 默认： `undefined`
   */
  size?: InputNumberProps['size']
  /**
   * c-input props 。
   * 默认： `undefined`
   */
  inputProps?: InputNumberProps['inputProps']
  /**
   * 详情查看 c-button props
   * 默认： `undefined`
   */
  plusButtonProps?: InputNumberProps['plusButtonProps']
  /**
   * 详情查看 c-button props
   * 默认： `undefined`
   */
  minusButtonProps?: InputNumberProps['minusButtonProps']
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: InputNumberProps['disabled']
  /**
   * 圆角值。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
   * 默认： `undefined`
   */
  radius?: InputNumberProps['radius']
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: InputNumberProps['round']
}

interface Emits {
  (e: 'update:value', v: number): void
  (e: 'plus', v: number): void
  (e: 'minus', v: number): void
}

const formDisabled = inject(formInjectionKeyDisabled, ref(false))
const formItemSize = inject(formItemInjectionKeySize, ref(''))
const formItemDisabled = inject(formItemInjectionKeyDisabled, ref(false))

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const fontSizes = useFontSizes()
const colors = useColors()
const radiuses = useRadius()
const configs = useConfigs()

const inputRef = ref<InstanceType<typeof CInput>>()

const valueC = computed(() => props.value || 0)
const inputValue = ref(valueC.value + '')

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
const stepC = computed(() => propsC.value.step || 1)
const colorC = computed<CSSProperties['color']>(() => propsC.value.color || '#f2f2f2')
const textColorC = computed(() => {
  const { color } = propsC.value
  return !!color && !!colors.value[color] ? '#fff' : colors.value.main
})
const size1 = computed(() => getSize(fontSizes.value, propsC.value.size))
const sizeC = computed<string>(() => size1.value || formItemSize.value || toCssUnit(fontSizes.value.m))
const disabled1 = computed(() => getPropsBoolean(propsC.value.disabled))
const disabledC = computed<boolean>(() => disabled1.value || formDisabled.value || formItemDisabled.value || false)
const radius1 = computed(() => propsC.value.radius !== undefined ? propsC.value.radius : 's')
const radius2 = computed(() => getSizes(radiuses.value, radius1.value))
const roundC = computed(() => getPropsBoolean(propsC.value.round))
const radiusC = computed(() => roundC.value ? '9999px' : radius2.value)
const minusDisable = computed(() => {
  const { min } = propsC.value
  return min !== undefined && valueC.value <= min
})
const plusDisable = computed(() => {
  const { max } = propsC.value
  return max !== undefined && valueC.value >= max
})
const buttonProps = computed<Props['plusButtonProps']>(() => ({
  radius: 0,
  size: sizeC.value,
  color: colorC.value,
  textColor: textColorC.value,
}))

const style1 = computed<CSSProperties[]>(() => [{
  borderRadius: radiusC.value
}])
const styleC = computed(() => mergeProps({ x: [style1.value] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: ['c-input-number'] }, { x: propsC.value.cClass }).x)

const inputStyle = computed<CSSProperties>(() => ({
  width: `calc(${sizeC.value} * 4)`,
  margin: '0 4rpx',
}))
const inputPropsC = computed(() => mergeProps({
  radius: 0,
  inputAlign: 'center',
  size: sizeC.value,
  bgColor: colorC.value,
  disabled: disabledC.value,
  cStyle: [inputStyle.value],
  placeholder: ' ',
}, propsC.value.inputProps))

const handleInfiniteSeries = (v: number) => {
  let str = v + ''
  if (!/\./.test(str)) return v

  let symbol = ''
  if (str[0] === '-') {
    str = str.replace('-', '')
    symbol = '-'
  }

  const [p, d] = str.split('.')
  let d2 = Math.round(Number(d.replace(/(.{5})$/, '.$1'))) + '00000'
  let p2 = Number(p)
  if (d2.length - d.length === 1) {
    ++p2
    d2 = (d2 + '').replace(/^./, '')
  }

  return Number(symbol + p2 + '.' + d2)
}

const handleValue = (v?: number) => {
  if (v === undefined) return 0

  const { min, max } = propsC.value
  if (min !== undefined && v < min) {
    return min
  }
  if (max !== undefined && v > max) {
    return max
  }

  return handleInfiniteSeries(v)
}

const updateValue = (v: number, type?: 'plus' | 'minus') => {
  const uVal = handleValue(v)
  if (props.value !== uVal) {
    emits('update:value', uVal)
    if (type) {
      emits(type as 'plus', uVal)
      return
    }
  }

  if (uVal != v) {
    inputValue.value = ''
    nextTick(() => {
      inputValue.value = uVal + ''
    })
  } else {
    inputValue.value = uVal + ''
  }
}

const subtract = () => {
  const value = valueC.value - stepC.value
  updateValue(value, 'minus')
}

const add = () => {
  const value = valueC.value + stepC.value
  updateValue(value, 'plus')
}

const onUpdateValue = (v?: string) => v && updateValue(Number(v))

const onInputBlur = ({ detail }: { detail: { value: string }}) => updateValue(Number(detail.value) || 0)

watch(() => valueC.value, (v) => updateValue(v))

defineExpose({ inputRef })
</script>

<template>
<view :class="classC" :style="(styleC as any)">
  <c-button
    :props="{
      icon: 'subtract-line',
      ...buttonProps,
      ...propsC.minusButtonProps
    }"
    :disabled="disabledC || minusDisable"
    @click="subtract"
  />
  <c-input
    ref="inputRef"
    :props="inputPropsC"
    :value="inputValue"
    type="number"
    @update:value="onUpdateValue"
    @blur="onInputBlur"
  />
  <c-button
    :props="{
      icon: 'add-line',
      ...buttonProps,
      ...propsC.plusButtonProps
    }"
    :disabled="disabledC || plusDisable"
    @click="add"
  />
</view>
</template>

<style lang="scss" scoped>
.c-input-number {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  box-sizing: border-box;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
}
</style>
