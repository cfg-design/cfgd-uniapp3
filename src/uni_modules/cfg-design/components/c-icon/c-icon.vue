<script setup lang="ts">
import type { IconProps } from './types.d'
import { path } from 'ramda'
import { computed } from 'vue'
import { omitProps, mergeProps } from '../../utils'
import { useConfigs, useIcons } from './use'

interface Props {
  props?: IconProps,
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
   * 字体名称。
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

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
const familyC = computed(() => propsC.value.family || 'c-icon')
const nameC = computed(() => propsC.value.name && path<string>([familyC.value, propsC.value.name], icons.value) || propsC.value.name || '')
</script>

<template>
  <c-text
    :props="propsC.textProps"
    :c-style="[{ fontFamily: familyC, lineHeight: 1 }]"
    :size="propsC.size"
    :color="propsC.color"
    :text="nameC"
  />
</template>
