var T=Object.defineProperty;var O=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var V=(e,r,t)=>r in e?T(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_=(e,r)=>{for(var t in r||(r={}))P.call(r,t)&&V(e,t,r[t]);if(O)for(var t of O(r))R.call(r,t)&&V(e,t,r[t]);return e};import{n as w,a as M,j as B,t as U,c as J,e as q}from"./index-f8b88b4e.js";import"./index-d3daae02.js";import"./singletons-d04dcdd1.js";function D(e,r=[0,0,0],t=[0,0,0],f=[1,1,1]){const p=new Float32Array(e.position.length),d=e.position.length,N=e.position;for(let l=0;l<d;l+=3){const m=N[l+0]*f[0],y=N[l+1]*f[1],g=N[l+2]*f[2],o=m,n=Math.cos(t[0])*y-Math.sin(t[0])*g,s=Math.sin(t[0])*y+Math.cos(t[0])*g,u=Math.cos(t[1])*o-Math.sin(t[1])*s,a=n,i=Math.sin(t[1])*o+Math.cos(t[1])*s;p[l+0]=u+r[0],p[l+1]=a+r[1],p[l+2]=i+r[2]}return{position:p,uv:e.uv,normal:e.normal,index:e.index}}function G(e){if(Array.isArray(e))return e.map(l=>G(l)).flat();const r=[],t={position:e.position,normal:e.normal,uv:e.uv,index:e.index},f=e.offset,p=e.rotation,d=e.scale,N=e.offset.length;for(let l=0;l<N;l+=3)r.push(D(t,[f[l+0],f[l+1],f[l+2]],[p[l+0],p[l+1],p[l+2]],[d[l+0],d[l+1],d[l+2]]));return r}function X(e){const r=Array.isArray(e)?e:[e];console.log("TOOBJ",r);let t="",f=0,p=0,d=0;const N=[];function l(m){let y=0,g=0,o=0;const{index:n,uv:s,normal:u,position:a}=m;if(n.includes(NaN)&&console.warn("Export will fail, index includes NaN"),s.includes(NaN)&&console.warn("Export will fail, uv includes NaN"),u.includes(NaN)&&console.warn("Export will fail, normal includes NaN"),a.includes(NaN)&&console.warn("Export will fail, position includes NaN"),t+=`o plant
`,a!=null&&a.length)for(let i=0;i<a.length;i+=3){const[h,c,x]=a.slice(i,i+3);t+="v "+h+" "+c+" "+x+`
`}if(s!=null&&s.length)for(let i=0;i<s.length;i+=2){const[h,c]=s.slice(i,i+2);t+="vt "+h+" "+c+`
`}if(u!=null&&u.length)for(let i=0;i<u.length;i+=3){const[h,c,x]=u.slice(i,i+3);t+="vn "+h+" "+c+" "+x+`
`}if(n!=null&&n.length)for(let i=0;i<n.length;i+=3){for(let h=0;h<3;h++){const c=n[i+h]+1;N[h]=f+c+(u||s?"/"+(s?p+c:"")+(u?"/"+(d+c):""):"")}t+="f "+N.join(" ")+`
`}else for(let i=0,h=a.length;i<h;i+=3){for(let c=0;c<3;c++){const x=i+c+1;N[c]=f+x+(u||s?"/"+(s?p+x:"")+(u?"/"+(d+x):""):"")}t+="f "+N.join(" ")+`
`}f+=y,p+=o,d+=g}return r.forEach(m=>l(m)),t}const v=e=>{console.groupCollapsed(e),console.trace(),console.groupEnd()};function z(e,r=!1){const t=e.normal.includes(NaN);t&&v("Normals has NaN");const f=e.index.includes(NaN);f&&v("Index has NaN");const p=e.position.includes(NaN);p&&v("Position has NaN");const d=e.uv.includes(NaN);d&&v("UV has NaN");const N=e.position.length/3;e.position.length!==e.normal.length&&v("position and normal amount not eqal"),e.uv.length!==N*2&&v("uv amount not correct, should be "+N*2+" is "+e.uv.length),(t||f||p||d||r)&&console.log("Check",{p:e.position.length,pn:p,n:e.normal.length,nn:t,i:e.index.length,in:f,u:e.uv.length,un:d})}let F="",j,E=2;const $=e=>{let r=0;return w.seed=0,{_id:"",getId(){return this._id},n1d(t){return w.n1d(E++*t)},n1dn(t){return 1+w.n1d(E++*t)/2},getSetting(t){return e[t]},get settings(){return e},get seed(){return r},refresh(){E=2,e!=null&&e.useRandomSeed&&(r=Math.floor(Math.random()*1e5),w.seed=r)}}};var H=e=>{const r=JSON.stringify(e);return r!==F&&(F=r,j=$(e)),j.refresh(),j};function K({nodes:e},r){const t=H(r),f=new Map,p=new Map,d=o=>{var n;return(n=p.get(o))!=null?n:[]},N=o=>{var n;return(n=f.get(o))!=null?n:[]};let l=[];for(const{attributes:o,state:n}of e){const s=M.get(o.type);if(!s)return console.log("Existing node types: ",{nodeMap:M}),{errors:["Missing NodeType "+o.type]};l.push({attributes:o,state:n,exec:s,type:o.type,id:o.id,level:-1,results:[]})}let m;if(l.forEach(o=>{f.set(o.id,o),!m&&o.type==="output"&&(m=o,m.level=0),o.attributes.refs.forEach(n=>{p.has(n.id)?p.set(n.id,[...p.get(n.id),{n:o,in:n.in,out:n.out}]):p.set(n.id,[{n:o,in:n.in,out:n.out}])})}),!m)return{errors:["Missing output node"]};function y(o){if(o!=null&&o.buckets)return o.buckets;let n=[o],s=[o];for(;n.length;){const a=n.shift(),i=d(a.id);if(i!=null&&i.length)for(const{n:h}of i)h.level=a.level+1,s.includes(h)||s.push(h),n.push(h)}const u=[];for(const a of s)u[a.level]?u[a.level].push(a):u[a.level]=[a];return o.buckets=u,u}function g(o){var u,a,i,h;if("parameters"in o)return o.parameters;let n={};const s=M.get(o.type);for(const c of d(o.id)){const x=c.n;x.exec.outputs[0]==="plant"?n[c.in]=()=>c.n.results[0]:(u=x.exec)!=null&&u.computeValue?n[c.in]=(b=1)=>{const k=g(c.n);return x.exec.computeValue(k,t,b)}:n[c.in]=(b=1)=>{const k={},S=g(c.n);return Object.keys(S).forEach(C=>{k[C]=S[C](b)}),k}}for(const c of Object.keys(s.parameters))if((a=s.parameters[c])!=null&&a.internal)n[c]=o.state[c];else if(n[c]===void 0){if((i=s.parameters[c])!=null&&i.required&&n[c]===void 0)return{errors:["Missing Input ["+(((h=s.parameters[c])==null?void 0:h.label)||c)+"] in "+s.type]};n[c]=()=>o.state[c]}return o.parameters=n,n}return{nodes:l,outputNode:m,getNodeRef:d,getNode:N,getBucketsForNode:y,constructParametersForNode:g,ctx:t}}async function A(e,r){var y,g;const t=K(e,r);if(t.errors)return{errors:t.errors};const f=t.ctx,p=t.getBucketsForNode(t.outputNode);for(const o of p.reverse())for(const n of o){const s=M.get(n.type);if(s){let u=t.constructParametersForNode(n);if(u!=null&&u.errors)return{errors:u.errors};if(s!=null&&s.computeStem){f._id=n.id;const a=s.computeStem(u,f);a.stems.find(i=>i.skeleton.includes(NaN))&&(console.warn("Node "+s.type+" produced NaN in skeleton"),console.log({result:a})),n.results=Array.isArray(a)?a:[a]}if(s!=null&&s.computeGeometry){const a=s.computeGeometry(u,n.results[0],f);n.results[0]=_(_({},n.results[0]),a)}}else console.warn("Missing Type",n.type),console.log(M)}if(!((g=(y=t==null?void 0:t.outputNode)==null?void 0:y.parameters)!=null&&g.input))return{errors:["Missing input connection to output node"]};const d=t.outputNode.parameters.input();if(!d)return{errors:["DUnno?"]};const{stems:N,instances:l}=d;let m=B(...N.map(o=>U(o.skeleton,f.getSetting("stemResX"))));if(l){z(m);const o=l==null?void 0:l.map(n=>G(n)).flat();m=B(m,...o),z(m)}return{stems:N,geometry:J(m)}}async function I(e,r){var f;let t=await A(e,r);return(f=t==null?void 0:t.errors)!=null&&f.length?t:X(t.geometry)}q({exportToObject:I,executeNodeSystem:A});var ee={executeNodeSystem:A,exportToObject:I};export{ee as default,A as executeNodeSystem,I as exportToObject};