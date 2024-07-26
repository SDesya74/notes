var rt=Object.defineProperty;var U=s=>{throw TypeError(s)};var it=(s,t,e)=>t in s?rt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var E=(s,t,e)=>it(s,typeof t!="symbol"?t+"":t,e),W=(s,t,e)=>t.has(s)||U("Cannot "+e);var m=(s,t,e)=>(W(s,t,"read from private field"),e?e.call(s):t.get(s)),L=(s,t,e)=>t.has(s)?U("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e),j=(s,t,e,i)=>(W(s,t,"write to private field"),i?i.call(s,e):t.set(s,e),e),G=(s,t,e)=>(W(s,t,"access private method"),e);import{d as tt,c,r as g,s as b,a as T,t as B}from"../chunks/disclose-version.QqCXY2iz.js";import{e as lt,u as nt,p as q,f as et,t as st,a as J,H as a,J as z,v as K,a1 as V,w as A,a2 as h}from"../chunks/runtime.D-T8yC8_.js";import{e as Q,i as Z}from"../chunks/each.C9xw4ECz.js";import{i as ut}from"../chunks/lifecycle.I4XvjL7a.js";import{o as vt}from"../chunks/index-client.egoaW-Cb.js";import{s as ct}from"../chunks/render.qKbU6PRD.js";import{s as D}from"../chunks/attributes.SxH8svC9.js";import{p as R}from"../chunks/props.heyn9BxW.js";import{b as gt}from"../chunks/paths.BRzNSbVG.js";import{m as at}from"../chunks/index.svelte.wTiwucYi.js";var x,M,X,C,ot;const P=class P{constructor(t){L(this,C);L(this,x,new WeakMap);L(this,M);L(this,X);j(this,X,t)}observe(t,e){var i=m(this,x).get(t)||new Set;return i.add(e),m(this,x).set(t,i),G(this,C,ot).call(this).observe(t,m(this,X)),()=>{var o=m(this,x).get(t);o.delete(e),o.size===0&&(m(this,x).delete(t),m(this,M).unobserve(t))}}};x=new WeakMap,M=new WeakMap,X=new WeakMap,C=new WeakSet,ot=function(){return m(this,M)??j(this,M,new ResizeObserver(t=>{for(var e of t){P.entries.set(e.target,e);for(var i of m(this,x).get(e.target)||[])i(e)}}))},E(P,"entries",new WeakMap);let O=P;var ht=new O({box:"border-box"});function $(s,t,e){var i=ht.observe(s,()=>e(s[t]));lt(()=>(nt(()=>e(s[t])),i))}var ft=(s,t,e)=>t(e.messageContent),dt=B('<div class="note min-w-24 max-w-96 min-h-12 relative pt-3 svelte-1w3jgum"><button class="w-4 h-4 absolute right-2 top-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-move" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10M.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8"></path></svg></button> <button class="w-4 h-4 absolute left-2 top-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"></path></svg></button> <a class="w-4 h-4 absolute left-8 top-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16"><path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"></path><path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"></path></svg></a> <div class="flex w-full h-full justify-center"><div class="p-4 w-full break-all"> </div></div></div>');function mt(s,t){q(t,!0);let e=R(t,"noteWidth",7),i=R(t,"noteHeight",7);et(()=>{at.updateTransform(t.messageId,{x:t.posX,y:t.posY},e(),i())});function o(u){navigator.clipboard.writeText(u).then(()=>{console.log("Text copied to clipboard")}).catch(f=>{console.error("Failed to copy text: ",f)})}var n=dt(),v=c(n);v.__mousedown=function(...u){const f=t.onMouseDown;return f==null?void 0:f.apply(this,u)};var k=c(v);c(k),g(k),g(v);var p=b(b(v,!0));p.__click=[ft,o,t];var y=c(p);c(y),g(y),g(p);var w=b(b(p,!0)),_=c(w),Y=c(_);b(Y),g(_),g(w);var I=b(b(w,!0)),l=c(I),r=c(l);g(l),g(I),g(n),st(()=>{D(n,"style",`
            position: absolute;
            left: ${t.posX??""}px;
            top: ${t.posY??""}px;
          `),D(w,"href",`${gt??""}/#${t.messageId??""}`),ct(r,t.messageContent)}),$(n,"offsetHeight",u=>i(u)),$(n,"offsetWidth",u=>e(u)),T(s,n),J()}tt(["mousedown","click"]);var bt=B('<div class="line absolute h-0.5 bg-black dark:bg-white svelte-1mutbb5"></div>');function pt(s,t){q(t,!0);let e=96,i=68;et(()=>{let y=at.get(t.messageId).data.transform;console.log(y)});var o=bt();const n=z(()=>t.posLinksX+e/2),v=z(()=>t.posLinksY+i/2),k=z(()=>Math.sqrt(Math.pow(t.posIndexX-t.posLinksX,2)+Math.pow(t.posIndexY-t.posLinksY,2))),p=z(()=>Math.atan2(t.posIndexY-t.posLinksY,t.posIndexX-t.posLinksX)*180/Math.PI);st(()=>D(o,"style",`
    left: ${a(n)}px;
    top: ${a(v)}px;
    width: ${a(k)}px;
    transform: rotate(${a(p)}deg);
    `)),T(s,o),J()}var wt=B('<div class="flex flex-col px-1 py-0.5 flex-grow"><div class="border border-black flex flex-grow cursor-default" style="position: relative;" role="button" tabindex="0"><!> <!></div></div>');function Ct(s,t){q(t,!1);let e=A({}),i=A({}),o=A({});vt(()=>{let l=localStorage.getItem("notes"),r=JSON.parse(l);K(e,r.links),K(i,r.messages);let u=0,f=200,N=new Set,H={};Object.keys(a(i)).map(d=>{if(N.has(a(e)[d]))V(o,a(o)[d]={x:H[a(e)[d]].x+150,y:H[a(e)[d]].y}),H[a(e)[d]].x=H[a(e)[d]].x+150;else{let S=u*100+20,F=f+100;N.add(a(e)[d]),H[a(e)[d]]={x:F,y:S},V(o,a(o)[d]={x:F,y:S}),u++}})});let n=null,v={x:0,y:0};function k(l,r){n=r,v.x=l.clientX-a(o)[r].x,v.y=l.clientY-a(o)[r].y}function p(l){n!==null&&V(o,a(o)[n]={x:l.clientX-v.x,y:l.clientY-v.y})}function y(){n=null}ut();var w=wt(),_=c(w);_.__mousemove=p,_.__mouseup=y;var Y=c(_);Q(Y,1,()=>Object.keys(a(e)),Z,(l,r,u)=>{pt(l,{get messageId(){return h(r)},get posIndexX(){return a(o)[h(r)].x},get posIndexY(){return a(o)[h(r)].y},get posLinksX(){return a(o)[a(e)[h(r)]].x},get posLinksY(){return a(o)[a(e)[h(r)]].y},$$legacy:!0})});var I=b(b(Y,!0));Q(I,1,()=>Object.keys(a(i)),Z,(l,r,u)=>{mt(l,{get messageId(){return h(r)},get posX(){return a(o)[h(r)].x},get posY(){return a(o)[h(r)].y},get messageContent(){return a(i)[h(r)].content},onMouseDown:f=>k(f,h(r)),$$legacy:!0})}),g(_),g(w),T(s,w),J()}tt(["mousemove","mouseup"]);export{Ct as component};