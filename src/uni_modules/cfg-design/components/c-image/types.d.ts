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
   * 圆角值，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/radiuses.html) 。
   * 默认： `undefined`
   */
  radius?: string | number
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: boolean
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。 `src` 为空时，显示 `icon` 图标。
   * 默认： `undefined`
   */
  iconProps?: IconProps
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。 加载图片失败时，显示 `icon` 图标。
   * 默认： `undefined`
   */
  errorProps?: IconProps
  /**
   * [SpinProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/spin.html#props) 。
   * 默认： `undefined`
   */
  spinProps?: SpinProps
  /**
   * 不显示 spin 加载。
   * 默认： `undefined`
   */
  noSpin?: boolean
}

export interface ImageProps extends ImageConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}
