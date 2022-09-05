<script setup lang="ts">
import type { TabsProps, TabsGetIndex, TabsUpdateValue } from './types.d'
import { computed, provide, ref, watch } from 'vue'
import { omitProps, mergeProps } from '../../utils'
import {
  useConfigs,
  tabsInjectionKeyGetIndex,
  tabsInjectionKeyUpdateValue,
  tabsInjectionKeyValue,
  tabsInjectionKeyItem
} from './use'

interface Props {
  props?: TabsProps
  cClass?: TabsProps['cClass']
  cStyle?: TabsProps['cStyle']
  /**
   * 配置名。使用 `useTabsConfigs()` 查看配置数据。使用 `setTabsConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: TabsProps['c']
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: TabsProps['value']
  /**
   * c-tab-item TabItemConfig 。
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

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))

const valueR = ref<TabsProps['value']>(propsC.value.value)

const itemC = computed(() => propsC.value.item)

const styles = computed(() => mergeProps({ x: [] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: ['c-tabs'] }, { x: propsC.value.cClass }).x)

let index = 0
const getIndex: TabsGetIndex = () => index ++

const updateValue: TabsUpdateValue = (val) => {
  if (valueR.value !== val) {
    valueR.value = val
    emits('update:value', valueR.value)
  }
}

watch(() => propsC.value.value, updateValue)

provide(tabsInjectionKeyGetIndex, getIndex)
provide(tabsInjectionKeyUpdateValue, updateValue)
provide(tabsInjectionKeyValue, valueR)
provide(tabsInjectionKeyItem, itemC)
</script>

<template>
<view :class="classC" :style="(styles as any)">
  <template v-for="(item, index) in propsC.items" :key="index">
    <slot
      name="item"
      :index="index"
      :item="item"
      :active="item.value !== undefined ? item.value === valueR : index === valueR"
    >
      <c-tab-item :props="item" />
    </slot>
  </template>
</view>
</template>

<style lang="scss" scoped>
.c-tabs {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 10rpx 16rpx 0 16rpx;
  width: 100%;
  background-color: #fff;
}
</style>
