if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let t={};const u=s=>n(s,i),o={module:{uri:i},exports:t,require:u};e[i]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(r(...s),t)))}}define(["./workbox-5ffe50d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.K3XqpApC.js",revision:null},{url:"assets/chunks/framework.C6Jp7RZp.js",revision:null},{url:"assets/chunks/theme.w5CNtVms.js",revision:null},{url:"assets/conclusion_README.md.DHDNK4hG.js",revision:null},{url:"assets/conclusion_README.md.DHDNK4hG.lean.js",revision:null},{url:"assets/design_README.md.CB_tbgyK.js",revision:null},{url:"assets/design_README.md.CB_tbgyK.lean.js",revision:null},{url:"assets/index.md.CmPzwoU_.js",revision:null},{url:"assets/index.md.CmPzwoU_.lean.js",revision:null},{url:"assets/intro_README.md.Bn6RdxwB.js",revision:null},{url:"assets/intro_README.md.Bn6RdxwB.lean.js",revision:null},{url:"assets/README.md.yN_3LCKU.js",revision:null},{url:"assets/README.md.yN_3LCKU.lean.js",revision:null},{url:"assets/requirements_README.md.LbNtHIBI.js",revision:null},{url:"assets/requirements_README.md.LbNtHIBI.lean.js",revision:null},{url:"assets/requirements_stakeholders-needs.md.D9MItIpN.js",revision:null},{url:"assets/requirements_stakeholders-needs.md.D9MItIpN.lean.js",revision:null},{url:"assets/requirements_state-of-the-art.md.Ctkde04X.js",revision:null},{url:"assets/requirements_state-of-the-art.md.Ctkde04X.lean.js",revision:null},{url:"assets/software_README.md.C3sl-Ghw.js",revision:null},{url:"assets/software_README.md.C3sl-Ghw.lean.js",revision:null},{url:"assets/style.DdXEyOgJ.css",revision:null},{url:"assets/test_README.md.BN5p_pgv.js",revision:null},{url:"assets/test_README.md.BN5p_pgv.lean.js",revision:null},{url:"assets/use cases_README.md.z23OwUf8.js",revision:null},{url:"assets/use cases_README.md.z23OwUf8.lean.js",revision:null},{url:"license.html",revision:"c6ae94487788630ac26fdec72cecb7f2"},{url:"registerSW.js",revision:"6527c298b7b70590ccbfedb8503aa648"},{url:"project-icon.png",revision:"dac26c413e4355d329703016422a762b"},{url:"manifest.webmanifest",revision:"ee7c7936d21ef4172e35dd69814e3526"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
