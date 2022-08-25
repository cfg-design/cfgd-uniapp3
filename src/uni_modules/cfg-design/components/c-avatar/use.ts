import type { AvatarConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, AvatarConfig>>({
  default: {
    ImageProps: {
      viewBind: { class: ['c-avatar'], style: [{ backgroundColor: '#fff' }] },
      iconProps: { name: 'user-5-line', color: 'placeholder' }
    },
    size: 100
  },
})

export const setConfigs = (_configs: Record<string, AvatarConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
