import type { HTMLAttributes } from 'vue'
import type { RuleItem, ValidateCallback, Values } from 'async-validator'
import type { UFormProps } from '../uni.d'
import type { FormItemConfig } from '../c-form-item/types.d'

export interface FormConfig extends UFormProps {
  cClass?: string | Record<string, any> | (string | Record<string, any>)[]
  cStyle?: HTMLAttributes['style']
  /**
   * 表单数据对象。
   * 默认： `undefined`
   */
  value?: Record<string, any>
  /**
   *
   * 验证表项的规则。详情查看 `async-validator` 。
   * 默认： `undefined`
   */
  rules?: FormRules
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: boolean
  /**
   * c-form-item config 。
   * 默认： `undefined`
   */
  item?: FormItemConfig
}

export interface FormProps extends FormConfig {
  /**
   * 配置名。使用 `useFormConfigs()` 查看配置数据。使用 `setFormConfigs()` 进行配置。
   * 默认： `default`
   */
  c?: string
}

export declare type ValidationTrigger = 'input' | 'change' | 'blur' | 'focus'

export interface FormItemRule extends RuleItem {
  trigger?: ValidationTrigger | ValidationTrigger[]
}

export declare type FormRule = FormItemRule | FormItemRule[]

export declare type FormRules = Record<string, FormRule>

export declare type FormValidateField = (field: string, callback?: ValidateCallback, trigger?: ValidationTrigger) => Promise<Values>
