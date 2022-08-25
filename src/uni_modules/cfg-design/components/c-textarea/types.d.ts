import type { HTMLAttributes, TextareaHTMLAttributes } from 'vue'
import type { UViewProps, UTextareaProps } from '../uni.d'
import { TextProps } from '../c-text/types'

export interface TextareaConfig {
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: HTMLAttributes & UViewProps
  /**
   * textarea 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  textareaBind?: TextareaHTMLAttributes & UTextareaProps
  /**
   * 输入框的内容。
   * 默认： `undefined`
   */
  value?: string
  /**
   * 字体的大小。
   * 默认： `undefined`
   */
  size?: string | number
  /**
   * 输入框为空时占位符。
   * 默认： `undefined`
   */
  placeholder?: UTextareaProps['placeholder']
  /**
   * 高度。
   * 默认： `undefined`
   */
  height?: string | number
  /**
   * 是否自动增高，设置auto-height时，height不生效。
   * 默认： `undefined`
   */
  autoHeight?: boolean
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
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  countViewBind?: HTMLAttributes & UViewProps
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

export interface TextareaProps extends TextareaConfig {
  /**
   * 配置名。使用 `useTextareaConfigs()` 查看配置数据。使用 `setTextareaConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
