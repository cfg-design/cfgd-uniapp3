import{_ as e}from"./c-text.326c1c36.js";import{d as l,a5 as a,T as s,I as u,a6 as t,a7 as r,a8 as n,a9 as i,aa as o,ab as c,ac as v,ad as m,ae as d,j as f,X as _,v as b,A as p,Y as g,af as k,ag as h,ah as B,ai as y,e as x,f as P,o as z,c as I,w as j,a as q,l as w,k as A,m as M,h as L,p as T,t as $,q as C,x as F,aj as J,ak as R,z as W,g as D}from"./index.a39ee5e8.js";import{_ as N}from"./c-icon.5dd30e6e.js";import{_ as S}from"./c-line.39516120.js";import{_ as X,m as Y,g as E}from"./plugin-vue_export-helper.54492111.js";var G=X(l({__name:"c-form-item",props:{c:{default:"default"},viewBind:null,mainBind:null,contentBind:null,size:null,path:null,label:null,labelPlacement:null,labelWidth:null,labelAlign:null,labelJustify:null,labelBind:null,labelTextProps:null,rightIcon:null,rightIconProps:null,errorProps:null,disabled:null,noFeedback:null,noLabel:null,noRequireMark:null,noBorderBottom:null,lineProps:null},emits:["click"],setup(l,{emit:X}){const G=l,H=a((e=>!!e.required)),K=s(t,u()),O=s(r,u("")),Q=s(n,u(!1)),U=s(i,u(!1)),V=s(o,u(!1)),Z=s(c,u(!1)),ee=s(v,u(!1)),le=s(m,u()),ae=s(d,u()),se=F(),ue=J(),te=f((()=>Y(ue.value[G.c],{...le.value}))),re=f((()=>Y(te.value,G))),ne=f((()=>re.value.path)),ie=f((()=>ne.value&&K.value?K.value[ne.value]:void 0)),oe=f((()=>_(Array,ie.value)?!!H(ie.value):!!ie.value&&ie.value.required)),ce=f((()=>b(se.value,re.value.size))),ve=f((()=>ce.value||O.value||p(se.value.m))),me=f((()=>ve.value.replace(/\d+/,(e=>Math.floor(1.2*Number(e))+"")))),de=f((()=>E(re.value.disabled))),fe=f((()=>E(re.value.noFeedback)||U.value)),_e=f((()=>E(re.value.noRequireMark)||V.value)),be=f((()=>E(re.value.noBorderBottom)||Z.value)),pe=f((()=>p(re.value.labelWidth))),ge=f((()=>E(re.value.noLabel)||ee.value)),ke=f((()=>{const e={};return"top"===re.value.labelPlacement&&(e.flexDirection="column",e.alignItems="stretch"),[e]})),he=f((()=>Y(re.value.mainBind,{style:ke.value}))),Be=f((()=>{const e={},{labelPlacement:l,labelAlign:a,labelJustify:s}=re.value;return"top"===l?e.marginBottom=p(8):pe.value&&(e.width=pe.value),a&&(e.alignSelf=a,e.alignItems=a),s&&(e.justifyContent=s),[e]})),ye=f((()=>ne.value&&ae.value?ae.value[ne.value]:void 0)),xe=f((()=>{var e;return ye.value?null==(e=ye.value[0])?void 0:e.message:void 0})),Pe=f((()=>{const e={};return pe.value&&(e.marginLeft=pe.value),[e]})),ze=f((()=>Y(re.value.errorProps,{textBind:{class:["c-form-item__error"],style:Pe.value}}))),Ie=e=>X("click",e);return g(k,ve),g(h,de),g(B,ne),g(y,fe),(l,a)=>{const s=x(P("c-text"),e),u=R,t=W,r=x(P("c-icon"),N),n=D,i=x(P("c-line"),S);return z(),I(n,M({class:"c-form-item"},w(re).viewBind,{class:[{"c-form-item__disabled":!w(Q)&&w(de)}],onClick:Ie}),{default:j((()=>[q(n,M({class:"c-form-item__main"},w(he)),{default:j((()=>[w(ge)?T("v-if",!0):A(l.$slots,"label",{key:0},(()=>[!w(_e)&&w(oe)||w(re).label?(z(),I(u,M({key:0,class:"c-form-item__label"},w(re).labelBind,{style:w(Be)}),{default:j((()=>[!w(_e)&&w(oe)?(z(),I(s,M({key:0},{textBind:{class:["c-form-item__required-mark"]}},{color:"error",size:w(ve)}),{default:j((()=>[L("*")])),_:1},16,["size"])):T("v-if",!0),q(s,M(w(re).labelTextProps,{size:w(ve)}),{default:j((()=>[L($(w(re).label),1)])),_:1},16,["size"])])),_:1},16,["style"])):T("v-if",!0)]),!0),q(n,M({class:"c-form-item__content"},w(re).contentBind),{default:j((()=>[A(l.$slots,"default",{},(()=>[q(t,null,{default:j((()=>[T(" 左右布局，不能没有元素 ")])),_:1})]),!0),w(re).rightIcon?(z(),I(r,M({key:0},w(re).rightIconProps,{name:w(re).rightIcon,size:w(me)}),null,16,["name","size"])):T("v-if",!0)])),_:3},16)])),_:3},16),!w(fe)&&w(xe)?A(l.$slots,"error",{key:0,errMsg:w(xe)},(()=>[q(s,M({color:"error"},w(ze)),{default:j((()=>[L($(w(xe)),1)])),_:1},16)]),!0):T("v-if",!0),w(be)?T("v-if",!0):(z(),I(i,C(M({key:1},w(re).lineProps)),null,16))])),_:3},16,["class"])}}}),[["__scopeId","data-v-c6623834"]]);export{G as _};