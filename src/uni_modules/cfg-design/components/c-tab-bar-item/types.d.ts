import type { HTMLAttributes } from 'vue'
import type { TextProps } from '../c-text/types'
import type { IconProps } from './../c-icon/types.d'
import type { BadgeProps } from './../c-badge/types.d'

export interface TabBarItemConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: string | number
  /**
   * 颜色。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  color?: string
  /**
   * 图标。
   * 默认： `undefined`
   */
  icon?: string
  /**
   * 详情 c-icon props 。
   * 默认： `undefined`
   */
  iconProps?: IconProps
  /**
   * 激活的图标，undefined 时为 props.icon 值。
   * 默认： `undefined`
   */
  activeIcon?: string
  /**
   * { ...mergeProps(props.iconProps, activeIconProps), color }，详情 c-icon props 。
   * 默认： `undefined`
   */
  activeIconProps?: IconProps
  /**
   * 文字。
   * 默认： `undefined`
   */
  text?: string
  /**
   * 详情 c-text props 。
   * 默认： `undefined`
   */
  textProps?: TextProps
  /**
   * 右上角的角标提示信息。
   * 默认： `undefined`
   */
  badge?: BadgeProps['text']
  /**
   * 详情 c-badge props 。
   * 默认： `undefined`
   */
  badgeProps?: BadgeProps
  /**
   * 提示是否显示圆点 。
   * 默认： `undefined`
   */
  dot?: boolean
}

export interface TabBarItemProps extends TabBarItemConfig {
  /**
   * 配置名。使用 `useTabBarItemConfigs()` 查看配置数据。使用 `setTabBarItemConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
