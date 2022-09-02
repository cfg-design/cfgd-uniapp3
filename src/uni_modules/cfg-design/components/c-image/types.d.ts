import type { HTMLAttributes } from 'vue'
import type { UImageProps } from '../uni.d'
import type { IconProps } from '../c-icon/types.d'
import type { SpinProps } from '../c-spin/types.d'

export interface ImageConfig extends UImageProps {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  imageClass?: string | Record<string, any> | (string | Record<string, any>)[]
  imageStyle?: HTMLAttributes['style']
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
   * 圆角值。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
   * 默认： `undefined`
   */
  radius?: string | number
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: boolean
  /**
   * 详情查看 c-icon props 。 `src` 为空时，显示 `icon` 图标。
   * 默认： `undefined`
   */
  iconProps?: IconProps
  /**
   * 详情查看 c-icon props 。 加载图片失败时，显示 `icon` 图标。
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
