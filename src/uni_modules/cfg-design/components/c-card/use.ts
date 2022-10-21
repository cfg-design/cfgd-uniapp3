import type { CardConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, CardConfig>>({
  default: {},
})

export const setConfigs = (_configs: Record<string, CardConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
