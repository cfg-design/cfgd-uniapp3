<template>
  <view class="page">
    <c-text>文本</c-text>
    <c-text v-for="(size, name) in fontSizes" :key="name" :size="name">字体大小：{{ name }} = {{ fontSizes[name] }}</c-text>
    <c-text :size="80">字体大小： 80</c-text>
    <c-text v-for="(color, name) in colors" :key="name" :color="name">文本颜色color：{{ name }} = {{ colors[name] }}</c-text>
    <c-text color="#7546c9">自定义颜色：#7546c9</c-text>
    <c-text strong>strong</c-text>
    <c-text italic>italic</c-text>
    <c-text underline>underline</c-text>
    <c-text del>delete</c-text>
    <c-text lines="1">一行省略一行省略一行省略一行省略一行省略一行省略一行省略</c-text>
    <c-text lines="2">俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略俩行省略</c-text>
    <c-text c="h1">h1</c-text>
    <c-text c="h2">h2</c-text>
    <c-text c="h3">h3</c-text>
    <c-text c="h4">h4</c-text>
    <c-text c="h5">h5</c-text>
    <c-text c="h6">h6</c-text>
    <c-text c="custom">custom</c-text>
    <MyC color="success">手动引入</MyC>
  </view>
</template>

<script setup lang="ts">
import { useColors, setTextConfigs, useFontSizes, CText as MyC } from '@/uni_modules/cfg-design'

const colors = useColors()
const fontSizes = useFontSizes()

const a = setTextConfigs({
  custom: { size: '2xl', strong: true, textBind: { class: 'text-custom' } }
})
console.log(a)
</script>

<style lang="scss">
.page {
  padding: 40rpx;
}
</style>
