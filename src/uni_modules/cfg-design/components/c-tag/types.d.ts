import type { HTMLAttributes } from 'vue'
import type { TextProps } from '../c-text/types'
import type { IconProps } from '../c-icon/types'

export interface TagConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 背景和边框颜色。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  color?: string
  /**
   * 大小。详情查看 c-text props.size
   * 默认： `undefined`
   */
  size?: string | number
  /**
   * 文字。
   * 默认： `undefined`
   */
  text?: string
  /**
   * 文字的颜色。详情查看 c-text props.color
   * 默认： `undefined`
   */
  textColor?: string
  /**
   * 详情查看 c-text props
   * 默认： `undefined`
   */
  textProps?: TextProps
  /**
   * 图标。
   * 默认： `undefined`
   */
  icon?: string
  /**
   * 详情查看 c-icon props
   * 默认： `undefined`
   */
  iconProps?: IconProps
  /**
   * 是否可关闭。
   * 默认： `undefined`
   */
  closable?: boolean
  /**
   * 详情查看 c-icon props
   * 默认： `undefined`
   */
  closeIconProps?: IconProps
  /**
   * 圆角值。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
   * 默认： `undefined`
   */
  radius?: string | number
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: boolean
  /**
   * 是否镂空。
   * 默认： `undefined`
   */
   plain?: boolean
}

export interface TagProps extends TagConfig {
  /**
   * 配置名。使用 `useTagConfigs()` 查看配置数据。使用 `setTagConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
