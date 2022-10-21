import type { Ref, InjectionKey } from 'vue'
import type { TabBarItemProps } from '../c-tab-bar-item/types'
import type { TabBarConfig, TabBarGetIndex, TabBarClickItem } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, TabBarConfig>>({
  default: {}
})

export const setConfigs = (_configs: Record<string, TabBarConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs

export const tabBarInjectionKeyValue: InjectionKey<Ref<string | number>> = Symbol()
export const tabBarInjectionKeyGetIndex: InjectionKey<TabBarGetIndex> = Symbol()
export const tabBarInjectionKeyClickItem: InjectionKey<TabBarClickItem> = Symbol()
export const tabBarInjectionKeyItem: InjectionKey<Ref<TabBarItemProps>> = Symbol()
