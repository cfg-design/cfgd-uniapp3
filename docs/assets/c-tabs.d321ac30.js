import{_ as e}from"./c-text.326c1c36.js";import{I as l,d as a,T as t,j as u,A as o,e as s,f as r,o as n,c,w as v,a as i,k as d,m as p,l as m,h as b,t as f,p as _,u as g,g as y,K as x,Y as k,b as P,r as w,q as B,E as j,F as T}from"./index.a39ee5e8.js";import{_ as h}from"./c-badge.37237f35.js";import{_ as S}from"./c-line.39516120.js";import{_ as C,m as I,g as $}from"./plugin-vue_export-helper.54492111.js";const q=l({default:{}}),z=Symbol(),A=Symbol(),E=Symbol(),F=Symbol(),K=l({default:{color:"primary",badgeProps:{color:"error",size:"xs",round:!0},lineProps:{width:4,round:!0}}});var Y=C(a({__name:"c-tab-item",props:{c:{default:"default"},viewBind:null,value:null,color:null,activeType:null,text:null,textProps:null,badge:null,badgeProps:null,dot:null,dotBind:null,lineProps:null},emits:["click"],setup(a,{emit:x}){const k=a,P=t(z,l("")),w=t(A,(()=>0)),B=t(E,null),j=t(F,l()),T=w(),C=g(),q=K,Y=u((()=>I(q.value[k.c],{...j.value}))),D=u((()=>I(Y.value,k))),G=u((()=>{const{color:e}=D.value;return e&&C.value[e]||e})),H=u((()=>void 0!==D.value.value?D.value.value:T)),J=u((()=>H.value===P.value)),L=u((()=>$(D.value.dot))),M=u((()=>I({style:[{backgroundColor:C.value.error}]},D.value.dotBind))),N=u((()=>{var e;return J.value?"bg"!==D.value.activeType?D.value.color:"#fff":null==(e=D.value.textProps)?void 0:e.color})),O=u((()=>{var e;return[{paddingBottom:o(null==(e=D.value.lineProps)?void 0:e.width),backgroundColor:J.value&&"bg"===D.value.activeType?G.value:""}]})),Q=e=>{B&&B(H.value),x("click",e)};return(l,a)=>{const t=s(r("c-text"),e),u=y,o=s(r("c-badge"),h),g=s(r("c-line"),S);return n(),c(u,p({class:"c-tab-item",style:m(O)},m(D).viewBind,{onClick:Q}),{default:v((()=>[i(u,{class:"c-tab-item__content"},{default:v((()=>[d(l.$slots,"default",{},(()=>[i(t,p(m(D).textProps,{color:m(N)}),{default:v((()=>[b(f(m(D).text),1)])),_:1},16,["color"])]),!0),m(L)?(n(),c(u,p({key:0,class:"c-tab-item__dot"},m(M)),null,16)):m(D).badge?(n(),c(o,p({key:1},m(D).badgeProps,{text:m(D).badge}),null,16,["text"])):_("v-if",!0),m(J)&&"bg"!==m(D).activeType?(n(),c(g,p({key:2,color:m(D).color},m(D).lineProps),null,16,["color"])):_("v-if",!0)])),_:3})])),_:3},16,["style"])}}}),[["__scopeId","data-v-0a4c1493"]]);var D=C(a({__name:"c-tabs",props:{c:{default:"default"},viewBind:null,value:null,item:null,items:null},emits:["update:value"],setup(e,{emit:a}){const t=e,o=q,b=l(t.value),f=u((()=>I(o.value[t.c],t))),_=u((()=>f.value.item));let g=0;const h=e=>{b.value!==e&&(b.value=e,a("update:value",b.value))};return x((()=>t.value),h),k(A,(()=>g++)),k(E,h),k(z,b),k(F,_),(e,l)=>{const a=s(r("c-tab-item"),Y),t=y;return n(),c(t,p({class:"c-tabs"},m(f).viewBind),{default:v((()=>[(n(!0),P(T,null,w(m(f).items,((l,t)=>d(e.$slots,"item",{key:t,index:t,item:l,active:void 0!==l.value?l.value===b.value:t===b.value},(()=>[i(a,B(j(l)),null,16)]),!0))),128))])),_:3},16)}}}),[["__scopeId","data-v-c1dc3906"]]);export{D as _,Y as a};