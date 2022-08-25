import{M as e,a as t}from"./c-radio-group.0736de9c.js";import{d as l,I as a,o as r,b as o,a as d,w as u,F as c,r as s,h as i,t as x,l as f,e as n,f as b,g as _}from"./index.a39ee5e8.js";import{_ as p}from"./c-form-item.4824c79c.js";import{_ as m}from"./c-text.326c1c36.js";import{_ as v,a as w}from"./c-row.0af8a31e.js";import{_ as g}from"./c-form.00794c07.js";import{_ as y}from"./plugin-vue_export-helper.54492111.js";import"./c-icon.5dd30e6e.js";import"./c-line.39516120.js";var j=y(l({__name:"index",setup(l){const y=a(1),j=a("c-v-1");return(l,a)=>{const h=n(b("c-radio"),t),k=n(b("c-radio-group"),e),z=n(b("c-form-item"),p),B=n(b("c-text"),m),I=_,P=n(b("c-col"),v),S=n(b("c-row"),w),T=n(b("c-form"),g);return r(),o(c,null,[d(I,{class:"page"},{default:u((()=>[d(I,{class:"radio-items"},{default:u((()=>[d(z,null,{default:u((()=>[d(k,null,{default:u((()=>[d(h,{text:"text 1"}),d(h,{text:"text 2",checked:""})])),_:1})])),_:1}),d(z,{label:"row","label-placement":"top"},{default:u((()=>[d(I,null,{default:u((()=>[d(k,{c:"row",value:y.value,"onUpdate:value":a[0]||(a[0]=e=>y.value=e)},{default:u((()=>[(r(),o(c,null,s(3,(e=>d(h,{text:"text"+e},null,8,["text"]))),64))])),_:1},8,["value"]),d(B,{color:"error","text-bind":{style:[{alignSelf:"center"}]}},{default:u((()=>[i("已选择值: "+x(y.value),1)])),_:1}),d(k,{c:"row",value:j.value,"onUpdate:value":a[1]||(a[1]=e=>j.value=e),radio:{activeType:"icon"}},{default:u((()=>[(r(),o(c,null,s(3,(e=>d(h,{text:"text"+e,value:"c-v-"+e},null,8,["text","value"]))),64))])),_:1},8,["value"]),d(B,{color:"error","text-bind":{style:[{alignSelf:"center"}]}},{default:u((()=>[i("已选择值: "+x(j.value),1)])),_:1})])),_:1})])),_:1}),d(z,{label:"circle","label-placement":"top"},{default:u((()=>[d(k,{value:0,c:"row"},{default:u((()=>[d(h,{c:"circle",text:"text"}),d(h,{c:"circle",text:"text"}),d(h,{c:"circle",text:"active icon","active-type":"icon"})])),_:1})])),_:1}),d(z,{label:"readonly","label-placement":"top"},{default:u((()=>[d(k,{value:0,c:"row"},{default:u((()=>[d(h,{text:"text1",readonly:""}),d(h,{text:"text2",readonly:""})])),_:1})])),_:1}),d(z,{label:"disabled","label-placement":"top"},{default:u((()=>[d(k,{value:0,c:"row"},{default:u((()=>[d(h,{text:"text1",disabled:""}),d(h,{text:"text2",disabled:""})])),_:1})])),_:1}),d(z,{label:"color","label-placement":"top"},{default:u((()=>[d(S,null,{default:u((()=>[d(P,null,{default:u((()=>[(r(),o(c,null,s(["error","warning","success","#7546c9"],(e=>d(k,{key:e},{default:u((()=>[d(h,{color:e,text:e,checked:""},null,8,["color","text"])])),_:2},1024))),64))])),_:1}),d(P,null,{default:u((()=>[(r(),o(c,null,s(["error","warning","success","#7546c9"],(e=>d(k,{key:e,radio:{color:e,activeType:"icon"}},{default:u((()=>[d(h,{text:e,checked:""},null,8,["text"])])),_:2},1032,["radio"]))),64))])),_:1})])),_:1})])),_:1}),d(z,{label:"border","label-placement":"top"},{default:u((()=>[d(I,{style:{"flex-grow":"1"}},{default:u((()=>[d(k,null,{default:u((()=>[d(h,{text:"border",border:""}),d(h,{text:"border",border:"",color:"error"})])),_:1}),d(k,{c:"row",radio:{border:!0}},{default:u((()=>[d(h,{text:"border"}),d(h,{text:"border"})])),_:1}),d(k,{c:"row",radio:{border:!0}},{default:u((()=>[d(h,{text:"round",round:""}),d(h,{text:"radius",radius:"s l"})])),_:1}),d(k,{radio:{borderBottom:!0}},{default:u((()=>[d(h,{text:"border-bottom"}),d(h,{text:"border-bottom"})])),_:1}),d(k,{c:"row",radio:{borderBottom:!0}},{default:u((()=>[d(h,{text:"border-bottom"}),d(h,{text:"border-bottom"})])),_:1})])),_:1})])),_:1}),d(z,{label:"right","label-placement":"top"},{default:u((()=>[d(k,{c:"right"},{default:u((()=>[(r(),o(c,null,s(3,(e=>d(h,{text:"text"+e,"border-bottom":""},null,8,["text"]))),64)),(r(),o(c,null,s(3,(e=>d(h,{text:"text"+e,border:"",radius:"s l"},null,8,["text"]))),64))])),_:1})])),_:1}),d(k,null,{default:u((()=>[d(h,{text:"text props","text-props":{color:"error"}}),d(h,null,{default:u((()=>[d(B,{color:"primary"},{default:u((()=>[i("slot")])),_:1}),d(B,{color:"error"},{default:u((()=>[i(" text")])),_:1}),d(B,{color:"success"},{default:u((()=>[i(" text")])),_:1})])),_:1}),d(h,{size:"3xl",text:"size"}),d(h,{size:"8xl",text:"size"})])),_:1})])),_:1})])),_:1}),d(T,{label:{labelPlacement:"top"}},{default:u((()=>[d(z,{label:"c-radio 禁用"},{default:u((()=>[d(k,null,{default:u((()=>[d(h,{text:"正常"}),d(h,{text:"禁用",disabled:""})])),_:1})])),_:1}),d(z,{label:"c-radio-group 禁用"},{default:u((()=>[d(k,{disabled:""},{default:u((()=>[d(h,{text:"正常"}),d(h,{text:"禁用",disabled:""})])),_:1})])),_:1}),d(z,{label:"c-form-item 禁用",disabled:""},{default:u((()=>[d(k,null,{default:u((()=>[d(h,{text:"正常"}),d(h,{text:"禁用",disabled:""})])),_:1})])),_:1})])),_:1}),d(T,{label:{labelPlacement:"top"},disabled:""},{default:u((()=>[d(z,{label:"c-form 禁用",disabled:""},{default:u((()=>[d(k,{disabled:""},{default:u((()=>[d(h,{text:"正常"}),d(h,{text:"禁用",disabled:""})])),_:1})])),_:1}),d(z,null,{default:u((()=>[d(f(e),{disabled:""},{default:u((()=>[d(f(t),{text:"正常"}),d(h,{text:"禁用",disabled:""})])),_:1})])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-33642b0d"]]);export{j as default};