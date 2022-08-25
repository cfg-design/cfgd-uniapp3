<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { TabItemProps } from './types.d'
import { computed, inject, ref } from 'vue'
import { mergeProps, getPropsBoolean } from '../../utils/props'
import {
  tabsInjectionKeyValue,
  tabsInjectionKeyGetIndex,
  tabsInjectionKeyUpdateValue,
  tabsInjectionKeyItem
} from '../c-tabs/use'
import { useColors, toCssUnit } from '../../styles'
import { useConfigs } from './use'

interface Props {
  /**
   * 配置名。使用 useTabItemConfigs() 查看配置数据。使用 setTabItemConfigs() 进行配置。
   * 默认： default
   */
  c?: TabItemProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: TabItemProps['viewBind']
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: TabItemProps['value']
  /**
   * 颜色。 default 配置为 `primary`。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  color?: TabItemProps['color']
  /**
   * 激活类型：undefined | line: 下划线，bg: 背景。
   * 默认： `undefined`
   */
  activeType?: TabItemProps['activeType']
  /**
   * 文字。
   * 默认： `undefined`
   */
  text?: TabItemProps['text']
  /**
   * 详情 c-text props 。
   * 默认： `undefined`
   */
  textProps?: TabItemProps['textProps']
  /**
   * 右上角的角标提示信息。
   * 默认： `undefined`
   */
  badge?: TabItemProps['badge']
  /**
   * 详情 c-badge props 。
   * 默认： `undefined`
   */
  badgeProps?: TabItemProps['badgeProps']
  /**
   * 提示是否显示圆点 。
   * 默认： `undefined`
   */
  dot?: TabItemProps['dot']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  dotBind?: TabItemProps['dotBind']
  /**
   * 详情 c-line props 。
   * 默认： `undefined`
   */
  lineProps?: TabItemProps['lineProps']
}

interface Emits {
  (e: 'click', event: any): void
}

const tabsValue = inject(tabsInjectionKeyValue, ref(''))
const tabsGetIndex = inject(tabsInjectionKeyGetIndex, () => 0)
const tabsUpdateValue = inject(tabsInjectionKeyUpdateValue, null)
const tabItem = inject(tabsInjectionKeyItem, ref())

const index = tabsGetIndex()

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const colors = useColors()
const configs = useConfigs()

const props1 = computed<Props>(() => mergeProps(configs.value[props.c], { ...tabItem.value }))
const propsC = computed<Props>(() => mergeProps(props1.value, props))
const colorC = computed<Props['color']>(() => {
  const { color } = propsC.value
  return color && colors.value[color] || color
})
const valueC = computed(() => propsC.value.value !== undefined ? propsC.value.value : index)
const active = computed(() => valueC.value === tabsValue.value)
const dotC = computed(() => getPropsBoolean(propsC.value.dot))
const dotBindC = computed(() => mergeProps<Props['dotBind']>({ style: [{ backgroundColor: colors.value.error }]}, propsC.value.dotBind))
const textColorC = computed(() => active.value
  ? propsC.value.activeType !== 'bg'
    ? propsC.value.color
    : '#fff'
  : propsC.value.textProps?.color
)
const viewStyles = computed<CSSProperties[]>(() => [{
  paddingBottom: toCssUnit(propsC.value.lineProps?.width),
  backgroundColor: active.value && propsC.value.activeType === 'bg' ? colorC.value : ''
}])

const onClick = (e: any) => {
  tabsUpdateValue && tabsUpdateValue(valueC.value)
  emits('click', e)
}
</script>

<template>
<view class="c-tab-item" :style="viewStyles" v-bind="(propsC.viewBind as any)" @click="onClick">
  <view class="c-tab-item__content">
    <slot>
      <c-text v-bind="propsC.textProps" :color="textColorC">{{ propsC.text }}</c-text>
    </slot>
    <view v-if="dotC" class="c-tab-item__dot" v-bind="(dotBindC as any)"></view>
    <c-badge v-else-if="propsC.badge" v-bind="propsC.badgeProps" :text="propsC.badge" />
    <c-line v-if="active && propsC.activeType !== 'bg'" :color="propsC.color" v-bind="propsC.lineProps" />
  </view>
</view>
</template>

<style lang="scss">
.c-tab-item {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 4rpx;
  padding: 0 20rpx;
  border-radius: 9999px;
  box-sizing: border-box;

  &__content {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 6rpx 0;

    :deep(.c-badge) {
      position: absolute;
      top: -6rpx;
      left: calc(100% - 6rpx);
    }

    :deep(.c-line) {
      position: absolute;
      top: 100%;
      bottom: 0;
      width: 100%;
    }

    :deep(.c-text) {
      text-align: center;
      white-space: nowrap;
    }
  }

  &__dot {
    position: absolute;
    top: 0;
    right: -6rpx;
    width: 12rpx;
    height: 12rpx;
    border-radius: 100%;
  }
}
</style>
