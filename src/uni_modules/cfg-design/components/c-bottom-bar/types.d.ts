import type { HTMLAttributes } from 'vue'

export interface BottomBarConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 元素层级 z-index。
   * 默认： undefined
   */
  zIndex?: string | number
  /**
   * fixed 底部的距离。
   * 默认： undefined
   */
  bottom?: string | number
  /**
   * 无空间。
   * 默认： `undefined`
   */
  noSpace?: boolean
  /**
   * 不固定。
   * 默认： `undefined`
   */
  noFixed?: boolean
  /**
   * 是否留出底部安全距离。
   * 默认： `undefined`
   */
  safeAreaInsetBottom?: boolean
}

export interface BottomBarProps extends BottomBarConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}
