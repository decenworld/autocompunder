import{C as o}from"./index-bc7101b1.js";import{f_ as e}from"./index-fc282d72.js";const i={[e.Ethereum]:"0x3671aE578E63FdF66ad4F3E12CC0c0d71Ac7510C",[e.EthereumRopsten]:" 0x72c33B247e62d0f1927E8d325d0358b8f9971C68",[e.EthereumRinkeby]:"0x196eC7109e127A353B709a20da25052617295F6f",[e.EthereumGoerli]:"0x333Fc8f550043f239a2CF79aEd5e9cF4A20Eb41e"},u=[{inputs:[{internalType:"address[]",name:"addresses",type:"address[]"}],name:"getNames",outputs:[{internalType:"string[]",name:"r",type:"string[]"}],stateMutability:"view",type:"function"}];async function p(s,d,a){var n;const r=i[d];if(!r)return;const c=new o(r,u,a);try{const t=await c.functions.getNames([s]);return((n=t==null?void 0:t[0])==null?void 0:n[0])||void 0}catch{return}}export{p as lookupAddress};