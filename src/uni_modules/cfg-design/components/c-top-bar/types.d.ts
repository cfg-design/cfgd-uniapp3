import type { HTMLAttributes } from 'vue'

export interface TopBarConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 元素层级 z-index。
   * 默认： undefined
   */
  zIndex?: string | number
  /**
   * fixed 顶部的距离。
   * 默认： undefined
   */
  top?: string | number
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
   * 显示顶部状态栏高度；在 style 使用 padding-top 占位。
   * 默认： `undefined`
   */
  statusBar?: boolean
}

export interface TopBarProps extends TopBarConfig {
  /**
   * 配置名。使用 `useTopBarConfigs()` 查看配置数据。使用 `setTopBarConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
