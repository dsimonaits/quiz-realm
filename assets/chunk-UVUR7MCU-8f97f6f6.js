import{c as P,r as o,d as x,j as t,b as d,A as w,f as A,a as D,o as G,D as M,h as j}from"./index-0fc2b410.js";var[L,R]=P({strict:!1,name:"ButtonGroupContext"});function z(r){const[e,n]=o.useState(!r);return{ref:o.useCallback(a=>{a&&n(a.tagName==="BUTTON")},[]),type:e?"button":void 0}}function h(r){const{children:e,className:n,...s}=r,i=o.isValidElement(e)?o.cloneElement(e,{"aria-hidden":!0,focusable:!1}):e,a=x("chakra-button__icon",n);return t.jsx(d.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...s,className:a,children:i})}h.displayName="ButtonIcon";function g(r){const{label:e,placement:n,spacing:s="0.5rem",children:i=t.jsx(w,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:l,...p}=r,m=x("chakra-button__spinner",a),u=n==="start"?"marginEnd":"marginStart",c=o.useMemo(()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[u]:e?s:0,fontSize:"1em",lineHeight:"normal",...l}),[l,e,u,s]);return t.jsx(d.div,{className:m,...p,__css:c,children:i})}g.displayName="ButtonSpinner";var F=A((r,e)=>{const n=R(),s=D("Button",{...n,...r}),{isDisabled:i=n==null?void 0:n.isDisabled,isLoading:a,isActive:l,children:p,leftIcon:m,rightIcon:u,loadingText:c,iconSpacing:f="0.5rem",type:b,spinner:_,spinnerPlacement:y="start",className:v,as:B,...k}=G(r),I=o.useMemo(()=>{const T={...s==null?void 0:s._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...s,...!!n&&{_focus:T}}},[s,n]),{ref:C,type:E}=z(B),S={rightIcon:u,leftIcon:m,iconSpacing:f,children:p};return t.jsxs(d.button,{ref:M(e,C),as:B,type:b??E,"data-active":j(l),"data-loading":j(a),__css:I,className:x("chakra-button",v),...k,disabled:i||a,children:[a&&y==="start"&&t.jsx(g,{className:"chakra-button__spinner--start",label:c,placement:"start",spacing:f,children:_}),a?c||t.jsx(d.span,{opacity:0,children:t.jsx(N,{...S})}):t.jsx(N,{...S}),a&&y==="end"&&t.jsx(g,{className:"chakra-button__spinner--end",label:c,placement:"end",spacing:f,children:_})]})});F.displayName="Button";function N(r){const{leftIcon:e,rightIcon:n,children:s,iconSpacing:i}=r;return t.jsxs(t.Fragment,{children:[e&&t.jsx(h,{marginEnd:i,children:e}),s,n&&t.jsx(h,{marginStart:i,children:n})]})}export{F as B};