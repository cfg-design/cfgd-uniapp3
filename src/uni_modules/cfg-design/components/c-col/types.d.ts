import type { HTMLAttributes, CSSProperties } from 'vue'
import type { UViewProps } from '../uni.d'

export interface ColConfig {
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: HTMLAttributes & UViewProps
  /**
   * 栅格占据的列数。
   * 默认： `undefined`
   */
  span?: string | number
  /**
   * 当前组件对齐方式（相对 flex 父级）。
   * 默认： `undefined`
   */
  alignSelf?: CSSProperties['align-self']
}

export interface ColProps extends ColConfig {
  /**
   * 配置名。使用 `useColConfigs()` 查看配置数据。使用 `setColConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
