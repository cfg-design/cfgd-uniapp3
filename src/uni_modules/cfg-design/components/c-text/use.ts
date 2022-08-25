import type { TextConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, TextConfig>>({
  default: { size: 'm', color: 'main' },
  h1: { size: '8xl', strong: true, textBind: { class: ['c-h1'] } },
  h2: { size: '4xl', strong: true, textBind: { class: ['c-h2'] } },
  h3: { size: 'xl', strong: true, textBind: { class: ['c-h3'] } },
  h4: { size: 'l', strong: true, textBind: { class: ['c-h4'] } },
  h5: { size: 'm', strong: true, textBind: { class: ['c-h5'] } },
  h6: { size: 's', strong: true, textBind: { class: ['c-h6'] } },
})

export const setConfigs = (_configs: Record<string, TextConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
