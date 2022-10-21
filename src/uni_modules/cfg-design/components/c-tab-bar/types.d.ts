import type { HTMLAttributes } from 'vue'
import type { TabBarItemProps } from '../c-tab-bar-item/types'

export interface TabBarConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: TabBarItemProps['value']
  /**
   * tab-bar-item TabBarItemProps 。
   * 默认： `undefined`
   */
  item?: TabBarItemProps
  /**
   * 项目。
   * 默认： `undefined`
   */
  items?: TabBarItemProps[]
}

export interface TabBarProps extends TabBarConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}

export declare type TabBarGetIndex = () => number
export declare type TabBarClickItem = (item?: TabBarItemProps) => void
