import type { EmptyConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, EmptyConfig>>({
  default: {},
  search: {
    text: '没有搜索结果',
    icon: 'empty-search'
  }
})

export const setConfigs = (_configs: Record<string, EmptyConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
