import{d as e,j as l,A as r,o as a,c as t,m as u,l as o,u as s,B as d,g as n}from"./index.a39ee5e8.js";import{_ as v,m as i,g as c}from"./plugin-vue_export-helper.54492111.js";var p=v(e({__name:"c-line",props:{c:{default:"default"},viewBind:null,length:null,width:null,color:null,borderStyle:null,vertical:null,round:null},setup(e){const v=e,p=s(),h=d(),b=l((()=>i(h.value[v.c],v))),f=l((()=>{const{color:e}=b.value;return e?p.value[e]||e:h.value.default.color})),m=l((()=>c(b.value.vertical))),y=l((()=>c(b.value.round))),g=l((()=>r(b.value.length))),_=l((()=>{const e={};let l=b.value.width||1;return("number"==typeof l||/^\d$/.test(l))&&(l=Number(l),l<2&&(e.transform=m.value?"scale(0.5, 1)":"scale(1, 0.5)",l*=2)),l=r(l),m.value?(e.borderLeftWidth=l,e.borderLeftColor=f.value,e.borderLeftStyle=b.value.borderStyle,e.width="0",e.height=g.value):(e.borderTopWidth=l,e.borderTopColor=f.value,e.borderTopStyle=b.value.borderStyle,e.width=g.value,e.height="0"),e})),w=l((()=>[_.value,{borderRadius:y.value?"9999px":""}]));return(e,l)=>{const r=n;return a(),t(r,u({class:"c-line"},o(b).viewBind,{style:o(w)}),null,16,["style"])}}}),[["__scopeId","data-v-174aa1d8"]]);export{p as _};