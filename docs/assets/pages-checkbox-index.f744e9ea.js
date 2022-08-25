import{a as e,M as t}from"./c-checkbox-group.f5336b3a.js";import{d as l,I as a,o,b as c,a as d,w as r,h as u,t as n,F as s,r as i,l as x,e as b,f,g as _}from"./index.a39ee5e8.js";import{_ as m}from"./c-text.326c1c36.js";import{_ as p}from"./c-form-item.4824c79c.js";import{_ as v,a as h}from"./c-row.0af8a31e.js";import{_ as k}from"./c-form.00794c07.js";import{_ as y}from"./plugin-vue_export-helper.54492111.js";import"./c-icon.5dd30e6e.js";import"./c-line.39516120.js";var g=y(l({__name:"index",setup(l){const y=a([1]),g=a(["c-v-1"]),w=a(!1);return(l,a)=>{const j=b(f("c-checkbox"),t),z=b(f("c-text"),m),U=b(f("c-form-item"),p),B=b(f("c-checkbox-group"),e),I=_,P=b(f("c-col"),v),S=b(f("c-row"),h),F=b(f("c-form"),k);return o(),c(s,null,[d(I,{class:"page"},{default:r((()=>[d(I,{class:"checkbox-items"},{default:r((()=>[d(U,null,{default:r((()=>[d(j,{text:"checkbox",checked:w.value,"onUpdate:checked":a[0]||(a[0]=e=>w.value=e)},null,8,["checked"]),d(z,null,{default:r((()=>[u("checked: "+n(w.value),1)])),_:1})])),_:1}),d(U,{label:"row","label-placement":"top"},{default:r((()=>[d(I,null,{default:r((()=>[d(B,{c:"row",value:y.value,"onUpdate:value":a[1]||(a[1]=e=>y.value=e)},{default:r((()=>[(o(),c(s,null,i(3,(e=>d(j,{text:"value"+e},null,8,["text"]))),64))])),_:1},8,["value"]),d(z,{color:"error","text-bind":{style:[{alignSelf:"center"}]}},{default:r((()=>[u("checked: "+n(y.value.join()),1)])),_:1}),d(B,{c:"row",value:g.value,"onUpdate:value":a[2]||(a[2]=e=>g.value=e),checkbox:{activeType:"icon"}},{default:r((()=>[(o(),c(s,null,i(3,(e=>d(j,{text:"value"+e,value:"c-v-"+e},null,8,["text","value"]))),64))])),_:1},8,["value"]),d(z,{color:"error","text-bind":{style:[{alignSelf:"center"}]}},{default:r((()=>[u("checked: "+n(g.value.join()),1)])),_:1})])),_:1})])),_:1}),d(B,null,{default:r((()=>[d(j,{text:"minus",c:"minus",checked:""}),d(j,{text:"indeterminate",c:"indeterminate",checked:""}),d(j,{text:"active icon","active-type":"icon",checked:""}),d(j,{text:"active icon minus","active-type":"icon",c:"minus",checked:""}),d(j,{text:"active icon indeterminate","active-type":"icon",c:"indeterminate",checked:""}),d(S,null,{default:r((()=>[d(P,null,{default:r((()=>[d(j,{text:"readonly",checked:"",readonly:""}),d(j,{text:"disabled",checked:"",disabled:""})])),_:1}),d(P,null,{default:r((()=>[d(j,{text:"readonly",readonly:""}),d(j,{text:"disabled",disabled:""})])),_:1})])),_:1})])),_:1}),d(B,null,{default:r((()=>[d(j,{text:"text props","text-props":{color:"error"}}),d(j,null,{default:r((()=>[d(z,{color:"primary"},{default:r((()=>[u("slot")])),_:1}),d(z,{color:"error"},{default:r((()=>[u(" text")])),_:1}),d(z,{color:"success"},{default:r((()=>[u(" text")])),_:1})])),_:1}),d(j,{size:"3xl",text:"size"}),d(j,{size:"8xl",text:"size"})])),_:1}),d(U,{label:"color","label-placement":"top"},{default:r((()=>[d(B,null,{default:r((()=>[d(S,null,{default:r((()=>[d(P,null,{default:r((()=>[(o(),c(s,null,i(["error","warning","success","#7546c9"],(e=>d(j,{key:e,color:e,text:e,checked:""},null,8,["color","text"]))),64))])),_:1}),d(P,null,{default:r((()=>[(o(),c(s,null,i(["error","warning","success","#7546c9"],(e=>d(j,{key:e,color:e,text:e,"active-type":"icon",checked:""},null,8,["color","text"]))),64))])),_:1})])),_:1})])),_:1})])),_:1}),d(U,{label:"border","label-placement":"top"},{default:r((()=>[d(I,{style:{"flex-grow":"1"}},{default:r((()=>[d(B,null,{default:r((()=>[d(j,{text:"border",border:""}),d(j,{text:"border",border:"",color:"error"})])),_:1}),d(B,{c:"row",checkbox:{border:!0}},{default:r((()=>[d(j,{text:"border"}),d(j,{text:"border"})])),_:1}),d(B,{c:"row",checkbox:{border:!0}},{default:r((()=>[d(j,{text:"round",round:""}),d(j,{text:"radius",radius:"s l"})])),_:1}),d(B,{checkbox:{borderBottom:!0}},{default:r((()=>[d(j,{text:"border-bottom"}),d(j,{text:"border-bottom"})])),_:1}),d(B,{c:"row",checkbox:{borderBottom:!0}},{default:r((()=>[d(j,{text:"border-bottom"}),d(j,{text:"border-bottom"})])),_:1})])),_:1})])),_:1}),d(U,{label:"right","label-placement":"top"},{default:r((()=>[d(B,{c:"right"},{default:r((()=>[(o(),c(s,null,i(3,(e=>d(j,{text:"text"+e,"border-bottom":""},null,8,["text"]))),64)),(o(),c(s,null,i(3,(e=>d(j,{text:"text"+e,border:"",radius:"s l"},null,8,["text"]))),64))])),_:1})])),_:1})])),_:1})])),_:1}),d(F,{label:{labelPlacement:"top"}},{default:r((()=>[d(U,{label:"c-checkbox 禁用"},{default:r((()=>[d(B,null,{default:r((()=>[d(j,{text:"正常"}),d(j,{text:"禁用",disabled:""})])),_:1})])),_:1}),d(U,{label:"c-checkbox-group 禁用"},{default:r((()=>[d(B,{disabled:""},{default:r((()=>[d(j,{text:"正常"}),d(j,{text:"禁用",disabled:""})])),_:1})])),_:1}),d(U,{label:"c-form-item 禁用",disabled:""},{default:r((()=>[d(B,null,{default:r((()=>[d(j,{text:"正常"}),d(j,{text:"禁用",disabled:""})])),_:1})])),_:1})])),_:1}),d(F,{label:{labelPlacement:"top"},disabled:""},{default:r((()=>[d(U,{label:"c-form 禁用",disabled:""},{default:r((()=>[d(B,{disabled:""},{default:r((()=>[d(j,{text:"正常"}),d(j,{text:"禁用",disabled:""})])),_:1})])),_:1}),d(U,null,{default:r((()=>[d(x(e),{disabled:""},{default:r((()=>[d(x(t),{text:"正常"}),d(j,{text:"禁用",disabled:""})])),_:1})])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-79d91d31"]]);export{g as default};