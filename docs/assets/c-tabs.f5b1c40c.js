import{_ as l}from"./c-text.4c147d33.js";import{I as e,d as a,U as t,j as s,m as u,k as o,l as r,D as c,e as v,f as p,o as n,c as i,w as d,a as m,p as x,q as b,h as y,t as f,x as _,s as g,v as S,u as k,g as P,K as C,a0 as h,b as j,r as w,F as T}from"./index.755831c4.js";import{_ as I}from"./c-badge.9db1238b.js";import{_ as $}from"./c-line.07a64fe4.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";const z=e({default:{}}),A=Symbol(),B=Symbol(),D=Symbol(),F=Symbol(),K=e({default:{}});var U=q(a({__name:"c-tab-item",props:{props:null,cClass:null,cStyle:null,c:{default:"default"},value:null,color:null,activeType:null,text:null,textProps:null,badge:null,badgeProps:null,dot:null,lineProps:null},emits:["click"],setup(a,{emit:C}){const h=a,j=t(A,e("")),w=t(B,(()=>0)),T=t(D,null),q=t(F,e()),z=w(),U=k(),E=K,G=s((()=>h.props?u(h.props,o(h)):h)),H=s((()=>u(E.value[G.value.c],{...q.value}))),J=s((()=>u(H.value,G.value))),L=s((()=>{const{color:l}=J.value;return l?U.value[l]||l:U.value.primary})),M=s((()=>void 0!==J.value.value?J.value.value:z)),N=s((()=>M.value===j.value)),O=s((()=>r(J.value.dot))),Q=s((()=>{var l;return N.value?"bg"!==J.value.activeType?J.value.color:"#fff":null==(l=J.value.textProps)?void 0:l.color})),R=s((()=>{var l;const e={};return"bg"===J.value.activeType&&(e.marginBottom=c((null==(l=J.value.lineProps)?void 0:l.width)||4),N.value&&(e.backgroundColor=L.value)),e})),V=s((()=>u({x:[R.value]},{x:J.value.cStyle}).x)),W=s((()=>u({x:["c-tab-item"]},{x:J.value.cClass}).x)),X=s((()=>u({color:Q.value,cStyle:[{textAlign:"center",whiteSpace:"nowrap"}]},J.value.textProps))),Y=s((()=>u({color:"error",size:"xs",round:!0,textProps:{cStyle:[{position:"absolute",top:"-6rpx",left:"calc(100% - 6rpx)"}]}},J.value.badgeProps))),Z=s((()=>u({color:L.value,width:4,length:"100%",round:!0},J.value.lineProps))),ll=l=>{T&&T(M.value),C("click",l)};return(e,a)=>{const t=v(p("c-text"),l),s=P,u=v(p("c-badge"),I),o=v(p("c-line"),$);return n(),i(s,{class:S(b(W)),style:_(b(V)),onClick:ll},{default:d((()=>[m(s,{class:"c-tab-item__content"},{default:d((()=>[x(e.$slots,"default",{},(()=>[m(t,{props:b(X)},{default:d((()=>[y(f(b(J).text),1)])),_:1},8,["props"])]),!0),b(O)?(n(),i(s,{key:0,class:"c-tab-item__dot",style:_({backgroundColor:b(U).error})},null,8,["style"])):b(J).badge?(n(),i(u,{key:1,props:b(Y),text:b(J).badge},null,8,["props","text"])):g("v-if",!0)])),_:3}),b(N)&&"bg"!==b(J).activeType?(n(),i(o,{key:0,props:b(Z)},null,8,["props"])):g("v-if",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-76d41cae"]]);var E=q(a({__name:"c-tabs",props:{props:null,cClass:null,cStyle:null,c:{default:"default"},value:null,item:null,items:null},emits:["update:value"],setup(l,{emit:a}){const t=l,r=z,c=e(t.value),y=s((()=>t.props?u(t.props,o(t)):t)),f=s((()=>u(r.value[y.value.c],y.value))),g=s((()=>f.value.item)),k=s((()=>u({x:[]},{x:f.value.cStyle}).x)),I=s((()=>u({x:["c-tabs"]},{x:f.value.cClass}).x));let $=0;const q=l=>{c.value!==l&&(c.value=l,a("update:value",c.value))};return C((()=>t.value),q),h(B,(()=>$++)),h(D,q),h(A,c),h(F,g),(l,e)=>{const a=v(p("c-tab-item"),U),t=P;return n(),i(t,{class:S(b(I)),style:_(b(k))},{default:d((()=>[(n(!0),j(T,null,w(b(f).items,((e,t)=>x(l.$slots,"item",{key:t,index:t,item:e,active:void 0!==e.value?e.value===c.value:t===c.value},(()=>[m(a,{props:e},null,8,["props"])]),!0))),128))])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-20529b76"]]);export{E as _,U as a};