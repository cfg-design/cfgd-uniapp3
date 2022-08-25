import type { TabItemConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, TabItemConfig>>({
  default: {
    color: 'primary',
    badgeProps: { color: 'error', size: 'xs', round: true },
    lineProps: { width: 4, round: true }
  }
})

export const setConfigs = (_configs: Record<string, TabItemConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
