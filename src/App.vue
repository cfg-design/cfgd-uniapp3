<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app"
onLaunch(() => {
  console.log("App Launch")
})
onShow(() => {
  console.log("App Show")
})
onHide(() => {
  console.log("App Hide")
})
</script>

<style lang="scss">
@import url('@/uni_modules/cfg-design/components/c-icon/iconfont.css');
@import url('@/uni_modules/cfg-design/styles/mp.scss');

.page {
  box-sizing: border-box;
  min-height: calc(100vh - 44px);
  background-color: #f2f6f8;
}

::-webkit-scrollbar {
  display: none;
  width: 0!important;
  height: 0!important;
  -webkit-appearance: none;
  background: transparent;
}
</style>
