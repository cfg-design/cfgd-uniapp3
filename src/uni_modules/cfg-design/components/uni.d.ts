export interface UViewProps {
  hoverClass?: string
  hoverStopPropagation?: boolean
  hoverStartTime?: number
  hoverStayTime?: number
}

export interface UTextProps {
  selectable?: boolean
  userSelect?: boolean
  space?: 'ensp' | 'emsp' | 'nbsp'
  decode?: boolean
}

export interface UImageProps {
  src?: string
  mode?: 'scaleToFill' | 'aspectFit' | 'aspectFill' | 'widthFix' | 'heightFix' | 'top' | 'bottom' | 'center' | 'left' | 'right' | 'top left' | 'top right' | 'bottom left' | 'bottom right'
  lazyLoad?: boolean
  fadeShow?: boolean
  webp?: boolean
  showMenuByLongpress?: boolean
  draggable?: boolean
}

export interface UButtonProps {
  size?: 'default' | 'mini'
  type?: 'primary' | 'default' | 'warn'
  plain?: boolean
  disabled?: boolean
  loading?: boolean
  formType?: 'submit' | 'reset'
  openType?: 'feedback' | 'share' | 'getUserInfo' | 'contact' | 'getPhoneNumber' | 'launchApp' | 'openSetting' | 'chooseAvatar' | 'getAuthorize' | 'lifestyle' | 'contactShare' | 'openGroupProfile' | 'openGuildProfile' | 'openPublicProfile' | 'shareMessageToFriend' | 'addFriend' | 'addColorSign' | 'addGroupApp' | 'addToFavorites' | 'chooseAddress' | 'chooseInvoiceTitle' | 'login' | 'subscribe' | 'favorite' | 'watchLater' | 'openProfile'
  hoverClass?: string
  hoverStartTime?: number
  hoverStayTime?: number
  appParameter?: string
  hoverStopPropagation?: boolean
  lang?: string
  sessionFrom?: string
  sendMessageTitle?: string
  sendMessagePath?: string
  sendMessageImg?: string
  sendMessageCard?: boolean
  groupId?: string
  guildId?: string
  publicId?: string
}

export interface UFormProps {
  reportSubmit?: boolean
  reportSubmitTimeout?: number
}

export interface ULabelProps {
  for?: string
}

export interface UInputProps {
  value?: string
  type?: 'text' | 'number' | 'idcard' | 'digit' | 'tel' | 'safe-password' | 'nickname'
  textContentType?: 'oneTimeCode'
  password?: boolean
  placeholder?: string
  placeholderStyle?: string
  placeholderClass?: string
  disabled?: boolean
  maxlength?: number
  cursorSpacing?: number
  cursor?: number
  focus?: boolean
  confirmType?: 'send' | 'search' | 'next' | 'go' | 'done'
  confirmHold?: boolean
  selectionStart?: number
  selectionEnd?: number
  adjustPosition?: boolean
  holdKeyboard?: boolean
  autoBlur?: boolean
  ignoreCompositionEvent?: boolean
  alwaysEmbed?: boolean
  safePasswordCertPath?: string
  safePasswordLength?: number
  safePasswordTimeStamp?: number
  safePasswordNonce?: string
  safePasswordSalt?: string
  safePasswordCustomHash?: string
  randomNumber?: boolean
  controlled?: boolean
  alwaysSystem?: boolean
}
export interface UTextareaProps {
  value?: string
  placeholder?: string
  placeholderStyle?: string
  placeholderClass?: string
  disabled?: boolean
  maxlength?: number
  cursorSpacing?: number
  cursor?: number
  focus?: boolean
  autoFocus?: boolean
  fixed?: boolean
  confirmType?: 'send' | 'search' | 'next' | 'go' | 'done'
  confirmHold?: boolean
  showConfirmBar?: boolean
  selectionStart?: number
  selectionEnd?: number
  adjustPosition?: boolean
  disableDefaultPadding?: boolean
  holdKeyboard?: boolean
  autoBlur?: boolean
  ignoreCompositionEvent?: boolean
}
