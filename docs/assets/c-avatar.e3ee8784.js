import{_ as a}from"./c-image.af13a1d6.js";import{d as r,j as s,m as o,k as e,b as l,e as u,o as n,c,q as i,O as p}from"./index.32a4c5fe.js";const t=r({__name:"c-avatar",props:{props:null,c:{default:"default"},imageProps:null,src:null,size:null,radius:null,round:null},setup(r){const t=r,d=p(),m=s((()=>t.props?o(t.props,e(t)):t)),f=s((()=>o(d.value[m.value.c],m.value))),g=s((()=>f.value.size||100)),h=s((()=>o({cClass:["c-avatar"],cStyle:[{backgroundColor:"#fff"}],iconProps:{name:"user-5-line",color:"placeholder"}},f.value.imageProps)));return(r,s)=>{const o=l(u("c-image"),a);return n(),c(o,{props:i(h),src:i(f).src,width:i(g),height:i(g),radius:i(f).radius,round:i(f).round,onError:s[0]||(s[0]=a=>r.$emit("error",a)),onLoad:s[1]||(s[1]=a=>r.$emit("load",a))},null,8,["props","src","width","height","radius","round"])}}});export{t as _};
