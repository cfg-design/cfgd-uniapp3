import{I as l,d as e,j as a,m as t,k as o,p as r,K as s,at as c,a0 as n,a1 as u,b as i,e as p,o as f,c as v,w as d,g as m,q as x,v as _,x as y,y as g,a8 as b,u as I,f as h,a4 as w}from"./index.2b2eb9d2.js";import{_ as k}from"./c-icon.ec6027b4.js";import{_ as P}from"./c-text.1f4b9c35.js";import{_ as j}from"./c-row.6d2a1dbf.js";import{g as S}from"./getRect.3d0f0ee2.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as z}from"./c-col.ff4fd6bb.js";import"./_isString.25f07ec4.js";const T=l({default:{}});var R=C(e({__name:"c-notice-bar",props:{props:null,cClass:null,cStyle:null,c:{default:"default"},color:null,leftIcon:null,leftIconProps:null,rightIcon:null,rightIconProps:null,text:null,textProps:null,autoplay:null,speed:null,closable:null,closeIconProps:null},emits:["click","click:close"],setup(e,{emit:C}){const z=e,R=T,q=I(),D=l(0),K=l(!0),L=a((()=>{if(!D.value)return"10s";const l=B.value.speed||60;return D.value/Number(l)+"s"})),N=a((()=>{const{color:l}=B.value;return l?q.value[l]||l:q.value.primary})),A=a((()=>z.props?t(z.props,o(z)):z)),B=a((()=>t(R.value[A.value.c],A.value))),E=a((()=>{var l;return B.value.leftIcon||(null==(l=B.value.leftIconProps)?void 0:l.name)})),F=a((()=>{var l;return B.value.rightIcon||(null==(l=B.value.rightIconProps)?void 0:l.name)})),G=a((()=>r(B.value.autoplay))),H=a((()=>r(B.value.closable))),J=a((()=>t({x:[{"--color":N.value,padding:"16rpx 30rpx"}]},{x:B.value.cStyle}).x)),M=a((()=>t({x:["c-notice-bar"]},{x:B.value.cClass}).x)),O=a((()=>t({color:N.value,size:"xl",textProps:{cStyle:[{marginRight:"10rpx"}]}},B.value.leftIconProps))),Q=a((()=>t({color:N.value,size:"xl",textProps:{cStyle:[{marginLeft:"10rpx"}]}},B.value.rightIconProps))),U=a((()=>t({text:B.value.text,color:N.value,cStyle:[{whiteSpace:"nowrap"}]},B.value.textProps))),V=()=>{K.value=!1,C("click:close")},W=w(),X=()=>{clearTimeout(X.timer),G.value&&(X.num++,X.num>10||S(W,".c-notice-bar__palay").then((({width:l})=>{D.value=l||0,l||(X.timer=setTimeout(X,100))})))};return X.timer=0,X.num=0,s((()=>G.value),(l=>l&&c(X))),n(X),u((()=>clearTimeout(X.timer))),(l,e)=>{const a=h,t=i(p("c-icon"),k),o=i(p("c-text"),P),r=i(p("c-row"),j);return K.value?(f(),v(a,{key:0,class:y(x(M)),style:g(x(J)),onClick:e[0]||(e[0]=l=>C("click"))},{default:d((()=>[m(a,{class:"c-notice-bar__bg"}),m(r,{align:"center","c-style":{position:"relative",zIndex:1,width:"1px"},"no-wrap":""},{default:d((()=>[x(E)?(f(),v(t,{key:0,props:x(O),name:x(E)},null,8,["props","name"])):_("v-if",!0),m(a,{class:"c-notice-bar__text-wrap"},{default:d((()=>[m(a,{class:y({"c-notice-bar__palay":x(G)}),style:g({animationDuration:x(L)})},{default:d((()=>[m(o,{props:x(U)},null,8,["props"])])),_:1},8,["class","style"])])),_:1}),x(F)?(f(),v(t,{key:1,props:x(Q),name:x(F)},null,8,["props","name"])):_("v-if",!0),x(H)?(f(),v(a,{key:2,onClick:b(V,["stop"])},{default:d((()=>[m(t,{props:{name:"close-line",color:x(N),size:"2xl",...x(B).closeIconProps}},null,8,["props"])])),_:1},8,["onClick"])):_("v-if",!0)])),_:1})])),_:1},8,["class","style"])):_("v-if",!0)}}}),[["__scopeId","data-v-d0b8f456"]]);var q=C({},[["render",function(l,e){const a=i(p("c-notice-bar"),R),t=i(p("c-col"),z),o=i(p("c-row"),j),r=h;return f(),v(r,{class:"page"},{default:d((()=>[m(o,{gutter:"10",vertical:""},{default:d((()=>[m(t,null,{default:d((()=>[m(a,{text:"重要通知重要通知重要通知",autoplay:""})])),_:1}),m(t,null,{default:d((()=>[m(a,{text:"重要通知重要通知重要通知",speed:"120",autoplay:""})])),_:1}),m(t,null,{default:d((()=>[m(a,{color:"success",text:"重要通知重要通知重要通知"})])),_:1}),m(t,null,{default:d((()=>[m(a,{color:"error",text:"重要通知重要通知重要通知"})])),_:1}),m(t,null,{default:d((()=>[m(a,{color:"warning",text:"重要通知重要通知重要通知"})])),_:1}),m(t,null,{default:d((()=>[m(a,{text:"重要通知重要通知重要通知重要通知重要通知重要通知重要通知重要通知重要通知重要通知重要通知重要通知","left-icon":"error-warning-fill","right-icon":"arrow-right-s-line",autoplay:""})])),_:1}),m(t,null,{default:d((()=>[m(a,{text:"重要通知重要通知重要通知","left-icon":"user-5-line",closable:""})])),_:1})])),_:1})])),_:1})}]]);export{q as default};