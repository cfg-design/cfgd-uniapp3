<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { ValidationTrigger, FormRule } from '../c-form/types.d'
import type { RadioGroupProps, RadioGroupGetIndex, RadioGroupUpdateValue } from './types.d'
import { computed, provide, inject, ref, watch } from 'vue'
import { getPropsBoolean, omitProps, mergeProps } from '../../utils'
import { toCssUnit } from '../../styles'
import {
  hasTrigger,
  formInjectionKeyRules,
  formInjectionKeyDisabled,
  formInjectionKeyValidateField,
  formInjectionKeyFieldsErrors,
} from '../c-form/use'
import {
  formItemInjectionKeyDisabled,
  formItemInjectionKeyPath,
} from '../c-form-item/use'
import {
  useConfigs,
  radioGroupInjectionKeyDisabled,
  radioGroupInjectionKeyRadio,
  radioGroupInjectionKeyGetIndex,
  radioGroupInjectionKeyUpdateValue,
  radioGroupInjectionKeyValue,
  radioGroupInjectionKeyValidateErrors,
} from './use'

interface Props {
  props?: RadioGroupProps,
  cClase?: RadioGroupProps['cClass']
  cStyle?: RadioGroupProps['cStyle']
  /**
   * 配置名。使用 `useRadioGroupConfigs()` 查看配置数据。使用 `setRadioGroupConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: RadioGroupProps['c']
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: RadioGroupProps['value']
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: RadioGroupProps['disabled']
  /**
   * 排列。
   * 默认： `undefined`
   */
  direction?: RadioGroupProps['direction']
  /**
   * 表单域 value 对象的属性名。
   * 默认： `undefined`
   */
  path?: RadioGroupProps['path']
  /**
   * radio 一些设置，详情查看 radio props 。
   * 默认： `undefined`
   */
  radio?: RadioGroupProps['radio']
  /**
   * RadioProps[]
   */
  items?: RadioGroupProps['items']
}

interface Emits {
  (e: 'update:value', v: Props['value']): void
}

const formRules = inject(formInjectionKeyRules, ref())
const formDisabled = inject(formInjectionKeyDisabled, ref())
const formValidateField = inject(formInjectionKeyValidateField, undefined)
const formItemDisabled = inject(formItemInjectionKeyDisabled, ref())
const formItemPath = inject(formItemInjectionKeyPath, ref())
const formFieldsErrors = inject(formInjectionKeyFieldsErrors, ref())

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const configs = useConfigs()

const valueR = ref<RadioGroupProps['value']>(props.value)

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
const disabledC = computed(() => getPropsBoolean(propsC.value.disabled))
const pathC = computed(() => propsC.value.path || formItemPath.value)
const rule = computed<FormRule | undefined>(() => !pathC.value || !formRules.value ? undefined : formRules.value[pathC.value])
const hasOnChangeValidate = computed(() => hasTrigger(rule.value, 'change'))
const radioC = computed(() => mergeProps({ cStyle: [{ margin: toCssUnit('10 0') }] }, propsC.value.radio))
const validateErrors = computed(() => !pathC.value || !formFieldsErrors.value ? undefined : formFieldsErrors.value[pathC.value])

const style1 = computed<CSSProperties>(() => {
  const style: CSSProperties = {}
  const { direction } = propsC.value
  if (direction) {
    style.flexDirection = direction
  }
  return style
})
const styleC = computed(() => mergeProps({ x: [style1.value] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: [
  'c-radio-group',
  { 'c-radio-group__disabled': !formDisabled.value && !formItemDisabled.value && disabledC.value }
] }, { x: propsC.value.cClass }).x)

let index = 0
const getIndex: RadioGroupGetIndex = () => index ++

const validate = (trigger: ValidationTrigger, time?: number) => {
  clearTimeout(validate.timer)

  validate.timer = setTimeout(() => formValidateField && pathC.value && formValidateField(pathC.value, undefined, trigger), time)
}
validate.timer = 0

const changeValidate = () => hasOnChangeValidate.value && validate('change')

const updateValue: RadioGroupUpdateValue = (val) => {
  if (valueR.value !== val) {
    valueR.value = val
    emits('update:value', valueR.value)
  }
}

watch(() => props.value, updateValue)

watch(() => valueR.value, changeValidate)

provide(radioGroupInjectionKeyDisabled, disabledC)
provide(radioGroupInjectionKeyRadio, radioC)
provide(radioGroupInjectionKeyGetIndex, getIndex)
provide(radioGroupInjectionKeyUpdateValue, updateValue)
provide(radioGroupInjectionKeyValue, valueR)
provide(radioGroupInjectionKeyValidateErrors, validateErrors)
</script>

<template>
<view :class="classC" :style="(styleC as any)">
  <c-radio v-for="(item, index) in propsC.items" :key="index" :props="item" />
  <slot />
</view>
</template>

<style lang="scss" scoped>
.c-radio-group {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  box-sizing: border-box;
  flex-direction: column;
  flex-grow: 1;

  &__disabled {
    opacity: 0.6;
    cursor: no-drop;
  }
}
</style>
