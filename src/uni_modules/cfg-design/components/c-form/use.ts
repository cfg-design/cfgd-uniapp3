import type { Ref, InjectionKey } from 'vue'
import type { ValidateFieldsError } from 'async-validator'
import type { FormItemConfig } from '../c-form-item/types.d'
import type { FormConfig, FormRules, FormValidateField, FormItemRule, FormRule, ValidationTrigger } from './types.d'
import { ref } from 'vue'
import { mergeRight, is, find } from 'ramda'

const configs = ref<Record<string, FormConfig>>({
  default: {},
})

export const setConfigs = (_configs: Record<string, FormConfig>) => {
  configs.value = mergeRight(configs.value, _configs)
}

export const useConfigs = () => configs

export const formInjectionKeyRules: InjectionKey<Ref<FormRules>> = Symbol()
export const formInjectionKeyDisabled: InjectionKey<Ref<boolean>> = Symbol()
export const formInjectionKeyItemConfig: InjectionKey<Ref<FormItemConfig>> = Symbol()
export const formInjectionKeyFieldsErrors: InjectionKey<Ref<ValidateFieldsError>> = Symbol()
export const formInjectionKeyValidateField: InjectionKey<FormValidateField> = Symbol()

export const triggerIncludes = (ts: FormItemRule['trigger'], t: ValidationTrigger) => is(String, ts) ? ts === t : !!ts && ts.includes(t)

export const hasTrigger = (rule: FormRule | undefined, t: ValidationTrigger) => rule
  ? is(Array, rule)
  ? !!find((item) => triggerIncludes(item.trigger, t), rule)
  : triggerIncludes(rule.trigger, t)
  : false
