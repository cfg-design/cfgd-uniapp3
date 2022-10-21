<script setup lang="ts">
import type { RowProps } from '../c-row/types.d'
import type { PopupTitleProps } from './types.d'
import { computed } from 'vue'
import { omitProps, mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  props?: PopupTitleProps
  cClass?: PopupTitleProps['cClass']
  cStyle?: PopupTitleProps['cStyle']
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: PopupTitleProps['c']
  /**
   * 标题文字。
   * 默认： `undefined`
   */
  title?: PopupTitleProps['title']
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  titleProps?: PopupTitleProps['titleProps']
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const configs = useConfigs()

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))

const styleC = computed(() => mergeProps({ x: [] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: ['c-popup-title'] }, { x: propsC.value.cClass }).x)

const rowProps: RowProps = {
  justify: 'space-between',
  align: 'center',
  cStyle: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  }
}
</script>

<template>
  <view :class="classC" :style="(styleC as any)">
    <slot>
      <c-text :props="{ strong: true, lines: 1, size: 'l', ...propsC.titleProps }" :text="propsC.title" />
    </slot>
    <c-row v-if="$slots.left || $slots.$left || $slots.right || $slots.$right" :props="rowProps">
      <c-col><slot name="left" /></c-col>
      <c-col><slot name="right" /></c-col>
    </c-row>
  </view>
</template>

<style lang="scss" scoped>
  .c-popup-title {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */

    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 30rpx 100rpx;
  }
</style>
