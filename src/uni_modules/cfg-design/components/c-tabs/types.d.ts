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
   * 配置名。使用 `useTabsConfigs()` 查看配置数据。使用 `setTabsConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}

export declare type TabsGetIndex = () => number
export declare type TabsUpdateValue = (value?: string | number) => void
