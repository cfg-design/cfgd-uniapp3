import type { RadioConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, RadioConfig>>({
  default: {
    radius: 's',
    iconProps: { name: 'check-line', color: '#fff' }
  },
  circle: {
    radius: 's',
    iconProps: { name: 'checkbox-blank-circle-fill', color: '#fff' }
  }
})

export const setConfigs = (_configs: Record<string, RadioConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
