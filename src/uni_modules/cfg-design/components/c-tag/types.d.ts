import type { HTMLAttributes } from 'vue'
import type { TextProps } from '../c-text/types'
import type { IconProps } from '../c-icon/types'

export interface TagConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 背景和边框颜色，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/colors.html) 。
   * 默认： `undefined`
   */
  color?: string
  /**
   * 大小，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/font-sizes.html) 。
   * 默认： `undefined`
   */
  size?: string | number
  /**
   * 文字。
   * 默认： `undefined`
   */
  text?: string
  /**
   * 文字的颜色，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/colors.html) 。
   * 默认： `undefined`
   */
  textColor?: string
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  textProps?: TextProps
  /**
   * 图标。
   * 默认： `undefined`
   */
  icon?: string
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  iconProps?: IconProps
  /**
   * 是否可关闭。
   * 默认： `undefined`
   */
  closable?: boolean
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  closeIconProps?: IconProps
  /**
   * 圆角值，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/radiuses.html) 。
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
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}
