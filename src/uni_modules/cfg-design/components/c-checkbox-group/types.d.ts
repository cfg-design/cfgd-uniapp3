import type { CSSProperties, HTMLAttributes } from 'vue'
import type { CheckboxProps } from '../c-checkbox/types.d'

export interface CheckboxGroupConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
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
   * [CheckboxProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/checkbox.html#props) 。
   * 默认： `undefined`
   */
  checkbox?: CheckboxProps
}

export interface CheckboxGroupProps extends CheckboxGroupConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}

export declare type CheckboxGroupGetIndex = () => number
export declare type CheckboxGroupCheck = (value: string | number, check: boolean) => void
