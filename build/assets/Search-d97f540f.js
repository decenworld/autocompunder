import{r as n,_ as se,e as q,g as c,eo as Re,w as Se,h as de,j as Ee,eJ as Fe,m as ce}from"./index-fc282d72.js";import{u as Me,i as ke,F as ze}from"./utils-e6a1b5bb.js";function Ae(w){var e=w.props,g=w.states,u=w.muiFormControl;return g.reduce(function(d,i){return d[i]=e[i],u&&typeof e[i]>"u"&&(d[i]=u[i]),d},{})}function U(w,e){return parseInt(w[e],10)||0}var $e=typeof window<"u"?n.useLayoutEffect:n.useEffect,Pe={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}},Be=n.forwardRef(function(e,g){var u=e.onChange,d=e.rows,i=e.rowsMax,a=e.rowsMin,j=e.maxRows,D=e.minRows,L=D===void 0?1:D,S=e.style,E=e.value,J=se(e,["onChange","rows","rowsMax","rowsMin","maxRows","minRows","style","value"]),A=j||i,y=d||a||L,Z=n.useRef(E!=null),N=Z.current,r=n.useRef(null),G=q(g,r),$=n.useRef(null),m=n.useRef(0),W=n.useState({}),b=W[0],T=W[1],x=n.useCallback(function(){var h=r.current,f=window.getComputedStyle(h),p=$.current;p.style.width=f.width,p.value=h.value||e.placeholder||"x",p.value.slice(-1)===`
`&&(p.value+=" ");var Q=f["box-sizing"],F=U(f,"padding-bottom")+U(f,"padding-top"),P=U(f,"border-bottom-width")+U(f,"border-top-width"),B=p.scrollHeight-F;p.value="x";var H=p.scrollHeight-F,s=B;y&&(s=Math.max(Number(y)*H,s)),A&&(s=Math.min(Number(A)*H,s)),s=Math.max(s,H);var M=s+(Q==="border-box"?F+P:0),v=Math.abs(s-B)<=1;T(function(k){return m.current<20&&(M>0&&Math.abs((k.outerHeightStyle||0)-M)>1||k.overflow!==v)?(m.current+=1,{overflow:v,outerHeightStyle:M}):k})},[A,y,e.placeholder]);n.useEffect(function(){var h=Re(function(){m.current=0,x()});return window.addEventListener("resize",h),function(){h.clear(),window.removeEventListener("resize",h)}},[x]),$e(function(){x()}),n.useEffect(function(){m.current=0},[E]);var K=function(f){m.current=0,N||x(),u&&u(f)};return n.createElement(n.Fragment,null,n.createElement("textarea",c({value:E,onChange:K,ref:G,rows:y,style:c({height:b.outerHeightStyle,overflow:b.overflow?"hidden":null},S)},J)),n.createElement("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:$,tabIndex:-1,style:c({},Pe.shadow,S)}))});const He=Be;var Ie=function(e){var g=e.palette.type==="light",u={color:"currentColor",opacity:g?.42:.5,transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},d={opacity:"0 !important"},i={opacity:g?.42:.5};return{"@global":{"@keyframes mui-auto-fill":{},"@keyframes mui-auto-fill-cancel":{}},root:c({},e.typography.body1,{color:e.palette.text.primary,lineHeight:"1.1876em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center","&$disabled":{color:e.palette.text.disabled,cursor:"default"}}),formControl:{},focused:{},disabled:{},adornedStart:{},adornedEnd:{},error:{},marginDense:{},multiline:{padding:"".concat(8-2,"px 0 ").concat(8-1,"px"),"&$marginDense":{paddingTop:4-1}},colorSecondary:{},fullWidth:{width:"100%"},input:{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"".concat(8-2,"px 0 ").concat(8-1,"px"),border:0,boxSizing:"content-box",background:"none",height:"1.1876em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":u,"&::-moz-placeholder":u,"&:-ms-input-placeholder":u,"&::-ms-input-placeholder":u,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{"-webkit-appearance":"none"},"label[data-shrink=false] + $formControl &":{"&::-webkit-input-placeholder":d,"&::-moz-placeholder":d,"&:-ms-input-placeholder":d,"&::-ms-input-placeholder":d,"&:focus::-webkit-input-placeholder":i,"&:focus::-moz-placeholder":i,"&:focus:-ms-input-placeholder":i,"&:focus::-ms-input-placeholder":i},"&$disabled":{opacity:1},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},inputMarginDense:{paddingTop:4-1},inputMultiline:{height:"auto",resize:"none",padding:0},inputTypeSearch:{"-moz-appearance":"textfield","-webkit-appearance":"textfield"},inputAdornedStart:{},inputAdornedEnd:{},inputHiddenLabel:{}}},De=typeof window>"u"?n.useEffect:n.useLayoutEffect,Le=n.forwardRef(function(e,g){var u=e["aria-describedby"],d=e.autoComplete,i=e.autoFocus,a=e.classes,j=e.className;e.color;var D=e.defaultValue,L=e.disabled,S=e.endAdornment;e.error;var E=e.fullWidth,J=E===void 0?!1:E,A=e.id,y=e.inputComponent,Z=y===void 0?"input":y,N=e.inputProps,r=N===void 0?{}:N,G=e.inputRef;e.margin;var $=e.multiline,m=$===void 0?!1:$,W=e.name,b=e.onBlur,T=e.onChange,x=e.onClick,K=e.onFocus,h=e.onKeyDown,f=e.onKeyUp,p=e.placeholder,Q=e.readOnly,F=e.renderSuffix,P=e.rows,B=e.rowsMax,H=e.rowsMin,s=e.maxRows,M=e.minRows,v=e.startAdornment,k=e.type,X=k===void 0?"text":k,fe=e.value,me=se(e,["aria-describedby","autoComplete","autoFocus","classes","className","color","defaultValue","disabled","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","rowsMax","rowsMin","maxRows","minRows","startAdornment","type","value"]),V=r.value!=null?r.value:fe,he=n.useRef(V!=null),Y=he.current,z=n.useRef(),pe=n.useCallback(function(R){},[]),ve=q(r.ref,pe),we=q(G,ve),ie=q(z,we),le=n.useState(!1),ee=le[0],ne=le[1],t=Me(),l=Ae({props:e,muiFormControl:t,states:["color","disabled","error","hiddenLabel","margin","required","filled"]});l.focused=t?t.focused:ee,n.useEffect(function(){!t&&L&&ee&&(ne(!1),b&&b())},[t,L,ee,b]);var ae=t&&t.onFilled,te=t&&t.onEmpty,I=n.useCallback(function(R){ke(R)?ae&&ae():te&&te()},[ae,te]);De(function(){Y&&I({value:V})},[V,I,Y]);var ge=function(o){if(l.disabled){o.stopPropagation();return}K&&K(o),r.onFocus&&r.onFocus(o),t&&t.onFocus?t.onFocus(o):ne(!0)},be=function(o){b&&b(o),r.onBlur&&r.onBlur(o),t&&t.onBlur?t.onBlur(o):ne(!1)},ye=function(o){if(!Y){var ue=o.target||z.current;if(ue==null)throw new Error(Fe(1));I({value:ue.value})}for(var oe=arguments.length,re=new Array(oe>1?oe-1:0),O=1;O<oe;O++)re[O-1]=arguments[O];r.onChange&&r.onChange.apply(r,[o].concat(re)),T&&T.apply(void 0,[o].concat(re))};n.useEffect(function(){I(z.current)},[]);var xe=function(o){z.current&&o.currentTarget===o.target&&z.current.focus(),x&&x(o)},_=Z,C=c({},r,{ref:ie});typeof _!="string"?C=c({inputRef:ie,type:X},C,{ref:null}):m?P&&!s&&!M&&!B&&!H?_="textarea":(C=c({minRows:P||M,rowsMax:B,maxRows:s},C),_=He):C=c({type:X},C);var Ce=function(o){I(o.animationName==="mui-auto-fill-cancel"?z.current:{value:"x"})};return n.useEffect(function(){t&&t.setAdornedStart(!!v)},[t,v]),n.createElement("div",c({className:de(a.root,a["color".concat(Ee(l.color||"primary"))],j,l.disabled&&a.disabled,l.error&&a.error,J&&a.fullWidth,l.focused&&a.focused,t&&a.formControl,m&&a.multiline,v&&a.adornedStart,S&&a.adornedEnd,l.margin==="dense"&&a.marginDense),onClick:xe,ref:g},me),v,n.createElement(ze.Provider,{value:null},n.createElement(_,c({"aria-invalid":l.error,"aria-describedby":u,autoComplete:d,autoFocus:i,defaultValue:D,disabled:l.disabled,id:A,onAnimationStart:Ce,name:W,placeholder:p,readOnly:Q,required:l.required,rows:P,value:V,onKeyDown:h,onKeyUp:f},C,{className:de(a.input,r.className,l.disabled&&a.disabled,m&&a.inputMultiline,l.hiddenLabel&&a.inputHiddenLabel,v&&a.inputAdornedStart,S&&a.inputAdornedEnd,X==="search"&&a.inputTypeSearch,l.margin==="dense"&&a.inputMarginDense),onBlur:be,onChange:ye,onFocus:ge}))),S,F?F(c({},l,{startAdornment:v})):null)});const Te=Se(Ie,{name:"MuiInputBase"})(Le),Ke=ce(n.createElement("path",{d:"M18.3 5.71a.9959.9959 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})),Ve=ce(n.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}));export{Ke as C,Te as I,Ve as S};
