<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { DescriptionsProps, DescriptionField } from './types.d'
import { map, pick } from 'ramda'
import { computed } from 'vue'
import { omitProps, mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  props?: DescriptionsProps
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: DescriptionsProps['c']
  /**
   * c-row props
   */
  rowProps?: DescriptionsProps['rowProps']
  /**
   * c-col props
   */
  colProps?: DescriptionsProps['colProps']
  /**
   * label 对齐方式
   */
  labelAlign?: DescriptionsProps['labelAlign']
  /**
   * label 显示位置
   */
  labelPlacement?: DescriptionsProps['labelPlacement']
  /**
   * label 宽度
   */
  labelWidth?: DescriptionsProps['labelWidth']
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   */
  labelProps?: DescriptionsProps['labelProps']
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   */
  valueProps?: DescriptionsProps['valueProps']
  /**
   * 展示项
   */
  fields?: DescriptionsProps['fields']
  /**
   * 详情数据
   */
  detail?: DescriptionsProps['detail']
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const configs = useConfigs()

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))

const rowPropsC = computed(() => mergeProps({ gutter: 20 }, propsC.value.rowProps))

const pickFieldConfigByProps = pick(['colProps', 'labelAlign', 'labelPlacement', 'labelWidth', 'labelProps', 'valueProps'])

const fieldsC = computed(() => {
  const mergeItem = (item: DescriptionField) => {
    item = mergeProps({
      key: '',
      label: '',
      ...pickFieldConfigByProps(propsC.value)
    }, item)

    const colStyle: CSSProperties = {}
    const labelStyle: CSSProperties = {}

    if (item.labelPlacement === 'left') {
      colStyle.flexDirection = 'row'
      item.label += '：'
    }

    if (item.labelAlign) {
      labelStyle.flexDirection = 'column'
      labelStyle.textAlign = item.labelAlign
    }

    if (item.labelWidth) {
      labelStyle.width = item.labelWidth
      labelStyle.flexShrink = 0
    }

    return mergeProps({
      key: '',
      label: '',
      colProps: { cStyle: [colStyle] },
      labelProps: { cStyle: [labelStyle] }
    }, item)
  }
  return map(mergeItem, propsC.value.fields!)
})
</script>

<template>
<c-row :props="rowPropsC">
  <c-col v-for="item in fieldsC" :props="item.colProps" :key="item.key" :span="item.span">
    <c-text :props="item.labelProps" :text="item.label" />
    <c-text :props="item.valueProps" :text="propsC.detail[item.key]" />
  </c-col>
</c-row>
</template>
