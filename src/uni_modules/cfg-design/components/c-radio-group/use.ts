import type { Ref, InjectionKey } from 'vue'
import type { ValidateError } from 'async-validator'
import type { RadioGroupConfig, RadioGroupGetIndex, RadioGroupUpdateValue } from './types.d'
import { ref } from 'vue'
import { mergeRight } from 'ramda'
import { toCssUnit } from '../../styles'

const configs = ref<Record<string, RadioGroupConfig>>({
  default: { radio: { viewBind: { style: [{ margin: toCssUnit('10 0') }] } } },
  row: {
    direction: 'row',
    radio: { viewBind: { style: [{ margin: toCssUnit('10 20 10 0') }] } }
  },
  right: {
    radio: {
      viewBind: { style: [{ margin: toCssUnit('10 0') }] },
      iconWrapBind: { style: [{ order: 2 }]}
    }
  }
})

export const setConfigs = (_configs: Record<string, RadioGroupConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs

export const radioGroupInjectionKeyDisabled: InjectionKey<Ref<boolean>> = Symbol()
export const radioGroupInjectionKeyRadio: InjectionKey<Ref<RadioGroupConfig['radio']>> = Symbol()
export const radioGroupInjectionKeyGetIndex: InjectionKey<RadioGroupGetIndex> = Symbol()
export const radioGroupInjectionKeyUpdateValue: InjectionKey<RadioGroupUpdateValue> = Symbol()
export const radioGroupInjectionKeyValue: InjectionKey<Ref<RadioGroupConfig['value']>> = Symbol()
export const radioGroupInjectionKeyValidateErrors: InjectionKey<Ref<ValidateError[] | undefined>> = Symbol()
