import type { InputNumberConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, InputNumberConfig>>({
  default: {
    radius: 's',
    minusButtonProps: { icon: 'subtract-line' },
    plusButtonProps: { icon: 'add-line' }
  },
  round: {
    minusButtonProps: { icon: 'subtract-line', round: true },
    plusButtonProps: { icon: 'add-line', round: true },
    inputProps: { bgColor: 'transparent' }
  }
})

export const setConfigs = (_configs: Record<string, InputNumberConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
