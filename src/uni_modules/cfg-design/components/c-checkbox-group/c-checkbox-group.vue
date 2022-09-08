<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { ValidationTrigger, FormRule } from '../c-form/types.d'
import type { CheckboxProps } from '../c-checkbox/types.d'
import type { CheckboxGroupProps, CheckboxGroupGetIndex, CheckboxGroupCheck } from './types.d'
import { computed, provide, inject, ref, watch } from 'vue'
import { filter, difference } from 'ramda'
import { getPropsBoolean, omitProps, mergeProps } from '../../utils'
import { toCssUnit } from '../../styles'
import {
  hasTrigger,
  formInjectionKeyRules,
  formInjectionKeyDisabled,
  formInjectionKeyValidateField,
} from '../c-form/use'
import {
  formItemInjectionKeyDisabled,
  formItemInjectionKeyPath,
} from '../c-form-item/use'
import {
  useConfigs ,
  checkboxGroupInjectionKeyDisabled,
  checkboxGroupInjectionKeyCheckboxProps,
  checkboxGroupInjectionKeyGetIndex,
  checkboxGroupInjectionKeyCheck,
  checkboxGroupInjectionKeyValue,
} from './use'

interface Props {
  props?: CheckboxGroupProps
  cClase?: CheckboxGroupProps['cClass']
  cStyle?: CheckboxGroupProps['cStyle']
  /**
   * 配置名。使用 `useCheckboxGroupConfigs()` 查看配置数据。使用 `setCheckboxGroupConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: CheckboxGroupProps['c']
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: CheckboxGroupProps['value']
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: CheckboxGroupProps['disabled']
  /**
   * 排列。
   * 默认： `undefined`
   */
  direction?: CheckboxGroupProps['direction']
  /**
   * 表单域 value 对象的属性名。
   * 默认： `undefined`
   */
  path?: CheckboxGroupProps['path']
  /**
   * checkbox 一些设置，详情查看 checkbox props 。
   * 默认： `undefined`
   */
  checkbox?: CheckboxGroupProps['checkbox']
}

interface Emits {
  (e: 'update:value', v: Props['value']): void
}

const formRules = inject(formInjectionKeyRules, ref())
const formDisabled = inject(formInjectionKeyDisabled, ref())
const formValidateField = inject(formInjectionKeyValidateField, undefined)
const formItemDisabled = inject(formItemInjectionKeyDisabled, ref())
const formItemPath = inject(formItemInjectionKeyPath, ref())

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const configs = useConfigs()

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))

const valueR = ref(propsC.value.value)

const disabledC = computed(() => getPropsBoolean(propsC.value.disabled))
const pathC = computed(() => propsC.value.path || formItemPath.value)
const rule = computed<FormRule | undefined>(() => !pathC.value || !formRules.value ? undefined : formRules.value[pathC.value])
const hasOnChangeValidate = computed(() => hasTrigger(rule.value, 'change'))
const checkboxC = computed(() => mergeProps<CheckboxProps>({ cStyle: [{ margin: toCssUnit('10 0') }] }, propsC.value.checkbox || {}))

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
  'c-checkbox-group',
  { 'c-checkbox-group__disabled': !formDisabled.value && !formItemDisabled.value && disabledC.value }]
}, { x: propsC.value.cClass }).x)

let index = 0
const getIndex: CheckboxGroupGetIndex = () => index ++

const validate = (trigger: ValidationTrigger, time?: number) => {
  clearTimeout(validate.timer)

  validate.timer = setTimeout(() => formValidateField && pathC.value && formValidateField(pathC.value, undefined, trigger), time)
}
validate.timer = 0

const changeValidate = () => hasOnChangeValidate.value && validate('change')

const check: CheckboxGroupCheck = (val, is) => {
  let values = valueR.value || []
  const inc = values.includes(val)
  if (is) {
    if (!inc) {
      valueR.value = [...values, val]
      emits('update:value', valueR.value)
    }
  } else {
    if (inc) {
      valueR.value = filter((item) => item !== val, values)
      emits('update:value', valueR.value)
    }
  }
}

watch(() => propsC.value.value, (val) => {
  if (!val || !valueR.value || difference(val, valueR.value).length || difference(valueR.value, val).length) {
    valueR.value = val
  }
})

watch(() => valueR.value, changeValidate)

provide(checkboxGroupInjectionKeyDisabled, disabledC)
provide(checkboxGroupInjectionKeyCheckboxProps, checkboxC)
provide(checkboxGroupInjectionKeyGetIndex, getIndex)
provide(checkboxGroupInjectionKeyCheck, check)
provide(checkboxGroupInjectionKeyValue, valueR)
</script>

<template>
<view :class="classC" :style="(styleC as any)"><slot /></view>
</template>

<style lang="scss" scoped>
.c-checkbox-group {
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
