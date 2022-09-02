<template>
  <view class="page">
    <c-cell
      v-for="(color, name) in colors"
      :key="name"
      icon="checkbox-blank-fill"
      :icon-props="{ color }"
      :label="name"
      :value="color"
      :value-props="{ color }"
      @click="onClick(name)"
    />
  </view>
</template>

<script setup lang="ts">
import { useColors } from '@/uni_modules/cfg-design'
const colors = useColors()

const onClick = (data: string) => {
  uni.setClipboardData({
    data,
    success: () => uni.showToast({ title: '复制颜色名成功', icon: 'none' })
  })
}
</script>

<style lang="scss">
.page {
  padding: 20rpx;
}
</style>
