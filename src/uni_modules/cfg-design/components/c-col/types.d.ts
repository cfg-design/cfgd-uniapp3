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
   * 配置名。使用 `useColConfigs()` 查看配置数据。使用 `setColConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
