import{_ as l}from"./c-icon.bed78de6.js";import{d as e,I as a,j as s,m as o,k as r,D as u,J as n,l as p,K as i,e as c,f as d,o as v,c as t,w as m,q as g,v as h,x as y,s as w,L as x,M as f,N as b,g as _}from"./index.755831c4.js";import{_ as S}from"./c-spin.4f0ac5e7.js";import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";var L=z(e({__name:"c-image",props:{props:null,cClass:null,cStyle:null,imageClass:null,imageStyle:null,c:{default:"default"},src:null,mode:null,lazyLoad:null,fadeShow:null,webp:null,showMenuByLongpress:null,draggable:null,width:null,height:null,radius:null,round:null,iconProps:null,errorProps:null,spinProps:null,noSpin:null},emits:["error","load"],setup(e,{emit:z}){const L=e,P=x(),j=f(),k=a(!!L.src),C=a(!1),M=s((()=>L.props?o(L.props,r(L)):L)),B=s((()=>o(P.value[M.value.c],M.value))),I=s((()=>u(B.value.width))),q=s((()=>u(B.value.height))),D=s((()=>I.value?`calc(${I.value} * 0.618)`:"xl")),E=s((()=>void 0!==B.value.radius?B.value.radius:"m")),J=s((()=>n(j.value,E.value))),K=s((()=>p(B.value.round))),N=s((()=>K.value?"9999px":J.value)),R=s((()=>({width:I.value,height:q.value}))),$=s((()=>!p(B.value.noSpin)&&k.value)),A=s((()=>k.value?{width:"0",height:"0"}:o({x:[R.value]},{x:B.value.imageStyle}).x)),F=s((()=>o({x:["c-image__image"]},{x:B.value.imageClass}).x)),G=s((()=>{const l={...R.value,borderRadius:N.value};return o({x:[l]},{x:B.value.cStyle}).x})),H=s((()=>o({x:["c-image"]},{x:B.value.cClass}).x)),O=l=>{C.value=!0,k.value=!1,z("error",l)},Q=l=>{k.value=!1,z("load",l)};return i((()=>B.value.src),((l,e)=>{C.value=!1,k.value=!!l&&l!==e})),(e,a)=>{const s=c(d("c-icon"),l),o=b,r=c(d("c-spin"),S),u=_;return v(),t(u,{class:h(g(H)),style:y(g(G))},{default:m((()=>[C.value?(v(),t(s,{key:0,props:{name:"error-warning-fill",color:"placeholder",size:g(D),...g(B).errorProps}},null,8,["props"])):g(B).src?(v(),t(o,{key:1,class:h(g(F)),style:y(g(A)),src:g(B).src,mode:g(B).mode,"lazy-load":g(p)(g(B).lazyLoad),"fade-show":!1!==g(B).fadeShow,webp:g(p)(g(B).webp),"show-menu-by-longpress":g(p)(g(B).showMenuByLongpress),draggable:!1!==g(B).draggable,onError:O,onLoad:Q},null,8,["class","style","src","mode","lazy-load","fade-show","webp","show-menu-by-longpress","draggable"])):(v(),t(s,{key:2,props:{name:"image-2-fill",color:"placeholder",size:g(D),...g(B).iconProps}},null,8,["props"])),g($)?(v(),t(r,{key:3,props:{size:g(D),color:"placeholder",...g(B).spinProps}},null,8,["props"])):w("v-if",!0)])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-4497eba0"]]);export{L as _};