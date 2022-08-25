<template>
<view class="page">
  <c-row>
    <c-col span="6">
      <c-text>span: 6</c-text>
    </c-col>
    <c-col span="6">
      <c-text>span: 6</c-text>
    </c-col>
    <c-col span="0">
      <c-text>span: 0</c-text>
    </c-col>
  </c-row>
  <view class="span" />
  <view style="overflow: hidden; background: #999">
    <c-row gutter="30 50" wrap>
      <c-col span="6">
        <c-text>gutter: "30 50"</c-text>
      </c-col>
      <c-col span="6">
        <c-text>span: 6</c-text>
      </c-col>
      <c-col span="6">
        <c-text>gutter: "30 50"</c-text>
      </c-col>
      <c-col span="6">
        <c-text>span: 6</c-text>
      </c-col>
    </c-row>
  </view>
  <view class="span" />
  <c-row gutter="10">
    <c-col>
      <c-text>1</c-text>
    </c-col>
    <c-col :span="2">
      <c-text>2</c-text>
    </c-col>
    <c-col :span="3">
      <c-text>3</c-text>
    </c-col>
    <c-col :span="4">
      <c-text>4</c-text>
    </c-col>
  </c-row>
  <c-row :gutter="10" wrap>
    <c-col :span="4">
      <c-text>4</c-text>
    </c-col>
    <c-col :span="4">
      <c-text>4</c-text>
    </c-col>
    <c-col :span="4">
      <c-text>4</c-text>
    </c-col>
    <c-col :span="4">
      <c-text>4: wrap</c-text>
    </c-col>
  </c-row>
  <view class="span" />
  <c-row cols="24" gutter="10rpx">
    <c-col :span="10">
      <c-text>cols: 24</c-text>
    </c-col>
    <c-col :span="10">
      <c-text>span: 10</c-text>
    </c-col>
  </c-row>
  <c-row :cols="30" gutter="10rpx">
    <c-col :span="10">
      <c-text>cols: 30</c-text>
    </c-col>
    <c-col :span="10">
      <c-text>span: 10</c-text>
    </c-col>
  </c-row>
  <view class="span" />
  <c-row gutter="10rpx" justify="center">
    <c-col :span="5">
      <c-text>justify</c-text>
    </c-col>
    <c-col :span="5">
      <c-text>center</c-text>
    </c-col>
  </c-row>
  <view class="span" />
  <c-row gutter="10rpx" justify="space-between">
    <c-col :span="5">
      <c-text>justify</c-text>
    </c-col>
    <c-col :span="5">
      <c-text>space-between</c-text>
    </c-col>
  </c-row>
  <view class="span" />
  <c-row gutter="10rpx" justify="space-around">
    <c-col :span="5">
      <c-text>justify</c-text>
    </c-col>
    <c-col :span="5">
      <c-text>space-around</c-text>
    </c-col>
  </c-row>
  <view class="span" />
  <c-row gutter="10rpx" justify="flex-end">
    <c-col :span="5">
      <c-text>justify</c-text>
    </c-col>
    <c-col :span="5">
      <c-text>flex-end</c-text>
    </c-col>
  </c-row>
  <view class="span" />
  <c-row gutter="10rpx" align="center">
    <c-col :span="4">
      <c-text style="height: 200rpx">align</c-text>
    </c-col>
    <c-col :span="4">
      <c-text>center</c-text>
    </c-col>
    <c-col :span="4">
      <c-text>center</c-text>
    </c-col>
  </c-row>
  <view class="span" />
  <c-row gutter="10rpx">
    <c-col :span="4">
      <c-text style="height: 200rpx">align-self</c-text>
    </c-col>
    <c-col :span="4" align-self="center">
      <c-text>center</c-text>
    </c-col>
    <c-col :span="4" align-self="flex-end">
      <c-text>flex-end</c-text>
    </c-col>
  </c-row>
  <view class="span" />
  <c-row gutter="10rpx" vertical>
    <c-col :span="5">
      <c-text>vertical</c-text>
    </c-col>
    <c-col :span="5">
      <c-text>vertical</c-text>
    </c-col>
    <c-col :span="5">
      <c-text>vertical</c-text>
    </c-col>
  </c-row>
  <view class="span" />
  <c-row gutter="10rpx" vertical>
    <c-col :span="5" align-self="flex-end">
      <c-text>flex-end</c-text>
    </c-col>
    <c-col :span="5" align-self="center">
      <c-text>center</c-text>
    </c-col>
    <c-col :span="5" align-self="flex-end">
      <c-text>flex-end</c-text>
    </c-col>
  </c-row>
  <view class="span" />
  <my-row gutter="10rpx">
    <my-col>
      <c-text>span: undefined</c-text>
    </my-col>
    <my-col>
      <c-text>平分剩余空间</c-text>
    </my-col>
  </my-row>
  <view class="span" />
  <my-row gutter="10rpx">
    <my-col span="auto">
      <c-text>span: auto 内容宽度</c-text>
    </my-col>
  </my-row>
</view>
</template>

<script setup lang="ts">
import { CRow as MyRow, CCol as MyCol } from '@/uni_modules/cfg-design'
</script>

<style lang="scss">
.page {
  padding: 20rpx;

  .span {
    padding-bottom: 10rpx
  }

  .c-text {
    align-items: center;
    justify-content: center;
    background: #1890ff;
  }
}
</style>
