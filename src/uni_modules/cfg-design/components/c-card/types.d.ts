import type { HTMLAttributes } from 'vue'
import { TextProps } from '../c-text/types'

export interface CardConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  headerClass?: string | Record<string, any> | (string | Record<string, any>)[]
  headerStyle?: HTMLAttributes['style']
  bodyClass?: string | Record<string, any> | (string | Record<string, any>)[]
  bodyStyle?: HTMLAttributes['style']
  footerClass?: string | Record<string, any> | (string | Record<string, any>)[]
  footerStyle?: HTMLAttributes['style']
  /**
   * 大小，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/font-sizes.html。
   * 默认： `undefined`
   */
  size?: string | number
  /**
   * 标题。
   * 默认： undefined
   */
  title?: string
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  titleProps?: TextProps
  /**
   * 标题右边的文字。
   * 默认： undefined
   */
  extra?: string
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  extraProps?: TextProps
  /**
   * 圆角值，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/radiuses.html) 。
   * 默认： `undefined`
   */
  radius?: string | number
}

export interface CardProps extends CardConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： default
   */
  c?: string
}
