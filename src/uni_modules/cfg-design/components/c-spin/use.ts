import type { SpinConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, SpinConfig>>({
  default: {
    icon: 'loader-5-line',
    tipProps: { textBind: { class: ['c-spin__tip'] } },
    color: 'primary',
    iconSize: '5xl',
  },
})

export const setConfigs = (_configs: Record<string, SpinConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
