import{_ as l}from"./c-button.670bc10e.js";import{d as e,V as a,I as u,ai as s,ak as r,al as n,j as t,m as o,k as v,l as p,D as i,p as c,J as d,K as m,b,e as f,o as x,c as _,w as y,g,q as h,x as C,y as N,z as P,u as j,M as k,aN as z,ar as B,f as R}from"./index.1797c27c.js";import{_ as S}from"./c-input.7c5258a1.js";import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";var w=$(e({__name:"c-input-number",props:{props:null,cClass:null,cStyle:null,c:{default:"default"},value:null,min:null,max:null,step:null,color:null,size:null,inputProps:null,plusButtonProps:null,minusButtonProps:null,disabled:null,radius:null,round:null},emits:["update:value","plus","minus"],setup(e,{expose:$,emit:w}){const I=e,M=a(s,u(!1)),q=a(r,u("")),A=a(n,u(!1)),D=P(),J=j(),K=k(),U=z(),V=t((()=>I.props?o(I.props,v(I)):I)),E=t((()=>o(U.value[V.value.c],V.value))),F=u(),G=t((()=>E.value.value||0)),H=u(G.value+""),L=t((()=>E.value.step||1)),O=t((()=>E.value.color||"#f2f2f2")),Q=t((()=>{const{color:l}=E.value;return l&&J.value[l]?"#fff":J.value.main})),T=t((()=>p(D.value,E.value.size))),W=t((()=>T.value||q.value||i(D.value.m))),X=t((()=>c(E.value.disabled))),Y=t((()=>X.value||M.value||A.value||!1)),Z=t((()=>void 0!==E.value.radius?E.value.radius:"s")),ll=t((()=>d(K.value,Z.value))),el=t((()=>c(E.value.round))),al=t((()=>el.value?"9999px":ll.value)),ul=t((()=>{const{min:l}=E.value;return void 0!==l&&G.value<=l})),sl=t((()=>{const{max:l}=E.value;return void 0!==l&&G.value>=l})),rl=t((()=>({radius:0,size:W.value,color:O.value,textColor:Q.value}))),nl=t((()=>[{borderRadius:al.value}])),tl=t((()=>o({x:[nl.value]},{x:E.value.cStyle}).x)),ol=t((()=>o({x:["c-input-number"]},{x:E.value.cClass}).x)),vl=t((()=>({width:`calc(${W.value} * 4)`,margin:"0 4rpx"}))),pl=t((()=>o({radius:0,inputAlign:"center",size:W.value,bgColor:O.value,disabled:Y.value,cStyle:[vl.value],placeholder:" "},E.value.inputProps))),il=l=>{if(void 0===l)return 0;const{min:e,max:a}=E.value;return void 0!==e&&l<e?e:void 0!==a&&l>a?a:(l=>{let e=l+"";if(!/\./.test(e))return l;let a="";"-"===e[0]&&(e=e.replace("-",""),a="-");const[u,s]=e.split(".");let r=Math.round(Number(s.replace(/(.{5})$/,".$1")))+"00000",n=Number(u);return r.length-s.length==1&&(++n,r=(r+"").replace(/^./,"")),Number(a+n+"."+r)})(l)},cl=(l,e)=>{const a=il(l);I.value!==a&&(w("update:value",a),e)?w(e,a):a!=l?(H.value="",B((()=>{H.value=a+""}))):H.value=a+""},dl=()=>{const l=G.value-L.value;cl(l,"minus")},ml=()=>{const l=G.value+L.value;cl(l,"plus")},bl=l=>l&&cl(Number(l)),fl=({detail:l})=>cl(Number(l.value)||0);return m((()=>G.value),(l=>cl(l))),$({inputRef:F}),(e,a)=>{const u=b(f("c-button"),l),s=R;return x(),_(s,{class:C(h(ol)),style:N(h(tl))},{default:y((()=>[g(u,{props:{icon:"subtract-line",...h(rl),...h(E).minusButtonProps},disabled:h(Y)||h(ul),onClick:dl},null,8,["props","disabled"]),g(S,{ref_key:"inputRef",ref:F,props:h(pl),value:H.value,type:"number","onUpdate:value":bl,onBlur:fl},null,8,["props","value"]),g(u,{props:{icon:"add-line",...h(rl),...h(E).plusButtonProps},disabled:h(Y)||h(sl),onClick:ml},null,8,["props","disabled"])])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-07076d60"]]);export{w as _};
