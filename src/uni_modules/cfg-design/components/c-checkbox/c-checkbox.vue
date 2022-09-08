<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { FormRule, ValidationTrigger } from '../c-form/types.d'
import type { CheckboxProps } from './types.d'
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
import {
  checkboxGroupInjectionKeyDisabled,
  checkboxGroupInjectionKeyCheckboxProps,
  checkboxGroupInjectionKeyGetIndex,
  checkboxGroupInjectionKeyCheck,
  checkboxGroupInjectionKeyValue,
} from '../c-checkbox-group/use'
import { useConfigs } from './use'

interface Props {
  props?: CheckboxProps
  cClase?: CheckboxProps['cClass']
  cStyle?: CheckboxProps['cStyle']
  iconWrapClase?: CheckboxProps['iconWrapClass']
  iconWrapStyle?: CheckboxProps['iconWrapStyle']
  /**
   * 配置名。使用 `useCheckboxConfigs()` 查看配置数据。使用 `setCheckboxConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: CheckboxProps['c']
  /**
   * 勾选框的类型， undefined | default: 背景上色， icon: icon 勾上色。
   * 默认： `undefined`
   */
  activeType?: CheckboxProps['activeType']
  /**
   * 颜色。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  color?: CheckboxProps['color']
  /**
   * 字体大小。 useFontSizes() 可以查看配置数据。使用 setFontSizes() 进行配置。
   * 默认： undefined
   */
  size?: CheckboxProps['size']
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: CheckboxProps['value']
  /**
   * 是否选中。
   * 默认： `undefined`
   */
  checked?: CheckboxProps['checked']
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: CheckboxProps['disabled']
  /**
   * 是否只读。
   * 默认： `undefined`
   */
  readonly?: CheckboxProps['readonly']
  /**
   * icon 勾，详情查看 c-icon props 。
   * 默认： `undefined`
   */
  iconProps?: CheckboxProps['iconProps']
  /**
   * 文字。
   * 默认： `undefined`
   */
  text?: CheckboxProps['text']
  /**
   * 文字 c-text props 。
   * 默认： `undefined`
   */
  textProps?: CheckboxProps['textProps']
  /**
   * 是否显示边框。
   * 默认： `undefined`
   */
  border?: CheckboxProps['border']
  /**
   * 是否显示下边框。
   * 默认： `undefined`
   */
  borderBottom?: CheckboxProps['borderBottom']
  /**
   * 圆角值。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
   * 默认： `undefined`
   */
  radius?: CheckboxProps['radius']
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: CheckboxProps['round']
  /**
   * 表单域 value 对象的属性名。
   * 默认： `undefined`
   */
  path?: CheckboxProps['path']
  /**
   * 是否不展示校验反馈。
   * 默认： `undefined`
   */
  noFeedback?: CheckboxProps['noFeedback']
}

interface Emits {
  (e: 'update:checked', v: boolean): void
}

const formRules = inject(formInjectionKeyRules, ref())
const formDisabled = inject(formInjectionKeyDisabled, ref(false))
const formValidateField = inject(formInjectionKeyValidateField, null)
const formFieldsErrors = inject(formInjectionKeyFieldsErrors, ref())
const formItemSize = inject(formItemInjectionKeySize, ref(''))
const formItemDisabled = inject(formItemInjectionKeyDisabled, ref(false))
const formItemPath = inject(formItemInjectionKeyPath, ref())
const formItemNoFeedback = inject(formItemInjectionKeyNoFeedback, ref(false))
const checkboxGroupDisabled = inject(checkboxGroupInjectionKeyDisabled, ref(false))
const checkboxGroupCheckbox = inject(checkboxGroupInjectionKeyCheckboxProps, ref({}))
const checkboxGroupGetIndex = inject(checkboxGroupInjectionKeyGetIndex, () => 0)
const checkboxGroupCheck = inject(checkboxGroupInjectionKeyCheck, null)
const checkboxGroupValue = inject(checkboxGroupInjectionKeyValue, null)

const index = checkboxGroupGetIndex()

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const colors = useColors()
const fontSizes = useFontSizes()
const radiuses = useRadius()
const configs = useConfigs()

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const props2 = computed(() => mergeProps<Props>(checkboxGroupCheckbox.value, props1.value))
const propsC = computed(() => mergeProps(configs.value[props2.value.c!], props2.value))

const valueC = computed(() => propsC.value.value || index)
const checkedR = ref(getPropsBoolean(propsC.value.checked))

const colorC = computed<CSSProperties['color']>(() => {
  const { color } = propsC.value
  return color ? colors.value[color] || color : colors.value.primary
})
const readonlyC = computed(() => getPropsBoolean(propsC.value.readonly))
const disabled1 = computed(() => getPropsBoolean(propsC.value.disabled))
const disabledC = computed<boolean>(() => disabled1.value || checkboxGroupDisabled.value || formItemDisabled.value || formDisabled.value)
const size1 = computed(() => getSize(fontSizes.value, propsC.value.size))
const sizeC = computed<string>(() => size1.value || formItemSize.value || toCssUnit(fontSizes.value.m))
const iconSize = computed(() => sizeC.value.replace(/\d+/, (v) => Math.floor(Number(v) * 1.2) + ''))
const borderC = computed(() => getPropsBoolean(propsC.value.border))
const borderBottomC = computed(() => getPropsBoolean(propsC.value.borderBottom))
const radius1 = computed(() => propsC.value.radius !== undefined ? propsC.value.radius : 's')
const radius2 = computed(() => getSizes(radiuses.value, radius1.value))
const roundC = computed(() => getPropsBoolean(propsC.value.round))
const radiusC = computed(() => roundC.value ? '9999px' : radius2.value)
const pathC = computed(() => propsC.value.path || formItemPath.value)
const rule = computed<FormRule | undefined>(() => !pathC.value || !formRules.value ? undefined : formRules.value[pathC.value])
const hasOnChangeValidate = computed(() => hasTrigger(rule.value, 'change'))
const validateErrors = computed(() => !pathC.value || !formFieldsErrors.value ? undefined : formFieldsErrors.value[pathC.value])
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
  if (!noFeedbackC.value && validateErrors.value) {
    style.borderColor = colors.value.error
  }
  return style
})

const styleC = computed(() => mergeProps({ x: [viewStyle1.value, viewStyle2.value] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: [
  'c-checkbox',
  { 'c-checkbox__disabled': !formDisabled.value && !formItemDisabled.value && !checkboxGroupDisabled.value && disabled1.value }
] }, { x: propsC.value.cClass }).x)

const iconColor = computed(() => propsC.value.activeType === 'icon' ? colorC.value : propsC.value.iconProps?.color || '#fff')
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
  borderColor: !noFeedbackC.value && validateErrors.value ? colors.value.error : iconWrapColor.value
}))
const iconWrapStyleBgColor = computed<CSSProperties>(() => ({ backgroundColor: iconWrapColor.value }))

const iconWrapStyleC = computed(() => mergeProps({ x: [iconWrapSizeStyle.value, iconWrapStyleBgColor.value, iconWrapStyleBorderColor.value] }, { x: propsC.value.iconWrapStyle }).x)
const iconWrapClassC = computed(() => mergeProps({ x: ['c-checkbox__icon-wrap'] }, { x: propsC.value.iconWrapClass }).x)

const validate = (trigger: ValidationTrigger, time?: number) => {
  clearTimeout(validate.timer)

  validate.timer = setTimeout(() => formValidateField && pathC.value && formValidateField(pathC.value, undefined, trigger), time)
}
validate.timer = 0

const changeValidate = () => hasOnChangeValidate.value && validate('change')

const setChecked = (is: boolean) => {
  checkedR.value = is
  checkboxGroupCheck && checkboxGroupCheck(valueC.value, checkedR.value)
}

const check = () => {
  if (disabledC.value || readonlyC.value) return;

  setChecked(!checkedR.value)
  emits('update:checked', checkedR.value)
}

if (propsC.value.checked !== undefined) {
  setChecked(checkedR.value)
} else if (checkboxGroupValue?.value !== undefined) {
  checkedR.value = checkboxGroupValue.value.includes(valueC.value)
}

watch(() => propsC.value.checked, (val) => setChecked(!!val))

watch(() => checkedR.value, changeValidate)

watch(() => checkboxGroupValue?.value, (val) => {
  checkedR.value = !!val && val.includes(valueC.value)
})
</script>

<template>
<view :class="classC" :style="(styleC as any)" @click="check">
  <view :class="iconWrapClassC" :style="(iconWrapStyleC as any)">
    <c-icon v-if="checkedR" :props="{ name: 'check-line', size: iconSize, ...propsC.iconProps }" :color="iconColor" />
  </view>
  <view class="c-checkbox__text-wrap">
    <slot>
      <c-text v-if="propsC.text" :props="{ size: sizeC, ...propsC.textProps }" :text="propsC.text" />
    </slot>
  </view>
</view>
</template>

<style lang="scss" scoped>
.c-checkbox {
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
    border-radius: 6rpx;
  }

  &__text-wrap {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    box-sizing: border-box;

    flex-direction: row;
    flex-grow: 1;
  }
}
</style>
