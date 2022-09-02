import type { CheckboxConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, CheckboxConfig>>({
  default: {},
  minus: {
    iconProps: { name: 'subtract-line' }
  },
  indeterminate: {
    iconProps: { name: 'checkbox-blank-fill' }
  }
})

export const setConfigs = (_configs: Record<string, CheckboxConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
