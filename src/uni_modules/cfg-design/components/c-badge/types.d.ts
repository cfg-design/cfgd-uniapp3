import type { TextProps } from '../c-text/types.d'

export interface BadgeConfig {
  /**
   * 背景颜色。`useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  color?: string
  /**
   * 文字的字体大小。 详情查看 c-text props.size
   * 默认： `undefined`
   */
  size?: string | number
  /**
   * 文字
   * 默认： `undefined`
   */
  text?: string
  /**
   * 文字的颜色。 详情查看 c-text props.color
   * 默认： `undefined`
   */
  textColor?: string
  /**
   * 详情查看 c-text props
   * 默认： `undefined`
   */
  textProps?: TextProps
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
}

export interface BadgeProps extends BadgeConfig {
  /**
   * 配置名。使用 `useBadgeConfigs()` 查看配置数据。使用 `setBadgeConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
