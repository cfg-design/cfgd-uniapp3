<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { CardProps } from './types.d'
import { computed } from 'vue'
import { useFontSizes, getSize, useRadius, getSizes } from '../../styles'
import { omitProps, mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  props?: CardProps
  cClass?: CardProps['cClass']
  cStyle?: CardProps['cStyle']
  headerClass?: CardProps['headerClass']
  headerStyle?: CardProps['headerStyle']
  bodyClass?: CardProps['bodyClass']
  bodyStyle?: CardProps['bodyStyle']
  footerClass?: CardProps['footerClass']
  footerStyle?: CardProps['footerStyle']
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: CardProps['c']
  /**
   * 大小，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/font-sizes.html。
   * 默认： `undefined`
   */
  size?: CardProps['size']
  /**
   * 标题。
   * 默认： undefined
   */
  title?: CardProps['title']
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  titleProps?: CardProps['titleProps']
  /**
   * 标题右边的文字。
   * 默认： undefined
   */
  extra?: CardProps['extra']
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  extraProps?: CardProps['extraProps']
  /**
   * 圆角值，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/radiuses.html) 。
   * 默认： `undefined`
   */
  radius?: CardProps['radius']
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const fontSizes = useFontSizes()
const radiuses = useRadius()
const configs = useConfigs()

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))

const sizeC = computed(() => getSize(fontSizes.value, propsC.value.size || 'm'))
const radius1 = computed(() => propsC.value.radius !== undefined ? propsC.value.radius : 'm')
const radiusC = computed(() => getSizes(radiuses.value, radius1.value))
const paddingC = computed(() => `calc(${sizeC.value} * 0.72) ${sizeC.value}`)

const style = computed(() => {
  const result: CSSProperties = {
    borderRadius: radiusC.value
  }
  return result
})
const styleC = computed(() => mergeProps({ x: [style.value] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: ['c-card'] }, { x: propsC.value.cClass }).x)
const headerClassC = computed(() => mergeProps({ x: ['c-card__header'] }, { x: propsC.value.headerClass }).x)
const bodyClassC = computed(() => mergeProps({ x: ['c-card__body'] }, { x: propsC.value.bodyClass }).x)
const footerClassC = computed(() => mergeProps({ x: ['c-card__footer'] }, { x: propsC.value.footerClass }).x)

const headerStyle = computed(() => {
  const result: CSSProperties = {
    padding: paddingC.value
  }
  return result
})
const headerStyleC = computed(() => mergeProps({ x: [headerStyle.value] }, { x: propsC.value.headerStyle }).x)

const bodyStyle = computed(() => {
  const result: CSSProperties = {
    padding: paddingC.value
  }
  return result
})
const bodyStyleC = computed(() => mergeProps({ x: [bodyStyle.value] }, { x: propsC.value.bodyStyle }).x)

const footerStyle = computed(() => {
  const result: CSSProperties = {
    padding: paddingC.value
  }
  return result
})
const footerStyleC = computed(() => mergeProps({ x: [footerStyle.value] }, { x: propsC.value.footerStyle }).x)

const titlePropsC = computed(() => mergeProps({
  size: `calc(${sizeC.value} * 1.1)`,
  strong: true
}, propsC.value.titleProps))
</script>

<template>
<view :class="classC" :style="(styleC as any)">
  <template v-if="propsC.title || $slots.header || $slots.$header">
    <view :class="headerClassC" :style="(headerStyleC as any)">
      <slot name="header">
        <c-row justify="space-between" align="center">
          <c-text :props="titlePropsC" :text="propsC.title" />
          <slot name="extra">
            <c-text v-if="propsC.extra" :props="propsC.extraProps" :text="propsC.extra" />
          </slot>
        </c-row>
      </slot>
    </view>
    <c-line />
  </template>
  <view :class="bodyClassC" :style="(bodyStyleC as any)"><slot /></view>
  <template v-if="$slots.footer || $slots.$footer">
    <c-line />
    <view :class="footerClassC" :style="(footerStyleC as any)">
      <slot name="footer" />
    </view>
  </template>
</view>
</template>

<style lang="scss" scoped>
.c-card {
  overflow: hidden;
  background-color: #fff;

  &,
  &__header,
  &__body,
  &__footer {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */

    box-sizing: border-box;
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
