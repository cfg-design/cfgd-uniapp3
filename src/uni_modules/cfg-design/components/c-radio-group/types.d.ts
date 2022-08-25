import type { HTMLAttributes, CSSProperties } from 'vue'
import type { UViewProps } from '../uni.d'
import type { RadioConfig, RadioProps } from '../c-radio/types.d'

export interface RadioGroupConfig {
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: HTMLAttributes & UViewProps
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
   * radio props 一些设置，有效属性 `activeType`, `iconWrapBind`, `viewBind`, `color`, `size`, `readonly`, `iconProps`, `textProps`, `border`, `borderBottom`, `radius`, `round`, `noFeedback`
   * 默认： `undefined`
   */
  radio?: Pick<RadioConfig, 'activeType' | 'iconWrapBind' | 'viewBind' | 'color' | 'size' | 'readonly' | 'iconProps' | 'textProps' | 'border' | 'borderBottom' | 'radius' | 'round' | 'noFeedback'>
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