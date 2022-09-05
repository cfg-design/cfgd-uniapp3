<template>
  <view class="page">
    <view class="radio-items">
      <c-form-item>
        <c-radio-group>
          <c-radio text="text 1" />
          <c-radio text="text 2" checked />
        </c-radio-group>
      </c-form-item>
      <c-form-item label="row" label-placement="top">
        <view>
          <c-radio-group c="row" v-model:value="value">
            <c-radio v-for="i in 3" :key="i" :text="'text' + i" />
          </c-radio-group>
          <c-text color="error" :text="'已选择值: ' + value" />
          <c-radio-group c="row" v-model:value="value2" :radio="{ activeType: 'icon' }">
            <c-radio v-for="i in 3" :key="i" :text="'text' + i" :value="'c-v-' + i" />
          </c-radio-group>
          <c-text color="error" :text="'已选择值: ' + value2" />
        </view>
      </c-form-item>
      <c-form-item label="circle" label-placement="top">
        <c-radio-group :value="0" c="row">
          <c-radio c="circle" text="text" />
          <c-radio c="circle" text="text" />
          <c-radio c="circle" text="active icon" active-type="icon" />
        </c-radio-group>
      </c-form-item>
      <c-form-item label="readonly" label-placement="top">
        <c-radio-group :value="0" c="row">
          <c-radio text="text1" readonly />
          <c-radio text="text2" readonly />
        </c-radio-group>
      </c-form-item>
      <c-form-item label="disabled" label-placement="top">
        <c-radio-group :value="0" c="row">
          <c-radio text="text1" disabled />
          <c-radio text="text2" disabled />
        </c-radio-group>
      </c-form-item>
      <c-form-item label="color" label-placement="top">
          <c-row>
            <c-col span="6">
              <c-radio-group v-for="color in ['error', 'warning', 'success', '#7546c9']" :key="color">
                <c-radio :color="color" :text="color" checked />
              </c-radio-group>
            </c-col>
            <c-col span="6">
              <c-radio-group v-for="color in ['error', 'warning', 'success', '#7546c9']" :key="color" :radio="{ color, activeType: 'icon' }">
                <c-radio :text="color" checked />
              </c-radio-group>
            </c-col>
          </c-row>
      </c-form-item>
      <c-form-item label="border" label-placement="top">
        <view style="flex-grow: 1;">
          <c-radio-group>
            <c-radio text="border" border />
            <c-radio text="border" border color="error" />
          </c-radio-group>
          <c-radio-group c="row" :radio="{ border: true }">
            <c-radio text="border" />
            <c-radio text="border" />
          </c-radio-group>
          <c-radio-group c="row" :radio="{ border: true }">
            <c-radio text="round" round />
            <c-radio text="radius" radius="s l" />
          </c-radio-group>
          <c-radio-group :radio="{ borderBottom: true }">
            <c-radio text="border-bottom" />
            <c-radio text="border-bottom" />
          </c-radio-group>
          <c-radio-group c="row" :radio="{ borderBottom: true }">
            <c-radio text="border-bottom" />
            <c-radio text="border-bottom" />
          </c-radio-group>
        </view>
      </c-form-item>
      <c-form-item label="right" label-placement="top">
        <c-radio-group c="right">
          <c-radio v-for="i in 3" :key="i" :text="'text' + i" border-bottom />
          <c-radio v-for="i in 3" :key="i" :text="'text' + i" border radius="s l" />
        </c-radio-group>
      </c-form-item>
      <c-radio-group>
        <c-radio text="text props" :text-props="{ color: 'error' }" />
        <c-radio>
          <c-text color="primary">slot</c-text><c-text color="error">&nbsp;text</c-text><c-text color="success">&nbsp;text</c-text>
        </c-radio>
        <c-radio size="3xl" text="size" />
        <c-radio size="8xl" text="size" />
      </c-radio-group>
    </view>
  </view>
  <c-form :item="{ labelPlacement: 'top' }">
    <c-form-item label="c-radio 禁用">
      <c-radio-group>
        <c-radio text="正常" />
        <c-radio text="正常" />
        <c-radio text="禁用" disabled />
      </c-radio-group>
    </c-form-item>
    <c-form-item label="c-radio-group 禁用">
      <c-radio-group disabled>
        <c-radio text="正常" />
        <c-radio text="禁用" disabled />
      </c-radio-group>
    </c-form-item>
    <c-form-item label="c-form-item 禁用" disabled>
      <c-radio-group>
        <c-radio text="正常" />
        <c-radio text="禁用" disabled />
      </c-radio-group>
    </c-form-item>
  </c-form>
  <c-form :item="{ labelPlacement: 'top' }" disabled>
    <c-form-item label="c-form 禁用" disabled>
      <c-radio-group disabled>
        <c-radio text="正常" />
        <c-radio text="禁用" disabled />
      </c-radio-group>
    </c-form-item>
    <c-form-item>
      <c-radio-group disabled>
        <c-radio text="正常" />
        <c-radio text="禁用" disabled />
      </c-radio-group>
    </c-form-item>
  </c-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string | number>(1)
const value2 = ref<string | number>('c-v-1')
</script>

<style lang="scss">
.page {
  padding-top: 1px;
}

.c-form {
  margin-top: 20rpx;
}

.radio-items {
  padding: 20rpx;
  background-color: #fff;
}
</style>
