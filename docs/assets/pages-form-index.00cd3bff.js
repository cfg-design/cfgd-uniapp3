import{b as e,e as a,o as l,c as t,w as u,g as r,f as d,d as o,I as n,h as s,a7 as i,S as c}from"./index.1797c27c.js";import{_ as p}from"./c-button.670bc10e.js";import{_ as f}from"./c-col.9f16cf5a.js";import{_ as v}from"./c-row.c0b90eff.js";import{_ as b,a as m}from"./c-form.e696b570.js";import{_ as h}from"./c-input.7c5258a1.js";import{_,a as g}from"./c-checkbox-group.968e7139.js";import{_ as x}from"./c-radio-group.b13f09aa.js";import{_ as y}from"./c-switch.f7861525.js";import{_ as k}from"./c-input-number.d5ce3be9.js";import{_ as j}from"./c-textarea.1f54fa69.js";import{_ as U}from"./c-text.be6f8c39.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";import"./c-spin.d770c1f7.js";import"./c-icon.c292ae64.js";import"./getRect.39b21ae2.js";import"./c-line.309a9d1b.js";var S=w({},[["render",function(o,n){const s=e(a("c-input"),h),i=e(a("c-form-item"),b),c=d;return l(),t(c,null,{default:u((()=>[r(i,{label:"账号",path:"name"},{default:u((()=>[r(s,{placeholder:"用户名"})])),_:1}),r(i,{label:"性别","right-icon":"arrow-right-s-line"},{default:u((()=>[r(s,{placeholder:"请选择性别",readonly:""})])),_:1})])),_:1})}]]);var C=w(o({__name:"index",setup(o){const w=[{text:"男",value:"1"},{text:"女",value:"2"},{text:"保密[no-feedback]",value:"3",noFeedback:!0}],C=n(),q=n({nickName:"",name:"user0",pass:"",pass2:"",brief:"",hobby:[],agreement:!1,sex:"",sync:!1,age:17}),W={name:[{required:!0,message:"用户名不能为空",trigger:"input"}],pass:[{required:!0,message:"密码不能为空",trigger:["input"]}],pass2:[{required:!0,message:"密码2不能为空",trigger:["input","blur"]},{validator:()=>q.value.pass===q.value.pass2,message:"两次密码输入不同",trigger:"blur"}],hobby:[{required:!0,type:"array",message:"请选择你的爱好",trigger:"change"}],sex:[{required:!0,message:"请选择性别",trigger:["change"]}],brief:[{required:!0,message:"简介不能为空",trigger:"input"}],agreement:[{required:!0,type:"enum",enum:[!0],message:"请选择阅读并同意协议",trigger:"change"}],sync:[{required:!0,type:"enum",enum:[!0],message:"请开启同步",trigger:"change"}],age:[{required:!0,type:"number",min:18,message:"年龄太小",trigger:"change"}]},I=()=>{var e;console.log({...q.value}),null==(e=C.value)||e.validate((e=>{console.log(e),c(e?{title:e[0].message,icon:"error"}:{title:"submitting"})}))},z=()=>{var e;return null==(e=C.value)?void 0:e.reset()},L=()=>{var e;return null==(e=C.value)?void 0:e.clear()},N=()=>{var e;return null==(e=C.value)?void 0:e.restoreValidation()};return(o,n)=>{const c=e(a("c-button"),p),R=e(a("c-col"),f),B=e(a("c-row"),v),F=e(a("c-form-item"),b),M=e(a("c-input"),h),P=e(a("c-checkbox"),_),T=e(a("c-checkbox-group"),g),A=e(a("c-radio-group"),x),D=e(a("c-switch"),y),V=e(a("c-input-number"),k),E=e(a("c-textarea"),j),G=e(a("c-text"),U),H=d;return l(),t(H,{class:"page"},{default:u((()=>[r(m,{ref_key:"formRef",ref:C,value:q.value,"onUpdate:value":n[14]||(n[14]=e=>q.value=e),rules:W,item:{labelWidth:120}},{default:u((()=>[r(F,{"no-label":"","no-border-bottom":""},{default:u((()=>[r(B,{gutter:"10rpx"},{default:u((()=>[r(R,null,{default:u((()=>[r(c,{color:"warning",text:"清空校验结果",width:"100%",onClick:N})])),_:1}),r(R,null,{default:u((()=>[r(c,{color:"success",text:"清空数据",width:"100%",onClick:L})])),_:1}),r(R,null,{default:u((()=>[r(c,{color:"error",text:"重置",width:"100%","form-type":"reset",onClick:z})])),_:1}),r(R,null,{default:u((()=>[r(c,{color:"primary",text:"提交",width:"100%","form-type":"submit",onClick:I})])),_:1})])),_:1})])),_:1}),r(F,{label:"昵称"},{default:u((()=>[r(M,{value:q.value.nickName,"onUpdate:value":n[0]||(n[0]=e=>q.value.nickName=e),placeholder:"昵称"},null,8,["value"])])),_:1}),r(F,{label:"账号",path:"name"},{default:u((()=>[r(M,{value:q.value.name,"onUpdate:value":n[1]||(n[1]=e=>q.value.name=e),placeholder:"用户名",clearable:""},null,8,["value"])])),_:1}),r(F,{label:"密码",path:"pass"},{default:u((()=>[r(M,{value:q.value.pass,"onUpdate:value":n[2]||(n[2]=e=>q.value.pass=e),password:"",placeholder:"密码","auto-focus":"",clearable:""},null,8,["value"])])),_:1}),r(F,{label:"密码2",path:"pass2"},{default:u((()=>[r(M,{value:q.value.pass2,"onUpdate:value":n[3]||(n[3]=e=>q.value.pass2=e),password:"",placeholder:"再次输入密码",border:""},null,8,["value"])])),_:1}),r(F,{label:"密码2",path:"pass2"},{default:u((()=>[r(M,{value:q.value.pass2,"onUpdate:value":n[4]||(n[4]=e=>q.value.pass2=e),password:"",placeholder:"input: no-feedback",border:"","no-feedback":""},null,8,["value"])])),_:1}),r(F,{label:"密码2",path:"pass2","no-feedback":""},{default:u((()=>[r(M,{value:q.value.pass2,"onUpdate:value":n[5]||(n[5]=e=>q.value.pass2=e),password:"",placeholder:"form-item: no-feedback",border:""},null,8,["value"])])),_:1}),r(F,{label:"爱好",path:"hobby"},{default:u((()=>[r(T,{value:q.value.hobby,"onUpdate:value":n[6]||(n[6]=e=>q.value.hobby=e),c:"row"},{default:u((()=>[r(P,{text:"看电影"}),r(P,{text:"听音乐[no-feedback]","no-feedback":""})])),_:1},8,["value"])])),_:1}),r(F,{label:"性别",path:"sex"},{default:u((()=>[r(A,{value:q.value.sex,"onUpdate:value":n[7]||(n[7]=e=>q.value.sex=e),c:"row",items:w},null,8,["value"])])),_:1}),r(F,{label:"同步",path:"sync"},{default:u((()=>[r(D,{value:q.value.sync,"onUpdate:value":n[8]||(n[8]=e=>q.value.sync=e),round:""},null,8,["value"]),r(D,{value:q.value.sync,"onUpdate:value":n[9]||(n[9]=e=>q.value.sync=e),"no-feedback":"","un-checked-text":"no-feedback","checked-text":"no-feedback"},null,8,["value"])])),_:1}),r(F,{label:"年龄",path:"age"},{default:u((()=>[r(V,{value:q.value.age,"onUpdate:value":n[10]||(n[10]=e=>q.value.age=e)},null,8,["value"])])),_:1}),r(F,{label:"简介",path:"brief"},{default:u((()=>[r(E,{value:q.value.brief,"onUpdate:value":n[11]||(n[11]=e=>q.value.brief=e),placeholder:"简介",height:"100rpx"},null,8,["value"])])),_:1}),r(F,{label:"协议",path:"agreement"},{default:u((()=>[r(P,{checked:q.value.agreement,"onUpdate:checked":n[13]||(n[13]=e=>q.value.agreement=e)},{default:u((()=>[r(G,null,{default:u((()=>[s("已阅读并同意")])),_:1}),r(G,{color:"primary",onClick:n[12]||(n[12]=i((()=>{}),["stop"]))},{default:u((()=>[s("《xxxxxxxxxx》")])),_:1}),r(G,null,{default:u((()=>[s("协议")])),_:1})])),_:1},8,["checked"])])),_:1})])),_:1},8,["value"]),r(G,{c:"h3"},{default:u((()=>[s("no-require-mark")])),_:1}),r(m,{value:q.value,"onUpdate:value":n[15]||(n[15]=e=>q.value=e),rules:W,item:{noRequireMark:!0}},{default:u((()=>[r(S)])),_:1},8,["value"]),r(G,{c:"h3"},{default:u((()=>[s("Label Top")])),_:1}),r(m,{value:q.value,"onUpdate:value":n[16]||(n[16]=e=>q.value=e),rules:W,item:{labelPlacement:"top"}},{default:u((()=>[r(S)])),_:1},8,["value"]),r(G,{c:"h3"},{default:u((()=>[s("Size")])),_:1}),r(m,{value:q.value,"onUpdate:value":n[17]||(n[17]=e=>q.value=e),rules:W,item:{size:"4xl"}},{default:u((()=>[r(S)])),_:1},8,["value"]),r(G,{c:"h3"},{default:u((()=>[s("Label Font Color")])),_:1}),r(m,{value:q.value,"onUpdate:value":n[18]||(n[18]=e=>q.value=e),rules:W,size:"40",item:{labelTextProps:{color:"success"}}},{default:u((()=>[r(S)])),_:1},8,["value"]),r(G,{c:"h3"},{default:u((()=>[s("no-border-bottom")])),_:1}),r(m,{value:q.value,"onUpdate:value":n[19]||(n[19]=e=>q.value=e),rules:W,size:30,item:{noBorderBottom:!0}},{default:u((()=>[r(S)])),_:1},8,["value"]),r(G,{c:"h3"},{default:u((()=>[s("no-label")])),_:1}),r(m,{value:q.value,"onUpdate:value":n[20]||(n[20]=e=>q.value=e),rules:W,item:{noLabel:!0}},{default:u((()=>[r(S)])),_:1},8,["value"]),r(G,{c:"h3"},{default:u((()=>[s("disabled")])),_:1}),r(m,{value:q.value,"onUpdate:value":n[21]||(n[21]=e=>q.value=e),rules:W,disabled:""},{default:u((()=>[r(S)])),_:1},8,["value"]),r(G,{c:"h3"},{default:u((()=>[s("More Disabled")])),_:1}),r(m,{value:q.value,"onUpdate:value":n[22]||(n[22]=e=>q.value=e),rules:W},{default:u((()=>[r(F,{label:"账号",path:"name",disabled:""},{default:u((()=>[r(M,{placeholder:"placeholder: form-item disabled"})])),_:1}),r(F,{label:"账号",path:"name",disabled:""},{default:u((()=>[r(M,{value:"value: form-item disabled"})])),_:1}),r(F,{label:"账号",path:"name"},{default:u((()=>[r(M,{placeholder:"placeholder: input disabled",disabled:""})])),_:1}),r(F,{label:"账号",path:"name"},{default:u((()=>[r(M,{placeholder:"placeholder: no disabled"})])),_:1}),r(F,{label:"账号",path:"name"},{default:u((()=>[r(M,{value:"value: no disabled",placeholder:"用户名"})])),_:1}),r(F,{label:"账号",path:"name"},{default:u((()=>[r(M,{value:"value: input disabled",placeholder:"用户名",disabled:""})])),_:1}),r(F,{label:"性别","right-icon":"arrow-right-s-line"},{default:u((()=>[r(M,{placeholder:"请选择性别",readonly:""})])),_:1}),r(F,{label:"性别","right-icon":"arrow-right-s-line",disabled:""},{default:u((()=>[r(M,{placeholder:"请选择性别",readonly:""})])),_:1})])),_:1},8,["value"]),r(G,{c:"h3"},{default:u((()=>[s("Label Align")])),_:1}),r(m,{item:{labelWidth:200,mainStyle:{alignItems:"flex-start"}}},{default:u((()=>[r(F,{label:"账号"},{default:u((()=>[r(E,{height:"100rpx"})])),_:1})])),_:1}),r(m,{item:{labelWidth:200,mainStyle:{alignItems:"flex-start"},labelStyle:{justifyContent:"center"}}},{default:u((()=>[r(F,{label:"账号"},{default:u((()=>[r(E,{height:"100rpx"})])),_:1})])),_:1}),r(m,{item:{labelWidth:200,mainStyle:{alignItems:"flex-start"},labelStyle:{justifyContent:"flex-end"}}},{default:u((()=>[r(F,{label:"账号"},{default:u((()=>[r(E,{height:"100rpx"})])),_:1})])),_:1}),r(m,{item:{labelWidth:200,labelStyle:{justifyContent:"flex-start"}}},{default:u((()=>[r(F,{label:"账号"},{default:u((()=>[r(E,{height:"100rpx"})])),_:1})])),_:1}),r(m,{item:{labelWidth:200,labelStyle:{justifyContent:"center"}}},{default:u((()=>[r(F,{label:"账号"},{default:u((()=>[r(E,{height:"100rpx"})])),_:1})])),_:1}),r(m,{item:{labelWidth:200,labelStyle:{justifyContent:"flex-end"}}},{default:u((()=>[r(F,{label:"账号"},{default:u((()=>[r(E,{height:"100rpx"})])),_:1})])),_:1}),r(m,{item:{labelWidth:200,mainStyle:{alignItems:"flex-end"}}},{default:u((()=>[r(F,{label:"账号"},{default:u((()=>[r(E,{height:"100rpx"})])),_:1})])),_:1}),r(m,{item:{labelWidth:200,mainStyle:{alignItems:"flex-end"},labelStyle:{justifyContent:"center"}}},{default:u((()=>[r(F,{label:"账号"},{default:u((()=>[r(E,{height:"100rpx"})])),_:1})])),_:1}),r(m,{item:{labelWidth:200,mainStyle:{alignItems:"flex-end"},labelStyle:{justifyContent:"flex-end"}}},{default:u((()=>[r(F,{label:"账号"},{default:u((()=>[r(E,{height:"100rpx"})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-3a8aaf0a"]]);export{C as default};
