import type { ImageConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, ImageConfig>>({
  default: {
    iconProps: { name: 'image-2-fill', color: 'placeholder' },
    errorProps: { name: 'error-warning-fill', color: 'placeholder' },
    radius: 'm'
  },
})

export const setConfigs = (_configs: Record<string, ImageConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
