import{_ as e,a as t}from"./c-checkbox-group.baf1a558.js";import{d as l,I as a,o,b as c,a as d,w as r,F as u,r as n,h as s,e as x,f as i,g as b}from"./index.64ce4e13.js";import{_ as f}from"./c-text.4ba5c9e9.js";import{_,a as m}from"./c-form.339f742b.js";import{_ as p}from"./c-col.d254b80e.js";import{_ as k}from"./c-row.6e3ebf9f.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import"./c-icon.0020e935.js";import"./c-line.f48cebad.js";import"./getRect.8e2bcd90.js";var h=v(l({__name:"index",setup(l){const v=a([1]),h=a(["c-v-1"]),y=a(!1);return(l,a)=>{const g=x(i("c-checkbox"),e),j=x(i("c-text"),f),w=x(i("c-form-item"),_),z=x(i("c-checkbox-group"),t),U=b,B=x(i("c-col"),p),I=x(i("c-row"),k),P=x(i("c-form"),m);return o(),c(u,null,[d(U,{class:"page"},{default:r((()=>[d(U,{class:"checkbox-items"},{default:r((()=>[d(w,null,{default:r((()=>[d(g,{text:"checkbox",checked:y.value,"onUpdate:checked":a[0]||(a[0]=e=>y.value=e)},null,8,["checked"]),d(j,{text:"checked: "+y.value},null,8,["text"])])),_:1}),d(w,{label:"row","label-placement":"top"},{default:r((()=>[d(U,null,{default:r((()=>[d(z,{c:"row",value:v.value,"onUpdate:value":a[1]||(a[1]=e=>v.value=e)},{default:r((()=>[(o(),c(u,null,n(3,(e=>d(g,{key:e,text:"value"+e},null,8,["text"]))),64))])),_:1},8,["value"]),d(j,{color:"error",text:`checked: ${v.value.join()}`},null,8,["text"]),d(z,{c:"row",value:h.value,"onUpdate:value":a[2]||(a[2]=e=>h.value=e),checkbox:{activeType:"icon"}},{default:r((()=>[(o(),c(u,null,n(3,(e=>d(g,{key:e,text:"value"+e,value:"c-v-"+e},null,8,["text","value"]))),64))])),_:1},8,["value"]),d(j,{color:"error",text:`checked: ${h.value.join()}`},null,8,["text"])])),_:1})])),_:1}),d(z,null,{default:r((()=>[d(g,{text:"minus",c:"minus",checked:""}),d(g,{text:"indeterminate",c:"indeterminate",checked:""}),d(g,{text:"active icon","active-type":"icon",checked:""}),d(g,{text:"active icon minus","active-type":"icon",c:"minus",checked:""}),d(g,{text:"active icon indeterminate","active-type":"icon",c:"indeterminate",checked:""}),d(I,{gutter:"20"},{default:r((()=>[d(B,null,{default:r((()=>[d(g,{text:"readonly",checked:"",readonly:""}),d(g,{text:"disabled",checked:"",disabled:""})])),_:1}),d(B,null,{default:r((()=>[d(g,{text:"readonly",readonly:""}),d(g,{text:"disabled",disabled:""})])),_:1})])),_:1})])),_:1}),d(z,null,{default:r((()=>[d(g,{text:"text props","text-props":{color:"error"}}),d(g,null,{default:r((()=>[d(I,null,{default:r((()=>[d(j,{color:"primary"},{default:r((()=>[s("slot")])),_:1}),d(j,{color:"error"},{default:r((()=>[s(" text")])),_:1}),d(j,{color:"success"},{default:r((()=>[s(" text")])),_:1})])),_:1})])),_:1}),d(g,{size:"3xl",text:"size"}),d(g,{size:"8xl",text:"size"})])),_:1}),d(w,{label:"color","label-placement":"top"},{default:r((()=>[d(z,null,{default:r((()=>[d(I,null,{default:r((()=>[d(B,{span:6},{default:r((()=>[(o(),c(u,null,n(["error","warning","success","#7546c9"],(e=>d(g,{key:e,color:e,text:e,checked:""},null,8,["color","text"]))),64))])),_:1}),d(B,{span:6},{default:r((()=>[(o(),c(u,null,n(["error","warning","success","#7546c9"],(e=>d(g,{key:e,color:e,text:e,"active-type":"icon",checked:""},null,8,["color","text"]))),64))])),_:1})])),_:1})])),_:1})])),_:1}),d(w,{label:"border","label-placement":"top"},{default:r((()=>[d(U,{style:{"flex-grow":"1"}},{default:r((()=>[d(z,null,{default:r((()=>[d(g,{text:"border",border:""}),d(g,{text:"border",border:"",color:"error"})])),_:1}),d(z,{c:"row",checkbox:{border:!0}},{default:r((()=>[d(g,{text:"border"}),d(g,{text:"border"})])),_:1}),d(z,{c:"row",checkbox:{border:!0}},{default:r((()=>[d(g,{text:"round",round:""}),d(g,{text:"radius",radius:"s l"})])),_:1}),d(z,{checkbox:{borderBottom:!0}},{default:r((()=>[d(g,{text:"border-bottom"}),d(g,{text:"border-bottom"})])),_:1}),d(z,{c:"row",checkbox:{borderBottom:!0}},{default:r((()=>[d(g,{text:"border-bottom"}),d(g,{text:"border-bottom"})])),_:1})])),_:1})])),_:1}),d(w,{label:"right","label-placement":"top"},{default:r((()=>[d(z,{c:"right"},{default:r((()=>[(o(),c(u,null,n(3,(e=>d(g,{key:e,text:"text"+e,"border-bottom":""},null,8,["text"]))),64)),(o(),c(u,null,n(3,(e=>d(g,{key:e,text:"text"+e,border:"",radius:"s l"},null,8,["text"]))),64))])),_:1})])),_:1})])),_:1})])),_:1}),d(P,{item:{labelPlacement:"top"}},{default:r((()=>[d(w,{label:"c-checkbox 禁用"},{default:r((()=>[d(z,null,{default:r((()=>[d(g,{text:"正常"}),d(g,{text:"禁用",disabled:""})])),_:1})])),_:1}),d(w,{label:"c-checkbox-group 禁用"},{default:r((()=>[d(z,{disabled:""},{default:r((()=>[d(g,{text:"正常"}),d(g,{text:"禁用",disabled:""})])),_:1})])),_:1}),d(w,{label:"c-form-item 禁用",disabled:""},{default:r((()=>[d(z,null,{default:r((()=>[d(g,{text:"正常"}),d(g,{text:"禁用",disabled:""})])),_:1})])),_:1})])),_:1}),d(P,{item:{labelPlacement:"top"},disabled:""},{default:r((()=>[d(w,{label:"c-form 禁用",disabled:""},{default:r((()=>[d(z,{disabled:""},{default:r((()=>[d(g,{text:"正常"}),d(g,{text:"禁用",disabled:""})])),_:1})])),_:1}),d(w,null,{default:r((()=>[d(z,{disabled:""},{default:r((()=>[d(g,{text:"正常"}),d(g,{text:"禁用",disabled:""})])),_:1})])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-2fac3a6b"]]);export{h as default};