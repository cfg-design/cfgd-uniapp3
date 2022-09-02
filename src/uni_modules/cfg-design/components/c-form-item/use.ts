import type { Ref, InjectionKey } from 'vue'
import type { FormItemConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, FormItemConfig>>({
  default: {},
})

export const setConfigs = (_configs: Record<string, FormItemConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs

export const formItemInjectionKeySize: InjectionKey<Ref<string>> = Symbol()
export const formItemInjectionKeyDisabled: InjectionKey<Ref<boolean>> = Symbol()
export const formItemInjectionKeyPath: InjectionKey<Ref<FormItemConfig['path']>> = Symbol()
export const formItemInjectionKeyNoFeedback: InjectionKey<Ref<boolean>> = Symbol()
