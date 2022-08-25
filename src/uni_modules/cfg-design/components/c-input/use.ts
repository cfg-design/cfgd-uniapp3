import type { InputConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, InputConfig>>({
  default: {
    radius: 's',
    placeholder: '请输入',
    iconProps: { textProps: { textBind: { class: 'c-input__icon' } } },
    rightIconProps: { textProps: { textBind: { class: 'c-input__right-icon' } } },
    countProps: {
      color: 'secondary',
      textBind: { class: 'c-input__count' }
    }
  },
})

export const setConfigs = (_configs: Record<string, InputConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
