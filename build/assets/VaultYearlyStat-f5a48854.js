import{e6 as fe,S as B,ae as _,e7 as Fe,t as je,e8 as $e,e9 as Pe,ea as De,eb as ze,ec as Me,ed as L,ee as he,ef as He,cU as M,eg as We,B as N,at as ge,eh as Ge,aG as te,aj as Le,ei as Ue,af as pe,aD as U,aK as me,aL as ve,e5 as qe,n as O,r as h,z as S,q as g,y as $,h as I,o as C,ej as re,f as Ze,av as Ye,p as Xe,D as Ke,F as ye,M as Qe,ad as Je,am as be,an as et,ao as tt,ap as rt,aq as nt,ar as at,as as ot}from"./index-fc282d72.js";import{b as it,V as lt,p as ne,I as st}from"./saved-vaults-7a1d42f0.js";import{A as ut}from"./AssetsImage-edf90c9f.js";import{T as Te,B as ct,I as dt}from"./BasicTooltipContent-d7ff8b0d.js";function we(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}const P=e=>e.ui.filteredVaults,on=e=>e.ui.filteredVaults.searchText,ln=e=>e.ui.filteredVaults.chainIds,sn=e=>e.ui.filteredVaults.sort,un=e=>e.ui.filteredVaults.sortDirection,cn=e=>e.ui.filteredVaults.userCategory,dn=e=>e.ui.filteredVaults.vaultType,fn=e=>e.ui.filteredVaults.vaultCategory,hn=e=>e.ui.filteredVaults.platformId,gn=fe((e,t)=>t,e=>e.ui.filteredVaults,(e,t)=>t[e])((e,t)=>t),pn=B(P,e=>(e.onlyRetired?1:0)+(e.onlyPaused?1:0)+(e.onlyBoosted?1:0)+(e.onlyZappable?1:0)+(e.platformId!==null?1:0)+(e.vaultType!=="all"?1:0)+(e.vaultCategory!=="all"?1:0)+(e.sort!=="default"?1:0)+e.chainIds.length),mn=B(P,e=>e.vaultCategory!=="all"||e.userCategory!=="all"||e.vaultType!=="all"||e.onlyRetired!==!1||e.onlyPaused!==!1||e.onlyBoosted!==!1||e.onlyZappable!==!1||e.searchText!==""||e.platformId!==null||e.sort!=="default"||e.chainIds.length>0),vn=B(P,e=>e.vaultCategory!=="all"||e.vaultType!=="all"||e.onlyRetired!==!1||e.onlyPaused!==!1||e.onlyBoosted!==!1||e.onlyZappable!==!1||e.searchText!==""||e.platformId!==null||e.chainIds.length>0);B(P,e=>e.vaultCategory);function K(e){return(e||"").replace(/-/g," ").trim()}function ft(e,t=!0){const n=`g${t?"i":""}`;return new RegExp(we(e),n)}function ht(e){return new RegExp(`^w?${we(e)}w?$`,"gi")}function gt(e,t,n=!0){return(e||"").match(ft(t,n))}function pt(e,t){return gt(K(e.name),t)}function mt(e){return e.split(/[- /,]/g).map(t=>t.trim()).filter(t=>t.length>1).map(t=>ht(t))}function xe(e,t,n){if(n.length<2)return!1;if(pt(t,n))return!0;const r=mt(n);return r.length===0?!1:r.every(a=>!!(t.assetIds.some(l=>l.match(a))||pe(t)&&U(e,t.chainId,t.earnedTokenAddress).id.match(a)||M(e,t.id)&&me(e,t.id).map(i=>ve(e,i)).map(i=>i.earnedTokenAddress).map(i=>U(e,t.chainId,i)).map(i=>i.id).some(i=>i.match(a))))}const yn=(e,t)=>{const n=qe(e).map(l=>_(e,l)),r=K(t);return n.filter(l=>!(r.length>0&&!xe(e,l,r)))},vt=fe(e=>e.entities.platforms.filterIds,(e,t)=>t,(e,t)=>e.includes(t)?t:"other")((e,t)=>t),yt=e=>{const t=P(e),n=e.entities.vaults.allIds.map(o=>_(e,o)),r=e.biz.tvl.byVaultId,a=e.biz.apy.totalApy.byVaultId,l=t.userCategory==="deposited"||t.onlyRetired?Fe(e):je(e),i=bt(t.chainIds.length===0?l:t.chainIds);let u=n.filter(o=>{if(t.vaultCategory==="featured"&&!$e(e,o.id)||t.vaultCategory==="bluechip"&&!Pe(e,o.id)||t.vaultCategory==="stable"&&!De(e,o.id)||t.vaultCategory==="beefy"&&!ze(e,o.id)||t.vaultCategory==="correlated"&&!Me(e,o.id)||!i[o.chainId]||t.platformId!==null&&vt(e,o.platformId)!==t.platformId||t.onlyRetired&&!L(o)||t.onlyPaused&&!he(o)||t.onlyZappable&&!He(e,o.id)||!t.onlyRetired&&L(o)&&t.userCategory!=="deposited"||t.onlyBoosted&&!M(e,o.id)||t.vaultType==="lps"&&o.type!=="lps"||t.vaultType==="single"&&o.type!=="single"||t.userCategory==="saved"&&!it(e,o.id)||t.userCategory==="deposited"&&!We(e,o.id))return!1;const s=K(t.searchText);return!(s.length>0&&!xe(e,o,s))});if(t.sort==="default"){const o=Object.fromEntries(u.map(s=>[s.id,M(e,s.id)]));t.userCategory==="deposited"?u=N(u,s=>s.status==="eol"?-3:s.status==="paused"?-2:o[s.id]?-1:1):u=N(u,s=>o[s.id]?ge(e,s.id)?-Number.MAX_SAFE_INTEGER:-Ge(e,s.id):1)}const d=t.sortDirection==="desc"?-1:1;return t.sort==="apy"?u=N(u,o=>{if(!te(o))return 0;const s=a[o.id];if(!s)return-1;if(s.boostedTotalApy!==void 0)return d*s.boostedTotalApy;if(s.totalApy!==void 0)return d*s.totalApy;if(s.vaultApr!==void 0)return d*s.vaultApr;throw new Error("Apy type not supported")}):t.sort==="daily"?u=N(u,o=>{if(!te(o))return 0;const s=a[o.id];if(!s)return-1;if(s.boostedTotalDaily!==void 0)return d*s.boostedTotalDaily;if(s.totalDaily!==void 0)return d*s.totalDaily;if(s.vaultDaily!==void 0)return d*s.vaultDaily;throw new Error("Daily type not supported")}):t.sort==="tvl"?u=N(u,o=>{const s=r[o.id];return s?d*s.tvl.toNumber():0}):t.sort==="safetyScore"?u=N(u,o=>d*o.safetyScore):t.sort==="depositValue"?u=N(u,o=>{const s=Le(e,o.id);return d*s.toNumber()}):t.sort==="walletValue"&&(u=N(u,o=>{const s=Ue(e,o.id);return d*s.toNumber()})),u.map(o=>o.id)},bn=B(yt,e=>e.length),Tn=B(e=>e.entities.vaults.allIds.length,e=>e);function bt(e){const t={};for(const n of e)t[n]=!0;return t}const Tt=e=>({sortColumn:{...e.typography["subline-sm"],color:e.palette.text.disabled,display:"flex",alignItems:"center",justifyContent:"flex-end",textAlign:"right",background:"transparent",border:"none",boxShadow:"none",padding:0,cursor:"pointer"},sortTooltipIcon:{width:"20px",height:"20px",flexShrink:0,marginLeft:"4px","& svg":{width:"20px",height:"20px"}},sortIcon:{marginLeft:"8px",width:"9px",height:"12px",fill:"currentColor",display:"block"},sortIconHighlight:{fill:"#F5F5FF"}}),Ve=O(Tt),wt=h.memo(function({direction:t}){const n=Ve();return S("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 6 9",className:n.sortIcon,children:[g("path",{className:t==="asc"?n.sortIconHighlight:void 0,d:"M2.463.199.097 2.827a.375.375 0 0 0 .279.626h5.066a.375.375 0 0 0 .278-.626L3.355.199a.6.6 0 0 0-.892 0Z"}),g("path",{className:t==="desc"?n.sortIconHighlight:void 0,d:"M3.355 8.208 5.72 5.579a.375.375 0 0 0-.278-.626H.376a.375.375 0 0 0-.279.626l2.366 2.629a.601.601 0 0 0 .892 0Z"})]})}),wn=h.memo(function({label:t,sortKey:n,sorted:r,onChange:a,tooltip:l,className:i}){const c=Ve(),{t:u}=$(),d=h.useCallback(()=>{a(n)},[n,a]);return S("button",{className:I(c.sortColumn,i),onClick:d,children:[u(t),l,g(wt,{direction:r})]})});var q=new Map,D=new WeakMap,ae=0,xt=void 0;function Vt(e){return e?(D.has(e)||(ae+=1,D.set(e,ae.toString())),D.get(e)):"0"}function kt(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?Vt(e.root):e[t])}).toString()}function St(e){var t=kt(e),n=q.get(t);if(!n){var r=new Map,a,l=new IntersectionObserver(function(i){i.forEach(function(c){var u,d=c.isIntersecting&&a.some(function(o){return c.intersectionRatio>=o});e.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=d),(u=r.get(c.target))==null||u.forEach(function(o){o(d,c)})})},e);a=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:r},q.set(t,n)}return n}function It(e,t,n,r){if(n===void 0&&(n={}),r===void 0&&(r=xt),typeof window.IntersectionObserver>"u"&&r!==void 0){var a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),function(){}}var l=St(n),i=l.id,c=l.observer,u=l.elements,d=u.get(e)||[];return u.has(e)||u.set(e,d),d.push(t),c.observe(e),function(){d.splice(d.indexOf(t),1),d.length===0&&(u.delete(e),c.unobserve(e)),u.size===0&&(c.disconnect(),q.delete(i))}}function xn(e){var t=e===void 0?{}:e,n=t.threshold,r=t.delay,a=t.trackVisibility,l=t.rootMargin,i=t.root,c=t.triggerOnce,u=t.skip,d=t.initialInView,o=t.fallbackInView,s=t.onChange,f=h.useRef(),p=h.useRef(),v=h.useState({inView:!!d}),T=v[0],w=v[1];p.current=s;var b=h.useCallback(function(R){f.current!==void 0&&(f.current(),f.current=void 0),!u&&R&&(f.current=It(R,function(A,x){w({inView:A,entry:x}),p.current&&p.current(A,x),x.isIntersecting&&c&&f.current&&(f.current(),f.current=void 0)},{root:i,rootMargin:l,threshold:n,trackVisibility:a,delay:r},o))},[Array.isArray(n)?n.toString():n,i,l,c,u,a,o,r]);h.useEffect(function(){!f.current&&T.entry&&!c&&!u&&w({inView:!!d})});var y=[b,T.inView,T.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}const Ct=e=>({vaultIdentity:{display:"flex",flexGrow:0,flexShrink:0,flexDirection:"row",columnGap:"16px",minWidth:0,textDecoration:"none"},vaultNameTags:{minWidth:0},vaultName:{...e.typography.h3,color:"#F5F5FF",textDecoration:"none"},vaultNameBoosted:{color:"#DB8332"},vaultNetwork:{position:"absolute",top:"-2px",left:"-2px",width:"28px",height:"28px",border:"solid 2px #363B63",borderBottomRightRadius:"16px","& img":{width:"22px",height:"22px"}},"vaultNetwork-bsc":{backgroundColor:"#F0B90B"},"vaultNetwork-heco":{backgroundColor:"#02943f"},"vaultNetwork-avax":{backgroundColor:"#e74142"},"vaultNetwork-polygon":{backgroundColor:"#8247e4"},"vaultNetwork-fantom":{backgroundColor:"#1969FF"},"vaultNetwork-harmony":{backgroundColor:"#01d8af"},"vaultNetwork-arbitrum":{backgroundColor:"#2d374b"},"vaultNetwork-celo":{backgroundColor:"#FCFF52"},"vaultNetwork-moonriver":{backgroundColor:"#c3136f"},"vaultNetwork-cronos":{backgroundColor:"#121926"},"vaultNetwork-fuse":{backgroundColor:"#B4F9BA"},"vaultNetwork-metis":{backgroundColor:"#00dacc"},"vaultNetwork-aurora":{backgroundColor:"#70d44b"},"vaultNetwork-moonbeam":{backgroundColor:"#211438"},"vaultNetwork-emerald":{backgroundColor:"#0192f6"},"vaultNetwork-optimism":{backgroundColor:"#ff0420"},"vaultNetwork-kava":{backgroundColor:"#FF564F"},"vaultNetwork-ethereum":{backgroundColor:"#627ee9"},"vaultNetwork-canto":{backgroundColor:"#06fc99"},"vaultNetwork-zksync":{backgroundColor:"#fff"}}),Rt=()=>({vaultIcon:{flexShrink:0,width:"48px"}}),At=O(Rt),Nt=h.memo(function({vaultId:t}){const n=At(),r=C(a=>_(a,t));return g(ut,{className:n.vaultIcon,assetIds:r.assetIds,chainId:r.chainId})}),ke=e=>({vaultTags:{marginTop:"4px",display:"flex",flexDirection:"row",flexWrap:"nowrap",columnGap:"8px",rowGap:"8px"},vaultTag:{...e.typography["subline-sm"],color:"#D0D0DA",backgroundColor:"#4C5480",padding:"2px 8px",borderRadius:"4px",textTransform:"uppercase",whiteSpace:"nowrap",flexShrink:0,"&:not(:first-child)":{flexShrink:1,overflow:"hidden",textOverflow:"ellipsis",minWidth:0}},vaultTagBoost:{backgroundColor:"rgba(219, 131, 50, 0.3)"},vaultTagRetired:{backgroundColor:"rgba(209, 83, 71, 0.3)"},vaultTagPaused:{backgroundColor:"rgba(209, 152, 71, 0.3)"},vaultTagEarn:{backgroundColor:"rgba(255, 255, 255, 0.3)"}}),Se=O(ke),H=h.memo(h.forwardRef(function({children:t,className:n},r){const a=Se();return g("div",{className:I(a.vaultTag,n),ref:r,children:t})})),Et=h.memo(h.forwardRef(function({children:t,className:n,triggerClass:r,...a},l){const i=Se();return g(Te,{triggerClass:I(i.vaultTag,n,r),ref:l,...a,children:t})}));var Z=function(e,t){return Z=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])},Z(e,t)};function Ot(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Z(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Y=function(){return Y=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Y.apply(this,arguments)};function Bt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}var z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof re<"u"?re:typeof self<"u"?self:{};function _t(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Q=_t,Ft=typeof z=="object"&&z&&z.Object===Object&&z,jt=Ft,$t=jt,Pt=typeof self=="object"&&self&&self.Object===Object&&self,Dt=$t||Pt||Function("return this")(),Ie=Dt,zt=Ie,Mt=function(){return zt.Date.now()},Ht=Mt,Wt=/\s/;function Gt(e){for(var t=e.length;t--&&Wt.test(e.charAt(t)););return t}var Lt=Gt,Ut=Lt,qt=/^\s+/;function Zt(e){return e&&e.slice(0,Ut(e)+1).replace(qt,"")}var Yt=Zt,Xt=Ie,Kt=Xt.Symbol,Ce=Kt,oe=Ce,Re=Object.prototype,Qt=Re.hasOwnProperty,Jt=Re.toString,j=oe?oe.toStringTag:void 0;function er(e){var t=Qt.call(e,j),n=e[j];try{e[j]=void 0;var r=!0}catch{}var a=Jt.call(e);return r&&(t?e[j]=n:delete e[j]),a}var tr=er,rr=Object.prototype,nr=rr.toString;function ar(e){return nr.call(e)}var or=ar,ie=Ce,ir=tr,lr=or,sr="[object Null]",ur="[object Undefined]",le=ie?ie.toStringTag:void 0;function cr(e){return e==null?e===void 0?ur:sr:le&&le in Object(e)?ir(e):lr(e)}var dr=cr;function fr(e){return e!=null&&typeof e=="object"}var hr=fr,gr=dr,pr=hr,mr="[object Symbol]";function vr(e){return typeof e=="symbol"||pr(e)&&gr(e)==mr}var yr=vr,br=Yt,se=Q,Tr=yr,ue=0/0,wr=/^[-+]0x[0-9a-f]+$/i,xr=/^0b[01]+$/i,Vr=/^0o[0-7]+$/i,kr=parseInt;function Sr(e){if(typeof e=="number")return e;if(Tr(e))return ue;if(se(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=se(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=br(e);var n=xr.test(e);return n||Vr.test(e)?kr(e.slice(2),n?2:8):wr.test(e)?ue:+e}var Ir=Sr,Cr=Q,G=Ht,ce=Ir,Rr="Expected a function",Ar=Math.max,Nr=Math.min;function Er(e,t,n){var r,a,l,i,c,u,d=0,o=!1,s=!1,f=!0;if(typeof e!="function")throw new TypeError(Rr);t=ce(t)||0,Cr(n)&&(o=!!n.leading,s="maxWait"in n,l=s?Ar(ce(n.maxWait)||0,t):l,f="trailing"in n?!!n.trailing:f);function p(m){var V=r,k=a;return r=a=void 0,d=m,i=e.apply(k,V),i}function v(m){return d=m,c=setTimeout(b,t),o?p(m):i}function T(m){var V=m-u,k=m-d,F=t-V;return s?Nr(F,l-k):F}function w(m){var V=m-u,k=m-d;return u===void 0||V>=t||V<0||s&&k>=l}function b(){var m=G();if(w(m))return y(m);c=setTimeout(b,T(m))}function y(m){return c=void 0,f&&r?p(m):(r=a=void 0,i)}function R(){c!==void 0&&clearTimeout(c),d=0,r=u=a=c=void 0}function A(){return c===void 0?i:y(G())}function x(){var m=G(),V=w(m);if(r=arguments,a=this,u=m,V){if(c===void 0)return v(u);if(s)return clearTimeout(c),c=setTimeout(b,t),p(u)}return c===void 0&&(c=setTimeout(b,t)),i}return x.cancel=R,x.flush=A,x}var Ae=Er,Or=Ae,Br=Q,_r="Expected a function";function Fr(e,t,n){var r=!0,a=!0;if(typeof e!="function")throw new TypeError(_r);return Br(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),Or(e,t,{leading:r,maxWait:t,trailing:a})}var jr=Fr,Ne=function(e,t,n,r){switch(t){case"debounce":return Ae(e,n,r);case"throttle":return jr(e,n,r);default:return e}},X=function(e){return typeof e=="function"},E=function(){return typeof window>"u"},de=function(e){return e instanceof Element||e instanceof HTMLDocument},Ee=function(e,t,n,r){return function(a){var l=a.width,i=a.height;t(function(c){return c.width===l&&c.height===i||c.width===l&&!r||c.height===i&&!n?c:(e&&X(e)&&e(l,i),{width:l,height:i})})}};(function(e){Ot(t,e);function t(n){var r=e.call(this,n)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var d=r.props,o=d.targetRef,s=d.observerOptions;if(!E()){o&&o.current&&(r.targetRef.current=o.current);var f=r.getElement();f&&(r.observableElement&&r.observableElement===f||(r.observableElement=f,r.resizeObserver.observe(f,s)))}},r.getElement=function(){var d=r.props,o=d.querySelector,s=d.targetDomEl;if(E())return null;if(o)return document.querySelector(o);if(s&&de(s))return s;if(r.targetRef&&de(r.targetRef.current))return r.targetRef.current;var f=Ze.findDOMNode(r);if(!f)return null;var p=r.getRenderType();switch(p){case"renderProp":return f;case"childFunction":return f;case"child":return f;case"childArray":return f;default:return f.parentElement}},r.createResizeHandler=function(d){var o=r.props,s=o.handleWidth,f=s===void 0?!0:s,p=o.handleHeight,v=p===void 0?!0:p,T=o.onResize;if(!(!f&&!v)){var w=Ee(T,r.setState.bind(r),f,v);d.forEach(function(b){var y=b&&b.contentRect||{},R=y.width,A=y.height,x=!r.skipOnMount&&!E();x&&w({width:R,height:A}),r.skipOnMount=!1})}},r.getRenderType=function(){var d=r.props,o=d.render,s=d.children;return X(o)?"renderProp":X(s)?"childFunction":h.isValidElement(s)?"child":Array.isArray(s)?"childArray":"parent"};var a=n.skipOnMount,l=n.refreshMode,i=n.refreshRate,c=i===void 0?1e3:i,u=n.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=a,r.targetRef=h.createRef(),r.observableElement=null,E()||(r.resizeHandler=Ne(r.createResizeHandler,l,c,u),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}return t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){E()||(this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var n=this.props,r=n.render,a=n.children,l=n.nodeType,i=l===void 0?"div":l,c=this.state,u=c.width,d=c.height,o={width:u,height:d,targetRef:this.targetRef},s=this.getRenderType(),f;switch(s){case"renderProp":return r&&r(o);case"childFunction":return f=a,f(o);case"child":if(f=a,f.type&&typeof f.type=="string"){o.targetRef;var p=Bt(o,["targetRef"]);return h.cloneElement(f,p)}return h.cloneElement(f,o);case"childArray":return f=a,f.map(function(v){return!!v&&h.cloneElement(v,o)});default:return h.createElement(i,null)}},t})(h.PureComponent);var $r=E()?h.useEffect:h.useLayoutEffect;function Pr(e){e===void 0&&(e={});var t=e.skipOnMount,n=t===void 0?!1:t,r=e.refreshMode,a=e.refreshRate,l=a===void 0?1e3:a,i=e.refreshOptions,c=e.handleWidth,u=c===void 0?!0:c,d=e.handleHeight,o=d===void 0?!0:d,s=e.targetRef,f=e.observerOptions,p=e.onResize,v=h.useRef(n),T=h.useRef(null),w=s??T,b=h.useRef(),y=h.useState({width:void 0,height:void 0}),R=y[0],A=y[1];return $r(function(){if(!E()){var x=Ee(p,A,u,o),m=function(k){!u&&!o||k.forEach(function(F){var ee=F&&F.contentRect||{},Oe=ee.width,Be=ee.height,_e=!v.current&&!E();_e&&x({width:Oe,height:Be}),v.current=!1})};b.current=Ne(m,r,l,i);var V=new window.ResizeObserver(b.current);return w.current&&V.observe(w.current,f),function(){V.disconnect();var k=b.current;k&&k.cancel&&k.cancel()}}},[r,l,i,u,o,p,f,w.current]),Y({ref:w},R)}function Dr(){const[e,t]=h.useState(!1),{width:n,ref:r}=Pr();return h.useEffect(()=>{r.current&&t(r.current.scrollWidth>r.current.offsetWidth)},[n,r,t]),{isOverflowing:e,ref:r}}const J=O(ke),zr=h.memo(function({boostId:t}){const n=J(),{t:r}=$(),a=C(c=>ve(c,t)),{isOverflowing:l,ref:i}=Dr();return S(Et,{content:g(ct,{title:r("VaultTag-PartnerBoost",{partner:a.name})}),placement:"bottom",disabled:!l,className:n.vaultTagBoost,ref:i,children:["🔥 ",r("VaultTag-PartnerBoost",{partner:a.name})]})}),Mr=h.memo(function({chainId:t,earnedTokenAddress:n}){const r=J(),{t:a}=$(),l=C(i=>U(i,t,n));return g(H,{className:r.vaultTagEarn,children:a("VaultTag-EarnToken",{token:l.symbol})})}),Hr=h.memo(function({vaultId:t}){return g(H,{children:g(lt,{vaultId:t})})}),Wr=h.memo(function({vaultId:t}){const n=J(),{t:r}=$(),a=C(c=>_(c,t)),l=C(c=>me(c,t)),i=l.length?l[0]:null;return S("div",{className:n.vaultTags,children:[g(Hr,{vaultId:t}),L(a)?g(H,{className:n.vaultTagRetired,children:r("VaultTag-Retired")}):he(a)?g(H,{className:n.vaultTagPaused,children:r("VaultTag-Paused")}):i?g(zr,{boostId:i}):pe(a)?g(Mr,{chainId:a.chainId,earnedTokenAddress:a.earnedTokenAddress}):null]})}),W=O(Ct),Gr=h.memo(function({vaultId:t,isLink:n}){const r=W(),a=C(i=>_(i,t)),l=C(i=>M(i,t));return n?g(Ye,{to:`/vault/${t}`,className:I({[r.vaultName]:!0,[r.vaultNameBoosted]:l}),children:ne(a.name)}):g("div",{className:I({[r.vaultName]:!0,[r.vaultNameBoosted]:l}),children:ne(a.name)})}),Lr=h.memo(function({chainId:t,className:n}){const r=W(),a=C(l=>Xe(l,t));return g("div",{className:I(r.vaultNetwork,n,r[`vaultNetwork-${t}`]),children:g("img",{alt:a.name,src:Ke(t),width:24,height:24})})}),Vn=h.memo(function({vaultId:t,networkClassName:n,isLink:r}){const a=W();return g("div",{className:a.vaultIdentity,children:g(Ur,{isLink:r,vaultId:t,networkClassName:n})})}),Ur=h.memo(function({vaultId:t,networkClassName:n,isLink:r}){const a=W(),l=C(i=>_(i,t));return S(ye,{children:[g(Lr,{className:n,chainId:l.chainId}),g(Nt,{vaultId:t}),S("div",{className:a.vaultNameTags,children:[g(Gr,{isLink:r,vaultId:t}),g(Wr,{vaultId:t})]})]})}),kn=e=>({vaultStats:{display:"flex",flexGrow:0,flexShrink:0,flexDirection:"column",justifyContent:"center"},row:{display:"grid",width:"100%",columnGap:"24px",rowGap:"24px",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",[e.breakpoints.up("sm")]:{gridTemplateColumns:"repeat(3, minmax(0, 1fr))"},[e.breakpoints.up("md")]:{gridTemplateColumns:"repeat(6, minmax(0, 1fr))"}},column:{width:"100%",[e.breakpoints.up("lg")]:{textAlign:"right"}},flexEnd:{display:"flex",alignItems:"center",columnGap:"4px",justifyContent:"flex-end",width:"100%"},columnFlex:{display:"flex",justifyContent:"flex-end",columnGap:"4px",[e.breakpoints.up("lg")]:{textAlign:"right"}},hideMd:{display:"none",[e.breakpoints.up("lg")]:{display:"block"}},hideSm:{display:"none",[e.breakpoints.up("md")]:{display:"block"}},textGreen:{color:e.palette.primary.main},rowDashboard:{display:"grid",width:"100%",gridTemplateColumns:"minmax(0, 1fr)",columnGap:"8px","& $column":{marginLeft:"auto",textAlign:"right"},[e.breakpoints.up("md")]:{gridTemplateColumns:"repeat(4, minmax(0, 1fr))"},[e.breakpoints.up("lg")]:{gridTemplateColumns:"repeat(6, minmax(0, 1fr))"}},textOverflow:{marginLeft:"auto",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},maxWidth80:{maxWidth:"80%"},maxWidth60:{maxWidth:"80%"},displayBlock:{display:"block"},contentContainer:{display:"flex",flexDirection:"column"}}),qr=e=>({value:{...e.typography["body-lg-med"],color:e.palette.text.middle},subValue:{...e.typography["body-sm"],color:e.palette.text.dark},blurValue:{filter:"blur(.5rem)"},boostedValue:{color:"#DB8332"},lineThroughValue:{textDecoration:"line-through"}}),Zr=e=>({label:{display:"flex",alignItems:"center"},labelText:{...e.typography["subline-sm"],color:"#9595B2"},tooltipTrigger:{width:"16px",height:"16px",flexShrink:0,marginLeft:"4px","& svg":{width:"16px",height:"16px"}},subValue:{...e.typography["body-sm"],color:e.palette.text.dark},blurValue:{filter:"blur(.5rem)"},boostedValue:{color:"#DB8332"},lineThroughValue:{textDecoration:"line-through"}}),Yr=O(Zr),Xr=h.memo(function({label:t,children:n,tooltip:r,showLabel:a=!0,className:l,triggerClassName:i,labelClassName:c,subValue:u,blur:d,boosted:o,contentClassName:s}){const f=Yr(),p=Qe(v=>v.breakpoints.up("lg"),{noSsr:!0});return S("div",{className:l,children:[!p&&a?S("div",{className:f.label,children:[g("div",{className:I(f.labelText,c),children:t}),r&&p?g(dt,{content:r,triggerClass:f.tooltipTrigger}):null]}):null,r?S("div",{className:s,children:[g(Te,{triggerClass:i,content:r,children:n}),u&&g("div",{className:I(f.subValue,{[f.blurValue]:d,[f.lineThroughValue]:o}),children:u})]}):S("div",{className:s,children:[g("div",{className:i,children:n}),u&&g("div",{className:I(f.subValue,{[f.blurValue]:d,[f.lineThroughValue]:o}),children:u})]})]})}),Kr=O(qr),Qr=h.memo(function({label:t,tooltip:n,value:r,subValue:a,blur:l,loading:i,boosted:c,showLabel:u=!0,shouldTranslate:d=!1,className:o,contentClassName:s,triggerClassName:f,labelClassName:p}){const v=Kr(),{t:T}=$();return g(Xr,{triggerClassName:I(v.value,{[v.blurValue]:l,[f]:f,[v.boostedValue]:c}),showLabel:u,label:T(t),tooltip:i?null:n,className:o,contentClassName:s,labelClassName:p,subValue:a,blur:l,boosted:c,children:i?"...":g(ye,{children:d?T(`${r}`):r})})}),Sn=h.memo(Je(Jr)(Qr));function Jr(e,{vaultId:t}){const r=be(e,t)?"VaultStat-APR":"VaultStat-APY";if(!et(e,t))return{label:r,value:"-",subValue:null,blur:!1,loading:!1};const l=tt(e,t);if(!l)return{label:r,value:"-",subValue:null,blur:!1,loading:!0};if(!rt(e,t))return{label:r,value:"???",subValue:null,blur:!1,loading:!1};const c=nt(e,t),u=at(c,"???"),d=ot(e,t),o=ge(e,t);return{label:r,value:o?"PRE-STAKE":d?u.boostedTotalApy:u.totalApy,subValue:d||o?u.totalApy:null,blur:!1,loading:!l,boosted:d||o,shouldTranslate:o,tooltip:g(en,{vaultId:t,isBoosted:d,rates:u})}}const en=h.memo(function({vaultId:t,isBoosted:n,rates:r}){const a=C(i=>be(i,t)),l=h.useMemo(()=>{const i=[];return a?i.push({label:"Pool-Apr",value:r.vaultApr}):("vaultApr"in r&&i.push({label:"Vault-Breakdown-VaultApr",value:r.vaultApr}),"tradingApr"in r&&i.push({label:"Vault-Breakdown-TradingApr",value:r.tradingApr}),"liquidStakingApr"in r&&i.push({label:"Vault-Breakdown-LiquidStakingApr",value:r.liquidStakingApr}),"composablePoolApr"in r&&i.push({label:"Vault-Breakdown-ComposablePoolApr",value:r.composablePoolApr}),"boostApr"in r&&i.push({label:"Vault-Breakdown-BoostApr",value:r.boostApr}),i.push({label:"APY",value:n?r.boostedTotalApy:r.totalApy})),i.length?i:null},[a,n,r]);return g(st,{rows:l})});export{wn as S,Qr as V,cn as a,dn as b,hn as c,fn as d,gn as e,bn as f,Tn as g,mn as h,pn as i,on as j,sn as k,un as l,vn as m,Sn as n,kn as o,Vn as p,yt as q,yn as r,ln as s,xn as u};