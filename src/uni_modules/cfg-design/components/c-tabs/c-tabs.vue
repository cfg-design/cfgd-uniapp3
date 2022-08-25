<script setup lang="ts">
import type { TabsProps, TabsGetIndex, TabsUpdateValue } from './types.d'
import { computed, provide, ref, watch } from 'vue'
import { mergeProps } from '../../utils'
import {
  useConfigs,
  tabsInjectionKeyGetIndex,
  tabsInjectionKeyUpdateValue,
  tabsInjectionKeyValue,
  tabsInjectionKeyItem
} from './use'

interface Props {
  /**
   * 配置名。使用 `useTabsConfigs()` 查看配置数据。使用 `setTabsConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: TabsProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: TabsProps['viewBind']
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: TabsProps['value']
  /**
   * c-tab-item props 一些配置，有效属性 `viewBind`, `dotBind`, `textProps`, `badgeProps`, `color` , `lineProps`, `activeType`。
   * 默认： `undefined`
   */
  item?: TabsProps['item']
  /**
   * 项目。
   * 默认： `undefined`
   */
  items?: TabsProps['items']
}

interface Emits {
  (e: 'update:value', v: Props['value']): void
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const configs = useConfigs()

const valueR = ref<TabsProps['value']>(props.value)
const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
const itemC = computed(() => propsC.value.item)

let index = 0
const getIndex: TabsGetIndex = () => index ++

const updateValue: TabsUpdateValue = (val) => {
  if (valueR.value !== val) {
    valueR.value = val
    emits('update:value', valueR.value)
  }
}

watch(() => props.value, updateValue)

provide(tabsInjectionKeyGetIndex, getIndex)
provide(tabsInjectionKeyUpdateValue, updateValue)
provide(tabsInjectionKeyValue, valueR)
provide(tabsInjectionKeyItem, itemC)
</script>

<template>
<view class="c-tabs" v-bind="(propsC.viewBind as any)">
  <template v-for="(item, index) in propsC.items" :key="index">
    <slot
      name="item"
      :index="index"
      :item="item"
      :active="item.value !== undefined ? item.value === valueR : index === valueR"
    >
      <c-tab-item v-bind="item" />
    </slot>
  </template>
</view>
</template>

<style lang="scss">
.c-tabs {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 10rpx 16rpx 0 16rpx;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
}
</style>
