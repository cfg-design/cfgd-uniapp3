<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { InputProps } from './types.d'
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
   * 配置名。使用 `useInputConfigs()` 查看配置数据。使用 `setInputConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: InputProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: InputProps['viewBind']
  /**
   * input 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  inputBind?: InputProps['inputBind']
  /**
   * 输入框的内容。
   * 默认： `undefined`
   */
  value?: InputProps['value']
  /**
   * input 的类型。
   * 默认： `undefined`
   */
  type?: InputProps['type']
  /**
   * 字体的大小。
   * 默认： `undefined`
   */
  size?: InputProps['size']
  /**
   * 输入框为空时占位符。
   * 默认： `undefined`
   */
  placeholder?: InputProps['placeholder']
  /**
   * 输入内容对齐方式。
   * 默认： `undefined`
   */
  inputAlign?: InputProps['inputAlign']
  /**
   * 背景颜色。
   * 默认： `undefined`
   */
  bgColor?: InputProps['bgColor']
  /**
   * 左边图标名称或代码。
   * 默认： `undefined`
   */
  icon?: InputProps['icon']
  /**
   * 详情查看 c-icon props
   * 默认： `undefined`
   */
  iconProps?: InputProps['iconProps']
  /**
   * 右边图标名称或代码。
   * 默认： `undefined`
   */
  rightIcon?: InputProps['rightIcon']
  /**
   * 详情查看 c-icon props
   * 默认： `undefined`
   */
  rightIconProps?: InputProps['rightIconProps']
  /**
   * 是否密码类型。
   * 默认： `undefined`
   */
  password?: InputProps['password']
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: InputProps['disabled']
  /**
   * 是否只读。
   * 默认： `undefined`
   */
  readonly?: InputProps['readonly']
  /**
   * 是否显示清除控件。
   * 默认： `undefined`
   */
  clearable?: InputProps['clearable']
  /**
   * 最大输入长度，设置为 -1 的时候不限制最大长度。
   * 默认： `undefined`
   */
  maxlength?: InputProps['maxlength']
  /**
   * 是否显示输入字数统计。
   * 默认： `undefined`
   */
  showCount?: InputProps['showCount']
  /**
   * 输入字数统计的 c-text Props 。
   * 默认： `undefined`
   */
  countProps?: InputProps['countProps']
  /**
   * 自动获取焦点。
   * 默认： `undefined`
   */
  autoFocus?: InputProps['autoFocus']
  /**
   * 是否显示边框。
   * 默认： `undefined`
   */
  border?: InputProps['border']
  /**
   * 是否显示下边框。
   * 默认： `undefined`
   */
  borderBottom?: InputProps['borderBottom']
  /**
   * 圆角值。 default 配置为 `s`。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
   * 默认： `undefined`
   */
  radius?: InputProps['radius']
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: InputProps['round']
  /**
   * 表单域 model 对象的属性名。
   * 默认： `undefined`
   */
  path?: InputProps['path']
  /**
   * 是否展示校验反馈。
   * 默认： `undefined`
   */
  noFeedback?: InputProps['noFeedback']
}

interface Emits {
  (e: 'update:value', v: Props['value']): void
  (e: 'input', event: any): void
  (e: 'focus', event: any): void
  (e: 'blur', event: any): void
  (e: 'confirm', event: any): void
  (e: 'keyboardheightchange', event: any): void
  (e: 'clear'): void
  (e: 'click:input', event: any): void
  (e: 'click:icon', event: any): void
  (e: 'click:rightIcon', event: any): void
}

const formRules = inject(formInjectionKeyRules, ref())
const formSize = inject(formInjectionKeySize, ref(''))
const formDisabled = inject(formInjectionKeyDisabled, ref(false))
const formValidateField = inject(formInjectionKeyValidateField, undefined)
const formFieldsErrors = inject(formInjectionKeyFieldsErrors, ref())
const formNoFeedback = inject(formInjectionKeyNoFeedback, ref(false))
const formItemSize = inject(formItemInjectionKeySize, ref(''))
const formItemDisabled = inject(formItemInjectionKeyDisabled, ref(false))
const formItemPath = inject(formItemInjectionKeyPath, ref())
const formItemNoFeedback = inject(formItemInjectionKeyNoFeedback, ref(false))

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const fontSizes = useFontSizes()
const colors = useColors()
const radiuses = useRadius()
const configs = useConfigs()

const valueR = ref(props.value)
const isFocus = ref(getPropsBoolean(props.autoFocus))
const clearableVisible = ref(false)
const inputRef = ref(null) as any

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
const bgColorC = computed<CSSProperties['color']>(() => {
  const { bgColor } = propsC.value
  return bgColor ? colors.value[bgColor] || bgColor : undefined
})
const size1 = computed(() => getSize(fontSizes.value, propsC.value.size))
const pathC = computed(() => propsC.value.path || formItemPath.value)
const rule = computed<FormRule | undefined>(() => !pathC.value || !formRules.value ? undefined : formRules.value[pathC.value])
const validateErrors = computed(() => !pathC.value || !formFieldsErrors.value ? undefined : formFieldsErrors.value[pathC.value])
const hasBgColor = computed<boolean>(() => !!propsC.value.bgColor && !!colors.value[propsC.value.bgColor])
const sizeC = computed<string>(() => size1.value || formItemSize.value || formSize.value || toCssUnit(fontSizes.value.m))
const disabled1 = computed(() => getPropsBoolean(propsC.value.disabled))
const disabledC = computed<boolean>(() => disabled1.value || formDisabled.value || formItemDisabled.value || false)
const readonlyC = computed<boolean>(() => getPropsBoolean(propsC.value.readonly) || disabledC.value)
const passwordC = computed(() => getPropsBoolean(propsC.value.password))
const borderC = computed(() => getPropsBoolean(propsC.value.border))
const borderBottomC = computed<boolean>(() => getPropsBoolean(propsC.value.borderBottom))
const clearableC = computed(() => getPropsBoolean(propsC.value.clearable))
const showCountC = computed(() => getPropsBoolean(propsC.value.showCount))
const maxlengthC = computed(() => propsC.value.maxlength || 140)
const radius1 = computed(() => getSizes(radiuses.value, propsC.value.radius))
const roundC = computed(() => getPropsBoolean(propsC.value.round))
const radiusC = computed(() => roundC.value ? '9999px' : radius1.value)
const noFeedbackC = computed<boolean>(() => getPropsBoolean(propsC.value.noFeedback) || formItemNoFeedback.value || formNoFeedback.value)
const countSize = computed(() => sizeC.value.replace(/\d+/, (v) => Math.floor(Number(v) * 0.9) + ''))
const iconSize = computed(() => sizeC.value.replace(/\d+/, (v) => Math.floor(Number(v) * 1.3) + ''))
const iconColor = computed(() => hasBgColor.value ? '#fff' : 'secondary')
const iconPadding = computed(() => {
  return `0 calc(${sizeC.value} * 0.4)`
})
const iconTextProps = computed(() => ({ textBind: { style: [{ padding: iconPadding.value }] } }))
const iconPropsC = computed<Props['iconProps']>(() => mergeProps(
  {
    textProps: iconTextProps.value,
    color: iconColor.value
  },
  propsC.value.iconProps
))
const rightIconPropsC = computed<Props['rightIconProps']>(() => mergeProps(
  {
    textProps: iconTextProps.value,
    color: iconColor.value
  },
  propsC.value.rightIconProps,
))

const viewStyle1 = computed<CSSProperties>(() => {
  const result: CSSProperties = {}

  if (bgColorC.value) {
    result.borderColor = bgColorC.value
    result.backgroundColor = bgColorC.value
  }

  if (borderC.value || bgColorC.value) {
    result.borderWidth = '1px'
    result.borderRadius = radiusC.value
    const left = propsC.value.icon ? 0.2 : 0.65
    const right = propsC.value.rightIcon ? 0.2 : 0.65
    result.padding = `0 calc(${sizeC.value} * ${right}) 0 calc(${sizeC.value} * ${left})`
  } else if (borderBottomC.value) {
    result.borderBottomWidth = '1px'
  }

  if (borderC.value || bgColorC.value || borderBottomC.value) {
    result.minHeight = `calc(${sizeC.value} * 2.5)`
  }
  return result
})
const viewStyle2 = computed<CSSProperties>(() => {
  const result: CSSProperties = {}
  if (!noFeedbackC.value && validateErrors.value) {
    result.borderColor = colors.value.error
  } else if (isFocus.value && !hasBgColor.value) {
    result.borderColor = colors.value.primary
  }
  return result
})
const viewStyles = computed<CSSProperties[]>(() => [viewStyle1.value, viewStyle2.value])

const inputHeight = computed<string>(() => sizeC.value ? `calc(${sizeC.value} * 1.75)` : '1.75')
const inputStyles = computed<CSSProperties[]>(() => [{
  height: inputHeight.value,
  lineHeight: inputHeight.value,
  color: hasBgColor.value ? '#fff' : colors.value.main,
  textAlign: propsC.value.inputAlign
}])
const inputBind1 = computed<Props['inputBind']>(() => mergeProps(
  { style: inputStyles.value },
  propsC.value.inputBind
))
const inputBindC = computed<Props['inputBind']>(() => mergeProps(
  inputBind1.value,
  { style: [{ fontSize: sizeC.value }] },
))

const placeholderStyle = computed<string>(() => {
  let style = propsC.value.inputBind?.placeholderStyle || ''
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
  inputRef.value?.focus && inputRef.value.focus()
  // #endif
}

const clear = () => {
  valueR.value = ''
  focus()
  emits('clear')
}

const setClearableVisible1 = () => {
  clearableVisible.value = isFocus.value
}
const setClearableVisible = () => isFocus.value ? setClearableVisible1() : setTimeout(setClearableVisible1)

const onClickInput = (e: any) => emits('click:input', e)
const onClickIcon = (e: any) => emits('click:icon', e)
const onClickRightIcon = (e: any) => emits('click:rightIcon', e)

watch(() => props.value, (val) => {
  valueR.value = val
})

watch(() => valueR.value, changeValidate)

watch(() => isFocus.value, setClearableVisible)

defineExpose({ focus })
</script>

<template>
<view
  class="c-input"
  :class="[{ 'c-input__disabled': !formDisabled && !formItemDisabled && disabled1 }]"
  :style="viewStyles"
  v-bind="(propsC.viewBind as any)"
>
  <slot name="prefix"></slot>
  <view v-if="propsC.icon" class="c-input__icon__box" @click="onClickIcon">
    <c-icon :name="propsC.icon" :size="iconSize" v-bind="iconPropsC" />
  </view>
  <input
    ref="inputRef"
    class="c-input__input"
    v-bind="inputBindC"
    v-model="valueR"
    :focus="isFocus"
    :type="propsC.type"
    :password="passwordC"
    :placeholder="propsC.placeholder"
    :placeholder-style="placeholderStyle"
    :disabled="readonlyC"
    :maxlength="maxlengthC"
    @click="onClickInput"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
    @confirm="onConfirm"
    @keyboardheightchange="onKeyboardheightchange"
  />
  <view v-if="clearableC && clearableVisible && !!valueR" class="c-input__icon__box" @click="clear">
    <c-icon name="close-circle-fill" :size="iconSize" :color="iconColor" :text-props="iconTextProps" />
  </view>
  <slot v-if="showCountC && maxlengthC" name="count">
    <c-text :size="countSize" v-bind="propsC.countProps">{{ valueR?.length || 0 }} / {{ maxlengthC }}</c-text>
  </slot>
  <view v-if="propsC.rightIcon" class="c-input__icon__box" @click="onClickRightIcon">
    <c-icon :name="propsC.rightIcon" :size="iconSize" v-bind="rightIconPropsC" />
  </view>
  <slot name="suffix"></slot>
</view>
</template>

<style lang="scss">
.c-input {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #d9d9d9;

  &__disabled {
    opacity: 0.6;
    cursor: no-drop;
  }

  :deep(.c-input__count) {
    white-space: nowrap;
    padding: 0 8rpx;
  }

  &__input {
    flex-grow: 1;
  }

  &__icon__box {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */

    align-self: stretch;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
}
</style>
