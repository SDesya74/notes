import{h as b,k as T,d as D,y as E,x as p,D as I,i as q,F as M,G as B,I as F,J as L,K as G,L as P,M as S}from"./disclose-version.BZrHNTVx.js";import{i as Y,m as j,y as H,N as J,O as K,q as U,F as $,P as z}from"./runtime.C5r0zYmH.js";import{a as Q,b as V}from"./index.svelte.BH7fYai9.js";function as(s,a,r,o){var t=s,l="",e;Y(()=>{l!==(l=a())&&(e&&(H(e),e=null),l!==""&&(e=j(()=>{if(b){T.data;for(var c=D(),n=c;c!==null&&(c.nodeType!==8||c.data!=="");)n=c,c=c.nextSibling;if(c===null)throw E(),p;I(T,n),t=q(c);return}var h=l+"",d=M(h);I(d.firstChild,d.lastChild),t.before(d)})))})}function is(s){if(b){var a=!1,r=()=>{if(!a){if(a=!0,s.hasAttribute("value")){var o=s.value;y(s,"value",null),s.value=o}if(s.hasAttribute("checked")){var t=s.checked;y(s,"checked",null),s.checked=t}}};s.__on_r=r,J(r),Q()}}function y(s,a,r){r=r==null?null:r+"";var o=s.__attributes??(s.__attributes={});b&&(o[a]=s.getAttribute(a),a==="src"||a==="href"||a==="srcset")||o[a]!==(o[a]=r)&&(a==="loading"&&(s[K]=r),r===null?s.removeAttribute(a):s.setAttribute(a,r))}function W(s,a,r){if(a in s){var o=s[a],t=typeof o=="boolean"&&r===""?!0:r;(typeof o!="object"||o!==t)&&(s[a]=t)}else y(s,a,r)}function X(s,a,r,o,t){var l=t.length!==0,e=a||{},c=s.tagName==="OPTION";for(var n in a)n in r||(r[n]=null);l&&!r.class&&(r.class="");var h=k.get(s.nodeName);h||k.set(s.nodeName,h=m(s));var d=s.__attributes??(s.__attributes={}),A=[];for(const i in r){let f=r[i];if(c&&i==="value"&&f==null){s.value=s.__value="",e[i]=f;continue}var N=e[i];if(f!==N){e[i]=f;var w=i[0]+i[1];if(w!=="$$")if(w==="on"){const v={},g="$$"+i;let _=i.slice(2);var O=S.includes(_);if(F(_)&&(_=_.slice(0,-7),v.capture=!0),!O&&N){if(f!=null)continue;s.removeEventListener(_,e[g],v),e[g]=null}if(f!=null)if(O)s[`__${_}`]=f,G([_]);else{let R=function(C){e[i].call(this,C)};a?e[g]=L(_,s,R,v):A.push([i,f,()=>e[g]=L(_,s,R,v)])}}else if(f==null)d[i]=null,s.removeAttribute(i);else if(i==="style")s.style.cssText=f+"";else if(i==="autofocus")V(s,!!f);else if(i==="__value"||i==="value")s.value=s[i]=s.__value=f;else{var u=i;o&&(u=u.toLowerCase(),u=P[u]||u),h.includes(u)?b&&(u==="src"||u==="href"||u==="srcset")||(s[u]=f):typeof f!="function"&&(l&&u==="class"&&(f&&(f+=" "),f+=t),y(s,u,f))}}}return a||U(()=>{if(s.isConnected)for(const[i,f,v]of A)e[i]===f&&v()}),e}function ts(s,a,r,o){if(s.tagName.includes("-")){for(var t in a)t in r||(r[t]=null);for(t in r)W(s,t,r[t]);return r}return X(s,a,r,s.namespaceURI!==B,o)}var Z=["width","height"],k=new Map;function m(s){for(var a=[],r,o=$(s);o.constructor.name!=="Element";){r=z(o);for(var t in r)r[t].set&&!Z.includes(t)&&a.push(t);o=$(o)}return a}export{ts as a,as as h,is as r,y as s};
