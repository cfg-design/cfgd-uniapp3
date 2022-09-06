<template>
  <view class="page">
    <c-row gutter="20" vertical>
      <c-col v-for="(radius, name) in radiuses" :key="name">
        <c-button color="primary" :text="name + ': ' + radius" :radius="radius" @click="onClick(name)" />
      </c-col>
    </c-row>
  </view>
</template>

<script setup lang="ts">
import { useRadius } from '@/uni_modules/cfg-design'
const radiuses = useRadius()

const onClick = (data: string) => {
  uni.setClipboardData({
    data,
    success: () => uni.showToast({ title: '复制圆角名成功', icon: 'none' })
  })
}
</script>

<style lang="scss">
.page {
  padding: 20rpx;
}
</style>
