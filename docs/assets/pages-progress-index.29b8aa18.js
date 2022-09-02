import{_ as e}from"./c-input-number.0b2b1c25.js";import{I as l,d as t,j as a,m as s,k as r,l as u,z as n,D as o,e as c,f as p,o as i,c as d,w as v,a as f,q as x,p as m,h as _,t as h,s as w,v as g,x as y,A as z,B as b,g as j,b as S,r as P,F as k}from"./index.755831c4.js";import{_ as I}from"./c-col.59998bd4.js";import{_ as $}from"./c-line.07a64fe4.js";import{_ as A}from"./c-text.4c147d33.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as D}from"./c-spin.4f0ac5e7.js";import{_ as T}from"./c-row.663e0132.js";import"./c-button.cae903fe.js";import"./c-icon.bed78de6.js";import"./c-input.33926dab.js";import"./getRect.f646b03f.js";const q=l({default:{}});var B=C(t({__name:"c-progress",props:{props:null,cClase:null,cStyle:null,c:{default:"default"},percent:null,size:null,activeProps:null,bgProps:null,textProps:null,showText:null,round:null},setup(e){const l=e,t=z(),S=b(),P=q,k=a((()=>l.props?s(l.props,r(l)):l)),I=a((()=>s(P.value[k.value.c],k.value))),C=a((()=>(I.value.percent||0)+"%")),D=a((()=>u(I.value.showText))),T=a((()=>{const{size:e,textProps:l}=I.value;if(e)return n(t.value,e);if(!D.value)return o(8);const a=(null==l?void 0:l.size)||S.value[(null==l?void 0:l.c)||"default"].size||"m";return n(t.value,a).replace(/\d+/,(e=>Math.floor(1.25*Number(e))+""))})),B=a((()=>{const{size:e,textProps:l}=I.value;return!D.value||(null==l?void 0:l.size)?null==l?void 0:l.size:e?`calc(${T.value} * 0.8)`:void 0})),F=a((()=>s({x:[]},{x:I.value.cStyle}).x)),H=a((()=>s({x:["c-progress"]},{x:I.value.cClass}).x)),M=a((()=>({position:"absolute",top:"0",left:"0",transition:"width 0.3s cubic-bezier(0.4, 0, 0.2, 1)"}))),N=a((()=>s({color:"primary",length:C.value,width:T.value,round:I.value.round,cStyle:[M.value]},I.value.activeProps))),R=a((()=>s({color:"#fff",size:B.value,cStyle:[M.value,{padding:`0 calc(${T.value} * 0.3)`,width:C.value,lineHeight:T.value,flexDirection:"column",alignItems:"stretch",textAlign:"end",whiteSpace:"nowrap"}]},I.value.textProps)));return(e,l)=>{const t=c(p("c-line"),$),a=c(p("c-text"),A),s=j;return i(),d(s,{class:g(x(H)),style:y(x(F))},{default:v((()=>[f(t,{style:{width:"100%"},props:{length:"100%",width:x(T),round:x(I).round,...x(I).bgProps}},null,8,["props"]),f(t,{props:x(N)},null,8,["props"]),x(D)?(i(),d(a,{key:0,props:x(R)},{default:v((()=>[m(e.$slots,"default",{},(()=>[_(h(x(C)),1)]),!0)])),_:3},8,["props"])):w("v-if",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-27563934"]]);var F=C(t({__name:"index",setup(t){const a=l(50);return(l,t)=>{const s=c(p("c-input-number"),e),r=c(p("c-col"),I),u=c(p("c-progress"),B),n=c(p("c-spin"),D),o=c(p("c-row"),T),x=j;return i(),d(x,{class:"page"},{default:v((()=>[f(x,{class:"main"},{default:v((()=>[f(o,{vertical:"",gutter:"20"},{default:v((()=>[f(r,null,{default:v((()=>[f(s,{value:a.value,"onUpdate:value":t[0]||(t[0]=e=>a.value=e),step:10,min:0,max:100,"input-props":{cStyle:{width:"auto"}}},null,8,["value"])])),_:1}),(i(),S(k,null,P(["2","","m","l","3xl"],(e=>f(r,{key:"1-"+e},{default:v((()=>[f(u,{size:e,percent:a.value},null,8,["size","percent"])])),_:2},1024))),64)),(i(),S(k,null,P(["","m","l","3xl"],(e=>f(r,{key:"2-"+e},{default:v((()=>[f(u,{size:e,percent:a.value,round:""},null,8,["size","percent"])])),_:2},1024))),64)),f(r,null,{default:v((()=>[f(u,{percent:a.value,"show-text":""},null,8,["percent"])])),_:1}),f(r,null,{default:v((()=>[f(u,{percent:a.value,size:"5xl","show-text":""},null,8,["percent"])])),_:1}),(i(),S(k,null,P(["primary","success","error","warning","#7546c9"],(e=>f(r,{key:"c1-"+e},{default:v((()=>[f(u,{"active-props":{color:e},percent:a.value,"show-text":"",round:""},null,8,["active-props","percent"])])),_:2},1024))),64)),f(r,null,{default:v((()=>[f(u,{percent:a.value,"show-text":""},{default:v((()=>[_("加载中...")])),_:1},8,["percent"])])),_:1}),f(r,null,{default:v((()=>[f(u,{percent:a.value,"text-props":{cStyle:"width: 100%; text-align:center"},"show-text":""},{default:v((()=>[_("加载中...")])),_:1},8,["percent"])])),_:1}),f(r,null,{default:v((()=>[f(u,{percent:a.value,"text-props":{cStyle:"text-align:start"},"show-text":""},{default:v((()=>[_("加载中...")])),_:1},8,["percent"])])),_:1}),f(r,null,{default:v((()=>[f(u,{percent:a.value,"text-props":{cStyle:"min-width: 40rpx; align-items:flex-end"},"show-text":""},{default:v((()=>[f(n,{"icon-size":"xs",color:"#fff"})])),_:1},8,["percent"])])),_:1}),f(r,null,{default:v((()=>[f(u,{percent:a.value,"text-props":{cStyle:"width: 100%; align-items:flex-end"},"show-text":""},{default:v((()=>[f(n,{"icon-size":"xs",color:"error"})])),_:1},8,["percent"])])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-801ec1a4"]]);export{F as default};
