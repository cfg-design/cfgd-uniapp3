import type { HTMLAttributes, CSSProperties } from 'vue'
import type { UViewProps } from '../uni.d'

export interface LineConfig {
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: HTMLAttributes & UViewProps
  /**
   * 线条长度。
   * 默认： `undefined`
   */
  length?: number | string
  /**
   * 线条粗细。
   * 默认： `undefined`
   */
  width?: number | string
  /**
   * 线条颜色。 default 配置默认值为 `#ebedf0` 。
   * 默认： `undefined`
   */
  color?: string
  /**
   * 线条样式。
   * 默认： `undefined`
   */
  borderStyle?: CSSProperties['borderTopStyle']
  /**
   * 是否垂直。
   * 默认： `undefined`
   */
  vertical?: boolean
  /**
   * 是否显示为圆角。
   * 默认： `undefined`
   */
  round?: boolean
}

export interface LineProps extends LineConfig {
  /**
   * 配置名。使用 `useLindConfigs()` 查看配置数据。使用 `setLindConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}