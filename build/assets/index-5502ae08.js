import{b1 as j,r as l,y as b,o as r,dy as ge,z as o,q as n,av as Ce,n as I,U as A,dz as X,p as v,dA as V,F as T,Y as D,h as ee,D as z,v as f,dB as g,cc as te,aJ as ne,dC as W,aI as $,dD as C,ak as ae,bb as E,T as N,ai as se,cp as H,J as S,bn as oe,dE as ie,aa as re,ac as fe,cb as ce,aD as ye,bu as be,b0 as Ie,dF as we,c7 as xe,dG as K,cf as U,cg as q,ch as Be,dH as ve,dI as le,dJ as ke,dK as Se,dL as Ne,a4 as Ae}from"./index-fc282d72.js";import{S as R,a as de,L as Te}from"./LoadingStep-ff732149.js";import{C as Fe}from"./react-content-loader.es-1c9eebd1.js";import{A as Y}from"./AssetsImage-edf90c9f.js";import{S as De}from"./arrowDown-9c2734bb.js";import{C as Le}from"./Scrollable-abd6d4e8.js";import{I as Z}from"./Search-d97f540f.js";import"./utils-e6a1b5bb.js";const We=e=>({pageContainer:{paddingTop:120,paddingBottom:120,[e.breakpoints.down("md")]:{paddingTop:18,paddingBottom:48}},inner:{margin:"0 auto",width:"1036px",maxWidth:"100%",display:"grid",columnGap:"132px",rowGap:"32px",gridTemplateColumns:"1fr",gridTemplateRows:"auto",[e.breakpoints.up("md")]:{gridTemplateColumns:"minmax(0, 1fr) 400px"}}}),$e=e=>({container:{},title:{...e.typography.h1,fontSize:"45px",lineHeight:"56px",color:"#F5F5FF"},text:{...e.typography["body-lg"],color:"#D0D0DA",marginTop:"32px","& p":{marginTop:0,marginBottom:"1em","&:last-child":{marginBottom:0}},"& a":{textDecoration:"none",color:e.palette.primary.main}},poweredBy:{marginTop:"64px"},poweredByLabel:{...e.typography["subline-sm"],color:"#999CB3",marginTop:"32px"},poweredByLogos:{marginTop:"16px",display:"flex",alignItems:"center",gap:"32px"}}),Re="/assets/multichain-cfe83ab8.png",Me=j($e),Pe=l.memo(function(){const t=Me(),{t:a}=b(),s=r(ge);return o("div",{className:t.container,children:[n("h1",{className:t.title,children:a("Bridge-Intro-Title",{chains:s.length})}),n("div",{className:t.text,children:a("Bridge-Intro-Text").split(`
`).map((c,i)=>o("p",{children:[c," ",i===1&&n(Ce,{to:"/",children:a("Bridge-Intro-Link")})]},i))}),o("div",{className:t.poweredBy,children:[n("div",{className:t.poweredByLabel,children:a("OnRamp-Intro-PoweredBy")}),n("div",{className:t.poweredByLogos,children:n("img",{src:Re,alt:"multichain",height:"32"})})]})]})}),Ge=()=>({container:{}}),Oe=e=>({fees:{padding:"12px",backgroundColor:e.palette.background.content,borderRadius:"8px"},advice:{...e.typography["body-sm"],color:e.palette.text.disabled,marginTop:"12px","& p":{margin:"0 0 1em 0"},"& p:last-child":{marginBottom:0}},feesContent:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",rowGap:"16px",columnGap:"16px"},feesItem:{},label:{...e.typography["subline-sm"],color:"#999CB3"},value:{...e.typography["body-lg-med"],color:e.palette.text.secondary},feesLoader:{width:"100%"}}),J=I(Oe);function Ee(){const{t:e}=b(),t=J(),a=r(X),s=r(d=>d.ui.bridge),c=r(d=>v(d,s.destChainId)),i=r(d=>V(d,s.fromChainId,c.networkChainId));return n("div",{className:t.fees,children:a&&i?o(T,{children:[o("div",{className:t.feesContent,children:[o(L,{title:e("Bridge-Crosschain"),children:[i.SwapFeeRatePerMillion,"%"]}),o(L,{title:e("Bridge-Gas"),children:[" ",i.MinimumSwapFee," BIFI"]}),o(L,{title:e("Bridge-MinAmount"),children:[" ",i.MinimumSwap," BIFI"]}),o(L,{title:e("Bridge-MaxAmount"),children:[i.MaximumSwap," BIFI"]})]}),o("div",{className:t.advice,children:[n("p",{children:e("Bridge-Advice-1")}),n("p",{children:e("Bridge-Advice-2",{amount:i.BigValueThreshold})})]})]}):n(_e,{})})}const L=({title:e,children:t})=>{const a=J();return o("div",{className:a.feesItem,children:[n("div",{className:a.label,children:e}),n("div",{className:a.value,children:t})]})},_e=l.memo(function(){const t=J();return n("div",{className:t.feesLoader,children:o(Fe,{speed:2,viewBox:"0 0 328 208",backgroundColor:"#313759",foregroundColor:"#8585A",children:[n("rect",{x:"12",y:"12",width:"156",height:"18"}),n("rect",{x:"12",y:"32",width:"156",height:"22"}),n("rect",{x:"184",y:"12",width:"156",height:"18"}),n("rect",{x:"184",y:"32",width:"156",height:"22"}),n("rect",{x:"12",y:"72",width:"156",height:"38"}),n("rect",{x:"12",y:"112",width:"156",height:"22"}),n("rect",{x:"184",y:"72",width:"156",height:"38"}),n("rect",{x:"184",y:"112",width:"156",height:"22"}),n("rect",{x:"12",y:"148",width:"328",height:"20"}),n("rect",{x:"12",y:"180",width:"328",height:"40"})]})})}),ze=A.memo(Ee),je=e=>({rowDirectionBalance:{display:"flex",justifyContent:"space-between",marginBottom:e.spacing(1)},label:{...e.typography["subline-sm"],fontWeight:700,color:e.palette.text.disabled},balance:{...e.typography["body-sm"],cursor:"pointer",color:e.palette.text.disabled,"& span":{paddingLeft:"4px",fontWeight:e.typography["body-sm-med"].fontWeight,color:e.palette.text.secondary}},toContainer:{marginBottom:"24px"},buttonContainer:{marginTop:"24px"},inputContainer:{"& .MuiPaper-root":{position:"relative",backgroundColor:e.palette.background.vaults.inactive,borderRadius:"8px",padding:0,margin:0,boxShadow:"none","& .MuiInputBase-input":{...e.typography.h2,height:"auto",padding:`8px 8px 8px ${12+24+8}px`}}},inputLogo:{position:"absolute",top:"12px",left:"12px",display:"block"},networkPicker:{width:"50%",marginRight:e.spacing(1)},infoContainer:{flexGrow:1}}),Ve=e=>({customDivider:{display:"flex",alignItems:"center",margin:`${e.spacing(2)}px 0px`},line:{height:"2px",width:"100%",backgroundColor:e.palette.background.vaults.default,borderRadius:"8px"},arrowContainer:{display:"flex",alignItems:"center",justifyContent:"center",background:e.palette.background.vaults.defaultOutline,borderRadius:"100%",margin:"0 12px",height:"24px",width:"24px",padding:"8px","& svg":{color:e.palette.text.secondary,fill:"currentColor",fontSize:"1.5rem",width:"1em",height:"1em","&:hover":{cursor:t=>t.clickleable?"pointer":"auto",color:e.palette.text.primary}}}}),Je=I(Ve),He=({onClick:e,clickleable:t})=>{const a=Je({clickleable:t});return o(D,{className:a.customDivider,children:[n(D,{className:a.line}),n(D,{className:a.arrowContainer,children:n(De,{onClick:e})}),n(D,{className:a.line})]})},pe=l.memo(He),Ke=()=>({button:{},icon:{marginRight:"8px"}}),Ue=e=>({button:{...e.typography["body-lg-med"],color:"#D0D0DA",background:"transparent",border:"none",boxShadow:"none",outline:"none",display:"flex",alignItems:"center",margin:0,padding:0,whiteSpace:"nowrap",cursor:"pointer","&:hover, &:focus-visible":{color:"#F5F5FF","& $arrow":{color:"#D0D0DA"}}},arrow:{color:"#999CB3",height:"24px"}}),qe=I(Ue),Ye=l.memo(function({children:t,onClick:a,className:s}){const c=qe();return o("button",{className:ee(c.button,s),onClick:a,children:[t,n(Le,{className:c.arrow})]})}),me=l.memo(function({chainId:t,className:a}){const s=z(t);return s?n("img",{src:s,width:24,height:24,alt:t,className:a}):null}),Ze=I(Ke),Q=l.memo(function({chain:t,className:a,nextStep:s}){const c=Ze(),i=f(),d=l.useCallback(()=>{i(g.setStep({step:s}))},[i,s]);return o(Ye,{className:ee(c.button,a),onClick:d,children:[n(me,{chainId:t.id,className:c.icon}),t.name]})}),Qe=I(je);function Xe(){const{t:e}=b(),t=Qe(),a=f(),s=te(),c=r(ne),i=r(W),d=r($),w=c===i.fromChainId,p=r(m=>v(m,i.fromChainId)),y=r(m=>v(m,i.destChainId)),u=i.bridgeDataByChainId[p.id],k=r(m=>V(m,p.id,y.networkChainId)),x=l.useCallback(()=>{a(g.setStep({step:C.Confirm}))},[a]),B=r(m=>d&&u?ae(m,i.fromChainId,u.address):new E(N)),M=k?new E(k.MinimumSwap):new E(N),P=i.amount.lte(N)||i.amount.lt(M)||!k,F=m=>{i.bridgeDataByChainId[m]||a(ie({chainId:m})),a(g.setFromChain({chainId:m}))},G=m=>{a(g.setInput({amount:m,chainId:i.fromChainId,tokenAddress:u.address,state:s.getState()}))},O=()=>{a(g.setMax({chainId:i.fromChainId,tokenAddress:u.address,state:s.getState()}))},h=()=>{a(re())};return o(T,{children:[o("div",{className:t.infoContainer,children:[o("div",{children:[o("div",{className:t.rowDirectionBalance,children:[n("div",{className:t.label,children:e("FROM")}),o("div",{onClick:O,className:t.balance,children:[e("Balance"),": ",o("span",{children:[se(B,4)," BIFI"]})]})]}),n("div",{className:t.inputContainer,children:o(H,{component:"form",children:[n("div",{className:t.inputLogo,children:n(Y,{chainId:"56",assetIds:["BIFI"],size:24})}),n(Z,{placeholder:"0.00",value:i.formattedInput,onChange:m=>G(m.target.value),endAdornment:n(Q,{chain:p,nextStep:C.SelectFromNetwork})})]})})]}),n(pe,{onClick:()=>F(i.destChainId),clickleable:!0}),o("div",{className:t.toContainer,children:[n("div",{className:t.rowDirectionBalance,children:n("div",{className:t.label,children:e("TO")})}),n("div",{className:t.inputContainer,children:o(H,{component:"form",children:[n("div",{className:t.inputLogo,children:n(Y,{chainId:"56",assetIds:["BIFI"],size:24})}),n(Z,{placeholder:"0.00",value:i.formattedOutput,disabled:!0,endAdornment:n(Q,{chain:y,nextStep:C.SelectToNetwork})})]})})]}),n(ze,{})]}),n("div",{className:t.buttonContainer,children:d?w?n(S,{onClick:x,disabled:P,variant:"success",fullWidth:!0,borderless:!0,children:e("Bridge-Button-1",{network:y.name})}):n(S,{onClick:()=>a(oe({chainId:i.fromChainId})),variant:"success",fullWidth:!0,borderless:!0,children:e("Network-Change",{network:p.name})}):n(S,{onClick:h,variant:"success",fullWidth:!0,borderless:!0,children:e("Network-ConnectWallet")})})]})}const et=A.memo(Xe),tt=()=>{const{t:e}=b();return n(R,{stepType:"bridge",title:e("Bridge-PreviewStep-Title"),children:n(et,{})})},nt=l.memo(tt),at=e=>({content:{padding:"24px",borderRadius:"4px",backgroundColor:"#232743"},confirmIntro:{color:e.palette.text.secondary,marginBottom:"24px"},transferInfo:{padding:"12px",backgroundColor:e.palette.background.content,borderRadius:"8px"},label:{...e.typography["subline-sm"],color:e.palette.text.disabled,fontWeight:700,marginBottom:"8px"},networkAmount:{display:"flex",justifyContent:"space-between",marginBottom:"8px"},network:{display:"flex",alignItems:"center",...e.typography["body-lg-med"]},networkIcon:{width:"20px",height:"20px",display:"block",marginRight:"4px"},networkName:{color:e.palette.text.secondary},amount:{color:"#999CB3",fontWeight:500},address:{...e.typography["body-sm"],color:e.palette.text.disabled,"& span":{color:e.palette.text.secondary}},transferDetails:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",rowGap:"8px",columnGap:"8px",marginTop:"24px",padding:"12px",border:"2px solid #2D3153",borderRadius:"8px"},detailLabel:{...e.typography["body-sm"],fontWeight:700,letterSpacing:"0.5px",color:"#999CB3",textTransform:"uppercase",whiteSpace:"nowrap"},detailValue:{...e.typography["body-sm-med"],textAlign:"right",color:e.palette.text.secondary},buttonsContainer:{marginTop:"48px"},infoContainer:{flexGrow:1}}),he=I(at);function st(){const{t:e}=b(),t=he(),a=f(),s=r(W),c=r(h=>fe(h)?ce(h):null),d=r(ne)===s.fromChainId,w=r($),p=r(h=>v(h,s.fromChainId)),y=r(h=>v(h,s.destChainId)),u=r(h=>V(h,p.id,y.networkChainId)),k=s.bridgeDataByChainId[p.id],x=u.DepositAddress??u.routerToken,B=r(h=>ye(h,s.fromChainId,k.address)),M=r(be);A.useEffect(()=>{Ie(B)&&a(we({chainId:s.fromChainId,spenderAddress:x,tokens:[B]}))},[B,a,s.fromChainId,x]);const P=r(h=>xe(h,s.fromChainId,k.address,x)),F=l.useMemo(()=>!["swapin","swapout"].includes(u==null?void 0:u.type),[u]),G=()=>{P.isLessThan(s.amount)&&F&&B.type!=="native"&&a(U.addStep({step:{step:"approve",message:e("Vault-ApproveMsg"),action:q.approval(B,x),pending:!1}})),a(U.addStep({step:{step:"bridge",message:e("Vault-TxnConfirm",{type:e("Bridge-noun")}),action:q.bridge(s.fromChainId,s.destChainId,x,s.amount,F),pending:!1}})),a(Be(p.id))},O=()=>{a(re())};return o(T,{children:[o("div",{className:t.infoContainer,children:[o("div",{className:t.transferInfo,children:[n("div",{className:t.label,children:e("FROM")}),o("div",{className:t.networkAmount,children:[o("div",{className:t.network,children:[n("img",{className:t.networkIcon,width:20,height:20,alt:"",src:z(s.fromChainId)}),n("div",{className:t.networkName,children:p.name})]}),o("div",{className:t.amount,children:["- ",s.formattedInput," BIFI"]})]}),o("div",{className:t.address,children:[e("Address"),": ",n("span",{children:K(c)})]})]}),n(pe,{}),o("div",{className:t.transferInfo,children:[n("div",{className:t.label,children:e("TO")}),o("div",{className:t.networkAmount,children:[o("div",{className:t.network,children:[n("img",{className:t.networkIcon,width:20,height:20,alt:"",src:z(s.destChainId)}),n("div",{className:t.networkName,children:y.name})]}),o("div",{className:t.amount,children:["+ ",s.formattedOutput," BIFI"]})]}),o("div",{className:t.address,children:[e("Address"),": ",n("span",{children:K(c)})]})]})]}),n("div",{className:t.buttonsContainer,children:w?d?n(S,{onClick:G,disabled:M,variant:"success",fullWidth:!0,borderless:!0,children:e("Confirm")}):n(S,{onClick:()=>a(oe({chainId:s.fromChainId})),variant:"success",fullWidth:!0,borderless:!0,children:e("Network-Change",{network:p.name})}):n(S,{onClick:O,variant:"success",fullWidth:!0,borderless:!0,children:e("Network-ConnectWallet")})}),o("div",{className:t.transferDetails,children:[o(_,{title:e("Bridge-Crosschain"),children:[u.SwapFeeRatePerMillion,"%"]}),o(_,{title:e("Bridge-Gas"),children:[" ",u.MinimumSwapFee," BIFI"]}),n(_,{title:e("Bridge-EstimatedTime"),children:"3 - 30 min"})]})]})}const ot=A.memo(st),_=({title:e,children:t})=>{const a=he();return o(T,{children:[n("div",{className:a.detailLabel,children:e}),n("div",{className:a.detailValue,children:t})]})},it=()=>{const{t:e}=b(),t=f(),a=l.useCallback(()=>{t(g.setStep({step:C.Preview}))},[t]);return n(R,{stepType:"bridge",onBack:a,title:e("Bridge-ConfirmStep-Title"),children:n(ot,{})})},rt=()=>({container:{},listItemIcon:{marginRight:"8px"}}),ct=I(rt),ue=l.memo(function({value:t}){const a=ct(),s=r(c=>v(c,t));return o(T,{children:[n(me,{chainId:t,className:a.listItemIcon}),s.name]})}),lt=e=>({balance:{marginLeft:"auto",...e.typography["body-lg"],color:e.palette.text.disabled}}),dt=I(lt),pt=l.memo(function({value:t}){const a=dt(),s=r(p=>v(p,t)),c=r($),i=r(p=>ve(p,s)),d=r(p=>i?ae(p,s.id,i):N);return c&&d.isGreaterThan(N)&&n("div",{className:a.balance,children:se(d,4)})}),mt=()=>{const{t:e}=b(),t=f(),a=l.useCallback(()=>{t(g.setStep({step:C.Preview}))},[t]);return n(R,{stepType:"bridge",onBack:a,title:e("Bridge-FromChainStep-Title"),children:n(ut,{})})},ht=l.memo(mt),ut=l.memo(function(){const t=r(W),a=r(le),s=f(),c=l.useCallback(i=>{t.bridgeDataByChainId[i]||s(ie({chainId:i})),s(g.setFromChain({chainId:i}))},[t.bridgeDataByChainId,s]);return n(de,{options:a,onSelect:c,ItemInnerComponent:ue,EndComponent:pt})}),gt=()=>{const{t:e}=b(),t=f(),a=l.useCallback(()=>{t(g.setStep({step:C.Preview}))},[t]);return n(R,{stepType:"bridge",onBack:a,title:e("Bridge-ToChainStep-Title"),children:n(ft,{})})},Ct=l.memo(gt),ft=l.memo(function(){const t=r(W),s=r(le).filter(d=>d!==t.fromChainId),c=f(),i=l.useCallback(d=>{c(g.setDestChain({destChainId:d}))},[c]);return n(de,{options:s,onSelect:i,ItemInnerComponent:ue})}),yt=j(Ge),bt={[C.Preview]:nt,[C.Confirm]:it,[C.SelectFromNetwork]:ht,[C.SelectToNetwork]:Ct},It=l.memo(function(){const t=yt(),a=r(ke),s=bt[a],c=r(Se),i=r(X),d=r($),w=r(y=>d?ce(y):null),p=te();return l.useEffect(()=>{c&&Ne(p,w)},[c,p,w]),n("div",{className:t.container,children:i?n(s,{}):n(Te,{stepType:"bridge"})})}),wt=j(We),Ft=l.memo(function(){const t=wt(),a=f();return A.useEffect(()=>()=>{a(g.resetForm())},[a]),n(Ae,{maxWidth:"lg",className:t.pageContainer,children:o("div",{className:t.inner,children:[n(Pe,{}),n(It,{})]})})});export{Ft as default};