import type { CheckboxConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, CheckboxConfig>>({
  default: {
    radius: 's',
    iconProps: { name: 'check-line', color: '#fff' }
  },
  minus: {
    radius: 's',
    iconProps: { name: 'subtract-line', color: '#fff' }
  },
  indeterminate: {
    radius: 's',
    iconProps: { name: 'checkbox-blank-fill', color: '#fff' }
  }
})

export const setConfigs = (_configs: Record<string, CheckboxConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
