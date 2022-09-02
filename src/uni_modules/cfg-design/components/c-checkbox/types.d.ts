import type { HTMLAttributes } from 'vue'
import type { IconProps } from '../c-icon/types.d'
import type { TextProps } from '../c-text/types.d'

export interface CheckboxConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  iconWrapClass?: string | Record<string, any> | (string | Record<string, any>)[]
  iconWrapStyle?: HTMLAttributes['style']
  /**
   * 勾选框的类型， undefined | default: 背景上色， icon: icon 勾上色。
   * 默认： `undefined`
   */
  activeType?: 'default' | 'icon'
  /**
   * 颜色。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  color?: string
  /**
   * 字体大小。 useFontSizes() 可以查看配置数据。使用 setFontSizes() 进行配置。
   * 默认： undefined
   */
  size?: string | number
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: string | number
  /**
   * 是否选中。
   * 默认： `undefined`
   */
  checked?: boolean
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
   * icon 勾，详情查看 c-icon props 。
   * 默认： `undefined`
   */
  iconProps?: IconProps
  /**
   * 文字。
   * 默认： `undefined`
   */
  text?: string
  /**
   * 文字 c-text props 。
   * 默认： `undefined`
   */
  textProps?: TextProps
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
   * 圆角值。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
   * 默认： `undefined`
   */
  radius?: string | number
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

export interface CheckboxProps extends CheckboxConfig {
  /**
   * 配置名。使用 `useCheckboxConfigs()` 查看配置数据。使用 `setCheckboxConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
