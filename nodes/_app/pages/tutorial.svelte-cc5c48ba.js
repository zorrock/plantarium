var O=Object.defineProperty,W=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var T=(i,s,t)=>s in i?O(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t,y=(i,s)=>{for(var t in s||(s={}))M.call(s,t)&&T(i,t,s[t]);if(S)for(var t of S(s))P.call(s,t)&&T(i,t,s[t]);return i},w=(i,s)=>W(i,L(s));import{S as E,i as Y,s as F,w as b,k as C,e as J,x as v,m as I,c as U,a as V,d as m,b as $,y as _,g,q as c,o as p,B as k,U as j,v as G,E as q,n as z,p as B,K}from"../chunks/index-32017bd5.js";import{a as Q,b as X,c as Z,e as ee,f as r,H as te,N as se,t as N,B as A,g as oe}from"../chunks/navigation-cd63a2d7.js";import{r as ne}from"../chunks/singletons-45f0a0b8.js";const ie={title:"Beans",type:"coffee_beans",outputs:["coffee_beans"],parameters:{type:{type:"select",values:["arabica","bourbon","catimor","catuai","caturra"],internal:!0,value:"arabica"}},compute({type:i}){return{type:"coffee_beans",beanType:i}}},ae={title:"Grinder",type:"coffee_grinder",outputs:["coffee_powder"],parameters:{beans:{type:"coffee_beans",external:!0},grade:{type:"number",min:.2,max:5,step:.05}},compute({beans:i,grade:s}){if(i)return{type:"coffee_powder",beanType:i.beanType,grade:s}}},re={title:"Coffee Machine",type:"coffee_machine",outputs:["fluid"],parameters:{powder:{type:"coffee_powder",external:!0},water:{type:"fluid",external:!0}},compute({powder:i,water:s}){if(i&&s)return s.fluidType!=="water"?w(y({},i),{amount:50,fluidType:"nasty",type:"fluid"}):w(y({},i),{amount:50,fluidType:"coffee",type:"fluid"})}},le={title:"Mix",type:"mix",outputs:["fluid"],parameters:{fluidA:{type:"fluid",external:!0},fluidB:{type:"fluid",external:!0}},compute({fluidA:i,fluidB:s}){if(!i||!s)return i||s;const t=[];return i.fluidType==="mix"?t.push(...i.fluids):t.push(i),s.fluidType==="mix"?t.push(...s.fluids):t.push(s),{type:"fluid",fluidType:"mix",fluids:t}}};class fe extends Q{constructor(s,t){super(s,t),this.attributes.type="output",this.states={input:new X(this,"input",{type:"*",external:!0,label:!1})},this.outputs=[]}compute({input:s}){return s}}class ue extends Z{constructor(s){super(s);const t=document.createElement("p");t.style.margin="0px",t.style.fontSize="9px",t.style.padding="4px",t.style.fontWeight="bold",s.on("computedData",e=>{console.log({data:e});let n="Hmm, I received nothing?";if((e==null?void 0:e.type)==="fluid"){if((e==null?void 0:e.fluidType)==="mix"){let o=e.fluids.map(a=>a.fluidType).sort();o.length===1&&(e=e.fluids[0]),o.length===2?o[0]==="milk"&&o[1]==="water"?n="This reminds me of the time i was studying :)":o[0]==="coffee"&&o[1]==="milk"?n="Yess, latte macchiato, the pinnacle of coffee making":o[0]===o[1]?o[0]==="coffee"?n="Whaaaa, so strong, i can see time":n=`Ohh, double ${o[0]}, very strong!`:o[0]==="coffee"&&o[1]==="water"&&(n="And that is what we call a americano"):(o.splice(-1,0,"and"),n=`Okay, ${o.join(", ").replace(", and, "," and ")}, thats a bit much, dont you think?`)}(e==null?void 0:e.fluidType)==="water"&&(n="Hydrating! but pretty tasteless... A coffee would be nice"),(e==null?void 0:e.fluidType)==="milk"&&(n="Ahh, a cold glass of milk"),(e==null?void 0:e.fluidType)==="nasty"&&(n="Ewww, wtf is that?"),(e==null?void 0:e.fluidType)==="coffee"&&(n=`Nice, a${e.grade>4?" very strong":"n"} espresso!`,(e==null?void 0:e.beanType)!=="arabica"&&(n+=`<br>oh, ${e.beanType}, exotic bean choice, i like it`))}(e==null?void 0:e.type)==="coffee_beans"&&(n="Crunch, Crunch, Crunch"),(e==null?void 0:e.type)==="coffee_powder"&&(n="Hmmm, "+e.beanType+" but i aint eating that."),t.innerHTML=n}),this.wrapper.appendChild(t)}}const ce={title:"Person",type:"output",meta:{description:"Wants coffee"},node:fe,view:ue},he={title:"Milk",type:"milk",outputs:["fluid"],compute(){return{type:"fluid",fluidType:"milk",amount:50}}},pe={title:"Water",type:"water_tap",outputs:["fluid"],compute(){return{type:"fluid",fluidType:"water"}}};var me=[pe,ce,he,le,ie,ae,re];class de{constructor(){this.state="waiting",this.isRunning=!1,this.stateStore=ne(this.state,s=>{this.setState=async t=>{if(console.log("SetState",t),!t)return;s(t),this.state=t;let e=await this.start();this.isRunning=!1,console.log({newState:e}),typeof e=="string"&&e&&e!==this.state&&this.setState(e)},window.setState=this.setState})}async start(){var s;if(!this.isRunning){if(this.isRunning=!0,this.state==="waiting"&&(await ee(`This guide will help you understand how Node based Interfaces work in general, and how the Plantarium Nodesystem works. 

Do you want to start the tutorial, or first play around a bit?`,{values:["Let's get started","Play Around"],title:"Hi :)"})==="Let's get started"?this.setState("level-0"):this.setState("playing")),this.state==="level-0")return await r(`I like to think of Nodes as little factories connected by pipes.

Each Node, or Factory gets some inputs, transforms them and outputs something new.`,{timeout:0,values:["Okay...?","Understood"]}),this.setState("level-1");if(this.state==="level-1")return await r("Alright, who wants a coffee?",{values:["Meee!","No Thanks"]})==="No Thanks"?"level-1-interlude-0":"level-2";if(this.state.startsWith("level-1-interlude-")){const t=+this.state.replace("level-1-interlude-","");if(t===0){const e=await r("ERROR: Participant did not accept coffee?",{type:"error",values:["Accept Coffee","Nah, dont want coffee"]});return console.log({res:e}),e==="Accept Coffee"?"level-2":"level-1-interlude-1"}else if(t===1)return(await r("You reeally dont like coffee, do you?",{values:["Nope","Just Trolling :)"]})).startsWith("Just")?(await r("Alright, I can understand that \u{1F643}, lets continue...",{timeout:2e3}),"level-2"):(await r("Hmm, okay, then lets imagine that we dont make a coffee for you but for a person which really likes coffee?",{values:["okay","okay","okay"]}),"level-2")}if(this.state==="level-2")return await r(`Well then, what do we need to make a coffee? A coffee machine of course!

You can create one by pressing [shift+a] search for *machine* and press [enter]

<i>Btw, if you encounter any problems, just reload the page, the progress is saved :)</i>
`,{values:["Done"]}),"level-3";if(this.state==="level-3")return await r(`Yeaah \u{1F389}\u{1F389}\u{1F389}\u{1F389}
Congrats on your first node :)`,{type:"success"}),await r("You can drag nodes around, delete them by selecting them and pressing [x] and also copy and paste them.",{values:["Okay"]}),await r("As we can see the coffee machine has some inputs on the left side and some outputs on the right side. I wonder if we can connect anything to those...?",{values:["Continue"]}),"level-4";if(this.state==="level-4")return await r(`Offcourse we can :)

Create a <b>water node</b> on the left side of the coffee machine.`,{values:["Done"]}),await r(`The water node has a single output with the same color as the water input of the coffee machine.

This means that those sockets are compatible.

Click on the output of the water node and drag it to the input of the coffee machine.

<i>Sometimes its a bit easier to just select both nodes and press [c] on the keyboard.</i>
`,{values:["Connected!"]}),"level-5";if(this.state==="level-5")return await r(`Not much happened here, because we dont yet have an output node in our system.

Lets create a <b>Person</b> one on the right side of the coffee machine and connect the coffee machine to it.`,{values:["Done!"]}),"level-6";if(this.state==="level-6"){await r("There is something missing here, can you guess what it is?",{values:["Coffee Powder","Sense of humor"]})==="Sense of humor"&&await r("..."),await r(`Apparently we are in a very fancy kitchen here, because we dont seem to have coffee powder, only coffee beans...

Lets add those on the left side of the coffee machine.
`,{values:["Done"]}),await r(`We cant connect the coffee beans directly to the machine, we need to grind them first...

Any idea how to do that?`,{values:["Coffee Grinder",`Wait for the inevateble heat death 
of the universe, the should be powdered by then.`]})!=="Coffee Grinder"&&await r("Yeahh, sadly we dont have that much time."),await r("Lets add a coffee grinder in between the coffee beans and the coffee machine and connect it",{values:["Done"]});const n=await r("Yayy, we have coffee",{type:"success"});return console.log({r:n}),"level-7"}if(this.state==="level-7")if(await r("The tutorial is now finished, if you want you can play around with this setup a bit more or you can go back",{values:["play around","go back"]})==="go back")(s=window==null?void 0:window.history)==null||s.back();else return"playing";this.isRunning=!1}}end(){}}function x(i){let s,t;return s=new A({props:{name:"Start Tutorial"}}),s.$on("click",i[7]),{c(){b(s.$$.fragment)},l(e){v(s.$$.fragment,e)},m(e,n){_(s,e,n),t=!0},p:q,i(e){t||(c(s.$$.fragment,e),t=!0)},o(e){p(s.$$.fragment,e),t=!1},d(e){k(s,e)}}}function ye(i){let s,t,e,n=i[0]==="playing"&&x(i);return t=new A({props:{name:"exit",icon:"cross"}}),t.$on("click",i[8]),{c(){n&&n.c(),s=C(),b(t.$$.fragment)},l(o){n&&n.l(o),s=I(o),v(t.$$.fragment,o)},m(o,a){n&&n.m(o,a),g(o,s,a),_(t,o,a),e=!0},p(o,a){o[0]==="playing"?n?(n.p(o,a),a&1&&c(n,1)):(n=x(o),n.c(),c(n,1),n.m(s.parentNode,s)):n&&(z(),p(n,1,1,()=>{n=null}),B())},i(o){e||(c(n),c(t.$$.fragment,o),e=!0)},o(o){p(n),p(t.$$.fragment,o),e=!1},d(o){n&&n.d(o),o&&m(s),k(t,o)}}}function we(i){let s,t,e,n;return s=new te({props:{$$slots:{default:[ye]},$$scope:{ctx:i}}}),{c(){b(s.$$.fragment),t=C(),e=J("div"),this.h()},l(o){v(s.$$.fragment,o),t=I(o),e=U(o,"DIV",{id:!0,class:!0}),V(e).forEach(m),this.h()},h(){$(e,"id","node-system"),$(e,"class","svelte-1yvn2ye")},m(o,a){_(s,o,a),g(o,t,a),g(o,e,a),i[9](e),n=!0},p(o,[a]){const u={};a&1037&&(u.$$scope={dirty:a,ctx:o}),s.$set(u)},i(o){n||(c(s.$$.fragment,o),n=!0)},o(o){p(s.$$.fragment,o),n=!1},d(o){k(s,o),o&&m(t),o&&m(e),i[9](null)}}}function ge(i,s,t){let e,n;const o=new de;let a,u=!1;const d=o.stateStore;j(i,d,l=>t(0,e=l));let h;G(()=>{const l=new URL(window.location.toString());l.searchParams.has("ref")?(t(3,h=l.searchParams.get("ref")),localStorage.setItem("ref",h)):t(3,h=localStorage.getItem("ref")),t(5,a=new se({view:!0,wrapper:n,defaultNodes:!1,registerNodes:me,connectionColors:{fluid:"#797979",coffee_beans:"#915841",coffee_powder:"#2f1d1c"},showUpdates:!0})),t(2,o.nodeSystem=a,o);try{const f=localStorage.getItem("tutorial")&&JSON.parse(localStorage.getItem("tutorial"));f?(console.log("Looading",{nodeData:f}),a.load(f.save),o.setState(f.state)):a.load(N)}catch{a.load(N)}a.on("save",f=>{localStorage.setItem("tutorial",JSON.stringify({state:e,save:f}))}),o.start(),t(6,u=!0)});const H=()=>o.setState("level-0"),R=()=>oe(h||"/");function D(l){K[l?"unshift":"push"](()=>{n=l,t(1,n)})}return i.$$.update=()=>{i.$$.dirty&97&&d&&a&&u&&(console.log("SAVE",e),localStorage.setItem("tutorial",JSON.stringify({save:a.serialize(),state:e})))},[e,n,o,h,d,a,u,H,R,D]}class Se extends E{constructor(s){super(),Y(this,s,ge,we,F,{})}}export{Se as default};