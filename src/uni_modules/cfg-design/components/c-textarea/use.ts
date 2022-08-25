import type { TextareaConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, TextareaConfig>>({
  default: {
    radius: 's',
    placeholder: '请输入',
    countProps: {
      color: 'secondary',
      textBind: { class: 'c-input__count' }
    }
  },
})

export const setConfigs = (_configs: Record<string, TextareaConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
