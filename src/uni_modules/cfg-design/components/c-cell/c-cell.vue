<script setup lang="ts">
import type { CellProps } from './types.d'
import { computed } from 'vue'
import { getPropsBoolean, mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  /**
   * 配置名。使用 `useCellConfigs()` 查看配置数据。使用 `setCellConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: CellProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: CellProps['viewBind']
  /**
   * 左边图标名称或代码。
   * 默认： `undefined`
   */
  icon?: CellProps['icon']
  /**
   * 详情查看 c-icon props 。
   * 默认： `undefined`
   */
  iconProps?: CellProps['iconProps']
  /**
   * 左边图片链接。
   * 默认： `undefined`
   */
  image?: CellProps['image']
  /**
   * 详情查看 c-image props 。
   * 默认： `undefined`
   */
  imageProps?: CellProps['imageProps']
  /**
   * 左边头像链接。
   * 默认： `undefined`
   */
  avatar?: CellProps['avatar']
  /**
   * 详情查看 c-avatar props 。
   * 默认： `undefined`
   */
  avatarProps?: CellProps['avatarProps']
  /**
   * 左边头像文字。
   * 默认： `undefined`
   */
  avatarText?: CellProps['avatarText']
  /**
   * 详情查看 c-avatar-text props 。
   * 默认： `undefined`
   */
  avatarTextProps?: CellProps['avatarTextProps']
  /**
   * 左边标签文字。
   * 默认： `undefined`
   */
  label?: CellProps['label']
  /**
   * 详情查看 c-text props 。
   * 默认： `undefined`
   */
  labelProps?: CellProps['labelProps']
  /**
   * 描述文案。在左边标签下方。
   * 默认： `undefined`
   */
  brief?: CellProps['brief']
  /**
   * 详情查看 c-text props 。
   * 默认： `undefined`
   */
  briefProps?: CellProps['briefProps']
  /**
   * 右边文字。
   * 默认： `undefined`
   */
  value?: CellProps['value']
  /**
   * 详情查看 c-text props 。
   * 默认： `undefined`
   */
  valueProps?: CellProps['valueProps']
  /**
   * 右图标名称或代码。
   * 默认： `undefined`
   */
  rightIcon?: CellProps['rightIcon']
  /**
   * 详情查看 c-icon props 。
   * 默认： `undefined`
   */
  rightIconProps?: CellProps['rightIconProps']
  /**
   * 无点击反馈
   * 默认： `false`
   */
  noClick?: CellProps['noClick']
}

interface Emits {
  (e: 'click', payload: MouseEvent): void
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const configs = useConfigs()

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
const hoverClass = computed<string | undefined>(() => !getPropsBoolean(propsC.value.noClick) ? 'c-cell-click' : undefined)

const onClick = (e: MouseEvent) => emits('click', e)
</script>

<template>
<view class="c-cell" :hover-class="hoverClass" v-bind="(propsC.viewBind as any)" @click="onClick">
  <slot name="left">
    <c-icon v-if="propsC.icon" v-bind="propsC.iconProps" :name="propsC.icon" />
    <c-image v-if="propsC.image" v-bind="propsC.imageProps" :src="propsC.image" />
    <c-avatar v-if="propsC.avatar" v-bind="propsC.avatarProps" :src="propsC.avatar" />
    <c-avatar-text v-if="propsC.avatarText" v-bind="propsC.avatarTextProps" :text="propsC.avatarText" />
  </slot>
  <view class="flex-1">
    <slot name="label">
      <c-text v-if="propsC.label" v-bind="propsC.labelProps">{{ propsC.label }}</c-text>
    </slot>
    <slot name="brief">
      <c-text v-if="propsC.brief" v-bind="propsC.briefProps">{{ propsC.brief }}</c-text>
    </slot>
  </view>
  <slot>
    <c-text v-if="propsC.value" v-bind="propsC.valueProps">{{ propsC.value }}</c-text>
  </slot>
  <slot name="right">
    <c-icon v-if="propsC.rightIcon" v-bind="propsC.rightIconProps" :name="propsC.rightIcon" />
  </slot>
</view>
</template>

<style lang="scss">
.c-cell {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  background-color: #fff;

  &-click {
    background-color: #ebedf0;
  }
}
.flex-1 {
  flex: 1;
}
</style>
