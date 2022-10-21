import type { CSSProperties, HTMLAttributes } from 'vue'

export interface RowConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 显示的栅格数量。
   * 默认： `undefined`
   */
  cols?: number | string
  /**
   * 栅格间隔。
   * 默认： `undefined`
   */
  gutter?: string | number | (string | number)[]
  /**
   * 垂直排列方式。
   * 默认： `undefined`
   */
  align?: CSSProperties['align-items']
  /**
   * 水平排列方式。
   * 默认： `undefined`
   */
  justify?: CSSProperties['justify-content']
  /**
   * 是否垂直布局。
   * 默认： `undefined`
   */
  vertical?: boolean
  /**
   * 是否不换行。
   * 默认： `undefined`
   */
  noWrap?: boolean
}

export interface RowProps extends RowConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}
