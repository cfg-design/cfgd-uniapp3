import{_ as e,a as t}from"./c-checkbox-group.0b0be2c2.js";import{d as l,I as a,o,a as c,g as r,w as d,F as u,r as s,h as n,b as i,e as x,f as b}from"./index.77e0feac.js";import{_ as f}from"./c-text.6f7dd3a8.js";import{_,a as m}from"./c-form.9b46b152.js";import{_ as p}from"./c-col.53aa3641.js";import{_ as k}from"./c-row.c58eb727.js";import{_ as v}from"./_plugin-vue_export-helper.cdc0426e.js";import"./c-icon.vue_vue_type_script_setup_true_lang.c3452c23.js";import"./_isString.25f07ec4.js";import"./keys.f648a7ea.js";import"./c-line.4cc7d083.js";import"./getRect.3e8ad009.js";const h=v(l({__name:"index",setup(l){const v=a([1]),h=a(["c-v-1"]),y=a(!1);return(l,a)=>{const g=i(x("c-checkbox"),e),j=i(x("c-text"),f),w=i(x("c-form-item"),_),z=i(x("c-checkbox-group"),t),U=b,B=i(x("c-col"),p),I=i(x("c-row"),k),P=i(x("c-form"),m);return o(),c(u,null,[r(U,{class:"page"},{default:d((()=>[r(U,{class:"checkbox-items"},{default:d((()=>[r(w,null,{default:d((()=>[r(g,{text:"checkbox",checked:y.value,"onUpdate:checked":a[0]||(a[0]=e=>y.value=e)},null,8,["checked"]),r(j,{text:"checked: "+y.value},null,8,["text"])])),_:1}),r(w,{label:"row","label-placement":"top"},{default:d((()=>[r(U,null,{default:d((()=>[r(z,{c:"row",value:v.value,"onUpdate:value":a[1]||(a[1]=e=>v.value=e)},{default:d((()=>[(o(),c(u,null,s(3,(e=>r(g,{key:e,text:"value"+e},null,8,["text"]))),64))])),_:1},8,["value"]),r(j,{color:"error",text:`checked: ${v.value.join()}`},null,8,["text"]),r(z,{c:"row",value:h.value,"onUpdate:value":a[2]||(a[2]=e=>h.value=e),checkbox:{activeType:"icon"}},{default:d((()=>[(o(),c(u,null,s(3,(e=>r(g,{key:e,text:"value"+e,value:"c-v-"+e},null,8,["text","value"]))),64))])),_:1},8,["value"]),r(j,{color:"error",text:`checked: ${h.value.join()}`},null,8,["text"])])),_:1})])),_:1}),r(z,null,{default:d((()=>[r(g,{text:"minus",c:"minus",checked:""}),r(g,{text:"indeterminate",c:"indeterminate",checked:""}),r(g,{text:"active icon","active-type":"icon",checked:""}),r(g,{text:"active icon minus","active-type":"icon",c:"minus",checked:""}),r(g,{text:"active icon indeterminate","active-type":"icon",c:"indeterminate",checked:""}),r(I,{gutter:"20"},{default:d((()=>[r(B,null,{default:d((()=>[r(g,{text:"readonly",checked:"",readonly:""}),r(g,{text:"disabled",checked:"",disabled:""})])),_:1}),r(B,null,{default:d((()=>[r(g,{text:"readonly",readonly:""}),r(g,{text:"disabled",disabled:""})])),_:1})])),_:1})])),_:1}),r(z,null,{default:d((()=>[r(g,{text:"text props","text-props":{color:"error"}}),r(g,null,{default:d((()=>[r(I,null,{default:d((()=>[r(j,{color:"primary"},{default:d((()=>[n("slot")])),_:1}),r(j,{color:"error"},{default:d((()=>[n(" text")])),_:1}),r(j,{color:"success"},{default:d((()=>[n(" text")])),_:1})])),_:1})])),_:1}),r(g,{size:"3xl",text:"size"}),r(g,{size:"8xl",text:"size"})])),_:1}),r(w,{label:"color","label-placement":"top"},{default:d((()=>[r(z,null,{default:d((()=>[r(I,null,{default:d((()=>[r(B,{span:6},{default:d((()=>[(o(),c(u,null,s(["error","warning","success","#7546c9"],(e=>r(g,{key:e,color:e,text:e,checked:""},null,8,["color","text"]))),64))])),_:1}),r(B,{span:6},{default:d((()=>[(o(),c(u,null,s(["error","warning","success","#7546c9"],(e=>r(g,{key:e,color:e,text:e,"active-type":"icon",checked:""},null,8,["color","text"]))),64))])),_:1})])),_:1})])),_:1})])),_:1}),r(w,{label:"border","label-placement":"top"},{default:d((()=>[r(U,{style:{"flex-grow":"1"}},{default:d((()=>[r(z,null,{default:d((()=>[r(g,{text:"border",border:""}),r(g,{text:"border",border:"",color:"error"})])),_:1}),r(z,{c:"row",checkbox:{border:!0}},{default:d((()=>[r(g,{text:"border"}),r(g,{text:"border"})])),_:1}),r(z,{c:"row",checkbox:{border:!0}},{default:d((()=>[r(g,{text:"round",round:""}),r(g,{text:"radius",radius:"s l"})])),_:1}),r(z,{checkbox:{borderBottom:!0}},{default:d((()=>[r(g,{text:"border-bottom"}),r(g,{text:"border-bottom"})])),_:1}),r(z,{c:"row",checkbox:{borderBottom:!0}},{default:d((()=>[r(g,{text:"border-bottom"}),r(g,{text:"border-bottom"})])),_:1})])),_:1})])),_:1}),r(w,{label:"right","label-placement":"top"},{default:d((()=>[r(z,{c:"right"},{default:d((()=>[(o(),c(u,null,s(3,(e=>r(g,{key:e,text:"text"+e,"border-bottom":""},null,8,["text"]))),64)),(o(),c(u,null,s(3,(e=>r(g,{key:e,text:"text"+e,border:"",radius:"s l"},null,8,["text"]))),64)),(o(),c(u,null,s(3,(e=>r(g,{key:e,text:"text"+e,border:"","icon-wrap-style":"border-radius: 100%;"},null,8,["text"]))),64))])),_:1})])),_:1})])),_:1})])),_:1}),r(P,{item:{labelPlacement:"top"}},{default:d((()=>[r(w,{label:"c-checkbox 禁用"},{default:d((()=>[r(z,null,{default:d((()=>[r(g,{text:"正常"}),r(g,{text:"禁用",disabled:""})])),_:1})])),_:1}),r(w,{label:"c-checkbox-group 禁用"},{default:d((()=>[r(z,{disabled:""},{default:d((()=>[r(g,{text:"正常"}),r(g,{text:"禁用",disabled:""})])),_:1})])),_:1}),r(w,{label:"c-form-item 禁用",disabled:""},{default:d((()=>[r(z,null,{default:d((()=>[r(g,{text:"正常"}),r(g,{text:"禁用",disabled:""})])),_:1})])),_:1})])),_:1}),r(P,{item:{labelPlacement:"top"},disabled:""},{default:d((()=>[r(w,{label:"c-form 禁用",disabled:""},{default:d((()=>[r(z,{disabled:""},{default:d((()=>[r(g,{text:"正常"}),r(g,{text:"禁用",disabled:""})])),_:1})])),_:1}),r(w,null,{default:d((()=>[r(z,{disabled:""},{default:d((()=>[r(g,{text:"正常"}),r(g,{text:"禁用",disabled:""})])),_:1})])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-59751a85"]]);export{h as default};
