import type { HTMLAttributes, CSSProperties } from 'vue'
import type { UViewProps } from '../uni.d'
import type { CheckboxConfig } from '../c-checkbox/types.d'

export interface CheckboxGroupConfig {
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: HTMLAttributes & UViewProps
  /**
   * 选中的值。
   * 默认： `undefined`
   */
  value?: Array<string | number>
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
   * checkbox props 一些设置，有效属性 `activeType`, `iconWrapBind`, `viewBind`, `color`, `size`, `readonly`, `iconProps`, `textProps`, `border`, `borderBottom`, `radius`, `round`, `noFeedback`
   * 默认： `undefined`
   */
  checkbox?: Pick<CheckboxConfig, 'activeType' | 'iconWrapBind' | 'viewBind' | 'color' | 'size' | 'readonly' | 'iconProps' | 'textProps' | 'border' | 'borderBottom' | 'radius' | 'round' | 'noFeedback'>
}

export interface CheckboxGroupProps extends CheckboxGroupConfig {
  /**
   * 配置名。使用 `useCheckboxGroupConfigs()` 查看配置数据。使用 `setCheckboxGroupConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}

export declare type CheckboxGroupGetIndex = () => number
export declare type CheckboxGroupCheck = (value: string | number, check: boolean) => void
