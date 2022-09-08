<template>
  <view class="page">
    <c-row gutter="20">
      <c-col>
        <c-image width="200" height="200" />
      </c-col>
      <c-col>
        <c-image src="./" :width="200" :height="200" />
      </c-col>
    </c-row>
    <c-image :src="scr" width="320" height="240" />
    <c-image :src="scr" width="240" height="240" />
    <c-image :src="scr" width="200" height="200" mode="aspectFit" />
    <c-image :src="scr" width="300" height="100" mode="aspectFit" />
    <c-image :src="scr" width="200" height="200" mode="aspectFill" />
    <c-image :src="scr" width="300" height="100" mode="aspectFill" />

    <c-row gutter="20">
      <c-col>
        <c-image v-for="(_, key) in radius" :key="key" :src="scr" width="200" height="200" mode="aspectFill" :radius="key" />
      </c-col>
      <c-col>
        <c-image :src="scr" width="200" height="200" mode="aspectFill" round />
        <c-image width="200" height="200" radius="0 100 100 100" />
      </c-col>
    </c-row>
  </view>
</template>

<script setup lang="ts">
import { useRadius } from '@/uni_modules/cfg-design'
import image from '@/assets/moon.png'

const radius = useRadius()

const scr = image
</script>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20rpx;
  background-color: #000a;
}

.c-image {
  background-color: #fff;
  margin-bottom: 10rpx;
}
</style>
