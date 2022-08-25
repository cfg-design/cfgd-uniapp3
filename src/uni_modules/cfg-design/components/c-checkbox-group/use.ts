import type { Ref, InjectionKey } from 'vue'
import type { CheckboxGroupConfig, CheckboxGroupGetIndex, CheckboxGroupCheck } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'
import { toCssUnit } from '../../styles'

const configs = ref<Record<string, CheckboxGroupConfig>>({
  default: { checkbox: { viewBind: { style: [{ margin: toCssUnit('10 0') }] } } },
  row: {
    direction: 'row',
    checkbox: { viewBind: { style: [{ margin: toCssUnit('10 20 10 0') }] } }
  },
  right: {
    checkbox: {
      viewBind: { style: [{ margin: toCssUnit('10 0') }] },
      iconWrapBind: { style: [{ order: 2 }]}
    }
  }
})

export const setConfigs = (_configs: Record<string, CheckboxGroupConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs

export const checkboxGroupInjectionKeyDisabled: InjectionKey<Ref<boolean>> = Symbol()
export const checkboxGroupInjectionKeyCheckbox: InjectionKey<Ref<CheckboxGroupConfig['checkbox']>> = Symbol()
export const checkboxGroupInjectionKeyGetIndex: InjectionKey<CheckboxGroupGetIndex> = Symbol()
export const checkboxGroupInjectionKeyCheck: InjectionKey<CheckboxGroupCheck> = Symbol()
export const checkboxGroupInjectionKeyValue: InjectionKey<Ref<CheckboxGroupConfig['value']>> = Symbol()
