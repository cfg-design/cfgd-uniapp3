import type { HTMLAttributes } from 'vue'
import type { TextProps } from '../c-text/types.d'

export interface AvatarTextConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 背景颜色。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  color?: string
  /**
   * 头像文字。
   * 默认： `undefined`
   */
  text?: string
  /**
   * 头像文字的颜色。详情查看 c-text props.color
   * 默认： `undefined`
   */
  textColor?: string
  /**
   * 详情查看 c-text props
   * 默认： `undefined`
   */
  textProps?: TextProps
  /**
   * 头像大小。
   * 默认： `undefined`
   */
  size?: string | number
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

export interface AvatarTextProps extends AvatarTextConfig {
  /**
   * 配置名。使用 `useAvatarTextConfigs()` 查看配置数据。使用 `setAvatarTextConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
