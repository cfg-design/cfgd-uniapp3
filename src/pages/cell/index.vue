<template>
  <view class="page">
    <c-cell icon="image-2-fill" label="label" value="value" right-icon="arrow-right-s-line" @click="onClick" />
    <c-cell label="label" value="value" no-click />
    <c-cell label="label" right-icon="arrow-right-s-line" />
    <c-cell label="label" value="value" right-icon="arrow-right-s-line" />
    <c-cell
      icon="image-2-fill"
      :icon-props="{ color: 'primary', size: '8xl' }"
      label="label"
      brief="brief"
      value="value"
      :value-props="{ color: 'error' }"
      right-icon="arrow-right-s-line"
    />

    <MyC>
      <template #left><c-text>slot:left</c-text></template>
      <template #label><c-text>slot:label</c-text></template>
      <template #brief><c-text>slot:brief</c-text></template>
      <c-text color="primary">slot:default&nbsp;</c-text>
      <template #right><c-text>slot:right</c-text></template>
    </MyC>
  </view>
</template>

<script setup lang="ts">
import { CCell as MyC } from '@/uni_modules/cfg-design'

const onClick = () => uni.showToast({ title: '点击 Cell', icon: 'none' })
</script>

<style lang="scss">
.page {
  padding-top: 1px;
}
.c-cell {
  margin-bottom: 1px;
}
</style>
