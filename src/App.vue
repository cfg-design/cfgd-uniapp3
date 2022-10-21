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
  /* #ifdef H5 */
  min-height: calc(100vh - 44px);
  /* #endif */
  /* #ifndef H5 */
  min-height: 100vh;
  /* #endif */
  box-sizing: border-box;
  background-color: #f2f6f8;
  font-family: Avenir,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji",sans-serif;
}

::-webkit-scrollbar {
  display: none;
  width: 0!important;
  height: 0!important;
  -webkit-appearance: none;
  background: transparent;
}

/* #ifdef MP */
.c-tabs-equal {
  c-tab-item {
    width: 100%;
  }
}
/* #endif */
</style>
