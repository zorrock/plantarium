function j(){}const ft=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function K(){return Object.create(null)}function k(t){t.forEach(X)}function Y(t){return typeof t=="function"}function It(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function dt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return j;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Wt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function Gt(t,e,n,s){if(t){const r=Z(t,e,n,s);return t[0](r)}}function Z(t,e,n,s){return t[1]&&s?_t(n.ctx.slice(),t[1](s(e))):n.ctx}function Jt(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],i=Math.max(e.dirty.length,r.length);for(let l=0;l<i;l+=1)o[l]=e.dirty[l]|r[l];return o}return e.dirty|r}return e.dirty}function Kt(t,e,n,s,r,o){if(r){const i=Z(e,n,s,o);t.p(i,r)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}const tt=typeof window!="undefined";let mt=tt?()=>window.performance.now():()=>Date.now(),G=tt?t=>requestAnimationFrame(t):j;const E=new Set;function et(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&G(et)}function yt(t){let e;return E.size===0&&G(et),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let z=!1;function pt(){z=!0}function gt(){z=!1}function wt(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const d=e[a];d.claim_order!==void 0&&c.push(d)}e=c}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,d=(r>0&&e[n[r]].claim_order<=a?r+1:wt(1,r,u=>e[n[u]].claim_order,a))-1;s[c]=n[d]+1;const f=d+1;n[f]=c,r=Math.max(f,r)}const o=[],i=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=s[c-1]){for(o.push(e[c-1]);l>=c;l--)i.push(e[l]);l--}for(;l>=0;l--)i.push(e[l]);o.reverse(),i.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<i.length;c++){for(;a<o.length&&i[c].claim_order>=o[a].claim_order;)a++;const d=a<o.length?o[a]:null;t.insertBefore(i[c],d)}}function $t(t,e){t.appendChild(e)}function nt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=it("style");return vt(nt(t),e),e.sheet}function vt(t,e){$t(t.head||t,e)}function Et(t,e){if(z){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ut(t,e,n){z&&!n?Et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function kt(t){t.parentNode.removeChild(t)}function Vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function it(t){return document.createElement(t)}function St(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function Xt(){return J(" ")}function Yt(){return J("")}function Zt(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function At(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function te(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:At(t,e,n)}function ee(t){return t===""?null:+t}function Ct(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function rt(t,e,n,s,r=!1){Nt(t);const o=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const l=t[i];if(e(l)){const c=n(l);return c===void 0?t.splice(i,1):t[i]=c,r||(t.claim_info.last_index=i),l}}for(let i=t.claim_info.last_index-1;i>=0;i--){const l=t[i];if(e(l)){const c=n(l);return c===void 0?t.splice(i,1):t[i]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,l}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function st(t,e,n,s){return rt(t,r=>r.nodeName===e,r=>{const o=[];for(let i=0;i<r.attributes.length;i++){const l=r.attributes[i];n[l.name]||o.push(l.name)}o.forEach(i=>r.removeAttribute(i))},()=>s(e))}function ne(t,e,n){return st(t,e,n,it)}function ie(t,e,n){return st(t,e,n,St)}function jt(t,e){return rt(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>J(e),!0)}function re(t){return jt(t," ")}function se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ce(t,e){t.value=e==null?"":e}function oe(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function le(t,e,n){t.classList[n?"add":"remove"](e)}function ct(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,s,e),r}function ae(t,e=document.body){return Array.from(e.querySelectorAll(t))}const O=new Map;let L=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Dt(t,e){const n={stylesheet:xt(e),rules:{}};return O.set(t,n),n}function Q(t,e,n,s,r,o,i,l=0){const c=16.666/s;let a=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*o(y);a+=y*100+`%{${i(g,1-g)}}
`}const d=a+`100% {${i(n,1-n)}}
}`,f=`__svelte_${Mt(d)}_${l}`,u=nt(t),{stylesheet:h,rules:_}=O.get(u)||Dt(u,t);_[f]||(_[f]=!0,h.insertRule(`@keyframes ${f} ${d}`,h.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${s}ms linear ${r}ms 1 both`,L+=1,f}function Pt(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-s.length;r&&(t.style.animation=s.join(", "),L-=r,L||Rt())}function Rt(){G(()=>{L||(O.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),O.clear())})}let N;function C(t){N=t}function B(){if(!N)throw new Error("Function called outside component initialization");return N}function ue(t){B().$$.on_mount.push(t)}function fe(t){B().$$.after_update.push(t)}function _e(){const t=B();return(e,n,{cancelable:s=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=ct(e,n,{cancelable:s});return r.slice().forEach(i=>{i.call(t,o)}),!o.defaultPrevented}return!0}}function de(t,e){return B().$$.context.set(t,e),e}const A=[],U=[],R=[],V=[],ot=Promise.resolve();let W=!1;function lt(){W||(W=!0,ot.then(at))}function he(){return lt(),ot}function T(t){R.push(t)}const H=new Set;let P=0;function at(){const t=N;do{for(;P<A.length;){const e=A[P];P++,C(e),qt(e.$$)}for(C(null),A.length=0,P=0;U.length;)U.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];H.has(n)||(H.add(n),n())}R.length=0}while(A.length);for(;V.length;)V.pop()();W=!1,H.clear(),C(t)}function qt(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let S;function Ot(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function I(t,e,n){t.dispatchEvent(ct(`${e?"intro":"outro"}${n}`))}const q=new Set;let $;function me(){$={r:0,c:[],p:$}}function ye(){$.r||k($.c),$=$.p}function ut(t,e){t&&t.i&&(q.delete(t),t.i(e))}function Lt(t,e,n,s){if(t&&t.o){if(q.has(t))return;q.add(t),$.c.push(()=>{q.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}const Tt={duration:0};function pe(t,e,n,s){let r=e(t,n),o=s?0:1,i=null,l=null,c=null;function a(){c&&Pt(t,c)}function d(u,h){const _=u.b-o;return h*=Math.abs(_),{a:o,b:u.b,d:_,duration:h,start:u.start,end:u.start+h,group:u.group}}function f(u){const{delay:h=0,duration:_=300,easing:p=ft,tick:y=j,css:g}=r||Tt,x={start:mt()+h,b:u};u||(x.group=$,$.r+=1),i||l?l=x:(g&&(a(),c=Q(t,o,u,_,h,p,g)),u&&y(0,1),i=d(x,_),T(()=>I(t,u,"start")),yt(v=>{if(l&&v>l.start&&(i=d(l,_),l=null,I(t,i.b,"start"),g&&(a(),c=Q(t,o,i.b,i.duration,0,p,r.css))),i){if(v>=i.end)y(o=i.b,1-o),I(t,i.b,"end"),l||(i.b?a():--i.group.r||k(i.group.c)),i=null;else if(v>=i.start){const M=v-i.start;o=i.a+i.d*p(M/i.duration),y(o,1-o)}}return!!(i||l)}))}return{run(u){Y(r)?Ot().then(()=>{r=r(),f(u)}):f(u)},end(){a(),i=l=null}}}function ge(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function we(t,e,n,s,r,o,i,l,c,a,d,f){let u=t.length,h=o.length,_=u;const p={};for(;_--;)p[t[_].key]=_;const y=[],g=new Map,x=new Map;for(_=h;_--;){const m=f(r,o,_),w=n(m);let b=i.get(w);b?s&&b.p(m,e):(b=a(w,m),b.c()),g.set(w,y[_]=b),w in p&&x.set(w,Math.abs(_-p[w]))}const v=new Set,M=new Set;function F(m){ut(m,1),m.m(l,d),i.set(m.key,m),d=m.first,h--}for(;u&&h;){const m=y[h-1],w=t[u-1],b=m.key,D=w.key;m===w?(d=m.first,u--,h--):g.has(D)?!i.has(b)||v.has(b)?F(m):M.has(D)?u--:x.get(b)>x.get(D)?(M.add(b),F(m)):(v.add(D),u--):(c(w,i),u--)}for(;u--;){const m=t[u];g.has(m.key)||c(m,i)}for(;h;)F(y[h-1]);return y}function be(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const i=t[o],l=e[o];if(l){for(const c in i)c in l||(s[c]=1);for(const c in l)r[c]||(n[c]=l[c],r[c]=1);t[o]=l}else for(const c in i)r[c]=1}for(const i in s)i in n||(n[i]=void 0);return n}function $e(t){return typeof t=="object"&&t!==null?t:{}}function xe(t){t&&t.c()}function ve(t,e){t&&t.l(e)}function zt(t,e,n,s){const{fragment:r,on_mount:o,on_destroy:i,after_update:l}=t.$$;r&&r.m(e,n),s||T(()=>{const c=o.map(X).filter(Y);i?i.push(...c):k(c),t.$$.on_mount=[]}),l.forEach(T)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(t,e){t.$$.dirty[0]===-1&&(A.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ee(t,e,n,s,r,o,i,l=[-1]){const c=N;C(t);const a=t.$$={fragment:null,ctx:null,props:o,update:j,not_equal:r,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:K(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};i&&i(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(f,u,...h)=>{const _=h.length?h[0]:u;return a.ctx&&r(a.ctx[f],a.ctx[f]=_)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](_),d&&Ft(t,f)),u}):[],a.update(),d=!0,k(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){pt();const f=Ct(e.target);a.fragment&&a.fragment.l(f),f.forEach(kt)}else a.fragment&&a.fragment.c();e.intro&&ut(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),gt(),at()}C(c)}class Ht{$destroy(){Bt(this,1),this.$destroy=j}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}class ke extends Ht{constructor(e){if(!e||!e.target&&!e.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}export{k as $,$e as A,Bt as B,_t as C,he as D,j as E,Gt as F,Kt as G,Qt as H,Jt as I,Et as J,U as K,ft as L,le as M,Zt as N,_e as O,te as P,Vt as Q,T as R,Ht as S,pe as T,Wt as U,ke as V,we as W,ge as X,at as Y,St as Z,ie as _,Ct as a,ce as a0,ee as a1,ae as a2,At as b,ne as c,kt as d,it as e,oe as f,Ut as g,jt as h,Ee as i,se as j,Xt as k,Yt as l,re as m,me as n,Lt as o,ye as p,ut as q,de as r,It as s,J as t,fe as u,ue as v,xe as w,ve as x,zt as y,be as z};