<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { FormItemProps, FormItemConfig } from './types.d'
import type { FormRule, FormItemRule } from '../c-form/types.d'
import { computed, provide, inject, ref  } from 'vue'
import { is, find } from 'ramda'
import { useFontSizes, getSize, toCssUnit } from '../../styles'
import { getPropsBoolean, omitProps, mergeProps } from '../../utils'
import {
  formInjectionKeyRules,
  formInjectionKeyItemConfig,
  formInjectionKeyDisabled,
  formInjectionKeyFieldsErrors,
} from '../c-form/use'
import {
  useConfigs,
  formItemInjectionKeySize,
  formItemInjectionKeyDisabled,
  formItemInjectionKeyPath,
  formItemInjectionKeyNoFeedback,
} from './use'

interface Props {
  props?: FormItemProps
  cClass?: FormItemProps['cClass']
  cStyle?: FormItemProps['cStyle']
  labelClass?: FormItemProps['labelClass']
  labelStyle?: FormItemProps['labelStyle']
  mainClassClass?: FormItemProps['mainClass']
  mainStyleStyle?: FormItemProps['mainStyle']
  contentClass?: FormItemProps['contentClass']
  contentStyle?: FormItemProps['contentStyle']
  /**
   * 配置名。使用 `useFormItemConfigs()` 查看配置数据。使用 `setFormItemConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: FormItemProps['c']
  /**
   * 字体大小。 useFontSizes() 可以查看配置数据。使用 setFontSizes() 进行配置。
   * 默认： `undefined`
   */
  size?: FormItemProps['size']
  /**
   * 表单域 value 对象的属性名。
   * 默认： `undefined`
   */
  path?: FormItemProps['path']
  /**
   * 标签文字。
   * 默认： `undefined`
   */
  label?: FormItemProps['label']
  /**
   * 标签显示的位置。
   * 默认： `undefined`
   */
  labelPlacement?: FormItemProps['labelPlacement']
  /**
   * 标签的宽度。
   * 默认： `undefined`
   */
  labelWidth?: FormItemProps['labelWidth']
  /**
   * 绑定控件的 id 。
   * 默认： `undefined`
   */
  labelFor?: FormItemProps['labelFor']
  /**
   * 标签文字 c-text props 。
   * 默认： `undefined`
   */
  labelTextProps?: FormItemProps['labelTextProps']
  /**
   * 右边图标名称或代码。
   * 默认： `undefined`
   */
  rightIcon?: FormItemProps['rightIcon']
  /**
   * 详情查看 c-icon props 。
   * 默认： `undefined`
   */
  rightIconProps?: FormItemProps['rightIconProps']
  /**
   * 详情查看 c-text props 。
   * 默认： `undefined`
   */
  errorProps?: FormItemProps['errorProps']
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: FormItemProps['disabled']
  /**
   * 是否展示校验反馈。
   * 默认： `undefined`
   */
  noFeedback?: FormItemProps['noFeedback']
  /**
   * 是否展示标签。
   * 默认： `undefined`
   */
  noLabel?: FormItemProps['noLabel']
  /**
   * 是否展示必填的星号。
   * 默认： `undefined`
   */
  noRequireMark?: FormItemProps['noRequireMark']
  /**
   * 是否不显示表单项的下划线边框。
   * 默认： `undefined`
   */
  noBorderBottom?: FormItemProps['noBorderBottom']
  /**
   * 下划线边框 c-line props。
   * 默认： `undefined`
   */
  lineProps?: FormItemProps['lineProps']
}

interface Emits {
  (e: 'click', payload: MouseEvent): void
}

const findRequired = find<FormItemRule>((item) => !!item.required)

const formRules = inject(formInjectionKeyRules, ref())
const formItemProps = inject(formInjectionKeyItemConfig, ref({}))
const formDisabled = inject(formInjectionKeyDisabled, ref(false))
const formFieldsErrors = inject(formInjectionKeyFieldsErrors, ref())

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const fontSizes = useFontSizes()
const configs = useConfigs()

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const props2 = computed(() => mergeProps<FormItemConfig>(configs.value[props1.value.c!], formItemProps.value))
const propsC = computed(() => mergeProps(props2.value, props1.value))
const pathC = computed(() => propsC.value.path)
const ruleItem = computed<FormRule | undefined>(() => !pathC.value || !formRules.value ? undefined : formRules.value[pathC.value])
const required = computed(() => is(Array, ruleItem.value)
  ? !!findRequired(ruleItem.value)
  : ruleItem.value
  ? ruleItem.value.required
  : false
)
const size1 = computed(() => getSize(fontSizes.value, propsC.value.size))
const sizeC = computed(() => size1.value || toCssUnit(fontSizes.value.m))
const rightIconSize = computed(() => sizeC.value.replace(/\d+/, (v) => Math.floor(Number(v) * 1.2) + ''))
const disabledC = computed(() => getPropsBoolean(propsC.value.disabled))
const noFeedbackC = computed<boolean>(() => getPropsBoolean(propsC.value.noFeedback))
const noRequireMarkC = computed<boolean>(() => getPropsBoolean(propsC.value.noRequireMark))
const noBorderBottomC = computed<boolean>(() => getPropsBoolean(propsC.value.noBorderBottom))
const labelWidthC = computed(() => toCssUnit(propsC.value.labelWidth))
const noLabelC = computed<boolean>(() => getPropsBoolean(propsC.value.noLabel))

const classC = computed(() => mergeProps({ x: ['c-form-item', { 'c-form-item__disabled': !formDisabled.value && disabledC.value }] }, { x: propsC.value.cClass }).x)
const styleC = computed(() => mergeProps({ x: [] }, { x: propsC.value.cStyle }).x)

// main
const mainStyle1 = computed(() => {
  const result: CSSProperties = {}

  if (propsC.value.labelPlacement === 'top') {
    result.flexDirection = 'column'
    result.alignItems = 'stretch'
  }

  return result
})
const mainStyleC = computed(() => mergeProps({ x: [mainStyle1.value] }, { x: propsC.value.mainStyle }).x)
const mainclassC = computed(() => mergeProps({ x: ['c-form-item__main'] }, { x: propsC.value.mainClass }).x)

// label
const labelStyle1 = computed(() => {
  const style: CSSProperties = {}

  if (propsC.value.labelPlacement === 'top') {
    style.marginBottom = toCssUnit(8)
  } else if (labelWidthC.value) {
    style.width = labelWidthC.value
    style.flexShrink = 0
  }

  return style
})
const labelStyleC = computed(() => mergeProps({ x: [labelStyle1.value] }, { x: propsC.value.labelStyle }).x)
const labelClass = computed(() => mergeProps({ x: ['c-form-item__label'] }, { x: propsC.value.labelClass }).x)

// content
const contentStyleC = computed(() => mergeProps({ x: [] }, { x: propsC.value.contentStyle }).x)
const contentClass = computed(() => mergeProps({ x: ['c-form-item__content'] }, { x: propsC.value.contentClass }).x)

// error
const validateErrors = computed(() => !pathC.value || !formFieldsErrors.value ? undefined : formFieldsErrors.value[pathC.value])
const errMsg = computed(() => validateErrors.value ? validateErrors.value[0]?.message : undefined)
const errorStyle = computed(() => {
  const result: CSSProperties = {}
  if (labelWidthC.value) {
    result.marginLeft = labelWidthC.value
  }
  return result
})
const errorPropsC = computed(() => mergeProps({
  color: 'error',
  cClass: ['c-form-item__error'],
  cStyle: [errorStyle.value]
}, propsC.value.errorProps))

const onClick = (e: MouseEvent) => emits('click', e)

provide(formItemInjectionKeySize, sizeC)
provide(formItemInjectionKeyDisabled, disabledC)
provide(formItemInjectionKeyPath, pathC)
provide(formItemInjectionKeyNoFeedback, noFeedbackC)
</script>

<template>
<view :class="classC" :style="(styleC as any)" @click="onClick">
  <view :class="mainclassC" :style="(mainStyleC as any)">
    <slot v-if="!noLabelC" name="label">
      <label
         v-if="!noRequireMarkC && required || propsC.label"
        :for="propsC.labelFor"
        :class="labelClass"
        :style="labelStyleC"
      >
        <c-text
          v-if="!noRequireMarkC && required"
          color="error"
          c-class="c-form-item__required-mark"
          :size="sizeC"
          text="*"
        />
        <c-text :props="{ size: sizeC, ...propsC.labelTextProps }" :text="propsC.label" />
      </label>
    </slot>
    <view :class="contentClass" :style="(contentStyleC as any)">
      <slot><text><!-- 左右布局，不能没有元素 --></text></slot>
      <c-icon
        v-if="propsC.rightIcon"
        :props="{ color: 'tertiary', name: propsC.rightIcon, size: rightIconSize, ...propsC.rightIconProps }"
      />
    </view>
  </view>
  <slot v-if="!noFeedbackC && errMsg" name="error" :err-msg="errMsg">
    <c-text :props="errorPropsC" :text="errMsg" />
  </slot>
  <c-line v-if="!noBorderBottomC" :props="propsC.lineProps" />
</view>
</template>

<style lang="scss" scoped>
.c-form-item {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  flex-direction: column;
  box-sizing: border-box;

  &__disabled {
    opacity: 0.6;
    cursor: no-drop;
  }

  &__required-mark {
    padding-right: 6rpx;
  }

  &__error {
    padding-bottom: 8rpx;
  }

  &__main {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */

    flex-direction: row;
    box-sizing: border-box;
    flex-direction: row;
    align-items: center;
    padding: 20rpx 0;
  }

  &__label {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */

    flex-direction: row;
    box-sizing: border-box;
    padding-right: 20rpx;
  }

  &__content {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */

    flex-direction: row;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
  }
}
</style>
