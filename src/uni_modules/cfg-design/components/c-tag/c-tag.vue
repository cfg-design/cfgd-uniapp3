<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { TagProps } from './types.d'
import { computed } from 'vue'
import { useColors, useRadius, useFontSizes } from '../../styles'
import { getPropsBoolean, omitProps, mergeProps } from '../../utils'
import { getSize, getSizes } from '../../styles/index'
import { useConfigs } from './use'

interface Props {
  props?: TagProps
  cClass?: TagProps['cClass']
  cStyle?: TagProps['cStyle']
  /**
   * 背景和边框颜色。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  c?: TagProps['c']
  /**
   * 背景颜色。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  color?: TagProps['color']
  /**
   * 文字
   * 默认： `undefined`
   */
  text?: TagProps['text']
  /**
   * 文字的颜色。详情查看 c-text props.color
   * 默认： `undefined`
   */
  textColor?: TagProps['textColor']
  /**
   * 文字的字体大小。详情查看 c-text props.size
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
   * 详情查看 c-icon props
   * 默认： `undefined`
   */
  closeIconProps?: TagProps['closeIconProps']
  /**
   * 圆角值。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
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

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
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

const style1 = computed<CSSProperties[]>(() => [{
  alignItems: 'center',
  justifyContent: 'center',
  padding: `calc(${sizeC.value} * 0.3) calc(${sizeC.value} * 0.5)`,
  borderRadius: radiusC.value,
  borderColor: colorC.value,
  backgroundColor: plainC.value ? 'transparent' : colorC.value,
}])
const styles = computed(() => mergeProps({ x: [style1.value] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: ['c-tag'] }, { x: propsC.value.cClass }).x)

const iconPropsC = computed(() => mergeProps({
  color: fontColor.value,
  textProps: { cStyle: [{ marginRight: '6rpx' }] }
}, propsC.value.iconProps))

const closeViewStyles = computed<CSSProperties[]>(() => [{
  width: closeSize.value,
  height: closeSize.value,
  top: closeTop.value,
  right: closeTop.value
}])

const textPropsC1 = computed<TagProps['textProps']>(() => ({ cStyle: [{ lineHeight: sizeC.value }] }))
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
<view :class="classC" :style="(styles as any)" @click="onClick">
  <c-icon v-if="propsC.icon" :props="iconPropsC" :name="propsC.icon" />
  <c-text :props="textPropsC">{{ text }}<slot v-if="!propsC.text" /></c-text>
  <view
    v-if="closableC"
    class="c-tag__close"
    :style="(closeViewStyles as any)"
    @click.stop="onClose"
  >
    <c-icon :props="{ name: 'close-line', color: '#fff', size: sizeC, ...propsC.closeIconProps }" />
  </view>
</view>
</template>

<style lang="scss" scoped>
.c-tag {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  border-width: 1px;
  border-style: solid;

  &__ {
    &close {
      /* #ifndef APP-NVUE */
      display: flex;
      /* #endif */

      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      position: absolute;
      border-radius: 9999px;
      overflow: hidden;
      cursor: pointer;
      transform: scale(.7);
      background-color: #ccc;
    }
  }
}
</style>
