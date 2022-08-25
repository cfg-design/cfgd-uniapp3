import type { HTMLAttributes } from 'vue'
import type { UImageProps, UViewProps } from '../uni.d'
import type { IconProps } from '../c-icon/types.d'
import type { SpinProps } from '../c-spin/types.d'

export interface ImageConfig {
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: HTMLAttributes & UViewProps
  /**
   * image 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  imageBind?: HTMLAttributes & UImageProps
  /**
   * 图片链接地址。
   * 默认： `undefined`
   */
  src?: UImageProps['src']
  /**
   * 图片裁剪、缩放的模式。详情： https://uniapp.dcloud.io/component/image.html
   * 默认： `undefined`
   */
  mode?: UImageProps['mode']
  /**
   * 图片宽度。
   * 默认： `undefined`
   */
  width?: string | number
  /**
   * 图片高度。
   * 默认： `undefined`
   */
  height?: string | number
  /**
   * 圆角值。 default 配置为 `m`。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
   * 默认： `undefined`
   */
  radius?: string
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: boolean
  /**
   * 详情查看 c-icon props 。 `src` 为空时，显示 `icon` 图标。 default 配置为 `{ name: 'image-2-fill' }`
   * 默认： `undefined`
   */
  iconProps?: IconProps
  /**
   * 详情查看 c-icon props 。 加载图片失败时，显示 `icon` 图标。 default 配置为 `{ name: 'error-warning-fill', color: 'tertiary' }`
   * 默认： `undefined`
   */
  errorProps?: IconProps
  /**
   * 详情查看 c-spin props 。
   * 默认： `undefined`
   */
  spinProps?: SpinProps
  /**
   * 不显示 spin 加载
   * 默认： `undefined`
   */
  noSpin?: boolean
}

export interface ImageProps extends ImageConfig {
  /**
   * 配置名。使用 `useImageConfigs()` 查看配置数据。使用 `setImageConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
