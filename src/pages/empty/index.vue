<template>
<view class="page">
  <c-empty :view-props="{ cStyle: [{ minHeight: '100vw' }] }" />
  <c-line color="primary" />
  <c-empty c="search" />
  <c-line color="primary" />
  <c-empty image="http://pic.kaiweixin.cn/upload/micropay/goods/picture/201606/02-161857-574febf17eae3.jpg?imageView2/1/w/160/h/120/format/webp/q/100" />
  <c-line color="primary" />
  <c-empty :icon-props="{ color: 'primary' }" :text-props="{ color: 'error' }" />
  <c-line color="primary" />
  <c-empty c="search" :button-props="{ text: '返回首页' }" />
  <c-line color="primary" />
  <c-empty>
    <c-text color="placeholder">slot</c-text>
  </c-empty>
  <c-line color="primary" />
</view>
</template>

<style lang="scss">
.page {
  padding-top: 1px;
}
</style>
