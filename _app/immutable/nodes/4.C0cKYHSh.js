import{N as q,f as M,c as k,r as $,Q as re,a as d,t as h,s as N,d as Fe,R as je}from"../chunks/disclose-version.DoApVL7c.js";import{a3 as Ce,a4 as Ge,p as L,t as E,a as R,a5 as V,v as I,V as K,a6 as z,H as e,a2 as B,w as J,K as f,x as Ke,J as Le}from"../chunks/runtime.DJFpnPC0.js";import{m as ge,r as Re}from"../chunks/index.svelte.BJcAp9c5.js";import{b as Ue}from"../chunks/input.HdFEBO2A.js";import{p as Pe}from"../chunks/proxy.CW1neRZ4.js";import{i as U}from"../chunks/lifecycle.CX1LJLUV.js";import{p as O,s as qe}from"../chunks/props.BXINNwbU.js";import{i as G,c as Be}from"../chunks/svelte-component.C81X4dnH.js";import{s as ce,b as ne,a as se}from"../chunks/store.CH7MD-9u.js";import{s as A}from"../chunks/render.RUqgjbxZ.js";import{e as _e,i as fe}from"../chunks/each.B907KWMQ.js";import{t as me,s as ee,d as Ee,a as oe}from"../chunks/misc.BtJNDZo1.js";import{o as ze}from"../chunks/index-client.D4GGVMv4.js";import{w as pe,r as De}from"../chunks/index.D8IQSSJg.js";function Se(m){return function(...t){var c=t[0];return c.stopPropagation(),m.apply(this,t)}}const we={};function H(m,t){const c=Ce(we),v=typeof m=="function"?m(c):m,a={...c,...v};return t!=null&&t.expandable&&(a.isParentExpanded=a.expanded),Ge(we,a),c}var He=h('<span class="container svelte-cnhr4o"><span class="arrow svelte-cnhr4o"> </span></span>');function Ne(m,t){L(t,!1);const c=ce(),v=()=>se(l,"$expandable",c),a=()=>se(n(),"$expanded",c),{expanded:o,expandable:l}=H();let n=O(t,"expanded",0,o);U();var r=q(),s=M(r);G(s,v,i=>{var p=He(),u=k(p),S=k(u);S.nodeValue="▶",$(u),$(p),E(()=>me(u,"expanded",a())),re("click",p,g=>{g.stopPropagation(),ne(n(),!a())},!1),d(i,p)}),d(m,r),R()}function Qe(m,t){L(t,!1),H({displayMode:"summary"}),U();var c=q(),v=M(c);ee(v,Ee(t),{}),d(m,c),R()}function Oe(m,t){L(t,!1);let c=O(t,"expanded"),v=O(t,"key");const a=pe(!1);H(({keyPath:n,level:r})=>(v()!=="[[Entries]]"&&(n=[...n,v()],r=r+1),{keyPath:n,level:r,expanded:c(),expandable:a})),U();var o=q(),l=M(o);ee(l,Ee(t),{}),d(m,o),R()}var We=h('<span class="operator">:</span>'),Xe=h('<span class="label svelte-19drypg"><!><!><!></span><!>',1),Ye=h('<li class="svelte-19drypg"><!></li>'),Ze=h("<ul></ul>"),et=h('<span class="root svelte-19drypg"><!> <!></span> <!>',1);function D(m,t){L(t,!1);const c=ce(),v=()=>se(u,"$expanded",c),a=J();let o=O(t,"keys"),l=O(t,"shouldShowColon",8,()=>{}),n=O(t,"expandKey",0,x=>x),r=O(t,"defaultExpanded",4,!1);const{isParentExpanded:s,displayMode:i,root:p,expanded:u,expandable:S,keyPath:g,level:y,shouldExpandNode:b}=H({root:!1},{expandable:!0});if(ne(S,!0),i!=="summary"){if(!r()){const x=b({keyPath:g,level:y});x!==void 0&&r(x)}ze(()=>s.subscribe(x=>{x?u.set(r()):u.set(!1)}))}function _(){ne(u,!v())}V(()=>K(o()),()=>{I(a,o().map(()=>pe(!1)))}),z(),U();var w=q(),P=M(w);G(P,()=>i==="summary",x=>{var C;var T=q(),j=M(T);ee(j,(C=t.$$slots)==null?void 0:C.summary,{}),d(x,T)},x=>{var T=et(),j=M(T),C=k(j);G(C,()=>p,W=>{Ne(W,{expanded:u,$$legacy:!0})});var Q=N(N(C,!0));Qe(Q,{children:(W,Y)=>{var Z;var ve=q(),ae=M(ve);ee(ae,(Z=t.$$slots)==null?void 0:Z.preview,{root:p}),d(W,ve)},$$slots:{default:!0},$$legacy:!0}),$(j);var te=N(N(j,!0));G(te,v,W=>{var Y=Ze();_e(Y,9,o,fe,(ve,ae,Z)=>{var ue=Ye(),Ae=k(ue),Te=f(()=>n()(B(ae)));Oe(Ae,{get key(){return e(Te)},get expanded(){return e(a)[B(Z)]},children:(Ie,ca)=>{var he,be;var $e=Xe(),ie=M($e),xe=k(ie);Ne(xe,{$$legacy:!0});var ke=N(xe);ee(ke,(he=t.$$slots)==null?void 0:he.item_key,{get key(){return B(ae)},index:B(Z)});var Me=N(ke);G(Me,()=>!l()||l()(B(ae)),de=>{var Ve=We();d(de,Ve)}),$(ie);var Je=N(ie);ee(Je,(be=t.$$slots)==null?void 0:be.item_value,{get key(){return B(ae)},index:B(Z)}),re("click",ie,()=>e(a)[B(Z)].update(de=>!de),!1),d(Ie,$e)},$$slots:{default:!0},$$legacy:!0}),$(ue),E(()=>me(ue,"indent",v())),re("click",ue,Se(()=>{}),!1),d(ve,ue)}),$(Y),re("click",Y,Se(_),!1),d(W,Y)}),re("click",j,_,!1),d(x,T)}),d(m,w),R()}var tt=h('<span class="label"> </span>'),at=h('<!><span class="operator"> </span>',1),rt=h('<span class="comma operator svelte-150ffaa">,</span>'),nt=h("<!> <!>",1),st=h('<span class="comma operator svelte-150ffaa">,</span> <span class="operator">…</span>',1),ot=h('<span class="operator"> </span>'),lt=h("<!> <!> <!> <!>",1);function le(m,t){L(t,!1);let c=O(t,"list"),v=O(t,"hasMore"),a=O(t,"label",8,()=>{}),o=O(t,"prefix",8,()=>{}),l=O(t,"postfix",8,()=>{}),n=O(t,"root",0,!1);const{showPreview:r}=H();U();var s=q(),i=M(s);G(i,()=>n()||r,p=>{var u=lt(),S=M(u);G(S,o,_=>{var w=at(),P=M(w);G(P,a,j=>{var C=tt(),Q=k(C);$(C),E(()=>A(Q,a())),d(j,C)});var x=N(P),T=k(x);$(x),E(()=>A(T,o())),d(_,w)});var g=N(N(S,!0));_e(g,1,c,fe,(_,w,P)=>{var C;var x=nt(),T=M(x);ee(T,(C=t.$$slots)==null?void 0:C.item,{get item(){return B(w)},index:B(P)});var j=N(N(T,!0));G(j,()=>B(P)<c().length-1,Q=>{var te=rt();d(Q,te)}),d(_,x)});var y=N(N(g,!0));G(y,v,_=>{var w=st(),P=M(w);N(N(P,!0)),d(_,w)});var b=N(N(y,!0));G(b,l,_=>{var w=ot(),P=k(w);$(w),E(()=>A(P,l())),d(_,w)}),d(p,u)}),d(m,s),R()}var ut=h('<span class="label"> </span>'),ct=h('<span class="property"> </span><span class="operator"> </span><!>',1),vt=h('<span class="property"> </span>');function ye(m,t){L(t,!1);const c=J(),v=J();let a=O(t,"value"),o=O(t,"summary");V(()=>K(a()),()=>{I(c,Object.getOwnPropertyNames(a()))}),V(()=>e(c),()=>{I(v,e(c).slice(0,5))}),z(),U(),D(m,{get keys(){return e(c)},$$slots:{summary:(l,n)=>{var r=ut(),s=k(r);$(r),E(()=>A(s,o()??"{…}")),d(l,r)},preview:(l,n)=>{const r=f(()=>n.root);var s=f(()=>e(v).length<e(c).length),i=f(()=>o()?`${o()} {`:"{");le(l,{get list(){return e(v)},get hasMore(){return e(s)},get prefix(){return e(i)},postfix:"}",get root(){return e(r)},$$slots:{item:(p,u)=>{const S=f(()=>u.item);var g=ct(),y=M(g),b=k(y);$(y);var _=N(y),w=k(_);w.nodeValue=": ",$(_);var P=N(_);F(P,{get value(){return a()[e(S)]},$$legacy:!0}),E(()=>A(b,e(S))),d(p,g)}},$$legacy:!0})},item_key:(l,n)=>{const r=f(()=>n.key);var s=vt(),i=k(s);$(s),E(()=>A(i,e(r))),d(l,s)},item_value:(l,n)=>{const r=f(()=>n.key);F(l,{get value(){return a()[e(r)]},$$legacy:!0})}},$$legacy:!0}),R()}var it=h('<span class="label"> </span>'),pt=h('<span class="property"> </span>');function dt(m,t){L(t,!1);const c=J(),v=J();let a=O(t,"value");V(()=>K(a()),()=>{I(c,Object.getOwnPropertyNames(a()))}),V(()=>K(a()),()=>{I(v,a().slice(0,5))}),z(),U(),D(m,{get keys(){return e(c)},$$slots:{summary:(o,l)=>{var n=it(),r=k(n);$(n),E(()=>A(r,`Array(${a().length??""})`)),d(o,n)},preview:(o,l)=>{const n=f(()=>l.root);var r=f(()=>e(v).length<a().length);le(o,{get list(){return e(v)},get hasMore(){return e(r)},get label(){return`(${a().length??""}) `},prefix:"[",postfix:"]",get root(){return e(n)},$$slots:{item:(s,i)=>{const p=f(()=>i.item);F(s,{get value(){return e(p)},$$legacy:!0})}},$$legacy:!0})},item_key:(o,l)=>{const n=f(()=>l.key);var r=pt(),s=k(r);$(r),E(()=>A(s,String(e(n)))),d(o,r)},item_value:(o,l)=>{const n=f(()=>l.key);F(o,{get value(){return a()[e(n)]},$$legacy:!0})}},$$legacy:!0}),R()}var yt=h('<span class="label"> </span>'),gt=h("<span> </span>"),_t=h('<span class="property"> </span>');function ft(m,t){L(t,!1);const c=J();let v=O(t,"value"),a=O(t,"nodeType"),o=J([]),l=J([]);const n="[[Entries]]";V(()=>K(v()),()=>{let r=[],s=[],i=0;for(const p of v())r.push(i++),s.push(p);I(o,r),I(l,s)}),V(()=>e(l),()=>{I(c,e(l).slice(0,5))}),z(),U(),D(m,{keys:[n,"size"],shouldShowColon:r=>r!==n,$$slots:{summary:(r,s)=>{var i=yt(),p=k(i);$(i),E(()=>A(p,`${a()??""}(${e(o).length??""})`)),d(r,i)},preview:(r,s)=>{const i=f(()=>s.root);var p=f(()=>e(c).length<e(l).length),u=f(()=>`${a()}(${e(o).length}) `);le(r,{get list(){return e(c)},get hasMore(){return e(p)},get label(){return e(u)},prefix:"{",postfix:"}",get root(){return e(i)},$$slots:{item:(S,g)=>{const y=f(()=>g.item);F(S,{get value(){return e(y)},$$legacy:!0})}},$$legacy:!0})},item_key:(r,s)=>{const i=f(()=>s.key);var p=gt(),u=k(p);$(p),E(()=>{oe(p,e(i)===n?"internal":"property"),A(u,e(i))}),d(r,p)},item_value:(r,s)=>{const i=f(()=>s.key);var p=q(),u=M(p);G(u,()=>e(i)===n,S=>{D(S,{get keys(){return e(o)},defaultExpanded:!0,$$slots:{item_key:(g,y)=>{const b=f(()=>y.key);var _=_t(),w=k(_);$(_),E(()=>A(w,e(b))),d(g,_)},item_value:(g,y)=>{const b=f(()=>y.key);F(g,{get value(){return e(l)[e(b)]},$$legacy:!0})}},$$legacy:!0})},S=>{F(S,{get value(){return v()[e(i)]},$$legacy:!0})}),d(r,p)}},$$legacy:!0}),R()}var mt=h('<span color="label"> </span>'),$t=h('<!><span class="operator"> </span><!>',1),xt=h("<span> </span>"),kt=h('<span class="property"> </span>'),ht=h('<span class="operator"> </span><!><span class="operator"> </span><!><span class="operator"> </span>',1),bt=h('<span class="property"> </span>');function St(m,t){L(t,!1);const c=J();let v=O(t,"value");H();let a=J([]),o=J([]),l=J([]);const n="[[Entries]]";V(()=>K(v()),()=>{let r=[],s=[],i=[],p=0;for(const u of v())r.push(p++),s.push(u[0]),i.push(u[1]);I(a,r),I(o,s),I(l,i)}),V(()=>K(v()),()=>{I(c,Array.from(v().keys()).slice(0,5))}),z(),U(),D(m,{keys:[n,"size"],shouldShowColon:r=>r!==n,$$slots:{summary:(r,s)=>{var i=mt(),p=k(i);$(i),E(()=>A(p,`Map(${e(o).length??""})`)),d(r,i)},preview:(r,s)=>{const i=f(()=>s.root);var p=f(()=>e(c).length<v().size),u=f(()=>`Map(${e(o).length}) `);le(r,{get list(){return e(c)},get hasMore(){return e(p)},get label(){return e(u)},prefix:"{",postfix:"}",get root(){return e(i)},$$slots:{item:(S,g)=>{const y=f(()=>g.item);var b=$t(),_=M(b);F(_,{get value(){return e(y)},$$legacy:!0});var w=N(_),P=k(w);P.nodeValue=" => ",$(w);var x=N(w),T=f(()=>v().get(e(y)));F(x,{get value(){return e(T)},$$legacy:!0}),d(S,b)}},$$legacy:!0})},item_key:(r,s)=>{const i=f(()=>s.key);var p=xt(),u=k(p);$(p),E(()=>{oe(p,e(i)===n?"internal":"property"),A(u,e(i))}),d(r,p)},item_value:(r,s)=>{const i=f(()=>s.key);var p=q(),u=M(p);G(u,()=>e(i)===n,S=>{D(S,{get keys(){return e(a)},expandKey:g=>e(o)[g],defaultExpanded:!0,$$slots:{item_key:(g,y)=>{const b=f(()=>y.key);var _=kt(),w=k(_);$(_),E(()=>A(w,e(b))),d(g,_)},item_value:(g,y)=>{const b=f(()=>y.key);D(g,{keys:["key","value"],$$slots:{preview:(_,w)=>{var P=ht(),x=M(P),T=k(x);T.nodeValue="{ ",$(x);var j=N(x);F(j,{get value(){return e(o)[e(b)]},$$legacy:!0});var C=N(j),Q=k(C);Q.nodeValue=" => ",$(C);var te=N(C);F(te,{get value(){return e(l)[e(b)]},$$legacy:!0});var W=N(te),Y=k(W);Y.nodeValue=" }",$(W),d(_,P)},item_key:(_,w)=>{const P=f(()=>w.key);var x=bt(),T=k(x);$(x),E(()=>A(T,e(P))),d(_,x)},item_value:(_,w)=>{const P=f(()=>w.key);var x=f(()=>e(P)==="key"?e(o)[e(b)]:e(l)[e(b)]);F(_,{get value(){return e(x)},$$legacy:!0})}},$$legacy:!0})}},$$legacy:!0})},S=>{F(S,{get value(){return v()[e(i)]},$$legacy:!0})}),d(r,p)}},$$legacy:!0}),R()}var wt=h("<span> </span>");function X(m,t){let c=O(t,"value"),v=O(t,"nodeType");var a=wt(),o=k(a);$(a),E(()=>{oe(a,`${v()??""} svelte-l95iub`),A(o,c())}),d(m,a)}var Nt=h('<span class="svelte-1u08yw6"><!><span class="operator"> </span></span><br>',1),Pt=h("<span><!></span>"),Et=h("<span><!></span>");function Ot(m,t){L(t,!1);const c=ce(),v=()=>se(o,"$expanded",c);let a=O(t,"stack");const{expanded:o,expandable:l}=H();ne(l,!0),U();var n=Et(),r=k(n);G(r,v,s=>{var i=q(),p=M(i);_e(p,1,a,fe,(u,S,g)=>{var y=Nt();const b=f(()=>B(g)<a().length-1);var _=M(y);me(_,"indent",B(g)>0);var w=k(_),P=f(()=>B(S)+(e(b)?"\\n":""));F(w,{get value(){return e(P)},$$legacy:!0});var x=N(w),T=k(x);$(x),$(_),N(_),E(()=>A(T,e(b)?" +":"")),d(u,y)}),d(s,i)},s=>{var i=Pt(),p=k(i),u=f(()=>a()[0]+"…");F(p,{get value(){return e(u)},$$legacy:!0}),$(i),d(s,i)}),$(n),re("click",n,()=>ne(o,!v()),!1),d(m,n),R()}var At=h('<span class="label"> </span>'),Tt=h('<span class="label"> </span>'),It=h('<span class="property"> </span>');function Mt(m,t){L(t,!1);const c=J();let v=O(t,"value");V(()=>K(v()),()=>{I(c,v().stack.split(`
`))}),z(),U(),D(m,{keys:["message","stack"],$$slots:{summary:(a,o)=>{var l=At(),n=k(l);$(l),E(()=>A(n,`Error: ${String(v().message)??""}`)),d(a,l)},preview:(a,o)=>{var l=Tt(),n=k(l);$(l),E(()=>A(n,`Error: ${String(v().message)??""}`)),d(a,l)},item_key:(a,o)=>{const l=f(()=>o.key);var n=It(),r=k(n);$(n),E(()=>A(r,e(l))),d(a,n)},item_value:(a,o)=>{const l=f(()=>o.key);var n=q(),r=M(n);G(r,()=>e(l)==="stack",s=>{Ot(s,{get stack(){return e(c)},$$legacy:!0})},s=>{F(s,{get value(){return v()[e(l)]},$$legacy:!0})}),d(a,n)}},$$legacy:!0}),R()}function Jt(m,t){const c=Object.prototype.toString.call(m).slice(8,-1);return c==="Object"?!t&&typeof m[Symbol.iterator]=="function"?"Iterable":m.constructor.name:c}var Vt=h('<span class="svelte-1fvwa9c"> </span>'),Ft=h('<span class="svelte-1fvwa9c"> </span>');function jt(m,t){L(t,!1);const c=J();let v=O(t,"value");const a={"\n":"\\n","	":"\\t","\r":"\\r"},{displayMode:o}=H();V(()=>K(v()),()=>{I(c,v().replace(/[\n\t\r]/g,r=>a[r]))}),z(),U();var l=q(),n=M(l);G(n,()=>o==="summary",r=>{var s=Vt(),i=k(s);E(()=>A(i,`"${e(c).slice(0,30)+(e(c).length>30?"…":"")}"`)),$(s),d(r,s)},r=>{var s=Ft(),i=k(s);$(s),E(()=>A(i,`"${e(c)??""}"`)),d(r,s)}),d(m,l),R()}var Ct=h('<span class="i svelte-1eamqdt">ƒ</span>'),Gt=h('<span class="fn i svelte-1eamqdt"> </span>'),Kt=h('<span class="i svelte-1eamqdt"> </span>'),Lt=h("<!><!>",1),Rt=h("<span> </span>"),Ut=h('<span class="i svelte-1eamqdt"> </span>');function qt(m,t){L(t,!1);const c=J(),v=J(),a=J();let o=O(t,"value");function l(g){const y=g.match(/^(?:(async)\s+)?(?:function)?(\*)?\s*([^(]+)?(\([^)]*\))\s*(=>)?/),b=y==null?void 0:y[1],_=y==null?void 0:y[2],w=y==null?void 0:y[3],P=y==null?void 0:y[4],x=y==null?void 0:y[5],T=g.match(/^class\s+([^\s]+)/),j=T==null?void 0:T[1];return{args:P,isAsync:b,isGenerator:_,fnName:w,isArrow:x,isClass:j}}function n({isGenerator:g,isAsync:y,isClass:b}){return b?`class ${b}`:(y?"async ":"")+"ƒ"+(g?"*":"")}function r({isAsync:g,isArrow:y,fnName:b,args:_}){return(y&&g?"async":"")+" "+(b??"")+_+(y?" => …":"")}const s="[[Function]]",i="[[Prototype]]";function p(g){return g===i?o().__proto__:o()[g]}function u(g){return g===s?!0:p(g)}function S(g){try{return g.toString()}catch{switch(g.constructor.name){case"AsyncFunction":return"async function () {}";case"AsyncGeneratorFunction":return"async function * () {}";case"GeneratorFunction:":return"function * () {}";default:return"function () {}"}}}V(()=>K(o()),()=>{I(c,S(o()))}),V(()=>e(c),()=>{I(v,l(e(c)))}),V(()=>{},()=>{I(a,["length","name","prototype",s,i].filter(u))}),z(),U(),D(m,{get keys(){return e(a)},$$slots:{summary:(g,y)=>{var b=Ct();d(g,b)},preview:(g,y)=>{var b=Lt(),_=M(b);G(_,()=>!e(v).isArrow,P=>{var x=Gt(),T=k(x);E(()=>A(T,n(e(v)))),$(x),d(P,x)});var w=N(_);G(w,()=>!e(v).isClass,P=>{var x=Kt(),T=k(x);E(()=>A(T,r(e(v)))),$(x),d(P,x)}),d(g,b)},item_key:(g,y)=>{const b=f(()=>y.key);var _=Rt(),w=k(_);$(_),E(()=>{oe(_,e(b)===s||e(b)===i?"internal":"property"),A(w,e(b))}),d(g,_)},item_value:(g,y)=>{const b=f(()=>y.key);var _=q(),w=M(_);G(w,()=>e(b)===s,P=>{var x=Ut(),T=k(x);$(x),E(()=>A(T,e(c))),d(P,x)},P=>{var x=q(),T=M(x);G(T,()=>e(b)==="prototype",j=>{var C=f(()=>p(e(b)));ye(j,{get value(){return e(C)},$$legacy:!0})},j=>{var C=f(()=>p(e(b)));F(j,{get value(){return e(C)},$$legacy:!0})},!0),d(P,x)}),d(g,_)}},$$legacy:!0}),R()}var Bt=h('<span class="label"> <!> </span>'),zt=h('<span class="property"> </span><span class="operator"> </span><!>',1),Dt=h("<span> </span>");function Ht(m,t){L(t,!1);const c=ce(),v=()=>se(s(),"$value",c),a=J(),o=J(),l=J(),n=J(),r=J();let s=O(t,"value");const i="$value";function p(u){return u===i?e(n):s()[u]}V(()=>K(s()),()=>{I(a,Object.getOwnPropertyNames(s()))}),V(()=>e(a),()=>{I(o,[i,...e(a)])}),V(()=>e(a),()=>{I(l,e(a).slice(0,5))}),V(()=>v(),()=>{I(n,v())}),V(()=>K(s()),()=>{I(r,typeof s().set=="function")}),z(),U(),D(m,{get keys(){return e(o)},$$slots:{summary:(u,S)=>{var g=Bt(),y=k(g),b=N(y);F(b,{get value(){return e(n)},$$legacy:!0});var _=N(b,!0);_.nodeValue=")",$(g),E(()=>A(y,e(r)?"writable(":"readable(")),d(u,g)},preview:(u,S)=>{const g=f(()=>S.root);var y=f(()=>e(l).length<e(a).length);le(u,{get list(){return e(l)},get hasMore(){return e(y)},prefix:"{",postfix:"}",get root(){return e(g)},$$slots:{item:(b,_)=>{const w=f(()=>_.item);var P=zt(),x=M(P),T=k(x);$(x);var j=N(x),C=k(j);C.nodeValue=": ",$(j);var Q=N(j);F(Q,{get value(){return s()[e(w)]},$$legacy:!0}),E(()=>A(T,e(w))),d(b,P)}},$$legacy:!0})},item_key:(u,S)=>{const g=f(()=>S.key);var y=Dt(),b=k(y);$(y),E(()=>{oe(y,e(g)===i?"internal":"property"),A(b,e(g))}),d(u,y)},item_value:(u,S)=>{const g=f(()=>S.key);var y=f(()=>p(e(g)));F(u,{get value(){return e(y)},$$legacy:!0})}},$$legacy:!0}),R()}var Qt=h('<span class="label"> </span>'),Wt=h("<span> </span>");function Xt(m,t){L(t,!1);const c=J(),v=J();let a=O(t,"value"),o=O(t,"nodeType");const l="Symbol(Symbol.toStringTag)",n=["buffer","byteLength","byteOffset","length",l];function r(s){return s===l?a()[Symbol.toStringTag]:a()[s]}V(()=>K(a()),()=>{I(c,[...Object.getOwnPropertyNames(a()),...n])}),V(()=>K(a()),()=>{I(v,a().slice(0,5))}),z(),U(),D(m,{get keys(){return e(c)},$$slots:{summary:(s,i)=>{var p=Qt(),u=k(p);$(p),E(()=>A(u,`${o()??""}(${a().length??""})`)),d(s,p)},preview:(s,i)=>{const p=f(()=>i.root);var u=f(()=>e(v).length<a().length);le(s,{get list(){return e(v)},get hasMore(){return e(u)},get label(){return`${o()??""}(${a().length??""}) `},prefix:"[",postfix:"]",get root(){return e(p)},$$slots:{item:(S,g)=>{const y=f(()=>g.item);F(S,{get value(){return e(y)},$$legacy:!0})}},$$legacy:!0})},item_key:(s,i)=>{const p=f(()=>i.key);var u=Wt();E(()=>oe(u,n.includes(e(p))?"internal":"property"));var S=k(u);$(u),E(()=>A(S,String(e(p)))),d(s,u)},item_value:(s,i)=>{const p=f(()=>i.key);var u=f(()=>r(e(p)));F(s,{get value(){return e(u)},$$legacy:!0})}},$$legacy:!0}),R()}var Yt=h('<span class="regex svelte-17k1wqt"> </span>'),Zt=h('<span class="regex svelte-17k1wqt"> </span>'),ea=h('<span class="internal"> </span>');function ta(m,t){L(t,!1);const c=J();let v=O(t,"value");const a=["lastIndex","dotAll","flags","global","hasIndices","ignoreCase","multiline","source","sticky","unicode"];V(()=>K(v()),()=>{I(c,v().toString())}),z(),U(),D(m,{keys:a,$$slots:{summary:(o,l)=>{var n=Yt(),r=k(n);$(n),E(()=>A(r,e(c))),d(o,n)},preview:(o,l)=>{var n=Zt(),r=k(n);$(n),E(()=>A(r,e(c))),d(o,n)},item_key:(o,l)=>{const n=f(()=>l.key);var r=ea(),s=k(r);$(r),E(()=>A(s,String(e(n)))),d(o,r)},item_value:(o,l)=>{const n=f(()=>l.key);F(o,{get value(){return v()[e(n)]},$$legacy:!0})}},$$legacy:!0}),R()}function F(m,t){L(t,!1);const c=ce(),v=()=>se(n,"$nodeType",c),a=J(),o=J();let l=O(t,"value");const n=pe(),{shouldTreatIterableAsObject:r}=H();function s(u,S){switch(u){case"Object":return typeof S.subscribe=="function"?[Ht]:[ye];case"Error":return[Mt];case"Array":return[dt];case"Map":return[St];case"Iterable":case"Set":return[ft,{nodeType:u}];case"Number":return[X,{nodeType:u}];case"String":return[jt];case"Boolean":return[X,{nodeType:u,value:S?"true":"false"}];case"Date":return[X,{nodeType:u,value:S.toISOString()}];case"Null":return[X,{nodeType:u,value:"null"}];case"Undefined":return[X,{nodeType:u,value:"undefined"}];case"Function":case"AsyncFunction":case"AsyncGeneratorFunction":case"GeneratorFunction":return[qt];case"Symbol":return[X,{nodeType:u,value:S.toString()}];case"BigInt":return[X,{nodeType:u,value:String(S)+"n"}];case"ArrayBuffer":return[X,{nodeType:u,value:`ArrayBuffer(${S.byteLength})`}];case"BigInt64Array":case"BigUint64Array":case"Float32Array":case"Float64Array":case"Int8Array":case"Int16Array":case"Int32Array":case"Uint8Array":case"Uint8ClampedArray":case"Uint16Array":case"Uint32Array":return[Xt,{nodeType:u}];case"RegExp":return[ta];default:return[ye,{summary:u}]}}V(()=>K(l()),()=>{ne(n,Jt(l(),r))}),V(()=>(e(a),e(o),v(),K(l())),()=>{(()=>{const u=s(v(),l());return I(a,u[0]),I(o,u[1]),u})()}),z(),U();var i=q(),p=M(i);Be(p,()=>e(a),(u,S)=>{S(u,qe({get value(){return l()}},()=>e(o),{$$legacy:!0}))}),d(m,i),R()}function aa({defaultExpandedPaths:m,defaultExpandedLevel:t}){const c=m.map(a=>a.split("."));function v(a){e:for(const o of c){if(a.length>o.length)continue;const l=Math.min(a.length,o.length);for(let n=0;n<l;n++)if(o[n]!=="*"&&o[n]!==String(a[n]))continue e;return!0}return!1}return function({keyPath:a,level:o}){return o<=t||v(a)}}var ra=h('<ul class="svelte-vf3272"><!></ul>');function na(m,t){L(t,!1);const c=J();let v=O(t,"value"),a=O(t,"shouldShowPreview",0,!0),o=O(t,"shouldTreatIterableAsObject",0,!1),l=O(t,"defaultExpandedPaths",8,()=>[]),n=O(t,"defaultExpandedLevel",0,0);const r=pe(!0);H({expanded:r,isParentExpanded:De(!0),root:!0,shouldExpandNode:p=>e(c)(p),level:0,keyPath:[],showPreview:a(),shouldTreatIterableAsObject:o()}),V(()=>(K(l()),K(n())),()=>{I(c,aa({defaultExpandedPaths:l(),defaultExpandedLevel:n()}))}),z(),U();var s=ra(),i=k(s);Oe(i,{key:"$",expanded:r,children:(p,u)=>{F(p,{get value(){return v()},$$legacy:!0})},$$slots:{default:!0},$$legacy:!0}),$(s),d(m,s),R()}function sa(m,t){I(t,Pe(JSON.stringify(ge.export())))}function oa(m,t){ge.import(JSON.parse(e(t)))}function la(){ge.clear(),localStorage.removeItem("notes")}var ua=h(`<div class="flex flex-row gap-2 p-2"><button class="bg-blue-300 rounded-sm px-4 py-1 text-white">Export graph</button> <button class="bg-blue-300 rounded-sm px-4 py-1 text-white">Import graph</button> <button class="bg-red-400 rounded-sm px-4 py-1 text-white">Delete everything</button></div> <div class="flex flex-row"><pre>
        <textarea style="width: 65ch;"></textarea>
    </pre> <!></div>`,1);function Sa(m,t){L(t,!0);let c=Ke(Pe(localStorage.getItem("notes")||"{}"));var v=ua(),a=M(v),o=k(a);o.__click=[sa,c];var l=N(N(o,!0));l.__click=[oa,c];var n=N(N(l,!0));n.__click=[la],$(a);var r=N(N(a,!0)),s=k(r),i=N(k(s));Re(i),je(),$(s);var p=N(N(s,!0)),u=Le(()=>JSON.parse(e(c)));na(p,{get value(){return e(u)},defaultExpandedLevel:5}),$(r),Ue(i,()=>e(c),S=>I(c,S)),d(m,v),R()}Fe(["click"]);export{Sa as component};