<template>
<view class="page">
  <c-row>
    <c-col span="6">
      <view class="content"><c-text>span: 6</c-text></view>
    </c-col>
    <c-col span="6">
      <view class="content"><c-text>span: 6</c-text></view>
    </c-col>
    <c-col span="0">
      <view class="content"><c-text>span: 0</c-text></view>
    </c-col>
  </c-row>
  <view class="span">
    <c-line />
  </view>
  <view style="overflow: hidden; background: #999">
    <c-row gutter="30 50" wrap>
      <c-col span="6">
        <view class="content"><c-text>gutter: "30 50"</c-text></view>
      </c-col>
      <c-col span="6">
        <view class="content"><c-text>span: 6</c-text></view>
      </c-col>
      <c-col span="6">
        <view class="content"><c-text>gutter: "30 50"</c-text></view>
      </c-col>
      <c-col span="6">
        <view class="content"><c-text>span: 6</c-text></view>
      </c-col>
    </c-row>
  </view>
  <view class="span">
    <c-line />
  </view>
  <c-row gutter="10">
    <c-col>
      <view class="content"><c-text>内容宽度</c-text></view>
    </c-col>
    <c-col :span="2">
      <view class="content"><c-text>2</c-text></view>
    </c-col>
    <c-col :span="3">
      <view class="content"><c-text>3</c-text></view>
    </c-col>
    <c-col :span="4">
      <view class="content"><c-text>4</c-text></view>
    </c-col>
  </c-row>
  <view class="span">
    <c-line />
  </view>
  <c-row :gutter="10">
    <c-col :span="4">
      <view class="content"><c-text>4-1</c-text></view>
    </c-col>
    <c-col :span="4">
      <view class="content"><c-text>4-2</c-text></view>
    </c-col>
    <c-col :span="4">
      <view class="content"><c-text>4-3</c-text></view>
    </c-col>
    <c-col :span="4">
      <view class="content"><c-text>4-4: wrap</c-text></view>
    </c-col>
  </c-row>
  <view class="span">
    <c-line />
  </view>
  <c-row cols="24" gutter="10rpx">
    <c-col :span="10">
      <view class="content"><c-text>cols: 24</c-text></view>
    </c-col>
    <c-col :span="10">
      <view class="content"><c-text>span: 10</c-text></view>
    </c-col>
  </c-row>
  <view class="span">
    <c-line />
  </view>
  <c-row :cols="30" gutter="10rpx">
    <c-col :span="10">
      <view class="content"><c-text>cols: 30</c-text></view>
    </c-col>
    <c-col :span="10">
      <view class="content"><c-text>span: 10</c-text></view>
    </c-col>
  </c-row>
  <view class="span">
    <c-line />
  </view>
  <c-row gutter="10rpx" justify="center">
    <c-col :span="5">
      <view class="content"><c-text>justify</c-text></view>
    </c-col>
    <c-col :span="5">
      <view class="content"><c-text>center</c-text></view>
    </c-col>
  </c-row>
  <view class="span">
    <c-line />
  </view>
  <c-row gutter="10rpx" justify="space-between">
    <c-col :span="5">
      <view class="content"><c-text>justify</c-text></view>
    </c-col>
    <c-col :span="5">
      <view class="content"><c-text>space-between</c-text></view>
    </c-col>
  </c-row>
  <view class="span">
    <c-line />
  </view>
  <c-row gutter="10rpx" justify="space-around">
    <c-col :span="5">
      <view class="content"><c-text>justify</c-text></view>
    </c-col>
    <c-col :span="5">
      <view class="content"><c-text>space-around</c-text></view>
    </c-col>
  </c-row>
  <view class="span">
    <c-line />
  </view>
  <c-row gutter="10rpx" justify="flex-end">
    <c-col :span="5">
      <view class="content"><c-text>justify</c-text></view>
    </c-col>
    <c-col :span="5">
      <view class="content"><c-text>flex-end</c-text></view>
    </c-col>
  </c-row>
  <view class="span">
    <c-line />
  </view>
  <c-row gutter="10rpx" align="center">
    <c-col :span="4">
      <view class="content" style="height: 200rpx"><c-text>align</c-text></view>
    </c-col>
    <c-col :span="4">
      <view class="content"><c-text>center</c-text></view>
    </c-col>
    <c-col :span="4">
      <view class="content"><c-text>center</c-text></view>
    </c-col>
  </c-row>
  <view class="span">
    <c-line />
  </view>
  <c-row gutter="10rpx" align="flex-end">
    <c-col :span="4">
      <view class="content" style="height: 200rpx"><c-text>align</c-text></view>
    </c-col>
    <c-col :span="4">
      <view class="content"><c-text>flex-end</c-text></view>
    </c-col>
    <c-col :span="4">
      <view class="content"><c-text>flex-end</c-text></view>
    </c-col>
  </c-row>
  <view class="span">
    <c-line />
  </view>
  <c-row gutter="10rpx" vertical>
    <c-col :span="8">
      <view class="content"><c-text>vertical</c-text></view>
    </c-col>
    <c-col :span="8">
      <view class="content"><c-text>vertical</c-text></view>
    </c-col>
    <c-col :span="8">
      <view class="content"><c-text>vertical</c-text></view>
    </c-col>
  </c-row>
  <view class="span">
    <c-line />
  </view>
  <c-row gutter="10rpx" align="center" vertical>
    <c-col :span="8">
      <view class="content"><c-text>vertical</c-text></view>
    </c-col>
    <c-col :span="8">
      <view class="content"><c-text>vertical</c-text></view>
    </c-col>
    <c-col :span="8">
      <view class="content"><c-text>vertical</c-text></view>
    </c-col>
  </c-row>
</view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.page {
  padding: 20rpx;
  background-color: #fff;

  .span {
    padding: 10rpx 0;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1890ff;
  }
}
</style>
