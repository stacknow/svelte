const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.B96LxFHf.js","../chunks/disclose-version.BE0vd8Of.js","../chunks/runtime.BZuW5zuQ.js","../chunks/legacy.BDWIYuTB.js","../chunks/attributes.C048FCnv.js","../chunks/index.DtDEgZOB.js","../chunks/entry.BndfiRUm.js","../chunks/index.ykvBoqA4.js","../chunks/index-client.BpvAIjqa.js","../assets/0.DSX17XxN.css","../nodes/1.CLvpn1jR.js","../chunks/render.DKjFYLX0.js","../chunks/svelte-head.KbhAMG9f.js","../nodes/2.B3Ugd91M.js","../chunks/store.kAC3XHO5.js","../assets/2.sTI-GHXi.css","../nodes/3.DLS__PGR.js","../chunks/index.bRTE17UM.js","../nodes/4.CDbzZgC0.js","../chunks/props.DI0Qgd78.js","../assets/4.yeGN9jlM.css","../nodes/5.B4cl60Op.js","../assets/5.Dv9QCmvw.css"])))=>i.map(i=>d[i]);
var W=e=>{throw TypeError(e)};var Y=(e,t,r)=>t.has(e)||W("Cannot "+r);var u=(e,t,r)=>(Y(e,t,"read from private field"),r?r.call(e):t.get(e)),T=(e,t,r)=>t.has(e)?W("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),C=(e,t,r,i)=>(Y(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r);import{h as z,W as M,g as Q,X as Z,a0 as $,m as tt,a1 as et,at as rt,au as st,w as at,ah as nt,S as ot,z as v,a6 as it,A as L,av as ct,ai as ut,y as ft,p as lt,F as dt,v as mt,aw as ht,f as O,s as _t,a as vt,ax as D,c as gt,r as yt,t as Et,K as I}from"../chunks/runtime.BZuW5zuQ.js";import{h as Pt,m as Rt,u as bt,s as wt}from"../chunks/render.DKjFYLX0.js";import{a as b,t as N,c as V,d as kt}from"../chunks/disclose-version.BE0vd8Of.js";import{p as j,a as xt,i as B}from"../chunks/props.DI0Qgd78.js";import{o as At}from"../chunks/index-client.BpvAIjqa.js";function p(e,t,r){z&&M();var i=e,n,o;Q(()=>{n!==(n=t())&&(o&&(et(o),o=null),n&&(o=$(()=>r(i,n))))},Z),z&&(i=tt)}function G(e,t){return e===t||(e==null?void 0:e[ot])===t}function q(e={},t,r,i){return rt(()=>{var n,o;return st(()=>{n=o,o=[],at(()=>{e!==r(...o)&&(t(e,...o),n&&G(r(...n),e)&&t(null,...n))})}),()=>{nt(()=>{o&&G(r(...o),e)&&t(null,...o)})}}),e}function Ot(e){return class extends Lt{constructor(t){super({component:e,...t})}}}var g,l;class Lt{constructor(t){T(this,g);T(this,l);var o;var r=new Map,i=(a,s)=>{var d=ft(s);return r.set(a,d),d};const n=new Proxy({...t.props||{},$$events:{}},{get(a,s){return v(r.get(s)??i(s,Reflect.get(a,s)))},has(a,s){return s===it?!0:(v(r.get(s)??i(s,Reflect.get(a,s))),Reflect.has(a,s))},set(a,s,d){return L(r.get(s)??i(s,d),d),Reflect.set(a,s,d)}});C(this,l,(t.hydrate?Pt:Rt)(t.component,{target:t.target,anchor:t.anchor,props:n,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&ct(),C(this,g,n.$$events);for(const a of Object.keys(u(this,l)))a==="$set"||a==="$destroy"||a==="$on"||ut(this,a,{get(){return u(this,l)[a]},set(s){u(this,l)[a]=s},enumerable:!0});u(this,l).$set=a=>{Object.assign(n,a)},u(this,l).$destroy=()=>{bt(u(this,l))}}$set(t){u(this,l).$set(t)}$on(t,r){u(this,g)[t]=u(this,g)[t]||[];const i=(...n)=>r.call(this,...n);return u(this,g)[t].push(i),()=>{u(this,g)[t]=u(this,g)[t].filter(n=>n!==i)}}$destroy(){u(this,l).$destroy()}}g=new WeakMap,l=new WeakMap;const St="modulepreload",Tt=function(e,t){return new URL(e,t).href},K={},w=function(t,r,i){let n=Promise.resolve();if(r&&r.length>0){const a=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(r.map(f=>{if(f=Tt(f,i),f in K)return;K[f]=!0;const y=f.endsWith(".css"),S=y?'[rel="stylesheet"]':"";if(!!i)for(let E=a.length-1;E>=0;E--){const c=a[E];if(c.href===f&&(!y||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${S}`))return;const h=document.createElement("link");if(h.rel=y?"stylesheet":St,y||(h.as="script"),h.crossOrigin="",h.href=f,d&&h.setAttribute("nonce",d),document.head.appendChild(h),y)return new Promise((E,c)=>{h.addEventListener("load",E),h.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return n.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})},zt={};var Ct=N('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Dt=N("<!> <!>",1);function It(e,t){lt(t,!0);let r=j(t,"components",23,()=>[]),i=j(t,"data_0",3,null),n=j(t,"data_1",3,null);dt(()=>t.stores.page.set(t.page)),mt(()=>{t.stores,t.page,t.constructors,r(),t.form,i(),n(),t.stores.page.notify()});let o=D(!1),a=D(!1),s=D(null);At(()=>{const c=t.stores.page.subscribe(()=>{v(o)&&(L(a,!0),ht().then(()=>{L(s,xt(document.title||"untitled page"))}))});return L(o,!0),c});const d=I(()=>t.constructors[1]);var f=Dt(),y=O(f);{var S=c=>{var _=V();const k=I(()=>t.constructors[0]);var x=O(_);p(x,()=>v(k),(P,R)=>{q(R(P,{get data(){return i()},get form(){return t.form},children:(m,Bt)=>{var U=V(),X=O(U);p(X,()=>v(d),(H,J)=>{q(J(H,{get data(){return n()},get form(){return t.form}}),A=>r()[1]=A,()=>{var A;return(A=r())==null?void 0:A[1]})}),b(m,U)},$$slots:{default:!0}}),m=>r()[0]=m,()=>{var m;return(m=r())==null?void 0:m[0]})}),b(c,_)},F=c=>{var _=V();const k=I(()=>t.constructors[0]);var x=O(_);p(x,()=>v(k),(P,R)=>{q(R(P,{get data(){return i()},get form(){return t.form}}),m=>r()[0]=m,()=>{var m;return(m=r())==null?void 0:m[0]})}),b(c,_)};B(y,c=>{t.constructors[1]?c(S):c(F,!1)})}var h=_t(y,2);{var E=c=>{var _=Ct(),k=gt(_);{var x=P=>{var R=kt();Et(()=>wt(R,v(s))),b(P,R)};B(k,P=>{v(a)&&P(x)})}yt(_),b(c,_)};B(h,c=>{v(o)&&c(E)})}b(e,f),vt()}const Gt=Ot(It),Kt=[()=>w(()=>import("../nodes/0.B96LxFHf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),()=>w(()=>import("../nodes/1.CLvpn1jR.js"),__vite__mapDeps([10,1,2,3,11,12,5,6,7,8]),import.meta.url),()=>w(()=>import("../nodes/2.B3Ugd91M.js"),__vite__mapDeps([13,1,2,3,12,4,11,14,7,15]),import.meta.url),()=>w(()=>import("../nodes/3.DLS__PGR.js"),__vite__mapDeps([16,17,2,1,3,12]),import.meta.url),()=>w(()=>import("../nodes/4.CDbzZgC0.js"),__vite__mapDeps([18,1,2,11,12,19,14,4,6,7,8,20]),import.meta.url),()=>w(()=>import("../nodes/5.B4cl60Op.js"),__vite__mapDeps([21,17,2,1,3,12,22]),import.meta.url)],Nt=[],Xt={"/":[2],"/about":[3],"/sverdle":[-5],"/sverdle/how-to-play":[5]},Vt={handleError:({error:e})=>{console.error(e)},reroute:()=>{},transport:{}},jt=Object.fromEntries(Object.entries(Vt.transport).map(([e,t])=>[e,t.decode])),Ht=!1,Jt=(e,t)=>jt[e](t);export{Jt as decode,jt as decoders,Xt as dictionary,Ht as hash,Vt as hooks,zt as matchers,Kt as nodes,Gt as root,Nt as server_loads};