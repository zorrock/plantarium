import{S as v,i as E,s as y,a0 as x,l as h,g as m,a1 as C,E as l,d as c,e as k,t as u,c as b,a as g,h as d,J as p}from"../chunks/index-1b7be069.js";import{g as S}from"../chunks/index-0b428d20.js";import"../chunks/index-027e0f56.js";function w(a){return{c:l,l,m:l,p:l,d:l}}function J(a){let t,e,n,o=JSON.stringify(a[1],null,2)+"",f,_;return{c(){t=k("pre"),e=k("code"),n=u(`
  `),f=u(o),_=u(`
  `)},l(r){t=b(r,"PRE",{});var i=g(t);e=b(i,"CODE",{});var s=g(e);n=d(s,`
  `),f=d(s,o),_=d(s,`
  `),s.forEach(c),i.forEach(c)},m(r,i){m(r,t,i),p(t,e),p(e,n),p(e,f),p(e,_)},p:l,d(r){r&&c(t)}}}function L(a){let t;return{c(){t=u("Loading")},l(e){t=d(e,"Loading")},m(e,n){m(e,t,n)},p:l,d(e){e&&c(t)}}}function N(a){let t,e={ctx:a,current:null,token:null,hasCatch:!1,pending:L,then:J,catch:w,value:1};return x(a[0],e),{c(){t=h(),e.block.c()},l(n){t=h(),e.block.l(n)},m(n,o){m(n,t,o),e.block.m(n,e.anchor=o),e.mount=()=>t.parentNode,e.anchor=t},p(n,[o]){a=n,C(e,a,o)},i:l,o:l,d(n){n&&c(t),e.block.d(n),e.token=null,e=null}}}function O(a){return[S("api/user/profile")]}class D extends v{constructor(t){super(),E(this,t,O,N,y,{})}}export{D as default};