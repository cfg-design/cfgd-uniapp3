<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { TextProps } from './types.d'
import { computed } from 'vue'
import { useColors, useFontSizes, getSize } from '../../styles'
import { getPropsBoolean, omitProps, mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  props?: TextProps
  cClass?: TextProps['cClass']
  cStyle?: TextProps['cStyle']
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: TextProps['c']
  /**
   * 文字。
   * 默认： undefined
   */
  text?: TextProps['text']
  /**
   * 字体颜色，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/colors.html) 。
   * 默认： `undefined`
   */
  color?: TextProps['color']
  /**
   * 字体大小，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/font-sizes.html) 。
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
  /**
   * 文本是否可选。
   * App、H5、快手小程序
   */
  selectable?: boolean
  /**
   * 文本是否可选。
   * 微信小程序
   */
  userSelect?: boolean
  /**
   * 显示连续空格。
   * App、H5、微信小程序
   */
  space?: TextProps['space']
  /**
   * 是否解码。
   * App、H5、微信小程序
   */
  decode?: boolean
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const colors = useColors()
const fontSizes = useFontSizes()
const configs = useConfigs()

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))

const colorC = computed<CSSProperties['color']>(() => {
  const { color } = propsC.value
  return color ? colors.value[color] || color : colors.value.main
})

const sizeC = computed(() => getSize(fontSizes.value, propsC.value.size || 'm'))
const fontWeight = computed<number>(() => getPropsBoolean(propsC.value.strong) ? 500 : 0)
const fontStyle = computed<string>(() => getPropsBoolean(propsC.value.italic) ? 'italic' : '')
const textDecoration = computed<string>(() => {
  const { underline, del } = propsC.value
  return getPropsBoolean(underline) ? 'underline' : getPropsBoolean(del) ? 'line-through' : ''
})

const styleC = computed(() => {
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

  return mergeProps({ x: [style] }, { x: propsC.value.cStyle }).x
})
const classC = computed(() => mergeProps({ x: ['c-text'] }, { x: propsC.value.cClass }).x)
</script>

<template>
  <text
    :class="classC"
    :style="(styleC as any)"
    :selectable="getPropsBoolean(propsC.selectable)"
    :user-select="getPropsBoolean(propsC.userSelect)"
    :space="propsC.space"
    :decode="getPropsBoolean(propsC.decode)"
    >{{ propsC.text }}<slot v-if="!propsC.text" /></text>
</template>

<style lang="scss" scoped>
.c-text {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  box-sizing: border-box;
}
</style>
