import{_ as e}from"./c-spin.5dccfec6.js";import{d as l,j as a,m as s,k as o,l as u,J as t,p as r,D as n,b as i,e as p,o as d,c as v,w as c,q as m,a as g,v as h,F as f,s as y,x,y as b,T as _,u as k,z as P,M as C,U as T}from"./index.fdbeec0e.js";import{_ as w}from"./c-icon.6ad6a0f7.js";import{_ as I}from"./c-text.c2422f4b.js";import{_ as M}from"./plugin-vue_export-helper.21dcd24c.js";var z=M(l({__name:"c-button",props:{props:null,cClase:null,cStyle:null,c:{default:"default"},formType:null,color:null,color2:null,size:null,width:null,height:null,text:null,textColor:null,textProps:null,icon:null,iconProps:null,radius:null,round:null,disabled:null,loading:null,spinProps:null,plain:null,openType:null,hoverClass:null,hoverStartTime:null,hoverStayTime:null,appParameter:null,hoverStopPropagation:null,lang:null,sessionFrom:null,sendMessageTitle:null,sendMessagePath:null,sendMessageImg:null,showMessageCard:null,groupId:null,guildId:null,publicId:null},emits:["click"],setup(l,{emit:M}){const z=l,S=_(),$=k(),j=P(),F=C(),L=a((()=>z.props?s(z.props,o(z)):z)),R=a((()=>s(S.value[L.value.c],L.value))),q=a((()=>{const{color:e}=R.value;return e?$.value[e]||e:void 0})),D=a((()=>{const{color2:e}=R.value;return e?$.value[e]||e:void 0})),J=a((()=>u(j.value,R.value.size||"m"))),N=a((()=>void 0!==R.value.radius?R.value.radius:"s")),U=a((()=>t(F.value,N.value))),W=a((()=>r(R.value.round))),A=a((()=>W.value?"9999px":U.value)),B=a((()=>r(R.value.plain))),E=a((()=>r(R.value.loading))),G=a((()=>r(R.value.disabled))),H=a((()=>n(R.value.height)||`calc(${J.value} * 2.5)`)),K=a((()=>`calc(${J.value} * 0.75)`)),O=a((()=>J.value.replace(/\d+/,(e=>Math.floor(.3*Number(e))+"")))),Q=a((()=>R.value.textColor||(q.value?B.value?q.value:"#fff":$.value.main))),V=a((()=>{const e="c-button__click",{hoverClass:l}=R.value;return l&&"none"!=l?`${e} ${l}`:e})),X=a((()=>B.value?"transparent":q.value||"#fff")),Y=a((()=>B.value?void 0:D.value?`linear-gradient(to right, ${q.value}, ${D.value})`:void 0)),Z=a((()=>{const e={};return R.value.icon&&R.value.text&&(e.marginLeft=O.value),e})),ee=a((()=>{const e={};return R.value.width&&(e.width=n(R.value.width)),H.value&&(e.height=H.value),K.value&&(e.paddingRight=K.value,e.paddingLeft=K.value),A.value&&(e.borderRadius=A.value),Y.value&&(e.backgroundImage=Y.value),X.value&&(e.backgroundColor=X.value),B.value?e.borderColor=q.value:(D.value||q.value)&&(e.borderWidth="0"),e})),le=a((()=>s({x:[ee.value]},{x:R.value.cStyle}).x)),ae=a((()=>s({x:["c-button",{"c-button__disabled":G.value}]},{x:R.value.cClass}).x)),se=e=>M("click",e);return(l,a)=>{const s=i(p("c-spin"),e),o=i(p("c-icon"),w),u=i(p("c-text"),I),t=T;return d(),v(t,{class:x(m(ae)),style:b(m(le)),"hover-class":m(V),type:m(R).type,disabled:m(G)||m(R).loading,"form-type":m(R).formType,"open-type":m(R).openType,"hover-start-time":m(R).hoverStartTime||20,"hover-stay-time":m(R).hoverStayTime||70,"app-parameter":m(R).appParameter,"hover-stop-propagation":m(r)(m(R).hoverStopPropagation),lang:m(R).lang,"session-from":m(R).sessionFrom,"send-message-title":m(R).sendMessageTitle,"send-message-path":m(R).sendMessagePath,"send-message-img":m(R).sendMessageImg,"show-message-card":m(r)(m(R).showMessageCard),"group-id":m(R).groupId,"guild-id":m(R).guildId,"public-id":m(R).publicId,onClick:se},{default:c((()=>[m(E)?(d(),v(s,{key:0,props:{size:m(J),color:m(Q),direction:"row",...m(R).spinProps}},null,8,["props"])):m(R).text||m(R).icon?(d(),g(f,{key:1},[m(R).icon?(d(),v(o,{key:0,props:{size:m(J),color:m(Q),...m(R).iconProps},name:m(R).icon},null,8,["props","name"])):h("v-if",!0),m(R).text?(d(),v(u,{key:1,props:m(R).textProps,size:m(R).size,color:m(Q),"c-style":m(Z),text:m(R).text},null,8,["props","size","color","c-style","text"])):h("v-if",!0)],64)):y(l.$slots,"default",{key:2},void 0,!0)])),_:3},8,["class","style","hover-class","type","disabled","form-type","open-type","hover-start-time","hover-stay-time","app-parameter","hover-stop-propagation","lang","session-from","send-message-title","send-message-path","send-message-img","show-message-card","group-id","guild-id","public-id"])}}}),[["__scopeId","data-v-43740e40"]]);export{z as _};