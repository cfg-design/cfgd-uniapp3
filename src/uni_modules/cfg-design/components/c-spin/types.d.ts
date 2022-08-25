import type { HTMLAttributes, CSSProperties } from 'vue'
import type { UViewProps } from '../uni.d'
import type { IconProps } from '../c-icon/types.d'
import type { TextProps } from '../c-text/types.d'

export interface SpinConfig {
   /**
    * view 组件的 Attributes 和 Props 。
    * 默认： `undefined`
    */
   viewBind?: HTMLAttributes & UViewProps
   /**
    * 图标和文案的颜色。 default 配置为 `primary`。详情查看 c-text props.color
    * 默认： `undefined`
    */
   color?: string
   /**
    * 旋转图标名称或代码。 default 配置为 `loading`
    * 默认： `undefined`
    */
   icon?: string
   /**
    * 图标大小。 default 配置为 `5xl`。详情查看 c-text props.size
    * 默认： `undefined`
    */
   iconSize?: string | number
   /**
    * 详情查看 c-icon props
    * 默认： `undefined`
    */
   iconProps?: IconProps
   /**
    * 加载文案
    * 默认： `undefined`
    */
   tip?: string
   /**
    * 文案大小。详情查看 c-text props.size
    * 默认： `undefined`
    */
   tipSize?: string | number
   /**
    * 详情查看 c-text props
    * 默认： `undefined`
    */
   tipProps?: TextProps
   /**
    * 图标和方案排列。
    * 默认： `undefined`
    */
   direction?: CSSProperties['flex-direction']
}

export interface SpinProps extends SpinConfig {
  /**
   * 配置名。使用 `useSpinConfigs()` 查看配置数据。使用 `setSpinConfigs()` 进行配置。
   * 默认： `default`
   */
   c?: string
}
