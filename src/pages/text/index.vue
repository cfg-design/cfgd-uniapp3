<template>
  <view class="page">
    <view><c-text>文本</c-text></view>
    <view v-for="(size, name) in fontSizes" :key="name"><c-text :size="name">字体大小：{{ name }} = {{ fontSizes[name] }}</c-text></view>
    <view><c-text :size="80">字体大小： 80</c-text></view>
    <view v-for="(color, name) in colors" :key="name"><c-text :color="name">文本颜色color：{{ name }} = {{ colors[name] }}</c-text></view>
    <view><c-text color="#7546c9">自定义颜色：#7546c9</c-text></view>
    <view><c-text strong>strong</c-text></view>
    <view><c-text italic>italic</c-text></view>
    <view><c-text underline>underline</c-text></view>
    <view><c-text del>delete</c-text></view>
    <view><c-text lines="1">一行省略一行省略一行省略一行省略一行省略一行省略一行省略</c-text></view>
    <view><c-text lines="2">俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略</c-text></view>
    <view><c-text c="h1">h1</c-text></view>
    <view><c-text c="h2">h2</c-text></view>
    <view><c-text c="h3">h3</c-text></view>
    <view><c-text c="h4">h4</c-text></view>
    <view><c-text c="h5">h5</c-text></view>
    <view><c-text c="h6">h6</c-text></view>
    <view><c-text c="custom">custom</c-text></view>
  </view>
</template>

<script setup lang="ts">
import { useColors, setTextConfigs, useFontSizes } from '@/uni_modules/cfg-design'

const colors = useColors()
const fontSizes = useFontSizes()

setTextConfigs({
  custom: { size: '2xl', strong: true, cClass: 'text-custom' }
})
</script>

<style lang="scss">
.page {
  padding: 40rpx;
}
</style>
