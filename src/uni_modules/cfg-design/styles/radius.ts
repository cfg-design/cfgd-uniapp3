import type { Sizes } from './utils'
import { ref } from 'vue'

const radius = ref<Sizes>({
  xs: 6,
  s: 8,
  m: 16,
  l: 28,
})

export const setRadius = (_radius: Sizes) => {
  radius.value = { ...radius.value, ..._radius }
}

export const useRadius = () => radius
