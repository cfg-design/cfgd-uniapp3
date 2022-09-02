import type { HTMLAttributes } from 'vue'
import type { TextProps } from '../c-text/types.d'
import type { IconProps } from '../c-icon/types.d'

export interface NavBarConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 左边的图标。
   * 默认： `undefined`
   */
  leftIcon?: string
  /**
   * c-icon props 。
   * 默认： `undefined`
   */
  leftIconProps?: IconProps
  /**
   * 左边的文字。
   * 默认： `undefined`
   */
  leftText?: string
  /**
   * c-text props 。
   * 默认： `undefined`
   */
  leftTextProps?: TextProps
  /**
   * 标题。
   * 默认： `undefined`
   */
  title?: string
  /**
   * c-text props 。
   * 默认： `undefined`
   */
  titleProps?: TextProps
}

export interface NavBarProps extends NavBarConfig {
  /**
   * 配置名。使用 `useNavBarConfigs()` 查看配置数据。使用 `setNavBarConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
