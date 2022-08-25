<template>
  <view class="page">
    <c-line />
    <view class="lines">
      <c-line />
      <c-line v-for="(_, key) in colors" :key="key" :color="key" />
      <c-line color="primary" length="200rpx" />
      <c-line color="primary" width="20rpx" />
      <c-line color="primary" width="20rpx" round />
      <c-line color="primary" border-style="dashed" />
      <c-line color="primary" border-style="dotted" />
      <c-line color="primary" border-style="double" width="6rpx" />
      <view class="flex">
        <c-line vertical length="100rpx" color="error" />
        <c-line vertical length="100rpx" color="error" width="20rpx" />
        <c-line vertical length="100rpx" color="error" width="20rpx" round />
        <c-line vertical length="100rpx" color="error" border-style="dashed" />
        <c-line vertical length="100rpx" color="error" border-style="dotted" />
        <c-line vertical length="100rpx" color="error" border-style="double" width="6rpx" />
      </view>

      <MyC />
    </view>
  </view>
</template>

<script setup lang="ts">
import { useColors, CLine as MyC } from '@/uni_modules/cfg-design'

const colors = useColors()
</script>

<style lang="scss">
.page {
  min-height: 100vw;
}

.lines {
  padding: 1px;
  background-color: #fff;
  .c-line {
    margin: 20px;
  }
  .flex {
    display: flex;
    justify-content: center;
  }
}
</style>
