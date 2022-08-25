import type { ButtonConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, ButtonConfig>>({
  default: {
    size: 'm',
    radius: 's',
    spinProps: { direction: 'row' }
  },
})

export const setConfigs = (_configs: Record<string, ButtonConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
