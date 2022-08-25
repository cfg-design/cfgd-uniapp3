<script setup lang="ts">
import type { CSSProperties, HTMLAttributes } from 'vue'
import type { ValidationTrigger, FormRule } from '../c-form/types.d'
import type { SwitchProps } from './types.d'
import { computed, inject, ref, watch } from 'vue'
import { getPropsBoolean, mergeProps } from '../../utils'
import { useFontSizes, useColors, useRadius, getSize, getSizes, toCssUnit } from '../../styles'
import {
  hasTrigger,
  formInjectionKeySize,
  formInjectionKeyDisabled,
  formInjectionKeyNoFeedback,
  formInjectionKeyRules,
  formInjectionKeyFieldsErrors,
  formInjectionKeyValidateField
} from '../c-form/use'
import {
  formItemInjectionKeySize,
  formItemInjectionKeyDisabled,
  formItemInjectionKeyNoFeedback,
  formItemInjectionKeyPath
} from '../c-form-item/use'
import { useConfigs } from './use'

interface Props {
  /**
   * 配置名。使用 `useSwitchConfigs()` 查看配置数据。使用 `setSwitchConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: SwitchProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: SwitchProps['viewBind']
  /**
   * 颜色。 default 配置为 `primary`。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  color?: SwitchProps['color']
  /**
   * 背景颜色。 default 配置为 `primary`。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  bgColor?: SwitchProps['bgColor']
  /**
   * 字体大小。 default 配置为 m。 useFontSizes() 可以查看配置数据。使用 setFontSizes() 进行配置。
   * 默认： undefined
   */
  size?: SwitchProps['size']
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: SwitchProps['value']
  /**
   * 选中时的值。
   * 默认： `true`
   */
  checkedValue?: SwitchProps['checkedValue']
  /**
   * 非选中时的值。
   * 默认： `false`
   */
  unCheckedValue?: SwitchProps['unCheckedValue']
  /**
   * 选中时的文字。
   * 默认： `undefined`
   */
  checkedText?: SwitchProps['checkedText']
  /**
   * 文字 c-text props 。
   * 默认： `undefined`
   */
  checkedTextProps?: SwitchProps['checkedTextProps']
  /**
   * 非选中时的文字。
   * 默认： `undefined`
   */
  unCheckedText?: SwitchProps['unCheckedText']
  /**
   * 文字 c-text props 。
   * 默认： `undefined`
   */
  unCheckedTextProps?: SwitchProps['unCheckedTextProps']
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: SwitchProps['disabled']
  /**
   * 是否只读。
   * 默认： `undefined`
   */
  readonly?: SwitchProps['readonly']
  /**
   * 加载中的开关。
   * 默认： `undefined`
   */
  loading?: SwitchProps['loading']
  /**
   * 滑动块，view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  sliderBind?: SwitchProps['sliderBind']
  /**
   * 圆角值。 default 配置为 `s`。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
   * 默认： `undefined`
   */
  radius?: SwitchProps['radius']
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: SwitchProps['round']
  /**
   * 表单域 value 对象的属性名。
   * 默认： `undefined`
   */
  path?: SwitchProps['path']
  /**
   * 是否展示校验反馈。
   * 默认： `undefined`
   */
  noFeedback?: SwitchProps['noFeedback']
}

interface Emits {
  (e: 'update:value', v: Props['value']): void
}

const formRules = inject(formInjectionKeyRules, ref())
const formSize = inject(formInjectionKeySize, ref(''))
const formDisabled = inject(formInjectionKeyDisabled, ref(false))
const formNoFeedback = inject(formInjectionKeyNoFeedback, ref(false))
const formFieldsErrors = inject(formInjectionKeyFieldsErrors, ref())
const formValidateField = inject(formInjectionKeyValidateField, undefined)
const formItemSize = inject(formItemInjectionKeySize, ref(''))
const formItemDisabled = inject(formItemInjectionKeyDisabled, ref(false))
const formItemNoFeedback = inject(formItemInjectionKeyNoFeedback, ref(false))
const formItemPath = inject(formItemInjectionKeyPath, ref())

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const colors = useColors()
const fontSizes = useFontSizes()
const radiuses = useRadius()
const configs = useConfigs()

const valueR = ref(props.value)

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
const colorC = computed<string>(() => {
  const { color } = propsC.value
  return color ? colors.value[color] || color : colors.value.primary
})
const bgColorC = computed<string>(() => {
  const { bgColor } = propsC.value
  return bgColor ? colors.value[bgColor] || bgColor : '#dbdbdb'
})
const checkedValueC = computed(() => {
  const { checkedValue } = propsC.value
  return checkedValue === undefined || checkedValue === '' || checkedValue === true ? true : checkedValue
})
const unCheckedValueC = computed(() => {
  const { unCheckedValue } = propsC.value
  return unCheckedValue === undefined || unCheckedValue === '' || unCheckedValue === false ? false : unCheckedValue
})
const isActive = computed(() => checkedValueC.value === valueR.value)
const loadingC = computed(() => getPropsBoolean(propsC.value.loading))
const readonlyC = computed(() => getPropsBoolean(propsC.value.readonly))
const disabled1 = computed(() => getPropsBoolean(propsC.value.disabled))
const disabledC = computed<boolean>(() => disabled1.value || formItemDisabled.value || formDisabled.value)
const size1 = computed(() => getSize(fontSizes.value, propsC.value.size))
const sizeC = computed<string>(() => size1.value || formItemSize.value || formSize.value || toCssUnit(fontSizes.value.m))
const widthC = computed<string>(() => `calc(${sizeC.value} * 3.2)`)
const heightC = computed<string>(() => `calc(${sizeC.value} * 1.6)`)
const loadingSizeC = computed<string>(() => `calc(${sizeC.value} * 1.2)`)
const sliderSizeC = computed<string>(() => `calc(${sizeC.value} * 1.4)`)
const margin1C = computed<string>(() => `calc(${sizeC.value} * 0.1)`)
const margin2C = computed<string>(() => `calc(-${sizeC.value} * 1.5)`)
const paddingLeftC = computed<string>(() => `calc(${sizeC.value} * 0.7)`)
const paddingRightC = computed<string>(() => `calc(${sizeC.value} * 2.1)`)
const radius1 = computed(() => getSizes(radiuses.value, propsC.value.radius))
const roundC = computed(() => getPropsBoolean(propsC.value.round))
const radiusC = computed(() => roundC.value ? '9999px' : radius1.value)
const noFeedbackC = computed<boolean>(() => getPropsBoolean(propsC.value.noFeedback) || formItemNoFeedback.value || formNoFeedback.value)
const pathC = computed(() => propsC.value.path || formItemPath.value)
const rule = computed<FormRule | undefined>(() => !pathC.value || !formRules.value ? undefined : formRules.value[pathC.value])
const validateErrors = computed(() => !pathC.value || !formFieldsErrors.value ? undefined : formFieldsErrors.value[pathC.value])
const hasOnChangeValidate = computed(() => hasTrigger(rule.value, 'change'))

const viewClasses = computed<HTMLAttributes['class']>(() => [{
  'c-switch__disabled': !formDisabled.value && !formItemDisabled.value && disabled1.value,
  'c-switch__avtive': isActive.value
}])

const viewStyles = computed<CSSProperties[]>(() => {
  const style: CSSProperties = {
    borderRadius: radiusC.value,
    minWidth: widthC.value,
    height: heightC.value,
    backgroundColor: bgColorC.value
  }

  if (!noFeedbackC.value && validateErrors.value) {
    style.borderWidth = '1px'
    style.borderColor = colors.value.error
  }
  return [style]
})

const leftStyle = computed<CSSProperties>(() => ({
  paddingLeft: paddingLeftC.value,
  paddingRight: paddingRightC.value,
  backgroundColor: colorC.value
}))
const rightStyle = computed<CSSProperties>(() => ({ paddingLeft: paddingRightC.value, paddingRight: paddingLeftC.value }))

const sliderStyle1 = computed<CSSProperties>(() => isActive.value ? {
  marginLeft: margin2C.value,
} : {
  marginLeft: margin1C.value,
})
const sliderStyles = computed<CSSProperties[]>(() => [sliderStyle1.value, {
  width: sliderSizeC.value,
  height: sliderSizeC.value,
  borderRadius: radiusC.value
}])

const validate = (trigger: ValidationTrigger, time?: number) => {
  clearTimeout(validate.timer)

  validate.timer = setTimeout(() => formValidateField && pathC.value && formValidateField(pathC.value, undefined, trigger), time)
}
validate.timer = 0

const changeValidate = () => hasOnChangeValidate.value && validate('change')

const check = () => {
  if (disabledC.value || readonlyC.value || loadingC.value) return;

  const value = valueR.value !== checkedValueC.value ? checkedValueC.value : unCheckedValueC.value

  if (props.loading === undefined) {
    valueR.value = value

  }

  emits('update:value', value)
}

watch(() => props.value, (v) => {
  valueR.value = v
})

watch(() => valueR.value, changeValidate)
</script>

<template>
<view
  class="c-switch"
  :class="viewClasses"
  v-bind="(propsC.viewBind as any)"
  :style="viewStyles"
  @click="check"
>
  <view class="c-switch__placeholder" :style="([leftStyle] as any)">
    <c-text v-bind="propsC.checkedTextProps" :size="sizeC">{{ propsC.checkedText }}</c-text>
    <c-text v-bind="propsC.unCheckedTextProps" :size="sizeC">{{ propsC.unCheckedText }}</c-text>
  </view>
  <view class="c-switch__rail">
    <view class="c-switch__rail-left" :style="([leftStyle] as any)">
      <c-text v-bind="propsC.checkedTextProps" :size="sizeC">{{ propsC.checkedText }}</c-text>
    </view>
    <view class="c-switch__slider" v-bind="propsC.sliderBind" :style="(sliderStyles as any)">
      <c-spin v-if="loadingC" :icon-size="loadingSizeC" />
    </view>
    <view class="c-switch__rail-right" :style="([rightStyle] as any)">
      <c-text v-bind="propsC.unCheckedTextProps" :size="sizeC">{{ propsC.unCheckedText }}</c-text>
    </view>
  </view>
</view>
</template>

<style lang="scss">
.c-switch {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  border-width: 0;
  border-style: solid;
  border-color: #d9d9d9;

  &__disabled {
    opacity: 0.6;
    cursor: no-drop;
  }

  &__placeholder {
    opacity: 0;
    overflow: hidden;
  }

  &__rail {
    position: absolute;
    top: 0;
    left: -100%;
    display: flex;
    align-items: center;
    width: 200%;
    height: 100%;
    transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &-left {
      opacity: 0;
      transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &-left,
    &-right {
      display: flex;
      align-items: center;
      width: 50%;
      height: 100%;
    }
  }

  &__slider {
    position: absolute;
    top: 0;
    left: 50%;
    bottom: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    background-color: #fff;
    transition: margin 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &__avtive {
    .c-switch__rail {
      left: 0;

      &-left {
        opacity: 1;
      }
    }
  }

  :deep(.c-text) {
    line-height: 1;
  }
}
</style>
