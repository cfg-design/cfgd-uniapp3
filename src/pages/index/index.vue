<template>
  <view class="page">
    <c-cell
      icon="checkbox-blank-fill"
      :icon-props="{ color: 'primary' }"
      label="颜色"
      right-icon="arrow-right-s-line"
      @click="goPage('colors')"
    />
    <template v-for="(cells, key) in list" :key="key">
      <c-text c="h5" :c-style="[{ padding: '20rpx' }]">{{ key }}</c-text>
      <template v-for="(cell, _key) in cells" :key="_key">
        <c-cell :props="cell" right-icon="arrow-right-s-line" @click="goPage(_key)" />
        <c-line round />
      </template>
    </template>
  </view>
</template>

<script setup lang="ts">
import type { CellProps } from '@/uni_modules/cfg-design'
import { useColors } from '@/uni_modules/cfg-design'
import icons from '@/uni_modules/cfg-design/components/c-icon/icons'

const colors = useColors()

const imageSrc = 'http://pic.kaiweixin.cn/upload/micropay/goods/picture/201606/02-161857-574febf17eae3.jpg?imageView2/1/w/160/h/120/format/webp/q/100'

const list: Record<string, Record<string, CellProps>> = {
  '通用组件': {
    text: { label: 'Text 文本', avatarText: 'T' },
    icon: { label: 'Icon 图标', icon: 'home-smile-2-line' },
    button: { label: 'Button 按钮', avatarText: 'B', avatarTextProps: { color: colors.value.primary, textColor: '#fff' } },
    cell: { label: 'Cell 单元格', avatarText: 'C' },
    spin: { label: 'Spin 加载', icon: 'loader-5-line' },
    image: { label: 'Image 图片', image: imageSrc },
    avatar: { label: 'Avatar 头像', avatar: imageSrc, avatarProps: { round: true } },
    line: { label: 'Line 线条', icon: 'subtract-line' },
    badge: { label: 'Badge 徽标', avatarText: 'B', avatarTextProps: { color: colors.value.error, textColor: '#fff' } },
    tag: { label: 'Tag 标签', avatarText: '标', avatarTextProps: { color: colors.value.warning, textColor: '#fff' } },
  },
  '数据录入组件': {
    form: { label: 'Form 表单', avatarText: 'F', avatarTextProps: { color: colors.value.success, textColor: '#fff' } },
    input: { label: 'Input 输入框', avatarText: '|', avatarTextProps: { color: colors.value.main, textColor: '#fff' } },
    inputNumber: { label: 'InputNumber 数字输入', avatarText: 'N', avatarTextProps: { color: '#f2f2f2', textColor: colors.value.main } },
    textarea: { label: 'Textarea 多行输入框', avatarText: '_', avatarTextProps: { color: colors.value.main, textColor: '#fff' } },
    checkbox: { label: 'Checkbox 复选框', avatarText: icons['check-line'], avatarTextProps: { color: colors.value.primary, textColor: '#fff', textProps: { cStyle: [{ fontFamily: 'c-icon' }] } } },
    radio: { label: 'Radio 单选框', avatarText: icons['check-line'], avatarTextProps: { color: colors.value.primary, round: true, textColor: '#fff', textProps: { cStyle: [{ fontFamily: 'c-icon' }] } } },
    switch: { label: 'Switch 开关', avatarText: 'S', avatarTextProps: { color: colors.value.primary, textColor: '#fff' } },
  },
  '数据展示组件': {
    empty: { label: 'Empty 无内容', icon: 'empty-data' },
  },
  '导航组件': {
    navBar: { label: 'NavBar 导航栏', icon: 'arrow-left-s-line' },
    tabBar: { label: 'TabBar 底部导航栏', icon: 'user-5-fill', iconProps: { color: colors.value.primary } },
    tabs: { label: 'Tabs 标签页', avatarText: 'T', avatarTextProps: { color: colors.value.primary, textColor: '#fff' } },
  },
  '反馈组件': {
    progress: { label: 'Progress 进度条', avatarText: '%', avatarTextProps: { color: colors.value.primary, textColor: '#fff' } },
    loadMore: { label: 'LoadMore 加载更多', avatarText: '更' },
  },
  '布局组件': {
    grid: { label: 'Grid 栅格', avatarText: 'G', avatarTextProps: { color: colors.value.primary, textColor: '#fff' } },
    topBar: { label: 'TopBar 顶部栏', avatarText: 'T' },
    bottomBar: { label: 'BottomBar 底部栏', avatarText: 'B' },
  }
}

const goPage = (key: string) => uni.navigateTo({ url: `/pages/${key}/index` })
</script>

<style lang="scss">
.page {
  padding: 1px 0 20rpx;
}

</style>
