import{_ as e}from"./c-icon.ec6027b4.js";import{d as s,j as l,m as r,k as a,b as o,e as t,o as c,c as n,w as i,g as p,q as u,v as x,x as m,y as d,Q as v,f}from"./index.2b2eb9d2.js";import{_}from"./c-text.1f4b9c35.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";var g=b(s({__name:"c-spin",props:{props:null,cClass:null,cStyle:null,c:{default:"default"},color:null,size:null,icon:null,iconProps:null,tip:null,tipProps:null,direction:null},setup(s){const b=s,g=v(),y=l((()=>b.props?r(b.props,a(b)):b)),j=l((()=>r(g.value[y.value.c],y.value))),k=l((()=>j.value.color)),z=l((()=>{const e={},{direction:s,cStyle:l}=j.value;return s&&(e.flexDirection=s),r({x:[e]},{x:l}).x})),P=l((()=>{const{icon:e,iconProps:s,size:l}=j.value;return r({name:e||"loader-5-line",color:k.value,size:l,textProps:{cStyle:[{verticalAlign:"middle"}]}},s)})),w=l((()=>{const e={},{tip:s,direction:l,tipProps:a,size:o}=j.value;if(!s)return{};switch(l){case"column":e.marginTop="8rpx";break;case"column-reverse":e.marginBottom="8rpx";break;case"row-reverse":e.marginRight="8rpx";break;default:e.marginLeft="8rpx"}return r({size:o,color:k.value,cStyle:[e]},a)})),S=l((()=>r({x:["c-spin"]},{x:j.value.cClass}).x));return(s,l)=>{const r=o(t("c-icon"),e),a=f,v=o(t("c-text"),_);return c(),n(a,{class:m(u(S)),style:d(u(z))},{default:i((()=>[p(a,{class:"c-spin__icon-wrap"},{default:i((()=>[p(r,{props:u(P)},null,8,["props"])])),_:1}),u(j).tip?(c(),n(v,{key:0,props:u(w),text:u(j).tip},null,8,["props","text"])):x("v-if",!0)])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-00560957"]]);export{g as _};
