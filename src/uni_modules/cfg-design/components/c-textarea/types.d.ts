import type { HTMLAttributes } from 'vue'
import type { UTextareaProps } from '../uni.d'
import type { TextProps } from '../c-text/types'

export interface TextareaConfig extends UTextareaProps {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  textareaClass?: string | Record<string, any> | (string | Record<string, any>)[]
  textareaStyle?: HTMLAttributes['style']
  /**
   * 字体的大小。
   * 默认： `undefined`
   */
  size?: string | number
  /**
   * 高度。
   * 默认： `undefined`
   */
  height?: string | number
  /**
   * 是否只读。
   * 默认： `undefined`
   */
  readonly?: boolean
  /**
   * 是否显示输入字数统计。
   * 默认： `undefined`
   */
  showCount?: boolean
  /**
   * 输入字数统计的 [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
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

export interface TextareaProps extends TextareaConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}
