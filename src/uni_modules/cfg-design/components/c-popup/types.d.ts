import type { HTMLAttributes, CSSProperties } from 'vue'
import type { IconProps } from '../c-icon/types.d'

export interface PopupConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  maskClass?: string | Record<string, any> | (string | Record<string, any>)[]
  maskStyle?: HTMLAttributes['style']
  contentClass?: string | Record<string, any> | (string | Record<string, any>)[]
  contentStyle?: HTMLAttributes['style']
  closeWrapClass?: string | Record<string, any> | (string | Record<string, any>)[]
  closeWrapStyle?: HTMLAttributes['style']
  /**
   * 是否展示弹窗 。
   * 默认： `undefined`
   */
  visible?: boolean
  /**
   * 展示的位置 。
   * 默认： `undefined`
   */
  placement?: 'top' | 'right' | 'bottom' | 'left' | 'center'
  /**
   * 弹窗的 z-index 。
   * 默认： `undefined`
   */
  zIndex?: CSSProperties['z-index']
  /**
   * 圆角值，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/radiuses.html) 。
   * 默认： `undefined`
   */
  radius?: string | number
  /**
   * 是否显示关闭图标 。
   * 默认： `undefined`
   */
  closable?: boolean
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  closeIconProps?: IconProps
  /**
   * 是否不显示遮罩。
   * 默认： `undefined`
   */
  noMask?: boolean
  /**
   * 点击遮罩时是否执行关闭。
   * 默认： `undefined`
   */
  maskClosable?: boolean
  /**
   * 是否留出底部安全距离。
   * 默认： `undefined`
   */
  safeAreaInsetBottom?: boolean
  /**
   * 显示顶部状态栏高度；在 style 使用 padding-top 占位。
   * 默认： `undefined`
   */
  statusBar?: boolean
}

export interface PopupProps extends PopupConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}
