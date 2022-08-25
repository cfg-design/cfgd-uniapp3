import type { HTMLAttributes } from 'vue'
import type { UViewProps } from '../uni.d'
import { LineProps } from '../c-line/types'

export interface BottomBarConfig {
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: HTMLAttributes & UViewProps
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
   * 配置名。使用 `useBottomBarConfigs()` 查看配置数据。使用 `setBottomBarConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
