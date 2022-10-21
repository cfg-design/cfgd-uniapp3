import type { HTMLAttributes } from 'vue'
import type { TextProps } from '../c-text/types.d'
import type { IconProps } from '../c-icon/types.d'

export interface NoticeBarConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 颜色，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/colors.html) 。
   * 默认： undefined
   */
  color?: string
  /**
   * 左边的图标。
   * 默认： `undefined`
   */
  leftIcon?: string
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  leftIconProps?: IconProps
  /**
   * 右边的图标。
   * 默认： `undefined`
   */
  rightIcon?: string
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  rightIconProps?: IconProps
  /**
   * 文字。
   * 默认： `undefined`
   */
  text?: string
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  textProps?: TextProps
  /**
   * 是否自动播放。
   * 默认： `undefined`
   */
  autoplay?: boolean
  /**
   * 滚动速率 (px/s) 。
   * 默认： `undefined`
   */
  speed?: string | number
  /**
   * 是否显示关闭图标。
   * 默认： `undefined`
   */
  closable?: boolean
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  closeIconProps?: IconProps
}

export interface NoticeBarProps extends NoticeBarConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}
