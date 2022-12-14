import type { CSSProperties, HTMLAttributes } from 'vue'
import type { UInputProps } from '../uni'
import type { IconProps } from '../c-icon/types.d'
import { TextProps } from '../c-text/types'

export interface InputConfig extends UInputProps {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  inputClass?: string | Record<string, any> | (string | Record<string, any>)[]
  inputStyle?: HTMLAttributes['style']
  /**
   * 字体的大小。
   * 默认： `undefined`
   */
  size?: string | number
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
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  iconProps?: IconProps
  /**
   * 右边图标名称或代码。
   * 默认： `undefined`
   */
  rightIcon?: string
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  rightIconProps?: IconProps
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
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  clearIconProps?: IconProps
  /**
   * 是否显示输入字数统计。
   * 默认： `undefined`
   */
  showCount?: boolean
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  countProps?: TextProps
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
   * 圆角值，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/radiuses.html) 。
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
   * 是否不展示校验反馈。
   * 默认： `undefined`
   */
  noFeedback?: boolean
}

export interface InputProps extends InputConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}
