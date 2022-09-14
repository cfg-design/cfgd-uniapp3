import type { IconConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'

const configs = ref<Record<string, IconConfig>>({
  default: {},
})

const icons = ref<Record<string, Record<string, string>>>({})

export const setConfigs = (_configs: Record<string, IconConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs

/**
 * 设置字体名称
 * @param _icons { name: 字体代码 }，如：`{ name: &#xe616; }`
 * @returns icons
 */
export const setIcons = (family: string, _icons: { [name: string]: string }) => icons.value[family] = { ..._icons }
/**
 * 添加字体名称或更改字体代码
 * @param _icons { name: 字体代码 }，如：`{ name: &#xe616; }`
 * @returns icons
 */
export const addIcons = (family: string, _icons: { [name: string]: string }) => icons.value[family] = mergeRight(icons.value[family], _icons)

export const useIcons = () => icons
