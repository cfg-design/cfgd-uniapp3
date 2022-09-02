import type { HTMLAttributes } from 'vue'
import type { TextProps } from '../c-text/types.d'
import type { LineProps } from '../c-line/types.d'
import type { SpinProps } from '../c-spin/types.d'

export interface LoadMoreConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 是否加载中。
   * 默认： `undefined`
   */
  loading?: boolean
  /**
   * 是否没更多。
   * 默认： `undefined`
   */
  noMore?: boolean
  /**
   * 默认文案。
   * 默认： `undefined`
   */
  text?: string
  /**
   * 加载中的文案。
   * 默认： `undefined`
   */
  loadingText?: string
  /**
   * 没有更多的文案。
   * 默认： `undefined`
   */
  noMoreText?: string
  /**
   * c-text props。
   * 默认： `undefined`
   */
  textProps?: TextProps
  /**
   * c-line props。
   * 默认： `undefined`
   */
  lineProps?: LineProps
  /**
   * c-spin props。
   * 默认： `undefined`
   */
  spinProps?: SpinProps
}

export interface LoadMoreProps extends LoadMoreConfig {
  /**
   * 配置名。使用 `useLindConfigs()` 查看配置数据。使用 `setLindConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
