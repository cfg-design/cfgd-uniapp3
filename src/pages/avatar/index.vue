<template>
  <view class="page">
    <view style="display: flex">
      <view>
        <c-avatar />
        <c-avatar size="160rpx" />
        <c-avatar :size="160" icon="home-smile-2-line" />
        <c-avatar src="./" size="160" />
        <c-avatar-text text="A" />
        <MyC />
      </view>
      <view>
        <c-avatar :src="scr" size="160" round />
        <c-avatar v-for="(_, key) in radius" :key="key" :src="scr" size="160" :radius="key" />
        <c-avatar :src="scr" size="160" radius="0 80 80" />
        <c-avatar size="160" radius="s l" />
      </view>
      <view>
        <c-avatar-text v-for="_, key in colors" :key="key" :color="key" text-color="#fff">A</c-avatar-text>
      </view>
      <view>
        <c-avatar-text v-for="_, key in colors" :key="key" :color="key" text-color="#fff" round>A</c-avatar-text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useRadius, useColors, CAvatar as MyC } from '@/uni_modules/cfg-design'

const radius = useRadius()
const colors = useColors()

const scr = 'http://pic.kaiweixin.cn/upload/micropay/goods/picture/201606/02-161857-574febf17eae3.jpg?imageView2/1/w/160/h/160/format/webp/q/100'
</script>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1px 0 50rpx;
  background-color: #000a;
}

.c-avatar {
  margin: 10rpx;
}

.c-avatar-text {
  margin: 10rpx;
}
</style>
