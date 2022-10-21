<template>
<view>
  <c-form-item label="账号" path="name">
    <c-input placeholder="用户名" />
  </c-form-item>
  <c-form-item label="性别" right-icon="arrow-right-s-line" :label-text-props="{ cStyle: { whiteSpace: 'nowrap' } }">
    <c-input placeholder="请选择性别" readonly />
  </c-form-item>
</view>
</template>