import type { CSSProperties, HTMLAttributes } from 'vue'
import type { RadioProps } from '../c-radio/types.d'

export interface RadioGroupConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: string | number
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: boolean
  /**
   * 排列。
   * 默认： `undefined`
   */
  direction?: CSSProperties['flex-direction']
  /**
   * 表单域 value 对象的属性名。
   * 默认： `undefined`
   */
  path?: string
  /**
   * c-radio RadioProps
   * 默认： `undefined`
   */
  radio?: RadioProps
  /**
   * RadioProps[]
   */
  items?: RadioProps[]
}

export interface RadioGroupProps extends RadioGroupConfig {
  /**
   * 配置名。使用 `useRadioGroupConfigs()` 查看配置数据。使用 `setRadioGroupConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}

export declare type RadioGroupGetIndex = () => number
export declare type RadioGroupUpdateValue = (value?: string | number) => void
