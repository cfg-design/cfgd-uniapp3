import type { HTMLAttributes } from 'vue'
import type { TabItemProps, TabItemConfig } from '../c-tab-item/types'

export interface TabsConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: TabItemProps['value']
  /**
   * c-tab-item TabItemConfig 。
   * 默认： `undefined`
   */
  item?: TabItemConfig
  /**
   * 项目。
   * 默认： `undefined`
   */
  items?: TabItemProps[]
}

export interface TabsProps extends TabsConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}

export declare type TabsGetIndex = () => number
export declare type TabsUpdateValue = (value?: string | number) => void
