<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { RadioProps } from './types.d'
import { computed, inject, ref, watch } from 'vue'
import { getPropsBoolean, mergeProps } from '../../utils'
import { useFontSizes, useColors, useRadius, getSize, getSizes, toCssUnit } from '../../styles'
import {
  formInjectionKeySize,
  formInjectionKeyDisabled,
  formInjectionKeyNoFeedback
} from '../c-form/use'
import {
  formItemInjectionKeySize,
  formItemInjectionKeyDisabled,
  formItemInjectionKeyNoFeedback
} from '../c-form-item/use'
import {
  radioGroupInjectionKeyDisabled,
  radioGroupInjectionKeyRadio,
  radioGroupInjectionKeyGetIndex,
  radioGroupInjectionKeyUpdateValue,
  radioGroupInjectionKeyValue,
  radioGroupInjectionKeyValidateErrors,
} from '../c-radio-group/use'
import { useConfigs } from './use'

interface Props {
  /**
   * 配置名。使用 `useRadioConfigs()` 查看配置数据。使用 `setRadioConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: RadioProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: RadioProps['viewBind']
  /**
   * 勾选框的类型， undefined | default: 背景上色， uni: icon 勾上色。
   * 默认： `undefined`
   */
  activeType?: RadioProps['activeType']
  /**
   * 颜色。 default 配置为 `primary`。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  color?: RadioProps['color']
  /**
   * 字体大小。 default 配置为 m。 useFontSizes() 可以查看配置数据。使用 setFontSizes() 进行配置。
   * 默认： undefined
   */
  size?: RadioProps['size']
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: RadioProps['value']
  /**
   * 是否选中。
   * 默认： `undefined`
   */
  checked?: RadioProps['checked']
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: RadioProps['disabled']
  /**
   * 是否只读。
   * 默认： `undefined`
   */
  readonly?: RadioProps['readonly']
  /**
   * 勾选的边框，view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  iconWrapBind?: RadioProps['iconWrapBind']
  /**
   * icon 勾，详情查看 c-icon props 。
   * 默认： `undefined`
   */
  iconProps?: RadioProps['iconProps']
  /**
   * 文字。
   * 默认： `undefined`
   */
  text?: RadioProps['text']
  /**
   * 文字 c-text props 。
   * 默认： `undefined`
   */
  textProps?: RadioProps['textProps']
  /**
   * 是否显示边框。
   * 默认： `undefined`
   */
  border?: RadioProps['border']
  /**
   * 是否显示下边框。
   * 默认： `undefined`
   */
  borderBottom?: RadioProps['borderBottom']
  /**
   * 圆角值。 default 配置为 `s`。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
   * 默认： `undefined`
   */
  radius?: RadioProps['radius']
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: RadioProps['round']
  /**
   * 是否展示校验反馈。
   * 默认： `undefined`
   */
  noFeedback?: RadioProps['noFeedback']
}

const formSize = inject(formInjectionKeySize, ref(''))
const formDisabled = inject(formInjectionKeyDisabled, ref(false))
const formNoFeedback = inject(formInjectionKeyNoFeedback, ref(false))
const formItemSize = inject(formItemInjectionKeySize, ref(''))
const formItemDisabled = inject(formItemInjectionKeyDisabled, ref(false))
const formItemNoFeedback = inject(formItemInjectionKeyNoFeedback, ref(false))
const radioGroupDisabled = inject(radioGroupInjectionKeyDisabled, ref(false))
const radioGroupRadio = inject(radioGroupInjectionKeyRadio, ref())
const radioGroupGetIndex = inject(radioGroupInjectionKeyGetIndex, () => 0)
const radioGroupUpdateValue = inject(radioGroupInjectionKeyUpdateValue, null)
const radioGroupValue = inject(radioGroupInjectionKeyValue, ref())
const radioGroupValidateErrors = inject(radioGroupInjectionKeyValidateErrors, ref())

const index = radioGroupGetIndex()

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const colors = useColors()
const fontSizes = useFontSizes()
const radiuses = useRadius()
const configs = useConfigs()

const checkedR = ref(getPropsBoolean(props.checked))

const props1 = computed<Props>(() => mergeProps(configs.value[props.c], { ...radioGroupRadio.value }))
const propsC = computed<Props>(() => mergeProps(props1.value, props))
const valueC = computed(() => props.value || index)
const colorC = computed<CSSProperties['color']>(() => {
  const { color } = propsC.value
  return color ? colors.value[color] || color : colors.value.primary
})
const readonlyC = computed(() => getPropsBoolean(propsC.value.readonly))
const disabled1 = computed(() => getPropsBoolean(propsC.value.disabled))
const disabledC = computed<boolean>(() => disabled1.value || radioGroupDisabled.value || formItemDisabled.value || formDisabled.value)
const size1 = computed(() => getSize(fontSizes.value, propsC.value.size))
const sizeC = computed<string>(() => size1.value || formItemSize.value || formSize.value || toCssUnit(fontSizes.value.m))
const borderC = computed(() => getPropsBoolean(propsC.value.border))
const borderBottomC = computed(() => getPropsBoolean(propsC.value.borderBottom))
const radius1 = computed(() => getSizes(radiuses.value, propsC.value.radius))
const roundC = computed(() => getPropsBoolean(propsC.value.round))
const radiusC = computed(() => roundC.value ? '9999px' : radius1.value)
const noFeedbackC = computed<boolean>(() => getPropsBoolean(propsC.value.noFeedback) || formItemNoFeedback.value || formNoFeedback.value)

const viewStyle1 = computed(() => {
  const style: CSSProperties = {}

  if (borderC.value) {
    style.borderWidth = '1px'
    style.borderRadius = radiusC.value
    style.padding = `calc(${sizeC.value} * 0.5)`
  } else if (borderBottomC.value) {
    style.borderBottomWidth = '1px'
    style.paddingBottom = `calc(${sizeC.value} * 0.5)`
  }

  return style
})
const viewStyle2 = computed<CSSProperties>(() => {
  const style: CSSProperties = {}
  if (!noFeedbackC.value && radioGroupValidateErrors.value) {
    style.borderColor = colors.value.error
  }
  return style
})

const viewStyles = computed<CSSProperties[]>(() => [viewStyle1.value, viewStyle2.value])

const iconColor = computed(() => propsC.value.activeType === 'icon' ? colorC.value : propsC.value.iconProps?.color)
const iconWrapSize = computed(() => `calc(${sizeC.value} * 1.4)`)
const iconWrapSizeStyle = computed<CSSProperties>(() => ({
    width: iconWrapSize.value,
    height: iconWrapSize.value
  }))
const iconWrapColor = computed<CSSProperties['color']>(() => {
  const { activeType } = propsC.value
  return (!activeType || activeType !== 'icon') && checkedR.value ? colorC.value : undefined
})
const iconWrapStyleBorderColor = computed<CSSProperties>(() => ({
  borderColor: !noFeedbackC.value && radioGroupValidateErrors.value ? colors.value.error : iconWrapColor.value
}))
const iconWrapStyleBgColor = computed<CSSProperties>(() => ({ backgroundColor: iconWrapColor.value }))

const iconWrapStyles = computed<CSSProperties[]>(() => [iconWrapSizeStyle.value, iconWrapStyleBgColor.value, iconWrapStyleBorderColor.value])

const check = () => {
  if (disabledC.value || readonlyC.value || radioGroupValue.value === valueC.value) return;

  radioGroupUpdateValue && radioGroupUpdateValue(valueC.value)
}

watch(() => radioGroupValue.value, (val) => {
  checkedR.value = val === valueC.value
})

if (getPropsBoolean(props.checked)) {
  radioGroupUpdateValue && radioGroupUpdateValue(valueC.value)
} else if (radioGroupValue.value !== undefined) {
  checkedR.value = radioGroupValue.value === valueC.value
}
</script>

<template>
<view
  class="c-radio"
  :class="[{ 'c-radio__disabled': !formDisabled && !formItemDisabled && !radioGroupDisabled && disabled1 }]"
  v-bind="(propsC.viewBind as any)"
  :style="viewStyles"
  @click="check"
>
  <view
    class="c-radio__icon-wrap"
    v-bind="(propsC.iconWrapBind as any)"
    :style="iconWrapStyles"
  >
    <c-icon v-if="checkedR" v-bind="propsC.iconProps" :size="sizeC" :color="iconColor" />
  </view>
  <view class="c-radio__text-wrap">
    <slot>
      <c-text v-if="propsC.text" v-bind="propsC.textProps" :size="sizeC">{{ propsC.text }}</c-text>
    </slot>
  </view>
</view>
</template>

<style lang="scss">
.c-radio {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  align-items: center;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #d9d9d9;

  &__disabled {
    opacity: 0.6;
    cursor: no-drop;
  }

  &__icon-wrap {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */

    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-right: 10rpx;
    border-width: 1px;
    border-style: solid;
    border-color: #c8c9cc;
    border-radius: 999px;
  }

  &__text-wrap {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */

    flex-grow: 1;
  }
}
</style>
