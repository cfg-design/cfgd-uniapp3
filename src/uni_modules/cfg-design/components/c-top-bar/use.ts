import type { TopBarConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, TopBarConfig>>({
  default: {},
})

export const setConfigs = (_configs: Record<string, TopBarConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
