<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { TabItemProps } from './types.d'
import { computed, inject, ref } from 'vue'
import { mergeProps, omitProps, getPropsBoolean } from '../../utils/props'
import {
  tabsInjectionKeyValue,
  tabsInjectionKeyGetIndex,
  tabsInjectionKeyUpdateValue,
  tabsInjectionKeyItem
} from '../c-tabs/use'
import { useColors, toCssUnit } from '../../styles'
import { useConfigs } from './use'

interface Props {
  props?: TabItemProps
  cClass?: TabItemProps['cClass']
  cStyle?: TabItemProps['cStyle']
  /**
   * 配置名。使用 useTabItemConfigs() 查看配置数据。使用 setTabItemConfigs() 进行配置。
   * 默认： default
   */
  c?: TabItemProps['c']
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: TabItemProps['value']
  /**
   * 颜色。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
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

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const props2 = computed(() => mergeProps(configs.value[props1.value.c!], { ...tabItem.value }))
const propsC = computed(() => mergeProps(props2.value, props1.value))
const colorC = computed<Props['color']>(() => {
  const { color } = propsC.value
  return color ? colors.value[color] || color : colors.value.primary
})
const valueC = computed(() => propsC.value.value !== undefined ? propsC.value.value : index)
const active = computed(() => valueC.value === tabsValue.value)
const dotC = computed(() => getPropsBoolean(propsC.value.dot))
const textColorC = computed(() => active.value
  ? propsC.value.activeType !== 'bg'
    ? propsC.value.color
    : '#fff'
  : propsC.value.textProps?.color
)
const style1 = computed(() => {
  const style: CSSProperties = {}
  if (propsC.value.activeType === 'bg'){
    style.marginBottom = toCssUnit(propsC.value.lineProps?.width || 4)
    if (active.value) {
      style.backgroundColor = colorC.value
    }
  }
  return style
})

const styles = computed(() => mergeProps({ x: [style1.value] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: ['c-tab-item'] }, { x: propsC.value.cClass }).x)

const textPropsC = computed(() => mergeProps({
  color: textColorC.value,
  cStyle: [{ textAlign: 'center', whiteSpace: 'nowrap' }]
}, propsC.value.textProps))

const badgePropsC = computed(() => mergeProps({
  color: 'error',
  size: 'xs',
  round: true,
  textProps: { cStyle: [{ position: 'absolute', top: '-6rpx', left: 'calc(100% - 6rpx)' }] }
}, propsC.value.badgeProps))

const linePropsC = computed(() => mergeProps({
  color: colorC.value,
  width: 4,
  length: '100%',
  round: true
}, propsC.value.lineProps))

const onClick = (e: any) => {
  tabsUpdateValue && tabsUpdateValue(valueC.value)
  emits('click', e)
}
</script>

<template>
<view :class="classC" :style="(styles as any)" @click="onClick">
  <view class="c-tab-item__content">
    <slot>
      <c-text :props="textPropsC">{{ propsC.text }}</c-text>
    </slot>
    <view v-if="dotC" class="c-tab-item__dot" :style="{ backgroundColor: colors.error }"></view>
    <c-badge v-else-if="propsC.badge" :props="badgePropsC" :text="propsC.badge" />
  </view>
  <c-line v-if="active && propsC.activeType !== 'bg'" :props="linePropsC" />
</view>
</template>

<style lang="scss" scoped>
.c-tab-item {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  box-sizing: border-box;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  margin: 0 4rpx;
  padding: 0 20rpx;
  border-radius: 9999px;
  position: relative;

  &__{
    &content {
      /* #ifndef APP-NVUE */
      display: flex;
      /* #endif */

      box-sizing: border-box;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 6rpx 0;
      position: relative;
    }

    &dot {
      /* #ifndef APP-NVUE */
      display: flex;
      /* #endif */

      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: -6rpx;
      width: 12rpx;
      height: 12rpx;
      border-radius: 100%;
    }
  }
}
</style>
