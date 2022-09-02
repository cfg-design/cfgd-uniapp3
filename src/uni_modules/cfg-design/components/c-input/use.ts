import type { InputConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, InputConfig>>({
  default: {},
})

export const setConfigs = (_configs: Record<string, InputConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
