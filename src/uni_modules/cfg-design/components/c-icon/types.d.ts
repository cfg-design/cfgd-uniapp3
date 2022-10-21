import type { TextProps } from '../c-text/types.d'

export interface IconConfig {
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  textProps?: TextProps
  /**
   * 字体名称。
   * 默认： `undefined`
   */
  family?: string
  /**
   * 字体图标名称，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html) 。
   * 默认： `undefined`
   */
  name?: string
  /**
   * 字体大小。 详情请查看 c-text props.size 。
   * 默认： `undefined`
   */
  size?: string | number
  /**
   * 字体颜色。 详情请查看 c-text props.color 。
   * 默认： `undefined`
   */
  color?: string
}

export interface IconProps extends IconConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}
