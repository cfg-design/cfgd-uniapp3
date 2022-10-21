import type { ImageProps } from '../c-image/types.d'

export interface AvatarConfig {
  /**
   * [ImageProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/image.html#api) 。
   * 默认： `default`
   */
  imageProps?: ImageProps
  /**
   * 头像图片链接地址。
   * 默认： `undefined`
   */
  src?: ImageProps['src']
  /**
   * 头像大小。
   * 默认： `undefined`
   */
  size?: string | number
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
}

export interface AvatarProps extends AvatarConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
   c?: string
}
