<script setup lang="ts">
import type { NavBarProps } from './types.d'
import { computed } from 'vue'
import { omitProps, mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  props?: NavBarProps
  cClass?: NavBarProps['cClass']
  cStyle?: NavBarProps['cStyle']
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: NavBarProps['c']
  /**
   * 左边的图标。
   * 默认： `undefined`
   */
  leftIcon?: NavBarProps['leftIcon']
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  leftIconProps?: NavBarProps['leftIconProps']
  /**
   * 左边的文字。
   * 默认： `undefined`
   */
  leftText?: NavBarProps['leftText']
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  leftTextProps?: NavBarProps['leftTextProps']
  /**
   * 标题。
   * 默认： `undefined`
   */
  title?: NavBarProps['title']
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  titleProps?: NavBarProps['titleProps']
}

interface Emits {
  (e: 'click:left'): void
  (e: 'click:right'): void
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const configs = useConfigs()

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
const leftIconC = computed(() => propsC.value.leftIcon || propsC.value.leftIconProps?.name)
const styleC = computed(() => mergeProps({ x: [] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: ['c-nav-bar'] }, { x: propsC.value.cClass }).x)
</script>

<template>
<view :class="classC" :style="(styleC as any)">
  <view v-if="$slots.left || $slots.$left || leftIconC || propsC.leftText" class="c-nav-bar__left" @click="emits('click:left')">
    <slot name="left">
      <c-icon v-if="leftIconC" :props="{ size: '27px', ...propsC.leftIconProps }" :name="leftIconC" />
      <c-text v-if="propsC.leftText" :props="{ size: '14px', ...propsC.leftTextProps }" :text="propsC.leftText" />
    </slot>
  </view>
  <view v-if="$slots.right || $slots.$right" class="c-nav-bar__right" @click="emits('click:right')">
    <slot name="right" />
  </view>
  <view class="c-nav-bar__title">
    <slot><c-text :props="{ size: '16px', lines: 1, ...propsC.titleProps }" :text="propsC.title" /></slot>
  </view>
</view>
</template>

<style lang="scss" scoped>
.c-nav-bar {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  /* #ifdef MP */
  // padding-right: 94px;
  /* #endif */

  box-sizing: border-box;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  position: relative;
  height: 44px;
  background-color: #fff;

  &__left,
  &__right,
  &__title {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    box-sizing: border-box;
    flex-direction: row;
    align-items: center;
  }

  &__left,
  &__right {
    position: relative;
    z-index: 2;
    padding: 0 20rpx;
  }

  &__title {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 400rpx;
    height: 44px;
    justify-content: center;
  }
}
</style>
