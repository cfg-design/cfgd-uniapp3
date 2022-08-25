import type { BadgeConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, BadgeConfig>>({
  default: {
    color: 'primary',
    radius: 'xs',
    textColor: '#fff',
    size: 's',
    textProps: { textBind: { class: 'c-badge', style: [{ alignItems: 'center', justifyContent: 'center', lineHeight: 1.25 }] } }
  },
})

export const setConfigs = (_configs: Record<string, BadgeConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
