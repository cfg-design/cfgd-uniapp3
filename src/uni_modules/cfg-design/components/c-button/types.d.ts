import type { HTMLAttributes } from 'vue'
import type { UButtonProps } from '../uni'
import type { TextProps } from '../c-text/types.d'
import type { IconProps } from '../c-icon/types.d'
import type { SpinProps } from '../c-spin/types.d'

export interface ButtonConfig extends UButtonProps {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 颜色。 useColors() 可以查看配置数据。使用 setColors() 进行配置。
   * 默认： undefined
   */
  color?: string
  /**
   * 渐变结束颜色。 useColors() 可以查看配置数据。使用 setColors() 进行配置。
   * 默认： undefined
   */
  color2?: string
  /**
   * 字体大小。 useFontSizes() 可以查看配置数据。使用 setFontSizes() 进行配置。
   * 默认： undefined
   */
  size?: string | number
  /**
   * 宽度
   * 默认： `undefined`
   */
  width?: string | number
  /**
   * 高度
   * 默认： `undefined`
   */
  height?: string | number
  /**
   * 文字
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
   * 详情查看 c-spin props
   * 默认： `undefined`
   */
  spinProps?: SpinProps
}

export interface ButtonProps extends ButtonConfig {
  /**
   * 配置名。使用 `useButtonConfigs()` 查看配置数据。使用 `setButtonConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
