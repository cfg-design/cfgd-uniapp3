import type { DescriptionsConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, DescriptionsConfig>>({
  default: {},
})

export const setConfigs = (_configs: Record<string, DescriptionsConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
