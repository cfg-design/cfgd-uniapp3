import type { InputNumberConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, InputNumberConfig>>({
  default: {},
  round: {
    minusButtonProps: { round: true },
    plusButtonProps: { round: true },
    inputProps: { bgColor: 'transparent' }
  }
})

export const setConfigs = (_configs: Record<string, InputNumberConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
