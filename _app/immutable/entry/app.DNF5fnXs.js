const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.Czvpd9Mm.js","../chunks/disclose-version.DoApVL7c.js","../chunks/runtime.DJFpnPC0.js","../chunks/misc.BtJNDZo1.js","../chunks/attributes.i701br-n.js","../chunks/index.svelte.BJcAp9c5.js","../chunks/proxy.CW1neRZ4.js","../chunks/lifecycle.CX1LJLUV.js","../chunks/store.CH7MD-9u.js","../chunks/entry.D_hCBjow.js","../chunks/index.D8IQSSJg.js","../chunks/stores.B-6Wibls.js","../assets/0.a3ePzGa4.css","../nodes/1.CI-H1cmP.js","../chunks/render.RUqgjbxZ.js","../nodes/2.BTgUvWcU.js","../chunks/svelte-component.C81X4dnH.js","../chunks/each.B907KWMQ.js","../chunks/input.HdFEBO2A.js","../chunks/this.DHPiOpLP.js","../chunks/props.BXINNwbU.js","../nodes/3.TdDT3yu6.js","../chunks/index-client.D4GGVMv4.js","../assets/3.Cv956sRd.css","../nodes/4.C0cKYHSh.js","../assets/4.F2P4U0lq.css"])))=>i.map(i=>d[i]);
var V=o=>{throw TypeError(o)};var B=(o,t,r)=>t.has(o)||V("Cannot "+r);var i=(o,t,r)=>(B(o,t,"read from private field"),r?r.call(o):t.get(o)),k=(o,t,r)=>t.has(o)?V("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(o):t.set(o,r),L=(o,t,r,a)=>(B(o,t,"write to private field"),a?a.call(o,r):t.set(o,r),r);import{H as b,v as x,Q as z,w as F,p as G,R as J,f as K,a0 as N,a as X,x as O,t as Y}from"../chunks/runtime.DJFpnPC0.js";import{h as Z,m as M,u as $,s as tt}from"../chunks/render.RUqgjbxZ.js";import{f as p,N as A,a as E,s as j,t as U,c as et,O as rt,r as st}from"../chunks/disclose-version.DoApVL7c.js";import{i as C,c as S}from"../chunks/svelte-component.C81X4dnH.js";import{p as ot}from"../chunks/proxy.CW1neRZ4.js";import{b as T}from"../chunks/this.DHPiOpLP.js";import{p as D}from"../chunks/props.BXINNwbU.js";import{o as nt}from"../chunks/index-client.D4GGVMv4.js";function at(o){return class extends it{constructor(t){super({component:o,...t})}}}var _,m;class it{constructor(t){k(this,_);k(this,m);var r=new Map,a=(s,e)=>{var l=F(e);return r.set(s,l),l};const c=new Proxy({...t.props||{},$$events:{}},{get(s,e){return b(r.get(e)??a(e,Reflect.get(s,e)))},has(s,e){return b(r.get(e)??a(e,Reflect.get(s,e))),Reflect.has(s,e)},set(s,e,l){return x(r.get(e)??a(e,l),l),Reflect.set(s,e,l)}});L(this,m,(t.hydrate?Z:M)(t.component,{target:t.target,props:c,context:t.context,intro:t.intro??!1,recover:t.recover})),L(this,_,c.$$events);for(const s of Object.keys(i(this,m)))s==="$set"||s==="$destroy"||s==="$on"||z(this,s,{get(){return i(this,m)[s]},set(e){i(this,m)[s]=e},enumerable:!0});i(this,m).$set=s=>{Object.assign(c,s)},i(this,m).$destroy=()=>{$(i(this,m))}}$set(t){i(this,m).$set(t)}$on(t,r){i(this,_)[t]=i(this,_)[t]||[];const a=(...c)=>r.call(this,...c);return i(this,_)[t].push(a),()=>{i(this,_)[t]=i(this,_)[t].filter(c=>c!==a)}}$destroy(){i(this,m).$destroy()}}_=new WeakMap,m=new WeakMap;const ct="modulepreload",lt=function(o,t){return new URL(o,t).href},q={},R=function(t,r,a){let c=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),l=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));c=Promise.all(r.map(u=>{if(u=lt(u,a),u in q)return;q[u]=!0;const v=u.endsWith(".css"),P=v?'[rel="stylesheet"]':"";if(!!a)for(let d=s.length-1;d>=0;d--){const h=s[d];if(h.href===u&&(!v||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${P}`))return;const n=document.createElement("link");if(n.rel=v?"stylesheet":ct,v||(n.as="script",n.crossOrigin=""),n.href=u,l&&n.setAttribute("nonce",l),document.head.appendChild(n),v)return new Promise((d,h)=>{n.addEventListener("load",d),n.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${u}`)))})}))}return c.then(()=>t()).catch(s=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=s,window.dispatchEvent(e),!e.defaultPrevented)throw s})},pt={};var ut=U('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),mt=U("<!> <!>",1);function dt(o,t){G(t,!0);let r=D(t,"components",15,()=>[]),a=D(t,"data_0",3,null),c=D(t,"data_1",3,null);J(()=>t.stores.page.set(t.page)),K(()=>{t.stores,t.page,t.constructors,r(),t.form,a(),c(),t.stores.page.notify()});let s=O(!1),e=O(!1),l=O(null);nt(()=>{const g=t.stores.page.subscribe(()=>{b(s)&&(x(e,!0),N().then(()=>{x(l,ot(document.title||"untitled page"))}))});return x(s,!0),g});var u=mt(),v=p(u);C(v,()=>t.constructors[1],g=>{var n=A(),d=p(n);S(d,()=>t.constructors[0],(h,y)=>{T(y(h,{get data(){return a()},children:(f,ft)=>{var I=A(),H=p(I);S(H,()=>t.constructors[1],(Q,W)=>{T(W(Q,{get data(){return c()},get form(){return t.form}}),w=>r()[1]=w,()=>{var w;return(w=r())==null?void 0:w[1]})}),E(f,I)},$$slots:{default:!0}}),f=>r()[0]=f,()=>{var f;return(f=r())==null?void 0:f[0]})}),E(g,n)},g=>{var n=A(),d=p(n);S(d,()=>t.constructors[0],(h,y)=>{T(y(h,{get data(){return a()},get form(){return t.form}}),f=>r()[0]=f,()=>{var f;return(f=r())==null?void 0:f[0]})}),E(g,n)});var P=j(j(v,!0));C(P,()=>b(s),g=>{var n=ut(),d=et(n);C(d,()=>b(e),h=>{var y=rt();Y(()=>tt(y,b(l))),E(h,y)}),st(n),E(g,n)}),E(o,u),X()}const xt=at(dt),Pt=[()=>R(()=>import("../nodes/0.Czvpd9Mm.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url),()=>R(()=>import("../nodes/1.CI-H1cmP.js"),__vite__mapDeps([13,1,2,14,7,8,11,9,10]),import.meta.url),()=>R(()=>import("../nodes/2.BTgUvWcU.js"),__vite__mapDeps([15,1,2,16,17,4,5,6,18,19,8,3,9,10,7,20,14,11]),import.meta.url),()=>R(()=>import("../nodes/3.TdDT3yu6.js"),__vite__mapDeps([21,1,2,17,7,22,14,4,5,6,20,23]),import.meta.url),()=>R(()=>import("../nodes/4.C0cKYHSh.js"),__vite__mapDeps([24,1,2,5,6,18,7,20,16,8,14,17,3,22,10,25]),import.meta.url)],kt=[],Lt={"/":[2],"/graph":[3],"/settings":[4]},Ot={handleError:({error:o})=>{console.error(o)},reroute:()=>{}};export{Lt as dictionary,Ot as hooks,pt as matchers,Pt as nodes,xt as root,kt as server_loads};