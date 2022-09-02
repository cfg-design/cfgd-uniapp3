import type { HTMLAttributes } from 'vue'
import type { SpinProps } from '../c-spin/types'
import type { TextProps } from '../c-text/types'

export interface SwitchConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 颜色。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  color?: string
  /**
   * 背景颜色。 `useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
   * 默认： `undefined`
   */
  bgColor?: string
  /**
   * 字体大小。 `useFontSizes()` 可以查看配置数据。使用 setFontSizes() 进行配置。
   * 默认： undefined
   */
  size?: string | number
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: string | number | boolean
  /**
   * 选中时的值。
   * 默认： `true`
   */
  checkedValue?: string | number | boolean
  /**
   * 非选中时的值。
   * 默认： `false`
   */
  unCheckedValue?: string | number | boolean
  /**
   * 选中时的文字。
   * 默认： `undefined`
   */
  checkedText?: string
  /**
   * 文字 c-text props 。
   * 默认： `undefined`
   */
  checkedTextProps?: TextProps
  /**
   * 非选中时的文字。
   * 默认： `undefined`
   */
  unCheckedText?: string
  /**
   * 文字 c-text props 。
   * 默认： `undefined`
   */
  unCheckedTextProps?: TextProps
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
   * 加载中的开关。
   * 默认： `undefined`
   */
  loading?: boolean
  /**
   * 文字 c-spin props 。
   * 默认： `undefined`
   */
  spinProps?: SpinProps
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

export interface SwitchProps extends SwitchConfig {
  /**
   * 配置名。使用 `useSwitchConfigs()` 查看配置数据。使用 `setSwitchConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
