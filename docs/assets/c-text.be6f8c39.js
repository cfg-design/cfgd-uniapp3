import{d as e,j as l,m as a,k as s,l as t,p as u,o,c,w as n,h as r,t as i,q as v,s as d,v as p,x,y as f,u as y,z as b,A as m,B as _}from"./index.1797c27c.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";var w=h(e({__name:"c-text",props:{props:null,cClass:null,cStyle:null,c:{default:"default"},text:null,color:null,size:null,strong:null,italic:null,underline:null,del:null,lines:null,selectable:{type:Boolean},userSelect:{type:Boolean},space:null,decode:{type:Boolean}},setup(e){const h=e,w=y(),S=b(),g=m(),k=l((()=>h.props?a(h.props,s(h)):h)),z=l((()=>a(g.value[k.value.c],k.value))),B=l((()=>{const{color:e}=z.value;return e?w.value[e]||e:w.value.main})),j=l((()=>t(S.value,z.value.size||"m"))),C=l((()=>u(z.value.strong)?500:0)),q=l((()=>u(z.value.italic)?"italic":"")),A=l((()=>{const{underline:e,del:l}=z.value;return u(e)?"underline":u(l)?"line-through":""})),D=l((()=>{const e={color:B.value,fontSize:j.value};C.value&&(e.fontWeight=C.value),q.value&&(e.fontStyle=q.value),A.value&&(e.textDecoration=A.value);const l=Number(z.value.lines);return l&&(e["-webkit-line-clamp"]=l,e["text-overflow"]="ellipsis",e.overflow="hidden",e.display="-webkit-box",e["-webkit-box-orient"]="vertical"),a({x:[e]},{x:z.value.cStyle}).x})),I=l((()=>a({x:["c-text"]},{x:z.value.cClass}).x));return(e,l)=>{const a=_;return o(),c(a,{class:x(v(I)),style:f(v(D)),selectable:v(u)(v(z).selectable),"user-select":v(u)(v(z).userSelect),space:v(z).space,decode:v(u)(v(z).decode)},{default:n((()=>[r(i(v(z).text),1),v(z).text?p("v-if",!0):d(e.$slots,"default",{key:0},void 0,!0)])),_:3},8,["class","style","selectable","user-select","space","decode"])}}}),[["__scopeId","data-v-6e9d8e1c"]]);export{w as _};