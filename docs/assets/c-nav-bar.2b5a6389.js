import{_ as l}from"./c-icon.6ad6a0f7.js";import{d as e,j as t,m as s,k as a,b as c,e as o,o as r,c as p,w as n,g as i,s as u,q as f,v as x,x as v,y as _,aU as d,f as m}from"./index.fdbeec0e.js";import{_ as b}from"./c-text.c2422f4b.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";var y=k(e({__name:"c-nav-bar",props:{props:null,cClase:null,cStyle:null,c:{default:"default"},leftIcon:null,leftIconProps:null,leftText:null,leftTextProps:null,title:null,titleProps:null},emits:["click:left","click:right"],setup(e,{emit:k}){const y=e,P=d(),g=t((()=>y.props?s(y.props,a(y)):y)),I=t((()=>s(P.value[g.value.c],g.value))),h=t((()=>{var l;return I.value.leftIcon||(null==(l=I.value.leftIconProps)?void 0:l.name)})),j=t((()=>s({x:[]},{x:I.value.cStyle}).x)),T=t((()=>s({x:["c-nav-bar"]},{x:I.value.cClass}).x));return(e,t)=>{const s=c(o("c-icon"),l),a=c(o("c-text"),b),d=m;return r(),p(d,{class:v(f(T)),style:_(f(j))},{default:n((()=>[i(d,{class:"c-nav-bar__left",onClick:t[0]||(t[0]=l=>k("click:left"))},{default:n((()=>[u(e.$slots,"left",{},(()=>[f(h)?(r(),p(s,{key:0,props:{size:"27px",...f(I).leftIconProps},name:f(h)},null,8,["props","name"])):x("v-if",!0),f(I).leftText?(r(),p(a,{key:1,props:{size:"14px",...f(I).leftTextProps},text:f(I).leftText},null,8,["props","text"])):x("v-if",!0)]),!0)])),_:3}),i(d,{class:"c-nav-bar__right",onClick:t[1]||(t[1]=l=>k("click:right"))},{default:n((()=>[u(e.$slots,"right",{},void 0,!0)])),_:3}),i(d,{class:"c-nav-bar__title"},{default:n((()=>[u(e.$slots,"default",{},(()=>[i(a,{props:{size:"16px",lines:1,...f(I).titleProps},text:f(I).title},null,8,["props","text"])]),!0)])),_:3})])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-667b7ad6"]]);export{y as _};