import type { HTMLAttributes } from 'vue'
import type { TextProps } from '../c-text/types'
import type { BadgeProps } from './../c-badge/types.d'
import type { LineProps } from './../c-line/types.d'

export interface TabItemConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: string | number
  /**
   * 颜色，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/colors.html) 。
   * 默认： `undefined`
   */
  color?: string
  /**
   * 激活类型：undefined | line: 下划线，bg: 背景。
   * 默认： `undefined`
   */
  activeType?: string
  /**
   * 文字。
   * 默认： `undefined`
   */
  text?: string
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  textProps?: TextProps
  /**
   * 右上角的角标提示信息。
   * 默认： `undefined`
   */
  badge?: BadgeProps['text']
  /**
   * [BadgeProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/badge.html#props) 。
   * 默认： `undefined`
   */
  badgeProps?: BadgeProps
  /**
   * 提示是否显示圆点 。
   * 默认： `undefined`
   */
  dot?: boolean
  /**
   * [LineProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/line.html#props) 。
   * 默认： `undefined`
   */
  lineProps?: LineProps
}

export interface TabItemProps extends TabItemConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}
