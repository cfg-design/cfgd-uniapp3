import{_ as l}from"./c-text.1f4b9c35.js";import{d as e,j as a,m as s,k as t,l as r,J as o,b as u,e as d,o as c,c as x,w as v,q as p,a as n,g as i,s as f,v as y,x as _,y as m,F as b,z as $,M as h,aa as C,f as S}from"./index.2b2eb9d2.js";import{_ as g}from"./c-row.6d2a1dbf.js";import{_ as j}from"./c-line.09bccd0c.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";var w=k(e({__name:"c-card",props:{props:null,cClass:null,cStyle:null,headerClass:null,headerStyle:null,bodyClass:null,bodyStyle:null,footerClass:null,footerStyle:null,c:{default:"default"},size:null,title:null,titleProps:null,extra:null,extraProps:null,radius:null},setup(e){const k=e,w=$(),z=h(),P=C(),q=a((()=>k.props?s(k.props,t(k)):k)),F=a((()=>s(P.value[q.value.c],q.value))),I=a((()=>r(w.value,F.value.size||"m"))),J=a((()=>void 0!==F.value.radius?F.value.radius:"m")),M=a((()=>o(z.value,J.value))),R=a((()=>`calc(${I.value} * 0.72) ${I.value}`)),A=a((()=>({borderRadius:M.value}))),B=a((()=>s({x:[A.value]},{x:F.value.cStyle}).x)),D=a((()=>s({x:["c-card"]},{x:F.value.cClass}).x)),E=a((()=>s({x:["c-card__header"]},{x:F.value.headerClass}).x)),G=a((()=>s({x:["c-card__body"]},{x:F.value.bodyClass}).x)),H=a((()=>s({x:["c-card__footer"]},{x:F.value.footerClass}).x)),K=a((()=>({padding:R.value}))),L=a((()=>s({x:[K.value]},{x:F.value.headerStyle}).x)),N=a((()=>({padding:R.value}))),O=a((()=>s({x:[N.value]},{x:F.value.bodyStyle}).x)),Q=a((()=>({padding:R.value}))),T=a((()=>s({x:[Q.value]},{x:F.value.footerStyle}).x)),U=a((()=>s({size:`calc(${I.value} * 1.1)`,strong:!0},F.value.titleProps)));return(e,a)=>{const s=u(d("c-text"),l),t=u(d("c-row"),g),r=S,o=u(d("c-line"),j);return c(),x(r,{class:_(p(D)),style:m(p(B))},{default:v((()=>[p(F).title||e.$slots.header||e.$slots.$header?(c(),n(b,{key:0},[i(r,{class:_(p(E)),style:m(p(L))},{default:v((()=>[f(e.$slots,"header",{},(()=>[i(t,{justify:"space-between",align:"center"},{default:v((()=>[i(s,{props:p(U),text:p(F).title},null,8,["props","text"]),f(e.$slots,"extra",{},(()=>[p(F).extra?(c(),x(s,{key:0,props:p(F).extraProps,text:p(F).extra},null,8,["props","text"])):y("v-if",!0)]),!0)])),_:3})]),!0)])),_:3},8,["class","style"]),i(o)],64)):y("v-if",!0),i(r,{class:_(p(G)),style:m(p(O))},{default:v((()=>[f(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"]),e.$slots.footer||e.$slots.$footer?(c(),n(b,{key:1},[i(o),i(r,{class:_(p(H)),style:m(p(T))},{default:v((()=>[f(e.$slots,"footer",{},void 0,!0)])),_:3},8,["class","style"])],64)):y("v-if",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-0def3337"]]);export{w as _};
