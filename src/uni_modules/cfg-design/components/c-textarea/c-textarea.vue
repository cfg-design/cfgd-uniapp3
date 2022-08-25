<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { TextareaProps } from './types.d'
import type { ValidationTrigger, FormRule } from '../c-form/types.d'
import { computed, inject, ref, watch } from 'vue'
import { getPropsBoolean, mergeProps } from '../../utils'
import { useFontSizes, useColors, useRadius, getSize, getSizes, toCssUnit } from '../../styles'
import {
  hasTrigger,
  formInjectionKeyRules,
  formInjectionKeySize,
  formInjectionKeyDisabled,
  formInjectionKeyValidateField,
  formInjectionKeyFieldsErrors,
  formInjectionKeyNoFeedback
} from '../c-form/use'
import {
  formItemInjectionKeySize,
  formItemInjectionKeyDisabled,
  formItemInjectionKeyPath,
  formItemInjectionKeyNoFeedback
} from '../c-form-item/use'
import { useConfigs } from './use'

interface Props {
  /**
   * 配置名。使用 `useTextareaConfigs()` 查看配置数据。使用 `setTextareaConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: TextareaProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: TextareaProps['viewBind']
  /**
   * textarea 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  textareaBind?: TextareaProps['textareaBind']
  /**
   * 输入框的内容。
   * 默认： `undefined`
   */
  value?: TextareaProps['value']
  /**
   * 字体的大小。
   * 默认： `undefined`
   */
  size?: TextareaProps['size']
  /**
   * 输入框为空时占位符。
   * 默认： `undefined`
   */
  placeholder?: TextareaProps['placeholder']
  /**
   * 高度。
   * 默认： `undefined`
   */
  height?: TextareaProps['height']
  /**
   * 是否自动增高，设置auto-height时，height不生效。
   * 默认： `undefined`
   */
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  autoHeight?: TextareaProps['autoHeight']
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: TextareaProps['disabled']
  /**
   * 是否只读。
   * 默认： `undefined`
   */
  readonly?: TextareaProps['readonly']
  /**
   * 最大输入长度，设置为 -1 的时候不限制最大长度。
   * 默认： `undefined`
   */
  maxlength?: TextareaProps['maxlength']
  /**
   * 是否显示输入字数统计。
   * 默认： `undefined`
   */
  showCount?: TextareaProps['showCount']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  countViewBind?: TextareaProps['countViewBind']
  /**
   * 输入字数统计的 c-text Props 。
   * 默认： `undefined`
   */
  countProps?: TextareaProps['countProps']
  /**
   * 自动获取焦点。
   * 默认： `undefined`
   */
  autoFocus?: TextareaProps['autoFocus']
  /**
   * 是否显示边框。
   * 默认： `undefined`
   */
  border?: TextareaProps['border']
  /**
   * 是否显示下边框。
   * 默认： `undefined`
   */
  borderBottom?: TextareaProps['borderBottom']
  /**
   * 圆角值。 default 配置为 `s`。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
   * 默认： `undefined`
   */
  radius?: TextareaProps['radius']
  /**
   * 表单域 value 对象的属性名。
   * 默认： `undefined`
   */
  path?: TextareaProps['path']
  /**
   * 是否展示校验反馈。
   * 默认： `undefined`
   */
  noFeedback?: TextareaProps['noFeedback']
}

interface Emits {
  (e: 'update:value', v: Props['value']): void
  (e: 'input', event: any): void
  (e: 'focus', event: any): void
  (e: 'blur', event: any): void
  (e: 'confirm', event: any): void
  (e: 'keyboardheightchange', event: any): void
  (e: 'linechange', event: any): void
}

const formRules = inject(formInjectionKeyRules, ref())
const formSize = inject(formInjectionKeySize, ref(''))
const formDisabled = inject(formInjectionKeyDisabled, ref())
const formValidateField = inject(formInjectionKeyValidateField, undefined)
const formFieldsErrors = inject(formInjectionKeyFieldsErrors, ref())
const formNoFeedback = inject(formInjectionKeyNoFeedback, ref())
const formItemSize = inject(formItemInjectionKeySize, ref(''))
const formItemDisabled = inject(formItemInjectionKeyDisabled, ref())
const formItemPath = inject(formItemInjectionKeyPath, ref())
const formItemNoFeedback = inject(formItemInjectionKeyNoFeedback, ref())

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const fontSizes = useFontSizes()
const colors = useColors()
const radiuses = useRadius()
const configs = useConfigs()

const valueR = ref(props.value)
const isFocus = ref(getPropsBoolean(props.autoFocus))
const textareaRef = ref(null) as any

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
const pathC = computed(() => propsC.value.path || formItemPath.value)
const rule = computed<FormRule | undefined>(() => !pathC.value || !formRules.value ? undefined : formRules.value[pathC.value])
const validateErrors = computed(() => !pathC.value || !formFieldsErrors.value ? undefined : formFieldsErrors.value[pathC.value])
const size1 = computed<string | undefined>(() => getSize(fontSizes.value, propsC.value.size))
const sizeC = computed<string>(() => size1.value
  || formItemSize.value
  || formSize.value
  || toCssUnit(fontSizes.value.m)
)
const autoHeightC = computed(() => getPropsBoolean(propsC.value.autoHeight))
const disabled1 = computed(() => getPropsBoolean(propsC.value.disabled))
const disabledC = computed<boolean>(() => disabled1.value || formDisabled.value || formItemDisabled.value || false)
const readonlyC = computed<boolean>(() => getPropsBoolean(propsC.value.readonly) || disabledC.value)
const borderC = computed(() => getPropsBoolean(propsC.value.border))
const borderBottomC = computed(() => getPropsBoolean(propsC.value.borderBottom))
const showCountC = computed(() => getPropsBoolean(propsC.value.showCount))
const maxlengthC = computed(() => propsC.value.maxlength || 140)
const radiusC = computed(() => getSizes(radiuses.value, propsC.value.radius))
const noFeedbackC = computed<boolean>(() => getPropsBoolean(propsC.value.noFeedback) || formItemNoFeedback.value || formNoFeedback.value || false)
const countSize = computed(() => sizeC.value.replace(/\d+/, (v) => Math.floor(Number(v) * 0.9) + ''))

const textareaStyle1 = computed<CSSProperties>(() => {
  const result: CSSProperties = {
    color: colors.value.main,
    fontSize: sizeC.value
  }

  if (!autoHeightC.value) {
    result.height = propsC.value.height
  }

  if (borderC.value) {
    result.borderWidth = '1px'
    result.borderRadius = radiusC.value
    result.padding = `calc(${sizeC.value} * 0.65`
  } else if (borderBottomC.value) {
    result.paddingBottom = `calc(${sizeC.value} * 0.4`
    result.borderBottomWidth = '1px'
  }

  return result
})
const textareaStyle2 = computed<CSSProperties>(() => {
  const result: CSSProperties = {}
  if (!noFeedbackC.value && validateErrors.value) {
    result.borderColor = colors.value.error
  } else if (isFocus.value) {
    result.borderColor = colors.value.primary
  }
  return result
})
const textareaStyles = computed<CSSProperties[]>(() => [textareaStyle1.value, textareaStyle2.value])

const placeholderStyle = computed<string>(() => {
  let style = propsC.value.textareaBind?.placeholderStyle || ''
  if (style && !/;$/.test(style)) {
    style += ';'
  }
  return `${style}font-size: ${sizeC.value};color: ${colors.value.placeholder};`
})

const hasOnInputValidate = computed(() => hasTrigger(rule.value, 'input'))
const hasOnChangeValidate = computed(() => hasTrigger(rule.value, 'change'))
const hasOnFocusValidate = computed(() => hasTrigger(rule.value, 'focus'))
const hasOnBlurValidate = computed(() => hasTrigger(rule.value, 'blur'))

const validate = (trigger: ValidationTrigger, time?: number) => {
  clearTimeout(validate.timer)

  validate.timer = setTimeout(() => formValidateField && pathC.value && formValidateField(pathC.value, undefined, trigger), time)
}
validate.timer = 0

const inputValidate = () => hasOnInputValidate.value && validate('input', 300)
const changeValidate = () => hasOnChangeValidate.value && validate('change')
const focusValidate = () => hasOnFocusValidate.value && validate('focus')
const blurValidate = () => hasOnBlurValidate.value && validate('blur')

const onInput = (e: any) => {
  inputValidate()
  emits('update:value', valueR.value)
  emits('input', e)
}

const onFocus = (e: any) => {
  focusValidate()
  isFocus.value = true
  emits('focus', e)
}

const onBlur = (e: any) => {
  blurValidate()
  isFocus.value = false
  emits('blur', e)
}

const onConfirm = (e: any) => emits('confirm', e)

const onKeyboardheightchange = (e: any) => emits('keyboardheightchange', e)

const focus = () => {
  isFocus.value = true
  // #ifdef APP-NVUE
  textareaRef.value?.focus && textareaRef.value.focus()
  // #endif
}

watch(() => props.value, (val) => {
  valueR.value = val
})

watch(() => valueR.value, changeValidate)

defineExpose({ focus })
</script>

<template>
<view
  class="c-textarea"
  :class="[{ 'c-textarea__disabled': !formDisabled && !formItemDisabled && disabled1 }]"
  v-bind="(propsC.viewBind as any)"
>
  <textarea
    ref="textareaRef"
    class="c-textarea__textarea"
    v-model="valueR"
    v-bind="propsC.textareaBind"
    :style="textareaStyles"
    :auto-height="autoHeightC"
    :focus="isFocus"
    :placeholder="propsC.placeholder"
    :placeholder-style="placeholderStyle"
    :disabled="readonlyC"
    :maxlength="maxlengthC"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
    @confirm="onConfirm"
    @keyboardheightchange="onKeyboardheightchange"
  />
  <view v-if="showCountC && maxlengthC" class="c-textarea__count" v-bind="(propsC.countViewBind as any)">
    <slot name="count" :value="valueR">
      <c-text :size="countSize" v-bind="propsC.countProps">{{ valueR?.length || 0 }} / {{ maxlengthC }}</c-text>
    </slot>
  </view>
</view>
</template>

<style lang="scss">
.c-textarea {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  position: relative;
  flex-grow: 1;
  box-sizing: border-box;

  &__disabled {
    opacity: 0.6;
    cursor: no-drop;
  }

  &__textarea {
    border-width: 0;
    border-style: solid;
    border-color: #d9d9d9;
    flex-grow: 1;
    width: auto;
    box-sizing: border-box;
  }

  &__count {
    position: absolute;
    right: 10rpx;
    bottom: 8rpx;
    border-radius: 16rpx;
    pointer-events: none;
  }
}
</style>
