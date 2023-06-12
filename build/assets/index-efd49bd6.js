import{c as T,_ as v}from"./BeefyV2AppMulticall-a6811ee2.js";import{f5 as A,b0 as g,bh as F,f4 as E,bb as h,f6 as R,f7 as V,f8 as I,aN as x}from"./index-fc282d72.js";const C=v;class M{constructor(s,e){this.web3=s,this.chain=e}async fetchAllBalances(s,e,a,n,r){const i=new this.web3.eth.Contract(C,this.chain.appMulticallContractAddress),l=A(),w=[],p=[];for(const t of e)if(g(t))p.push(t);else if(F(t))w.push(t);else throw new Error("Token type unsupported");const B=T(p,l),b=T([...n,...a],l),m=[];b.forEach(t=>{m.push({method:i.methods.getBoostOrGovBalance(t.map(o=>o.earnContractAddress),r).call,params:{from:"0x0000000000000000000000000000000000000000"}})}),B.forEach(t=>{m.push({method:i.methods.getTokenBalances(t.map(o=>o.address),r).call,params:{from:"0x0000000000000000000000000000000000000000"}})}),m.push({method:this.web3.eth.getBalance,params:r});const u=await E(this.web3,m),d={tokens:[],govVaults:[],boosts:[]};let c=0,f=0;for(let t=0;t<b.length;t++){for(let o=0;o<u[c].length;o++){const k=u[c][o];f<n.length?d.boosts.push(this.boostFormatter(s,k,n[f])):d.govVaults.push(this.govVaultFormatter(s,k,a[f-n.length])),f++}c++}for(const t of B){const o=u[c].map((k,y)=>this.erc20TokenFormatter(k,t[y]));d.tokens=d.tokens.concat(o),c++}for(const t of w){const o=this.nativeTokenFormatter(u[c],t);d.tokens.push(o),c++}return d}erc20TokenFormatter(s,e){const a=new h(s);return{tokenAddress:e.address,amount:a.shiftedBy(-e.decimals)}}nativeTokenFormatter(s,e){const a=new h(s);return{tokenAddress:e.address,amount:a.shiftedBy(-e.decimals)}}govVaultFormatter(s,e,a){const n=R(s,a.id),r=V(s,a.id),i=new h(e.balance),l=new h(e.rewards);return{vaultId:a.id,balance:i.shiftedBy(-n.decimals),rewards:l.shiftedBy(-r.decimals)}}boostFormatter(s,e,a){const n=I(s,a.id),r=x(s,a.id),i=new h(e.balance),l=new h(e.rewards);return{boostId:a.id,balance:i.shiftedBy(-n.decimals),rewards:l.shiftedBy(-r.decimals)}}}export{M as BalanceAPI};