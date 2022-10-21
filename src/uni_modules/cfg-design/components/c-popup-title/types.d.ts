import type { HTMLAttributes } from 'vue'
import type { TextProps } from '../c-text/types.d'

export interface PopupTitleConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 标题文字。
   * 默认： `undefined`
   */
  title?: string
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  titleProps?: TextProps
}

export interface PopupTitleProps extends PopupTitleConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}
