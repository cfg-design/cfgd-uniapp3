import type { Ref, InjectionKey } from 'vue'
import type { TabBarConfig, TabBarGetIndex, TabBarUpdateValue } from './types.d'
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
export const tabBarInjectionKeyUpdateValue: InjectionKey<TabBarUpdateValue> = Symbol()
export const tabBarInjectionKeyItem: InjectionKey<Ref<TabBarConfig['item']>> = Symbol()
