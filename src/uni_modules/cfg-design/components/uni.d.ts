export interface UTextProps {
  /**
   * 文本是否可选。
   * App、H5、快手小程序
   */
  selectable?: boolean
  /**
   * 文本是否可选。
   * 微信小程序
   */
  userSelect?: boolean
  /**
   * 显示连续空格。
   * App、H5、微信小程序
   */
  space?: 'ensp' | 'emsp' | 'nbsp'
  /**
   * 是否解码。
   * App、H5、微信小程序
   */
  decode?: boolean
}

export interface UImageProps {
  /**
   * 图片资源地址
   */
  src?: string
  /**
   * 图片裁剪、缩放的模式
   */
  mode?: 'scaleToFill' | 'aspectFit' | 'aspectFill' | 'widthFix' | 'heightFix' | 'top' | 'bottom' | 'center' | 'left' | 'right' | 'top left' | 'top right' | 'bottom left' | 'bottom right'
  /**
   * 图片懒加载。只针对page与scroll-view下的image有效。
   * 微信小程序、百度小程序、字节跳动小程序、飞书小程序
   */
  lazyLoad?: boolean
  /**
   * 图片显示动画效果。
   * 仅App-nvue 2.3.4+ Android有效
   */
  fadeShow?: boolean
  /**
   * 在系统不支持webp的情况下是否单独启用webp。默认false，只支持网络资源。webp支持详见下面说明。
   * 微信小程序2.9.0
   */
  webp?: boolean
  /**
   * 开启长按图片显示识别小程序码菜单。
   * 微信小程序2.7.0
   */
  showMenuByLongpress?: boolean
  /**
   * 是否能拖动图片。
   * H5 3.1.1+、App（iOS15+）
   */
  draggable?: boolean
}

export interface UButtonProps {
  /**
   * 按钮的大小。
   */
  // size?: 'default' | 'mini'
  /**
   * 按钮的样式类型。
   */
  type?: 'primary' | 'default' | 'warn'
  /**
   * 按钮是否镂空，背景色透明。
   */
  plain?: boolean
  /**
   * 是否禁用。
   */
  disabled?: boolean
  /**
   * 名称前是否带 loading 图标。
   * H5、App(App-nvue 平台，在 ios 上为雪花，Android上为圆圈)。
   */
  loading?: boolean
  /**
   * 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件。
   */
  formType?: 'submit' | 'reset'
  /**
   * 开放能力。
   */
  openType?: 'feedback' | 'share' | 'getUserInfo' | 'contact' | 'getPhoneNumber' | 'launchApp' | 'openSetting' | 'chooseAvatar' | 'getAuthorize' | 'lifestyle' | 'contactShare' | 'openGroupProfile' | 'openGuildProfile' | 'openPublicProfile' | 'shareMessageToFriend' | 'addFriend' | 'addColorSign' | 'addGroupApp' | 'addToFavorites' | 'chooseAddress' | 'chooseInvoiceTitle' | 'login' | 'subscribe' | 'favorite' | 'watchLater' | 'openProfile'
  /**
   * 指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果。
   * App-nvue 平台暂不支持。
   */
  hoverClass?: string
  /**
   * 按住后多久出现点击态，单位毫秒。
   */
  hoverStartTime?: number
  /**
   * 手指松开后点击态保留时间，单位毫秒。
   */
  hoverStayTime?: number
  /**
   * 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效。
   * 微信小程序、QQ小程序。
   */
  appParameter?: string
  /**
   * 指定是否阻止本节点的祖先节点出现点击态。
   * 微信小程序。
   */
  hoverStopPropagation?: boolean
  /**
   * 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。
   * 微信小程序。
   */
  lang?: string
  /**
   * 会话来源，open-type="contact"时有效。
   * 微信小程序。
   */
  sessionFrom?: string
  /**
   * 会话内消息卡片标题，open-type="contact"时有效。
   * 微信小程序。
   */
  sendMessageTitle?: string
  /**
   * 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效	。
   * 微信小程序。
   */
  sendMessagePath?: string
  /**
   * 会话内消息卡片图片，open-type="contact"时有效。
   * 微信小程序。
   */
  sendMessageImg?: string
  /**
   * 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效。
   * 微信小程序。
   */
  showMessageCard?: boolean
  /**
   * 打开群资料卡时，传递的群号。
   * open-type="openGroupProfile"。
   * QQ小程序。
   */
  groupId?: string
  /**
   * 打开频道页面时，传递的频道号。
   * open-type="openGroupProfile"。
   * QQ小程序。
   */
  guildId?: string
  /**
   * 打开公众号资料卡时，传递的号码。
   * open-type="openGroupProfile"。
   * QQ小程序。
   */
  publicId?: string
}

export interface UFormProps {
  /**
   * 是否返回 formId 用于发送模板消息。
   * 微信小程序、支付宝小程序。
   */
  reportSubmit?: boolean
  /**
   * 等待一段时间（毫秒数）以确认 formId 是否生效。如果未指定这个参数，formId 有很小的概率是无效的（如遇到网络失败的情况）。指定这个参数将可以检测 formId 是否有效，以这个参数的时间作为这项检测的超时时间。如果失败，将返回 requestFormId:fail 开头的 formId。
   * 微信小程序2.6.2。
   */
  reportSubmitTimeout?: number
}

// https://uniapp.dcloud.net.cn/component/input.html
export interface UInputProps {
  /**
   * 输入框的初始内容。
   */
  value?: string
  /**
   * input 的类型。
   * H5 暂未支持动态切换，详见下方 Tips，请使用 v-if 进行整体切换。
   */
  type?: 'text' | 'number' | 'idcard' | 'digit' | 'tel' | 'safe-password' | 'nickname'
  /**
   * 文本区域的语义，根据类型自动填充。
   * 仅 App-nvue-iOS 支持。
   */
  textContentType?: 'oneTimeCode'
  /**
   * 是否是密码类型。
   * H5和App写此属性时，type失效。
   */
  password?: boolean
  /**
   * 输入框为空时占位符。
   */
  placeholder?: string
  /**
   * 指定 placeholder 的样式。
   */
  placeholderStyle?: string
  /**
   * 指定 placeholder 的样式类，注意页面或组件的style中写了scoped时，需要在类名使用`:deep`。
   * 字节跳动小程序、飞书小程序、快手小程序不支持。
   */
  placeholderClass?: string
  /**
   * 是否禁用。
   */
  disabled?: boolean
  /**
   * 最大输入长度，设置为 -1 的时候不限制最大长度。默认 140。
   */
  maxlength?: number
  /**
   * 指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离。
   * App、微信小程序、百度小程序、QQ小程序、京东小程序。
   */
  cursorSpacing?: number
  /**
   * 指定focus时的光标位置。
   */
  cursor?: number
  /**
   * 获取焦点。
   * 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点。
   */
  focus?: boolean
  /**
   * 设置键盘右下角按钮的文字，仅在 type="text" 时生效。
   * 微信小程序、App、H5、快手小程序、京东小程序。
   */
  confirmType?: 'send' | 'search' | 'next' | 'go' | 'done'
  /**
   * 点击键盘右下角按钮时是否保持键盘不收起。
   * App(3.3.7+)、H5 (3.3.7+)、微信小程序、支付宝小程序、百度小程序、QQ小程序、京东小程序。
   */
  confirmHold?: boolean
  /**
   * 光标起始位置，自动聚集时有效，需与selection-end搭配使用。
   */
  selectionStart?: number
  /**
   * 光标结束位置，自动聚集时有效，需与selection-start搭配使用。
   */
  selectionEnd?: number
  /**
   * 键盘弹起时，是否自动上推页面。
   * App-Android（vue 页面 softinputMode 为 adjustResize 时无效，使用 x5 内核时无效）、微信小程序、百度小程序、QQ小程序、京东小程序。
   */
  adjustPosition?: boolean
  /**
   * focus时，点击页面的时候不收起键盘。
   * 微信小程序2.8.2。
   */
  holdKeyboard?: boolean
  /**
   * 键盘收起时，是否自动失去焦点。
   * App-Vue 3.0.0+。
   */
  autoBlur?: boolean
  /**
   * 是否忽略组件内对文本合成系统事件的处理。为 false 时将触发 compositionstart、compositionend、compositionupdate 事件，且在文本合成期间会触发 input 事件。
   * App-vue (3.4.4+)、H5 (3.4.4+)、App-nvue不支持。
   */
  ignoreCompositionEvent?: boolean
  /**
   * 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)。
   * 微信小程序 2.10.4+。
   */
  alwaysEmbed?: boolean
  /**
   * 安全键盘加密公钥的路径，只支持包内路径。
   * 微信小程序 2.18.0+。
   */
  safePasswordCertPath?: string
  /**
   * 安全键盘输入密码长度。
   * 微信小程序 2.18.0+。
   */
  safePasswordLength?: number
  /**
   * 安全键盘加密时间戳。
   * 微信小程序 2.18.0+。
   */
  safePasswordTimeStamp?: number
  /**
   * 安全键盘加密盐值。
   * 微信小程序 2.18.0+。
   */
  safePasswordNonce?: string
  /**
   * 安全键盘计算 hash 盐值，若指定custom-hash 则无效。
   * 微信小程序 2.18.0+。
   */
  safePasswordSalt?: string
  /**
   * 安全键盘计算 hash 的算法表达式，如 md5(sha1('foo' + sha256(sm3(password + 'bar'))))。
   * 微信小程序 2.18.0+。
   */
  safePasswordCustomHash?: string
  /**
   * 当 type 为 number, digit, idcard 数字键盘是否随机排列。
   * 支付宝小程序 1.9.0+。
   */
  randomNumber?: boolean
  /**
   * 是否为受控组件。为 true 时，value 内容会完全受 setData 控制。
   * 支付宝小程序 1.9.0+。
   */
  controlled?: boolean
  /**
   * 是否强制使用系统键盘和 Web-view 创建的 input 元素。为 true 时，confirm-type、confirm-hold 可能失效。
   * 支付宝小程序 2.7.3+。
   */
  alwaysSystem?: boolean
}

/**
 * https://uniapp.dcloud.net.cn/component/textarea.html
 */
export interface UTextareaProps {
  /**
   * 输入框的内容
   */
  value?: string
  /**
   * 输入框为空时占位符
   */
  placeholder?: string
  /**
   * 指定 placeholder 的样式
   */
  placeholderStyle?: string
  /**
   * 指定 placeholder 的样式类，注意页面或组件的style中写了scoped时，需要在类名使用`:deep`。
   * 字节跳动小程序、飞书小程序、快手小程序不支持
   */
  placeholderClass?: string
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 最大输入长度，设置为 -1 的时候不限制最大长度
   */
  maxlength?: number
  /**
   * 获取焦点。
   * 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点
   */
  focus?: boolean
  /**
   * 自动聚焦，拉起键盘。
   * 京东小程序
   */
  autoFocus?: boolean
  /**
   * 是否自动增高，设置auto-height时，style.height不生效。
   */
  autoHeight?: boolean
  /**
   * 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true。
   * 微信小程序、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、快手小程序、京东小程序
   */
  fixed?: boolean
  /**
   * 指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离。
   * App、微信小程序、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、京东小程序
   */
  cursorSpacing?: number
  /**
   * 指定focus时的光标位置。
   * 微信小程序、App、H5、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、京东小程序
   */
  cursor?: number
  /**
   * 设置键盘右下角按钮的文字
   * 微信小程序基础库2.13.0+、App-vue和H5(2.9.9+，且要求设备webview内核Chrome81+、Safari13.7+)
   */
  confirmType?: 'send' | 'search' | 'next' | 'go' | 'done'
  /**
   * 点击键盘右下角按钮时是否保持键盘不收起。
   * App(3.3.7+)、H5 (3.3.7+)、微信小程序 (基础库 2.16.0+)、百度小程序 (基础库 3.130.1+)、快手小程序
   */
  confirmHold?: boolean
  /**
   * 是否显示键盘上方带有”完成“按钮那一栏。
   * 微信小程序、百度小程序、QQ小程序、京东小程序
   */
  showConfirmBar?: boolean
  /**
   * 光标起始位置，自动聚焦时有效，需与selection-end搭配使用。
   * 微信小程序、App、H5、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、京东小程序
   */
  selectionStart?: number
  /**
   * 光标结束位置，自动聚焦时有效，需与selection-start搭配使用。
   * 微信小程序、App、H5、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、京东小程序
   */
  selectionEnd?: number
  /**
   * 键盘弹起时，是否自动上推页面。
   * App-Android（softinputMode 为 adjustResize 时无效）、微信小程序、百度小程序、QQ小程序、京东小程序
   */
  adjustPosition?: boolean
  /**
   * 是否去掉 iOS 下的默认内边距。
   * 微信小程序2.10.0、飞书小程序 3.46
   */
  disableDefaultPadding?: boolean
  /**
   * focus时，点击页面的时候不收起键盘。
   * 微信小程序2.8.2
   */
  holdKeyboard?: boolean
  /**
   * 键盘收起时，是否自动失去焦点。
   * App-vue 3.0.0+ ，App-nvue不支持
   */
  autoBlur?: boolean
  /**
   * 是否忽略组件内对文本合成系统事件的处理。为 false 时将触发 compositionstart、compositionend、compositionupdate 事件，且在文本合成期间会触发 input 事件。
   * App-vue (3.4.4+)、H5 (3.4.4+)、App-nvue不支持
   */
  ignoreCompositionEvent?: boolean
}
