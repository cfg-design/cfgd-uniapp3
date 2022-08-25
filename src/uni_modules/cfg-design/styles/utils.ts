import config from '../config'

export declare type Sizes = Record<string, string | number>

export const toCssUnit = (value?: number | string): string => {
  if (!value) return ''

  value = value + ''

  return value.replace(/(\d+)($| )/g, `$1${config.css_unit}$2`)
}

export const getSize = (sizes: Sizes, value?: number | string) => toCssUnit(sizes[value + ''] || value)

export const getSizes = (sizes: Sizes, value?: number | string): string => {
  if (!value) return ''

  value = value + ''

  return / /.test(value)
    ? value.split(' ').map((item) => getSize(sizes, item)).join(' ')
    : getSize(sizes, value)
}