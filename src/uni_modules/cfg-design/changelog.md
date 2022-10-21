## 1.0.27-alpha（2022-10-21）
c-notice-bar 事件 click:close 改为 close
## 1.0.26-alpha（2022-10-21）
1. c-nav-bar 去掉小程序样式 padding-right ， 使用时自己加，值一般为 94px 
## 1.0.25-alpha（2022-10-19）
添加 c-notice-bar 通知栏组件
## 1.0.24-alpha（2022-10-19）
c-text props.text 类型改为 any
## 1.0.23-alpha（2022-10-14）
c-button 添加默认事件
## 1.0.22-alpha（2022-10-13）
优化 c-bottom-bar 、 c-top-bar 和 c-row 自动获取高/宽
## 1.0.21-alpha（2022-10-13）
1. cfg-design/index.js 不再导出 types 和 icons ，types 在 cfg-design/types.d 导出， icons 在cfg-design/components/c-icon/icons ;
2. 修复 c-input clear 需要触发 update:vlaue 事件
## 1.0.20-alpha（2022-10-12）
1. c-input props.focus 可动态设置；
2. 修复 c-form-item main class 类名
## 1.0.19-alpha（2022-09-30）
1. c-tab-bar 去掉内部 value ，激活项只使用外部 value ；
2. 修复 c-nav-bar 左右 slot 小程序中的样式
## 1.0.18-alpha（2022-09-29）
更改 c-card 的 header 、body 和 footer 的默认 class 名和默认 style
## 1.0.17-alpha（2022-09-28）
优化 c-popup 弹出动画
## 1.0.16-alpha（2022-09-27）
c-popup 添加回调 show 和 close
## 1.0.15-alpha（2022-09-27）
1. 添加组件  c-popup ；
2. 优化组件注释
## 1.0.14-alpha（2022-09-23）
1. 添加组件 c-descriptions 描述；
2. 修复组件 c-card class 名称
## 1.0.13-alpha（2022-09-22）
c-form-item 添加 @click
## 1.0.12-alpha（2022-09-22）
修复 c-form-item 属性名 mainStyle 、mainClass
## 1.0.11-alpha（2022-09-22）
c-row 新增 noWrap 属性
## 1.0.10-alpha（2022-09-22）
修复自定义样式字段名
## 1.0.9-alpha（2022-09-21）
1. 添加组件 c-card 卡片；
2. 修复 c-switch 导出路径
## 1.0.8-alpha（2022-09-14）
修复 TopBar cStyle
## 1.0.7-alpha（2022-09-14）
修复 Progress 进度的圆角
## 1.0.5-alpha（2022-09-14）
setIcons 和 addIcons 添加 family 参数
## 1.0.4-alpha（2022-09-08）
1. CForm.Props.item 的类型改为 FormItemProps；
2. checkboxGroupInjectionKeyCheckbox 改为 checkboxGroupInjectionKeyCheckboxProps；
3. CCheckboxGroup.Props.checkbox 的类型改为 CheckboxProps；
4. radioGroupInjectionKeyRadio 改为 radioGroupInjectionKeyRadioProps；
5. CRadioGroup.Props.radio 的类型改为 RadioProps；
6. 修复 CTextarea 的 textarea 自定义类名和样式；
7. CTabBar.Props.item 的类型改为 TabBarItemProps
## 1.0.3-alpha（2022-09-07）
更新文档说明
## 1.0.2-alpha（2022-09-05）
完善导出
## 1.0.1-alpha（2022-09-02）
降低 HbuilderX 版本
## 1.0.1-alpha（2022-09-02）
降低 HbuilderX 版本
## 1.0.0-alpha (2022-08-26)

1. 初版
