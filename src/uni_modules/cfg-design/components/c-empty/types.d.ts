import type { HTMLAttributes } from 'vue'
import type { UViewProps } from '../uni.d'
import type { IconProps } from '../c-icon/types.d'
import type { ImageProps } from '../c-image/types.d'
import type { TextProps } from '../c-text/types.d'
import type { ButtonProps } from '../c-button/types.d'

export interface EmptyConfig {
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: HTMLAttributes & UViewProps
  /**
   * 图标名； icon 、 image 二选一。
   * 默认： `undefined`
   */
  icon?: IconProps['name']
  /**
   * c-icon props 。
   * 默认： `undefined`
   */
  iconProps?: IconProps
  /**
   * 图片路径； icon 、 image 二选一。
   * 默认： `undefined`
   */
  image?: ImageProps['src']
  /**
   * c-image props 。
   * 默认： `undefined`
   */
  imageProps?: ImageProps
  /**
   * 文字。
   * 默认： `undefined`
   */
  text?: string
  /**
   * c-text props 。
   * 默认： `undefined`
   */
  textProps?: TextProps
  /**
   * c-button props 。
   * 默认： `undefined`
   */
  buttonProps?: ButtonProps
}

export interface EmptyProps extends EmptyConfig {
  /**
   * 配置名。使用 `useEmptyConfigs()` 查看配置数据。使用 `setEmptyConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
