<template>
  <view class="page">
    <c-spin tip="loading..." />
    <c-spin tip="loading..." direction="column" />
    <c-spin />
    <c-spin color="primary" />
    <c-spin color="error" />
    <c-spin color="success" />
    <c-spin color="success" tip="loading..." direction="column" />
    <c-spin color="success" tip="loading..." :tip-props="{ color: 'error' }" direction="column" />
    <c-spin color="success" tip="loading..." :icon-props="{ color: 'error' }" direction="column" />
    <c-spin size="l" />
    <c-spin size="50" />
    <c-spin :size="100" />
    <c-spin size="l" tip="loading..." />
    <c-spin size="l" tip="loading..." direction="column" />
    <c-spin size="50" tip="loading..." />
    <c-spin size="50" tip="loading..." direction="column" />
    <c-spin size="50" tip="loading..." :tip-props="{ size: 24 }" />
    <c-spin size="50" tip="loading..." direction="column" :icon-props="{ size: 100 }" />
    <c-spin icon="add-line" />
    <c-spin icon="close-circle-fill" />
    <c-spin icon="subtract-line" />
    <c-spin icon="checkbox-blank-fill" />
    <c-spin icon="image-2-fill" />
    <c-spin icon="user-5-line" />
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.page {
  padding: 30rpx;
}

.c-spin {
  margin-bottom: 20rpx;
}
</style>
