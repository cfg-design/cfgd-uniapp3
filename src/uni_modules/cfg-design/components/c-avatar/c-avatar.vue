<script setup lang="ts">
import type { AvatarProps } from './types.d'
import { computed } from 'vue'
import { mergeProps, omitProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  props?: AvatarProps
  /**
   * 配置名。使用 `useAvatarConfigs()` 查看配置数据。使用 `setAvatarConfigs()` 进行配置。
   * 默认： default
   */
  c?: AvatarProps['c']
  /**
   * 详情请查看 c-image props 。
   * 默认： `default`
   */
  imageProps?: AvatarProps['imageProps']
  /**
   * 头像图片链接地址。
   * 默认： undefined
   */
  src?: AvatarProps['src']
  /**
   * 头像大小。
   * 默认： undefined
   */
  size?: AvatarProps['size']
  /**
   * 圆角值。详情请查看 c-image props.radius 。
   * 默认： `undefined`
   */
  radius?: AvatarProps['radius']
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: AvatarProps['round']
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const configs = useConfigs()

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
const sizeC = computed(() => propsC.value.size || 100)
const imagePropsC = computed(() => mergeProps({
  cClass: ['c-avatar'],
  cStyle: [{ backgroundColor: '#fff' }],
  iconProps: { name: 'user-5-line', color: 'placeholder' }
}, propsC.value.imageProps))
</script>

<template>
<c-image
  :props="imagePropsC"
  :src="propsC.src"
  :width="sizeC"
  :height="sizeC"
  :radius="propsC.radius"
  :round="propsC.round"
  @error="(e) => $emit('error', e)"
  @load="(e) => $emit('load', e)"
/>
</template>
