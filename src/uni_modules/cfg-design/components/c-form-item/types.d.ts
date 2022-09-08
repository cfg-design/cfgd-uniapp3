import type { HTMLAttributes } from 'vue'
import type { IconProps } from '../c-icon/types.d'
import type { TextProps } from '../c-text/types.d'
import type { LineProps } from '../c-line/types.d'

export interface FormItemConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  labelClass?: string | Record<string, any> | (string | Record<string, any>)[]
  labelStyle?: HTMLAttributes['style']
  mainClass?: string | Record<string, any> | (string | Record<string, any>)[]
  mainStyle?: HTMLAttributes['style']
  contentClass?: string | Record<string, any> | (string | Record<string, any>)[]
  contentStyle?: HTMLAttributes['style']
  /**
   * 字体大小。 useFontSizes() 可以查看配置数据。使用 setFontSizes() 进行配置。
   * 默认： `undefined`
   */
  size?: string | number
  /**
   * 表单域 value 对象的属性名。
   * 默认： `undefined`
   */
  path?: string
  /**
   * 标签文字。
   * 默认： `undefined`
   */
  label?: string
  /**
   * 标签显示的位置。
   * 默认： `undefined`
   */
  labelPlacement?: 'left' | 'top'
  /**
   * 标签的宽度。
   * 默认： `undefined`
   */
  labelWidth?: string | number
  /**
   * 绑定控件的 id 。
   * 默认： `undefined`
   */
  labelFor?: string
  /**
   * 标签文字 c-text props 。
   * 默认： `undefined`
   */
  labelTextProps?: TextProps
  /**
   * 右边图标名称或代码。
   * 默认： `undefined`
   */
  rightIcon?: string
  /**
   * 详情查看 c-icon props 。
   * 默认： `undefined`
   */
  rightIconProps?: IconProps
  /**
   * 详情查看 c-text props 。
   * 默认： `undefined`
   */
  errorProps?: TextProps
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: boolean
  /**
   * 是否不展示校验反馈。
   * 默认： `undefined`
   */
  noFeedback?: boolean
  /**
   * 是否展示标签。
   * 默认： `undefined`
   */
  noLabel?: boolean
  /**
   * 是否展示必填的星号。
   * 默认： `undefined`
   */
  noRequireMark?: boolean
  /**
   * 是否不显示表单项的下划线边框。
   * 默认： `undefined`
   */
  noBorderBottom?: boolean
  /**
   * 下划线边框 c-line props。
   * 默认： `undefined`
   */
  lineProps?: LineProps
}

export interface FormItemProps extends FormItemConfig {
  /**
   * 配置名。使用 `useFormItemConfigs()` 查看配置数据。使用 `setFormItemConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
