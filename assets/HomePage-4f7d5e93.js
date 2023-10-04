import{f as z,j as e,r as g,q as w,b as v,N as j,_ as k,L as y}from"./index-3e528c0f.js";import{o as C,Q as N}from"./QuizStore-2ece78f6.js";import{S as R}from"./chunk-ZHMYA64R-0fc90e00.js";import{T as q,S as X,M as U}from"./Container-54e343f2.js";import{H as F}from"./chunk-7OLJDQMT-aa05d97f.js";import{F as L}from"./chunk-KRPLQIP4-ef87a0c5.js";import{G as J}from"./iconBase-d9a43b8c.js";import{B as M}from"./chunk-UVUR7MCU-af8cea14.js";import{S as O}from"./chunk-SR4VX3RF-152f12a7.js";var p=z(function(a,t){const{htmlWidth:o,htmlHeight:n,alt:s,...c}=a;return e.jsx("img",{width:o,height:n,ref:t,alt:s,...c})});p.displayName="NativeImage";function K(r){const{loading:a,src:t,srcSet:o,onLoad:n,onError:s,crossOrigin:c,sizes:m,ignoreFallback:A}=r,[d,f]=g.useState("pending");g.useEffect(()=>{f(t?"loading":"pending")},[t]);const l=g.useRef(),Q=g.useCallback(()=>{if(!t)return;u();const i=new Image;i.src=t,c&&(i.crossOrigin=c),o&&(i.srcset=o),m&&(i.sizes=m),a&&(i.loading=a),i.onload=h=>{u(),f("loaded"),n==null||n(h)},i.onerror=h=>{u(),f("failed"),s==null||s(h)},l.current=i},[t,c,o,m,n,s,a]),u=()=>{l.current&&(l.current.onload=null,l.current.onerror=null,l.current=null)};return w(()=>{if(!A)return d==="loading"&&Q(),()=>{u()}},[d,Q,A]),A?"loaded":d}var H=(r,a)=>r!=="loaded"&&a==="beforeLoadOrError"||r==="failed"&&a==="onError";function P(r,a=[]){const t=Object.assign({},r);for(const o of a)o in t&&delete t[o];return t}var S=z(function(a,t){const{fallbackSrc:o,fallback:n,src:s,srcSet:c,align:m,fit:A,loading:d,ignoreFallback:f,crossOrigin:l,fallbackStrategy:Q="beforeLoadOrError",referrerPolicy:u,...i}=a,h=o!==void 0||n!==void 0,I=d!=null||f||!h,E=K({...a,crossOrigin:l,ignoreFallback:I}),b=H(E,Q),B={ref:t,objectFit:A,objectPosition:m,...I?i:P(i,["onError","onLoad"])};return b?n||e.jsx(v.img,{as:p,className:"chakra-image__placeholder",src:o,...B}):e.jsx(v.img,{as:p,src:s,srcSet:c,crossOrigin:l,loading:d,referrerPolicy:u,className:"chakra-image",...B})});S.displayName="Image";const V="/quiz-realm/assets/hero-9dd0431f.png",G="/quiz-realm/assets/hero(x2)-706e535d.png",Y="data:image/png;base64,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",T=({children:r})=>e.jsxs(L,{display:"flex",flexDirection:["column","column","row"],align:"center",pl:["0","0","45"],children:[e.jsxs(R,{gap:"20px",flex:"1",alignItems:["center","center","flex-start"],justifyContent:"center",children:[e.jsxs(F,{as:"h3",size:"xl",children:["Question ",e.jsx("br",{})," by Question, ",e.jsx("br",{})," Mastery Awaits"," "]}),e.jsx(q,{children:"Achieve Your Goals with Us"}),";",r]}),e.jsx(S,{src:"quiz-realm/hero.png",alt:"people with question marks",srcSet:`${V} 1x, ${G} 2x`,flex:"1",width:"400px"}),e.jsx(S,{position:"absolute",bottom:"0",left:"40px",src:Y,alt:"Curved line"})]}),W="_overlay_fazyq_1",_="_wrapper_fazyq_29",Z="_close_fazyq_43",D="_StartQuizBtn_fazyq_65",$="_glow_fazyq_87",ee="_animate_fazyq_1",x={overlay:W,wrapper:_,close:Z,StartQuizBtn:D,glow:$,animate:ee};function re(r){return J({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}}]})(r)}const ae=({onBtnClick:r,onCloseClick:a,linkPath:t})=>e.jsx("div",{className:x.overlay,onClick:()=>{},children:e.jsxs("div",{className:x.wrapper,children:[e.jsx("div",{className:x.close,onClick:()=>a(),children:e.jsx(re,{})}),e.jsx(M,{to:t,as:j,className:[x.StartQuizBtn,x.glow].join(" "),onClick:()=>r(),color:"var(--secondaryColor)",bg:"var(--mainColor)",_hover:{color:"white"},children:"Start Quiz"})]})}),te=g.lazy(()=>k(()=>import("./StartLearning-6ed68cf3.js"),["assets/StartLearning-6ed68cf3.js","assets/index-3e528c0f.js","assets/index-9fd08ca8.css","assets/QuizStore-2ece78f6.js","assets/Button-3b93328f.js","assets/Container-54e343f2.js","assets/chunk-NTCQBYKE-df25982a.js","assets/chunk-ZHMYA64R-0fc90e00.js","assets/chunk-KRPLQIP4-ef87a0c5.js","assets/StyledCustomRadios-d0171d04.js","assets/index-4468c5ca.js","assets/chunk-3ASUQ6PA-6471a269.js","assets/chunk-SR4VX3RF-152f12a7.js","assets/chunk-ROURZMX4-c7157920.js","assets/chunk-7OLJDQMT-aa05d97f.js","assets/iconBase-d9a43b8c.js","assets/chunk-UVUR7MCU-af8cea14.js"])),oe=C(()=>{const r=N,a=r.startQuiz,t="/quiz-page",o=async()=>{const s=r.getQuestionsByCategoryAndTopics();r.setStartQuizData(s),r.resetStore(),r.setStartQuiz()},n=()=>{r.resetStore(),r.setStartQuiz()};return e.jsx(O,{in:!0,style:{position:"relative"},transition:{exit:{delay:1},enter:{duration:.5}},children:e.jsxs(X,{children:[e.jsx(U,{children:e.jsx(T,{children:e.jsx(g.Suspense,{fallback:e.jsx(y,{}),children:e.jsx(te,{children:"Start Learning"})})})}),a&&e.jsx(ae,{onBtnClick:o,onCloseClick:n,linkPath:t})]})})}),Ae=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));export{re as H,Ae as a};
