<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { TextareaProps } from './types.d'
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
  props?: TextareaProps
  cClass?: TextareaProps['cClass']
  cStyle?: TextareaProps['cStyle']
  /**
   * 配置名。使用 `useTextareaConfigs()` 查看配置数据。使用 `setTextareaConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: TextareaProps['c']
  /**
   * 字体的大小。
   * 默认： `undefined`
   */
  size?: TextareaProps['size']
  /**
   * 高度。
   * 默认： `undefined`
   */
  height?: TextareaProps['height']
  /**
   * 是否只读。
   * 默认： `undefined`
   */
  readonly?: TextareaProps['readonly']
  /**
   * 是否显示输入字数统计。
   * 默认： `undefined`
   */
  showCount?: TextareaProps['showCount']
  /**
   * 输入字数统计的 c-text Props 。
   * 默认： `undefined`
   */
  countTextProps?: TextareaProps['countTextProps']
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
   * 圆角值。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
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
  /**
   * 输入框的内容
   */
  value?: TextareaProps['value']
  /**
   * 输入框为空时占位符
   */
  placeholder?: TextareaProps['placeholder']
  /**
   * 指定 placeholder 的样式
   */
  placeholderStyle?: TextareaProps['placeholderStyle']
  /**
   * 指定 placeholder 的样式类，注意页面或组件的style中写了scoped时，需要在类名使用`:deep`。
   * 字节跳动小程序、飞书小程序、快手小程序不支持
   */
  placeholderClass?: TextareaProps['placeholderClass']
  /**
   * 是否禁用
   */
  disabled?: TextareaProps['disabled']
  /**
   * 最大输入长度，设置为 -1 的时候不限制最大长度
   */
  maxlength?: TextareaProps['maxlength']
  /**
   * 获取焦点。
   * 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点
   */
  focus?: TextareaProps['focus']
  /**
   * 自动聚焦，拉起键盘。
   * 京东小程序
   */
  autoFocus?: TextareaProps['autoFocus']
  /**
   * 是否自动增高，设置auto-height时，style.height不生效。
   */
  autoHeight?: TextareaProps['autoHeight']
  /**
   * 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true。
   * 微信小程序、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、快手小程序、京东小程序
   */
  fixed?: TextareaProps['fixed']
  /**
   * 指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离。
   * App、微信小程序、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、京东小程序
   */
  cursorSpacing?: TextareaProps['cursorSpacing']
  /**
   * 指定focus时的光标位置。
   * 微信小程序、App、H5、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、京东小程序
   */
  cursor?: TextareaProps['cursor']
  /**
   * 设置键盘右下角按钮的文字
   * 微信小程序基础库2.13.0+、App-vue和H5(2.9.9+，且要求设备webview内核Chrome81+、Safari13.7+)
   */
  confirmType?: TextareaProps['confirmType']
  /**
   * 点击键盘右下角按钮时是否保持键盘不收起。
   * App(3.3.7+)、H5 (3.3.7+)、微信小程序 (基础库 2.16.0+)、百度小程序 (基础库 3.130.1+)、快手小程序
   */
  confirmHold?: TextareaProps['confirmHold']
  /**
   * 是否显示键盘上方带有”完成“按钮那一栏。
   * 微信小程序、百度小程序、QQ小程序、京东小程序
   */
  showConfirmBar?: TextareaProps['showConfirmBar']
  /**
   * 光标起始位置，自动聚焦时有效，需与selection-end搭配使用。
   * 微信小程序、App、H5、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、京东小程序
   */
  selectionStart?: TextareaProps['selectionStart']
  /**
   * 光标结束位置，自动聚焦时有效，需与selection-start搭配使用。
   * 微信小程序、App、H5、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、京东小程序
   */
  selectionEnd?: TextareaProps['selectionEnd']
  /**
   * 键盘弹起时，是否自动上推页面。
   * App-Android（softinputMode 为 adjustResize 时无效）、微信小程序、百度小程序、QQ小程序、京东小程序
   */
  adjustPosition?: TextareaProps['adjustPosition']
  /**
   * 是否去掉 iOS 下的默认内边距。
   * 微信小程序2.10.0、飞书小程序 3.46
   */
  disableDefaultPadding?: TextareaProps['disableDefaultPadding']
  /**
   * focus时，点击页面的时候不收起键盘。
   * 微信小程序2.8.2
   */
  holdKeyboard?: boolean
  /**
   * 键盘收起时，是否自动失去焦点。
   * App-vue 3.0.0+ ，App-nvue不支持
   */
  autoBlur?: boolean
  /**
   * 是否忽略组件内对文本合成系统事件的处理。为 false 时将触发 compositionstart、compositionend、compositionupdate 事件，且在文本合成期间会触发 input 事件。
   * App-vue (3.4.4+)、H5 (3.4.4+)、App-nvue不支持
   */
  ignoreCompositionEvent?: boolean
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
const formDisabled = inject(formInjectionKeyDisabled, ref())
const formValidateField = inject(formInjectionKeyValidateField, undefined)
const formFieldsErrors = inject(formInjectionKeyFieldsErrors, ref())
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

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))

const valueR = ref(propsC.value.value)
const isFocus = ref(getPropsBoolean(propsC.value.focus))
const textareaRef = ref(null) as any

const pathC = computed(() => propsC.value.path || formItemPath.value)
const rule = computed<FormRule | undefined>(() => !pathC.value || !formRules.value ? undefined : formRules.value[pathC.value])
const validateErrors = computed(() => !pathC.value || !formFieldsErrors.value ? undefined : formFieldsErrors.value[pathC.value])
const size1 = computed<string | undefined>(() => getSize(fontSizes.value, propsC.value.size))
const sizeC = computed<string>(() => size1.value || formItemSize.value || toCssUnit(fontSizes.value.m))
const autoHeightC = computed(() => getPropsBoolean(propsC.value.autoHeight))
const disabled1 = computed(() => getPropsBoolean(propsC.value.disabled))
const disabledC = computed<boolean>(() => disabled1.value || formDisabled.value || formItemDisabled.value || false)
const readonlyC = computed<boolean>(() => getPropsBoolean(propsC.value.readonly) || disabledC.value)
const borderC = computed(() => getPropsBoolean(propsC.value.border))
const borderBottomC = computed(() => getPropsBoolean(propsC.value.borderBottom))
const showCountC = computed(() => getPropsBoolean(propsC.value.showCount))
const maxlengthC = computed(() => propsC.value.maxlength || 140)
const radius1 = computed(() => propsC.value.radius !== undefined ? propsC.value.radius : 's')
const radiusC = computed(() => getSizes(radiuses.value, radius1.value))
const noFeedbackC = computed<boolean>(() => getPropsBoolean(propsC.value.noFeedback) || formItemNoFeedback.value || false)
const countSize = computed(() => sizeC.value.replace(/\d+/, (v) => Math.floor(Number(v) * 0.9) + ''))
const textareaClass = computed(() => mergeProps({ x: ['c-textarea__textarea'] }, { x: propsC.value.cClass }).x)

const textareaStyle1 = computed<CSSProperties>(() => {
  const result: CSSProperties = {
    color: colors.value.main,
    fontSize: sizeC.value
  }

  if (!autoHeightC.value && propsC.value.height) {
    result.height = propsC.value.height
  }

  if (borderC.value) {
    result.borderWidth = '1px'
    result.borderRadius = radiusC.value
    result.padding = `calc(${sizeC.value} * 0.65)`
    // #ifdef MP
    result.minHeight = `calc(${sizeC.value} * 0.65 * 2 + ${sizeC.value} * 1.4)`
    // #endif
  } else if (borderBottomC.value) {
    result.paddingBottom = `calc(${sizeC.value} * 0.4)`
    result.borderBottomWidth = '1px'
    // #ifdef MP
    result.minHeight = `calc(${sizeC.value} * 0.4 + ${sizeC.value} * 1.4)`
    // #endif
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
const textareaStyles = computed(() => mergeProps({ x: propsC.value.cStyle }, { x: [textareaStyle1.value, textareaStyle2.value] }).x)

const placeholderStyle = computed<string>(() => {
  let style = propsC.value.placeholderStyle || ''
  if (style && !/;$/.test(style)) {
    style += ';'
  }
  return `${style}font-size: ${sizeC.value};color: ${colors.value.placeholder};`
})

const styles = computed(() => mergeProps({ x: [] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: [
  'c-textarea',
  { 'c-textarea__disabled': !formDisabled.value && !formItemDisabled.value && disabled1.value }
] }, { x: propsC.value.cClass }).x)

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

watch(() => propsC.value.value, (val) => {
  valueR.value = val
})

watch(() => valueR.value, changeValidate)

defineExpose({ focus })
</script>

<template>
<view :class="classC" :style="(styles as any)">
  <textarea
    ref="textareaRef"
    v-model="valueR"
    :class="textareaClass"
    :style="textareaStyles"
    :auto-height="autoHeightC"
    :focus="isFocus"
    :placeholder-style="placeholderStyle"
    :disabled="readonlyC"
    :maxlength="maxlengthC"
    :placeholder="propsC.placeholder || '请输入'"
    :placeholder-class="propsC.placeholderClass"
    :auto-focus="getPropsBoolean(propsC.autoFocus)"
    :fixed="getPropsBoolean(propsC.fixed)"
    :cursor-spacing="propsC.cursorSpacing"
    :cursor="propsC.cursor"
    :confirm-type="propsC.confirmType"
    :confirm-hold="getPropsBoolean(propsC.confirmHold)"
    :show-confirm-bar="propsC.showConfirmBar !== false"
    :selection-start="propsC.selectionStart"
    :selection-end="propsC.selectionEnd"
    :adjust-position="propsC.adjustPosition !== false"
    :disable-default-padding="getPropsBoolean(propsC.disableDefaultPadding)"
    :hold-keyboard="getPropsBoolean(propsC.holdKeyboard)"
    :auto-blur="getPropsBoolean(propsC.autoBlur)"
    :ignore-composition-event="propsC.ignoreCompositionEvent !== false"
    @input="onInput"
    @focus="onFocus"
    @blur="onBlur"
    @confirm="onConfirm"
    @keyboardheightchange="onKeyboardheightchange"
  />
  <view v-if="showCountC && maxlengthC" class="c-textarea__count-wrap">
    <slot name="count" :value="valueR">
      <c-text :props="{ size: countSize, color: 'secondary', ...propsC.countTextProps }" :text="`${ valueR?.length || 0 } / ${ maxlengthC }`" />
    </slot>
  </view>
</view>
</template>

<style lang="scss" scoped>
.c-textarea {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  box-sizing: border-box;
  position: relative;
  flex-grow: 1;

  &__ {
    &disabled {
      opacity: 0.6;
      cursor: no-drop;
    }

    &textarea {
      border-width: 0;
      border-style: solid;
      border-color: #d9d9d9;
      flex-grow: 1;
      width: auto;
      box-sizing: border-box;
    }

    &count-wrap {
      /* #ifndef APP-NVUE */
      display: flex;
      /* #endif */

      box-sizing: border-box;
      position: absolute;
      right: 10rpx;
      bottom: 8rpx;
      border-radius: 16rpx;
      pointer-events: none;
    }
  }

}
</style>
