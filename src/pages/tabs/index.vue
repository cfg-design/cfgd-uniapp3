<template>
<view class="page">
  <c-tabs :value="0" :items="items" />
  <c-tabs :value="0" :items="items2" />
  <c-tabs :value="0" :items="items2" :c-style="[{ justifyContent: 'space-around' }]" />
  <c-tabs v-for="color in ['error', 'success', 'warning']" :key="color" :item="{ color }" :value="0" :items="items" />
  <c-tabs :value="0" :items="items3" />
  <c-tabs :value="0" :item="{ activeType: 'bg' }" :items="items" />
  <c-tabs :value="0" :item="{ activeType: 'bg' }" :items="items2" />
  <c-tabs :value="0" :item="{ activeType: 'bg' }" :items="items3" />
  <c-tabs c="equal" :value="0" :item="{ activeType: 'bg' }" :items="items3" />
  <c-tabs v-model:value="modelValue" :items="items4">
    <template #item="{ item, index, active }">
      <c-tab-item v-if="index == 2" :props="item" :value="index">
        <c-row align="center" :c-style="{ flexWrap: 'nowrap' }">
          <c-icon  name="search-line" :color="!active ? item.textProps?.color : item.color" />
          <c-text :color="!active ? item.textProps?.color : item.color">{{ item.text }}</c-text>
          <c-icon name="search-line" :color="!active ? item.textProps?.color : item.color" />
        </c-row>
      </c-tab-item>
      <c-tab-item v-else-if="index == 3" :props="item" :value="index">
        <c-row align="center" :c-style="{ flexWrap: 'nowrap' }">
          <c-icon  name="check-line" :color="!active ? item.textProps?.color : '#fff'" />
          <c-text :color="!active ? item.textProps?.color : '#fff'">{{ item.text }}</c-text>
          <c-icon name="check-line" :color="!active ? item.textProps?.color : '#fff'" />
        </c-row>
      </c-tab-item>
      <c-tab-item v-else :props="item" :value="index" />
    </template>
  </c-tabs>
  <c-tabs :value="0" :items="items" :item="{ lineProps: { borderStyle: 'dashed' } }" />
  <c-tabs :value="0" :items="items" :item="{ lineProps: { width: '1px' } }" />
  <c-tabs :value="0" :items="items" :item="{ lineProps: { width: '10rpx' } }" />
  <c-tabs :value="0" :items="items" :item="{ lineProps: { width: '10rpx', round: false } }" />
</view>
</template>

<script setup lang="ts">
import type { TabItemProps } from '@/uni_modules/cfg-design/types.d'
import { ref } from 'vue'

const modelValue = ref(0)
const items: TabItemProps[] = [
  { text: '??????' },
  { text: '??????' },
  { text: '??????' },
  { text: '??????' },
  { text: '??????' },
  { text: '??????' },
  { text: '??????' },
  { text: '??????' },
  { text: '??????' },
]

const items2: TabItemProps[] = [
  {
    text: '??????'
  },
  {
    text: '??????',
    dot: true
  },
  {
    text: '??????',
    badge: '8'
  }
]

const items3: TabItemProps[] = [
  {
    text: '??????',
    color: 'success'
  },
  {
    text: '??????',
    color: 'error'
  },
  {
    text: '??????',
    color: 'warning'
  }
]

const items4: TabItemProps[] = [
  {
    text: '??????',
    color: 'success',
  },
  {
    text: '??????',
    color: 'error',
    activeType: 'bg'
  },
  {
    text: '??????',
    color: 'warning'
  },
  {
    text: '??????',
    activeType: 'bg'
  }
]
</script>

<style lang="scss">
.page {
  padding-bottom: 10rpx;

  .c-tabs {
    margin-bottom: 20rpx;
  }
}
</style>
