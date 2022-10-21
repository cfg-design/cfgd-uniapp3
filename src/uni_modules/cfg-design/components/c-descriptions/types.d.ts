import type { CSSProperties } from 'vue'
import type { RowProps } from '../c-row/types'
import type { ColProps } from '../c-col/types'
import type { TextProps } from '../c-text/types'

interface DescriptionFieldConfig {
  /**
   * c-col props
   */
  colProps?: ColProps
  /**
   * label 对齐方式
   */
  labelAlign?: CSSProperties['text-align']
  /**
   * label 显示位置
   */
  labelPlacement?: 'top' | 'left'
  /**
   * label 宽度
   */
  labelWidth?: string | number
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   */
  labelProps?: TextProps
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   */
  valueProps?: TextProps
}

export interface DescriptionField extends DescriptionFieldConfig {
  /**
   * 这一项的 key，不可重复
   */
  key: string
  /**
   * 这一项的 label 文字
   */
  label: string
  /**
   * 这一项占据的列数，详情查看 c-col props 和 c-row props
   */
  span?: ColProps['span']
}

export interface DescriptionsConfig extends DescriptionFieldConfig {
  /**
   * c-row props
   */
  rowProps?: RowProps
  /**
   * 展示项
   */
  fields?: DescriptionField[]
  /**
   * 详情数据
   */
  detail?: any
}

export interface DescriptionsProps extends DescriptionsConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}
