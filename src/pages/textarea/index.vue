<template>
  <view class="page">
    <c-form>
      <c-form-item label-placement="top" label="默认">
        <c-textarea auto-focus />
      </c-form-item>
      <c-form-item label-placement="top" label="统计">
        <c-textarea show-count />
      </c-form-item>
      <c-form-item label-placement="top" label="边框">
        <c-textarea show-count border />
      </c-form-item>
      <c-form-item label-placement="top" label="大圆角">
        <c-textarea show-count border radius="l" />
      </c-form-item>
      <c-form-item label-placement="top" label="对角圆角">
        <c-textarea show-count border radius="s l" />
      </c-form-item>
      <c-form-item label-placement="top" label="下边框">
        <c-textarea show-count border-bottom />
      </c-form-item>
      <c-form-item label-placement="top" label="高度">
        <c-textarea height="100rpx" />
      </c-form-item>
      <c-form-item label-placement="top" label="高度2">
        <c-textarea height="100rpx" border />
      </c-form-item>
      <c-form-item label-placement="top" label="高度3">
        <c-textarea height="100rpx" border-bottom />
      </c-form-item>
      <c-form-item label-placement="top" label="自动高度">
        <c-textarea auto-height />
      </c-form-item>
      <c-form-item label-placement="top" label="自动高度2">
        <c-textarea auto-height border />
      </c-form-item>
      <c-form-item label-placement="top" label="自动高度3">
        <c-textarea auto-height border-bottom />
      </c-form-item>
      <c-row :cols="2" gutter="10rpx">
        <c-col>
          <c-form-item label="禁用" label-placement="top">
            <view class="textareas">
              <c-textarea height="100rpx" disabled />
              <c-textarea height="100rpx" value="value" disabled />
              <c-textarea height="100rpx" border disabled />
            </view>
          </c-form-item>
        </c-col>
        <c-col>
          <c-form-item label="只读" label-placement="top">
            <view class="textareas">
              <c-textarea height="100rpx" readonly />
              <c-textarea height="100rpx" value="value" readonly />
              <c-textarea height="100rpx" border readonly />
            </view>
          </c-form-item>
        </c-col>
      </c-row>
      <c-form-item>
        <MyC placeholder="手动引入" />
      </c-form-item>
    </c-form>
  </view>
</template>

<script setup lang="ts">
import { CTextarea as MyC } from '@/uni_modules/cfg-design'
</script>

<style lang="scss">
.page {
  min-height: 100vw;
}

.textareas {
  flex-grow: 1;

  :deep(.c-textarea) {
    margin-top: 10rpx;
  }
}
</style>
