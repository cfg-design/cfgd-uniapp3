import type { HTMLAttributes } from 'vue'
import type { UTextProps } from '../uni.d'

export interface TextConfig {
  /**
   * text 组件的 Attributes 和 Props 。
   * 默认： undefined
   */
  textBind?: HTMLAttributes & UTextProps
  /**
   * 字体颜色。 default 配置为 main。 useColors() 可以查看配置数据。使用 setColors() 进行配置。
   * 默认： undefined
   */
  color?: string
  /**
   * 字体大小。 default 配置为 m。 useFontSizes() 可以查看配置数据。使用 setFontSizes() 进行配置。
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
   * 配置名。使用 useTextConfigs() 查看配置数据。使用 setTextConfigs() 进行配置。
   * 默认： default
   */
  c?: string
}