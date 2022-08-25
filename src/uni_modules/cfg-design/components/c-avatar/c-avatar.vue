<script setup lang="ts">
import type { AvatarProps } from './types.d'
import { computed } from 'vue'
import { mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  /**
   * 配置名。使用 `useAvatarConfigs()` 查看配置数据。使用 `setAvatarConfigs()` 进行配置。
   * 默认： default
   */
  c?: AvatarProps['c']
  /**
   * 详情请查看 c-image props 。
   * default 配置为： {
   *   viewBind: { class: ['c-avatar'], style: [{ backgroundColor: '#fff' }] },
   *   iconProps: { name: 'user-5-line' }
   * } 。
   * 默认： `default`
   */
  ImageProps?: AvatarProps['ImageProps']
  /**
   * 头像图片链接地址。
   * 默认： undefined
   */
  src?: AvatarProps['src']
  /**
   * 头像大小。default 配置为 100rpx 。
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

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
</script>

<template>
<c-image
  v-bind="propsC.ImageProps"
  :src="propsC.src"
  :width="propsC.size"
  :height="propsC.size"
  :radius="propsC.radius"
  :round="propsC.round"
  @error="(e) => $emit('error', e)"
  @load="(e) => $emit('load', e)"
/>
</template>
