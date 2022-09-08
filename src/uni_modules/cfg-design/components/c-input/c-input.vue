<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { InputProps } from './types.d'
import type { ValidationTrigger, FormRule } from '../c-form/types.d'
import { computed, inject, ref, watch } from 'vue'
import { getPropsBoolean, omitProps, mergeProps } from '../../utils'
import { useFontSizes, useColors, useRadius, getSize, getSizes, toCssUnit } from '../../styles'
import {
  hasTrigger,
  formInjectionKeyRules,
  formInjectionKeyDisabled,
  formInjectionKeyValidateField,
  formInjectionKeyFieldsErrors,
} from '../c-form/use'
import {
  formItemInjectionKeySize,
  formItemInjectionKeyDisabled,
  formItemInjectionKeyPath,
  formItemInjectionKeyNoFeedback
} from '../c-form-item/use'
import { useConfigs } from './use'

interface Props {
  props?: InputProps
  cClass?: InputProps['cClass']
  cStyle?: InputProps['cStyle']
  inputClass?: InputProps['inputClass']
  inputStyle?: InputProps['inputStyle']
  /**
   * 配置名。使用 `useInputConfigs()` 查看配置数据。使用 `setInputConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: InputProps['c']
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
   * 详情查看 c-icon props
   * 默认： `undefined`
   */
  clearIconProps?: InputProps['clearIconProps']
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
   * 圆角值。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
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
   * 是否不展示校验反馈。
   * 默认： `undefined`
   */
  noFeedback?: InputProps['noFeedback']
  /**
   * 文本区域的语义，根据类型自动填充。
   * 仅 App-nvue-iOS 支持。
   */
  textContentType?: InputProps['textContentType']
  /**
   * 指定 placeholder 的样式。
   */
  placeholderStyle?: InputProps['placeholderStyle']
  /**
   * 指定 placeholder 的样式类，注意页面或组件的style中写了scoped时，需要在类名使用`:deep`。
   * 字节跳动小程序、飞书小程序、快手小程序不支持。
   */
  placeholderClass?: InputProps['placeholderClass']
  /**
   * 指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离。
   * App、微信小程序、百度小程序、QQ小程序、京东小程序。
   */
  cursorSpacing?: InputProps['cursorSpacing']
  /**
   * 指定focus时的光标位置。
   */
  cursor?: InputProps['cursor']
  /**
   * 获取焦点。
   */
  focus?: InputProps['focus']
  /**
   * 设置键盘右下角按钮的文字，仅在 type="text" 时生效。
   * 微信小程序、App、H5、快手小程序、京东小程序。
   */
  confirmType?: InputProps['confirmType']
  /**
   * 点击键盘右下角按钮时是否保持键盘不收起。
   * App(3.3.7+)、H5 (3.3.7+)、微信小程序、支付宝小程序、百度小程序、QQ小程序、京东小程序。
   */
  confirmHold?: InputProps['confirmHold']
  /**
   * 光标起始位置，自动聚集时有效，需与selection-end搭配使用。
   */
  selectionStart?: InputProps['selectionStart']
  /**
   * 光标结束位置，自动聚集时有效，需与selection-start搭配使用。
   */
  selectionEnd?: InputProps['selectionEnd']
  /**
   * 键盘弹起时，是否自动上推页面。
   * App-Android（vue 页面 softinputMode 为 adjustResize 时无效，使用 x5 内核时无效）、微信小程序、百度小程序、QQ小程序、京东小程序。
   */
  adjustPosition?: InputProps['adjustPosition']
  /**
   * focus时，点击页面的时候不收起键盘。
   * 微信小程序2.8.2。
   */
  holdKeyboard?: boolean
  /**
   * 键盘收起时，是否自动失去焦点。
   * App-Vue 3.0.0+。
   */
  autoBlur?: boolean
  /**
   * 是否忽略组件内对文本合成系统事件的处理。为 false 时将触发 compositionstart、compositionend、compositionupdate 事件，且在文本合成期间会触发 input 事件。
   * App-vue (3.4.4+)、H5 (3.4.4+)、App-nvue不支持。
   */
  ignoreCompositionEvent?: InputProps['ignoreCompositionEvent']
  /**
   * 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)。
   * 微信小程序 2.10.4+。
   */
  alwaysEmbed?: boolean
  /**
   * 安全键盘加密公钥的路径，只支持包内路径。
   * 微信小程序 2.18.0+。
   */
  safePasswordCertPath?: InputProps['safePasswordCertPath']
  /**
   * 安全键盘输入密码长度。
   * 微信小程序 2.18.0+。
   */
  safePasswordLength?: InputProps['safePasswordLength']
  /**
   * 安全键盘加密时间戳。
   * 微信小程序 2.18.0+。
   */
  safePasswordTimeStamp?: InputProps['safePasswordTimeStamp']
  /**
   * 安全键盘加密盐值。
   * 微信小程序 2.18.0+。
   */
  safePasswordNonce?: InputProps['safePasswordNonce']
  /**
   * 安全键盘计算 hash 盐值，若指定custom-hash 则无效。
   * 微信小程序 2.18.0+。
   */
  safePasswordSalt?: InputProps['safePasswordSalt']
  /**
   * 安全键盘计算 hash 的算法表达式，如 md5(sha1('foo' + sha256(sm3(password + 'bar'))))。
   * 微信小程序 2.18.0+。
   */
  safePasswordCustomHash?: InputProps['safePasswordCustomHash']
  /**
   * 当 type 为 number, digit, idcard 数字键盘是否随机排列。
   * 支付宝小程序 1.9.0+。
   */
  randomNumber?: boolean
  /**
   * 是否为受控组件。为 true 时，value 内容会完全受 setData 控制。
   * 支付宝小程序 1.9.0+。
   */
  controlled?: boolean
  /**
   * 是否强制使用系统键盘和 Web-view 创建的 input 元素。为 true 时，confirm-type、confirm-hold 可能失效。
   * 支付宝小程序 2.7.3+。
   */
  alwaysSystem?: boolean
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
const formDisabled = inject(formInjectionKeyDisabled, ref(false))
const formValidateField = inject(formInjectionKeyValidateField, undefined)
const formFieldsErrors = inject(formInjectionKeyFieldsErrors, ref())
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

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))

const valueR = ref(propsC.value.value)
const isFocus = ref(getPropsBoolean(propsC.value.focus))
const clearableVisible = ref(false)
const inputRef = ref(null) as any

const bgColorC = computed<CSSProperties['color']>(() => {
  const { bgColor } = propsC.value
  return bgColor ? colors.value[bgColor] || bgColor : undefined
})
const size1 = computed(() => getSize(fontSizes.value, propsC.value.size))
const pathC = computed(() => propsC.value.path || formItemPath.value)
const rule = computed<FormRule | undefined>(() => !pathC.value || !formRules.value ? undefined : formRules.value[pathC.value])
const validateErrors = computed(() => !pathC.value || !formFieldsErrors.value ? undefined : formFieldsErrors.value[pathC.value])
const hasBgColor = computed<boolean>(() => !!propsC.value.bgColor && !!colors.value[propsC.value.bgColor])
const sizeC = computed<string>(() => size1.value || formItemSize.value || toCssUnit(fontSizes.value.m))
const disabled1 = computed(() => getPropsBoolean(propsC.value.disabled))
const disabledC = computed<boolean>(() => disabled1.value || formDisabled.value || formItemDisabled.value || false)
const readonlyC = computed<boolean>(() => getPropsBoolean(propsC.value.readonly) || disabledC.value)
const passwordC = computed(() => getPropsBoolean(propsC.value.password))
const borderC = computed(() => getPropsBoolean(propsC.value.border))
const borderBottomC = computed<boolean>(() => getPropsBoolean(propsC.value.borderBottom))
const clearableC = computed(() => getPropsBoolean(propsC.value.clearable))
const showCountC = computed(() => getPropsBoolean(propsC.value.showCount))
const maxlengthC = computed(() => propsC.value.maxlength || 140)
const radius1 = computed(() => propsC.value.radius !== undefined ? propsC.value.radius : 's')
const radius2 = computed(() => getSizes(radiuses.value, radius1.value))
const roundC = computed(() => getPropsBoolean(propsC.value.round))
const radiusC = computed(() => roundC.value ? '9999px' : radius2.value)
const noFeedbackC = computed<boolean>(() => getPropsBoolean(propsC.value.noFeedback) || formItemNoFeedback.value)
const countSize = computed(() => sizeC.value.replace(/\d+/, (v) => Math.floor(Number(v) * 0.9) + ''))
const iconSize = computed(() => sizeC.value.replace(/\d+/, (v) => Math.floor(Number(v) * 1.3) + ''))
const iconColor = computed(() => hasBgColor.value ? '#fff' : 'secondary')
const iconPadding = computed(() => {
  return `0 calc(${sizeC.value} * 0.4)`
})
const iconTextStyel = computed<CSSProperties>(() => ({ padding: iconPadding.value }))
const clearIconPropsC = computed(() => mergeProps(
  { textProps: { cClass: ['c-input__icon'], cStyle: iconTextStyel.value } },
  propsC.value.clearIconProps
))
const iconPropsC = computed(() => mergeProps({ textProps: { cStyle: iconTextStyel.value } }, propsC.value.iconProps))
const rightIconPropsC = computed(() => mergeProps(
  { textProps: { cClass: ['c-input__right-icon'], cStyle: iconTextStyel.value } },
  propsC.value.rightIconProps
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
const styleC = computed(() => mergeProps({ x: [viewStyle1.value, viewStyle2.value] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: [
  'c-input',
  { 'c-input__disabled': !formDisabled.value && !formItemDisabled.value && disabled1.value }
] }, { x: propsC.value.cClass }).x)

const inputHeight = computed<string>(() => sizeC.value ? `calc(${sizeC.value} * 1.75)` : '1.75')
const inputStyle = computed<CSSProperties>(() => ({
  height: inputHeight.value,
  lineHeight: inputHeight.value,
  color: hasBgColor.value ? '#fff' : colors.value.main,
  textAlign: propsC.value.inputAlign,
  fontSize: sizeC.value
}))
const inputStyleC = computed(() => mergeProps({ x: [inputStyle.value] }, { x: propsC.value.inputStyle }).x)
const inputClassC = computed(() => mergeProps({ x: ['c-input__input'] }, { x: propsC.value.inputClass }).x)

const placeholderStyle = computed<string>(() => {
  let style = propsC.value.placeholderStyle || ''
  if (style && !/;$/.test(style)) {
    style += ';'
  }
  return `${style}font-size: ${sizeC.value};color: ${colors.value.placeholder};`
})

const countPropsC = computed(() => mergeProps({
  size: countSize.value,
  color: 'secondary',
  cStyle: [{ whiteSpace: 'nowrap', padding: '0 8rpx' }]
}, propsC.value.countProps))

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

watch(() => propsC.value.value, (val) => {
  valueR.value = val
})

watch(() => valueR.value, changeValidate)

watch(() => isFocus.value, setClearableVisible)

defineExpose({ focus })
</script>

<template>
<view :class="classC" :style="(styleC as any)">
  <slot name="prefix" />
  <view v-if="propsC.icon" class="c-input__icon-wrap" @click="onClickIcon">
    <c-icon :props="{ color: iconColor, size: iconSize, ...iconPropsC }" :name="propsC.icon" />
  </view>
  <input
    ref="inputRef"
    v-model="valueR"
    :class="inputClassC"
    :style="inputStyleC"
    :focus="isFocus"
    :password="passwordC"
    :placeholder-style="placeholderStyle"
    :disabled="readonlyC"
    :maxlength="maxlengthC"
    :placeholder="propsC.placeholder || '请输入'"
    :type="propsC.type"
    :text-content-type="propsC.textContentType"
    :placeholder-class="propsC.placeholderClass"
    :cursor-spacing="propsC.cursorSpacing"
    :cursor="propsC.cursor"
    :confirm-type="propsC.confirmType"
    :confirm-hold="propsC.confirmHold"
    :selection-start="propsC.selectionStart"
    :selection-end="propsC.selectionEnd"
    :adjust-position="propsC.adjustPosition"
    :hold-keyboard="propsC.holdKeyboard"
    :auto-blur="propsC.autoBlur"
    :ignore-composition-event="propsC.ignoreCompositionEvent"
    :always-embed="propsC.alwaysEmbed"
    :safe-password-certPath="propsC.safePasswordCertPath"
    :safe-password-length="propsC.safePasswordLength"
    :safe-password-time-stamp="propsC.safePasswordTimeStamp"
    :safe-password-nonce="propsC.safePasswordNonce"
    :safe-password-salt="propsC.safePasswordSalt"
    :safe-password-customHash="propsC.safePasswordCustomHash"
    :random-number="propsC.randomNumber"
    :controlled="propsC.controlled"
    :always-system="propsC.alwaysSystem"
    @click="onClickInput"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
    @confirm="onConfirm"
    @keyboardheightchange="onKeyboardheightchange"
  />
  <view v-if="clearableC && clearableVisible && !!valueR" c-class="c-input__icon-wrap" @click="clear">
    <c-icon :props="{ name: 'close-circle-fill', size: iconSize, color: iconColor, ...clearIconPropsC }" />
  </view>
  <slot v-if="showCountC && maxlengthC" name="count">
    <c-text :props="countPropsC" :text="`${ valueR?.length || 0 } / ${ maxlengthC }`" />
  </slot>
  <view v-if="propsC.rightIcon" c-class="c-input__icon-wrap" @click="onClickRightIcon">
    <c-icon :props="{ color: iconColor, size: iconSize, ...rightIconPropsC }" :name="propsC.rightIcon" />
  </view>
  <slot name="suffix" />
</view>
</template>

<style lang="scss" scoped>
.c-input {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  box-sizing: border-box;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  border-width: 0;
  border-style: solid;
  border-color: #d9d9d9;

  &__disabled {
    opacity: 0.6;
    cursor: no-drop;
  }

  &__input {
    flex-grow: 1;
  }

  &__icon-wrap {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */

    box-sizing: border-box;
    align-self: stretch;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
}
</style>
