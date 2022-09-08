import{_ as e}from"./c-icon.6ad6a0f7.js";import{ab as a,a5 as l,d as u,V as t,I as n,ag as r,ai as s,as as c,aj as o,ak as i,al as v,am as f,an as d,ay as p,az as m,aA as y,aB as h,aC as _,j as b,m as x,k as g,p as k,l as S,D as A,J as j,av as z,K as C,b as q,e as O,o as w,c as B,w as T,g as I,q as P,v as W,x as D,y as E,s as $,u as F,z as U,M,aD as N,f as R,a1 as J,aE as K}from"./index.fdbeec0e.js";import{_ as V}from"./c-text.c2422f4b.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import{t as H,k as L,f as Q}from"./c-form.dce9bfad.js";function X(e){for(var a,l=[];!(a=e.next()).done;)l.push(a.value);return l}function Y(e,a,l){for(var u=0,t=l.length;u<t;){if(e(a,l[u]))return!0;u+=1}return!1}var Z="function"==typeof Object.is?Object.is:function(e,a){return e===a?0!==e||1/e==1/a:e!=e&&a!=a};function ee(e,a,l,u){var t=X(e);function n(e,a){return ae(e,a,l.slice(),u.slice())}return!Y((function(e,a){return!Y(n,a,e)}),X(a),t)}function ae(e,l,u,t){if(Z(e,l))return!0;var n,r,s=H(e);if(s!==H(l))return!1;if("function"==typeof e["fantasy-land/equals"]||"function"==typeof l["fantasy-land/equals"])return"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](l)&&"function"==typeof l["fantasy-land/equals"]&&l["fantasy-land/equals"](e);if("function"==typeof e.equals||"function"==typeof l.equals)return"function"==typeof e.equals&&e.equals(l)&&"function"==typeof l.equals&&l.equals(e);switch(s){case"Arguments":case"Array":case"Object":if("function"==typeof e.constructor&&"Promise"===(n=e.constructor,null==(r=String(n).match(/^function (\w*)/))?"":r[1]))return e===l;break;case"Boolean":case"Number":case"String":if(typeof e!=typeof l||!Z(e.valueOf(),l.valueOf()))return!1;break;case"Date":if(!Z(e.valueOf(),l.valueOf()))return!1;break;case"Error":return e.name===l.name&&e.message===l.message;case"RegExp":if(e.source!==l.source||e.global!==l.global||e.ignoreCase!==l.ignoreCase||e.multiline!==l.multiline||e.sticky!==l.sticky||e.unicode!==l.unicode)return!1}for(var c=u.length-1;c>=0;){if(u[c]===e)return t[c]===l;c-=1}switch(s){case"Map":return e.size===l.size&&ee(e.entries(),l.entries(),u.concat([e]),t.concat([l]));case"Set":return e.size===l.size&&ee(e.values(),l.values(),u.concat([e]),t.concat([l]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var o=L(e);if(o.length!==L(l).length)return!1;var i=u.concat([e]),v=t.concat([l]);for(c=o.length-1;c>=0;){var f=o[c];if(!a(f,l)||!ae(l[f],e[f],i,v))return!1;c-=1}return!0}var le=l((function(e,a){return ae(e,a,[],[])}));function ue(e,a){return function(e,a,l){var u,t;if("function"==typeof e.indexOf)switch(typeof a){case"number":if(0===a){for(u=1/a;l<e.length;){if(0===(t=e[l])&&1/t===u)return l;l+=1}return-1}if(a!=a){for(;l<e.length;){if("number"==typeof(t=e[l])&&t!=t)return l;l+=1}return-1}return e.indexOf(a,l);case"string":case"boolean":case"function":case"undefined":return e.indexOf(a,l);case"object":if(null===a)return e.indexOf(a,l)}for(;l<e.length;){if(le(e[l],a))return l;l+=1}return-1}(a,e,0)>=0}function te(e,a,l){var u,t=typeof e;switch(t){case"string":case"number":return 0===e&&1/e==-1/0?!!l._items["-0"]||(a&&(l._items["-0"]=!0),!1):null!==l._nativeSet?a?(u=l._nativeSet.size,l._nativeSet.add(e),l._nativeSet.size===u):l._nativeSet.has(e):t in l._items?e in l._items[t]||(a&&(l._items[t][e]=!0),!1):(a&&(l._items[t]={},l._items[t][e]=!0),!1);case"boolean":if(t in l._items){var n=e?1:0;return!!l._items[t][n]||(a&&(l._items[t][n]=!0),!1)}return a&&(l._items[t]=e?[!1,!0]:[!0,!1]),!1;case"function":return null!==l._nativeSet?a?(u=l._nativeSet.size,l._nativeSet.add(e),l._nativeSet.size===u):l._nativeSet.has(e):t in l._items?!!ue(e,l._items[t])||(a&&l._items[t].push(e),!1):(a&&(l._items[t]=[e]),!1);case"undefined":return!!l._items[t]||(a&&(l._items[t]=!0),!1);case"object":if(null===e)return!!l._items.null||(a&&(l._items.null=!0),!1);default:return(t=Object.prototype.toString.call(e))in l._items?!!ue(e,l._items[t])||(a&&l._items[t].push(e),!1):(a&&(l._items[t]=[e]),!1)}}var ne=function(){function e(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return e.prototype.add=function(e){return!te(e,!0,this)},e.prototype.has=function(e){return te(e,!1,this)},e}(),re=l((function(e,a){for(var l=[],u=0,t=e.length,n=a.length,r=new ne,s=0;s<n;s+=1)r.add(a[s]);for(;u<t;)r.add(e[u])&&(l[l.length]=e[u]),u+=1;return l}));var se=G(u({__name:"c-checkbox",props:{props:null,cClase:null,cStyle:null,iconWrapClase:null,iconWrapStyle:null,c:{default:"default"},activeType:null,color:null,size:null,value:null,checked:null,disabled:null,readonly:null,iconProps:null,text:null,textProps:null,border:null,borderBottom:null,radius:null,round:null,path:null,noFeedback:null},emits:["update:checked"],setup(a,{emit:l}){const u=a,J=t(r,n()),K=t(s,n(!1)),G=t(c,null),H=t(o,n()),L=t(i,n("")),Q=t(v,n(!1)),X=t(f,n()),Y=t(d,n(!1)),Z=t(p,n(!1)),ee=t(m,n({})),ae=t(y,(()=>0)),le=t(h,null),ue=t(_,null),te=ae(),ne=F(),re=U(),se=M(),ce=N(),oe=b((()=>u.props?x(u.props,g(u)):u)),ie=b((()=>x(ee.value,oe.value))),ve=b((()=>x(ce.value[ie.value.c],ie.value))),fe=b((()=>ve.value.value||te)),de=n(k(ve.value.checked)),pe=b((()=>{const{color:e}=ve.value;return e?ne.value[e]||e:ne.value.primary})),me=b((()=>k(ve.value.readonly))),ye=b((()=>k(ve.value.disabled))),he=b((()=>ye.value||Z.value||Q.value||K.value)),_e=b((()=>S(re.value,ve.value.size))),be=b((()=>_e.value||L.value||A(re.value.m))),xe=b((()=>be.value.replace(/\d+/,(e=>Math.floor(1.2*Number(e))+"")))),ge=b((()=>k(ve.value.border))),ke=b((()=>k(ve.value.borderBottom))),Se=b((()=>void 0!==ve.value.radius?ve.value.radius:"s")),Ae=b((()=>j(se.value,Se.value))),je=b((()=>k(ve.value.round))),ze=b((()=>je.value?"9999px":Ae.value)),Ce=b((()=>ve.value.path||X.value)),qe=b((()=>Ce.value&&J.value?J.value[Ce.value]:void 0)),Oe=b((()=>z(qe.value,"change"))),we=b((()=>Ce.value&&H.value?H.value[Ce.value]:void 0)),Be=b((()=>k(ve.value.noFeedback)||Y.value)),Te=b((()=>{const e={};return ge.value?(e.borderWidth="1px",e.borderRadius=ze.value,e.padding=`calc(${be.value} * 0.5)`):ke.value&&(e.borderBottomWidth="1px",e.paddingBottom=`calc(${be.value} * 0.5)`),e})),Ie=b((()=>{const e={};return!Be.value&&we.value&&(e.borderColor=ne.value.error),e})),Pe=b((()=>x({x:[Te.value,Ie.value]},{x:ve.value.cStyle}).x)),We=b((()=>x({x:["c-checkbox",{"c-checkbox__disabled":!K.value&&!Q.value&&!Z.value&&ye.value}]},{x:ve.value.cClass}).x)),De=b((()=>{var e;return"icon"===ve.value.activeType?pe.value:(null==(e=ve.value.iconProps)?void 0:e.color)||"#fff"})),Ee=b((()=>`calc(${be.value} * 1.4)`)),$e=b((()=>({width:Ee.value,height:Ee.value}))),Fe=b((()=>{const{activeType:e}=ve.value;return e&&"icon"===e||!de.value?void 0:pe.value})),Ue=b((()=>({borderColor:!Be.value&&we.value?ne.value.error:Fe.value}))),Me=b((()=>({backgroundColor:Fe.value}))),Ne=b((()=>x({x:[$e.value,Me.value,Ue.value]},{x:ve.value.iconWrapStyle}).x)),Re=b((()=>x({x:["c-checkbox__icon-wrap"]},{x:ve.value.iconWrapClass}).x)),Je=(e,a)=>{clearTimeout(Je.timer),Je.timer=setTimeout((()=>G&&Ce.value&&G(Ce.value,void 0,e)),a)};Je.timer=0;const Ke=e=>{de.value=e,le&&le(fe.value,de.value)},Ve=()=>{he.value||me.value||(Ke(!de.value),l("update:checked",de.value))};return void 0!==ve.value.checked?Ke(de.value):void 0!==(null==ue?void 0:ue.value)&&(de.value=ue.value.includes(fe.value)),C((()=>ve.value.checked),(e=>Ke(!!e))),C((()=>de.value),(()=>Oe.value&&Je("change"))),C((()=>null==ue?void 0:ue.value),(e=>{de.value=!!e&&e.includes(fe.value)})),(a,l)=>{const u=q(O("c-icon"),e),t=R,n=q(O("c-text"),V);return w(),B(t,{class:D(P(We)),style:E(P(Pe)),onClick:Ve},{default:T((()=>[I(t,{class:D(P(Re)),style:E(P(Ne))},{default:T((()=>[de.value?(w(),B(u,{key:0,props:{name:"check-line",size:P(xe),...P(ve).iconProps},color:P(De)},null,8,["props","color"])):W("v-if",!0)])),_:1},8,["class","style"]),I(t,{class:"c-checkbox__text-wrap"},{default:T((()=>[$(a.$slots,"default",{},(()=>[P(ve).text?(w(),B(n,{key:0,props:{size:P(be),...P(ve).textProps},text:P(ve).text},null,8,["props","text"])):W("v-if",!0)]),!0)])),_:3})])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-3b1fc80f"]]);var ce=G(u({__name:"c-checkbox-group",props:{props:null,cClase:null,cStyle:null,c:{default:"default"},value:null,disabled:null,direction:null,path:null,checkbox:null},emits:["update:value"],setup(e,{emit:a}){const l=e,u=t(r,n()),o=t(s,n()),i=t(c,void 0),d=t(v,n()),S=t(f,n()),j=K(),q=b((()=>l.props?x(l.props,g(l)):l)),O=b((()=>x(j.value[q.value.c],q.value))),I=n(O.value.value),W=b((()=>k(O.value.disabled))),F=b((()=>O.value.path||S.value)),U=b((()=>F.value&&u.value?u.value[F.value]:void 0)),M=b((()=>z(U.value,"change"))),N=b((()=>x({cStyle:[{margin:A("10 0")}]},O.value.checkbox||{}))),V=b((()=>{const e={},{direction:a}=O.value;return a&&(e.flexDirection=a),e})),G=b((()=>x({x:[V.value]},{x:O.value.cStyle}).x)),H=b((()=>x({x:["c-checkbox-group",{"c-checkbox-group__disabled":!o.value&&!d.value&&W.value}]},{x:O.value.cClass}).x));let L=0;const X=(e,a)=>{clearTimeout(X.timer),X.timer=setTimeout((()=>i&&F.value&&i(F.value,void 0,e)),a)};X.timer=0;return C((()=>O.value.value),(e=>{e&&I.value&&!re(e,I.value).length&&!re(I.value,e).length||(I.value=e)})),C((()=>I.value),(()=>M.value&&X("change"))),J(p,W),J(m,N),J(y,(()=>L++)),J(h,((e,l)=>{let u=I.value||[];const t=u.includes(e);l?t||(I.value=[...u,e],a("update:value",I.value)):t&&(I.value=Q((a=>a!==e),u),a("update:value",I.value))})),J(_,I),(e,a)=>{const l=R;return w(),B(l,{class:D(P(H)),style:E(P(G))},{default:T((()=>[$(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-6c4a8d2e"]]);export{se as _,ce as a};
