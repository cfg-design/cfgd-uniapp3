import{d as o,j as e,m as l,k as r,p as a,b as s,e as t,o as n,c as p,w as c,g as i,q as u,v as d,x,y as m,bb as v,f,S as g}from"./index.2b2eb9d2.js";import{_}from"./c-line.09bccd0c.js";import{_ as y}from"./c-spin.a20ff076.js";import{_ as S}from"./c-text.1f4b9c35.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";import"./c-icon.ec6027b4.js";import"./_isString.25f07ec4.js";var j=b(o({__name:"c-load-more",props:{props:null,cClass:null,cStyle:null,c:{default:"default"},loading:null,noMore:null,text:null,loadingText:null,noMoreText:null,textProps:null,lineProps:null,spinProps:null},emits:["load-more"],setup(o,{emit:g}){const b=o,j=v(),M=e((()=>b.props?l(b.props,r(b)):b)),h=e((()=>l(j.value[M.value.c],M.value))),P=e((()=>a(h.value.loading))),k=e((()=>a(h.value.noMore))),w=e((()=>P.value?h.value.loadingText||"正在加载":k.value?h.value.noMoreText||"没有更多了":h.value.text||"加载更多")),L=e((()=>l({length:"160",color:"placeholder",cStyle:[{flexShrink:1,margin:"0 30rpx"}]},h.value.lineProps))),T=e((()=>l({color:"tertiary",cStyle:[{whiteSpace:"nowrap"}]},h.value.textProps))),C=e((()=>l({color:"tertiary",size:"l",cStyle:[{marginRight:"20rpx"}]},h.value.spinProps))),z=e((()=>l({x:[]},{x:h.value.cStyle}).x)),q=e((()=>l({x:["c-load-more"]},{x:h.value.cClass}).x)),I=()=>!P.value&&!k.value&&g("load-more");return(o,e)=>{const l=s(t("c-line"),_),r=s(t("c-spin"),y),a=s(t("c-text"),S),v=f;return n(),p(v,{class:x(u(q)),style:m(u(z)),onClick:I},{default:c((()=>[i(l,{props:u(L)},null,8,["props"]),u(P)?(n(),p(r,{key:0,props:u(C)},null,8,["props"])):d("v-if",!0),i(a,{props:u(T),text:u(w)},null,8,["props","text"]),i(l,{props:u(L)},null,8,["props"])])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-4fc56154"]]);const M=o({__name:"index",setup(o){const e=()=>{g({title:"click load-more"})};return(o,l)=>{const r=s(t("c-load-more"),j),a=f;return n(),p(a,{class:"page"},{default:c((()=>[i(r,{onLoadMore:e}),i(r,{loading:"",onLoadMore:e}),i(r,{"no-more":"",onLoadMore:e}),i(r,{text:"点击或上拉加载更多",onLoadMore:e}),i(r,{"loading-text":"正在努力中",loading:""}),i(r,{"no-more-text":"全部加载完毕","no-more":""}),i(r,{"text-props":{color:"error",size:"xl"},"line-props":{color:"primary"}}),i(r,{"spin-props":{color:"warning"},loading:""})])),_:1})}}});export{M as default};