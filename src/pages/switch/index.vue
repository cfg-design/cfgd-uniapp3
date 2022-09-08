<template>
<view class="page">
  <c-form :item="{ labelWidth: 120 }">
    <c-form-item label=" ">
      <c-row gutter="20">
        <c-col span="auto">
          <c-switch />
        </c-col>
        <c-col span="auto">
          <c-switch round />
        </c-col>
      </c-row>
    </c-form-item>
    <c-form-item label="内容">
      <c-row gutter="20">
        <c-col span="auto">
          <c-switch checked-text="是" un-checked-text="否" />
        </c-col>
        <c-col span="auto">
          <c-switch checked-text="是" un-checked-text="否" round />
        </c-col>
        <c-col span="auto">
          <c-switch checked-text="是" un-checked-text="否" bg-color="error" :un-checked-text-props="{ color: '#fff' }" round />
        </c-col>
        <c-col span="auto">
          <c-switch checked-text="不同长度" un-checked-text="否" />
        </c-col>
      </c-row>
    </c-form-item>
    <c-form-item label="颜色">
      <c-row gutter="20">
        <c-col v-for="item in ['primary', 'success', 'error', 'warning', '#7546c9']" :key="item" span="auto">
          <c-switch :color="item" :value="true" />
        </c-col>
      </c-row>
    </c-form-item>
    <c-form-item label="大小">
      <c-row gutter="20">
        <c-col v-for="item in ['xs', 's', 'm', 'l', 'xl']" :key="item" span="auto">
          <c-switch :size="item" />
        </c-col>
      </c-row>
    </c-form-item>
    <c-form-item label="加载中">
      <c-row gutter="20">
        <c-col span="auto">
          <c-switch loading />
        </c-col>
        <c-col span="auto">
          <c-switch loading round />
        </c-col>
      </c-row>
    </c-form-item>
    <c-form-item label="异步">
      <c-row gutter="20">
        <c-col span="auto">
          <c-switch :value="active" :loading="loading" @update:value="updateValue" />
        </c-col>
        <c-col span="auto">
          <c-switch :value="active" :loading="loading" round @update:value="updateValue" />
        </c-col>
        <c-col span="auto">
          <c-switch :value="active" :loading="loading" color="error" round @update:value="updateValue" />
        </c-col>
        <c-col span="auto">
          <c-switch :value="active" :loading="loading" :spin-props="{ color: 'error', iconProps: { name: 'subtract-line' } }" round @update:value="(v) => updateValue(!!v)" />
        </c-col>
      </c-row>
    </c-form-item>
    <c-form-item label="禁用">
      <c-row gutter="20">
        <c-col span="auto">
          <c-switch disabled />
        </c-col>
        <c-col span="auto">
          <c-switch value="1" checked-value="1" disabled />
        </c-col>
      </c-row>
    </c-form-item>
    <c-form-item label="只读">
      <c-row gutter="20">
        <c-col span="auto">
          <c-switch readonly />
        </c-col>
        <c-col span="auto">
          <c-switch value="1" checked-value="1" readonly />
        </c-col>
      </c-row>
    </c-form-item>
  </c-form>
</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
const active = ref(false)

const updateValue = (v: any) => {
  loading.value = true

  setTimeout(() => {
    active.value = !!v
    loading.value = false
  }, 1000)
}

updateValue(true)
</script>

<style lang="scss">
.page {
  padding: 1px 0;
}
</style>