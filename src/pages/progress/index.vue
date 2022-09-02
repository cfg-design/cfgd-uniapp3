<template>
<view class="page">
  <view class="main">
    <c-row vertical gutter="20">
      <c-col><c-input-number v-model:value="percent" :step="10" :min="0" :max="100" :input-props="{ cStyle: { width: 'auto' } }" /></c-col>
      <c-col v-for="item in ['2', '', 'm', 'l', '3xl']" :key="'1-' + item"><c-progress :size="item" :percent="percent" /></c-col>
      <c-col v-for="item in ['', 'm', 'l', '3xl']" :key="'2-' + item"><c-progress :size="item" :percent="percent" round /></c-col>
      <c-col><c-progress :percent="percent" show-text /></c-col>
      <c-col><c-progress :percent="percent" size="5xl" show-text /></c-col>
      <c-col v-for="color in ['primary', 'success', 'error', 'warning', '#7546c9']" :key="'c1-' + color"><c-progress :active-props="{ color }" :percent="percent" show-text round /></c-col>
      <c-col><c-progress :percent="percent" show-text>加载中...</c-progress></c-col>
      <c-col><c-progress :percent="percent" :text-props="{ cStyle: 'width: 100%; text-align:center' }" show-text>加载中...</c-progress></c-col>
      <c-col><c-progress :percent="percent" :text-props="{ cStyle: 'text-align:start' }" show-text>加载中...</c-progress></c-col>
      <c-col>
        <c-progress :percent="percent" :text-props="{ cStyle: 'min-width: 40rpx; align-items:flex-end' }" show-text>
          <c-spin icon-size="xs" color="#fff" />
        </c-progress>
      </c-col>
      <c-col>
        <c-progress :percent="percent" :text-props="{ cStyle: 'width: 100%; align-items:flex-end' }" show-text>
          <c-spin icon-size="xs" color="error" />
        </c-progress>
      </c-col>
    </c-row>
  </view>
</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const percent = ref(50)
</script>

<style lang="scss">
.page {
  padding-top: 1;

  .main {
    padding: 20rpx;
    background: #fff;
  }
}
</style>
