import type { AvatarTextConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, AvatarTextConfig>>({
  default: {},
})

export const setConfigs = (_configs: Record<string, AvatarTextConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
