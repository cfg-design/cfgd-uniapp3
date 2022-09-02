import type { HTMLAttributes } from 'vue'
import type { UTextareaProps } from '../uni.d'
import type { TextProps } from '../c-text/types'

export interface TextareaConfig extends UTextareaProps {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
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
   * 输入字数统计的 c-text Props 。
   * 默认： `undefined`
   */
  countTextProps?: TextProps
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
