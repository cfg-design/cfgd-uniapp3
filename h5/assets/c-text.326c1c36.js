import{d as e,j as l,v as a,o as t,c as u,w as n,k as s,m as o,l as i,u as r,x as v,y as c,z as d}from"./index.a39ee5e8.js";import{_ as p,m as f,g as x}from"./plugin-vue_export-helper.54492111.js";var m=p(e({__name:"c-text",props:{c:{default:"default"},textBind:null,color:null,size:null,strong:null,italic:null,underline:null,del:null,lines:null},setup(e){const p=e,m=r(),_=v(),b=c(),g=l((()=>f(b.value[p.c],p))),w=l((()=>{const{color:e}=g.value;return e?m.value[e]||e:m.value.main})),h=l((()=>a(_.value,g.value.size||_.value.m))),y=l((()=>x(g.value.strong)?500:0)),k=l((()=>x(g.value.italic)?"italic":"")),z=l((()=>{const{underline:e,del:l}=g.value;return x(e)?"underline":x(l)?"line-through":""})),j=l((()=>{const e={color:w.value,fontSize:h.value};y.value&&(e.fontWeight=y.value),k.value&&(e.fontStyle=k.value),z.value&&(e.textDecoration=z.value);const l=Number(g.value.lines);return l&&(e["-webkit-line-clamp"]=l,e["text-overflow"]="ellipsis",e.overflow="hidden",e.display="-webkit-box",e["-webkit-box-orient"]="vertical"),[e]}));return(e,l)=>{const a=d;return t(),u(a,o({class:"c-text"},i(g).textBind,{style:i(j)}),{default:n((()=>[s(e.$slots,"default",{},void 0,!0)])),_:3},16,["style"])}}}),[["__scopeId","data-v-193d5f44"]]);export{m as _};
