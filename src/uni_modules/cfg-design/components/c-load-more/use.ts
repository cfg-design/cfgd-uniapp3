import type { LoadMoreConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, LoadMoreConfig>>({
  default: {
    text: '加载更多',
    loadingText: '正在加载',
    noMoreText: '没有更多了',
    lineProps: { length: '160', color: 'placeholder' },
    spinProps: { iconSize: 'l' }
  },
})

export const setConfigs = (_configs: Record<string, LoadMoreConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
