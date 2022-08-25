<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { FormItemProps } from './types.d'
import type { FormRule, FormItemRule } from '../c-form/types.d'
import { computed, provide, inject, ref  } from 'vue'
import { is, find } from 'ramda'
import { useFontSizes, getSize, toCssUnit } from '../../styles'
import { getPropsBoolean, mergeProps } from '../../utils'
import {
  formInjectionKeyRules,
  formInjectionKeySize,
  formInjectionKeyDisabled,
  formInjectionKeyNoFeedback,
  formInjectionKeyNoRequireMark,
  formInjectionKeyNoBorderBottom,
  formInjectionKeyNoLabel,
  formInjectionKeyLabel,
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
  /**
   * 配置名。使用 `useFormItemConfigs()` 查看配置数据。使用 `setFormItemConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: FormItemProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: FormItemProps['viewBind']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  mainBind?: FormItemProps['mainBind']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  contentBind?: FormItemProps['contentBind']
  /**
   * 字体大小。 default 配置为 m。 useFontSizes() 可以查看配置数据。使用 setFontSizes() 进行配置。
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
   * 标签的 align-self 和 align-items。
   * 默认： `undefined`
   */
  labelAlign?: FormItemProps['labelAlign']
  /**
   * 标签的 justify-content。
   * 默认： `undefined`
   */
  labelJustify?: FormItemProps['labelJustify']
  /**
   * label 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  labelBind?: FormItemProps['labelBind']
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
const formSize = inject(formInjectionKeySize, ref(''))
const formDisabled = inject(formInjectionKeyDisabled, ref(false))
const formNoFeedback = inject(formInjectionKeyNoFeedback, ref(false))
const formNoRequireMark = inject(formInjectionKeyNoRequireMark, ref(false))
const formNoBorderBottom = inject(formInjectionKeyNoBorderBottom, ref(false))
const formNoLabel = inject(formInjectionKeyNoLabel, ref(false))
const formLabel = inject(formInjectionKeyLabel, ref())
const formFieldsErrors = inject(formInjectionKeyFieldsErrors, ref())

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const fontSizes = useFontSizes()
const configs = useConfigs()

const props1 = computed<Props>(() => mergeProps(configs.value[props.c], { ...formLabel.value }))
const propsC = computed<Props>(() => mergeProps(props1.value, props))
const pathC = computed(() => propsC.value.path)
const ruleItem = computed<FormRule | undefined>(() => !pathC.value || !formRules.value ? undefined : formRules.value[pathC.value])
const required = computed(() => is(Array, ruleItem.value)
  ? !!findRequired(ruleItem.value)
  : ruleItem.value
  ? ruleItem.value.required
  : false
)
const size1 = computed(() => getSize(fontSizes.value, propsC.value.size))
const sizeC = computed(() => size1.value || formSize.value || toCssUnit(fontSizes.value.m))
const rightIconSize = computed(() => sizeC.value.replace(/\d+/, (v) => Math.floor(Number(v) * 1.2) + ''))
const disabledC = computed(() => getPropsBoolean(propsC.value.disabled))
const noFeedbackC = computed<boolean>(() => getPropsBoolean(propsC.value.noFeedback) || formNoFeedback.value)
const noRequireMarkC = computed<boolean>(() => getPropsBoolean(propsC.value.noRequireMark) || formNoRequireMark.value)
const noBorderBottomC = computed<boolean>(() => getPropsBoolean(propsC.value.noBorderBottom) || formNoBorderBottom.value)
const labelWidthC = computed(() => toCssUnit(propsC.value.labelWidth))
const noLabelC = computed<boolean>(() => getPropsBoolean(propsC.value.noLabel) || formNoLabel.value)

// main
const mainStyles = computed<CSSProperties[]>(() => {
  const result: CSSProperties = {}

  if (propsC.value.labelPlacement === 'top') {
    result.flexDirection = 'column'
    result.alignItems = 'stretch'
  }

  return [result]
})
const mainBindC = computed(() => mergeProps(propsC.value.mainBind, { style: mainStyles.value } ))

// label
const labelStyles = computed<CSSProperties[]>(() => {
  const result: CSSProperties = {}
  const { labelPlacement, labelAlign, labelJustify } = propsC.value

  if (labelPlacement === 'top') {
    result.marginBottom = toCssUnit(8)
  } else if (labelWidthC.value) {
    result.width = labelWidthC.value
  }

  if (labelAlign) {
    result.alignSelf = labelAlign
    result.alignItems = labelAlign
  }

  if (labelJustify) {
    result.justifyContent = labelJustify
  }

  return [result]
})

// error
const validateErrors = computed(() => !pathC.value || !formFieldsErrors.value ? undefined : formFieldsErrors.value[pathC.value])
const errMsg = computed(() => validateErrors.value ? validateErrors.value[0]?.message : undefined)
const errorStyles = computed<CSSProperties[]>(() => {
  const result: CSSProperties = {}
  if (labelWidthC.value) {
    result.marginLeft = labelWidthC.value
  }
  return [result]
})
const errorPropsC = computed(() => mergeProps(propsC.value.errorProps, {
  textBind: {
    class: ['c-form-item__error'],
    style: errorStyles.value
  }
}))

const onClick = (e: MouseEvent) => emits('click', e)

provide(formItemInjectionKeySize, sizeC)
provide(formItemInjectionKeyDisabled, disabledC)
provide(formItemInjectionKeyPath, pathC)
provide(formItemInjectionKeyNoFeedback, noFeedbackC)
</script>

<template>
<view
  class="c-form-item"
  v-bind="(propsC.viewBind as any)"
  :class="[{ 'c-form-item__disabled': !formDisabled && disabledC }]"
  @click="onClick"
>
  <view class="c-form-item__main" v-bind="(mainBindC as any)">
    <slot v-if="!noLabelC" name="label">
      <label
         v-if="!noRequireMarkC && required || propsC.label"
        class="c-form-item__label"
        v-bind="propsC.labelBind"
        :style="labelStyles"
      >
        <c-text
          v-if="!noRequireMarkC && required"
          v-bind="{ textBind: { class: ['c-form-item__required-mark'] } }"
          color="error"
          :size="sizeC"
          >*</c-text
        >
        <c-text v-bind="propsC.labelTextProps" :size="sizeC">{{ propsC.label }}</c-text>
      </label>
    </slot>
    <view class="c-form-item__content" v-bind="(propsC.contentBind as any)">
      <slot><text><!-- 左右布局，不能没有元素 --></text></slot>
      <c-icon v-if="propsC.rightIcon" v-bind="propsC.rightIconProps" :name="propsC.rightIcon" :size="rightIconSize" />
    </view>
  </view>
  <slot v-if="!noFeedbackC && errMsg" name="error" :err-msg="errMsg">
    <c-text color="error" v-bind="(errorPropsC as any)">{{ errMsg }}</c-text>
  </slot>
  <c-line v-if="!noBorderBottomC" v-bind="propsC.lineProps" />
</view>
</template>

<style lang="scss">
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
    align-items: center;
    box-sizing: border-box;
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
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    box-sizing: border-box;
  }
}
</style>
