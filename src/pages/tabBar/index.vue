<template>
<view class="page">
  <c-tab-bar :value="0" :items="items" @click:item="onClickItem" />
  <c-tab-bar :value="1" :items="items2" />
  <c-tab-bar :value="2" :items="items3" />
  <c-tab-bar :value="1" :items="items3" />
  <c-tab-bar :value="0" :items="items" c-class="lll">
    <template #item="{ item, index, active }">
      <view v-if="index === 1" style="display: flex; flex-grow: 1; justify-content: center; width: 100%">
        <c-avatar-text color="error" size="70" text="+" text-color="#fff" :text-props="{ size: 50, cStyle: { marginBottom: '4rpx', lineHeight: '50rpx', height: '50rpx' } }" />
      </view>
      <!-- 如果 item.value 为 undefined, 需要设置 :value="index" , active 值才不会出错 -->
      <c-tab-bar-item v-else :props="item" :value="index" />
    </template>
  </c-tab-bar>
  <c-tab-bar v-model:value="modelValue" :items="items">
    <template #item="{ item, index, active }">
      <view v-if="index === 1" @click="modelValue = index">
        <c-avatar-text
          :c-style="[{ marginTop: '-50rpx' }]"
          :color="active ? 'error' : '#000'"
          text="A"
          text-color="#fff"
          round
        />
      </view>
      <!-- 如果 item.value 为 undefined, 需要设置 :value="index" , active 值才不会出错 -->
      <c-tab-bar-item v-else :props="item" :value="index" :c-style="{ width: '320rpx' }" />
    </template>
  </c-tab-bar>
  <c-tab-bar v-for="color in ['error', 'warning', 'success', '#7546c9']" :key="color" v-model:value="modelValue" :item="{ color }" :items="items" />
  <c-tab-bar :item="{ color: 'success', activeIconProps: { color: 'error' } }" v-model:value="modelValue" :items="items2" />
  <c-tab-bar  v-model:value="modelValue" :items="items4" />
</view>
</template>

<script setup lang="ts">
import type { TabBarItemProps } from '@/uni_modules/cfg-design/types.d'
import { ref } from 'vue'

const modelValue = ref(0)

const items: TabBarItemProps[] = [
  {
    icon: 'home-smile-2-line',
    text: '首页'
  },
  {
    icon: 'add-line',
    text: '这个是加号'
  },
  {
    icon: 'user-5-line',
    text: '我的'
  }
]

const items2: TabBarItemProps[] = [
  {
    icon: 'home-smile-2-line',
    activeIcon: 'home-smile-2-fill',
    text: '首页'
  },
  {
    icon: 'add-line',
    activeIcon: 'subtract-line',
    text: 'active-icon'
  },
  {
    icon: 'user-5-line',
    activeIcon: 'user-5-fill',
    text: '我的'
  }
]

const items3: TabBarItemProps[] = [
  {
    icon: 'home-smile-2-line',
    text: '首页'
  },
  {
    icon: 'add-line',
    text: '这个是加号',
    dot: true
  },
  {
    icon: 'user-5-line',
    text: '我的',
    badge: '8'
  }
]

const items4: TabBarItemProps[] = [
  {
    icon: 'home-smile-2-line',
    activeIcon: 'home-smile-2-fill',
    text: '首页',
    color: 'success'
  },
  {
    icon: 'add-line',
    activeIcon: 'subtract-line',
    text: 'active-icon',
    color: 'error'
  },
  {
    icon: 'user-5-line',
    activeIcon: 'user-5-fill',
    text: '我的',
    color: 'warning'
  }
]

const onClickItem = (item: TabBarItemProps) => {
  uni.showToast({ title: item.text, icon: 'none'})
  console.log(item)
}
</script>

<style lang="scss">
.page {
  padding-top: 50rpx;

  .c-tab-bar {
    margin-bottom: 50rpx;
  }
}
</style>
