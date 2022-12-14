import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const config: UserConfig = {
    plugins: [uni()],
    server: {
      port: 3000
    }
  }

  switch (mode) {
    case 'embed':
      config.base = './'
      break
    case 'report':
      config.plugins!.push(
        visualizer(() => ({
          filename: 'report.html'
        }))
      )
      break
  }

  return config
});
