import{b as d,f as c,j as o,o as h,a as m,d as u}from"./index-d028ff7c.js";var l=d("div");l.displayName="Box";var f=c(function(e,t){const{size:i,centerContent:s=!0,...a}=e,n=s?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return o.jsx(l,{ref:t,boxSize:i,__css:{...n,flexShrink:0,flexGrow:0},...a})});f.displayName="Square";var g=c(function(e,t){const{size:i,...s}=e;return o.jsx(f,{size:i,ref:t,borderRadius:"9999px",...s})});g.displayName="Circle";var y=c(function(e,t){const{className:i,centerContent:s,...a}=h(e),n=m("Container",e);return o.jsx(d.div,{ref:t,className:u("chakra-container",i),...a,__css:{...n,...s&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});y.displayName="Container";var v=c(function(e,t){const{borderLeftWidth:i,borderBottomWidth:s,borderTopWidth:a,borderRightWidth:n,borderWidth:x,borderStyle:b,borderColor:C,...j}=m("Divider",e),{className:S,orientation:p="horizontal",__css:N,...W}=h(e),_={vertical:{borderLeftWidth:i||n||x||"1px",height:"100%"},horizontal:{borderBottomWidth:s||a||x||"1px",width:"100%"}};return o.jsx(d.hr,{ref:t,"aria-orientation":p,...W,__css:{...j,border:"0",borderColor:C,borderStyle:b,..._[p],...N},className:u("chakra-divider",S)})});v.displayName="Divider";const B=({children:r,style:e})=>o.jsx(l,{as:"section",py:["20px","20px","20px"],...e,children:r}),D=({children:r,style:e})=>o.jsxs(y,{position:"relative",mx:"auto",px:["20px","20px","40px"],maxWidth:"1200px",...e,children:[r,o.jsx(v,{py:"10px"})]});export{l as B,D as M,B as S};