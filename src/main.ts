import './plugins/cfg-design'

import { createSSRApp } from 'vue'
import i18n from './plugins/i18n'
import App from './App.vue'
import { setIcons } from '@/uni_modules/cfg-design'
import icons from '@/uni_modules/cfg-design/components/c-icon/icons'

setIcons('c-icon', icons)

export function createApp() {
  const app = createSSRApp(App)
  app.use(i18n)

  return {
    app,
  }
}
