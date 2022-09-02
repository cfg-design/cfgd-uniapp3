import type { NavBarConfig } from './types'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, NavBarConfig>>({
  default: {},
  dark: {
    cStyle: [{ backgroundColor: '#202124' }],
    leftIconProps: { color: '#fff' },
    leftTextProps: { color: '#fff' },
    titleProps: { color: '#fff' }
  }
})

export const setConfigs = (_configs: Record<string, NavBarConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
