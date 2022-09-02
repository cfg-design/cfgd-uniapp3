import type { TextProps } from '../c-text/types.d'

export interface IconConfig {
  /**
   * 详情请查看 c-text props 。
   * 默认： `undefined`
   */
  textProps?: TextProps
  /**
   * 字体名称。
   * 默认： `undefined`
   */
  family?: string
  /**
   * 字体图标名称。 使用 `useIcons()` 查看配置数据。使用 `setIcons(icons)` 进行配置。 也可使用字体代码，如 `&#xe616;` 。
   * 默认： `undefined`
   */
  name?: string
  /**
   * 字体大小。 详情请查看 c-text props.size 。
   * 默认： `undefined`
   */
  size?: string | number
  /**
   * 字体颜色。 详情请查看 c-text props.color 。
   * 默认： `undefined`
   */
  color?: string
}

export interface IconProps extends IconConfig {
  /**
   * 配置名。使用 `useIconConfigs()` 查看配置数据。使用 `setIconConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}
