import type { HTMLAttributes } from 'vue'
import { InputProps } from '../c-input/types'
import type { ButtonProps } from '../c-button/types.d'

export interface InputNumberConfig {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 输入框的内容。
   * 默认： `undefined`
   */
  value?: number
  /**
   * 最小值。
   * 默认： `undefined`
   */
  min?: number
  /**
   * 最大值。
   * 默认： `undefined`
   */
  max?: number
  /**
   * 每次改变步数。
   * 默认： `undefined`
   */
  step?: number
  /**
   * 颜色，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/colors.html) 。
   * 默认： undefined
   */
  color?: string
  /**
   * 字体的大小。
   * 默认： `undefined`
   */
  size?: string | number
  /**
   * [InputProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/input.html#props) 。
   * 默认： `undefined`
   */
  inputProps?: InputProps
  /**
   * [ButtonProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/button.html#props) 。
   * 默认： `undefined`
   */
  plusButtonProps?: ButtonProps
  /**
   * [ButtonProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/button.html#props) 。
   * 默认： `undefined`
   */
  minusButtonProps?: ButtonProps
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: boolean
  /**
   * 圆角值，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/radiuses.html) 。
   * 默认： `undefined`
   */
  radius?: string | number
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: boolean
}

export interface InputNumberProps extends InputNumberConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: string
}
