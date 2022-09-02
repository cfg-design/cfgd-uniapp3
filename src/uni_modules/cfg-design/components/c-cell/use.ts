import type { CellConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'
import { toCssUnit } from '../../styles'

const configs = ref<Record<string, CellConfig>>({
  default: {
    iconProps: {
      textProps: { cStyle: [{ marginRight: toCssUnit(12) }] },
      size: 60
    },
    imageProps: {
      width: 60,
      height: 60,
      cClass: ['c-cell__image'], cStyle: [{ marginRight: toCssUnit(12) }]
    },
    avatarTextProps: {
      size: 60,
      color: '#f1f1f1',
      cClass: ['c-cell__avatar-text'], cStyle: [{ marginRight: toCssUnit(12) }]
    },
    avatarProps: {
      size: 60,
      imageProps: { cClass: ['c-cell__avatar'], cStyle: [{ marginRight: toCssUnit(12) }] }
    },
    rightIconProps: {
      color: 'tertiary',
      textProps: { cClass: ['c-cell__right-icon'], cStyle: [{ marginLeft: toCssUnit(8) }] }
    },
    labelProps: { cClass: ['c-cell__label'] },
    briefProps: { cClass: ['c-cell__brief'], color: 'tertiary' },
    valueProps: { cClass: ['c-cell__value'] },
  },
})

export const setConfigs = (_configs: Record<string, CellConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
