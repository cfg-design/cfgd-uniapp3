<script setup lang="ts">
import type { SpinProps } from './types.d'
import { computed } from 'vue'
import { mergeProps } from '../../utils/props'
import { useConfigs } from './use'

interface Props {
  /**
   * 配置名。使用 useSpinConfigs() 查看配置数据。使用 setSpinConfigs() 进行配置。
   * 默认： default
   */
  c?: SpinProps['c']
  /**
   * view 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  viewBind?: SpinProps['viewBind']
  /**
   * 旋转图标名称或代码。 default 配置为 `loading`
   * 默认： `undefined`
   */
  icon?: SpinProps['icon']
  /**
   * 详情查看 c-icon props
   * 默认： `undefined`
   */
  iconProps?: SpinProps['iconProps']
  /**
   * 加载文案
   * 默认： `undefined`
   */
  tip?: SpinProps['tip']
  /**
   * 详情查看 c-text props
   * 默认： `undefined`
   */
  tipProps?: SpinProps['tipProps']
  /**
   * 图标和文案的颜色。 default 配置为 `primary`。详情查看 c-text props.color
   * 默认： `undefined`
   */
  color?: SpinProps['color']
  /**
   * 图标大小。 default 配置为 `5xl`。详情查看 c-text props.size
   * 默认： `undefined`
   */
  iconSize?: SpinProps['iconSize']
  /**
   * 文案大小。详情查看 c-text props.size
   * 默认： `undefined`
   */
  tipSize?: SpinProps['tipSize']
  /**
   * 图标和方案排列。
   * 默认： `undefined`
   */
  direction?: SpinProps['direction']
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const configs = useConfigs()

const propsC = computed<Props>(() => mergeProps(configs.value[props.c], props))
</script>

<template>
<view class="c-spin" v-bind="(propsC.viewBind as any)" :style="[{ flexDirection: propsC.direction }]">
  <c-icon v-bind="propsC.iconProps" :name="propsC.icon" :color="propsC.color" :size="propsC.iconSize" />
  <c-text v-if="propsC.tip" v-bind="propsC.tipProps" :color="propsC.color" :size="propsC.tipSize">{{ propsC.tip }}</c-text>
</view>
</template>

<style lang="scss">
.c-spin {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  /* #ifndef APP-NVUE */
  :deep(.c-icon) {
    transform: rotate(0deg);
    animation: rotate 1.5s linear infinite;
  }
  /* #endif */
}

/* #ifndef APP-NVUE */
@keyframes rotate {
  0% {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
}
/* #endif */
</style>
