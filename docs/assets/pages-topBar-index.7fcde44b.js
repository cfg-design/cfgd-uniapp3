import{d as a,I as e,j as t,m as s,k as l,p as o,D as r,b7 as c,$ as p,o as u,c as n,w as d,g as i,s as f,x as b,q as x,y as _,b8 as v,a0 as m,f as g,h as j,aT as h,b as y,e as w}from"./index.fdbeec0e.js";import{_ as I}from"./c-nav-bar.2b5a6389.js";import{_ as z}from"./c-tabs.26d9f639.js";import{_ as B}from"./c-line.fb2bbc90.js";import{g as T}from"./getRect.e89df46c.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as C}from"./c-text.c2422f4b.js";import"./c-icon.6ad6a0f7.js";import"./c-badge.9b02590d.js";var k=S(a({__name:"c-top-bar",props:{props:null,cClass:null,cStyle:null,c:{default:"default"},zIndex:null,top:null,noSpace:null,noFixed:null,statusBar:null},setup(a){const j=a,h=v(),y=e(""),w=e(0),I=t((()=>j.props?s(j.props,l(j)):j)),z=t((()=>s(h.value[I.value.c],I.value))),B=t((()=>o(z.value.noSpace))),S=t((()=>o(z.value.noFixed))),C=t((()=>({zIndex:Number(z.value.zIndex)||2,top:r(z.value.top),paddingTop:y.value}))),k=t((()=>{const a={};return B.value||S.value||(a.paddingTop=w.value+"px"),a})),F=t((()=>s({x:[k.value]},{x:z.value.cStyle}).x)),$=t((()=>s({x:["c-top-bar"]},{x:z.value.cClass}).x));o(z.value.statusBar)&&c({success(a){y.value=a.statusBarHeight+"px"}});return p((()=>T(m(),".c-top-bar__wrap").then((({height:a})=>{w.value=a||0})))),(a,e)=>{const t=g;return u(),n(t,{class:b(x($)),style:_(x(F))},{default:d((()=>[i(t,{class:b(["c-top-bar__wrap",{"c-top-bar__fixed":!x(S)}]),style:_(x(C))},{default:d((()=>[f(a.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-55a20b86"]]);var F=S(a({__name:"index",setup(a){const e=()=>h();return(a,t)=>{const s=y(w("c-nav-bar"),I),l=y(w("c-tabs"),z),o=y(w("c-line"),B),r=y(w("c-top-bar"),k),c=y(w("c-text"),C),p=g;return u(),n(p,{class:"page"},{default:d((()=>[i(r,{"z-index":"999","status-bar":""},{default:d((()=>[i(s,{title:"TopBar 顶部栏","left-icon":"arrow-left-s-line","onClick:left":e}),i(l,{value:0,items:[{text:"类型1"},{text:"类型2"},{text:"类型3"},{text:"c-top-bar + c-tabs"}]}),i(o)])),_:1}),i(p,{class:"title-wrap"},{default:d((()=>[i(c,{c:"h3"},{default:d((()=>[j("no-fixed")])),_:1})])),_:1}),i(r,{"no-fixed":""},{default:d((()=>[i(s,{title:"TopBar 顶部栏"})])),_:1}),i(p,{class:"title-wrap"},{default:d((()=>[i(c,{c:"h3"},{default:d((()=>[j("no-space")])),_:1})])),_:1}),i(r,{"z-index":"999",top:"500","line-props":{color:"primary"},"no-space":""},{default:d((()=>[i(s,{title:"no-space"}),i(o,{color:"error"})])),_:1}),i(p,{class:"title-wrap"},{default:d((()=>[i(c,{c:"h3"},{default:d((()=>[j("no-border-bottom")])),_:1})])),_:1}),i(r,{"line-props":{color:"primary"},"no-fixed":"","no-border-bottom":""},{default:d((()=>[i(l,{value:0,items:[{text:"类型1"},{text:"类型2"},{text:"类型3"},{text:"c-top-bar + c-tabs"}]})])),_:1})])),_:1})}}}),[["__scopeId","data-v-b7ccbde8"]]);export{F as default};