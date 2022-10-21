import type { HTMLAttributes } from 'vue'
import type { IconProps } from '../c-icon/types.d'
import type { TextProps } from '../c-text/types.d'
import type { ImageProps } from '../c-image/types.d'
import type { AvatarProps } from '../c-avatar/types.d'
import type { AvatarTextProps } from '../c-avatar-text/types.d'

export interface CellConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 左边图标名称或代码。
   * 默认： `undefined`
   */
  icon?: string
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  iconProps?: IconProps
  /**
   * 左边图片链接。
   * 默认： `undefined`
   */
  image?: string
  /**
   * [ImageProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/image.html#api) 。
   * 默认： `undefined`
   */
  imageProps?: ImageProps
  /**
   * 左边头像链接。
   * 默认： `undefined`
   */
  avatar?: string
  /**
   * [AvatarProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/avatar.html#props) 。
   * 默认： `undefined`
   */
  avatarProps?: AvatarProps
  /**
   * 左边头像文字。
   * 默认： `undefined`
   */
  avatarText?: string
  /**
   * [AvatarTextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/avatar.html#avatar-text-props) 。
   * 默认： `undefined`
   */
  avatarTextProps?: AvatarTextProps
  /**
   * 左边标签文字。
   * 默认： `undefined`
   */
  label?: string
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  labelProps?: TextProps
  /**
   * 描述文案。在左边标签下方。
   * 默认： `undefined`
   */
  brief?: string
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  briefProps?: TextProps
  /**
   * 右边文字。
   * 默认： `undefined`
   */
  value?: string
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  valueProps?: TextProps
  /**
   * 右图标名称或代码。
   * 默认： `undefined`
   */
  rightIcon?: string
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  rightIconProps?: IconProps
  /**
   * 无点击反馈 。
   * 默认： `false`
   */
  noClick?: boolean
}

export interface CellProps extends CellConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}
