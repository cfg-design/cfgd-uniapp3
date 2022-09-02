import type { ButtonConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, ButtonConfig>>({
  default: {
    hoverStartTime: 20,
    hoverStayTime: 70
  },
})

export const setConfigs = (_configs: Record<string, ButtonConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
