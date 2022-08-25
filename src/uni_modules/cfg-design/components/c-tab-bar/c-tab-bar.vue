<script setup lang="ts">
import type { TabBarProps, TabBarGetIndex, TabBarUpdateValue } from './types.d'
import { computed, provide, ref, watch } from 'vue'
import { mergeProps } from '../../utils'
import {
  useConfigs,
  tabBarInjectionKeyGetIndex,
  tabBarInjectionKeyUpdateValue,
  tabBarInjectionKeyValue,
  tabBarInjectionKeyItem
} from './use'

interface Props {
  /**
   * 配置名。使用 `useTabBarConfigs()` 查看配置数据。使用 `setTabBarConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: TabBarProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: TabBarProps['viewBind']
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: TabBarProps['value']
  /**
   * tab-bar-item props 一些配置，有效属性 `viewBind`, `dotBind`, `iconProps`, `activeIconProps`, `textProps`, `badgeProps`, `color` 。
   * 默认： `undefined`
   */
  item?: TabBarProps['item']
  /**
   * 项目。
   * 默认： `undefined`
   */
  items?: TabBarProps['items']
}

interface Emits {
  (e: 'update:value', v: Props['value']): void
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const configs = useConfigs()

const valueR = ref<TabBarProps['value']>(props.value)
const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
const itemC = computed(() => propsC.value.item)

let index = 0
const getIndex: TabBarGetIndex = () => index ++

const updateValue: TabBarUpdateValue = (val) => {
  if (valueR.value !== val) {
    valueR.value = val
    emits('update:value', valueR.value)
  }
}

watch(() => props.value, updateValue)

provide(tabBarInjectionKeyGetIndex, getIndex)
provide(tabBarInjectionKeyUpdateValue, updateValue)
provide(tabBarInjectionKeyValue, valueR)
provide(tabBarInjectionKeyItem, itemC)
</script>

<template>
<view class="c-tab-bar" v-bind="(propsC.viewBind as any)">
  <template v-for="(item, index) in propsC.items" :key="index">
    <slot
      name="item"
      :index="index"
      :item="item"
      :active="item.value !== undefined ? item.value === valueR : index === valueR"
    >
      <c-tab-bar-item v-bind="item" />
    </slot>
  </template>
</view>
</template>

<style lang="scss">
.c-tab-bar {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  flex-wrap: nowrap;
  align-items: center;
  height: 110rpx;
  background-color: #fff;
  box-sizing: border-box;
}
</style>
