import type { ProgressConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, ProgressConfig>>({
  default: {
    activeProps: { color: 'primary' }
  },
})

export const setConfigs = (_configs: Record<string, ProgressConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
