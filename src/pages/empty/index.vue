<template>
<view class="page">
  <c-empty :c-style="[{ minHeight: '100vw' }]" />
  <c-line color="primary" />
  <c-empty c="search" />
  <c-line color="primary" />
  <c-empty :image="image" />
  <c-line color="primary" />
  <c-empty :icon-props="{ color: 'primary' }" :text-props="{ color: 'error' }" />
  <c-line color="primary" />
  <c-empty c="search" :button-props="{ text: '返回首页' }" />
  <c-line color="primary" />
  <c-empty>
    <c-text color="placeholder">slot</c-text>
  </c-empty>
  <c-line color="primary" />
</view>
</template>

<script setup lang="ts">
import image from '@/assets/moon.png'
</script>

<style lang="scss">
.page {
  padding-top: 1px;
}
</style>
