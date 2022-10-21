import type { HTMLAttributes } from 'vue'
import type { UTextProps } from '../uni.d'

export interface TextConfig extends UTextProps {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 文字。
   * 默认： undefined
   */
  text?: any
  /**
   * 字体颜色，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/colors.html) 。
   * 默认： undefined
   */
  color?: string
  /**
   * 字体大小，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/font-sizes.html) 。
   * 默认： undefined
   */
  size?: string | number
  /**
   * 是否粗体。
   * 默认： undefined
   */
  strong?: boolean
  /**
   * 是否斜体。
   * 默认： undefined
   */
  italic?: boolean
  /**
   * 是否显示下划线。
   * 默认： undefined
   */
  underline?: boolean
  /**
   * 是否显示删除线。
   * 默认： undefined
   */
  del?: boolean
  /**
   * 限制行数。内容超出显示省略号。
   * 默认： undefined
   */
  lines?: number | string
}

export interface TextProps extends TextConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： default
   */
  c?: string
}
