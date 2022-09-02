import{_ as e}from"./c-text.4c147d33.js";import{I as a,d as l,U as u,ag as s,ai as c,aj as v,as as t,ak as r,al as o,an as d,am as i,j as n,m as p,k as h,l as _,z as f,D as x,J as k,av as m,K as g,e as b,f as y,o as C,c as T,w as z,a as w,q as P,h as $,t as j,x as L,s as R,v as V,u as F,A as I,M as S,g as W}from"./index.755831c4.js";import{_ as q}from"./c-spin.4f0ac5e7.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";const D=a({default:{radius:"s",color:"primary",checkedTextProps:{color:"#fff"}}});var J=A(l({__name:"c-switch",props:{props:null,cClass:null,cStyle:null,c:{default:"default"},color:null,bgColor:null,size:null,value:null,checkedValue:null,unCheckedValue:null,checkedText:null,checkedTextProps:null,unCheckedText:null,unCheckedTextProps:null,disabled:null,readonly:null,loading:null,spinProps:null,radius:null,round:null,path:null,noFeedback:null},emits:["update:value"],setup(l,{emit:A}){const J=l,K=u(s,a()),M=u(c,a(!1)),U=u(v,a()),B=u(t,void 0),E=u(r,a("")),G=u(o,a(!1)),H=u(d,a(!1)),N=u(i,a()),O=F(),Q=I(),X=S(),Y=D,Z=a(J.value),ee=n((()=>J.props?p(J.props,h(J)):J)),ae=n((()=>p(Y.value[ee.value.c],ee.value))),le=n((()=>{const{color:e}=ae.value;return e?O.value[e]||e:O.value.primary})),ue=n((()=>{const{bgColor:e}=ae.value;return e?O.value[e]||e:"#dbdbdb"})),se=n((()=>{const{checkedValue:e}=ae.value;return void 0===e||""===e||!0===e||e})),ce=n((()=>{const{unCheckedValue:e}=ae.value;return void 0!==e&&""!==e&&!1!==e&&e})),ve=n((()=>se.value===Z.value)),te=n((()=>_(ae.value.loading))),re=n((()=>_(ae.value.readonly))),oe=n((()=>_(ae.value.disabled))),de=n((()=>oe.value||G.value||M.value)),ie=n((()=>f(Q.value,ae.value.size))),ne=n((()=>ie.value||E.value||x(Q.value.m))),pe=n((()=>`calc(${ne.value} * 3.2)`)),he=n((()=>`calc(${ne.value} * 1.6)`)),_e=n((()=>`calc(${ne.value} * 1.2)`)),fe=n((()=>`calc(${ne.value} * 1.4)`)),xe=n((()=>`calc(${ne.value} * 0.1)`)),ke=n((()=>`calc(-${ne.value} * 1.5)`)),me=n((()=>`calc(${ne.value} * 0.7)`)),ge=n((()=>`calc(${ne.value} * 2.1)`)),be=n((()=>k(X.value,ae.value.radius))),ye=n((()=>_(ae.value.round))),Ce=n((()=>ye.value?"9999px":be.value)),Te=n((()=>_(ae.value.noFeedback)||H.value)),ze=n((()=>ae.value.path||N.value)),we=n((()=>ze.value&&K.value?K.value[ze.value]:void 0)),Pe=n((()=>ze.value&&U.value?U.value[ze.value]:void 0)),$e=n((()=>m(we.value,"change"))),je=n((()=>{const e={borderRadius:Ce.value,minWidth:pe.value,height:he.value,backgroundColor:ue.value};return!Te.value&&Pe.value&&(e.borderWidth="1px",e.borderColor=O.value.error),e})),Le=n((()=>p({x:[je.value]},{x:ae.value.cStyle}).x)),Re=n((()=>p({x:["c-switch",{"c-switch__disabled":!M.value&&!G.value&&oe.value,"c-switch__avtive":ve.value}]},{x:ae.value.cClass}).x)),Ve=n((()=>({paddingLeft:me.value,paddingRight:ge.value,backgroundColor:le.value}))),Fe=n((()=>({paddingLeft:ge.value,paddingRight:me.value}))),Ie=n((()=>ve.value?{marginLeft:ke.value}:{marginLeft:xe.value})),Se=n((()=>[Ie.value,{width:fe.value,height:fe.value,borderRadius:Ce.value}])),We=(e,a)=>{clearTimeout(We.timer),We.timer=setTimeout((()=>B&&ze.value&&B(ze.value,void 0,e)),a)};We.timer=0;const qe=()=>{if(de.value||re.value||te.value)return;const e=Z.value!==se.value?se.value:ce.value;void 0===J.loading&&(Z.value=e),A("update:value",e)};return g((()=>J.value),(e=>{Z.value=e})),g((()=>Z.value),(()=>$e.value&&We("change"))),(a,l)=>{const u=b(y("c-text"),e),s=W,c=b(y("c-spin"),q);return C(),T(s,{class:V(P(Re)),style:L(P(Le)),onClick:qe},{default:z((()=>[w(s,{class:"c-switch__placeholder",style:L(P(Ve))},{default:z((()=>[w(u,{props:P(ae).checkedTextProps,size:P(ne)},{default:z((()=>[$(j(P(ae).checkedText),1)])),_:1},8,["props","size"]),w(u,{props:P(ae).unCheckedTextProps,size:P(ne)},{default:z((()=>[$(j(P(ae).unCheckedText),1)])),_:1},8,["props","size"])])),_:1},8,["style"]),w(s,{class:"c-switch__rail"},{default:z((()=>[w(s,{class:"c-switch__rail-left",style:L(P(Ve))},{default:z((()=>[w(u,{props:P(ae).checkedTextProps,size:P(ne)},{default:z((()=>[$(j(P(ae).checkedText),1)])),_:1},8,["props","size"])])),_:1},8,["style"]),w(s,{class:"c-switch__slider",style:L(P(Se))},{default:z((()=>[P(te)?(C(),T(c,{key:0,props:{size:P(_e),color:P(ae).color,...P(ae).spinProps}},null,8,["props"])):R("v-if",!0)])),_:1},8,["style"]),w(s,{class:"c-switch__rail-right",style:L(P(Fe))},{default:z((()=>[w(u,{props:P(ae).unCheckedTextProps,size:P(ne)},{default:z((()=>[$(j(P(ae).unCheckedText),1)])),_:1},8,["props","size"])])),_:1},8,["style"])])),_:1})])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-08b4f490"]]);export{J as _};