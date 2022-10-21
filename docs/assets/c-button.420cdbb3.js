import{_ as e}from"./c-spin.a20ff076.js";import{d as a,j as l,m as o,k as s,l as t,J as n,p as u,D as r,b as i,e as p,o as d,c as v,w as c,q as m,a as g,v as h,F as f,s as b,x as y,y as x,T as $,u as C,z as _,M as k,U as P}from"./index.2b2eb9d2.js";import{_ as T}from"./c-icon.ec6027b4.js";import{_ as w}from"./c-text.1f4b9c35.js";import{_ as I}from"./plugin-vue_export-helper.21dcd24c.js";var M=I(a({__name:"c-button",props:{props:null,cClass:null,cStyle:null,c:{default:"default"},formType:null,color:null,color2:null,size:null,width:null,height:null,text:null,textColor:null,textProps:null,icon:null,iconProps:null,radius:null,round:null,disabled:null,loading:null,spinProps:null,plain:null,openType:null,hoverClass:null,hoverStartTime:null,hoverStayTime:null,appParameter:null,hoverStopPropagation:null,lang:null,sessionFrom:null,sendMessageTitle:null,sendMessagePath:null,sendMessageImg:null,showMessageCard:null,groupId:null,guildId:null,publicId:null},emits:["click"],setup(a,{emit:I}){const M=a,S=$(),z=C(),j=_(),L=k(),F=l((()=>M.props?o(M.props,s(M)):M)),G=l((()=>o(S.value[F.value.c],F.value))),R=l((()=>{const{color:e}=G.value;return e?z.value[e]||e:void 0})),q=l((()=>{const{color2:e}=G.value;return e?z.value[e]||e:void 0})),A=l((()=>t(j.value,G.value.size||"m"))),D=l((()=>void 0!==G.value.radius?G.value.radius:"s")),E=l((()=>n(L.value,D.value))),J=l((()=>u(G.value.round))),N=l((()=>J.value?"9999px":E.value)),O=l((()=>u(G.value.plain))),U=l((()=>u(G.value.loading))),W=l((()=>u(G.value.disabled))),B=l((()=>r(G.value.height)||`calc(${A.value} * 2.5)`)),H=l((()=>`calc(${A.value} * 0.75)`)),K=l((()=>A.value.replace(/\d+/,(e=>Math.floor(.3*Number(e))+"")))),Q=l((()=>G.value.textColor||(R.value?O.value?R.value:"#fff":z.value.main))),V=l((()=>{const e="c-button__click",{hoverClass:a}=G.value;return a&&"none"!=a?`${e} ${a}`:e})),X=l((()=>O.value?"transparent":R.value||"#fff")),Y=l((()=>O.value?void 0:q.value?`linear-gradient(to right, ${R.value}, ${q.value})`:void 0)),Z=l((()=>{const e={};return G.value.icon&&G.value.text&&(e.marginLeft=K.value),e})),ee=l((()=>{const e={};return G.value.width&&(e.width=r(G.value.width)),B.value&&(e.height=B.value),H.value&&(e.paddingRight=H.value,e.paddingLeft=H.value),N.value&&(e.borderRadius=N.value),Y.value&&(e.backgroundImage=Y.value),X.value&&(e.backgroundColor=X.value),O.value?e.borderColor=R.value:(q.value||R.value)&&(e.borderWidth="0"),e})),ae=l((()=>o({x:[ee.value]},{x:G.value.cStyle}).x)),le=l((()=>o({x:["c-button",{"c-button__disabled":W.value}]},{x:G.value.cClass}).x)),oe=e=>I("click",e);return(a,l)=>{const o=i(p("c-spin"),e),s=i(p("c-icon"),T),t=i(p("c-text"),w),n=P;return d(),v(n,{class:y(m(le)),style:x(m(ae)),"hover-class":m(V),type:m(G).type,disabled:m(W)||m(G).loading,"form-type":m(G).formType,"open-type":m(G).openType,"hover-start-time":m(G).hoverStartTime||20,"hover-stay-time":m(G).hoverStayTime||70,"app-parameter":m(G).appParameter,"hover-stop-propagation":m(u)(m(G).hoverStopPropagation),lang:m(G).lang,"session-from":m(G).sessionFrom,"send-message-title":m(G).sendMessageTitle,"send-message-path":m(G).sendMessagePath,"send-message-img":m(G).sendMessageImg,"show-message-card":m(u)(m(G).showMessageCard),"group-id":m(G).groupId,"guild-id":m(G).guildId,"public-id":m(G).publicId,onClick:oe,onGetphonenumber:l[0]||(l[0]=e=>a.$emit("getphonenumber",e)),onGetuserinfo:l[1]||(l[1]=e=>a.$emit("getuserinfo",e)),onError:l[2]||(l[2]=e=>a.$emit("error",e)),onOpensetting:l[3]||(l[3]=e=>a.$emit("opensetting",e)),onLaunchapp:l[4]||(l[4]=e=>a.$emit("launchapp",e)),onContact:l[5]||(l[5]=e=>a.$emit("contact",e)),onChooseavatar:l[6]||(l[6]=e=>a.$emit("chooseavatar",e)),onAddgroupapp:l[7]||(l[7]=e=>a.$emit("addgroupapp",e)),onChooseaddress:l[8]||(l[8]=e=>a.$emit("chooseaddress",e)),onChooseinvoicetitle:l[9]||(l[9]=e=>a.$emit("chooseinvoicetitle",e)),onSubscribe:l[10]||(l[10]=e=>a.$emit("subscribe",e)),onLogin:l[11]||(l[11]=e=>a.$emit("login",e))},{default:c((()=>[m(U)?(d(),v(o,{key:0,props:{size:m(A),color:m(Q),direction:"row",...m(G).spinProps}},null,8,["props"])):m(G).text||m(G).icon?(d(),g(f,{key:1},[m(G).icon?(d(),v(s,{key:0,props:{size:m(A),color:m(Q),...m(G).iconProps},name:m(G).icon},null,8,["props","name"])):h("v-if",!0),m(G).text?(d(),v(t,{key:1,props:m(G).textProps,size:m(G).size,color:m(Q),"c-style":m(Z),text:m(G).text},null,8,["props","size","color","c-style","text"])):h("v-if",!0)],64)):b(a.$slots,"default",{key:2},void 0,!0)])),_:3},8,["class","style","hover-class","type","disabled","form-type","open-type","hover-start-time","hover-stay-time","app-parameter","hover-stop-propagation","lang","session-from","send-message-title","send-message-path","send-message-img","show-message-card","group-id","guild-id","public-id"])}}}),[["__scopeId","data-v-ce568c78"]]);export{M as _};
