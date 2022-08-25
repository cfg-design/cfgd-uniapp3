import type { HTMLAttributes, CSSProperties } from 'vue'
import type { UViewProps } from '../uni.d'

export interface RowConfig {
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: HTMLAttributes & UViewProps
  /**
   * 显示的栅格数量。
   * 默认： `undefined`
   */
  cols?: number | string
  /**
   * 栅格水平间隔。
   * 默认： `undefined`
   */
  gutter?: string | number | (string | number)[]
  /**
   * 垂直排列方式。
   * 默认： `undefined`
   */
  align?: CSSProperties['align-items']
  /**
   * 水平排列方式。
   * 默认： `undefined`
   */
  justify?: CSSProperties['justify-content']
  /**
   * 是否超出换行。
   * 默认： `undefined`
   */
  wrap?: boolean
  /**
   * 是否垂直布局。
   * 默认： `undefined`
   */
  vertical?: boolean
}

export interface RowProps extends RowConfig {
  /**
   * 配置名。使用 `useRowConfigs()` 查看配置数据。使用 `setRowConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
