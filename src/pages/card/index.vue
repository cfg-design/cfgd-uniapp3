<template>
  <view class="page">
    <c-row gutter="20" vertical>
      <c-col>
        <c-card>
          <c-text text="card" />
        </c-card>
      </c-col>
      <c-col>
        <c-card title="title" extra="extra">
          <c-text text="body" />
          <template #footer>
            <c-text text="#footer" />
          </template>
        </c-card>
      </c-col>
      <c-col>
        <c-card>
          <template #header>
            <c-text text="#header" />
          </template>
          <c-text text="body" />
          <template #footer>
            <c-text text="#footer" />
          </template>
        </c-card>
      </c-col>
      <c-col>
        <c-card title="title">
          <c-text text="body" />
          <template #extra>
            <c-text text="#extra" />
          </template>
        </c-card>
      </c-col>
      <c-col>
        <c-card title="title" extra="extra" size="l" :extra-props="{ color: 'error' }">
          <c-text text="body" />
          <template #footer>
            <c-text text="#footer" />
          </template>
        </c-card>
      </c-col>
      <c-col>
        <c-card title="title" extra="extra" size="2xl" :extra-props="{ color: 'success' }">
          <c-text text="body" />
          <template #footer>
            <c-text text="#footer" />
          </template>
        </c-card>
      </c-col>
      <c-col>
        <c-card title="title" extra="extra" :body-style="{ padding: 0 }">
          <c-text text="body" />
          <template #footer>
            <c-text text="#footer" />
          </template>
        </c-card>
      </c-col>
      <c-col>
        <c-card title="title" extra="extra" radius="s">
          <c-text text="body" />
          <template #footer>
            <c-text text="#footer" />
          </template>
        </c-card>
      </c-col>
      <c-col>
        <c-card title="title" extra="extra" radius="l">
          <c-text text="body" />
          <template #footer>
            <c-text text="#footer" />
          </template>
        </c-card>
      </c-col>
    </c-row>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.page {
  padding: 20rpx;
}
</style>
