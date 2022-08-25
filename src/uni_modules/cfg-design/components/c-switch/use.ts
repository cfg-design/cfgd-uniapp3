import type { SwitchConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, SwitchConfig>>({
  default: {
    radius: 's',
    color: 'primary',
    checkedTextProps: { color: '#fff' }
  }
})

export const setConfigs = (_configs: Record<string, SwitchConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
