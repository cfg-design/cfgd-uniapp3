import type { Ref, InjectionKey } from 'vue'
import type { TabsConfig, TabsGetIndex, TabsUpdateValue } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, TabsConfig>>({
  default: {}
})

export const setConfigs = (_configs: Record<string, TabsConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs

export const tabsInjectionKeyValue: InjectionKey<Ref<string | number>> = Symbol()
export const tabsInjectionKeyGetIndex: InjectionKey<TabsGetIndex> = Symbol()
export const tabsInjectionKeyUpdateValue: InjectionKey<TabsUpdateValue> = Symbol()
export const tabsInjectionKeyItem: InjectionKey<Ref<TabsConfig['item']>> = Symbol()
