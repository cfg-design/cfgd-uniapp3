import{_ as e}from"./c-text.6f7dd3a8.js";import{d as l,V as a,I as s,b4 as t,b5 as u,b6 as o,b7 as r,j as c,m as v,k as p,p as n,D as i,b as d,e as x,o as b,c as m,w as _,g as f,s as y,q as g,y as k,v as P,x as C,u as S,b8 as j,f as h,K as w,a2 as T,a as I,F as $,r as q,b9 as z}from"./index.77e0feac.js";import{_ as B}from"./c-badge.vue_vue_type_script_setup_true_lang.b00161af.js";import{_ as D}from"./c-line.4cc7d083.js";import{_ as F}from"./_plugin-vue_export-helper.cdc0426e.js";const K=F(l({__name:"c-tab-item",props:{props:null,cClass:null,cStyle:null,c:{default:"default"},value:null,color:null,activeType:null,text:null,textProps:null,badge:null,badgeProps:null,dot:null,lineProps:null},emits:["click"],setup(l,{emit:w}){const T=l,I=a(t,s("")),$=a(u,(()=>0)),q=a(o,null),z=a(r,s()),F=$(),K=S(),V=j(),A=c((()=>T.props?v(T.props,p(T)):T)),E=c((()=>v(V.value[A.value.c],{...z.value}))),G=c((()=>v(E.value,A.value))),H=c((()=>{const{color:e}=G.value;return e?K.value[e]||e:K.value.primary})),J=c((()=>void 0!==G.value.value?G.value.value:F)),L=c((()=>J.value===I.value)),M=c((()=>n(G.value.dot))),N=c((()=>{var e;return L.value?"bg"!==G.value.activeType?G.value.color:"#fff":null==(e=G.value.textProps)?void 0:e.color})),O=c((()=>{var e;const l={};return"bg"===G.value.activeType&&(l.marginBottom=i((null==(e=G.value.lineProps)?void 0:e.width)||4),L.value&&(l.backgroundColor=H.value)),l})),Q=c((()=>v({x:[O.value]},{x:G.value.cStyle}).x)),R=c((()=>v({x:["c-tab-item"]},{x:G.value.cClass}).x)),U=c((()=>v({color:N.value,cStyle:[{whiteSpace:"nowrap"}]},G.value.textProps))),W=c((()=>v({color:"error",size:"xs",round:!0,textProps:{cStyle:[{position:"absolute",top:"-6rpx",left:"calc(100% - 6rpx)"}]}},G.value.badgeProps))),X=c((()=>v({color:H.value,width:4,length:"100%",round:!0},G.value.lineProps))),Y=e=>{q&&q(J.value),w("click",e)};return(l,a)=>{const s=d(x("c-text"),e),t=h,u=d(x("c-badge"),B),o=d(x("c-line"),D);return b(),m(t,{class:C(g(R)),style:k(g(Q)),onClick:Y},{default:_((()=>[f(t,{class:"c-tab-item__content"},{default:_((()=>[y(l.$slots,"default",{},(()=>[f(s,{props:g(U),text:g(G).text},null,8,["props","text"])]),!0),g(M)?(b(),m(t,{key:0,class:"c-tab-item__dot",style:k({backgroundColor:g(K).error})},null,8,["style"])):g(G).badge?(b(),m(u,{key:1,props:g(W),text:g(G).badge},null,8,["props","text"])):P("v-if",!0)])),_:3}),g(L)&&"bg"!==g(G).activeType?(b(),m(o,{key:0,props:g(X)},null,8,["props"])):P("v-if",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-bb89deeb"]]),V=F(l({__name:"c-tabs",props:{props:null,cClass:null,cStyle:null,c:{default:"default"},value:null,item:null,items:null},emits:["update:value"],setup(e,{emit:l}){const a=e,n=z(),i=c((()=>a.props?v(a.props,p(a)):a)),P=c((()=>v(n.value[i.value.c],i.value))),S=s(P.value.value),j=c((()=>P.value.item)),B=c((()=>v({x:[]},{x:P.value.cStyle}).x)),D=c((()=>v({x:["c-tabs"]},{x:P.value.cClass}).x));let F=0;const V=e=>{S.value!==e&&(S.value=e,l("update:value",S.value))};return w((()=>P.value.value),V),T(u,(()=>F++)),T(o,V),T(t,S),T(r,j),(e,l)=>{const a=d(x("c-tab-item"),K),s=h;return b(),m(s,{class:C(g(D)),style:k(g(B))},{default:_((()=>[(b(!0),I($,null,q(g(P).items,((l,s)=>y(e.$slots,"item",{key:s,index:s,item:l,active:void 0!==l.value?l.value===S.value:s===S.value},(()=>[f(a,{props:l},null,8,["props"])]),!0))),128))])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-c110d908"]]);export{V as _,K as a};