import type { Ref, InjectionKey } from 'vue'
import type { CheckboxProps } from '../c-checkbox/types.d'
import type { CheckboxGroupConfig, CheckboxGroupGetIndex, CheckboxGroupCheck } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'
import { toCssUnit } from '../../styles'

const configs = ref<Record<string, CheckboxGroupConfig>>({
  default: {},
  row: {
    direction: 'row',
    checkbox: { cStyle: [{ margin: toCssUnit('10 20 10 0') }] }
  },
  right: {
    checkbox: { cStyle: { justifyContent: 'space-between' }, iconWrapStyle: [{ order: 2, marginRight: '0' }] }
  }
})

export const setConfigs = (_configs: Record<string, CheckboxGroupConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs

export const checkboxGroupInjectionKeyDisabled: InjectionKey<Ref<boolean>> = Symbol()
export const checkboxGroupInjectionKeyCheckboxProps: InjectionKey<Ref<CheckboxProps>> = Symbol()
export const checkboxGroupInjectionKeyGetIndex: InjectionKey<CheckboxGroupGetIndex> = Symbol()
export const checkboxGroupInjectionKeyCheck: InjectionKey<CheckboxGroupCheck> = Symbol()
export const checkboxGroupInjectionKeyValue: InjectionKey<Ref<CheckboxGroupConfig['value']>> = Symbol()
