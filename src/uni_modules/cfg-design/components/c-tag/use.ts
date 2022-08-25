import type { TagConfig } from './types'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, TagConfig>>({
  default: {
    color: 'primary',
    radius: 's',
    textColor: '#fff',
    size: 'm',
    viewBind: { style: [{ alignItems: 'center', justifyContent: 'center' }] },
    iconProps: { textProps: { textBind: { class: ['c-tag__icon'] } } },
    closeViewBind: { style: [{ backgroundColor: '#c6c7cb' }] },
    closeIconProps: { name: 'close-line', color: '#fff' }
  },
})

export const setConfigs = (_configs: Record<string, TagConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
