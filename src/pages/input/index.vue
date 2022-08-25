<template>
  <view class="page">
    <c-form>
      <c-form-item>
        <c-input auto-focus clearable />
      </c-form-item>
      <c-form-item>
        <c-input input-align="center" />
      </c-form-item>
      <c-form-item>
        <c-input input-align="right" />
      </c-form-item>
      <c-form-item>
        <c-input value="123" password clearable />
      </c-form-item>
      <c-form-item>
        <c-input value="123" password border />
      </c-form-item>
      <c-form-item>
        <c-input value="123" border show-count :maxlength="10" />
      </c-form-item>
      <c-form-item>
        <c-input value="123" border show-count right-icon="search-line" />
      </c-form-item>
      <c-form-item>
        <c-input radius="m" border />
      </c-form-item>
      <c-form-item>
        <c-input radius="l" border />
      </c-form-item>
      <c-form-item>
        <c-input radius="s l" border />
      </c-form-item>
      <c-form-item>
        <c-input radius="0 99 99 99" border />
      </c-form-item>
      <c-form-item>
        <c-input round border />
      </c-form-item>
      <c-form-item>
        <c-input placeholder="下边框" border-bottom />
      </c-form-item>
      <c-form-item>
        <c-input
          icon="user-5-line"
          right-icon="search-line"
          @confirm="onConfirm"
          @click:input="onClickInput"
          @click:icon="onClickIcon"
          @click:right-icon="onClickRightIcon"
        />
      </c-form-item>
      <c-form-item>
        <c-input icon="user-5-line" right-icon="search-line" border-bottom />
      </c-form-item>
      <c-form-item>
        <c-input icon="user-5-line" right-icon="search-line" border />
      </c-form-item>
      <c-form-item>
        <c-input size="5xl" icon="user-5-line" right-icon="search-line" border />
      </c-form-item>
      <c-form-item>
        <c-input size="5xl" icon="user-5-line" right-icon="search-line" border show-count />
      </c-form-item>
      <c-form-item>
        <c-input icon="user-5-line" right-icon="search-line" border round />
      </c-form-item>
      <c-form-item>
        <c-input>
          <template #prefix>
            <c-text color="secondary">https://</c-text>
          </template>
          <template #suffix>
            <c-text color="secondary">.com</c-text>
          </template>
        </c-input>
      </c-form-item>
      <c-form-item>
        <c-input border>
          <template #prefix>
            <c-text color="secondary">https://</c-text>
          </template>
          <template #suffix>
            <c-text color="secondary">.com</c-text>
          </template>
        </c-input>
      </c-form-item>
      <c-form-item>
        <c-input size="3xl" border>
          <template #prefix>
            <c-text color="secondary" size="3xl">https://</c-text>
          </template>
          <template #suffix>
            <c-text color="secondary" size="3xl">.com</c-text>
          </template>
        </c-input>
      </c-form-item>
      <c-form-item>
        <c-input icon="search-line" border>
          <template #suffix>
            <c-button color="primary" text="搜索" size="xs" />
          </template>
        </c-input>
      </c-form-item>
      <c-form-item>
        <c-row align="stretch" gutter="10">
          <c-col>
            <c-input icon="search-line" border />
          </c-col>
          <c-col span="auto">
            <c-button color="primary" text="搜索" height="100%" />
          </c-col>
        </c-row>
      </c-form-item>
      <c-form-item>
        <c-row align="stretch" gutter="10">
          <c-col>
            <c-input icon="search-line" border round />
          </c-col>
          <c-col span="auto">
            <c-button color="primary" text="搜索" height="100%" round />
          </c-col>
        </c-row>
      </c-form-item>
      <c-form-item>
        <c-row align="stretch" gutter="10">
          <c-col>
            <c-input icon="search-line" border round />
          </c-col>
          <c-col span="auto">
            <c-button color="#fff" text="搜索" text-color="main" height="100%" round />
          </c-col>
        </c-row>
      </c-form-item>
      <c-form-item>
        <c-row align="stretch">
          <c-col>
            <c-input icon="search-line" radius="m 0 0 m" border />
          </c-col>
          <c-col span="auto">
            <c-button color="primary" text="搜索" height="100%" radius="0 m m 0" />
          </c-col>
        </c-row>
      </c-form-item>
      <c-form-item>
        <c-row align="stretch">
          <c-col>
            <c-input icon="search-line" radius="999 0 0 999" border />
          </c-col>
          <c-col span="auto">
            <c-button color="primary" text="搜索" height="100%" radius="0 999 999 0" />
          </c-col>
        </c-row>
      </c-form-item>
      <c-form-item>
        <c-input icon="user-5-line" right-icon="search-line" border>
          <template #prefix>
            <c-text color="secondary" :text-bind="{ style: [{ marginLeft: '10rpx' }] }">用户</c-text>
          </template>
        </c-input>
      </c-form-item>
      <c-form-item>
        <c-input icon="search-line" bg-color="#f2f2f2" border-bottom />
      </c-form-item>
      <c-form-item>
        <c-input icon="search-line" bg-color="primary" />
      </c-form-item>
      <c-form-item>
        <c-input bg-color="primary" icon="search-line" :icon-props="{ color: 'error' }" right-icon="search-line" :right-icon-props="{ color: 'error' }" />
      </c-form-item>
      <c-form-item>
        <c-input icon="search-line" bg-color="success" />
      </c-form-item>
      <c-row :cols="2" :gutter="10">
        <c-col>
          <c-form-item label="禁用" label-placement="top">
            <view class="inputs">
              <c-input disabled />
              <c-input value="value" disabled />
              <c-input border disabled />
              <c-input value="value" icon="search-line" border disabled />
              <c-input icon="search-line" bg-color="primary" disabled />
              <c-input value="value" icon="search-line" bg-color="primary" disabled />
            </view>
          </c-form-item>
        </c-col>
        <c-col>
          <c-form-item label="只读" label-placement="top">
            <view class="inputs">
              <c-input readonly />
              <c-input value="value" readonly />
              <c-input border readonly />
              <c-input value="value" icon="search-line" border readonly />
              <c-input icon="search-line" bg-color="primary" readonly />
              <c-input value="value" icon="search-line" bg-color="primary" readonly />
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
import { CInput as MyC } from '@/uni_modules/cfg-design'

const onConfirm = () => uni.showToast({ title: 'confirm', icon: 'none' })
const onClickInput = () => uni.showToast({ title: 'click Input', icon: 'none' })
const onClickIcon = () => uni.showToast({ title: 'click Icon', icon: 'none' })
const onClickRightIcon = () => uni.showToast({ title: 'click RightIcon', icon: 'none' })
</script>

<style lang="scss">
.page {
  padding-top: 1px;
}

.inputs {
  flex-grow: 1;

  :deep(.c-input) {
    margin-top: 10rpx;
  }
}
</style>
