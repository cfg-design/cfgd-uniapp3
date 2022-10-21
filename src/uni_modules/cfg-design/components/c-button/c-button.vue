<script setup lang="ts">
import type { CSSProperties, HTMLAttributes } from 'vue'
import type { ButtonProps } from './types.d'
import { computed } from 'vue'
import { useColors, useRadius, useFontSizes, getSize, getSizes, toCssUnit } from '../../styles'
import { getPropsBoolean, omitProps, mergeProps } from '../../utils'
import { useConfigs } from './use'

interface Props {
  props?: ButtonProps
  cClass?: ButtonProps['cClass']
  cStyle?: ButtonProps['cStyle']
  /**
   * 配置名，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/props.html) 。
   * 默认： `default`
   */
  c?: ButtonProps['c']
  /**
   * 用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件
   * 默认： `undefined`
   */
  formType?: ButtonProps['formType']
  /**
   * 颜色，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/colors.html) 。
   * 默认： undefined
   */
  color?: ButtonProps['color']
  /**
   * 渐变结束颜色，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/colors.html) 。
   * 默认： undefined
   */
  color2?: ButtonProps['color2']
  /**
   * 字体大小，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/font-sizes.html) 。
   * 默认： undefined
   */
  size?: ButtonProps['size']
  /**
   * 宽度
   * 默认： `undefined`
   */
  width?: ButtonProps['width']
  /**
   * 高度
   * 默认： `undefined`
   */
  height?: ButtonProps['height']
  /**
   * 文字
   * 默认： `undefined`
   */
  text?: ButtonProps['text']
  /**
   * 文字的颜色，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/colors.html) 。
   * 默认： `undefined`
   */
  textColor?: ButtonProps['textColor']
  /**
   * [TextProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/text.html#props) 。
   * 默认： `undefined`
   */
  textProps?: ButtonProps['textProps']
  /**
   * 图标。
   * 默认： `undefined`
   */
  icon?: ButtonProps['icon']
  /**
   * [IconProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/icon.html#props) 。
   * 默认： `undefined`
   */
  iconProps?: ButtonProps['iconProps']
  /**
   * 圆角值，[使用说明](https://cfg-design.github.io/cfgd-uniapp3-docs/guide/radiuses.html) 。
   * 默认： `undefined`
   */
  radius?: ButtonProps['radius']
  /**
   * 是否显示为圆形。
   * 默认： `undefined`
   */
  round?: ButtonProps['round']
  /**
   * 是否禁用。
   * 默认： `undefined`
   */
  disabled?: ButtonProps['disabled']
  /**
   * 是否加载。
   * 默认： `undefined`
   */
  loading?: ButtonProps['loading']
  /**
   * [SpinProps](https://cfg-design.github.io/cfgd-uniapp3-docs/components/spin.html#props) 。
   * 默认： `undefined`
   */
  spinProps?: ButtonProps['spinProps']
  /**
   * 是否镂空。
   * 默认： `undefined`
   */
  plain?: ButtonProps['plain']
  /**
   * 开放能力。
   */
  openType?: ButtonProps['openType']
  /**
   * 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果。
   * App-nvue 平台暂不支持。
   */
  hoverClass?: ButtonProps['hoverClass']
  /**
   * 按住后多久出现点击态，单位毫秒。
   */
  hoverStartTime?: ButtonProps['hoverStartTime']
  /**
   * 手指松开后点击态保留时间，单位毫秒。
   */
  hoverStayTime?: ButtonProps['hoverStayTime']
  /**
   * 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效。
   * 微信小程序、QQ小程序。
   */
  appParameter?: ButtonProps['appParameter']
  /**
   * 指定是否阻止本节点的祖先节点出现点击态。
   * 微信小程序。
   */
  hoverStopPropagation?: ButtonProps['hoverStopPropagation']
  /**
   * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。
   * 微信小程序。
   */
  lang?: ButtonProps['lang']
  /**
   * 会话来源，open-type="contact"时有效。
   * 微信小程序。
   */
  sessionFrom?: ButtonProps['sessionFrom']
  /**
   * 会话内消息卡片标题，open-type="contact"时有效。
   * 微信小程序。
   */
  sendMessageTitle?: ButtonProps['sendMessageTitle']
  /**
   * 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效	。
   * 微信小程序。
   */
  sendMessagePath?: ButtonProps['sendMessagePath']
  /**
   * 会话内消息卡片图片，open-type="contact"时有效。
   * 微信小程序。
   */
  sendMessageImg?: ButtonProps['sendMessageImg']
  /**
   * 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效。
   * 微信小程序。
   */
  showMessageCard?: ButtonProps['showMessageCard']
  /**
   * 打开群资料卡时，传递的群号。
   * open-type="openGroupProfile"。
   * QQ小程序。
   */
  groupId?: ButtonProps['groupId']
  /**
   * 打开频道页面时，传递的频道号。
   * open-type="openGroupProfile"。
   * QQ小程序。
   */
  guildId?: ButtonProps['guildId']
  /**
   * 打开公众号资料卡时，传递的号码。
   * open-type="openGroupProfile"。
   * QQ小程序。
   */
  publicId?: ButtonProps['publicId']
}

interface Emits {
  (e: 'click', payload: MouseEvent): void
}

const props = withDefaults(defineProps<Props>(), { c: 'default' })
const emits = defineEmits<Emits>()
const configs = useConfigs()
const colors = useColors()
const fontSizes = useFontSizes()
const radiuses = useRadius()

const props1 = computed(() => props.props ? mergeProps(props.props, omitProps(props)) : props)
const propsC = computed(() => mergeProps(configs.value[props1.value.c!], props1.value))
const colorC1 = computed<CSSProperties['color']>(() => {
  const { color } = propsC.value
  return color ? colors.value[color] || color : undefined
})
const colorC2 = computed<CSSProperties['color']>(() => {
  const { color2 } = propsC.value
  return color2 ? colors.value[color2] || color2 : undefined
})
const sizeC = computed(() => getSize(fontSizes.value, propsC.value.size || 'm'))
const radius1 = computed(() => propsC.value.radius !== undefined ? propsC.value.radius : 's')
const radius2 = computed(() => getSizes(radiuses.value, radius1.value))
const roundC = computed(() => getPropsBoolean(propsC.value.round))
const radiusC = computed(() => roundC.value ? '9999px' : radius2.value)
const plainC = computed(() => getPropsBoolean(propsC.value.plain))
const loadingC = computed(() => getPropsBoolean(propsC.value.loading))
const disabledC = computed(() => getPropsBoolean(propsC.value.disabled))
const height = computed(() => toCssUnit(propsC.value.height) || `calc(${sizeC.value} * 2.5)`)
const padding = computed(() => `calc(${sizeC.value} * 0.75)`)
const spanWidth = computed(() => sizeC.value.replace(/\d+/, (v) => Math.floor(Number(v) * 0.3) + ''))
const fontColorC = computed(() => propsC.value.textColor || (colorC1.value ? plainC.value ? colorC1.value : '#fff' : colors.value.main))
const hoverClassC = computed(() => {
  const hoverClassD = 'c-button__click'
  const { hoverClass } = propsC.value
  return hoverClass && hoverClass != 'none' ? `${hoverClassD} ${hoverClass}` : hoverClassD
})
const backgroundColor = computed(() => plainC.value ? 'transparent' : (colorC1.value || '#fff'))
const backgroundImage = computed(() => plainC.value
  ? undefined
  : colorC2.value
  ? `linear-gradient(to right, ${colorC1.value}, ${colorC2.value})`
  : undefined
)

const textStyle = computed(() => {
  const result: CSSProperties = {}
  if (propsC.value.icon && propsC.value.text) {
    result.marginLeft = spanWidth.value
  }
  return result
})

const style1 = computed<CSSProperties>(() => {
  const result: CSSProperties = {}

  if (propsC.value.width) {
    result.width = toCssUnit(propsC.value.width)
  }

  if (height.value) {
    result.height = height.value
  }

  if (padding.value) {
    result.paddingRight = padding.value
    result.paddingLeft = padding.value
  }

  if (radiusC.value) {
    result.borderRadius = radiusC.value
  }

  if (backgroundImage.value) {
    result.backgroundImage = backgroundImage.value
  }

  if (backgroundColor.value) {
    result.backgroundColor = backgroundColor.value
  }

  if (plainC.value) {
    result.borderColor = colorC1.value
  } else if (colorC2.value || colorC1.value) {
    result.borderWidth = '0'
  }

  return result
})

const styleC = computed(() => mergeProps({ x: [style1.value] }, { x: propsC.value.cStyle }).x)

const classC = computed(() => mergeProps({ x: ['c-button', { 'c-button__disabled': disabledC.value }] }, { x: propsC.value.cClass }).x)

const onClick = (e: MouseEvent) => emits('click', e)
</script>

<template>
<button
  :class="classC"
  :style="styleC"
  :hover-class="hoverClassC"
  :type="(propsC.type as any)"
  :disabled="disabledC || propsC.loading"
  :form-type="propsC.formType"
  :open-type="propsC.openType"
  :hover-start-time="propsC.hoverStartTime || 20"
  :hover-stay-time="propsC.hoverStayTime || 70"
  :app-parameter="propsC.appParameter"
  :hover-stop-propagation="getPropsBoolean(propsC.hoverStopPropagation)"
  :lang="propsC.lang"
  :session-from="propsC.sessionFrom"
  :send-message-title="propsC.sendMessageTitle"
  :send-message-path="propsC.sendMessagePath"
  :send-message-img="propsC.sendMessageImg"
  :show-message-card="getPropsBoolean(propsC.showMessageCard)"
  :group-id="propsC.groupId"
  :guild-id="propsC.guildId"
  :public-id="propsC.publicId"
  @click="onClick"
  @getphonenumber="(p: any) => $emit('getphonenumber', p)"
  @getuserinfo="(p: any) => $emit('getuserinfo', p)"
  @error="(p: any) => $emit('error', p)"
  @opensetting="(p: any) => $emit('opensetting', p)"
  @launchapp="(p: any) => $emit('launchapp', p)"
  @contact="(p: any) => $emit('contact', p)"
  @chooseavatar="(p: any) => $emit('chooseavatar', p)"
  @addgroupapp="(p: any) => $emit('addgroupapp', p)"
  @chooseaddress="(p: any) => $emit('chooseaddress', p)"
  @chooseinvoicetitle="(p: any) => $emit('chooseinvoicetitle', p)"
  @subscribe="(p: any) => $emit('subscribe', p)"
  @login="(p: any) => $emit('login', p)"
>
  <c-spin v-if="loadingC" :props="{ size: sizeC, color: fontColorC, direction: 'row', ...propsC.spinProps }" />
  <template v-else-if="propsC.text || propsC.icon">
    <c-icon v-if="propsC.icon" :props="{ size: sizeC, color: fontColorC, ...propsC.iconProps }" :name="propsC.icon"/>
    <c-text
      v-if="propsC.text"
      :props="propsC.textProps"
      :size="propsC.size"
      :color="fontColorC"
      :c-style="textStyle"
      :text="propsC.text"
    />
  </template>
  <template v-else><slot /></template>
</button>
</template>

<style lang="scss" scoped>
.c-button {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */

  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 0;
  border-width: 1px;
  border-style: solid;
  border-color: #ebedf0;
  line-height: 1;
  position: relative;
  overflow: hidden;

  &::after,
  &::before {
    /* #ifndef APP-NVUE */
    display: none;
    /* #endif */
    opacity: 0;
  }

  &::after {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    border-width: 0;
    border-radius: 0;
    transform: none;
  }

  &__click {
    &::after {
      /* #ifndef APP-NVUE */
      display: flex;
      /* #endif */

      content: ' ';
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  &__disabled {
    opacity: 0.6;
    cursor: no-drop;
  }
}
</style>
