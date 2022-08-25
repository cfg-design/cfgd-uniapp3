import type { HTMLAttributes } from 'vue'
import type { RuleItem, ValidateCallback, Values } from 'async-validator'
import type { UFormProps } from '../uni.d'
import type { FormItemProps } from '../c-form-item/types.d'

export interface FormConfig {
  /**
   * form 组件的 Attributes 和 Props 。
   * 默认： `undefined`
   */
  formBind?: HTMLAttributes & UFormProps
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
   * 字体大小。 default 配置为 m。 useFontSizes() 可以查看配置数据。使用 setFontSizes() 进行配置。
   * 默认： `undefined`
   */
  size?: string | number
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: boolean
  /**
   * 是否不展示校验反馈。
   * 默认： `undefined`
   */
  noFeedback?: boolean
  /**
   * 是否不展示必填的星号。
   * 默认： `undefined`
   */
  noRequireMark?: boolean
  /**
   * 是否不显示表单项的下划线边框。
   * 默认： `undefined`
   */
  noBorderBottom?: boolean
  /**
   * 标签设置。
   * 默认： `undefined`
   */
  label?: Pick<FormItemProps, 'labelAlign' | 'labelPlacement' | 'labelBind' | 'labelJustify' | 'labelTextProps' | 'labelWidth'>
  /**
   * 是否不展示标签。
   * 默认： `undefined`
   */
  noLabel?: boolean
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
