import{d as e,j as l,m as a,k as r,p as u,D as t,o as s,c as o,x as v,q as d,y as n,u as c,E as p,f as i}from"./index.1797c27c.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";var h=b(e({__name:"c-line",props:{props:null,cClase:null,cStyle:null,c:{default:"default"},length:null,width:null,color:null,borderStyle:null,vertical:null,round:null},setup(e){const b=e,h=c(),f=p(),x=l((()=>b.props?a(b.props,r(b)):b)),y=l((()=>a(f.value[x.value.c],x.value))),m=l((()=>{const{color:e}=y.value;return e?h.value[e]||e:"#ebedf0"})),_=l((()=>u(y.value.vertical))),S=l((()=>u(y.value.round))),g=l((()=>t(y.value.length))),w=l((()=>y.value.borderStyle||"solid")),C=l((()=>{const e={};let l=y.value.width||1;return("number"==typeof l||/^\d$/.test(l))&&(l=Number(l),l<2&&(e.transform=_.value?"scale(0.5, 1)":"scale(1, 0.5)",l*=2)),l=t(l),_.value?(e.borderLeftWidth=l,e.borderLeftColor=m.value,e.borderLeftStyle=w.value,e.width="0",g.value&&(e.height=g.value)):(e.borderTopWidth=l,e.borderTopColor=m.value,e.borderTopStyle=w.value,e.height="0",g.value&&(e.width=g.value)),e})),j=l((()=>[C.value,{borderRadius:S.value?"9999px":"0"}])),L=l((()=>a({x:j.value},{x:y.value.cStyle}).x)),T=l((()=>a({x:["c-line"]},{x:y.value.cClass}).x));return(e,l)=>{const a=i;return s(),o(a,{class:v(d(T)),style:n(d(L))},null,8,["class","style"])}}}),[["__scopeId","data-v-35bf1954"]]);export{h as _};
