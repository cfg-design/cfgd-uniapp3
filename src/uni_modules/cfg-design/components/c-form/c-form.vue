<script setup lang="ts">
import type { ValidateCallback, ValidateFieldsError } from 'async-validator'
import type { FormProps, FormRules, FormValidateField, ValidationTrigger, FormItemRule } from './types.d'
import Schema from 'async-validator'
import { computed, nextTick, provide, ref } from 'vue'
import { clone, is, filter, forEachObjIndexed } from 'ramda'
import { getPropsBoolean, mergeProps } from '../../utils'
import { useFontSizes, getSize } from '../../styles'
import {
  useConfigs,
  formInjectionKeyRules,
  formInjectionKeySize,
  formInjectionKeyDisabled,
  formInjectionKeyNoFeedback,
  formInjectionKeyNoRequireMark,
  formInjectionKeyNoBorderBottom,
  formInjectionKeyNoLabel,
  formInjectionKeyLabel,
  formInjectionKeyFieldsErrors,
  formInjectionKeyValidateField,
  triggerIncludes
} from './use'

interface Props {
  /**
   * 配置名。使用 `useFormConfigs()` 查看配置数据。使用 `setFormConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: FormProps['c']
  /**
   * form 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  formBind?: FormProps['formBind']
  /**
   * 表单数据对象。
   * 默认： `undefined`
   */
  value?: FormProps['value']
  /**
   *
   * 验证表项的规则。详情查看 `async-validator` 。
   * 默认： `undefined`
   */
  rules?: FormProps['rules']
  /**
   * 字体大小。 default 配置为 m。 useFontSizes() 可以查看配置数据。使用 setFontSizes() 进行配置。
   * 默认： `undefined`
   */
  size?: FormProps['size']
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: FormProps['disabled']
  /**
   * 是否展示校验反馈。
   * 默认： `undefined`
   */
  noFeedback?: FormProps['noFeedback']
  /**
   * 是否展示必填的星号。
   * 默认： `undefined`
   */
  noRequireMark?: FormProps['noRequireMark']
  /**
   * 是否不显示表单项的下划线边框。
   * 默认： `undefined`
   */
  noBorderBottom?: FormProps['noBorderBottom']
  /**
   * 标签设置。
   * 默认： `undefined`
   */
  label?: FormProps['label']
  /**
   * 是否展示标签。
   * 默认： `undefined`
   */
  noLabel?: FormProps['noLabel']
}

interface Emits {
  (e: 'submit', event: any): void
  (e: 'reset', event: any): void
  (e: 'update:value', v: Props['value']): void
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const fontSizes = useFontSizes()
const configs = useConfigs()

const rulesR = ref<FormRules>()
const fieldsErrors = ref<ValidateFieldsError>()
const noFeedbackR = ref<boolean>(false)

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
const sizeC = computed<string>(() => getSize(fontSizes.value, propsC.value.size || configs.value.default.size))
const rulesC = computed(() => rulesR.value || propsC.value.rules || {})
const validator = computed(() => new Schema(rulesC.value))

const modelDefault: Props['value'] = clone(props.value)

const restoreValidation = () => {
  fieldsErrors.value = undefined
}

const setRules = (rules: FormRules) => {
  rulesR.value = rules
  restoreValidation()
}

const validate = (callback?: ValidateCallback) =>
  validator.value.validate(propsC.value.value || {}, undefined, (errors, fields) => {
    fieldsErrors.value = errors ? fields : undefined
    callback && callback(errors, fields)
  })

const validateField: FormValidateField = (field: string, callback?: ValidateCallback, trigger?: ValidationTrigger) => {
  let rule = rulesC.value[field]
  if (trigger) {
    if (is(Array, rule)) {
      rule = filter((item) => triggerIncludes(item.trigger, trigger), rule)
    } else if (!triggerIncludes(rule.trigger, trigger)) {
      rule = []
    }
  }

  return new Schema({ [field]: rule }).validate(
    !propsC.value.value ? {} : { [field]: propsC.value.value[field] },
    undefined,
    (errors, fields) => {
      if (errors) {
        fieldsErrors.value = {
          ...fieldsErrors.value,
          [field]: fields[field]
        }
      } else if (fieldsErrors.value && fieldsErrors.value[field]) {
        delete fieldsErrors.value[field]
      }

      callback && callback(errors, fields)
    }
  )
}

const updateValue = (v: Record<string, any> | undefined) => {
  noFeedbackR.value = true
  emits('update:value', v)
  restoreValidation()
  setTimeout(() => {
    restoreValidation()
    noFeedbackR.value = false
  }, 100)
}

const clear = () => {
  const undefinedValue: any = { ...props.value }
  const setUndefined = (_: any, key: string | number | symbol) => {
    undefinedValue[key] = undefined
  }
  forEachObjIndexed(setUndefined, undefinedValue)
  updateValue(undefinedValue)
}

const onSubmit = (e: any) => emits('submit', e)
const onReset = (e: any) => {
  // form 默认 reset 事件不会触发组件(如 input)更新 model
  clear()
  nextTick(() => {
    updateValue(clone(modelDefault))
    emits('reset', e)
  })
}

const labelC = computed(() => propsC.value.label)
const disabledC = computed(() => getPropsBoolean(propsC.value.disabled))
const noFeedback1 = computed(() => getPropsBoolean(propsC.value.noFeedback))
const noFeedbackC = computed(() => noFeedback1.value || noFeedbackR.value)
const noLabelC = computed(() => getPropsBoolean(propsC.value.noLabel))
const noRequireMarkC = computed(() => getPropsBoolean(propsC.value.noRequireMark))
const noBorderBottomC = computed(() => getPropsBoolean(propsC.value.noBorderBottom))

provide(formInjectionKeyRules, rulesC)
provide(formInjectionKeySize, sizeC)
provide(formInjectionKeyDisabled, disabledC)
provide(formInjectionKeyNoFeedback, noFeedbackC)
provide(formInjectionKeyNoRequireMark, noRequireMarkC)
provide(formInjectionKeyNoBorderBottom, noBorderBottomC)
provide(formInjectionKeyNoLabel, noLabelC)
provide(formInjectionKeyLabel, labelC)
provide(formInjectionKeyFieldsErrors, fieldsErrors)
provide(formInjectionKeyValidateField, validateField)

defineExpose({ validate, setRules, validateField, restoreValidation, clear, reset: onReset })
</script>

<template>
<form class="c-form" v-bind="propsC.formBind" :class="[{ 'c-form__disabled': disabledC }]" @submit="onSubmit" @reset="onReset"><slot /></form>
</template>

<style lang="scss">
.c-form {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  flex-direction: column;
  box-sizing: border-box;
  padding: 0 20rpx;
  background-color: #fff;

  &__disabled {
    opacity: 0.6;
    cursor: no-drop;
  }
}
</style>
