import{r as e,dx as S}from"./index-fc282d72.js";function x(u,c=null,a=!0){const[l,t]=e.useState("idle"),[o,i]=e.useState(c),[f,n]=e.useState(null),r=e.useCallback(()=>(t("pending"),n(null),u().then(s=>{i(s),t("success")}).catch(s=>{n(S(s)),t("error")})),[u]);return e.useEffect(()=>{a&&r()},[r,a]),{execute:r,status:l,value:o,error:f}}export{x as u};
