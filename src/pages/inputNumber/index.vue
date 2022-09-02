<template>
<view class="page">
  <c-form :label="{ labelWidth: '180rpx' }">
    <c-form-item label="min ~ max">
      <c-input-number v-model:value="num" :min="0" :max="10" />
    </c-form-item>
    <c-form-item label="step: 0.1">
        <c-input-number v-model:value="num2" :step="0.1" />
    </c-form-item>
    <c-form-item label="async">
        <c-input-number :value="asyncNum" :disabled="loading" :input-props="{ readonly: true }" @minus="asyncUpdate" @plus="asyncUpdate" />
    </c-form-item>
  </c-form>
  <view class="main">
    <c-row gutter="20" wrap>
      <c-col span="auto" v-for="color in ['primary', 'success', 'error', 'warning']" :key="color">
        <c-input-number :color="color" />
      </c-col>
      <c-col span="auto">
        <c-input-number
          :minus-button-props="{ color: 'primary', textColor: '#fff' }"
          :plus-button-props="{ color: 'success', textColor: '#fff' }"
        />
      </c-col>
      <c-col span="auto">
        <c-input-number round />
      </c-col>
      <c-col span="auto">
        <c-input-number radius="m" />
      </c-col>
      <c-col span="auto">
        <c-input-number radius="s l" />
      </c-col>
      <c-col span="auto">
        <c-input-number radius="m" :input-props="{ cStyle: 'margin: 0' }" round />
      </c-col>
      <c-col span="auto">
        <c-input-number radius="s l" :input-props="{ cStyle: 'margin: 0' }" />
      </c-col>
      <c-col span="auto">
        <c-input-number disabled />
      </c-col>
    </c-row>
    <view style="padding:10rpx"></view>
    <c-row align="flex-start" gutter="20" vertical>
      <c-col v-for="size in ['xs', 's', 'm', 'l', 'xl']" :key="size">
        <c-input-number :size="size" />
      </c-col>
      <c-col v-for="size in ['xs', 's', 'm', 'l', 'xl']" :key="size">
        <c-input-number :size="size" c="round" />
      </c-col>
      <c-col span="auto">
        <c-input-number c="round" color="primary" />
      </c-col>
    </c-row>
  </view>
</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const num = ref(0)
const num2 = ref(0)
const asyncNum = ref(1)
const loading = ref(false)

const asyncUpdate = (v: number) => {
  if (loading.value) return;
  loading.value = true
  uni.showLoading({ title: '异步' })
  setTimeout(() => {
    asyncNum.value = v
    uni.hideLoading()
    loading.value = false
  }, 1000)
}
</script>

<style lang="scss">
.page {
  padding-top: 1px;
}

.main {
  overflow: hidden;
  padding: 30rpx;
  background: #fff;
}
</style>
