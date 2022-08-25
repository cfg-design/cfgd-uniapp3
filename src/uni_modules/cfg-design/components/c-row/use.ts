import type { InjectionKey, Ref } from 'vue'
import type { RowConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, RowConfig>>({
  default: {
    cols: 12,
  },
})

export const setConfigs = (_configs: Record<string, RowConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs

export const rowInjectionKeyGutter: InjectionKey<Ref<[string, string]>> = Symbol()
export const rowInjectionKeyCols: InjectionKey<Ref<number>> = Symbol()
