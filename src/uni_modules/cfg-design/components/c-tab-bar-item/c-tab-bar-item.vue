<script setup lang="ts">
import type { TabBarItemProps } from './types.d'
import { computed, inject, ref } from 'vue'
import { mergeProps, getPropsBoolean } from '../../utils/props'
import {
  tabBarInjectionKeyValue,
  tabBarInjectionKeyGetIndex,
  tabBarInjectionKeyUpdateValue,
  tabBarInjectionKeyItem
} from '../c-tab-bar/use'
import { useColors } from '../../styles'
import { useConfigs } from './use'

interface Props {
  /**
   * 配置名。使用 useTabBarItemConfigs() 查看配置数据。使用 setTabBarItemConfigs() 进行配置。
   * 默认： default
   */
  c?: TabBarItemProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: TabBarItemProps['viewBind']
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: TabBarItemProps['value']
  /**
   * 颜色。 default 配置为 `primary`。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  color?: TabBarItemProps['color']
  /**
   * 图标。
   * 默认： `undefined`
   */
  icon?: TabBarItemProps['icon']
  /**
   * 详情 c-icon props 。
   * 默认： `undefined`
   */
  iconProps?: TabBarItemProps['iconProps']
  /**
   * 激活的图标，undefined 时为 props.icon 值。
   * 默认： `undefined`
   */
  activeIcon?: TabBarItemProps['activeIcon']
  /**
   * activeIcon props = { ...props.iconProps, ...activeIconProps, color }，详情 c-icon props 。
   * 默认： `undefined`
   */
  activeIconProps?: TabBarItemProps['activeIconProps']
  /**
   * 文字。
   * 默认： `undefined`
   */
  text?: TabBarItemProps['text']
  /**
   * 详情 c-text props 。
   * 默认： `undefined`
   */
  textProps?: TabBarItemProps['textProps']
  /**
   * 右上角的角标提示信息。
   * 默认： `undefined`
   */
  badge?: TabBarItemProps['badge']
  /**
   * 详情 c-badge props 。
   * 默认： `undefined`
   */
  badgeProps?: TabBarItemProps['badgeProps']
  /**
   * 提示是否显示圆点 。
   * 默认： `undefined`
   */
  dot?: TabBarItemProps['dot']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  dotBind?: TabBarItemProps['dotBind']
}

interface Emits {
  (e: 'click', event: any): void
}

const tabBarValue = inject(tabBarInjectionKeyValue, ref(''))
const tabBarGetIndex = inject(tabBarInjectionKeyGetIndex, () => 0)
const tabBarUpdateValue = inject(tabBarInjectionKeyUpdateValue, null)
const tabBarItem = inject(tabBarInjectionKeyItem, ref())

const index = tabBarGetIndex()

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const colors = useColors()
const configs = useConfigs()

const props1 = computed<Props>(() => mergeProps(configs.value[props.c], { ...tabBarItem.value }))
const propsC = computed<Props>(() => mergeProps(props1.value, props))
const valueC = computed(() => propsC.value.value !== undefined ? propsC.value.value : index)
const active = computed(() => valueC.value === tabBarValue.value)
const activeIconC = computed(() => propsC.value.activeIcon || propsC.value.icon)
const activeIconPropsC = computed(() => {
  const { activeIconProps, iconProps, color } = propsC.value

  return { ...iconProps, ...activeIconProps, color: activeIconProps?.color || color }
})
const iconC = computed(() => active.value ? activeIconC.value : propsC.value.icon)
const iconPropsC = computed(() => active.value ? activeIconPropsC.value : propsC.value.iconProps)
const dotC = computed(() => getPropsBoolean(propsC.value.dot))
const dotBindC = computed(() => mergeProps<Props['dotBind']>({ style: [{ backgroundColor: colors.value.error }]}, propsC.value.dotBind))

const onClick = (e: any) => {
  tabBarUpdateValue && tabBarUpdateValue(valueC.value)
  emits('click', e)
}
</script>

<template>
<view class="c-tab-bar-item" v-bind="(propsC.viewBind as any)" @click="onClick">
  <view v-if="iconC" class="c-tab-bar-item__icon_wrap">
    <c-icon v-bind="iconPropsC" :name="iconC" />
    <view v-if="dotC" class="c-tab-bar-item__dot" v-bind="(dotBindC as any)"></view>
    <c-badge v-else-if="propsC.badge" v-bind="propsC.badgeProps" :text="propsC.badge" />
  </view>
  <c-text v-if="propsC.text" v-bind="propsC.textProps" :color="active ? propsC.color : propsC.textProps?.color">{{ propsC.text }}</c-text>
</view>
</template>

<style lang="scss">
.c-tab-bar-item {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
  box-sizing: border-box;

  &__icon_wrap {
    position: relative;

    :deep(.c-badge) {
      position: absolute;
      top: -4rpx;
      right: -4rpx;
    }
  }

  &__dot {
    position: absolute;
    top: 0;
    right: 0;
    width: 12rpx;
    height: 12rpx;
    border-radius: 100%;
  }
}
</style>
