<template>
<view class="page">
  <view class="main">
    <c-bottom-bar no-fixed>
      <c-line color="error" width="10" />
      <c-text>这是 no-fixed 的 bottom-bar</c-text>
      <c-line color="error" width="10" />
    </c-bottom-bar>

    <c-line width="50" color="primary" />

    <c-text>no-space 上</c-text>
    <c-bottom-bar bottom="calc(100vh - 204rpx)" no-space>
      <c-line color="error" width="10" />
      <c-text>no-space</c-text>
      <c-line color="error" width="10" />
    </c-bottom-bar>
    <c-text>no-space 下</c-text>

    <c-line width="50" color="success" />
  </view>
  <c-row justify="center">
    <c-text>最底部内容</c-text>
  </c-row>
  <c-bottom-bar safe-area-inset-bottom>
    <view style="padding: 10rpx 30rpx">
      <c-row align="center" justify="space-between">
        <c-col span="auto">
          <c-row align="center" gutter="20">
            <c-col><c-avatar-text color="primary" text="🛒" round /></c-col>
            <c-col><c-text color="error">￥88.88</c-text></c-col>
          </c-row>
        </c-col>
        <c-col span="4">
          <c-button color="error" color2="warning" text="下单" round />
        </c-col>
      </c-row>
    </view>
    <c-line />
    <c-tab-bar :value="0" :items="items" />
  </c-bottom-bar>
</view>
</template>

<script setup lang="ts">
import type { TabBarItemProps } from '@/uni_modules/cfg-design'

const items: TabBarItemProps[] = [
  {
    icon: 'home-smile-2-line',
    text: '首页'
  },
  {
    icon: 'add-line',
    text: '这个是加号'
  },
  {
    icon: 'user-5-line',
    text: '我的'
  }
]
</script>

<style lang="scss">
.main {
  min-height: 150vh;
}
</style>
