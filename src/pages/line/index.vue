<template>
  <view class="page">
    <c-row vertical gutter="40">
      <c-col><c-line /></c-col>
      <c-col v-for="(_, key) in colors" :key="key"><c-line :color="key" /></c-col>
      <c-col><c-line color="primary" length="200rpx" /></c-col>
      <c-col><c-line color="primary" width="20rpx" /></c-col>
      <c-col><c-line color="primary" width="20rpx" round /></c-col>
      <c-col><c-line color="primary" border-style="dashed" /></c-col>
      <c-col><c-line color="primary" border-style="dotted" /></c-col>
      <c-col><c-line color="primary" border-style="double" width="6rpx" /></c-col>
      <c-col>
        <c-row gutter="40">
          <c-col><c-line vertical length="200rpx" color="error" /></c-col>
          <c-col><c-line vertical length="200rpx" color="error" width="20rpx" /></c-col>
          <c-col><c-line vertical length="200rpx" color="error" width="20rpx" round /></c-col>
          <c-col><c-line vertical length="200rpx" color="error" border-style="dashed" /></c-col>
          <c-col><c-line vertical length="200rpx" color="error" border-style="dotted" /></c-col>
          <c-col><c-line vertical length="200rpx" color="error" border-style="double" width="6rpx" /></c-col>
        </c-row>
      </c-col>
    </c-row>
  </view>
</template>

<script setup lang="ts">
import { useColors } from '@/uni_modules/cfg-design'

const colors = useColors()
</script>

<style lang="scss">
.page {
  padding: 0 30rpx;
  background-color: #fff;
}
</style>
