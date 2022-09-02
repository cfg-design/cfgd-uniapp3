import type { ImageConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, ImageConfig>>({
  default: {},
})

export const setConfigs = (_configs: Record<string, ImageConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
