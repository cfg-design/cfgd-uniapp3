import{_ as l}from"./c-button.cae903fe.js";import{I as e,d as u,U as a,ai as s,ak as n,al as r,j as t,m as o,k as v,z as p,D as i,l as d,J as c,K as m,e as f,f as b,o as x,c as _,w as P,a as g,q as y,v as B,x as C,A as h,u as j,M as k,ar as z,g as N}from"./index.755831c4.js";import{_ as R}from"./c-input.33926dab.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";const $=e({default:{},round:{minusButtonProps:{round:!0},plusButtonProps:{round:!0},inputProps:{bgColor:"transparent"}}});var w=S(u({__name:"c-input-number",props:{props:null,cClass:null,cStyle:null,c:{default:"default"},value:null,min:null,max:null,step:null,color:null,size:null,inputProps:null,plusButtonProps:null,minusButtonProps:null,disabled:null,radius:null,round:null},emits:["update:value","plus","minus"],setup(u,{expose:S,emit:w}){const A=u,I=a(s,e(!1)),M=a(n,e("")),U=a(r,e(!1)),q=h(),D=j(),J=k(),K=$,E=e(),F=t((()=>A.value||0)),G=e(F.value+""),H=t((()=>A.props?o(A.props,v(A)):A)),L=t((()=>o(K.value[H.value.c],H.value))),O=t((()=>L.value.step||1)),Q=t((()=>L.value.color||"#f2f2f2")),T=t((()=>{const{color:l}=L.value;return l&&D.value[l]?"#fff":D.value.main})),V=t((()=>p(q.value,L.value.size))),W=t((()=>V.value||M.value||i(q.value.m))),X=t((()=>d(L.value.disabled))),Y=t((()=>X.value||I.value||U.value||!1)),Z=t((()=>void 0!==L.value.radius?L.value.radius:"s")),ll=t((()=>c(J.value,Z.value))),el=t((()=>d(L.value.round))),ul=t((()=>el.value?"9999px":ll.value)),al=t((()=>{const{min:l}=L.value;return void 0!==l&&F.value<=l})),sl=t((()=>{const{max:l}=L.value;return void 0!==l&&F.value>=l})),nl=t((()=>({radius:0,size:W.value,color:Q.value,textColor:T.value}))),rl=t((()=>[{borderRadius:ul.value}])),tl=t((()=>o({x:[rl.value]},{x:L.value.cStyle}).x)),ol=t((()=>o({x:["c-input-number"]},{x:L.value.cClass}).x)),vl=t((()=>({width:`calc(${W.value} * 4)`,margin:"0 4rpx"}))),pl=t((()=>o({radius:0,inputAlign:"center",size:W.value,bgColor:Q.value,disabled:Y.value,cStyle:[vl.value],placeholder:" "},L.value.inputProps))),il=l=>{if(void 0===l)return 0;const{min:e,max:u}=L.value;return void 0!==e&&l<e?e:void 0!==u&&l>u?u:(l=>{let e=l+"";if(!/\./.test(e))return l;let u="";"-"===e[0]&&(e=e.replace("-",""),u="-");const[a,s]=e.split(".");let n=Math.round(Number(s.replace(/(.{5})$/,".$1")))+"00000",r=Number(a);return n.length-s.length==1&&(++r,n=(n+"").replace(/^./,"")),Number(u+r+"."+n)})(l)},dl=(l,e)=>{const u=il(l);A.value!==u&&(w("update:value",u),e)?w(e,u):u!=l?(G.value="",z((()=>{G.value=u+""}))):G.value=u+""},cl=()=>{const l=F.value-O.value;dl(l,"minus")},ml=()=>{const l=F.value+O.value;dl(l,"plus")},fl=l=>l&&dl(Number(l)),bl=({detail:l})=>dl(Number(l.value)||0);return m((()=>F.value),(l=>dl(l))),S({inputRef:E}),(e,u)=>{const a=f(b("c-button"),l),s=N;return x(),_(s,{class:B(y(ol)),style:C(y(tl))},{default:P((()=>[g(a,{props:{icon:"subtract-line",...y(nl),...y(L).minusButtonProps},disabled:y(Y)||y(al),onClick:cl},null,8,["props","disabled"]),g(R,{ref_key:"inputRef",ref:E,props:y(pl),value:G.value,type:"number","onUpdate:value":fl,onBlur:bl},null,8,["props","value"]),g(a,{props:{icon:"add-line",...y(nl),...y(L).plusButtonProps},disabled:y(Y)||y(sl),onClick:ml},null,8,["props","disabled"])])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-056faa79"]]);export{w as _};