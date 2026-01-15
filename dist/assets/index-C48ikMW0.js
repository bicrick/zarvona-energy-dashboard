(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Qe=[{id:"cowden",name:"Cowden",fileName:"Cowden Gauge Sheet1.xlsx",parser:"CowdenParser"},{id:"bigmax",name:"Big Max",fileName:"Big Max Gauge Sheet.xlsx",parser:"BigMaxParser"},{id:"bigmax1h",name:"Big Max 1H",fileName:"Big Max 1H Gauge Sheet.xlsx",parser:"BigMax1HParser"},{id:"southandrews",name:"South Andrews",fileName:"South Andrews Gauge Sheet.xlsm",parser:"SouthAndrewsParser"},{id:"polaris",name:"Polaris",fileName:"Polaris Gauge Sheet.xlsx",parser:"PolarisParser"},{id:"shusa",name:"Shusa",fileName:"Shusa Gauge Sheet.xlsx",parser:"ShusaParser"},{id:"mwwemac",name:"MW-Wemac-Sabrina-Berkley",fileName:"Mw-Wemac-Sabrina-Berkley.xlsx",parser:"MWWemacParser"},{id:"unit130",name:"1-30 Unit 1H",fileName:"1-30 Unit 1H Gauge Sheet.xlsx",parser:"Unit130Parser"},{id:"uls35h",name:"ULS 3-5H",fileName:"ULS 3-5H Gauge Sheet.xlsx",parser:"ULS35HParser"}],ji="oilWellTheme",A={appData:{},currentSheet:null,currentWell:null,wellProductionCharts:{},batteryProductionChart:null,currentWellData:null,productionDateRange:{min:null,max:null},chartState:{oil:{aggregation:"month",selectedWells:null},water:{aggregation:"month",selectedWells:null},gas:{aggregation:"month",selectedWells:null}},aggregateOilChart:null,aggregateWaterChart:null,aggregateGasChart:null,oilChartDateRange:{min:null,max:null},waterChartDateRange:{min:null,max:null},gasChartDateRange:{min:null,max:null},pressureCharts:{psi:null,injVol:null},currentEditSection:null,isLoading:!1,loadedSheets:[],loadedWells:{},metadataCache:{wellCounts:{},wellNames:{}}};function Cf(){const n=localStorage.getItem(ji);n?document.documentElement.setAttribute("data-theme",n):Cl(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{localStorage.getItem(ji)||Cl()}),To()}function Cl(){const n=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",n?"dark":"light"),To()}function Sf(){const n=document.getElementById("themeToggle");n&&n.addEventListener("click",bf)}function bf(){const e=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",e),localStorage.setItem(ji,e),To()}function To(){const n=document.querySelector(".theme-toggle-label");if(n){const e=document.documentElement.getAttribute("data-theme")||"dark";n.textContent=e==="dark"?"Light Mode":"Dark Mode"}}const Af=()=>{};var Sl={};/**
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
 */const cu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Pf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},uu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,l=o?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,S=h&63;c||(S=64,o||(g=64)),r.push(t[d],t[p],t[g],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Pf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new Rf;const g=i<<2|l>>4;if(r.push(g),h!==64){const S=l<<4&240|h>>2;if(r.push(S),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Rf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Df=function(n){const e=cu(n);return uu.encodeByteArray(e,!0)},fs=function(n){return Df(n).replace(/\./g,"")},hu=function(n){try{return uu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Nf=()=>kf().__FIREBASE_DEFAULTS__,Vf=()=>{if(typeof process>"u"||typeof Sl>"u")return;const n=Sl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Lf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&hu(n[1]);return e&&JSON.parse(e)},Ls=()=>{try{return Af()||Nf()||Vf()||Lf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},du=n=>{var e,t;return(t=(e=Ls())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},xf=n=>{const e=du(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},fu=()=>{var n;return(n=Ls())==null?void 0:n.config},pu=n=>{var e;return(e=Ls())==null?void 0:e[`_${n}`]};/**
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
 */class Mf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function An(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mu(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Of(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[fs(JSON.stringify(t)),fs(JSON.stringify(o)),""].join(".")}const or={};function Ff(){const n={prod:[],emulator:[]};for(const e of Object.keys(or))or[e]?n.emulator.push(e):n.prod.push(e);return n}function Bf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let bl=!1;function gu(n,e){if(typeof window>"u"||typeof document>"u"||!An(window.location.host)||or[n]===e||or[n]||bl)return;or[n]=e;function t(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=Ff().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,S){g.setAttribute("width","24"),g.setAttribute("id",S),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{bl=!0,o()},g}function d(g,S){g.setAttribute("id",S),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=Bf(r),S=t("text"),P=document.getElementById(S)||document.createElement("span"),R=t("learnmore"),N=document.getElementById(R)||document.createElement("a"),F=t("preprendIcon"),O=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const q=g.element;l(q),d(N,R);const be=h();c(O,F),q.append(O,P,N,be),document.body.appendChild(q)}i?(P.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(O.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function $f(){var e;const n=(e=Ls())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wf(){const n=Te();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zf(){return!$f()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Gf(){try{return typeof indexedDB=="object"}catch{return!1}}function Kf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Xf="FirebaseError";class ot extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Xf,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tr.prototype.create)}}class Tr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Qf(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new ot(s,l,r)}}function Qf(n,e){return n.replace(Jf,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Jf=/\{\$([^}]+)}/g;function Yf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function qt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Al(i)&&Al(o)){if(!qt(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Al(n){return n!==null&&typeof n=="object"}/**
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
 */function vr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function er(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function tr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Zf(n,e){const t=new ep(n,e);return t.subscribe.bind(t)}class ep{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");tp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=bi),s.error===void 0&&(s.error=bi),s.complete===void 0&&(s.complete=bi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function bi(){}/**
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
 */function ue(n){return n&&n._delegate?n._delegate:n}class Wt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class np{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Mf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sp(e))try{this.getOrInitializeService({instanceIdentifier:$t})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=$t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$t){return this.instances.has(e)}getOptions(e=$t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$t){return this.component?this.component.multipleInstances?e:$t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rp(n){return n===$t?void 0:n}function sp(n){return n.instantiationMode==="EAGER"}/**
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
 */class ip{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new np(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const op={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},ap=W.INFO,lp={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},cp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=lp[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vo{constructor(e){this.name=e,this._logLevel=ap,this._logHandler=cp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?op[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const up=(n,e)=>e.some(t=>n instanceof t);let Pl,Rl;function hp(){return Pl||(Pl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dp(){return Rl||(Rl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yu=new WeakMap,Hi=new WeakMap,_u=new WeakMap,Ai=new WeakMap,Io=new WeakMap;function fp(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(wt(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&yu.set(t,n)}).catch(()=>{}),Io.set(e,n),e}function pp(n){if(Hi.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Hi.set(n,e)}let qi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Hi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_u.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function mp(n){qi=n(qi)}function gp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Pi(this),e,...t);return _u.set(r,e.sort?e.sort():[e]),wt(r)}:dp().includes(n)?function(...e){return n.apply(Pi(this),e),wt(yu.get(this))}:function(...e){return wt(n.apply(Pi(this),e))}}function yp(n){return typeof n=="function"?gp(n):(n instanceof IDBTransaction&&pp(n),up(n,hp())?new Proxy(n,qi):n)}function wt(n){if(n instanceof IDBRequest)return fp(n);if(Ai.has(n))return Ai.get(n);const e=yp(n);return e!==n&&(Ai.set(n,e),Io.set(e,n)),e}const Pi=n=>Io.get(n);function _p(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),l=wt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(wt(o.result),c.oldVersion,c.newVersion,wt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const wp=["get","getKey","getAll","getAllKeys","count"],Ep=["put","add","delete","clear"],Ri=new Map;function Dl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ri.get(e))return Ri.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Ep.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wp.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return Ri.set(e,i),i}mp(n=>({...n,get:(e,t,r)=>Dl(e,t)||n.get(e,t,r),has:(e,t)=>!!Dl(e,t)||n.has(e,t)}));/**
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
 */class Tp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function vp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wi="@firebase/app",kl="0.14.7";/**
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
 */const tt=new vo("@firebase/app"),Ip="@firebase/app-compat",Cp="@firebase/analytics-compat",Sp="@firebase/analytics",bp="@firebase/app-check-compat",Ap="@firebase/app-check",Pp="@firebase/auth",Rp="@firebase/auth-compat",Dp="@firebase/database",kp="@firebase/data-connect",Np="@firebase/database-compat",Vp="@firebase/functions",Lp="@firebase/functions-compat",xp="@firebase/installations",Mp="@firebase/installations-compat",Op="@firebase/messaging",Fp="@firebase/messaging-compat",Bp="@firebase/performance",Up="@firebase/performance-compat",$p="@firebase/remote-config",jp="@firebase/remote-config-compat",Hp="@firebase/storage",qp="@firebase/storage-compat",Wp="@firebase/firestore",zp="@firebase/ai",Gp="@firebase/firestore-compat",Kp="firebase",Xp="12.8.0";/**
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
 */const zi="[DEFAULT]",Qp={[Wi]:"fire-core",[Ip]:"fire-core-compat",[Sp]:"fire-analytics",[Cp]:"fire-analytics-compat",[Ap]:"fire-app-check",[bp]:"fire-app-check-compat",[Pp]:"fire-auth",[Rp]:"fire-auth-compat",[Dp]:"fire-rtdb",[kp]:"fire-data-connect",[Np]:"fire-rtdb-compat",[Vp]:"fire-fn",[Lp]:"fire-fn-compat",[xp]:"fire-iid",[Mp]:"fire-iid-compat",[Op]:"fire-fcm",[Fp]:"fire-fcm-compat",[Bp]:"fire-perf",[Up]:"fire-perf-compat",[$p]:"fire-rc",[jp]:"fire-rc-compat",[Hp]:"fire-gcs",[qp]:"fire-gcs-compat",[Wp]:"fire-fst",[Gp]:"fire-fst-compat",[zp]:"fire-vertex","fire-js":"fire-js",[Kp]:"fire-js-all"};/**
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
 */const ps=new Map,Jp=new Map,Gi=new Map;function Nl(n,e){try{n.container.addComponent(e)}catch(t){tt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function mn(n){const e=n.name;if(Gi.has(e))return tt.debug(`There were multiple attempts to register component ${e}.`),!1;Gi.set(e,n);for(const t of ps.values())Nl(t,n);for(const t of Jp.values())Nl(t,n);return!0}function Co(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Le(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Yp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Et=new Tr("app","Firebase",Yp);/**
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
 */class Zp{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Et.create("app-deleted",{appName:this._name})}}/**
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
 */const Pn=Xp;function wu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:zi,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Et.create("bad-app-name",{appName:String(s)});if(t||(t=fu()),!t)throw Et.create("no-options");const i=ps.get(s);if(i){if(qt(t,i.options)&&qt(r,i.config))return i;throw Et.create("duplicate-app",{appName:s})}const o=new ip(s);for(const c of Gi.values())o.addComponent(c);const l=new Zp(t,r,o);return ps.set(s,l),l}function Eu(n=zi){const e=ps.get(n);if(!e&&n===zi&&fu())return wu();if(!e)throw Et.create("no-app",{appName:n});return e}function Tt(n,e,t){let r=Qp[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tt.warn(o.join(" "));return}mn(new Wt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const em="firebase-heartbeat-database",tm=1,dr="firebase-heartbeat-store";let Di=null;function Tu(){return Di||(Di=_p(em,tm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(dr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Et.create("idb-open",{originalErrorMessage:n.message})})),Di}async function nm(n){try{const t=(await Tu()).transaction(dr),r=await t.objectStore(dr).get(vu(n));return await t.done,r}catch(e){if(e instanceof ot)tt.warn(e.message);else{const t=Et.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tt.warn(t.message)}}}async function Vl(n,e){try{const r=(await Tu()).transaction(dr,"readwrite");await r.objectStore(dr).put(e,vu(n)),await r.done}catch(t){if(t instanceof ot)tt.warn(t.message);else{const r=Et.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});tt.warn(r.message)}}}function vu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const rm=1024,sm=30;class im{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new am(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ll();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>sm){const o=lm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){tt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ll(),{heartbeatsToSend:r,unsentEntries:s}=om(this._heartbeatsCache.heartbeats),i=fs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return tt.warn(t),""}}}function Ll(){return new Date().toISOString().substring(0,10)}function om(n,e=rm){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),xl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),xl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class am{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gf()?Kf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await nm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Vl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Vl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function xl(n){return fs(JSON.stringify({version:2,heartbeats:n})).length}function lm(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function cm(n){mn(new Wt("platform-logger",e=>new Tp(e),"PRIVATE")),mn(new Wt("heartbeat",e=>new im(e),"PRIVATE")),Tt(Wi,kl,n),Tt(Wi,kl,"esm2020"),Tt("fire-js","")}cm("");var Ml=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vt,Iu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function w(){}w.prototype=y.prototype,T.F=y.prototype,T.prototype=new w,T.prototype.constructor=T,T.D=function(v,E,C){for(var _=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)_[Ae-2]=arguments[Ae];return y.prototype[E].apply(v,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,y,w){w||(w=0);const v=Array(16);if(typeof y=="string")for(var E=0;E<16;++E)v[E]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(E=0;E<16;++E)v[E]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=T.g[0],w=T.g[1],E=T.g[2];let C=T.g[3],_;_=y+(C^w&(E^C))+v[0]+3614090360&4294967295,y=w+(_<<7&4294967295|_>>>25),_=C+(E^y&(w^E))+v[1]+3905402710&4294967295,C=y+(_<<12&4294967295|_>>>20),_=E+(w^C&(y^w))+v[2]+606105819&4294967295,E=C+(_<<17&4294967295|_>>>15),_=w+(y^E&(C^y))+v[3]+3250441966&4294967295,w=E+(_<<22&4294967295|_>>>10),_=y+(C^w&(E^C))+v[4]+4118548399&4294967295,y=w+(_<<7&4294967295|_>>>25),_=C+(E^y&(w^E))+v[5]+1200080426&4294967295,C=y+(_<<12&4294967295|_>>>20),_=E+(w^C&(y^w))+v[6]+2821735955&4294967295,E=C+(_<<17&4294967295|_>>>15),_=w+(y^E&(C^y))+v[7]+4249261313&4294967295,w=E+(_<<22&4294967295|_>>>10),_=y+(C^w&(E^C))+v[8]+1770035416&4294967295,y=w+(_<<7&4294967295|_>>>25),_=C+(E^y&(w^E))+v[9]+2336552879&4294967295,C=y+(_<<12&4294967295|_>>>20),_=E+(w^C&(y^w))+v[10]+4294925233&4294967295,E=C+(_<<17&4294967295|_>>>15),_=w+(y^E&(C^y))+v[11]+2304563134&4294967295,w=E+(_<<22&4294967295|_>>>10),_=y+(C^w&(E^C))+v[12]+1804603682&4294967295,y=w+(_<<7&4294967295|_>>>25),_=C+(E^y&(w^E))+v[13]+4254626195&4294967295,C=y+(_<<12&4294967295|_>>>20),_=E+(w^C&(y^w))+v[14]+2792965006&4294967295,E=C+(_<<17&4294967295|_>>>15),_=w+(y^E&(C^y))+v[15]+1236535329&4294967295,w=E+(_<<22&4294967295|_>>>10),_=y+(E^C&(w^E))+v[1]+4129170786&4294967295,y=w+(_<<5&4294967295|_>>>27),_=C+(w^E&(y^w))+v[6]+3225465664&4294967295,C=y+(_<<9&4294967295|_>>>23),_=E+(y^w&(C^y))+v[11]+643717713&4294967295,E=C+(_<<14&4294967295|_>>>18),_=w+(C^y&(E^C))+v[0]+3921069994&4294967295,w=E+(_<<20&4294967295|_>>>12),_=y+(E^C&(w^E))+v[5]+3593408605&4294967295,y=w+(_<<5&4294967295|_>>>27),_=C+(w^E&(y^w))+v[10]+38016083&4294967295,C=y+(_<<9&4294967295|_>>>23),_=E+(y^w&(C^y))+v[15]+3634488961&4294967295,E=C+(_<<14&4294967295|_>>>18),_=w+(C^y&(E^C))+v[4]+3889429448&4294967295,w=E+(_<<20&4294967295|_>>>12),_=y+(E^C&(w^E))+v[9]+568446438&4294967295,y=w+(_<<5&4294967295|_>>>27),_=C+(w^E&(y^w))+v[14]+3275163606&4294967295,C=y+(_<<9&4294967295|_>>>23),_=E+(y^w&(C^y))+v[3]+4107603335&4294967295,E=C+(_<<14&4294967295|_>>>18),_=w+(C^y&(E^C))+v[8]+1163531501&4294967295,w=E+(_<<20&4294967295|_>>>12),_=y+(E^C&(w^E))+v[13]+2850285829&4294967295,y=w+(_<<5&4294967295|_>>>27),_=C+(w^E&(y^w))+v[2]+4243563512&4294967295,C=y+(_<<9&4294967295|_>>>23),_=E+(y^w&(C^y))+v[7]+1735328473&4294967295,E=C+(_<<14&4294967295|_>>>18),_=w+(C^y&(E^C))+v[12]+2368359562&4294967295,w=E+(_<<20&4294967295|_>>>12),_=y+(w^E^C)+v[5]+4294588738&4294967295,y=w+(_<<4&4294967295|_>>>28),_=C+(y^w^E)+v[8]+2272392833&4294967295,C=y+(_<<11&4294967295|_>>>21),_=E+(C^y^w)+v[11]+1839030562&4294967295,E=C+(_<<16&4294967295|_>>>16),_=w+(E^C^y)+v[14]+4259657740&4294967295,w=E+(_<<23&4294967295|_>>>9),_=y+(w^E^C)+v[1]+2763975236&4294967295,y=w+(_<<4&4294967295|_>>>28),_=C+(y^w^E)+v[4]+1272893353&4294967295,C=y+(_<<11&4294967295|_>>>21),_=E+(C^y^w)+v[7]+4139469664&4294967295,E=C+(_<<16&4294967295|_>>>16),_=w+(E^C^y)+v[10]+3200236656&4294967295,w=E+(_<<23&4294967295|_>>>9),_=y+(w^E^C)+v[13]+681279174&4294967295,y=w+(_<<4&4294967295|_>>>28),_=C+(y^w^E)+v[0]+3936430074&4294967295,C=y+(_<<11&4294967295|_>>>21),_=E+(C^y^w)+v[3]+3572445317&4294967295,E=C+(_<<16&4294967295|_>>>16),_=w+(E^C^y)+v[6]+76029189&4294967295,w=E+(_<<23&4294967295|_>>>9),_=y+(w^E^C)+v[9]+3654602809&4294967295,y=w+(_<<4&4294967295|_>>>28),_=C+(y^w^E)+v[12]+3873151461&4294967295,C=y+(_<<11&4294967295|_>>>21),_=E+(C^y^w)+v[15]+530742520&4294967295,E=C+(_<<16&4294967295|_>>>16),_=w+(E^C^y)+v[2]+3299628645&4294967295,w=E+(_<<23&4294967295|_>>>9),_=y+(E^(w|~C))+v[0]+4096336452&4294967295,y=w+(_<<6&4294967295|_>>>26),_=C+(w^(y|~E))+v[7]+1126891415&4294967295,C=y+(_<<10&4294967295|_>>>22),_=E+(y^(C|~w))+v[14]+2878612391&4294967295,E=C+(_<<15&4294967295|_>>>17),_=w+(C^(E|~y))+v[5]+4237533241&4294967295,w=E+(_<<21&4294967295|_>>>11),_=y+(E^(w|~C))+v[12]+1700485571&4294967295,y=w+(_<<6&4294967295|_>>>26),_=C+(w^(y|~E))+v[3]+2399980690&4294967295,C=y+(_<<10&4294967295|_>>>22),_=E+(y^(C|~w))+v[10]+4293915773&4294967295,E=C+(_<<15&4294967295|_>>>17),_=w+(C^(E|~y))+v[1]+2240044497&4294967295,w=E+(_<<21&4294967295|_>>>11),_=y+(E^(w|~C))+v[8]+1873313359&4294967295,y=w+(_<<6&4294967295|_>>>26),_=C+(w^(y|~E))+v[15]+4264355552&4294967295,C=y+(_<<10&4294967295|_>>>22),_=E+(y^(C|~w))+v[6]+2734768916&4294967295,E=C+(_<<15&4294967295|_>>>17),_=w+(C^(E|~y))+v[13]+1309151649&4294967295,w=E+(_<<21&4294967295|_>>>11),_=y+(E^(w|~C))+v[4]+4149444226&4294967295,y=w+(_<<6&4294967295|_>>>26),_=C+(w^(y|~E))+v[11]+3174756917&4294967295,C=y+(_<<10&4294967295|_>>>22),_=E+(y^(C|~w))+v[2]+718787259&4294967295,E=C+(_<<15&4294967295|_>>>17),_=w+(C^(E|~y))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+C&4294967295}r.prototype.v=function(T,y){y===void 0&&(y=T.length);const w=y-this.blockSize,v=this.C;let E=this.h,C=0;for(;C<y;){if(E==0)for(;C<=w;)s(this,T,C),C+=this.blockSize;if(typeof T=="string"){for(;C<y;)if(v[E++]=T.charCodeAt(C++),E==this.blockSize){s(this,v),E=0;break}}else for(;C<y;)if(v[E++]=T[C++],E==this.blockSize){s(this,v),E=0;break}}this.h=E,this.o+=y},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;y=this.o*8;for(var w=T.length-8;w<T.length;++w)T[w]=y&255,y/=256;for(this.v(T),T=Array(16),y=0,w=0;w<4;++w)for(let v=0;v<32;v+=8)T[y++]=this.g[w]>>>v&255;return T};function i(T,y){var w=l;return Object.prototype.hasOwnProperty.call(w,T)?w[T]:w[T]=y(T)}function o(T,y){this.h=y;const w=[];let v=!0;for(let E=T.length-1;E>=0;E--){const C=T[E]|0;v&&C==y||(w[E]=C,v=!1)}this.g=w}var l={};function c(T){return-128<=T&&T<128?i(T,function(y){return new o([y|0],y<0?-1:0)}):new o([T|0],T<0?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return N(h(-T));const y=[];let w=1;for(let v=0;T>=w;v++)y[v]=T/w|0,w*=4294967296;return new o(y,0)}function d(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return N(d(T.substring(1),y));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(y,8));let v=p;for(let C=0;C<T.length;C+=8){var E=Math.min(8,T.length-C);const _=parseInt(T.substring(C,C+E),y);E<8?(E=h(Math.pow(y,E)),v=v.j(E).add(h(_))):(v=v.j(w),v=v.add(h(_)))}return v}var p=c(0),g=c(1),S=c(16777216);n=o.prototype,n.m=function(){if(R(this))return-N(this).m();let T=0,y=1;for(let w=0;w<this.g.length;w++){const v=this.i(w);T+=(v>=0?v:4294967296+v)*y,y*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(R(this))return"-"+N(this).toString(T);const y=h(Math.pow(T,6));var w=this;let v="";for(;;){const E=be(w,y).g;w=F(w,E.j(y));let C=((w.g.length>0?w.g[0]:w.h)>>>0).toString(T);if(w=E,P(w))return C+v;for(;C.length<6;)C="0"+C;v=C+v}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(let y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function R(T){return T.h==-1}n.l=function(T){return T=F(this,T),R(T)?-1:P(T)?0:1};function N(T){const y=T.g.length,w=[];for(let v=0;v<y;v++)w[v]=~T.g[v];return new o(w,~T.h).add(g)}n.abs=function(){return R(this)?N(this):this},n.add=function(T){const y=Math.max(this.g.length,T.g.length),w=[];let v=0;for(let E=0;E<=y;E++){let C=v+(this.i(E)&65535)+(T.i(E)&65535),_=(C>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);v=_>>>16,C&=65535,_&=65535,w[E]=_<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function F(T,y){return T.add(N(y))}n.j=function(T){if(P(this)||P(T))return p;if(R(this))return R(T)?N(this).j(N(T)):N(N(this).j(T));if(R(T))return N(this.j(N(T)));if(this.l(S)<0&&T.l(S)<0)return h(this.m()*T.m());const y=this.g.length+T.g.length,w=[];for(var v=0;v<2*y;v++)w[v]=0;for(v=0;v<this.g.length;v++)for(let E=0;E<T.g.length;E++){const C=this.i(v)>>>16,_=this.i(v)&65535,Ae=T.i(E)>>>16,xt=T.i(E)&65535;w[2*v+2*E]+=_*xt,O(w,2*v+2*E),w[2*v+2*E+1]+=C*xt,O(w,2*v+2*E+1),w[2*v+2*E+1]+=_*Ae,O(w,2*v+2*E+1),w[2*v+2*E+2]+=C*Ae,O(w,2*v+2*E+2)}for(T=0;T<y;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=y;T<2*y;T++)w[T]=0;return new o(w,0)};function O(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function q(T,y){this.g=T,this.h=y}function be(T,y){if(P(y))throw Error("division by zero");if(P(T))return new q(p,p);if(R(T))return y=be(N(T),y),new q(N(y.g),N(y.h));if(R(y))return y=be(T,N(y)),new q(N(y.g),y.h);if(T.g.length>30){if(R(T)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var w=g,v=y;v.l(T)<=0;)w=De(w),v=De(v);var E=ge(w,1),C=ge(v,1);for(v=ge(v,2),w=ge(w,2);!P(v);){var _=C.add(v);_.l(T)<=0&&(E=E.add(w),C=_),v=ge(v,1),w=ge(w,1)}return y=F(T,E.j(y)),new q(E,y)}for(E=p;T.l(y)>=0;){for(w=Math.max(1,Math.floor(T.m()/y.m())),v=Math.ceil(Math.log(w)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),C=h(w),_=C.j(y);R(_)||_.l(T)>0;)w-=v,C=h(w),_=C.j(y);P(C)&&(C=g),E=E.add(C),T=F(T,_)}return new q(E,T)}n.B=function(T){return be(this,T).h},n.and=function(T){const y=Math.max(this.g.length,T.g.length),w=[];for(let v=0;v<y;v++)w[v]=this.i(v)&T.i(v);return new o(w,this.h&T.h)},n.or=function(T){const y=Math.max(this.g.length,T.g.length),w=[];for(let v=0;v<y;v++)w[v]=this.i(v)|T.i(v);return new o(w,this.h|T.h)},n.xor=function(T){const y=Math.max(this.g.length,T.g.length),w=[];for(let v=0;v<y;v++)w[v]=this.i(v)^T.i(v);return new o(w,this.h^T.h)};function De(T){const y=T.g.length+1,w=[];for(let v=0;v<y;v++)w[v]=T.i(v)<<1|T.i(v-1)>>>31;return new o(w,T.h)}function ge(T,y){const w=y>>5;y%=32;const v=T.g.length-w,E=[];for(let C=0;C<v;C++)E[C]=y>0?T.i(C+w)>>>y|T.i(C+w+1)<<32-y:T.i(C+w);return new o(E,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Iu=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,vt=o}).apply(typeof Ml<"u"?Ml:typeof self<"u"?self:typeof window<"u"?window:{});var Qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cu,nr,Su,ns,Ki,bu,Au,Pu;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qr=="object"&&Qr];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var I=a[m];if(!(I in f))break e;f=f[I]}a=a[a.length-1],m=f[a],u=u(m),u!=m&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var f=[],m;for(m in u)Object.prototype.hasOwnProperty.call(u,m)&&f.push([m,u[m]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function c(a,u,f){return a.call.apply(a.bind,arguments)}function h(a,u,f){return h=c,h.apply(null,arguments)}function d(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,u){function f(){}f.prototype=u.prototype,a.Z=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(m,I,b){for(var V=Array(arguments.length-2),H=2;H<arguments.length;H++)V[H-2]=arguments[H];return u.prototype[I].apply(m,V)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function S(a){const u=a.length;if(u>0){const f=Array(u);for(let m=0;m<u;m++)f[m]=a[m];return f}return[]}function P(a,u){for(let m=1;m<arguments.length;m++){const I=arguments[m];var f=typeof I;if(f=f!="object"?f:I?Array.isArray(I)?"array":f:"null",f=="array"||f=="object"&&typeof I.length=="number"){f=a.length||0;const b=I.length||0;a.length=f+b;for(let V=0;V<b;V++)a[f+V]=I[V]}else a.push(I)}}class R{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function N(a){o.setTimeout(()=>{throw a},0)}function F(){var a=T;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class O{constructor(){this.h=this.g=null}add(u,f){const m=q.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var q=new R(()=>new be,a=>a.reset());class be{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let De,ge=!1,T=new O,y=()=>{const a=Promise.resolve(void 0);De=()=>{a.then(w)}};function w(){for(var a;a=F();){try{a.h.call(a.g)}catch(f){N(f)}var u=q;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}ge=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,u),o.removeEventListener("test",f,u)}catch{}return a}();function _(a){return/^[\s\xa0]*$/.test(a)}function Ae(a,u){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(Ae,E),Ae.prototype.init=function(a,u){const f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ae.Z.h.call(this)},Ae.prototype.h=function(){Ae.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xt="closure_listenable_"+(Math.random()*1e6|0),Wd=0;function zd(a,u,f,m,I){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=I,this.key=++Wd,this.da=this.fa=!1}function xr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Mr(a,u,f){for(const m in a)u.call(f,a[m],m,a)}function Gd(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function Ia(a){const u={};for(const f in a)u[f]=a[f];return u}const Ca="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Sa(a,u){let f,m;for(let I=1;I<arguments.length;I++){m=arguments[I];for(f in m)a[f]=m[f];for(let b=0;b<Ca.length;b++)f=Ca[b],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function Or(a){this.src=a,this.g={},this.h=0}Or.prototype.add=function(a,u,f,m,I){const b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);const V=ri(a,u,m,I);return V>-1?(u=a[V],f||(u.fa=!1)):(u=new zd(u,this.src,b,!!m,I),u.fa=f,a.push(u)),u};function ni(a,u){const f=u.type;if(f in a.g){var m=a.g[f],I=Array.prototype.indexOf.call(m,u,void 0),b;(b=I>=0)&&Array.prototype.splice.call(m,I,1),b&&(xr(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ri(a,u,f,m){for(let I=0;I<a.length;++I){const b=a[I];if(!b.da&&b.listener==u&&b.capture==!!f&&b.ha==m)return I}return-1}var si="closure_lm_"+(Math.random()*1e6|0),ii={};function ba(a,u,f,m,I){if(Array.isArray(u)){for(let b=0;b<u.length;b++)ba(a,u[b],f,m,I);return null}return f=Ra(f),a&&a[xt]?a.J(u,f,l(m)?!!m.capture:!1,I):Kd(a,u,f,!1,m,I)}function Kd(a,u,f,m,I,b){if(!u)throw Error("Invalid event type");const V=l(I)?!!I.capture:!!I;let H=ai(a);if(H||(a[si]=H=new Or(a)),f=H.add(u,f,m,V,b),f.proxy)return f;if(m=Xd(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)C||(I=V),I===void 0&&(I=!1),a.addEventListener(u.toString(),m,I);else if(a.attachEvent)a.attachEvent(Pa(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Xd(){function a(f){return u.call(a.src,a.listener,f)}const u=Qd;return a}function Aa(a,u,f,m,I){if(Array.isArray(u))for(var b=0;b<u.length;b++)Aa(a,u[b],f,m,I);else m=l(m)?!!m.capture:!!m,f=Ra(f),a&&a[xt]?(a=a.i,b=String(u).toString(),b in a.g&&(u=a.g[b],f=ri(u,f,m,I),f>-1&&(xr(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete a.g[b],a.h--)))):a&&(a=ai(a))&&(u=a.g[u.toString()],a=-1,u&&(a=ri(u,f,m,I)),(f=a>-1?u[a]:null)&&oi(f))}function oi(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[xt])ni(u.i,a);else{var f=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(f,m,a.capture):u.detachEvent?u.detachEvent(Pa(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=ai(u))?(ni(f,a),f.h==0&&(f.src=null,u[si]=null)):xr(a)}}}function Pa(a){return a in ii?ii[a]:ii[a]="on"+a}function Qd(a,u){if(a.da)a=!0;else{u=new Ae(u,this);const f=a.listener,m=a.ha||a.src;a.fa&&oi(a),a=f.call(m,u)}return a}function ai(a){return a=a[si],a instanceof Or?a:null}var li="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ra(a){return typeof a=="function"?a:(a[li]||(a[li]=function(u){return a.handleEvent(u)}),a[li])}function ye(){v.call(this),this.i=new Or(this),this.M=this,this.G=null}p(ye,v),ye.prototype[xt]=!0,ye.prototype.removeEventListener=function(a,u,f,m){Aa(this,a,u,f,m)};function ve(a,u){var f,m=a.G;if(m)for(f=[];m;m=m.G)f.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new E(u,a);else if(u instanceof E)u.target=u.target||a;else{var I=u;u=new E(m,a),Sa(u,I)}I=!0;let b,V;if(f)for(V=f.length-1;V>=0;V--)b=u.g=f[V],I=Fr(b,m,!0,u)&&I;if(b=u.g=a,I=Fr(b,m,!0,u)&&I,I=Fr(b,m,!1,u)&&I,f)for(V=0;V<f.length;V++)b=u.g=f[V],I=Fr(b,m,!1,u)&&I}ye.prototype.N=function(){if(ye.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const f=a.g[u];for(let m=0;m<f.length;m++)xr(f[m]);delete a.g[u],a.h--}}this.G=null},ye.prototype.J=function(a,u,f,m){return this.i.add(String(a),u,!1,f,m)},ye.prototype.K=function(a,u,f,m){return this.i.add(String(a),u,!0,f,m)};function Fr(a,u,f,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let I=!0;for(let b=0;b<u.length;++b){const V=u[b];if(V&&!V.da&&V.capture==f){const H=V.listener,le=V.ha||V.src;V.fa&&ni(a.i,V),I=H.call(le,m)!==!1&&I}}return I&&!m.defaultPrevented}function Jd(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function Da(a){a.g=Jd(()=>{a.g=null,a.i&&(a.i=!1,Da(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Yd extends v{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Da(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function On(a){v.call(this),this.h=a,this.g={}}p(On,v);var ka=[];function Na(a){Mr(a.g,function(u,f){this.g.hasOwnProperty(f)&&oi(u)},a),a.g={}}On.prototype.N=function(){On.Z.N.call(this),Na(this)},On.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ci=o.JSON.stringify,Zd=o.JSON.parse,ef=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Va(){}function La(){}var Fn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ui(){E.call(this,"d")}p(ui,E);function hi(){E.call(this,"c")}p(hi,E);var Mt={},xa=null;function Br(){return xa=xa||new ye}Mt.Ia="serverreachability";function Ma(a){E.call(this,Mt.Ia,a)}p(Ma,E);function Bn(a){const u=Br();ve(u,new Ma(u))}Mt.STAT_EVENT="statevent";function Oa(a,u){E.call(this,Mt.STAT_EVENT,a),this.stat=u}p(Oa,E);function Ie(a){const u=Br();ve(u,new Oa(u,a))}Mt.Ja="timingevent";function Fa(a,u){E.call(this,Mt.Ja,a),this.size=u}p(Fa,E);function Un(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function $n(){this.g=!0}$n.prototype.ua=function(){this.g=!1};function tf(a,u,f,m,I,b){a.info(function(){if(a.g)if(b){var V="",H=b.split("&");for(let Y=0;Y<H.length;Y++){var le=H[Y].split("=");if(le.length>1){const he=le[0];le=le[1];const je=he.split("_");V=je.length>=2&&je[1]=="type"?V+(he+"="+le+"&"):V+(he+"=redacted&")}}}else V=null;else V=b;return"XMLHTTP REQ ("+m+") [attempt "+I+"]: "+u+`
`+f+`
`+V})}function nf(a,u,f,m,I,b,V){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+I+"]: "+u+`
`+f+`
`+b+" "+V})}function Zt(a,u,f,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+sf(a,f)+(m?" "+m:"")})}function rf(a,u){a.info(function(){return"TIMEOUT: "+u})}$n.prototype.info=function(){};function sf(a,u){if(!a.g)return u;if(!u)return null;try{const b=JSON.parse(u);if(b){for(a=0;a<b.length;a++)if(Array.isArray(b[a])){var f=b[a];if(!(f.length<2)){var m=f[1];if(Array.isArray(m)&&!(m.length<1)){var I=m[0];if(I!="noop"&&I!="stop"&&I!="close")for(let V=1;V<m.length;V++)m[V]=""}}}}return ci(b)}catch{return u}}var Ur={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ba={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ua;function di(){}p(di,Va),di.prototype.g=function(){return new XMLHttpRequest},Ua=new di;function jn(a){return encodeURIComponent(String(a))}function of(a){var u=1;a=a.split(":");const f=[];for(;u>0&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function at(a,u,f,m){this.j=a,this.i=u,this.l=f,this.S=m||1,this.V=new On(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new $a}function $a(){this.i=null,this.g="",this.h=!1}var ja={},fi={};function pi(a,u,f){a.M=1,a.A=jr($e(u)),a.u=f,a.R=!0,Ha(a,null)}function Ha(a,u){a.F=Date.now(),$r(a),a.B=$e(a.A);var f=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),nl(f.i,"t",m),a.C=0,f=a.j.L,a.h=new $a,a.g=El(a.j,f?u:null,!a.u),a.P>0&&(a.O=new Yd(h(a.Y,a,a.g),a.P)),u=a.V,f=a.g,m=a.ba;var I="readystatechange";Array.isArray(I)||(I&&(ka[0]=I.toString()),I=ka);for(let b=0;b<I.length;b++){const V=ba(f,I[b],m||u.handleEvent,!1,u.h||u);if(!V)break;u.g[V.key]=V}u=a.J?Ia(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Bn(),tf(a.i,a.v,a.B,a.l,a.S,a.u)}at.prototype.ba=function(a){a=a.target;const u=this.O;u&&ut(a)==3?u.j():this.Y(a)},at.prototype.Y=function(a){try{if(a==this.g)e:{const H=ut(this.g),le=this.g.ya(),Y=this.g.ca();if(!(H<3)&&(H!=3||this.g&&(this.h.h||this.g.la()||cl(this.g)))){this.K||H!=4||le==7||(le==8||Y<=0?Bn(3):Bn(2)),mi(this);var u=this.g.ca();this.X=u;var f=af(this);if(this.o=u==200,nf(this.i,this.v,this.B,this.l,this.S,H,u),this.o){if(this.U&&!this.L){t:{if(this.g){var m,I=this.g;if((m=I.g?I.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(m)){var b=m;break t}}b=null}if(a=b)Zt(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,gi(this,a);else{this.o=!1,this.m=3,Ie(12),Ot(this),Hn(this);break e}}if(this.R){a=!0;let he;for(;!this.K&&this.C<f.length;)if(he=lf(this,f),he==fi){H==4&&(this.m=4,Ie(14),a=!1),Zt(this.i,this.l,null,"[Incomplete Response]");break}else if(he==ja){this.m=4,Ie(15),Zt(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Zt(this.i,this.l,he,null),gi(this,he);if(qa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||f.length!=0||this.h.h||(this.m=1,Ie(16),a=!1),this.o=this.o&&a,!a)Zt(this.i,this.l,f,"[Invalid Chunked Response]"),Ot(this),Hn(this);else if(f.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Ci(V),V.P=!0,Ie(11))}}else Zt(this.i,this.l,f,null),gi(this,f);H==4&&Ot(this),this.o&&!this.K&&(H==4?gl(this.j,this):(this.o=!1,$r(this)))}else vf(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,Ie(12)):(this.m=0,Ie(13)),Ot(this),Hn(this)}}}catch{}finally{}};function af(a){if(!qa(a))return a.g.la();const u=cl(a.g);if(u==="")return"";let f="";const m=u.length,I=ut(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ot(a),Hn(a),"";a.h.i=new o.TextDecoder}for(let b=0;b<m;b++)a.h.h=!0,f+=a.h.i.decode(u[b],{stream:!(I&&b==m-1)});return u.length=0,a.h.g+=f,a.C=0,a.h.g}function qa(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function lf(a,u){var f=a.C,m=u.indexOf(`
`,f);return m==-1?fi:(f=Number(u.substring(f,m)),isNaN(f)?ja:(m+=1,m+f>u.length?fi:(u=u.slice(m,m+f),a.C=m+f,u)))}at.prototype.cancel=function(){this.K=!0,Ot(this)};function $r(a){a.T=Date.now()+a.H,Wa(a,a.H)}function Wa(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Un(h(a.aa,a),u)}function mi(a){a.D&&(o.clearTimeout(a.D),a.D=null)}at.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(rf(this.i,this.B),this.M!=2&&(Bn(),Ie(17)),Ot(this),this.m=2,Hn(this)):Wa(this,this.T-a)};function Hn(a){a.j.I==0||a.K||gl(a.j,a)}function Ot(a){mi(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Na(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function gi(a,u){try{var f=a.j;if(f.I!=0&&(f.g==a||yi(f.h,a))){if(!a.L&&yi(f.h,a)&&f.I==3){try{var m=f.Ba.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var I=m;if(I[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Gr(f),Wr(f);else break e;Ii(f),Ie(18)}}else f.xa=I[1],0<f.xa-f.K&&I[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Un(h(f.Va,f),6e3));Ka(f.h)<=1&&f.ta&&(f.ta=void 0)}else Bt(f,11)}else if((a.L||f.g==a)&&Gr(f),!_(u))for(I=f.Ba.g.parse(u),u=0;u<I.length;u++){let Y=I[u];const he=Y[0];if(!(he<=f.K))if(f.K=he,Y=Y[1],f.I==2)if(Y[0]=="c"){f.M=Y[1],f.ba=Y[2];const je=Y[3];je!=null&&(f.ka=je,f.j.info("VER="+f.ka));const Ut=Y[4];Ut!=null&&(f.za=Ut,f.j.info("SVER="+f.za));const ht=Y[5];ht!=null&&typeof ht=="number"&&ht>0&&(m=1.5*ht,f.O=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const dt=a.g;if(dt){const Xr=dt.g?dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xr){var b=m.h;b.g||Xr.indexOf("spdy")==-1&&Xr.indexOf("quic")==-1&&Xr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(_i(b,b.h),b.h=null))}if(m.G){const Si=dt.g?dt.g.getResponseHeader("X-HTTP-Session-Id"):null;Si&&(m.wa=Si,ee(m.J,m.G,Si))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),m=f;var V=a;if(m.na=wl(m,m.L?m.ba:null,m.W),V.L){Xa(m.h,V);var H=V,le=m.O;le&&(H.H=le),H.D&&(mi(H),$r(H)),m.g=V}else pl(m);f.i.length>0&&zr(f)}else Y[0]!="stop"&&Y[0]!="close"||Bt(f,7);else f.I==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Bt(f,7):vi(f):Y[0]!="noop"&&f.l&&f.l.qa(Y),f.A=0)}}Bn(4)}catch{}}var cf=class{constructor(a,u){this.g=a,this.map=u}};function za(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ga(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ka(a){return a.h?1:a.g?a.g.size:0}function yi(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function _i(a,u){a.g?a.g.add(u):a.h=u}function Xa(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}za.prototype.cancel=function(){if(this.i=Qa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Qa(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.G);return u}return S(a.i)}var Ja=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uf(a,u){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const m=a[f].indexOf("=");let I,b=null;m>=0?(I=a[f].substring(0,m),b=a[f].substring(m+1)):I=a[f],u(I,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function lt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof lt?(this.l=a.l,qn(this,a.j),this.o=a.o,this.g=a.g,Wn(this,a.u),this.h=a.h,wi(this,rl(a.i)),this.m=a.m):a&&(u=String(a).match(Ja))?(this.l=!1,qn(this,u[1]||"",!0),this.o=zn(u[2]||""),this.g=zn(u[3]||"",!0),Wn(this,u[4]),this.h=zn(u[5]||"",!0),wi(this,u[6]||"",!0),this.m=zn(u[7]||"")):(this.l=!1,this.i=new Kn(null,this.l))}lt.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Gn(u,Ya,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Gn(u,Ya,!0),"@"),a.push(jn(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Gn(f,f.charAt(0)=="/"?ff:df,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Gn(f,mf)),a.join("")},lt.prototype.resolve=function(a){const u=$e(this);let f=!!a.j;f?qn(u,a.j):f=!!a.o,f?u.o=a.o:f=!!a.g,f?u.g=a.g:f=a.u!=null;var m=a.h;if(f)Wn(u,a.u);else if(f=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var I=u.h.lastIndexOf("/");I!=-1&&(m=u.h.slice(0,I+1)+m)}if(I=m,I==".."||I==".")m="";else if(I.indexOf("./")!=-1||I.indexOf("/.")!=-1){m=I.lastIndexOf("/",0)==0,I=I.split("/");const b=[];for(let V=0;V<I.length;){const H=I[V++];H=="."?m&&V==I.length&&b.push(""):H==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),m&&V==I.length&&b.push("")):(b.push(H),m=!0)}m=b.join("/")}else m=I}return f?u.h=m:f=a.i.toString()!=="",f?wi(u,rl(a.i)):f=!!a.m,f&&(u.m=a.m),u};function $e(a){return new lt(a)}function qn(a,u,f){a.j=f?zn(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Wn(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function wi(a,u,f){u instanceof Kn?(a.i=u,gf(a.i,a.l)):(f||(u=Gn(u,pf)),a.i=new Kn(u,a.l))}function ee(a,u,f){a.i.set(u,f)}function jr(a){return ee(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function zn(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Gn(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,hf),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function hf(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ya=/[#\/\?@]/g,df=/[#\?:]/g,ff=/[#\?]/g,pf=/[#\?@]/g,mf=/#/g;function Kn(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Ft(a){a.g||(a.g=new Map,a.h=0,a.i&&uf(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Kn.prototype,n.add=function(a,u){Ft(this),this.i=null,a=en(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Za(a,u){Ft(a),u=en(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function el(a,u){return Ft(a),u=en(a,u),a.g.has(u)}n.forEach=function(a,u){Ft(this),this.g.forEach(function(f,m){f.forEach(function(I){a.call(u,I,m,this)},this)},this)};function tl(a,u){Ft(a);let f=[];if(typeof u=="string")el(a,u)&&(f=f.concat(a.g.get(en(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)f=f.concat(a[u]);return f}n.set=function(a,u){return Ft(this),this.i=null,a=en(this,a),el(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=tl(this,a),a.length>0?String(a[0]):u):u};function nl(a,u,f){Za(a,u),f.length>0&&(a.i=null,a.g.set(en(a,u),S(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let m=0;m<u.length;m++){var f=u[m];const I=jn(f);f=tl(this,f);for(let b=0;b<f.length;b++){let V=I;f[b]!==""&&(V+="="+jn(f[b])),a.push(V)}}return this.i=a.join("&")};function rl(a){const u=new Kn;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function en(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function gf(a,u){u&&!a.j&&(Ft(a),a.i=null,a.g.forEach(function(f,m){const I=m.toLowerCase();m!=I&&(Za(this,m),nl(this,I,f))},a)),a.j=u}function yf(a,u){const f=new $n;if(o.Image){const m=new Image;m.onload=d(ct,f,"TestLoadImage: loaded",!0,u,m),m.onerror=d(ct,f,"TestLoadImage: error",!1,u,m),m.onabort=d(ct,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=d(ct,f,"TestLoadImage: timeout",!1,u,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function _f(a,u){const f=new $n,m=new AbortController,I=setTimeout(()=>{m.abort(),ct(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(b=>{clearTimeout(I),b.ok?ct(f,"TestPingServer: ok",!0,u):ct(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),ct(f,"TestPingServer: error",!1,u)})}function ct(a,u,f,m,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),m(f)}catch{}}function wf(){this.g=new ef}function Ei(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Ei,Va),Ei.prototype.g=function(){return new Hr(this.i,this.h)};function Hr(a,u){ye.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Hr,ye),n=Hr.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Qn(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Xn(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Qn(this)),this.g&&(this.readyState=3,Qn(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;sl(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function sl(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Xn(this):Qn(this),this.readyState==3&&sl(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Xn(this))},n.Na=function(a){this.g&&(this.response=a,Xn(this))},n.ga=function(){this.g&&Xn(this)};function Xn(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Qn(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Qn(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Hr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function il(a){let u="";return Mr(a,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function Ti(a,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=il(f),typeof a=="string"?f!=null&&jn(f):ee(a,u,f))}function ne(a){ye.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(ne,ye);var Ef=/^https?$/i,Tf=["POST","PUT"];n=ne.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ua.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(b){ol(this,b);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var I in m)f.set(I,m[I]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const b of m.keys())f.set(b,m.get(b));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(b=>b.toLowerCase()=="content-type"),I=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Tf,u,void 0)>=0)||m||I||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,V]of f)this.g.setRequestHeader(b,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(b){ol(this,b)}};function ol(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,al(a),qr(a)}function al(a){a.A||(a.A=!0,ve(a,"complete"),ve(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ve(this,"complete"),ve(this,"abort"),qr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qr(this,!0)),ne.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ll(this):this.Xa())},n.Xa=function(){ll(this)};function ll(a){if(a.h&&typeof i<"u"){if(a.v&&ut(a)==4)setTimeout(a.Ca.bind(a),0);else if(ve(a,"readystatechange"),ut(a)==4){a.h=!1;try{const b=a.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=b===0){let V=String(a.D).match(Ja)[1]||null;!V&&o.self&&o.self.location&&(V=o.self.location.protocol.slice(0,-1)),m=!Ef.test(V?V.toLowerCase():"")}f=m}if(f)ve(a,"complete"),ve(a,"success");else{a.o=6;try{var I=ut(a)>2?a.g.statusText:""}catch{I=""}a.l=I+" ["+a.ca()+"]",al(a)}}finally{qr(a)}}}}function qr(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,u||ve(a,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ut(a){return a.g?a.g.readyState:0}n.ca=function(){try{return ut(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Zd(u)}};function cl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function vf(a){const u={};a=(a.g&&ut(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(_(a[m]))continue;var f=of(a[m]);const I=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const b=u[I]||[];u[I]=b,b.push(f)}Gd(u,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function ul(a){this.za=0,this.i=[],this.j=new $n,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Jn("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Jn("baseRetryDelayMs",5e3,a),this.Za=Jn("retryDelaySeedMs",1e4,a),this.Ta=Jn("forwardChannelMaxRetries",2,a),this.va=Jn("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new za(a&&a.concurrentRequestLimit),this.Ba=new wf,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ul.prototype,n.ka=8,n.I=1,n.connect=function(a,u,f,m){Ie(0),this.W=a,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.J=wl(this,null,this.W),zr(this)};function vi(a){if(hl(a),a.I==3){var u=a.V++,f=$e(a.J);if(ee(f,"SID",a.M),ee(f,"RID",u),ee(f,"TYPE","terminate"),Yn(a,f),u=new at(a,a.j,u),u.M=2,u.A=jr($e(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=u.A,f=!0),f||(u.g=El(u.j,null),u.g.ea(u.A)),u.F=Date.now(),$r(u)}_l(a)}function Wr(a){a.g&&(Ci(a),a.g.cancel(),a.g=null)}function hl(a){Wr(a),a.v&&(o.clearTimeout(a.v),a.v=null),Gr(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function zr(a){if(!Ga(a.h)&&!a.m){a.m=!0;var u=a.Ea;De||y(),ge||(De(),ge=!0),T.add(u,a),a.D=0}}function If(a,u){return Ka(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Un(h(a.Ea,a,u),yl(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const I=new at(this,this.j,a);let b=this.o;if(this.U&&(b?(b=Ia(b),Sa(b,this.U)):b=this.U),this.u!==null||this.R||(I.J=b,b=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=fl(this,I,u),f=$e(this.J),ee(f,"RID",a),ee(f,"CVER",22),this.G&&ee(f,"X-HTTP-Session-Id",this.G),Yn(this,f),b&&(this.R?u="headers="+jn(il(b))+"&"+u:this.u&&Ti(f,this.u,b)),_i(this.h,I),this.Ra&&ee(f,"TYPE","init"),this.S?(ee(f,"$req",u),ee(f,"SID","null"),I.U=!0,pi(I,f,null)):pi(I,f,u),this.I=2}}else this.I==3&&(a?dl(this,a):this.i.length==0||Ga(this.h)||dl(this))};function dl(a,u){var f;u?f=u.l:f=a.V++;const m=$e(a.J);ee(m,"SID",a.M),ee(m,"RID",f),ee(m,"AID",a.K),Yn(a,m),a.u&&a.o&&Ti(m,a.u,a.o),f=new at(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),u&&(a.i=u.G.concat(a.i)),u=fl(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),_i(a.h,f),pi(f,m,u)}function Yn(a,u){a.H&&Mr(a.H,function(f,m){ee(u,m,f)}),a.l&&Mr({},function(f,m){ee(u,m,f)})}function fl(a,u,f){f=Math.min(a.i.length,f);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var I=a.i;let H=-1;for(;;){const le=["count="+f];H==-1?f>0?(H=I[0].g,le.push("ofs="+H)):H=0:le.push("ofs="+H);let Y=!0;for(let he=0;he<f;he++){var b=I[he].g;const je=I[he].map;if(b-=H,b<0)H=Math.max(0,I[he].g-100),Y=!1;else try{b="req"+b+"_"||"";try{var V=je instanceof Map?je:Object.entries(je);for(const[Ut,ht]of V){let dt=ht;l(ht)&&(dt=ci(ht)),le.push(b+Ut+"="+encodeURIComponent(dt))}}catch(Ut){throw le.push(b+"type="+encodeURIComponent("_badmap")),Ut}}catch{m&&m(je)}}if(Y){V=le.join("&");break e}}V=void 0}return a=a.i.splice(0,f),u.G=a,V}function pl(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;De||y(),ge||(De(),ge=!0),T.add(u,a),a.A=0}}function Ii(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Un(h(a.Da,a),yl(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,ml(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Un(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ie(10),Wr(this),ml(this))};function Ci(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function ml(a){a.g=new at(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=$e(a.na);ee(u,"RID","rpc"),ee(u,"SID",a.M),ee(u,"AID",a.K),ee(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&ee(u,"TO",a.ia),ee(u,"TYPE","xmlhttp"),Yn(a,u),a.u&&a.o&&Ti(u,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=jr($e(u)),f.u=null,f.R=!0,Ha(f,a)}n.Va=function(){this.C!=null&&(this.C=null,Wr(this),Ii(this),Ie(19))};function Gr(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function gl(a,u){var f=null;if(a.g==u){Gr(a),Ci(a),a.g=null;var m=2}else if(yi(a.h,u))f=u.G,Xa(a.h,u),m=1;else return;if(a.I!=0){if(u.o)if(m==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var I=a.D;m=Br(),ve(m,new Fa(m,f)),zr(a)}else pl(a);else if(I=u.m,I==3||I==0&&u.X>0||!(m==1&&If(a,u)||m==2&&Ii(a)))switch(f&&f.length>0&&(u=a.h,u.i=u.i.concat(f)),I){case 1:Bt(a,5);break;case 4:Bt(a,10);break;case 3:Bt(a,6);break;default:Bt(a,2)}}}function yl(a,u){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*u}function Bt(a,u){if(a.j.info("Error code "+u),u==2){var f=h(a.bb,a),m=a.Ua;const I=!m;m=new lt(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||qn(m,"https"),jr(m),I?yf(m.toString(),f):_f(m.toString(),f)}else Ie(2);a.I=0,a.l&&a.l.pa(u),_l(a),hl(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ie(2)):(this.j.info("Failed to ping google.com"),Ie(1))};function _l(a){if(a.I=0,a.ja=[],a.l){const u=Qa(a.h);(u.length!=0||a.i.length!=0)&&(P(a.ja,u),P(a.ja,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.oa()}}function wl(a,u,f){var m=f instanceof lt?$e(f):new lt(f);if(m.g!="")u&&(m.g=u+"."+m.g),Wn(m,m.u);else{var I=o.location;m=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;const b=new lt(null);m&&qn(b,m),u&&(b.g=u),I&&Wn(b,I),f&&(b.h=f),m=b}return f=a.G,u=a.wa,f&&u&&ee(m,f,u),ee(m,"VER",a.ka),Yn(a,m),m}function El(a,u,f){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new ne(new Ei({ab:f})):new ne(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tl(){}n=Tl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Kr(){}Kr.prototype.g=function(a,u){return new ke(a,u)};function ke(a,u){ye.call(this),this.g=new ul(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!_(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!_(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new tn(this)}p(ke,ye),ke.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ke.prototype.close=function(){vi(this.g)},ke.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=ci(a),a=f);u.i.push(new cf(u.Ya++,a)),u.I==3&&zr(u)},ke.prototype.N=function(){this.g.l=null,delete this.j,vi(this.g),delete this.g,ke.Z.N.call(this)};function vl(a){ui.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(vl,ui);function Il(){hi.call(this),this.status=1}p(Il,hi);function tn(a){this.g=a}p(tn,Tl),tn.prototype.ra=function(){ve(this.g,"a")},tn.prototype.qa=function(a){ve(this.g,new vl(a))},tn.prototype.pa=function(a){ve(this.g,new Il)},tn.prototype.oa=function(){ve(this.g,"b")},Kr.prototype.createWebChannel=Kr.prototype.g,ke.prototype.send=ke.prototype.o,ke.prototype.open=ke.prototype.m,ke.prototype.close=ke.prototype.close,Pu=function(){return new Kr},Au=function(){return Br()},bu=Mt,Ki={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ur.NO_ERROR=0,Ur.TIMEOUT=8,Ur.HTTP_ERROR=6,ns=Ur,Ba.COMPLETE="complete",Su=Ba,La.EventType=Fn,Fn.OPEN="a",Fn.CLOSE="b",Fn.ERROR="c",Fn.MESSAGE="d",ye.prototype.listen=ye.prototype.J,nr=La,ne.prototype.listenOnce=ne.prototype.K,ne.prototype.getLastError=ne.prototype.Ha,ne.prototype.getLastErrorCode=ne.prototype.ya,ne.prototype.getStatus=ne.prototype.ca,ne.prototype.getResponseJson=ne.prototype.La,ne.prototype.getResponseText=ne.prototype.la,ne.prototype.send=ne.prototype.ea,ne.prototype.setWithCredentials=ne.prototype.Fa,Cu=ne}).apply(typeof Qr<"u"?Qr:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Rn="12.8.0";function um(n){Rn=n}/**
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
 */const zt=new vo("@firebase/firestore");function rn(){return zt.logLevel}function x(n,...e){if(zt.logLevel<=W.DEBUG){const t=e.map(So);zt.debug(`Firestore (${Rn}): ${n}`,...t)}}function nt(n,...e){if(zt.logLevel<=W.ERROR){const t=e.map(So);zt.error(`Firestore (${Rn}): ${n}`,...t)}}function gn(n,...e){if(zt.logLevel<=W.WARN){const t=e.map(So);zt.warn(`Firestore (${Rn}): ${n}`,...t)}}function So(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function U(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Ru(n,r,t)}function Ru(n,e,t){let r=`FIRESTORE (${Rn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw nt(r),new Error(r)}function J(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Ru(e,s,r)}function j(n,e){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends ot{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Du{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(we.UNAUTHENTICATED))}shutdown(){}}class dm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class fm{constructor(e){this.t=e,this.currentUser=we.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Ze;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ze,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ze)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string",31837,{l:r}),new Du(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string",2055,{h:e}),new we(e)}}class pm{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=we.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class mm{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new pm(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(we.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ol{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gm{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Le(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){J(this.o===void 0,3512);const r=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ol(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ol(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ym(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class bo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ym(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function z(n,e){return n<e?-1:n>e?1:0}function Xi(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return ki(s)===ki(i)?z(s,i):ki(s)?1:-1}return z(n.length,e.length)}const _m=55296,wm=57343;function ki(n){const e=n.charCodeAt(0);return e>=_m&&e<=wm}function yn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Fl="__name__";class He{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&U(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return He.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof He?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=He.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return z(e.length,t.length)}static compareSegments(e,t){const r=He.isNumericId(e),s=He.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?He.extractNumericId(e).compare(He.extractNumericId(t)):Xi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vt.fromString(e.substring(4,e.length-2))}}class Z extends He{construct(e,t,r){return new Z(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Z(t)}static emptyPath(){return new Z([])}}const Em=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends He{construct(e,t,r){return new pe(e,t,r)}static isValidIdentifier(e){return Em.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fl}static keyField(){return new pe([Fl])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new L(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new L(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(t)}static emptyPath(){return new pe([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(Z.fromString(e))}static fromName(e){return new M(Z.fromString(e).popFirst(5))}static empty(){return new M(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new Z(e.slice()))}}/**
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
 */function ku(n,e,t){if(!t)throw new L(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Tm(n,e,t,r){if(e===!0&&r===!0)throw new L(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Bl(n){if(!M.isDocumentKey(n))throw new L(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ul(n){if(M.isDocumentKey(n))throw new L(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Nu(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function xs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U(12329,{type:typeof n})}function rt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=xs(n);throw new L(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function oe(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ir(n,e){if(!Nu(n))throw new L(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new L(D.INVALID_ARGUMENT,t);return!0}/**
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
 */const $l=-62135596800,jl=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(e){return X.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*jl);return new X(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<$l)throw new L(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jl}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ir(e,X._jsonSchema))return new X(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-$l;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:oe("string",X._jsonSchemaVersion),seconds:oe("number"),nanoseconds:oe("number")};/**
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
 */class ${static fromTimestamp(e){return new $(e)}static min(){return new $(new X(0,0))}static max(){return new $(new X(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const fr=-1;function vm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=$.fromTimestamp(r===1e9?new X(t+1,0):new X(t,r));return new Ct(s,M.empty(),e)}function Im(n){return new Ct(n.readTime,n.key,fr)}class Ct{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ct($.min(),M.empty(),fr)}static max(){return new Ct($.max(),M.empty(),fr)}}function Cm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:z(n.largestBatchId,e.largestBatchId))}/**
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
 */const Sm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Dn(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Sm)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(s=>s?k.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new k((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,t){return new k((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Am(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function kn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ms{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ms.ce=-1;/**
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
 */const Ao=-1;function Os(n){return n==null}function ms(n){return n===0&&1/n==-1/0}function Pm(n){return typeof n=="number"&&Number.isInteger(n)&&!ms(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Vu="";function Rm(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Hl(e)),e=Dm(n.get(t),e);return Hl(e)}function Dm(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Vu:t+="";break;default:t+=i}}return t}function Hl(n){return n+Vu+""}/**
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
 */function ql(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Dt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Lu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class te{constructor(e,t){this.comparator=e,this.root=t||fe.EMPTY}insert(e,t){return new te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,fe.BLACK,null,null))}remove(e){return new te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jr(this.root,e,this.comparator,!0)}}class Jr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class fe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??fe.RED,this.left=s??fe.EMPTY,this.right=i??fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new fe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return fe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw U(43730,{key:this.key,value:this.value});if(this.right.isRed())throw U(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw U(27949);return e+(this.isRed()?0:1)}}fe.EMPTY=null,fe.RED=!0,fe.BLACK=!1;fe.EMPTY=new class{constructor(){this.size=0}get key(){throw U(57766)}get value(){throw U(16141)}get color(){throw U(16727)}get left(){throw U(29726)}get right(){throw U(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new fe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ce{constructor(e){this.comparator=e,this.data=new te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Wl(this.data.getIterator())}getIteratorFrom(e){return new Wl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class Wl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new xu("Invalid base64 string: "+i):i}}(e);return new me(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const km=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function St(n){if(J(!!n,39018),typeof n=="string"){let e=0;const t=km.exec(n);if(J(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:re(n.seconds),nanos:re(n.nanos)}}function re(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function bt(n){return typeof n=="string"?me.fromBase64String(n):me.fromUint8Array(n)}/**
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
 */const Mu="server_timestamp",Ou="__type__",Fu="__previous_value__",Bu="__local_write_time__";function Po(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ou])==null?void 0:r.stringValue)===Mu}function Fs(n){const e=n.mapValue.fields[Fu];return Po(e)?Fs(e):e}function pr(n){const e=St(n.mapValue.fields[Bu].timestampValue);return new X(e.seconds,e.nanos)}/**
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
 */class Nm{constructor(e,t,r,s,i,o,l,c,h,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=d,this.apiKey=p}}const gs="(default)";class mr{constructor(e,t){this.projectId=e,this.database=t||gs}static empty(){return new mr("","")}get isDefaultDatabase(){return this.database===gs}isEqual(e){return e instanceof mr&&e.projectId===this.projectId&&e.database===this.database}}function Vm(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new L(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mr(n.options.projectId,e)}/**
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
 */const Uu="__type__",Lm="__max__",Yr={mapValue:{}},$u="__vector__",ys="value";function At(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Po(n)?4:Mm(n)?9007199254740991:xm(n)?10:11:U(28295,{value:n})}function Xe(n,e){if(n===e)return!0;const t=At(n);if(t!==At(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return pr(n).isEqual(pr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=St(s.timestampValue),l=St(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return bt(s.bytesValue).isEqual(bt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return re(s.geoPointValue.latitude)===re(i.geoPointValue.latitude)&&re(s.geoPointValue.longitude)===re(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return re(s.integerValue)===re(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=re(s.doubleValue),l=re(i.doubleValue);return o===l?ms(o)===ms(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return yn(n.arrayValue.values||[],e.arrayValue.values||[],Xe);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ql(o)!==ql(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Xe(o[c],l[c])))return!1;return!0}(n,e);default:return U(52216,{left:n})}}function gr(n,e){return(n.values||[]).find(t=>Xe(t,e))!==void 0}function _n(n,e){if(n===e)return 0;const t=At(n),r=At(e);if(t!==r)return z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,e.booleanValue);case 2:return function(i,o){const l=re(i.integerValue||i.doubleValue),c=re(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return zl(n.timestampValue,e.timestampValue);case 4:return zl(pr(n),pr(e));case 5:return Xi(n.stringValue,e.stringValue);case 6:return function(i,o){const l=bt(i),c=bt(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=z(l[h],c[h]);if(d!==0)return d}return z(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const l=z(re(i.latitude),re(o.latitude));return l!==0?l:z(re(i.longitude),re(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Gl(n.arrayValue,e.arrayValue);case 10:return function(i,o){var g,S,P,R;const l=i.fields||{},c=o.fields||{},h=(g=l[ys])==null?void 0:g.arrayValue,d=(S=c[ys])==null?void 0:S.arrayValue,p=z(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((R=d==null?void 0:d.values)==null?void 0:R.length)||0);return p!==0?p:Gl(h,d)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Yr.mapValue&&o===Yr.mapValue)return 0;if(i===Yr.mapValue)return 1;if(o===Yr.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=Xi(c[p],d[p]);if(g!==0)return g;const S=_n(l[c[p]],h[d[p]]);if(S!==0)return S}return z(c.length,d.length)}(n.mapValue,e.mapValue);default:throw U(23264,{he:t})}}function zl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return z(n,e);const t=St(n),r=St(e),s=z(t.seconds,r.seconds);return s!==0?s:z(t.nanos,r.nanos)}function Gl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=_n(t[s],r[s]);if(i)return i}return z(t.length,r.length)}function wn(n){return Qi(n)}function Qi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=St(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return bt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Qi(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Qi(t.fields[o])}`;return s+"}"}(n.mapValue):U(61005,{value:n})}function rs(n){switch(At(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fs(n);return e?16+rs(e):16;case 5:return 2*n.stringValue.length;case 6:return bt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+rs(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Dt(r.fields,(i,o)=>{s+=i.length+rs(o)}),s}(n.mapValue);default:throw U(13486,{value:n})}}function Kl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ji(n){return!!n&&"integerValue"in n}function Ro(n){return!!n&&"arrayValue"in n}function Xl(n){return!!n&&"nullValue"in n}function Ql(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ss(n){return!!n&&"mapValue"in n}function xm(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Uu])==null?void 0:r.stringValue)===$u}function ar(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Dt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ar(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ar(n.arrayValue.values[t]);return e}return{...n}}function Mm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Lm}/**
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
 */class Re{constructor(e){this.value=e}static empty(){return new Re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ss(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ar(t)}setAll(e){let t=pe.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}o?r[l.lastSegment()]=ar(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ss(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ss(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Dt(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Re(ar(this.value))}}function ju(n){const e=[];return Dt(n.fields,(t,r)=>{const s=new pe([t]);if(ss(r)){const i=ju(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ne(e)}/**
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
 */class Ee{constructor(e,t,r,s,i,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ee(e,0,$.min(),$.min(),$.min(),Re.empty(),0)}static newFoundDocument(e,t,r,s){return new Ee(e,1,t,$.min(),r,s,0)}static newNoDocument(e,t){return new Ee(e,2,t,$.min(),$.min(),Re.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,$.min(),$.min(),Re.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Re.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _s{constructor(e,t){this.position=e,this.inclusive=t}}function Jl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),t.key):r=_n(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Xe(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ws{constructor(e,t="asc"){this.field=e,this.dir=t}}function Om(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Hu{}class ie extends Hu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Bm(e,t,r):t==="array-contains"?new jm(e,r):t==="in"?new Hm(e,r):t==="not-in"?new qm(e,r):t==="array-contains-any"?new Wm(e,r):new ie(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Um(e,r):new $m(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(_n(t,this.value)):t!==null&&At(this.value)===At(t)&&this.matchesComparison(_n(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fe extends Hu{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Fe(e,t)}matches(e){return qu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function qu(n){return n.op==="and"}function Wu(n){return Fm(n)&&qu(n)}function Fm(n){for(const e of n.filters)if(e instanceof Fe)return!1;return!0}function Yi(n){if(n instanceof ie)return n.field.canonicalString()+n.op.toString()+wn(n.value);if(Wu(n))return n.filters.map(e=>Yi(e)).join(",");{const e=n.filters.map(t=>Yi(t)).join(",");return`${n.op}(${e})`}}function zu(n,e){return n instanceof ie?function(r,s){return s instanceof ie&&r.op===s.op&&r.field.isEqual(s.field)&&Xe(r.value,s.value)}(n,e):n instanceof Fe?function(r,s){return s instanceof Fe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&zu(o,s.filters[l]),!0):!1}(n,e):void U(19439)}function Gu(n){return n instanceof ie?function(t){return`${t.field.canonicalString()} ${t.op} ${wn(t.value)}`}(n):n instanceof Fe?function(t){return t.op.toString()+" {"+t.getFilters().map(Gu).join(" ,")+"}"}(n):"Filter"}class Bm extends ie{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class Um extends ie{constructor(e,t){super(e,"in",t),this.keys=Ku("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class $m extends ie{constructor(e,t){super(e,"not-in",t),this.keys=Ku("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ku(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class jm extends ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ro(t)&&gr(t.arrayValue,this.value)}}class Hm extends ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&gr(this.value.arrayValue,t)}}class qm extends ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(gr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!gr(this.value.arrayValue,t)}}class Wm extends ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ro(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>gr(this.value.arrayValue,r))}}/**
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
 */class zm{constructor(e,t=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Zl(n,e=null,t=[],r=[],s=null,i=null,o=null){return new zm(n,e,t,r,s,i,o)}function Do(n){const e=j(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Yi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Os(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>wn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>wn(r)).join(",")),e.Te=t}return e.Te}function ko(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Om(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!zu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Yl(n.startAt,e.startAt)&&Yl(n.endAt,e.endAt)}function Zi(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Cr{constructor(e,t=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Gm(n,e,t,r,s,i,o,l){return new Cr(n,e,t,r,s,i,o,l)}function No(n){return new Cr(n)}function ec(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Km(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Xu(n){return n.collectionGroup!==null}function lr(n){const e=j(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ce(pe.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ws(i,r))}),t.has(pe.keyField().canonicalString())||e.Ie.push(new ws(pe.keyField(),r))}return e.Ie}function qe(n){const e=j(n);return e.Ee||(e.Ee=Xm(e,lr(n))),e.Ee}function Xm(n,e){if(n.limitType==="F")return Zl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ws(s.field,i)});const t=n.endAt?new _s(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new _s(n.startAt.position,n.startAt.inclusive):null;return Zl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function eo(n,e){const t=n.filters.concat([e]);return new Cr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function to(n,e,t){return new Cr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bs(n,e){return ko(qe(n),qe(e))&&n.limitType===e.limitType}function Qu(n){return`${Do(qe(n))}|lt:${n.limitType}`}function sn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Gu(s)).join(", ")}]`),Os(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>wn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>wn(s)).join(",")),`Target(${r})`}(qe(n))}; limitType=${n.limitType})`}function Us(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):M.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of lr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=Jl(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,lr(r),s)||r.endAt&&!function(o,l,c){const h=Jl(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,lr(r),s))}(n,e)}function Qm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ju(n){return(e,t)=>{let r=!1;for(const s of lr(n)){const i=Jm(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Jm(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?_n(c,h):U(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U(19790,{direction:n.dir})}}/**
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
 */class Qt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Dt(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Lu(this.inner)}size(){return this.innerSize}}/**
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
 */const Ym=new te(M.comparator);function st(){return Ym}const Yu=new te(M.comparator);function rr(...n){let e=Yu;for(const t of n)e=e.insert(t.key,t);return e}function Zu(n){let e=Yu;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function jt(){return cr()}function eh(){return cr()}function cr(){return new Qt(n=>n.toString(),(n,e)=>n.isEqual(e))}const Zm=new te(M.comparator),eg=new ce(M.comparator);function G(...n){let e=eg;for(const t of n)e=e.add(t);return e}const tg=new ce(z);function ng(){return tg}/**
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
 */function Vo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ms(e)?"-0":e}}function th(n){return{integerValue:""+n}}function rg(n,e){return Pm(e)?th(e):Vo(n,e)}/**
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
 */class $s{constructor(){this._=void 0}}function sg(n,e,t){return n instanceof Es?function(s,i){const o={fields:{[Ou]:{stringValue:Mu},[Bu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Po(i)&&(i=Fs(i)),i&&(o.fields[Fu]=i),{mapValue:o}}(t,e):n instanceof yr?rh(n,e):n instanceof _r?sh(n,e):function(s,i){const o=nh(s,i),l=tc(o)+tc(s.Ae);return Ji(o)&&Ji(s.Ae)?th(l):Vo(s.serializer,l)}(n,e)}function ig(n,e,t){return n instanceof yr?rh(n,e):n instanceof _r?sh(n,e):t}function nh(n,e){return n instanceof Ts?function(r){return Ji(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Es extends $s{}class yr extends $s{constructor(e){super(),this.elements=e}}function rh(n,e){const t=ih(e);for(const r of n.elements)t.some(s=>Xe(s,r))||t.push(r);return{arrayValue:{values:t}}}class _r extends $s{constructor(e){super(),this.elements=e}}function sh(n,e){let t=ih(e);for(const r of n.elements)t=t.filter(s=>!Xe(s,r));return{arrayValue:{values:t}}}class Ts extends $s{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function tc(n){return re(n.integerValue||n.doubleValue)}function ih(n){return Ro(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function og(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof yr&&s instanceof yr||r instanceof _r&&s instanceof _r?yn(r.elements,s.elements,Xe):r instanceof Ts&&s instanceof Ts?Xe(r.Ae,s.Ae):r instanceof Es&&s instanceof Es}(n.transform,e.transform)}class ag{constructor(e,t){this.version=e,this.transformResults=t}}class Ve{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ve}static exists(e){return new Ve(void 0,e)}static updateTime(e){return new Ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function is(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class js{}function oh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Hs(n.key,Ve.none()):new Sr(n.key,n.data,Ve.none());{const t=n.data,r=Re.empty();let s=new ce(pe.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new kt(n.key,r,new Ne(s.toArray()),Ve.none())}}function lg(n,e,t){n instanceof Sr?function(s,i,o){const l=s.value.clone(),c=rc(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof kt?function(s,i,o){if(!is(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=rc(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(ah(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ur(n,e,t,r){return n instanceof Sr?function(i,o,l,c){if(!is(i.precondition,o))return l;const h=i.value.clone(),d=sc(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof kt?function(i,o,l,c){if(!is(i.precondition,o))return l;const h=sc(i.fieldTransforms,c,o),d=o.data;return d.setAll(ah(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,l){return is(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function cg(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=nh(r.transform,s||null);i!=null&&(t===null&&(t=Re.empty()),t.set(r.field,i))}return t||null}function nc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&yn(r,s,(i,o)=>og(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Sr extends js{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class kt extends js{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ah(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function rc(n,e,t){const r=new Map;J(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,ig(o,l,t[s]))}return r}function sc(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,sg(i,o,e))}return r}class Hs extends js{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ug extends js{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hg{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lg(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ur(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ur(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=eh();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const c=oh(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),G())}isEqual(e){return this.batchId===e.batchId&&yn(this.mutations,e.mutations,(t,r)=>nc(t,r))&&yn(this.baseMutations,e.baseMutations,(t,r)=>nc(t,r))}}class Lo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){J(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Zm}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Lo(e,t,r,s)}}/**
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
 */class dg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class fg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var se,K;function pg(n){switch(n){case D.OK:return U(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return U(15467,{code:n})}}function lh(n){if(n===void 0)return nt("GRPC error has no .code"),D.UNKNOWN;switch(n){case se.OK:return D.OK;case se.CANCELLED:return D.CANCELLED;case se.UNKNOWN:return D.UNKNOWN;case se.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case se.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case se.INTERNAL:return D.INTERNAL;case se.UNAVAILABLE:return D.UNAVAILABLE;case se.UNAUTHENTICATED:return D.UNAUTHENTICATED;case se.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case se.NOT_FOUND:return D.NOT_FOUND;case se.ALREADY_EXISTS:return D.ALREADY_EXISTS;case se.PERMISSION_DENIED:return D.PERMISSION_DENIED;case se.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case se.ABORTED:return D.ABORTED;case se.OUT_OF_RANGE:return D.OUT_OF_RANGE;case se.UNIMPLEMENTED:return D.UNIMPLEMENTED;case se.DATA_LOSS:return D.DATA_LOSS;default:return U(39323,{code:n})}}(K=se||(se={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function mg(){return new TextEncoder}/**
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
 */const gg=new vt([4294967295,4294967295],0);function ic(n){const e=mg().encode(n),t=new Iu;return t.update(e),new Uint8Array(t.digest())}function oc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new vt([t,r],0),new vt([s,i],0)]}class xo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new sr(`Invalid padding: ${t}`);if(r<0)throw new sr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new sr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new sr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=vt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(vt.fromNumber(r)));return s.compare(gg)===1&&(s=new vt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=ic(e),[r,s]=oc(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new xo(i,s,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const t=ic(e),[r,s]=oc(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class sr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class qs{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,br.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new qs($.min(),s,new te(z),st(),G())}}class br{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new br(r,t,G(),G(),G())}}/**
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
 */class os{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=s}}class ch{constructor(e,t){this.targetId=e,this.Ce=t}}class uh{constructor(e,t,r=me.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ac{constructor(){this.ve=0,this.Fe=lc(),this.Me=me.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=G(),t=G(),r=G();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:U(38017,{changeType:i})}}),new br(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=lc()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,J(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class yg{constructor(e){this.Ge=e,this.ze=new Map,this.je=st(),this.He=Zr(),this.Je=Zr(),this.Ze=new te(z)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:U(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Zi(i))if(r===0){const o=new M(i.path);this.et(t,o,Ee.newNoDocument(o,$.min()))}else J(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=bt(r).toUint8Array()}catch(c){if(c instanceof xu)return gn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new xo(o,s,i)}catch(c){return gn(c instanceof sr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Zi(l.target)){const c=new M(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Ee.newNoDocument(c,e))}i.Be&&(t.set(o,i.ke()),i.Ke())}});let r=G();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.ot(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new qs(e,t,this.Ze,this.je,r);return this.je=st(),this.He=Zr(),this.Je=Zr(),this.Ze=new te(z),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new ac,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new ce(z),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new ce(z),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ac),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Zr(){return new te(M.comparator)}function lc(){return new te(M.comparator)}const _g={asc:"ASCENDING",desc:"DESCENDING"},wg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Eg={and:"AND",or:"OR"};class Tg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function no(n,e){return n.useProto3Json||Os(e)?e:{value:e}}function vs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function vg(n,e){return vs(n,e.toTimestamp())}function We(n){return J(!!n,49232),$.fromTimestamp(function(t){const r=St(t);return new X(r.seconds,r.nanos)}(n))}function Mo(n,e){return ro(n,e).canonicalString()}function ro(n,e){const t=function(s){return new Z(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function dh(n){const e=Z.fromString(n);return J(yh(e),10190,{key:e.toString()}),e}function so(n,e){return Mo(n.databaseId,e.path)}function Ni(n,e){const t=dh(e);if(t.get(1)!==n.databaseId.projectId)throw new L(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(ph(t))}function fh(n,e){return Mo(n.databaseId,e)}function Ig(n){const e=dh(n);return e.length===4?Z.emptyPath():ph(e)}function io(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ph(n){return J(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function cc(n,e,t){return{name:so(n,e),fields:t.value.mapValue.fields}}function Cg(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:U(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(J(d===void 0||typeof d=="string",58123),me.fromBase64String(d||"")):(J(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),me.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?D.UNKNOWN:lh(h.code);return new L(d,h.message||"")}(o);t=new uh(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ni(n,r.document.name),i=We(r.document.updateTime),o=r.document.createTime?We(r.document.createTime):$.min(),l=new Re({mapValue:{fields:r.document.fields}}),c=Ee.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];t=new os(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ni(n,r.document),i=r.readTime?We(r.readTime):$.min(),o=Ee.newNoDocument(s,i),l=r.removedTargetIds||[];t=new os([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ni(n,r.document),i=r.removedTargetIds||[];t=new os([],i,s,null)}else{if(!("filter"in e))return U(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new fg(s,i),l=r.targetId;t=new ch(l,o)}}return t}function Sg(n,e){let t;if(e instanceof Sr)t={update:cc(n,e.key,e.value)};else if(e instanceof Hs)t={delete:so(n,e.key)};else if(e instanceof kt)t={update:cc(n,e.key,e.data),updateMask:Lg(e.fieldMask)};else{if(!(e instanceof ug))return U(16599,{dt:e.type});t={verify:so(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Es)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof yr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof _r)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ts)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw U(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:vg(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U(27497)}(n,e.precondition)),t}function bg(n,e){return n&&n.length>0?(J(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?We(s.updateTime):We(i);return o.isEqual($.min())&&(o=We(i)),new ag(o,s.transformResults||[])}(t,e))):[]}function Ag(n,e){return{documents:[fh(n,e.path)]}}function Pg(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=fh(n,s);const i=function(h){if(h.length!==0)return gh(Fe.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:on(g.field),direction:kg(g.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=no(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function Rg(n){let e=Ig(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){J(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(p){const g=mh(p);return g instanceof Fe&&Wu(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(g=>function(P){return new ws(an(P.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(t.orderBy));let l=null;t.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Os(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(p){const g=!!p.before,S=p.values||[];return new _s(S,g)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const g=!p.before,S=p.values||[];return new _s(S,g)}(t.endAt)),Gm(e,s,o,i,l,"F",c,h)}function Dg(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function mh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=an(t.unaryFilter.field);return ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=an(t.unaryFilter.field);return ie.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=an(t.unaryFilter.field);return ie.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=an(t.unaryFilter.field);return ie.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return U(61313);default:return U(60726)}}(n):n.fieldFilter!==void 0?function(t){return ie.create(an(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return U(58110);default:return U(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Fe.create(t.compositeFilter.filters.map(r=>mh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U(1026)}}(t.compositeFilter.op))}(n):U(30097,{filter:n})}function kg(n){return _g[n]}function Ng(n){return wg[n]}function Vg(n){return Eg[n]}function on(n){return{fieldPath:n.canonicalString()}}function an(n){return pe.fromServerFormat(n.fieldPath)}function gh(n){return n instanceof ie?function(t){if(t.op==="=="){if(Ql(t.value))return{unaryFilter:{field:on(t.field),op:"IS_NAN"}};if(Xl(t.value))return{unaryFilter:{field:on(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ql(t.value))return{unaryFilter:{field:on(t.field),op:"IS_NOT_NAN"}};if(Xl(t.value))return{unaryFilter:{field:on(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:on(t.field),op:Ng(t.op),value:t.value}}}(n):n instanceof Fe?function(t){const r=t.getFilters().map(s=>gh(s));return r.length===1?r[0]:{compositeFilter:{op:Vg(t.op),filters:r}}}(n):U(54877,{filter:n})}function Lg(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function yh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function _h(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class xg{constructor(e){this.yt=e}}function Mg(n){const e=Rg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?to(e,e.limit,"L"):e}/**
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
 */class Og{constructor(){this.Sn=new Fg}addToCollectionParentIndex(e,t){return this.Sn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Ct.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Ct.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class Fg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ce(Z.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ce(Z.comparator)).toArray()}}/**
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
 */const uc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wh=41943040;class Pe{static withCacheSize(e){return new Pe(e,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Pe.DEFAULT_COLLECTION_PERCENTILE=10,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pe.DEFAULT=new Pe(wh,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pe.DISABLED=new Pe(-1,0,0);/**
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
 */const hc="LruGarbageCollector",Bg=1048576;function dc([n,e],[t,r]){const s=z(n,t);return s===0?z(e,r):s}class Ug{constructor(e){this.Pr=e,this.buffer=new ce(dc),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();dc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class $g{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){x(hc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){kn(t)?x(hc,"Ignoring IndexedDB error during garbage collection: ",t):await Dn(t)}await this.Ar(3e5)})}}class jg{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return k.resolve(Ms.ce);const r=new Ug(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(uc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),uc):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,o,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),rn()<=W.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Hg(n,e){return new jg(n,e)}/**
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
 */class qg{constructor(){this.changes=new Qt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Wg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class zg{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ur(r.mutation,s,Ne.empty(),X.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,t,r=G()){const s=jt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=rr();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=jt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,G()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,s){let i=st();const o=cr(),l=function(){return cr()}();return t.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof kt)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),ur(d.mutation,h,d.mutation.getFieldMask(),X.now())):o.set(h.key,Ne.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),t.forEach((h,d)=>l.set(h,new Wg(d,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,t){const r=cr();let s=new te((o,l)=>o-l),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let d=r.get(c)||Ne.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||G()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=eh();d.forEach(g=>{if(!i.has(g)){const S=oh(t.get(g),r.get(g));S!==null&&p.set(g,S),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return Km(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Xu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(jt());let l=fr,c=i;return o.next(h=>k.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?k.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,G())).next(d=>({batchId:l,changes:Zu(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(r=>{let s=rr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=rr();return this.indexManager.getCollectionParents(e,i).next(l=>k.forEach(l,c=>{const h=function(p,g){return new Cr(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,Ee.newInvalidDocument(d)))});let l=rr();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&ur(d.mutation,h,Ne.empty(),X.now()),Us(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class Gg{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return k.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:We(s.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:Mg(s.bundledQuery),readTime:We(s.readTime)}}(t)),k.resolve()}}/**
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
 */class Kg{constructor(){this.overlays=new te(M.comparator),this.Lr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=jt();return k.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.bt(e,t,i)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=jt(),i=t.length+1,o=new M(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new te((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=jt(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=jt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return k.resolve(l)}bt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dg(t,r));let i=this.Lr.get(t);i===void 0&&(i=G(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
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
 */class Xg{constructor(){this.sessionToken=me.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
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
 */class Oo{constructor(){this.kr=new ce(de.Kr),this.qr=new ce(de.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new de(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new de(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new M(new Z([])),r=new de(t,e),s=new de(t,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new M(new Z([])),r=new de(t,e),s=new de(t,e+1);let i=G();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new de(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class de{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return M.comparator(e.key,t.key)||z(e.Hr,t.Hr)}static Ur(e,t){return z(e.Hr,t.Hr)||M.comparator(e.key,t.key)}}/**
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
 */class Qg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new ce(de.Kr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hg(i,t,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new de(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,t){return k.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?Ao:this.Yn-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new de(t,0),s=new de(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(z);return t.forEach(s=>{const i=new de(s,0),o=new de(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),k.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;M.isDocumentKey(i)||(i=i.child(""));const o=new de(new M(i),0);let l=new ce(z);return this.Jr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Hr)),!0)},o),k.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){J(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return k.forEach(t.mutations,s=>{const i=new de(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,t){const r=new de(t,0),s=this.Jr.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Jg{constructor(e){this.ti=e,this.docs=function(){return new te(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let r=st();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ee.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=st();const o=t.path,l=new M(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Cm(Im(d),r)<=0||(s.has(d.key)||Us(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){U(9500)}ni(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Yg(this)}getSize(e){return k.resolve(this.size)}}class Yg extends qg{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class Zg{constructor(e){this.persistence=e,this.ri=new Qt(t=>Do(t),ko),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.ii=0,this.si=new Oo,this.targetCount=0,this.oi=En._r()}forEachTarget(e,t){return this.ri.forEach((r,s)=>t(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),k.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new En(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.lr(t),k.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.si.containsKey(t))}}/**
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
 */class Eh{constructor(e,t){this._i={},this.overlays={},this.ai=new Ms(0),this.ui=!1,this.ui=!0,this.ci=new Xg,this.referenceDelegate=e(this),this.li=new Zg(this),this.indexManager=new Og,this.remoteDocumentCache=function(s){return new Jg(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new xg(t),this.Pi=new Gg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Kg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new Qg(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);const s=new ey(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return k.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class ey extends bm{constructor(e){super(),this.currentSequenceNumber=e}}class Fo{constructor(e){this.persistence=e,this.Ri=new Oo,this.Ai=null}static Vi(e){return new Fo(e)}get di(){if(this.Ai)return this.Ai;throw U(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.di,r=>{const s=M.fromPath(r);return this.mi(e,s).next(i=>{i||t.removeEntry(s,$.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return k.or([()=>k.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Is{constructor(e,t){this.persistence=e,this.fi=new Qt(r=>Rm(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Hg(this,t)}static Vi(e,t){return new Is(e,t)}Ti(){}Ii(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return k.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?k.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,t).next(l=>{l||(r++,i.removeEntry(o,$.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),k.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=rs(e.data.value)),t}wr(e,t,r){return k.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Bo{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=G(),s=G();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Bo(e,t.fromCache,r,s)}}/**
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
 */class ty{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ny{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return zf()?8:Am(Te())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ty;return this.ys(e,t,o).next(l=>{if(i.result=l,this.As)return this.ws(e,t,o,l.size)})}).next(()=>i.result)}ws(e,t,r,s){return r.documentReadCount<this.Vs?(rn()<=W.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",sn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(rn()<=W.DEBUG&&x("QueryEngine","Query:",sn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(rn()<=W.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",sn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qe(t))):k.resolve())}gs(e,t){if(ec(t))return k.resolve(null);let r=qe(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=to(t,null,"F"),r=qe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=G(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.bs(t,l);return this.Ss(t,h,o,c.readTime)?this.gs(e,to(t,null,"F")):this.Ds(e,h,t,c)}))})))}ps(e,t,r,s){return ec(t)||s.isEqual($.min())?k.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(t,i);return this.Ss(t,o,r,s)?k.resolve(null):(rn()<=W.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),sn(t)),this.Ds(e,o,t,vm(s,fr)).next(l=>l))})}bs(e,t){let r=new ce(Ju(e));return t.forEach((s,i)=>{Us(e,i)&&(r=r.add(i))}),r}Ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return rn()<=W.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",sn(t)),this.fs.getDocumentsMatchingQuery(e,t,Ct.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Uo="LocalStore",ry=3e8;class sy{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new te(z),this.Fs=new Qt(i=>Do(i),ko),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zg(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function iy(n,e,t,r){return new sy(n,e,t,r)}async function Th(n,e){const t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=G();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function oy(n,e){const t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,g=p.keys();let S=k.resolve();return g.forEach(P=>{S=S.next(()=>d.getEntry(c,P)).next(R=>{const N=h.docVersions.get(P);J(N!==null,48541),R.version.compareTo(N)<0&&(p.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),d.addEntry(R)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=G();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function vh(n){const e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function ay(n,e){const t=j(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const l=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;l.push(t.li.removeMatchingKeys(i,d.removedDocuments,p).next(()=>t.li.addMatchingKeys(i,d.addedDocuments,p)));let S=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(me.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):d.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(d.resumeToken,r)),s=s.insert(p,S),function(R,N,F){return R.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=ry?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(g,S,d)&&l.push(t.li.updateTargetData(i,S))});let c=st(),h=G();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(ly(i,o,e.documentUpdates).next(d=>{c=d.Bs,h=d.Ls})),!r.isEqual($.min())){const d=t.li.getLastRemoteSnapshotVersion(i).next(p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return k.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.vs=s,i))}function ly(n,e,t){let r=G(),s=G();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=st();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual($.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):x(Uo,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Bs:o,Ls:s}})}function cy(n,e){const t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ao),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function uy(n,e){const t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.li.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):t.li.allocateTargetId(r).next(o=>(s=new _t(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}async function oo(n,e,t){const r=j(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!kn(o))throw o;x(Uo,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function fc(n,e,t){const r=j(n);let s=$.min(),i=G();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=j(c),g=p.Fs.get(d);return g!==void 0?k.resolve(p.vs.get(g)):p.li.getTargetData(h,d)}(r,o,qe(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,t?s:$.min(),t?i:G())).next(l=>(hy(r,Qm(e),l),{documents:l,ks:i})))}function hy(n,e,t){let r=n.Ms.get(e)||$.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ms.set(e,r)}class pc{constructor(){this.activeTargetIds=ng()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dy{constructor(){this.vo=new pc,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new pc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class fy{Mo(e){}shutdown(){}}/**
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
 */const mc="ConnectivityMonitor";class gc{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){x(mc,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){x(mc,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let es=null;function ao(){return es===null?es=function(){return 268435456+Math.round(2147483648*Math.random())}():es++,"0x"+es.toString(16)}/**
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
 */const Vi="RestConnection",py={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class my{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===gs?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const o=ao(),l=this.Qo(e,t.toUriEncodedString());x(Vi,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,s,i);const{host:h}=new URL(l),d=An(h);return this.zo(e,l,c,r,d).then(p=>(x(Vi,`Received RPC '${e}' ${o}: `,p),p),p=>{throw gn(Vi,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,t,r,s,i,o){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Rn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,t){const r=py[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class gy{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const _e="WebChannelConnection",Zn=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class cn extends my{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!cn.c_){const e=Au();Zn(e,bu.STAT_EVENT,t=>{t.stat===Ki.PROXY?x(_e,"STAT_EVENT: detected buffering proxy"):t.stat===Ki.NOPROXY&&x(_e,"STAT_EVENT: detected no buffering proxy")}),cn.c_=!0}}zo(e,t,r,s,i){const o=ao();return new Promise((l,c)=>{const h=new Cu;h.setWithCredentials(!0),h.listenOnce(Su.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ns.NO_ERROR:const p=h.getResponseJson();x(_e,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case ns.TIMEOUT:x(_e,`RPC '${e}' ${o} timed out`),c(new L(D.DEADLINE_EXCEEDED,"Request time out"));break;case ns.HTTP_ERROR:const g=h.getStatus();if(x(_e,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const P=S==null?void 0:S.error;if(P&&P.status&&P.message){const R=function(F){const O=F.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(O)>=0?O:D.UNKNOWN}(P.status);c(new L(R,P.message))}else c(new L(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new L(D.UNAVAILABLE,"Connection failed."));break;default:U(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{x(_e,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);x(_e,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",d,r,15)})}T_(e,t,r){const s=ao(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=i.join("");x(_e,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);this.I_(d);let p=!1,g=!1;const S=new gy({Ho:P=>{g?x(_e,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(p||(x(_e,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),x(_e,`RPC '${e}' stream ${s} sending:`,P),d.send(P))},Jo:()=>d.close()});return Zn(d,nr.EventType.OPEN,()=>{g||(x(_e,`RPC '${e}' stream ${s} transport opened.`),S.i_())}),Zn(d,nr.EventType.CLOSE,()=>{g||(g=!0,x(_e,`RPC '${e}' stream ${s} transport closed`),S.o_(),this.E_(d))}),Zn(d,nr.EventType.ERROR,P=>{g||(g=!0,gn(_e,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),S.o_(new L(D.UNAVAILABLE,"The operation could not be completed")))}),Zn(d,nr.EventType.MESSAGE,P=>{var R;if(!g){const N=P.data[0];J(!!N,16349);const F=N,O=(F==null?void 0:F.error)||((R=F[0])==null?void 0:R.error);if(O){x(_e,`RPC '${e}' stream ${s} received error:`,O);const q=O.status;let be=function(T){const y=se[T];if(y!==void 0)return lh(y)}(q),De=O.message;be===void 0&&(be=D.INTERNAL,De="Unknown error status: "+q+" with message "+O.message),g=!0,S.o_(new L(be,De)),d.close()}else x(_e,`RPC '${e}' stream ${s} received:`,N),S.__(N)}}),cn.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Pu()}}/**
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
 */function yy(n){return new cn(n)}function Li(){return typeof document<"u"?document:null}/**
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
 */function Ws(n){return new Tg(n,!0)}/**
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
 */cn.c_=!1;class Ih{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const yc="PersistentStream";class Ch{constructor(e,t,r,s,i,o,l,c){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ih(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(nt(t.toString()),nt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new L(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return x(yc,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(x(yc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _y extends Ch{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Cg(this.serializer,e),r=function(i){if(!("targetChange"in i))return $.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?$.min():o.readTime?We(o.readTime):$.min()}(e);return this.listener.J_(t,r)}Z_(e){const t={};t.database=io(this.serializer),t.addTarget=function(i,o){let l;const c=o.target;if(l=Zi(c)?{documents:Ag(i,c)}:{query:Pg(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=hh(i,o.resumeToken);const h=no(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo($.min())>0){l.readTime=vs(i,o.snapshotVersion.toTimestamp());const h=no(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Dg(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=io(this.serializer),t.removeTarget=e,this.K_(t)}}class wy extends Ch{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return J(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){J(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=bg(e.writeResults,e.commitTime),r=We(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=io(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Sg(this.serializer,r))};this.K_(t)}}/**
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
 */class Ey{}class Ty extends Ey{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new L(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,ro(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(D.UNKNOWN,i.toString())})}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,ro(t,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(D.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function vy(n,e,t,r){return new Ty(n,e,t,r)}class Iy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(nt(t),this.aa=!1):x("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Gt="RemoteStore";class Cy{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Jt(this)&&(x(Gt,"Restarting streams for network reachability change."),await async function(c){const h=j(c);h.Ea.add(4),await Ar(h),h.Va.set("Unknown"),h.Ea.delete(4),await zs(h)}(this))})}),this.Va=new Iy(r,s)}}async function zs(n){if(Jt(n))for(const e of n.Ra)await e(!0)}async function Ar(n){for(const e of n.Ra)await e(!1)}function Sh(n,e){const t=j(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),qo(t)?Ho(t):Nn(t).O_()&&jo(t,e))}function $o(n,e){const t=j(n),r=Nn(t);t.Ia.delete(e),r.O_()&&bh(t,e),t.Ia.size===0&&(r.O_()?r.L_():Jt(t)&&t.Va.set("Unknown"))}function jo(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Nn(n).Z_(e)}function bh(n,e){n.da.$e(e),Nn(n).X_(e)}function Ho(n){n.da=new yg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Nn(n).start(),n.Va.ua()}function qo(n){return Jt(n)&&!Nn(n).x_()&&n.Ia.size>0}function Jt(n){return j(n).Ea.size===0}function Ah(n){n.da=void 0}async function Sy(n){n.Va.set("Online")}async function by(n){n.Ia.forEach((e,t)=>{jo(n,e)})}async function Ay(n,e){Ah(n),qo(n)?(n.Va.ha(e),Ho(n)):n.Va.set("Unknown")}async function Py(n,e,t){if(n.Va.set("Online"),e instanceof uh&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))}(n,e)}catch(r){x(Gt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cs(n,r)}else if(e instanceof os?n.da.Xe(e):e instanceof ch?n.da.st(e):n.da.tt(e),!t.isEqual($.min()))try{const r=await vh(n.localStore);t.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ia.get(h);d&&i.Ia.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i.Ia.get(c);if(!d)return;i.Ia.set(c,d.withResumeToken(me.EMPTY_BYTE_STRING,d.snapshotVersion)),bh(i,c);const p=new _t(d.target,c,h,d.sequenceNumber);jo(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){x(Gt,"Failed to raise snapshot:",r),await Cs(n,r)}}async function Cs(n,e,t){if(!kn(e))throw e;n.Ea.add(1),await Ar(n),n.Va.set("Offline"),t||(t=()=>vh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x(Gt,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await zs(n)})}function Ph(n,e){return e().catch(t=>Cs(n,t,e))}async function Gs(n){const e=j(n),t=Pt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ao;for(;Ry(e);)try{const s=await cy(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,Dy(e,s)}catch(s){await Cs(e,s)}Rh(e)&&Dh(e)}function Ry(n){return Jt(n)&&n.Ta.length<10}function Dy(n,e){n.Ta.push(e);const t=Pt(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Rh(n){return Jt(n)&&!Pt(n).x_()&&n.Ta.length>0}function Dh(n){Pt(n).start()}async function ky(n){Pt(n).ra()}async function Ny(n){const e=Pt(n);for(const t of n.Ta)e.ea(t.mutations)}async function Vy(n,e,t){const r=n.Ta.shift(),s=Lo.from(r,e,t);await Ph(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Gs(n)}async function Ly(n,e){e&&Pt(n).Y_&&await async function(r,s){if(function(o){return pg(o)&&o!==D.ABORTED}(s.code)){const i=r.Ta.shift();Pt(r).B_(),await Ph(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Gs(r)}}(n,e),Rh(n)&&Dh(n)}async function _c(n,e){const t=j(n);t.asyncQueue.verifyOperationInProgress(),x(Gt,"RemoteStore received new credentials");const r=Jt(t);t.Ea.add(3),await Ar(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await zs(t)}async function xy(n,e){const t=j(n);e?(t.Ea.delete(2),await zs(t)):e||(t.Ea.add(2),await Ar(t),t.Va.set("Unknown"))}function Nn(n){return n.ma||(n.ma=function(t,r,s){const i=j(t);return i.sa(),new _y(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:Sy.bind(null,n),Yo:by.bind(null,n),t_:Ay.bind(null,n),J_:Py.bind(null,n)}),n.Ra.push(async e=>{e?(n.ma.B_(),qo(n)?Ho(n):n.Va.set("Unknown")):(await n.ma.stop(),Ah(n))})),n.ma}function Pt(n){return n.fa||(n.fa=function(t,r,s){const i=j(t);return i.sa(),new wy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:ky.bind(null,n),t_:Ly.bind(null,n),ta:Ny.bind(null,n),na:Vy.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await Gs(n)):(await n.fa.stop(),n.Ta.length>0&&(x(Gt,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Wo{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,l=new Wo(e,t,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zo(n,e){if(nt("AsyncQueue",`${e}: ${n}`),kn(n))return new L(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class un{static emptySet(e){return new un(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=rr(),this.sortedSet=new te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof un)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class wc{constructor(){this.ga=new te(M.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):U(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Tn{constructor(e,t,r,s,i,o,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new Tn(e,t,un.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class My{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class Oy{constructor(){this.queries=Ec(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=j(t),i=s.queries;s.queries=Ec(),i.forEach((o,l)=>{for(const c of l.ba)c.onError(r)})})(this,new L(D.ABORTED,"Firestore shutting down"))}}function Ec(){return new Qt(n=>Qu(n),Bs)}async function kh(n,e){const t=j(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new My,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=zo(o,`Initialization of query '${sn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.ba.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Go(t)}async function Nh(n,e){const t=j(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Fy(n,e){const t=j(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&Go(t)}function By(n,e,t){const r=j(n),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(t);r.queries.delete(e)}function Go(n){n.Ca.forEach(e=>{e.next()})}var lo,Tc;(Tc=lo||(lo={})).Ma="default",Tc.Cache="cache";class Vh{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Tn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Tn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==lo.Cache}}/**
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
 */class Lh{constructor(e){this.key=e}}class xh{constructor(e){this.key=e}}class Uy{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=G(),this.mutatedKeys=G(),this.eu=Ju(e),this.tu=new un(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new wc,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),S=Us(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),R=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let N=!1;g&&S?g.data.isEqual(S.data)?P!==R&&(r.track({type:3,doc:S}),N=!0):this.su(g,S)||(r.track({type:2,doc:S}),N=!0,(c&&this.eu(S,c)>0||h&&this.eu(S,h)<0)&&(l=!0)):!g&&S?(r.track({type:0,doc:S}),N=!0):g&&!S&&(r.track({type:1,doc:g}),N=!0,(c||h)&&(l=!0)),N&&(S?(o=o.add(S),i=R?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(S,P){const R=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U(20277,{Vt:N})}};return R(S)-R(P)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],c=this.Ya.size===0&&this.current&&!s?1:0,h=c!==this.Xa;return this.Xa=c,o.length!==0||h?{snapshot:new Tn(this.query,e.tu,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new wc,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=G(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new xh(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new Lh(r))}),t}cu(e){this.Za=e.ks,this.Ya=G();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Tn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Ko="SyncEngine";class $y{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class jy{constructor(e){this.key=e,this.hu=!1}}class Hy{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Qt(l=>Qu(l),Bs),this.Iu=new Map,this.Eu=new Set,this.Ru=new te(M.comparator),this.Au=new Map,this.Vu=new Oo,this.du={},this.mu=new Map,this.fu=En.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function qy(n,e,t=!0){const r=$h(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Mh(r,e,t,!0),s}async function Wy(n,e){const t=$h(n);await Mh(t,e,!0,!1)}async function Mh(n,e,t,r){const s=await uy(n.localStore,qe(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await zy(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Sh(n.remoteStore,s),l}async function zy(n,e,t,r,s){n.pu=(p,g,S)=>async function(R,N,F,O){let q=N.view.ru(F);q.Ss&&(q=await fc(R.localStore,N.query,!1).then(({documents:T})=>N.view.ru(T,q)));const be=O&&O.targetChanges.get(N.targetId),De=O&&O.targetMismatches.get(N.targetId)!=null,ge=N.view.applyChanges(q,R.isPrimaryClient,be,De);return Ic(R,N.targetId,ge.au),ge.snapshot}(n,p,g,S);const i=await fc(n.localStore,e,!0),o=new Uy(e,i.ks),l=o.ru(i.documents),c=br.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(l,n.isPrimaryClient,c);Ic(n,t,h.au);const d=new $y(e,t,o);return n.Tu.set(e,d),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function Gy(n,e,t){const r=j(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Bs(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await oo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&$o(r.remoteStore,s.targetId),co(r,s.targetId)}).catch(Dn)):(co(r,s.targetId),await oo(r.localStore,s.targetId,!0))}async function Ky(n,e){const t=j(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),$o(t.remoteStore,r.targetId))}async function Xy(n,e,t){const r=n_(n);try{const s=await function(o,l){const c=j(o),h=X.now(),d=l.reduce((S,P)=>S.add(P.key),G());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=st(),R=G();return c.xs.getEntries(S,d).next(N=>{P=N,P.forEach((F,O)=>{O.isValidDocument()||(R=R.add(F))})}).next(()=>c.localDocuments.getOverlayedDocuments(S,P)).next(N=>{p=N;const F=[];for(const O of l){const q=cg(O,p.get(O.key).overlayedDocument);q!=null&&F.push(new kt(O.key,q,ju(q.value.mapValue),Ve.exists(!0)))}return c.mutationQueue.addMutationBatch(S,h,F,l)}).next(N=>{g=N;const F=N.applyToLocalDocumentSet(p,R);return c.documentOverlayCache.saveOverlays(S,N.batchId,F)})}).then(()=>({batchId:g.batchId,changes:Zu(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.du[o.currentUser.toKey()];h||(h=new te(z)),h=h.insert(l,c),o.du[o.currentUser.toKey()]=h}(r,s.batchId,t),await Pr(r,s.changes),await Gs(r.remoteStore)}catch(s){const i=zo(s,"Failed to persist write");t.reject(i)}}async function Oh(n,e){const t=j(n);try{const r=await ay(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Au.get(i);o&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?J(o.hu,14607):s.removedDocuments.size>0&&(J(o.hu,42227),o.hu=!1))}),await Pr(t,r,e)}catch(r){await Dn(r)}}function vc(n,e,t){const r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=j(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const g of p.ba)g.va(l)&&(h=!0)}),h&&Go(c)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Qy(n,e,t){const r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new te(M.comparator);o=o.insert(i,Ee.newNoDocument(i,$.min()));const l=G().add(i),c=new qs($.min(),new Map,new te(z),o,l);await Oh(r,c),r.Ru=r.Ru.remove(i),r.Au.delete(e),Xo(r)}else await oo(r.localStore,e,!1).then(()=>co(r,e,t)).catch(Dn)}async function Jy(n,e){const t=j(n),r=e.batch.batchId;try{const s=await oy(t.localStore,e);Bh(t,r,null),Fh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Pr(t,s)}catch(s){await Dn(s)}}async function Yy(n,e,t){const r=j(n);try{const s=await function(o,l){const c=j(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(J(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);Bh(r,e,t),Fh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Pr(r,s)}catch(s){await Dn(s)}}function Fh(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Bh(n,e,t){const r=j(n);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function co(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(r=>{n.Vu.containsKey(r)||Uh(n,r)})}function Uh(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&($o(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Xo(n))}function Ic(n,e,t){for(const r of t)r instanceof Lh?(n.Vu.addReference(r.key,e),Zy(n,r)):r instanceof xh?(x(Ko,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||Uh(n,r.key)):U(19791,{wu:r})}function Zy(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(r)||(x(Ko,"New document in limbo: "+t),n.Eu.add(r),Xo(n))}function Xo(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new M(Z.fromString(e)),r=n.fu.next();n.Au.set(r,new jy(t)),n.Ru=n.Ru.insert(t,r),Sh(n.remoteStore,new _t(qe(No(t.path)),r,"TargetPurposeLimboResolution",Ms.ce))}}async function Pr(n,e,t){const r=j(n),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{o.push(r.pu(c,e,t).then(h=>{var d;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Bo.Es(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(c,h){const d=j(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>k.forEach(h,g=>k.forEach(g.Ts,S=>d.persistence.referenceDelegate.addReference(p,g.targetId,S)).next(()=>k.forEach(g.Is,S=>d.persistence.referenceDelegate.removeReference(p,g.targetId,S)))))}catch(p){if(!kn(p))throw p;x(Uo,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const S=d.vs.get(g),P=S.snapshotVersion,R=S.withLastLimboFreeSnapshotVersion(P);d.vs=d.vs.insert(g,R)}}}(r.localStore,i))}async function e_(n,e){const t=j(n);if(!t.currentUser.isEqual(e)){x(Ko,"User change. New user:",e.toKey());const r=await Th(t.localStore,e);t.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new L(D.CANCELLED,o))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pr(t,r.Ns)}}function t_(n,e){const t=j(n),r=t.Au.get(e);if(r&&r.hu)return G().add(r.key);{let s=G();const i=t.Iu.get(e);if(!i)return s;for(const o of i){const l=t.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function $h(n){const e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Oh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=t_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Qy.bind(null,e),e.Pu.J_=Fy.bind(null,e.eventManager),e.Pu.yu=By.bind(null,e.eventManager),e}function n_(n){const e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Jy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Yy.bind(null,e),e}class Ss{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ws(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return iy(this.persistence,new ny,e.initialUser,this.serializer)}Cu(e){return new Eh(Fo.Vi,this.serializer)}Du(e){return new dy}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ss.provider={build:()=>new Ss};class r_ extends Ss{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){J(this.persistence.referenceDelegate instanceof Is,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $g(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Pe.withCacheSize(this.cacheSizeBytes):Pe.DEFAULT;return new Eh(r=>Is.Vi(r,t),this.serializer)}}class uo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=e_.bind(null,this.syncEngine),await xy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Oy}()}createDatastore(e){const t=Ws(e.databaseInfo.databaseId),r=yy(e.databaseInfo);return vy(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,l){return new Cy(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>vc(this.syncEngine,t,0),function(){return gc.v()?new gc:new fy}())}createSyncEngine(e,t){return function(s,i,o,l,c,h,d){const p=new Hy(s,i,o,l,c,h);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=j(s);x(Gt,"RemoteStore shutting down."),i.Ea.add(5),await Ar(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}uo.provider={build:()=>new uo};/**
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
 */class jh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):nt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Rt="FirestoreClient";class s_{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=we.UNAUTHENTICATED,this.clientId=bo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{x(Rt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(x(Rt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=zo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xi(n,e){n.asyncQueue.verifyOperationInProgress(),x(Rt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Th(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Cc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await i_(n);x(Rt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>_c(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>_c(e.remoteStore,s)),n._onlineComponents=e}async function i_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(Rt,"Using user provided OfflineComponentProvider");try{await xi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;gn("Error using user provided cache. Falling back to memory cache: "+t),await xi(n,new Ss)}}else x(Rt,"Using default OfflineComponentProvider"),await xi(n,new r_(void 0));return n._offlineComponents}async function Hh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(Rt,"Using user provided OnlineComponentProvider"),await Cc(n,n._uninitializedComponentsProvider._online)):(x(Rt,"Using default OnlineComponentProvider"),await Cc(n,new uo))),n._onlineComponents}function o_(n){return Hh(n).then(e=>e.syncEngine)}async function qh(n){const e=await Hh(n),t=e.eventManager;return t.onListen=qy.bind(null,e.syncEngine),t.onUnlisten=Gy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Wy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ky.bind(null,e.syncEngine),t}function a_(n,e,t={}){const r=new Ze;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new jh({next:g=>{d.Nu(),o.enqueueAndForget(()=>Nh(i,p));const S=g.docs.has(l);!S&&g.fromCache?h.reject(new L(D.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&g.fromCache&&c&&c.source==="server"?h.reject(new L(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Vh(No(l.path),d,{includeMetadataChanges:!0,Ka:!0});return kh(i,p)}(await qh(n),n.asyncQueue,e,t,r)),r.promise}function l_(n,e,t={}){const r=new Ze;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new jh({next:g=>{d.Nu(),o.enqueueAndForget(()=>Nh(i,p)),g.fromCache&&c.source==="server"?h.reject(new L(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Vh(l,d,{includeMetadataChanges:!0,Ka:!0});return kh(i,p)}(await qh(n),n.asyncQueue,e,t,r)),r.promise}function c_(n,e){const t=new Ze;return n.asyncQueue.enqueueAndForget(async()=>Xy(await o_(n),e,t)),t.promise}/**
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
 */function Wh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const u_="ComponentProvider",Sc=new Map;function h_(n,e,t,r,s){return new Nm(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Wh(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const zh="firestore.googleapis.com",bc=!0;class Ac{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new L(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=zh,this.ssl=bc}else this.host=e.host,this.ssl=e.ssl??bc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=wh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Bg)throw new L(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Tm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wh(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ks{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ac({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ac(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hm;switch(r.type){case"firstParty":return new mm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Sc.get(t);r&&(x(u_,"Removing Datastore"),Sc.delete(t),r.terminate())}(this),Promise.resolve()}}function d_(n,e,t,r={}){var h;n=rt(n,Ks);const s=An(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(mu(`https://${l}`),gu("Firestore",!0)),i.host!==zh&&i.host!==l&&gn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!qt(c,o)&&(n._setSettings(c),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=we.MOCK_USER;else{d=Of(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new L(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new we(g)}n._authCredentials=new dm(new Du(d,p))}}/**
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
 */class Vn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vn(this.firestore,e,this._query)}}class ae{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new It(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ae(this.firestore,e,this._key)}toJSON(){return{type:ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ir(t,ae._jsonSchema))return new ae(e,r||null,new M(Z.fromString(t.referencePath)))}}ae._jsonSchemaVersion="firestore/documentReference/1.0",ae._jsonSchema={type:oe("string",ae._jsonSchemaVersion),referencePath:oe("string")};class It extends Vn{constructor(e,t,r){super(e,t,No(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ae(this.firestore,null,new M(e))}withConverter(e){return new It(this.firestore,e,this._path)}}function Ce(n,e,...t){if(n=ue(n),ku("collection","path",e),n instanceof Ks){const r=Z.fromString(e,...t);return Ul(r),new It(n,null,r)}{if(!(n instanceof ae||n instanceof It))throw new L(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return Ul(r),new It(n.firestore,null,r)}}function Be(n,e,...t){if(n=ue(n),arguments.length===1&&(e=bo.newId()),ku("doc","path",e),n instanceof Ks){const r=Z.fromString(e,...t);return Bl(r),new ae(n,null,new M(r))}{if(!(n instanceof ae||n instanceof It))throw new L(D.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return Bl(r),new ae(n.firestore,n instanceof It?n.converter:null,new M(r))}}/**
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
 */const Pc="AsyncQueue";class Rc{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ih(this,"async_queue_retry"),this._c=()=>{const r=Li();r&&x(Pc,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Li();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Li();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Ze;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!kn(e))throw e;x(Pc,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,nt("INTERNAL UNHANDLED ERROR: ",Dc(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Wo.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&U(47125,{Pc:Dc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Dc(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ln extends Ks{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Rc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Rc(e),this._firestoreClient=void 0,await e}}}function f_(n,e){const t=typeof n=="object"?n:Eu(),r=typeof n=="string"?n:gs,s=Co(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=xf("firestore");i&&d_(s,...i)}return s}function Xs(n){if(n._terminated)throw new L(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||p_(n),n._firestoreClient}function p_(n){var r,s,i,o;const e=n._freezeSettings(),t=h_(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new s_(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class xe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xe(me.fromBase64String(e))}catch(t){throw new L(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new xe(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ir(e,xe._jsonSchema))return xe.fromBase64String(e.bytes)}}xe._jsonSchemaVersion="firestore/bytes/1.0",xe._jsonSchema={type:oe("string",xe._jsonSchemaVersion),bytes:oe("string")};/**
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
 */class Qo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ze{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ze._jsonSchemaVersion}}static fromJSON(e){if(Ir(e,ze._jsonSchema))return new ze(e.latitude,e.longitude)}}ze._jsonSchemaVersion="firestore/geoPoint/1.0",ze._jsonSchema={type:oe("string",ze._jsonSchemaVersion),latitude:oe("number"),longitude:oe("number")};/**
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
 */class Oe{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Oe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ir(e,Oe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Oe(e.vectorValues);throw new L(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Oe._jsonSchemaVersion="firestore/vectorValue/1.0",Oe._jsonSchema={type:oe("string",Oe._jsonSchemaVersion),vectorValues:oe("object")};/**
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
 */const m_=/^__.*__$/;class g_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new kt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Sr(e,this.data,t,this.fieldTransforms)}}class Gh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new kt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Kh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U(40011,{dataSource:n})}}class Yo{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Yo({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return bs(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Kh(this.dataSource)&&m_.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class y_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ws(e)}createContext(e,t,r,s=!1){return new Yo({dataSource:e,methodName:t,targetDoc:r,path:pe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zo(n){const e=n._freezeSettings(),t=Ws(n._databaseId);return new y_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Xh(n,e,t,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);ea("Data must be an object, but it was:",o,r);const l=Qh(r,o);let c,h;if(i.merge)c=new Ne(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=vn(e,p,t);if(!o.contains(g))throw new L(D.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Zh(d,g)||d.push(g)}c=new Ne(d),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new g_(new Re(l),c,h)}class Qs extends Jo{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qs}}function __(n,e,t,r){const s=n.createContext(1,e,t);ea("Data must be an object, but it was:",s,r);const i=[],o=Re.empty();Dt(r,(c,h)=>{const d=Yh(e,c,t);h=ue(h);const p=s.childContextForFieldPath(d);if(h instanceof Qs)i.push(d);else{const g=Rr(h,p);g!=null&&(i.push(d),o.set(d,g))}});const l=new Ne(i);return new Gh(o,l,s.fieldTransforms)}function w_(n,e,t,r,s,i){const o=n.createContext(1,e,t),l=[vn(e,r,t)],c=[s];if(i.length%2!=0)throw new L(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(vn(e,i[g])),c.push(i[g+1]);const h=[],d=Re.empty();for(let g=l.length-1;g>=0;--g)if(!Zh(h,l[g])){const S=l[g];let P=c[g];P=ue(P);const R=o.childContextForFieldPath(S);if(P instanceof Qs)h.push(S);else{const N=Rr(P,R);N!=null&&(h.push(S),d.set(S,N))}}const p=new Ne(h);return new Gh(d,p,o.fieldTransforms)}function E_(n,e,t,r=!1){return Rr(t,n.createContext(r?4:3,e))}function Rr(n,e){if(Jh(n=ue(n)))return ea("Unsupported field value:",e,n),Qh(n,e);if(n instanceof Jo)return function(r,s){if(!Kh(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Rr(l,s.childContextForArray(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=X.fromDate(r);return{timestampValue:vs(s.serializer,i)}}if(r instanceof X){const i=new X(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vs(s.serializer,i)}}if(r instanceof ze)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xe)return{bytesValue:hh(s.serializer,r._byteString)};if(r instanceof ae){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Mo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Oe)return function(o,l){const c=o instanceof Oe?o.toArray():o;return{mapValue:{fields:{[Uu]:{stringValue:$u},[ys]:{arrayValue:{values:c.map(d=>{if(typeof d!="number")throw l.createError("VectorValues must only contain numeric values.");return Vo(l.serializer,d)})}}}}}}(r,s);if(_h(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${xs(r)}`)}(n,e)}function Qh(n,e){const t={};return Lu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Dt(n,(r,s)=>{const i=Rr(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Jh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof X||n instanceof ze||n instanceof xe||n instanceof ae||n instanceof Jo||n instanceof Oe||_h(n))}function ea(n,e,t){if(!Jh(t)||!Nu(t)){const r=xs(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function vn(n,e,t){if((e=ue(e))instanceof Qo)return e._internalPath;if(typeof e=="string")return Yh(n,e);throw bs("Field path arguments must be of type string or ",n,!1,void 0,t)}const T_=new RegExp("[~\\*/\\[\\]]");function Yh(n,e,t){if(e.search(T_)>=0)throw bs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Qo(...e.split("."))._internalPath}catch{throw bs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function bs(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new L(D.INVALID_ARGUMENT,l+n+c)}function Zh(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class v_{convertValue(e,t="none"){switch(At(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw U(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Dt(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[ys].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>re(o.doubleValue));return new Oe(t)}convertGeoPoint(e){return new ze(re(e.latitude),re(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Fs(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(pr(e));default:return null}}convertTimestamp(e){const t=St(e);return new X(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Z.fromString(e);J(yh(r),9688,{name:e});const s=new mr(r.get(1),r.get(3)),i=new M(r.popFirst(5));return s.isEqual(t)||nt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class ed extends v_{constructor(e){super(),this.firestore=e}convertBytes(e){return new xe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ae(this.firestore,null,t)}}const kc="@firebase/firestore",Nc="4.10.0";/**
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
 */class td{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new I_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(vn("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class I_ extends td{data(){return super.data()}}/**
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
 */function C_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ta{}class S_ extends ta{}function Vc(n,e,...t){let r=[];e instanceof ta&&r.push(e),r=r.concat(t),function(i){const o=i.filter(c=>c instanceof na).length,l=i.filter(c=>c instanceof Js).length;if(o>1||o>0&&l>0)throw new L(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Js extends S_{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Js(e,t,r)}_apply(e){const t=this._parse(e);return nd(e._query,t),new Vn(e.firestore,e.converter,eo(e._query,t))}_parse(e){const t=Zo(e.firestore);return function(i,o,l,c,h,d,p){let g;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new L(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Mc(p,d);const P=[];for(const R of p)P.push(xc(c,i,R));g={arrayValue:{values:P}}}else g=xc(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Mc(p,d),g=E_(l,o,p,d==="in"||d==="not-in");return ie.create(h,d,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Lc(n,e,t){const r=e,s=vn("where",n);return Js._create(s,r,t)}class na extends ta{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new na(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Fe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)nd(o,c),o=eo(o,c)}(e._query,t),new Vn(e.firestore,e.converter,eo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function xc(n,e,t){if(typeof(t=ue(t))=="string"){if(t==="")throw new L(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xu(e)&&t.indexOf("/")!==-1)throw new L(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Z.fromString(t));if(!M.isDocumentKey(r))throw new L(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Kl(n,new M(r))}if(t instanceof ae)return Kl(n,t._key);throw new L(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xs(t)}.`)}function Mc(n,e){if(!Array.isArray(n)||n.length===0)throw new L(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function nd(n,e){const t=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new L(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function rd(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ir{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ht extends td{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new as(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(vn("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ht._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ht._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ht._jsonSchema={type:oe("string",Ht._jsonSchemaVersion),bundleSource:oe("string","DocumentSnapshot"),bundleName:oe("string"),bundle:oe("string")};class as extends Ht{data(e={}){return super.data(e)}}class hn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ir(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new as(this._firestore,this._userDataWriter,r.key,r,new ir(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new as(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ir(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new as(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ir(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:b_(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=hn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function b_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U(61501,{type:n})}}/**
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
 */hn._jsonSchemaVersion="firestore/querySnapshot/1.0",hn._jsonSchema={type:oe("string",hn._jsonSchemaVersion),bundleSource:oe("string","QuerySnapshot"),bundleName:oe("string"),bundle:oe("string")};/**
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
 */class A_{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Zo(e)}set(e,t,r){this._verifyNotCommitted();const s=Mi(e,this._firestore),i=rd(s.converter,t,r),o=Xh(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Ve.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Mi(e,this._firestore);let o;return o=typeof(t=ue(t))=="string"||t instanceof Qo?w_(this._dataReader,"WriteBatch.update",i._key,t,r,s):__(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,Ve.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Mi(e,this._firestore);return this._mutations=this._mutations.concat(new Hs(t._key,Ve.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new L(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Mi(n,e){if((n=ue(n)).firestore!==e)throw new L(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function Oc(n){n=rt(n,ae);const e=rt(n.firestore,Ln),t=Xs(e);return a_(t,n._key).then(r=>P_(e,n,r))}function Se(n){n=rt(n,Vn);const e=rt(n.firestore,Ln),t=Xs(e),r=new ed(e);return C_(n._query),l_(t,n._query).then(s=>new hn(e,r,n,s))}function sd(n,e,t){n=rt(n,ae);const r=rt(n.firestore,Ln),s=rd(n.converter,e,t),i=Zo(r);return ra(r,[Xh(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ve.none())])}function nn(n){return ra(rt(n.firestore,Ln),[new Hs(n._key,Ve.none())])}function ra(n,e){const t=Xs(n);return c_(t,e)}function P_(n,e,t){const r=t.docs.get(e._key),s=new ed(n);return new Ht(n,s,e._key,r,new ir(t.hasPendingWrites,t.fromCache),e.converter)}function In(n){return n=rt(n,Ln),Xs(n),new A_(n,e=>ra(n,e))}(function(e,t=!0){um(Pn),mn(new Wt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Ln(new fm(r.getProvider("auth-internal")),new gm(o,r.getProvider("app-check-internal")),Vm(o,s),o);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Tt(kc,Nc,e),Tt(kc,Nc,"esm2020")})();var R_="firebase",D_="12.8.0";/**
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
 */Tt(R_,D_,"app");function id(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const k_=id,od=new Tr("auth","Firebase",id());/**
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
 */const As=new vo("@firebase/auth");function N_(n,...e){As.logLevel<=W.WARN&&As.warn(`Auth (${Pn}): ${n}`,...e)}function ls(n,...e){As.logLevel<=W.ERROR&&As.error(`Auth (${Pn}): ${n}`,...e)}/**
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
 */function Ue(n,...e){throw sa(n,...e)}function Ge(n,...e){return sa(n,...e)}function ad(n,e,t){const r={...k_(),[e]:t};return new Tr("auth","Firebase",r).create(e,{appName:n.name})}function et(n){return ad(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return od.create(n,...e)}function B(n,e,...t){if(!n)throw sa(e,...t)}function Je(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ls(e),new Error(e)}function it(n,e){n||Je(e)}/**
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
 */function ho(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function V_(){return Fc()==="http:"||Fc()==="https:"}function Fc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function L_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(V_()||Hf()||"connection"in navigator)?navigator.onLine:!0}function x_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Dr{constructor(e,t){this.shortDelay=e,this.longDelay=t,it(t>e,"Short delay should be less than long delay!"),this.isMobile=Uf()||qf()}get(){return L_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ia(n,e){it(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ld{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const M_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const O_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],F_=new Dr(3e4,6e4);function Nt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Vt(n,e,t,r,s={}){return cd(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=vr({key:n.config.apiKey,...o}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:c,...i};return jf()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&An(n.emulatorConfig.host)&&(h.credentials="include"),ld.fetch()(await ud(n,n.config.apiHost,t,l),h)})}async function cd(n,e,t){n._canInitEmulator=!1;const r={...M_,...e};try{const s=new U_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ts(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ts(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ts(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ts(n,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ad(n,d,h);Ue(n,d)}}catch(s){if(s instanceof ot)throw s;Ue(n,"network-request-failed",{message:String(s)})}}async function kr(n,e,t,r,s={}){const i=await Vt(n,e,t,r,s);return"mfaPendingCredential"in i&&Ue(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function ud(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?ia(n.config,s):`${n.config.apiScheme}://${s}`;return O_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function B_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class U_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),F_.get())})}}function ts(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ge(n,e,r);return s.customData._tokenResponse=t,s}function Bc(n){return n!==void 0&&n.enterprise!==void 0}class $_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return B_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function j_(n,e){return Vt(n,"GET","/v2/recaptchaConfig",Nt(n,e))}/**
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
 */async function H_(n,e){return Vt(n,"POST","/v1/accounts:delete",e)}async function Ps(n,e){return Vt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function hr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function q_(n,e=!1){const t=ue(n),r=await t.getIdToken(e),s=oa(r);B(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:hr(Oi(s.auth_time)),issuedAtTime:hr(Oi(s.iat)),expirationTime:hr(Oi(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Oi(n){return Number(n)*1e3}function oa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ls("JWT malformed, contained fewer than 3 sections"),null;try{const s=hu(t);return s?JSON.parse(s):(ls("Failed to decode base64 JWT payload"),null)}catch(s){return ls("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Uc(n){const e=oa(n);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ot&&W_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function W_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class z_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=hr(this.lastLoginAt),this.creationTime=hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Rs(n){var p;const e=n.auth,t=await n.getIdToken(),r=await wr(n,Ps(e,{idToken:t}));B(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?hd(s.providerUserInfo):[],o=K_(n.providerData,i),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new fo(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function G_(n){const e=ue(n);await Rs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function K_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function hd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function X_(n,e){const t=await cd(n,{},async()=>{const r=vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await ud(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&An(n.emulatorConfig.host)&&(c.credentials="include"),ld.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Q_(n,e){return Vt(n,"POST","/v2/accounts:revokeToken",Nt(n,e))}/**
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
 */class dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){B(e.length!==0,"internal-error");const t=Uc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await X_(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new dn;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dn,this.toJSON())}_performRefresh(){return Je("not implemented")}}/**
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
 */function ft(n,e){B(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Me{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new z_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await wr(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q_(this,e)}reload(){return G_(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Me({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Rs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(et(this.auth));const e=await this.getIdToken();return await wr(this,H_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,h=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:S,providerData:P,stsTokenManager:R}=t;B(p&&R,e,"internal-error");const N=dn.fromJSON(this.name,R);B(typeof p=="string",e,"internal-error"),ft(r,e.name),ft(s,e.name),B(typeof g=="boolean",e,"internal-error"),B(typeof S=="boolean",e,"internal-error"),ft(i,e.name),ft(o,e.name),ft(l,e.name),ft(c,e.name),ft(h,e.name),ft(d,e.name);const F=new Me({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:S,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:N,createdAt:h,lastLoginAt:d});return P&&Array.isArray(P)&&(F.providerData=P.map(O=>({...O}))),c&&(F._redirectEventId=c),F}static async _fromIdTokenResponse(e,t,r=!1){const s=new dn;s.updateFromServerResponse(t);const i=new Me({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Rs(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?hd(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new dn;l.updateFromIdToken(r);const c=new Me({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new fo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const $c=new Map;function Ye(n){it(n instanceof Function,"Expected a class definition");let e=$c.get(n);return e?(it(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,$c.set(n,e),e)}/**
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
 */class dd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}dd.type="NONE";const jc=dd;/**
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
 */function cs(n,e,t){return`firebase:${n}:${e}:${t}`}class fn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=cs(this.userKey,s.apiKey,i),this.fullPersistenceKey=cs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ps(this.auth,{idToken:e}).catch(()=>{});return t?Me._fromGetAccountInfoResponse(this.auth,t,e):null}return Me._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new fn(Ye(jc),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Ye(jc);const o=cs(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const d=await h._get(o);if(d){let p;if(typeof d=="string"){const g=await Ps(e,{idToken:d}).catch(()=>{});if(!g)break;p=await Me._fromGetAccountInfoResponse(e,g,d)}else p=Me._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new fn(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new fn(i,e,r))}}/**
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
 */function Hc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_d(e))return"Blackberry";if(wd(e))return"Webos";if(pd(e))return"Safari";if((e.includes("chrome/")||md(e))&&!e.includes("edge/"))return"Chrome";if(yd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fd(n=Te()){return/firefox\//i.test(n)}function pd(n=Te()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function md(n=Te()){return/crios\//i.test(n)}function gd(n=Te()){return/iemobile/i.test(n)}function yd(n=Te()){return/android/i.test(n)}function _d(n=Te()){return/blackberry/i.test(n)}function wd(n=Te()){return/webos/i.test(n)}function aa(n=Te()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function J_(n=Te()){var e;return aa(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Y_(){return Wf()&&document.documentMode===10}function Ed(n=Te()){return aa(n)||yd(n)||wd(n)||_d(n)||/windows phone/i.test(n)||gd(n)}/**
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
 */function Td(n,e=[]){let t;switch(n){case"Browser":t=Hc(Te());break;case"Worker":t=`${Hc(Te())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pn}/${r}`}/**
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
 */class Z_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ew(n,e={}){return Vt(n,"GET","/v2/passwordPolicy",Nt(n,e))}/**
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
 */const tw=6;class nw{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??tw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class rw{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qc(this),this.idTokenSubscription=new qc(this),this.beforeStateQueue=new Z_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=od,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ye(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await fn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ps(this,{idToken:e}),r=await Me._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Le(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Rs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Le(this.app))return Promise.reject(et(this));const t=e?ue(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(et(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Le(this.app)?Promise.reject(et(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ye(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ew(this),t=new nw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Tr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Q_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ye(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await fn.create(this,[Ye(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Td(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&N_(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Yt(n){return ue(n)}class qc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zf(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ys={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sw(n){Ys=n}function vd(n){return Ys.loadJS(n)}function iw(){return Ys.recaptchaEnterpriseScript}function ow(){return Ys.gapiScript}function aw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class lw{constructor(){this.enterprise=new cw}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class cw{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const uw="recaptcha-enterprise",Id="NO_RECAPTCHA";class hw{constructor(e){this.type=uw,this.auth=Yt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{j_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new $_(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Bc(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Id)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new lw().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!t&&Bc(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=iw();c.length!==0&&(c+=l),vd(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Wc(n,e,t,r=!1,s=!1){const i=new hw(n);let o;if(s)o=Id;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function po(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Wc(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Wc(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(o)})}/**
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
 */function dw(n,e){const t=Co(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(qt(i,e??{}))return s;Ue(s,"already-initialized")}return t.initialize({options:e})}function fw(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ye);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pw(n,e,t){const r=Yt(n);B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Cd(e),{host:o,port:l}=mw(e),c=l===null?"":`:${l}`,h={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){B(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),B(qt(h,r.config.emulator)&&qt(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,An(o)?(mu(`${i}//${o}${c}`),gu("Auth",!0)):gw()}function Cd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function mw(n){const e=Cd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:zc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:zc(o)}}}function zc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function gw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class la{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,t){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}}async function yw(n,e){return Vt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function _w(n,e){return kr(n,"POST","/v1/accounts:signInWithPassword",Nt(n,e))}/**
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
 */async function ww(n,e){return kr(n,"POST","/v1/accounts:signInWithEmailLink",Nt(n,e))}async function Ew(n,e){return kr(n,"POST","/v1/accounts:signInWithEmailLink",Nt(n,e))}/**
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
 */class Er extends la{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Er(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Er(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return po(e,t,"signInWithPassword",_w);case"emailLink":return ww(e,{email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return po(e,r,"signUpPassword",yw);case"emailLink":return Ew(e,{idToken:t,email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function pn(n,e){return kr(n,"POST","/v1/accounts:signInWithIdp",Nt(n,e))}/**
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
 */const Tw="http://localhost";class Kt extends la{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ue("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new Kt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return pn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,pn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pn(e,t)}buildRequest(){const e={requestUri:Tw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vr(t)}return e}}/**
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
 */function vw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Iw(n){const e=er(tr(n)).link,t=e?er(tr(e)).deep_link_id:null,r=er(tr(n)).deep_link_id;return(r?er(tr(r)).link:null)||r||t||e||n}class ca{constructor(e){const t=er(tr(e)),r=t.apiKey??null,s=t.oobCode??null,i=vw(t.mode??null);B(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Iw(e);try{return new ca(t)}catch{return null}}}/**
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
 */class xn{constructor(){this.providerId=xn.PROVIDER_ID}static credential(e,t){return Er._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ca.parseLink(t);return B(r,"argument-error"),Er._fromEmailAndCode(e,r.code,r.tenantId)}}xn.PROVIDER_ID="password";xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Sd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Nr extends Sd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pt extends Nr{constructor(){super("facebook.com")}static credential(e){return Kt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";pt.PROVIDER_ID="facebook.com";/**
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
 */class mt extends Nr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Kt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return mt.credential(t,r)}catch{return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com";mt.PROVIDER_ID="google.com";/**
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
 */class gt extends Nr{constructor(){super("github.com")}static credential(e){return Kt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com";gt.PROVIDER_ID="github.com";/**
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
 */class yt extends Nr{constructor(){super("twitter.com")}static credential(e,t){return Kt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return yt.credential(t,r)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
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
 */async function Cw(n,e){return kr(n,"POST","/v1/accounts:signUp",Nt(n,e))}/**
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
 */class Xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Me._fromIdTokenResponse(e,r,s),o=Gc(r);return new Xt({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Gc(r);return new Xt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Gc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ds extends ot{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ds.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ds(e,t,r,s)}}function bd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ds._fromErrorAndOperation(n,i,e,r):i})}async function Sw(n,e,t=!1){const r=await wr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Xt._forOperation(n,"link",r)}/**
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
 */async function bw(n,e,t=!1){const{auth:r}=n;if(Le(r.app))return Promise.reject(et(r));const s="reauthenticate";try{const i=await wr(n,bd(r,s,e,n),t);B(i.idToken,r,"internal-error");const o=oa(i.idToken);B(o,r,"internal-error");const{sub:l}=o;return B(n.uid===l,r,"user-mismatch"),Xt._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ue(r,"user-mismatch"),i}}/**
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
 */async function Ad(n,e,t=!1){if(Le(n.app))return Promise.reject(et(n));const r="signIn",s=await bd(n,r,e),i=await Xt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Aw(n,e){return Ad(Yt(n),e)}/**
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
 */async function Pd(n){const e=Yt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Pw(n,e,t){if(Le(n.app))return Promise.reject(et(n));const r=Yt(n),o=await po(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Cw).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Pd(n),c}),l=await Xt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Rw(n,e,t){return Le(n.app)?Promise.reject(et(n)):Aw(ue(n),xn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Pd(n),r})}function Dw(n,e,t,r){return ue(n).onIdTokenChanged(e,t,r)}function kw(n,e,t){return ue(n).beforeAuthStateChanged(e,t)}function Nw(n,e,t,r){return ue(n).onAuthStateChanged(e,t,r)}function Vw(n){return ue(n).signOut()}const ks="__sak";/**
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
 */class Rd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ks,"1"),this.storage.removeItem(ks),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Lw=1e3,xw=10;class Dd extends Rd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ed(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Y_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xw):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Lw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dd.type="LOCAL";const Mw=Dd;/**
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
 */class kd extends Rd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}kd.type="SESSION";const Nd=kd;/**
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
 */function Ow(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Zs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Zs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(t.origin,i)),c=await Ow(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zs.receivers=[];/**
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
 */function ua(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Fw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=ua("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ke(){return window}function Bw(n){Ke().location.href=n}/**
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
 */function Vd(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function Uw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $w(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function jw(){return Vd()?self:null}/**
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
 */const Ld="firebaseLocalStorageDb",Hw=1,Ns="firebaseLocalStorage",xd="fbase_key";class Vr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ei(n,e){return n.transaction([Ns],e?"readwrite":"readonly").objectStore(Ns)}function qw(){const n=indexedDB.deleteDatabase(Ld);return new Vr(n).toPromise()}function mo(){const n=indexedDB.open(Ld,Hw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ns,{keyPath:xd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ns)?e(r):(r.close(),await qw(),e(await mo()))})})}async function Kc(n,e,t){const r=ei(n,!0).put({[xd]:e,value:t});return new Vr(r).toPromise()}async function Ww(n,e){const t=ei(n,!1).get(e),r=await new Vr(t).toPromise();return r===void 0?null:r.value}function Xc(n,e){const t=ei(n,!0).delete(e);return new Vr(t).toPromise()}const zw=800,Gw=3;class Md{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Gw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zs._getInstance(jw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await Uw(),!this.activeServiceWorker)return;this.sender=new Fw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$w()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mo();return await Kc(e,ks,"1"),await Xc(e,ks),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ww(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ei(s,!1).getAll();return new Vr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Md.type="LOCAL";const Kw=Md;new Dr(3e4,6e4);/**
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
 */function Xw(n,e){return e?Ye(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ha extends la{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Qw(n){return Ad(n.auth,new ha(n),n.bypassAuthState)}function Jw(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),bw(t,new ha(n),n.bypassAuthState)}async function Yw(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),Sw(t,new ha(n),n.bypassAuthState)}/**
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
 */class Od{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qw;case"linkViaPopup":case"linkViaRedirect":return Yw;case"reauthViaPopup":case"reauthViaRedirect":return Jw;default:Ue(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Zw=new Dr(2e3,1e4);class ln extends Od{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");const e=ua();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zw.get())};e()}}ln.currentPopupAction=null;/**
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
 */const eE="pendingRedirect",us=new Map;class tE extends Od{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=us.get(this.auth._key());if(!e){try{const r=await nE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}us.set(this.auth._key(),e)}return this.bypassAuthState||us.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nE(n,e){const t=iE(e),r=sE(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function rE(n,e){us.set(n._key(),e)}function sE(n){return Ye(n._redirectPersistence)}function iE(n){return cs(eE,n.config.apiKey,n.name)}async function oE(n,e,t=!1){if(Le(n.app))return Promise.reject(et(n));const r=Yt(n),s=Xw(r,e),o=await new tE(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const aE=10*60*1e3;class lE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Fd(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ge(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qc(e))}saveEventToCache(e){this.cachedEventUids.add(Qc(e)),this.lastProcessedEventTime=Date.now()}}function Qc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Fd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fd(n);default:return!1}}/**
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
 */async function uE(n,e={}){return Vt(n,"GET","/v1/projects",e)}/**
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
 */const hE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dE=/^https?/;async function fE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await uE(n);for(const t of e)try{if(pE(t))return}catch{}Ue(n,"unauthorized-domain")}function pE(n){const e=ho(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!dE.test(t))return!1;if(hE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const mE=new Dr(3e4,6e4);function Jc(){const n=Ke().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function gE(n){return new Promise((e,t)=>{var s,i,o;function r(){Jc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jc(),t(Ge(n,"network-request-failed"))},timeout:mE.get()})}if((i=(s=Ke().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Ke().gapi)!=null&&o.load)r();else{const l=aw("iframefcb");return Ke()[l]=()=>{gapi.load?r():t(Ge(n,"network-request-failed"))},vd(`${ow()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw hs=null,e})}let hs=null;function yE(n){return hs=hs||gE(n),hs}/**
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
 */const _E=new Dr(5e3,15e3),wE="__/auth/iframe",EE="emulator/auth/iframe",TE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IE(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ia(e,EE):`https://${n.config.authDomain}/${wE}`,r={apiKey:e.apiKey,appName:n.name,v:Pn},s=vE.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${vr(r).slice(1)}`}async function CE(n){const e=await yE(n),t=Ke().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:IE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ge(n,"network-request-failed"),l=Ke().setTimeout(()=>{i(o)},_E.get());function c(){Ke().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const SE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bE=500,AE=600,PE="_blank",RE="http://localhost";class Yc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DE(n,e,t,r=bE,s=AE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...SE,width:r.toString(),height:s.toString(),top:i,left:o},h=Te().toLowerCase();t&&(l=md(h)?PE:t),fd(h)&&(e=e||RE,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[S,P])=>`${g}${S}=${P},`,"");if(J_(h)&&l!=="_self")return kE(e||"",l),new Yc(null);const p=window.open(e||"",l,d);B(p,n,"popup-blocked");try{p.focus()}catch{}return new Yc(p)}function kE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const NE="__/auth/handler",VE="emulator/auth/handler",LE=encodeURIComponent("fac");async function Zc(n,e,t,r,s,i){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Pn,eventId:s};if(e instanceof Sd){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Yf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Nr){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),h=c?`#${LE}=${encodeURIComponent(c)}`:"";return`${xE(n)}?${vr(l).slice(1)}${h}`}function xE({config:n}){return n.emulator?ia(n,VE):`https://${n.authDomain}/${NE}`}/**
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
 */const Fi="webStorageSupport";class ME{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nd,this._completeRedirectFn=oE,this._overrideRedirectResult=rE}async _openPopup(e,t,r,s){var o;it((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Zc(e,t,r,ho(),s);return DE(e,i,ua())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Zc(e,t,r,ho(),s);return Bw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(it(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await CE(e),r=new lE(e);return t.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fi,{type:Fi},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Fi];i!==void 0&&t(!!i),Ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ed()||pd()||aa()}}const OE=ME;var eu="@firebase/auth",tu="1.12.0";/**
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
 */class FE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function BE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UE(n){mn(new Wt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Td(n)},h=new rw(r,s,i,c);return fw(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),mn(new Wt("auth-internal",e=>{const t=Yt(e.getProvider("auth").getImmediate());return(r=>new FE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(eu,tu,BE(n)),Tt(eu,tu,"esm2020")}/**
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
 */const $E=5*60,jE=pu("authIdTokenMaxAge")||$E;let nu=null;const HE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>jE)return;const s=t==null?void 0:t.token;nu!==s&&(nu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function qE(n=Eu()){const e=Co(n,"auth");if(e.isInitialized())return e.getImmediate();const t=dw(n,{popupRedirectResolver:OE,persistence:[Kw,Mw,Nd]}),r=pu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=HE(i.toString());kw(t,o,()=>o(t.currentUser)),Dw(t,l=>o(l))}}const s=du("auth");return s&&pw(t,`http://${s}`),t}function WE(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}sw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ge("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",WE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UE("Browser");const zE={apiKey:"AIzaSyDVTkhWjMht3WxUzkve7HzztbAEEderAhw",authDomain:"zarvona-energy-a85ce.firebaseapp.com",projectId:"zarvona-energy-a85ce",storageBucket:"zarvona-energy-a85ce.firebasestorage.app",messagingSenderId:"171021980471",appId:"1:171021980471:web:375df2a6e359b5e93500b2",measurementId:"G-HZXCF84BT5"},Bd=wu(zE),Lr=qE(Bd),Q=f_(Bd);async function da(n,e,t=!1){try{console.log(`Saving sheet ${n} to Firestore...`);const r=In(Q),s=Be(Q,"gaugeSheets",n);if(r.set(s,{id:e.id,name:e.name,lastUpdated:X.fromDate(new Date(e.lastUpdated)),rawRowCount:e.rawRowCount||0},{merge:!0}),await r.commit(),e.wells&&e.wells.length>0)for(const i of e.wells)await GE(n,i,t);return e.batteryProduction&&e.batteryProduction.length>0&&await QE(n,e.batteryProduction,t),e.runTickets&&e.runTickets.length>0&&await JE(n,e.runTickets,t),console.log(`Sheet ${n} saved successfully`),!0}catch(r){return console.error(`Error saving sheet ${n}:`,r),!1}}async function GE(n,e,t=!1){try{const r=Be(Q,`gaugeSheets/${n}/wells`,e.id);return await sd(r,{id:e.id,name:e.name,pressureReadings:e.pressureReadings||[],chemicalProgram:e.chemicalProgram||{},failureHistory:e.failureHistory||[],actionItems:e.actionItems||[]},{merge:!0}),e.production&&e.production.length>0&&await KE(n,e.id,e.production,t),e.wellTests&&e.wellTests.length>0&&await XE(n,e.id,e.wellTests,t),!0}catch(r){return console.error(`Error saving well ${e.id}:`,r),!1}}async function KE(n,e,t,r){try{if(r){const s=In(Q);t.slice(-500).forEach((o,l)=>{const c=new Date(o.date).toISOString().split("T")[0],h=Be(Q,`gaugeSheets/${n}/wells/${e}/production`,c);s.set(h,{date:X.fromDate(new Date(o.date)),oil:o.oil||0,water:o.water||0,gas:o.gas||0})}),await s.commit()}else{const s=new Date;s.setDate(s.getDate()-30);const i=t.filter(o=>new Date(o.date)>=s);if(i.length>0){const o=In(Q);let l=0;for(const c of i){const h=new Date(c.date).toISOString().split("T")[0],d=Be(Q,`gaugeSheets/${n}/wells/${e}/production`,h);o.set(d,{date:X.fromDate(new Date(c.date)),oil:c.oil||0,water:c.water||0,gas:c.gas||0},{merge:!0}),l++,l>=500&&(await o.commit(),l=0)}l>0&&await o.commit()}}return!0}catch(s){return console.error("Error saving production data:",s),!1}}async function XE(n,e,t,r){try{const s=r?t:t.slice(-50);if(s.length>0){const i=In(Q);s.forEach(o=>{const l=new Date(o.date).toISOString().split("T")[0],c=Be(Q,`gaugeSheets/${n}/wells/${e}/wellTests`,l);i.set(c,{date:X.fromDate(new Date(o.date)),oil:o.oil||0,water:o.water||0,gas:o.gas||0},{merge:!0})}),await i.commit()}return!0}catch(s){return console.error("Error saving well tests:",s),!1}}async function QE(n,e,t=!1){try{let r;if(t)r=e.slice(-500);else{const s=new Date;s.setDate(s.getDate()-30),r=e.filter(i=>new Date(i.date)>=s)}if(r.length>0){const s=In(Q);r.forEach(i=>{const o=new Date(i.date).toISOString().split("T")[0],l=Be(Q,`gaugeSheets/${n}/batteryProduction`,o);s.set(l,{date:X.fromDate(new Date(i.date)),oil:i.oil||0,water:i.water||0,gas:i.gas||0},{merge:!0})}),await s.commit()}return!0}catch(r){return console.error("Error saving battery production:",r),!1}}async function JE(n,e,t=!1){try{let r;if(t)r=e;else{const s=new Date;s.setDate(s.getDate()-30),r=e.filter(i=>{if(!i.date)return!1;const o=new Date(i.date);return!isNaN(o.getTime())&&o>=s})}if(r.length>0){const s=In(Q);r.forEach((i,o)=>{const l=i.date?new Date(i.date).toISOString().split("T")[0]:"unknown",c=Be(Q,`gaugeSheets/${n}/runTickets`,`${l}_${o}`);let h=null;if(i.date){const d=new Date(i.date);isNaN(d.getTime())||(h=X.fromDate(d))}s.set(c,{...i,date:h},{merge:!0})}),await s.commit()}return!0}catch(r){return console.error("Error saving run tickets:",r),!1}}async function YE(n,e,t){var r;try{const s=Be(Q,`gaugeSheets/${n}/wells`,e);await sd(s,t,{merge:!0});const i=(r=A.appData[n])==null?void 0:r.wells.find(o=>o.id===e);return i&&Object.assign(i,t),!0}catch(s){return console.error("Error updating well:",s),!1}}async function ZE(){try{console.log("Clearing Firestore data...");const n=Ce(Q,"gaugeSheets"),e=await Se(n);for(const t of e.docs)await eT(t.id);return A.appData={},console.log("Firestore data cleared successfully"),!0}catch(n){return console.error("Error clearing Firestore data:",n),!1}}async function eT(n){try{const e=Ce(Q,`gaugeSheets/${n}/wells`),t=await Se(e);for(const c of t.docs){const h=Ce(Q,`gaugeSheets/${n}/wells/${c.id}/production`),d=await Se(h);for(const S of d.docs)await nn(S.ref);const p=Ce(Q,`gaugeSheets/${n}/wells/${c.id}/wellTests`),g=await Se(p);for(const S of g.docs)await nn(S.ref);await nn(c.ref)}const r=Ce(Q,`gaugeSheets/${n}/batteryProduction`),s=await Se(r);for(const c of s.docs)await nn(c.ref);const i=Ce(Q,`gaugeSheets/${n}/runTickets`),o=await Se(i);for(const c of o.docs)await nn(c.ref);const l=Be(Q,"gaugeSheets",n);return await nn(l),!0}catch(e){return console.error(`Error deleting sheet ${n}:`,e),!1}}async function tT(){var n,e;try{console.log("Loading gauge sheet metadata...");const t=Ce(Q,"gaugeSheets"),r=await Se(t),s={};for(const i of r.docs){const o=i.data(),l=i.id;s[l]={id:o.id,name:o.name,lastUpdated:((e=(n=o.lastUpdated)==null?void 0:n.toDate)==null?void 0:e.call(n))||o.lastUpdated,rawRowCount:o.rawRowCount||0,wells:[],batteryProduction:[],runTickets:[],_metadataLoaded:!0,_wellsLoaded:!1,_aggregateLoaded:!1}}return A.appData=s,A.loadedSheets=Object.keys(s),console.log(`Loaded metadata for ${Object.keys(s).length} gauge sheets`),!0}catch(t){return console.error("Error loading gauge sheet metadata:",t),A.appData={},!1}}async function nT(){try{console.log("Loading dashboard summary data...");const n=new Date;n.setDate(n.getDate()-30);const e=X.fromDate(n);for(const t in A.appData){const r=A.appData[t],s=Ce(Q,`gaugeSheets/${t}/wells`),i=await Se(s);for(const o of i.docs){const l=o.data(),c=o.id,h=Ce(Q,`gaugeSheets/${t}/wells/${c}/production`),d=Vc(h,Lc("date",">=",e)),g=(await Se(d)).docs.map(F=>{var O,q;return{...F.data(),date:((q=(O=F.data().date)==null?void 0:O.toDate)==null?void 0:q.call(O))||new Date(F.data().date)}}),S=Ce(Q,`gaugeSheets/${t}/wells/${c}/wellTests`),P=Vc(S,Lc("date",">=",e)),N=(await Se(P)).docs.map(F=>{var O,q;return{...F.data(),date:((q=(O=F.data().date)==null?void 0:O.toDate)==null?void 0:q.call(O))||new Date(F.data().date)}});r.wells.push({id:l.id,name:l.name,production:g,wellTests:N,pressureReadings:[],chemicalProgram:{},failureHistory:[],actionItems:[],_summaryOnly:!0})}r._wellsLoaded=!0,A.metadataCache.wellCounts[t]=r.wells.length,A.metadataCache.wellNames[t]=r.wells.map(o=>({id:o.id,name:o.name}))}return console.log("Dashboard summary data loaded"),!0}catch(n){return console.error("Error loading dashboard summary:",n),!1}}async function fa(n){try{console.log(`Loading wells list for ${n}...`);const e=A.appData[n];if(!e)return console.error(`Sheet ${n} not found in appData`),!1;if(e._wellsLoaded)return console.log(`Wells already loaded for ${n}`),!0;const t=Ce(Q,`gaugeSheets/${n}/wells`),r=await Se(t);e.wells=[];for(const s of r.docs){const i=s.data();e.wells.push({id:i.id,name:i.name,production:[],wellTests:[],pressureReadings:i.pressureReadings||[],chemicalProgram:i.chemicalProgram||{},failureHistory:i.failureHistory||[],actionItems:i.actionItems||[],_detailsLoaded:!1})}return e._wellsLoaded=!0,A.metadataCache.wellCounts[n]=e.wells.length,A.metadataCache.wellNames[n]=e.wells.map(s=>({id:s.id,name:s.name})),console.log(`Loaded ${e.wells.length} wells for ${n}`),!0}catch(e){return console.error(`Error loading wells list for ${n}:`,e),!1}}async function rT(n,e){try{console.log(`Loading full details for well ${e} in sheet ${n}...`);const t=A.appData[n];if(!t)return console.error(`Sheet ${n} not found in appData`),!1;let r=t.wells.find(d=>d.id===e);if(!r){const d=Be(Q,`gaugeSheets/${n}/wells`,e),p=await Oc(d);if(!p.exists())return console.error(`Well ${e} not found in sheet ${n}`),!1;const g=p.data();r={id:g.id,name:g.name,production:[],wellTests:[],pressureReadings:g.pressureReadings||[],chemicalProgram:g.chemicalProgram||{},failureHistory:g.failureHistory||[],actionItems:g.actionItems||[],_detailsLoaded:!1},t.wells.push(r)}if(r._detailsLoaded&&!r._summaryOnly)return console.log(`Well details already loaded for ${e}`),!0;const s=Ce(Q,`gaugeSheets/${n}/wells/${e}/production`),i=await Se(s);r.production=i.docs.map(d=>{var p,g;return{...d.data(),date:((g=(p=d.data().date)==null?void 0:p.toDate)==null?void 0:g.call(p))||new Date(d.data().date)}});const o=Ce(Q,`gaugeSheets/${n}/wells/${e}/wellTests`),l=await Se(o);r.wellTests=l.docs.map(d=>{var p,g;return{...d.data(),date:((g=(p=d.data().date)==null?void 0:p.toDate)==null?void 0:g.call(p))||new Date(d.data().date)}});const c=Be(Q,`gaugeSheets/${n}/wells`,e),h=await Oc(c);if(h.exists()){const d=h.data();r.pressureReadings=d.pressureReadings||[],r.chemicalProgram=d.chemicalProgram||{},r.failureHistory=d.failureHistory||[],r.actionItems=d.actionItems||[]}return r._detailsLoaded=!0,r._summaryOnly=!1,A.loadedWells||(A.loadedWells={}),A.loadedWells[n]||(A.loadedWells[n]=[]),A.loadedWells[n].includes(e)||A.loadedWells[n].push(e),console.log(`Loaded full details for well ${e}`),!0}catch(t){return console.error(`Error loading well details for ${e}:`,t),!1}}async function sT(n){try{console.log(`Loading aggregate data for ${n}...`);const e=A.appData[n];if(!e)return console.error(`Sheet ${n} not found in appData`),!1;const t=Ce(Q,`gaugeSheets/${n}/batteryProduction`),r=await Se(t);e.batteryProduction=r.docs.map(o=>{var l,c;return{...o.data(),date:((c=(l=o.data().date)==null?void 0:l.toDate)==null?void 0:c.call(l))||new Date(o.data().date)}});const s=Ce(Q,`gaugeSheets/${n}/runTickets`),i=await Se(s);return e.runTickets=i.docs.map(o=>o.data()),e._aggregateLoaded=!0,console.log(`Loaded aggregate data for ${n}`),!0}catch(e){return console.error(`Error loading aggregate data for ${n}:`,e),!1}}function Cn(n){if(!n)return"-";try{const e=new Date(n);return isNaN(e.getTime())?n:e.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"2-digit"})}catch{return n}}function go(n){if(!n)return"";try{const e=new Date(n);return isNaN(e.getTime())?"":e.toISOString().split("T")[0]}catch{return""}}function Ud(n){if(!n)return"";const e=document.createElement("div");return e.textContent=n,e.innerHTML}function pa(n,e=null,t=null){const r=document.getElementById("productionChartsWrapper");A.currentWellData=n,Object.values(A.wellProductionCharts).forEach(h=>{h&&h.destroy()}),A.wellProductionCharts={},r.innerHTML="";const s=n.production||[],i=n.wellTests||[],o=s.filter(h=>h.date).map(h=>new Date(h.date)).filter(h=>!isNaN(h.getTime()));o.length>0&&(A.productionDateRange.min=new Date(Math.min(...o)),A.productionDateRange.max=new Date(Math.max(...o)),iT(e,t));const c=[{key:"oil",label:"Oil (BBL)",unit:"BBL",color:"#78716c",dataKey:"oil",source:"production"},{key:"water",label:"Water (BBL)",unit:"BBL",color:"#3b82f6",dataKey:"water",source:"production"},{key:"gas",label:"Gas (MCF)",unit:"MCF",color:"#22c55e",dataKey:"gas",source:"production"}].filter(h=>(h.source==="production"?s:i).some(p=>p[h.dataKey]!==null&&p[h.dataKey]!==void 0&&!isNaN(p[h.dataKey])));if(c.length===0){r.innerHTML='<div class="chart-placeholder">No production data available</div>';return}c.forEach(h=>{const d=document.createElement("div");d.className="chart-section",d.innerHTML=`
            <div class="chart-label">${h.label}</div>
            <div class="canvas-wrapper">
                <canvas id="chart-${h.key}"></canvas>
            </div>
        `,r.appendChild(d);let g=(h.source==="production"?s:i).filter(P=>P.date&&P[h.dataKey]!==null&&P[h.dataKey]!==void 0).map(P=>({x:new Date(P.date),y:Number(P[h.dataKey])})).filter(P=>!isNaN(P.y)).sort((P,R)=>P.x-R.x);(e||t)&&(g=g.filter(P=>{const R=P.x.getTime();return!(e&&R<e.getTime()||t&&R>t.getTime())}));const S=document.getElementById(`chart-${h.key}`).getContext("2d");A.wellProductionCharts[h.key]=new Chart(S,{type:"scatter",data:{datasets:[{label:h.label,data:g,backgroundColor:h.color,borderColor:h.color,pointRadius:3,pointHoverRadius:5}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#282c33",titleColor:"#e8e9eb",bodyColor:"#e8e9eb",callbacks:{title:P=>new Date(P[0].parsed.x).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),label:P=>`${h.label}: ${P.parsed.y}`}}},scales:{x:{type:"time",time:{displayFormats:{day:"MMM-yy",week:"MMM-yy",month:"MMM-yy",quarter:"MMM-yy",year:"yyyy"}},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab",maxTicksLimit:8}},y:{beginAtZero:!0,title:{display:!0,text:h.unit,color:"#9ea3ab"},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab"}}}}})})}function iT(n=null,e=null){const t=document.getElementById("productionStartDate"),r=document.getElementById("productionEndDate"),s=document.getElementById("btnResetDates");if(!t||!r||!A.productionDateRange.min||!A.productionDateRange.max)return;const i=p=>p?new Date(p).toISOString().split("T")[0]:"",o=i(A.productionDateRange.min),l=i(A.productionDateRange.max);t.min=o,t.max=l,r.min=o,r.max=l,t.value=n?i(n):o,r.value=e?i(e):l;const c=t.cloneNode(!0),h=r.cloneNode(!0),d=s.cloneNode(!0);t.parentNode.replaceChild(c,t),r.parentNode.replaceChild(h,r),s.parentNode.replaceChild(d,s),c.addEventListener("change",ru),h.addEventListener("change",ru),d.addEventListener("click",oT)}function ru(){if(!A.currentWellData)return;const n=document.getElementById("productionStartDate"),e=document.getElementById("productionEndDate"),t=n.value?new Date(n.value):null,r=e.value?new Date(e.value+"T23:59:59"):null;pa(A.currentWellData,t,r)}function oT(){A.currentWellData&&pa(A.currentWellData,null,null)}let yo=null;function aT(n){yo=n}function lT(){document.querySelectorAll(".btn-edit[data-edit]").forEach(i=>{const o=i.cloneNode(!0);i.parentNode.replaceChild(o,i),o.addEventListener("click",l=>{l.stopPropagation();const c=o.dataset.edit;cT(c)})});const e=document.getElementById("btnCloseModal"),t=document.getElementById("btnCancelEdit"),r=document.getElementById("editModalOverlay"),s=document.getElementById("btnSaveEdit");if(e){const i=e.cloneNode(!0);e.parentNode.replaceChild(i,e),i.addEventListener("click",ds)}if(t){const i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),i.addEventListener("click",ds)}if(r){const i=r.cloneNode(!0);r.parentNode.replaceChild(i,r),i.addEventListener("click",ds)}if(s){const i=s.cloneNode(!0);s.parentNode.replaceChild(i,s),i.addEventListener("click",yT)}}function cT(n){if(!A.currentSheet||!A.currentWell)return;const e=A.appData[A.currentSheet];if(!e||!e.wells)return;const t=e.wells.find(l=>l.id===A.currentWell);if(!t)return;A.currentEditSection=n;const r=document.getElementById("editModal"),s=document.getElementById("editModalTitle"),i=document.getElementById("editModalBody"),o={chemicalProgram:"Edit Chemical Program",failureHistory:"Edit Failure History",actionItems:"Edit Action Items",pressureReadings:"Edit Pressure Readings"};switch(s.textContent=o[n]||"Edit",n){case"chemicalProgram":i.innerHTML=uT(t.chemicalProgram||{});break;case"failureHistory":i.innerHTML=hT(t.failureHistory||[]),dT();break;case"actionItems":i.innerHTML=fT(t.actionItems||[]),pT();break;case"pressureReadings":i.innerHTML=mT(t.pressureReadings||[]),gT();break}r.classList.add("visible")}function ds(){document.getElementById("editModal").classList.remove("visible"),A.currentEditSection=null}function uT(n){const e=n.continuous||{},t=n.truckTreat||{};return`
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
    `}function hT(n){let e="";return n.length>0&&(e=n.map((t,r)=>`
            <tr data-row-index="${r}">
                <td><input type="date" class="edit-table-input" name="dateDown" value="${go(t.dateDown)}"></td>
                <td><input type="date" class="edit-table-input" name="dateUp" value="${go(t.dateUp)}"></td>
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
    `}function dT(){const n=document.getElementById("btnAddFailureRow"),e=document.getElementById("failureEditBody");n&&n.addEventListener("click",()=>{const t=document.createElement("tr");t.innerHTML=`
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
            `,e.appendChild(t),Vs(t.querySelector(".btn-delete-row"))}),e.querySelectorAll(".btn-delete-row").forEach(t=>{Vs(t)})}function fT(n){let e="";return n.length>0?e=n.map((t,r)=>`
            <div class="action-item-row" data-item-index="${r}">
                <input type="text" class="edit-form-input" name="actionItem" value="${Ud(t)}">
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
    `}function pT(){const n=document.getElementById("btnAddActionItem"),e=document.getElementById("newActionItem"),t=document.getElementById("actionItemsEditor"),r=()=>{const s=e.value.trim();if(!s)return;const i=t.querySelector(".action-items-empty");i&&i.remove();const o=document.createElement("div");o.className="action-item-row",o.innerHTML=`
            <input type="text" class="edit-form-input" name="actionItem" value="${Ud(s)}">
            <button type="button" class="btn-delete-item" title="Delete item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        `,t.appendChild(o),su(o.querySelector(".btn-delete-item")),e.value="",e.focus()};n&&n.addEventListener("click",r),e&&e.addEventListener("keypress",s=>{s.key==="Enter"&&(s.preventDefault(),r())}),t.querySelectorAll(".btn-delete-item").forEach(s=>{su(s)})}function su(n){n.addEventListener("click",()=>{n.closest(".action-item-row").remove();const t=document.getElementById("actionItemsEditor");t.querySelectorAll(".action-item-row").length===0&&(t.innerHTML='<div class="action-items-empty">No action items. Add one below.</div>')})}function mT(n){let e="";return n.length>0&&(e=n.map((t,r)=>`
            <tr data-row-index="${r}">
                <td><input type="date" class="edit-table-input" name="date" value="${go(t.date)}"></td>
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
    `}function gT(){const n=document.getElementById("btnAddPressureRow"),e=document.getElementById("pressureEditBody");n&&n.addEventListener("click",()=>{const t=document.createElement("tr");t.innerHTML=`
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
            `,e.appendChild(t),Vs(t.querySelector(".btn-delete-row"))}),e.querySelectorAll(".btn-delete-row").forEach(t=>{Vs(t)})}function Vs(n){n.addEventListener("click",()=>{n.closest("tr").remove()})}async function yT(){if(!A.currentSheet||!A.currentWell||!A.currentEditSection)return;const n=A.appData[A.currentSheet];if(!n||!n.wells)return;const e=n.wells.findIndex(s=>s.id===A.currentWell);if(e===-1)return;const t=n.wells[e],r={};switch(A.currentEditSection){case"chemicalProgram":t.chemicalProgram=_T(),r.chemicalProgram=t.chemicalProgram;break;case"failureHistory":t.failureHistory=wT(),r.failureHistory=t.failureHistory;break;case"actionItems":t.actionItems=ET(),r.actionItems=t.actionItems;break;case"pressureReadings":t.pressureReadings=TT(),r.pressureReadings=t.pressureReadings;break}await YE(A.currentSheet,A.currentWell,r),ds(),yo&&yo(A.currentSheet,A.currentWell)}function _T(){var n,e,t,r,s,i;return{continuous:{rate:((n=document.getElementById("editChemContRate"))==null?void 0:n.value)||"",chems:((e=document.getElementById("editChemContChems"))==null?void 0:e.value)||"",ppm:((t=document.getElementById("editChemContPPM"))==null?void 0:t.value)||""},truckTreat:{rate:((r=document.getElementById("editChemTruckRate"))==null?void 0:r.value)||"",chems:((s=document.getElementById("editChemTruckChems"))==null?void 0:s.value)||"",ppm:((i=document.getElementById("editChemTruckPPM"))==null?void 0:i.value)||""}}}function wT(){const e=document.getElementById("failureEditBody").querySelectorAll("tr"),t=[];return e.forEach(r=>{var d,p,g,S,P,R;const s=(d=r.querySelector('input[name="dateDown"]'))==null?void 0:d.value,i=(p=r.querySelector('input[name="dateUp"]'))==null?void 0:p.value,o=(g=r.querySelector('input[name="downtime"]'))==null?void 0:g.value,l=(S=r.querySelector('input[name="oil"]'))==null?void 0:S.value,c=(P=r.querySelector('input[name="reason"]'))==null?void 0:P.value,h=(R=r.querySelector('input[name="comments"]'))==null?void 0:R.value;(s||i||o||l||c||h)&&t.push({dateDown:s||null,dateUp:i||null,downtime:o?Number(o):null,oil:l?Number(l):null,reason:c||"",comments:h||""})}),t}function ET(){const e=document.getElementById("actionItemsEditor").querySelectorAll('input[name="actionItem"]'),t=[];return e.forEach(r=>{const s=r.value.trim();s&&t.push(s)}),t}function TT(){const e=document.getElementById("pressureEditBody").querySelectorAll("tr"),t=[];return e.forEach(r=>{var h,d,p,g,S;const s=(h=r.querySelector('input[name="date"]'))==null?void 0:h.value,i=(d=r.querySelector('input[name="casingPsi"]'))==null?void 0:d.value,o=(p=r.querySelector('input[name="tubingPsi"]'))==null?void 0:p.value,l=(g=r.querySelector('input[name="flowlinePsi"]'))==null?void 0:g.value,c=(S=r.querySelector('input[name="injVol"]'))==null?void 0:S.value;(s||i||o||l||c)&&t.push({date:s||null,casingPsi:i?Number(i):null,tubingPsi:o?Number(o):null,flowlinePsi:l?Number(l):null,injVol:c?Number(c):null})}),t}function vT(){let n=0,e=0,t=0;const r=new Date;return r.setHours(23,59,59,999),Object.keys(A.appData).forEach(s=>{const i=A.appData[s];if(i)if(i.batteryProduction&&i.batteryProduction.length>0){const o=i.batteryProduction.filter(l=>new Date(l.date)<=r);if(o.length>0){o.sort((c,h)=>new Date(h.date)-new Date(c.date));const l=o[0];l.oil!==null&&!isNaN(l.oil)&&(n+=Number(l.oil)),l.water!==null&&!isNaN(l.water)&&(e+=Number(l.water)),l.gas!==null&&!isNaN(l.gas)&&(t+=Math.max(0,Number(l.gas)))}}else i.wells&&i.wells.length>0&&i.wells.forEach(o=>{if(o.status!=="inactive"&&o.wellTests&&o.wellTests.length>0){const l=o.wellTests.filter(c=>new Date(c.date)<=r);if(l.length>0){const c=l[0];c.oil!==null&&!isNaN(c.oil)&&(n+=Number(c.oil)),c.water!==null&&!isNaN(c.water)&&(e+=Number(c.water)),c.gas!==null&&!isNaN(c.gas)&&(t+=Math.max(0,Number(c.gas)))}}})}),{totalOil:Math.round(n*100)/100,totalWater:Math.round(e*100)/100,totalGas:Math.round(t*100)/100}}function IT(n="oil",e=null,t=null,r="month",s=null){const i=new Map;let o=null,l=null;const c=new Date;c.setHours(23,59,59,999);const h=p=>{const g=new Date(p);if(r==="week"){const S=g.getUTCDay(),P=S===0?-6:1-S;g.setUTCDate(g.getUTCDate()+P)}else r==="month"&&g.setUTCDate(1);return g.setUTCHours(0,0,0,0),g};Object.keys(A.appData).forEach(p=>{const g=A.appData[p];if(!g||s&&!s.has(p))return;(g.batteryProduction||[]).forEach(P=>{if(!P.date)return;const R=new Date(P.date);if(isNaN(R.getTime())||R>c)return;let N=P[n];if(N==null||isNaN(N))return;n==="gas"&&N<0&&(N=0);const F=h(R);(!o||F<o)&&(o=F),(!l||F>l)&&(l=F);const O=F.toISOString().split("T")[0],q=i.get(O)||0;i.set(O,q+Number(N))})});let d=Array.from(i.entries()).map(([p,g])=>({x:new Date(p),y:g})).sort((p,g)=>p.x-g.x);return(e||t)&&(d=d.filter(p=>{const g=p.x.getTime();return!(e&&g<e.getTime()||t&&g>t.getTime())})),{data:d,dateRange:{min:o,max:l}}}function CT(n=10){const e=[],t=new Date;return t.setHours(23,59,59,999),Object.keys(A.appData).forEach(r=>{const s=A.appData[r],i=Qe.find(o=>o.id===r);s&&s.wells&&i&&s.wells.forEach(o=>{if(o.status==="inactive")return;let l=null,c=null;if(o.wellTests&&o.wellTests.length>0){const h=o.wellTests.filter(d=>new Date(d.date)<=t);if(h.length>0){const d=h[0];l=d.oil,c=d.water}}e.push({wellId:o.id,wellName:o.name,sheetId:r,batteryName:i.name,oil:l!==null?Math.round(Number(l)*100)/100:0,water:c!==null?Math.round(Number(c)*100)/100:0})})}),e.sort((r,s)=>s.oil-r.oil),e.slice(0,n)}function ST(n=10){const e=[],t=new Date;return t.setHours(23,59,59,999),Object.keys(A.appData).forEach(r=>{const s=A.appData[r],i=Qe.find(o=>o.id===r);s&&s.wells&&i&&s.wells.forEach(o=>{o.status!=="inactive"&&o.wellTests&&o.wellTests.length>0&&o.wellTests.forEach(l=>{if(l.date){const c=new Date(l.date);if(c>t)return;e.push({date:c,wellId:o.id,wellName:o.name,sheetId:r,batteryName:i.name,oil:l.oil!==null?Math.round(l.oil*100)/100:null,water:l.water!==null?Math.round(l.water*100)/100:null,gas:l.gas!==null?Math.round(Math.max(0,l.gas)*100)/100:null})}})})}),e.sort((r,s)=>s.date-r.date),e.slice(0,n)}function bT(n=15){const e=[];return Object.keys(A.appData).forEach(t=>{const r=A.appData[t],s=Qe.find(i=>i.id===t);r&&r.wells&&s&&r.wells.forEach(i=>{i.status!=="inactive"&&i.actionItems&&i.actionItems.length>0&&i.actionItems.forEach(o=>{o&&o.trim()&&e.push({content:o,wellId:i.id,wellName:i.name,sheetId:t,batteryName:s.name})})})}),e.slice(0,n)}function $d(){return Object.keys(A.appData).some(n=>A.appData[n]&&A.appData[n].wells&&A.appData[n].wells.length>0)}const AT={id:"cowden",name:"Cowden",expectedFileName:"Cowden Gauge Sheet1.xlsx",wells:[{id:"601h",name:"Cowden 601H",oilCol:1,waterCol:2,gasCol:3},{id:"602h",name:"Cowden 602H",oilCol:7,waterCol:8,gasCol:9},{id:"angus",name:"Angus 7-18-1H",oilCol:13,waterCol:14,gasCol:15}],pressureConfig:{sheet:"Cowden",headerRowIndex:6,dateCol:0,wells:{"601h":{csg:28,tbg:29,fl:30,inj:31},"602h":{csg:33,tbg:34,fl:35,inj:40},angus:{csg:42,tbg:43,fl:44,inj:47}}},productionConfig:{sheet:"Cowden",headerRowIndex:6,dateCol:0,oilProdCol:24,waterProdCol:25,gasProdCol:26},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.wells.length>0&&this.applyPressureReadings(n,e.wells),e.batteryProduction=this.parseBatteryProduction(n),n.Sheets["Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=this.wells.map(s=>({id:s.id,name:s.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let s=4;s<e.length;s++){const i=e[s];if(!i||!i[0])continue;const o=i[0];let l=null;if(o instanceof Date)l=o.toISOString().split("T")[0];else if(typeof o=="number"){const c=XLSX.SSF.parse_date_code(o);c&&(l=`${c.y}-${String(c.m).padStart(2,"0")}-${String(c.d).padStart(2,"0")}`)}else typeof o=="string"&&(l=o.split(" ")[0]);l&&(r++,this.wells.forEach((c,h)=>{const d=this.parseNumber(i[c.oilCol]),p=this.parseNumber(i[c.waterCol]),g=this.parseNumber(i[c.gasCol]);(d!==null||p!==null||g!==null)&&(t[h].wellTests.push({date:l,oil:d,water:p,gas:g}),t[h].production.push({date:new Date(l),oil:d,water:p,gas:g}))}))}return t.forEach(s=>{s.wellTests.sort((i,o)=>new Date(o.date)-new Date(i.date)),s.wellTests=s.wellTests.slice(0,60),s.production.sort((i,o)=>i.date-o.date)}),{wells:t,rowCount:r}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[];for(let i=e.headerRowIndex+2;i<r.length;i++){const o=r[i];if(!o)continue;const l=this.parseDate(o[e.dateCol]);if(!l)continue;const c=this.parseNumber(o[e.oilProdCol]),h=this.parseNumber(o[e.waterProdCol]),d=e.gasProdCol!==null?this.parseNumber(o[e.gasProdCol]):null;(c!==null||h!==null||d!==null)&&s.push({date:new Date(l),oil:c,water:h,gas:d})}return s.sort((i,o)=>i.date-o.date),s},applyPressureReadings(n,e){const t=this.pressureConfig;if(!t)return;const r=n.Sheets[t.sheet];if(!r)return;const s=XLSX.utils.sheet_to_json(r,{header:1,defval:null});if(!s||s.length===0)return;const i={};e.forEach(o=>{i[o.id]=[]});for(let o=t.headerRowIndex+1;o<s.length;o++){const l=s[o];if(!l)continue;const c=this.parseDate(l[t.dateCol]);c&&Object.entries(t.wells).forEach(([h,d])=>{if(!i[h])return;const p=this.parseNumber(l[d.csg]),g=this.parseNumber(l[d.tbg]),S=this.parseNumber(l[d.fl]),P=this.parseNumber(l[d.inj]);(p!==null||g!==null||S!==null||P!==null)&&i[h].push({date:c,casingPsi:p,tubingPsi:g,flowlinePsi:S,injVol:P})})}e.forEach(o=>{const l=i[o.id]||[];l.sort((c,h)=>new Date(h.date)-new Date(c.date)),o.pressureReadings=l.slice(0,60)})},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[];for(let r=3;r<e.length;r++){const s=e[r];if(!s)continue;const i=s[1];if(!i)continue;let o=null;const l=s[0];if(l)if(l instanceof Date)o=l.toISOString().split("T")[0];else if(typeof l=="number"){const c=XLSX.SSF.parse_date_code(l);c&&(o=`${c.y}-${String(c.m).padStart(2,"0")}-${String(c.d).padStart(2,"0")}`)}else typeof l=="string"&&l.trim()&&(o=l.split(" ")[0]);t.push({date:o,ticketNum:String(i),tank:this.parseNumber(s[2]),ftTop:this.parseNumber(s[3]),inTop:this.parseNumber(s[4]),ftBttm:this.parseNumber(s[5]),inBttm:this.parseNumber(s[6]),calcVol:this.parseNumber(s[7]),vol:this.parseNumber(s[8]),gravity:this.parseNumber(s[9]),bsw:this.parseNumber(s[10])})}return t.sort((r,s)=>!r.date&&!s.date?0:r.date?s.date?new Date(s.date)-new Date(r.date):-1:1),t.slice(0,100)},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},PT={id:"bigmax",name:"Big Max",expectedFileName:"Big Max Gauge Sheet.xlsx",wells:[{id:"bigmax-1-1",name:"Big Max 1 #1",oilCol:1,waterCol:2,gasCol:3,status:"active"},{id:"bigmax-4-1",name:"Big Max 4 #1",oilCol:7,waterCol:8,gasCol:9,status:"active"},{id:"bigmax-5-2",name:"Big Max 5 #2",oilCol:13,waterCol:14,gasCol:15,status:"active"},{id:"bigmax-11-1",name:"Big Max 11 #1",oilCol:19,waterCol:20,gasCol:21,status:"active"},{id:"bigmax-11-2",name:"Big Max 11 #2",oilCol:25,waterCol:26,gasCol:27,status:"active"},{id:"bigmax-12-1",name:"Big Max 12 #1",oilCol:31,waterCol:32,gasCol:33,status:"active"},{id:"bigmax-12-2",name:"Big Max 12 #2",oilCol:37,waterCol:38,gasCol:39,status:"active"},{id:"bigmax-13-3",name:"Big Max 13 #3",oilCol:43,waterCol:44,gasCol:45,status:"active"},{id:"bigmax-13-5",name:"Big Max 13 #5",oilCol:49,waterCol:50,gasCol:51,status:"active"},{id:"bigmax-14-4",name:"Big Max 14 #4",oilCol:55,waterCol:56,gasCol:57,status:"active"},{id:"bigmax-swd",name:"Big Max 12-101 SWD",oilCol:61,waterCol:62,gasCol:63,status:"active",wellType:"swd"}],parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return n.Sheets["Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=this.wells.map(s=>({id:s.id,name:s.name,status:s.status||"active",wellType:s.wellType||"production",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let s=4;s<e.length;s++){const i=e[s];if(!i||!i[0])continue;const o=this.parseDate(i[0]);o&&(r++,this.wells.forEach((l,c)=>{let h=this.parseNumber(i[l.oilCol]),d=this.parseNumber(i[l.waterCol]),p=this.parseNumber(i[l.gasCol]);l.id==="bigmax-swd"&&(d=h,h=0,p=0),(h!==null||d!==null||p!==null)&&(t[c].wellTests.push({date:o,oil:h,water:d,gas:p}),t[c].production.push({date:new Date(o),oil:h,water:d,gas:p}))}))}return t.forEach(s=>{s.wellTests.sort((i,o)=>new Date(o.date)-new Date(i.date)),s.wellTests=s.wellTests.slice(0,60),s.production.sort((i,o)=>i.date-o.date)}),{wells:t,rowCount:r}},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[];for(let r=3;r<e.length;r++){const s=e[r];!s||!s[1]||t.push({date:this.parseDate(s[0]),ticketNum:String(s[1]||""),tank:this.parseNumber(s[2]),ftTop:this.parseNumber(s[3]),inTop:this.parseNumber(s[4]),ftBttm:this.parseNumber(s[5]),inBttm:this.parseNumber(s[6]),vol:this.parseNumber(s[8])})}return t.sort((r,s)=>(s.date||"").localeCompare(r.date||"")),t.slice(0,100)},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},RT={id:"bigmax1h",name:"Big Max 1H",expectedFileName:"Big Max 1H Gauge Sheet.xlsx",wells:[{id:"bigmax-1-1h",name:"Big Max 1-1H",oilCol:1,waterCol:2,gasCol:3}],productionConfig:{sheet:"Big Max 1H",headerRowIndex:6,dateCol:0,oilProdCol:21,waterProdCol:22,gasProdCol:23},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.batteryProduction=this.parseBatteryProduction(n),n.Sheets["Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=this.wells.map(s=>({id:s.id,name:s.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let s=4;s<e.length;s++){const i=e[s];if(!i||!i[0])continue;const o=this.parseDate(i[0]);o&&(r++,this.wells.forEach((l,c)=>{const h=this.parseNumber(i[l.oilCol]),d=this.parseNumber(i[l.waterCol]),p=this.parseNumber(i[l.gasCol]);(h!==null||d!==null||p!==null)&&(t[c].wellTests.push({date:o,oil:h,water:d,gas:p}),t[c].production.push({date:new Date(o),oil:h,water:d,gas:p}))}))}return t.forEach(s=>{s.wellTests.sort((i,o)=>new Date(o.date)-new Date(i.date)),s.wellTests=s.wellTests.slice(0,60),s.production.sort((i,o)=>i.date-o.date)}),{wells:t,rowCount:r}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[];for(let i=e.headerRowIndex+2;i<r.length;i++){const o=r[i];if(!o)continue;const l=this.parseDate(o[e.dateCol]);if(!l)continue;const c=this.parseNumber(o[e.oilProdCol]),h=this.parseNumber(o[e.waterProdCol]),d=e.gasProdCol!==null?this.parseNumber(o[e.gasProdCol]):null;(c!==null||h!==null||d!==null)&&s.push({date:new Date(l),oil:c,water:h,gas:d})}return s.sort((i,o)=>i.date-o.date),s},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[];for(let r=3;r<e.length;r++){const s=e[r];!s||!s[1]||t.push({date:this.parseDate(s[0]),ticketNum:String(s[1]||""),tank:this.parseNumber(s[2]),ftTop:this.parseNumber(s[3]),inTop:this.parseNumber(s[4]),ftBttm:this.parseNumber(s[5]),inBttm:this.parseNumber(s[6]),vol:this.parseNumber(s[8])})}return t.sort((r,s)=>(s.date||"").localeCompare(r.date||"")),t.slice(0,100)},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},DT={id:"southandrews",name:"South Andrews",expectedFileName:"South Andrews Gauge Sheet.xlsm",wellsPg1:[{id:"uls-1-30-6h",name:"1-30-6H",oilCol:1,waterCol:2,gasCol:3},{id:"uls-1-30-8h",name:"1-30-8H",oilCol:7,waterCol:8,gasCol:9},{id:"uls-1-31-2h",name:"1-31-2H",oilCol:13,waterCol:14,gasCol:15},{id:"uls-1-36-1h",name:"1-36-1H",oilCol:19,waterCol:20,gasCol:21},{id:"uls-1-36-2h",name:"1-36-2H",oilCol:25,waterCol:26,gasCol:27},{id:"uls-1-36-3h",name:"1-36-3H",oilCol:31,waterCol:32,gasCol:33},{id:"uls-1-36-4h",name:"1-36-4H",oilCol:37,waterCol:38,gasCol:39},{id:"uls-1-36-5h",name:"1-36-5H",oilCol:43,waterCol:44,gasCol:45},{id:"uls-1-36-6h",name:"1-36-6H",oilCol:49,waterCol:50,gasCol:51},{id:"uls-1-37-1h",name:"1-37-1H",oilCol:55,waterCol:56,gasCol:57},{id:"uls-1-37-3h",name:"1-37-3H",oilCol:61,waterCol:62,gasCol:63},{id:"uls-1-37-4h",name:"1-37-4H",oilCol:67,waterCol:68,gasCol:69},{id:"uls-1-37-6h",name:"1-37-6H",oilCol:73,waterCol:74,gasCol:75}],wellsPg2:[{id:"cobra-5h",name:"Cobra 5H",oilCol:1,waterCol:2,gasCol:3,status:"active"},{id:"cobra-3012",name:"Cobra 3012",oilCol:7,waterCol:8,gasCol:9,status:"active"},{id:"cobra-3033",name:"Cobra 3033",oilCol:13,waterCol:14,gasCol:15,status:"active"},{id:"fn-3731",name:"FN 3731",oilCol:19,waterCol:20,gasCol:21,status:"active"},{id:"pinnacle-1",name:"Pinnacle #1",oilCol:25,waterCol:26,gasCol:27,status:"active"},{id:"pinnacle-2h",name:"Pinnacle 2H",oilCol:31,waterCol:32,gasCol:33,status:"active"},{id:"sawgrass-2h",name:"Sawgrass 2H",oilCol:37,waterCol:38,gasCol:39,status:"inactive"},{id:"sawgrass-5h",name:"Sawgrass 5H",oilCol:43,waterCol:44,gasCol:45,status:"active"}],pressureConfig:[{sheet:"36-4H",headerRowIndex:8,dateCol:0,wells:{"uls-1-36-1h":{csg:61,tbg:62,fl:63,inj:64},"uls-1-36-2h":{csg:68,tbg:69,fl:70,inj:71},"uls-1-36-3h":{csg:73,tbg:74,fl:75,inj:76},"uls-1-36-4h":{csg:78,tbg:79,fl:80,inj:81},"uls-1-36-5h":{csg:86,tbg:87,fl:88,inj:89},"uls-1-36-6h":{csg:91,tbg:92,fl:93,inj:94},"uls-1-37-1h":{csg:96,tbg:97,fl:98,inj:99},"uls-1-37-3h":{csg:101,tbg:102,fl:103,inj:104}}},{sheet:"37-6H",headerRowIndex:8,dateCol:0,wells:{"uls-1-31-2h":{csg:34,tbg:35,fl:36,inj:37},"uls-1-37-4h":{csg:39,tbg:40,fl:41,inj:42},"uls-1-37-6h":{csg:44,tbg:45,fl:46,inj:47},"uls-1-30-6h":{csg:49,tbg:50,fl:51,inj:52},"uls-1-30-8h":{csg:54,tbg:55,fl:56,inj:57}}}],productionConfig:[{sheet:"36-4H",headerRowIndex:8,dateCol:0,oilProdCol:56,waterProdCol:57,gasProdCol:58},{sheet:"37-6H",headerRowIndex:8,dateCol:0,oilProdCol:29,waterProdCol:30,gasProdCol:31}],parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test pg1"]){const t=this.parseWellTestSheet(n.Sheets["Well Test pg1"],this.wellsPg1);e.wells.push(...t.wells),e.rawRowCount=t.rowCount}if(n.Sheets["Well Test pg2"]){const t=this.parseWellTestSheet(n.Sheets["Well Test pg2"],this.wellsPg2);e.wells.push(...t.wells)}return e.wells.length>0&&this.applyPressureReadings(n,e.wells),e.batteryProduction=this.parseBatteryProduction(n),["36-4H Tickets","37-6H Tickets","36 6H Tickets"].forEach(t=>{if(n.Sheets[t]){const r=this.parseRunTicketsSheet(n.Sheets[t]);e.runTickets.push(...r)}}),e.runTickets.sort((t,r)=>(r.date||"").localeCompare(t.date||"")),e.runTickets=e.runTickets.slice(0,100),e},parseWellTestSheet(n,e){const t=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),r=e.map(i=>({id:i.id,name:i.name,status:i.status||"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let s=0;for(let i=4;i<t.length;i++){const o=t[i];if(!o||!o[0])continue;const l=this.parseDate(o[0]);l&&(s++,e.forEach((c,h)=>{const d=this.parseNumber(o[c.oilCol]),p=this.parseNumber(o[c.waterCol]),g=this.parseNumber(o[c.gasCol]);(d!==null||p!==null||g!==null)&&(r[h].wellTests.push({date:l,oil:d,water:p,gas:g}),r[h].production.push({date:new Date(l),oil:d,water:p,gas:g}))}))}return r.forEach(i=>{i.wellTests.sort((o,l)=>new Date(l.date)-new Date(o.date)),i.wellTests=i.wellTests.slice(0,60),i.production.sort((o,l)=>o.date-l.date)}),{wells:r,rowCount:s}},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[];for(let r=3;r<e.length;r++){const s=e[r];!s||!s[1]||t.push({date:this.parseDate(s[0]),ticketNum:String(s[1]||""),tank:this.parseNumber(s[2]),ftTop:this.parseNumber(s[3]),inTop:this.parseNumber(s[4]),ftBttm:this.parseNumber(s[5]),inBttm:this.parseNumber(s[6]),vol:this.parseNumber(s[8])})}return t},parseBatteryProduction(n){const e=new Map;this.productionConfig.forEach(r=>{const s=n.Sheets[r.sheet];if(!s)return;const i=XLSX.utils.sheet_to_json(s,{header:1,defval:null});if(!(!i||i.length===0))for(let o=r.headerRowIndex+2;o<i.length;o++){const l=i[o];if(!l)continue;const c=this.parseDate(l[r.dateCol]);if(!c)continue;const h=this.parseNumber(l[r.oilProdCol]),d=this.parseNumber(l[r.waterProdCol]),p=r.gasProdCol!==null?this.parseNumber(l[r.gasProdCol]):null;if(h!==null||d!==null||p!==null){const g=e.get(c);g?(g.oil=(g.oil||0)+(h||0),g.water=(g.water||0)+(d||0),g.gas=(g.gas||0)+(p||0)):e.set(c,{date:new Date(c),oil:h||0,water:d||0,gas:p||0})}}});const t=Array.from(e.values());return t.sort((r,s)=>r.date-s.date),t},applyPressureReadings(n,e){const t={};e.forEach(s=>{t[s.id]=s,s.pressureReadings=[]});const r={};Object.keys(t).forEach(s=>{r[s]=[]}),this.pressureConfig.forEach(s=>{const i=n.Sheets[s.sheet];if(!i)return;const o=XLSX.utils.sheet_to_json(i,{header:1,defval:null});if(!(!o||o.length===0))for(let l=s.headerRowIndex+1;l<o.length;l++){const c=o[l];if(!c)continue;const h=this.parseDate(c[s.dateCol]);h&&Object.entries(s.wells).forEach(([d,p])=>{if(!r[d])return;const g=this.parseNumber(c[p.csg]),S=this.parseNumber(c[p.tbg]),P=this.parseNumber(c[p.fl]),R=this.parseNumber(c[p.inj]);(g!==null||S!==null||P!==null||R!==null)&&r[d].push({date:h,casingPsi:g,tubingPsi:S,flowlinePsi:P,injVol:R})})}}),e.forEach(s=>{const i=r[s.id]||[];i.sort((o,l)=>new Date(l.date)-new Date(o.date)),s.pressureReadings=i.slice(0,60)})},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},kT={id:"polaris",name:"Polaris",expectedFileName:"Polaris Gauge Sheet.xlsx",wells:[{id:"polaris-1",name:"Polaris #1",oilCol:1,waterCol:2,gasCol:3,status:"active"},{id:"polaris-2",name:"Polaris #2",oilCol:5,waterCol:6,gasCol:7,status:"inactive"}],productionConfig:{sheet:"Polaris 1",headerRowIndex:3,dateCol:0,oilProdCol:16,waterProdCol:17,gasProdCol:null},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.batteryProduction=this.parseBatteryProduction(n),n.Sheets["Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=this.wells.map(s=>({id:s.id,name:s.name,status:s.status||"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let s=4;s<e.length;s++){const i=e[s];if(!i||!i[0])continue;const o=this.parseDate(i[0]);o&&(r++,this.wells.forEach((l,c)=>{const h=this.parseNumber(i[l.oilCol]),d=this.parseNumber(i[l.waterCol]),p=this.parseNumber(i[l.gasCol]);(h!==null||d!==null||p!==null)&&(t[c].wellTests.push({date:o,oil:h,water:d,gas:p}),t[c].production.push({date:new Date(o),oil:h,water:d,gas:p}))}))}return t.forEach(s=>{s.wellTests.sort((i,o)=>new Date(o.date)-new Date(i.date)),s.wellTests=s.wellTests.slice(0,60),s.production.sort((i,o)=>i.date-o.date)}),{wells:t,rowCount:r}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[];for(let i=e.headerRowIndex+2;i<r.length;i++){const o=r[i];if(!o)continue;const l=this.parseDate(o[e.dateCol]);if(!l)continue;const c=this.parseNumber(o[e.oilProdCol]),h=this.parseNumber(o[e.waterProdCol]),d=e.gasProdCol!==null?this.parseNumber(o[e.gasProdCol]):null;(c!==null||h!==null||d!==null)&&s.push({date:new Date(l),oil:c,water:h,gas:d})}return s.sort((i,o)=>i.date-o.date),s},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[];for(let r=3;r<e.length;r++){const s=e[r];!s||!s[1]||t.push({date:this.parseDate(s[0]),ticketNum:String(s[1]||""),tank:this.parseNumber(s[2]),ftTop:this.parseNumber(s[3]),inTop:this.parseNumber(s[4]),ftBttm:this.parseNumber(s[5]),inBttm:this.parseNumber(s[6]),vol:this.parseNumber(s[8])})}return t.sort((r,s)=>(s.date||"").localeCompare(r.date||"")),t.slice(0,100)},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},NT={id:"shusa",name:"Shusa",expectedFileName:"Shusa Gauge Sheet.xlsx",wells20RB:[{id:"shusa-20-1",name:"Shusa 20 #1",oilCol:1,waterCol:2,gasCol:null},{id:"shusa-20-2",name:"Shusa 20 #2",oilCol:5,waterCol:6,gasCol:null},{id:"shusa-20-3",name:"Shusa 20 #3",oilCol:9,waterCol:10,gasCol:null},{id:"shusa-20-4",name:"Shusa 20 #4",oilCol:13,waterCol:14,gasCol:null},{id:"shusa-20-5",name:"Shusa 20 #5",oilCol:17,waterCol:18,gasCol:null},{id:"rosebud-20-1",name:"Rosebud 20 #1",oilCol:21,waterCol:22,gasCol:null},{id:"rosebud-20-3",name:"Rosebud 20 #3",oilCol:25,waterCol:26,gasCol:null},{id:"rosebud-20-4",name:"Rosebud 20 #4",oilCol:29,waterCol:30,gasCol:null},{id:"rosebud-yates-1",name:"Rosebud-Yates #1",oilCol:33,waterCol:34,gasCol:35},{id:"link-2",name:"Link #2",oilCol:39,waterCol:40,gasCol:null},{id:"link-3",name:"Link #3",oilCol:43,waterCol:44,gasCol:null},{id:"link-4",name:"Link #4",oilCol:47,waterCol:48,gasCol:null},{id:"link-5",name:"Link #5",oilCol:51,waterCol:52,gasCol:null},{id:"link-6",name:"Link #6",oilCol:55,waterCol:56,gasCol:null}],productionConfig:{sheet:"Total",headerRowIndex:2,dateCol:0,oilProdCol:2,waterProdCol:3,gasProdCol:null},wells1415:[{id:"shusa-14-1",name:"Shusa 14 #1",oilCol:4,waterCol:5,gasCol:null},{id:"shusa-14-2",name:"Shusa 14 #2",oilCol:8,waterCol:9,gasCol:null},{id:"shusa-14-3",name:"Shusa 14 #3",oilCol:12,waterCol:13,gasCol:null},{id:"shusa-14-4",name:"Shusa 14 #4",oilCol:16,waterCol:17,gasCol:null},{id:"shusa-14-5",name:"Shusa 14 #5",oilCol:20,waterCol:21,gasCol:null},{id:"shusa-14-6",name:"Shusa 14 #6",oilCol:24,waterCol:25,gasCol:null},{id:"shusa-14-7",name:"Shusa 14 #7",oilCol:28,waterCol:29,gasCol:null},{id:"shusa-14-8",name:"Shusa 14 #8",oilCol:32,waterCol:33,gasCol:null},{id:"shusa-14-9",name:"Shusa 14 #9",oilCol:36,waterCol:37,gasCol:null},{id:"shusa-14-10",name:"Shusa 14 #10",oilCol:40,waterCol:41,gasCol:null},{id:"shusa-14-12",name:"Shusa 14 #12",oilCol:44,waterCol:45,gasCol:null},{id:"shusa-15-1",name:"Shusa 15 #1",oilCol:48,waterCol:49,gasCol:null},{id:"shusa-15-2",name:"Shusa 15 #2",oilCol:52,waterCol:53,gasCol:null},{id:"shusa-15-3",name:"Shusa 15 #3",oilCol:56,waterCol:57,gasCol:null},{id:"shusa-15-4",name:"Shusa 15 #4",oilCol:60,waterCol:61,gasCol:null},{id:"shusa-15-6",name:"Shusa 15 #6",oilCol:64,waterCol:65,gasCol:null},{id:"shusa-15-7",name:"Shusa 15 #7",oilCol:68,waterCol:69,gasCol:null},{id:"shusa-15-8",name:"Shusa 15 #8",oilCol:72,waterCol:73,gasCol:null},{id:"shusa-15-9",name:"Shusa 15 #9",oilCol:76,waterCol:77,gasCol:null},{id:"shusa-15-10",name:"Shusa 15 #10",oilCol:80,waterCol:81,gasCol:null},{id:"shusa-15-11",name:"Shusa 15 #11",oilCol:84,waterCol:85,gasCol:null},{id:"shusa-15-12",name:"Shusa 15 #12",oilCol:88,waterCol:89,gasCol:null},{id:"shusa-15-13",name:"Shusa 15 #13",oilCol:92,waterCol:93,gasCol:null},{id:"shusa-15-14",name:"Shusa 15 #14",oilCol:96,waterCol:97,gasCol:null},{id:"shusa-15-15",name:"Shusa 15 #15",oilCol:100,waterCol:101,gasCol:null},{id:"shusa-15-16",name:"Shusa 15 #16",oilCol:104,waterCol:105,gasCol:null}],parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test 20 RB Link"]){const t=this.parseWellTestSheet(n.Sheets["Well Test 20 RB Link"],this.wells20RB);e.wells.push(...t.wells),e.rawRowCount=t.rowCount}if(n.Sheets["Well Test 14 15"]){const t=this.parseWellTestSheet(n.Sheets["Well Test 14 15"],this.wells1415);e.wells.push(...t.wells)}return e.batteryProduction=this.parseBatteryProduction(n),["14-15 Run Tickets","20-RB Run Tickets","Link Run Tickets","Yates Run Tickets"].forEach(t=>{if(n.Sheets[t]){const r=this.parseRunTicketsSheet(n.Sheets[t]);e.runTickets.push(...r)}}),e.runTickets.sort((t,r)=>(r.date||"").localeCompare(t.date||"")),e.runTickets=e.runTickets.slice(0,100),e},parseWellTestSheet(n,e){const t=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),r=e.map(i=>({id:i.id,name:i.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let s=0;for(let i=4;i<t.length;i++){const o=t[i];if(!o||!o[0])continue;const l=this.parseDate(o[0]);l&&(s++,e.forEach((c,h)=>{const d=this.parseNumber(o[c.oilCol]),p=this.parseNumber(o[c.waterCol]),g=c.gasCol!==null?this.parseNumber(o[c.gasCol]):null;(d!==null||p!==null||g!==null)&&(r[h].wellTests.push({date:l,oil:d,water:p,gas:g}),r[h].production.push({date:new Date(l),oil:d,water:p,gas:g}))}))}return r.forEach(i=>{i.wellTests.sort((o,l)=>new Date(l.date)-new Date(o.date)),i.wellTests=i.wellTests.slice(0,60),i.production.sort((o,l)=>o.date-l.date)}),{wells:r,rowCount:s}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[];for(let i=e.headerRowIndex+2;i<r.length;i++){const o=r[i];if(!o)continue;const l=this.parseDate(o[e.dateCol]);if(!l)continue;const c=this.parseNumber(o[e.oilProdCol]),h=this.parseNumber(o[e.waterProdCol]),d=e.gasProdCol!==null?this.parseNumber(o[e.gasProdCol]):null;(c!==null||h!==null||d!==null)&&s.push({date:new Date(l),oil:c,water:h,gas:d})}return s.sort((i,o)=>i.date-o.date),s},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[];for(let r=3;r<e.length;r++){const s=e[r];!s||!s[1]||t.push({date:this.parseDate(s[0]),ticketNum:String(s[1]||""),tank:this.parseNumber(s[2]),ftTop:this.parseNumber(s[3]),inTop:this.parseNumber(s[4]),ftBttm:this.parseNumber(s[5]),inBttm:this.parseNumber(s[6]),vol:this.parseNumber(s[8])})}return t},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},VT={id:"mwwemac",name:"MW-Wemac-Sabrina-Berkley",expectedFileName:"Mw-Wemac-Sabrina-Berkley.xlsx",wells:[{id:"berkley-1",name:"Berkley #1",oilCol:1,waterCol:2,gasCol:3,status:"active"},{id:"berkley-4",name:"Berkley #4",oilCol:7,waterCol:8,gasCol:9,status:"inactive"},{id:"berkley-5",name:"Berkley #5",oilCol:13,waterCol:14,gasCol:15,status:"active"},{id:"berkley-6",name:"Berkley #6",oilCol:19,waterCol:20,gasCol:21,status:"active"},{id:"sabrina-5",name:"Sabrina #5",oilCol:25,waterCol:26,gasCol:27,status:"inactive"},{id:"sabrina-7",name:"Sabrina #7",oilCol:31,waterCol:32,gasCol:33,status:"inactive"},{id:"sabrina-3",name:"Sabrina #3",oilCol:37,waterCol:38,gasCol:39,status:"inactive"},{id:"sabrina-12",name:"Sabrina #12",oilCol:43,waterCol:44,gasCol:45,status:"inactive"}],productionConfig:{sheet:"Berkley",headerRowIndex:3,dateCol:0,oilProdCol:25,waterProdCol:26,gasProdCol:27},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets.Well_Test){const t=this.parseWellTestSheet(n.Sheets.Well_Test);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.batteryProduction=this.parseBatteryProduction(n),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=this.wells.map(s=>({id:s.id,name:s.name,status:s.status||"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let s=4;s<e.length;s++){const i=e[s];if(!i||!i[0])continue;const o=this.parseDate(i[0]);o&&(r++,this.wells.forEach((l,c)=>{const h=this.parseNumber(i[l.oilCol]),d=this.parseNumber(i[l.waterCol]),p=this.parseNumber(i[l.gasCol]);(h!==null||d!==null||p!==null)&&(t[c].wellTests.push({date:o,oil:h,water:d,gas:p}),t[c].production.push({date:new Date(o),oil:h,water:d,gas:p}))}))}return t.forEach(s=>{s.wellTests.sort((i,o)=>new Date(o.date)-new Date(i.date)),s.wellTests=s.wellTests.slice(0,60),s.production.sort((i,o)=>i.date-o.date)}),{wells:t,rowCount:r}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[];for(let i=e.headerRowIndex+2;i<r.length;i++){const o=r[i];if(!o)continue;const l=this.parseDate(o[e.dateCol]);if(!l)continue;const c=this.parseNumber(o[e.oilProdCol]),h=this.parseNumber(o[e.waterProdCol]),d=e.gasProdCol!==null?this.parseNumber(o[e.gasProdCol]):null;(c!==null||h!==null||d!==null)&&s.push({date:new Date(l),oil:c,water:h,gas:d})}return s.sort((i,o)=>i.date-o.date),s},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},LT={id:"unit130",name:"1-30 Unit 1H",expectedFileName:"1-30 Unit 1H Gauge Sheet.xlsx",wells:[{id:"uls-1-30-1h",name:"ULS 1-30-1H",oilCol:1,waterCol:2,gasCol:3}],pressureConfig:{sheet:"1-30-1H Gauge Sheet",headerRowIndex:5,dateCol:0,wells:{"uls-1-30-1h":{csg:37,tbg:38,fl:null,inj:39}}},productionConfig:{sheet:"1-30-1H Gauge Sheet",headerRowIndex:5,dateCol:0,oilProdCol:30,waterProdCol:31,gasProdCol:32},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.wells.length>0&&this.applyPressureReadings(n,e.wells),e.batteryProduction=this.parseBatteryProduction(n),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=this.wells.map(s=>({id:s.id,name:s.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let s=4;s<e.length;s++){const i=e[s];if(!i||!i[0])continue;const o=this.parseDate(i[0]);o&&(r++,this.wells.forEach((l,c)=>{const h=this.parseNumber(i[l.oilCol]),d=this.parseNumber(i[l.waterCol]),p=this.parseNumber(i[l.gasCol]);(h!==null||d!==null||p!==null)&&(t[c].wellTests.push({date:o,oil:h,water:d,gas:p}),t[c].production.push({date:new Date(o),oil:h,water:d,gas:p}))}))}return t.forEach(s=>{s.wellTests.sort((i,o)=>new Date(o.date)-new Date(i.date)),s.wellTests=s.wellTests.slice(0,60),s.production.sort((i,o)=>i.date-o.date)}),{wells:t,rowCount:r}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[];for(let i=e.headerRowIndex+2;i<r.length;i++){const o=r[i];if(!o)continue;const l=this.parseDate(o[e.dateCol]);if(!l)continue;const c=this.parseNumber(o[e.oilProdCol]),h=this.parseNumber(o[e.waterProdCol]),d=e.gasProdCol!==null?this.parseNumber(o[e.gasProdCol]):null;(c!==null||h!==null||d!==null)&&s.push({date:new Date(l),oil:c,water:h,gas:d})}return s.sort((i,o)=>i.date-o.date),s},applyPressureReadings(n,e){const t=this.pressureConfig;if(!t)return;const r=n.Sheets[t.sheet];if(!r)return;const s=XLSX.utils.sheet_to_json(r,{header:1,defval:null});if(!s||s.length===0)return;const i={};e.forEach(o=>{i[o.id]=[]});for(let o=t.headerRowIndex+1;o<s.length;o++){const l=s[o];if(!l)continue;const c=this.parseDate(l[t.dateCol]);c&&Object.entries(t.wells).forEach(([h,d])=>{if(!i[h])return;const p=this.parseNumber(l[d.csg]),g=this.parseNumber(l[d.tbg]),S=d.fl===null?null:this.parseNumber(l[d.fl]),P=this.parseNumber(l[d.inj]);(p!==null||g!==null||S!==null||P!==null)&&i[h].push({date:c,casingPsi:p,tubingPsi:g,flowlinePsi:S,injVol:P})})}e.forEach(o=>{const l=i[o.id]||[];l.sort((c,h)=>new Date(h.date)-new Date(c.date)),o.pressureReadings=l.slice(0,60)})},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},xT={id:"uls35h",name:"ULS 3-5H",expectedFileName:"ULS 3-5H Gauge Sheet.xlsx",wells:[{id:"uls-1-3-1h",name:"ULS 1-3-1H",oilCol:1,waterCol:2,gasCol:3},{id:"uls-1-3-3h",name:"ULS 1-3-3H",oilCol:7,waterCol:8,gasCol:9},{id:"uls-1-3-5h",name:"ULS 1-3-5H",oilCol:13,waterCol:14,gasCol:15},{id:"uls-1-3-7h",name:"ULS 1-3-7H",oilCol:19,waterCol:20,gasCol:21}],pressureConfig:{sheet:"University 3-5H",headerRowIndex:3,dateCol:0,wells:{"uls-1-3-1h":{csg:34,tbg:35,fl:36,inj:37},"uls-1-3-3h":{csg:39,tbg:40,fl:41,inj:42},"uls-1-3-5h":{csg:46,tbg:47,fl:48,inj:49},"uls-1-3-7h":{csg:51,tbg:52,fl:53,inj:54}}},productionConfig:{sheet:"University 3-5H",headerRowIndex:3,dateCol:0,oilProdCol:30,waterProdCol:31,gasProdCol:32},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.wells.length>0&&this.applyPressureReadings(n,e.wells),e.batteryProduction=this.parseBatteryProduction(n),n.Sheets["3-5H Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["3-5H Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=this.wells.map(s=>({id:s.id,name:s.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let s=4;s<e.length;s++){const i=e[s];if(!i||!i[0])continue;const o=this.parseDate(i[0]);o&&(r++,this.wells.forEach((l,c)=>{const h=this.parseNumber(i[l.oilCol]),d=this.parseNumber(i[l.waterCol]),p=this.parseNumber(i[l.gasCol]);(h!==null||d!==null||p!==null)&&(t[c].wellTests.push({date:o,oil:h,water:d,gas:p}),t[c].production.push({date:new Date(o),oil:h,water:d,gas:p}))}))}return t.forEach(s=>{s.wellTests.sort((i,o)=>new Date(o.date)-new Date(i.date)),s.wellTests=s.wellTests.slice(0,60),s.production.sort((i,o)=>i.date-o.date)}),{wells:t,rowCount:r}},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[];for(let r=3;r<e.length;r++){const s=e[r];!s||!s[1]||t.push({date:this.parseDate(s[0]),ticketNum:String(s[1]||""),tank:this.parseNumber(s[2]),ftTop:this.parseNumber(s[3]),inTop:this.parseNumber(s[4]),ftBttm:this.parseNumber(s[5]),inBttm:this.parseNumber(s[6]),vol:this.parseNumber(s[8])})}return t.sort((r,s)=>(s.date||"").localeCompare(r.date||"")),t.slice(0,100)},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[];for(let i=e.headerRowIndex+2;i<r.length;i++){const o=r[i];if(!o)continue;const l=this.parseDate(o[e.dateCol]);if(!l)continue;const c=this.parseNumber(o[e.oilProdCol]),h=this.parseNumber(o[e.waterProdCol]),d=e.gasProdCol!==null?this.parseNumber(o[e.gasProdCol]):null;(c!==null||h!==null||d!==null)&&s.push({date:new Date(l),oil:c,water:h,gas:d})}return s.sort((i,o)=>i.date-o.date),s},applyPressureReadings(n,e){const t=this.pressureConfig;if(!t)return;const r=n.Sheets[t.sheet];if(!r)return;const s=XLSX.utils.sheet_to_json(r,{header:1,defval:null});if(!s||s.length===0)return;const i={};e.forEach(o=>{i[o.id]=[]});for(let o=t.headerRowIndex+1;o<s.length;o++){const l=s[o];if(!l)continue;const c=this.parseDate(l[t.dateCol]);c&&Object.entries(t.wells).forEach(([h,d])=>{if(!i[h])return;const p=this.parseNumber(l[d.csg]),g=this.parseNumber(l[d.tbg]),S=this.parseNumber(l[d.fl]),P=this.parseNumber(l[d.inj]);(p!==null||g!==null||S!==null||P!==null)&&i[h].push({date:c,casingPsi:p,tubingPsi:g,flowlinePsi:S,injVol:P})})}e.forEach(o=>{const l=i[o.id]||[];l.sort((c,h)=>new Date(h.date)-new Date(c.date)),o.pressureReadings=l.slice(0,60)})},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},ma={CowdenParser:AT,BigMaxParser:PT,BigMax1HParser:RT,SouthAndrewsParser:DT,PolarisParser:kT,ShusaParser:NT,MWWemacParser:VT,Unit130Parser:LT,ULS35HParser:xT};function ga(n,e){if(!n||!n.wells)return e;const t={};n.wells.forEach(s=>{t[s.id]=s});const r=e.wells.map(s=>{const i=t[s.id];return i?(delete t[s.id],MT(i,s)):s});return Object.values(t).forEach(s=>{r.push(s)}),{...e,wells:r}}function MT(n,e){const t=OT(n.pressureReadings||[],e.pressureReadings||[]);return{...e,actionItems:n.actionItems||[],failureHistory:n.failureHistory||[],chemicalProgram:n.chemicalProgram||{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},pressureReadings:t}}function OT(n,e){const t={};n.forEach(s=>{if(s&&s.date){const i=iu(s.date);t[i]=s}}),e.forEach(s=>{if(s&&s.date){const i=iu(s.date);t[i]=s}});const r=Object.values(t);return r.sort((s,i)=>new Date(i.date)-new Date(s.date)),r.slice(0,60)}function iu(n){return n?typeof n=="string"?n.split("T")[0]:n instanceof Date?n.toISOString().split("T")[0]:String(n):""}function FT(){const n=document.getElementById("uploadArea"),e=document.getElementById("fileInput"),t=document.getElementById("btnReupload");n.addEventListener("click",r=>{r.target.id!=="btnReupload"&&e.click()}),t.addEventListener("click",r=>{r.stopPropagation(),e.click()}),e.addEventListener("change",r=>{const s=r.target.files[0];s&&ou(s),e.value=""}),n.addEventListener("dragover",r=>{r.preventDefault(),n.classList.add("drag-over")}),n.addEventListener("dragleave",()=>{n.classList.remove("drag-over")}),n.addEventListener("drop",r=>{r.preventDefault(),n.classList.remove("drag-over");const s=r.dataTransfer.files[0];s&&ou(s)})}async function ou(n){if(!A.currentSheet){alert("Please select a gauge sheet first");return}const e=Qe.find(o=>o.id===A.currentSheet);if(!e)return;const t=ma[e.parser];if(!t){alert(`Parser not yet implemented for ${e.name}. Coming soon!`);return}const r=document.getElementById("uploadProgress"),s=document.getElementById("progressFill"),i=document.getElementById("progressText");r.style.display="block",s.style.width="10%",i.textContent="Reading file...";try{const o=await n.arrayBuffer();s.style.width="30%",i.textContent="Parsing Excel...";const l=XLSX.read(o,{type:"array",cellDates:!0});s.style.width="60%",i.textContent="Extracting data...";const c=t.parse(l);s.style.width="90%",i.textContent="Saving...";const h=A.appData[A.currentSheet];A.appData[A.currentSheet]=ga(h,c),await da(A.currentSheet,A.appData[A.currentSheet],!1),s.style.width="100%",i.textContent="Complete!",setTimeout(()=>{r.style.display="none",s.style.width="0%",bn(),jd(A.currentSheet)},500)}catch(o){console.error("Error processing file:",o),alert("Error processing file: "+o.message),r.style.display="none"}}function BT(){const n=document.getElementById("bulkUploadArea"),e=document.getElementById("bulkFileInput");!n||!e||(n.addEventListener("click",()=>{e.click()}),e.addEventListener("change",t=>{const r=Array.from(t.target.files);r.length>0&&au(r),e.value=""}),n.addEventListener("dragover",t=>{t.preventDefault(),n.classList.add("drag-over")}),n.addEventListener("dragleave",()=>{n.classList.remove("drag-over")}),n.addEventListener("drop",t=>{t.preventDefault(),n.classList.remove("drag-over");const r=Array.from(t.dataTransfer.files);r.length>0&&au(r)}))}async function au(n){const e=document.getElementById("bulkUploadProgress"),t=document.getElementById("bulkProgressFill"),r=document.getElementById("bulkProgressText"),s=document.getElementById("bulkUploadResults");e.style.display="block",s.style.display="none",s.innerHTML="";const i=[];let o=0;for(const l of n){t.style.width=`${o/n.length*100}%`,r.textContent=`Processing ${l.name}...`;const c=Qe.find(d=>l.name.toLowerCase().includes(d.fileName.toLowerCase().replace(".xlsx","").replace(".xlsm",""))||d.fileName.toLowerCase()===l.name.toLowerCase());if(!c){i.push({name:l.name,status:"skipped",detail:"Unknown file"}),o++;continue}const h=ma[c.parser];if(!h){i.push({name:l.name,status:"skipped",detail:"No parser available"}),o++;continue}try{const d=await l.arrayBuffer(),p=XLSX.read(d,{type:"array",cellDates:!0}),g=h.parse(p),S=A.appData[c.id];A.appData[c.id]=ga(S,g),i.push({name:c.name,status:"success",detail:`${g.wells.length} wells loaded`})}catch(d){console.error(`Error processing ${l.name}:`,d),i.push({name:l.name,status:"error",detail:d.message})}o++}for(const l in A.appData)await da(l,A.appData[l],!1);t.style.width="100%",r.textContent="Complete!",setTimeout(()=>{e.style.display="none",s.style.display="block",s.innerHTML=i.map(l=>`
            <div class="bulk-result-item ${l.status}">
                <span class="result-icon">${l.status==="success"?"OK":l.status==="error"?"X":"?"}</span>
                <span class="result-name">${l.name}</span>
                <span class="result-detail">${l.detail}</span>
            </div>
        `).join(""),bn()},500)}async function UT(n){const e=document.getElementById("dashboardLoadingOverlay"),t=document.getElementById("dashboardLoadingText"),r=document.getElementById("dashboardLoadingSubtext");e.classList.add("visible"),t.textContent="Processing sheets...",r.textContent=`0 of ${n.length} files`;let s=0,i=0;await new Promise(o=>setTimeout(o,50));for(const o of n){r.textContent=`${s+1} of ${n.length}: ${o.name}`;const l=Qe.find(h=>o.name.toLowerCase().includes(h.fileName.toLowerCase().replace(".xlsx","").replace(".xlsm",""))||h.fileName.toLowerCase()===o.name.toLowerCase());if(!l){s++;continue}const c=ma[l.parser];if(!c){s++;continue}try{const h=await o.arrayBuffer(),d=XLSX.read(h,{type:"array",cellDates:!0}),p=c.parse(d),g=A.appData[l.id];A.appData[l.id]=ga(g,p),i++}catch(h){console.error(`Error processing ${o.name}:`,h)}s++,await new Promise(h=>setTimeout(h,10))}if(i>0){t.textContent="Saving to cloud...";for(const o in A.appData)await da(o,A.appData[o]);bn()}t.textContent="Complete!",r.textContent=`${i} of ${n.length} sheets updated`,setTimeout(()=>{e.classList.remove("visible")},600)}const ya='<div class="loading-placeholder"><div class="loading-spinner-small"></div><span>Loading...</span></div>';let _o=null;function $T(n){_o=n}function jT(){HT(),qT(),WT(),zT()}function HT(){const n=document.getElementById("statDailyOil"),e=document.getElementById("statDailyWater"),t=document.getElementById("statDailyGas");if(A.isLoading){n.innerHTML='<span class="loading-text">...</span>',e.innerHTML='<span class="loading-text">...</span>',t.innerHTML='<span class="loading-text">...</span>';return}const r=vT();n.textContent=r.totalOil.toLocaleString(),e.textContent=r.totalWater.toLocaleString(),t.textContent=r.totalGas.toLocaleString()}function qT(){const n=document.getElementById("topProducersBody");if(A.isLoading){n.innerHTML='<tr><td colspan="5" class="dashboard-loading">'+ya+"</td></tr>";return}const e=CT(10);if(e.length===0){n.innerHTML='<tr><td colspan="5" class="dashboard-empty">No production data available</td></tr>';return}n.innerHTML=e.map((t,r)=>`
        <tr data-well-id="${t.wellId}" data-sheet-id="${t.sheetId}">
            <td>${r+1}</td>
            <td class="well-name-cell">${t.wellName}</td>
            <td class="battery-name-cell">${t.batteryName}</td>
            <td>${t.oil>0?t.oil:"-"}</td>
            <td>${t.water>0?t.water:"-"}</td>
        </tr>
    `).join(""),n.querySelectorAll("tr[data-well-id]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.wellId,s=t.dataset.sheetId;Mn(s,r)})})}function WT(){const n=document.getElementById("recentTestsBody");if(A.isLoading){n.innerHTML='<tr><td colspan="6" class="dashboard-loading">'+ya+"</td></tr>";return}const e=ST(10);if(e.length===0){n.innerHTML='<tr><td colspan="6" class="dashboard-empty">No test data available</td></tr>';return}n.innerHTML=e.map(t=>`
        <tr data-well-id="${t.wellId}" data-sheet-id="${t.sheetId}">
            <td>${Cn(t.date)}</td>
            <td class="well-name-cell">${t.wellName}</td>
            <td class="battery-name-cell">${t.batteryName}</td>
            <td>${t.oil!==null?t.oil:"-"}</td>
            <td>${t.water!==null?t.water:"-"}</td>
            <td>${t.gas!==null?t.gas:"-"}</td>
        </tr>
    `).join(""),n.querySelectorAll("tr[data-well-id]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.wellId,s=t.dataset.sheetId;Mn(s,r)})})}function zT(){const n=document.getElementById("dashboardActionList");if(A.isLoading){n.innerHTML='<li class="dashboard-loading" style="border-left-color: #6b7280;">'+ya+"</li>";return}const e=bT(15);if(e.length===0){n.innerHTML='<li class="dashboard-empty" style="border-left-color: #6b7280; opacity: 0.7;">No action items</li>';return}n.innerHTML=e.map(t=>`
        <li data-well-id="${t.wellId}" data-sheet-id="${t.sheetId}">
            <div class="action-item-content">${t.content}</div>
            <div class="action-item-source">
                <span class="source-well">${t.wellName}</span> - ${t.batteryName}
            </div>
        </li>
    `).join(""),n.querySelectorAll("li[data-well-id]").forEach(t=>{t.style.cursor="pointer",t.addEventListener("click",()=>{const r=t.dataset.wellId,s=t.dataset.sheetId;Mn(s,r)})})}function GT(){const n=document.getElementById("btnReuploadAll"),e=document.getElementById("bulkFileInputDashboard"),t=document.getElementById("btnClearCache");n&&e&&(n.addEventListener("click",()=>{e.click()}),e.addEventListener("change",r=>{const s=Array.from(r.target.files);s.length>0&&UT(s),e.value=""})),t&&t.addEventListener("click",async()=>{confirm("Clear all data from the cloud? You will need to re-upload your gauge sheets.")&&await KT()})}async function KT(){await ZE(),_o&&_o()}function Bi(n,e,t){if(!n||n.length===0){alert("No data available to download.");return}const r=[];r.push(e.join(",")),n.forEach(c=>{const h=e.map(d=>{const p=c[d.toLowerCase().replace(/[^a-z0-9]/g,"")]??c[d]??"",g=String(p).replace(/"/g,'""');return g.includes(",")||g.includes('"')||g.includes(`
`)?`"${g}"`:g});r.push(h.join(","))});const s=r.join(`
`),i=new Blob([s],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a"),l=URL.createObjectURL(i);o.setAttribute("href",l),o.setAttribute("download",t),o.style.visibility="hidden",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(l)}function Ui(n){return n?new Date(n).toLocaleDateString("en-US"):""}function Lt(n){document.querySelectorAll(".view").forEach(r=>r.classList.remove("active"));const t={welcome:"welcomeView",gaugeSheet:"gaugeSheetView",well:"wellView",battery:"batteryView",oilChart:"oilChartView",waterChart:"waterChartView",gasChart:"gasChartView"}[n];t&&document.getElementById(t).classList.add("active")}function Sn(){const n=document.getElementById("welcomeUploadPrompt"),e=document.getElementById("operationsDashboard");$d()?(n.style.display="none",e.style.display="block",jT()):(n.style.display="block",e.style.display="none")}async function jd(n){const e=Qe.find(i=>i.id===n);if(!e)return;A.currentSheet=n,Lt("gaugeSheet"),document.getElementById("sheetName").textContent=e.name,document.getElementById("sheetBreadcrumb").textContent=`Gauge Sheet: ${e.fileName}`,document.getElementById("expectedFileName").textContent=e.fileName;const t=A.appData[n],r=document.getElementById("uploadPrompt"),s=document.getElementById("uploadStatus");if(t&&t._metadataLoaded){if(r.style.display="none",s.style.display="flex",document.getElementById("lastUploadDate").textContent=Cn(t.lastUpdated),document.getElementById("rowCount").textContent=t.rawRowCount||"-",!t._wellsLoaded){const i=document.getElementById("wellsGrid");i.innerHTML='<div class="loading-placeholder"><div class="loading-spinner-small"></div><span>Loading wells...</span></div>',await fa(n)}}else r.style.display="block",s.style.display="none";JT(n)}async function Mn(n,e){const t=A.appData[n];if(!t)return;t._wellsLoaded||await fa(n);let r=t.wells.find(i=>i.id===e);if(!r)return;A.currentSheet=n,A.currentWell=e,Lt("well");const s=Qe.find(i=>i.id===n);document.getElementById("wellName").textContent=r.name,document.getElementById("wellBreadcrumb").textContent=`${s.name} > ${r.name}`,!((!r._detailsLoaded||r._summaryOnly)&&(XT(),await rT(n,e),r=t.wells.find(i=>i.id===e),!r))&&(pa(r),YT(r.wellTests||[]),ZT(r.chemicalProgram||{}),ev(r.failureHistory||[]),tv("wellActionList",r.actionItems||[]),nv(r.pressureReadings||[]),rv(r.pressureReadings||[]),lT(),QT(r))}function XT(){const n='<div class="loading-placeholder"><div class="loading-spinner-small"></div><span>Loading well data...</span></div>',e=document.querySelector("#productionChartCard .card-body");e&&(e.innerHTML=n);const t=document.querySelector("#wellTestTable tbody");t&&(t.innerHTML='<tr><td colspan="4" class="dashboard-loading">'+n+"</td></tr>");const r=document.querySelector("#pressureTable tbody");r&&(r.innerHTML='<tr><td colspan="5" class="dashboard-loading">'+n+"</td></tr>");const s=document.querySelector("#failureTable tbody");s&&(s.innerHTML='<tr><td colspan="6" class="dashboard-loading">'+n+"</td></tr>")}function QT(n){const e=n.name.replace(/[^a-zA-Z0-9]/g,"_"),t=document.getElementById("btnDownloadProduction");if(t){const i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),i.addEventListener("click",()=>{const o=n.production||[],l=document.getElementById("productionStartDate"),c=document.getElementById("productionEndDate");let h=o.filter(p=>p.date);if(l&&l.value){const p=new Date(l.value);h=h.filter(g=>new Date(g.date)>=p)}if(c&&c.value){const p=new Date(c.value);p.setHours(23,59,59,999),h=h.filter(g=>new Date(g.date)<=p)}h.sort((p,g)=>new Date(p.date)-new Date(g.date));const d=h.map(p=>({date:Ui(p.date),oilbbl:p.oil!==null&&p.oil!==void 0?Math.round(p.oil*100)/100:"",waterbbl:p.water!==null&&p.water!==void 0?Math.round(p.water*100)/100:"",gasmcf:p.gas!==null&&p.gas!==void 0?Math.round(Math.max(0,p.gas)*100)/100:""}));Bi(d,["Date","Oil (bbl)","Water (bbl)","Gas (mcf)"],`${e}_Production.csv`)})}const r=document.getElementById("btnDownloadWellTests");if(r){const i=r.cloneNode(!0);r.parentNode.replaceChild(i,r),i.addEventListener("click",()=>{const o=n.wellTests||[],l=new Date;l.setHours(23,59,59,999);const h=o.filter(d=>new Date(d.date)<=l).map(d=>({date:Ui(d.date),oilbbl:d.oil!==null?Math.round(d.oil*100)/100:"",waterbbl:d.water!==null?Math.round(d.water*100)/100:"",gasmcf:d.gas!==null?Math.round(Math.max(0,d.gas)*100)/100:""}));Bi(h,["Date","Oil (bbl)","Water (bbl)","Gas (mcf)"],`${e}_Well_Tests.csv`)})}const s=document.getElementById("btnDownloadPressure");if(s){const i=s.cloneNode(!0);s.parentNode.replaceChild(i,s),i.addEventListener("click",()=>{const l=(n.pressureReadings||[]).map(c=>({date:Ui(c.date),casingpsi:c.casingPsi||"",tubingpsi:c.tubingPsi||"",flowlinepsi:c.flowlinePsi||"",injvol:c.injVol||""}));Bi(l,["Date","Casing PSI","Tubing PSI","Flowline PSI","Inj Vol"],`${e}_Pressure_Readings.csv`)})}}function JT(n){const e=document.getElementById("wellsGrid"),t=A.appData[n];if(!t||!t.wells||t.wells.length===0){e.innerHTML='<p class="empty-message">Upload gauge sheet to see wells</p>';return}const r=t.wells.filter(s=>s.status!=="inactive");if(r.length===0){e.innerHTML='<p class="empty-message">No active wells</p>';return}e.innerHTML=r.map(s=>{const i=s.wellTests&&s.wellTests[0],o=i?Math.round(i.oil*100)/100:null,l=i&&i.gas!==null?Math.round(Math.max(0,i.gas)*100)/100:null;return`
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
        `}).join(""),e.querySelectorAll(".well-card").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.wellId,o=s.dataset.sheetId;Mn(o,i)})})}function YT(n){const e=document.querySelector("#wellTestTable tbody"),t=new Date;if(t.setHours(23,59,59,999),!n||n.length===0){e.innerHTML='<tr><td colspan="4" style="text-align: center; color: #6b7280;">No test data</td></tr>';return}const r=n.filter(s=>new Date(s.date)<=t);if(r.length===0){e.innerHTML='<tr><td colspan="4" style="text-align: center; color: #6b7280;">No test data</td></tr>';return}e.innerHTML=r.map(s=>{const i=s.gas!==null?Math.round(Math.max(0,s.gas)*100)/100:null;return`
            <tr>
                <td>${Cn(s.date)}</td>
                <td>${s.oil!==null?Math.round(s.oil*100)/100:"-"}</td>
                <td>${s.water!==null?Math.round(s.water*100)/100:"-"}</td>
                <td>${i!==null?i:"-"}</td>
            </tr>
        `}).join("")}function ZT(n){const e=n.continuous||{},t=n.truckTreat||{};document.getElementById("chemContRate").textContent=e.rate||"-",document.getElementById("chemContChems").textContent=e.chems||"-",document.getElementById("chemContPPM").textContent=e.ppm||"-",document.getElementById("chemTruckRate").textContent=t.rate||"-",document.getElementById("chemTruckChems").textContent=t.chems||"-",document.getElementById("chemTruckPPM").textContent=t.ppm||"-"}function ev(n){const e=document.querySelector("#failureTable tbody");if(!n||n.length===0){e.innerHTML='<tr><td colspan="6" style="text-align: center; color: #6b7280;">No failure history</td></tr>';return}e.innerHTML=n.map(t=>`
        <tr>
            <td>${Cn(t.dateDown)}</td>
            <td>${Cn(t.dateUp)}</td>
            <td>${t.downtime||"-"}</td>
            <td>${t.oil||"-"}</td>
            <td>${t.reason||"-"}</td>
            <td>${t.comments||"-"}</td>
        </tr>
    `).join("")}function tv(n,e){const t=document.getElementById(n);if(!e||e.length===0){t.innerHTML='<li style="border-left-color: #6b7280; opacity: 0.7;">No action items</li>';return}t.innerHTML=e.map(r=>`<li>${r}</li>`).join("")}function nv(n){const e=document.querySelector("#pressureTable tbody");if(!n||n.length===0){e.innerHTML='<tr><td colspan="5" style="text-align: center; color: #6b7280;">No pressure data</td></tr>';return}e.innerHTML=n.map(t=>`
        <tr>
            <td>${Cn(t.date)}</td>
            <td>${t.casingPsi||"-"}</td>
            <td>${t.tubingPsi||"-"}</td>
            <td>${t.flowlinePsi||"-"}</td>
            <td>${t.injVol||"-"}</td>
        </tr>
    `).join("")}function rv(n){const e=document.getElementById("pressureChartsCard"),t=document.getElementById("pressureChartsWrapper");if(A.pressureCharts.psi&&(A.pressureCharts.psi.destroy(),A.pressureCharts.psi=null),A.pressureCharts.injVol&&(A.pressureCharts.injVol.destroy(),A.pressureCharts.injVol=null),!n||n.length<=20){e.style.display="none";return}const r=n.some(c=>c.casingPsi!==null&&c.casingPsi!==void 0&&!isNaN(c.casingPsi)),s=n.some(c=>c.tubingPsi!==null&&c.tubingPsi!==void 0&&!isNaN(c.tubingPsi)),i=n.some(c=>c.flowlinePsi!==null&&c.flowlinePsi!==void 0&&!isNaN(c.flowlinePsi)),o=n.some(c=>c.injVol!==null&&c.injVol!==void 0&&!isNaN(c.injVol)),l=r||s||i;if(!l&&!o){e.style.display="none";return}if(e.style.display="block",t.innerHTML="",l){const c=document.createElement("div");c.className="chart-section";let h="";const d=[];r&&d.push({id:"casing",label:"Casing PSI",color:"#f97316"}),s&&d.push({id:"tubing",label:"Tubing PSI",color:"#3b82f6"}),i&&d.push({id:"flowline",label:"Flowline PSI",color:"#8b5cf6"}),d.length>1&&(h=`
                <div class="pressure-chart-filters">
                    ${d.map(P=>`
                        <label class="pressure-filter-option">
                            <input type="checkbox" class="pressure-filter-checkbox" data-psi-type="${P.id}" checked>
                            <span class="filter-color-indicator" style="background-color: ${P.color};"></span>
                            <span>${P.label}</span>
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
        `,t.appendChild(c);const p=[];if(r){const P=n.filter(R=>R.date&&R.casingPsi!==null&&R.casingPsi!==void 0).map(R=>({x:new Date(R.date),y:Number(R.casingPsi)})).filter(R=>!isNaN(R.y)).sort((R,N)=>R.x-N.x);p.push({label:"Casing PSI",data:P,borderColor:"#f97316",backgroundColor:"#f97316",pointRadius:2,pointHoverRadius:5,borderWidth:2})}if(s){const P=n.filter(R=>R.date&&R.tubingPsi!==null&&R.tubingPsi!==void 0).map(R=>({x:new Date(R.date),y:Number(R.tubingPsi)})).filter(R=>!isNaN(R.y)).sort((R,N)=>R.x-N.x);p.push({label:"Tubing PSI",data:P,borderColor:"#3b82f6",backgroundColor:"#3b82f6",pointRadius:2,pointHoverRadius:5,borderWidth:2})}if(i){const P=n.filter(R=>R.date&&R.flowlinePsi!==null&&R.flowlinePsi!==void 0).map(R=>({x:new Date(R.date),y:Number(R.flowlinePsi)})).filter(R=>!isNaN(R.y)).sort((R,N)=>R.x-N.x);p.push({label:"Flowline PSI",data:P,borderColor:"#8b5cf6",backgroundColor:"#8b5cf6",pointRadius:2,pointHoverRadius:5,borderWidth:2})}const g=document.getElementById("chart-pressure-psi").getContext("2d");A.pressureCharts.psi=new Chart(g,{type:"line",data:{datasets:p},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#282c33",titleColor:"#e8e9eb",bodyColor:"#e8e9eb",callbacks:{title:P=>new Date(P[0].parsed.x).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),label:P=>`${P.dataset.label}: ${P.parsed.y} PSI`}}},scales:{x:{type:"time",time:{displayFormats:{day:"MMM-yy",week:"MMM-yy",month:"MMM-yy",quarter:"MMM-yy",year:"yyyy"}},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab",maxTicksLimit:8}},y:{beginAtZero:!0,title:{display:!0,text:"PSI",color:"#9ea3ab"},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab"}}}}}),c.querySelectorAll(".pressure-filter-checkbox").forEach((P,R)=>{P.addEventListener("change",N=>{const F=p.findIndex(O=>{const q=N.target.dataset.psiType;return q==="casing"?O.label==="Casing PSI":q==="tubing"?O.label==="Tubing PSI":q==="flowline"?O.label==="Flowline PSI":!1});if(F!==-1){const O=A.pressureCharts.psi.getDatasetMeta(F);O.hidden=!N.target.checked,A.pressureCharts.psi.update()}})})}if(o){const c=document.createElement("div");c.className="chart-section",c.innerHTML=`
            <div class="chart-label">Injection Volume</div>
            <div class="canvas-wrapper">
                <canvas id="chart-pressure-injvol"></canvas>
            </div>
        `,t.appendChild(c);const h=n.filter(p=>p.date&&p.injVol!==null&&p.injVol!==void 0).map(p=>({x:new Date(p.date),y:Number(p.injVol)})).filter(p=>!isNaN(p.y)).sort((p,g)=>p.x-g.x),d=document.getElementById("chart-pressure-injvol").getContext("2d");A.pressureCharts.injVol=new Chart(d,{type:"line",data:{datasets:[{label:"Injection Volume",data:h,borderColor:"#22c55e",backgroundColor:"#22c55e",pointRadius:2,pointHoverRadius:5,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#282c33",titleColor:"#e8e9eb",bodyColor:"#e8e9eb",callbacks:{title:p=>new Date(p[0].parsed.x).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),label:p=>`Injection Volume: ${p.parsed.y}`}}},scales:{x:{type:"time",time:{displayFormats:{day:"MMM-yy",week:"MMM-yy",month:"MMM-yy",quarter:"MMM-yy",year:"yyyy"}},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab",maxTicksLimit:8}},y:{beginAtZero:!0,title:{display:!0,text:"Volume",color:"#9ea3ab"},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab"}}}}})}}async function _a(n=null,e=null){Lt("oilChart"),await Ta(),va("oil",n,e)}async function wa(n=null,e=null){Lt("waterChart"),await Ta(),va("water",n,e)}async function Ea(n=null,e=null){Lt("gasChart"),await Ta(),va("gas",n,e)}async function Ta(n){const e=[];for(const t in A.appData){const r=A.appData[t];r&&(r._aggregateLoaded||e.push(sT(t)))}e.length>0&&(console.log(`Loading aggregate data for ${e.length} sheets...`),await Promise.all(e),console.log("Aggregate data loaded"))}function va(n,e=null,t=null){var P;const s={oil:{canvasId:"aggregateOilChart",label:"Oil Production (BBL)",unit:"BBL",color:"#78716c",dateRangeVar:"oilChartDateRange",startDateId:"oilChartStartDate",endDateId:"oilChartEndDate",resetBtnId:"btnResetOilDates",showFn:_a},water:{canvasId:"aggregateWaterChart",label:"Water Consumption (BBL)",unit:"BBL",color:"#3b82f6",dateRangeVar:"waterChartDateRange",startDateId:"waterChartStartDate",endDateId:"waterChartEndDate",resetBtnId:"btnResetWaterDates",showFn:wa},gas:{canvasId:"aggregateGasChart",label:"Gas Production (MCF)",unit:"MCF",color:"#22c55e",dateRangeVar:"gasChartDateRange",startDateId:"gasChartStartDate",endDateId:"gasChartEndDate",resetBtnId:"btnResetGasDates",showFn:Ea}}[n];if(!s)return;n==="oil"&&A.aggregateOilChart?(A.aggregateOilChart.destroy(),A.aggregateOilChart=null):n==="water"&&A.aggregateWaterChart?(A.aggregateWaterChart.destroy(),A.aggregateWaterChart=null):n==="gas"&&A.aggregateGasChart&&(A.aggregateGasChart.destroy(),A.aggregateGasChart=null);const i=iv(n),o=((P=A.chartState[n])==null?void 0:P.aggregation)||"month";A.chartState[n].selectedBatteries=i;const{data:l,dateRange:c}=IT(n,e,t,o,i);n==="oil"?A.oilChartDateRange=c:n==="water"?A.waterChartDateRange=c:n==="gas"&&(A.gasChartDateRange=c),sv(n,s,e,t,c);const h={oil:"oilChartBatteries",water:"waterChartBatteries",gas:"gasChartBatteries"},d=document.getElementById(h[n]);d&&!d.querySelector(".explorer-battery")&&av(n),ov(n);const p=document.getElementById(s.canvasId);if(!p)return;if(l.length===0){const R=p.getContext("2d");R.clearRect(0,0,p.width,p.height),R.font="14px Archivo, sans-serif",R.fillStyle="#6b7280",R.textAlign="center",R.fillText("No production data available",p.width/2,p.height/2);return}const g=p.getContext("2d"),S=new Chart(g,{type:"line",data:{datasets:[{label:s.label,data:l,backgroundColor:s.color+"33",borderColor:s.color,borderWidth:2,fill:!0,tension:.1,pointRadius:2,pointHoverRadius:5}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#282c33",titleColor:"#e8e9eb",bodyColor:"#e8e9eb",callbacks:{title:R=>new Date(R[0].parsed.x).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),label:R=>`${s.label}: ${R.parsed.y.toLocaleString()}`}}},scales:{x:{type:"time",time:{displayFormats:{day:"MMM-yy",week:"MMM-yy",month:"MMM-yy",quarter:"MMM-yy",year:"yyyy"}},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab",maxTicksLimit:12}},y:{beginAtZero:!0,title:{display:!0,text:s.unit,color:"#9ea3ab"},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab"}}}}});n==="oil"?A.aggregateOilChart=S:n==="water"?A.aggregateWaterChart=S:n==="gas"&&(A.aggregateGasChart=S)}function sv(n,e,t,r,s){const i=document.getElementById(e.startDateId),o=document.getElementById(e.endDateId),l=document.getElementById(e.resetBtnId);if(!i||!o||!s.min||!s.max)return;const c=R=>R?new Date(R).toISOString().split("T")[0]:"",h=c(s.min),d=c(s.max);i.min=h,i.max=d,o.min=h,o.max=d,i.value=t?c(t):h,o.value=r?c(r):d;const p=i.cloneNode(!0),g=o.cloneNode(!0),S=l.cloneNode(!0);i.parentNode.replaceChild(p,i),o.parentNode.replaceChild(g,o),l.parentNode.replaceChild(S,l);const P=()=>{const R=p.value?new Date(p.value):null,N=g.value?new Date(g.value+"T23:59:59"):null;e.showFn(R,N)};p.addEventListener("change",P),g.addEventListener("change",P),S.addEventListener("click",()=>e.showFn(null,null))}function iv(n){const e={oil:"oilChartBatteries",water:"waterChartBatteries",gas:"gasChartBatteries"},t=document.getElementById(e[n]);if(!t)return null;const r=new Set;return t.querySelectorAll(".battery-checkbox:checked").forEach(s=>{s.dataset.battery&&r.add(s.dataset.battery)}),r.size>0?r:null}function wo(n){const t={oil:{startDateId:"oilChartStartDate",endDateId:"oilChartEndDate",showFn:_a},water:{startDateId:"waterChartStartDate",endDateId:"waterChartEndDate",showFn:wa},gas:{startDateId:"gasChartStartDate",endDateId:"gasChartEndDate",showFn:Ea}}[n];if(!t)return;const r=document.getElementById(t.startDateId),s=document.getElementById(t.endDateId),i=r&&r.value?new Date(r.value):null,o=s&&s.value?new Date(s.value+"T23:59:59"):null;t.showFn(i,o)}function ov(n){var r;const e=document.querySelectorAll(`input[name="${n}Aggregation"]`);if(!e.length)return;e.forEach(s=>{const i=s.cloneNode(!0);s.parentNode.replaceChild(i,s)});const t=((r=A.chartState[n])==null?void 0:r.aggregation)||"month";document.querySelectorAll(`input[name="${n}Aggregation"]`).forEach(s=>{s.checked=s.value===t,s.addEventListener("change",i=>{A.chartState[n].aggregation=i.target.value,wo(n)})})}function av(n){var l;const e={oil:"oilChartBatteries",water:"waterChartBatteries",gas:"gasChartBatteries"},t=document.getElementById(e[n]);if(!t)return;if(t.innerHTML="",!$d()){t.innerHTML='<div class="explorer-empty">No data uploaded</div>';return}const r=()=>{const c={oil:"btnToggleAllOil",water:"btnToggleAllWater",gas:"btnToggleAllGas"},h=document.getElementById(c[n]);if(!h)return;const d=t.querySelectorAll(".battery-checkbox");if(!d.length)return;const p=Array.from(d).every(g=>g.checked);h.textContent=p?"Deselect All":"Select All"},s=((l=A.chartState[n])==null?void 0:l.selectedBatteries)||null;Qe.forEach(c=>{const h=A.appData[c.id];if(!h||!h._metadataLoaded)return;const d=!s||s.has(c.id),p=A.metadataCache.wellCounts[c.id]||(h.wells?h.wells.length:0),g=document.createElement("label");g.className="explorer-battery-simple explorer-checkbox",g.innerHTML=`
            <input type="checkbox" class="battery-checkbox" data-battery="${c.id}" ${d?"checked":""}>
            <span class="checkmark"></span>
            <span class="battery-name">${c.name}</span>
            <span class="battery-well-count">${p} wells</span>
        `,t.appendChild(g),g.querySelector(".battery-checkbox").addEventListener("change",()=>{wo(n),r()})});const i={oil:"btnToggleAllOil",water:"btnToggleAllWater",gas:"btnToggleAllGas"},o=document.getElementById(i[n]);if(o){const c=o.cloneNode(!0);o.parentNode.replaceChild(c,o),c.addEventListener("click",()=>{const h=t.querySelectorAll(".battery-checkbox"),d=Array.from(h).every(p=>p.checked);h.forEach(p=>{p.checked=!d}),c.textContent=d?"Select All":"Deselect All",wo(n)}),r()}}function lv(){const n=document.getElementById("logoLink");n&&n.addEventListener("click",e=>{e.preventDefault(),document.querySelectorAll(".nav-item").forEach(r=>r.classList.remove("active")),A.currentSheet=null,A.currentWell=null,Lt("welcome"),Sn();const t=document.getElementById("nav-dashboard");t&&ti(t)})}function cv(){const n=document.getElementById("hamburgerBtn"),e=document.getElementById("sidebar");n&&e&&(n.addEventListener("click",()=>{e.classList.toggle("collapsed");const r=e.classList.contains("collapsed");localStorage.setItem("sidebarCollapsed",r?"true":"false")}),localStorage.getItem("sidebarCollapsed")==="true"&&e.classList.add("collapsed"))}function Hd(){const n=document.getElementById("navTree");n.innerHTML="";const e=uv("Home","home-section",[{id:"nav-dashboard",label:"Operations Dashboard",icon:"dashboard",action:()=>{Lt("welcome"),Sn()}},{id:"nav-oil-chart",label:"Oil Production",icon:"oil",action:()=>_a()},{id:"nav-water-chart",label:"Water Consumption",icon:"water",action:()=>wa()},{id:"nav-gas-chart",label:"Gas Production",icon:"gas",action:()=>Ea()}]);n.appendChild(e);const t=dv();n.appendChild(t)}function uv(n,e,t){const r=document.createElement("div");r.className="nav-section",r.id=e;const s=document.createElement("div");s.className="nav-section-header expanded",s.innerHTML=`
        <span class="nav-section-title">${n}</span>
        <span class="nav-section-chevron">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </span>
    `;const i=document.createElement("div");return i.className="nav-section-children visible",t.forEach(o=>{const l=hv(o);i.appendChild(l)}),s.addEventListener("click",()=>{s.classList.toggle("expanded"),i.classList.toggle("visible")}),r.appendChild(s),r.appendChild(i),r}function hv(n){const e=document.createElement("div");e.className="nav-section-item";const t={dashboard:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
    `;const s=e.querySelector(".nav-item");return s.addEventListener("click",i=>{i.stopPropagation(),ti(s),n.action()}),e}function dv(){const n=document.createElement("div");n.className="nav-section",n.id="wells-section";const e=document.createElement("div");e.className="nav-section-header expanded",e.innerHTML=`
        <span class="nav-section-title">Wells</span>
        <span class="nav-section-chevron">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </span>
    `;const t=document.createElement("div");return t.className="nav-section-children visible",Qe.forEach(r=>{const s=fv(r);t.appendChild(s)}),e.addEventListener("click",()=>{e.classList.toggle("expanded"),t.classList.toggle("visible")}),n.appendChild(e),n.appendChild(t),n}function fv(n){const e=document.createElement("div");e.className="nav-gauge-sheet";const t=A.appData[n.id],r=t&&t._metadataLoaded,s=t&&t._wellsLoaded,i=s?t.wells.filter(g=>g.status!=="inactive"):[],o=A.metadataCache.wellCounts[n.id],l=o!==void 0?o:i.length;let c="No data",h="not-uploaded";r&&(o!==void 0||s?(c=l+" wells",h="uploaded"):(c="Loading...",h="uploaded")),e.innerHTML=`
        <div class="nav-item" data-sheet-id="${n.id}">
            <span class="icon">&#9632;</span>
            <span class="nav-battery-name">${n.name}</span>
            <span class="upload-indicator ${h}">
                ${c}
            </span>
        </div>
        <div class="nav-children" id="sheet-children-${n.id}"></div>
    `;const d=e.querySelector(".nav-item"),p=e.querySelector(".nav-children");return d.addEventListener("click",async g=>{if(g.stopPropagation(),ti(d),jd(n.id),r&&!s){const S=d.querySelector(".upload-indicator");S.textContent="Loading...",await fa(n.id);const R=A.appData[n.id].wells.filter(N=>N.status!=="inactive");S.textContent=R.length+" wells",p.innerHTML="",R.forEach(N=>{const F=lu(N,n);p.appendChild(F)})}s&&i.length>0&&(d.classList.toggle("expanded"),p.classList.toggle("visible"))}),s&&i.length>0&&i.forEach(g=>{const S=lu(g,n);p.appendChild(S)}),e}function lu(n,e){const t=document.createElement("div");t.className="nav-well",t.innerHTML=`
        <div class="nav-item" data-well-id="${n.id}" data-sheet-id="${e.id}">
            <span class="status-dot active"></span>
            <span class="nav-well-name">${n.name}</span>
        </div>
    `;const r=t.querySelector(".nav-item");return r.addEventListener("click",s=>{s.stopPropagation(),ti(r),Mn(e.id,n.id)}),t}function ti(n){document.querySelectorAll(".nav-item").forEach(e=>e.classList.remove("active")),n.classList.add("active")}function bn(){Hd(),Sn()}let $i=null;function pv(n){$i=n,Nw(Lr,e=>{$i&&$i(e)})}async function mv(n,e){try{return{success:!0,user:(await Rw(Lr,n,e)).user}}catch(t){return console.error("Sign in error:",t),{success:!1,error:qd(t)}}}async function gv(){try{return await Vw(Lr),{success:!0}}catch(n){return console.error("Sign out error:",n),{success:!1,error:n.message}}}async function yv(n,e){try{return{success:!0,user:(await Pw(Lr,n,e)).user}}catch(t){return console.error("Create account error:",t),{success:!1,error:qd(t)}}}function qd(n){switch(n.code){case"auth/invalid-email":return"Invalid email address.";case"auth/user-disabled":return"This account has been disabled.";case"auth/user-not-found":return"No account found with this email.";case"auth/wrong-password":return"Incorrect password.";case"auth/email-already-in-use":return"An account with this email already exists.";case"auth/weak-password":return"Password should be at least 6 characters.";case"auth/network-request-failed":return"Network error. Please check your connection.";case"auth/too-many-requests":return"Too many failed attempts. Please try again later.";default:return n.message||"An error occurred. Please try again."}}function _v(){const n=document.getElementById("loginView"),e=document.querySelector(".app-container");n&&(n.style.display="flex"),e&&(e.style.display="none")}function wv(){const n=document.getElementById("loginView"),e=document.querySelector(".app-container");n&&(n.style.display="none"),e&&(e.style.display="flex")}function Ev(){const n=document.getElementById("loginForm"),e=document.getElementById("signupForm"),t=document.getElementById("showSignup"),r=document.getElementById("showLogin"),s=document.getElementById("loginContainer"),i=document.getElementById("signupContainer");n&&n.addEventListener("submit",async o=>{o.preventDefault();const l=document.getElementById("loginEmail").value,c=document.getElementById("loginPassword").value,h=document.getElementById("loginError"),d=n.querySelector('button[type="submit"]');h.textContent="",d.disabled=!0,d.textContent="Signing in...";const p=await mv(l,c);p.success||(h.textContent=p.error,d.disabled=!1,d.textContent="Sign In")}),e&&e.addEventListener("submit",async o=>{o.preventDefault();const l=document.getElementById("signupEmail").value,c=document.getElementById("signupPassword").value,h=document.getElementById("signupConfirmPassword").value,d=document.getElementById("signupError"),p=e.querySelector('button[type="submit"]');if(d.textContent="",c!==h){d.textContent="Passwords do not match.";return}p.disabled=!0,p.textContent="Creating account...";const g=await yv(l,c);g.success||(d.textContent=g.error,p.disabled=!1,p.textContent="Create Account")}),t&&t.addEventListener("click",o=>{o.preventDefault(),s.style.display="none",i.style.display="block"}),r&&r.addEventListener("click",o=>{o.preventDefault(),i.style.display="none",s.style.display="block"})}let Eo=!1;async function Tv(){if(Eo)return;document.querySelector(".app-container");let n=document.createElement("div");n.className="loading-overlay",n.style.display="flex",n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.right="0",n.style.bottom="0",n.style.zIndex="9999",n.innerHTML='<div class="loading-content"><div class="loading-spinner"></div><p class="loading-text">Loading...</p></div>',document.body.appendChild(n),Cf(),A.isLoading=!0,await tT(),Hd(),FT(),BT(),GT(),lv(),cv(),Sf(),Iv(),Lt("welcome"),wv(),n&&n.parentNode&&n.parentNode.removeChild(n),Eo=!0,vv()}async function vv(){try{await nT(),A.isLoading=!1,Sn(),bn(),console.log("Background loading complete")}catch(n){console.error("Error loading dashboard summary:",n),A.isLoading=!1,Sn(),bn()}}function Iv(){const n=document.getElementById("userAvatarBtn"),e=document.getElementById("userDropdown"),t=document.getElementById("userEmail"),r=document.getElementById("btnSignOutDropdown");if(!n||!e)return;const s=Lr.currentUser;s&&t&&(t.textContent=s.email),n.addEventListener("click",i=>{i.stopPropagation(),e.classList.toggle("active")}),document.addEventListener("click",i=>{!e.contains(i.target)&&i.target!==n&&e.classList.remove("active")}),r&&r.addEventListener("click",async()=>{e.classList.remove("active"),await gv()})}document.addEventListener("DOMContentLoaded",()=>{Ev(),pv(n=>{n?(console.log("User signed in:",n.email),Tv()):(console.log("User signed out"),_v(),Eo=!1)})});aT((n,e)=>{Mn(n,e)});$T(()=>{bn(),Sn()});
