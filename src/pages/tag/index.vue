<template>
  <view class="page">
    <view v-for="(_, key) in colors" :key="key" class="flex">
      <c-tag text="标签" :color="key" />
      <c-tag text="标签" :color="key" plain round />
      <c-tag text="标签" :color="key" plain closable />
      <c-tag text="标签" :color="key" icon="user-5-line" radius="0 30 0 30" plain />
      <c-tag text="标签" :color="key" icon="user-5-line" radius="30 0 30 0" />
    </view>
    <view class="flex">
      <c-tag
        v-for="(_, key) in fontSizes"
        :key="key"
        :size="key"
        color="primary"
        closable
        text="标签"
        @click="onClick"
        @close="onClose"
      />
      <c-tag :size="100" text="标签" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { useColors, useFontSizes } from '@/uni_modules/cfg-design'

const colors = useColors()
const fontSizes = useFontSizes()

const onClick = () => uni.showToast({ title: '点击 Tag', icon: 'none' })
const onClose = () => uni.showToast({ title: '点击关闭', icon: 'none' })
</script>

<style lang="scss">
.page {
  padding: 20rpx 10rpx;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.c-tag {
  margin: 10rpx 20rpx;
}
</style>
