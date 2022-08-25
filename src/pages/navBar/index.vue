<template>
<view class="page">
  <c-nav-bar title="标题" />
  <c-nav-bar title="标题" left-icon="arrow-left-s-line" @click:left="goBack" />
  <c-nav-bar title="标题" left-text="返回" @click:left="goBack" />
  <c-nav-bar title="标题" left-icon="arrow-left-s-line" left-text="返回" @click:left="goBack" />
  <c-nav-bar title="标题" left-icon="arrow-left-s-line" left-text="返回" @click:left="goBack">
    <template #right>
      <c-icon name="add-line" size="20px" />
      <c-text>新增</c-text>
    </template>
  </c-nav-bar>
  <c-nav-bar
    title="标题"
    left-icon="arrow-left-s-line"
    left-text="返回"
    :title-props="{ color: 'primary', size: '20px', strong: true }"
    :left-icon-props="{ color: 'error' }"
    :left-text-props="{ color: 'success' }"
    @click:left="goBack"
  />
  <c-nav-bar c="dark" title="c=dark" left-icon="arrow-left-s-line" left-text="返回" @click:left="goBack" />

  <c-nav-bar @click:left="onClickLeft" @click:right="onClickRight">
    <template #left>
      <c-text>广州</c-text>
      <c-icon name="arrow-down-s-line" size="18px" />
    </template>
    <c-input size="s" icon="search-line" border round />
    <template #right>
      <c-text>搜索</c-text>
    </template>
  </c-nav-bar>
</view>
</template>

<script setup lang="ts">
const goBack = () => uni.navigateBack()
const onClickLeft = () => uni.showToast({ title: 'click:left', icon: 'none' })
const onClickRight = () => uni.showToast({ title: 'click:right', icon: 'none' })
</script>

<style lang="scss">
.page {
  padding-top: 20rpx;

  .c-nav-bar {
    margin-bottom: 20rpx;
  }
}
</style>
