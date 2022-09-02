<template>
  <view class="page" :style="{ backgroundColor: bgColor }">
    <c-button text="切换背景颜色" color="error" color2="warning" round @click="bgColor = bgColor ? '' : '#333'" />
    <c-row cols="5">
      <c-col span="1">
        <template v-for="(_, key) in colors" :key="key">
          <c-button text="按钮" :color="key" />
        </template>
      </c-col>
      <c-col span="1">
        <template v-for="(_, key) in colors" :key="key">
          <c-button text="按钮" :color="key" radius="m" />
        </template>
      </c-col>
      <c-col span="1">
        <template v-for="(_, key) in colors" :key="key">
          <c-button text="按钮" :color="key" round />
        </template>
      </c-col>
      <c-col span="1">
        <template v-for="(_, key) in colors" :key="key">
          <c-button text="按钮" :color="key" plain />
        </template>
      </c-col>
      <c-col span="1">
        <template v-for="(_, key) in colors" :key="key">
          <c-button text="按钮" :color="key" color2="#9c00fd" />
        </template>
      </c-col>
    </c-row>
    <view class="flex">
      <c-button text="禁用" disabled />
      <c-button v-for="(_, key) in colors" :key="key" :color="key" text="禁用" disabled />
    </view>
    <view class="flex">
      <c-button text="按钮" color="primary" radius="s l" />
      <c-button text="按钮" color="primary" radius="s l l" />
      <c-button text="按钮" color="primary" radius="s s l" plain />
      <c-button text="按钮" color="error" radius="s s l l" />
      <c-button text="按钮" color="primary" radius="s l l s"  color2="#9c00fd" />
    </view>
    <view class="flex">
      <c-button v-for="key in ['xs', 's', 'm', 'l', 40]" :key="key" text="按钮" :size="key" color="primary" />
    </view>
    <view class="flex">
      <c-button v-for="key in ['xs', 'm', 'l']" :key="key" text="按钮" :size="key" loading :spin-props="{ tip: '提交中...' }" />
    </view>
    <view class="flex">
      <c-button v-for="key in ['xs', 'm', 'xl']" :key="key" text="按钮" :size="key" color="primary" loading width="200" />
    </view>
    <c-button v-for="key in ['xs', 'm', '8xl']" :key="key" text="按钮" :size="key" color="primary" loading :spin-props="{ tip: '提交中...' }" />
    <view class="flex">
      <c-button v-for="key in ['xs', 'm', 'xl']" :key="key" text="按钮" :size="key" icon="search-line" />
    </view>
    <view class="flex">
      <c-button v-for="key in ['xs', 'm', 'xl']" :key="key" :size="key" color="primary" icon="search-line" round />
    </view>
    <c-button v-for="key in ['xs', 'm', '8xl']" :key="key" text="按钮" :size="key" color="primary" icon="search-line" />
    <c-button text="width: 500rpx" width="500rpx" />
    <c-button v-for="(_, key) in fontSizes" :key="key" text="按钮" :size="key" />
    <c-button text="奇奇怪怪的钮钮" height="200rpx" />
    <c-button height="200rpx">
      <view class="button-center">
        <c-icon name="home-smile-2-line" />
        <c-text>
          <c-text>奇奇怪怪的钮钮</c-text>
          <c-text>奇奇怪怪的钮钮</c-text>
        </c-text>
        <c-icon name="home-smile-2-line" />
      </view>
    </c-button>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { pick } from 'ramda'
import { useColors, useFontSizes } from '@/uni_modules/cfg-design'

const colors = pick(['primary', 'success', 'warning', 'error'])(useColors().value)

const fontSizes = useFontSizes()
const bgColor = ref('')
</script>

<style lang="scss" scoped>
.page {
  padding: 20rpx;

  :deep(.c-button) {
    margin: 10rpx;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
  }

  .button-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
