import type { HTMLAttributes } from 'vue'
import type { UViewProps } from '../uni'
import type { TabBarItemProps } from '../c-tab-bar-item/types'

export interface TabBarConfig {
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: HTMLAttributes & UViewProps
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: TabBarItemProps['value']
  /**
   * tab-bar-item props 一些配置，有效属性 `viewBind`, `dotBind`, `iconProps`, `activeIconProps`, `textProps`, `badgeProps`, `color` 。
   * 默认： `undefined`
   */
  item?: Pick<TabBarItemProps, 'viewBind' | 'dotBind' | 'iconProps' | 'activeIconProps' | 'textProps' | 'badgeProps' | 'color'>
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
