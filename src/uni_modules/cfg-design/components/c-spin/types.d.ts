import type { CSSProperties, HTMLAttributes } from 'vue'
import type { IconProps } from '../c-icon/types.d'
import type { TextProps } from '../c-text/types.d'

export interface SpinConfig {
   cClass?: string | Record<string, any> | (string | Record<string, any>)[]
   cStyle?: HTMLAttributes['style']
   /**
    * 图标和文案的颜色，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/colors.html) 。
    * 默认： `undefined`
    */
   color?: string
   /**
    * 图标大小，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/font-sizes.html。
    * 默认： `undefined`
    */
   size?: string | number
   /**
    * 旋转图标名称或代码。
    * 默认： `undefined`
    */
   icon?: string
   /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
    * 默认： `undefined`
    */
   iconProps?: IconProps
   /**
    * 加载文案
    * 默认： `undefined`
    */
   tip?: string
   /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
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
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
   c?: string
}
