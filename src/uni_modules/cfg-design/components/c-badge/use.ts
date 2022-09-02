import type { BadgeConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, BadgeConfig>>({
  default: {},
})

export const setConfigs = (_configs: Record<string, BadgeConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
