(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Me=[{id:"cowden",name:"Cowden",fileName:"Cowden Gauge Sheet1.xlsx",parser:"CowdenParser"},{id:"bigmax",name:"Big Max",fileName:"Big Max Gauge Sheet.xlsx",parser:"BigMaxParser"},{id:"bigmax1h",name:"Big Max 1H",fileName:"Big Max 1H Gauge Sheet.xlsx",parser:"BigMax1HParser"},{id:"southandrews",name:"South Andrews",fileName:"South Andrews Gauge Sheet.xlsm",parser:"SouthAndrewsParser"},{id:"polaris",name:"Polaris",fileName:"Polaris Gauge Sheet.xlsx",parser:"PolarisParser"},{id:"shusa",name:"Shusa",fileName:"Shusa Gauge Sheet.xlsx",parser:"ShusaParser"},{id:"mwwemac",name:"MW-Wemac-Sabrina-Berkley",fileName:"Mw-Wemac-Sabrina-Berkley.xlsx",parser:"MWWemacParser"},{id:"unit130",name:"1-30 Unit 1H",fileName:"1-30 Unit 1H Gauge Sheet.xlsx",parser:"Unit130Parser"},{id:"uls35h",name:"ULS 3-5H",fileName:"ULS 3-5H Gauge Sheet.xlsx",parser:"ULS35HParser"}],$i="oilWellTheme",P={appData:{},currentSheet:null,currentWell:null,wellProductionCharts:{},batteryProductionChart:null,currentWellData:null,productionDateRange:{min:null,max:null},chartState:{oil:{aggregation:"month",selectedWells:null},water:{aggregation:"month",selectedWells:null},gas:{aggregation:"month",selectedWells:null}},aggregateOilChart:null,aggregateWaterChart:null,aggregateGasChart:null,oilChartDateRange:{min:null,max:null},waterChartDateRange:{min:null,max:null},gasChartDateRange:{min:null,max:null},pressureCharts:{psi:null,injVol:null},currentEditSection:null,isLoading:!1,loadedSheets:[],loadedWells:{},metadataCache:{wellCounts:{},wellNames:{}},dashboardData:null};function mf(){const n=localStorage.getItem($i);n?document.documentElement.setAttribute("data-theme",n):El(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{localStorage.getItem($i)||El()}),Eo()}function El(){const n=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",n?"dark":"light"),Eo()}function gf(){const n=document.getElementById("themeToggle");n&&n.addEventListener("click",yf)}function yf(){const e=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",e),localStorage.setItem($i,e),Eo()}function Eo(){const n=document.querySelector(".theme-toggle-label");if(n){const e=document.documentElement.getAttribute("data-theme")||"dark";n.textContent=e==="dark"?"Light Mode":"Dark Mode"}}const _f=()=>{};var Tl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},wf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},eu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,l=o?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,I=h&63;c||(I=64,o||(g=64)),r.push(t[d],t[p],t[g],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Zc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):wf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new Ef;const g=i<<2|l>>4;if(r.push(g),h!==64){const I=l<<4&240|h>>2;if(r.push(I),p!==64){const S=h<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ef extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tf=function(n){const e=Zc(n);return eu.encodeByteArray(e,!0)},us=function(n){return Tf(n).replace(/\./g,"")},tu=function(n){try{return eu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If=()=>vf().__FIREBASE_DEFAULTS__,Cf=()=>{if(typeof process>"u"||typeof Tl>"u")return;const n=Tl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Sf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&tu(n[1]);return e&&JSON.parse(e)},ks=()=>{try{return _f()||If()||Cf()||Sf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},nu=n=>{var e,t;return(t=(e=ks())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},bf=n=>{const e=nu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ru=()=>{var n;return(n=ks())==null?void 0:n.config},su=n=>{var e;return(e=ks())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function iu(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[us(JSON.stringify(t)),us(JSON.stringify(o)),""].join(".")}const nr={};function Rf(){const n={prod:[],emulator:[]};for(const e of Object.keys(nr))nr[e]?n.emulator.push(e):n.prod.push(e);return n}function Df(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let vl=!1;function ou(n,e){if(typeof window>"u"||typeof document>"u"||!Cn(window.location.host)||nr[n]===e||nr[n]||vl)return;nr[n]=e;function t(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=Rf().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,I){g.setAttribute("width","24"),g.setAttribute("id",I),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{vl=!0,o()},g}function d(g,I){g.setAttribute("id",I),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=Df(r),I=t("text"),S=document.getElementById(I)||document.createElement("span"),R=t("learnmore"),N=document.getElementById(R)||document.createElement("a"),B=t("preprendIcon"),U=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const X=g.element;l(X),d(N,R);const Ce=h();c(U,B),X.append(U,S,N,Ce),document.body.appendChild(X)}i?(S.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function Nf(){var e;const n=(e=ks())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Vf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function xf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mf(){const n=Te();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Of(){return!Nf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ff(){try{return typeof indexedDB=="object"}catch{return!1}}function Bf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="FirebaseError";class ot extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Uf,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Er.prototype.create)}}class Er{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?$f(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new ot(s,l,r)}}function $f(n,e){return n.replace(jf,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const jf=/\{\$([^}]+)}/g;function Hf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Wt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Il(i)&&Il(o)){if(!Wt(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Il(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Jn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Wf(n,e){const t=new qf(n,e);return t.subscribe.bind(t)}class qf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");zf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Si),s.error===void 0&&(s.error=Si),s.complete===void 0&&(s.complete=Si);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Si(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(n){return n&&n._delegate?n._delegate:n}class qt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Af;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xf(e))try{this.getOrInitializeService({instanceIdentifier:$t})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=$t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$t){return this.instances.has(e)}getOptions(e=$t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$t){return this.component?this.component.multipleInstances?e:$t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kf(n){return n===$t?void 0:n}function Xf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Gf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const Jf={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Yf=W.INFO,Zf={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},ep=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Zf[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class To{constructor(e){this.name=e,this._logLevel=Yf,this._logHandler=ep,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const tp=(n,e)=>e.some(t=>n instanceof t);let Cl,Sl;function np(){return Cl||(Cl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rp(){return Sl||(Sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const au=new WeakMap,ji=new WeakMap,lu=new WeakMap,bi=new WeakMap,vo=new WeakMap;function sp(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(wt(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&au.set(t,n)}).catch(()=>{}),vo.set(e,n),e}function ip(n){if(ji.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});ji.set(n,e)}let Hi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ji.get(n);if(e==="objectStoreNames")return n.objectStoreNames||lu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function op(n){Hi=n(Hi)}function ap(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ai(this),e,...t);return lu.set(r,e.sort?e.sort():[e]),wt(r)}:rp().includes(n)?function(...e){return n.apply(Ai(this),e),wt(au.get(this))}:function(...e){return wt(n.apply(Ai(this),e))}}function lp(n){return typeof n=="function"?ap(n):(n instanceof IDBTransaction&&ip(n),tp(n,np())?new Proxy(n,Hi):n)}function wt(n){if(n instanceof IDBRequest)return sp(n);if(bi.has(n))return bi.get(n);const e=lp(n);return e!==n&&(bi.set(n,e),vo.set(e,n)),e}const Ai=n=>vo.get(n);function cp(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),l=wt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(wt(o.result),c.oldVersion,c.newVersion,wt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const up=["get","getKey","getAll","getAllKeys","count"],hp=["put","add","delete","clear"],Pi=new Map;function bl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Pi.get(e))return Pi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=hp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||up.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return Pi.set(e,i),i}op(n=>({...n,get:(e,t,r)=>bl(e,t)||n.get(e,t,r),has:(e,t)=>!!bl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function fp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wi="@firebase/app",Al="0.14.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt=new To("@firebase/app"),pp="@firebase/app-compat",mp="@firebase/analytics-compat",gp="@firebase/analytics",yp="@firebase/app-check-compat",_p="@firebase/app-check",wp="@firebase/auth",Ep="@firebase/auth-compat",Tp="@firebase/database",vp="@firebase/data-connect",Ip="@firebase/database-compat",Cp="@firebase/functions",Sp="@firebase/functions-compat",bp="@firebase/installations",Ap="@firebase/installations-compat",Pp="@firebase/messaging",Rp="@firebase/messaging-compat",Dp="@firebase/performance",kp="@firebase/performance-compat",Np="@firebase/remote-config",Vp="@firebase/remote-config-compat",Lp="@firebase/storage",xp="@firebase/storage-compat",Mp="@firebase/firestore",Op="@firebase/ai",Fp="@firebase/firestore-compat",Bp="firebase",Up="12.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="[DEFAULT]",$p={[Wi]:"fire-core",[pp]:"fire-core-compat",[gp]:"fire-analytics",[mp]:"fire-analytics-compat",[_p]:"fire-app-check",[yp]:"fire-app-check-compat",[wp]:"fire-auth",[Ep]:"fire-auth-compat",[Tp]:"fire-rtdb",[vp]:"fire-data-connect",[Ip]:"fire-rtdb-compat",[Cp]:"fire-fn",[Sp]:"fire-fn-compat",[bp]:"fire-iid",[Ap]:"fire-iid-compat",[Pp]:"fire-fcm",[Rp]:"fire-fcm-compat",[Dp]:"fire-perf",[kp]:"fire-perf-compat",[Np]:"fire-rc",[Vp]:"fire-rc-compat",[Lp]:"fire-gcs",[xp]:"fire-gcs-compat",[Mp]:"fire-fst",[Fp]:"fire-fst-compat",[Op]:"fire-vertex","fire-js":"fire-js",[Bp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new Map,jp=new Map,zi=new Map;function Pl(n,e){try{n.container.addComponent(e)}catch(t){tt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function mn(n){const e=n.name;if(zi.has(e))return tt.debug(`There were multiple attempts to register component ${e}.`),!1;zi.set(e,n);for(const t of hs.values())Pl(t,n);for(const t of jp.values())Pl(t,n);return!0}function Io(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Le(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Et=new Er("app","Firebase",Hp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Et.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=Up;function cu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:qi,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Et.create("bad-app-name",{appName:String(s)});if(t||(t=ru()),!t)throw Et.create("no-options");const i=hs.get(s);if(i){if(Wt(t,i.options)&&Wt(r,i.config))return i;throw Et.create("duplicate-app",{appName:s})}const o=new Qf(s);for(const c of zi.values())o.addComponent(c);const l=new Wp(t,r,o);return hs.set(s,l),l}function uu(n=qi){const e=hs.get(n);if(!e&&n===qi&&ru())return cu();if(!e)throw Et.create("no-app",{appName:n});return e}function Tt(n,e,t){let r=$p[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tt.warn(o.join(" "));return}mn(new qt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="firebase-heartbeat-database",zp=1,lr="firebase-heartbeat-store";let Ri=null;function hu(){return Ri||(Ri=cp(qp,zp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(lr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Et.create("idb-open",{originalErrorMessage:n.message})})),Ri}async function Gp(n){try{const t=(await hu()).transaction(lr),r=await t.objectStore(lr).get(du(n));return await t.done,r}catch(e){if(e instanceof ot)tt.warn(e.message);else{const t=Et.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tt.warn(t.message)}}}async function Rl(n,e){try{const r=(await hu()).transaction(lr,"readwrite");await r.objectStore(lr).put(e,du(n)),await r.done}catch(t){if(t instanceof ot)tt.warn(t.message);else{const r=Et.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});tt.warn(r.message)}}}function du(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=1024,Xp=30;class Qp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Dl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Xp){const o=Zp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){tt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Dl(),{heartbeatsToSend:r,unsentEntries:s}=Jp(this._heartbeatsCache.heartbeats),i=us(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return tt.warn(t),""}}}function Dl(){return new Date().toISOString().substring(0,10)}function Jp(n,e=Kp){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),kl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),kl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Yp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ff()?Bf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Gp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Rl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Rl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function kl(n){return us(JSON.stringify({version:2,heartbeats:n})).length}function Zp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(n){mn(new qt("platform-logger",e=>new dp(e),"PRIVATE")),mn(new qt("heartbeat",e=>new Qp(e),"PRIVATE")),Tt(Wi,Al,n),Tt(Wi,Al,"esm2020"),Tt("fire-js","")}em("");var Nl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vt,fu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function w(){}w.prototype=y.prototype,T.F=y.prototype,T.prototype=new w,T.prototype.constructor=T,T.D=function(v,E,b){for(var _=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)_[Se-2]=arguments[Se];return y.prototype[E].apply(v,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,y,w){w||(w=0);const v=Array(16);if(typeof y=="string")for(var E=0;E<16;++E)v[E]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(E=0;E<16;++E)v[E]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=T.g[0],w=T.g[1],E=T.g[2];let b=T.g[3],_;_=y+(b^w&(E^b))+v[0]+3614090360&4294967295,y=w+(_<<7&4294967295|_>>>25),_=b+(E^y&(w^E))+v[1]+3905402710&4294967295,b=y+(_<<12&4294967295|_>>>20),_=E+(w^b&(y^w))+v[2]+606105819&4294967295,E=b+(_<<17&4294967295|_>>>15),_=w+(y^E&(b^y))+v[3]+3250441966&4294967295,w=E+(_<<22&4294967295|_>>>10),_=y+(b^w&(E^b))+v[4]+4118548399&4294967295,y=w+(_<<7&4294967295|_>>>25),_=b+(E^y&(w^E))+v[5]+1200080426&4294967295,b=y+(_<<12&4294967295|_>>>20),_=E+(w^b&(y^w))+v[6]+2821735955&4294967295,E=b+(_<<17&4294967295|_>>>15),_=w+(y^E&(b^y))+v[7]+4249261313&4294967295,w=E+(_<<22&4294967295|_>>>10),_=y+(b^w&(E^b))+v[8]+1770035416&4294967295,y=w+(_<<7&4294967295|_>>>25),_=b+(E^y&(w^E))+v[9]+2336552879&4294967295,b=y+(_<<12&4294967295|_>>>20),_=E+(w^b&(y^w))+v[10]+4294925233&4294967295,E=b+(_<<17&4294967295|_>>>15),_=w+(y^E&(b^y))+v[11]+2304563134&4294967295,w=E+(_<<22&4294967295|_>>>10),_=y+(b^w&(E^b))+v[12]+1804603682&4294967295,y=w+(_<<7&4294967295|_>>>25),_=b+(E^y&(w^E))+v[13]+4254626195&4294967295,b=y+(_<<12&4294967295|_>>>20),_=E+(w^b&(y^w))+v[14]+2792965006&4294967295,E=b+(_<<17&4294967295|_>>>15),_=w+(y^E&(b^y))+v[15]+1236535329&4294967295,w=E+(_<<22&4294967295|_>>>10),_=y+(E^b&(w^E))+v[1]+4129170786&4294967295,y=w+(_<<5&4294967295|_>>>27),_=b+(w^E&(y^w))+v[6]+3225465664&4294967295,b=y+(_<<9&4294967295|_>>>23),_=E+(y^w&(b^y))+v[11]+643717713&4294967295,E=b+(_<<14&4294967295|_>>>18),_=w+(b^y&(E^b))+v[0]+3921069994&4294967295,w=E+(_<<20&4294967295|_>>>12),_=y+(E^b&(w^E))+v[5]+3593408605&4294967295,y=w+(_<<5&4294967295|_>>>27),_=b+(w^E&(y^w))+v[10]+38016083&4294967295,b=y+(_<<9&4294967295|_>>>23),_=E+(y^w&(b^y))+v[15]+3634488961&4294967295,E=b+(_<<14&4294967295|_>>>18),_=w+(b^y&(E^b))+v[4]+3889429448&4294967295,w=E+(_<<20&4294967295|_>>>12),_=y+(E^b&(w^E))+v[9]+568446438&4294967295,y=w+(_<<5&4294967295|_>>>27),_=b+(w^E&(y^w))+v[14]+3275163606&4294967295,b=y+(_<<9&4294967295|_>>>23),_=E+(y^w&(b^y))+v[3]+4107603335&4294967295,E=b+(_<<14&4294967295|_>>>18),_=w+(b^y&(E^b))+v[8]+1163531501&4294967295,w=E+(_<<20&4294967295|_>>>12),_=y+(E^b&(w^E))+v[13]+2850285829&4294967295,y=w+(_<<5&4294967295|_>>>27),_=b+(w^E&(y^w))+v[2]+4243563512&4294967295,b=y+(_<<9&4294967295|_>>>23),_=E+(y^w&(b^y))+v[7]+1735328473&4294967295,E=b+(_<<14&4294967295|_>>>18),_=w+(b^y&(E^b))+v[12]+2368359562&4294967295,w=E+(_<<20&4294967295|_>>>12),_=y+(w^E^b)+v[5]+4294588738&4294967295,y=w+(_<<4&4294967295|_>>>28),_=b+(y^w^E)+v[8]+2272392833&4294967295,b=y+(_<<11&4294967295|_>>>21),_=E+(b^y^w)+v[11]+1839030562&4294967295,E=b+(_<<16&4294967295|_>>>16),_=w+(E^b^y)+v[14]+4259657740&4294967295,w=E+(_<<23&4294967295|_>>>9),_=y+(w^E^b)+v[1]+2763975236&4294967295,y=w+(_<<4&4294967295|_>>>28),_=b+(y^w^E)+v[4]+1272893353&4294967295,b=y+(_<<11&4294967295|_>>>21),_=E+(b^y^w)+v[7]+4139469664&4294967295,E=b+(_<<16&4294967295|_>>>16),_=w+(E^b^y)+v[10]+3200236656&4294967295,w=E+(_<<23&4294967295|_>>>9),_=y+(w^E^b)+v[13]+681279174&4294967295,y=w+(_<<4&4294967295|_>>>28),_=b+(y^w^E)+v[0]+3936430074&4294967295,b=y+(_<<11&4294967295|_>>>21),_=E+(b^y^w)+v[3]+3572445317&4294967295,E=b+(_<<16&4294967295|_>>>16),_=w+(E^b^y)+v[6]+76029189&4294967295,w=E+(_<<23&4294967295|_>>>9),_=y+(w^E^b)+v[9]+3654602809&4294967295,y=w+(_<<4&4294967295|_>>>28),_=b+(y^w^E)+v[12]+3873151461&4294967295,b=y+(_<<11&4294967295|_>>>21),_=E+(b^y^w)+v[15]+530742520&4294967295,E=b+(_<<16&4294967295|_>>>16),_=w+(E^b^y)+v[2]+3299628645&4294967295,w=E+(_<<23&4294967295|_>>>9),_=y+(E^(w|~b))+v[0]+4096336452&4294967295,y=w+(_<<6&4294967295|_>>>26),_=b+(w^(y|~E))+v[7]+1126891415&4294967295,b=y+(_<<10&4294967295|_>>>22),_=E+(y^(b|~w))+v[14]+2878612391&4294967295,E=b+(_<<15&4294967295|_>>>17),_=w+(b^(E|~y))+v[5]+4237533241&4294967295,w=E+(_<<21&4294967295|_>>>11),_=y+(E^(w|~b))+v[12]+1700485571&4294967295,y=w+(_<<6&4294967295|_>>>26),_=b+(w^(y|~E))+v[3]+2399980690&4294967295,b=y+(_<<10&4294967295|_>>>22),_=E+(y^(b|~w))+v[10]+4293915773&4294967295,E=b+(_<<15&4294967295|_>>>17),_=w+(b^(E|~y))+v[1]+2240044497&4294967295,w=E+(_<<21&4294967295|_>>>11),_=y+(E^(w|~b))+v[8]+1873313359&4294967295,y=w+(_<<6&4294967295|_>>>26),_=b+(w^(y|~E))+v[15]+4264355552&4294967295,b=y+(_<<10&4294967295|_>>>22),_=E+(y^(b|~w))+v[6]+2734768916&4294967295,E=b+(_<<15&4294967295|_>>>17),_=w+(b^(E|~y))+v[13]+1309151649&4294967295,w=E+(_<<21&4294967295|_>>>11),_=y+(E^(w|~b))+v[4]+4149444226&4294967295,y=w+(_<<6&4294967295|_>>>26),_=b+(w^(y|~E))+v[11]+3174756917&4294967295,b=y+(_<<10&4294967295|_>>>22),_=E+(y^(b|~w))+v[2]+718787259&4294967295,E=b+(_<<15&4294967295|_>>>17),_=w+(b^(E|~y))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+b&4294967295}r.prototype.v=function(T,y){y===void 0&&(y=T.length);const w=y-this.blockSize,v=this.C;let E=this.h,b=0;for(;b<y;){if(E==0)for(;b<=w;)s(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<y;)if(v[E++]=T.charCodeAt(b++),E==this.blockSize){s(this,v),E=0;break}}else for(;b<y;)if(v[E++]=T[b++],E==this.blockSize){s(this,v),E=0;break}}this.h=E,this.o+=y},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;y=this.o*8;for(var w=T.length-8;w<T.length;++w)T[w]=y&255,y/=256;for(this.v(T),T=Array(16),y=0,w=0;w<4;++w)for(let v=0;v<32;v+=8)T[y++]=this.g[w]>>>v&255;return T};function i(T,y){var w=l;return Object.prototype.hasOwnProperty.call(w,T)?w[T]:w[T]=y(T)}function o(T,y){this.h=y;const w=[];let v=!0;for(let E=T.length-1;E>=0;E--){const b=T[E]|0;v&&b==y||(w[E]=b,v=!1)}this.g=w}var l={};function c(T){return-128<=T&&T<128?i(T,function(y){return new o([y|0],y<0?-1:0)}):new o([T|0],T<0?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return N(h(-T));const y=[];let w=1;for(let v=0;T>=w;v++)y[v]=T/w|0,w*=4294967296;return new o(y,0)}function d(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return N(d(T.substring(1),y));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(y,8));let v=p;for(let b=0;b<T.length;b+=8){var E=Math.min(8,T.length-b);const _=parseInt(T.substring(b,b+E),y);E<8?(E=h(Math.pow(y,E)),v=v.j(E).add(h(_))):(v=v.j(w),v=v.add(h(_)))}return v}var p=c(0),g=c(1),I=c(16777216);n=o.prototype,n.m=function(){if(R(this))return-N(this).m();let T=0,y=1;for(let w=0;w<this.g.length;w++){const v=this.i(w);T+=(v>=0?v:4294967296+v)*y,y*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(R(this))return"-"+N(this).toString(T);const y=h(Math.pow(T,6));var w=this;let v="";for(;;){const E=Ce(w,y).g;w=B(w,E.j(y));let b=((w.g.length>0?w.g[0]:w.h)>>>0).toString(T);if(w=E,S(w))return b+v;for(;b.length<6;)b="0"+b;v=b+v}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(let y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function R(T){return T.h==-1}n.l=function(T){return T=B(this,T),R(T)?-1:S(T)?0:1};function N(T){const y=T.g.length,w=[];for(let v=0;v<y;v++)w[v]=~T.g[v];return new o(w,~T.h).add(g)}n.abs=function(){return R(this)?N(this):this},n.add=function(T){const y=Math.max(this.g.length,T.g.length),w=[];let v=0;for(let E=0;E<=y;E++){let b=v+(this.i(E)&65535)+(T.i(E)&65535),_=(b>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);v=_>>>16,b&=65535,_&=65535,w[E]=_<<16|b}return new o(w,w[w.length-1]&-2147483648?-1:0)};function B(T,y){return T.add(N(y))}n.j=function(T){if(S(this)||S(T))return p;if(R(this))return R(T)?N(this).j(N(T)):N(N(this).j(T));if(R(T))return N(this.j(N(T)));if(this.l(I)<0&&T.l(I)<0)return h(this.m()*T.m());const y=this.g.length+T.g.length,w=[];for(var v=0;v<2*y;v++)w[v]=0;for(v=0;v<this.g.length;v++)for(let E=0;E<T.g.length;E++){const b=this.i(v)>>>16,_=this.i(v)&65535,Se=T.i(E)>>>16,xt=T.i(E)&65535;w[2*v+2*E]+=_*xt,U(w,2*v+2*E),w[2*v+2*E+1]+=b*xt,U(w,2*v+2*E+1),w[2*v+2*E+1]+=_*Se,U(w,2*v+2*E+1),w[2*v+2*E+2]+=b*Se,U(w,2*v+2*E+2)}for(T=0;T<y;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=y;T<2*y;T++)w[T]=0;return new o(w,0)};function U(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function X(T,y){this.g=T,this.h=y}function Ce(T,y){if(S(y))throw Error("division by zero");if(S(T))return new X(p,p);if(R(T))return y=Ce(N(T),y),new X(N(y.g),N(y.h));if(R(y))return y=Ce(T,N(y)),new X(N(y.g),y.h);if(T.g.length>30){if(R(T)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var w=g,v=y;v.l(T)<=0;)w=Pe(w),v=Pe(v);var E=ge(w,1),b=ge(v,1);for(v=ge(v,2),w=ge(w,2);!S(v);){var _=b.add(v);_.l(T)<=0&&(E=E.add(w),b=_),v=ge(v,1),w=ge(w,1)}return y=B(T,E.j(y)),new X(E,y)}for(E=p;T.l(y)>=0;){for(w=Math.max(1,Math.floor(T.m()/y.m())),v=Math.ceil(Math.log(w)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),b=h(w),_=b.j(y);R(_)||_.l(T)>0;)w-=v,b=h(w),_=b.j(y);S(b)&&(b=g),E=E.add(b),T=B(T,_)}return new X(E,T)}n.B=function(T){return Ce(this,T).h},n.and=function(T){const y=Math.max(this.g.length,T.g.length),w=[];for(let v=0;v<y;v++)w[v]=this.i(v)&T.i(v);return new o(w,this.h&T.h)},n.or=function(T){const y=Math.max(this.g.length,T.g.length),w=[];for(let v=0;v<y;v++)w[v]=this.i(v)|T.i(v);return new o(w,this.h|T.h)},n.xor=function(T){const y=Math.max(this.g.length,T.g.length),w=[];for(let v=0;v<y;v++)w[v]=this.i(v)^T.i(v);return new o(w,this.h^T.h)};function Pe(T){const y=T.g.length+1,w=[];for(let v=0;v<y;v++)w[v]=T.i(v)<<1|T.i(v-1)>>>31;return new o(w,T.h)}function ge(T,y){const w=y>>5;y%=32;const v=T.g.length-w,E=[];for(let b=0;b<v;b++)E[b]=y>0?T.i(b+w)>>>y|T.i(b+w+1)<<32-y:T.i(b+w);return new o(E,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,fu=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,vt=o}).apply(typeof Nl<"u"?Nl:typeof self<"u"?self:typeof window<"u"?window:{});var Gr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pu,Yn,mu,Zr,Gi,gu,yu,_u;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gr=="object"&&Gr];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in f))break e;f=f[C]}a=a[a.length-1],m=f[a],u=u(m),u!=m&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var f=[],m;for(m in u)Object.prototype.hasOwnProperty.call(u,m)&&f.push([m,u[m]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function c(a,u,f){return a.call.apply(a.bind,arguments)}function h(a,u,f){return h=c,h.apply(null,arguments)}function d(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,u){function f(){}f.prototype=u.prototype,a.Z=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(m,C,A){for(var V=Array(arguments.length-2),H=2;H<arguments.length;H++)V[H-2]=arguments[H];return u.prototype[C].apply(m,V)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const u=a.length;if(u>0){const f=Array(u);for(let m=0;m<u;m++)f[m]=a[m];return f}return[]}function S(a,u){for(let m=1;m<arguments.length;m++){const C=arguments[m];var f=typeof C;if(f=f!="object"?f:C?Array.isArray(C)?"array":f:"null",f=="array"||f=="object"&&typeof C.length=="number"){f=a.length||0;const A=C.length||0;a.length=f+A;for(let V=0;V<A;V++)a[f+V]=C[V]}else a.push(C)}}class R{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function N(a){o.setTimeout(()=>{throw a},0)}function B(){var a=T;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class U{constructor(){this.h=this.g=null}add(u,f){const m=X.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var X=new R(()=>new Ce,a=>a.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,ge=!1,T=new U,y=()=>{const a=Promise.resolve(void 0);Pe=()=>{a.then(w)}};function w(){for(var a;a=B();){try{a.h.call(a.g)}catch(f){N(f)}var u=X;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}ge=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,u),o.removeEventListener("test",f,u)}catch{}return a}();function _(a){return/^[\s\xa0]*$/.test(a)}function Se(a,u){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(Se,E),Se.prototype.init=function(a,u){const f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Se.Z.h.call(this)},Se.prototype.h=function(){Se.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xt="closure_listenable_"+(Math.random()*1e6|0),Md=0;function Od(a,u,f,m,C){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=C,this.key=++Md,this.da=this.fa=!1}function Nr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Vr(a,u,f){for(const m in a)u.call(f,a[m],m,a)}function Fd(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function wa(a){const u={};for(const f in a)u[f]=a[f];return u}const Ea="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ta(a,u){let f,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(f in m)a[f]=m[f];for(let A=0;A<Ea.length;A++)f=Ea[A],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function Lr(a){this.src=a,this.g={},this.h=0}Lr.prototype.add=function(a,u,f,m,C){const A=a.toString();a=this.g[A],a||(a=this.g[A]=[],this.h++);const V=ni(a,u,m,C);return V>-1?(u=a[V],f||(u.fa=!1)):(u=new Od(u,this.src,A,!!m,C),u.fa=f,a.push(u)),u};function ti(a,u){const f=u.type;if(f in a.g){var m=a.g[f],C=Array.prototype.indexOf.call(m,u,void 0),A;(A=C>=0)&&Array.prototype.splice.call(m,C,1),A&&(Nr(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ni(a,u,f,m){for(let C=0;C<a.length;++C){const A=a[C];if(!A.da&&A.listener==u&&A.capture==!!f&&A.ha==m)return C}return-1}var ri="closure_lm_"+(Math.random()*1e6|0),si={};function va(a,u,f,m,C){if(Array.isArray(u)){for(let A=0;A<u.length;A++)va(a,u[A],f,m,C);return null}return f=Sa(f),a&&a[xt]?a.J(u,f,l(m)?!!m.capture:!1,C):Bd(a,u,f,!1,m,C)}function Bd(a,u,f,m,C,A){if(!u)throw Error("Invalid event type");const V=l(C)?!!C.capture:!!C;let H=oi(a);if(H||(a[ri]=H=new Lr(a)),f=H.add(u,f,m,V,A),f.proxy)return f;if(m=Ud(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)b||(C=V),C===void 0&&(C=!1),a.addEventListener(u.toString(),m,C);else if(a.attachEvent)a.attachEvent(Ca(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Ud(){function a(f){return u.call(a.src,a.listener,f)}const u=$d;return a}function Ia(a,u,f,m,C){if(Array.isArray(u))for(var A=0;A<u.length;A++)Ia(a,u[A],f,m,C);else m=l(m)?!!m.capture:!!m,f=Sa(f),a&&a[xt]?(a=a.i,A=String(u).toString(),A in a.g&&(u=a.g[A],f=ni(u,f,m,C),f>-1&&(Nr(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete a.g[A],a.h--)))):a&&(a=oi(a))&&(u=a.g[u.toString()],a=-1,u&&(a=ni(u,f,m,C)),(f=a>-1?u[a]:null)&&ii(f))}function ii(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[xt])ti(u.i,a);else{var f=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(f,m,a.capture):u.detachEvent?u.detachEvent(Ca(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=oi(u))?(ti(f,a),f.h==0&&(f.src=null,u[ri]=null)):Nr(a)}}}function Ca(a){return a in si?si[a]:si[a]="on"+a}function $d(a,u){if(a.da)a=!0;else{u=new Se(u,this);const f=a.listener,m=a.ha||a.src;a.fa&&ii(a),a=f.call(m,u)}return a}function oi(a){return a=a[ri],a instanceof Lr?a:null}var ai="__closure_events_fn_"+(Math.random()*1e9>>>0);function Sa(a){return typeof a=="function"?a:(a[ai]||(a[ai]=function(u){return a.handleEvent(u)}),a[ai])}function ye(){v.call(this),this.i=new Lr(this),this.M=this,this.G=null}p(ye,v),ye.prototype[xt]=!0,ye.prototype.removeEventListener=function(a,u,f,m){Ia(this,a,u,f,m)};function ve(a,u){var f,m=a.G;if(m)for(f=[];m;m=m.G)f.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new E(u,a);else if(u instanceof E)u.target=u.target||a;else{var C=u;u=new E(m,a),Ta(u,C)}C=!0;let A,V;if(f)for(V=f.length-1;V>=0;V--)A=u.g=f[V],C=xr(A,m,!0,u)&&C;if(A=u.g=a,C=xr(A,m,!0,u)&&C,C=xr(A,m,!1,u)&&C,f)for(V=0;V<f.length;V++)A=u.g=f[V],C=xr(A,m,!1,u)&&C}ye.prototype.N=function(){if(ye.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const f=a.g[u];for(let m=0;m<f.length;m++)Nr(f[m]);delete a.g[u],a.h--}}this.G=null},ye.prototype.J=function(a,u,f,m){return this.i.add(String(a),u,!1,f,m)},ye.prototype.K=function(a,u,f,m){return this.i.add(String(a),u,!0,f,m)};function xr(a,u,f,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let C=!0;for(let A=0;A<u.length;++A){const V=u[A];if(V&&!V.da&&V.capture==f){const H=V.listener,oe=V.ha||V.src;V.fa&&ti(a.i,V),C=H.call(oe,m)!==!1&&C}}return C&&!m.defaultPrevented}function jd(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function ba(a){a.g=jd(()=>{a.g=null,a.i&&(a.i=!1,ba(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Hd extends v{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ba(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vn(a){v.call(this),this.h=a,this.g={}}p(Vn,v);var Aa=[];function Pa(a){Vr(a.g,function(u,f){this.g.hasOwnProperty(f)&&ii(u)},a),a.g={}}Vn.prototype.N=function(){Vn.Z.N.call(this),Pa(this)},Vn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var li=o.JSON.stringify,Wd=o.JSON.parse,qd=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ra(){}function Da(){}var Ln={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ci(){E.call(this,"d")}p(ci,E);function ui(){E.call(this,"c")}p(ui,E);var Mt={},ka=null;function Mr(){return ka=ka||new ye}Mt.Ia="serverreachability";function Na(a){E.call(this,Mt.Ia,a)}p(Na,E);function xn(a){const u=Mr();ve(u,new Na(u))}Mt.STAT_EVENT="statevent";function Va(a,u){E.call(this,Mt.STAT_EVENT,a),this.stat=u}p(Va,E);function Ie(a){const u=Mr();ve(u,new Va(u,a))}Mt.Ja="timingevent";function La(a,u){E.call(this,Mt.Ja,a),this.size=u}p(La,E);function Mn(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function On(){this.g=!0}On.prototype.ua=function(){this.g=!1};function zd(a,u,f,m,C,A){a.info(function(){if(a.g)if(A){var V="",H=A.split("&");for(let Y=0;Y<H.length;Y++){var oe=H[Y].split("=");if(oe.length>1){const ue=oe[0];oe=oe[1];const je=ue.split("_");V=je.length>=2&&je[1]=="type"?V+(ue+"="+oe+"&"):V+(ue+"=redacted&")}}}else V=null;else V=A;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+u+`
`+f+`
`+V})}function Gd(a,u,f,m,C,A,V){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+u+`
`+f+`
`+A+" "+V})}function Zt(a,u,f,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Xd(a,f)+(m?" "+m:"")})}function Kd(a,u){a.info(function(){return"TIMEOUT: "+u})}On.prototype.info=function(){};function Xd(a,u){if(!a.g)return u;if(!u)return null;try{const A=JSON.parse(u);if(A){for(a=0;a<A.length;a++)if(Array.isArray(A[a])){var f=A[a];if(!(f.length<2)){var m=f[1];if(Array.isArray(m)&&!(m.length<1)){var C=m[0];if(C!="noop"&&C!="stop"&&C!="close")for(let V=1;V<m.length;V++)m[V]=""}}}}return li(A)}catch{return u}}var Or={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},xa={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ma;function hi(){}p(hi,Ra),hi.prototype.g=function(){return new XMLHttpRequest},Ma=new hi;function Fn(a){return encodeURIComponent(String(a))}function Qd(a){var u=1;a=a.split(":");const f=[];for(;u>0&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function at(a,u,f,m){this.j=a,this.i=u,this.l=f,this.S=m||1,this.V=new Vn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Oa}function Oa(){this.i=null,this.g="",this.h=!1}var Fa={},di={};function fi(a,u,f){a.M=1,a.A=Br($e(u)),a.u=f,a.R=!0,Ba(a,null)}function Ba(a,u){a.F=Date.now(),Fr(a),a.B=$e(a.A);var f=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),Ya(f.i,"t",m),a.C=0,f=a.j.L,a.h=new Oa,a.g=gl(a.j,f?u:null,!a.u),a.P>0&&(a.O=new Hd(h(a.Y,a,a.g),a.P)),u=a.V,f=a.g,m=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(Aa[0]=C.toString()),C=Aa);for(let A=0;A<C.length;A++){const V=va(f,C[A],m||u.handleEvent,!1,u.h||u);if(!V)break;u.g[V.key]=V}u=a.J?wa(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),xn(),zd(a.i,a.v,a.B,a.l,a.S,a.u)}at.prototype.ba=function(a){a=a.target;const u=this.O;u&&ut(a)==3?u.j():this.Y(a)},at.prototype.Y=function(a){try{if(a==this.g)e:{const H=ut(this.g),oe=this.g.ya(),Y=this.g.ca();if(!(H<3)&&(H!=3||this.g&&(this.h.h||this.g.la()||il(this.g)))){this.K||H!=4||oe==7||(oe==8||Y<=0?xn(3):xn(2)),pi(this);var u=this.g.ca();this.X=u;var f=Jd(this);if(this.o=u==200,Gd(this.i,this.v,this.B,this.l,this.S,H,u),this.o){if(this.U&&!this.L){t:{if(this.g){var m,C=this.g;if((m=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(m)){var A=m;break t}}A=null}if(a=A)Zt(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,mi(this,a);else{this.o=!1,this.m=3,Ie(12),Ot(this),Bn(this);break e}}if(this.R){a=!0;let ue;for(;!this.K&&this.C<f.length;)if(ue=Yd(this,f),ue==di){H==4&&(this.m=4,Ie(14),a=!1),Zt(this.i,this.l,null,"[Incomplete Response]");break}else if(ue==Fa){this.m=4,Ie(15),Zt(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Zt(this.i,this.l,ue,null),mi(this,ue);if(Ua(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||f.length!=0||this.h.h||(this.m=1,Ie(16),a=!1),this.o=this.o&&a,!a)Zt(this.i,this.l,f,"[Invalid Chunked Response]"),Ot(this),Bn(this);else if(f.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Ii(V),V.P=!0,Ie(11))}}else Zt(this.i,this.l,f,null),mi(this,f);H==4&&Ot(this),this.o&&!this.K&&(H==4?dl(this.j,this):(this.o=!1,Fr(this)))}else ff(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,Ie(12)):(this.m=0,Ie(13)),Ot(this),Bn(this)}}}catch{}finally{}};function Jd(a){if(!Ua(a))return a.g.la();const u=il(a.g);if(u==="")return"";let f="";const m=u.length,C=ut(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ot(a),Bn(a),"";a.h.i=new o.TextDecoder}for(let A=0;A<m;A++)a.h.h=!0,f+=a.h.i.decode(u[A],{stream:!(C&&A==m-1)});return u.length=0,a.h.g+=f,a.C=0,a.h.g}function Ua(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Yd(a,u){var f=a.C,m=u.indexOf(`
`,f);return m==-1?di:(f=Number(u.substring(f,m)),isNaN(f)?Fa:(m+=1,m+f>u.length?di:(u=u.slice(m,m+f),a.C=m+f,u)))}at.prototype.cancel=function(){this.K=!0,Ot(this)};function Fr(a){a.T=Date.now()+a.H,$a(a,a.H)}function $a(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Mn(h(a.aa,a),u)}function pi(a){a.D&&(o.clearTimeout(a.D),a.D=null)}at.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Kd(this.i,this.B),this.M!=2&&(xn(),Ie(17)),Ot(this),this.m=2,Bn(this)):$a(this,this.T-a)};function Bn(a){a.j.I==0||a.K||dl(a.j,a)}function Ot(a){pi(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Pa(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function mi(a,u){try{var f=a.j;if(f.I!=0&&(f.g==a||gi(f.h,a))){if(!a.L&&gi(f.h,a)&&f.I==3){try{var m=f.Ba.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Wr(f),jr(f);else break e;vi(f),Ie(18)}}else f.xa=C[1],0<f.xa-f.K&&C[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Mn(h(f.Va,f),6e3));Wa(f.h)<=1&&f.ta&&(f.ta=void 0)}else Bt(f,11)}else if((a.L||f.g==a)&&Wr(f),!_(u))for(C=f.Ba.g.parse(u),u=0;u<C.length;u++){let Y=C[u];const ue=Y[0];if(!(ue<=f.K))if(f.K=ue,Y=Y[1],f.I==2)if(Y[0]=="c"){f.M=Y[1],f.ba=Y[2];const je=Y[3];je!=null&&(f.ka=je,f.j.info("VER="+f.ka));const Ut=Y[4];Ut!=null&&(f.za=Ut,f.j.info("SVER="+f.za));const ht=Y[5];ht!=null&&typeof ht=="number"&&ht>0&&(m=1.5*ht,f.O=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const dt=a.g;if(dt){const zr=dt.g?dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zr){var A=m.h;A.g||zr.indexOf("spdy")==-1&&zr.indexOf("quic")==-1&&zr.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(yi(A,A.h),A.h=null))}if(m.G){const Ci=dt.g?dt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ci&&(m.wa=Ci,Z(m.J,m.G,Ci))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),m=f;var V=a;if(m.na=ml(m,m.L?m.ba:null,m.W),V.L){qa(m.h,V);var H=V,oe=m.O;oe&&(H.H=oe),H.D&&(pi(H),Fr(H)),m.g=V}else ul(m);f.i.length>0&&Hr(f)}else Y[0]!="stop"&&Y[0]!="close"||Bt(f,7);else f.I==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Bt(f,7):Ti(f):Y[0]!="noop"&&f.l&&f.l.qa(Y),f.A=0)}}xn(4)}catch{}}var Zd=class{constructor(a,u){this.g=a,this.map=u}};function ja(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ha(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wa(a){return a.h?1:a.g?a.g.size:0}function gi(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function yi(a,u){a.g?a.g.add(u):a.h=u}function qa(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}ja.prototype.cancel=function(){if(this.i=za(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function za(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.G);return u}return I(a.i)}var Ga=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ef(a,u){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const m=a[f].indexOf("=");let C,A=null;m>=0?(C=a[f].substring(0,m),A=a[f].substring(m+1)):C=a[f],u(C,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function lt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof lt?(this.l=a.l,Un(this,a.j),this.o=a.o,this.g=a.g,$n(this,a.u),this.h=a.h,_i(this,Za(a.i)),this.m=a.m):a&&(u=String(a).match(Ga))?(this.l=!1,Un(this,u[1]||"",!0),this.o=jn(u[2]||""),this.g=jn(u[3]||"",!0),$n(this,u[4]),this.h=jn(u[5]||"",!0),_i(this,u[6]||"",!0),this.m=jn(u[7]||"")):(this.l=!1,this.i=new Wn(null,this.l))}lt.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Hn(u,Ka,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Hn(u,Ka,!0),"@"),a.push(Fn(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Hn(f,f.charAt(0)=="/"?rf:nf,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Hn(f,of)),a.join("")},lt.prototype.resolve=function(a){const u=$e(this);let f=!!a.j;f?Un(u,a.j):f=!!a.o,f?u.o=a.o:f=!!a.g,f?u.g=a.g:f=a.u!=null;var m=a.h;if(f)$n(u,a.u);else if(f=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var C=u.h.lastIndexOf("/");C!=-1&&(m=u.h.slice(0,C+1)+m)}if(C=m,C==".."||C==".")m="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){m=C.lastIndexOf("/",0)==0,C=C.split("/");const A=[];for(let V=0;V<C.length;){const H=C[V++];H=="."?m&&V==C.length&&A.push(""):H==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),m&&V==C.length&&A.push("")):(A.push(H),m=!0)}m=A.join("/")}else m=C}return f?u.h=m:f=a.i.toString()!=="",f?_i(u,Za(a.i)):f=!!a.m,f&&(u.m=a.m),u};function $e(a){return new lt(a)}function Un(a,u,f){a.j=f?jn(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function $n(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function _i(a,u,f){u instanceof Wn?(a.i=u,af(a.i,a.l)):(f||(u=Hn(u,sf)),a.i=new Wn(u,a.l))}function Z(a,u,f){a.i.set(u,f)}function Br(a){return Z(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function jn(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Hn(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,tf),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function tf(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ka=/[#\/\?@]/g,nf=/[#\?:]/g,rf=/[#\?]/g,sf=/[#\?@]/g,of=/#/g;function Wn(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Ft(a){a.g||(a.g=new Map,a.h=0,a.i&&ef(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Wn.prototype,n.add=function(a,u){Ft(this),this.i=null,a=en(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Xa(a,u){Ft(a),u=en(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Qa(a,u){return Ft(a),u=en(a,u),a.g.has(u)}n.forEach=function(a,u){Ft(this),this.g.forEach(function(f,m){f.forEach(function(C){a.call(u,C,m,this)},this)},this)};function Ja(a,u){Ft(a);let f=[];if(typeof u=="string")Qa(a,u)&&(f=f.concat(a.g.get(en(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)f=f.concat(a[u]);return f}n.set=function(a,u){return Ft(this),this.i=null,a=en(this,a),Qa(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=Ja(this,a),a.length>0?String(a[0]):u):u};function Ya(a,u,f){Xa(a,u),f.length>0&&(a.i=null,a.g.set(en(a,u),I(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let m=0;m<u.length;m++){var f=u[m];const C=Fn(f);f=Ja(this,f);for(let A=0;A<f.length;A++){let V=C;f[A]!==""&&(V+="="+Fn(f[A])),a.push(V)}}return this.i=a.join("&")};function Za(a){const u=new Wn;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function en(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function af(a,u){u&&!a.j&&(Ft(a),a.i=null,a.g.forEach(function(f,m){const C=m.toLowerCase();m!=C&&(Xa(this,m),Ya(this,C,f))},a)),a.j=u}function lf(a,u){const f=new On;if(o.Image){const m=new Image;m.onload=d(ct,f,"TestLoadImage: loaded",!0,u,m),m.onerror=d(ct,f,"TestLoadImage: error",!1,u,m),m.onabort=d(ct,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=d(ct,f,"TestLoadImage: timeout",!1,u,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function cf(a,u){const f=new On,m=new AbortController,C=setTimeout(()=>{m.abort(),ct(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(A=>{clearTimeout(C),A.ok?ct(f,"TestPingServer: ok",!0,u):ct(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),ct(f,"TestPingServer: error",!1,u)})}function ct(a,u,f,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(f)}catch{}}function uf(){this.g=new qd}function wi(a){this.i=a.Sb||null,this.h=a.ab||!1}p(wi,Ra),wi.prototype.g=function(){return new Ur(this.i,this.h)};function Ur(a,u){ye.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ur,ye),n=Ur.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,zn(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,qn(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zn(this)),this.g&&(this.readyState=3,zn(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;el(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function el(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?qn(this):zn(this),this.readyState==3&&el(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,qn(this))},n.Na=function(a){this.g&&(this.response=a,qn(this))},n.ga=function(){this.g&&qn(this)};function qn(a){a.readyState=4,a.l=null,a.j=null,a.B=null,zn(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function zn(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ur.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function tl(a){let u="";return Vr(a,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function Ei(a,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=tl(f),typeof a=="string"?f!=null&&Fn(f):Z(a,u,f))}function ne(a){ye.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ne,ye);var hf=/^https?$/i,df=["POST","PUT"];n=ne.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ma.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(A){nl(this,A);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)f.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const A of m.keys())f.set(A,m.get(A));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(A=>A.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(df,u,void 0)>=0)||m||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,V]of f)this.g.setRequestHeader(A,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(A){nl(this,A)}};function nl(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,rl(a),$r(a)}function rl(a){a.A||(a.A=!0,ve(a,"complete"),ve(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ve(this,"complete"),ve(this,"abort"),$r(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$r(this,!0)),ne.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?sl(this):this.Xa())},n.Xa=function(){sl(this)};function sl(a){if(a.h&&typeof i<"u"){if(a.v&&ut(a)==4)setTimeout(a.Ca.bind(a),0);else if(ve(a,"readystatechange"),ut(a)==4){a.h=!1;try{const A=a.ca();e:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=A===0){let V=String(a.D).match(Ga)[1]||null;!V&&o.self&&o.self.location&&(V=o.self.location.protocol.slice(0,-1)),m=!hf.test(V?V.toLowerCase():"")}f=m}if(f)ve(a,"complete"),ve(a,"success");else{a.o=6;try{var C=ut(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",rl(a)}}finally{$r(a)}}}}function $r(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,u||ve(a,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ut(a){return a.g?a.g.readyState:0}n.ca=function(){try{return ut(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Wd(u)}};function il(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ff(a){const u={};a=(a.g&&ut(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(_(a[m]))continue;var f=Qd(a[m]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const A=u[C]||[];u[C]=A,A.push(f)}Fd(u,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gn(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function ol(a){this.za=0,this.i=[],this.j=new On,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Gn("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Gn("baseRetryDelayMs",5e3,a),this.Za=Gn("retryDelaySeedMs",1e4,a),this.Ta=Gn("forwardChannelMaxRetries",2,a),this.va=Gn("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ja(a&&a.concurrentRequestLimit),this.Ba=new uf,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ol.prototype,n.ka=8,n.I=1,n.connect=function(a,u,f,m){Ie(0),this.W=a,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.J=ml(this,null,this.W),Hr(this)};function Ti(a){if(al(a),a.I==3){var u=a.V++,f=$e(a.J);if(Z(f,"SID",a.M),Z(f,"RID",u),Z(f,"TYPE","terminate"),Kn(a,f),u=new at(a,a.j,u),u.M=2,u.A=Br($e(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=u.A,f=!0),f||(u.g=gl(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Fr(u)}pl(a)}function jr(a){a.g&&(Ii(a),a.g.cancel(),a.g=null)}function al(a){jr(a),a.v&&(o.clearTimeout(a.v),a.v=null),Wr(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Hr(a){if(!Ha(a.h)&&!a.m){a.m=!0;var u=a.Ea;Pe||y(),ge||(Pe(),ge=!0),T.add(u,a),a.D=0}}function pf(a,u){return Wa(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Mn(h(a.Ea,a,u),fl(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new at(this,this.j,a);let A=this.o;if(this.U&&(A?(A=wa(A),Ta(A,this.U)):A=this.U),this.u!==null||this.R||(C.J=A,A=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=cl(this,C,u),f=$e(this.J),Z(f,"RID",a),Z(f,"CVER",22),this.G&&Z(f,"X-HTTP-Session-Id",this.G),Kn(this,f),A&&(this.R?u="headers="+Fn(tl(A))+"&"+u:this.u&&Ei(f,this.u,A)),yi(this.h,C),this.Ra&&Z(f,"TYPE","init"),this.S?(Z(f,"$req",u),Z(f,"SID","null"),C.U=!0,fi(C,f,null)):fi(C,f,u),this.I=2}}else this.I==3&&(a?ll(this,a):this.i.length==0||Ha(this.h)||ll(this))};function ll(a,u){var f;u?f=u.l:f=a.V++;const m=$e(a.J);Z(m,"SID",a.M),Z(m,"RID",f),Z(m,"AID",a.K),Kn(a,m),a.u&&a.o&&Ei(m,a.u,a.o),f=new at(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),u&&(a.i=u.G.concat(a.i)),u=cl(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),yi(a.h,f),fi(f,m,u)}function Kn(a,u){a.H&&Vr(a.H,function(f,m){Z(u,m,f)}),a.l&&Vr({},function(f,m){Z(u,m,f)})}function cl(a,u,f){f=Math.min(a.i.length,f);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var C=a.i;let H=-1;for(;;){const oe=["count="+f];H==-1?f>0?(H=C[0].g,oe.push("ofs="+H)):H=0:oe.push("ofs="+H);let Y=!0;for(let ue=0;ue<f;ue++){var A=C[ue].g;const je=C[ue].map;if(A-=H,A<0)H=Math.max(0,C[ue].g-100),Y=!1;else try{A="req"+A+"_"||"";try{var V=je instanceof Map?je:Object.entries(je);for(const[Ut,ht]of V){let dt=ht;l(ht)&&(dt=li(ht)),oe.push(A+Ut+"="+encodeURIComponent(dt))}}catch(Ut){throw oe.push(A+"type="+encodeURIComponent("_badmap")),Ut}}catch{m&&m(je)}}if(Y){V=oe.join("&");break e}}V=void 0}return a=a.i.splice(0,f),u.G=a,V}function ul(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;Pe||y(),ge||(Pe(),ge=!0),T.add(u,a),a.A=0}}function vi(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Mn(h(a.Da,a),fl(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,hl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Mn(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ie(10),jr(this),hl(this))};function Ii(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function hl(a){a.g=new at(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=$e(a.na);Z(u,"RID","rpc"),Z(u,"SID",a.M),Z(u,"AID",a.K),Z(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&Z(u,"TO",a.ia),Z(u,"TYPE","xmlhttp"),Kn(a,u),a.u&&a.o&&Ei(u,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Br($e(u)),f.u=null,f.R=!0,Ba(f,a)}n.Va=function(){this.C!=null&&(this.C=null,jr(this),vi(this),Ie(19))};function Wr(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function dl(a,u){var f=null;if(a.g==u){Wr(a),Ii(a),a.g=null;var m=2}else if(gi(a.h,u))f=u.G,qa(a.h,u),m=1;else return;if(a.I!=0){if(u.o)if(m==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var C=a.D;m=Mr(),ve(m,new La(m,f)),Hr(a)}else ul(a);else if(C=u.m,C==3||C==0&&u.X>0||!(m==1&&pf(a,u)||m==2&&vi(a)))switch(f&&f.length>0&&(u=a.h,u.i=u.i.concat(f)),C){case 1:Bt(a,5);break;case 4:Bt(a,10);break;case 3:Bt(a,6);break;default:Bt(a,2)}}}function fl(a,u){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*u}function Bt(a,u){if(a.j.info("Error code "+u),u==2){var f=h(a.bb,a),m=a.Ua;const C=!m;m=new lt(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Un(m,"https"),Br(m),C?lf(m.toString(),f):cf(m.toString(),f)}else Ie(2);a.I=0,a.l&&a.l.pa(u),pl(a),al(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ie(2)):(this.j.info("Failed to ping google.com"),Ie(1))};function pl(a){if(a.I=0,a.ja=[],a.l){const u=za(a.h);(u.length!=0||a.i.length!=0)&&(S(a.ja,u),S(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function ml(a,u,f){var m=f instanceof lt?$e(f):new lt(f);if(m.g!="")u&&(m.g=u+"."+m.g),$n(m,m.u);else{var C=o.location;m=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;const A=new lt(null);m&&Un(A,m),u&&(A.g=u),C&&$n(A,C),f&&(A.h=f),m=A}return f=a.G,u=a.wa,f&&u&&Z(m,f,u),Z(m,"VER",a.ka),Kn(a,m),m}function gl(a,u,f){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new ne(new wi({ab:f})):new ne(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function yl(){}n=yl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function qr(){}qr.prototype.g=function(a,u){return new Re(a,u)};function Re(a,u){ye.call(this),this.g=new ol(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!_(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!_(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new tn(this)}p(Re,ye),Re.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Re.prototype.close=function(){Ti(this.g)},Re.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=li(a),a=f);u.i.push(new Zd(u.Ya++,a)),u.I==3&&Hr(u)},Re.prototype.N=function(){this.g.l=null,delete this.j,Ti(this.g),delete this.g,Re.Z.N.call(this)};function _l(a){ci.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(_l,ci);function wl(){ui.call(this),this.status=1}p(wl,ui);function tn(a){this.g=a}p(tn,yl),tn.prototype.ra=function(){ve(this.g,"a")},tn.prototype.qa=function(a){ve(this.g,new _l(a))},tn.prototype.pa=function(a){ve(this.g,new wl)},tn.prototype.oa=function(){ve(this.g,"b")},qr.prototype.createWebChannel=qr.prototype.g,Re.prototype.send=Re.prototype.o,Re.prototype.open=Re.prototype.m,Re.prototype.close=Re.prototype.close,_u=function(){return new qr},yu=function(){return Mr()},gu=Mt,Gi={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Or.NO_ERROR=0,Or.TIMEOUT=8,Or.HTTP_ERROR=6,Zr=Or,xa.COMPLETE="complete",mu=xa,Da.EventType=Ln,Ln.OPEN="a",Ln.CLOSE="b",Ln.ERROR="c",Ln.MESSAGE="d",ye.prototype.listen=ye.prototype.J,Yn=Da,ne.prototype.listenOnce=ne.prototype.K,ne.prototype.getLastError=ne.prototype.Ha,ne.prototype.getLastErrorCode=ne.prototype.ya,ne.prototype.getStatus=ne.prototype.ca,ne.prototype.getResponseJson=ne.prototype.La,ne.prototype.getResponseText=ne.prototype.la,ne.prototype.send=ne.prototype.ea,ne.prototype.setWithCredentials=ne.prototype.Fa,pu=ne}).apply(typeof Gr<"u"?Gr:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}we.UNAUTHENTICATED=new we(null),we.GOOGLE_CREDENTIALS=new we("google-credentials-uid"),we.FIRST_PARTY=new we("first-party-uid"),we.MOCK_USER=new we("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bn="12.8.0";function tm(n){bn=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new To("@firebase/firestore");function rn(){return zt.logLevel}function L(n,...e){if(zt.logLevel<=W.DEBUG){const t=e.map(Co);zt.debug(`Firestore (${bn}): ${n}`,...t)}}function nt(n,...e){if(zt.logLevel<=W.ERROR){const t=e.map(Co);zt.error(`Firestore (${bn}): ${n}`,...t)}}function gn(n,...e){if(zt.logLevel<=W.WARN){const t=e.map(Co);zt.warn(`Firestore (${bn}): ${n}`,...t)}}function Co(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,wu(n,r,t)}function wu(n,e,t){let r=`FIRESTORE (${bn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw nt(r),new Error(r)}function J(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||wu(e,s,r)}function j(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends ot{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(we.UNAUTHENTICATED))}shutdown(){}}class rm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class sm{constructor(e){this.t=e,this.currentUser=we.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Ze;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ze,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ze)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string",31837,{l:r}),new Eu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string",2055,{h:e}),new we(e)}}class im{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=we.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class om{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new im(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(we.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class am{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Le(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){J(this.o===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Vl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Vl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=lm(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function q(n,e){return n<e?-1:n>e?1:0}function Ki(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Di(s)===Di(i)?q(s,i):Di(s)?1:-1}return q(n.length,e.length)}const cm=55296,um=57343;function Di(n){const e=n.charCodeAt(0);return e>=cm&&e<=um}function yn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="__name__";class He{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&F(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return He.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof He?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=He.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return q(e.length,t.length)}static compareSegments(e,t){const r=He.isNumericId(e),s=He.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?He.extractNumericId(e).compare(He.extractNumericId(t)):Ki(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vt.fromString(e.substring(4,e.length-2))}}class ee extends He{construct(e,t,r){return new ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ee(t)}static emptyPath(){return new ee([])}}const hm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends He{construct(e,t,r){return new pe(e,t,r)}static isValidIdentifier(e){return hm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ll}static keyField(){return new pe([Ll])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new x(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new x(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new x(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(t)}static emptyPath(){return new pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ee.fromString(e))}static fromName(e){return new M(ee.fromString(e).popFirst(5))}static empty(){return new M(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ee(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(n,e,t){if(!t)throw new x(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function dm(n,e,t,r){if(e===!0&&r===!0)throw new x(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function xl(n){if(!M.isDocumentKey(n))throw new x(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ml(n){if(M.isDocumentKey(n))throw new x(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function vu(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function bo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function rt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bo(n);throw new x(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(n,e){const t={typeString:n};return e&&(t.value=e),t}function vr(n,e){if(!vu(n))throw new x(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new x(k.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=-62135596800,Fl=1e6;class K{static now(){return K.fromMillis(Date.now())}static fromDate(e){return K.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Fl);return new K(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ol)throw new x(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fl}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:K._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vr(e,K._jsonSchema))return new K(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ol;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}K._jsonSchemaVersion="firestore/timestamp/1.0",K._jsonSchema={type:ie("string",K._jsonSchemaVersion),seconds:ie("number"),nanoseconds:ie("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${static fromTimestamp(e){return new $(e)}static min(){return new $(new K(0,0))}static max(){return new $(new K(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=-1;function fm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=$.fromTimestamp(r===1e9?new K(t+1,0):new K(t,r));return new Ct(s,M.empty(),e)}function pm(n){return new Ct(n.readTime,n.key,cr)}class Ct{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ct($.min(),M.empty(),cr)}static max(){return new Ct($.max(),M.empty(),cr)}}function mm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ym{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==gm)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(s=>s?D.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new D((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,t){return new D((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function _m(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Pn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ns.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=-1;function Vs(n){return n==null}function ds(n){return n===0&&1/n==-1/0}function wm(n){return typeof n=="number"&&Number.isInteger(n)&&!ds(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="";function Em(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Bl(e)),e=Tm(n.get(t),e);return Bl(e)}function Tm(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Iu:t+="";break;default:t+=i}}return t}function Bl(n){return n+Iu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Dt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Cu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t){this.comparator=e,this.root=t||fe.EMPTY}insert(e,t){return new te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,fe.BLACK,null,null))}remove(e){return new te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Kr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Kr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Kr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Kr(this.root,e,this.comparator,!0)}}class Kr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class fe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??fe.RED,this.left=s??fe.EMPTY,this.right=i??fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new fe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return fe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}}fe.EMPTY=null,fe.RED=!0,fe.BLACK=!1;fe.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new fe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.comparator=e,this.data=new te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new $l(this.data.getIterator())}getIteratorFrom(e){return new $l(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class $l{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.fields=e,e.sort(pe.comparator)}static empty(){return new Ne([])}unionWith(e){let t=new ce(pe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ne(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return yn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Su("Invalid base64 string: "+i):i}}(e);return new me(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const vm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function St(n){if(J(!!n,39018),typeof n=="string"){let e=0;const t=vm.exec(n);if(J(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:re(n.seconds),nanos:re(n.nanos)}}function re(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function bt(n){return typeof n=="string"?me.fromBase64String(n):me.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="server_timestamp",Au="__type__",Pu="__previous_value__",Ru="__local_write_time__";function Po(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Au])==null?void 0:r.stringValue)===bu}function Ls(n){const e=n.mapValue.fields[Pu];return Po(e)?Ls(e):e}function ur(n){const e=St(n.mapValue.fields[Ru].timestampValue);return new K(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t,r,s,i,o,l,c,h,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=d,this.apiKey=p}}const fs="(default)";class hr{constructor(e,t){this.projectId=e,this.database=t||fs}static empty(){return new hr("","")}get isDefaultDatabase(){return this.database===fs}isEqual(e){return e instanceof hr&&e.projectId===this.projectId&&e.database===this.database}}function Cm(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new x(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hr(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="__type__",Sm="__max__",Xr={mapValue:{}},ku="__vector__",ps="value";function At(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Po(n)?4:Am(n)?9007199254740991:bm(n)?10:11:F(28295,{value:n})}function Xe(n,e){if(n===e)return!0;const t=At(n);if(t!==At(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ur(n).isEqual(ur(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=St(s.timestampValue),l=St(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return bt(s.bytesValue).isEqual(bt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return re(s.geoPointValue.latitude)===re(i.geoPointValue.latitude)&&re(s.geoPointValue.longitude)===re(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return re(s.integerValue)===re(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=re(s.doubleValue),l=re(i.doubleValue);return o===l?ds(o)===ds(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return yn(n.arrayValue.values||[],e.arrayValue.values||[],Xe);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ul(o)!==Ul(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Xe(o[c],l[c])))return!1;return!0}(n,e);default:return F(52216,{left:n})}}function dr(n,e){return(n.values||[]).find(t=>Xe(t,e))!==void 0}function _n(n,e){if(n===e)return 0;const t=At(n),r=At(e);if(t!==r)return q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,e.booleanValue);case 2:return function(i,o){const l=re(i.integerValue||i.doubleValue),c=re(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return jl(n.timestampValue,e.timestampValue);case 4:return jl(ur(n),ur(e));case 5:return Ki(n.stringValue,e.stringValue);case 6:return function(i,o){const l=bt(i),c=bt(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=q(l[h],c[h]);if(d!==0)return d}return q(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const l=q(re(i.latitude),re(o.latitude));return l!==0?l:q(re(i.longitude),re(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Hl(n.arrayValue,e.arrayValue);case 10:return function(i,o){var g,I,S,R;const l=i.fields||{},c=o.fields||{},h=(g=l[ps])==null?void 0:g.arrayValue,d=(I=c[ps])==null?void 0:I.arrayValue,p=q(((S=h==null?void 0:h.values)==null?void 0:S.length)||0,((R=d==null?void 0:d.values)==null?void 0:R.length)||0);return p!==0?p:Hl(h,d)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Xr.mapValue&&o===Xr.mapValue)return 0;if(i===Xr.mapValue)return 1;if(o===Xr.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=Ki(c[p],d[p]);if(g!==0)return g;const I=_n(l[c[p]],h[d[p]]);if(I!==0)return I}return q(c.length,d.length)}(n.mapValue,e.mapValue);default:throw F(23264,{he:t})}}function jl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return q(n,e);const t=St(n),r=St(e),s=q(t.seconds,r.seconds);return s!==0?s:q(t.nanos,r.nanos)}function Hl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=_n(t[s],r[s]);if(i)return i}return q(t.length,r.length)}function wn(n){return Xi(n)}function Xi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=St(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return bt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Xi(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Xi(t.fields[o])}`;return s+"}"}(n.mapValue):F(61005,{value:n})}function es(n){switch(At(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ls(n);return e?16+es(e):16;case 5:return 2*n.stringValue.length;case 6:return bt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+es(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Dt(r.fields,(i,o)=>{s+=i.length+es(o)}),s}(n.mapValue);default:throw F(13486,{value:n})}}function Qi(n){return!!n&&"integerValue"in n}function Ro(n){return!!n&&"arrayValue"in n}function Wl(n){return!!n&&"nullValue"in n}function ql(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ts(n){return!!n&&"mapValue"in n}function bm(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Du])==null?void 0:r.stringValue)===ku}function rr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Dt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=rr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=rr(n.arrayValue.values[t]);return e}return{...n}}function Am(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Sm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.value=e}static empty(){return new Ae({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ts(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rr(t)}setAll(e){let t=pe.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}o?r[l.lastSegment()]=rr(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ts(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ts(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Dt(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ae(rr(this.value))}}function Nu(n){const e=[];return Dt(n.fields,(t,r)=>{const s=new pe([t]);if(ts(r)){const i=Nu(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ne(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t,r,s,i,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ee(e,0,$.min(),$.min(),$.min(),Ae.empty(),0)}static newFoundDocument(e,t,r,s){return new Ee(e,1,t,$.min(),r,s,0)}static newNoDocument(e,t){return new Ee(e,2,t,$.min(),$.min(),Ae.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,$.min(),$.min(),Ae.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ae.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t){this.position=e,this.inclusive=t}}function zl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),t.key):r=_n(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Xe(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Pm(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{}class ae extends Vu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Dm(e,t,r):t==="array-contains"?new Vm(e,r):t==="in"?new Lm(e,r):t==="not-in"?new xm(e,r):t==="array-contains-any"?new Mm(e,r):new ae(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new km(e,r):new Nm(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(_n(t,this.value)):t!==null&&At(this.value)===At(t)&&this.matchesComparison(_n(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qe extends Vu{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Qe(e,t)}matches(e){return Lu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Lu(n){return n.op==="and"}function xu(n){return Rm(n)&&Lu(n)}function Rm(n){for(const e of n.filters)if(e instanceof Qe)return!1;return!0}function Ji(n){if(n instanceof ae)return n.field.canonicalString()+n.op.toString()+wn(n.value);if(xu(n))return n.filters.map(e=>Ji(e)).join(",");{const e=n.filters.map(t=>Ji(t)).join(",");return`${n.op}(${e})`}}function Mu(n,e){return n instanceof ae?function(r,s){return s instanceof ae&&r.op===s.op&&r.field.isEqual(s.field)&&Xe(r.value,s.value)}(n,e):n instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Mu(o,s.filters[l]),!0):!1}(n,e):void F(19439)}function Ou(n){return n instanceof ae?function(t){return`${t.field.canonicalString()} ${t.op} ${wn(t.value)}`}(n):n instanceof Qe?function(t){return t.op.toString()+" {"+t.getFilters().map(Ou).join(" ,")+"}"}(n):"Filter"}class Dm extends ae{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class km extends ae{constructor(e,t){super(e,"in",t),this.keys=Fu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Nm extends ae{constructor(e,t){super(e,"not-in",t),this.keys=Fu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Fu(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class Vm extends ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ro(t)&&dr(t.arrayValue,this.value)}}class Lm extends ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&dr(this.value.arrayValue,t)}}class xm extends ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!dr(this.value.arrayValue,t)}}class Mm extends ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ro(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>dr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,t=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Kl(n,e=null,t=[],r=[],s=null,i=null,o=null){return new Om(n,e,t,r,s,i,o)}function Do(n){const e=j(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ji(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Vs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>wn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>wn(r)).join(",")),e.Te=t}return e.Te}function ko(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Pm(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Mu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Gl(n.startAt,e.startAt)&&Gl(n.endAt,e.endAt)}function Yi(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Fm(n,e,t,r,s,i,o,l){return new xs(n,e,t,r,s,i,o,l)}function No(n){return new xs(n)}function Xl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Bm(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Um(n){return n.collectionGroup!==null}function sr(n){const e=j(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ce(pe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new gs(i,r))}),t.has(pe.keyField().canonicalString())||e.Ie.push(new gs(pe.keyField(),r))}return e.Ie}function We(n){const e=j(n);return e.Ee||(e.Ee=$m(e,sr(n))),e.Ee}function $m(n,e){if(n.limitType==="F")return Kl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new gs(s.field,i)});const t=n.endAt?new ms(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ms(n.startAt.position,n.startAt.inclusive):null;return Kl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Zi(n,e,t){return new xs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ms(n,e){return ko(We(n),We(e))&&n.limitType===e.limitType}function Bu(n){return`${Do(We(n))}|lt:${n.limitType}`}function sn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Ou(s)).join(", ")}]`),Vs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>wn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>wn(s)).join(",")),`Target(${r})`}(We(n))}; limitType=${n.limitType})`}function Os(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):M.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of sr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=zl(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,sr(r),s)||r.endAt&&!function(o,l,c){const h=zl(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,sr(r),s))}(n,e)}function jm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Uu(n){return(e,t)=>{let r=!1;for(const s of sr(n)){const i=Hm(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Hm(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?_n(c,h):F(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Dt(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Cu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=new te(M.comparator);function st(){return Wm}const $u=new te(M.comparator);function Zn(...n){let e=$u;for(const t of n)e=e.insert(t.key,t);return e}function ju(n){let e=$u;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function jt(){return ir()}function Hu(){return ir()}function ir(){return new Qt(n=>n.toString(),(n,e)=>n.isEqual(e))}const qm=new te(M.comparator),zm=new ce(M.comparator);function z(...n){let e=zm;for(const t of n)e=e.add(t);return e}const Gm=new ce(q);function Km(){return Gm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ds(e)?"-0":e}}function Wu(n){return{integerValue:""+n}}function Xm(n,e){return wm(e)?Wu(e):Vo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this._=void 0}}function Qm(n,e,t){return n instanceof ys?function(s,i){const o={fields:{[Au]:{stringValue:bu},[Ru]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Po(i)&&(i=Ls(i)),i&&(o.fields[Pu]=i),{mapValue:o}}(t,e):n instanceof fr?zu(n,e):n instanceof pr?Gu(n,e):function(s,i){const o=qu(s,i),l=Ql(o)+Ql(s.Ae);return Qi(o)&&Qi(s.Ae)?Wu(l):Vo(s.serializer,l)}(n,e)}function Jm(n,e,t){return n instanceof fr?zu(n,e):n instanceof pr?Gu(n,e):t}function qu(n,e){return n instanceof _s?function(r){return Qi(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ys extends Fs{}class fr extends Fs{constructor(e){super(),this.elements=e}}function zu(n,e){const t=Ku(e);for(const r of n.elements)t.some(s=>Xe(s,r))||t.push(r);return{arrayValue:{values:t}}}class pr extends Fs{constructor(e){super(),this.elements=e}}function Gu(n,e){let t=Ku(e);for(const r of n.elements)t=t.filter(s=>!Xe(s,r));return{arrayValue:{values:t}}}class _s extends Fs{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ql(n){return re(n.integerValue||n.doubleValue)}function Ku(n){return Ro(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Ym(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof fr&&s instanceof fr||r instanceof pr&&s instanceof pr?yn(r.elements,s.elements,Xe):r instanceof _s&&s instanceof _s?Xe(r.Ae,s.Ae):r instanceof ys&&s instanceof ys}(n.transform,e.transform)}class Zm{constructor(e,t){this.version=e,this.transformResults=t}}class Ve{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ve}static exists(e){return new Ve(void 0,e)}static updateTime(e){return new Ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ns(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bs{}function Xu(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Us(n.key,Ve.none()):new Ir(n.key,n.data,Ve.none());{const t=n.data,r=Ae.empty();let s=new ce(pe.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new kt(n.key,r,new Ne(s.toArray()),Ve.none())}}function eg(n,e,t){n instanceof Ir?function(s,i,o){const l=s.value.clone(),c=Yl(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof kt?function(s,i,o){if(!ns(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Yl(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Qu(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function or(n,e,t,r){return n instanceof Ir?function(i,o,l,c){if(!ns(i.precondition,o))return l;const h=i.value.clone(),d=Zl(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof kt?function(i,o,l,c){if(!ns(i.precondition,o))return l;const h=Zl(i.fieldTransforms,c,o),d=o.data;return d.setAll(Qu(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,l){return ns(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function tg(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=qu(r.transform,s||null);i!=null&&(t===null&&(t=Ae.empty()),t.set(r.field,i))}return t||null}function Jl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&yn(r,s,(i,o)=>Ym(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ir extends Bs{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class kt extends Bs{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Yl(n,e,t){const r=new Map;J(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Jm(o,l,t[s]))}return r}function Zl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,Qm(i,o,e))}return r}class Us extends Bs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ng extends Bs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&eg(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=or(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=or(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Hu();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const c=Xu(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),z())}isEqual(e){return this.batchId===e.batchId&&yn(this.mutations,e.mutations,(t,r)=>Jl(t,r))&&yn(this.baseMutations,e.baseMutations,(t,r)=>Jl(t,r))}}class Lo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){J(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return qm}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Lo(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se,G;function og(n){switch(n){case k.OK:return F(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function Ju(n){if(n===void 0)return nt("GRPC error has no .code"),k.UNKNOWN;switch(n){case se.OK:return k.OK;case se.CANCELLED:return k.CANCELLED;case se.UNKNOWN:return k.UNKNOWN;case se.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case se.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case se.INTERNAL:return k.INTERNAL;case se.UNAVAILABLE:return k.UNAVAILABLE;case se.UNAUTHENTICATED:return k.UNAUTHENTICATED;case se.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case se.NOT_FOUND:return k.NOT_FOUND;case se.ALREADY_EXISTS:return k.ALREADY_EXISTS;case se.PERMISSION_DENIED:return k.PERMISSION_DENIED;case se.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case se.ABORTED:return k.ABORTED;case se.OUT_OF_RANGE:return k.OUT_OF_RANGE;case se.UNIMPLEMENTED:return k.UNIMPLEMENTED;case se.DATA_LOSS:return k.DATA_LOSS;default:return F(39323,{code:n})}}(G=se||(se={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=new vt([4294967295,4294967295],0);function ec(n){const e=ag().encode(n),t=new fu;return t.update(e),new Uint8Array(t.digest())}function tc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new vt([t,r],0),new vt([s,i],0)]}class xo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new er(`Invalid padding: ${t}`);if(r<0)throw new er(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new er(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new er(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=vt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(vt.fromNumber(r)));return s.compare(lg)===1&&(s=new vt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=ec(e),[r,s]=tc(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new xo(i,s,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const t=ec(e),[r,s]=tc(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class er extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Cr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new $s($.min(),s,new te(q),st(),z())}}class Cr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Cr(r,t,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Yu{constructor(e,t){this.targetId=e,this.Ce=t}}class Zu{constructor(e,t,r=me.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class nc{constructor(){this.ve=0,this.Fe=rc(),this.Me=me.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=z(),t=z(),r=z();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:F(38017,{changeType:i})}}),new Cr(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=rc()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,J(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class cg{constructor(e){this.Ge=e,this.ze=new Map,this.je=st(),this.He=Qr(),this.Je=Qr(),this.Ze=new te(q)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:F(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Yi(i))if(r===0){const o=new M(i.path);this.et(t,o,Ee.newNoDocument(o,$.min()))}else J(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=bt(r).toUint8Array()}catch(c){if(c instanceof Su)return gn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new xo(o,s,i)}catch(c){return gn(c instanceof er?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Yi(l.target)){const c=new M(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Ee.newNoDocument(c,e))}i.Be&&(t.set(o,i.ke()),i.Ke())}});let r=z();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.ot(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new $s(e,t,this.Ze,this.je,r);return this.je=st(),this.He=Qr(),this.Je=Qr(),this.Ze=new te(q),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new nc,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new ce(q),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new ce(q),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new nc),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Qr(){return new te(M.comparator)}function rc(){return new te(M.comparator)}const ug={asc:"ASCENDING",desc:"DESCENDING"},hg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dg={and:"AND",or:"OR"};class fg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function eo(n,e){return n.useProto3Json||Vs(e)?e:{value:e}}function ws(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function pg(n,e){return ws(n,e.toTimestamp())}function qe(n){return J(!!n,49232),$.fromTimestamp(function(t){const r=St(t);return new K(r.seconds,r.nanos)}(n))}function Mo(n,e){return to(n,e).canonicalString()}function to(n,e){const t=function(s){return new ee(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function th(n){const e=ee.fromString(n);return J(oh(e),10190,{key:e.toString()}),e}function no(n,e){return Mo(n.databaseId,e.path)}function ki(n,e){const t=th(e);if(t.get(1)!==n.databaseId.projectId)throw new x(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new x(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(rh(t))}function nh(n,e){return Mo(n.databaseId,e)}function mg(n){const e=th(n);return e.length===4?ee.emptyPath():rh(e)}function ro(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function rh(n){return J(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function sc(n,e,t){return{name:no(n,e),fields:t.value.mapValue.fields}}function gg(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(J(d===void 0||typeof d=="string",58123),me.fromBase64String(d||"")):(J(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),me.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?k.UNKNOWN:Ju(h.code);return new x(d,h.message||"")}(o);t=new Zu(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ki(n,r.document.name),i=qe(r.document.updateTime),o=r.document.createTime?qe(r.document.createTime):$.min(),l=new Ae({mapValue:{fields:r.document.fields}}),c=Ee.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];t=new rs(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ki(n,r.document),i=r.readTime?qe(r.readTime):$.min(),o=Ee.newNoDocument(s,i),l=r.removedTargetIds||[];t=new rs([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ki(n,r.document),i=r.removedTargetIds||[];t=new rs([],i,s,null)}else{if(!("filter"in e))return F(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ig(s,i),l=r.targetId;t=new Yu(l,o)}}return t}function yg(n,e){let t;if(e instanceof Ir)t={update:sc(n,e.key,e.value)};else if(e instanceof Us)t={delete:no(n,e.key)};else if(e instanceof kt)t={update:sc(n,e.key,e.data),updateMask:bg(e.fieldMask)};else{if(!(e instanceof ng))return F(16599,{dt:e.type});t={verify:no(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ys)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof pr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof _s)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw F(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:pg(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F(27497)}(n,e.precondition)),t}function _g(n,e){return n&&n.length>0?(J(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?qe(s.updateTime):qe(i);return o.isEqual($.min())&&(o=qe(i)),new Zm(o,s.transformResults||[])}(t,e))):[]}function wg(n,e){return{documents:[nh(n,e.path)]}}function Eg(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=nh(n,s);const i=function(h){if(h.length!==0)return ih(Qe.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:on(g.field),direction:Ig(g.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=eo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function Tg(n){let e=mg(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){J(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(p){const g=sh(p);return g instanceof Qe&&xu(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(g=>function(S){return new gs(an(S.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(t.orderBy));let l=null;t.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Vs(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(p){const g=!!p.before,I=p.values||[];return new ms(I,g)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const g=!p.before,I=p.values||[];return new ms(I,g)}(t.endAt)),Fm(e,s,o,i,l,"F",c,h)}function vg(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=an(t.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=an(t.unaryFilter.field);return ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=an(t.unaryFilter.field);return ae.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=an(t.unaryFilter.field);return ae.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(n):n.fieldFilter!==void 0?function(t){return ae.create(an(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Qe.create(t.compositeFilter.filters.map(r=>sh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(t.compositeFilter.op))}(n):F(30097,{filter:n})}function Ig(n){return ug[n]}function Cg(n){return hg[n]}function Sg(n){return dg[n]}function on(n){return{fieldPath:n.canonicalString()}}function an(n){return pe.fromServerFormat(n.fieldPath)}function ih(n){return n instanceof ae?function(t){if(t.op==="=="){if(ql(t.value))return{unaryFilter:{field:on(t.field),op:"IS_NAN"}};if(Wl(t.value))return{unaryFilter:{field:on(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ql(t.value))return{unaryFilter:{field:on(t.field),op:"IS_NOT_NAN"}};if(Wl(t.value))return{unaryFilter:{field:on(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:on(t.field),op:Cg(t.op),value:t.value}}}(n):n instanceof Qe?function(t){const r=t.getFilters().map(s=>ih(s));return r.length===1?r[0]:{compositeFilter:{op:Sg(t.op),filters:r}}}(n):F(54877,{filter:n})}function bg(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function oh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function ah(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t,r,s,i=$.min(),o=$.min(),l=me.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new _t(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _t(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e){this.yt=e}}function Pg(n){const e=Tg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.Sn=new Dg}addToCollectionParentIndex(e,t){return this.Sn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Ct.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Ct.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Dg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ce(ee.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ce(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lh=41943040;class be{static withCacheSize(e){return new be(e,be.DEFAULT_COLLECTION_PERCENTILE,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */be.DEFAULT_COLLECTION_PERCENTILE=10,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,be.DEFAULT=new be(lh,be.DEFAULT_COLLECTION_PERCENTILE,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),be.DISABLED=new be(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new En(0)}static ar(){return new En(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="LruGarbageCollector",kg=1048576;function ac([n,e],[t,r]){const s=q(n,t);return s===0?q(e,r):s}class Ng{constructor(e){this.Pr=e,this.buffer=new ce(ac),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ac(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Vg{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){L(oc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Pn(t)?L(oc,"Ignoring IndexedDB error during garbage collection: ",t):await An(t)}await this.Ar(3e5)})}}class Lg{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return D.resolve(Ns.ce);const r=new Ng(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(ic)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ic):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,o,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),rn()<=W.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function xg(n,e){return new Lg(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.changes=new Qt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&or(r.mutation,s,Ne.empty(),K.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=z()){const s=jt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Zn();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=jt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,z()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,s){let i=st();const o=ir(),l=function(){return ir()}();return t.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof kt)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),or(d.mutation,h,d.mutation.getFieldMask(),K.now())):o.set(h.key,Ne.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),t.forEach((h,d)=>l.set(h,new Og(d,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,t){const r=ir();let s=new te((o,l)=>o-l),i=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let d=r.get(c)||Ne.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||z()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Hu();d.forEach(g=>{if(!i.has(g)){const I=Xu(t.get(g),r.get(g));I!==null&&p.set(g,I),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return Bm(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Um(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve(jt());let l=cr,c=i;return o.next(h=>D.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?D.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,z())).next(d=>({batchId:l,changes:ju(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(r=>{let s=Zn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Zn();return this.indexManager.getCollectionParents(e,i).next(l=>D.forEach(l,c=>{const h=function(p,g){return new xs(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,Ee.newInvalidDocument(d)))});let l=Zn();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&or(d.mutation,h,Ne.empty(),K.now()),Os(t,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return D.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:qe(s.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:Pg(s.bundledQuery),readTime:qe(s.readTime)}}(t)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.overlays=new te(M.comparator),this.Lr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=jt();return D.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.bt(e,t,i)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=jt(),i=t.length+1,o=new M(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new te((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=jt(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=jt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return D.resolve(l)}bt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new sg(t,r));let i=this.Lr.get(t);i===void 0&&(i=z(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.sessionToken=me.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.kr=new ce(he.Kr),this.qr=new ce(he.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new he(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new he(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new M(new ee([])),r=new he(t,e),s=new he(t,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new M(new ee([])),r=new he(t,e),s=new he(t,e+1);let i=z();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new he(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class he{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return M.comparator(e.key,t.key)||q(e.Hr,t.Hr)}static Ur(e,t){return q(e.Hr,t.Hr)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new ce(he.Kr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rg(i,t,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new he(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Ao:this.Yn-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new he(t,0),s=new he(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(q);return t.forEach(s=>{const i=new he(s,0),o=new he(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),D.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;M.isDocumentKey(i)||(i=i.child(""));const o=new he(new M(i),0);let l=new ce(q);return this.Jr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Hr)),!0)},o),D.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){J(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return D.forEach(t.mutations,s=>{const i=new he(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,t){const r=new he(t,0),s=this.Jr.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.ti=e,this.docs=function(){return new te(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let r=st();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ee.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=st();const o=t.path,l=new M(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||mm(pm(d),r)<=0||(s.has(d.key)||Os(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){F(9500)}ni(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Wg(this)}getSize(e){return D.resolve(this.size)}}class Wg extends Mg{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.persistence=e,this.ri=new Qt(t=>Do(t),ko),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.ii=0,this.si=new Oo,this.targetCount=0,this.oi=En._r()}forEachTarget(e,t){return this.ri.forEach((r,s)=>t(s)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),D.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new En(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.lr(t),D.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),D.waitFor(i).next(()=>s)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,t){this._i={},this.overlays={},this.ai=new Ns(0),this.ui=!1,this.ui=!0,this.ci=new $g,this.referenceDelegate=e(this),this.li=new qg(this),this.indexManager=new Rg,this.remoteDocumentCache=function(s){return new Hg(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Ag(t),this.Pi=new Bg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ug,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new jg(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){L("MemoryPersistence","Starting transaction:",e);const s=new zg(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return D.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class zg extends ym{constructor(e){super(),this.currentSequenceNumber=e}}class Fo{constructor(e){this.persistence=e,this.Ri=new Oo,this.Ai=null}static Vi(e){return new Fo(e)}get di(){if(this.Ai)return this.Ai;throw F(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.di,r=>{const s=M.fromPath(r);return this.mi(e,s).next(i=>{i||t.removeEntry(s,$.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return D.or([()=>D.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Es{constructor(e,t){this.persistence=e,this.fi=new Qt(r=>Em(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=xg(this,t)}static Vi(e,t){return new Es(e,t)}Ti(){}Ii(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return D.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?D.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,t).next(l=>{l||(r++,i.removeEntry(o,$.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),D.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=es(e.data.value)),t}wr(e,t,r){return D.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=z(),s=z();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Bo(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Of()?8:_m(Te())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Gg;return this.ys(e,t,o).next(l=>{if(i.result=l,this.As)return this.ws(e,t,o,l.size)})}).next(()=>i.result)}ws(e,t,r,s){return r.documentReadCount<this.Vs?(rn()<=W.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",sn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(rn()<=W.DEBUG&&L("QueryEngine","Query:",sn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(rn()<=W.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",sn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,We(t))):D.resolve())}gs(e,t){if(Xl(t))return D.resolve(null);let r=We(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Zi(t,null,"F"),r=We(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=z(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.bs(t,l);return this.Ss(t,h,o,c.readTime)?this.gs(e,Zi(t,null,"F")):this.Ds(e,h,t,c)}))})))}ps(e,t,r,s){return Xl(t)||s.isEqual($.min())?D.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(t,i);return this.Ss(t,o,r,s)?D.resolve(null):(rn()<=W.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),sn(t)),this.Ds(e,o,t,fm(s,cr)).next(l=>l))})}bs(e,t){let r=new ce(Uu(e));return t.forEach((s,i)=>{Os(e,i)&&(r=r.add(i))}),r}Ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return rn()<=W.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",sn(t)),this.fs.getDocumentsMatchingQuery(e,t,Ct.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo="LocalStore",Xg=3e8;class Qg{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new te(q),this.Fs=new Qt(i=>Do(i),ko),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Fg(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function Jg(n,e,t,r){return new Qg(n,e,t,r)}async function uh(n,e){const t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=z();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function Yg(n,e){const t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,g=p.keys();let I=D.resolve();return g.forEach(S=>{I=I.next(()=>d.getEntry(c,S)).next(R=>{const N=h.docVersions.get(S);J(N!==null,48541),R.version.compareTo(N)<0&&(p.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),d.addEntry(R)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=z();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function hh(n){const e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function Zg(n,e){const t=j(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const l=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;l.push(t.li.removeMatchingKeys(i,d.removedDocuments,p).next(()=>t.li.addMatchingKeys(i,d.addedDocuments,p)));let I=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(me.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),s=s.insert(p,I),function(R,N,B){return R.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=Xg?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(g,I,d)&&l.push(t.li.updateTargetData(i,I))});let c=st(),h=z();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(ey(i,o,e.documentUpdates).next(d=>{c=d.Bs,h=d.Ls})),!r.isEqual($.min())){const d=t.li.getLastRemoteSnapshotVersion(i).next(p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return D.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.vs=s,i))}function ey(n,e,t){let r=z(),s=z();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=st();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual($.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):L(Uo,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Bs:o,Ls:s}})}function ty(n,e){const t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ao),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ny(n,e){const t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.li.getTargetData(r,e).next(i=>i?(s=i,D.resolve(s)):t.li.allocateTargetId(r).next(o=>(s=new _t(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}async function so(n,e,t){const r=j(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Pn(o))throw o;L(Uo,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function lc(n,e,t){const r=j(n);let s=$.min(),i=z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=j(c),g=p.Fs.get(d);return g!==void 0?D.resolve(p.vs.get(g)):p.li.getTargetData(h,d)}(r,o,We(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,t?s:$.min(),t?i:z())).next(l=>(ry(r,jm(e),l),{documents:l,ks:i})))}function ry(n,e,t){let r=n.Ms.get(e)||$.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ms.set(e,r)}class cc{constructor(){this.activeTargetIds=Km()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sy{constructor(){this.vo=new cc,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new cc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="ConnectivityMonitor";class hc{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){L(uc,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){L(uc,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jr=null;function io(){return Jr===null?Jr=function(){return 268435456+Math.round(2147483648*Math.random())}():Jr++,"0x"+Jr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="RestConnection",oy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class ay{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===fs?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const o=io(),l=this.Qo(e,t.toUriEncodedString());L(Ni,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,s,i);const{host:h}=new URL(l),d=Cn(h);return this.zo(e,l,c,r,d).then(p=>(L(Ni,`Received RPC '${e}' ${o}: `,p),p),p=>{throw gn(Ni,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,t,r,s,i,o){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,t){const r=oy[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="WebChannelConnection",Xn=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class cn extends ay{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!cn.c_){const e=yu();Xn(e,gu.STAT_EVENT,t=>{t.stat===Gi.PROXY?L(_e,"STAT_EVENT: detected buffering proxy"):t.stat===Gi.NOPROXY&&L(_e,"STAT_EVENT: detected no buffering proxy")}),cn.c_=!0}}zo(e,t,r,s,i){const o=io();return new Promise((l,c)=>{const h=new pu;h.setWithCredentials(!0),h.listenOnce(mu.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Zr.NO_ERROR:const p=h.getResponseJson();L(_e,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Zr.TIMEOUT:L(_e,`RPC '${e}' ${o} timed out`),c(new x(k.DEADLINE_EXCEEDED,"Request time out"));break;case Zr.HTTP_ERROR:const g=h.getStatus();if(L(_e,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const S=I==null?void 0:I.error;if(S&&S.status&&S.message){const R=function(B){const U=B.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(U)>=0?U:k.UNKNOWN}(S.status);c(new x(R,S.message))}else c(new x(k.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new x(k.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{L(_e,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);L(_e,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",d,r,15)})}T_(e,t,r){const s=io(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=i.join("");L(_e,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);this.I_(d);let p=!1,g=!1;const I=new ly({Ho:S=>{g?L(_e,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(p||(L(_e,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),L(_e,`RPC '${e}' stream ${s} sending:`,S),d.send(S))},Jo:()=>d.close()});return Xn(d,Yn.EventType.OPEN,()=>{g||(L(_e,`RPC '${e}' stream ${s} transport opened.`),I.i_())}),Xn(d,Yn.EventType.CLOSE,()=>{g||(g=!0,L(_e,`RPC '${e}' stream ${s} transport closed`),I.o_(),this.E_(d))}),Xn(d,Yn.EventType.ERROR,S=>{g||(g=!0,gn(_e,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),I.o_(new x(k.UNAVAILABLE,"The operation could not be completed")))}),Xn(d,Yn.EventType.MESSAGE,S=>{var R;if(!g){const N=S.data[0];J(!!N,16349);const B=N,U=(B==null?void 0:B.error)||((R=B[0])==null?void 0:R.error);if(U){L(_e,`RPC '${e}' stream ${s} received error:`,U);const X=U.status;let Ce=function(T){const y=se[T];if(y!==void 0)return Ju(y)}(X),Pe=U.message;Ce===void 0&&(Ce=k.INTERNAL,Pe="Unknown error status: "+X+" with message "+U.message),g=!0,I.o_(new x(Ce,Pe)),d.close()}else L(_e,`RPC '${e}' stream ${s} received:`,N),I.__(N)}}),cn.u_(),setTimeout(()=>{I.s_()},0),I}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return _u()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(n){return new cn(n)}function Vi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(n){return new fg(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn.c_=!1;class dh{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="PersistentStream";class fh{constructor(e,t,r,s,i,o,l,c){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new dh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(nt(t.toString()),nt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new x(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return L(dc,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(L(dc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uy extends fh{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=gg(this.serializer,e),r=function(i){if(!("targetChange"in i))return $.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?$.min():o.readTime?qe(o.readTime):$.min()}(e);return this.listener.J_(t,r)}Z_(e){const t={};t.database=ro(this.serializer),t.addTarget=function(i,o){let l;const c=o.target;if(l=Yi(c)?{documents:wg(i,c)}:{query:Eg(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=eh(i,o.resumeToken);const h=eo(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo($.min())>0){l.readTime=ws(i,o.snapshotVersion.toTimestamp());const h=eo(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=vg(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=ro(this.serializer),t.removeTarget=e,this.K_(t)}}class hy extends fh{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return J(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){J(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=_g(e.writeResults,e.commitTime),r=qe(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=ro(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>yg(this.serializer,r))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{}class fy extends dy{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new x(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,to(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(k.UNKNOWN,i.toString())})}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,to(t,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(k.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function py(n,e,t,r){return new fy(n,e,t,r)}class my{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(nt(t),this.aa=!1):L("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="RemoteStore";class gy{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Jt(this)&&(L(Gt,"Restarting streams for network reachability change."),await async function(c){const h=j(c);h.Ea.add(4),await Sr(h),h.Va.set("Unknown"),h.Ea.delete(4),await Hs(h)}(this))})}),this.Va=new my(r,s)}}async function Hs(n){if(Jt(n))for(const e of n.Ra)await e(!0)}async function Sr(n){for(const e of n.Ra)await e(!1)}function ph(n,e){const t=j(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Wo(t)?Ho(t):Rn(t).O_()&&jo(t,e))}function $o(n,e){const t=j(n),r=Rn(t);t.Ia.delete(e),r.O_()&&mh(t,e),t.Ia.size===0&&(r.O_()?r.L_():Jt(t)&&t.Va.set("Unknown"))}function jo(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Rn(n).Z_(e)}function mh(n,e){n.da.$e(e),Rn(n).X_(e)}function Ho(n){n.da=new cg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Rn(n).start(),n.Va.ua()}function Wo(n){return Jt(n)&&!Rn(n).x_()&&n.Ia.size>0}function Jt(n){return j(n).Ea.size===0}function gh(n){n.da=void 0}async function yy(n){n.Va.set("Online")}async function _y(n){n.Ia.forEach((e,t)=>{jo(n,e)})}async function wy(n,e){gh(n),Wo(n)?(n.Va.ha(e),Ho(n)):n.Va.set("Unknown")}async function Ey(n,e,t){if(n.Va.set("Online"),e instanceof Zu&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))}(n,e)}catch(r){L(Gt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ts(n,r)}else if(e instanceof rs?n.da.Xe(e):e instanceof Yu?n.da.st(e):n.da.tt(e),!t.isEqual($.min()))try{const r=await hh(n.localStore);t.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ia.get(h);d&&i.Ia.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i.Ia.get(c);if(!d)return;i.Ia.set(c,d.withResumeToken(me.EMPTY_BYTE_STRING,d.snapshotVersion)),mh(i,c);const p=new _t(d.target,c,h,d.sequenceNumber);jo(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){L(Gt,"Failed to raise snapshot:",r),await Ts(n,r)}}async function Ts(n,e,t){if(!Pn(e))throw e;n.Ea.add(1),await Sr(n),n.Va.set("Offline"),t||(t=()=>hh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L(Gt,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Hs(n)})}function yh(n,e){return e().catch(t=>Ts(n,t,e))}async function Ws(n){const e=j(n),t=Pt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ao;for(;Ty(e);)try{const s=await ty(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,vy(e,s)}catch(s){await Ts(e,s)}_h(e)&&wh(e)}function Ty(n){return Jt(n)&&n.Ta.length<10}function vy(n,e){n.Ta.push(e);const t=Pt(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function _h(n){return Jt(n)&&!Pt(n).x_()&&n.Ta.length>0}function wh(n){Pt(n).start()}async function Iy(n){Pt(n).ra()}async function Cy(n){const e=Pt(n);for(const t of n.Ta)e.ea(t.mutations)}async function Sy(n,e,t){const r=n.Ta.shift(),s=Lo.from(r,e,t);await yh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ws(n)}async function by(n,e){e&&Pt(n).Y_&&await async function(r,s){if(function(o){return og(o)&&o!==k.ABORTED}(s.code)){const i=r.Ta.shift();Pt(r).B_(),await yh(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ws(r)}}(n,e),_h(n)&&wh(n)}async function fc(n,e){const t=j(n);t.asyncQueue.verifyOperationInProgress(),L(Gt,"RemoteStore received new credentials");const r=Jt(t);t.Ea.add(3),await Sr(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Hs(t)}async function Ay(n,e){const t=j(n);e?(t.Ea.delete(2),await Hs(t)):e||(t.Ea.add(2),await Sr(t),t.Va.set("Unknown"))}function Rn(n){return n.ma||(n.ma=function(t,r,s){const i=j(t);return i.sa(),new uy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:yy.bind(null,n),Yo:_y.bind(null,n),t_:wy.bind(null,n),J_:Ey.bind(null,n)}),n.Ra.push(async e=>{e?(n.ma.B_(),Wo(n)?Ho(n):n.Va.set("Unknown")):(await n.ma.stop(),gh(n))})),n.ma}function Pt(n){return n.fa||(n.fa=function(t,r,s){const i=j(t);return i.sa(),new hy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Iy.bind(null,n),t_:by.bind(null,n),ta:Cy.bind(null,n),na:Sy.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await Ws(n)):(await n.fa.stop(),n.Ta.length>0&&(L(Gt,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,l=new qo(e,t,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zo(n,e){if(nt("AsyncQueue",`${e}: ${n}`),Pn(n))return new x(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{static emptySet(e){return new un(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=Zn(),this.sortedSet=new te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof un)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new un;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this.ga=new te(M.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):F(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Tn{constructor(e,t,r,s,i,o,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new Tn(e,t,un.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ms(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class Ry{constructor(){this.queries=mc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=j(t),i=s.queries;s.queries=mc(),i.forEach((o,l)=>{for(const c of l.ba)c.onError(r)})})(this,new x(k.ABORTED,"Firestore shutting down"))}}function mc(){return new Qt(n=>Bu(n),Ms)}async function Eh(n,e){const t=j(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new Py,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=zo(o,`Initialization of query '${sn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.ba.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Go(t)}async function Th(n,e){const t=j(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Dy(n,e){const t=j(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&Go(t)}function ky(n,e,t){const r=j(n),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(t);r.queries.delete(e)}function Go(n){n.Ca.forEach(e=>{e.next()})}var oo,gc;(gc=oo||(oo={})).Ma="default",gc.Cache="cache";class vh{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Tn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Tn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==oo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.key=e}}class Ch{constructor(e){this.key=e}}class Ny{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=z(),this.mutatedKeys=z(),this.eu=Uu(e),this.tu=new un(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new pc,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),I=Os(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),R=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let N=!1;g&&I?g.data.isEqual(I.data)?S!==R&&(r.track({type:3,doc:I}),N=!0):this.su(g,I)||(r.track({type:2,doc:I}),N=!0,(c&&this.eu(I,c)>0||h&&this.eu(I,h)<0)&&(l=!0)):!g&&I?(r.track({type:0,doc:I}),N=!0):g&&!I&&(r.track({type:1,doc:g}),N=!0,(c||h)&&(l=!0)),N&&(I?(o=o.add(I),i=R?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(I,S){const R=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{Vt:N})}};return R(I)-R(S)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],c=this.Ya.size===0&&this.current&&!s?1:0,h=c!==this.Xa;return this.Xa=c,o.length!==0||h?{snapshot:new Tn(this.query,e.tu,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new pc,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=z(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new Ch(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new Ih(r))}),t}cu(e){this.Za=e.ks,this.Ya=z();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Tn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Ko="SyncEngine";class Vy{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Ly{constructor(e){this.key=e,this.hu=!1}}class xy{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Qt(l=>Bu(l),Ms),this.Iu=new Map,this.Eu=new Set,this.Ru=new te(M.comparator),this.Au=new Map,this.Vu=new Oo,this.du={},this.mu=new Map,this.fu=En.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function My(n,e,t=!0){const r=Dh(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Sh(r,e,t,!0),s}async function Oy(n,e){const t=Dh(n);await Sh(t,e,!0,!1)}async function Sh(n,e,t,r){const s=await ny(n.localStore,We(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await Fy(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&ph(n.remoteStore,s),l}async function Fy(n,e,t,r,s){n.pu=(p,g,I)=>async function(R,N,B,U){let X=N.view.ru(B);X.Ss&&(X=await lc(R.localStore,N.query,!1).then(({documents:T})=>N.view.ru(T,X)));const Ce=U&&U.targetChanges.get(N.targetId),Pe=U&&U.targetMismatches.get(N.targetId)!=null,ge=N.view.applyChanges(X,R.isPrimaryClient,Ce,Pe);return _c(R,N.targetId,ge.au),ge.snapshot}(n,p,g,I);const i=await lc(n.localStore,e,!0),o=new Ny(e,i.ks),l=o.ru(i.documents),c=Cr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(l,n.isPrimaryClient,c);_c(n,t,h.au);const d=new Vy(e,t,o);return n.Tu.set(e,d),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function By(n,e,t){const r=j(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Ms(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await so(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&$o(r.remoteStore,s.targetId),ao(r,s.targetId)}).catch(An)):(ao(r,s.targetId),await so(r.localStore,s.targetId,!0))}async function Uy(n,e){const t=j(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),$o(t.remoteStore,r.targetId))}async function $y(n,e,t){const r=Ky(n);try{const s=await function(o,l){const c=j(o),h=K.now(),d=l.reduce((I,S)=>I.add(S.key),z());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",I=>{let S=st(),R=z();return c.xs.getEntries(I,d).next(N=>{S=N,S.forEach((B,U)=>{U.isValidDocument()||(R=R.add(B))})}).next(()=>c.localDocuments.getOverlayedDocuments(I,S)).next(N=>{p=N;const B=[];for(const U of l){const X=tg(U,p.get(U.key).overlayedDocument);X!=null&&B.push(new kt(U.key,X,Nu(X.value.mapValue),Ve.exists(!0)))}return c.mutationQueue.addMutationBatch(I,h,B,l)}).next(N=>{g=N;const B=N.applyToLocalDocumentSet(p,R);return c.documentOverlayCache.saveOverlays(I,N.batchId,B)})}).then(()=>({batchId:g.batchId,changes:ju(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.du[o.currentUser.toKey()];h||(h=new te(q)),h=h.insert(l,c),o.du[o.currentUser.toKey()]=h}(r,s.batchId,t),await br(r,s.changes),await Ws(r.remoteStore)}catch(s){const i=zo(s,"Failed to persist write");t.reject(i)}}async function bh(n,e){const t=j(n);try{const r=await Zg(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Au.get(i);o&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?J(o.hu,14607):s.removedDocuments.size>0&&(J(o.hu,42227),o.hu=!1))}),await br(t,r,e)}catch(r){await An(r)}}function yc(n,e,t){const r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=j(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const g of p.ba)g.va(l)&&(h=!0)}),h&&Go(c)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jy(n,e,t){const r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new te(M.comparator);o=o.insert(i,Ee.newNoDocument(i,$.min()));const l=z().add(i),c=new $s($.min(),new Map,new te(q),o,l);await bh(r,c),r.Ru=r.Ru.remove(i),r.Au.delete(e),Xo(r)}else await so(r.localStore,e,!1).then(()=>ao(r,e,t)).catch(An)}async function Hy(n,e){const t=j(n),r=e.batch.batchId;try{const s=await Yg(t.localStore,e);Ph(t,r,null),Ah(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await br(t,s)}catch(s){await An(s)}}async function Wy(n,e,t){const r=j(n);try{const s=await function(o,l){const c=j(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(J(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);Ph(r,e,t),Ah(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await br(r,s)}catch(s){await An(s)}}function Ah(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Ph(n,e,t){const r=j(n);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function ao(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(r=>{n.Vu.containsKey(r)||Rh(n,r)})}function Rh(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&($o(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Xo(n))}function _c(n,e,t){for(const r of t)r instanceof Ih?(n.Vu.addReference(r.key,e),qy(n,r)):r instanceof Ch?(L(Ko,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||Rh(n,r.key)):F(19791,{wu:r})}function qy(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(r)||(L(Ko,"New document in limbo: "+t),n.Eu.add(r),Xo(n))}function Xo(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new M(ee.fromString(e)),r=n.fu.next();n.Au.set(r,new Ly(t)),n.Ru=n.Ru.insert(t,r),ph(n.remoteStore,new _t(We(No(t.path)),r,"TargetPurposeLimboResolution",Ns.ce))}}async function br(n,e,t){const r=j(n),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{o.push(r.pu(c,e,t).then(h=>{var d;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Bo.Es(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(c,h){const d=j(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>D.forEach(h,g=>D.forEach(g.Ts,I=>d.persistence.referenceDelegate.addReference(p,g.targetId,I)).next(()=>D.forEach(g.Is,I=>d.persistence.referenceDelegate.removeReference(p,g.targetId,I)))))}catch(p){if(!Pn(p))throw p;L(Uo,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const I=d.vs.get(g),S=I.snapshotVersion,R=I.withLastLimboFreeSnapshotVersion(S);d.vs=d.vs.insert(g,R)}}}(r.localStore,i))}async function zy(n,e){const t=j(n);if(!t.currentUser.isEqual(e)){L(Ko,"User change. New user:",e.toKey());const r=await uh(t.localStore,e);t.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new x(k.CANCELLED,o))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await br(t,r.Ns)}}function Gy(n,e){const t=j(n),r=t.Au.get(e);if(r&&r.hu)return z().add(r.key);{let s=z();const i=t.Iu.get(e);if(!i)return s;for(const o of i){const l=t.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function Dh(n){const e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=bh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jy.bind(null,e),e.Pu.J_=Dy.bind(null,e.eventManager),e.Pu.yu=ky.bind(null,e.eventManager),e}function Ky(n){const e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Hy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Wy.bind(null,e),e}class vs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=js(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Jg(this.persistence,new Kg,e.initialUser,this.serializer)}Cu(e){return new ch(Fo.Vi,this.serializer)}Du(e){return new sy}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vs.provider={build:()=>new vs};class Xy extends vs{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){J(this.persistence.referenceDelegate instanceof Es,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Vg(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?be.withCacheSize(this.cacheSizeBytes):be.DEFAULT;return new ch(r=>Es.Vi(r,t),this.serializer)}}class lo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zy.bind(null,this.syncEngine),await Ay(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ry}()}createDatastore(e){const t=js(e.databaseInfo.databaseId),r=cy(e.databaseInfo);return py(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,l){return new gy(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>yc(this.syncEngine,t,0),function(){return hc.v()?new hc:new iy}())}createSyncEngine(e,t){return function(s,i,o,l,c,h,d){const p=new xy(s,i,o,l,c,h);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=j(s);L(Gt,"RemoteStore shutting down."),i.Ea.add(5),await Sr(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}lo.provider={build:()=>new lo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):nt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="FirestoreClient";class Qy{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=we.UNAUTHENTICATED,this.clientId=So.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{L(Rt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(L(Rt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=zo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Li(n,e){n.asyncQueue.verifyOperationInProgress(),L(Rt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await uh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function wc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Jy(n);L(Rt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>fc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>fc(e.remoteStore,s)),n._onlineComponents=e}async function Jy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(Rt,"Using user provided OfflineComponentProvider");try{await Li(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;gn("Error using user provided cache. Falling back to memory cache: "+t),await Li(n,new vs)}}else L(Rt,"Using default OfflineComponentProvider"),await Li(n,new Xy(void 0));return n._offlineComponents}async function Nh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(Rt,"Using user provided OnlineComponentProvider"),await wc(n,n._uninitializedComponentsProvider._online)):(L(Rt,"Using default OnlineComponentProvider"),await wc(n,new lo))),n._onlineComponents}function Yy(n){return Nh(n).then(e=>e.syncEngine)}async function Vh(n){const e=await Nh(n),t=e.eventManager;return t.onListen=My.bind(null,e.syncEngine),t.onUnlisten=By.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Oy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Uy.bind(null,e.syncEngine),t}function Zy(n,e,t={}){const r=new Ze;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new kh({next:g=>{d.Nu(),o.enqueueAndForget(()=>Th(i,p));const I=g.docs.has(l);!I&&g.fromCache?h.reject(new x(k.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&c&&c.source==="server"?h.reject(new x(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new vh(No(l.path),d,{includeMetadataChanges:!0,Ka:!0});return Eh(i,p)}(await Vh(n),n.asyncQueue,e,t,r)),r.promise}function e_(n,e,t={}){const r=new Ze;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new kh({next:g=>{d.Nu(),o.enqueueAndForget(()=>Th(i,p)),g.fromCache&&c.source==="server"?h.reject(new x(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new vh(l,d,{includeMetadataChanges:!0,Ka:!0});return Eh(i,p)}(await Vh(n),n.asyncQueue,e,t,r)),r.promise}function t_(n,e){const t=new Ze;return n.asyncQueue.enqueueAndForget(async()=>$y(await Yy(n),e,t)),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="ComponentProvider",Ec=new Map;function r_(n,e,t,r,s){return new Im(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Lh(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="firestore.googleapis.com",Tc=!0;class vc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new x(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xh,this.ssl=Tc}else this.host=e.host,this.ssl=e.ssl??Tc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=lh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<kg)throw new x(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lh(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new x(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new x(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new x(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qs{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new x(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nm;switch(r.type){case"firstParty":return new om(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Ec.get(t);r&&(L(n_,"Removing Datastore"),Ec.delete(t),r.terminate())}(this),Promise.resolve()}}function s_(n,e,t,r={}){var h;n=rt(n,qs);const s=Cn(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(iu(`https://${l}`),ou("Firestore",!0)),i.host!==xh&&i.host!==l&&gn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!Wt(c,o)&&(n._setSettings(c),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=we.MOCK_USER;else{d=Pf(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new x(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new we(g)}n._authCredentials=new rm(new Eu(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zs(this.firestore,e,this._query)}}class le{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new It(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new le(this.firestore,e,this._key)}toJSON(){return{type:le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(vr(t,le._jsonSchema))return new le(e,r||null,new M(ee.fromString(t.referencePath)))}}le._jsonSchemaVersion="firestore/documentReference/1.0",le._jsonSchema={type:ie("string",le._jsonSchemaVersion),referencePath:ie("string")};class It extends zs{constructor(e,t,r){super(e,t,No(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new M(e))}withConverter(e){return new It(this.firestore,e,this._path)}}function De(n,e,...t){if(n=de(n),Tu("collection","path",e),n instanceof qs){const r=ee.fromString(e,...t);return Ml(r),new It(n,null,r)}{if(!(n instanceof le||n instanceof It))throw new x(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return Ml(r),new It(n.firestore,null,r)}}function Oe(n,e,...t){if(n=de(n),arguments.length===1&&(e=So.newId()),Tu("doc","path",e),n instanceof qs){const r=ee.fromString(e,...t);return xl(r),new le(n,null,new M(r))}{if(!(n instanceof le||n instanceof It))throw new x(k.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return xl(r),new le(n.firestore,n instanceof It?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="AsyncQueue";class Cc{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new dh(this,"async_queue_retry"),this._c=()=>{const r=Vi();r&&L(Ic,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Vi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Vi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Ze;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Pn(e))throw e;L(Ic,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,nt("INTERNAL UNHANDLED ERROR: ",Sc(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=qo.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&F(47125,{Pc:Sc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Sc(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Dn extends qs{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Cc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cc(e),this._firestoreClient=void 0,await e}}}function i_(n,e){const t=typeof n=="object"?n:uu(),r=typeof n=="string"?n:fs,s=Io(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=bf("firestore");i&&s_(s,...i)}return s}function Gs(n){if(n._terminated)throw new x(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||o_(n),n._firestoreClient}function o_(n){var r,s,i,o;const e=n._freezeSettings(),t=r_(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Qy(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xe(me.fromBase64String(e))}catch(t){throw new x(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new xe(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vr(e,xe._jsonSchema))return xe.fromBase64String(e.bytes)}}xe._jsonSchemaVersion="firestore/bytes/1.0",xe._jsonSchema={type:ie("string",xe._jsonSchemaVersion),bytes:ie("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ze._jsonSchemaVersion}}static fromJSON(e){if(vr(e,ze._jsonSchema))return new ze(e.latitude,e.longitude)}}ze._jsonSchemaVersion="firestore/geoPoint/1.0",ze._jsonSchema={type:ie("string",ze._jsonSchemaVersion),latitude:ie("number"),longitude:ie("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Be._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vr(e,Be._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Be(e.vectorValues);throw new x(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Be._jsonSchemaVersion="firestore/vectorValue/1.0",Be._jsonSchema={type:ie("string",Be._jsonSchemaVersion),vectorValues:ie("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=/^__.*__$/;class l_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new kt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ir(e,this.data,t,this.fieldTransforms)}}class Mh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new kt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Oh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{dataSource:n})}}class Yo{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Yo({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Is(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Oh(this.dataSource)&&a_.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class c_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||js(e)}createContext(e,t,r,s=!1){return new Yo({dataSource:e,methodName:t,targetDoc:r,path:pe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fh(n){const e=n._freezeSettings(),t=js(n._databaseId);return new c_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Bh(n,e,t,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);Zo("Data must be an object, but it was:",o,r);const l=Uh(r,o);let c,h;if(i.merge)c=new Ne(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=mr(e,p,t);if(!o.contains(g))throw new x(k.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Hh(d,g)||d.push(g)}c=new Ne(d),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new l_(new Ae(l),c,h)}class Ks extends Jo{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ks}}function u_(n,e,t,r){const s=n.createContext(1,e,t);Zo("Data must be an object, but it was:",s,r);const i=[],o=Ae.empty();Dt(r,(c,h)=>{const d=jh(e,c,t);h=de(h);const p=s.childContextForFieldPath(d);if(h instanceof Ks)i.push(d);else{const g=Xs(h,p);g!=null&&(i.push(d),o.set(d,g))}});const l=new Ne(i);return new Mh(o,l,s.fieldTransforms)}function h_(n,e,t,r,s,i){const o=n.createContext(1,e,t),l=[mr(e,r,t)],c=[s];if(i.length%2!=0)throw new x(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(mr(e,i[g])),c.push(i[g+1]);const h=[],d=Ae.empty();for(let g=l.length-1;g>=0;--g)if(!Hh(h,l[g])){const I=l[g];let S=c[g];S=de(S);const R=o.childContextForFieldPath(I);if(S instanceof Ks)h.push(I);else{const N=Xs(S,R);N!=null&&(h.push(I),d.set(I,N))}}const p=new Ne(h);return new Mh(d,p,o.fieldTransforms)}function Xs(n,e){if($h(n=de(n)))return Zo("Unsupported field value:",e,n),Uh(n,e);if(n instanceof Jo)return function(r,s){if(!Oh(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Xs(l,s.childContextForArray(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=de(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Xm(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=K.fromDate(r);return{timestampValue:ws(s.serializer,i)}}if(r instanceof K){const i=new K(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ws(s.serializer,i)}}if(r instanceof ze)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xe)return{bytesValue:eh(s.serializer,r._byteString)};if(r instanceof le){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Mo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Be)return function(o,l){const c=o instanceof Be?o.toArray():o;return{mapValue:{fields:{[Du]:{stringValue:ku},[ps]:{arrayValue:{values:c.map(d=>{if(typeof d!="number")throw l.createError("VectorValues must only contain numeric values.");return Vo(l.serializer,d)})}}}}}}(r,s);if(ah(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${bo(r)}`)}(n,e)}function Uh(n,e){const t={};return Cu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Dt(n,(r,s)=>{const i=Xs(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function $h(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof K||n instanceof ze||n instanceof xe||n instanceof le||n instanceof Jo||n instanceof Be||ah(n))}function Zo(n,e,t){if(!$h(t)||!vu(t)){const r=bo(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function mr(n,e,t){if((e=de(e))instanceof Qo)return e._internalPath;if(typeof e=="string")return jh(n,e);throw Is("Field path arguments must be of type string or ",n,!1,void 0,t)}const d_=new RegExp("[~\\*/\\[\\]]");function jh(n,e,t){if(e.search(d_)>=0)throw Is(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Qo(...e.split("."))._internalPath}catch{throw Is(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Is(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new x(k.INVALID_ARGUMENT,l+n+c)}function Hh(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{convertValue(e,t="none"){switch(At(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Dt(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[ps].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>re(o.doubleValue));return new Be(t)}convertGeoPoint(e){return new ze(re(e.latitude),re(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ls(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ur(e));default:return null}}convertTimestamp(e){const t=St(e);return new K(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ee.fromString(e);J(oh(r),9688,{name:e});const s=new hr(r.get(1),r.get(3)),i=new M(r.popFirst(5));return s.isEqual(t)||nt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh extends f_{constructor(e){super(),this.firestore=e}convertBytes(e){return new xe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,t)}}const bc="@firebase/firestore",Ac="4.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new p_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(mr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class p_ extends qh{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function zh(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class tr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ht extends qh{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ss(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(mr("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new x(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ht._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ht._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ht._jsonSchema={type:ie("string",Ht._jsonSchemaVersion),bundleSource:ie("string","DocumentSnapshot"),bundleName:ie("string"),bundle:ie("string")};class ss extends Ht{data(e={}){return super.data(e)}}class hn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new tr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ss(this._firestore,this._userDataWriter,r.key,r,new tr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new x(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new ss(s._firestore,s._userDataWriter,l.doc.key,l.doc,new tr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ss(s._firestore,s._userDataWriter,l.doc.key,l.doc,new tr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:g_(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new x(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=hn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=So.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function g_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn._jsonSchemaVersion="firestore/querySnapshot/1.0",hn._jsonSchema={type:ie("string",hn._jsonSchemaVersion),bundleSource:ie("string","QuerySnapshot"),bundleName:ie("string"),bundle:ie("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Fh(e)}set(e,t,r){this._verifyNotCommitted();const s=xi(e,this._firestore),i=zh(s.converter,t,r),o=Bh(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Ve.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=xi(e,this._firestore);let o;return o=typeof(t=de(t))=="string"||t instanceof Qo?h_(this._dataReader,"WriteBatch.update",i._key,t,r,s):u_(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,Ve.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=xi(e,this._firestore);return this._mutations=this._mutations.concat(new Us(t._key,Ve.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(k.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function xi(n,e){if((n=de(n)).firestore!==e)throw new x(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(n){n=rt(n,le);const e=rt(n.firestore,Dn),t=Gs(e);return Zy(t,n._key).then(r=>__(e,n,r))}function ke(n){n=rt(n,zs);const e=rt(n.firestore,Dn),t=Gs(e),r=new Wh(e);return m_(n._query),e_(t,n._query).then(s=>new hn(e,r,n,s))}function ea(n,e,t){n=rt(n,le);const r=rt(n.firestore,Dn),s=zh(n.converter,e,t),i=Fh(r);return ta(r,[Bh(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ve.none())])}function nn(n){return ta(rt(n.firestore,Dn),[new Us(n._key,Ve.none())])}function ta(n,e){const t=Gs(n);return t_(t,e)}function __(n,e,t){const r=t.docs.get(e._key),s=new Wh(n);return new Ht(n,s,e._key,r,new tr(t.hasPendingWrites,t.fromCache),e.converter)}function gr(n){return n=rt(n,Dn),Gs(n),new y_(n,e=>ta(n,e))}(function(e,t=!0){tm(Sn),mn(new qt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Dn(new sm(r.getProvider("auth-internal")),new am(o,r.getProvider("app-check-internal")),Cm(o,s),o);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Tt(bc,Ac,e),Tt(bc,Ac,"esm2020")})();var w_="firebase",E_="12.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt(w_,E_,"app");function Gh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const T_=Gh,Kh=new Er("auth","Firebase",Gh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new To("@firebase/auth");function v_(n,...e){Cs.logLevel<=W.WARN&&Cs.warn(`Auth (${Sn}): ${n}`,...e)}function is(n,...e){Cs.logLevel<=W.ERROR&&Cs.error(`Auth (${Sn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(n,...e){throw na(n,...e)}function Ge(n,...e){return na(n,...e)}function Xh(n,e,t){const r={...T_(),[e]:t};return new Er("auth","Firebase",r).create(e,{appName:n.name})}function et(n){return Xh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function na(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Kh.create(n,...e)}function O(n,e,...t){if(!n)throw na(e,...t)}function Je(n){const e="INTERNAL ASSERTION FAILED: "+n;throw is(e),new Error(e)}function it(n,e){n||Je(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function I_(){return Pc()==="http:"||Pc()==="https:"}function Pc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(I_()||Lf()||"connection"in navigator)?navigator.onLine:!0}function S_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t){this.shortDelay=e,this.longDelay=t,it(t>e,"Short delay should be less than long delay!"),this.isMobile=kf()||xf()}get(){return C_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n,e){it(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],P_=new Ar(3e4,6e4);function Nt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Vt(n,e,t,r,s={}){return Jh(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Tr({key:n.config.apiKey,...o}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:c,...i};return Vf()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Cn(n.emulatorConfig.host)&&(h.credentials="include"),Qh.fetch()(await Yh(n,n.config.apiHost,t,l),h)})}async function Jh(n,e,t){n._canInitEmulator=!1;const r={...b_,...e};try{const s=new D_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Yr(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yr(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Yr(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Yr(n,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Xh(n,d,h);Ue(n,d)}}catch(s){if(s instanceof ot)throw s;Ue(n,"network-request-failed",{message:String(s)})}}async function Pr(n,e,t,r,s={}){const i=await Vt(n,e,t,r,s);return"mfaPendingCredential"in i&&Ue(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Yh(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?ra(n.config,s):`${n.config.apiScheme}://${s}`;return A_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function R_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class D_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),P_.get())})}}function Yr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ge(n,e,r);return s.customData._tokenResponse=t,s}function Rc(n){return n!==void 0&&n.enterprise!==void 0}class k_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return R_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function N_(n,e){return Vt(n,"GET","/v2/recaptchaConfig",Nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V_(n,e){return Vt(n,"POST","/v1/accounts:delete",e)}async function Ss(n,e){return Vt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function L_(n,e=!1){const t=de(n),r=await t.getIdToken(e),s=sa(r);O(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ar(Mi(s.auth_time)),issuedAtTime:ar(Mi(s.iat)),expirationTime:ar(Mi(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Mi(n){return Number(n)*1e3}function sa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return is("JWT malformed, contained fewer than 3 sections"),null;try{const s=tu(t);return s?JSON.parse(s):(is("Failed to decode base64 JWT payload"),null)}catch(s){return is("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Dc(n){const e=sa(n);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ot&&x_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function x_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ar(this.lastLoginAt),this.creationTime=ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(n){var p;const e=n.auth,t=await n.getIdToken(),r=await yr(n,Ss(e,{idToken:t}));O(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Zh(s.providerUserInfo):[],o=F_(n.providerData,i),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ho(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function O_(n){const e=de(n);await bs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function F_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Zh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(n,e){const t=await Jh(n,{},async()=>{const r=Tr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await Yh(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&Cn(n.emulatorConfig.host)&&(c.credentials="include"),Qh.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function U_(n,e){return Vt(n,"POST","/v2/accounts:revokeToken",Nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){O(e.length!==0,"internal-error");const t=Dc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await B_(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new dn;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(O(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(O(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dn,this.toJSON())}_performRefresh(){return Je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(n,e){O(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Fe{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new M_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ho(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await yr(this,this.stsTokenManager.getToken(this.auth,e));return O(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return L_(this,e)}reload(){return O_(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Fe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await bs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(et(this.auth));const e=await this.getIdToken();return await yr(this,V_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,h=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:I,providerData:S,stsTokenManager:R}=t;O(p&&R,e,"internal-error");const N=dn.fromJSON(this.name,R);O(typeof p=="string",e,"internal-error"),ft(r,e.name),ft(s,e.name),O(typeof g=="boolean",e,"internal-error"),O(typeof I=="boolean",e,"internal-error"),ft(i,e.name),ft(o,e.name),ft(l,e.name),ft(c,e.name),ft(h,e.name),ft(d,e.name);const B=new Fe({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:N,createdAt:h,lastLoginAt:d});return S&&Array.isArray(S)&&(B.providerData=S.map(U=>({...U}))),c&&(B._redirectEventId=c),B}static async _fromIdTokenResponse(e,t,r=!1){const s=new dn;s.updateFromServerResponse(t);const i=new Fe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await bs(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];O(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Zh(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new dn;l.updateFromIdToken(r);const c=new Fe({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ho(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=new Map;function Ye(n){it(n instanceof Function,"Expected a class definition");let e=kc.get(n);return e?(it(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,kc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ed.type="NONE";const Nc=ed;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(n,e,t){return`firebase:${n}:${e}:${t}`}class fn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=os(this.userKey,s.apiKey,i),this.fullPersistenceKey=os("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ss(this.auth,{idToken:e}).catch(()=>{});return t?Fe._fromGetAccountInfoResponse(this.auth,t,e):null}return Fe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new fn(Ye(Nc),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Ye(Nc);const o=os(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const d=await h._get(o);if(d){let p;if(typeof d=="string"){const g=await Ss(e,{idToken:d}).catch(()=>{});if(!g)break;p=await Fe._fromGetAccountInfoResponse(e,g,d)}else p=Fe._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new fn(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new fn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(td(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(od(e))return"Blackberry";if(ad(e))return"Webos";if(nd(e))return"Safari";if((e.includes("chrome/")||rd(e))&&!e.includes("edge/"))return"Chrome";if(id(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function td(n=Te()){return/firefox\//i.test(n)}function nd(n=Te()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rd(n=Te()){return/crios\//i.test(n)}function sd(n=Te()){return/iemobile/i.test(n)}function id(n=Te()){return/android/i.test(n)}function od(n=Te()){return/blackberry/i.test(n)}function ad(n=Te()){return/webos/i.test(n)}function ia(n=Te()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $_(n=Te()){var e;return ia(n)&&!!((e=window.navigator)!=null&&e.standalone)}function j_(){return Mf()&&document.documentMode===10}function ld(n=Te()){return ia(n)||id(n)||ad(n)||od(n)||/windows phone/i.test(n)||sd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(n,e=[]){let t;switch(n){case"Browser":t=Vc(Te());break;case"Worker":t=`${Vc(Te())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Sn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W_(n,e={}){return Vt(n,"GET","/v2/passwordPolicy",Nt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=6;class z_{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??q_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lc(this),this.idTokenSubscription=new Lc(this),this.beforeStateQueue=new H_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ye(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await fn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ss(this,{idToken:e}),r=await Fe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Le(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=S_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Le(this.app))return Promise.reject(et(this));const t=e?de(e):null;return t&&O(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(et(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Le(this.app)?Promise.reject(et(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ye(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await W_(this),t=new z_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Er("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await U_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ye(e)||this._popupRedirectResolver;O(t,this,"argument-error"),this.redirectPersistenceManager=await fn.create(this,[Ye(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&v_(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Yt(n){return de(n)}class Lc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wf(t=>this.observer=t)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function K_(n){Qs=n}function ud(n){return Qs.loadJS(n)}function X_(){return Qs.recaptchaEnterpriseScript}function Q_(){return Qs.gapiScript}function J_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Y_{constructor(){this.enterprise=new Z_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Z_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ew="recaptcha-enterprise",hd="NO_RECAPTCHA";class tw{constructor(e){this.type=ew,this.auth=Yt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{N_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new k_(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Rc(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(hd)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Y_().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!t&&Rc(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=X_();c.length!==0&&(c+=l),ud(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function xc(n,e,t,r=!1,s=!1){const i=new tw(n);let o;if(s)o=hd;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function fo(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await xc(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await xc(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(n,e){const t=Io(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Wt(i,e??{}))return s;Ue(s,"already-initialized")}return t.initialize({options:e})}function rw(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ye);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sw(n,e,t){const r=Yt(n);O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=dd(e),{host:o,port:l}=iw(e),c=l===null?"":`:${l}`,h={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){O(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),O(Wt(h,r.config.emulator)&&Wt(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Cn(o)?(iu(`${i}//${o}${c}`),ou("Auth",!0)):ow()}function dd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function iw(n){const e=dd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Mc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Mc(o)}}}function Mc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ow(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,t){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}}async function aw(n,e){return Vt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lw(n,e){return Pr(n,"POST","/v1/accounts:signInWithPassword",Nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cw(n,e){return Pr(n,"POST","/v1/accounts:signInWithEmailLink",Nt(n,e))}async function uw(n,e){return Pr(n,"POST","/v1/accounts:signInWithEmailLink",Nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends oa{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new _r(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new _r(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fo(e,t,"signInWithPassword",lw);case"emailLink":return cw(e,{email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fo(e,r,"signUpPassword",aw);case"emailLink":return uw(e,{idToken:t,email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(n,e){return Pr(n,"POST","/v1/accounts:signInWithIdp",Nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="http://localhost";class Kt extends oa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ue("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new Kt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return pn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,pn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pn(e,t)}buildRequest(){const e={requestUri:hw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Tr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fw(n){const e=Qn(Jn(n)).link,t=e?Qn(Jn(e)).deep_link_id:null,r=Qn(Jn(n)).deep_link_id;return(r?Qn(Jn(r)).link:null)||r||t||e||n}class aa{constructor(e){const t=Qn(Jn(e)),r=t.apiKey??null,s=t.oobCode??null,i=dw(t.mode??null);O(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=fw(e);try{return new aa(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.providerId=kn.PROVIDER_ID}static credential(e,t){return _r._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=aa.parseLink(t);return O(r,"argument-error"),_r._fromEmailAndCode(e,r.code,r.tenantId)}}kn.PROVIDER_ID="password";kn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";kn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends fd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends Rr{constructor(){super("facebook.com")}static credential(e){return Kt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";pt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends Rr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Kt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return mt.credential(t,r)}catch{return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com";mt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends Rr{constructor(){super("github.com")}static credential(e){return Kt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com";gt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Rr{constructor(){super("twitter.com")}static credential(e,t){return Kt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return yt.credential(t,r)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(n,e){return Pr(n,"POST","/v1/accounts:signUp",Nt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Fe._fromIdTokenResponse(e,r,s),o=Oc(r);return new Xt({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Oc(r);return new Xt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Oc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends ot{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,As.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new As(e,t,r,s)}}function pd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?As._fromErrorAndOperation(n,i,e,r):i})}async function mw(n,e,t=!1){const r=await yr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Xt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(n,e,t=!1){const{auth:r}=n;if(Le(r.app))return Promise.reject(et(r));const s="reauthenticate";try{const i=await yr(n,pd(r,s,e,n),t);O(i.idToken,r,"internal-error");const o=sa(i.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(n.uid===l,r,"user-mismatch"),Xt._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ue(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function md(n,e,t=!1){if(Le(n.app))return Promise.reject(et(n));const r="signIn",s=await pd(n,r,e),i=await Xt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function yw(n,e){return md(Yt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gd(n){const e=Yt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function _w(n,e,t){if(Le(n.app))return Promise.reject(et(n));const r=Yt(n),o=await fo(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",pw).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&gd(n),c}),l=await Xt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function ww(n,e,t){return Le(n.app)?Promise.reject(et(n)):yw(de(n),kn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gd(n),r})}function Ew(n,e,t,r){return de(n).onIdTokenChanged(e,t,r)}function Tw(n,e,t){return de(n).beforeAuthStateChanged(e,t)}function vw(n,e,t,r){return de(n).onAuthStateChanged(e,t,r)}function Iw(n){return de(n).signOut()}const Ps="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ps,"1"),this.storage.removeItem(Ps),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=1e3,Sw=10;class _d extends yd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ld(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);j_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Sw):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Cw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_d.type="LOCAL";const bw=_d;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd extends yd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wd.type="SESSION";const Ed=wd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Js(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(t.origin,i)),c=await Aw(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Js.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=la("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function Rw(n){Ke().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function Dw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Nw(){return Td()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="firebaseLocalStorageDb",Vw=1,Rs="firebaseLocalStorage",Id="fbase_key";class Dr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ys(n,e){return n.transaction([Rs],e?"readwrite":"readonly").objectStore(Rs)}function Lw(){const n=indexedDB.deleteDatabase(vd);return new Dr(n).toPromise()}function po(){const n=indexedDB.open(vd,Vw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Rs,{keyPath:Id})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Rs)?e(r):(r.close(),await Lw(),e(await po()))})})}async function Fc(n,e,t){const r=Ys(n,!0).put({[Id]:e,value:t});return new Dr(r).toPromise()}async function xw(n,e){const t=Ys(n,!1).get(e),r=await new Dr(t).toPromise();return r===void 0?null:r.value}function Bc(n,e){const t=Ys(n,!0).delete(e);return new Dr(t).toPromise()}const Mw=800,Ow=3;class Cd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await po(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ow)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Td()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Js._getInstance(Nw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await Dw(),!this.activeServiceWorker)return;this.sender=new Pw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await po();return await Fc(e,Ps,"1"),await Bc(e,Ps),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>xw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Bc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ys(s,!1).getAll();return new Dr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cd.type="LOCAL";const Fw=Cd;new Ar(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(n,e){return e?Ye(e):(O(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends oa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Uw(n){return md(n.auth,new ca(n),n.bypassAuthState)}function $w(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),gw(t,new ca(n),n.bypassAuthState)}async function jw(n){const{auth:e,user:t}=n;return O(t,e,"internal-error"),mw(t,new ca(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Uw;case"linkViaPopup":case"linkViaRedirect":return jw;case"reauthViaPopup":case"reauthViaRedirect":return $w;default:Ue(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=new Ar(2e3,1e4);class ln extends Sd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");const e=la();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hw.get())};e()}}ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="pendingRedirect",as=new Map;class qw extends Sd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=as.get(this.auth._key());if(!e){try{const r=await zw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}as.set(this.auth._key(),e)}return this.bypassAuthState||as.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zw(n,e){const t=Xw(e),r=Kw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Gw(n,e){as.set(n._key(),e)}function Kw(n){return Ye(n._redirectPersistence)}function Xw(n){return os(Ww,n.config.apiKey,n.name)}async function Qw(n,e,t=!1){if(Le(n.app))return Promise.reject(et(n));const r=Yt(n),s=Bw(r,e),o=await new qw(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=10*60*1e3;class Yw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!bd(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ge(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uc(e))}saveEventToCache(e){this.cachedEventUids.add(Uc(e)),this.lastProcessedEventTime=Date.now()}}function Uc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function bd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE(n,e={}){return Vt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nE=/^https?/;async function rE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await eE(n);for(const t of e)try{if(sE(t))return}catch{}Ue(n,"unauthorized-domain")}function sE(n){const e=uo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!nE.test(t))return!1;if(tE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=new Ar(3e4,6e4);function $c(){const n=Ke().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function oE(n){return new Promise((e,t)=>{var s,i,o;function r(){$c(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$c(),t(Ge(n,"network-request-failed"))},timeout:iE.get()})}if((i=(s=Ke().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Ke().gapi)!=null&&o.load)r();else{const l=J_("iframefcb");return Ke()[l]=()=>{gapi.load?r():t(Ge(n,"network-request-failed"))},ud(`${Q_()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw ls=null,e})}let ls=null;function aE(n){return ls=ls||oE(n),ls}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=new Ar(5e3,15e3),cE="__/auth/iframe",uE="emulator/auth/iframe",hE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fE(n){const e=n.config;O(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ra(e,uE):`https://${n.config.authDomain}/${cE}`,r={apiKey:e.apiKey,appName:n.name,v:Sn},s=dE.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Tr(r).slice(1)}`}async function pE(n){const e=await aE(n),t=Ke().gapi;return O(t,n,"internal-error"),e.open({where:document.body,url:fE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ge(n,"network-request-failed"),l=Ke().setTimeout(()=>{i(o)},lE.get());function c(){Ke().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gE=500,yE=600,_E="_blank",wE="http://localhost";class jc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EE(n,e,t,r=gE,s=yE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...mE,width:r.toString(),height:s.toString(),top:i,left:o},h=Te().toLowerCase();t&&(l=rd(h)?_E:t),td(h)&&(e=e||wE,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[I,S])=>`${g}${I}=${S},`,"");if($_(h)&&l!=="_self")return TE(e||"",l),new jc(null);const p=window.open(e||"",l,d);O(p,n,"popup-blocked");try{p.focus()}catch{}return new jc(p)}function TE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="__/auth/handler",IE="emulator/auth/handler",CE=encodeURIComponent("fac");async function Hc(n,e,t,r,s,i){O(n.config.authDomain,n,"auth-domain-config-required"),O(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Sn,eventId:s};if(e instanceof fd){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Hf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Rr){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),h=c?`#${CE}=${encodeURIComponent(c)}`:"";return`${SE(n)}?${Tr(l).slice(1)}${h}`}function SE({config:n}){return n.emulator?ra(n,IE):`https://${n.authDomain}/${vE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="webStorageSupport";class bE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ed,this._completeRedirectFn=Qw,this._overrideRedirectResult=Gw}async _openPopup(e,t,r,s){var o;it((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Hc(e,t,r,uo(),s);return EE(e,i,la())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Hc(e,t,r,uo(),s);return Rw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(it(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await pE(e),r=new Yw(e);return t.register("authEvent",s=>(O(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Oi,{type:Oi},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Oi];i!==void 0&&t(!!i),Ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ld()||nd()||ia()}}const AE=bE;var Wc="@firebase/auth",qc="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DE(n){mn(new qt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cd(n)},h=new G_(r,s,i,c);return rw(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),mn(new qt("auth-internal",e=>{const t=Yt(e.getProvider("auth").getImmediate());return(r=>new PE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(Wc,qc,RE(n)),Tt(Wc,qc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=5*60,NE=su("authIdTokenMaxAge")||kE;let zc=null;const VE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>NE)return;const s=t==null?void 0:t.token;zc!==s&&(zc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function LE(n=uu()){const e=Io(n,"auth");if(e.isInitialized())return e.getImmediate();const t=nw(n,{popupRedirectResolver:AE,persistence:[Fw,bw,Ed]}),r=su("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=VE(i.toString());Tw(t,o,()=>o(t.currentUser)),Ew(t,l=>o(l))}}const s=nu("auth");return s&&sw(t,`http://${s}`),t}function xE(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}K_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ge("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",xE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DE("Browser");const ME={apiKey:"AIzaSyDVTkhWjMht3WxUzkve7HzztbAEEderAhw",authDomain:"zarvona-energy-a85ce.firebaseapp.com",projectId:"zarvona-energy-a85ce",storageBucket:"zarvona-energy-a85ce.firebasestorage.app",messagingSenderId:"171021980471",appId:"1:171021980471:web:375df2a6e359b5e93500b2",measurementId:"G-HZXCF84BT5"},Ad=cu(ME),kr=LE(Ad),Q=i_(Ad);async function Pd(n,e,t=!1){try{console.log(`Saving sheet ${n} to Firestore with optimized structure...`);const r=(e.wells||[]).map(i=>({id:i.id,name:i.name,status:i.status||"active"})).filter(i=>i.status!=="inactive"),s=Oe(Q,"gaugeSheets",n);if(await ea(s,{id:e.id,name:e.name,lastUpdated:K.fromDate(new Date(e.lastUpdated)),rawRowCount:e.rawRowCount||0,wellList:r,wellCount:r.length},{merge:!0}),e.wells&&e.wells.length>0)for(const i of e.wells)await OE(n,i,t);return e.batteryProduction&&e.batteryProduction.length>0&&await UE(n,e.batteryProduction,t),e.runTickets&&e.runTickets.length>0&&await $E(n,e.runTickets,t),console.log(`Sheet ${n} saved successfully`),!0}catch(r){return console.error(`Error saving sheet ${n}:`,r),!1}}async function OE(n,e,t=!1){try{const r=Oe(Q,`gaugeSheets/${n}/wells`,e.id);let s=null;if(e.production&&e.production.length>0){const h=[...e.production].sort((d,p)=>new Date(p.date)-new Date(d.date))[0];s={date:K.fromDate(new Date(h.date)),oil:h.oil||0,water:h.water||0,gas:h.gas||0}}let i=null;if(e.wellTests&&e.wellTests.length>0){const h=[...e.wellTests].sort((d,p)=>new Date(p.date)-new Date(d.date))[0];i={date:K.fromDate(new Date(h.date)),oil:h.oil||0,water:h.water||0,gas:h.gas||0}}let o=null;if(e.production&&e.production.length>0){const c=new Date;c.setDate(c.getDate()-30);const h=e.production.filter(d=>new Date(d.date)>=c);if(h.length>0){const d=h.reduce((S,R)=>S+(R.oil||0),0),p=h.reduce((S,R)=>S+(R.water||0),0),g=h.reduce((S,R)=>S+(R.gas||0),0),I=h.length;o={avgOil:Math.round(d/I*100)/100,avgWater:Math.round(p/I*100)/100,avgGas:Math.round(g/I*100)/100,days:I}}}const l=e.actionItems&&e.actionItems.length>0;return await ea(r,{id:e.id,name:e.name,sheetId:n,status:e.status||"active",latestProduction:s,latestTest:i,dailyStats:o,hasActionItems:l,pressureReadings:e.pressureReadings||[],chemicalProgram:e.chemicalProgram||{},failureHistory:e.failureHistory||[],actionItems:e.actionItems||[]},{merge:!0}),e.production&&e.production.length>0&&await FE(n,e.id,e.production,t),e.wellTests&&e.wellTests.length>0&&await BE(n,e.id,e.wellTests,t),!0}catch(r){return console.error(`Error saving well ${e.id}:`,r),!1}}async function FE(n,e,t,r){try{if(r){const s=gr(Q);t.slice(-500).forEach(o=>{const l=new Date(o.date).toISOString().split("T")[0],c=Oe(Q,`gaugeSheets/${n}/wells/${e}/production`,l);s.set(c,{date:K.fromDate(new Date(o.date)),oil:o.oil||0,water:o.water||0,gas:o.gas||0})}),await s.commit()}else{const s=new Date;s.setDate(s.getDate()-30);const i=t.filter(o=>new Date(o.date)>=s);if(i.length>0){const o=gr(Q);let l=0;for(const c of i){const h=new Date(c.date).toISOString().split("T")[0],d=Oe(Q,`gaugeSheets/${n}/wells/${e}/production`,h);o.set(d,{date:K.fromDate(new Date(c.date)),oil:c.oil||0,water:c.water||0,gas:c.gas||0},{merge:!0}),l++,l>=500&&(await o.commit(),l=0)}l>0&&await o.commit()}}return!0}catch(s){return console.error("Error saving production data:",s),!1}}async function BE(n,e,t,r){try{const s=r?t:t.slice(-50);if(s.length>0){const i=gr(Q);s.forEach(o=>{const l=new Date(o.date).toISOString().split("T")[0],c=Oe(Q,`gaugeSheets/${n}/wells/${e}/wellTests`,l);i.set(c,{date:K.fromDate(new Date(o.date)),oil:o.oil||0,water:o.water||0,gas:o.gas||0},{merge:!0})}),await i.commit()}return!0}catch(s){return console.error("Error saving well tests:",s),!1}}async function UE(n,e,t=!1){try{let r;if(t)r=e.slice(-500);else{const s=new Date;s.setDate(s.getDate()-30),r=e.filter(i=>new Date(i.date)>=s)}if(r.length>0){const s=gr(Q);r.forEach(i=>{const o=new Date(i.date).toISOString().split("T")[0],l=Oe(Q,`gaugeSheets/${n}/batteryProduction`,o);s.set(l,{date:K.fromDate(new Date(i.date)),oil:i.oil||0,water:i.water||0,gas:i.gas||0},{merge:!0})}),await s.commit()}return!0}catch(r){return console.error("Error saving battery production:",r),!1}}async function $E(n,e,t=!1){try{let r;if(t)r=e;else{const s=new Date;s.setDate(s.getDate()-30),r=e.filter(i=>{if(!i.date)return!1;const o=new Date(i.date);return!isNaN(o.getTime())&&o>=s})}if(r.length>0){const s=gr(Q);r.forEach((i,o)=>{const l=i.date?new Date(i.date).toISOString().split("T")[0]:"unknown",c=Oe(Q,`gaugeSheets/${n}/runTickets`,`${l}_${o}`);let h=null;if(i.date){const d=new Date(i.date);isNaN(d.getTime())||(h=K.fromDate(d))}s.set(c,{...i,date:h},{merge:!0})}),await s.commit()}return!0}catch(r){return console.error("Error saving run tickets:",r),!1}}async function ua(){var n,e;try{console.log("Loading all data...");const t=performance.now(),r=De(Q,"gaugeSheets"),s=await ke(r),i={};let o=0;for(const c of s.docs){const h=c.data(),d=c.id;i[d]={id:h.id,name:h.name,lastUpdated:((e=(n=h.lastUpdated)==null?void 0:n.toDate)==null?void 0:e.call(n))||h.lastUpdated,rawRowCount:h.rawRowCount||0,wellList:h.wellList||[],wellCount:h.wellCount||0,wells:[],batteryProduction:[],runTickets:[],_metadataLoaded:!0,_wellsLoaded:!0};const p=De(Q,`gaugeSheets/${d}/wells`);(await ke(p)).docs.forEach(I=>{const S=I.data();i[d].wells.push({id:S.id,name:S.name,sheetId:S.sheetId,status:S.status||"active",latestProduction:S.latestProduction,latestTest:S.latestTest,dailyStats:S.dailyStats,hasActionItems:S.hasActionItems||!1,pressureReadings:S.pressureReadings||[],chemicalProgram:S.chemicalProgram||{},failureHistory:S.failureHistory||[],actionItems:S.actionItems||[],production:[],wellTests:[],_detailsLoaded:!1}),o++})}P.appData=i,P.loadedSheets=Object.keys(i);for(const c in i)P.metadataCache.wellCounts[c]=i[c].wells.length,P.metadataCache.wellNames[c]=i[c].wells.map(h=>({id:h.id,name:h.name}));const l=performance.now();return console.log(`✓ Loaded ${Object.keys(i).length} batteries, ${o} wells in ${Math.round(l-t)}ms`),!0}catch(t){return console.error("Error loading data:",t),P.appData={},!1}}async function Zs(){try{console.log("Preparing dashboard data from loaded wells...");const n=[];Object.keys(P.appData).forEach(s=>{const i=P.appData[s];i&&i.wells&&n.push(...i.wells.map(o=>({...o,sheetId:s})))});const e=n.filter(s=>s.status!=="inactive"&&s.latestProduction).sort((s,i)=>{var o,l;return(((o=i.latestProduction)==null?void 0:o.oil)||0)-(((l=s.latestProduction)==null?void 0:l.oil)||0)}).slice(0,10),t=n.filter(s=>s.status!=="inactive"&&s.latestTest).sort((s,i)=>{var c,h,d,p,g,I,S,R;const o=((d=(h=(c=s.latestTest)==null?void 0:c.date)==null?void 0:h.toDate)==null?void 0:d.call(h))||((p=s.latestTest)==null?void 0:p.date)||0;return(((S=(I=(g=i.latestTest)==null?void 0:g.date)==null?void 0:I.toDate)==null?void 0:S.call(I))||((R=i.latestTest)==null?void 0:R.date)||0)-o}).slice(0,10),r=n.filter(s=>s.hasActionItems);return P.dashboardData={topProducers:e,recentTests:t,actionItems:r},console.log(`✓ Dashboard prepared: ${e.length} top producers, ${t.length} recent tests, ${r.length} action items`),!0}catch(n){return console.error("Error preparing dashboard data:",n),!1}}async function ha(n){const e=P.appData[n];return e?(console.log(`✓ Wells already loaded for ${n}: ${e.wells.length} wells`),!0):(console.error(`Sheet ${n} not found in appData`),!1)}async function jE(n,e){try{console.log(`Loading full details for well ${e} in sheet ${n}...`);const t=P.appData[n];if(!t)return console.error(`Sheet ${n} not found in appData`),!1;let r=t.wells.find(d=>d.id===e);if(!r){const d=Oe(Q,`gaugeSheets/${n}/wells`,e),p=await co(d);if(!p.exists())return console.error(`Well ${e} not found in sheet ${n}`),!1;const g=p.data();r={id:g.id,name:g.name,production:[],wellTests:[],pressureReadings:g.pressureReadings||[],chemicalProgram:g.chemicalProgram||{},failureHistory:g.failureHistory||[],actionItems:g.actionItems||[],_detailsLoaded:!1},t.wells.push(r)}if(r._detailsLoaded&&!r._summaryOnly)return console.log(`Well details already loaded for ${e}`),!0;const s=De(Q,`gaugeSheets/${n}/wells/${e}/production`),i=await ke(s);r.production=i.docs.map(d=>{var p,g;return{...d.data(),date:((g=(p=d.data().date)==null?void 0:p.toDate)==null?void 0:g.call(p))||new Date(d.data().date)}});const o=De(Q,`gaugeSheets/${n}/wells/${e}/wellTests`),l=await ke(o);r.wellTests=l.docs.map(d=>{var p,g;return{...d.data(),date:((g=(p=d.data().date)==null?void 0:p.toDate)==null?void 0:g.call(p))||new Date(d.data().date)}});const c=Oe(Q,`gaugeSheets/${n}/wells`,e),h=await co(c);if(h.exists()){const d=h.data();r.pressureReadings=d.pressureReadings||[],r.chemicalProgram=d.chemicalProgram||{},r.failureHistory=d.failureHistory||[],r.actionItems=d.actionItems||[],r.status=d.status||"active"}return r._detailsLoaded=!0,r._summaryOnly=!1,console.log(`Loaded full details for well ${e}`),!0}catch(t){return console.error(`Error loading well details for ${e}:`,t),!1}}async function HE(n){try{console.log(`Loading aggregate data for ${n}...`);const e=P.appData[n];if(!e)return console.error(`Sheet ${n} not found in appData`),!1;const t=De(Q,`gaugeSheets/${n}/batteryProduction`),r=await ke(t);e.batteryProduction=r.docs.map(o=>{var l,c;return{...o.data(),date:((c=(l=o.data().date)==null?void 0:l.toDate)==null?void 0:c.call(l))||new Date(o.data().date)}});const s=De(Q,`gaugeSheets/${n}/runTickets`),i=await ke(s);return e.runTickets=i.docs.map(o=>o.data()),e._aggregateLoaded=!0,console.log(`Loaded aggregate data for ${n}`),!0}catch(e){return console.error(`Error loading aggregate data for ${n}:`,e),!1}}async function Rd(n){var e,t;try{console.log(`Fetching existing data for ${n} from Firestore...`);const r=Oe(Q,"gaugeSheets",n),s=await co(r);if(!s.exists())return console.log(`No existing data found for ${n}`),null;const i=s.data(),o=De(Q,`gaugeSheets/${n}/wells`),c=(await ke(o)).docs.map(h=>{const d=h.data();return{id:d.id,name:d.name,status:d.status||"active",pressureReadings:d.pressureReadings||[],chemicalProgram:d.chemicalProgram||{},failureHistory:d.failureHistory||[],actionItems:d.actionItems||[],production:[],wellTests:[]}});return console.log(`✓ Fetched ${c.length} wells with manual edits from Firestore`),{id:i.id,name:i.name,lastUpdated:((t=(e=i.lastUpdated)==null?void 0:e.toDate)==null?void 0:t.call(e))||i.lastUpdated,rawRowCount:i.rawRowCount||0,wells:c,batteryProduction:[],runTickets:[]}}catch(r){return console.error(`Error fetching sheet ${n} from Firestore:`,r),null}}async function WE(n,e,t){var r;try{t.actionItems!==void 0&&(t.hasActionItems=t.actionItems&&t.actionItems.length>0);const s=Oe(Q,`gaugeSheets/${n}/wells`,e);await ea(s,t,{merge:!0});const i=(r=P.appData[n])==null?void 0:r.wells.find(o=>o.id===e);return i&&Object.assign(i,t),console.log(`✓ Manual edit saved for well ${e}`),!0}catch(s){return console.error("Error updating well:",s),!1}}async function qE(){try{console.log("Clearing Firestore data...");const n=De(Q,"gaugeSheets"),e=await ke(n);for(const t of e.docs)await zE(t.id);return P.appData={},P.dashboardData=null,console.log("Firestore data cleared successfully"),!0}catch(n){return console.error("Error clearing Firestore data:",n),!1}}async function zE(n){try{const e=De(Q,`gaugeSheets/${n}/wells`),t=await ke(e);for(const c of t.docs){const h=De(Q,`gaugeSheets/${n}/wells/${c.id}/production`),d=await ke(h);for(const I of d.docs)await nn(I.ref);const p=De(Q,`gaugeSheets/${n}/wells/${c.id}/wellTests`),g=await ke(p);for(const I of g.docs)await nn(I.ref);await nn(c.ref)}const r=De(Q,`gaugeSheets/${n}/batteryProduction`),s=await ke(r);for(const c of s.docs)await nn(c.ref);const i=De(Q,`gaugeSheets/${n}/runTickets`),o=await ke(i);for(const c of o.docs)await nn(c.ref);const l=Oe(Q,"gaugeSheets",n);return await nn(l),!0}catch(e){return console.error(`Error deleting sheet ${n}:`,e),!1}}function vn(n){if(!n)return"-";try{const e=new Date(n);return isNaN(e.getTime())?n:e.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"2-digit"})}catch{return n}}function mo(n){if(!n)return"";try{const e=new Date(n);return isNaN(e.getTime())?"":e.toISOString().split("T")[0]}catch{return""}}function Dd(n){if(!n)return"";const e=document.createElement("div");return e.textContent=n,e.innerHTML}function da(n,e=null,t=null){const r=document.getElementById("productionChartsWrapper");P.currentWellData=n,Object.values(P.wellProductionCharts).forEach(h=>{h&&h.destroy()}),P.wellProductionCharts={},r.innerHTML="";const s=n.production||[],i=n.wellTests||[],o=s.filter(h=>h.date).map(h=>new Date(h.date)).filter(h=>!isNaN(h.getTime()));o.length>0&&(P.productionDateRange.min=new Date(Math.min(...o)),P.productionDateRange.max=new Date(Math.max(...o)),GE(e,t));const c=[{key:"oil",label:"Oil (BBL)",unit:"BBL",color:"#78716c",dataKey:"oil",source:"production"},{key:"water",label:"Water (BBL)",unit:"BBL",color:"#3b82f6",dataKey:"water",source:"production"},{key:"gas",label:"Gas (MCF)",unit:"MCF",color:"#22c55e",dataKey:"gas",source:"production"}].filter(h=>(h.source==="production"?s:i).some(p=>p[h.dataKey]!==null&&p[h.dataKey]!==void 0&&!isNaN(p[h.dataKey])));if(c.length===0){r.innerHTML='<div class="chart-placeholder">No production data available</div>';return}c.forEach(h=>{const d=document.createElement("div");d.className="chart-section",d.innerHTML=`
            <div class="chart-label">${h.label}</div>
            <div class="canvas-wrapper">
                <canvas id="chart-${h.key}"></canvas>
            </div>
        `,r.appendChild(d);let g=(h.source==="production"?s:i).filter(S=>S.date&&S[h.dataKey]!==null&&S[h.dataKey]!==void 0).map(S=>({x:new Date(S.date),y:Number(S[h.dataKey])})).filter(S=>!isNaN(S.y)).sort((S,R)=>S.x-R.x);(e||t)&&(g=g.filter(S=>{const R=S.x.getTime();return!(e&&R<e.getTime()||t&&R>t.getTime())}));const I=document.getElementById(`chart-${h.key}`).getContext("2d");P.wellProductionCharts[h.key]=new Chart(I,{type:"scatter",data:{datasets:[{label:h.label,data:g,backgroundColor:h.color,borderColor:h.color,pointRadius:3,pointHoverRadius:5}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#282c33",titleColor:"#e8e9eb",bodyColor:"#e8e9eb",callbacks:{title:S=>new Date(S[0].parsed.x).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),label:S=>`${h.label}: ${S.parsed.y}`}}},scales:{x:{type:"time",time:{displayFormats:{day:"MMM-yy",week:"MMM-yy",month:"MMM-yy",quarter:"MMM-yy",year:"yyyy"}},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab",maxTicksLimit:8}},y:{beginAtZero:!0,title:{display:!0,text:h.unit,color:"#9ea3ab"},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab"}}}}})})}function GE(n=null,e=null){const t=document.getElementById("productionStartDate"),r=document.getElementById("productionEndDate"),s=document.getElementById("btnResetDates");if(!t||!r||!P.productionDateRange.min||!P.productionDateRange.max)return;const i=p=>p?new Date(p).toISOString().split("T")[0]:"",o=i(P.productionDateRange.min),l=i(P.productionDateRange.max);t.min=o,t.max=l,r.min=o,r.max=l,t.value=n?i(n):o,r.value=e?i(e):l;const c=t.cloneNode(!0),h=r.cloneNode(!0),d=s.cloneNode(!0);t.parentNode.replaceChild(c,t),r.parentNode.replaceChild(h,r),s.parentNode.replaceChild(d,s),c.addEventListener("change",Gc),h.addEventListener("change",Gc),d.addEventListener("click",KE)}function Gc(){if(!P.currentWellData)return;const n=document.getElementById("productionStartDate"),e=document.getElementById("productionEndDate"),t=n.value?new Date(n.value):null,r=e.value?new Date(e.value+"T23:59:59"):null;da(P.currentWellData,t,r)}function KE(){P.currentWellData&&da(P.currentWellData,null,null)}let go=null;function XE(n){go=n}function QE(){document.querySelectorAll(".btn-edit[data-edit]").forEach(i=>{const o=i.cloneNode(!0);i.parentNode.replaceChild(o,i),o.addEventListener("click",l=>{l.stopPropagation();const c=o.dataset.edit;JE(c)})});const e=document.getElementById("btnCloseModal"),t=document.getElementById("btnCancelEdit"),r=document.getElementById("editModalOverlay"),s=document.getElementById("btnSaveEdit");if(e){const i=e.cloneNode(!0);e.parentNode.replaceChild(i,e),i.addEventListener("click",cs)}if(t){const i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),i.addEventListener("click",cs)}if(r){const i=r.cloneNode(!0);r.parentNode.replaceChild(i,r),i.addEventListener("click",cs)}if(s){const i=s.cloneNode(!0);s.parentNode.replaceChild(i,s),i.addEventListener("click",iT)}}function JE(n){if(!P.currentSheet||!P.currentWell)return;const e=P.appData[P.currentSheet];if(!e||!e.wells)return;const t=e.wells.find(l=>l.id===P.currentWell);if(!t)return;P.currentEditSection=n;const r=document.getElementById("editModal"),s=document.getElementById("editModalTitle"),i=document.getElementById("editModalBody"),o={chemicalProgram:"Edit Chemical Program",failureHistory:"Edit Failure History",actionItems:"Edit Action Items",pressureReadings:"Edit Pressure Readings"};switch(s.textContent=o[n]||"Edit",n){case"chemicalProgram":i.innerHTML=YE(t.chemicalProgram||{});break;case"failureHistory":i.innerHTML=ZE(t.failureHistory||[]),eT();break;case"actionItems":i.innerHTML=tT(t.actionItems||[]),nT();break;case"pressureReadings":i.innerHTML=rT(t.pressureReadings||[]),sT();break}r.classList.add("visible")}function cs(){document.getElementById("editModal").classList.remove("visible"),P.currentEditSection=null}function YE(n){const e=n.continuous||{},t=n.truckTreat||{};return`
        <div class="chemical-form-grid">
            <div class="form-column-header"></div>
            <div class="form-column-header">Continuous</div>
            <div class="form-column-header">Truck Treat</div>

            <div class="form-row-label">Rate (gal/month)</div>
            <input type="text" class="edit-form-input" id="editChemContRate" value="${e.rate||""}" placeholder="-">
            <input type="text" class="edit-form-input" id="editChemTruckRate" value="${t.rate||""}" placeholder="-">

            <div class="form-row-label">Chems Used</div>
            <input type="text" class="edit-form-input" id="editChemContChems" value="${e.chems||""}" placeholder="-">
            <input type="text" class="edit-form-input" id="editChemTruckChems" value="${t.chems||""}" placeholder="-">

            <div class="form-row-label">PPM</div>
            <input type="text" class="edit-form-input" id="editChemContPPM" value="${e.ppm||""}" placeholder="-">
            <input type="text" class="edit-form-input" id="editChemTruckPPM" value="${t.ppm||""}" placeholder="-">
        </div>
    `}function ZE(n){let e="";return n.length>0&&(e=n.map((t,r)=>`
            <tr data-row-index="${r}">
                <td><input type="date" class="edit-table-input" name="dateDown" value="${mo(t.dateDown)}"></td>
                <td><input type="date" class="edit-table-input" name="dateUp" value="${mo(t.dateUp)}"></td>
                <td><input type="number" class="edit-table-input" name="downtime" value="${t.downtime||""}" placeholder="-"></td>
                <td><input type="number" class="edit-table-input" name="oil" value="${t.oil||""}" placeholder="-"></td>
                <td><input type="text" class="edit-table-input" name="reason" value="${t.reason||""}" placeholder="-"></td>
                <td><input type="text" class="edit-table-input" name="comments" value="${t.comments||""}" placeholder="-"></td>
                <td>
                    <button type="button" class="btn-delete-row" title="Delete row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </td>
            </tr>
        `).join("")),`
        <div class="edit-table-container">
            <table class="edit-table" id="failureEditTable">
                <thead>
                    <tr>
                        <th>Date Down</th>
                        <th>Date Up</th>
                        <th>Downtime (days)</th>
                        <th>Oil Lost</th>
                        <th>Reason</th>
                        <th>Comments</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="failureEditBody">
                    ${e}
                </tbody>
            </table>
        </div>
        <button type="button" class="btn-add-row" id="btnAddFailureRow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add Entry
        </button>
    `}function eT(){const n=document.getElementById("btnAddFailureRow"),e=document.getElementById("failureEditBody");n&&n.addEventListener("click",()=>{const t=document.createElement("tr");t.innerHTML=`
                <td><input type="date" class="edit-table-input" name="dateDown"></td>
                <td><input type="date" class="edit-table-input" name="dateUp"></td>
                <td><input type="number" class="edit-table-input" name="downtime" placeholder="-"></td>
                <td><input type="number" class="edit-table-input" name="oil" placeholder="-"></td>
                <td><input type="text" class="edit-table-input" name="reason" placeholder="-"></td>
                <td><input type="text" class="edit-table-input" name="comments" placeholder="-"></td>
                <td>
                    <button type="button" class="btn-delete-row" title="Delete row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </td>
            `,e.appendChild(t),Ds(t.querySelector(".btn-delete-row"))}),e.querySelectorAll(".btn-delete-row").forEach(t=>{Ds(t)})}function tT(n){let e="";return n.length>0?e=n.map((t,r)=>`
            <div class="action-item-row" data-item-index="${r}">
                <input type="text" class="edit-form-input" name="actionItem" value="${Dd(t)}">
                <button type="button" class="btn-delete-item" title="Delete item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        `).join(""):e='<div class="action-items-empty">No action items. Add one below.</div>',`
        <div class="action-items-editor" id="actionItemsEditor">
            ${e}
        </div>
        <div class="action-items-add-row">
            <input type="text" class="edit-form-input" id="newActionItem" placeholder="Enter new action item...">
            <button type="button" class="btn-add-item" id="btnAddActionItem">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Add
            </button>
        </div>
    `}function nT(){const n=document.getElementById("btnAddActionItem"),e=document.getElementById("newActionItem"),t=document.getElementById("actionItemsEditor"),r=()=>{const s=e.value.trim();if(!s)return;const i=t.querySelector(".action-items-empty");i&&i.remove();const o=document.createElement("div");o.className="action-item-row",o.innerHTML=`
            <input type="text" class="edit-form-input" name="actionItem" value="${Dd(s)}">
            <button type="button" class="btn-delete-item" title="Delete item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        `,t.appendChild(o),Kc(o.querySelector(".btn-delete-item")),e.value="",e.focus()};n&&n.addEventListener("click",r),e&&e.addEventListener("keypress",s=>{s.key==="Enter"&&(s.preventDefault(),r())}),t.querySelectorAll(".btn-delete-item").forEach(s=>{Kc(s)})}function Kc(n){n.addEventListener("click",()=>{n.closest(".action-item-row").remove();const t=document.getElementById("actionItemsEditor");t.querySelectorAll(".action-item-row").length===0&&(t.innerHTML='<div class="action-items-empty">No action items. Add one below.</div>')})}function rT(n){let e="";return n.length>0&&(e=n.map((t,r)=>`
            <tr data-row-index="${r}">
                <td><input type="date" class="edit-table-input" name="date" value="${mo(t.date)}"></td>
                <td><input type="number" class="edit-table-input" name="casingPsi" value="${t.casingPsi||""}" placeholder="-"></td>
                <td><input type="number" class="edit-table-input" name="tubingPsi" value="${t.tubingPsi||""}" placeholder="-"></td>
                <td><input type="number" class="edit-table-input" name="flowlinePsi" value="${t.flowlinePsi||""}" placeholder="-"></td>
                <td><input type="number" class="edit-table-input" name="injVol" value="${t.injVol||""}" placeholder="-"></td>
                <td>
                    <button type="button" class="btn-delete-row" title="Delete row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </td>
            </tr>
        `).join("")),`
        <div class="edit-table-container">
            <table class="edit-table" id="pressureEditTable">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Casing PSI</th>
                        <th>Tubing PSI</th>
                        <th>Flowline PSI</th>
                        <th>Inj Vol</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="pressureEditBody">
                    ${e}
                </tbody>
            </table>
        </div>
        <button type="button" class="btn-add-row" id="btnAddPressureRow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add Entry
        </button>
    `}function sT(){const n=document.getElementById("btnAddPressureRow"),e=document.getElementById("pressureEditBody");n&&n.addEventListener("click",()=>{const t=document.createElement("tr");t.innerHTML=`
                <td><input type="date" class="edit-table-input" name="date"></td>
                <td><input type="number" class="edit-table-input" name="casingPsi" placeholder="-"></td>
                <td><input type="number" class="edit-table-input" name="tubingPsi" placeholder="-"></td>
                <td><input type="number" class="edit-table-input" name="flowlinePsi" placeholder="-"></td>
                <td><input type="number" class="edit-table-input" name="injVol" placeholder="-"></td>
                <td>
                    <button type="button" class="btn-delete-row" title="Delete row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </td>
            `,e.appendChild(t),Ds(t.querySelector(".btn-delete-row"))}),e.querySelectorAll(".btn-delete-row").forEach(t=>{Ds(t)})}function Ds(n){n.addEventListener("click",()=>{n.closest("tr").remove()})}async function iT(){if(!P.currentSheet||!P.currentWell||!P.currentEditSection)return;const n=P.appData[P.currentSheet];if(!n||!n.wells)return;const e=n.wells.findIndex(s=>s.id===P.currentWell);if(e===-1)return;const t=n.wells[e],r={};switch(P.currentEditSection){case"chemicalProgram":t.chemicalProgram=oT(),r.chemicalProgram=t.chemicalProgram;break;case"failureHistory":t.failureHistory=aT(),r.failureHistory=t.failureHistory;break;case"actionItems":t.actionItems=lT(),r.actionItems=t.actionItems;break;case"pressureReadings":t.pressureReadings=cT(),r.pressureReadings=t.pressureReadings;break}await WE(P.currentSheet,P.currentWell,r),cs(),go&&go(P.currentSheet,P.currentWell)}function oT(){var n,e,t,r,s,i;return{continuous:{rate:((n=document.getElementById("editChemContRate"))==null?void 0:n.value)||"",chems:((e=document.getElementById("editChemContChems"))==null?void 0:e.value)||"",ppm:((t=document.getElementById("editChemContPPM"))==null?void 0:t.value)||""},truckTreat:{rate:((r=document.getElementById("editChemTruckRate"))==null?void 0:r.value)||"",chems:((s=document.getElementById("editChemTruckChems"))==null?void 0:s.value)||"",ppm:((i=document.getElementById("editChemTruckPPM"))==null?void 0:i.value)||""}}}function aT(){const e=document.getElementById("failureEditBody").querySelectorAll("tr"),t=[];return e.forEach(r=>{var d,p,g,I,S,R;const s=(d=r.querySelector('input[name="dateDown"]'))==null?void 0:d.value,i=(p=r.querySelector('input[name="dateUp"]'))==null?void 0:p.value,o=(g=r.querySelector('input[name="downtime"]'))==null?void 0:g.value,l=(I=r.querySelector('input[name="oil"]'))==null?void 0:I.value,c=(S=r.querySelector('input[name="reason"]'))==null?void 0:S.value,h=(R=r.querySelector('input[name="comments"]'))==null?void 0:R.value;(s||i||o||l||c||h)&&t.push({dateDown:s||null,dateUp:i||null,downtime:o?Number(o):null,oil:l?Number(l):null,reason:c||"",comments:h||""})}),t}function lT(){const e=document.getElementById("actionItemsEditor").querySelectorAll('input[name="actionItem"]'),t=[];return e.forEach(r=>{const s=r.value.trim();s&&t.push(s)}),t}function cT(){const e=document.getElementById("pressureEditBody").querySelectorAll("tr"),t=[];return e.forEach(r=>{var h,d,p,g,I;const s=(h=r.querySelector('input[name="date"]'))==null?void 0:h.value,i=(d=r.querySelector('input[name="casingPsi"]'))==null?void 0:d.value,o=(p=r.querySelector('input[name="tubingPsi"]'))==null?void 0:p.value,l=(g=r.querySelector('input[name="flowlinePsi"]'))==null?void 0:g.value,c=(I=r.querySelector('input[name="injVol"]'))==null?void 0:I.value;(s||i||o||l||c)&&t.push({date:s||null,casingPsi:i?Number(i):null,tubingPsi:o?Number(o):null,flowlinePsi:l?Number(l):null,injVol:c?Number(c):null})}),t}function uT(){let n=0,e=0,t=0;if(P.dashboardData&&P.dashboardData.topProducers&&(Object.keys(P.appData).forEach(s=>{const i=P.appData[s];i&&i.wells&&i.wells.length>0&&i.wells.forEach(o=>{o.status!=="inactive"&&o.latestProduction&&(n+=Number(o.latestProduction.oil)||0,e+=Number(o.latestProduction.water)||0,t+=Math.max(0,Number(o.latestProduction.gas)||0))})}),n>0||e>0||t>0))return{totalOil:Math.round(n*100)/100,totalWater:Math.round(e*100)/100,totalGas:Math.round(t*100)/100};const r=new Date;return r.setHours(23,59,59,999),Object.keys(P.appData).forEach(s=>{const i=P.appData[s];if(i)if(i.batteryProduction&&i.batteryProduction.length>0){const o=i.batteryProduction.filter(l=>new Date(l.date)<=r);if(o.length>0){o.sort((c,h)=>new Date(h.date)-new Date(c.date));const l=o[0];l.oil!==null&&!isNaN(l.oil)&&(n+=Number(l.oil)),l.water!==null&&!isNaN(l.water)&&(e+=Number(l.water)),l.gas!==null&&!isNaN(l.gas)&&(t+=Math.max(0,Number(l.gas)))}}else i.wells&&i.wells.length>0&&i.wells.forEach(o=>{if(o.status!=="inactive"&&o.wellTests&&o.wellTests.length>0){const l=o.wellTests.filter(c=>new Date(c.date)<=r);if(l.length>0){const c=l[0];c.oil!==null&&!isNaN(c.oil)&&(n+=Number(c.oil)),c.water!==null&&!isNaN(c.water)&&(e+=Number(c.water)),c.gas!==null&&!isNaN(c.gas)&&(t+=Math.max(0,Number(c.gas)))}}})}),{totalOil:Math.round(n*100)/100,totalWater:Math.round(e*100)/100,totalGas:Math.round(t*100)/100}}function hT(n="oil",e=null,t=null,r="month",s=null){const i=new Map;let o=null,l=null;const c=new Date;c.setHours(23,59,59,999);const h=p=>{const g=new Date(p);if(r==="week"){const I=g.getUTCDay(),S=I===0?-6:1-I;g.setUTCDate(g.getUTCDate()+S)}else r==="month"&&g.setUTCDate(1);return g.setUTCHours(0,0,0,0),g};Object.keys(P.appData).forEach(p=>{const g=P.appData[p];if(!g||s&&!s.has(p))return;(g.batteryProduction||[]).forEach(S=>{if(!S.date)return;const R=new Date(S.date);if(isNaN(R.getTime())||R>c)return;let N=S[n];if(N==null||isNaN(N))return;n==="gas"&&N<0&&(N=0);const B=h(R);(!o||B<o)&&(o=B),(!l||B>l)&&(l=B);const U=B.toISOString().split("T")[0],X=i.get(U)||0;i.set(U,X+Number(N))})});let d=Array.from(i.entries()).map(([p,g])=>({x:new Date(p),y:g})).sort((p,g)=>p.x-g.x);return(e||t)&&(d=d.filter(p=>{const g=p.x.getTime();return!(e&&g<e.getTime()||t&&g>t.getTime())})),{data:d,dateRange:{min:o,max:l}}}function dT(n=10){if(P.dashboardData&&P.dashboardData.topProducers)return P.dashboardData.topProducers.slice(0,n).map(r=>{const s=Me.find(i=>i.id===r.sheetId);return{wellId:r.id,wellName:r.name,sheetId:r.sheetId,batteryName:s?s.name:"Unknown",oil:r.latestProduction?Math.round(Number(r.latestProduction.oil)*100)/100:0,water:r.latestProduction?Math.round(Number(r.latestProduction.water)*100)/100:0}});const e=[],t=new Date;return t.setHours(23,59,59,999),Object.keys(P.appData).forEach(r=>{const s=P.appData[r],i=Me.find(o=>o.id===r);s&&s.wells&&i&&s.wells.forEach(o=>{if(o.status==="inactive")return;let l=null,c=null;if(o.wellTests&&o.wellTests.length>0){const h=o.wellTests.filter(d=>new Date(d.date)<=t);if(h.length>0){const d=h[0];l=d.oil,c=d.water}}e.push({wellId:o.id,wellName:o.name,sheetId:r,batteryName:i.name,oil:l!==null?Math.round(Number(l)*100)/100:0,water:c!==null?Math.round(Number(c)*100)/100:0})})}),e.sort((r,s)=>s.oil-r.oil),e.slice(0,n)}function fT(n=10){if(P.dashboardData&&P.dashboardData.recentTests)return P.dashboardData.recentTests.slice(0,n).map(r=>{const s=Me.find(o=>o.id===r.sheetId);return{date:r.latestTest&&r.latestTest.date?r.latestTest.date.toDate?r.latestTest.date.toDate():new Date(r.latestTest.date):new Date,wellId:r.id,wellName:r.name,sheetId:r.sheetId,batteryName:s?s.name:"Unknown",oil:r.latestTest?Math.round(Number(r.latestTest.oil)*100)/100:null,water:r.latestTest?Math.round(Number(r.latestTest.water)*100)/100:null,gas:r.latestTest?Math.round(Math.max(0,Number(r.latestTest.gas))*100)/100:null}});const e=[],t=new Date;return t.setHours(23,59,59,999),Object.keys(P.appData).forEach(r=>{const s=P.appData[r],i=Me.find(o=>o.id===r);s&&s.wells&&i&&s.wells.forEach(o=>{o.status!=="inactive"&&o.wellTests&&o.wellTests.length>0&&o.wellTests.forEach(l=>{if(l.date){const c=new Date(l.date);if(c>t)return;e.push({date:c,wellId:o.id,wellName:o.name,sheetId:r,batteryName:i.name,oil:l.oil!==null?Math.round(l.oil*100)/100:null,water:l.water!==null?Math.round(l.water*100)/100:null,gas:l.gas!==null?Math.round(Math.max(0,l.gas)*100)/100:null})}})})}),e.sort((r,s)=>s.date-r.date),e.slice(0,n)}function pT(n=15){if(P.dashboardData&&P.dashboardData.actionItems){const t=[];return P.dashboardData.actionItems.forEach(r=>{const s=Me.find(i=>i.id===r.sheetId);r.actionItems&&r.actionItems.length>0&&r.actionItems.forEach(i=>{i&&i.trim()&&t.push({content:i,wellId:r.id,wellName:r.name,sheetId:r.sheetId,batteryName:s?s.name:"Unknown"})})}),t.slice(0,n)}const e=[];return Object.keys(P.appData).forEach(t=>{const r=P.appData[t],s=Me.find(i=>i.id===t);r&&r.wells&&s&&r.wells.forEach(i=>{i.status!=="inactive"&&i.actionItems&&i.actionItems.length>0&&i.actionItems.forEach(o=>{o&&o.trim()&&e.push({content:o,wellId:i.id,wellName:i.name,sheetId:t,batteryName:s.name})})})}),e.slice(0,n)}function mT(){return Object.keys(P.appData).some(n=>P.appData[n]&&P.appData[n].wells&&P.appData[n].wells.length>0)}const fa='<div class="loading-placeholder"><div class="loading-spinner-small"></div><span>Loading...</span></div>';let yo=null;function gT(n){yo=n}function yT(){_T(),wT(),ET(),TT()}function _T(){const n=document.getElementById("statDailyOil"),e=document.getElementById("statDailyWater"),t=document.getElementById("statDailyGas");if(P.isLoading){n.innerHTML='<span class="loading-text">...</span>',e.innerHTML='<span class="loading-text">...</span>',t.innerHTML='<span class="loading-text">...</span>';return}const r=uT();n.textContent=r.totalOil.toLocaleString(),e.textContent=r.totalWater.toLocaleString(),t.textContent=r.totalGas.toLocaleString()}function wT(){const n=document.getElementById("topProducersBody");if(P.isLoading){n.innerHTML='<tr><td colspan="5" class="dashboard-loading">'+fa+"</td></tr>";return}const e=dT(10);if(e.length===0){n.innerHTML='<tr><td colspan="5" class="dashboard-empty">No production data available</td></tr>';return}n.innerHTML=e.map((t,r)=>`
        <tr data-well-id="${t.wellId}" data-sheet-id="${t.sheetId}">
            <td>${r+1}</td>
            <td class="well-name-cell">${t.wellName}</td>
            <td class="battery-name-cell">${t.batteryName}</td>
            <td>${t.oil>0?t.oil:"-"}</td>
            <td>${t.water>0?t.water:"-"}</td>
        </tr>
    `).join(""),n.querySelectorAll("tr[data-well-id]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.wellId,s=t.dataset.sheetId;Nn(s,r)})})}function ET(){const n=document.getElementById("recentTestsBody");if(P.isLoading){n.innerHTML='<tr><td colspan="6" class="dashboard-loading">'+fa+"</td></tr>";return}const e=fT(10);if(e.length===0){n.innerHTML='<tr><td colspan="6" class="dashboard-empty">No test data available</td></tr>';return}n.innerHTML=e.map(t=>`
        <tr data-well-id="${t.wellId}" data-sheet-id="${t.sheetId}">
            <td>${vn(t.date)}</td>
            <td class="well-name-cell">${t.wellName}</td>
            <td class="battery-name-cell">${t.batteryName}</td>
            <td>${t.oil!==null?t.oil:"-"}</td>
            <td>${t.water!==null?t.water:"-"}</td>
            <td>${t.gas!==null?t.gas:"-"}</td>
        </tr>
    `).join(""),n.querySelectorAll("tr[data-well-id]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.wellId,s=t.dataset.sheetId;Nn(s,r)})})}function TT(){const n=document.getElementById("dashboardActionList");if(P.isLoading){n.innerHTML='<li class="dashboard-loading" style="border-left-color: #6b7280;">'+fa+"</li>";return}const e=pT(15);if(e.length===0){n.innerHTML='<li class="dashboard-empty" style="border-left-color: #6b7280; opacity: 0.7;">No action items</li>';return}n.innerHTML=e.map(t=>`
        <li data-well-id="${t.wellId}" data-sheet-id="${t.sheetId}">
            <div class="action-item-content">${t.content}</div>
            <div class="action-item-source">
                <span class="source-well">${t.wellName}</span> - ${t.batteryName}
            </div>
        </li>
    `).join(""),n.querySelectorAll("li[data-well-id]").forEach(t=>{t.style.cursor="pointer",t.addEventListener("click",()=>{const r=t.dataset.wellId,s=t.dataset.sheetId;Nn(s,r)})})}function vT(){const n=document.getElementById("btnReuploadAll"),e=document.getElementById("btnClearCache"),t=document.getElementById("reuploadModal"),r=document.getElementById("btnCloseReuploadModal"),s=document.getElementById("reuploadModalOverlay");n&&n.addEventListener("click",()=>{t&&t.classList.add("visible")}),r&&r.addEventListener("click",()=>{t&&t.classList.remove("visible")}),s&&s.addEventListener("click",()=>{t&&t.classList.remove("visible")}),e&&e.addEventListener("click",async()=>{confirm("Clear all data from the cloud? You will need to re-upload your gauge sheets.")&&await IT()})}async function IT(){await qE(),yo&&yo()}function Fi(n,e,t){if(!n||n.length===0){alert("No data available to download.");return}const r=[];r.push(e.join(",")),n.forEach(c=>{const h=e.map(d=>{const p=c[d.toLowerCase().replace(/[^a-z0-9]/g,"")]??c[d]??"",g=String(p).replace(/"/g,'""');return g.includes(",")||g.includes('"')||g.includes(`
`)?`"${g}"`:g});r.push(h.join(","))});const s=r.join(`
`),i=new Blob([s],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a"),l=URL.createObjectURL(i);o.setAttribute("href",l),o.setAttribute("download",t),o.style.visibility="hidden",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(l)}function Bi(n){return n?new Date(n).toLocaleDateString("en-US"):""}function Lt(n){document.querySelectorAll(".view").forEach(r=>r.classList.remove("active"));const t={welcome:"welcomeView",gaugeSheet:"gaugeSheetView",well:"wellView",battery:"batteryView",oilChart:"oilChartView",waterChart:"waterChartView",gasChart:"gasChartView"}[n];t&&document.getElementById(t).classList.add("active")}async function In(){const n=document.getElementById("operationsDashboard");n&&(n.style.display="block",await Zs(),yT())}async function kd(n){const e=Me.find(i=>i.id===n);if(!e)return;P.currentSheet=n,Lt("gaugeSheet"),document.getElementById("sheetName").textContent=e.name,document.getElementById("sheetBreadcrumb").textContent=`Gauge Sheet: ${e.fileName}`,document.getElementById("expectedFileName").textContent=e.fileName;const t=P.appData[n],r=document.getElementById("uploadPrompt"),s=document.getElementById("uploadStatus");if(t&&t._metadataLoaded){if(r.style.display="none",s.style.display="flex",document.getElementById("lastUploadDate").textContent=vn(t.lastUpdated),document.getElementById("rowCount").textContent=t.rawRowCount||"-",!t._wellsLoaded){const i=document.getElementById("wellsGrid");i.innerHTML='<div class="loading-placeholder"><div class="loading-spinner-small"></div><span>Loading wells...</span></div>',await ha(n)}}else r.style.display="block",s.style.display="none";bT(n)}async function Nn(n,e){const t=P.appData[n];if(!t)return;t._wellsLoaded||await ha(n);let r=t.wells.find(i=>i.id===e);if(!r)return;P.currentSheet=n,P.currentWell=e,Lt("well");const s=Me.find(i=>i.id===n);document.getElementById("wellName").textContent=r.name,document.getElementById("wellBreadcrumb").textContent=`${s.name} > ${r.name}`,!((!r._detailsLoaded||r._summaryOnly)&&(CT(),await jE(n,e),r=t.wells.find(i=>i.id===e),!r))&&(da(r),AT(r.wellTests||[]),PT(r.chemicalProgram||{}),RT(r.failureHistory||[]),DT("wellActionList",r.actionItems||[]),kT(r.pressureReadings||[]),NT(r.pressureReadings||[]),QE(),ST(r))}function CT(){const n='<div class="loading-placeholder"><div class="loading-spinner-small"></div><span>Loading well data...</span></div>',e=document.querySelector("#productionChartCard .card-body");e&&(e.innerHTML=n);const t=document.querySelector("#wellTestTable tbody");t&&(t.innerHTML='<tr><td colspan="4" class="dashboard-loading">'+n+"</td></tr>");const r=document.querySelector("#pressureTable tbody");r&&(r.innerHTML='<tr><td colspan="5" class="dashboard-loading">'+n+"</td></tr>");const s=document.querySelector("#failureTable tbody");s&&(s.innerHTML='<tr><td colspan="6" class="dashboard-loading">'+n+"</td></tr>")}function ST(n){const e=n.name.replace(/[^a-zA-Z0-9]/g,"_"),t=document.getElementById("btnDownloadProduction");if(t){const i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),i.addEventListener("click",()=>{const o=n.production||[],l=document.getElementById("productionStartDate"),c=document.getElementById("productionEndDate");let h=o.filter(p=>p.date);if(l&&l.value){const p=new Date(l.value);h=h.filter(g=>new Date(g.date)>=p)}if(c&&c.value){const p=new Date(c.value);p.setHours(23,59,59,999),h=h.filter(g=>new Date(g.date)<=p)}h.sort((p,g)=>new Date(p.date)-new Date(g.date));const d=h.map(p=>({date:Bi(p.date),oilbbl:p.oil!==null&&p.oil!==void 0?Math.round(p.oil*100)/100:"",waterbbl:p.water!==null&&p.water!==void 0?Math.round(p.water*100)/100:"",gasmcf:p.gas!==null&&p.gas!==void 0?Math.round(Math.max(0,p.gas)*100)/100:""}));Fi(d,["Date","Oil (bbl)","Water (bbl)","Gas (mcf)"],`${e}_Production.csv`)})}const r=document.getElementById("btnDownloadWellTests");if(r){const i=r.cloneNode(!0);r.parentNode.replaceChild(i,r),i.addEventListener("click",()=>{const o=n.wellTests||[],l=new Date;l.setHours(23,59,59,999);const h=o.filter(d=>new Date(d.date)<=l).map(d=>({date:Bi(d.date),oilbbl:d.oil!==null?Math.round(d.oil*100)/100:"",waterbbl:d.water!==null?Math.round(d.water*100)/100:"",gasmcf:d.gas!==null?Math.round(Math.max(0,d.gas)*100)/100:""}));Fi(h,["Date","Oil (bbl)","Water (bbl)","Gas (mcf)"],`${e}_Well_Tests.csv`)})}const s=document.getElementById("btnDownloadPressure");if(s){const i=s.cloneNode(!0);s.parentNode.replaceChild(i,s),i.addEventListener("click",()=>{const l=(n.pressureReadings||[]).map(c=>({date:Bi(c.date),casingpsi:c.casingPsi||"",tubingpsi:c.tubingPsi||"",flowlinepsi:c.flowlinePsi||"",injvol:c.injVol||""}));Fi(l,["Date","Casing PSI","Tubing PSI","Flowline PSI","Inj Vol"],`${e}_Pressure_Readings.csv`)})}}function bT(n){const e=document.getElementById("wellsGrid"),t=P.appData[n];if(!t||!t.wells||t.wells.length===0){e.innerHTML='<p class="empty-message">Upload gauge sheet to see wells</p>';return}const r=t.wells.filter(s=>s.status!=="inactive");if(r.length===0){e.innerHTML='<p class="empty-message">No active wells</p>';return}e.innerHTML=r.map(s=>{const i=s.latestTest||s.wellTests&&s.wellTests[0],o=i&&i.oil!==void 0?Math.round(i.oil*100)/100:null,l=i&&i.gas!==void 0&&i.gas!==null?Math.round(Math.max(0,i.gas)*100)/100:null;return`
            <div class="well-card" data-well-id="${s.id}" data-sheet-id="${n}">
                <h4>${s.name}</h4>
                <div class="well-stats">
                    <div class="well-stat">
                        <span class="well-stat-label">Latest Oil</span>
                        <span class="well-stat-value">${o!==null?o+" bbl":"-"}</span>
                    </div>
                    <div class="well-stat">
                        <span class="well-stat-label">Latest Gas</span>
                        <span class="well-stat-value">${l!==null?l+" mcf":"-"}</span>
                    </div>
                </div>
            </div>
        `}).join(""),e.querySelectorAll(".well-card").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.wellId,o=s.dataset.sheetId;Nn(o,i)})})}function AT(n){const e=document.querySelector("#wellTestTable tbody"),t=new Date;if(t.setHours(23,59,59,999),!n||n.length===0){e.innerHTML='<tr><td colspan="4" style="text-align: center; color: #6b7280;">No test data</td></tr>';return}const r=n.filter(s=>new Date(s.date)<=t);if(r.length===0){e.innerHTML='<tr><td colspan="4" style="text-align: center; color: #6b7280;">No test data</td></tr>';return}e.innerHTML=r.map(s=>{const i=s.gas!==null?Math.round(Math.max(0,s.gas)*100)/100:null;return`
            <tr>
                <td>${vn(s.date)}</td>
                <td>${s.oil!==null?Math.round(s.oil*100)/100:"-"}</td>
                <td>${s.water!==null?Math.round(s.water*100)/100:"-"}</td>
                <td>${i!==null?i:"-"}</td>
            </tr>
        `}).join("")}function PT(n){const e=n.continuous||{},t=n.truckTreat||{};document.getElementById("chemContRate").textContent=e.rate||"-",document.getElementById("chemContChems").textContent=e.chems||"-",document.getElementById("chemContPPM").textContent=e.ppm||"-",document.getElementById("chemTruckRate").textContent=t.rate||"-",document.getElementById("chemTruckChems").textContent=t.chems||"-",document.getElementById("chemTruckPPM").textContent=t.ppm||"-"}function RT(n){const e=document.querySelector("#failureTable tbody");if(!n||n.length===0){e.innerHTML='<tr><td colspan="6" style="text-align: center; color: #6b7280;">No failure history</td></tr>';return}e.innerHTML=n.map(t=>`
        <tr>
            <td>${vn(t.dateDown)}</td>
            <td>${vn(t.dateUp)}</td>
            <td>${t.downtime||"-"}</td>
            <td>${t.oil||"-"}</td>
            <td>${t.reason||"-"}</td>
            <td>${t.comments||"-"}</td>
        </tr>
    `).join("")}function DT(n,e){const t=document.getElementById(n);if(!e||e.length===0){t.innerHTML='<li style="border-left-color: #6b7280; opacity: 0.7;">No action items</li>';return}t.innerHTML=e.map(r=>`<li>${r}</li>`).join("")}function kT(n){const e=document.querySelector("#pressureTable tbody");if(!n||n.length===0){e.innerHTML='<tr><td colspan="5" style="text-align: center; color: #6b7280;">No pressure data</td></tr>';return}e.innerHTML=n.map(t=>`
        <tr>
            <td>${vn(t.date)}</td>
            <td>${t.casingPsi||"-"}</td>
            <td>${t.tubingPsi||"-"}</td>
            <td>${t.flowlinePsi||"-"}</td>
            <td>${t.injVol||"-"}</td>
        </tr>
    `).join("")}function NT(n){const e=document.getElementById("pressureChartsCard"),t=document.getElementById("pressureChartsWrapper");if(P.pressureCharts.psi&&(P.pressureCharts.psi.destroy(),P.pressureCharts.psi=null),P.pressureCharts.injVol&&(P.pressureCharts.injVol.destroy(),P.pressureCharts.injVol=null),!n||n.length<=20){e.style.display="none";return}const r=n.some(c=>c.casingPsi!==null&&c.casingPsi!==void 0&&!isNaN(c.casingPsi)),s=n.some(c=>c.tubingPsi!==null&&c.tubingPsi!==void 0&&!isNaN(c.tubingPsi)),i=n.some(c=>c.flowlinePsi!==null&&c.flowlinePsi!==void 0&&!isNaN(c.flowlinePsi)),o=n.some(c=>c.injVol!==null&&c.injVol!==void 0&&!isNaN(c.injVol)),l=r||s||i;if(!l&&!o){e.style.display="none";return}if(e.style.display="block",t.innerHTML="",l){const c=document.createElement("div");c.className="chart-section";let h="";const d=[];r&&d.push({id:"casing",label:"Casing PSI",color:"#f97316"}),s&&d.push({id:"tubing",label:"Tubing PSI",color:"#3b82f6"}),i&&d.push({id:"flowline",label:"Flowline PSI",color:"#8b5cf6"}),d.length>1&&(h=`
                <div class="pressure-chart-filters">
                    ${d.map(S=>`
                        <label class="pressure-filter-option">
                            <input type="checkbox" class="pressure-filter-checkbox" data-psi-type="${S.id}" checked>
                            <span class="filter-color-indicator" style="background-color: ${S.color};"></span>
                            <span>${S.label}</span>
                        </label>
                    `).join("")}
                </div>
            `),c.innerHTML=`
            <div class="chart-header-with-filters">
                <div class="chart-label">Pressure Readings (PSI)</div>
                ${h}
            </div>
            <div class="canvas-wrapper">
                <canvas id="chart-pressure-psi"></canvas>
            </div>
        `,t.appendChild(c);const p=[];if(r){const S=n.filter(R=>R.date&&R.casingPsi!==null&&R.casingPsi!==void 0).map(R=>({x:new Date(R.date),y:Number(R.casingPsi)})).filter(R=>!isNaN(R.y)).sort((R,N)=>R.x-N.x);p.push({label:"Casing PSI",data:S,borderColor:"#f97316",backgroundColor:"#f97316",pointRadius:2,pointHoverRadius:5,borderWidth:2})}if(s){const S=n.filter(R=>R.date&&R.tubingPsi!==null&&R.tubingPsi!==void 0).map(R=>({x:new Date(R.date),y:Number(R.tubingPsi)})).filter(R=>!isNaN(R.y)).sort((R,N)=>R.x-N.x);p.push({label:"Tubing PSI",data:S,borderColor:"#3b82f6",backgroundColor:"#3b82f6",pointRadius:2,pointHoverRadius:5,borderWidth:2})}if(i){const S=n.filter(R=>R.date&&R.flowlinePsi!==null&&R.flowlinePsi!==void 0).map(R=>({x:new Date(R.date),y:Number(R.flowlinePsi)})).filter(R=>!isNaN(R.y)).sort((R,N)=>R.x-N.x);p.push({label:"Flowline PSI",data:S,borderColor:"#8b5cf6",backgroundColor:"#8b5cf6",pointRadius:2,pointHoverRadius:5,borderWidth:2})}const g=document.getElementById("chart-pressure-psi").getContext("2d");P.pressureCharts.psi=new Chart(g,{type:"line",data:{datasets:p},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#282c33",titleColor:"#e8e9eb",bodyColor:"#e8e9eb",callbacks:{title:S=>new Date(S[0].parsed.x).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),label:S=>`${S.dataset.label}: ${S.parsed.y} PSI`}}},scales:{x:{type:"time",time:{displayFormats:{day:"MMM-yy",week:"MMM-yy",month:"MMM-yy",quarter:"MMM-yy",year:"yyyy"}},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab",maxTicksLimit:8}},y:{beginAtZero:!0,title:{display:!0,text:"PSI",color:"#9ea3ab"},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab"}}}}}),c.querySelectorAll(".pressure-filter-checkbox").forEach((S,R)=>{S.addEventListener("change",N=>{const B=p.findIndex(U=>{const X=N.target.dataset.psiType;return X==="casing"?U.label==="Casing PSI":X==="tubing"?U.label==="Tubing PSI":X==="flowline"?U.label==="Flowline PSI":!1});if(B!==-1){const U=P.pressureCharts.psi.getDatasetMeta(B);U.hidden=!N.target.checked,P.pressureCharts.psi.update()}})})}if(o){const c=document.createElement("div");c.className="chart-section",c.innerHTML=`
            <div class="chart-label">Injection Volume</div>
            <div class="canvas-wrapper">
                <canvas id="chart-pressure-injvol"></canvas>
            </div>
        `,t.appendChild(c);const h=n.filter(p=>p.date&&p.injVol!==null&&p.injVol!==void 0).map(p=>({x:new Date(p.date),y:Number(p.injVol)})).filter(p=>!isNaN(p.y)).sort((p,g)=>p.x-g.x),d=document.getElementById("chart-pressure-injvol").getContext("2d");P.pressureCharts.injVol=new Chart(d,{type:"line",data:{datasets:[{label:"Injection Volume",data:h,borderColor:"#22c55e",backgroundColor:"#22c55e",pointRadius:2,pointHoverRadius:5,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#282c33",titleColor:"#e8e9eb",bodyColor:"#e8e9eb",callbacks:{title:p=>new Date(p[0].parsed.x).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),label:p=>`Injection Volume: ${p.parsed.y}`}}},scales:{x:{type:"time",time:{displayFormats:{day:"MMM-yy",week:"MMM-yy",month:"MMM-yy",quarter:"MMM-yy",year:"yyyy"}},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab",maxTicksLimit:8}},y:{beginAtZero:!0,title:{display:!0,text:"Volume",color:"#9ea3ab"},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab"}}}}})}}async function pa(n=null,e=null){Lt("oilChart"),await ya(),_a("oil",n,e)}async function ma(n=null,e=null){Lt("waterChart"),await ya(),_a("water",n,e)}async function ga(n=null,e=null){Lt("gasChart"),await ya(),_a("gas",n,e)}async function ya(n){const e=[];for(const t in P.appData){const r=P.appData[t];r&&(r._aggregateLoaded||e.push(HE(t)))}e.length>0&&(console.log(`Loading aggregate data for ${e.length} sheets...`),await Promise.all(e),console.log("Aggregate data loaded"))}function _a(n,e=null,t=null){var S;const s={oil:{canvasId:"aggregateOilChart",label:"Oil Production (BBL)",unit:"BBL",color:"#78716c",dateRangeVar:"oilChartDateRange",startDateId:"oilChartStartDate",endDateId:"oilChartEndDate",resetBtnId:"btnResetOilDates",showFn:pa},water:{canvasId:"aggregateWaterChart",label:"Water Consumption (BBL)",unit:"BBL",color:"#3b82f6",dateRangeVar:"waterChartDateRange",startDateId:"waterChartStartDate",endDateId:"waterChartEndDate",resetBtnId:"btnResetWaterDates",showFn:ma},gas:{canvasId:"aggregateGasChart",label:"Gas Production (MCF)",unit:"MCF",color:"#22c55e",dateRangeVar:"gasChartDateRange",startDateId:"gasChartStartDate",endDateId:"gasChartEndDate",resetBtnId:"btnResetGasDates",showFn:ga}}[n];if(!s)return;n==="oil"&&P.aggregateOilChart?(P.aggregateOilChart.destroy(),P.aggregateOilChart=null):n==="water"&&P.aggregateWaterChart?(P.aggregateWaterChart.destroy(),P.aggregateWaterChart=null):n==="gas"&&P.aggregateGasChart&&(P.aggregateGasChart.destroy(),P.aggregateGasChart=null);const i=LT(n),o=((S=P.chartState[n])==null?void 0:S.aggregation)||"month";P.chartState[n].selectedBatteries=i;const{data:l,dateRange:c}=hT(n,e,t,o,i);n==="oil"?P.oilChartDateRange=c:n==="water"?P.waterChartDateRange=c:n==="gas"&&(P.gasChartDateRange=c),VT(n,s,e,t,c);const h={oil:"oilChartBatteries",water:"waterChartBatteries",gas:"gasChartBatteries"},d=document.getElementById(h[n]);d&&!d.querySelector(".explorer-battery")&&MT(n),xT(n);const p=document.getElementById(s.canvasId);if(!p)return;if(l.length===0){const R=p.getContext("2d");R.clearRect(0,0,p.width,p.height),R.font="14px Archivo, sans-serif",R.fillStyle="#6b7280",R.textAlign="center",R.fillText("No production data available",p.width/2,p.height/2);return}const g=p.getContext("2d"),I=new Chart(g,{type:"line",data:{datasets:[{label:s.label,data:l,backgroundColor:s.color+"33",borderColor:s.color,borderWidth:2,fill:!0,tension:.1,pointRadius:2,pointHoverRadius:5}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#282c33",titleColor:"#e8e9eb",bodyColor:"#e8e9eb",callbacks:{title:R=>new Date(R[0].parsed.x).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),label:R=>`${s.label}: ${R.parsed.y.toLocaleString()}`}}},scales:{x:{type:"time",time:{displayFormats:{day:"MMM-yy",week:"MMM-yy",month:"MMM-yy",quarter:"MMM-yy",year:"yyyy"}},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab",maxTicksLimit:12}},y:{beginAtZero:!0,title:{display:!0,text:s.unit,color:"#9ea3ab"},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab"}}}}});n==="oil"?P.aggregateOilChart=I:n==="water"?P.aggregateWaterChart=I:n==="gas"&&(P.aggregateGasChart=I)}function VT(n,e,t,r,s){const i=document.getElementById(e.startDateId),o=document.getElementById(e.endDateId),l=document.getElementById(e.resetBtnId);if(!i||!o||!s.min||!s.max)return;const c=R=>R?new Date(R).toISOString().split("T")[0]:"",h=c(s.min),d=c(s.max);i.min=h,i.max=d,o.min=h,o.max=d,i.value=t?c(t):h,o.value=r?c(r):d;const p=i.cloneNode(!0),g=o.cloneNode(!0),I=l.cloneNode(!0);i.parentNode.replaceChild(p,i),o.parentNode.replaceChild(g,o),l.parentNode.replaceChild(I,l);const S=()=>{const R=p.value?new Date(p.value):null,N=g.value?new Date(g.value+"T23:59:59"):null;e.showFn(R,N)};p.addEventListener("change",S),g.addEventListener("change",S),I.addEventListener("click",()=>e.showFn(null,null))}function LT(n){const e={oil:"oilChartBatteries",water:"waterChartBatteries",gas:"gasChartBatteries"},t=document.getElementById(e[n]);if(!t)return null;const r=new Set;return t.querySelectorAll(".battery-checkbox:checked").forEach(s=>{s.dataset.battery&&r.add(s.dataset.battery)}),r.size>0?r:null}function _o(n){const t={oil:{startDateId:"oilChartStartDate",endDateId:"oilChartEndDate",showFn:pa},water:{startDateId:"waterChartStartDate",endDateId:"waterChartEndDate",showFn:ma},gas:{startDateId:"gasChartStartDate",endDateId:"gasChartEndDate",showFn:ga}}[n];if(!t)return;const r=document.getElementById(t.startDateId),s=document.getElementById(t.endDateId),i=r&&r.value?new Date(r.value):null,o=s&&s.value?new Date(s.value+"T23:59:59"):null;t.showFn(i,o)}function xT(n){var r;const e=document.querySelectorAll(`input[name="${n}Aggregation"]`);if(!e.length)return;e.forEach(s=>{const i=s.cloneNode(!0);s.parentNode.replaceChild(i,s)});const t=((r=P.chartState[n])==null?void 0:r.aggregation)||"month";document.querySelectorAll(`input[name="${n}Aggregation"]`).forEach(s=>{s.checked=s.value===t,s.addEventListener("change",i=>{P.chartState[n].aggregation=i.target.value,_o(n)})})}function MT(n){var l;const e={oil:"oilChartBatteries",water:"waterChartBatteries",gas:"gasChartBatteries"},t=document.getElementById(e[n]);if(!t)return;if(t.innerHTML="",!mT()){t.innerHTML='<div class="explorer-empty">No data uploaded</div>';return}const r=()=>{const c={oil:"btnToggleAllOil",water:"btnToggleAllWater",gas:"btnToggleAllGas"},h=document.getElementById(c[n]);if(!h)return;const d=t.querySelectorAll(".battery-checkbox");if(!d.length)return;const p=Array.from(d).every(g=>g.checked);h.textContent=p?"Deselect All":"Select All"},s=((l=P.chartState[n])==null?void 0:l.selectedBatteries)||null;Me.forEach(c=>{const h=P.appData[c.id];if(!h||!h._metadataLoaded)return;const d=!s||s.has(c.id),p=P.metadataCache.wellCounts[c.id]||(h.wells?h.wells.length:0),g=document.createElement("label");g.className="explorer-battery-simple explorer-checkbox",g.innerHTML=`
            <input type="checkbox" class="battery-checkbox" data-battery="${c.id}" ${d?"checked":""}>
            <span class="checkmark"></span>
            <span class="battery-name">${c.name}</span>
            <span class="battery-well-count">${p} wells</span>
        `,t.appendChild(g),g.querySelector(".battery-checkbox").addEventListener("change",()=>{_o(n),r()})});const i={oil:"btnToggleAllOil",water:"btnToggleAllWater",gas:"btnToggleAllGas"},o=document.getElementById(i[n]);if(o){const c=o.cloneNode(!0);o.parentNode.replaceChild(c,o),c.addEventListener("click",()=>{const h=t.querySelectorAll(".battery-checkbox"),d=Array.from(h).every(p=>p.checked);h.forEach(p=>{p.checked=!d}),c.textContent=d?"Select All":"Deselect All",_o(n)}),r()}}function OT(){const n=document.getElementById("logoLink");n&&n.addEventListener("click",e=>{e.preventDefault(),document.querySelectorAll(".nav-item").forEach(r=>r.classList.remove("active")),P.currentSheet=null,P.currentWell=null,Lt("welcome"),In();const t=document.getElementById("nav-dashboard");t&&ei(t)})}function FT(){const n=document.getElementById("hamburgerBtn"),e=document.getElementById("sidebar");n&&e&&(n.addEventListener("click",()=>{e.classList.toggle("collapsed");const r=e.classList.contains("collapsed");localStorage.setItem("sidebarCollapsed",r?"true":"false")}),localStorage.getItem("sidebarCollapsed")==="true"&&e.classList.add("collapsed"))}function Nd(){const n=document.getElementById("navTree");n.innerHTML="";const e=BT("Home","home-section",[{id:"nav-dashboard",label:"Operations Dashboard",icon:"dashboard",action:()=>{Lt("welcome"),In()}},{id:"nav-oil-chart",label:"Oil Production",icon:"oil",action:()=>pa()},{id:"nav-water-chart",label:"Water Consumption",icon:"water",action:()=>ma()},{id:"nav-gas-chart",label:"Gas Production",icon:"gas",action:()=>ga()}]);n.appendChild(e);const t=$T();n.appendChild(t)}function BT(n,e,t){const r=document.createElement("div");r.className="nav-section",r.id=e;const s=document.createElement("div");s.className="nav-section-header expanded",s.innerHTML=`
        <span class="nav-section-title">${n}</span>
        <span class="nav-section-chevron">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </span>
    `;const i=document.createElement("div");return i.className="nav-section-children visible",t.forEach(o=>{const l=UT(o);i.appendChild(l)}),s.addEventListener("click",()=>{s.classList.toggle("expanded"),i.classList.toggle("visible")}),r.appendChild(s),r.appendChild(i),r}function UT(n){const e=document.createElement("div");e.className="nav-section-item";const t={dashboard:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
           </svg>`,oil:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#78716c" stroke-width="2">
            <path d="M12 2C12 2 4 10 4 15a8 8 0 0 0 16 0c0-5-8-13-8-13z"></path>
           </svg>`,water:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2">
            <path d="M12 2C12 2 4 10 4 15a8 8 0 0 0 16 0c0-5-8-13-8-13z"></path>
           </svg>`,gas:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2">
            <path d="M12 2v6m0 4v10M5 12h14M8 6h8M6 18h12"></path>
           </svg>`,chart:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
           </svg>`},r=t[n.icon]||t.chart;e.innerHTML=`
        <div class="nav-item" id="${n.id}" data-tooltip="${n.label}">
            <span class="nav-item-icon">${r}</span>
            <span class="nav-item-label">${n.label}</span>
        </div>
    `;const s=e.querySelector(".nav-item");return s.addEventListener("click",i=>{i.stopPropagation(),ei(s),n.action()}),e}function $T(){const n=document.createElement("div");n.className="nav-section",n.id="wells-section";const e=document.createElement("div");e.className="nav-section-header expanded",e.innerHTML=`
        <span class="nav-section-title">Wells</span>
        <span class="nav-section-chevron">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </span>
    `;const t=document.createElement("div");return t.className="nav-section-children visible",Me.forEach(r=>{const s=jT(r);t.appendChild(s)}),e.addEventListener("click",()=>{e.classList.toggle("expanded"),t.classList.toggle("visible")}),n.appendChild(e),n.appendChild(t),n}function jT(n){const e=document.createElement("div");e.className="nav-gauge-sheet";const t=P.appData[n.id],r=t&&t._metadataLoaded,s=t&&t._wellsLoaded,i=s?t.wells.filter(I=>I.status!=="inactive"):[],o={cowden:3,bigmax:11,bigmax1h:1,southandrews:21,polaris:2,shusa:40,mwwemac:8,unit130:1,uls35h:4},l=P.metadataCache.wellCounts[n.id];let c=l!==void 0?l:i.length;c===0&&!s&&o[n.id]!==void 0&&(c=o[n.id]);let h="No data",d="not-uploaded";r&&(o[n.id]!==void 0?(h=o[n.id]+" wells",d="uploaded"):l!==void 0||s?(h=c+" wells",d="uploaded"):(h="Loading...",d="uploaded")),e.innerHTML=`
        <div class="nav-item" data-sheet-id="${n.id}">
            <span class="icon">&#9632;</span>
            <span class="nav-battery-name">${n.name}</span>
            <span class="upload-indicator ${d}">
                ${h}
            </span>
        </div>
        <div class="nav-children" id="sheet-children-${n.id}"></div>
    `;const p=e.querySelector(".nav-item"),g=e.querySelector(".nav-children");return p.addEventListener("click",async I=>{if(I.stopPropagation(),ei(p),kd(n.id),r&&!s){const S=p.querySelector(".upload-indicator");o[n.id]===void 0&&(S.textContent="Loading..."),await ha(n.id);const N=P.appData[n.id].wells.filter(B=>B.status!=="inactive");S.textContent=N.length+" wells",g.innerHTML="",N.forEach(B=>{const U=Xc(B,n);g.appendChild(U)})}s&&i.length>0&&(p.classList.toggle("expanded"),g.classList.toggle("visible"))}),s&&i.length>0&&i.forEach(I=>{const S=Xc(I,n);g.appendChild(S)}),e}function Xc(n,e){const t=document.createElement("div");t.className="nav-well",t.innerHTML=`
        <div class="nav-item" data-well-id="${n.id}" data-sheet-id="${e.id}">
            <span class="status-dot active"></span>
            <span class="nav-well-name">${n.name}</span>
        </div>
    `;const r=t.querySelector(".nav-item");return r.addEventListener("click",s=>{s.stopPropagation(),ei(r),Nn(e.id,n.id)}),t}function ei(n){document.querySelectorAll(".nav-item").forEach(e=>e.classList.remove("active")),n.classList.add("active")}function wr(){Nd(),In()}const HT={id:"cowden",name:"Cowden",expectedFileName:"Cowden Gauge Sheet1.xlsx",wells:[{id:"601h",name:"Cowden 601H",oilCol:1,waterCol:2,gasCol:3},{id:"602h",name:"Cowden 602H",oilCol:7,waterCol:8,gasCol:9},{id:"angus",name:"Angus 7-18-1H",oilCol:13,waterCol:14,gasCol:15}],pressureConfig:{sheet:"Cowden",headerRowIndex:6,dateCol:0,wells:{"601h":{csg:28,tbg:29,fl:30,inj:31},"602h":{csg:33,tbg:34,fl:35,inj:40},angus:{csg:42,tbg:43,fl:44,inj:47}}},productionConfig:{sheet:"Cowden",headerRowIndex:6,dateCol:0,oilProdCol:24,waterProdCol:25,gasProdCol:26},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.wells.length>0&&this.applyPressureReadings(n,e.wells),e.batteryProduction=this.parseBatteryProduction(n),n.Sheets["Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=this.wells.map(s=>({id:s.id,name:s.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let s=4;s<e.length;s++){const i=e[s];if(!i||!i[0])continue;const o=i[0];let l=null;if(o instanceof Date)l=o.toISOString().split("T")[0];else if(typeof o=="number"){const c=XLSX.SSF.parse_date_code(o);c&&(l=`${c.y}-${String(c.m).padStart(2,"0")}-${String(c.d).padStart(2,"0")}`)}else typeof o=="string"&&(l=o.split(" ")[0]);l&&(r++,this.wells.forEach((c,h)=>{const d=this.parseNumber(i[c.oilCol]),p=this.parseNumber(i[c.waterCol]),g=this.parseNumber(i[c.gasCol]);(d!==null||p!==null||g!==null)&&(t[h].wellTests.push({date:l,oil:d,water:p,gas:g}),t[h].production.push({date:new Date(l),oil:d,water:p,gas:g}))}))}return t.forEach(s=>{s.wellTests.sort((i,o)=>new Date(o.date)-new Date(i.date)),s.wellTests=s.wellTests.slice(0,60),s.production.sort((i,o)=>i.date-o.date)}),{wells:t,rowCount:r}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[];for(let i=e.headerRowIndex+2;i<r.length;i++){const o=r[i];if(!o)continue;const l=this.parseDate(o[e.dateCol]);if(!l)continue;const c=this.parseNumber(o[e.oilProdCol]),h=this.parseNumber(o[e.waterProdCol]),d=e.gasProdCol!==null?this.parseNumber(o[e.gasProdCol]):null;(c!==null||h!==null||d!==null)&&s.push({date:new Date(l),oil:c,water:h,gas:d})}return s.sort((i,o)=>i.date-o.date),s},applyPressureReadings(n,e){const t=this.pressureConfig;if(!t)return;const r=n.Sheets[t.sheet];if(!r)return;const s=XLSX.utils.sheet_to_json(r,{header:1,defval:null});if(!s||s.length===0)return;const i={};e.forEach(o=>{i[o.id]=[]});for(let o=t.headerRowIndex+1;o<s.length;o++){const l=s[o];if(!l)continue;const c=this.parseDate(l[t.dateCol]);c&&Object.entries(t.wells).forEach(([h,d])=>{if(!i[h])return;const p=this.parseNumber(l[d.csg]),g=this.parseNumber(l[d.tbg]),I=this.parseNumber(l[d.fl]),S=this.parseNumber(l[d.inj]);(p!==null||g!==null||I!==null||S!==null)&&i[h].push({date:c,casingPsi:p,tubingPsi:g,flowlinePsi:I,injVol:S})})}e.forEach(o=>{const l=i[o.id]||[];l.sort((c,h)=>new Date(h.date)-new Date(c.date)),o.pressureReadings=l.slice(0,60)})},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[];for(let r=3;r<e.length;r++){const s=e[r];if(!s)continue;const i=s[1];if(!i)continue;let o=null;const l=s[0];if(l)if(l instanceof Date)o=l.toISOString().split("T")[0];else if(typeof l=="number"){const c=XLSX.SSF.parse_date_code(l);c&&(o=`${c.y}-${String(c.m).padStart(2,"0")}-${String(c.d).padStart(2,"0")}`)}else typeof l=="string"&&l.trim()&&(o=l.split(" ")[0]);t.push({date:o,ticketNum:String(i),tank:this.parseNumber(s[2]),ftTop:this.parseNumber(s[3]),inTop:this.parseNumber(s[4]),ftBttm:this.parseNumber(s[5]),inBttm:this.parseNumber(s[6]),calcVol:this.parseNumber(s[7]),vol:this.parseNumber(s[8]),gravity:this.parseNumber(s[9]),bsw:this.parseNumber(s[10])})}return t.sort((r,s)=>!r.date&&!s.date?0:r.date?s.date?new Date(s.date)-new Date(r.date):-1:1),t.slice(0,100)},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},WT={id:"bigmax",name:"Big Max",expectedFileName:"Big Max Gauge Sheet.xlsx",wells:[{id:"bigmax-1-1",name:"Big Max 1 #1",oilCol:1,waterCol:2,gasCol:3,status:"active"},{id:"bigmax-4-1",name:"Big Max 4 #1",oilCol:7,waterCol:8,gasCol:9,status:"active"},{id:"bigmax-5-2",name:"Big Max 5 #2",oilCol:13,waterCol:14,gasCol:15,status:"active"},{id:"bigmax-11-1",name:"Big Max 11 #1",oilCol:19,waterCol:20,gasCol:21,status:"active"},{id:"bigmax-11-2",name:"Big Max 11 #2",oilCol:25,waterCol:26,gasCol:27,status:"active"},{id:"bigmax-12-1",name:"Big Max 12 #1",oilCol:31,waterCol:32,gasCol:33,status:"active"},{id:"bigmax-12-2",name:"Big Max 12 #2",oilCol:37,waterCol:38,gasCol:39,status:"active"},{id:"bigmax-13-3",name:"Big Max 13 #3",oilCol:43,waterCol:44,gasCol:45,status:"active"},{id:"bigmax-13-5",name:"Big Max 13 #5",oilCol:49,waterCol:50,gasCol:51,status:"active"},{id:"bigmax-14-4",name:"Big Max 14 #4",oilCol:55,waterCol:56,gasCol:57,status:"active"},{id:"bigmax-swd",name:"Big Max 12-101 SWD",oilCol:61,waterCol:62,gasCol:63,status:"active",wellType:"swd"}],parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return n.Sheets["Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=this.wells.map(s=>({id:s.id,name:s.name,status:s.status||"active",wellType:s.wellType||"production",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let s=4;s<e.length;s++){const i=e[s];if(!i||!i[0])continue;const o=this.parseDate(i[0]);o&&(r++,this.wells.forEach((l,c)=>{let h=this.parseNumber(i[l.oilCol]),d=this.parseNumber(i[l.waterCol]),p=this.parseNumber(i[l.gasCol]);l.id==="bigmax-swd"&&(d=h,h=0,p=0),(h!==null||d!==null||p!==null)&&(t[c].wellTests.push({date:o,oil:h,water:d,gas:p}),t[c].production.push({date:new Date(o),oil:h,water:d,gas:p}))}))}return t.forEach(s=>{s.wellTests.sort((i,o)=>new Date(o.date)-new Date(i.date)),s.wellTests=s.wellTests.slice(0,60),s.production.sort((i,o)=>i.date-o.date)}),{wells:t,rowCount:r}},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[];for(let r=3;r<e.length;r++){const s=e[r];!s||!s[1]||t.push({date:this.parseDate(s[0]),ticketNum:String(s[1]||""),tank:this.parseNumber(s[2]),ftTop:this.parseNumber(s[3]),inTop:this.parseNumber(s[4]),ftBttm:this.parseNumber(s[5]),inBttm:this.parseNumber(s[6]),vol:this.parseNumber(s[8])})}return t.sort((r,s)=>(s.date||"").localeCompare(r.date||"")),t.slice(0,100)},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},qT={id:"bigmax1h",name:"Big Max 1H",expectedFileName:"Big Max 1H Gauge Sheet.xlsx",wells:[{id:"bigmax-1-1h",name:"Big Max 1-1H",oilCol:1,waterCol:2,gasCol:3}],productionConfig:{sheet:"Big Max 1H",headerRowIndex:6,dateCol:0,oilProdCol:21,waterProdCol:22,gasProdCol:23},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.batteryProduction=this.parseBatteryProduction(n),n.Sheets["Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=this.wells.map(s=>({id:s.id,name:s.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let s=4;s<e.length;s++){const i=e[s];if(!i||!i[0])continue;const o=this.parseDate(i[0]);o&&(r++,this.wells.forEach((l,c)=>{const h=this.parseNumber(i[l.oilCol]),d=this.parseNumber(i[l.waterCol]),p=this.parseNumber(i[l.gasCol]);(h!==null||d!==null||p!==null)&&(t[c].wellTests.push({date:o,oil:h,water:d,gas:p}),t[c].production.push({date:new Date(o),oil:h,water:d,gas:p}))}))}return t.forEach(s=>{s.wellTests.sort((i,o)=>new Date(o.date)-new Date(i.date)),s.wellTests=s.wellTests.slice(0,60),s.production.sort((i,o)=>i.date-o.date)}),{wells:t,rowCount:r}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[];for(let i=e.headerRowIndex+2;i<r.length;i++){const o=r[i];if(!o)continue;const l=this.parseDate(o[e.dateCol]);if(!l)continue;const c=this.parseNumber(o[e.oilProdCol]),h=this.parseNumber(o[e.waterProdCol]),d=e.gasProdCol!==null?this.parseNumber(o[e.gasProdCol]):null;(c!==null||h!==null||d!==null)&&s.push({date:new Date(l),oil:c,water:h,gas:d})}return s.sort((i,o)=>i.date-o.date),s},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[];for(let r=3;r<e.length;r++){const s=e[r];!s||!s[1]||t.push({date:this.parseDate(s[0]),ticketNum:String(s[1]||""),tank:this.parseNumber(s[2]),ftTop:this.parseNumber(s[3]),inTop:this.parseNumber(s[4]),ftBttm:this.parseNumber(s[5]),inBttm:this.parseNumber(s[6]),vol:this.parseNumber(s[8])})}return t.sort((r,s)=>(s.date||"").localeCompare(r.date||"")),t.slice(0,100)},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},zT={id:"southandrews",name:"South Andrews",expectedFileName:"South Andrews Gauge Sheet.xlsm",wellsPg1:[{id:"uls-1-30-6h",name:"1-30-6H",oilCol:1,waterCol:2,gasCol:3},{id:"uls-1-30-8h",name:"1-30-8H",oilCol:7,waterCol:8,gasCol:9},{id:"uls-1-31-2h",name:"1-31-2H",oilCol:13,waterCol:14,gasCol:15},{id:"uls-1-36-1h",name:"1-36-1H",oilCol:19,waterCol:20,gasCol:21},{id:"uls-1-36-2h",name:"1-36-2H",oilCol:25,waterCol:26,gasCol:27},{id:"uls-1-36-3h",name:"1-36-3H",oilCol:31,waterCol:32,gasCol:33},{id:"uls-1-36-4h",name:"1-36-4H",oilCol:37,waterCol:38,gasCol:39},{id:"uls-1-36-5h",name:"1-36-5H",oilCol:43,waterCol:44,gasCol:45},{id:"uls-1-36-6h",name:"1-36-6H",oilCol:49,waterCol:50,gasCol:51},{id:"uls-1-37-1h",name:"1-37-1H",oilCol:55,waterCol:56,gasCol:57},{id:"uls-1-37-3h",name:"1-37-3H",oilCol:61,waterCol:62,gasCol:63},{id:"uls-1-37-4h",name:"1-37-4H",oilCol:67,waterCol:68,gasCol:69},{id:"uls-1-37-6h",name:"1-37-6H",oilCol:73,waterCol:74,gasCol:75}],wellsPg2:[{id:"cobra-5h",name:"Cobra 5H",oilCol:1,waterCol:2,gasCol:3,status:"active"},{id:"cobra-3012",name:"Cobra 3012",oilCol:7,waterCol:8,gasCol:9,status:"active"},{id:"cobra-3033",name:"Cobra 3033",oilCol:13,waterCol:14,gasCol:15,status:"active"},{id:"fn-3731",name:"FN 3731",oilCol:19,waterCol:20,gasCol:21,status:"active"},{id:"pinnacle-1",name:"Pinnacle #1",oilCol:25,waterCol:26,gasCol:27,status:"active"},{id:"pinnacle-2h",name:"Pinnacle 2H",oilCol:31,waterCol:32,gasCol:33,status:"active"},{id:"sawgrass-2h",name:"Sawgrass 2H",oilCol:37,waterCol:38,gasCol:39,status:"inactive"},{id:"sawgrass-5h",name:"Sawgrass 5H",oilCol:43,waterCol:44,gasCol:45,status:"active"}],pressureConfig:[{sheet:"36-4H",headerRowIndex:8,dateCol:0,wells:{"uls-1-36-1h":{csg:61,tbg:62,fl:63,inj:64},"uls-1-36-2h":{csg:68,tbg:69,fl:70,inj:71},"uls-1-36-3h":{csg:73,tbg:74,fl:75,inj:76},"uls-1-36-4h":{csg:78,tbg:79,fl:80,inj:81},"uls-1-36-5h":{csg:86,tbg:87,fl:88,inj:89},"uls-1-36-6h":{csg:91,tbg:92,fl:93,inj:94},"uls-1-37-1h":{csg:96,tbg:97,fl:98,inj:99},"uls-1-37-3h":{csg:101,tbg:102,fl:103,inj:104}}},{sheet:"37-6H",headerRowIndex:8,dateCol:0,wells:{"uls-1-31-2h":{csg:34,tbg:35,fl:36,inj:37},"uls-1-37-4h":{csg:39,tbg:40,fl:41,inj:42},"uls-1-37-6h":{csg:44,tbg:45,fl:46,inj:47},"uls-1-30-6h":{csg:49,tbg:50,fl:51,inj:52},"uls-1-30-8h":{csg:54,tbg:55,fl:56,inj:57}}}],productionConfig:[{sheet:"36-4H",headerRowIndex:8,dateCol:0,oilProdCol:56,waterProdCol:57,gasProdCol:58},{sheet:"37-6H",headerRowIndex:8,dateCol:0,oilProdCol:29,waterProdCol:30,gasProdCol:31}],parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test pg1"]){const t=this.parseWellTestSheet(n.Sheets["Well Test pg1"],this.wellsPg1);e.wells.push(...t.wells),e.rawRowCount=t.rowCount}if(n.Sheets["Well Test pg2"]){const t=this.parseWellTestSheet(n.Sheets["Well Test pg2"],this.wellsPg2);e.wells.push(...t.wells)}return e.wells.length>0&&this.applyPressureReadings(n,e.wells),e.batteryProduction=this.parseBatteryProduction(n),["36-4H Tickets","37-6H Tickets","36 6H Tickets"].forEach(t=>{if(n.Sheets[t]){const r=this.parseRunTicketsSheet(n.Sheets[t]);e.runTickets.push(...r)}}),e.runTickets.sort((t,r)=>(r.date||"").localeCompare(t.date||"")),e.runTickets=e.runTickets.slice(0,100),e},parseWellTestSheet(n,e){const t=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),r=e.map(i=>({id:i.id,name:i.name,status:i.status||"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let s=0;for(let i=4;i<t.length;i++){const o=t[i];if(!o||!o[0])continue;const l=this.parseDate(o[0]);l&&(s++,e.forEach((c,h)=>{const d=this.parseNumber(o[c.oilCol]),p=this.parseNumber(o[c.waterCol]),g=this.parseNumber(o[c.gasCol]);(d!==null||p!==null||g!==null)&&(r[h].wellTests.push({date:l,oil:d,water:p,gas:g}),r[h].production.push({date:new Date(l),oil:d,water:p,gas:g}))}))}return r.forEach(i=>{i.wellTests.sort((o,l)=>new Date(l.date)-new Date(o.date)),i.wellTests=i.wellTests.slice(0,60),i.production.sort((o,l)=>o.date-l.date)}),{wells:r,rowCount:s}},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[];for(let r=3;r<e.length;r++){const s=e[r];!s||!s[1]||t.push({date:this.parseDate(s[0]),ticketNum:String(s[1]||""),tank:this.parseNumber(s[2]),ftTop:this.parseNumber(s[3]),inTop:this.parseNumber(s[4]),ftBttm:this.parseNumber(s[5]),inBttm:this.parseNumber(s[6]),vol:this.parseNumber(s[8])})}return t},parseBatteryProduction(n){const e=new Map;this.productionConfig.forEach(r=>{const s=n.Sheets[r.sheet];if(!s)return;const i=XLSX.utils.sheet_to_json(s,{header:1,defval:null});if(!(!i||i.length===0))for(let o=r.headerRowIndex+2;o<i.length;o++){const l=i[o];if(!l)continue;const c=this.parseDate(l[r.dateCol]);if(!c)continue;const h=this.parseNumber(l[r.oilProdCol]),d=this.parseNumber(l[r.waterProdCol]),p=r.gasProdCol!==null?this.parseNumber(l[r.gasProdCol]):null;if(h!==null||d!==null||p!==null){const g=e.get(c);g?(g.oil=(g.oil||0)+(h||0),g.water=(g.water||0)+(d||0),g.gas=(g.gas||0)+(p||0)):e.set(c,{date:new Date(c),oil:h||0,water:d||0,gas:p||0})}}});const t=Array.from(e.values());return t.sort((r,s)=>r.date-s.date),t},applyPressureReadings(n,e){const t={};e.forEach(s=>{t[s.id]=s,s.pressureReadings=[]});const r={};Object.keys(t).forEach(s=>{r[s]=[]}),this.pressureConfig.forEach(s=>{const i=n.Sheets[s.sheet];if(!i)return;const o=XLSX.utils.sheet_to_json(i,{header:1,defval:null});if(!(!o||o.length===0))for(let l=s.headerRowIndex+1;l<o.length;l++){const c=o[l];if(!c)continue;const h=this.parseDate(c[s.dateCol]);h&&Object.entries(s.wells).forEach(([d,p])=>{if(!r[d])return;const g=this.parseNumber(c[p.csg]),I=this.parseNumber(c[p.tbg]),S=this.parseNumber(c[p.fl]),R=this.parseNumber(c[p.inj]);(g!==null||I!==null||S!==null||R!==null)&&r[d].push({date:h,casingPsi:g,tubingPsi:I,flowlinePsi:S,injVol:R})})}}),e.forEach(s=>{const i=r[s.id]||[];i.sort((o,l)=>new Date(l.date)-new Date(o.date)),s.pressureReadings=i.slice(0,60)})},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},GT={id:"polaris",name:"Polaris",expectedFileName:"Polaris Gauge Sheet.xlsx",wells:[{id:"polaris-1",name:"Polaris #1",oilCol:1,waterCol:2,gasCol:3,status:"active"},{id:"polaris-2",name:"Polaris #2",oilCol:5,waterCol:6,gasCol:7,status:"inactive"}],productionConfig:{sheet:"Polaris 1",headerRowIndex:3,dateCol:0,oilProdCol:16,waterProdCol:17,gasProdCol:null},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.batteryProduction=this.parseBatteryProduction(n),n.Sheets["Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=this.wells.map(s=>({id:s.id,name:s.name,status:s.status||"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let s=4;s<e.length;s++){const i=e[s];if(!i||!i[0])continue;const o=this.parseDate(i[0]);o&&(r++,this.wells.forEach((l,c)=>{const h=this.parseNumber(i[l.oilCol]),d=this.parseNumber(i[l.waterCol]),p=this.parseNumber(i[l.gasCol]);(h!==null||d!==null||p!==null)&&(t[c].wellTests.push({date:o,oil:h,water:d,gas:p}),t[c].production.push({date:new Date(o),oil:h,water:d,gas:p}))}))}return t.forEach(s=>{s.wellTests.sort((i,o)=>new Date(o.date)-new Date(i.date)),s.wellTests=s.wellTests.slice(0,60),s.production.sort((i,o)=>i.date-o.date)}),{wells:t,rowCount:r}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[];for(let i=e.headerRowIndex+2;i<r.length;i++){const o=r[i];if(!o)continue;const l=this.parseDate(o[e.dateCol]);if(!l)continue;const c=this.parseNumber(o[e.oilProdCol]),h=this.parseNumber(o[e.waterProdCol]),d=e.gasProdCol!==null?this.parseNumber(o[e.gasProdCol]):null;(c!==null||h!==null||d!==null)&&s.push({date:new Date(l),oil:c,water:h,gas:d})}return s.sort((i,o)=>i.date-o.date),s},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[];for(let r=3;r<e.length;r++){const s=e[r];!s||!s[1]||t.push({date:this.parseDate(s[0]),ticketNum:String(s[1]||""),tank:this.parseNumber(s[2]),ftTop:this.parseNumber(s[3]),inTop:this.parseNumber(s[4]),ftBttm:this.parseNumber(s[5]),inBttm:this.parseNumber(s[6]),vol:this.parseNumber(s[8])})}return t.sort((r,s)=>(s.date||"").localeCompare(r.date||"")),t.slice(0,100)},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},KT={id:"shusa",name:"Shusa",expectedFileName:"Shusa Gauge Sheet.xlsx",wells20RB:[{id:"shusa-20-1",name:"Shusa 20 #1",oilCol:1,waterCol:2,gasCol:null},{id:"shusa-20-2",name:"Shusa 20 #2",oilCol:5,waterCol:6,gasCol:null},{id:"shusa-20-3",name:"Shusa 20 #3",oilCol:9,waterCol:10,gasCol:null},{id:"shusa-20-4",name:"Shusa 20 #4",oilCol:13,waterCol:14,gasCol:null},{id:"shusa-20-5",name:"Shusa 20 #5",oilCol:17,waterCol:18,gasCol:null},{id:"rosebud-20-1",name:"Rosebud 20 #1",oilCol:21,waterCol:22,gasCol:null},{id:"rosebud-20-3",name:"Rosebud 20 #3",oilCol:25,waterCol:26,gasCol:null},{id:"rosebud-20-4",name:"Rosebud 20 #4",oilCol:29,waterCol:30,gasCol:null},{id:"rosebud-yates-1",name:"Rosebud-Yates #1",oilCol:33,waterCol:34,gasCol:35},{id:"link-2",name:"Link #2",oilCol:39,waterCol:40,gasCol:null},{id:"link-3",name:"Link #3",oilCol:43,waterCol:44,gasCol:null},{id:"link-4",name:"Link #4",oilCol:47,waterCol:48,gasCol:null},{id:"link-5",name:"Link #5",oilCol:51,waterCol:52,gasCol:null},{id:"link-6",name:"Link #6",oilCol:55,waterCol:56,gasCol:null}],productionConfig:{sheet:"Total",headerRowIndex:2,dateCol:0,oilProdCol:2,waterProdCol:3,gasProdCol:null},wells1415:[{id:"shusa-14-1",name:"Shusa 14 #1",oilCol:4,waterCol:5,gasCol:null},{id:"shusa-14-2",name:"Shusa 14 #2",oilCol:8,waterCol:9,gasCol:null},{id:"shusa-14-3",name:"Shusa 14 #3",oilCol:12,waterCol:13,gasCol:null},{id:"shusa-14-4",name:"Shusa 14 #4",oilCol:16,waterCol:17,gasCol:null},{id:"shusa-14-5",name:"Shusa 14 #5",oilCol:20,waterCol:21,gasCol:null},{id:"shusa-14-6",name:"Shusa 14 #6",oilCol:24,waterCol:25,gasCol:null},{id:"shusa-14-7",name:"Shusa 14 #7",oilCol:28,waterCol:29,gasCol:null},{id:"shusa-14-8",name:"Shusa 14 #8",oilCol:32,waterCol:33,gasCol:null},{id:"shusa-14-9",name:"Shusa 14 #9",oilCol:36,waterCol:37,gasCol:null},{id:"shusa-14-10",name:"Shusa 14 #10",oilCol:40,waterCol:41,gasCol:null},{id:"shusa-14-12",name:"Shusa 14 #12",oilCol:44,waterCol:45,gasCol:null},{id:"shusa-15-1",name:"Shusa 15 #1",oilCol:48,waterCol:49,gasCol:null},{id:"shusa-15-2",name:"Shusa 15 #2",oilCol:52,waterCol:53,gasCol:null},{id:"shusa-15-3",name:"Shusa 15 #3",oilCol:56,waterCol:57,gasCol:null},{id:"shusa-15-4",name:"Shusa 15 #4",oilCol:60,waterCol:61,gasCol:null},{id:"shusa-15-6",name:"Shusa 15 #6",oilCol:64,waterCol:65,gasCol:null},{id:"shusa-15-7",name:"Shusa 15 #7",oilCol:68,waterCol:69,gasCol:null},{id:"shusa-15-8",name:"Shusa 15 #8",oilCol:72,waterCol:73,gasCol:null},{id:"shusa-15-9",name:"Shusa 15 #9",oilCol:76,waterCol:77,gasCol:null},{id:"shusa-15-10",name:"Shusa 15 #10",oilCol:80,waterCol:81,gasCol:null},{id:"shusa-15-11",name:"Shusa 15 #11",oilCol:84,waterCol:85,gasCol:null},{id:"shusa-15-12",name:"Shusa 15 #12",oilCol:88,waterCol:89,gasCol:null},{id:"shusa-15-13",name:"Shusa 15 #13",oilCol:92,waterCol:93,gasCol:null},{id:"shusa-15-14",name:"Shusa 15 #14",oilCol:96,waterCol:97,gasCol:null},{id:"shusa-15-15",name:"Shusa 15 #15",oilCol:100,waterCol:101,gasCol:null},{id:"shusa-15-16",name:"Shusa 15 #16",oilCol:104,waterCol:105,gasCol:null}],parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test 20 RB Link"]){const t=this.parseWellTestSheet(n.Sheets["Well Test 20 RB Link"],this.wells20RB);e.wells.push(...t.wells),e.rawRowCount=t.rowCount}if(n.Sheets["Well Test 14 15"]){const t=this.parseWellTestSheet(n.Sheets["Well Test 14 15"],this.wells1415);e.wells.push(...t.wells)}return e.batteryProduction=this.parseBatteryProduction(n),["14-15 Run Tickets","20-RB Run Tickets","Link Run Tickets","Yates Run Tickets"].forEach(t=>{if(n.Sheets[t]){const r=this.parseRunTicketsSheet(n.Sheets[t]);e.runTickets.push(...r)}}),e.runTickets.sort((t,r)=>(r.date||"").localeCompare(t.date||"")),e.runTickets=e.runTickets.slice(0,100),e},parseWellTestSheet(n,e){const t=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),r=e.map(i=>({id:i.id,name:i.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let s=0;for(let i=4;i<t.length;i++){const o=t[i];if(!o||!o[0])continue;const l=this.parseDate(o[0]);l&&(s++,e.forEach((c,h)=>{const d=this.parseNumber(o[c.oilCol]),p=this.parseNumber(o[c.waterCol]),g=c.gasCol!==null?this.parseNumber(o[c.gasCol]):null;(d!==null||p!==null||g!==null)&&(r[h].wellTests.push({date:l,oil:d,water:p,gas:g}),r[h].production.push({date:new Date(l),oil:d,water:p,gas:g}))}))}return r.forEach(i=>{i.wellTests.sort((o,l)=>new Date(l.date)-new Date(o.date)),i.wellTests=i.wellTests.slice(0,60),i.production.sort((o,l)=>o.date-l.date)}),{wells:r,rowCount:s}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[];for(let i=e.headerRowIndex+2;i<r.length;i++){const o=r[i];if(!o)continue;const l=this.parseDate(o[e.dateCol]);if(!l)continue;const c=this.parseNumber(o[e.oilProdCol]),h=this.parseNumber(o[e.waterProdCol]),d=e.gasProdCol!==null?this.parseNumber(o[e.gasProdCol]):null;(c!==null||h!==null||d!==null)&&s.push({date:new Date(l),oil:c,water:h,gas:d})}return s.sort((i,o)=>i.date-o.date),s},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[];for(let r=3;r<e.length;r++){const s=e[r];!s||!s[1]||t.push({date:this.parseDate(s[0]),ticketNum:String(s[1]||""),tank:this.parseNumber(s[2]),ftTop:this.parseNumber(s[3]),inTop:this.parseNumber(s[4]),ftBttm:this.parseNumber(s[5]),inBttm:this.parseNumber(s[6]),vol:this.parseNumber(s[8])})}return t},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},XT={id:"mwwemac",name:"MW-Wemac-Sabrina-Berkley",expectedFileName:"Mw-Wemac-Sabrina-Berkley.xlsx",wells:[{id:"berkley-1",name:"Berkley #1",oilCol:1,waterCol:2,gasCol:3,status:"active"},{id:"berkley-4",name:"Berkley #4",oilCol:7,waterCol:8,gasCol:9,status:"inactive"},{id:"berkley-5",name:"Berkley #5",oilCol:13,waterCol:14,gasCol:15,status:"active"},{id:"berkley-6",name:"Berkley #6",oilCol:19,waterCol:20,gasCol:21,status:"active"},{id:"sabrina-5",name:"Sabrina #5",oilCol:25,waterCol:26,gasCol:27,status:"inactive"},{id:"sabrina-7",name:"Sabrina #7",oilCol:31,waterCol:32,gasCol:33,status:"inactive"},{id:"sabrina-3",name:"Sabrina #3",oilCol:37,waterCol:38,gasCol:39,status:"inactive"},{id:"sabrina-12",name:"Sabrina #12",oilCol:43,waterCol:44,gasCol:45,status:"inactive"}],productionConfig:{sheet:"Berkley",headerRowIndex:3,dateCol:0,oilProdCol:25,waterProdCol:26,gasProdCol:27},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets.Well_Test){const t=this.parseWellTestSheet(n.Sheets.Well_Test);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.batteryProduction=this.parseBatteryProduction(n),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=this.wells.map(s=>({id:s.id,name:s.name,status:s.status||"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let s=4;s<e.length;s++){const i=e[s];if(!i||!i[0])continue;const o=this.parseDate(i[0]);o&&(r++,this.wells.forEach((l,c)=>{const h=this.parseNumber(i[l.oilCol]),d=this.parseNumber(i[l.waterCol]),p=this.parseNumber(i[l.gasCol]);(h!==null||d!==null||p!==null)&&(t[c].wellTests.push({date:o,oil:h,water:d,gas:p}),t[c].production.push({date:new Date(o),oil:h,water:d,gas:p}))}))}return t.forEach(s=>{s.wellTests.sort((i,o)=>new Date(o.date)-new Date(i.date)),s.wellTests=s.wellTests.slice(0,60),s.production.sort((i,o)=>i.date-o.date)}),{wells:t,rowCount:r}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[];for(let i=e.headerRowIndex+2;i<r.length;i++){const o=r[i];if(!o)continue;const l=this.parseDate(o[e.dateCol]);if(!l)continue;const c=this.parseNumber(o[e.oilProdCol]),h=this.parseNumber(o[e.waterProdCol]),d=e.gasProdCol!==null?this.parseNumber(o[e.gasProdCol]):null;(c!==null||h!==null||d!==null)&&s.push({date:new Date(l),oil:c,water:h,gas:d})}return s.sort((i,o)=>i.date-o.date),s},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},QT={id:"unit130",name:"1-30 Unit 1H",expectedFileName:"1-30 Unit 1H Gauge Sheet.xlsx",wells:[{id:"uls-1-30-1h",name:"ULS 1-30-1H",oilCol:1,waterCol:2,gasCol:3}],pressureConfig:{sheet:"1-30-1H Gauge Sheet",headerRowIndex:5,dateCol:0,wells:{"uls-1-30-1h":{csg:37,tbg:38,fl:null,inj:39}}},productionConfig:{sheet:"1-30-1H Gauge Sheet",headerRowIndex:5,dateCol:0,oilProdCol:30,waterProdCol:31,gasProdCol:32},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.wells.length>0&&this.applyPressureReadings(n,e.wells),e.batteryProduction=this.parseBatteryProduction(n),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=this.wells.map(s=>({id:s.id,name:s.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let s=4;s<e.length;s++){const i=e[s];if(!i||!i[0])continue;const o=this.parseDate(i[0]);o&&(r++,this.wells.forEach((l,c)=>{const h=this.parseNumber(i[l.oilCol]),d=this.parseNumber(i[l.waterCol]),p=this.parseNumber(i[l.gasCol]);(h!==null||d!==null||p!==null)&&(t[c].wellTests.push({date:o,oil:h,water:d,gas:p}),t[c].production.push({date:new Date(o),oil:h,water:d,gas:p}))}))}return t.forEach(s=>{s.wellTests.sort((i,o)=>new Date(o.date)-new Date(i.date)),s.wellTests=s.wellTests.slice(0,60),s.production.sort((i,o)=>i.date-o.date)}),{wells:t,rowCount:r}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[];for(let i=e.headerRowIndex+2;i<r.length;i++){const o=r[i];if(!o)continue;const l=this.parseDate(o[e.dateCol]);if(!l)continue;const c=this.parseNumber(o[e.oilProdCol]),h=this.parseNumber(o[e.waterProdCol]),d=e.gasProdCol!==null?this.parseNumber(o[e.gasProdCol]):null;(c!==null||h!==null||d!==null)&&s.push({date:new Date(l),oil:c,water:h,gas:d})}return s.sort((i,o)=>i.date-o.date),s},applyPressureReadings(n,e){const t=this.pressureConfig;if(!t)return;const r=n.Sheets[t.sheet];if(!r)return;const s=XLSX.utils.sheet_to_json(r,{header:1,defval:null});if(!s||s.length===0)return;const i={};e.forEach(o=>{i[o.id]=[]});for(let o=t.headerRowIndex+1;o<s.length;o++){const l=s[o];if(!l)continue;const c=this.parseDate(l[t.dateCol]);c&&Object.entries(t.wells).forEach(([h,d])=>{if(!i[h])return;const p=this.parseNumber(l[d.csg]),g=this.parseNumber(l[d.tbg]),I=d.fl===null?null:this.parseNumber(l[d.fl]),S=this.parseNumber(l[d.inj]);(p!==null||g!==null||I!==null||S!==null)&&i[h].push({date:c,casingPsi:p,tubingPsi:g,flowlinePsi:I,injVol:S})})}e.forEach(o=>{const l=i[o.id]||[];l.sort((c,h)=>new Date(h.date)-new Date(c.date)),o.pressureReadings=l.slice(0,60)})},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},JT={id:"uls35h",name:"ULS 3-5H",expectedFileName:"ULS 3-5H Gauge Sheet.xlsx",wells:[{id:"uls-1-3-1h",name:"ULS 1-3-1H",oilCol:1,waterCol:2,gasCol:3},{id:"uls-1-3-3h",name:"ULS 1-3-3H",oilCol:7,waterCol:8,gasCol:9},{id:"uls-1-3-5h",name:"ULS 1-3-5H",oilCol:13,waterCol:14,gasCol:15},{id:"uls-1-3-7h",name:"ULS 1-3-7H",oilCol:19,waterCol:20,gasCol:21}],pressureConfig:{sheet:"University 3-5H",headerRowIndex:3,dateCol:0,wells:{"uls-1-3-1h":{csg:34,tbg:35,fl:36,inj:37},"uls-1-3-3h":{csg:39,tbg:40,fl:41,inj:42},"uls-1-3-5h":{csg:46,tbg:47,fl:48,inj:49},"uls-1-3-7h":{csg:51,tbg:52,fl:53,inj:54}}},productionConfig:{sheet:"University 3-5H",headerRowIndex:3,dateCol:0,oilProdCol:30,waterProdCol:31,gasProdCol:32},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.wells.length>0&&this.applyPressureReadings(n,e.wells),e.batteryProduction=this.parseBatteryProduction(n),n.Sheets["3-5H Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["3-5H Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=this.wells.map(s=>({id:s.id,name:s.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let s=4;s<e.length;s++){const i=e[s];if(!i||!i[0])continue;const o=this.parseDate(i[0]);o&&(r++,this.wells.forEach((l,c)=>{const h=this.parseNumber(i[l.oilCol]),d=this.parseNumber(i[l.waterCol]),p=this.parseNumber(i[l.gasCol]);(h!==null||d!==null||p!==null)&&(t[c].wellTests.push({date:o,oil:h,water:d,gas:p}),t[c].production.push({date:new Date(o),oil:h,water:d,gas:p}))}))}return t.forEach(s=>{s.wellTests.sort((i,o)=>new Date(o.date)-new Date(i.date)),s.wellTests=s.wellTests.slice(0,60),s.production.sort((i,o)=>i.date-o.date)}),{wells:t,rowCount:r}},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[];for(let r=3;r<e.length;r++){const s=e[r];!s||!s[1]||t.push({date:this.parseDate(s[0]),ticketNum:String(s[1]||""),tank:this.parseNumber(s[2]),ftTop:this.parseNumber(s[3]),inTop:this.parseNumber(s[4]),ftBttm:this.parseNumber(s[5]),inBttm:this.parseNumber(s[6]),vol:this.parseNumber(s[8])})}return t.sort((r,s)=>(s.date||"").localeCompare(r.date||"")),t.slice(0,100)},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[];for(let i=e.headerRowIndex+2;i<r.length;i++){const o=r[i];if(!o)continue;const l=this.parseDate(o[e.dateCol]);if(!l)continue;const c=this.parseNumber(o[e.oilProdCol]),h=this.parseNumber(o[e.waterProdCol]),d=e.gasProdCol!==null?this.parseNumber(o[e.gasProdCol]):null;(c!==null||h!==null||d!==null)&&s.push({date:new Date(l),oil:c,water:h,gas:d})}return s.sort((i,o)=>i.date-o.date),s},applyPressureReadings(n,e){const t=this.pressureConfig;if(!t)return;const r=n.Sheets[t.sheet];if(!r)return;const s=XLSX.utils.sheet_to_json(r,{header:1,defval:null});if(!s||s.length===0)return;const i={};e.forEach(o=>{i[o.id]=[]});for(let o=t.headerRowIndex+1;o<s.length;o++){const l=s[o];if(!l)continue;const c=this.parseDate(l[t.dateCol]);c&&Object.entries(t.wells).forEach(([h,d])=>{if(!i[h])return;const p=this.parseNumber(l[d.csg]),g=this.parseNumber(l[d.tbg]),I=this.parseNumber(l[d.fl]),S=this.parseNumber(l[d.inj]);(p!==null||g!==null||I!==null||S!==null)&&i[h].push({date:c,casingPsi:p,tubingPsi:g,flowlinePsi:I,injVol:S})})}e.forEach(o=>{const l=i[o.id]||[];l.sort((c,h)=>new Date(h.date)-new Date(c.date)),o.pressureReadings=l.slice(0,60)})},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},Vd={CowdenParser:HT,BigMaxParser:WT,BigMax1HParser:qT,SouthAndrewsParser:zT,PolarisParser:GT,ShusaParser:KT,MWWemacParser:XT,Unit130Parser:QT,ULS35HParser:JT};function Ld(n,e){if(!n||!n.wells)return e;const t={};n.wells.forEach(s=>{t[s.id]=s});const r=e.wells.map(s=>{const i=t[s.id];return i?(delete t[s.id],YT(i,s)):s});return Object.values(t).forEach(s=>{r.push(s)}),{...e,wells:r}}function YT(n,e){const t=ZT(n.pressureReadings||[],e.pressureReadings||[]);return{...e,actionItems:n.actionItems||[],failureHistory:n.failureHistory||[],chemicalProgram:n.chemicalProgram||{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},pressureReadings:t}}function ZT(n,e){const t={};n.forEach(s=>{if(s&&s.date){const i=Qc(s.date);t[i]=s}}),e.forEach(s=>{if(s&&s.date){const i=Qc(s.date);t[i]=s}});const r=Object.values(t);return r.sort((s,i)=>new Date(i.date)-new Date(s.date)),r.slice(0,60)}function Qc(n){return n?typeof n=="string"?n.split("T")[0]:n instanceof Date?n.toISOString().split("T")[0]:String(n):""}function ev(){const n=document.getElementById("uploadArea"),e=document.getElementById("fileInput"),t=document.getElementById("btnReupload");n.addEventListener("click",r=>{r.target.id!=="btnReupload"&&e.click()}),t.addEventListener("click",r=>{r.stopPropagation(),e.click()}),e.addEventListener("change",r=>{const s=r.target.files[0];s&&Jc(s),e.value=""}),n.addEventListener("dragover",r=>{r.preventDefault(),n.classList.add("drag-over")}),n.addEventListener("dragleave",()=>{n.classList.remove("drag-over")}),n.addEventListener("drop",r=>{r.preventDefault(),n.classList.remove("drag-over");const s=r.dataTransfer.files[0];s&&Jc(s)})}async function Jc(n){if(!P.currentSheet){alert("Please select a gauge sheet first");return}const e=Me.find(o=>o.id===P.currentSheet);if(!e)return;const t=Vd[e.parser];if(!t){alert(`Parser not yet implemented for ${e.name}. Coming soon!`);return}const r=document.getElementById("uploadProgress"),s=document.getElementById("progressFill"),i=document.getElementById("progressText");r.style.display="block",s.style.width="10%",i.textContent="Reading file...";try{const o=await n.arrayBuffer();s.style.width="30%",i.textContent="Parsing Excel...";const l=XLSX.read(o,{type:"array",cellDates:!0});s.style.width="60%",i.textContent="Extracting data...";const c=t.parse(l);s.style.width="70%",i.textContent="Checking for manual edits...";const h=await Rd(P.currentSheet);s.style.width="80%",i.textContent="Merging data...";const d=Ld(h,c);P.appData[P.currentSheet]=d,s.style.width="90%",i.textContent="Saving...",await Pd(P.currentSheet,d,!0),s.style.width="95%",i.textContent="Refreshing data...",await ua(),await Zs(),s.style.width="100%",i.textContent="Complete!",setTimeout(()=>{r.style.display="none",s.style.width="0%",wr(),kd(P.currentSheet)},500)}catch(o){console.error("Error processing file:",o),alert("Error processing file: "+o.message),r.style.display="none"}}function tv(){const n=document.getElementById("bulkUploadArea"),e=document.getElementById("bulkFileInput");!n||!e||(n.addEventListener("click",()=>{e.click()}),e.addEventListener("change",t=>{const r=Array.from(t.target.files);r.length>0&&Yc(r),e.value=""}),n.addEventListener("dragover",t=>{t.preventDefault(),n.classList.add("drag-over")}),n.addEventListener("dragleave",()=>{n.classList.remove("drag-over")}),n.addEventListener("drop",t=>{t.preventDefault(),n.classList.remove("drag-over");const r=Array.from(t.dataTransfer.files);r.length>0&&Yc(r)}))}async function Yc(n){const e=document.getElementById("bulkUploadProgress"),t=document.getElementById("bulkProgressFill"),r=document.getElementById("bulkProgressText"),s=document.getElementById("bulkUploadResults");e.style.display="block",s.style.display="none",s.innerHTML="";const i=[];let o=0;for(const l of n){t.style.width=`${o/n.length*100}%`,r.textContent=`Processing ${l.name}...`;const c=Me.find(d=>l.name.toLowerCase().includes(d.fileName.toLowerCase().replace(".xlsx","").replace(".xlsm",""))||d.fileName.toLowerCase()===l.name.toLowerCase());if(!c){i.push({name:l.name,status:"skipped",detail:"Unknown file"}),o++;continue}const h=Vd[c.parser];if(!h){i.push({name:l.name,status:"skipped",detail:"No parser available"}),o++;continue}try{const d=await l.arrayBuffer(),p=XLSX.read(d,{type:"array",cellDates:!0}),g=h.parse(p),I=await Rd(c.id),S=Ld(I,g);P.appData[c.id]=S,i.push({name:c.name,status:"success",detail:`${g.wells.length} wells loaded`})}catch(d){console.error(`Error processing ${l.name}:`,d),i.push({name:l.name,status:"error",detail:d.message})}o++}r.textContent="Saving to cloud...";for(const l in P.appData)await Pd(l,P.appData[l],!0);t.style.width="95%",r.textContent="Refreshing data...",await ua(),await Zs(),t.style.width="100%",r.textContent="Complete!",setTimeout(()=>{e.style.display="none",s.style.display="block",s.innerHTML=i.map(l=>`
            <div class="bulk-result-item ${l.status}">
                <span class="result-icon">${l.status==="success"?"OK":l.status==="error"?"X":"?"}</span>
                <span class="result-name">${l.name}</span>
                <span class="result-detail">${l.detail}</span>
            </div>
        `).join(""),wr()},500)}let Ui=null;function nv(n){Ui=n,vw(kr,e=>{Ui&&Ui(e)})}async function rv(n,e){try{return{success:!0,user:(await ww(kr,n,e)).user}}catch(t){return console.error("Sign in error:",t),{success:!1,error:xd(t)}}}async function sv(){try{return await Iw(kr),{success:!0}}catch(n){return console.error("Sign out error:",n),{success:!1,error:n.message}}}async function iv(n,e){try{return{success:!0,user:(await _w(kr,n,e)).user}}catch(t){return console.error("Create account error:",t),{success:!1,error:xd(t)}}}function xd(n){switch(n.code){case"auth/invalid-email":return"Invalid email address.";case"auth/user-disabled":return"This account has been disabled.";case"auth/user-not-found":return"No account found with this email.";case"auth/wrong-password":return"Incorrect password.";case"auth/email-already-in-use":return"An account with this email already exists.";case"auth/weak-password":return"Password should be at least 6 characters.";case"auth/network-request-failed":return"Network error. Please check your connection.";case"auth/too-many-requests":return"Too many failed attempts. Please try again later.";default:return n.message||"An error occurred. Please try again."}}function ov(){const n=document.getElementById("loginView"),e=document.querySelector(".app-container");n&&(n.style.display="flex"),e&&(e.style.display="none")}function av(){const n=document.getElementById("loginView"),e=document.querySelector(".app-container");n&&(n.style.display="none"),e&&(e.style.display="flex")}function lv(){const n=document.getElementById("loginForm"),e=document.getElementById("signupForm"),t=document.getElementById("showSignup"),r=document.getElementById("showLogin"),s=document.getElementById("loginContainer"),i=document.getElementById("signupContainer");n&&n.addEventListener("submit",async o=>{o.preventDefault();const l=document.getElementById("loginEmail").value,c=document.getElementById("loginPassword").value,h=document.getElementById("loginError"),d=n.querySelector('button[type="submit"]');h.textContent="",d.disabled=!0,d.textContent="Signing in...";const p=await rv(l,c);p.success||(h.textContent=p.error,d.disabled=!1,d.textContent="Sign In")}),e&&e.addEventListener("submit",async o=>{o.preventDefault();const l=document.getElementById("signupEmail").value,c=document.getElementById("signupPassword").value,h=document.getElementById("signupConfirmPassword").value,d=document.getElementById("signupError"),p=e.querySelector('button[type="submit"]');if(d.textContent="",c!==h){d.textContent="Passwords do not match.";return}p.disabled=!0,p.textContent="Creating account...";const g=await iv(l,c);g.success||(d.textContent=g.error,p.disabled=!1,p.textContent="Create Account")}),t&&t.addEventListener("click",o=>{o.preventDefault(),s.style.display="none",i.style.display="block"}),r&&r.addEventListener("click",o=>{o.preventDefault(),i.style.display="none",s.style.display="block"})}let wo=!1;async function cv(){if(wo)return;document.querySelector(".app-container");let n=document.createElement("div");n.className="loading-overlay",n.style.display="flex",n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.right="0",n.style.bottom="0",n.style.zIndex="9999",n.innerHTML='<div class="loading-content"><div class="loading-spinner"></div><p class="loading-text">Loading...</p></div>',document.body.appendChild(n),mf(),P.isLoading=!0,await ua(),Nd(),ev(),tv(),vT(),OT(),FT(),gf(),hv(),Lt("welcome"),av(),n&&n.parentNode&&n.parentNode.removeChild(n),wo=!0,uv()}async function uv(){try{await Zs(),P.isLoading=!1,In(),wr(),console.log("Background loading complete")}catch(n){console.error("Error loading dashboard summary:",n),P.isLoading=!1,In(),wr()}}function hv(){const n=document.getElementById("userAvatarBtn"),e=document.getElementById("userDropdown"),t=document.getElementById("userEmail"),r=document.getElementById("btnSignOutDropdown");if(!n||!e)return;const s=kr.currentUser;s&&t&&(t.textContent=s.email),n.addEventListener("click",i=>{i.stopPropagation(),e.classList.toggle("active")}),document.addEventListener("click",i=>{!e.contains(i.target)&&i.target!==n&&e.classList.remove("active")}),r&&r.addEventListener("click",async()=>{e.classList.remove("active"),await sv()})}document.addEventListener("DOMContentLoaded",()=>{lv(),nv(n=>{n?(console.log("User signed in:",n.email),cv()):(console.log("User signed out"),ov(),wo=!1)})});XE((n,e)=>{Nn(n,e)});gT(()=>{wr(),In()});
