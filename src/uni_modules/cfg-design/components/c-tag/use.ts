import type { TagConfig } from './types'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, TagConfig>>({
  default: {
    color: 'primary',
    radius: 's',
    textColor: '#fff',
    size: 'm',
    closeViewProps: { cStyle: [{ backgroundColor: '#c6c7cb' }] },
    closeIconProps: { name: 'close-line', color: '#fff' }
  },
})

export const setConfigs = (_configs: Record<string, TagConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
