import type { CSSProperties, HTMLAttributes } from 'vue'
import type { IconProps } from '../c-icon/types.d'
import type { TextProps } from '../c-text/types.d'

export interface SpinConfig {
   cClass?: string | Record<string, any> | (string | Record<string, any>)[]
   cStyle?: HTMLAttributes['style']
   /**
    * 图标和文案的颜色。`useColors()` 可以查看配置数据。使用 `setColors()` 进行配置。
    * 默认： `undefined`
    */
   color?: string
   /**
    * 图标大小。`useFontSizes()` 可以查看配置数据。使用 setFontSizes() 进行配置。
    * 默认： `undefined`
    */
   size?: string | number
   /**
    * 旋转图标名称或代码。
    * 默认： `undefined`
    */
   icon?: string
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
    * 详情查看 c-text props
    * 默认： `undefined`
    */
   tipProps?: TextProps
   /**
    * 图标和文案排列。
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
