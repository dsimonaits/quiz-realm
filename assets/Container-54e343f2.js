import{f as c,a as u,o as f,j as a,b as d,d as h}from"./index-3e528c0f.js";function T(r){const e=Object.assign({},r);for(let t in e)e[t]===void 0&&delete e[t];return e}var W=c(function(e,t){const s=u("Text",e),{className:i,align:n,decoration:o,casing:l,...x}=f(e),m=T({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return a.jsx(d.p,{ref:t,className:h("chakra-text",e.className),...m,...x,__css:s})});W.displayName="Text";var y=d("div");y.displayName="Box";var v=c(function(e,t){const{size:s,centerContent:i=!0,...n}=e,o=i?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return a.jsx(y,{ref:t,boxSize:s,__css:{...o,flexShrink:0,flexGrow:0},...n})});v.displayName="Square";var k=c(function(e,t){const{size:s,...i}=e;return a.jsx(v,{size:s,ref:t,borderRadius:"9999px",...i})});k.displayName="Circle";var b=c(function(e,t){const{className:s,centerContent:i,...n}=f(e),o=u("Container",e);return a.jsx(d.div,{ref:t,className:h("chakra-container",s),...n,__css:{...o,...i&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});b.displayName="Container";var C=c(function(e,t){const{borderLeftWidth:s,borderBottomWidth:i,borderTopWidth:n,borderRightWidth:o,borderWidth:l,borderStyle:x,borderColor:m,...N}=u("Divider",e),{className:g,orientation:p="horizontal",__css:j,...S}=f(e),_={vertical:{borderLeftWidth:s||o||l||"1px",height:"100%"},horizontal:{borderBottomWidth:i||n||l||"1px",width:"100%"}};return a.jsx(d.hr,{ref:t,"aria-orientation":p,...S,__css:{...N,border:"0",borderColor:m,borderStyle:x,..._[p],...j},className:h("chakra-divider",g)})});C.displayName="Divider";const z=({children:r,style:e})=>a.jsx(y,{as:"section",py:["20px","20px","20px"],...e,children:r}),B=({children:r,style:e})=>a.jsxs(b,{position:"relative",mx:"auto",px:["20px","20px","40px"],maxWidth:"1200px",...e,children:[r,a.jsx(C,{py:"10px"})]});export{y as B,B as M,z as S,W as T};
