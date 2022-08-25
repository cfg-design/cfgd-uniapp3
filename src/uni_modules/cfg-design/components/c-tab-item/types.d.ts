import type { HTMLAttributes } from 'vue'
import type { UViewProps } from '../uni'
import type { TextProps } from '../c-text/types'
import type { BadgeProps } from './../c-badge/types.d'
import type { LineProps } from './../c-line/types.d'

export interface TabItemConfig {
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: HTMLAttributes & UViewProps
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: string | number
  /**
   * 颜色。 default 配置为 `primary`。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  color?: string
  /**
   * 激活类型：undefined | line: 下划线，bg: 背景。
   * 默认： `undefined`
   */
  activeType?: string
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
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  dotBind?: HTMLAttributes & UViewProps
  /**
   * 详情 c-line props 。
   * 默认： `undefined`
   */
  lineProps?: LineProps
}

export interface TabItemProps extends TabItemConfig {
  /**
   * 配置名。使用 `useTabItemConfigs()` 查看配置数据。使用 `setTabItemConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
