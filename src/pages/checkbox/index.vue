<template>
  <view class="page">
    <view class="checkbox-items">
      <c-form-item>
        <c-checkbox text="checkbox" v-model:checked="checked" />
        <c-text :text="'checked: ' + checked" />
      </c-form-item>
      <c-form-item label="row" label-placement="top">
        <view>
          <c-checkbox-group c="row" v-model:value="values">
            <c-checkbox v-for="i in 3" :key="i" :text="'value' + i" />
          </c-checkbox-group>
          <c-text color="error" :text="`checked: ${ values.join() }`" />
          <c-checkbox-group c="row" v-model:value="values2" :checkbox="{ activeType: 'icon' }">
            <c-checkbox v-for="i in 3" :key="i" :text="'value' + i" :value="'c-v-' + i" />
          </c-checkbox-group>
          <c-text color="error" :text="`checked: ${ values2.join() }`" />
        </view>
      </c-form-item>
      <c-checkbox-group>
        <c-checkbox text="minus" c="minus" checked />
        <c-checkbox text="indeterminate" c="indeterminate" checked />
        <c-checkbox text="active icon" active-type="icon" checked />
        <c-checkbox text="active icon minus" active-type="icon" c="minus" checked />
        <c-checkbox text="active icon indeterminate" active-type="icon" c="indeterminate" checked />
        <c-row gutter="20">
          <c-col>
            <c-checkbox text="readonly" checked readonly />
            <c-checkbox text="disabled" checked disabled />
          </c-col>
          <c-col>
            <c-checkbox text="readonly" readonly />
            <c-checkbox text="disabled" disabled />
          </c-col>
        </c-row>
      </c-checkbox-group>
      <c-checkbox-group>
        <c-checkbox text="text props" :text-props="{ color: 'error' }" />
        <c-checkbox>
          <c-row>
            <c-text color="primary">slot</c-text><c-text color="error">&nbsp;text</c-text><c-text color="success">&nbsp;text</c-text>
          </c-row>
        </c-checkbox>
        <c-checkbox size="3xl" text="size" />
        <c-checkbox size="8xl" text="size" />
      </c-checkbox-group>
      <c-form-item label="color" label-placement="top">
        <c-checkbox-group>
          <c-row>
            <c-col :span="6">
              <c-checkbox v-for="color in ['error', 'warning', 'success', '#7546c9']" :key="color" :color="color" :text="color" checked />
            </c-col>
            <c-col :span="6">
              <c-checkbox v-for="color in ['error', 'warning', 'success', '#7546c9']" :key="color" :color="color" :text="color" active-type="icon" checked />
            </c-col>
          </c-row>
        </c-checkbox-group>
      </c-form-item>
      <c-form-item label="border" label-placement="top">
        <view style="flex-grow: 1;">
          <c-checkbox-group>
            <c-checkbox text="border" border />
            <c-checkbox text="border" border color="error" />
          </c-checkbox-group>
          <c-checkbox-group c="row" :checkbox="{ border: true }">
            <c-checkbox text="border" />
            <c-checkbox text="border" />
          </c-checkbox-group>
          <c-checkbox-group c="row" :checkbox="{ border: true }">
            <c-checkbox text="round" round />
            <c-checkbox text="radius" radius="s l" />
          </c-checkbox-group>
          <c-checkbox-group :checkbox="{ borderBottom: true }">
            <c-checkbox text="border-bottom" />
            <c-checkbox text="border-bottom" />
          </c-checkbox-group>
          <c-checkbox-group c="row" :checkbox="{ borderBottom: true }">
            <c-checkbox text="border-bottom" />
            <c-checkbox text="border-bottom" />
          </c-checkbox-group>
        </view>
      </c-form-item>
      <c-form-item label="right" label-placement="top">
        <c-checkbox-group c="right">
          <c-checkbox v-for="i in 3" :key="i" :text="'text' + i" border-bottom />
          <c-checkbox v-for="i in 3" :key="i" :text="'text' + i" border radius="s l" />
          <c-checkbox v-for="i in 3" :key="i" :text="'text' + i" border icon-wrap-style="border-radius: 100%;" />
        </c-checkbox-group>
      </c-form-item>
    </view>
  </view>
  <c-form :item="{ labelPlacement: 'top' }">
    <c-form-item label="c-checkbox 禁用">
      <c-checkbox-group>
        <c-checkbox text="正常" />
        <c-checkbox text="禁用" disabled />
      </c-checkbox-group>
    </c-form-item>
    <c-form-item label="c-checkbox-group 禁用">
      <c-checkbox-group disabled>
        <c-checkbox text="正常" />
        <c-checkbox text="禁用" disabled />
      </c-checkbox-group>
    </c-form-item>
    <c-form-item label="c-form-item 禁用" disabled>
      <c-checkbox-group>
        <c-checkbox text="正常" />
        <c-checkbox text="禁用" disabled />
      </c-checkbox-group>
    </c-form-item>
  </c-form>
  <c-form :item="{ labelPlacement: 'top' }" disabled>
    <c-form-item label="c-form 禁用" disabled>
      <c-checkbox-group disabled>
        <c-checkbox text="正常" />
        <c-checkbox text="禁用" disabled />
      </c-checkbox-group>
    </c-form-item>
    <c-form-item>
      <c-checkbox-group disabled>
        <c-checkbox text="正常" />
        <c-checkbox text="禁用" disabled />
      </c-checkbox-group>
    </c-form-item>
  </c-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const values = ref<(string | number)[]>([1])
const values2 = ref<(string | number)[]>(['c-v-1'])
const checked = ref(false)
</script>

<style lang="scss">
.page {
  padding-top: 1px;
}

.c-form {
  margin-top: 20rpx;
}

.checkbox-items {
  padding: 20rpx;
  background-color: #fff;
}
</style>
