import{_ as e,a as t}from"./c-tabs.b2e33d3b.js";import{d as o,I as l,o as r,c as a,w as s,g as c,a as i,r as u,F as n,h as p,t as m,b as v,e as d,f as x}from"./index.32a4c5fe.js";import{_ as f}from"./c-icon.20cafdd9.js";import{_ as b}from"./c-text.7e94fc52.js";import{_}from"./c-row.1148ef7f.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import"./c-badge.cdc4554f.js";import"./c-line.e2277d5b.js";import"./getRect.33b8498b.js";var y=g(o({__name:"index",setup(o){const g=l(0),y=[{text:"电脑"},{text:"手机"},{text:"平板"},{text:"购物"},{text:"娱乐"},{text:"电影"},{text:"电话"},{text:"电信"},{text:"电白"}],j=[{text:"电脑"},{text:"手机",dot:!0},{text:"平板",badge:"8"}],w=[{text:"电脑",color:"success"},{text:"手机",color:"error"},{text:"平板",color:"warning"}],h=[{text:"电脑",color:"success"},{text:"手机",color:"error",activeType:"bg"},{text:"平板",color:"warning"},{text:"平板",activeType:"bg"}];return(o,l)=>{const P=v(d("c-tabs"),e),k=v(d("c-icon"),f),T=v(d("c-text"),b),C=v(d("c-row"),_),I=v(d("c-tab-item"),t),W=x;return r(),a(W,{class:"page"},{default:s((()=>[c(P,{value:0,items:y}),c(P,{value:0,items:j}),c(P,{value:0,items:j,"c-style":[{justifyContent:"space-around"}]}),(r(),i(n,null,u(["error","success","warning"],(e=>c(P,{key:e,item:{color:e},value:0,items:y},null,8,["item"]))),64)),c(P,{value:0,items:w}),c(P,{value:0,item:{activeType:"bg"},items:y}),c(P,{value:0,item:{activeType:"bg"},items:j}),c(P,{value:0,item:{activeType:"bg"},items:w}),c(P,{value:0,item:{activeType:"bg"},items:w,"c-style":[{justifyContent:"space-around"}]}),c(P,{value:g.value,"onUpdate:value":l[0]||(l[0]=e=>g.value=e),items:h},{item:s((({item:e,index:t,active:o})=>[2==t?(r(),a(I,{key:0,props:e,value:t},{default:s((()=>[c(C,{align:"center","c-style":{flexWrap:"nowrap"}},{default:s((()=>{var t,l,r;return[c(k,{name:"search-line",color:o?e.color:null==(t=e.textProps)?void 0:t.color},null,8,["color"]),c(T,{color:o?e.color:null==(l=e.textProps)?void 0:l.color},{default:s((()=>[p(m(e.text),1)])),_:2},1032,["color"]),c(k,{name:"search-line",color:o?e.color:null==(r=e.textProps)?void 0:r.color},null,8,["color"])]})),_:2},1024)])),_:2},1032,["props","value"])):3==t?(r(),a(I,{key:1,props:e,value:t},{default:s((()=>[c(C,{align:"center","c-style":{flexWrap:"nowrap"}},{default:s((()=>{var t,l,r;return[c(k,{name:"check-line",color:o?"#fff":null==(t=e.textProps)?void 0:t.color},null,8,["color"]),c(T,{color:o?"#fff":null==(l=e.textProps)?void 0:l.color},{default:s((()=>[p(m(e.text),1)])),_:2},1032,["color"]),c(k,{name:"check-line",color:o?"#fff":null==(r=e.textProps)?void 0:r.color},null,8,["color"])]})),_:2},1024)])),_:2},1032,["props","value"])):(r(),a(I,{key:2,props:e,value:t},null,8,["props","value"]))])),_:1},8,["value"]),c(P,{value:0,items:y,item:{lineProps:{borderStyle:"dashed"}}}),c(P,{value:0,items:y,item:{lineProps:{width:"1px"}}}),c(P,{value:0,items:y,item:{lineProps:{width:"10rpx"}}}),c(P,{value:0,items:y,item:{lineProps:{width:"10rpx",round:!1}}})])),_:1})}}}),[["__scopeId","data-v-54e2b360"]]);export{y as default};