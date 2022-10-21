import type { NoticeBarConfig } from './types'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, NoticeBarConfig>>({
  default: {}
})

export const setConfigs = (_configs: Record<string, NoticeBarConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
