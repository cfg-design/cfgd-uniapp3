<script setup lang="ts">
import type { NoticeBarProps } from './types.d'
import { computed, getCurrentInstance, ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { omitProps, mergeProps, getPropsBoolean, getRect } from '../../utils'
import { useColors } from '../../styles'
import { useConfigs } from './use'

interface Props {
  props?: NoticeBarProps
  cClass?: NoticeBarProps['cClass']
  cStyle?: NoticeBarProps['cStyle']
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: NoticeBarProps['c']
  /**
   * 颜色，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/colors.html) 。
   * 默认： undefined
   */
  color?: NoticeBarProps['color']
  /**
   * 左边的图标。
   * 默认： `undefined`
   */
  leftIcon?: NoticeBarProps['leftIcon']
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  leftIconProps?: NoticeBarProps['leftIconProps']
  /**
   * 右边的图标。
   * 默认： `undefined`
   */
  rightIcon?: NoticeBarProps['rightIcon']
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  rightIconProps?: NoticeBarProps['rightIconProps']
  /**
   * 文字。
   * 默认： `undefined`
   */
  text?: NoticeBarProps['text']
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  textProps?: NoticeBarProps['textProps']
  /**
   * 是否自动播放。
   * 默认： `undefined`
   */
  autoplay?: NoticeBarProps['autoplay']
  /**
   * 滚动速率 (px/s) 。
   * 默认： `undefined`
   */
  speed?: NoticeBarProps['speed']
  /**
   * 是否显示关闭图标 。
   * 默认： `undefined`
   */
  closable?: NoticeBarProps['closable']
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  closeIconProps?: NoticeBarProps['closeIconProps']
}

interface Emits {
  (e: 'click'): void
  (e: 'click:close'): void
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const configs = useConfigs()
const colors = useColors()

const textWidth = ref(0)
const visible = ref(true)

const animationDuration = computed(() => {
  if (!textWidth.value) return '10s'
  const speed = propsC.value.speed || 60
  return textWidth.value / Number(speed) + 's'
})

const colorC = computed<string>(() => {
  const { color } = propsC.value
  return color ? colors.value[color] || color : colors.value.primary
})

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
const leftIconC = computed(() => propsC.value.leftIcon || propsC.value.leftIconProps?.name)
const rightIconC = computed(() => propsC.value.rightIcon || propsC.value.rightIconProps?.name)
const autoplayC = computed(() => getPropsBoolean(propsC.value.autoplay))
const closableC = computed(() => getPropsBoolean(propsC.value.closable))

const styleC = computed(() => mergeProps({ x: [{ '--color': colorC.value, padding: '16rpx 30rpx' }] }, { x: propsC.value.cStyle }).x)
const classC = computed(() => mergeProps({ x: ['c-notice-bar'] }, { x: propsC.value.cClass }).x)

const leftIconPropsC = computed(() => mergeProps({
  color: colorC.value,
  size: 'xl',
  textProps: { cStyle: [{ marginRight: '10rpx' }] }
}, propsC.value.leftIconProps))

const rightIconPropsC = computed(() => mergeProps({
  color: colorC.value,
  size: 'xl',
  textProps: { cStyle: [{ marginLeft: '10rpx' }] }
}, propsC.value.rightIconProps))

const textPropsC = computed(() => mergeProps({
  text: propsC.value.text,
  color: colorC.value,
  cStyle: [{ whiteSpace: 'nowrap' }]
}, propsC.value.textProps))

const close = () => {
  visible.value = false
  emits('click:close')
}

const that = getCurrentInstance()!

const handleInit = () => {
  clearTimeout(handleInit.timer)

  if (!autoplayC.value) return undefined

  handleInit.num ++

  if (handleInit.num > 10) return undefined

  getRect(that, '.c-notice-bar__palay').then(({ width }) => {
    textWidth.value = width || 0

    if (!width) {
      handleInit.timer = setTimeout(handleInit, 100)
    }
  })
}
handleInit.timer = 0
handleInit.num = 0

watch(() => autoplayC.value, (val) => val && nextTick(handleInit))
onMounted(handleInit)
onBeforeUnmount(() => clearTimeout(handleInit.timer))
</script>

<template>
<view v-if="visible" :class="classC" :style="(styleC as any)" @click="emits('click')">
  <view class="c-notice-bar__bg"></view>
  <c-row align="center" :c-style="{ position: 'relative', zIndex: 1, width: '1px' }" no-wrap>
    <c-icon v-if="leftIconC" :props="leftIconPropsC" :name="leftIconC" />
    <view class="c-notice-bar__text-wrap">
      <view :class="{ 'c-notice-bar__palay': autoplayC }" :style="{ animationDuration }">
        <c-text :props="textPropsC" />
      </view>
    </view>
    <c-icon v-if="rightIconC" :props="rightIconPropsC" :name="rightIconC" />
    <view v-if="closableC" @click.stop="close">
      <c-icon :props="{ name: 'close-line', color: colorC, size: '2xl', ...propsC.closeIconProps }" />
    </view>
  </c-row>
</view>
</template>

<style scoped lang="scss">
.c-notice-bar {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  box-sizing: border-box;
  position: relative;

  &__bg {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color);
    opacity: 0.12;
  }

  &__text-wrap {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */

    flex-grow: 1;
    overflow: hidden;
  }

  &__palay {
    padding-left: 100%;

    /* #ifndef APP-NVUE */
    animation: loop 10s linear infinite;
    /* #endif */
  }
}


/* #ifndef APP-NVUE */
@keyframes loop {
  0% {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-100%, 0);
  }
}
/* #endif */
</style>
