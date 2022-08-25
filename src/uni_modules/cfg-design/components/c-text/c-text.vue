<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { TextProps } from './types.d'
import { computed } from 'vue'
import { useColors, useFontSizes } from '../../styles'
import { getPropsBoolean, mergeProps } from '../../utils'
import { getSize } from '../../styles'
import { useConfigs } from './use'

interface Props {
  /**
   * 配置名。使用 `useTextConfigs()` 查看配置数据。使用 `setTextConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: TextProps['c']
  /**
   * text 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  textBind?: TextProps['textBind']
  /**
   * 字体颜色。 default 配置为 `main`。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  color?: TextProps['color']
  /**
   * 字体大小。 default 配置为 `m`。 `useFontSizes()` 可以查看配置数据。使用 `setFontSizes()` 进行配置。
   * 默认： `undefined`
   */
  size?: TextProps['size']
  /**
   * 是否粗体。
   * 默认： `undefined`
   */
  strong?: TextProps['strong']
  /**
   * 是否斜体。
   * 默认： `undefined`
   */
  italic?: TextProps['italic']
  /**
   * 是否显示下划线。
   * 默认： `undefined`
   */
  underline?: TextProps['underline']
  /**
   * 是否显示删除线。
   * 默认： `undefined`
   */
  del?: TextProps['del']
  /**
   * 限制行数。内容超出显示省略号。
   * 默认： undefined
   */
  lines?: TextProps['lines']
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const colors = useColors()
const fontSizes = useFontSizes()
const configs = useConfigs()

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))

const colorC = computed<CSSProperties['color']>(() => {
  const { color } = propsC.value
  return color ? colors.value[color] || color : colors.value.main
})

const sizeC = computed(() => getSize(fontSizes.value, propsC.value.size || fontSizes.value.m))
const fontWeight = computed<number>(() => getPropsBoolean(propsC.value.strong) ? 500 : 0)
const fontStyle = computed<string>(() => getPropsBoolean(propsC.value.italic) ? 'italic' : '')
const textDecoration = computed<string>(() => {
  const { underline, del } = propsC.value
  return getPropsBoolean(underline) ? 'underline' : getPropsBoolean(del) ? 'line-through' : ''
})

const styles = computed<CSSProperties[]>(() => {
  const style: CSSProperties = {
    color: colorC.value,
    fontSize: sizeC.value,
  }

  if (fontWeight.value) {
    style.fontWeight = fontWeight.value
  }

  if (fontStyle.value) {
    style.fontStyle = fontStyle.value
  }

  if (textDecoration.value) {
    style.textDecoration = textDecoration.value
  }

  const lines = Number(propsC.value.lines)

  if (lines) {
    style['-webkit-line-clamp'] = lines
    // #ifndef APP-NVUE
    style['text-overflow'] = 'ellipsis'
    style.overflow = 'hidden'
    style.display = '-webkit-box'
    style['-webkit-box-orient'] = 'vertical'
    // #endif
  }

  return [style]
})
</script>

<template>
  <text class="c-text" v-bind="propsC.textBind" :style="(styles as any)"><slot /></text>
</template>

<style lang="scss">
.c-text {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  flex-direction: row;
  box-sizing: border-box;
  line-height: 1.2;
}
</style>
