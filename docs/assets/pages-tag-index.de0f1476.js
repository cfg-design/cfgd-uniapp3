import{d as l,j as e,m as a,k as s,z as o,J as u,l as t,e as c,f as n,o as r,c as i,w as p,q as v,s as d,a as x,h as f,t as _,p as m,x as g,a7 as y,v as k,a8 as C,u as b,A as z,M as h,g as P,b as j,r as I,F as S,S as $}from"./index.755831c4.js";import{_ as w}from"./c-icon.bed78de6.js";import{_ as R}from"./c-text.4c147d33.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";var A=q(l({__name:"c-tag",props:{props:null,cClass:null,cStyle:null,c:{default:"default"},color:null,text:null,textColor:null,size:null,textProps:null,icon:null,iconProps:null,closable:null,closeIconProps:null,radius:null,round:null,plain:null},emits:["click","close"],setup(l,{emit:j}){const I=l,S=C(),$=b(),q=z(),A=h(),F=e((()=>I.props?a(I.props,s(I)):I)),H=e((()=>a(S.value[F.value.c],F.value))),J=e((()=>{const{color:l}=H.value;return l?$.value[l]||l:$.value.primary})),M=e((()=>o(q.value,H.value.size||S.value.default.size))),T=e((()=>u(A.value,H.value.radius))),B=e((()=>t(H.value.round))),D=e((()=>B.value?"9999px":T.value)),E=e((()=>t(H.value.plain))),G=e((()=>t(H.value.closable))),K=e((()=>E.value?J.value:H.value.textColor)),L=e((()=>`calc(${M.value} * 1.5)`)),N=e((()=>`calc(-${M.value} * 1.5 / 2)`)),O=e((()=>[{alignItems:"center",justifyContent:"center",padding:`calc(${M.value} * 0.3) calc(${M.value} * 0.5)`,borderRadius:D.value,borderColor:J.value,backgroundColor:E.value?"transparent":J.value}])),Q=e((()=>a({x:[O.value]},{x:H.value.cStyle}).x)),U=e((()=>a({x:["c-tag"]},{x:H.value.cClass}).x)),V=e((()=>a({color:K.value,textProps:{cStyle:[{marginRight:"6rpx"}]}},H.value.iconProps))),W=e((()=>[{width:L.value,height:L.value,top:N.value,right:N.value}])),X=e((()=>({cStyle:[{lineHeight:M.value}]}))),Y=e((()=>a(X.value,H.value.textProps))),Z=e((()=>({color:K.value,size:H.value.size}))),ll=e((()=>a(Y.value,Z.value))),el=l=>j("click",l),al=l=>j("close",l);return(e,a)=>{const s=c(n("c-icon"),w),o=c(n("c-text"),R),u=P;return r(),i(u,{class:k(v(U)),style:g(v(Q)),onClick:el},{default:p((()=>[v(H).icon?(r(),i(s,{key:0,props:v(V),name:v(H).icon},null,8,["props","name"])):d("v-if",!0),x(o,{props:v(ll)},{default:p((()=>[f(_(l.text),1),v(H).text?d("v-if",!0):m(e.$slots,"default",{key:0},void 0,!0)])),_:3},8,["props"]),v(G)?(r(),i(u,{key:1,class:"c-tag__close",style:g(v(W)),onClick:y(al,["stop"])},{default:p((()=>[x(s,{props:{name:"close-line",color:"#fff",size:v(M),...v(H).closeIconProps}},null,8,["props"])])),_:1},8,["style","onClick"])):d("v-if",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-a80582cc"]]);var F=q(l({__name:"index",setup(l){const e=b(),a=z(),s=()=>$({title:"点击 Tag",icon:"none"}),o=()=>$({title:"点击关闭",icon:"none"});return(l,u)=>{const t=c(n("c-tag"),A),d=P;return r(),i(d,{class:"page"},{default:p((()=>[(r(!0),j(S,null,I(v(e),((l,e)=>(r(),i(d,{key:e,class:"flex"},{default:p((()=>[x(t,{text:"标签",color:e},null,8,["color"]),x(t,{text:"标签",color:e,plain:"",round:""},null,8,["color"]),x(t,{text:"标签",color:e,plain:"",closable:""},null,8,["color"]),x(t,{text:"标签",color:e,icon:"user-5-line",radius:"0 30 0 30",plain:""},null,8,["color"]),x(t,{text:"标签",color:e,icon:"user-5-line",radius:"30 0 30 0"},null,8,["color"])])),_:2},1024)))),128)),x(d,{class:"flex"},{default:p((()=>[(r(!0),j(S,null,I(v(a),((l,e)=>(r(),i(t,{key:e,size:e,color:"primary",closable:"",onClick:s,onClose:o},{default:p((()=>[f("标签")])),_:2},1032,["size"])))),128)),x(t,{size:100},{default:p((()=>[f("标签")])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-b4ac28d8"]]);export{F as default};