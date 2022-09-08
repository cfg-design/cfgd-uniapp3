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
   * 配置名。使用 `useTabBarConfigs()` 查看配置数据。使用 `setTabBarConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}

export declare type TabBarGetIndex = () => number
export declare type TabBarUpdateValue = (value?: string | number) => void
