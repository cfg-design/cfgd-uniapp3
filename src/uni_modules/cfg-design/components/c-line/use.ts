import type { LineConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, LineConfig>>({
  default: { color: '#ebedf0', borderStyle: 'solid' },
})

export const setConfigs = (_configs: Record<string, LineConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
