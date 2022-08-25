<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { TagProps } from './types.d'
import { computed } from 'vue'
import { useColors, useRadius, useFontSizes } from '../../styles'
import { getPropsBoolean, mergeProps } from '../../utils'
import { getSize, getSizes } from '../../styles/index'
import { useConfigs } from './use'

interface Props {
  /**
   * 背景和边框颜色。 default 配置为 `primary`。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  c?: TagProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: TagProps['viewBind']
  /**
   * 背景颜色。 default 配置为 `primary`。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  color?: TagProps['color']
  /**
   * 文字
   * 默认： `undefined`
   */
  text?: TagProps['text']
  /**
   * 文字的颜色。default 配置为 `#fff`。详情查看 c-text props.color
   * 默认： `undefined`
   */
  textColor?: TagProps['textColor']
  /**
   * 文字的字体大小。default 配置为 `s`。详情查看 c-text props.size
   * 默认： `undefined`
   */
  size?: TagProps['size']
  /**
   * 详情查看 c-text props
   * 默认： `undefined`
   */
  textProps?: TagProps['textProps']
  /**
   * 图标。
   * 默认： `undefined`
   */
  icon?: TagProps['icon']
  /**
   * 详情查看 c-icon props
   * 默认： `undefined`
   */
  iconProps?: TagProps['iconProps']
  /**
   * 是否可关闭。
   * 默认： `undefined`
   */
  closable?: TagProps['closable']
  /**
   * 关闭的 view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  closeViewBind?: TagProps['closeViewBind']
  /**
   * 详情查看 c-icon props
   * 默认： `undefined`
   */
  closeIconProps?: TagProps['closeIconProps']
  /**
   * 圆角值。 default 配置为 `s`。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
   * 默认： `undefined`
   */
  radius?: TagProps['radius']
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: TagProps['round']
  /**
   * 是否镂空。
   * 默认： `undefined`
   */
  plain?: TagProps['plain']
}

interface Emits {
  (e: 'click', payload: MouseEvent): void
  (e: 'close', payload: MouseEvent): void
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const configs = useConfigs()
const colors = useColors()
const fontSizes = useFontSizes()
const radiuses = useRadius()

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
const colorC = computed<TagProps['color']>(() => {
  const { color } = propsC.value
  return color ? colors.value[color] || color : colors.value.primary
})
const sizeC = computed<string>(() => getSize(fontSizes.value, propsC.value.size || configs.value.default.size))
const radiusC1 = computed(() => getSizes(radiuses.value, propsC.value.radius))
const roundC = computed(() => getPropsBoolean(propsC.value.round))
const radiusC = computed(() => roundC.value ? '9999px' : radiusC1.value)
const plainC = computed(() => getPropsBoolean(propsC.value.plain))
const closableC = computed(() => getPropsBoolean(propsC.value.closable))
const fontColor = computed(() => plainC.value ? colorC.value : propsC.value.textColor)
const closeSize = computed(() => `calc(${sizeC.value} * 1.5)`)
const closeTop = computed(() => `calc(-${sizeC.value} * 1.5 / 2)`)

const viewStyles = computed<CSSProperties[]>(() => [{
  padding: `calc(${sizeC.value} * 0.3) calc(${sizeC.value} * 0.5)`,
  borderRadius: radiusC.value,
  borderColor: colorC.value,
  backgroundColor: plainC.value ? 'transparent' : colorC.value,
}])

const closeViewStyles = computed<CSSProperties[]>(() => [{
  width: closeSize.value,
  height: closeSize.value,
  top: closeTop.value,
  right: closeTop.value
}])

const textPropsC1 = computed<TagProps['textProps']>(() => ({ textBind: { style: [{ lineHeight: sizeC.value }] } }))
const textPropsC2 = computed<TagProps['textProps']>(() => mergeProps(textPropsC1.value, propsC.value.textProps))

const textPropsC3 = computed<TagProps['textProps']>(() => ({
  color: fontColor.value,
  size: propsC.value.size,
}))

const textPropsC = computed<TagProps['textProps']>(() => mergeProps(textPropsC2.value, textPropsC3.value))

const onClick = (e: MouseEvent) => emits('click', e)
const onClose = (e: MouseEvent) => emits('close', e)
</script>

<template>
<view class="c-tag" v-bind="propsC.viewBind" :style="(viewStyles as any)" @click="onClick">
  <c-icon v-if="propsC.icon" v-bind="propsC.iconProps" :name="propsC.icon" :color="fontColor" />
  <c-text v-bind="textPropsC">{{ text }}<slot v-if="!propsC.text" /></c-text>
  <view
    v-if="closableC"
    class="c-tag__close"
    v-bind="propsC.closeViewBind"
    :style="(closeViewStyles as any)"
    @click.stop="onClose"
  >
    <c-icon v-bind="propsC.closeIconProps" :size="sizeC" />
  </view>
</view>
</template>

<style lang="scss">
.c-tag {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  position: relative;
  flex-direction: row;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;

  :deep(.c-tag__icon) {
    margin-right: 6rpx;
  }

  &__close {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */

    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 9999px;
    overflow: hidden;
    cursor: pointer;
    transform: scale(.7);
  }
}
</style>
