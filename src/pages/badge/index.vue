<template>
  <view class="page">
    <view class="flex">
      <template v-for="(_, key) in colors" :key="key">
        <c-badge text="徽标" :color="key" />
        <c-badge text="徽标" :color="key" round />
      </template>
      <c-badge radius="xs m">99+</c-badge>
      <c-badge radius="0 s s">99+</c-badge>
      <c-badge radius="0 20 20">99+</c-badge>
      <MyC text="8" round />
      <c-badge color="error" size="xs">最小微标</c-badge>
    </view>
    <view class="flex">
      <c-badge color="error" size="8xl" round>这不是微标</c-badge>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useColors, CBadge as MyC } from '@/uni_modules/cfg-design'

const colors = useColors()
</script>

<style lang="scss">
.page {
  padding: 20rpx;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.c-badge {
  margin: 10rpx;
}
</style>
