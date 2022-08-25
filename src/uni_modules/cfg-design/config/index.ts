import { mergeRight } from 'ramda'

const config = {
  css_unit: 'rpx'
}

export const setConfig = (cfg: Partial<typeof config>) => mergeRight(config, cfg)

export default config
