import type { PopupConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, PopupConfig>>({
  default: {},
})

export const setConfigs = (_configs: Record<string, PopupConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
