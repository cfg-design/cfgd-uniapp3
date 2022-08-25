import type { ColConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, ColConfig>>({
  default: {},
})

export const setConfigs = (_configs: Record<string, ColConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
