<template>
  <view class="page">
    <c-spin tip="loading..." />
    <c-spin tip="loading..." direction="row" />
    <c-spin />
    <c-spin color="error" />
    <c-spin color="success" />
    <c-spin icon-size="l" />
    <c-spin icon-size="50" />
    <c-spin :icon-size="100" />
    <c-spin icon="add-line" />
    <c-spin icon="close-circle-fill" />
    <c-spin icon="subtract-line" />
    <c-spin icon="checkbox-blank-fill" />
    <c-spin icon="image-2-fill" />
    <c-spin icon="user-5-line" />
    <MyC />
  </view>
</template>

<script setup lang="ts">
import { CSpin as MyC } from '@/uni_modules/cfg-design'
</script>

<style lang="scss">
.page {
  padding-top: 1px;
}

.c-spin {
  margin-bottom: 20rpx;
}
</style>
