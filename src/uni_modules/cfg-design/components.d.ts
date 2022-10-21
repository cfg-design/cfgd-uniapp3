
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CAvatar: typeof import('./components/c-avatar/c-avatar.vue')['default']
    CAvatarText: typeof import('./components/c-avatar-text/c-avatar-text.vue')['default']
    CBadge: typeof import('./components/c-badge/c-badge.vue')['default']
    CBottomBar: typeof import('./components/c-bottom-bar/c-bottom-bar.vue')['default']
    CButton: typeof import('./components/c-button/c-button.vue')['default']
    CCard: typeof import('./components/c-card/c-card.vue')['default']
    CCell: typeof import('./components/c-cell/c-cell.vue')['default']
    CCheckbox: typeof import('./components/c-checkbox/c-checkbox.vue')['default']
    CCheckboxGroup: typeof import('./components/c-checkbox-group/c-checkbox-group.vue')['default']
    CCol: typeof import('./components/c-col/c-col.vue')['default']
    CDescriptions: typeof import('./components/c-descriptions/c-descriptions.vue')['default']
    CEmpty: typeof import('./components/c-empty/c-empty.vue')['default']
    CForm: typeof import('./components/c-form/c-form.vue')['default']
    CFormItem: typeof import('./components/c-form-item/c-form-item.vue')['default']
    CIcon: typeof import('./components/c-icon/c-icon.vue')['default']
    CImage: typeof import('./components/c-image/c-image.vue')['default']
    CInput: typeof import('./components/c-input/c-input.vue')['default']
    CInputNumber: typeof import('./components/c-input-number/c-input-number.vue')['default']
    CLine: typeof import('./components/c-line/c-line.vue')['default']
    CLoadMore: typeof import('./components/c-load-more/c-load-more.vue')['default']
    CNavBar: typeof import('./components/c-nav-bar/c-nav-bar.vue')['default']
    CNoticeBar: typeof import('./components/c-notice-bar/c-notice-bar.vue')['default']
    CPopup: typeof import('./components/c-popup/c-popup.vue')['default']
    CPopupTitle: typeof import('./components/c-popup-title/c-popup-title.vue')['default']
    CProgress: typeof import('./components/c-progress/c-progress.vue')['default']
    CRadio: typeof import('./components/c-radio/c-radio.vue')['default']
    CRadioGroup: typeof import('./components/c-radio-group/c-radio-group.vue')['default']
    CRow: typeof import('./components/c-row/c-row.vue')['default']
    CSpin: typeof import('./components/c-spin/c-spin.vue')['default']
    CSwitch: typeof import('./components/c-switch/c-switch.vue')['default']
    CTabBar: typeof import('./components/c-tab-bar/c-tab-bar.vue')['default']
    CTabBarItem: typeof import('./components/c-tab-bar-item/c-tab-bar-item.vue')['default']
    CTabItem: typeof import('./components/c-tab-item/c-tab-item.vue')['default']
    CTabs: typeof import('./components/c-tabs/c-tabs.vue')['default']
    CTag: typeof import('./components/c-tag/c-tag.vue')['default']
    CText: typeof import('./components/c-text/c-text.vue')['default']
    CTextarea: typeof import('./components/c-textarea/c-textarea.vue')['default']
    CTopBar: typeof import('./components/c-top-bar/c-top-bar.vue')['default']
  }
}

export {}
