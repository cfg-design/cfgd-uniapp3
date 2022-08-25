import type { BottomBarConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, BottomBarConfig>>({
  default: {
  },
})

export const setConfigs = (_configs: Record<string, BottomBarConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
