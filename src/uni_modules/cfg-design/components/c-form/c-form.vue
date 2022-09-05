<script setup lang="ts">
import type { ValidateCallback, ValidateFieldsError } from 'async-validator'
import type { FormProps, FormRules, FormValidateField, ValidationTrigger } from './types.d'
import Schema from 'async-validator'
import { computed, nextTick, provide, ref } from 'vue'
import { clone, is, filter, forEachObjIndexed } from 'ramda'
import { getPropsBoolean, omitProps, mergeProps } from '../../utils'
import {
  useConfigs,
  formInjectionKeyRules,
  formInjectionKeyDisabled,
  formInjectionKeyItemConfig,
  formInjectionKeyFieldsErrors,
  formInjectionKeyValidateField,
  triggerIncludes
} from './use'

interface Props {
  props?: FormProps
  cClass?: FormProps['cClass']
  cStyle?: FormProps['cStyle']
  /**
   * 配置名。使用 `useFormConfigs()` 查看配置数据。使用 `setFormConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: FormProps['c']
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
   * c-form-item props。
   * 默认： `undefined`
   */
  item?: FormProps['item']
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: FormProps['disabled']
  /**
   * 是否返回 formId 用于发送模板消息。
   * 微信小程序、支付宝小程序。
   */
  reportSubmit?: boolean
  /**
   * 等待一段时间（毫秒数）以确认 formId 是否生效。如果未指定这个参数，formId 有很小的概率是无效的（如遇到网络失败的情况）。指定这个参数将可以检测 formId 是否有效，以这个参数的时间作为这项检测的超时时间。如果失败，将返回 requestFormId:fail 开头的 formId。
   * 微信小程序2.6.2。
   */
  reportSubmitTimeout?: FormProps['reportSubmitTimeout']
}

interface Emits {
  (e: 'submit', event: any): void
  (e: 'reset', event: any): void
  (e: 'update:value', v: Props['value']): void
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const configs = useConfigs()

const rulesR = ref<FormRules>()
const fieldsErrors = ref<ValidateFieldsError>()
const noFeedbackR = ref<boolean>(false)

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
const rulesC = computed(() => rulesR.value || propsC.value.rules || {})
const validator = computed(() => new Schema(rulesC.value))
const classC = computed(() => mergeProps({ x: ['c-form', { 'c-form__disabled': disabledC.value }] }, { x: propsC.value.cClass }).x)
const styleC = computed(() => mergeProps({ x: [] }, { x: propsC.value.cStyle }).x)

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
const onReset = (e?: any) => {
  // form 默认 reset 事件不会触发组件(如 input)更新 model
  clear()
  nextTick(() => {
    updateValue(clone(modelDefault))
    e && emits('reset', e)
  })
}

const disabledC = computed(() => getPropsBoolean(propsC.value.disabled))
const noFeedback1 = computed(() => getPropsBoolean(propsC.value.item?.noFeedback))
const noFeedbackC = computed(() => noFeedback1.value || noFeedbackR.value)
const itemC = computed(() => ({
  ...propsC.value.item,
  noFeedback: noFeedbackC.value
}))

provide(formInjectionKeyRules, rulesC)
provide(formInjectionKeyItemConfig, itemC)
provide(formInjectionKeyDisabled, disabledC)
provide(formInjectionKeyFieldsErrors, fieldsErrors)
provide(formInjectionKeyValidateField, validateField)

defineExpose({ validate, setRules, validateField, restoreValidation, clear, reset: onReset })
</script>

<template>
<form
  :class="classC"
  :style="styleC"
  :report-submit="getPropsBoolean(propsC.reportSubmit)"
  :report-submit-timeout="propsC.reportSubmitTimeout"
  @submit="onSubmit"
  @reset="onReset"
  ><slot /></form
>
</template>

<style lang="scss" scoped>
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
