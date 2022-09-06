<template>
  <view class="page">
    <c-cell
      v-for="(size, name) in fontSizes"
      :key="name"
      :label="name"
      :value="size + ''"
      :value-props="{ size }"
      @click="onClick(name)"
    />
  </view>
</template>

<script setup lang="ts">
import { useFontSizes } from '@/uni_modules/cfg-design'
const fontSizes = useFontSizes()

const onClick = (data: string) => {
  uni.setClipboardData({
    data,
    success: () => uni.showToast({ title: '复制字体大小名成功', icon: 'none' })
  })
}
</script>

<style lang="scss">
.page {
  padding: 20rpx;
}
</style>
