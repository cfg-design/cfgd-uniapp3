import type { LoadMoreConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, LoadMoreConfig>>({
  default: {},
})

export const setConfigs = (_configs: Record<string, LoadMoreConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
