import{h as L,n as E,i as I,b as N,d as q,A as B,D as C}from"./template.CptAR0ur.js";import{q as M,g as w,L as R,b as j}from"./runtime.ghMM8PmF.js";import{a as G}from"./index.svelte.DkEFcTaf.js";function $(s,t,i){i=i==null?null:i+"";var f=s.__attributes??(s.__attributes={});L&&(f[t]=s.getAttribute(t),t==="src"||t==="href"||t==="srcset")||f[t]!==(f[t]=i)&&(t==="loading"&&(s[R]=i),i===null?s.removeAttribute(t):s.setAttribute(t,i))}function P(s,t,i){if(t in s){var f=s[t],o=typeof f=="boolean"&&i===""?!0:i;(typeof f!="object"||f!==o)&&(s[t]=o)}else $(s,t,i)}function S(s,t,i,f,o){var e=o.length!==0,c=t||{},O=s.tagName==="OPTION";for(var h in t)h in i||(i[h]=null);e&&!i.class&&(i.class="");var v=y.get(s.nodeName);v||y.set(s.nodeName,v=Y(s));var T=s.__attributes??(s.__attributes={}),g=[];for(const r in i){let a=i[r];if(O&&r==="value"&&a==null){s.value=s.__value="",c[r]=a;continue}var d=c[r];if(a!==d){c[r]=a;var p=r[0]+r[1];if(p!=="$$")if(p==="on"){const n={},l="$$"+r;let _=r.slice(2);var A=C.includes(_);if(I(_)&&(_=_.slice(0,-7),n.capture=!0),!A&&d){if(a!=null)continue;s.removeEventListener(_,c[l],n),c[l]=null}if(a!=null)if(A)s[`__${_}`]=a,q([_]);else{let b=function(D){c[r].call(this,D)};t?c[l]=N(_,s,b,n):g.push([r,a,()=>c[l]=N(_,s,b,n)])}}else if(a==null)T[r]=null,s.removeAttribute(r);else if(r==="style")s.style.cssText=a+"";else if(r==="autofocus")G(s,!!a);else if(r==="__value"||r==="value")s.value=s[r]=s.__value=a;else{var u=r;f&&(u=u.toLowerCase(),u=B[u]||u),v.includes(u)?L&&(u==="src"||u==="href"||u==="srcset")||(s[u]=a):typeof a!="function"&&(e&&u==="class"&&(a&&(a+=" "),a+=o),$(s,u,a))}}}return t||M(()=>{if(s.isConnected)for(const[r,a,n]of g)c[r]===a&&n()}),c}function J(s,t,i,f){if(s.tagName.includes("-")){for(var o in t)o in i||(i[o]=null);for(o in i)P(s,o,i[o]);return i}return S(s,t,i,s.namespaceURI!==E,f)}var U=["width","height"],y=new Map;function Y(s){for(var t=[],i,f=w(s);f.constructor.name!=="Element";){i=j(f);for(var o in i)i[o].set&&!U.includes(o)&&t.push(o);f=w(f)}return t}export{J as a,$ as s};