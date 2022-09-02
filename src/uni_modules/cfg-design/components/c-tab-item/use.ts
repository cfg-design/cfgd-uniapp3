import type { TabItemConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, TabItemConfig>>({
  default: {}
})

export const setConfigs = (_configs: Record<string, TabItemConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
