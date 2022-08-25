<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { IconProps } from './types.d'
import { computed } from 'vue'
import { mergeProps } from '../../utils'
import { useConfigs, useIcons } from './use'

interface Props {
  /**
   * 配置名。使用 `useIconConfigs()` 查看配置数据。使用 `setIconConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: IconProps['c']
  /**
   * 详情请查看 c-text props 。
   * 默认： `undefined`
   */
  textProps?: IconProps['textProps']
  /**
   * 字体名称。 default 配置为 c-icon 。
   * 默认： `undefined`
   */
  family?: IconProps['family']
  /**
   * 字体图标名称。 使用 `useIcons()` 查看配置数据。使用 `setIcons(icons)` 进行配置。 也可使用字体代码，如 `&#xe616;` 。
   * 默认： `undefined`
   */
  name?: IconProps['name']
  /**
   * 字体大小。 详情请查看 c-text props.size 。
   * 默认： `undefined`
   */
  size?: IconProps['size']
  /**
   * 字体颜色。 详情请查看 c-text props.color 。
   * 默认： `undefined`
   */
  color?: IconProps['color']
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const configs = useConfigs()
const icons = useIcons()

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))

const iconText = computed(() => propsC.value.name && icons.value[propsC.value.name] || propsC.value.name || '' )
const fontFamily = computed(() => propsC.value.family || configs.value.default.family)
const style = computed<CSSProperties>(() => ({
  fontFamily: fontFamily.value
}))
const textPropsC = computed<IconProps['textProps']>(() => mergeProps(propsC.value.textProps, {
  textBind: {
    style: style.value
  },
  size: propsC.value.size,
  color: propsC.value.color,
}))
</script>

<template>
  <c-text v-bind="textPropsC">{{ iconText }}</c-text>
</template>

<style lang="scss">
.c-icon {
  line-height: 1;
}
</style>
