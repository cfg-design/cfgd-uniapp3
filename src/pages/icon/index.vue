<template>
  <view class="page">
    <!-- <c-text>图标来源：</c-text>
    <c-text>https://www.iconfont.cn/collections/detail?cid=25353</c-text>
    <view style="padding: 10rpx;"></view>
    <c-text>图标需要手动引入。当前图标：</c-text>
    <c-text>@/uni_modules/cfg-design/components/c-icon/icons</c-text>
    <view style="padding: 10rpx;"></view> -->
    <c-cell v-for="(value, name) in icons['c-icon']" :key="name" :icon="name" :label="name" :value="'\\ue' + escapeValue(value)" @click="onClick(name)" />
    <c-row cols="2" gutter="50 10" wrap :c-style="{ paddingTop: '100rpx' }">
      <c-col v-for="(_, color) in colors" :key="color" span="1" :c-style="{ alignItems: 'center' }">
        <c-icon :color="color" name="home-smile-2-line" size="8xl" />
        <c-text>{{ color }}</c-text>
      </c-col>
    </c-row>
  </view>
</template>

<script setup lang="ts">
import { useIcons, useColors } from '@/uni_modules/cfg-design'
const icons = useIcons()
const colors = useColors()

const escapeValue = (val: string) => {
  return escape(val).replace('%uE', '').toLowerCase()
}

const onClick = (data: string) => {
  uni.setClipboardData({
    data,
    success: () => uni.showToast({ title: '复制 icon 名成功', icon: 'none' })
  })
}
</script>

<style lang="scss">
.page {
  padding: 20rpx;
}
</style>
