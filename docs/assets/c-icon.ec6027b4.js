import{_ as e}from"./c-text.1f4b9c35.js";import{_ as t,d as n,j as r,m as a,k as l,b as s,e as o,o as u,c,q as i,G as p,H as f}from"./index.2b2eb9d2.js";import{_ as m}from"./_isString.25f07ec4.js";var v=Number.isInteger||function(e){return e<<0===e},x=t((function(e,t){var n=e<0?t.length+e:e;return m(t)?t.charAt(n):t[n]})),_=t((function(e,t){return e.map((function(e){for(var n,r=t,a=0;a<e.length;){if(null==r)return;n=e[a],r=v(n)?x(n,r):r[n],a+=1}return r}))})),b=t((function(e,t){return _([e],t)[0]}));const d=n({__name:"c-icon",props:{props:null,c:{default:"default"},textProps:null,family:null,name:null,size:null,color:null},setup(t){const n=t,m=p(),v=f(),x=r((()=>n.props?a(n.props,l(n)):n)),_=r((()=>a(m.value[x.value.c],x.value))),d=r((()=>_.value.family||"c-icon")),g=r((()=>_.value.name&&b([d.value,_.value.name],v.value)||_.value.name||""));return(t,n)=>{const r=s(o("c-text"),e);return u(),c(r,{props:i(_).textProps,"c-style":[{fontFamily:i(d),lineHeight:1}],size:i(_).size,color:i(_).color,text:i(g)},null,8,["props","c-style","size","color","text"])}}});export{d as _};