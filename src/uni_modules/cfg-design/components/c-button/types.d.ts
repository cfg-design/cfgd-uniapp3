import type { HTMLAttributes } from 'vue'
import type { UButtonProps } from '../uni'
import type { TextProps } from '../c-text/types.d'
import type { IconProps } from '../c-icon/types.d'
import type { SpinProps } from '../c-spin/types.d'

export interface ButtonConfig {
  /**
   * button 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  buttonBind?: HTMLAttributes & UButtonProps
  /**
   * 用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件
   * 默认： `undefined`
   */
  formType?: UButtonProps['formType']
  /**
   * 颜色。 useColors() 可以查看配置数据。使用 setColors() 进行配置。
   * 默认： undefined
   */
  color?: string
  /**
   * 渐变结束颜色。 useColors() 可以查看配置数据。使用 setColors() 进行配置。
   * 默认： undefined
   */
  color2?: string
  /**
   * 字体大小。 default 配置为 m。 useFontSizes() 可以查看配置数据。使用 setFontSizes() 进行配置。
   * 默认： undefined
   */
  size?: string | number
  /**
   * 宽度
   * 默认： `undefined`
   */
  width?: string | number
  /**
   * 高度
   * 默认： `undefined`
   */
  height?: string | number
  /**
   * 文字
   * 默认： `undefined`
   */
  text?: string
  /**
   * 文字的颜色。 default 配置为 `#fff`。详情查看 c-text props.color
   * 默认： `undefined`
   */
  textColor?: string
  /**
   * 详情查看 c-text props
   * 默认： `undefined`
   */
  textProps?: TextProps
  /**
   * 图标。
   * 默认： `undefined`
   */
  icon?: string
  /**
   * 详情查看 c-icon props
   * 默认： `undefined`
   */
  iconProps?: IconProps
  /**
   * 圆角值。 default 配置为 `s`。 `useRadius()` 可以查看配置数据。使用 `setRadius()` 进行配置。
   * 默认： `undefined`
   */
  radius?: string
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: boolean
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: boolean
  /**
   * 是否加载。
   * 默认： `undefined`
   */
  loading?: boolean
  /**
   * 详情查看 c-spin props
   * 默认： `undefined`
   */
  spinProps?: SpinProps
  /**
   * 是否镂空。
   * 默认： `undefined`
   */
  plain?: boolean
}

export interface ButtonProps extends ButtonConfig {
  /**
   * 配置名。使用 `useButtonConfigs()` 查看配置数据。使用 `setButtonConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
