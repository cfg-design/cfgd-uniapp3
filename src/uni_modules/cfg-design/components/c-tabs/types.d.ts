import type { HTMLAttributes } from 'vue'
import type { UViewProps } from '../uni'
import type { TabItemProps } from '../c-tab-item/types'

export interface TabsConfig {
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: HTMLAttributes & UViewProps
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: TabItemProps['value']
  /**
   * c-tab-item props 一些配置，有效属性 `viewBind`, `dotBind`, `textProps`, `badgeProps`, `color` , `lineProps`, `activeType`。
   * 默认： `undefined`
   */
  item?: Pick<TabItemProps, 'viewBind' | 'dotBind' | 'textProps' | 'badgeProps' | 'color' | 'lineProps' | 'activeType'>
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
