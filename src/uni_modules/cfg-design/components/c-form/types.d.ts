import type { HTMLAttributes } from 'vue'
import type { RuleItem, ValidateCallback, Values } from 'async-validator'
import type { UFormProps } from '../uni.d'
import type { FormItemProps } from '../c-form-item/types.d'

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
   * [FormItemProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/form.html#form-item-props) 。
   * 默认： `undefined`
   */
  item?: FormItemProps
}

export interface FormProps extends FormConfig {
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
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
