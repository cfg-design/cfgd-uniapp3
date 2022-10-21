<script setup lang="ts">
import type { TabBarItemProps } from './types.d'
import { computed, inject, ref } from 'vue'
import { mergeProps, omitProps, getPropsBoolean } from '../../utils/props'
import {
  tabBarInjectionKeyValue,
  tabBarInjectionKeyGetIndex,
  tabBarInjectionKeyClickItem,
  tabBarInjectionKeyItem
} from '../c-tab-bar/use'
import { useColors } from '../../styles'
import { useConfigs } from './use'

interface Props {
  props?: TabBarItemProps
  cClass?: TabBarItemProps['cClass']
  cStyle?: TabBarItemProps['cStyle']
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： default
   */
  c?: TabBarItemProps['c']
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: TabBarItemProps['value']
  /**
   * 颜色，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/colors.html) 。
   * 默认： `undefined`
   */
  color?: TabBarItemProps['color']
  /**
   * 图标。
   * 默认： `undefined`
   */
  icon?: TabBarItemProps['icon']
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  iconProps?: TabBarItemProps['iconProps']
  /**
   * 激活的图标，undefined 时为 props.icon 值。
   * 默认： `undefined`
   */
  activeIcon?: TabBarItemProps['activeIcon']
  /**
   * activeIcon props = { ...mergeProps(props.iconProps, activeIconProps), color }，[IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  activeIconProps?: TabBarItemProps['activeIconProps']
  /**
   * 文字。
   * 默认： `undefined`
   */
  text?: TabBarItemProps['text']
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  textProps?: TabBarItemProps['textProps']
  /**
   * 右上角的角标提示信息。
   * 默认： `undefined`
   */
  badge?: TabBarItemProps['badge']
  /**
   * [BadgeProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/badge.html#props) 。
   * 默认： `undefined`
   */
  badgeProps?: TabBarItemProps['badgeProps']
  /**
   * 提示是否显示圆点 。
   * 默认： `undefined`
   */
  dot?: TabBarItemProps['dot']
}

interface Emits {
  (e: 'click', event: any): void
}

const tabBarValue = inject(tabBarInjectionKeyValue, ref(''))
const tabBarGetIndex = inject(tabBarInjectionKeyGetIndex, () => 0)
const tabBarClickItem = inject(tabBarInjectionKeyClickItem, null)
const tabBarItem = inject(tabBarInjectionKeyItem, ref())

const index = tabBarGetIndex()

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const colors = useColors()
const configs = useConfigs()

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const props2 = computed(() => mergeProps(configs.value[props1.value.c!], { ...tabBarItem.value }))
const propsC = computed(() => mergeProps(props2.value, props1.value))
const valueC = computed(() => propsC.value.value !== undefined ? propsC.value.value : index)
const colorC = computed(() => propsC.value.color || 'primary')
const active = computed(() => valueC.value === tabBarValue.value)
const activeIconC = computed(() => propsC.value.activeIcon || propsC.value.icon)
const activeIconPropsC = computed(() => {
  const { activeIconProps, iconProps } = propsC.value

  return { ...iconProps, ...activeIconProps, color: activeIconProps?.color || colorC.value }
})
const iconC = computed(() => active.value ? activeIconC.value : propsC.value.icon)
const iconPropsC = computed(() => active.value ? activeIconPropsC.value : propsC.value.iconProps)
const dotC = computed(() => getPropsBoolean(propsC.value.dot))

const styles = computed(() => mergeProps({ x: [] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: ['c-tab-bar-item'] }, { x: propsC.value.cClass }).x)

const badgePropsC = computed(() => mergeProps({
  color: 'error',
  size: 'xs',
  round: true,
  textProps: { cStyle: [{ position: 'absolute', top: '-4rpx', right: '-4rpx' }] }
}, propsC.value.badgeProps))

const onClick = (e: any) => {
  tabBarClickItem && tabBarClickItem({
    ...propsC.value,
    value: valueC.value
  })
  emits('click', e)
}
</script>

<template>
<view :class="classC" :style="(styles as any)" @click="onClick">
  <view v-if="iconC" class="c-tab-bar-item__icon_wrap">
    <c-icon :props="{ size: '7xl', color: 'secondary', ...iconPropsC }" :name="iconC" />
    <view v-if="dotC" class="c-tab-bar-item__dot" :style="{ backgroundColor: colors.error }"></view>
    <c-badge v-else-if="propsC.badge" :props="badgePropsC" :text="propsC.badge" />
  </view>
  <c-text
    v-if="propsC.text"
    :props="{ color: 'secondary', ...propsC.textProps }"
    :color="active ? colorC : undefined"
    :text="propsC.text"
  />
</view>
</template>

<style lang="scss" scoped>
.c-tab-bar-item {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;

  &__ {
    &icon_wrap {
      /* #ifndef APP-NVUE */
      display: flex;
      /* #endif */

      box-sizing: border-box;
      position: relative;
    }

    &dot {
      /* #ifndef APP-NVUE */
      display: flex;
      /* #endif */

      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
      width: 12rpx;
      height: 12rpx;
      border-radius: 100%;
    }
  }

}
</style>
