import { createSSRApp } from 'vue'
import App from './App.vue'
import i18n from './plugins/i18n'
import { icons, setIcons } from '@/uni_modules/cfg-design'

setIcons(icons)

export function createApp() {
  const app = createSSRApp(App)
  app.use(i18n)

  return {
    app,
  }
}
