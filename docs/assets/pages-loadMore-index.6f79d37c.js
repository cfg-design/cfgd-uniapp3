import{d as e,j as o,m as l,k as a,p as r,b as s,e as n,o as t,c as p,w as c,g as u,q as i,v as d,x,y as m,b6 as v,f,S as g}from"./index.fdbeec0e.js";import{_}from"./c-line.fb2bbc90.js";import{_ as y}from"./c-spin.5dccfec6.js";import{_ as b}from"./c-text.c2422f4b.js";import{_ as M}from"./plugin-vue_export-helper.21dcd24c.js";import"./c-icon.6ad6a0f7.js";var S=M(e({__name:"c-load-more",props:{props:null,cClase:null,cStyle:null,c:{default:"default"},loading:null,noMore:null,text:null,loadingText:null,noMoreText:null,textProps:null,lineProps:null,spinProps:null},emits:["load-more"],setup(e,{emit:g}){const M=e,S=v(),j=o((()=>M.props?l(M.props,a(M)):M)),h=o((()=>l(S.value[j.value.c],j.value))),P=o((()=>r(h.value.loading))),k=o((()=>r(h.value.noMore))),w=o((()=>P.value?h.value.loadingText||"正在加载":k.value?h.value.noMoreText||"没有更多了":h.value.text||"加载更多")),L=o((()=>l({length:"160",color:"placeholder",cStyle:[{flexShrink:1,margin:"0 30rpx"}]},h.value.lineProps))),T=o((()=>l({cStyle:[{whiteSpace:"nowrap"}]},h.value.textProps))),C=o((()=>l({color:"main",size:"l",cStyle:[{marginRight:"20rpx"}]},h.value.spinProps))),z=o((()=>l({x:[]},{x:h.value.cStyle}).x)),q=o((()=>l({x:["c-load-more"]},{x:h.value.cClass}).x)),I=()=>!P.value&&!k.value&&g("load-more");return(e,o)=>{const l=s(n("c-line"),_),a=s(n("c-spin"),y),r=s(n("c-text"),b),v=f;return t(),p(v,{class:x(i(q)),style:m(i(z)),onClick:I},{default:c((()=>[u(l,{props:i(L)},null,8,["props"]),i(P)?(t(),p(a,{key:0,props:i(C)},null,8,["props"])):d("v-if",!0),u(r,{props:i(T),text:i(w)},null,8,["props","text"]),u(l,{props:i(L)},null,8,["props"])])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-773b2c28"]]);const j=e({__name:"index",setup(e){const o=()=>{g({title:"click load-more"})};return(e,l)=>{const a=s(n("c-load-more"),S),r=f;return t(),p(r,{class:"page"},{default:c((()=>[u(a,{onLoadMore:o}),u(a,{loading:"",onLoadMore:o}),u(a,{"no-more":"",onLoadMore:o}),u(a,{text:"点击或上拉加载更多",onLoadMore:o}),u(a,{"loading-text":"正在努力中",loading:""}),u(a,{"no-more-text":"全部加载完毕","no-more":""}),u(a,{"text-props":{color:"error",size:"xl"},"line-props":{color:"primary"}}),u(a,{"spin-props":{color:"warning"},loading:""})])),_:1})}}});export{j as default};