import type { TabBarItemConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, TabBarItemConfig>>({
  default: {}
})

export const setConfigs = (_configs: Record<string, TabBarItemConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
