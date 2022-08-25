import type { ImageProps } from '../c-image/types.d'

export interface AvatarConfig {
  /**
   * 详情请查看 c-image props 。
   * default 配置为： {
   *   viewBind: { class: ['c-avatar'], style: [{ backgroundColor: '#fff' }] },
   *   iconProps: { name: 'user-5-line' }
   * } 。
   * 默认： `default`
   */
  ImageProps?: ImageProps
  /**
   * 头像图片链接地址。
   * 默认： `undefined`
   */
  src?: ImageProps['src']
  /**
   * 头像大小。default 配置为 100rpx 。
   * 默认： `undefined`
   */
  size?: string | number
  /**
   * 圆角值。详情请查看 c-image props.radius 。
   * 默认： `undefined`
   */
  radius?: string
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: boolean
}

export interface AvatarProps extends AvatarConfig {
  /**
   * 配置名。使用 `useAvatarConfigs()` 查看配置数据。使用 `setAvatarConfigs()` 进行配置。
   * 默认： `default`
   */
   c?: string
}