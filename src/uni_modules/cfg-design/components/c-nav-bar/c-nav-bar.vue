<script setup lang="ts">
import type { NavBarProps } from './types.d'
import { computed } from 'vue'
import { mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  /**
   * 配置名。使用 `useNavBarConfigs()` 查看配置数据。使用 `setNavBarConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: NavBarProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: NavBarProps['viewBind']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  leftViewBind?: NavBarProps['leftViewBind']
  /**
   * 左边的图标。
   * 默认： `undefined`
   */
  leftIcon?: NavBarProps['leftIcon']
  /**
   * c-icon props 。
   * 默认： `undefined`
   */
  leftIconProps?: NavBarProps['leftIconProps']
  /**
   * 左边的文字。
   * 默认： `undefined`
   */
  leftText?: NavBarProps['leftText']
  /**
   * c-text props 。
   * 默认： `undefined`
   */
  leftTextProps?: NavBarProps['leftTextProps']
  /**
   * 标题。
   * 默认： `undefined`
   */
  title?: NavBarProps['title']
  /**
   * c-text props 。
   * 默认： `undefined`
   */
  titleProps?: NavBarProps['titleProps']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  titleViewBind?: NavBarProps['titleViewBind']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  rightViewBind?: NavBarProps['rightViewBind']
}

interface Emits {
  (e: 'click:left'): void
  (e: 'click:right'): void
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const configs = useConfigs()

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
const leftIconC = computed(() => propsC.value.leftIcon || propsC.value.leftIconProps?.name)
</script>

<template>
<view class="c-nav-bar" v-bind="(propsC.viewBind as any)">
  <view class="c-nav-bar__left" v-bind="(propsC.leftViewBind as any)" @click="emits('click:left')">
    <slot name="left">
      <c-icon v-if="leftIconC" size="27px" v-bind="propsC.leftIconProps" :name="leftIconC" />
      <c-text v-if="propsC.leftText" size="14px" v-bind="propsC.leftTextProps">{{ propsC.leftText }}</c-text>
    </slot>
  </view>
  <view class="c-nav-bar__right" v-bind="(propsC.rightViewBind as any)" @click="emits('click:right')"><slot name="right" /></view>
  <view class="c-nav-bar__title" v-bind="(propsC.titleViewBind as any)">
    <slot><c-text size="16px" lines="1" v-bind="propsC.titleProps">{{ propsC.title }}</c-text></slot>
  </view>
</view>
</template>

<style lang="scss">
.c-nav-bar {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

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
    align-items: center;
  }

  &__left,
  &__right {
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
