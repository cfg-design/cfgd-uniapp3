<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { ButtonProps } from './types.d'
import { computed } from 'vue'
import { useColors, useRadius, useFontSizes, getSize, getSizes, toCssUnit } from '../../styles'
import { getPropsBoolean, mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  /**
   * 配置名。使用 `useButtonConfigs()` 查看配置数据。使用 `setButtonConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: ButtonProps['c']
  /**
   * button 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  buttonBind?: ButtonProps['buttonBind']
  /**
   * 用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件
   * 默认： `undefined`
   */
  formType?: ButtonProps['formType']
  /**
   * 颜色。 useColors() 可以查看配置数据。使用 setColors() 进行配置。
   * 默认： undefined
   */
  color?: ButtonProps['color']
  /**
   * 渐变结束颜色。 useColors() 可以查看配置数据。使用 setColors() 进行配置。
   * 默认： undefined
   */
  color2?: ButtonProps['color2']
  /**
   * 字体大小。 default 配置为 m。 useFontSizes() 可以查看配置数据。使用 setFontSizes() 进行配置。
   * 默认： undefined
   */
  size?: ButtonProps['size']
  /**
   * 宽度
   * 默认： `undefined`
   */
  width?: ButtonProps['width']
  /**
   * 高度
   * 默认： `undefined`
   */
  height?: ButtonProps['height']
  /**
   * 文字
   * 默认： `undefined`
   */
  text?: ButtonProps['text']
  /**
   * 文字的颜色。 default 配置为 `#fff`。详情查看 c-text props.color
   * 默认： `undefined`
   */
  textColor?: ButtonProps['textColor']
  /**
   * 详情查看 c-text props
   * 默认： `undefined`
   */
  textProps?: ButtonProps['textProps']
  /**
   * 图标。
   * 默认： `undefined`
   */
  icon?: ButtonProps['icon']
  /**
   * 详情查看 c-icon props
   * 默认： `undefined`
   */
  iconProps?: ButtonProps['iconProps']
  /**
   * 圆角值。 default 配置为 `s`。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
   * 默认： `undefined`
   */
  radius?: ButtonProps['radius']
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: ButtonProps['round']
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: ButtonProps['disabled']
  /**
   * 是否加载。
   * 默认： `undefined`
   */
  loading?: ButtonProps['loading']
  /**
   * 详情查看 c-spin props
   * 默认： `undefined`
   */
  spinProps?: ButtonProps['spinProps']
  /**
   * 是否镂空。
   * 默认： `undefined`
   */
  plain?: ButtonProps['plain']
}

interface Emits {
  (e: 'click', payload: MouseEvent): void
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const configs = useConfigs()
const colors = useColors()
const fontSizes = useFontSizes()
const radiuses = useRadius()

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
const colorC1 = computed<CSSProperties['color']>(() => {
  const { color } = propsC.value
  return color ? colors.value[color] || color : undefined
})
const colorC2 = computed<CSSProperties['color']>(() => {
  const { color2 } = propsC.value
  return color2 ? colors.value[color2] || color2 : undefined
})
const sizeC = computed(() => getSize(fontSizes.value, propsC.value.size || configs.value.default.size))
const radiusC1 = computed(() => getSizes(radiuses.value, propsC.value.radius))
const roundC = computed(() => getPropsBoolean(propsC.value.round))
const radiusC = computed(() => roundC.value ? '9999px' : radiusC1.value)
const plainC = computed(() => getPropsBoolean(propsC.value.plain))
const loadingC = computed(() => getPropsBoolean(propsC.value.loading))
const disabledC = computed(() => getPropsBoolean(propsC.value.disabled))
const height = computed(() => toCssUnit(propsC.value.height) || `calc(${sizeC.value} * 2.5)`)
const padding = computed(() => `calc(${sizeC.value} * 0.75)`)
const spanWidth = computed(() => sizeC.value.replace(/\d+/, (v) => Math.floor(Number(v) * 0.3) + ''))
const fontColorC = computed<CSSProperties['color']>(() => propsC.value.textColor || (colorC1.value ? plainC.value ? colorC1.value : '#fff' : colors.value.main))
const backgroundColor = computed<CSSProperties['background-color']>(() => plainC.value ? 'transparent' : (colorC1.value || '#fff'))
const backgroundImage = computed<CSSProperties['background-image']>(() => plainC.value
  ? undefined
  : colorC2.value
  ? `linear-gradient(to right, ${colorC1.value}, ${colorC2.value})`
  : undefined
)

const styles = computed<CSSProperties[]>(() => {
  const result: CSSProperties = {
    width: toCssUnit(propsC.value.width),
    height: height.value,
    paddingRight: padding.value,
    paddingLeft: padding.value,
    borderRadius: radiusC.value,
    backgroundImage: backgroundImage.value,
    backgroundColor: backgroundColor.value,
  }

  if (plainC.value) {
    result.borderColor = colorC1.value
  } else if (colorC2.value || colorC1.value) {
    result.borderWidth = '0'
  }

  return [result]
})

const onClick = (e: MouseEvent) => emits('click', e)
</script>

<template>
<button
  class="c-button"
  hover-class="c-button__click"
  v-bind="(propsC.buttonBind as any)"
  :form-type="propsC.formType"
  :style="(styles as any)"
  :class="[{ 'c-button__disabled': disabledC }]"
  :disabled="disabledC || propsC.loading"
  @click="onClick"
>
  <c-spin v-if="loadingC" :icon-size="sizeC" :color="fontColorC" :tip-size="propsC.size" v-bind="propsC.spinProps" />
  <template v-else-if="propsC.text || propsC.icon">
    <c-icon v-if="propsC.icon" :size="sizeC" :color="fontColorC" v-bind="propsC.iconProps" :name="propsC.icon" />
    <text v-if="propsC.text && propsC.icon" :style="([{ width: spanWidth }] as any)" />
    <c-text v-if="propsC.text" v-bind="propsC.textProps" :size="propsC.size" :color="fontColorC">{{ propsC.text }}</c-text>
  </template>
  <template v-else><slot /></template>
</button>
</template>

<style lang="scss">
.c-button {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 0;
  border-width: 1px;
  border-style: solid;
  border-color: #ebedf0;
  line-height: 1;
  position: relative;
  overflow: hidden;

  &::after,
  &::before {
    display: none;
  }

  &::after {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    border-width: 0;
    border-radius: 0;
    transform: none;
  }

  &__click {
    &::after {
      display: block;
      content: ' ';
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  &__disabled {
    opacity: 0.6;
    cursor: no-drop;
  }
}
</style>
