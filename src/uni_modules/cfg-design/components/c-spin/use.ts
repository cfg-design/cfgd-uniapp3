import type { SpinConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, SpinConfig>>({
  default: {},
})

export const setConfigs = (_configs: Record<string, SpinConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
