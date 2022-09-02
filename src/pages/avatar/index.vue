<template>
  <view class="page">
    <c-row gutter="10">
      <c-col>
        <c-row gutter="10" vertical>
          <c-col><c-avatar /></c-col>
          <c-col><c-avatar size="160rpx" round /></c-col>
          <c-col><c-avatar :size="160" :image-props="{ iconProps: { name: 'user-5-fill' } }" /></c-col>
          <c-col><c-avatar src="./" size="160" /></c-col>
          <c-col><c-avatar-text text="A" /></c-col>
          <c-col><c-avatar-text text="A" size="160" round text-color="primary" /></c-col>
        </c-row>
      </c-col>
      <c-col>
        <c-row gutter="10" vertical>
          <c-col><c-avatar :src="scr" size="160" round /></c-col>
          <c-col v-for="(_, key) in radius" :key="key"><c-avatar :src="scr" size="160" :radius="key" /></c-col>
          <c-col><c-avatar :src="scr" size="160" radius="0 80 80" /></c-col>
          <c-col><c-avatar size="160" radius="s l" /></c-col>
        </c-row>
      </c-col>
      <c-col>
        <c-row gutter="10" vertical>
          <c-col v-for="_, key in colors" :key="key"><c-avatar-text :color="key" text-color="#fff">A</c-avatar-text></c-col>
        </c-row>
      </c-col>
      <c-col>
        <c-row gutter="10" vertical>
          <c-col v-for="_, key in colors" :key="key"><c-avatar-text :color="key" text-color="#fff" round>A</c-avatar-text></c-col>
        </c-row>
      </c-col>
    </c-row>
  </view>
</template>

<script setup lang="ts">
import { useRadius, useColors } from '@/uni_modules/cfg-design'

const radius = useRadius()
const colors = useColors()

const scr = 'http://pic.kaiweixin.cn/upload/micropay/goods/picture/201606/02-161857-574febf17eae3.jpg?imageView2/1/w/160/h/160/format/webp/q/100'
</script>

<style lang="scss">
.page {
  padding: 50rpx;
  background-color: #000a;
}
</style>
