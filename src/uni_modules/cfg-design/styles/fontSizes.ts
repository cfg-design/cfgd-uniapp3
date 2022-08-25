import type { Sizes } from './utils'
import { ref } from 'vue'

const fontSizes = ref<Sizes>({
  xs: 20,
  s: 24,
  m: 28,
  l: 32,
  xl: 36,
  '2xl': 40,
  '3xl': 44,
  '4xl': 48,
  '5xl': 52,
  '6xl': 56,
  '7xl': 60,
  '8xl': 64
})

export const setFontSizes = (_fontSizes: Sizes) => {
  fontSizes.value = { ...fontSizes.value, ..._fontSizes }
}

export const useFontSizes = () => fontSizes
