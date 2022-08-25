import { ref } from 'vue'

const colors = ref<Record<string, string>>({
  main: '#333',
  secondary: '#666',
  tertiary: '#999',
  primary: '#1890ff',
  success: '#52c41a',
  warning: '#faad14',
  error: '#f5222d',
  placeholder: '#bfbfbf'
})

export const setColors = (_colors: Record<string, string>) => {
  colors.value = { ...colors.value, ..._colors }
}

export const useColors = () => colors
