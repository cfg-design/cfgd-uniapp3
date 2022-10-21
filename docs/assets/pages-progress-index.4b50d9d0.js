import{_ as e}from"./c-input-number.2be4b67a.js";import{d as t,j as l,m as a,k as s,p as r,l as u,D as n,b as o,e as p,o as c,c as i,w as v,g as d,q as f,v as x,x as m,y as _,z as b,A as h,ba as g,f as w,I as y,a as j,r as z,F as S}from"./index.2b2eb9d2.js";import{_ as P}from"./c-col.ff4fd6bb.js";import{_ as k}from"./c-line.09bccd0c.js";import{_ as I}from"./c-text.1f4b9c35.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as A}from"./c-row.6d2a1dbf.js";import"./c-button.420cdbb3.js";import"./c-spin.a20ff076.js";import"./c-icon.ec6027b4.js";import"./_isString.25f07ec4.js";import"./c-input.294ac24c.js";import"./getRect.3d0f0ee2.js";var D=C(t({__name:"c-progress",props:{props:null,cClass:null,cStyle:null,c:{default:"default"},percent:null,size:null,activeProps:null,bgProps:null,textProps:null,showText:null,round:null},setup(e){const t=e,y=b(),j=h(),z=g(),S=l((()=>t.props?a(t.props,s(t)):t)),P=l((()=>a(z.value[S.value.c],S.value))),C=l((()=>(P.value.percent||0)+"%")),A=l((()=>r(P.value.showText))),D=l((()=>r(P.value.round))),R=l((()=>{const{size:e,textProps:t}=P.value;if(e)return u(y.value,e);if(!A.value)return n(8);const l=(null==t?void 0:t.size)||j.value[(null==t?void 0:t.c)||"default"].size||"m";return u(y.value,l).replace(/\d+/,(e=>Math.floor(1.25*Number(e))+""))})),T=l((()=>{const{size:e,textProps:t}=P.value;return!A.value||(null==t?void 0:t.size)?null==t?void 0:t.size:e?`calc(${R.value} * 0.8)`:void 0})),$=l((()=>{const e={};return D.value&&(e.borderRadius="9999px"),e})),q=l((()=>a({x:[$.value]},{x:P.value.cStyle}).x)),F=l((()=>a({x:["c-progress"]},{x:P.value.cClass}).x)),H=l((()=>({position:"absolute",top:"0",left:"0",transition:"width 0.3s cubic-bezier(0.4, 0, 0.2, 1)"}))),M=l((()=>a({color:"primary",length:C.value,width:R.value,cStyle:[H.value]},P.value.activeProps))),N=l((()=>a({text:C.value,color:"#fff",size:T.value,cStyle:[H.value,{padding:`0 calc(${R.value} * 0.3)`,width:C.value,lineHeight:R.value,height:R.value,flexDirection:"column",alignItems:"stretch",justifyContent:"center",textAlign:"end",whiteSpace:"nowrap"}]},P.value.textProps)));return(e,t)=>{const l=o(p("c-line"),k),a=o(p("c-text"),I),s=w;return c(),i(s,{class:m(f(F)),style:_(f(q))},{default:v((()=>[d(l,{style:{width:"100%"},props:{length:"100%",width:f(R),...f(P).bgProps}},null,8,["props"]),d(l,{props:f(M)},null,8,["props"]),f(A)?(c(),i(a,{key:0,props:f(N)},null,8,["props"])):x("v-if",!0)])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-07acec5b"]]);var R=C(t({__name:"index",setup(t){const l=y(50);return(t,a)=>{const s=o(p("c-input-number"),e),r=o(p("c-col"),P),u=o(p("c-progress"),D),n=o(p("c-row"),A),f=w;return c(),i(f,{class:"page"},{default:v((()=>[d(f,{class:"main"},{default:v((()=>[d(n,{vertical:"",gutter:"20"},{default:v((()=>[d(r,null,{default:v((()=>[d(s,{value:l.value,"onUpdate:value":a[0]||(a[0]=e=>l.value=e),step:10,min:0,max:100,"input-props":{cStyle:{width:"auto"}}},null,8,["value"])])),_:1}),(c(),j(S,null,z(["2","","m","l","3xl"],(e=>d(r,{key:"1-"+e},{default:v((()=>[d(u,{size:e,percent:l.value},null,8,["size","percent"])])),_:2},1024))),64)),(c(),j(S,null,z(["","m","l","3xl"],(e=>d(r,{key:"2-"+e},{default:v((()=>[d(u,{size:e,percent:l.value,round:""},null,8,["size","percent"])])),_:2},1024))),64)),d(r,null,{default:v((()=>[d(u,{percent:l.value,"show-text":""},null,8,["percent"])])),_:1}),d(r,null,{default:v((()=>[d(u,{percent:l.value,size:"5xl","show-text":""},null,8,["percent"])])),_:1}),(c(),j(S,null,z(["primary","success","error","warning","#7546c9"],(e=>d(r,{key:"c1-"+e},{default:v((()=>[d(u,{"active-props":{color:e},percent:l.value,"show-text":"",round:""},null,8,["active-props","percent"])])),_:2},1024))),64)),d(r,null,{default:v((()=>[d(u,{percent:l.value,"text-props":{text:"加载中..."},"show-text":""},null,8,["percent","text-props"])])),_:1}),d(r,null,{default:v((()=>[d(u,{percent:l.value,"text-props":{cStyle:"width: 100%; text-align:center",text:"加载中..."},"show-text":""},null,8,["percent","text-props"])])),_:1}),d(r,null,{default:v((()=>[d(u,{percent:l.value,"text-props":{cStyle:"text-align:start",text:"加载中..."},"show-text":""},null,8,["percent","text-props"])])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-a402d3f2"]]);export{R as default};