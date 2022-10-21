import type { HTMLAttributes } from 'vue'

export interface ColConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 栅格占据的列数。
   * 默认： `undefined`
   */
  span?: string | number
}

export interface ColProps extends ColConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}
