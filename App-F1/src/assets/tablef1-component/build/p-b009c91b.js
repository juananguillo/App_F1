let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),r=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),i=new WeakMap,a=e=>"sc-"+e.o,u={},f=e=>"object"==(e=typeof e)||"function"===e,$=(e,t,...n)=>{let l=null,s=!1,o=!1,c=[];const r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!f(l))&&(l+=""),s&&o?c[c.length-1].i+=l:c.push(s?y(null,l):l),o=s)};if(r(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const i=y(e,null);return i.u=t,c.length>0&&(i.$=c),i},y=(e,t)=>({t:0,p:e,i:t,m:null,$:null,u:null}),p={},d=(e,t,n,l,s,o)=>{if(n!==l){let c=U(e,t);if(t.toLowerCase(),"class"===t){const t=e.classList,s=h(n),o=h(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else{const r=f(l);if((c||r&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!c||4&o||s)&&!r&&e.setAttribute(t,l=!0===l?"":l)}}},m=/\s/,h=e=>e?e.split(m):[],w=(e,t,n,l)=>{const s=11===t.m.nodeType&&t.m.host?t.m.host:t.m,o=e&&e.u||u,c=t.u||u;for(l in c)d(s,l,o[l],c[l],n,t.t)},b=(t,n,l)=>{let o,c,r=n.$[l],i=0;if(o=r.m=s.createElement(r.p),w(null,r,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),r.$)for(i=0;i<r.$.length;++i)c=b(t,r,i),c&&o.appendChild(c);return o},S=(n,l)=>{const s=n.h,o=n.S||y(null,null),c=(e=>e&&e.p===p)(l)?l:$(null,null,l);t=s.tagName,c.p=null,c.t|=4,n.S=c,c.m=o.m=s.shadowRoot||s,e=s["s-sc"],((e,n)=>{const l=n.m=e.m,s=n.$;"slot"===n.p||w(e,n,!1),null!==s&&((e,n,l,s,o,c)=>{let r,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=c;++o)s[o]&&(r=b(null,l,o),r&&(s[o].m=r,i.insertBefore(r,null)))})(l,0,n,s,0,s.length-1)})(o,c)},g=(e,t)=>{t&&!e.g&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.g=t)))},M=(e,t)=>{if(!(4&e.t))return g(e,e.M),G((()=>j(e,t)));e.t|=512},j=(e,t)=>{const n=e.j;return x(void 0,(()=>k(e,n,t)))},k=async(e,t,n)=>{const l=e.h,o=l["s-rc"];n&&(e=>{const t=e.k,n=e.h,l=t.t,o=((e,t)=>{let n=a(t),l=H.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=i.get(e=e.head||e);o||i.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);v(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>C(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},v=(e,t)=>{try{t=t.render(),e.t|=2,S(e,t)}catch(t){W(t,e.h)}return null},C=e=>{const t=e.h,n=e.M;64&e.t||(e.t|=64,E(t),e.v(t),n||P()),e.g&&(e.g(),e.g=void 0),512&e.t&&D((()=>M(e,!1))),e.t&=-517},P=()=>{E(s.documentElement),D((()=>(e=>{const t=o.ce("appload",{detail:{namespace:"table-component-stencil"}});return e.dispatchEvent(t),t})(l)))},x=(e,t)=>e&&e.then?e.then(t):t(),E=e=>e.classList.add("hydrated"),O=(e,t={})=>{const n=[],c=t.exclude||[],i=l.customElements,u=s.head,f=u.querySelector("meta[charset]"),$=s.createElement("style"),y=[];let p,d=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>e[1].map((t=>{const l={t:t[0],o:t[1],C:t[2],P:t[3]},s=l.o,u=class extends HTMLElement{constructor(e){super(e),R(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){p&&(clearTimeout(p),p=null),d?y.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=A(e),n=t.k,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){g(t,t.M=n);break}}(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=F(n)).then){const e=()=>{};s=await s,e()}const e=()=>{};try{new s(t)}catch(e){W(e)}e()}if(s.style){let e=s.style;const t=a(n);if(!H.has(t)){const l=()=>{};((e,t,n)=>{let l=H.get(e);r&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,H.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.M,c=()=>M(t,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>{}))}componentOnReady(){return A(this).O}};l.T=e[0],c.includes(s)||i.get(s)||(n.push(s),i.define(s,u))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),u.insertBefore($,f?f.nextSibling:u.firstChild),d=!1,y.length?y.map((e=>e.connectedCallback())):o.jmp((()=>p=setTimeout(P,30)))},T=new WeakMap,A=e=>T.get(e),L=(e,t)=>T.set(t.j=e,t),R=(e,t)=>{const n={t:0,h:e,k:t,A:new Map};return n.O=new Promise((e=>n.v=e)),e["s-p"]=[],e["s-rc"]=[],T.set(e,n)},U=(e,t)=>t in e,W=(e,t)=>(0,console.error)(e,t),q=new Map,F=e=>{const t=e.o.replace(/-/g,"_"),n=e.T,l=q.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(q.set(n,e),e[t])),W)},H=new Map,N=[],V=[],_=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?D(B):o.raf(B))},z=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){W(e)}e.length=0},B=()=>{z(N),z(V),(n=N.length>0)&&o.raf(B)},D=e=>c().then(e),G=_(V,!0);export{O as b,$ as h,c as p,L as r}