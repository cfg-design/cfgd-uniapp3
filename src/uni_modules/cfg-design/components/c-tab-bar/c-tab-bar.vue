<script setup lang="ts">
import type { TabBarItemProps } from '../c-tab-bar-item/types'
import type { TabBarProps, TabBarGetIndex } from './types.d'
import { computed, provide } from 'vue'
import { mergeProps, omitProps } from '../../utils'
import {
  useConfigs,
  tabBarInjectionKeyGetIndex,
  tabBarInjectionKeyClickItem,
  tabBarInjectionKeyValue,
  tabBarInjectionKeyItem
} from './use'

interface Props {
  props?: TabBarProps
  cClass?: TabBarProps['cClass']
  cStyle?: TabBarProps['cStyle']
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: TabBarProps['c']
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: TabBarProps['value']
  /**
   * tab-bar-item TabBarItemConfig 。
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
  (e: 'click:item', v: TabBarItemProps): void
  (e: 'update:value', v: Props['value']): void
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const configs = useConfigs()

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))

const valueC = computed(() => propsC.value.value || 0)
const itemC = computed(() => propsC.value.item || {})

const styles = computed(() => mergeProps({ x: [] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: ['c-tab-bar'] }, { x: propsC.value.cClass }).x)

let index = 0
const getIndex: TabBarGetIndex = () => index ++

const clickItem = (item: TabBarItemProps) => {
  emits('update:value', item.value)
  emits('click:item', item)
}

provide(tabBarInjectionKeyGetIndex, getIndex)
provide(tabBarInjectionKeyClickItem, clickItem)
provide(tabBarInjectionKeyValue, valueC)
provide(tabBarInjectionKeyItem, itemC)
</script>

<template>
<view :class="classC" :style="(styles as any)">
  <template v-for="(item, index) in propsC.items" :key="index">
    <slot
      name="item"
      :index="index"
      :item="item"
      :active="item.value !== undefined ? item.value === propsC.value : index === propsC.value"
    >
      <c-tab-bar-item :props="item" />
    </slot>
  </template>
</view>
</template>

<style lang="scss" scoped>
.c-tab-bar {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  height: 110rpx;
  background-color: #fff;
}
</style>
