<template>
<view class="page">
  <c-load-more @load-more="loadMore" />
  <c-load-more loading @load-more="loadMore" />
  <c-load-more no-more @load-more="loadMore" />
  <c-load-more text="点击或上拉加载更多" @load-more="loadMore" />
  <c-load-more loading-text="正在努力中" loading />
  <c-load-more no-more-text="全部加载完毕" no-more />
  <c-load-more :text-props="{ color: 'error', size: 'xl' }" :line-props="{ color: 'primary' }" />
  <c-load-more :spin-props="{ color: 'warning' }" loading />
</view>
</template>

<script setup lang="ts">
const loadMore = () => {
  uni.showToast({ title: 'click load-more' })
}
</script>
