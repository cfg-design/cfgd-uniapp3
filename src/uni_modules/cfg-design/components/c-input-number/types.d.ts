import type { HTMLAttributes } from 'vue'
import type { UViewProps } from '../uni.d'
import { InputProps } from '../c-input/types'
import type { ButtonProps } from '../c-button/types.d'

export interface InputNumberConfig {
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: HTMLAttributes & UViewProps
  /**
   * 输入框的内容。
   * 默认： `undefined`
   */
  value?: number
  /**
   * 最小值。
   * 默认： `undefined`
   */
  min?: number
  /**
   * 最大值。
   * 默认： `undefined`
   */
  max?: number
  /**
   * 每次改变步数。
   * 默认： `undefined`
   */
  step?: number
  /**
   * 颜色。 useColors() 可以查看配置数据。使用 setColors() 进行配置。
   * 默认： undefined
   */
  color?: string
  /**
   * 字体的大小。
   * 默认： `undefined`
   */
  size?: string | number
  /**
   * c-input props 。
   * 默认： `undefined`
   */
  inputProps?: InputProps
  /**
   * 详情查看 c-button props
   * 默认： `undefined`
   */
  plusButtonProps?: ButtonProps
  /**
   * 详情查看 c-button props
   * 默认： `undefined`
   */
  minusButtonProps?: ButtonProps
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: boolean
  /**
   * 圆角值。 default 配置为 `s`。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
   * 默认： `undefined`
   */
  radius?: string
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: boolean
}

export interface InputNumberProps extends InputNumberConfig {
  /**
   * 配置名。使用 `useInputNumberConfigs()` 查看配置数据。使用 `setInputNumberConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
