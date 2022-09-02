import type { HTMLAttributes } from 'vue'
import type { LineProps } from '../c-line/types.d'
import type { TextProps } from '../c-text/types.d'

export interface ProgressConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 百分比0~100。
   * 默认： `undefined`
   */
  percent?: string | number
  /**
   * 大小。
   * 默认： `undefined`
   */
  size?: string | number
  /**
   * 进度。详情 c-line props 。
   * 默认： `undefined`
   */
  activeProps?: LineProps
  /**
   * 背景。详情 c-line props 。
   * 默认： `undefined`
   */
  bgProps?: LineProps
  /**
   * c-text props 。
   * 默认： `undefined`
   */
  textProps?: TextProps
  /**
   * 是否显示百分比的值。
   * 默认： `undefined`
   */
  showText?: boolean
  /**
   * 是否显示为圆角。
   * 默认： `undefined`
   */
  round?: boolean
}

export interface ProgressProps extends ProgressConfig {
  /**
   * 配置名。使用 `useProgressConfigs()` 查看配置数据。使用 `setProgressConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
