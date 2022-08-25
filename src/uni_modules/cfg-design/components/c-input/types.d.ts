import type { HTMLAttributes, InputHTMLAttributes, CSSProperties } from 'vue'
import type { UViewProps, UInputProps } from '../uni.d'
import type { IconProps } from '../c-icon/types.d'
import { TextProps } from '../c-text/types'

export interface InputConfig {
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: HTMLAttributes & UViewProps
  /**
   * input 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  inputBind?: InputHTMLAttributes & UInputProps
  /**
   * 输入框的内容。
   * 默认： `undefined`
   */
  value?: string
  /**
   * input 的类型。
   * 默认： `undefined`
   */
  type?: UInputProps['type']
  /**
   * 字体的大小。
   * 默认： `undefined`
   */
  size?: string | number
  /**
   * 输入框为空时占位符。
   * 默认： `undefined`
   */
  placeholder?: UInputProps['placeholder']
  /**
   * 输入内容对齐方式。
   * 默认： `undefined`
   */
  inputAlign?: CSSProperties['textAlign']
  /**
   * 背景颜色。
   * 默认： `undefined`
   */
  bgColor?: string
  /**
   * 左边图标名称或代码。
   * 默认： `undefined`
   */
  icon?: string
  /**
   * 详情查看 c-icon props
   * 默认： `undefined`
   */
  iconProps?: IconProps
  /**
   * 右边图标名称或代码。
   * 默认： `undefined`
   */
  rightIcon?: string
  /**
   * 详情查看 c-icon props
   * 默认： `undefined`
   */
  rightIconProps?: IconProps
  /**
   * 是否密码类型。
   * 默认： `undefined`
   */
  password?: boolean
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: boolean
  /**
   * 是否只读。
   * 默认： `undefined`
   */
  readonly?: boolean
  /**
   * 是否显示清除控件。
   * 默认： `undefined`
   */
  clearable?: boolean
  /**
   * 最大输入长度，设置为 -1 的时候不限制最大长度。
   * 默认： `undefined`
   */
  maxlength?: number
  /**
   * 是否显示输入字数统计。
   * 默认： `undefined`
   */
  showCount?: boolean
  /**
   * 输入字数统计的 c-text Props 。
   * 默认： `undefined`
   */
  countProps?: TextProps
  /**
   * 自动获取焦点。
   * 默认： `undefined`
   */
  autoFocus?: boolean
  /**
   * 是否显示边框。
   * 默认： `undefined`
   */
  border?: boolean
  /**
   * 是否显示下边框。
   * 默认： `undefined`
   */
  borderBottom?: boolean
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
  /**
   * 表单域 value 对象的属性名。
   * 默认： `undefined`
   */
  path?: string
  /**
   * 是否展示校验反馈。
   * 默认： `undefined`
   */
  noFeedback?: boolean
}

export interface InputProps extends InputConfig {
  /**
   * 配置名。使用 `useInputConfigs()` 查看配置数据。使用 `setInputConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
