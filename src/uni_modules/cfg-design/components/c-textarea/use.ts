import type { TextareaConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, TextareaConfig>>({
  default: {},
})

export const setConfigs = (_configs: Record<string, TextareaConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
