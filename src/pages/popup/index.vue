<template>
  <view class="page">
    <c-row gutter="20" :cols="items.length">
      <c-col :span="items.length">
        <c-button text="打开弹窗" @click="visible = true" />
      </c-col>
      <c-col :span="items.length">
        <c-button text="打开无遮罩弹窗" @click="visible2 = true" />
      </c-col>
      <c-col v-for="item in items" :key="item.placement" span="1">
        <c-button :text="item.text" @click="showItem(item)" />
      </c-col>
    </c-row>

    <c-popup v-model:visible="visible" content-style="padding: 30rpx">
      <c-button text="关闭弹窗" @click="visible = false" />
      <c-button text="打开弹窗2" c-style="margin-top: 30rpx" @click="items[items.length - 1].visible = true" />
    </c-popup>

    <c-popup v-model:visible="visible2" placement="center" content-style="width: 600rpx" closable no-mask>
      <c-popup-title title="弹窗">
        <template #left>
          <view style="padding: 30rpx" @click="visible = true">
            <c-icon name="add-line" size="3xl" />
          </view>
        </template>
      </c-popup-title>
    </c-popup>

    <view v-for="item in items" :key="item.placement">
      <c-popup
        v-model:visible="item.visible"
        :placement="item.placement"
        content-style="min-width: 300rpx"
        closable
        mask-closable
        :safe-area-inset-bottom="item.placement !== 'top' && item.placement !== 'center'"
      >
        <c-popup-title title="弹窗" />
        <view style="padding: 0 30rpx 30rpx">{{ item.placement }}</view>
      </c-popup>
    </view>
  </view>
</template>

<script setup lang="ts">
import type { PopupProps } from '@/uni_modules/cfg-design/types.d'
import { ref } from 'vue'

const visible = ref(false)
const visible2 = ref(false)

interface Item {
  visible: boolean
  text: string
  placement: PopupProps['placement']
}

const items = ref<Item[]>([
  {
    visible: false,
    text: '左',
    placement: 'left'
  },
  {
    visible: false,
    text: '右',
    placement: 'right'
  },
  {
    visible: false,
    text: '上',
    placement: 'top'
  },
  {
    visible: false,
    text: '下',
    placement: 'bottom'
  },
  {
    visible: false,
    text: '中',
    placement: 'center'
  }
])

const showItem = (item: Item) => {
  item.visible = true
}
</script>

<style lang="scss" scoped>
  .page {
    padding: 20rpx;
  }
</style>
