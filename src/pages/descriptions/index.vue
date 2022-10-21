<template>
  <view class="page">
    <c-card>
      <c-descriptions :props="data" />
    </c-card>
    <c-card>
      <c-descriptions :props="data" label-placement="left" />
    </c-card>
  </view>
</template>

<script setup lang="ts">
import type { DescriptionsProps } from '@/uni_modules/cfg-design/types.d'

const data: DescriptionsProps = {
  colProps: { span: 4 },
  fields: [
    { key: 'name', label: '姓名' },
    { key: 'age', label: '年龄' },
    { key: 'sex', label: '性别' },
    { key: 'occupation', label: '职业', span: 12, labelProps: { color: 'warning' } , valueProps: { color: 'success' } },
  ],
  detail: {
    name: '小明',
    age: 28,
    sex: '男',
    occupation: '程序员'
  }
}
</script>

<style lang="scss" scoped>
.page {
  padding: 20rpx;

}

.c-card {
  margin-bottom: 20rpx;
}
</style>
