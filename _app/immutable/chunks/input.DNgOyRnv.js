import{e as ee,h as N,k as H,l as ae,y as re,z as B,j as w,m,o as ne,G as C,I as M,J as D,q as se,K as le,L as fe,M as U}from"./template.CptAR0ur.js";import{K as te,k as ie,M as P,J as W,N as ue,X as _e,q as ve,w as J,m as X,E as oe,s as Z,Y as ce,Z as de,_ as he,i as Ee,f as Ae,S as Te,r as ye}from"./runtime.ghMM8PmF.js";import{b as Ne}from"./index.svelte.DkEFcTaf.js";let L=null;function Le(e){L=e}function Re(e,a){return a}function ge(e,a,r,n){for(var _=[],v=a.length,i=0;i<v;i++)ce(a[i].e,_,!0);var E=v>0&&_.length===0&&r!==null;if(E){var A=r.parentNode;se(A),A.append(r),n.clear(),p(e,a[0].prev,a[v-1].next)}de(_,()=>{for(var h=0;h<v;h++){var o=a[h];E||(n.delete(o.k),p(e,o.prev,o.next)),he(o.e,!E)}})}function ke(e,a,r,n,_,v=null){var i=e,E={flags:a,items:new Map,first:null},A=(a&U)!==0;if(A){var h=e;i=N?H(h.firstChild):h.appendChild(ee())}N&&ae();var o=null;te(()=>{var l=r(),c=ie(l)?l:l==null?[]:Array.from(l),f=c.length,u=E.flags;u&D&&!Ee(c)&&!(Ae in c)&&!(Te in c)&&(u^=D,u&fe&&!(u&C)&&(u^=C));let d=!1;if(N){var y=i.data===re;y!==(f===0)&&(i=B(),H(i),w(!1),d=!0)}if(N){for(var g=null,T,s=0;s<f;s++){if(m.nodeType===8&&m.data===ne){i=m,d=!0,w(!1);break}var t=c[s],b=n(t,s);T=$(m,E,g,null,t,b,s,_,u),E.items.set(b,T),g=T}f>0&&H(B())}N||Se(c,E,i,_,u,n),v!==null&&(f===0?o?P(o):o=W(()=>v(i)):o!==null&&ue(o,()=>{o=null})),d&&w(!0)}),N&&(i=m)}function Se(e,a,r,n,_,v){var Y,q,K,V;var i=(_&le)!==0,E=(_&(C|M))!==0,A=e.length,h=a.items,o=a.first,l=o,c=new Set,f=null,u=new Set,d=[],y=[],g,T,s,t;if(i)for(t=0;t<A;t+=1)g=e[t],T=v(g,t),s=h.get(T),s!==void 0&&((Y=s.a)==null||Y.measure(),u.add(s));for(t=0;t<A;t+=1){if(g=e[t],T=v(g,t),s=h.get(T),s===void 0){var b=l?l.e.nodes.start:r;f=$(b,a,f,f===null?a.first:f.next,g,T,t,n,_),h.set(T,f),d=[],y=[],l=f.next;continue}if(E&&pe(s,g,t,_),s.e.f&_e&&(P(s.e),i&&((q=s.a)==null||q.unfix(),u.delete(s))),s!==l){if(c.has(s)){if(d.length<y.length){var x=y[0],S;f=x.prev;var O=d[0],R=d[d.length-1];for(S=0;S<d.length;S+=1)F(d[S],x,r);for(S=0;S<y.length;S+=1)c.delete(y[S]);p(a,O.prev,R.next),p(a,f,O),p(a,R,x),l=x,f=R,t-=1,d=[],y=[]}else c.delete(s),F(s,l,r),p(a,s.prev,s.next),p(a,s,f===null?a.first:f.next),p(a,f,s),f=s;continue}for(d=[],y=[];l!==null&&l.k!==T;)c.add(l),y.push(l),l=l.next;if(l===null)continue;s=l}d.push(s),f=s,l=s.next}const I=Array.from(c);for(;l!==null;)I.push(l),l=l.next;var k=I.length;if(k>0){var j=_&U&&A===0?r:null;if(i){for(t=0;t<k;t+=1)(K=I[t].a)==null||K.measure();for(t=0;t<k;t+=1)(V=I[t].a)==null||V.fix()}ge(a,I,j,h)}i&&ve(()=>{var z;for(s of u)(z=s.a)==null||z.apply()}),J.first=a.first&&a.first.e,J.last=f&&f.e}function pe(e,a,r,n){n&C&&X(e.v,a),n&M?X(e.i,r):e.i=r}function $(e,a,r,n,_,v,i,E,A){var h=L;try{var o=(A&C)!==0,l=(A&D)===0,c=o?l?oe(_):Z(_):_,f=A&M?Z(i):i,u={i:f,v:c,k:v,a:null,e:null,prev:r,next:n};return L=u,u.e=W(()=>E(e,c,f),N),u.e.prev=r&&r.e,u.e.next=n&&n.e,r===null?a.first=u:(r.next=u,r.e.next=u.e),n!==null&&(n.prev=u,n.e.prev=u.e),u}finally{L=h}}function F(e,a,r){for(var n=e.next?e.next.e.nodes.start:r,_=a?a.e.nodes.start:r,v=e.e.nodes.start;v!==n;){var i=v.nextSibling;_.before(v),v=i}}function p(e,a,r){a===null?e.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}function He(e,a){var r=e.__className,n=Ie(a);N&&e.className===n?e.__className=n:(r!==n||N&&e.className!==n)&&(a==null?e.removeAttribute("class"):e.className=n,e.__className=n)}function Ie(e){return e??""}function we(e,a,r){r?e.classList.add(a):e.classList.remove(a)}function me(e,a,r,n=r){e.addEventListener(a,r);const _=e.__on_r;_?e.__on_r=()=>{_(),n()}:e.__on_r=n,Ne()}function De(e,a,r){me(e,"input",()=>{r(G(e)?Q(e.value):e.value)}),ye(()=>{var n=a();if(N&&e.defaultValue!==e.value){r(e.value);return}G(e)&&n===Q(e.value)||e.type==="date"&&!n&&!e.value||(e.value=n??"")})}function G(e){var a=e.type;return a==="number"||a==="range"}function Q(e){return e===""?null:+e}export{He as a,De as b,L as c,ke as e,Re as i,Le as s,we as t};
