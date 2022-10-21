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

    <c-cell>
      <template #left><c-text>#left</c-text></template>
      <template #label><c-text>#label</c-text></template>
      <template #brief><c-text>#brief</c-text></template>
      <c-text color="primary">#default&nbsp;</c-text>
      <template #right><c-text>#right</c-text></template>
    </c-cell>
  </view>
</template>

<script setup lang="ts">
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
