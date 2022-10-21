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
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  leftIconProps?: IconProps
  /**
   * 左边的文字。
   * 默认： `undefined`
   */
  leftText?: string
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  leftTextProps?: TextProps
  /**
   * 标题。
   * 默认： `undefined`
   */
  title?: string
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  titleProps?: TextProps
}

export interface NavBarProps extends NavBarConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}
