import type { HTMLAttributes } from 'vue'
import type { IconProps } from '../c-icon/types.d'
import type { ImageProps } from '../c-image/types.d'
import type { TextProps } from '../c-text/types.d'
import type { ButtonProps } from '../c-button/types.d'

export interface EmptyConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 图标名； icon 、 image 二选一。
   * 默认： `undefined`
   */
  icon?: IconProps['name']
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  iconProps?: IconProps
  /**
   * 图片路径； icon 、 image 二选一。
   * 默认： `undefined`
   */
  image?: ImageProps['src']
  /**
   * [ImageProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/image.html#api) 。
   * 默认： `undefined`
   */
  imageProps?: ImageProps
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
   * [ButtonProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/button.html#props) 。 。
   * 默认： `undefined`
   */
  buttonProps?: ButtonProps
}

export interface EmptyProps extends EmptyConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}
