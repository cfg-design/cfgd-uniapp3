<template>
<view class="page">
  <view class="main">
    <c-input-number v-model:value="percent" :step="10" :min="0" :max="100" />
    <c-progress v-for="item in ['2', '', 'm', 'l', '3xl']" :key="'1-' + item" :size="item" :percent="percent" />
    <c-progress v-for="item in ['', 'm', 'l', '3xl']" :key="'2-' + item" :size="item" :percent="percent" round />
    <c-progress :percent="percent" show-text />
    <c-progress :percent="percent" size="5xl" show-text />
    <c-progress v-for="color in ['primary', 'success', 'error', 'warning', '#7546c9']" :key="'c1-' + color" :active-props="{ color }" :percent="percent" show-text round />
    <c-progress :percent="percent" show-text>加载中...</c-progress>
    <c-progress :percent="percent" :text-props="{ textBind: { style: ['width: 100%; text-align:center'] }}" show-text>加载中...</c-progress>
    <c-progress :percent="percent" :text-props="{ textBind: { style: ['text-align:start'] }}" show-text>加载中...</c-progress>
    <c-progress :percent="percent" show-text>
      <c-spin :view-bind="{ style: ['align-items: flex-end; min-width: 20rpx'] }" icon-size="xs" color="#fff" />
    </c-progress>
    <c-progress :percent="percent" :text-props="{ textBind: { style: ['width: 100%'] }}" show-text>
      <c-spin :view-bind="{ style: ['align-items: flex-end'] }" icon-size="xs" color="error" />
    </c-progress>
  </view>
</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const percent = ref(0 )
</script>

<style lang="scss">
.page {
  padding-top: 1;

  .main {
    padding: 20rpx;
    background: #fff;
  }

  :deep(.c-progress) {
    margin-top: 20rpx;
  }
}
</style>
