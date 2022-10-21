<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { RadioProps } from './types.d'
import { computed, inject, ref, watch } from 'vue'
import { getPropsBoolean, omitProps, mergeProps } from '../../utils'
import { useFontSizes, useColors, useRadius, getSize, getSizes, toCssUnit } from '../../styles'
import {
  formInjectionKeyDisabled,
} from '../c-form/use'
import {
  formItemInjectionKeySize,
  formItemInjectionKeyDisabled,
  formItemInjectionKeyNoFeedback
} from '../c-form-item/use'
import {
  radioGroupInjectionKeyDisabled,
  radioGroupInjectionKeyRadioProps,
  radioGroupInjectionKeyGetIndex,
  radioGroupInjectionKeyUpdateValue,
  radioGroupInjectionKeyValue,
  radioGroupInjectionKeyValidateErrors,
} from '../c-radio-group/use'
import { useConfigs } from './use'

interface Props {
  props?: RadioProps
  cClass?: RadioProps['cClass']
  cStyle?: RadioProps['cStyle']
  iconWrapClase?: RadioProps['iconWrapClass']
  iconWrapStyle?: RadioProps['iconWrapStyle']
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: RadioProps['c']
  /**
   * 勾选框的类型， undefined | default: 背景上色， uni: icon 勾上色。
   * 默认： `undefined`
   */
  activeType?: RadioProps['activeType']
  /**
   * 颜色，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/colors.html) 。
   * 默认： `undefined`
   */
  color?: RadioProps['color']
  /**
   * 字体大小，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/font-sizes.html) 。
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
   * icon 勾，[IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  iconProps?: RadioProps['iconProps']
  /**
   * 文字。
   * 默认： `undefined`
   */
  text?: RadioProps['text']
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
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
   * 圆角值，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/radiuses.html) 。
   * 默认： `undefined`
   */
  radius?: RadioProps['radius']
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: RadioProps['round']
  /**
   * 是否不展示校验反馈。
   * 默认： `undefined`
   */
  noFeedback?: RadioProps['noFeedback']
}

const formDisabled = inject(formInjectionKeyDisabled, ref(false))
const formItemSize = inject(formItemInjectionKeySize, ref(''))
const formItemDisabled = inject(formItemInjectionKeyDisabled, ref(false))
const formItemNoFeedback = inject(formItemInjectionKeyNoFeedback, ref(false))
const radioGroupDisabled = inject(radioGroupInjectionKeyDisabled, ref(false))
const radioGroupRadio = inject(radioGroupInjectionKeyRadioProps, ref({}))
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

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const props2 = computed(() => mergeProps<Props>(radioGroupRadio.value, props1.value))
const propsC = computed(() => mergeProps(configs.value[props2.value.c!], props2.value))

const valueC = computed(() => propsC.value.value || index)
const checkedR = ref(getPropsBoolean(propsC.value.checked))

const colorC = computed<CSSProperties['color']>(() => {
  const { color } = propsC.value
  return color ? colors.value[color] || color : colors.value.primary
})
const readonlyC = computed(() => getPropsBoolean(propsC.value.readonly))
const disabled1 = computed(() => getPropsBoolean(propsC.value.disabled))
const disabledC = computed<boolean>(() => disabled1.value || radioGroupDisabled.value || formItemDisabled.value || formDisabled.value)
const size1 = computed(() => getSize(fontSizes.value, propsC.value.size))
const sizeC = computed<string>(() => size1.value || formItemSize.value || toCssUnit(fontSizes.value.m))
const borderC = computed(() => getPropsBoolean(propsC.value.border))
const borderBottomC = computed(() => getPropsBoolean(propsC.value.borderBottom))
const radius1 = computed(() => getSizes(radiuses.value, propsC.value.radius))
const roundC = computed(() => getPropsBoolean(propsC.value.round))
const radiusC = computed(() => roundC.value ? '9999px' : radius1.value)
const noFeedbackC = computed<boolean>(() => getPropsBoolean(propsC.value.noFeedback) || formItemNoFeedback.value)

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
const styleC = computed(() => mergeProps({ x: [viewStyle1.value, viewStyle2.value] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: [
  'c-radio',
  { 'c-radio__disabled': !formDisabled.value && !formItemDisabled.value && !radioGroupDisabled.value && disabled1.value }
] }, { x: propsC.value.cClass }).x)

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

const iconWrapStyleC = computed(() => mergeProps({ x: [iconWrapSizeStyle.value, iconWrapStyleBgColor.value, iconWrapStyleBorderColor.value] }, { x: propsC.value.iconWrapStyle }).x)
const iconWrapClassC = computed(() => mergeProps({ x: ['c-radio__icon-wrap'] }, { x: propsC.value.iconWrapClass }).x)

const check = () => {
  if (disabledC.value || readonlyC.value || radioGroupValue.value === valueC.value) return;

  radioGroupUpdateValue && radioGroupUpdateValue(valueC.value)
}

watch(() => radioGroupValue.value, (val) => {
  checkedR.value = val === valueC.value
})

if (getPropsBoolean(propsC.value.checked)) {
  radioGroupUpdateValue && radioGroupUpdateValue(valueC.value)
} else if (radioGroupValue.value !== undefined) {
  checkedR.value = radioGroupValue.value === valueC.value
}
</script>

<template>
<view :class="classC" :style="(styleC as any)" @click="check">
  <view :class="iconWrapClassC" :style="(iconWrapStyleC as any)">
    <c-icon v-if="checkedR" :props="{ size: sizeC, ...propsC.iconProps }" :color="iconColor" />
  </view>
  <view class="c-radio__text-wrap">
    <slot>
      <c-text v-if="propsC.text" :props="{ size: sizeC, ...propsC.textProps }" :text="propsC.text" />
    </slot>
  </view>
</view>
</template>

<style lang="scss" scoped>
.c-radio {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
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

    box-sizing: border-box;
    align-items: center;
    justify-content: center;
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

    box-sizing: border-box;
    flex-grow: 1;
    flex-direction: row;
  }
}
</style>
