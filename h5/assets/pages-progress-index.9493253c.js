import{_ as e}from"./c-input-number.398e5d19.js";import{I as t,d as l,j as s,v as a,A as r,e as n,f as u,o,c as i,w as c,a as p,m as d,l as v,k as x,h as f,t as m,p as h,x as _,y as w,g,b as z,r as y,F as b}from"./index.a39ee5e8.js";import{_ as j}from"./c-line.39516120.js";import{_ as P}from"./c-text.326c1c36.js";import{_ as k,m as B,g as I}from"./plugin-vue_export-helper.54492111.js";import{_ as $}from"./c-spin.197345eb.js";import"./c-button.7d6b0ee1.js";import"./c-icon.5dd30e6e.js";import"./c-input.f3b61023.js";const T=t({default:{activeProps:{color:"primary"}}});var A=k(l({__name:"c-progress",props:{c:{default:"default"},percent:null,size:null,activeProps:null,bgProps:null,textProps:null,showText:null,round:null},setup(e){const t=e,l=_(),z=w(),y=T,b=s((()=>B(y.value[t.c],t))),k=s((()=>(b.value.percent||0)+"%")),$=s((()=>I(b.value.showText))),A=s((()=>{const{size:e,textProps:t}=b.value;if(e)return a(l.value,e);if(!$.value)return r(8);const s=(null==t?void 0:t.size)||z.value[(null==t?void 0:t.c)||"default"].size;return a(l.value,s).replace(/\d+/,(e=>Math.floor(1.25*Number(e))+""))})),F=s((()=>{const{size:e,textProps:t}=b.value;return!$.value||(null==t?void 0:t.size)?null==t?void 0:t.size:e?`calc(${A.value} * 0.8)`:void 0})),H=s((()=>B({textBind:{style:[{padding:`0 calc(${A.value} * 0.3)`,width:k.value,lineHeight:A.value}]}},b.value.textProps)));return(t,l)=>{const s=n(u("c-line"),j),a=n(u("c-text"),P),r=g;return o(),i(r,{class:"c-progress"},{default:c((()=>[p(s,d({length:"100%",width:v(A),round:e.round},v(b).bgProps),null,16,["width","round"]),p(s,d({length:v(k),width:v(A),round:e.round},v(b).activeProps),null,16,["length","width","round"]),v($)?(o(),i(a,d({key:0,color:"#fff",size:v(F)},v(H)),{default:c((()=>[x(t.$slots,"default",{},(()=>[f(m(v(k)),1)]),!0)])),_:3},16,["size"])):h("v-if",!0)])),_:3})}}}),[["__scopeId","data-v-8f1cdea2"]]);var F=k(l({__name:"index",setup(l){const s=t(0);return(t,l)=>{const a=n(u("c-input-number"),e),r=n(u("c-progress"),A),d=n(u("c-spin"),$),v=g;return o(),i(v,{class:"page"},{default:c((()=>[p(v,{class:"main"},{default:c((()=>[p(a,{value:s.value,"onUpdate:value":l[0]||(l[0]=e=>s.value=e),step:10,min:0,max:100},null,8,["value"]),(o(),z(b,null,y(["2","","m","l","3xl"],(e=>p(r,{key:"1-"+e,size:e,percent:s.value},null,8,["size","percent"]))),64)),(o(),z(b,null,y(["","m","l","3xl"],(e=>p(r,{key:"2-"+e,size:e,percent:s.value,round:""},null,8,["size","percent"]))),64)),p(r,{percent:s.value,"show-text":""},null,8,["percent"]),p(r,{percent:s.value,size:"5xl","show-text":""},null,8,["percent"]),(o(),z(b,null,y(["primary","success","error","warning","#7546c9"],(e=>p(r,{key:"c1-"+e,"active-props":{color:e},percent:s.value,"show-text":"",round:""},null,8,["active-props","percent"]))),64)),p(r,{percent:s.value,"show-text":""},{default:c((()=>[f("加载中...")])),_:1},8,["percent"]),p(r,{percent:s.value,"text-props":{textBind:{style:["width: 100%; text-align:center"]}},"show-text":""},{default:c((()=>[f("加载中...")])),_:1},8,["percent"]),p(r,{percent:s.value,"text-props":{textBind:{style:["text-align:start"]}},"show-text":""},{default:c((()=>[f("加载中...")])),_:1},8,["percent"]),p(r,{percent:s.value,"show-text":""},{default:c((()=>[p(d,{"view-bind":{style:["align-items: flex-end; min-width: 20rpx"]},"icon-size":"xs",color:"#fff"})])),_:1},8,["percent"]),p(r,{percent:s.value,"text-props":{textBind:{style:["width: 100%"]}},"show-text":""},{default:c((()=>[p(d,{"view-bind":{style:["align-items: flex-end"]},"icon-size":"xs",color:"error"})])),_:1},8,["percent"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-3c26a84a"]]);export{F as default};
