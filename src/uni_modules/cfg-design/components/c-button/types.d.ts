import type { HTMLAttributes } from 'vue'
import type { UButtonProps } from '../uni'
import type { TextProps } from '../c-text/types.d'
import type { IconProps } from '../c-icon/types.d'
import type { SpinProps } from '../c-spin/types.d'

export interface ButtonConfig extends UButtonProps {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 颜色，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/colors.html) 。
   * 默认： undefined
   */
  color?: string
  /**
   * 渐变结束颜色，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/colors.html) 。
   * 默认： undefined
   */
  color2?: string
  /**
   * 字体大小，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/font-sizes.html) 。
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
   * [SpinProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/spin.html#props) 。
   * 默认： `undefined`
   */
  spinProps?: SpinProps
}

export interface ButtonProps extends ButtonConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}
