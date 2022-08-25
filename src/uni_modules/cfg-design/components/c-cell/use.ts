import type { CellConfig } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'
import { toCssUnit } from '../../styles'

const configs = ref<Record<string, CellConfig>>({
  default: {
    viewBind: { style: [{ padding: toCssUnit(20), minHeight: toCssUnit(100) }] },
    iconProps: {
      textProps: {
        textBind: { class: ['c-cell__icon'], style: [{ marginRight: toCssUnit(12) }] },
        size: 60
      }
    },
    imageProps: {
      width: 60,
      height: 60,
      viewBind: { class: ['c-cell__image'], style: [{ marginRight: toCssUnit(12) }] }
    },
    avatarTextProps: {
      size: 60,
      color: '#f1f1f1',
      viewBind: { class: ['c-cell__avatar-text'], style: [{ marginRight: toCssUnit(12) }] }
    },
    avatarProps: {
      size: 60,
      ImageProps: { viewBind: { class: ['c-cell__avatar'], style: [{ marginRight: toCssUnit(12) }] } }
    },
    rightIconProps: {
      color: 'tertiary',
      textProps: { textBind: { class: ['c-cell__right-icon'], style: [{ marginLeft: toCssUnit(8) }] } }
    },
    labelProps: { textBind: { class: ['c-cell__label'] } },
    briefProps: { textBind: { class: ['c-cell__brief'] }, color: 'tertiary' },
    valueProps: { textBind: { class: ['c-cell__value'] } },
  },
})

export const setConfigs = (_configs: Record<string, CellConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs
