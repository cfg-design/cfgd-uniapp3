<template>
<view class="page">
  <c-top-bar z-index="999" status-bar>
    <c-nav-bar title="TopBar 顶部栏" left-icon="arrow-left-s-line" @click:left="goBack" />
    <c-tabs :value="0" :items="[{ text: '类型1' }, { text: '类型2' }, { text: '类型3' }, { text: 'c-top-bar + c-tabs' }]" />
    <c-line />
  </c-top-bar>
  <view class="title-wrap">
    <c-text c="h3">no-fixed</c-text>
  </view>
  <c-top-bar no-fixed><c-nav-bar title="TopBar 顶部栏" /></c-top-bar>
  <view class="title-wrap">
    <c-text c="h3">no-space</c-text>
  </view>
  <c-top-bar z-index="999" top="500" :line-props="{ color: 'primary' }" no-space>
    <c-nav-bar title="no-space" />
    <c-line color="error" />
  </c-top-bar>
  <view class="title-wrap">
    <c-text c="h3">no-border-bottom</c-text>
  </view>
  <c-top-bar :line-props="{ color: 'primary' }" no-fixed no-border-bottom>
    <c-tabs :value="0" :items="[{ text: '类型1' }, { text: '类型2' }, { text: '类型3' }, { text: 'c-top-bar + c-tabs' }]" />
  </c-top-bar>
</view>
</template>

<script setup lang="ts">
const goBack = () => uni.navigateBack()
</script>

<style lang="scss">
.page {
  min-height: 150vh;
}

.title-wrap {
  padding: 60rpx 0 10rpx 30rpx;
}
</style>
