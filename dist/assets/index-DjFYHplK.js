(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const qe=[{id:"cowden",name:"Cowden",fileName:"Cowden Gauge Sheet1.xlsx",parser:"CowdenParser"},{id:"bigmax",name:"Big Max",fileName:"Big Max Gauge Sheet.xlsx",parser:"BigMaxParser"},{id:"bigmax1h",name:"Big Max 1H",fileName:"Big Max 1H Gauge Sheet.xlsx",parser:"BigMax1HParser"},{id:"southandrews",name:"South Andrews",fileName:"South Andrews Gauge Sheet.xlsm",parser:"SouthAndrewsParser"},{id:"polaris",name:"Polaris",fileName:"Polaris Gauge Sheet.xlsx",parser:"PolarisParser"},{id:"shusa",name:"Shusa",fileName:"Shusa Gauge Sheet.xlsx",parser:"ShusaParser"},{id:"mwwemac",name:"MW-Wemac-Sabrina-Berkley",fileName:"Mw-Wemac-Sabrina-Berkley.xlsx",parser:"MWWemacParser"},{id:"unit130",name:"1-30 Unit 1H",fileName:"1-30 Unit 1H Gauge Sheet.xlsx",parser:"Unit130Parser"},{id:"uls35h",name:"ULS 3-5H",fileName:"ULS 3-5H Gauge Sheet.xlsx",parser:"ULS35HParser"},{id:"master-chemical",name:"Master Chemical Sheet",fileName:"Master Chemical Sheet.xlsx",parser:"MasterChemicalParser",isChemicalSheet:!0},{id:"fluid-level",name:"Fluid Levels",fileName:"West Texas Fluid Level Sheet.xlsx",parser:"FluidLevelParser",isFluidLevelSheet:!0}],Fo="oilWellTheme",S={appData:{},currentSheet:null,currentWell:null,wellProductionCharts:{},batteryProductionChart:null,currentWellData:null,productionDateRange:{min:null,max:null},chartState:{oil:{aggregation:"month",selectedWells:null},water:{aggregation:"month",selectedWells:null},gas:{aggregation:"month",selectedWells:null}},aggregateOilChart:null,aggregateWaterChart:null,aggregateGasChart:null,oilChartDateRange:{min:null,max:null},waterChartDateRange:{min:null,max:null},gasChartDateRange:{min:null,max:null},pressureCharts:{psi:null,injVol:null},currentEditSection:null,isLoading:!1,loadedSheets:[],loadedWells:{},metadataCache:{wellCounts:{},wellNames:{}},dashboardData:null,chemicalPrograms:{},fluidLevels:{}};function fp(){const n=localStorage.getItem(Fo);n?document.documentElement.setAttribute("data-theme",n):Pc(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{localStorage.getItem(Fo)||Pc()}),ma()}function Pc(){const n=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",n?"dark":"light"),ma()}function mp(){const n=document.getElementById("themeToggle");n&&n.addEventListener("click",pp)}function pp(){const e=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",e),localStorage.setItem(Fo,e),ma()}function ma(){const n=document.querySelector(".theme-toggle-label");if(n){const e=document.documentElement.getAttribute("data-theme")||"dark";n.textContent=e==="dark"?"Light Mode":"Dark Mode"}}const gp="modulepreload",yp=function(n){return"/"+n},Ac={},jn=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(c=>{if(c=yp(c),c in Ac)return;Ac[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":gp,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((m,g)=>{h.addEventListener("load",m),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return r.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},_p=()=>{};var Dc={};/**
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
 */const Ed=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},wp=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],l=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},vd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,l=o?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,d=i>>2,h=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),s.push(t[d],t[h],t[m],t[g])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ed(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):wp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const h=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||l==null||u==null||h==null)throw new Ep;const m=i<<2|l>>4;if(s.push(m),u!==64){const g=l<<4&240|u>>2;if(s.push(g),h!==64){const _=u<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ep extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vp=function(n){const e=Ed(n);return vd.encodeByteArray(e,!0)},Gr=function(n){return vp(n).replace(/\./g,"")},Td=function(n){try{return vd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Tp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cp=()=>Tp().__FIREBASE_DEFAULTS__,Ip=()=>{if(typeof process>"u"||typeof Dc>"u")return;const n=Dc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},bp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Td(n[1]);return e&&JSON.parse(e)},_i=()=>{try{return _p()||Cp()||Ip()||bp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Cd=n=>{var e,t;return(t=(e=_i())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Id=n=>{const e=Cd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},bd=()=>{var n;return(n=_i())==null?void 0:n.config},Sd=n=>{var e;return(e=_i())==null?void 0:e[`_${n}`]};/**
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
 */class Sp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Yt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pa(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Rd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Gr(JSON.stringify(t)),Gr(JSON.stringify(o)),""].join(".")}const Ns={};function Rp(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ns))Ns[e]?n.emulator.push(e):n.prod.push(e);return n}function Pp(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let kc=!1;function ga(n,e){if(typeof window>"u"||typeof document>"u"||!Yt(window.location.host)||Ns[n]===e||Ns[n]||kc)return;Ns[n]=e;function t(m){return`__firebase__banner__${m}`}const s="__firebase__banner",i=Rp().prod.length>0;function o(){const m=document.getElementById(s);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,g){m.setAttribute("width","24"),m.setAttribute("id",g),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{kc=!0,o()},m}function d(m,g){m.setAttribute("id",g),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function h(){const m=Pp(s),g=t("text"),_=document.getElementById(g)||document.createElement("span"),w=t("learnmore"),C=document.getElementById(w)||document.createElement("a"),k=t("preprendIcon"),x=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const V=m.element;l(V),d(C,w);const F=u();c(x,k),V.append(x,_,C,F),document.body.appendChild(V)}i?(_.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ap(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function Dp(){var e;const n=(e=_i())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Np(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Lp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xp(){const n=Pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Op(){return!Dp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mp(){try{return typeof indexedDB=="object"}catch{return!1}}function Vp(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Bp="FirebaseError";class ct extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Bp,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ys.prototype.create)}}class Ys{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Fp(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new ct(r,l,s)}}function Fp(n,e){return n.replace(Up,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Up=/\{\$([^}]+)}/g;function $p(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function pn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(Nc(i)&&Nc(o)){if(!pn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function Nc(n){return n!==null&&typeof n=="object"}/**
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
 */function Zs(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function bs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Ss(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Hp(n,e){const t=new jp(n,e);return t.subscribe.bind(t)}class jp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Wp(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=vo),r.error===void 0&&(r.error=vo),r.complete===void 0&&(r.complete=vo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function vo(){}/**
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
 */function ae(n){return n&&n._delegate?n._delegate:n}class qt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ln="[DEFAULT]";/**
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
 */class qp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Sp;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gp(e))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ln){return this.instances.has(e)}getOptions(e=ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zp(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ln){return this.component?this.component.multipleInstances?e:ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zp(n){return n===ln?void 0:n}function Gp(n){return n.instantiationMode==="EAGER"}/**
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
 */class Kp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const Xp={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Qp=X.INFO,Jp={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Yp=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Jp[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ya{constructor(e){this.name=e,this._logLevel=Qp,this._logHandler=Yp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Zp=(n,e)=>e.some(t=>n instanceof t);let Lc,xc;function eg(){return Lc||(Lc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tg(){return xc||(xc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pd=new WeakMap,Uo=new WeakMap,Ad=new WeakMap,To=new WeakMap,_a=new WeakMap;function ng(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t($t(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Pd.set(t,n)}).catch(()=>{}),_a.set(e,n),e}function sg(n){if(Uo.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Uo.set(n,e)}let $o={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Uo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ad.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function rg(n){$o=n($o)}function ig(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Co(this),e,...t);return Ad.set(s,e.sort?e.sort():[e]),$t(s)}:tg().includes(n)?function(...e){return n.apply(Co(this),e),$t(Pd.get(this))}:function(...e){return $t(n.apply(Co(this),e))}}function og(n){return typeof n=="function"?ig(n):(n instanceof IDBTransaction&&sg(n),Zp(n,eg())?new Proxy(n,$o):n)}function $t(n){if(n instanceof IDBRequest)return ng(n);if(To.has(n))return To.get(n);const e=og(n);return e!==n&&(To.set(n,e),_a.set(e,n)),e}const Co=n=>_a.get(n);function ag(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),l=$t(o);return s&&o.addEventListener("upgradeneeded",c=>{s($t(o.result),c.oldVersion,c.newVersion,$t(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const lg=["get","getKey","getAll","getAllKeys","count"],cg=["put","add","delete","clear"],Io=new Map;function Oc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Io.get(e))return Io.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=cg.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||lg.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),r&&c.done]))[0]};return Io.set(e,i),i}rg(n=>({...n,get:(e,t,s)=>Oc(e,t)||n.get(e,t,s),has:(e,t)=>!!Oc(e,t)||n.has(e,t)}));/**
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
 */class ug{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dg(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function dg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ho="@firebase/app",Mc="0.14.7";/**
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
 */const gt=new ya("@firebase/app"),hg="@firebase/app-compat",fg="@firebase/analytics-compat",mg="@firebase/analytics",pg="@firebase/app-check-compat",gg="@firebase/app-check",yg="@firebase/auth",_g="@firebase/auth-compat",wg="@firebase/database",Eg="@firebase/data-connect",vg="@firebase/database-compat",Tg="@firebase/functions",Cg="@firebase/functions-compat",Ig="@firebase/installations",bg="@firebase/installations-compat",Sg="@firebase/messaging",Rg="@firebase/messaging-compat",Pg="@firebase/performance",Ag="@firebase/performance-compat",Dg="@firebase/remote-config",kg="@firebase/remote-config-compat",Ng="@firebase/storage",Lg="@firebase/storage-compat",xg="@firebase/firestore",Og="@firebase/ai",Mg="@firebase/firestore-compat",Vg="firebase",Bg="12.8.0";/**
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
 */const jo="[DEFAULT]",Fg={[Ho]:"fire-core",[hg]:"fire-core-compat",[mg]:"fire-analytics",[fg]:"fire-analytics-compat",[gg]:"fire-app-check",[pg]:"fire-app-check-compat",[yg]:"fire-auth",[_g]:"fire-auth-compat",[wg]:"fire-rtdb",[Eg]:"fire-data-connect",[vg]:"fire-rtdb-compat",[Tg]:"fire-fn",[Cg]:"fire-fn-compat",[Ig]:"fire-iid",[bg]:"fire-iid-compat",[Sg]:"fire-fcm",[Rg]:"fire-fcm-compat",[Pg]:"fire-perf",[Ag]:"fire-perf-compat",[Dg]:"fire-rc",[kg]:"fire-rc-compat",[Ng]:"fire-gcs",[Lg]:"fire-gcs-compat",[xg]:"fire-fst",[Mg]:"fire-fst-compat",[Og]:"fire-vertex","fire-js":"fire-js",[Vg]:"fire-js-all"};/**
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
 */const Kr=new Map,Ug=new Map,Wo=new Map;function Vc(n,e){try{n.container.addComponent(e)}catch(t){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gn(n){const e=n.name;if(Wo.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;Wo.set(e,n);for(const t of Kr.values())Vc(t,n);for(const t of Ug.values())Vc(t,n);return!0}function wi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ve(n){return n==null?!1:n.settings!==void 0}/**
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
 */const $g={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new Ys("app","Firebase",$g);/**
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
 */class Hg{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const Tn=Bg;function Dd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:jo,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Ht.create("bad-app-name",{appName:String(r)});if(t||(t=bd()),!t)throw Ht.create("no-options");const i=Kr.get(r);if(i){if(pn(t,i.options)&&pn(s,i.config))return i;throw Ht.create("duplicate-app",{appName:r})}const o=new Kp(r);for(const c of Wo.values())o.addComponent(c);const l=new Hg(t,s,o);return Kr.set(r,l),l}function wa(n=jo){const e=Kr.get(n);if(!e&&n===jo&&bd())return Dd();if(!e)throw Ht.create("no-app",{appName:n});return e}function nt(n,e,t){let s=Fg[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(o.join(" "));return}gn(new qt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const jg="firebase-heartbeat-database",Wg=1,$s="firebase-heartbeat-store";let bo=null;function kd(){return bo||(bo=ag(jg,Wg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore($s)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ht.create("idb-open",{originalErrorMessage:n.message})})),bo}async function qg(n){try{const t=(await kd()).transaction($s),s=await t.objectStore($s).get(Nd(n));return await t.done,s}catch(e){if(e instanceof ct)gt.warn(e.message);else{const t=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gt.warn(t.message)}}}async function Bc(n,e){try{const s=(await kd()).transaction($s,"readwrite");await s.objectStore($s).put(e,Nd(n)),await s.done}catch(t){if(t instanceof ct)gt.warn(t.message);else{const s=Ht.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gt.warn(s.message)}}}function Nd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const zg=1024,Gg=30;class Kg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Qg(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Gg){const o=Jg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){gt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Fc(),{heartbeatsToSend:s,unsentEntries:r}=Xg(this._heartbeatsCache.heartbeats),i=Gr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return gt.warn(t),""}}}function Fc(){return new Date().toISOString().substring(0,10)}function Xg(n,e=zg){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Uc(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Uc(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Qg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mp()?Vp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Bc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Bc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Uc(n){return Gr(JSON.stringify({version:2,heartbeats:n})).length}function Jg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Yg(n){gn(new qt("platform-logger",e=>new ug(e),"PRIVATE")),gn(new qt("heartbeat",e=>new Kg(e),"PRIVATE")),nt(Ho,Mc,n),nt(Ho,Mc,"esm2020"),nt("fire-js","")}Yg("");var $c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jt,Ld;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,E){function T(){}T.prototype=E.prototype,b.F=E.prototype,b.prototype=new T,b.prototype.constructor=b,b.D=function(R,I,A){for(var v=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)v[xe-2]=arguments[xe];return E.prototype[I].apply(R,v)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(b,E,T){T||(T=0);const R=Array(16);if(typeof E=="string")for(var I=0;I<16;++I)R[I]=E.charCodeAt(T++)|E.charCodeAt(T++)<<8|E.charCodeAt(T++)<<16|E.charCodeAt(T++)<<24;else for(I=0;I<16;++I)R[I]=E[T++]|E[T++]<<8|E[T++]<<16|E[T++]<<24;E=b.g[0],T=b.g[1],I=b.g[2];let A=b.g[3],v;v=E+(A^T&(I^A))+R[0]+3614090360&4294967295,E=T+(v<<7&4294967295|v>>>25),v=A+(I^E&(T^I))+R[1]+3905402710&4294967295,A=E+(v<<12&4294967295|v>>>20),v=I+(T^A&(E^T))+R[2]+606105819&4294967295,I=A+(v<<17&4294967295|v>>>15),v=T+(E^I&(A^E))+R[3]+3250441966&4294967295,T=I+(v<<22&4294967295|v>>>10),v=E+(A^T&(I^A))+R[4]+4118548399&4294967295,E=T+(v<<7&4294967295|v>>>25),v=A+(I^E&(T^I))+R[5]+1200080426&4294967295,A=E+(v<<12&4294967295|v>>>20),v=I+(T^A&(E^T))+R[6]+2821735955&4294967295,I=A+(v<<17&4294967295|v>>>15),v=T+(E^I&(A^E))+R[7]+4249261313&4294967295,T=I+(v<<22&4294967295|v>>>10),v=E+(A^T&(I^A))+R[8]+1770035416&4294967295,E=T+(v<<7&4294967295|v>>>25),v=A+(I^E&(T^I))+R[9]+2336552879&4294967295,A=E+(v<<12&4294967295|v>>>20),v=I+(T^A&(E^T))+R[10]+4294925233&4294967295,I=A+(v<<17&4294967295|v>>>15),v=T+(E^I&(A^E))+R[11]+2304563134&4294967295,T=I+(v<<22&4294967295|v>>>10),v=E+(A^T&(I^A))+R[12]+1804603682&4294967295,E=T+(v<<7&4294967295|v>>>25),v=A+(I^E&(T^I))+R[13]+4254626195&4294967295,A=E+(v<<12&4294967295|v>>>20),v=I+(T^A&(E^T))+R[14]+2792965006&4294967295,I=A+(v<<17&4294967295|v>>>15),v=T+(E^I&(A^E))+R[15]+1236535329&4294967295,T=I+(v<<22&4294967295|v>>>10),v=E+(I^A&(T^I))+R[1]+4129170786&4294967295,E=T+(v<<5&4294967295|v>>>27),v=A+(T^I&(E^T))+R[6]+3225465664&4294967295,A=E+(v<<9&4294967295|v>>>23),v=I+(E^T&(A^E))+R[11]+643717713&4294967295,I=A+(v<<14&4294967295|v>>>18),v=T+(A^E&(I^A))+R[0]+3921069994&4294967295,T=I+(v<<20&4294967295|v>>>12),v=E+(I^A&(T^I))+R[5]+3593408605&4294967295,E=T+(v<<5&4294967295|v>>>27),v=A+(T^I&(E^T))+R[10]+38016083&4294967295,A=E+(v<<9&4294967295|v>>>23),v=I+(E^T&(A^E))+R[15]+3634488961&4294967295,I=A+(v<<14&4294967295|v>>>18),v=T+(A^E&(I^A))+R[4]+3889429448&4294967295,T=I+(v<<20&4294967295|v>>>12),v=E+(I^A&(T^I))+R[9]+568446438&4294967295,E=T+(v<<5&4294967295|v>>>27),v=A+(T^I&(E^T))+R[14]+3275163606&4294967295,A=E+(v<<9&4294967295|v>>>23),v=I+(E^T&(A^E))+R[3]+4107603335&4294967295,I=A+(v<<14&4294967295|v>>>18),v=T+(A^E&(I^A))+R[8]+1163531501&4294967295,T=I+(v<<20&4294967295|v>>>12),v=E+(I^A&(T^I))+R[13]+2850285829&4294967295,E=T+(v<<5&4294967295|v>>>27),v=A+(T^I&(E^T))+R[2]+4243563512&4294967295,A=E+(v<<9&4294967295|v>>>23),v=I+(E^T&(A^E))+R[7]+1735328473&4294967295,I=A+(v<<14&4294967295|v>>>18),v=T+(A^E&(I^A))+R[12]+2368359562&4294967295,T=I+(v<<20&4294967295|v>>>12),v=E+(T^I^A)+R[5]+4294588738&4294967295,E=T+(v<<4&4294967295|v>>>28),v=A+(E^T^I)+R[8]+2272392833&4294967295,A=E+(v<<11&4294967295|v>>>21),v=I+(A^E^T)+R[11]+1839030562&4294967295,I=A+(v<<16&4294967295|v>>>16),v=T+(I^A^E)+R[14]+4259657740&4294967295,T=I+(v<<23&4294967295|v>>>9),v=E+(T^I^A)+R[1]+2763975236&4294967295,E=T+(v<<4&4294967295|v>>>28),v=A+(E^T^I)+R[4]+1272893353&4294967295,A=E+(v<<11&4294967295|v>>>21),v=I+(A^E^T)+R[7]+4139469664&4294967295,I=A+(v<<16&4294967295|v>>>16),v=T+(I^A^E)+R[10]+3200236656&4294967295,T=I+(v<<23&4294967295|v>>>9),v=E+(T^I^A)+R[13]+681279174&4294967295,E=T+(v<<4&4294967295|v>>>28),v=A+(E^T^I)+R[0]+3936430074&4294967295,A=E+(v<<11&4294967295|v>>>21),v=I+(A^E^T)+R[3]+3572445317&4294967295,I=A+(v<<16&4294967295|v>>>16),v=T+(I^A^E)+R[6]+76029189&4294967295,T=I+(v<<23&4294967295|v>>>9),v=E+(T^I^A)+R[9]+3654602809&4294967295,E=T+(v<<4&4294967295|v>>>28),v=A+(E^T^I)+R[12]+3873151461&4294967295,A=E+(v<<11&4294967295|v>>>21),v=I+(A^E^T)+R[15]+530742520&4294967295,I=A+(v<<16&4294967295|v>>>16),v=T+(I^A^E)+R[2]+3299628645&4294967295,T=I+(v<<23&4294967295|v>>>9),v=E+(I^(T|~A))+R[0]+4096336452&4294967295,E=T+(v<<6&4294967295|v>>>26),v=A+(T^(E|~I))+R[7]+1126891415&4294967295,A=E+(v<<10&4294967295|v>>>22),v=I+(E^(A|~T))+R[14]+2878612391&4294967295,I=A+(v<<15&4294967295|v>>>17),v=T+(A^(I|~E))+R[5]+4237533241&4294967295,T=I+(v<<21&4294967295|v>>>11),v=E+(I^(T|~A))+R[12]+1700485571&4294967295,E=T+(v<<6&4294967295|v>>>26),v=A+(T^(E|~I))+R[3]+2399980690&4294967295,A=E+(v<<10&4294967295|v>>>22),v=I+(E^(A|~T))+R[10]+4293915773&4294967295,I=A+(v<<15&4294967295|v>>>17),v=T+(A^(I|~E))+R[1]+2240044497&4294967295,T=I+(v<<21&4294967295|v>>>11),v=E+(I^(T|~A))+R[8]+1873313359&4294967295,E=T+(v<<6&4294967295|v>>>26),v=A+(T^(E|~I))+R[15]+4264355552&4294967295,A=E+(v<<10&4294967295|v>>>22),v=I+(E^(A|~T))+R[6]+2734768916&4294967295,I=A+(v<<15&4294967295|v>>>17),v=T+(A^(I|~E))+R[13]+1309151649&4294967295,T=I+(v<<21&4294967295|v>>>11),v=E+(I^(T|~A))+R[4]+4149444226&4294967295,E=T+(v<<6&4294967295|v>>>26),v=A+(T^(E|~I))+R[11]+3174756917&4294967295,A=E+(v<<10&4294967295|v>>>22),v=I+(E^(A|~T))+R[2]+718787259&4294967295,I=A+(v<<15&4294967295|v>>>17),v=T+(A^(I|~E))+R[9]+3951481745&4294967295,b.g[0]=b.g[0]+E&4294967295,b.g[1]=b.g[1]+(I+(v<<21&4294967295|v>>>11))&4294967295,b.g[2]=b.g[2]+I&4294967295,b.g[3]=b.g[3]+A&4294967295}s.prototype.v=function(b,E){E===void 0&&(E=b.length);const T=E-this.blockSize,R=this.C;let I=this.h,A=0;for(;A<E;){if(I==0)for(;A<=T;)r(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<E;)if(R[I++]=b.charCodeAt(A++),I==this.blockSize){r(this,R),I=0;break}}else for(;A<E;)if(R[I++]=b[A++],I==this.blockSize){r(this,R),I=0;break}}this.h=I,this.o+=E},s.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var E=1;E<b.length-8;++E)b[E]=0;E=this.o*8;for(var T=b.length-8;T<b.length;++T)b[T]=E&255,E/=256;for(this.v(b),b=Array(16),E=0,T=0;T<4;++T)for(let R=0;R<32;R+=8)b[E++]=this.g[T]>>>R&255;return b};function i(b,E){var T=l;return Object.prototype.hasOwnProperty.call(T,b)?T[b]:T[b]=E(b)}function o(b,E){this.h=E;const T=[];let R=!0;for(let I=b.length-1;I>=0;I--){const A=b[I]|0;R&&A==E||(T[I]=A,R=!1)}this.g=T}var l={};function c(b){return-128<=b&&b<128?i(b,function(E){return new o([E|0],E<0?-1:0)}):new o([b|0],b<0?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return h;if(b<0)return C(u(-b));const E=[];let T=1;for(let R=0;b>=T;R++)E[R]=b/T|0,T*=4294967296;return new o(E,0)}function d(b,E){if(b.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(b.charAt(0)=="-")return C(d(b.substring(1),E));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=u(Math.pow(E,8));let R=h;for(let A=0;A<b.length;A+=8){var I=Math.min(8,b.length-A);const v=parseInt(b.substring(A,A+I),E);I<8?(I=u(Math.pow(E,I)),R=R.j(I).add(u(v))):(R=R.j(T),R=R.add(u(v)))}return R}var h=c(0),m=c(1),g=c(16777216);n=o.prototype,n.m=function(){if(w(this))return-C(this).m();let b=0,E=1;for(let T=0;T<this.g.length;T++){const R=this.i(T);b+=(R>=0?R:4294967296+R)*E,E*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(_(this))return"0";if(w(this))return"-"+C(this).toString(b);const E=u(Math.pow(b,6));var T=this;let R="";for(;;){const I=F(T,E).g;T=k(T,I.j(E));let A=((T.g.length>0?T.g[0]:T.h)>>>0).toString(b);if(T=I,_(T))return A+R;for(;A.length<6;)A="0"+A;R=A+R}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function _(b){if(b.h!=0)return!1;for(let E=0;E<b.g.length;E++)if(b.g[E]!=0)return!1;return!0}function w(b){return b.h==-1}n.l=function(b){return b=k(this,b),w(b)?-1:_(b)?0:1};function C(b){const E=b.g.length,T=[];for(let R=0;R<E;R++)T[R]=~b.g[R];return new o(T,~b.h).add(m)}n.abs=function(){return w(this)?C(this):this},n.add=function(b){const E=Math.max(this.g.length,b.g.length),T=[];let R=0;for(let I=0;I<=E;I++){let A=R+(this.i(I)&65535)+(b.i(I)&65535),v=(A>>>16)+(this.i(I)>>>16)+(b.i(I)>>>16);R=v>>>16,A&=65535,v&=65535,T[I]=v<<16|A}return new o(T,T[T.length-1]&-2147483648?-1:0)};function k(b,E){return b.add(C(E))}n.j=function(b){if(_(this)||_(b))return h;if(w(this))return w(b)?C(this).j(C(b)):C(C(this).j(b));if(w(b))return C(this.j(C(b)));if(this.l(g)<0&&b.l(g)<0)return u(this.m()*b.m());const E=this.g.length+b.g.length,T=[];for(var R=0;R<2*E;R++)T[R]=0;for(R=0;R<this.g.length;R++)for(let I=0;I<b.g.length;I++){const A=this.i(R)>>>16,v=this.i(R)&65535,xe=b.i(I)>>>16,tn=b.i(I)&65535;T[2*R+2*I]+=v*tn,x(T,2*R+2*I),T[2*R+2*I+1]+=A*tn,x(T,2*R+2*I+1),T[2*R+2*I+1]+=v*xe,x(T,2*R+2*I+1),T[2*R+2*I+2]+=A*xe,x(T,2*R+2*I+2)}for(b=0;b<E;b++)T[b]=T[2*b+1]<<16|T[2*b];for(b=E;b<2*E;b++)T[b]=0;return new o(T,0)};function x(b,E){for(;(b[E]&65535)!=b[E];)b[E+1]+=b[E]>>>16,b[E]&=65535,E++}function V(b,E){this.g=b,this.h=E}function F(b,E){if(_(E))throw Error("division by zero");if(_(b))return new V(h,h);if(w(b))return E=F(C(b),E),new V(C(E.g),C(E.h));if(w(E))return E=F(b,C(E)),new V(C(E.g),E.h);if(b.g.length>30){if(w(b)||w(E))throw Error("slowDivide_ only works with positive integers.");for(var T=m,R=E;R.l(b)<=0;)T=G(T),R=G(R);var I=ee(T,1),A=ee(R,1);for(R=ee(R,2),T=ee(T,2);!_(R);){var v=A.add(R);v.l(b)<=0&&(I=I.add(T),A=v),R=ee(R,1),T=ee(T,1)}return E=k(b,I.j(E)),new V(I,E)}for(I=h;b.l(E)>=0;){for(T=Math.max(1,Math.floor(b.m()/E.m())),R=Math.ceil(Math.log(T)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),A=u(T),v=A.j(E);w(v)||v.l(b)>0;)T-=R,A=u(T),v=A.j(E);_(A)&&(A=m),I=I.add(A),b=k(b,v)}return new V(I,b)}n.B=function(b){return F(this,b).h},n.and=function(b){const E=Math.max(this.g.length,b.g.length),T=[];for(let R=0;R<E;R++)T[R]=this.i(R)&b.i(R);return new o(T,this.h&b.h)},n.or=function(b){const E=Math.max(this.g.length,b.g.length),T=[];for(let R=0;R<E;R++)T[R]=this.i(R)|b.i(R);return new o(T,this.h|b.h)},n.xor=function(b){const E=Math.max(this.g.length,b.g.length),T=[];for(let R=0;R<E;R++)T[R]=this.i(R)^b.i(R);return new o(T,this.h^b.h)};function G(b){const E=b.g.length+1,T=[];for(let R=0;R<E;R++)T[R]=b.i(R)<<1|b.i(R-1)>>>31;return new o(T,b.h)}function ee(b,E){const T=E>>5;E%=32;const R=b.g.length-T,I=[];for(let A=0;A<R;A++)I[A]=E>0?b.i(A+T)>>>E|b.i(A+T+1)<<32-E:b.i(A+T);return new o(I,b.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Ld=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,jt=o}).apply(typeof $c<"u"?$c:typeof self<"u"?self:typeof window<"u"?window:{});var Rr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xd,Rs,Od,Or,qo,Md,Vd,Bd;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rr=="object"&&Rr];for(var f=0;f<a.length;++f){var p=a[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=t(this);function r(a,f){if(f)e:{var p=s;a=a.split(".");for(var y=0;y<a.length-1;y++){var P=a[y];if(!(P in p))break e;p=p[P]}a=a[a.length-1],y=p[a],f=f(y),f!=y&&f!=null&&e(p,a,{configurable:!0,writable:!0,value:f})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(f){var p=[],y;for(y in f)Object.prototype.hasOwnProperty.call(f,y)&&p.push([y,f[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function c(a,f,p){return a.call.apply(a.bind,arguments)}function u(a,f,p){return u=c,u.apply(null,arguments)}function d(a,f){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function h(a,f){function p(){}p.prototype=f.prototype,a.Z=f.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(y,P,D){for(var O=Array(arguments.length-2),K=2;K<arguments.length;K++)O[K-2]=arguments[K];return f.prototype[P].apply(y,O)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function g(a){const f=a.length;if(f>0){const p=Array(f);for(let y=0;y<f;y++)p[y]=a[y];return p}return[]}function _(a,f){for(let y=1;y<arguments.length;y++){const P=arguments[y];var p=typeof P;if(p=p!="object"?p:P?Array.isArray(P)?"array":p:"null",p=="array"||p=="object"&&typeof P.length=="number"){p=a.length||0;const D=P.length||0;a.length=p+D;for(let O=0;O<D;O++)a[p+O]=P[O]}else a.push(P)}}class w{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function C(a){o.setTimeout(()=>{throw a},0)}function k(){var a=b;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class x{constructor(){this.h=this.g=null}add(f,p){const y=V.get();y.set(f,p),this.h?this.h.next=y:this.g=y,this.h=y}}var V=new w(()=>new F,a=>a.reset());class F{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let G,ee=!1,b=new x,E=()=>{const a=Promise.resolve(void 0);G=()=>{a.then(T)}};function T(){for(var a;a=k();){try{a.h.call(a.g)}catch(p){C(p)}var f=V;f.j(a),f.h<100&&(f.h++,a.next=f.g,f.g=a)}ee=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,f),o.removeEventListener("test",p,f)}catch{}return a}();function v(a){return/^[\s\xa0]*$/.test(a)}function xe(a,f){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,f)}h(xe,I),xe.prototype.init=function(a,f){const p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget,f||(p=="mouseover"?f=a.fromElement:p=="mouseout"&&(f=a.toElement)),this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&xe.Z.h.call(this)},xe.prototype.h=function(){xe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var tn="closure_listenable_"+(Math.random()*1e6|0),Om=0;function Mm(a,f,p,y,P){this.listener=a,this.proxy=null,this.src=f,this.type=p,this.capture=!!y,this.ha=P,this.key=++Om,this.da=this.fa=!1}function hr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function fr(a,f,p){for(const y in a)f.call(p,a[y],y,a)}function Vm(a,f){for(const p in a)f.call(void 0,a[p],p,a)}function Rl(a){const f={};for(const p in a)f[p]=a[p];return f}const Pl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Al(a,f){let p,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(p in y)a[p]=y[p];for(let D=0;D<Pl.length;D++)p=Pl[D],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function mr(a){this.src=a,this.g={},this.h=0}mr.prototype.add=function(a,f,p,y,P){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const O=Ji(a,f,y,P);return O>-1?(f=a[O],p||(f.fa=!1)):(f=new Mm(f,this.src,D,!!y,P),f.fa=p,a.push(f)),f};function Qi(a,f){const p=f.type;if(p in a.g){var y=a.g[p],P=Array.prototype.indexOf.call(y,f,void 0),D;(D=P>=0)&&Array.prototype.splice.call(y,P,1),D&&(hr(f),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Ji(a,f,p,y){for(let P=0;P<a.length;++P){const D=a[P];if(!D.da&&D.listener==f&&D.capture==!!p&&D.ha==y)return P}return-1}var Yi="closure_lm_"+(Math.random()*1e6|0),Zi={};function Dl(a,f,p,y,P){if(Array.isArray(f)){for(let D=0;D<f.length;D++)Dl(a,f[D],p,y,P);return null}return p=Ll(p),a&&a[tn]?a.J(f,p,l(y)?!!y.capture:!1,P):Bm(a,f,p,!1,y,P)}function Bm(a,f,p,y,P,D){if(!f)throw Error("Invalid event type");const O=l(P)?!!P.capture:!!P;let K=to(a);if(K||(a[Yi]=K=new mr(a)),p=K.add(f,p,y,O,D),p.proxy)return p;if(y=Fm(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)A||(P=O),P===void 0&&(P=!1),a.addEventListener(f.toString(),y,P);else if(a.attachEvent)a.attachEvent(Nl(f.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Fm(){function a(p){return f.call(a.src,a.listener,p)}const f=Um;return a}function kl(a,f,p,y,P){if(Array.isArray(f))for(var D=0;D<f.length;D++)kl(a,f[D],p,y,P);else y=l(y)?!!y.capture:!!y,p=Ll(p),a&&a[tn]?(a=a.i,D=String(f).toString(),D in a.g&&(f=a.g[D],p=Ji(f,p,y,P),p>-1&&(hr(f[p]),Array.prototype.splice.call(f,p,1),f.length==0&&(delete a.g[D],a.h--)))):a&&(a=to(a))&&(f=a.g[f.toString()],a=-1,f&&(a=Ji(f,p,y,P)),(p=a>-1?f[a]:null)&&eo(p))}function eo(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[tn])Qi(f.i,a);else{var p=a.type,y=a.proxy;f.removeEventListener?f.removeEventListener(p,y,a.capture):f.detachEvent?f.detachEvent(Nl(p),y):f.addListener&&f.removeListener&&f.removeListener(y),(p=to(f))?(Qi(p,a),p.h==0&&(p.src=null,f[Yi]=null)):hr(a)}}}function Nl(a){return a in Zi?Zi[a]:Zi[a]="on"+a}function Um(a,f){if(a.da)a=!0;else{f=new xe(f,this);const p=a.listener,y=a.ha||a.src;a.fa&&eo(a),a=p.call(y,f)}return a}function to(a){return a=a[Yi],a instanceof mr?a:null}var no="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ll(a){return typeof a=="function"?a:(a[no]||(a[no]=function(f){return a.handleEvent(f)}),a[no])}function Ie(){R.call(this),this.i=new mr(this),this.M=this,this.G=null}h(Ie,R),Ie.prototype[tn]=!0,Ie.prototype.removeEventListener=function(a,f,p,y){kl(this,a,f,p,y)};function ke(a,f){var p,y=a.G;if(y)for(p=[];y;y=y.G)p.push(y);if(a=a.M,y=f.type||f,typeof f=="string")f=new I(f,a);else if(f instanceof I)f.target=f.target||a;else{var P=f;f=new I(y,a),Al(f,P)}P=!0;let D,O;if(p)for(O=p.length-1;O>=0;O--)D=f.g=p[O],P=pr(D,y,!0,f)&&P;if(D=f.g=a,P=pr(D,y,!0,f)&&P,P=pr(D,y,!1,f)&&P,p)for(O=0;O<p.length;O++)D=f.g=p[O],P=pr(D,y,!1,f)&&P}Ie.prototype.N=function(){if(Ie.Z.N.call(this),this.i){var a=this.i;for(const f in a.g){const p=a.g[f];for(let y=0;y<p.length;y++)hr(p[y]);delete a.g[f],a.h--}}this.G=null},Ie.prototype.J=function(a,f,p,y){return this.i.add(String(a),f,!1,p,y)},Ie.prototype.K=function(a,f,p,y){return this.i.add(String(a),f,!0,p,y)};function pr(a,f,p,y){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();let P=!0;for(let D=0;D<f.length;++D){const O=f[D];if(O&&!O.da&&O.capture==p){const K=O.listener,me=O.ha||O.src;O.fa&&Qi(a.i,O),P=K.call(me,y)!==!1&&P}}return P&&!y.defaultPrevented}function $m(a,f){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(a,f||0)}function xl(a){a.g=$m(()=>{a.g=null,a.i&&(a.i=!1,xl(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class Hm extends R{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:xl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function as(a){R.call(this),this.h=a,this.g={}}h(as,R);var Ol=[];function Ml(a){fr(a.g,function(f,p){this.g.hasOwnProperty(p)&&eo(f)},a),a.g={}}as.prototype.N=function(){as.Z.N.call(this),Ml(this)},as.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var so=o.JSON.stringify,jm=o.JSON.parse,Wm=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Vl(){}function Bl(){}var ls={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ro(){I.call(this,"d")}h(ro,I);function io(){I.call(this,"c")}h(io,I);var nn={},Fl=null;function gr(){return Fl=Fl||new Ie}nn.Ia="serverreachability";function Ul(a){I.call(this,nn.Ia,a)}h(Ul,I);function cs(a){const f=gr();ke(f,new Ul(f))}nn.STAT_EVENT="statevent";function $l(a,f){I.call(this,nn.STAT_EVENT,a),this.stat=f}h($l,I);function Ne(a){const f=gr();ke(f,new $l(f,a))}nn.Ja="timingevent";function Hl(a,f){I.call(this,nn.Ja,a),this.size=f}h(Hl,I);function us(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},f)}function ds(){this.g=!0}ds.prototype.ua=function(){this.g=!1};function qm(a,f,p,y,P,D){a.info(function(){if(a.g)if(D){var O="",K=D.split("&");for(let ne=0;ne<K.length;ne++){var me=K[ne].split("=");if(me.length>1){const we=me[0];me=me[1];const Ze=we.split("_");O=Ze.length>=2&&Ze[1]=="type"?O+(we+"="+me+"&"):O+(we+"=redacted&")}}}else O=null;else O=D;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+f+`
`+p+`
`+O})}function zm(a,f,p,y,P,D,O){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+f+`
`+p+`
`+D+" "+O})}function Pn(a,f,p,y){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Km(a,p)+(y?" "+y:"")})}function Gm(a,f){a.info(function(){return"TIMEOUT: "+f})}ds.prototype.info=function(){};function Km(a,f){if(!a.g)return f;if(!f)return null;try{const D=JSON.parse(f);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var p=D[a];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var P=y[0];if(P!="noop"&&P!="stop"&&P!="close")for(let O=1;O<y.length;O++)y[O]=""}}}}return so(D)}catch{return f}}var yr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},jl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Wl;function oo(){}h(oo,Vl),oo.prototype.g=function(){return new XMLHttpRequest},Wl=new oo;function hs(a){return encodeURIComponent(String(a))}function Xm(a){var f=1;a=a.split(":");const p=[];for(;f>0&&a.length;)p.push(a.shift()),f--;return a.length&&p.push(a.join(":")),p}function Rt(a,f,p,y){this.j=a,this.i=f,this.l=p,this.S=y||1,this.V=new as(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ql}function ql(){this.i=null,this.g="",this.h=!1}var zl={},ao={};function lo(a,f,p){a.M=1,a.A=wr(Ye(f)),a.u=p,a.R=!0,Gl(a,null)}function Gl(a,f){a.F=Date.now(),_r(a),a.B=Ye(a.A);var p=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),oc(p.i,"t",y),a.C=0,p=a.j.L,a.h=new ql,a.g=Ic(a.j,p?f:null,!a.u),a.P>0&&(a.O=new Hm(u(a.Y,a,a.g),a.P)),f=a.V,p=a.g,y=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(Ol[0]=P.toString()),P=Ol);for(let D=0;D<P.length;D++){const O=Dl(p,P[D],y||f.handleEvent,!1,f.h||f);if(!O)break;f.g[O.key]=O}f=a.J?Rl(a.J):{},a.u?(a.v||(a.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,f)):(a.v="GET",a.g.ea(a.B,a.v,null,f)),cs(),qm(a.i,a.v,a.B,a.l,a.S,a.u)}Rt.prototype.ba=function(a){a=a.target;const f=this.O;f&&Dt(a)==3?f.j():this.Y(a)},Rt.prototype.Y=function(a){try{if(a==this.g)e:{const K=Dt(this.g),me=this.g.ya(),ne=this.g.ca();if(!(K<3)&&(K!=3||this.g&&(this.h.h||this.g.la()||fc(this.g)))){this.K||K!=4||me==7||(me==8||ne<=0?cs(3):cs(2)),co(this);var f=this.g.ca();this.X=f;var p=Qm(this);if(this.o=f==200,zm(this.i,this.v,this.B,this.l,this.S,K,f),this.o){if(this.U&&!this.L){t:{if(this.g){var y,P=this.g;if((y=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(y)){var D=y;break t}}D=null}if(a=D)Pn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,uo(this,a);else{this.o=!1,this.m=3,Ne(12),sn(this),fs(this);break e}}if(this.R){a=!0;let we;for(;!this.K&&this.C<p.length;)if(we=Jm(this,p),we==ao){K==4&&(this.m=4,Ne(14),a=!1),Pn(this.i,this.l,null,"[Incomplete Response]");break}else if(we==zl){this.m=4,Ne(15),Pn(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else Pn(this.i,this.l,we,null),uo(this,we);if(Kl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),K!=4||p.length!=0||this.h.h||(this.m=1,Ne(16),a=!1),this.o=this.o&&a,!a)Pn(this.i,this.l,p,"[Invalid Chunked Response]"),sn(this),fs(this);else if(p.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),wo(O),O.P=!0,Ne(11))}}else Pn(this.i,this.l,p,null),uo(this,p);K==4&&sn(this),this.o&&!this.K&&(K==4?Ec(this.j,this):(this.o=!1,_r(this)))}else dp(this.g),f==400&&p.indexOf("Unknown SID")>0?(this.m=3,Ne(12)):(this.m=0,Ne(13)),sn(this),fs(this)}}}catch{}finally{}};function Qm(a){if(!Kl(a))return a.g.la();const f=fc(a.g);if(f==="")return"";let p="";const y=f.length,P=Dt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return sn(a),fs(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<y;D++)a.h.h=!0,p+=a.h.i.decode(f[D],{stream:!(P&&D==y-1)});return f.length=0,a.h.g+=p,a.C=0,a.h.g}function Kl(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Jm(a,f){var p=a.C,y=f.indexOf(`
`,p);return y==-1?ao:(p=Number(f.substring(p,y)),isNaN(p)?zl:(y+=1,y+p>f.length?ao:(f=f.slice(y,y+p),a.C=y+p,f)))}Rt.prototype.cancel=function(){this.K=!0,sn(this)};function _r(a){a.T=Date.now()+a.H,Xl(a,a.H)}function Xl(a,f){if(a.D!=null)throw Error("WatchDog timer not null");a.D=us(u(a.aa,a),f)}function co(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Rt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Gm(this.i,this.B),this.M!=2&&(cs(),Ne(17)),sn(this),this.m=2,fs(this)):Xl(this,this.T-a)};function fs(a){a.j.I==0||a.K||Ec(a.j,a)}function sn(a){co(a);var f=a.O;f&&typeof f.dispose=="function"&&f.dispose(),a.O=null,Ml(a.V),a.g&&(f=a.g,a.g=null,f.abort(),f.dispose())}function uo(a,f){try{var p=a.j;if(p.I!=0&&(p.g==a||ho(p.h,a))){if(!a.L&&ho(p.h,a)&&p.I==3){try{var y=p.Ba.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Ir(p),Tr(p);else break e;_o(p),Ne(18)}}else p.xa=P[1],0<p.xa-p.K&&P[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=us(u(p.Va,p),6e3));Yl(p.h)<=1&&p.ta&&(p.ta=void 0)}else on(p,11)}else if((a.L||p.g==a)&&Ir(p),!v(f))for(P=p.Ba.g.parse(f),f=0;f<P.length;f++){let ne=P[f];const we=ne[0];if(!(we<=p.K))if(p.K=we,ne=ne[1],p.I==2)if(ne[0]=="c"){p.M=ne[1],p.ba=ne[2];const Ze=ne[3];Ze!=null&&(p.ka=Ze,p.j.info("VER="+p.ka));const an=ne[4];an!=null&&(p.za=an,p.j.info("SVER="+p.za));const kt=ne[5];kt!=null&&typeof kt=="number"&&kt>0&&(y=1.5*kt,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const Nt=a.g;if(Nt){const Sr=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sr){var D=y.h;D.g||Sr.indexOf("spdy")==-1&&Sr.indexOf("quic")==-1&&Sr.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(fo(D,D.h),D.h=null))}if(y.G){const Eo=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;Eo&&(y.wa=Eo,se(y.J,y.G,Eo))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var O=a;if(y.na=Cc(y,y.L?y.ba:null,y.W),O.L){Zl(y.h,O);var K=O,me=y.O;me&&(K.H=me),K.D&&(co(K),_r(K)),y.g=O}else _c(y);p.i.length>0&&Cr(p)}else ne[0]!="stop"&&ne[0]!="close"||on(p,7);else p.I==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?on(p,7):yo(p):ne[0]!="noop"&&p.l&&p.l.qa(ne),p.A=0)}}cs(4)}catch{}}var Ym=class{constructor(a,f){this.g=a,this.map=f}};function Ql(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Jl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Yl(a){return a.h?1:a.g?a.g.size:0}function ho(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function fo(a,f){a.g?a.g.add(f):a.h=f}function Zl(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Ql.prototype.cancel=function(){if(this.i=ec(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ec(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const p of a.g.values())f=f.concat(p.G);return f}return g(a.i)}var tc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zm(a,f){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const y=a[p].indexOf("=");let P,D=null;y>=0?(P=a[p].substring(0,y),D=a[p].substring(y+1)):P=a[p],f(P,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Pt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;a instanceof Pt?(this.l=a.l,ms(this,a.j),this.o=a.o,this.g=a.g,ps(this,a.u),this.h=a.h,mo(this,ac(a.i)),this.m=a.m):a&&(f=String(a).match(tc))?(this.l=!1,ms(this,f[1]||"",!0),this.o=gs(f[2]||""),this.g=gs(f[3]||"",!0),ps(this,f[4]),this.h=gs(f[5]||"",!0),mo(this,f[6]||"",!0),this.m=gs(f[7]||"")):(this.l=!1,this.i=new _s(null,this.l))}Pt.prototype.toString=function(){const a=[];var f=this.j;f&&a.push(ys(f,nc,!0),":");var p=this.g;return(p||f=="file")&&(a.push("//"),(f=this.o)&&a.push(ys(f,nc,!0),"@"),a.push(hs(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(ys(p,p.charAt(0)=="/"?np:tp,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",ys(p,rp)),a.join("")},Pt.prototype.resolve=function(a){const f=Ye(this);let p=!!a.j;p?ms(f,a.j):p=!!a.o,p?f.o=a.o:p=!!a.g,p?f.g=a.g:p=a.u!=null;var y=a.h;if(p)ps(f,a.u);else if(p=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var P=f.h.lastIndexOf("/");P!=-1&&(y=f.h.slice(0,P+1)+y)}if(P=y,P==".."||P==".")y="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){y=P.lastIndexOf("/",0)==0,P=P.split("/");const D=[];for(let O=0;O<P.length;){const K=P[O++];K=="."?y&&O==P.length&&D.push(""):K==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),y&&O==P.length&&D.push("")):(D.push(K),y=!0)}y=D.join("/")}else y=P}return p?f.h=y:p=a.i.toString()!=="",p?mo(f,ac(a.i)):p=!!a.m,p&&(f.m=a.m),f};function Ye(a){return new Pt(a)}function ms(a,f,p){a.j=p?gs(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function ps(a,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);a.u=f}else a.u=null}function mo(a,f,p){f instanceof _s?(a.i=f,ip(a.i,a.l)):(p||(f=ys(f,sp)),a.i=new _s(f,a.l))}function se(a,f,p){a.i.set(f,p)}function wr(a){return se(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function gs(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ys(a,f,p){return typeof a=="string"?(a=encodeURI(a).replace(f,ep),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ep(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var nc=/[#\/\?@]/g,tp=/[#\?:]/g,np=/[#\?]/g,sp=/[#\?@]/g,rp=/#/g;function _s(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function rn(a){a.g||(a.g=new Map,a.h=0,a.i&&Zm(a.i,function(f,p){a.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}n=_s.prototype,n.add=function(a,f){rn(this),this.i=null,a=An(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(f),this.h+=1,this};function sc(a,f){rn(a),f=An(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function rc(a,f){return rn(a),f=An(a,f),a.g.has(f)}n.forEach=function(a,f){rn(this),this.g.forEach(function(p,y){p.forEach(function(P){a.call(f,P,y,this)},this)},this)};function ic(a,f){rn(a);let p=[];if(typeof f=="string")rc(a,f)&&(p=p.concat(a.g.get(An(a,f))));else for(a=Array.from(a.g.values()),f=0;f<a.length;f++)p=p.concat(a[f]);return p}n.set=function(a,f){return rn(this),this.i=null,a=An(this,a),rc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},n.get=function(a,f){return a?(a=ic(this,a),a.length>0?String(a[0]):f):f};function oc(a,f,p){sc(a,f),p.length>0&&(a.i=null,a.g.set(An(a,f),g(p)),a.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(let y=0;y<f.length;y++){var p=f[y];const P=hs(p);p=ic(this,p);for(let D=0;D<p.length;D++){let O=P;p[D]!==""&&(O+="="+hs(p[D])),a.push(O)}}return this.i=a.join("&")};function ac(a){const f=new _s;return f.i=a.i,a.g&&(f.g=new Map(a.g),f.h=a.h),f}function An(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function ip(a,f){f&&!a.j&&(rn(a),a.i=null,a.g.forEach(function(p,y){const P=y.toLowerCase();y!=P&&(sc(this,y),oc(this,P,p))},a)),a.j=f}function op(a,f){const p=new ds;if(o.Image){const y=new Image;y.onload=d(At,p,"TestLoadImage: loaded",!0,f,y),y.onerror=d(At,p,"TestLoadImage: error",!1,f,y),y.onabort=d(At,p,"TestLoadImage: abort",!1,f,y),y.ontimeout=d(At,p,"TestLoadImage: timeout",!1,f,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else f(!1)}function ap(a,f){const p=new ds,y=new AbortController,P=setTimeout(()=>{y.abort(),At(p,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:y.signal}).then(D=>{clearTimeout(P),D.ok?At(p,"TestPingServer: ok",!0,f):At(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(P),At(p,"TestPingServer: error",!1,f)})}function At(a,f,p,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(p)}catch{}}function lp(){this.g=new Wm}function po(a){this.i=a.Sb||null,this.h=a.ab||!1}h(po,Vl),po.prototype.g=function(){return new Er(this.i,this.h)};function Er(a,f){Ie.call(this),this.H=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}h(Er,Ie),n=Er.prototype,n.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=f,this.readyState=1,Es(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(f.body=a),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ws(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Es(this)),this.g&&(this.readyState=3,Es(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;lc(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function lc(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?ws(this):Es(this),this.readyState==3&&lc(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,ws(this))},n.Na=function(a){this.g&&(this.response=a,ws(this))},n.ga=function(){this.g&&ws(this)};function ws(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Es(a)}n.setRequestHeader=function(a,f){this.A.append(a,f)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=f.next();return a.join(`\r
`)};function Es(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Er.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function cc(a){let f="";return fr(a,function(p,y){f+=y,f+=":",f+=p,f+=`\r
`}),f}function go(a,f,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=cc(p),typeof a=="string"?p!=null&&hs(p):se(a,f,p))}function ue(a){Ie.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}h(ue,Ie);var cp=/^https?$/i,up=["POST","PUT"];n=ue.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,f,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Wl.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(D){uc(this,D);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)p.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())p.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(up,f,void 0)>=0)||y||P||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,O]of p)this.g.setRequestHeader(D,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){uc(this,D)}};function uc(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.o=5,dc(a),vr(a)}function dc(a){a.A||(a.A=!0,ke(a,"complete"),ke(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ke(this,"complete"),ke(this,"abort"),vr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vr(this,!0)),ue.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?hc(this):this.Xa())},n.Xa=function(){hc(this)};function hc(a){if(a.h&&typeof i<"u"){if(a.v&&Dt(a)==4)setTimeout(a.Ca.bind(a),0);else if(ke(a,"readystatechange"),Dt(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var y;if(y=D===0){let O=String(a.D).match(tc)[1]||null;!O&&o.self&&o.self.location&&(O=o.self.location.protocol.slice(0,-1)),y=!cp.test(O?O.toLowerCase():"")}p=y}if(p)ke(a,"complete"),ke(a,"success");else{a.o=6;try{var P=Dt(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",dc(a)}}finally{vr(a)}}}}function vr(a,f){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,f||ke(a,"ready");try{p.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Dt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Dt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),jm(f)}};function fc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function dp(a){const f={};a=(a.g&&Dt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(v(a[y]))continue;var p=Xm(a[y]);const P=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=f[P]||[];f[P]=D,D.push(p)}Vm(f,function(y){return y.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function vs(a,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||f}function mc(a){this.za=0,this.i=[],this.j=new ds,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=vs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=vs("baseRetryDelayMs",5e3,a),this.Za=vs("retryDelaySeedMs",1e4,a),this.Ta=vs("forwardChannelMaxRetries",2,a),this.va=vs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Ql(a&&a.concurrentRequestLimit),this.Ba=new lp,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=mc.prototype,n.ka=8,n.I=1,n.connect=function(a,f,p,y){Ne(0),this.W=a,this.H=f||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=Cc(this,null,this.W),Cr(this)};function yo(a){if(pc(a),a.I==3){var f=a.V++,p=Ye(a.J);if(se(p,"SID",a.M),se(p,"RID",f),se(p,"TYPE","terminate"),Ts(a,p),f=new Rt(a,a.j,f),f.M=2,f.A=wr(Ye(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=f.A,p=!0),p||(f.g=Ic(f.j,null),f.g.ea(f.A)),f.F=Date.now(),_r(f)}Tc(a)}function Tr(a){a.g&&(wo(a),a.g.cancel(),a.g=null)}function pc(a){Tr(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ir(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Cr(a){if(!Jl(a.h)&&!a.m){a.m=!0;var f=a.Ea;G||E(),ee||(G(),ee=!0),b.add(f,a),a.D=0}}function hp(a,f){return Yl(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=f.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=us(u(a.Ea,a,f),vc(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new Rt(this,this.j,a);let D=this.o;if(this.U&&(D?(D=Rl(D),Al(D,this.U)):D=this.U),this.u!==null||this.R||(P.J=D,D=null),this.S)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,f>4096){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=yc(this,P,f),p=Ye(this.J),se(p,"RID",a),se(p,"CVER",22),this.G&&se(p,"X-HTTP-Session-Id",this.G),Ts(this,p),D&&(this.R?f="headers="+hs(cc(D))+"&"+f:this.u&&go(p,this.u,D)),fo(this.h,P),this.Ra&&se(p,"TYPE","init"),this.S?(se(p,"$req",f),se(p,"SID","null"),P.U=!0,lo(P,p,null)):lo(P,p,f),this.I=2}}else this.I==3&&(a?gc(this,a):this.i.length==0||Jl(this.h)||gc(this))};function gc(a,f){var p;f?p=f.l:p=a.V++;const y=Ye(a.J);se(y,"SID",a.M),se(y,"RID",p),se(y,"AID",a.K),Ts(a,y),a.u&&a.o&&go(y,a.u,a.o),p=new Rt(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),f&&(a.i=f.G.concat(a.i)),f=yc(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),fo(a.h,p),lo(p,y,f)}function Ts(a,f){a.H&&fr(a.H,function(p,y){se(f,y,p)}),a.l&&fr({},function(p,y){se(f,y,p)})}function yc(a,f,p){p=Math.min(a.i.length,p);const y=a.l?u(a.l.Ka,a.l,a):null;e:{var P=a.i;let K=-1;for(;;){const me=["count="+p];K==-1?p>0?(K=P[0].g,me.push("ofs="+K)):K=0:me.push("ofs="+K);let ne=!0;for(let we=0;we<p;we++){var D=P[we].g;const Ze=P[we].map;if(D-=K,D<0)K=Math.max(0,P[we].g-100),ne=!1;else try{D="req"+D+"_"||"";try{var O=Ze instanceof Map?Ze:Object.entries(Ze);for(const[an,kt]of O){let Nt=kt;l(kt)&&(Nt=so(kt)),me.push(D+an+"="+encodeURIComponent(Nt))}}catch(an){throw me.push(D+"type="+encodeURIComponent("_badmap")),an}}catch{y&&y(Ze)}}if(ne){O=me.join("&");break e}}O=void 0}return a=a.i.splice(0,p),f.G=a,O}function _c(a){if(!a.g&&!a.v){a.Y=1;var f=a.Da;G||E(),ee||(G(),ee=!0),b.add(f,a),a.A=0}}function _o(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=us(u(a.Da,a),vc(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,wc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=us(u(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ne(10),Tr(this),wc(this))};function wo(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function wc(a){a.g=new Rt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var f=Ye(a.na);se(f,"RID","rpc"),se(f,"SID",a.M),se(f,"AID",a.K),se(f,"CI",a.F?"0":"1"),!a.F&&a.ia&&se(f,"TO",a.ia),se(f,"TYPE","xmlhttp"),Ts(a,f),a.u&&a.o&&go(f,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=wr(Ye(f)),p.u=null,p.R=!0,Gl(p,a)}n.Va=function(){this.C!=null&&(this.C=null,Tr(this),_o(this),Ne(19))};function Ir(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Ec(a,f){var p=null;if(a.g==f){Ir(a),wo(a),a.g=null;var y=2}else if(ho(a.h,f))p=f.G,Zl(a.h,f),y=1;else return;if(a.I!=0){if(f.o)if(y==1){p=f.u?f.u.length:0,f=Date.now()-f.F;var P=a.D;y=gr(),ke(y,new Hl(y,p)),Cr(a)}else _c(a);else if(P=f.m,P==3||P==0&&f.X>0||!(y==1&&hp(a,f)||y==2&&_o(a)))switch(p&&p.length>0&&(f=a.h,f.i=f.i.concat(p)),P){case 1:on(a,5);break;case 4:on(a,10);break;case 3:on(a,6);break;default:on(a,2)}}}function vc(a,f){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*f}function on(a,f){if(a.j.info("Error code "+f),f==2){var p=u(a.bb,a),y=a.Ua;const P=!y;y=new Pt(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ms(y,"https"),wr(y),P?op(y.toString(),p):ap(y.toString(),p)}else Ne(2);a.I=0,a.l&&a.l.pa(f),Tc(a),pc(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function Tc(a){if(a.I=0,a.ja=[],a.l){const f=ec(a.h);(f.length!=0||a.i.length!=0)&&(_(a.ja,f),_(a.ja,a.i),a.h.i.length=0,g(a.i),a.i.length=0),a.l.oa()}}function Cc(a,f,p){var y=p instanceof Pt?Ye(p):new Pt(p);if(y.g!="")f&&(y.g=f+"."+y.g),ps(y,y.u);else{var P=o.location;y=P.protocol,f=f?f+"."+P.hostname:P.hostname,P=+P.port;const D=new Pt(null);y&&ms(D,y),f&&(D.g=f),P&&ps(D,P),p&&(D.h=p),y=D}return p=a.G,f=a.wa,p&&f&&se(y,p,f),se(y,"VER",a.ka),Ts(a,y),y}function Ic(a,f,p){if(f&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Aa&&!a.ma?new ue(new po({ab:p})):new ue(a.ma),f.Fa(a.L),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function bc(){}n=bc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function br(){}br.prototype.g=function(a,f){return new Fe(a,f)};function Fe(a,f){Ie.call(this),this.g=new mc(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(a?a["X-WebChannel-Client-Profile"]=f.sa:a={"X-WebChannel-Client-Profile":f.sa}),this.g.U=a,(a=f&&f.Qb)&&!v(a)&&(this.g.u=a),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!v(f)&&(this.g.G=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new Dn(this)}h(Fe,Ie),Fe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Fe.prototype.close=function(){yo(this.g)},Fe.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=so(a),a=p);f.i.push(new Ym(f.Ya++,a)),f.I==3&&Cr(f)},Fe.prototype.N=function(){this.g.l=null,delete this.j,yo(this.g),delete this.g,Fe.Z.N.call(this)};function Sc(a){ro.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const p in f){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}h(Sc,ro);function Rc(){io.call(this),this.status=1}h(Rc,io);function Dn(a){this.g=a}h(Dn,bc),Dn.prototype.ra=function(){ke(this.g,"a")},Dn.prototype.qa=function(a){ke(this.g,new Sc(a))},Dn.prototype.pa=function(a){ke(this.g,new Rc)},Dn.prototype.oa=function(){ke(this.g,"b")},br.prototype.createWebChannel=br.prototype.g,Fe.prototype.send=Fe.prototype.o,Fe.prototype.open=Fe.prototype.m,Fe.prototype.close=Fe.prototype.close,Bd=function(){return new br},Vd=function(){return gr()},Md=nn,qo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},yr.NO_ERROR=0,yr.TIMEOUT=8,yr.HTTP_ERROR=6,Or=yr,jl.COMPLETE="complete",Od=jl,Bl.EventType=ls,ls.OPEN="a",ls.CLOSE="b",ls.ERROR="c",ls.MESSAGE="d",Ie.prototype.listen=Ie.prototype.J,Rs=Bl,ue.prototype.listenOnce=ue.prototype.K,ue.prototype.getLastError=ue.prototype.Ha,ue.prototype.getLastErrorCode=ue.prototype.ya,ue.prototype.getStatus=ue.prototype.ca,ue.prototype.getResponseJson=ue.prototype.La,ue.prototype.getResponseText=ue.prototype.la,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Fa,xd=ue}).apply(typeof Rr<"u"?Rr:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
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
 */let Yn="12.8.0";function Zg(n){Yn=n}/**
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
 */const yn=new ya("@firebase/firestore");function Nn(){return yn.logLevel}function M(n,...e){if(yn.logLevel<=X.DEBUG){const t=e.map(Ea);yn.debug(`Firestore (${Yn}): ${n}`,...t)}}function yt(n,...e){if(yn.logLevel<=X.ERROR){const t=e.map(Ea);yn.error(`Firestore (${Yn}): ${n}`,...t)}}function Wn(n,...e){if(yn.logLevel<=X.WARN){const t=e.map(Ea);yn.warn(`Firestore (${Yn}): ${n}`,...t)}}function Ea(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function j(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Fd(n,s,t)}function Fd(n,e,t){let s=`FIRESTORE (${Yn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw yt(s),new Error(s)}function Z(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Fd(e,r,s)}function q(n,e){return n}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends ct{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ht{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Ud{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ey{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Se.UNAUTHENTICATED))}shutdown(){}}class ty{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ny{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0,42304);let s=this.i;const r=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let i=new ht;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ht,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},l=c=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ht)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Z(typeof s.accessToken=="string",31837,{l:s}),new Ud(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string",2055,{h:e}),new Se(e)}}class sy{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ry{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new sy(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iy{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ve(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Z(this.o===void 0,3512);const s=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Hc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Z(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Hc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function oy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class va{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=oy(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function Q(n,e){return n<e?-1:n>e?1:0}function zo(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return So(r)===So(i)?Q(r,i):So(r)?1:-1}return Q(n.length,e.length)}const ay=55296,ly=57343;function So(n){const e=n.charCodeAt(0);return e>=ay&&e<=ly}function qn(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
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
 */const jc="__name__";class et{constructor(e,t,s){t===void 0?t=0:t>e.length&&j(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&j(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return et.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof et?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=et.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return Q(e.length,t.length)}static compareSegments(e,t){const s=et.isNumericId(e),r=et.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?et.extractNumericId(e).compare(et.extractNumericId(t)):zo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return jt.fromString(e.substring(4,e.length-2))}}class re extends et{construct(e,t,s){return new re(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new re(t)}static emptyPath(){return new re([])}}const cy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends et{construct(e,t,s){return new Te(e,t,s)}static isValidIdentifier(e){return cy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===jc}static keyField(){return new Te([jc])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new B(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new B(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(t)}static emptyPath(){return new Te([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(re.fromString(e))}static fromName(e){return new $(re.fromString(e).popFirst(5))}static empty(){return new $(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new re(e.slice()))}}/**
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
 */function $d(n,e,t){if(!t)throw new B(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function uy(n,e,t,s){if(e===!0&&s===!0)throw new B(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Wc(n){if(!$.isDocumentKey(n))throw new B(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function qc(n){if($.isDocumentKey(n))throw new B(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Hd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ta(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":j(12329,{type:typeof n})}function _t(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ta(n);throw new B(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function fe(n,e){const t={typeString:n};return e&&(t.value=e),t}function er(n,e){if(!Hd(n))throw new B(L.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const o=n[s];if(r&&typeof o!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new B(L.INVALID_ARGUMENT,t);return!0}/**
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
 */const zc=-62135596800,Gc=1e6;class z{static now(){return z.fromMillis(Date.now())}static fromDate(e){return z.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Gc);return new z(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<zc)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gc}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:z._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(er(e,z._jsonSchema))return new z(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-zc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}z._jsonSchemaVersion="firestore/timestamp/1.0",z._jsonSchema={type:fe("string",z._jsonSchemaVersion),seconds:fe("number"),nanoseconds:fe("number")};/**
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
 */class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new z(0,0))}static max(){return new W(new z(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Hs=-1;function dy(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=W.fromTimestamp(s===1e9?new z(t+1,0):new z(t,s));return new zt(r,$.empty(),e)}function hy(n){return new zt(n.readTime,n.key,Hs)}class zt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new zt(W.min(),$.empty(),Hs)}static max(){return new zt(W.max(),$.empty(),Hs)}}function fy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
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
 */const my="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class py{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Zn(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==my)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,s)=>{t(e)})}static reject(e){return new N((t,s)=>{s(e)})}static waitFor(e){return new N((t,s)=>{let r=0,i=0,o=!1;e.forEach(l=>{++r,l.next(()=>{++i,o&&i===r&&t()},c=>s(c))}),o=!0,i===r&&t()})}static or(e){let t=N.resolve(!1);for(const s of e)t=t.next(r=>r?N.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new N((s,r)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(d=>{o[u]=d,++l,l===i&&s(o)},d=>r(d))}})}static doWhile(e,t){return new N((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function gy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function es(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ei{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ei.ce=-1;/**
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
 */const Ca=-1;function vi(n){return n==null}function Xr(n){return n===0&&1/n==-1/0}function yy(n){return typeof n=="number"&&Number.isInteger(n)&&!Xr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const jd="";function _y(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Kc(e)),e=wy(n.get(t),e);return Kc(e)}function wy(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case jd:t+="";break;default:t+=i}}return t}function Kc(n){return n+jd+""}/**
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
 */function Xc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Zt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Wd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class le{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pr(this.root,e,this.comparator,!0)}}class Pr{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??ve.RED,this.left=r??ve.EMPTY,this.right=i??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new ve(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ve.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw j(27949);return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _e{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Qc(this.data.getIterator())}getIteratorFrom(e){return new Qc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new _e(this.comparator);return t.data=e,t}}class Qc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ue{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new _e(Te.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qn(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class qd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ce{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qd("Invalid base64 string: "+i):i}}(e);return new Ce(t)}static fromUint8Array(e){const t=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new Ce(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ce.EMPTY_BYTE_STRING=new Ce("");const Ey=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gt(n){if(Z(!!n,39018),typeof n=="string"){let e=0;const t=Ey.exec(n);if(Z(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:de(n.seconds),nanos:de(n.nanos)}}function de(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Kt(n){return typeof n=="string"?Ce.fromBase64String(n):Ce.fromUint8Array(n)}/**
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
 */const zd="server_timestamp",Gd="__type__",Kd="__previous_value__",Xd="__local_write_time__";function Ia(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Gd])==null?void 0:s.stringValue)===zd}function Ti(n){const e=n.mapValue.fields[Kd];return Ia(e)?Ti(e):e}function js(n){const e=Gt(n.mapValue.fields[Xd].timestampValue);return new z(e.seconds,e.nanos)}/**
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
 */class vy{constructor(e,t,s,r,i,o,l,c,u,d,h){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d,this.apiKey=h}}const Qr="(default)";class Ws{constructor(e,t){this.projectId=e,this.database=t||Qr}static empty(){return new Ws("","")}get isDefaultDatabase(){return this.database===Qr}isEqual(e){return e instanceof Ws&&e.projectId===this.projectId&&e.database===this.database}}function Ty(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new B(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ws(n.options.projectId,e)}/**
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
 */const Qd="__type__",Cy="__max__",Ar={mapValue:{}},Jd="__vector__",Jr="value";function Xt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ia(n)?4:by(n)?9007199254740991:Iy(n)?10:11:j(28295,{value:n})}function at(n,e){if(n===e)return!0;const t=Xt(n);if(t!==Xt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return js(n).isEqual(js(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Gt(r.timestampValue),l=Gt(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Kt(r.bytesValue).isEqual(Kt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return de(r.geoPointValue.latitude)===de(i.geoPointValue.latitude)&&de(r.geoPointValue.longitude)===de(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return de(r.integerValue)===de(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=de(r.doubleValue),l=de(i.doubleValue);return o===l?Xr(o)===Xr(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return qn(n.arrayValue.values||[],e.arrayValue.values||[],at);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(Xc(o)!==Xc(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!at(o[c],l[c])))return!1;return!0}(n,e);default:return j(52216,{left:n})}}function qs(n,e){return(n.values||[]).find(t=>at(t,e))!==void 0}function zn(n,e){if(n===e)return 0;const t=Xt(n),s=Xt(e);if(t!==s)return Q(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return function(i,o){const l=de(i.integerValue||i.doubleValue),c=de(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Jc(n.timestampValue,e.timestampValue);case 4:return Jc(js(n),js(e));case 5:return zo(n.stringValue,e.stringValue);case 6:return function(i,o){const l=Kt(i),c=Kt(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Q(l[u],c[u]);if(d!==0)return d}return Q(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Q(de(i.latitude),de(o.latitude));return l!==0?l:Q(de(i.longitude),de(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Yc(n.arrayValue,e.arrayValue);case 10:return function(i,o){var m,g,_,w;const l=i.fields||{},c=o.fields||{},u=(m=l[Jr])==null?void 0:m.arrayValue,d=(g=c[Jr])==null?void 0:g.arrayValue,h=Q(((_=u==null?void 0:u.values)==null?void 0:_.length)||0,((w=d==null?void 0:d.values)==null?void 0:w.length)||0);return h!==0?h:Yc(u,d)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ar.mapValue&&o===Ar.mapValue)return 0;if(i===Ar.mapValue)return 1;if(o===Ar.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let h=0;h<c.length&&h<d.length;++h){const m=zo(c[h],d[h]);if(m!==0)return m;const g=zn(l[c[h]],u[d[h]]);if(g!==0)return g}return Q(c.length,d.length)}(n.mapValue,e.mapValue);default:throw j(23264,{he:t})}}function Jc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=Gt(n),s=Gt(e),r=Q(t.seconds,s.seconds);return r!==0?r:Q(t.nanos,s.nanos)}function Yc(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=zn(t[r],s[r]);if(i)return i}return Q(t.length,s.length)}function Gn(n){return Go(n)}function Go(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Gt(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Kt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=Go(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Go(t.fields[o])}`;return r+"}"}(n.mapValue):j(61005,{value:n})}function Mr(n){switch(Xt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ti(n);return e?16+Mr(e):16;case 5:return 2*n.stringValue.length;case 6:return Kt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+Mr(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return Zt(s.fields,(i,o)=>{r+=i.length+Mr(o)}),r}(n.mapValue);default:throw j(13486,{value:n})}}function Ko(n){return!!n&&"integerValue"in n}function ba(n){return!!n&&"arrayValue"in n}function Zc(n){return!!n&&"nullValue"in n}function eu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Vr(n){return!!n&&"mapValue"in n}function Iy(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Qd])==null?void 0:s.stringValue)===Jd}function Ls(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Zt(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ls(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ls(n.arrayValue.values[t]);return e}return{...n}}function by(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Cy}/**
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
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Vr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ls(t)}setAll(e){let t=Te.emptyPath(),s={},r=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=l.popLast()}o?s[l.lastSegment()]=Ls(o):r.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Vr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Vr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Zt(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Be(Ls(this.value))}}function Yd(n){const e=[];return Zt(n.fields,(t,s)=>{const r=new Te([t]);if(Vr(s)){const i=Yd(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ue(e)}/**
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
 */class Re{constructor(e,t,s,r,i,o,l){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Re(e,0,W.min(),W.min(),W.min(),Be.empty(),0)}static newFoundDocument(e,t,s,r){return new Re(e,1,t,W.min(),s,r,0)}static newNoDocument(e,t){return new Re(e,2,t,W.min(),W.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,W.min(),W.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yr{constructor(e,t){this.position=e,this.inclusive=t}}function tu(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=$.comparator($.fromName(o.referenceValue),t.key):s=zn(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function nu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!at(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Zr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Sy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Zd{}class ge extends Zd{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Py(e,t,s):t==="array-contains"?new ky(e,s):t==="in"?new Ny(e,s):t==="not-in"?new Ly(e,s):t==="array-contains-any"?new xy(e,s):new ge(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Ay(e,s):new Dy(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(zn(t,this.value)):t!==null&&Xt(this.value)===Xt(t)&&this.matchesComparison(zn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class lt extends Zd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new lt(e,t)}matches(e){return eh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function eh(n){return n.op==="and"}function th(n){return Ry(n)&&eh(n)}function Ry(n){for(const e of n.filters)if(e instanceof lt)return!1;return!0}function Xo(n){if(n instanceof ge)return n.field.canonicalString()+n.op.toString()+Gn(n.value);if(th(n))return n.filters.map(e=>Xo(e)).join(",");{const e=n.filters.map(t=>Xo(t)).join(",");return`${n.op}(${e})`}}function nh(n,e){return n instanceof ge?function(s,r){return r instanceof ge&&s.op===r.op&&s.field.isEqual(r.field)&&at(s.value,r.value)}(n,e):n instanceof lt?function(s,r){return r instanceof lt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,l)=>i&&nh(o,r.filters[l]),!0):!1}(n,e):void j(19439)}function sh(n){return n instanceof ge?function(t){return`${t.field.canonicalString()} ${t.op} ${Gn(t.value)}`}(n):n instanceof lt?function(t){return t.op.toString()+" {"+t.getFilters().map(sh).join(" ,")+"}"}(n):"Filter"}class Py extends ge{constructor(e,t,s){super(e,t,s),this.key=$.fromName(s.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ay extends ge{constructor(e,t){super(e,"in",t),this.keys=rh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Dy extends ge{constructor(e,t){super(e,"not-in",t),this.keys=rh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rh(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(s=>$.fromName(s.referenceValue))}class ky extends ge{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ba(t)&&qs(t.arrayValue,this.value)}}class Ny extends ge{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qs(this.value.arrayValue,t)}}class Ly extends ge{constructor(e,t){super(e,"not-in",t)}matches(e){if(qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!qs(this.value.arrayValue,t)}}class xy extends ge{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ba(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>qs(this.value.arrayValue,s))}}/**
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
 */class Oy{constructor(e,t=null,s=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function su(n,e=null,t=[],s=[],r=null,i=null,o=null){return new Oy(n,e,t,s,r,i,o)}function Sa(n){const e=q(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Xo(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),vi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Gn(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Gn(s)).join(",")),e.Te=t}return e.Te}function Ra(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Sy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!nh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!nu(n.startAt,e.startAt)&&nu(n.endAt,e.endAt)}function Qo(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ci{constructor(e,t=null,s=[],r=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function My(n,e,t,s,r,i,o,l){return new Ci(n,e,t,s,r,i,o,l)}function Pa(n){return new Ci(n)}function ru(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Vy(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function By(n){return n.collectionGroup!==null}function xs(n){const e=q(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new _e(Te.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Zr(i,s))}),t.has(Te.keyField().canonicalString())||e.Ie.push(new Zr(Te.keyField(),s))}return e.Ie}function st(n){const e=q(n);return e.Ee||(e.Ee=Fy(e,xs(n))),e.Ee}function Fy(n,e){if(n.limitType==="F")return su(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Zr(r.field,i)});const t=n.endAt?new Yr(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Yr(n.startAt.position,n.startAt.inclusive):null;return su(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Jo(n,e,t){return new Ci(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ii(n,e){return Ra(st(n),st(e))&&n.limitType===e.limitType}function ih(n){return`${Sa(st(n))}|lt:${n.limitType}`}function Ln(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>sh(r)).join(", ")}]`),vi(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>Gn(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>Gn(r)).join(",")),`Target(${s})`}(st(n))}; limitType=${n.limitType})`}function bi(n,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):$.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,e)&&function(s,r){for(const i of xs(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(o,l,c){const u=tu(o,l,c);return o.inclusive?u<=0:u<0}(s.startAt,xs(s),r)||s.endAt&&!function(o,l,c){const u=tu(o,l,c);return o.inclusive?u>=0:u>0}(s.endAt,xs(s),r))}(n,e)}function Uy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function oh(n){return(e,t)=>{let s=!1;for(const r of xs(n)){const i=$y(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function $y(n,e,t){const s=n.field.isKeyField()?$.comparator(e.key,t.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?zn(c,u):j(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return j(19790,{direction:n.dir})}}/**
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
 */class Cn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Zt(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Wd(this.inner)}size(){return this.innerSize}}/**
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
 */const Hy=new le($.comparator);function wt(){return Hy}const ah=new le($.comparator);function Ps(...n){let e=ah;for(const t of n)e=e.insert(t.key,t);return e}function lh(n){let e=ah;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function un(){return Os()}function ch(){return Os()}function Os(){return new Cn(n=>n.toString(),(n,e)=>n.isEqual(e))}const jy=new le($.comparator),Wy=new _e($.comparator);function J(...n){let e=Wy;for(const t of n)e=e.add(t);return e}const qy=new _e(Q);function zy(){return qy}/**
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
 */function Aa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xr(e)?"-0":e}}function uh(n){return{integerValue:""+n}}function Gy(n,e){return yy(e)?uh(e):Aa(n,e)}/**
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
 */class Si{constructor(){this._=void 0}}function Ky(n,e,t){return n instanceof ei?function(r,i){const o={fields:{[Gd]:{stringValue:zd},[Xd]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Ia(i)&&(i=Ti(i)),i&&(o.fields[Kd]=i),{mapValue:o}}(t,e):n instanceof zs?hh(n,e):n instanceof Gs?fh(n,e):function(r,i){const o=dh(r,i),l=iu(o)+iu(r.Ae);return Ko(o)&&Ko(r.Ae)?uh(l):Aa(r.serializer,l)}(n,e)}function Xy(n,e,t){return n instanceof zs?hh(n,e):n instanceof Gs?fh(n,e):t}function dh(n,e){return n instanceof ti?function(s){return Ko(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class ei extends Si{}class zs extends Si{constructor(e){super(),this.elements=e}}function hh(n,e){const t=mh(e);for(const s of n.elements)t.some(r=>at(r,s))||t.push(s);return{arrayValue:{values:t}}}class Gs extends Si{constructor(e){super(),this.elements=e}}function fh(n,e){let t=mh(e);for(const s of n.elements)t=t.filter(r=>!at(r,s));return{arrayValue:{values:t}}}class ti extends Si{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function iu(n){return de(n.integerValue||n.doubleValue)}function mh(n){return ba(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Qy(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof zs&&r instanceof zs||s instanceof Gs&&r instanceof Gs?qn(s.elements,r.elements,at):s instanceof ti&&r instanceof ti?at(s.Ae,r.Ae):s instanceof ei&&r instanceof ei}(n.transform,e.transform)}class Jy{constructor(e,t){this.version=e,this.transformResults=t}}class He{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new He}static exists(e){return new He(void 0,e)}static updateTime(e){return new He(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Br(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ri{}function ph(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Pi(n.key,He.none()):new tr(n.key,n.data,He.none());{const t=n.data,s=Be.empty();let r=new _e(Te.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new en(n.key,s,new Ue(r.toArray()),He.none())}}function Yy(n,e,t){n instanceof tr?function(r,i,o){const l=r.value.clone(),c=au(r.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof en?function(r,i,o){if(!Br(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=au(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(gh(r)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ms(n,e,t,s){return n instanceof tr?function(i,o,l,c){if(!Br(i.precondition,o))return l;const u=i.value.clone(),d=lu(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,s):n instanceof en?function(i,o,l,c){if(!Br(i.precondition,o))return l;const u=lu(i.fieldTransforms,c,o),d=o.data;return d.setAll(gh(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,e,t,s):function(i,o,l){return Br(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function Zy(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=dh(s.transform,r||null);i!=null&&(t===null&&(t=Be.empty()),t.set(s.field,i))}return t||null}function ou(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&qn(s,r,(i,o)=>Qy(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class tr extends Ri{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class en extends Ri{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function au(n,e,t){const s=new Map;Z(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,l=e.data.field(i.field);s.set(i.field,Xy(o,l,t[r]))}return s}function lu(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,Ky(i,o,e))}return s}class Pi extends Ri{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class e_ extends Ri{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class t_{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Yy(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ms(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ms(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=ch();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(r.key)?null:l;const c=ph(o,l);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),J())}isEqual(e){return this.batchId===e.batchId&&qn(this.mutations,e.mutations,(t,s)=>ou(t,s))&&qn(this.baseMutations,e.baseMutations,(t,s)=>ou(t,s))}}class Da{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){Z(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=function(){return jy}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Da(e,t,s,r)}}/**
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
 */class n_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class s_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var he,Y;function r_(n){switch(n){case L.OK:return j(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return j(15467,{code:n})}}function yh(n){if(n===void 0)return yt("GRPC error has no .code"),L.UNKNOWN;switch(n){case he.OK:return L.OK;case he.CANCELLED:return L.CANCELLED;case he.UNKNOWN:return L.UNKNOWN;case he.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case he.INTERNAL:return L.INTERNAL;case he.UNAVAILABLE:return L.UNAVAILABLE;case he.UNAUTHENTICATED:return L.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case he.NOT_FOUND:return L.NOT_FOUND;case he.ALREADY_EXISTS:return L.ALREADY_EXISTS;case he.PERMISSION_DENIED:return L.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case he.ABORTED:return L.ABORTED;case he.OUT_OF_RANGE:return L.OUT_OF_RANGE;case he.UNIMPLEMENTED:return L.UNIMPLEMENTED;case he.DATA_LOSS:return L.DATA_LOSS;default:return j(39323,{code:n})}}(Y=he||(he={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function i_(){return new TextEncoder}/**
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
 */const o_=new jt([4294967295,4294967295],0);function cu(n){const e=i_().encode(n),t=new Ld;return t.update(e),new Uint8Array(t.digest())}function uu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jt([t,s],0),new jt([r,i],0)]}class ka{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new As(`Invalid padding: ${t}`);if(s<0)throw new As(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new As(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new As(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=jt.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply(jt.fromNumber(s)));return r.compare(o_)===1&&(r=new jt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=cu(e),[s,r]=uu(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);if(!this.we(o))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ka(i,r,t);return s.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const t=cu(e),[s,r]=uu(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);this.be(o)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class As extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ai{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,nr.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ai(W.min(),r,new le(Q),wt(),J())}}class nr{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new nr(s,t,J(),J(),J())}}/**
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
 */class Fr{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=r}}class _h{constructor(e,t){this.targetId=e,this.Ce=t}}class wh{constructor(e,t,s=Ce.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class du{constructor(){this.ve=0,this.Fe=hu(),this.Me=Ce.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=J(),t=J(),s=J();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:j(38017,{changeType:i})}}),new nr(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=hu()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Z(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class a_{constructor(e){this.Ge=e,this.ze=new Map,this.je=wt(),this.He=Dr(),this.Je=Dr(),this.Ze=new le(Q)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:j(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,r)=>{this.rt(r)&&t(r)})}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(Qo(i))if(s===0){const o=new $(i.path);this.et(t,o,Re.newNoDocument(o,W.min()))}else Z(s===1,20013,{expectedCount:s});else{const o=this._t(t);if(o!==s){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let o,l;try{o=Kt(s).toUint8Array()}catch(c){if(c instanceof qd)return Wn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new ka(o,r,i)}catch(c){return Wn(c instanceof As?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Qo(l.target)){const c=new $(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Re.newNoDocument(c,e))}i.Be&&(t.set(o,i.ke()),i.Ke())}});let s=J();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const r=new Ai(e,t,this.Ze,this.je,s);return this.je=wt(),this.He=Dr(),this.Je=Dr(),this.Ze=new le(Q),r}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.qe(t,1):r.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new du,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new _e(Q),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new _e(Q),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new du),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Dr(){return new le($.comparator)}function hu(){return new le($.comparator)}const l_={asc:"ASCENDING",desc:"DESCENDING"},c_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},u_={and:"AND",or:"OR"};class d_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yo(n,e){return n.useProto3Json||vi(e)?e:{value:e}}function ni(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Eh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function h_(n,e){return ni(n,e.toTimestamp())}function rt(n){return Z(!!n,49232),W.fromTimestamp(function(t){const s=Gt(t);return new z(s.seconds,s.nanos)}(n))}function Na(n,e){return Zo(n,e).canonicalString()}function Zo(n,e){const t=function(r){return new re(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function vh(n){const e=re.fromString(n);return Z(Sh(e),10190,{key:e.toString()}),e}function ea(n,e){return Na(n.databaseId,e.path)}function Ro(n,e){const t=vh(e);if(t.get(1)!==n.databaseId.projectId)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(Ch(t))}function Th(n,e){return Na(n.databaseId,e)}function f_(n){const e=vh(n);return e.length===4?re.emptyPath():Ch(e)}function ta(n){return new re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ch(n){return Z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function fu(n,e,t){return{name:ea(n,e),fields:t.value.mapValue.fields}}function m_(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:j(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Z(d===void 0||typeof d=="string",58123),Ce.fromBase64String(d||"")):(Z(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ce.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?L.UNKNOWN:yh(u.code);return new B(d,u.message||"")}(o);t=new wh(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ro(n,s.document.name),i=rt(s.document.updateTime),o=s.document.createTime?rt(s.document.createTime):W.min(),l=new Be({mapValue:{fields:s.document.fields}}),c=Re.newFoundDocument(r,i,o,l),u=s.targetIds||[],d=s.removedTargetIds||[];t=new Fr(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ro(n,s.document),i=s.readTime?rt(s.readTime):W.min(),o=Re.newNoDocument(r,i),l=s.removedTargetIds||[];t=new Fr([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ro(n,s.document),i=s.removedTargetIds||[];t=new Fr([],i,r,null)}else{if(!("filter"in e))return j(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new s_(r,i),l=s.targetId;t=new _h(l,o)}}return t}function p_(n,e){let t;if(e instanceof tr)t={update:fu(n,e.key,e.value)};else if(e instanceof Pi)t={delete:ea(n,e.key)};else if(e instanceof en)t={update:fu(n,e.key,e.data),updateMask:I_(e.fieldMask)};else{if(!(e instanceof e_))return j(16599,{dt:e.type});t={verify:ea(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const l=o.transform;if(l instanceof ei)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof zs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Gs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ti)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw j(20930,{transform:o.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:h_(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j(27497)}(n,e.precondition)),t}function g_(n,e){return n&&n.length>0?(Z(e!==void 0,14353),n.map(t=>function(r,i){let o=r.updateTime?rt(r.updateTime):rt(i);return o.isEqual(W.min())&&(o=rt(i)),new Jy(o,r.transformResults||[])}(t,e))):[]}function y_(n,e){return{documents:[Th(n,e.path)]}}function __(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Th(n,r);const i=function(u){if(u.length!==0)return bh(lt.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:xn(m.field),direction:v_(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Yo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:t,parent:r}}function w_(n){let e=f_(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){Z(s===1,65062);const d=t.from[0];d.allDescendants?r=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(h){const m=Ih(h);return m instanceof lt&&th(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(m=>function(_){return new Zr(On(_.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(h){let m;return m=typeof h=="object"?h.value:h,vi(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(h){const m=!!h.before,g=h.values||[];return new Yr(g,m)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const m=!h.before,g=h.values||[];return new Yr(g,m)}(t.endAt)),My(e,r,o,i,l,"F",c,u)}function E_(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ih(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=On(t.unaryFilter.field);return ge.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=On(t.unaryFilter.field);return ge.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=On(t.unaryFilter.field);return ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=On(t.unaryFilter.field);return ge.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}}(n):n.fieldFilter!==void 0?function(t){return ge.create(On(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return lt.create(t.compositeFilter.filters.map(s=>Ih(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return j(1026)}}(t.compositeFilter.op))}(n):j(30097,{filter:n})}function v_(n){return l_[n]}function T_(n){return c_[n]}function C_(n){return u_[n]}function xn(n){return{fieldPath:n.canonicalString()}}function On(n){return Te.fromServerFormat(n.fieldPath)}function bh(n){return n instanceof ge?function(t){if(t.op==="=="){if(eu(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NAN"}};if(Zc(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(eu(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NOT_NAN"}};if(Zc(t.value))return{unaryFilter:{field:xn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xn(t.field),op:T_(t.op),value:t.value}}}(n):n instanceof lt?function(t){const s=t.getFilters().map(r=>bh(r));return s.length===1?s[0]:{compositeFilter:{op:C_(t.op),filters:s}}}(n):j(54877,{filter:n})}function I_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Sh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Rh(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class Ft{constructor(e,t,s,r,i=W.min(),o=W.min(),l=Ce.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class b_{constructor(e){this.yt=e}}function S_(n){const e=w_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Jo(e,e.limit,"L"):e}/**
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
 */class R_{constructor(){this.Sn=new P_}addToCollectionParentIndex(e,t){return this.Sn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(zt.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(zt.min())}updateCollectionGroup(e,t,s){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class P_{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new _e(re.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new _e(re.comparator)).toArray()}}/**
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
 */const mu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ph=41943040;class Oe{static withCacheSize(e){return new Oe(e,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Oe.DEFAULT_COLLECTION_PERCENTILE=10,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oe.DEFAULT=new Oe(Ph,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oe.DISABLED=new Oe(-1,0,0);/**
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
 */class Kn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Kn(0)}static ar(){return new Kn(-1)}}/**
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
 */const pu="LruGarbageCollector",A_=1048576;function gu([n,e],[t,s]){const r=Q(n,t);return r===0?Q(e,s):r}class D_{constructor(e){this.Pr=e,this.buffer=new _e(gu),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();gu(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class k_{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){M(pu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){es(t)?M(pu,"Ignoring IndexedDB error during garbage collection: ",t):await Zn(t)}await this.Ar(3e5)})}}class N_{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return N.resolve(Ei.ce);const s=new D_(t);return this.Vr.forEachTarget(e,r=>s.Er(r.sequenceNumber)).next(()=>this.Vr.mr(e,r=>s.Er(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(mu)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mu):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),r=this.params.maximumSequenceNumbersToCollect):r=h,o=Date.now(),this.nthSequenceNumber(e,r))).next(h=>(s=h,l=Date.now(),this.removeTargets(e,s,t))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(h=>(u=Date.now(),Nn()<=X.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${r} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:h})))}}function L_(n,e){return new N_(n,e)}/**
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
 */class x_{constructor(){this.changes=new Cn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?N.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class O_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class M_{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&Ms(s.mutation,r,Ue.empty(),z.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,J()).next(()=>s))}getLocalViewOfDocuments(e,t,s=J()){const r=un();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let o=Ps();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=un();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,J()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,s,r){let i=wt();const o=Os(),l=function(){return Os()}();return t.forEach((c,u)=>{const d=s.get(u.key);r.has(u.key)&&(d===void 0||d.mutation instanceof en)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Ms(d.mutation,u,d.mutation.getFieldMask(),z.now())):o.set(u.key,Ue.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>l.set(u,new O_(d,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,t){const s=Os();let r=new le((o,l)=>o-l),i=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let d=s.get(c)||Ue.empty();d=l.applyToLocalView(u,d),s.set(c,d);const h=(r.get(l.batchId)||J()).add(c);r=r.insert(l.batchId,h)})}).next(()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,h=ch();d.forEach(m=>{if(!i.has(m)){const g=ph(t.get(m),s.get(m));g!==null&&h.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return N.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return Vy(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):By(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):N.resolve(un());let l=Hs,c=i;return o.next(u=>N.forEach(u,(d,h)=>(l<h.largestBatchId&&(l=h.largestBatchId),i.get(d)?N.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,J())).next(d=>({batchId:l,changes:lh(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(s=>{let r=Ps();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let o=Ps();return this.indexManager.getCollectionParents(e,i).next(l=>N.forEach(l,c=>{const u=function(h,m){return new Ci(m,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(d=>{d.forEach((h,m)=>{o=o.insert(h,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Re.newInvalidDocument(d)))});let l=Ps();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Ms(d.mutation,u,Ue.empty(),z.now()),bi(t,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class V_{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return N.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:rt(r.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(r){return{name:r.name,query:S_(r.bundledQuery),readTime:rt(r.readTime)}}(t)),N.resolve()}}/**
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
 */class B_{constructor(){this.overlays=new le($.comparator),this.Lr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const s=un();return N.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.bt(e,t,i)}),N.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(s)),N.resolve()}getOverlaysForCollection(e,t,s){const r=un(),i=t.length+1,o=new $(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return N.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new le((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let d=i.get(u.largestBatchId);d===null&&(d=un(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=un(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=r)););return N.resolve(l)}bt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new n_(t,s));let i=this.Lr.get(t);i===void 0&&(i=J(),this.Lr.set(t,i)),this.Lr.set(t,i.add(s.key))}}/**
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
 */class F_{constructor(){this.sessionToken=Ce.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class La{constructor(){this.kr=new _e(Ee.Kr),this.qr=new _e(Ee.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Ee(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new Ee(e,t))}Qr(e,t){e.forEach(s=>this.removeReference(s,t))}Gr(e){const t=new $(new re([])),s=new Ee(t,e),r=new Ee(t,e+1),i=[];return this.qr.forEachInRange([s,r],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new $(new re([])),s=new Ee(t,e),r=new Ee(t,e+1);let i=J();return this.qr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ee(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ee{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return $.comparator(e.key,t.key)||Q(e.Hr,t.Hr)}static Ur(e,t){return Q(e.Hr,t.Hr)||$.comparator(e.key,t.key)}}/**
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
 */class U_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new _e(Ee.Kr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new t_(i,t,s,r);this.mutationQueue.push(o);for(const l of r)this.Jr=this.Jr.add(new Ee(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,t){return N.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),i=r<0?0:r;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?Ca:this.Yn-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ee(t,0),r=new Ee(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([s,r],o=>{const l=this.Zr(o.Hr);i.push(l)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new _e(Q);return t.forEach(r=>{const i=new Ee(r,0),o=new Ee(r,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{s=s.add(l.Hr)})}),N.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;$.isDocumentKey(i)||(i=i.child(""));const o=new Ee(new $(i),0);let l=new _e(Q);return this.Jr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(l=l.add(c.Hr)),!0)},o),N.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach(s=>{const r=this.Zr(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){Z(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return N.forEach(t.mutations,r=>{const i=new Ee(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Jr=s})}nr(e){}containsKey(e,t){const s=new Ee(t,0),r=this.Jr.firstAfterOrEqual(s);return N.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class $_{constructor(e){this.ti=e,this.docs=function(){return new le($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return N.resolve(s?s.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let s=wt();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Re.newInvalidDocument(r))}),N.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=wt();const o=t.path,l=new $(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||fy(hy(d),s)<=0||(r.has(d.key)||bi(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,s,r){j(9500)}ni(e,t){return N.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new H_(this)}getSize(e){return N.resolve(this.size)}}class H_ extends x_{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)}),N.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class j_{constructor(e){this.persistence=e,this.ri=new Cn(t=>Sa(t),Ra),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.ii=0,this.si=new La,this.targetCount=0,this.oi=Kn._r()}forEachTarget(e,t){return this.ri.forEach((s,r)=>t(r)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),N.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Kn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.lr(t),N.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),N.waitFor(i).next(()=>r)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return N.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),N.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return N.resolve(s)}containsKey(e,t){return N.resolve(this.si.containsKey(t))}}/**
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
 */class Ah{constructor(e,t){this._i={},this.overlays={},this.ai=new Ei(0),this.ui=!1,this.ui=!0,this.ci=new F_,this.referenceDelegate=e(this),this.li=new j_(this),this.indexManager=new R_,this.remoteDocumentCache=function(r){return new $_(r)}(s=>this.referenceDelegate.hi(s)),this.serializer=new b_(t),this.Pi=new V_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new B_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new U_(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){M("MemoryPersistence","Starting transaction:",e);const r=new W_(this.ai.next());return this.referenceDelegate.Ti(),s(r).next(i=>this.referenceDelegate.Ii(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ei(e,t){return N.or(Object.values(this._i).map(s=>()=>s.containsKey(e,t)))}}class W_ extends py{constructor(e){super(),this.currentSequenceNumber=e}}class xa{constructor(e){this.persistence=e,this.Ri=new La,this.Ai=null}static Vi(e){return new xa(e)}get di(){if(this.Ai)return this.Ai;throw j(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),N.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(r=>this.di.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.di.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.di,s=>{const r=$.fromPath(s);return this.mi(e,r).next(i=>{i||t.removeEntry(r,W.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return N.or([()=>N.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class si{constructor(e,t){this.persistence=e,this.fi=new Cn(s=>_y(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=L_(this,t)}static Vi(e,t){return new si(e,t)}Ti(){}Ii(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}pr(e){let t=0;return this.mr(e,s=>{t++}).next(()=>t)}mr(e,t){return N.forEach(this.fi,(s,r)=>this.wr(e,s,r).next(i=>i?N.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,o=>this.wr(e,o,t).next(l=>{l||(s++,i.removeEntry(o,W.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),N.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),N.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Mr(e.data.value)),t}wr(e,t,s){return N.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return N.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Oa{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=r}static Es(e,t){let s=J(),r=J();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Oa(e,t.fromCache,s,r)}}/**
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
 */class q_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class z_{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Op()?8:gy(Pe())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.gs(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,t,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new q_;return this.ys(e,t,o).next(l=>{if(i.result=l,this.As)return this.ws(e,t,o,l.size)})}).next(()=>i.result)}ws(e,t,s,r){return s.documentReadCount<this.Vs?(Nn()<=X.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Ln(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),N.resolve()):(Nn()<=X.DEBUG&&M("QueryEngine","Query:",Ln(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(Nn()<=X.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Ln(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,st(t))):N.resolve())}gs(e,t){if(ru(t))return N.resolve(null);let s=st(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Jo(t,null,"F"),s=st(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=J(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.bs(t,l);return this.Ss(t,u,o,c.readTime)?this.gs(e,Jo(t,null,"F")):this.Ds(e,u,t,c)}))})))}ps(e,t,s,r){return ru(t)||r.isEqual(W.min())?N.resolve(null):this.fs.getDocuments(e,s).next(i=>{const o=this.bs(t,i);return this.Ss(t,o,s,r)?N.resolve(null):(Nn()<=X.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ln(t)),this.Ds(e,o,t,dy(r,Hs)).next(l=>l))})}bs(e,t){let s=new _e(oh(e));return t.forEach((r,i)=>{bi(e,i)&&(s=s.add(i))}),s}Ss(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,s){return Nn()<=X.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Ln(t)),this.fs.getDocumentsMatchingQuery(e,t,zt.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Ma="LocalStore",G_=3e8;class K_{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new le(Q),this.Fs=new Cn(i=>Sa(i),Ra),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new M_(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function X_(n,e,t,s){return new K_(n,e,t,s)}async function Dh(n,e){const t=q(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Os(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],l=[];let c=J();for(const u of r){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(s,c).next(u=>({Ns:u,removedBatchIds:o,addedBatchIds:l}))})})}function Q_(n,e){const t=q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const h=u.batch,m=h.keys();let g=N.resolve();return m.forEach(_=>{g=g.next(()=>d.getEntry(c,_)).next(w=>{const C=u.docVersions.get(_);Z(C!==null,48541),w.version.compareTo(C)<0&&(h.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),d.addEntry(w)))})}),g.next(()=>l.mutationQueue.removeMutationBatch(c,h))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let c=J();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function kh(n){const e=q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function J_(n,e){const t=q(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const l=[];e.targetChanges.forEach((d,h)=>{const m=r.get(h);if(!m)return;l.push(t.li.removeMatchingKeys(i,d.removedDocuments,h).next(()=>t.li.addMatchingKeys(i,d.addedDocuments,h)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(Ce.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,s)),r=r.insert(h,g),function(w,C,k){return w.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=G_?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(m,g,d)&&l.push(t.li.updateTargetData(i,g))});let c=wt(),u=J();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(Y_(i,o,e.documentUpdates).next(d=>{c=d.Bs,u=d.Ls})),!s.isEqual(W.min())){const d=t.li.getLastRemoteSnapshotVersion(i).next(h=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,s));l.push(d)}return N.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.vs=r,i))}function Y_(n,e,t){let s=J(),r=J();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let o=wt();return t.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(W.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):M(Ma,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Bs:o,Ls:r}})}function Z_(n,e){const t=q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Ca),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function ew(n,e){const t=q(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.li.getTargetData(s,e).next(i=>i?(r=i,N.resolve(r)):t.li.allocateTargetId(s).next(o=>(r=new Ft(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s})}async function na(n,e,t){const s=q(n),r=s.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!es(o))throw o;M(Ma,`Failed to update sequence numbers for target ${e}: ${o}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function yu(n,e,t){const s=q(n);let r=W.min(),i=J();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const h=q(c),m=h.Fs.get(d);return m!==void 0?N.resolve(h.vs.get(m)):h.li.getTargetData(u,d)}(s,o,st(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>s.Cs.getDocumentsMatchingQuery(o,e,t?r:W.min(),t?i:J())).next(l=>(tw(s,Uy(e),l),{documents:l,ks:i})))}function tw(n,e,t){let s=n.Ms.get(e)||W.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Ms.set(e,s)}class _u{constructor(){this.activeTargetIds=zy()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nw{constructor(){this.vo=new _u,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new _u,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sw{Mo(e){}shutdown(){}}/**
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
 */const wu="ConnectivityMonitor";class Eu{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){M(wu,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){M(wu,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let kr=null;function sa(){return kr===null?kr=function(){return 268435456+Math.round(2147483648*Math.random())}():kr++,"0x"+kr.toString(16)}/**
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
 */const Po="RestConnection",rw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class iw{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===Qr?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){const o=sa(),l=this.Qo(e,t.toUriEncodedString());M(Po,`Sending RPC '${e}' ${o}:`,l,s);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,r,i);const{host:u}=new URL(l),d=Yt(u);return this.zo(e,l,c,s,d).then(h=>(M(Po,`Received RPC '${e}' ${o}: `,h),h),h=>{throw Wn(Po,`RPC '${e}' ${o} failed with error: `,h,"url: ",l,"request:",s),h})}jo(e,t,s,r,i,o){return this.Wo(e,t,s,r,i)}Go(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Qo(e,t){const s=rw[e];let r=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
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
 */class ow{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const be="WebChannelConnection",Cs=(n,e,t)=>{n.listen(e,s=>{try{t(s)}catch(r){setTimeout(()=>{throw r},0)}})};class Mn extends iw{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Mn.c_){const e=Vd();Cs(e,Md.STAT_EVENT,t=>{t.stat===qo.PROXY?M(be,"STAT_EVENT: detected buffering proxy"):t.stat===qo.NOPROXY&&M(be,"STAT_EVENT: detected no buffering proxy")}),Mn.c_=!0}}zo(e,t,s,r,i){const o=sa();return new Promise((l,c)=>{const u=new xd;u.setWithCredentials(!0),u.listenOnce(Od.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Or.NO_ERROR:const h=u.getResponseJson();M(be,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),l(h);break;case Or.TIMEOUT:M(be,`RPC '${e}' ${o} timed out`),c(new B(L.DEADLINE_EXCEEDED,"Request time out"));break;case Or.HTTP_ERROR:const m=u.getStatus();if(M(be,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const w=function(k){const x=k.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(x)>=0?x:L.UNKNOWN}(_.status);c(new B(w,_.message))}else c(new B(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new B(L.UNAVAILABLE,"Connection failed."));break;default:j(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{M(be,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(r);M(be,`RPC '${e}' ${o} sending request:`,r),u.send(t,"POST",d,s,15)})}T_(e,t,s){const r=sa(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,s),l.encodeInitMessageHeaders=!0;const u=i.join("");M(be,`Creating RPC '${e}' stream ${r}: ${u}`,l);const d=o.createWebChannel(u,l);this.I_(d);let h=!1,m=!1;const g=new ow({Ho:_=>{m?M(be,`Not sending because RPC '${e}' stream ${r} is closed:`,_):(h||(M(be,`Opening RPC '${e}' stream ${r} transport.`),d.open(),h=!0),M(be,`RPC '${e}' stream ${r} sending:`,_),d.send(_))},Jo:()=>d.close()});return Cs(d,Rs.EventType.OPEN,()=>{m||(M(be,`RPC '${e}' stream ${r} transport opened.`),g.i_())}),Cs(d,Rs.EventType.CLOSE,()=>{m||(m=!0,M(be,`RPC '${e}' stream ${r} transport closed`),g.o_(),this.E_(d))}),Cs(d,Rs.EventType.ERROR,_=>{m||(m=!0,Wn(be,`RPC '${e}' stream ${r} transport errored. Name:`,_.name,"Message:",_.message),g.o_(new B(L.UNAVAILABLE,"The operation could not be completed")))}),Cs(d,Rs.EventType.MESSAGE,_=>{var w;if(!m){const C=_.data[0];Z(!!C,16349);const k=C,x=(k==null?void 0:k.error)||((w=k[0])==null?void 0:w.error);if(x){M(be,`RPC '${e}' stream ${r} received error:`,x);const V=x.status;let F=function(b){const E=he[b];if(E!==void 0)return yh(E)}(V),G=x.message;F===void 0&&(F=L.INTERNAL,G="Unknown error status: "+V+" with message "+x.message),m=!0,g.o_(new B(F,G)),d.close()}else M(be,`RPC '${e}' stream ${r} received:`,C),g.__(C)}}),Mn.u_(),setTimeout(()=>{g.s_()},0),g}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Bd()}}/**
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
 */function aw(n){return new Mn(n)}function Ao(){return typeof document<"u"?document:null}/**
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
 */function Di(n){return new d_(n,!0)}/**
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
 */Mn.c_=!1;class Nh{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&M("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const vu="PersistentStream";class Lh{constructor(e,t,s,r,i,o,l,c){this.Ci=e,this.b_=s,this.S_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Nh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(yt(t.toString()),yt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.D_===t&&this.G_(s,r)},s=>{e(()=>{const r=new B(L.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)})})}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.Yo(()=>{s(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(r=>{s(()=>this.z_(r))}),this.stream.onMessage(r=>{s(()=>++this.F_==1?this.H_(r):this.onNext(r))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return M(vu,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(M(vu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lw extends Lh{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=m_(this.serializer,e),s=function(i){if(!("targetChange"in i))return W.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?rt(o.readTime):W.min()}(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=ta(this.serializer),t.addTarget=function(i,o){let l;const c=o.target;if(l=Qo(c)?{documents:y_(i,c)}:{query:__(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Eh(i,o.resumeToken);const u=Yo(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(W.min())>0){l.readTime=ni(i,o.snapshotVersion.toTimestamp());const u=Yo(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const s=E_(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=ta(this.serializer),t.removeTarget=e,this.K_(t)}}class cw extends Lh{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return Z(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Z(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=g_(e.writeResults,e.commitTime),s=rt(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=ta(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>p_(this.serializer,s))};this.K_(t)}}/**
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
 */class uw{}class dw extends uw{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Zo(t,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(L.UNKNOWN,i.toString())})}jo(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Zo(t,s),r,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function hw(n,e,t,s){return new dw(n,e,t,s)}class fw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(yt(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const _n="RemoteStore";class mw{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{s.enqueueAndForget(async()=>{In(this)&&(M(_n,"Restarting streams for network reachability change."),await async function(c){const u=q(c);u.Ea.add(4),await sr(u),u.Va.set("Unknown"),u.Ea.delete(4),await ki(u)}(this))})}),this.Va=new fw(s,r)}}async function ki(n){if(In(n))for(const e of n.Ra)await e(!0)}async function sr(n){for(const e of n.Ra)await e(!1)}function xh(n,e){const t=q(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Ua(t)?Fa(t):ts(t).O_()&&Ba(t,e))}function Va(n,e){const t=q(n),s=ts(t);t.Ia.delete(e),s.O_()&&Oh(t,e),t.Ia.size===0&&(s.O_()?s.L_():In(t)&&t.Va.set("Unknown"))}function Ba(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ts(n).Z_(e)}function Oh(n,e){n.da.$e(e),ts(n).X_(e)}function Fa(n){n.da=new a_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ts(n).start(),n.Va.ua()}function Ua(n){return In(n)&&!ts(n).x_()&&n.Ia.size>0}function In(n){return q(n).Ea.size===0}function Mh(n){n.da=void 0}async function pw(n){n.Va.set("Online")}async function gw(n){n.Ia.forEach((e,t)=>{Ba(n,e)})}async function yw(n,e){Mh(n),Ua(n)?(n.Va.ha(e),Fa(n)):n.Va.set("Unknown")}async function _w(n,e,t){if(n.Va.set("Online"),e instanceof wh&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const l of i.targetIds)r.Ia.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.Ia.delete(l),r.da.removeTarget(l))}(n,e)}catch(s){M(_n,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ri(n,s)}else if(e instanceof Fr?n.da.Xe(e):e instanceof _h?n.da.st(e):n.da.tt(e),!t.isEqual(W.min()))try{const s=await kh(n.localStore);t.compareTo(s)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ia.get(u);d&&i.Ia.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.Ia.get(c);if(!d)return;i.Ia.set(c,d.withResumeToken(Ce.EMPTY_BYTE_STRING,d.snapshotVersion)),Oh(i,c);const h=new Ft(d.target,c,u,d.sequenceNumber);Ba(i,h)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(s){M(_n,"Failed to raise snapshot:",s),await ri(n,s)}}async function ri(n,e,t){if(!es(e))throw e;n.Ea.add(1),await sr(n),n.Va.set("Offline"),t||(t=()=>kh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M(_n,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await ki(n)})}function Vh(n,e){return e().catch(t=>ri(n,t,e))}async function Ni(n){const e=q(n),t=Qt(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ca;for(;ww(e);)try{const r=await Z_(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,Ew(e,r)}catch(r){await ri(e,r)}Bh(e)&&Fh(e)}function ww(n){return In(n)&&n.Ta.length<10}function Ew(n,e){n.Ta.push(e);const t=Qt(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Bh(n){return In(n)&&!Qt(n).x_()&&n.Ta.length>0}function Fh(n){Qt(n).start()}async function vw(n){Qt(n).ra()}async function Tw(n){const e=Qt(n);for(const t of n.Ta)e.ea(t.mutations)}async function Cw(n,e,t){const s=n.Ta.shift(),r=Da.from(s,e,t);await Vh(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await Ni(n)}async function Iw(n,e){e&&Qt(n).Y_&&await async function(s,r){if(function(o){return r_(o)&&o!==L.ABORTED}(r.code)){const i=s.Ta.shift();Qt(s).B_(),await Vh(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Ni(s)}}(n,e),Bh(n)&&Fh(n)}async function Tu(n,e){const t=q(n);t.asyncQueue.verifyOperationInProgress(),M(_n,"RemoteStore received new credentials");const s=In(t);t.Ea.add(3),await sr(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ki(t)}async function bw(n,e){const t=q(n);e?(t.Ea.delete(2),await ki(t)):e||(t.Ea.add(2),await sr(t),t.Va.set("Unknown"))}function ts(n){return n.ma||(n.ma=function(t,s,r){const i=q(t);return i.sa(),new lw(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:pw.bind(null,n),Yo:gw.bind(null,n),t_:yw.bind(null,n),J_:_w.bind(null,n)}),n.Ra.push(async e=>{e?(n.ma.B_(),Ua(n)?Fa(n):n.Va.set("Unknown")):(await n.ma.stop(),Mh(n))})),n.ma}function Qt(n){return n.fa||(n.fa=function(t,s,r){const i=q(t);return i.sa(),new cw(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:vw.bind(null,n),t_:Iw.bind(null,n),ta:Tw.bind(null,n),na:Cw.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await Ni(n)):(await n.fa.stop(),n.Ta.length>0&&(M(_n,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class $a{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,l=new $a(e,t,o,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ha(n,e){if(yt("AsyncQueue",`${e}: ${n}`),es(n))return new B(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Vn{static emptySet(e){return new Vn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||$.comparator(t.key,s.key):(t,s)=>$.comparator(t.key,s.key),this.keyedMap=Ps(),this.sortedSet=new le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Vn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Cu{constructor(){this.ga=new le($.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):j(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class Xn{constructor(e,t,s,r,i,o,l,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new Xn(e,t,Vn.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ii(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Sw{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class Rw{constructor(){this.queries=Iu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=q(t),i=r.queries;r.queries=Iu(),i.forEach((o,l)=>{for(const c of l.ba)c.onError(s)})})(this,new B(L.ABORTED,"Firestore shutting down"))}}function Iu(){return new Cn(n=>ih(n),Ii)}async function Uh(n,e){const t=q(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Sa()&&e.Da()&&(s=2):(i=new Sw,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const l=Ha(o,`Initialization of query '${Ln(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.ba.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&ja(t)}async function $h(n,e){const t=q(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?r=e.Da()?0:1:!i.Sa()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Pw(n,e){const t=q(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const l of o.ba)l.Fa(r)&&(s=!0);o.wa=r}}s&&ja(t)}function Aw(n,e,t){const s=q(n),r=s.queries.get(e);if(r)for(const i of r.ba)i.onError(t);s.queries.delete(e)}function ja(n){n.Ca.forEach(e=>{e.next()})}var ra,bu;(bu=ra||(ra={})).Ma="default",bu.Cache="cache";class Hh{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Xn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Xn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ra.Cache}}/**
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
 */class jh{constructor(e){this.key=e}}class Wh{constructor(e){this.key=e}}class Dw{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=J(),this.mutatedKeys=J(),this.eu=oh(e),this.tu=new Vn(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new Cu,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((d,h)=>{const m=r.get(d),g=bi(this.query,h)?h:null,_=!!m&&this.mutatedKeys.has(m.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;m&&g?m.data.isEqual(g.data)?_!==w&&(s.track({type:3,doc:g}),C=!0):this.su(m,g)||(s.track({type:2,doc:g}),C=!0,(c&&this.eu(g,c)>0||u&&this.eu(g,u)<0)&&(l=!0)):!m&&g?(s.track({type:0,doc:g}),C=!0):m&&!g&&(s.track({type:1,doc:m}),C=!0,(c||u)&&(l=!0)),C&&(g?(o=o.add(g),i=w?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),s.track({type:1,doc:d})}return{tu:o,iu:s,Ss:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,h)=>function(g,_){const w=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j(20277,{Vt:C})}};return w(g)-w(_)}(d.type,h.type)||this.eu(d.doc,h.doc)),this.ou(s),r=r??!1;const l=t&&!r?this._u():[],c=this.Ya.size===0&&this.current&&!r?1:0,u=c!==this.Xa;return this.Xa=c,o.length!==0||u?{snapshot:new Xn(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Cu,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=J(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))});const t=[];return e.forEach(s=>{this.Ya.has(s)||t.push(new Wh(s))}),this.Ya.forEach(s=>{e.has(s)||t.push(new jh(s))}),t}cu(e){this.Za=e.ks,this.Ya=J();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Xn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Wa="SyncEngine";class kw{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Nw{constructor(e){this.key=e,this.hu=!1}}class Lw{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Cn(l=>ih(l),Ii),this.Iu=new Map,this.Eu=new Set,this.Ru=new le($.comparator),this.Au=new Map,this.Vu=new La,this.du={},this.mu=new Map,this.fu=Kn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function xw(n,e,t=!0){const s=Qh(n);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await qh(s,e,t,!0),r}async function Ow(n,e){const t=Qh(n);await qh(t,e,!0,!1)}async function qh(n,e,t,s){const r=await ew(n.localStore,st(e)),i=r.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let l;return s&&(l=await Mw(n,e,i,o==="current",r.resumeToken)),n.isPrimaryClient&&t&&xh(n.remoteStore,r),l}async function Mw(n,e,t,s,r){n.pu=(h,m,g)=>async function(w,C,k,x){let V=C.view.ru(k);V.Ss&&(V=await yu(w.localStore,C.query,!1).then(({documents:b})=>C.view.ru(b,V)));const F=x&&x.targetChanges.get(C.targetId),G=x&&x.targetMismatches.get(C.targetId)!=null,ee=C.view.applyChanges(V,w.isPrimaryClient,F,G);return Ru(w,C.targetId,ee.au),ee.snapshot}(n,h,m,g);const i=await yu(n.localStore,e,!0),o=new Dw(e,i.ks),l=o.ru(i.documents),c=nr.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),u=o.applyChanges(l,n.isPrimaryClient,c);Ru(n,t,u.au);const d=new kw(e,t,o);return n.Tu.set(e,d),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),u.snapshot}async function Vw(n,e,t){const s=q(n),r=s.Tu.get(e),i=s.Iu.get(r.targetId);if(i.length>1)return s.Iu.set(r.targetId,i.filter(o=>!Ii(o,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await na(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&Va(s.remoteStore,r.targetId),ia(s,r.targetId)}).catch(Zn)):(ia(s,r.targetId),await na(s.localStore,r.targetId,!0))}async function Bw(n,e){const t=q(n),s=t.Tu.get(e),r=t.Iu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Va(t.remoteStore,s.targetId))}async function Fw(n,e,t){const s=zw(n);try{const r=await function(o,l){const c=q(o),u=z.now(),d=l.reduce((g,_)=>g.add(_.key),J());let h,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let _=wt(),w=J();return c.xs.getEntries(g,d).next(C=>{_=C,_.forEach((k,x)=>{x.isValidDocument()||(w=w.add(k))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,_)).next(C=>{h=C;const k=[];for(const x of l){const V=Zy(x,h.get(x.key).overlayedDocument);V!=null&&k.push(new en(x.key,V,Yd(V.value.mapValue),He.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,k,l)}).next(C=>{m=C;const k=C.applyToLocalDocumentSet(h,w);return c.documentOverlayCache.saveOverlays(g,C.batchId,k)})}).then(()=>({batchId:m.batchId,changes:lh(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,l,c){let u=o.du[o.currentUser.toKey()];u||(u=new le(Q)),u=u.insert(l,c),o.du[o.currentUser.toKey()]=u}(s,r.batchId,t),await rr(s,r.changes),await Ni(s.remoteStore)}catch(r){const i=Ha(r,"Failed to persist write");t.reject(i)}}async function zh(n,e){const t=q(n);try{const s=await J_(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.Au.get(i);o&&(Z(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?Z(o.hu,14607):r.removedDocuments.size>0&&(Z(o.hu,42227),o.hu=!1))}),await rr(t,s,e)}catch(s){await Zn(s)}}function Su(n,e,t){const s=q(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&r.push(l.snapshot)}),function(o,l){const c=q(o);c.onlineState=l;let u=!1;c.queries.forEach((d,h)=>{for(const m of h.ba)m.va(l)&&(u=!0)}),u&&ja(c)}(s.eventManager,e),r.length&&s.Pu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Uw(n,e,t){const s=q(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),i=r&&r.key;if(i){let o=new le($.comparator);o=o.insert(i,Re.newNoDocument(i,W.min()));const l=J().add(i),c=new Ai(W.min(),new Map,new le(Q),o,l);await zh(s,c),s.Ru=s.Ru.remove(i),s.Au.delete(e),qa(s)}else await na(s.localStore,e,!1).then(()=>ia(s,e,t)).catch(Zn)}async function $w(n,e){const t=q(n),s=e.batch.batchId;try{const r=await Q_(t.localStore,e);Kh(t,s,null),Gh(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await rr(t,r)}catch(r){await Zn(r)}}async function Hw(n,e,t){const s=q(n);try{const r=await function(o,l){const c=q(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(h=>(Z(h!==null,37113),d=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(s.localStore,e);Kh(s,e,t),Gh(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await rr(s,r)}catch(r){await Zn(r)}}function Gh(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Kh(n,e,t){const s=q(n);let r=s.du[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.du[s.currentUser.toKey()]=r}}function ia(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(s=>{n.Vu.containsKey(s)||Xh(n,s)})}function Xh(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Va(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),qa(n))}function Ru(n,e,t){for(const s of t)s instanceof jh?(n.Vu.addReference(s.key,e),jw(n,s)):s instanceof Wh?(M(Wa,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||Xh(n,s.key)):j(19791,{wu:s})}function jw(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(s)||(M(Wa,"New document in limbo: "+t),n.Eu.add(s),qa(n))}function qa(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new $(re.fromString(e)),s=n.fu.next();n.Au.set(s,new Nw(t)),n.Ru=n.Ru.insert(t,s),xh(n.remoteStore,new Ft(st(Pa(t.path)),s,"TargetPurposeLimboResolution",Ei.ce))}}async function rr(n,e,t){const s=q(n),r=[],i=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach((l,c)=>{o.push(s.pu(c,e,t).then(u=>{var d;if((u||t)&&s.isPrimaryClient){const h=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:d.current;s.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(u){r.push(u);const h=Oa.Es(c.targetId,u);i.push(h)}}))}),await Promise.all(o),s.Pu.J_(r),await async function(c,u){const d=q(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>N.forEach(u,m=>N.forEach(m.Ts,g=>d.persistence.referenceDelegate.addReference(h,m.targetId,g)).next(()=>N.forEach(m.Is,g=>d.persistence.referenceDelegate.removeReference(h,m.targetId,g)))))}catch(h){if(!es(h))throw h;M(Ma,"Failed to update sequence numbers: "+h)}for(const h of u){const m=h.targetId;if(!h.fromCache){const g=d.vs.get(m),_=g.snapshotVersion,w=g.withLastLimboFreeSnapshotVersion(_);d.vs=d.vs.insert(m,w)}}}(s.localStore,i))}async function Ww(n,e){const t=q(n);if(!t.currentUser.isEqual(e)){M(Wa,"User change. New user:",e.toKey());const s=await Dh(t.localStore,e);t.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new B(L.CANCELLED,o))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await rr(t,s.Ns)}}function qw(n,e){const t=q(n),s=t.Au.get(e);if(s&&s.hu)return J().add(s.key);{let r=J();const i=t.Iu.get(e);if(!i)return r;for(const o of i){const l=t.Tu.get(o);r=r.unionWith(l.view.nu)}return r}}function Qh(n){const e=q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=zh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Uw.bind(null,e),e.Pu.J_=Pw.bind(null,e.eventManager),e.Pu.yu=Aw.bind(null,e.eventManager),e}function zw(n){const e=q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$w.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Hw.bind(null,e),e}class ii{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Di(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return X_(this.persistence,new z_,e.initialUser,this.serializer)}Cu(e){return new Ah(xa.Vi,this.serializer)}Du(e){return new nw}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ii.provider={build:()=>new ii};class Gw extends ii{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Z(this.persistence.referenceDelegate instanceof si,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new k_(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Oe.withCacheSize(this.cacheSizeBytes):Oe.DEFAULT;return new Ah(s=>si.Vi(s,t),this.serializer)}}class oa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Su(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ww.bind(null,this.syncEngine),await bw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Rw}()}createDatastore(e){const t=Di(e.databaseInfo.databaseId),s=aw(e.databaseInfo);return hw(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,i,o,l){return new mw(s,r,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Su(this.syncEngine,t,0),function(){return Eu.v()?new Eu:new sw}())}createSyncEngine(e,t){return function(r,i,o,l,c,u,d){const h=new Lw(r,i,o,l,c,u);return d&&(h.gu=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=q(r);M(_n,"RemoteStore shutting down."),i.Ea.add(5),await sr(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}oa.provider={build:()=>new oa};/**
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
 */class Jh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):yt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Jt="FirestoreClient";class Kw{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=Se.UNAUTHENTICATED,this.clientId=va.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{M(Jt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(M(Jt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Ha(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Do(n,e){n.asyncQueue.verifyOperationInProgress(),M(Jt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Dh(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Pu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Xw(n);M(Jt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>Tu(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>Tu(e.remoteStore,r)),n._onlineComponents=e}async function Xw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(Jt,"Using user provided OfflineComponentProvider");try{await Do(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===L.FAILED_PRECONDITION||r.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;Wn("Error using user provided cache. Falling back to memory cache: "+t),await Do(n,new ii)}}else M(Jt,"Using default OfflineComponentProvider"),await Do(n,new Gw(void 0));return n._offlineComponents}async function Yh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(Jt,"Using user provided OnlineComponentProvider"),await Pu(n,n._uninitializedComponentsProvider._online)):(M(Jt,"Using default OnlineComponentProvider"),await Pu(n,new oa))),n._onlineComponents}function Qw(n){return Yh(n).then(e=>e.syncEngine)}async function Zh(n){const e=await Yh(n),t=e.eventManager;return t.onListen=xw.bind(null,e.syncEngine),t.onUnlisten=Vw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Ow.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Bw.bind(null,e.syncEngine),t}function Jw(n,e,t={}){const s=new ht;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Jh({next:m=>{d.Nu(),o.enqueueAndForget(()=>$h(i,h));const g=m.docs.has(l);!g&&m.fromCache?u.reject(new B(L.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new B(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),h=new Hh(Pa(l.path),d,{includeMetadataChanges:!0,Ka:!0});return Uh(i,h)}(await Zh(n),n.asyncQueue,e,t,s)),s.promise}function Yw(n,e,t={}){const s=new ht;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Jh({next:m=>{d.Nu(),o.enqueueAndForget(()=>$h(i,h)),m.fromCache&&c.source==="server"?u.reject(new B(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),h=new Hh(l,d,{includeMetadataChanges:!0,Ka:!0});return Uh(i,h)}(await Zh(n),n.asyncQueue,e,t,s)),s.promise}function Zw(n,e){const t=new ht;return n.asyncQueue.enqueueAndForget(async()=>Fw(await Qw(n),e,t)),t.promise}/**
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
 */function ef(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const eE="ComponentProvider",Au=new Map;function tE(n,e,t,s,r){return new vy(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,ef(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
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
 */const tf="firestore.googleapis.com",Du=!0;class ku{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tf,this.ssl=Du}else this.host=e.host,this.ssl=e.ssl??Du;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ph;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<A_)throw new B(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ef(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Li{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ku({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ku(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new ey;switch(s.type){case"firstParty":return new ry(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new B(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Au.get(t);s&&(M(eE,"Removing Datastore"),Au.delete(t),s.terminate())}(this),Promise.resolve()}}function nE(n,e,t,s={}){var u;n=_t(n,Li);const r=Yt(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;r&&(pa(`https://${l}`),ga("Firestore",!0)),i.host!==tf&&i.host!==l&&Wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:r,emulatorOptions:s};if(!pn(c,o)&&(n._setSettings(c),s.mockUserToken)){let d,h;if(typeof s.mockUserToken=="string")d=s.mockUserToken,h=Se.MOCK_USER;else{d=Rd(s.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const m=s.mockUserToken.sub||s.mockUserToken.user_id;if(!m)throw new B(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Se(m)}n._authCredentials=new ty(new Ud(d,h))}}/**
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
 */class xi{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new xi(this.firestore,e,this._query)}}class ye{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ye(this.firestore,e,this._key)}toJSON(){return{type:ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(er(t,ye._jsonSchema))return new ye(e,s||null,new $(re.fromString(t.referencePath)))}}ye._jsonSchemaVersion="firestore/documentReference/1.0",ye._jsonSchema={type:fe("string",ye._jsonSchemaVersion),referencePath:fe("string")};class Wt extends xi{constructor(e,t,s){super(e,t,Pa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ye(this.firestore,null,new $(e))}withConverter(e){return new Wt(this.firestore,e,this._path)}}function Ae(n,e,...t){if(n=ae(n),$d("collection","path",e),n instanceof Li){const s=re.fromString(e,...t);return qc(s),new Wt(n,null,s)}{if(!(n instanceof ye||n instanceof Wt))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(re.fromString(e,...t));return qc(s),new Wt(n.firestore,null,s)}}function oe(n,e,...t){if(n=ae(n),arguments.length===1&&(e=va.newId()),$d("doc","path",e),n instanceof Li){const s=re.fromString(e,...t);return Wc(s),new ye(n,null,new $(s))}{if(!(n instanceof ye||n instanceof Wt))throw new B(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(re.fromString(e,...t));return Wc(s),new ye(n.firestore,n instanceof Wt?n.converter:null,new $(s))}}/**
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
 */const Nu="AsyncQueue";class Lu{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Nh(this,"async_queue_retry"),this._c=()=>{const s=Ao();s&&M(Nu,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Ao();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ao();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new ht;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!es(e))throw e;M(Nu,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,yt("INTERNAL UNHANDLED ERROR: ",xu(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=$a.createAndSchedule(this,e,t,s,i=>this.hc(i));return this.tc.push(r),r}uc(){this.nc&&j(47125,{Pc:xu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function xu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ns extends Li{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Lu,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Lu(e),this._firestoreClient=void 0,await e}}}function sE(n,e){const t=typeof n=="object"?n:wa(),s=typeof n=="string"?n:Qr,r=wi(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Id("firestore");i&&nE(r,...i)}return r}function Oi(n){if(n._terminated)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||rE(n),n._firestoreClient}function rE(n){var s,r,i,o;const e=n._freezeSettings(),t=tE(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Kw(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class We{constructor(e){this._byteString=e}static fromBase64String(e){try{return new We(Ce.fromBase64String(e))}catch(t){throw new B(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new We(Ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:We._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(er(e,We._jsonSchema))return We.fromBase64String(e.bytes)}}We._jsonSchemaVersion="firestore/bytes/1.0",We._jsonSchema={type:fe("string",We._jsonSchemaVersion),bytes:fe("string")};/**
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
 */class za{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ga{constructor(e){this._methodName=e}}/**
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
 */class it{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:it._jsonSchemaVersion}}static fromJSON(e){if(er(e,it._jsonSchema))return new it(e.latitude,e.longitude)}}it._jsonSchemaVersion="firestore/geoPoint/1.0",it._jsonSchema={type:fe("string",it._jsonSchemaVersion),latitude:fe("number"),longitude:fe("number")};/**
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
 */class Xe{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Xe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(er(e,Xe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Xe(e.vectorValues);throw new B(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xe._jsonSchemaVersion="firestore/vectorValue/1.0",Xe._jsonSchema={type:fe("string",Xe._jsonSchemaVersion),vectorValues:fe("object")};/**
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
 */const iE=/^__.*__$/;class oE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new en(e,this.data,this.fieldMask,t,this.fieldTransforms):new tr(e,this.data,t,this.fieldTransforms)}}class nf{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new en(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function sf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{dataSource:n})}}class Ka{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ka({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return oi(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(sf(this.dataSource)&&iE.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class aE{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Di(e)}createContext(e,t,s,r=!1){return new Ka({dataSource:e,methodName:t,targetDoc:s,path:Te.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rf(n){const e=n._freezeSettings(),t=Di(n._databaseId);return new aE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function of(n,e,t,s,r,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,r);Xa("Data must be an object, but it was:",o,s);const l=af(s,o);let c,u;if(i.merge)c=new Ue(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const h of i.mergeFields){const m=Ks(e,h,t);if(!o.contains(m))throw new B(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);uf(d,m)||d.push(m)}c=new Ue(d),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new oE(new Be(l),c,u)}class ir extends Ga{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ir}}function lE(n,e,t,s){const r=n.createContext(1,e,t);Xa("Data must be an object, but it was:",r,s);const i=[],o=Be.empty();Zt(s,(c,u)=>{const d=cf(e,c,t);u=ae(u);const h=r.childContextForFieldPath(d);if(u instanceof ir)i.push(d);else{const m=Mi(u,h);m!=null&&(i.push(d),o.set(d,m))}});const l=new Ue(i);return new nf(o,l,r.fieldTransforms)}function cE(n,e,t,s,r,i){const o=n.createContext(1,e,t),l=[Ks(e,s,t)],c=[r];if(i.length%2!=0)throw new B(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Ks(e,i[m])),c.push(i[m+1]);const u=[],d=Be.empty();for(let m=l.length-1;m>=0;--m)if(!uf(u,l[m])){const g=l[m];let _=c[m];_=ae(_);const w=o.childContextForFieldPath(g);if(_ instanceof ir)u.push(g);else{const C=Mi(_,w);C!=null&&(u.push(g),d.set(g,C))}}const h=new Ue(u);return new nf(d,h,o.fieldTransforms)}function Mi(n,e){if(lf(n=ae(n)))return Xa("Unsupported field value:",e,n),af(n,e);if(n instanceof Ga)return function(s,r){if(!sf(r.dataSource))throw r.createError(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.createError(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const l of s){let c=Mi(l,r.childContextForArray(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(s,r){if((s=ae(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Gy(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=z.fromDate(s);return{timestampValue:ni(r.serializer,i)}}if(s instanceof z){const i=new z(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ni(r.serializer,i)}}if(s instanceof it)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof We)return{bytesValue:Eh(r.serializer,s._byteString)};if(s instanceof ye){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Na(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Xe)return function(o,l){const c=o instanceof Xe?o.toArray():o;return{mapValue:{fields:{[Qd]:{stringValue:Jd},[Jr]:{arrayValue:{values:c.map(d=>{if(typeof d!="number")throw l.createError("VectorValues must only contain numeric values.");return Aa(l.serializer,d)})}}}}}}(s,r);if(Rh(s))return s._toProto(r.serializer);throw r.createError(`Unsupported field value: ${Ta(s)}`)}(n,e)}function af(n,e){const t={};return Wd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zt(n,(s,r)=>{const i=Mi(r,e.childContextForField(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function lf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof z||n instanceof it||n instanceof We||n instanceof ye||n instanceof Ga||n instanceof Xe||Rh(n))}function Xa(n,e,t){if(!lf(t)||!Hd(t)){const s=Ta(t);throw s==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+s)}}function Ks(n,e,t){if((e=ae(e))instanceof za)return e._internalPath;if(typeof e=="string")return cf(n,e);throw oi("Field path arguments must be of type string or ",n,!1,void 0,t)}const uE=new RegExp("[~\\*/\\[\\]]");function cf(n,e,t){if(e.search(uE)>=0)throw oi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new za(...e.split("."))._internalPath}catch{throw oi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function oi(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new B(L.INVALID_ARGUMENT,l+n+c)}function uf(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class dE{convertValue(e,t="none"){switch(Xt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Kt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw j(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Zt(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[Jr].arrayValue)==null?void 0:r.values)==null?void 0:i.map(o=>de(o.doubleValue));return new Xe(t)}convertGeoPoint(e){return new it(de(e.latitude),de(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ti(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(js(e));default:return null}}convertTimestamp(e){const t=Gt(e);return new z(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=re.fromString(e);Z(Sh(s),9688,{name:e});const r=new Ws(s.get(1),s.get(3)),i=new $(s.popFirst(5));return r.isEqual(t)||yt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class df extends dE{constructor(e){super(),this.firestore=e}convertBytes(e){return new We(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ye(this.firestore,null,t)}}/**
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
 */function hE(){return new ir("deleteField")}const Ou="@firebase/firestore",Mu="4.10.0";/**
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
 */class hf{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Ks("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class fE extends hf{data(){return super.data()}}/**
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
 */function mE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function ff(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Ds{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hn extends hf{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ur(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ks("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=hn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}hn._jsonSchemaVersion="firestore/documentSnapshot/1.0",hn._jsonSchema={type:fe("string",hn._jsonSchemaVersion),bundleSource:fe("string","DocumentSnapshot"),bundleName:fe("string"),bundle:fe("string")};class Ur extends hn{data(e={}){return super.data(e)}}class Bn{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ds(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Ur(this._firestore,this._userDataWriter,s.key,s,new Ds(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(l=>{const c=new Ur(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Ds(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Ur(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Ds(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:pE(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Bn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=va.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function pE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:n})}}/**
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
 */Bn._jsonSchemaVersion="firestore/querySnapshot/1.0",Bn._jsonSchema={type:fe("string",Bn._jsonSchemaVersion),bundleSource:fe("string","QuerySnapshot"),bundleName:fe("string"),bundle:fe("string")};/**
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
 */class gE{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=rf(e)}set(e,t,s){this._verifyNotCommitted();const r=ko(e,this._firestore),i=ff(r.converter,t,s),o=of(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,He.none())),this}update(e,t,s,...r){this._verifyNotCommitted();const i=ko(e,this._firestore);let o;return o=typeof(t=ae(t))=="string"||t instanceof za?cE(this._dataReader,"WriteBatch.update",i._key,t,s,r):lE(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,He.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ko(e,this._firestore);return this._mutations=this._mutations.concat(new Pi(t._key,He.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ko(n,e){if((n=ae(n)).firestore!==e)throw new B(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function Qn(n){n=_t(n,ye);const e=_t(n.firestore,ns),t=Oi(e);return Jw(t,n._key).then(s=>yE(e,n,s))}function De(n){n=_t(n,xi);const e=_t(n.firestore,ns),t=Oi(e),s=new df(e);return mE(n._query),Yw(t,n._query).then(r=>new Bn(e,s,n,r))}function Et(n,e,t){n=_t(n,ye);const s=_t(n.firestore,ns),r=ff(n.converter,e,t),i=rf(s);return Qa(s,[of(i,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,He.none())])}function Vu(n){return Qa(_t(n.firestore,ns),[new Pi(n._key,He.none())])}function Qa(n,e){const t=Oi(n);return Zw(t,e)}function yE(n,e,t){const s=t.docs.get(e._key),r=new df(n);return new hn(n,r,e._key,s,new Ds(t.hasPendingWrites,t.fromCache),e.converter)}function Je(n){return n=_t(n,ns),Oi(n),new gE(n,e=>Qa(n,e))}(function(e,t=!0){Zg(Tn),gn(new qt("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new ns(new ny(s.getProvider("auth-internal")),new iy(o,s.getProvider("app-check-internal")),Ty(o,r),o);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),nt(Ou,Mu,e),nt(Ou,Mu,"esm2020")})();var _E="firebase",wE="12.8.0";/**
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
 */nt(_E,wE,"app");function mf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EE=mf,pf=new Ys("auth","Firebase",mf());/**
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
 */const ai=new ya("@firebase/auth");function vE(n,...e){ai.logLevel<=X.WARN&&ai.warn(`Auth (${Tn}): ${n}`,...e)}function $r(n,...e){ai.logLevel<=X.ERROR&&ai.error(`Auth (${Tn}): ${n}`,...e)}/**
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
 */function ze(n,...e){throw Ya(n,...e)}function Qe(n,...e){return Ya(n,...e)}function Ja(n,e,t){const s={...EE(),[e]:t};return new Ys("auth","Firebase",s).create(e,{appName:n.name})}function ft(n){return Ja(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function TE(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&ze(n,"argument-error"),Ja(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ya(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return pf.create(n,...e)}function H(n,e,...t){if(!n)throw Ya(e,...t)}function ut(n){const e="INTERNAL ASSERTION FAILED: "+n;throw $r(e),new Error(e)}function vt(n,e){n||ut(e)}/**
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
 */function aa(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function CE(){return Bu()==="http:"||Bu()==="https:"}function Bu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function IE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CE()||Np()||"connection"in navigator)?navigator.onLine:!0}function bE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class or{constructor(e,t){this.shortDelay=e,this.longDelay=t,vt(t>e,"Short delay should be less than long delay!"),this.isMobile=Ap()||Lp()}get(){return IE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Za(n,e){vt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class gf{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const RE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],PE=new or(3e4,6e4);function Ct(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function It(n,e,t,s,r={}){return yf(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=Zs({key:n.config.apiKey,...o}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:c,...i};return kp()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&Yt(n.emulatorConfig.host)&&(u.credentials="include"),gf.fetch()(await _f(n,n.config.apiHost,t,l),u)})}async function yf(n,e,t){n._canInitEmulator=!1;const s={...SE,...e};try{const r=new DE(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Nr(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nr(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Nr(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Nr(n,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ja(n,d,u);ze(n,d)}}catch(r){if(r instanceof ct)throw r;ze(n,"network-request-failed",{message:String(r)})}}async function ar(n,e,t,s,r={}){const i=await It(n,e,t,s,r);return"mfaPendingCredential"in i&&ze(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function _f(n,e,t,s){const r=`${e}${t}?${s}`,i=n,o=i.config.emulator?Za(n.config,r):`${n.config.apiScheme}://${r}`;return RE.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function AE(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class DE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Qe(this.auth,"network-request-failed")),PE.get())})}}function Nr(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=Qe(n,e,s);return r.customData._tokenResponse=t,r}function Fu(n){return n!==void 0&&n.enterprise!==void 0}class kE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return AE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function NE(n,e){return It(n,"GET","/v2/recaptchaConfig",Ct(n,e))}/**
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
 */async function LE(n,e){return It(n,"POST","/v1/accounts:delete",e)}async function li(n,e){return It(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xE(n,e=!1){const t=ae(n),s=await t.getIdToken(e),r=el(s);H(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Vs(No(r.auth_time)),issuedAtTime:Vs(No(r.iat)),expirationTime:Vs(No(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function No(n){return Number(n)*1e3}function el(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return $r("JWT malformed, contained fewer than 3 sections"),null;try{const r=Td(t);return r?JSON.parse(r):($r("Failed to decode base64 JWT payload"),null)}catch(r){return $r("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Uu(n){const e=el(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xs(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ct&&OE(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function OE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ME{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class la{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ci(n){var h;const e=n.auth,t=await n.getIdToken(),s=await Xs(n,li(e,{idToken:t}));H(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(h=r.providerUserInfo)!=null&&h.length?wf(r.providerUserInfo):[],o=BE(n.providerData,i),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new la(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function VE(n){const e=ae(n);await ci(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BE(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function wf(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function FE(n,e){const t=await yf(n,{},async()=>{const s=Zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=await _f(n,r,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return n.emulatorConfig&&Yt(n.emulatorConfig.host)&&(c.credentials="include"),gf.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function UE(n,e){return It(n,"POST","/v2/accounts:revokeToken",Ct(n,e))}/**
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
 */class Fn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=Uu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await FE(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new Fn;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fn,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
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
 */function Lt(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ke{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new ME(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new la(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Xs(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xE(this,e)}reload(){return VE(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ke({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ci(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(ft(this.auth));const e=await this.getIdToken();return await Xs(this,LE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,u=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:h,emailVerified:m,isAnonymous:g,providerData:_,stsTokenManager:w}=t;H(h&&w,e,"internal-error");const C=Fn.fromJSON(this.name,w);H(typeof h=="string",e,"internal-error"),Lt(s,e.name),Lt(r,e.name),H(typeof m=="boolean",e,"internal-error"),H(typeof g=="boolean",e,"internal-error"),Lt(i,e.name),Lt(o,e.name),Lt(l,e.name),Lt(c,e.name),Lt(u,e.name),Lt(d,e.name);const k=new Ke({uid:h,auth:e,email:r,emailVerified:m,displayName:s,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:C,createdAt:u,lastLoginAt:d});return _&&Array.isArray(_)&&(k.providerData=_.map(x=>({...x}))),c&&(k._redirectEventId=c),k}static async _fromIdTokenResponse(e,t,s=!1){const r=new Fn;r.updateFromServerResponse(t);const i=new Ke({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ci(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];H(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?wf(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new Fn;l.updateFromIdToken(s);const c=new Ke({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new la(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const $u=new Map;function dt(n){vt(n instanceof Function,"Expected a class definition");let e=$u.get(n);return e?(vt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,$u.set(n,e),e)}/**
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
 */class Ef{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ef.type="NONE";const Hu=Ef;/**
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
 */function Hr(n,e,t){return`firebase:${n}:${e}:${t}`}class Un{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Hr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Hr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await li(this.auth,{idToken:e}).catch(()=>{});return t?Ke._fromGetAccountInfoResponse(this.auth,t,e):null}return Ke._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Un(dt(Hu),e,s);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||dt(Hu);const o=Hr(s,e.config.apiKey,e.name);let l=null;for(const u of t)try{const d=await u._get(o);if(d){let h;if(typeof d=="string"){const m=await li(e,{idToken:d}).catch(()=>{});if(!m)break;h=await Ke._fromGetAccountInfoResponse(e,m,d)}else h=Ke._fromJSON(e,d);u!==i&&(l=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Un(i,e,s):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Un(i,e,s))}}/**
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
 */function ju(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(If(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sf(e))return"Blackberry";if(Rf(e))return"Webos";if(Tf(e))return"Safari";if((e.includes("chrome/")||Cf(e))&&!e.includes("edge/"))return"Chrome";if(bf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function vf(n=Pe()){return/firefox\//i.test(n)}function Tf(n=Pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cf(n=Pe()){return/crios\//i.test(n)}function If(n=Pe()){return/iemobile/i.test(n)}function bf(n=Pe()){return/android/i.test(n)}function Sf(n=Pe()){return/blackberry/i.test(n)}function Rf(n=Pe()){return/webos/i.test(n)}function tl(n=Pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $E(n=Pe()){var e;return tl(n)&&!!((e=window.navigator)!=null&&e.standalone)}function HE(){return xp()&&document.documentMode===10}function Pf(n=Pe()){return tl(n)||bf(n)||Rf(n)||Sf(n)||/windows phone/i.test(n)||If(n)}/**
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
 */function Af(n,e=[]){let t;switch(n){case"Browser":t=ju(Pe());break;case"Worker":t=`${ju(Pe())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Tn}/${s}`}/**
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
 */class jE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function WE(n,e={}){return It(n,"GET","/v2/passwordPolicy",Ct(n,e))}/**
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
 */const qE=6;class zE{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??qE,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class GE{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wu(this),this.idTokenSubscription=new Wu(this),this.beforeStateQueue=new jE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=dt(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Un.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await li(this,{idToken:e}),s=await Ke._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ve(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ci(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(ft(this));const t=e?ae(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WE(this),t=new zE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ys("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await UE(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&dt(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await Un.create(this,[dt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Af(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&vE(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function bt(n){return ae(n)}class Wu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hp(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KE(n){Vi=n}function Df(n){return Vi.loadJS(n)}function XE(){return Vi.recaptchaEnterpriseScript}function QE(){return Vi.gapiScript}function JE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class YE{constructor(){this.enterprise=new ZE}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ZE{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ev="recaptcha-enterprise",kf="NO_RECAPTCHA";class tv{constructor(e){this.type=ev,this.auth=bt(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{NE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new kE(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function r(i,o,l){const c=window.grecaptcha;Fu(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(kf)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new YE().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(l=>{if(!t&&Fu(window.grecaptcha))r(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=XE();c.length!==0&&(c+=l),Df(c).then(()=>{r(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function qu(n,e,t,s=!1,r=!1){const i=new tv(n);let o;if(r)o=kf;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ui(n,e,t,s,r){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await qu(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await qu(n,e,t,t==="getOobCode");return s(n,l)}else return Promise.reject(o)})}/**
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
 */function nv(n,e){const t=wi(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(pn(i,e??{}))return r;ze(r,"already-initialized")}return t.initialize({options:e})}function sv(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(dt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function rv(n,e,t){const s=bt(n);H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Nf(e),{host:o,port:l}=iv(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){H(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),H(pn(u,s.config.emulator)&&pn(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,Yt(o)?(pa(`${i}//${o}${c}`),ga("Auth",!0)):ov()}function Nf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function iv(n){const e=Nf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:zu(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:zu(o)}}}function zu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ov(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class nl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,t){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}async function av(n,e){return It(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function lv(n,e){return ar(n,"POST","/v1/accounts:signInWithPassword",Ct(n,e))}async function cv(n,e){return It(n,"POST","/v1/accounts:sendOobCode",Ct(n,e))}async function uv(n,e){return cv(n,e)}/**
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
 */async function dv(n,e){return ar(n,"POST","/v1/accounts:signInWithEmailLink",Ct(n,e))}async function hv(n,e){return ar(n,"POST","/v1/accounts:signInWithEmailLink",Ct(n,e))}/**
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
 */class Qs extends nl{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Qs(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Qs(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ui(e,t,"signInWithPassword",lv);case"emailLink":return dv(e,{email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ui(e,s,"signUpPassword",av);case"emailLink":return hv(e,{idToken:t,email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function $n(n,e){return ar(n,"POST","/v1/accounts:signInWithIdp",Ct(n,e))}/**
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
 */const fv="http://localhost";class Tt extends nl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const o=new Tt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return $n(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,$n(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$n(e,t)}buildRequest(){const e={requestUri:fv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zs(t)}return e}}/**
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
 */function mv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pv(n){const e=bs(Ss(n)).link,t=e?bs(Ss(e)).deep_link_id:null,s=bs(Ss(n)).deep_link_id;return(s?bs(Ss(s)).link:null)||s||t||e||n}class sl{constructor(e){const t=bs(Ss(e)),s=t.apiKey??null,r=t.oobCode??null,i=mv(t.mode??null);H(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=pv(e);try{return new sl(t)}catch{return null}}}/**
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
 */class ss{constructor(){this.providerId=ss.PROVIDER_ID}static credential(e,t){return Qs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=sl.parseLink(t);return H(s,"argument-error"),Qs._fromEmailAndCode(e,s.code,s.tenantId)}}ss.PROVIDER_ID="password";ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class rl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rs extends rl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Hn extends rs{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return H("providerId"in t&&"signInMethod"in t,"argument-error"),Tt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return H(e.idToken||e.accessToken,"argument-error"),Tt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Hn.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Hn.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:r,pendingToken:i,nonce:o,providerId:l}=e;if(!s&&!r&&!t&&!i||!l)return null;try{return new Hn(l)._credential({idToken:t,accessToken:s,nonce:o,pendingToken:i})}catch{return null}}}/**
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
 */class xt extends rs{constructor(){super("facebook.com")}static credential(e){return Tt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
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
 */class Ot extends rs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Tt._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ot.credential(t,s)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
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
 */class Mt extends rs{constructor(){super("github.com")}static credential(e){return Tt._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.GITHUB_SIGN_IN_METHOD="github.com";Mt.PROVIDER_ID="github.com";/**
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
 */class Vt extends rs{constructor(){super("twitter.com")}static credential(e,t){return Tt._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Vt.credential(t,s)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
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
 */async function gv(n,e){return ar(n,"POST","/v1/accounts:signUp",Ct(n,e))}/**
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
 */class wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await Ke._fromIdTokenResponse(e,s,r),o=Gu(s);return new wn({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Gu(s);return new wn({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Gu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class di extends ct{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,di.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new di(e,t,s,r)}}function Lf(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?di._fromErrorAndOperation(n,i,e,s):i})}async function yv(n,e,t=!1){const s=await Xs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return wn._forOperation(n,"link",s)}/**
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
 */async function _v(n,e,t=!1){const{auth:s}=n;if(Ve(s.app))return Promise.reject(ft(s));const r="reauthenticate";try{const i=await Xs(n,Lf(s,r,e,n),t);H(i.idToken,s,"internal-error");const o=el(i.idToken);H(o,s,"internal-error");const{sub:l}=o;return H(n.uid===l,s,"user-mismatch"),wn._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ze(s,"user-mismatch"),i}}/**
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
 */async function xf(n,e,t=!1){if(Ve(n.app))return Promise.reject(ft(n));const s="signIn",r=await Lf(n,s,e),i=await wn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function wv(n,e){return xf(bt(n),e)}/**
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
 */async function Of(n){const e=bt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ev(n,e,t){const s=bt(n);await ui(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",uv)}async function vv(n,e,t){if(Ve(n.app))return Promise.reject(ft(n));const s=bt(n),o=await ui(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gv).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Of(n),c}),l=await wn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(l.user),l}function Tv(n,e,t){return Ve(n.app)?Promise.reject(ft(n)):wv(ae(n),ss.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Of(n),s})}function Cv(n,e,t,s){return ae(n).onIdTokenChanged(e,t,s)}function Iv(n,e,t){return ae(n).beforeAuthStateChanged(e,t)}function bv(n,e,t,s){return ae(n).onAuthStateChanged(e,t,s)}function Sv(n){return ae(n).signOut()}const hi="__sak";/**
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
 */class Mf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(hi,"1"),this.storage.removeItem(hi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Rv=1e3,Pv=10;class Vf extends Mf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);HE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Pv):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Rv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vf.type="LOCAL";const Av=Vf;/**
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
 */class Bf extends Mf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Bf.type="SESSION";const Ff=Bf;/**
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
 */function Dv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Bi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Bi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(o).map(async u=>u(t.origin,i)),c=await Dv(l);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bi.receivers=[];/**
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
 */function il(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class kv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=il("",20);r.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const m=h;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ot(){return window}function Nv(n){ot().location.href=n}/**
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
 */function Uf(){return typeof ot().WorkerGlobalScope<"u"&&typeof ot().importScripts=="function"}async function Lv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Ov(){return Uf()?self:null}/**
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
 */const $f="firebaseLocalStorageDb",Mv=1,fi="firebaseLocalStorage",Hf="fbase_key";class lr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fi(n,e){return n.transaction([fi],e?"readwrite":"readonly").objectStore(fi)}function Vv(){const n=indexedDB.deleteDatabase($f);return new lr(n).toPromise()}function ca(){const n=indexedDB.open($f,Mv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(fi,{keyPath:Hf})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(fi)?e(s):(s.close(),await Vv(),e(await ca()))})})}async function Ku(n,e,t){const s=Fi(n,!0).put({[Hf]:e,value:t});return new lr(s).toPromise()}async function Bv(n,e){const t=Fi(n,!1).get(e),s=await new lr(t).toPromise();return s===void 0?null:s.value}function Xu(n,e){const t=Fi(n,!0).delete(e);return new lr(t).toPromise()}const Fv=800,Uv=3;class jf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ca(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Uv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bi._getInstance(Ov()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await Lv(),!this.activeServiceWorker)return;this.sender=new kv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ca();return await Ku(e,hi,"1"),await Xu(e,hi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ku(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Bv(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Fi(r,!1).getAll();return new lr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jf.type="LOCAL";const $v=jf;new or(3e4,6e4);/**
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
 */function Wf(n,e){return e?dt(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ol extends nl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $n(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $n(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $n(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hv(n){return xf(n.auth,new ol(n),n.bypassAuthState)}function jv(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),_v(t,new ol(n),n.bypassAuthState)}async function Wv(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),yv(t,new ol(n),n.bypassAuthState)}/**
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
 */class qf{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hv;case"linkViaPopup":case"linkViaRedirect":return Wv;case"reauthViaPopup":case"reauthViaRedirect":return jv;default:ze(this.auth,"internal-error")}}resolve(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qv=new or(2e3,1e4);async function zv(n,e,t){if(Ve(n.app))return Promise.reject(Qe(n,"operation-not-supported-in-this-environment"));const s=bt(n);TE(n,e,rl);const r=Wf(s,t);return new dn(s,"signInViaPopup",e,r).executeNotNull()}class dn extends qf{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const e=il();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qv.get())};e()}}dn.currentPopupAction=null;/**
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
 */const Gv="pendingRedirect",jr=new Map;class Kv extends qf{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=jr.get(this.auth._key());if(!e){try{const s=await Xv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}jr.set(this.auth._key(),e)}return this.bypassAuthState||jr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xv(n,e){const t=Yv(e),s=Jv(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function Qv(n,e){jr.set(n._key(),e)}function Jv(n){return dt(n._redirectPersistence)}function Yv(n){return Hr(Gv,n.config.apiKey,n.name)}async function Zv(n,e,t=!1){if(Ve(n.app))return Promise.reject(ft(n));const s=bt(n),r=Wf(s,e),o=await new Kv(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const eT=10*60*1e3;class tT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!zf(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Qe(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qu(e))}saveEventToCache(e){this.cachedEventUids.add(Qu(e)),this.lastProcessedEventTime=Date.now()}}function Qu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function zf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zf(n);default:return!1}}/**
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
 */async function sT(n,e={}){return It(n,"GET","/v1/projects",e)}/**
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
 */const rT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iT=/^https?/;async function oT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await sT(n);for(const t of e)try{if(aT(t))return}catch{}ze(n,"unauthorized-domain")}function aT(n){const e=aa(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!iT.test(t))return!1;if(rT.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const lT=new or(3e4,6e4);function Ju(){const n=ot().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function cT(n){return new Promise((e,t)=>{var r,i,o;function s(){Ju(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ju(),t(Qe(n,"network-request-failed"))},timeout:lT.get()})}if((i=(r=ot().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=ot().gapi)!=null&&o.load)s();else{const l=JE("iframefcb");return ot()[l]=()=>{gapi.load?s():t(Qe(n,"network-request-failed"))},Df(`${QE()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Wr=null,e})}let Wr=null;function uT(n){return Wr=Wr||cT(n),Wr}/**
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
 */const dT=new or(5e3,15e3),hT="__/auth/iframe",fT="emulator/auth/iframe",mT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gT(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Za(e,fT):`https://${n.config.authDomain}/${hT}`,s={apiKey:e.apiKey,appName:n.name,v:Tn},r=pT.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Zs(s).slice(1)}`}async function yT(n){const e=await uT(n),t=ot().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:gT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mT,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Qe(n,"network-request-failed"),l=ot().setTimeout(()=>{i(o)},dT.get());function c(){ot().clearTimeout(l),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const _T={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wT=500,ET=600,vT="_blank",TT="http://localhost";class Yu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CT(n,e,t,s=wT,r=ET){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c={..._T,width:s.toString(),height:r.toString(),top:i,left:o},u=Pe().toLowerCase();t&&(l=Cf(u)?vT:t),vf(u)&&(e=e||TT,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[g,_])=>`${m}${g}=${_},`,"");if($E(u)&&l!=="_self")return IT(e||"",l),new Yu(null);const h=window.open(e||"",l,d);H(h,n,"popup-blocked");try{h.focus()}catch{}return new Yu(h)}function IT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const bT="__/auth/handler",ST="emulator/auth/handler",RT=encodeURIComponent("fac");async function Zu(n,e,t,s,r,i){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Tn,eventId:r};if(e instanceof rl){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",$p(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof rs){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),u=c?`#${RT}=${encodeURIComponent(c)}`:"";return`${PT(n)}?${Zs(l).slice(1)}${u}`}function PT({config:n}){return n.emulator?Za(n,ST):`https://${n.authDomain}/${bT}`}/**
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
 */const Lo="webStorageSupport";class AT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ff,this._completeRedirectFn=Zv,this._overrideRedirectResult=Qv}async _openPopup(e,t,s,r){var o;vt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Zu(e,t,s,aa(),r);return CT(e,i,il())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Zu(e,t,s,aa(),r);return Nv(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(vt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await yT(e),s=new tT(e);return t.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Lo,{type:Lo},r=>{var o;const i=(o=r==null?void 0:r[0])==null?void 0:o[Lo];i!==void 0&&t(!!i),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=oT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Pf()||Tf()||tl()}}const DT=AT;var ed="@firebase/auth",td="1.12.0";/**
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
 */class kT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function NT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LT(n){gn(new qt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Af(n)},u=new GE(s,r,i,c);return sv(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),gn(new qt("auth-internal",e=>{const t=bt(e.getProvider("auth").getImmediate());return(s=>new kT(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(ed,td,NT(n)),nt(ed,td,"esm2020")}/**
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
 */const xT=5*60,OT=Sd("authIdTokenMaxAge")||xT;let nd=null;const MT=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>OT)return;const r=t==null?void 0:t.token;nd!==r&&(nd=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function VT(n=wa()){const e=wi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=nv(n,{popupRedirectResolver:DT,persistence:[$v,Av,Ff]}),s=Sd("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=MT(i.toString());Iv(t,o,()=>o(t.currentUser)),Cv(t,l=>o(l))}}const r=Cd("auth");return r&&rv(t,`http://${r}`),t}function BT(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}KE({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=Qe("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",BT().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LT("Browser");/**
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
 */const Gf="firebasestorage.googleapis.com",Kf="storageBucket",FT=2*60*1e3,UT=10*60*1e3,$T=1e3;/**
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
 */class ce extends ct{constructor(e,t,s=0){super(xo(e),`Firebase Storage: ${t} (${xo(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ie;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ie||(ie={}));function xo(n){return"storage/"+n}function al(){const n="An unknown error occurred, please check the error payload for server response.";return new ce(ie.UNKNOWN,n)}function HT(n){return new ce(ie.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function jT(n){return new ce(ie.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function WT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ce(ie.UNAUTHENTICATED,n)}function qT(){return new ce(ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function zT(n){return new ce(ie.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Xf(){return new ce(ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Qf(){return new ce(ie.CANCELED,"User canceled the upload/download.")}function GT(n){return new ce(ie.INVALID_URL,"Invalid URL '"+n+"'.")}function KT(n){return new ce(ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function XT(){return new ce(ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Kf+"' property when initializing the app?")}function Jf(){return new ce(ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function QT(){return new ce(ie.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function JT(){return new ce(ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function YT(n){return new ce(ie.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ua(n){return new ce(ie.INVALID_ARGUMENT,n)}function Yf(){return new ce(ie.APP_DELETED,"The Firebase app was deleted.")}function ZT(n){return new ce(ie.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Bs(n,e){return new ce(ie.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Is(n){throw new ce(ie.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class $e{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=$e.makeFromUrl(e,t)}catch{return new $e(e,"")}if(s.path==="")return s;throw KT(e)}static makeFromUrl(e,t){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(F){F.path_=decodeURIComponent(F.path)}const d="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${d}/b/${r}/o${m}`,"i"),_={bucket:1,path:3},w=t===Gf?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",k=new RegExp(`^https?://${w}/${r}/${C}`,"i"),V=[{regex:l,indices:c,postModify:i},{regex:g,indices:_,postModify:u},{regex:k,indices:{bucket:1,path:2},postModify:u}];for(let F=0;F<V.length;F++){const G=V[F],ee=G.regex.exec(e);if(ee){const b=ee[G.indices.bucket];let E=ee[G.indices.path];E||(E=""),s=new $e(b,E),G.postModify(s);break}}if(s==null)throw GT(e);return s}}class eC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function tC(n,e,t){let s=1,r=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...C){u||(u=!0,e.apply(null,C))}function h(C){r=setTimeout(()=>{r=null,n(g,c())},C)}function m(){i&&clearTimeout(i)}function g(C,...k){if(u){m();return}if(C){m(),d.call(null,C,...k);return}if(c()||o){m(),d.call(null,C,...k);return}s<64&&(s*=2);let V;l===1?(l=2,V=0):V=(s+Math.random())*1e3,h(V)}let _=!1;function w(C){_||(_=!0,m(),!u&&(r!==null?(C||(l=2),clearTimeout(r),h(0)):C||(l=1)))}return h(0),i=setTimeout(()=>{o=!0,w(!0)},t),w}function nC(n){n(!1)}/**
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
 */function sC(n){return n!==void 0}function rC(n){return typeof n=="function"}function iC(n){return typeof n=="object"&&!Array.isArray(n)}function Ui(n){return typeof n=="string"||n instanceof String}function sd(n){return ll()&&n instanceof Blob}function ll(){return typeof Blob<"u"}function rd(n,e,t,s){if(s<e)throw ua(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw ua(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function is(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function Zf(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const r=e(s)+"="+e(n[s]);t=t+r+"&"}return t=t.slice(0,-1),t}var fn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(fn||(fn={}));/**
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
 */function em(n,e){const t=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||r||i}/**
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
 */class oC{constructor(e,t,s,r,i,o,l,c,u,d,h,m=!0,g=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=h,this.retry=m,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,w)=>{this.resolve_=_,this.reject_=w,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Lr(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===fn.NO_ERROR,c=i.getStatus();if(!l||em(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===fn.ABORT;s(!1,new Lr(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new Lr(u,i))})},t=(s,r)=>{const i=this.resolve_,o=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());sC(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=al();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Yf():Qf();o(c)}else{const c=Xf();o(c)}};this.canceled_?t(!1,new Lr(!1,null,!0)):this.backoffId_=tC(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&nC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Lr{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function aC(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function lC(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function cC(n,e){e&&(n["X-Firebase-GMPID"]=e)}function uC(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function dC(n,e,t,s,r,i,o=!0,l=!1){const c=Zf(n.urlParams),u=n.url+c,d=Object.assign({},n.headers);return cC(d,e),aC(d,t),lC(d,i),uC(d,s),new oC(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,o,l)}/**
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
 */function hC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function fC(...n){const e=hC();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(ll())return new Blob(n);throw new ce(ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function mC(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function pC(n){if(typeof atob>"u")throw YT("base-64");return atob(n)}/**
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
 */const tt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Oo{constructor(e,t){this.data=e,this.contentType=t||null}}function gC(n,e){switch(n){case tt.RAW:return new Oo(tm(e));case tt.BASE64:case tt.BASE64URL:return new Oo(nm(n,e));case tt.DATA_URL:return new Oo(_C(e),wC(e))}throw al()}function tm(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=n.charCodeAt(++t);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function yC(n){let e;try{e=decodeURIComponent(n)}catch{throw Bs(tt.DATA_URL,"Malformed data URL.")}return tm(e)}function nm(n,e){switch(n){case tt.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw Bs(n,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case tt.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw Bs(n,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=pC(e)}catch(r){throw r.message.includes("polyfill")?r:Bs(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}class sm{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Bs(tt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=EC(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function _C(n){const e=new sm(n);return e.base64?nm(tt.BASE64,e.rest):yC(e.rest)}function wC(n){return new sm(n).contentType}function EC(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Bt{constructor(e,t){let s=0,r="";sd(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(sd(this.data_)){const s=this.data_,r=mC(s,e,t);return r===null?null:new Bt(r)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new Bt(s,!0)}}static getBlob(...e){if(ll()){const t=e.map(s=>s instanceof Bt?s.data_:s);return new Bt(fC.apply(null,t))}else{const t=e.map(o=>Ui(o)?gC(tt.RAW,o).data:o.data_);let s=0;t.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return t.forEach(o=>{for(let l=0;l<o.length;l++)r[i++]=o[l]}),new Bt(r,!0)}}uploadData(){return this.data_}}/**
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
 */function rm(n){let e;try{e=JSON.parse(n)}catch{return null}return iC(e)?e:null}/**
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
 */function vC(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function TC(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function im(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function CC(n,e){return e}class Le{constructor(e,t,s,r){this.server=e,this.local=t||e,this.writable=!!s,this.xform=r||CC}}let xr=null;function IC(n){return!Ui(n)||n.length<2?n:im(n)}function om(){if(xr)return xr;const n=[];n.push(new Le("bucket")),n.push(new Le("generation")),n.push(new Le("metageneration")),n.push(new Le("name","fullPath",!0));function e(i,o){return IC(o)}const t=new Le("name");t.xform=e,n.push(t);function s(i,o){return o!==void 0?Number(o):o}const r=new Le("size");return r.xform=s,n.push(r),n.push(new Le("timeCreated")),n.push(new Le("updated")),n.push(new Le("md5Hash",null,!0)),n.push(new Le("cacheControl",null,!0)),n.push(new Le("contentDisposition",null,!0)),n.push(new Le("contentEncoding",null,!0)),n.push(new Le("contentLanguage",null,!0)),n.push(new Le("contentType",null,!0)),n.push(new Le("metadata","customMetadata",!0)),xr=n,xr}function bC(n,e){function t(){const s=n.bucket,r=n.fullPath,i=new $e(s,r);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function SC(n,e,t){const s={};s.type="file";const r=t.length;for(let i=0;i<r;i++){const o=t[i];s[o.local]=o.xform(s,e[o.server])}return bC(s,n),s}function am(n,e,t){const s=rm(e);return s===null?null:SC(n,s,t)}function RC(n,e,t,s){const r=rm(e);if(r===null||!Ui(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=n.bucket,h=n.fullPath,m="/b/"+o(d)+"/o/"+o(h),g=is(m,t,s),_=Zf({alt:"media",token:u});return g+_})[0]}function lm(n,e){const t={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class bn{constructor(e,t,s,r){this.url=e,this.method=t,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function mt(n){if(!n)throw al()}function cl(n,e){function t(s,r){const i=am(n,r,e);return mt(i!==null),i}return t}function PC(n,e){function t(s,r){const i=am(n,r,e);return mt(i!==null),RC(i,r,n.host,n._protocol)}return t}function cr(n){function e(t,s){let r;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?r=qT():r=WT():t.getStatus()===402?r=jT(n.bucket):t.getStatus()===403?r=zT(n.path):r=s,r.status=t.getStatus(),r.serverResponse=s.serverResponse,r}return e}function ul(n){const e=cr(n);function t(s,r){let i=e(s,r);return s.getStatus()===404&&(i=HT(n.path)),i.serverResponse=r.serverResponse,i}return t}function AC(n,e,t){const s=e.fullServerUrl(),r=is(s,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,l=new bn(r,i,cl(n,t),o);return l.errorHandler=ul(e),l}function DC(n,e,t){const s=e.fullServerUrl(),r=is(s,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,l=new bn(r,i,PC(n,t),o);return l.errorHandler=ul(e),l}function kC(n,e){const t=e.fullServerUrl(),s=is(t,n.host,n._protocol),r="DELETE",i=n.maxOperationRetryTime;function o(c,u){}const l=new bn(s,r,o,i);return l.successCodes=[200,204],l.errorHandler=ul(e),l}function NC(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function cm(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=NC(null,e)),s}function LC(n,e,t,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let V="";for(let F=0;F<2;F++)V=V+Math.random().toString().slice(2);return V}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=cm(e,s,r),d=lm(u,t),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+c+"--",g=Bt.getBlob(h,s,m);if(g===null)throw Jf();const _={name:u.fullPath},w=is(i,n.host,n._protocol),C="POST",k=n.maxUploadRetryTime,x=new bn(w,C,cl(n,t),k);return x.urlParams=_,x.headers=o,x.body=g.uploadData(),x.errorHandler=cr(e),x}class mi{constructor(e,t,s,r){this.current=e,this.total=t,this.finalized=!!s,this.metadata=r||null}}function dl(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{mt(!1)}return mt(!!t&&(e||["active"]).indexOf(t)!==-1),t}function xC(n,e,t,s,r){const i=e.bucketOnlyServerUrl(),o=cm(e,s,r),l={name:o.fullPath},c=is(i,n.host,n._protocol),u="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=lm(o,t),m=n.maxUploadRetryTime;function g(w){dl(w);let C;try{C=w.getResponseHeader("X-Goog-Upload-URL")}catch{mt(!1)}return mt(Ui(C)),C}const _=new bn(c,u,g,m);return _.urlParams=l,_.headers=d,_.body=h,_.errorHandler=cr(e),_}function OC(n,e,t,s){const r={"X-Goog-Upload-Command":"query"};function i(u){const d=dl(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{mt(!1)}h||mt(!1);const m=Number(h);return mt(!isNaN(m)),new mi(m,s.size(),d==="final")}const o="POST",l=n.maxUploadRetryTime,c=new bn(t,o,i,l);return c.headers=r,c.errorHandler=cr(e),c}const id=256*1024;function MC(n,e,t,s,r,i,o,l){const c=new mi(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw QT();const u=c.total-c.current;let d=u;r>0&&(d=Math.min(d,r));const h=c.current,m=h+d;let g="";d===0?g="finalize":u===d?g="upload, finalize":g="upload";const _={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${c.current}`},w=s.slice(h,m);if(w===null)throw Jf();function C(F,G){const ee=dl(F,["active","final"]),b=c.current+d,E=s.size();let T;return ee==="final"?T=cl(e,i)(F,G):T=null,new mi(b,E,ee==="final",T)}const k="POST",x=e.maxUploadRetryTime,V=new bn(t,k,C,x);return V.headers=_,V.body=w.uploadData(),V.progressCallback=l||null,V.errorHandler=cr(n),V}const Me={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Mo(n){switch(n){case"running":case"pausing":case"canceling":return Me.RUNNING;case"paused":return Me.PAUSED;case"success":return Me.SUCCESS;case"canceled":return Me.CANCELED;case"error":return Me.ERROR;default:return Me.ERROR}}/**
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
 */class VC{constructor(e,t,s){if(rC(e)||t!=null||s!=null)this.next=e,this.error=t??void 0,this.complete=s??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function kn(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class BC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=fn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=fn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=fn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,r,i){if(this.sent_)throw Is("cannot .send() more than once");if(Yt(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Is("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Is("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Is("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Is("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class FC extends BC{initXhr(){this.xhr_.responseType="text"}}function cn(){return new FC}/**
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
 */class UC{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=s,this._mappings=om(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(ie.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(em(r.status,[]))if(i)r=Xf();else{this.sleepTime=Math.max(this.sleepTime*2,$T),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(ie.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,s])=>{switch(this._state){case"running":e(t,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const s=xC(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,cn,e,t);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,s)=>{const r=OC(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,cn,t,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=id*this._chunkMultiplier,t=new mi(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=MC(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const l=this._ref.storage._makeRequest(o,cn,r,i,!1);this._request=l,l.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){id*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const s=AC(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,cn,e,t);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const s=LC(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,cn,e,t);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Qf(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Mo(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,s,r){const i=new VC(t||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Mo(this._state)){case Me.SUCCESS:kn(this._resolve.bind(null,this.snapshot))();break;case Me.CANCELED:case Me.ERROR:const t=this._reject;kn(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Mo(this._state)){case Me.RUNNING:case Me.PAUSED:e.next&&kn(e.next.bind(e,this.snapshot))();break;case Me.SUCCESS:e.complete&&kn(e.complete.bind(e))();break;case Me.CANCELED:case Me.ERROR:e.error&&kn(e.error.bind(e,this._error))();break;default:e.error&&kn(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class En{constructor(e,t){this._service=e,t instanceof $e?this._location=t:this._location=$e.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new En(e,t)}get root(){const e=new $e(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return im(this._location.path)}get storage(){return this._service}get parent(){const e=vC(this._location.path);if(e===null)return null;const t=new $e(this._location.bucket,e);return new En(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw ZT(e)}}function $C(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new UC(n,new Bt(e),t)}function HC(n){n._throwIfRoot("getDownloadURL");const e=DC(n.storage,n._location,om());return n.storage.makeRequestWithTokens(e,cn).then(t=>{if(t===null)throw JT();return t})}function jC(n){n._throwIfRoot("deleteObject");const e=kC(n.storage,n._location);return n.storage.makeRequestWithTokens(e,cn)}function WC(n,e){const t=TC(n._location.path,e),s=new $e(n._location.bucket,t);return new En(n.storage,s)}/**
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
 */function qC(n){return/^[A-Za-z]+:\/\//.test(n)}function zC(n,e){return new En(n,e)}function um(n,e){if(n instanceof hl){const t=n;if(t._bucket==null)throw XT();const s=new En(t,t._bucket);return e!=null?um(s,e):s}else return e!==void 0?WC(n,e):n}function GC(n,e){if(e&&qC(e)){if(n instanceof hl)return zC(n,e);throw ua("To use ref(service, url), the first argument must be a Storage instance.")}else return um(n,e)}function od(n,e){const t=e==null?void 0:e[Kf];return t==null?null:$e.makeFromBucketSpec(t,n)}function KC(n,e,t,s={}){n.host=`${e}:${t}`;const r=Yt(e);r&&(pa(`https://${n.host}/b`),ga("Storage",!0)),n._isUsingEmulator=!0,n._protocol=r?"https":"http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:Rd(i,n.app.options.projectId))}class hl{constructor(e,t,s,r,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Gf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=FT,this._maxUploadRetryTime=UT,this._requests=new Set,r!=null?this._bucket=$e.makeFromBucketSpec(r,this._host):this._bucket=od(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$e.makeFromBucketSpec(this._url,e):this._bucket=od(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new En(this,e)}_makeRequest(e,t,s,r,i=!0){if(this._deleted)return new eC(Yf());{const o=dC(e,this._appId,s,r,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,r).getPromise()}}const ad="@firebase/storage",ld="0.14.0";/**
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
 */const dm="storage";function XC(n,e,t){return n=ae(n),$C(n,e,t)}function QC(n){return n=ae(n),HC(n)}function JC(n){return n=ae(n),jC(n)}function hm(n,e){return n=ae(n),GC(n,e)}function YC(n=wa(),e){n=ae(n);const s=wi(n,dm).getImmediate({identifier:e}),r=Id("storage");return r&&ZC(s,...r),s}function ZC(n,e,t,s={}){KC(n,e,t,s)}function eI(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new hl(t,s,r,e,Tn)}function tI(){gn(new qt(dm,eI,"PUBLIC").setMultipleInstances(!0)),nt(ad,ld,""),nt(ad,ld,"esm2020")}tI();const nI={apiKey:"AIzaSyDVTkhWjMht3WxUzkve7HzztbAEEderAhw",authDomain:"zarvona-energy-a85ce.firebaseapp.com",projectId:"zarvona-energy-a85ce",storageBucket:"zarvona-energy-a85ce.firebasestorage.app",messagingSenderId:"171021980471",appId:"1:171021980471:web:375df2a6e359b5e93500b2",measurementId:"G-HZXCF84BT5"},fl=Dd(nI),Sn=VT(fl),U=sE(fl),fm=YC(fl);async function sI(n,e,t,s,r=null){try{const i=s.name.split(".").pop(),o=`failures/${n}/${e}/${t}.${i}`,l=hm(fm,o),c=XC(l,s);return new Promise((u,d)=>{c.on("state_changed",h=>{const m=h.bytesTransferred/h.totalBytes*100;r&&r(m),console.log(`Upload is ${m.toFixed(0)}% done`)},h=>{console.error("Upload error:",h),d(h)},async()=>{try{const h=await QC(c.snapshot.ref);u({fileUrl:h,filePath:o,fileName:s.name,fileSize:s.size})}catch(h){console.error("Error getting download URL:",h),d(h)}})})}catch(i){throw console.error("Error uploading file:",i),i}}async function rI(n){try{if(!n)return console.warn("No file path provided for deletion"),!1;const e=hm(fm,n);return await JC(e),console.log(`Successfully deleted file: ${n}`),!0}catch(e){if(e.code==="storage/object-not-found")return console.warn("File not found, already deleted:",n),!0;throw console.error("Error deleting file:",e),e}}function mm(n){const t=[".xlsx",".xls"],s=["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel","application/octet-stream"];if(!n)return{valid:!1,error:"No file selected"};if(n.size>10485760)return{valid:!1,error:`File size exceeds 10MB limit (${(n.size/1024/1024).toFixed(2)}MB)`};const r=n.name.toLowerCase();return t.some(o=>r.endsWith(o))?(n.type&&!s.includes(n.type)&&console.warn(`Unexpected MIME type: ${n.type}, but extension is valid`),{valid:!0,error:null}):{valid:!1,error:"Only Excel files (.xlsx, .xls) are allowed"}}async function ml(n,e,t=!1,s=null){try{const r=(l,c)=>{console.log(l),s&&s(l,c)};r(`Saving sheet ${n} to Firestore with optimized structure...`,0);const i=(e.wells||[]).map(l=>({id:l.id,name:l.name,status:l.status||"active"})).filter(l=>l.status!=="inactive");r("Saving gauge sheet metadata...",5);const o=oe(U,"gaugeSheets",n);if(await Et(o,{id:e.id,name:e.name,lastUpdated:z.fromDate(new Date(e.lastUpdated)),rawRowCount:e.rawRowCount||0,wellList:i,wellCount:i.length},{merge:!0}),e.wells&&e.wells.length>0){const l=e.wells.length;for(let c=0;c<l;c++){const u=e.wells[c],d=10+Math.floor(c/l*60);r(`Saving well ${c+1}/${l}: ${u.name}`,d),await iI(n,u,t)}}return r("Saving battery production data...",70),e.batteryProduction&&e.batteryProduction.length>0&&await lI(n,e.batteryProduction,t),r("Saving run tickets...",80),e.runTickets&&e.runTickets.length>0&&await cI(n,e.runTickets,t),r(`Sheet ${n} saved successfully`,90),!0}catch(r){return console.error(`Error saving sheet ${n}:`,r),!1}}async function iI(n,e,t=!1){try{const s=oe(U,`gaugeSheets/${n}/wells`,e.id);let r=null;if(e.production&&e.production.length>0){const u=[...e.production].sort((d,h)=>new Date(h.date)-new Date(d.date))[0];r={date:z.fromDate(new Date(u.date)),oil:u.oil||0,water:u.water||0,gas:u.gas||0}}let i=null;if(e.wellTests&&e.wellTests.length>0){const u=[...e.wellTests].sort((d,h)=>new Date(h.date)-new Date(d.date))[0];i={date:z.fromDate(new Date(u.date)),oil:u.oil||0,water:u.water||0,gas:u.gas||0}}let o=null;if(e.production&&e.production.length>0){const c=new Date;c.setDate(c.getDate()-30);const u=e.production.filter(d=>new Date(d.date)>=c);if(u.length>0){const d=u.reduce((_,w)=>_+(w.oil||0),0),h=u.reduce((_,w)=>_+(w.water||0),0),m=u.reduce((_,w)=>_+(w.gas||0),0),g=u.length;o={avgOil:Math.round(d/g*100)/100,avgWater:Math.round(h/g*100)/100,avgGas:Math.round(m/g*100)/100,days:g}}}const l=e.actionItems&&e.actionItems.length>0;return await Et(s,{id:e.id,name:e.name,sheetId:n,status:e.status||"active",latestProduction:r,latestTest:i,dailyStats:o,hasActionItems:l,pressureReadings:e.pressureReadings||[],chemicalProgram:e.chemicalProgram||{},failureHistory:e.failureHistory||[],actionItems:e.actionItems||[]},{merge:!0}),e.production&&e.production.length>0&&await oI(n,e.id,e.production,t),e.wellTests&&e.wellTests.length>0&&await aI(n,e.id,e.wellTests,t),!0}catch(s){return console.error(`Error saving well ${e.id}:`,s),!1}}async function oI(n,e,t,s){try{if(s){const r=Je(U);t.slice(-500).forEach(o=>{const l=new Date(o.date).toISOString().split("T")[0],c=oe(U,`gaugeSheets/${n}/wells/${e}/production`,l);r.set(c,{date:z.fromDate(new Date(o.date)),oil:o.oil||0,water:o.water||0,gas:o.gas||0})}),await r.commit()}else{const r=new Date;r.setDate(r.getDate()-30);const i=t.filter(o=>new Date(o.date)>=r);if(i.length>0){const o=Je(U);let l=0;for(const c of i){const u=new Date(c.date).toISOString().split("T")[0],d=oe(U,`gaugeSheets/${n}/wells/${e}/production`,u);o.set(d,{date:z.fromDate(new Date(c.date)),oil:c.oil||0,water:c.water||0,gas:c.gas||0},{merge:!0}),l++,l>=500&&(await o.commit(),l=0)}l>0&&await o.commit()}}return!0}catch(r){return console.error("Error saving production data:",r),!1}}async function aI(n,e,t,s){try{const r=s?t:t.slice(-50);if(r.length>0){const i=Je(U);r.forEach(o=>{const l=new Date(o.date).toISOString().split("T")[0],c=oe(U,`gaugeSheets/${n}/wells/${e}/wellTests`,l);i.set(c,{date:z.fromDate(new Date(o.date)),oil:o.oil||0,water:o.water||0,gas:o.gas||0},{merge:!0})}),await i.commit()}return!0}catch(r){return console.error("Error saving well tests:",r),!1}}async function lI(n,e,t=!1){try{let s;if(t)s=e.slice(-500);else{const r=new Date;r.setDate(r.getDate()-30),s=e.filter(i=>new Date(i.date)>=r)}if(s.length>0){const r=Je(U);s.forEach(i=>{const o=new Date(i.date).toISOString().split("T")[0],l=oe(U,`gaugeSheets/${n}/batteryProduction`,o);r.set(l,{date:z.fromDate(new Date(i.date)),oil:i.oil||0,water:i.water||0,gas:i.gas||0},{merge:!0})}),await r.commit()}return!0}catch(s){return console.error("Error saving battery production:",s),!1}}async function cI(n,e,t=!1){try{let s;if(t)s=e;else{const r=new Date;r.setDate(r.getDate()-30),s=e.filter(i=>{if(!i.date)return!1;const o=new Date(i.date);return!isNaN(o.getTime())&&o>=r})}if(s.length>0){const r=Je(U);s.forEach((i,o)=>{const l=i.date?new Date(i.date).toISOString().split("T")[0]:"unknown",c=oe(U,`gaugeSheets/${n}/runTickets`,`${l}_${o}`);let u=null;if(i.date){const d=new Date(i.date);isNaN(d.getTime())||(u=z.fromDate(d))}r.set(c,{...i,date:u},{merge:!0})}),await r.commit()}return!0}catch(s){return console.error("Error saving run tickets:",s),!1}}async function $i(n=null){var e,t;try{const s=h=>{console.log(h),n&&n(h)};s("Loading all data...");const r=performance.now();s("Fetching gauge sheets...");const i=Ae(U,"gaugeSheets"),o=await De(i),l={};let c=0;const u=o.docs.length;for(let h=0;h<u;h++){const m=o.docs[h],g=m.data(),_=m.id;s(`Loading battery ${h+1}/${u}: ${g.name}...`),l[_]={id:g.id,name:g.name,lastUpdated:((t=(e=g.lastUpdated)==null?void 0:e.toDate)==null?void 0:t.call(e))||g.lastUpdated,rawRowCount:g.rawRowCount||0,wellList:g.wellList||[],wellCount:g.wellCount||0,wells:[],batteryProduction:[],runTickets:[],_metadataLoaded:!0,_wellsLoaded:!0};const w=Ae(U,`gaugeSheets/${_}/wells`);(await De(w)).docs.forEach(k=>{const x=k.data();l[_].wells.push({id:x.id,name:x.name,sheetId:x.sheetId,status:x.status||"active",latestProduction:x.latestProduction,latestTest:x.latestTest,dailyStats:x.dailyStats,hasActionItems:x.hasActionItems||!1,pressureReadings:x.pressureReadings||[],chemicalProgram:x.chemicalProgram||{},failureHistory:x.failureHistory||[],actionItems:x.actionItems||[],production:[],wellTests:[],_detailsLoaded:!1}),c++})}s("Updating app state..."),S.appData=l,S.loadedSheets=Object.keys(l);for(const h in l)S.metadataCache.wellCounts[h]=l[h].wells.length,S.metadataCache.wellNames[h]=l[h].wells.map(m=>({id:m.id,name:m.name}));const d=performance.now();return s(`✓ Loaded ${Object.keys(l).length} batteries, ${c} wells in ${Math.round(d-r)}ms`),!0}catch(s){return console.error("Error loading data:",s),S.appData={},!1}}async function ur(n=null){try{const e=o=>{console.log(o),n&&n(o)};e("Preparing dashboard data from loaded wells...");const t=[];Object.keys(S.appData).forEach(o=>{const l=S.appData[o];l&&l.wells&&t.push(...l.wells.map(c=>({...c,sheetId:o})))}),e("Calculating top producers...");const s=t.filter(o=>o.status!=="inactive"&&o.latestProduction).sort((o,l)=>{var c,u;return(((c=l.latestProduction)==null?void 0:c.oil)||0)-(((u=o.latestProduction)==null?void 0:u.oil)||0)}).slice(0,10);e("Finding recent tests...");const r=t.filter(o=>o.status!=="inactive"&&o.latestTest).sort((o,l)=>{var d,h,m,g,_,w,C,k;const c=((m=(h=(d=o.latestTest)==null?void 0:d.date)==null?void 0:h.toDate)==null?void 0:m.call(h))||((g=o.latestTest)==null?void 0:g.date)||0;return(((C=(w=(_=l.latestTest)==null?void 0:_.date)==null?void 0:w.toDate)==null?void 0:C.call(w))||((k=l.latestTest)==null?void 0:k.date)||0)-c}).slice(0,10);e("Filtering action items...");const i=t.filter(o=>o.hasActionItems);return S.dashboardData={topProducers:s,recentTests:r,actionItems:i},e(`✓ Dashboard prepared: ${s.length} top producers, ${r.length} recent tests, ${i.length} action items`),!0}catch(e){return console.error("Error preparing dashboard data:",e),!1}}async function dr(n){const e=S.appData[n];return e?(console.log(`✓ Wells already loaded for ${n}: ${e.wells.length} wells`),!0):(console.error(`Sheet ${n} not found in appData`),!1)}async function pl(n,e){try{console.log(`Loading full details for well ${e} in sheet ${n}...`);const t=S.appData[n];if(!t)return console.error(`Sheet ${n} not found in appData`),!1;let s=t.wells.find(d=>d.id===e);if(!s){const d=oe(U,`gaugeSheets/${n}/wells`,e),h=await Qn(d);if(!h.exists())return console.error(`Well ${e} not found in sheet ${n}`),!1;const m=h.data();s={id:m.id,name:m.name,production:[],wellTests:[],pressureReadings:m.pressureReadings||[],chemicalProgram:m.chemicalProgram||{},failureHistory:m.failureHistory||[],actionItems:m.actionItems||[],_detailsLoaded:!1},t.wells.push(s)}if(s._detailsLoaded&&!s._summaryOnly)return console.log(`Well details already loaded for ${e}`),!0;const r=Ae(U,`gaugeSheets/${n}/wells/${e}/production`),i=await De(r);s.production=i.docs.map(d=>{var h,m;return{...d.data(),date:((m=(h=d.data().date)==null?void 0:h.toDate)==null?void 0:m.call(h))||new Date(d.data().date)}});const o=Ae(U,`gaugeSheets/${n}/wells/${e}/wellTests`),l=await De(o);s.wellTests=l.docs.map(d=>{var h,m;return{...d.data(),date:((m=(h=d.data().date)==null?void 0:h.toDate)==null?void 0:m.call(h))||new Date(d.data().date)}});const c=oe(U,`gaugeSheets/${n}/wells`,e),u=await Qn(c);if(u.exists()){const d=u.data();s.pressureReadings=d.pressureReadings||[],s.chemicalProgram=d.chemicalProgram||{},s.failureHistory=d.failureHistory||[],s.actionItems=d.actionItems||[],s.status=d.status||"active"}return s._detailsLoaded=!0,s._summaryOnly=!1,console.log(`Loaded full details for well ${e}`),!0}catch(t){return console.error(`Error loading well details for ${e}:`,t),!1}}async function gl(n){try{console.log(`Loading aggregate data for ${n}...`);const e=S.appData[n];if(!e)return console.error(`Sheet ${n} not found in appData`),!1;const t=Ae(U,`gaugeSheets/${n}/batteryProduction`),s=await De(t);e.batteryProduction=s.docs.map(o=>{var l,c;return{...o.data(),date:((c=(l=o.data().date)==null?void 0:l.toDate)==null?void 0:c.call(l))||new Date(o.data().date)}});const r=Ae(U,`gaugeSheets/${n}/runTickets`),i=await De(r);return e.runTickets=i.docs.map(o=>o.data()),e._aggregateLoaded=!0,console.log(`Loaded aggregate data for ${n}`),!0}catch(e){return console.error(`Error loading aggregate data for ${n}:`,e),!1}}async function yl(n){var e,t;try{console.log(`Fetching existing data for ${n} from Firestore...`);const s=oe(U,"gaugeSheets",n),r=await Qn(s);if(!r.exists())return console.log(`No existing data found for ${n}`),null;const i=r.data(),o=Ae(U,`gaugeSheets/${n}/wells`),c=(await De(o)).docs.map(u=>{const d=u.data();return{id:d.id,name:d.name,status:d.status||"active",pressureReadings:d.pressureReadings||[],chemicalProgram:d.chemicalProgram||{},failureHistory:d.failureHistory||[],actionItems:d.actionItems||[],production:[],wellTests:[]}});return console.log(`✓ Fetched ${c.length} wells with manual edits from Firestore`),{id:i.id,name:i.name,lastUpdated:((t=(e=i.lastUpdated)==null?void 0:e.toDate)==null?void 0:t.call(e))||i.lastUpdated,rawRowCount:i.rawRowCount||0,wells:c,batteryProduction:[],runTickets:[]}}catch(s){return console.error(`Error fetching sheet ${n} from Firestore:`,s),null}}async function pm(n,e,t){var s;try{t.actionItems!==void 0&&(t.hasActionItems=t.actionItems&&t.actionItems.length>0);const r=oe(U,`gaugeSheets/${n}/wells`,e);await Et(r,t,{merge:!0});const i=(s=S.appData[n])==null?void 0:s.wells.find(o=>o.id===e);return i&&Object.assign(i,t),console.log(`✓ Manual edit saved for well ${e}`),!0}catch(r){return console.error("Error updating well:",r),!1}}async function gm(n,e,t,s){var r;try{console.log(`Updating well tests for well ${e}`);const i=Je(U);let o=0;const l=new Set(t.filter(m=>m.date).map(m=>new Date(m.date).toISOString().split("T")[0])),c=new Set(s.filter(m=>m.date).map(m=>new Date(m.date).toISOString().split("T")[0]));for(const m of t){if(!m.date)continue;const g=new Date(m.date).toISOString().split("T")[0],_=oe(U,`gaugeSheets/${n}/wells/${e}/wellTests`,g);i.set(_,{date:z.fromDate(new Date(m.date)),oil:m.oil!==null&&m.oil!==void 0?Number(m.oil):0,water:m.water!==null&&m.water!==void 0?Number(m.water):0,gas:m.gas!==null&&m.gas!==void 0?Number(m.gas):0},{merge:!0}),o++,o>=500&&(await i.commit(),o=0)}for(const m of c)if(!l.has(m)){const g=oe(U,`gaugeSheets/${n}/wells/${e}/wellTests`,m);i.delete(g),o++,o>=500&&(await i.commit(),o=0)}o>0&&await i.commit();let u=null;if(t.length>0){const m=t.filter(g=>g.date);if(m.length>0){const _=[...m].sort((w,C)=>new Date(C.date)-new Date(w.date))[0];u={date:z.fromDate(new Date(_.date)),oil:_.oil!==null&&_.oil!==void 0?Number(_.oil):0,water:_.water!==null&&_.water!==void 0?Number(_.water):0,gas:_.gas!==null&&_.gas!==void 0?Number(_.gas):0}}}const d=oe(U,`gaugeSheets/${n}/wells`,e);await Et(d,{latestTest:u},{merge:!0});const h=(r=S.appData[n])==null?void 0:r.wells.find(m=>m.id===e);return h&&(h.wellTests=t.map(m=>({...m,date:new Date(m.date)})),h.latestTest=u),console.log(`✓ Well tests updated successfully for well ${e}`),!0}catch(i){return console.error("Error updating well tests:",i),!1}}async function ym(n=null){try{const e=i=>{console.log(i),n&&n(i)};e("Starting to clear extracted data...");const t=Ae(U,"gaugeSheets"),s=await De(t),r=s.docs.length;e(`Found ${r} gauge sheets`);for(let i=0;i<r;i++){const o=s.docs[i],l=o.id,c=o.data();e(`Processing ${i+1}/${r}: ${c.name||l}`);try{const u=Ae(U,`gaugeSheets/${l}/wells`),d=await De(u),h=d.docs.length;e(`Clearing production data for ${h} wells...`);let m=0;for(const _ of d.docs){const w=_.id;m++,e(`Clearing well ${m}/${h}: ${w}`),await Ut(U,`gaugeSheets/${l}/wells/${w}/production`),await Ut(U,`gaugeSheets/${l}/wells/${w}/wellTests`);const C=oe(U,`gaugeSheets/${l}/wells`,w);await Et(C,{latestProduction:null,latestTest:null,dailyStats:null,hasActionItems:_.data().hasActionItems||!1},{merge:!0})}e("Clearing battery production and run tickets..."),await Ut(U,`gaugeSheets/${l}/batteryProduction`),await Ut(U,`gaugeSheets/${l}/runTickets`);const g=oe(U,"gaugeSheets",l);await Et(g,{lastUpdated:z.now(),rawRowCount:0,wellList:[],wellCount:0},{merge:!0}),e(`✓ Cleared extracted data for ${c.name||l}`)}catch(u){e(`⚠ Error clearing ${c.name||l}: ${u.message}`),console.error(`Error clearing sheet ${l}:`,u)}}return e("Clearing local state..."),S.appData={},S.dashboardData=null,e("Extracted data cleared successfully! Manual edits preserved."),!0}catch(e){return console.error("Error clearing extracted data:",e),n&&n(`Error: ${e.message}`),!1}}async function _m(n=null){try{const e=i=>{console.log(i),n&&n(i)};e("Starting to clear all data...");const t=Ae(U,"gaugeSheets"),s=await De(t),r=s.docs.length;e(`Found ${r} gauge sheets to delete`);for(let i=0;i<r;i++){const o=s.docs[i],l=o.data();e(`Deleting ${i+1}/${r}: ${l.name||o.id}`);try{await uI(o.id,e)}catch(c){e(`⚠ Error deleting ${l.name||o.id}: ${c.message}`),console.error(`Error deleting sheet ${o.id}:`,c)}}return e("Clearing local state..."),S.appData={},S.dashboardData=null,e("All data cleared successfully!"),!0}catch(e){return console.error("Error clearing Firestore data:",e),n&&n(`Error: ${e.message}`),!1}}async function uI(n,e=null){try{const t=c=>{e&&e(c)},s=Ae(U,`gaugeSheets/${n}/wells`),r=await De(s),i=r.docs.length;t(`Deleting ${i} wells and their data...`);let o=0;for(const c of r.docs)o++,t(`Deleting well ${o}/${i}: ${c.id}`),await Ut(U,`gaugeSheets/${n}/wells/${c.id}/production`),await Ut(U,`gaugeSheets/${n}/wells/${c.id}/wellTests`),await Vu(c.ref);t("Deleting battery production and run tickets..."),await Ut(U,`gaugeSheets/${n}/batteryProduction`),await Ut(U,`gaugeSheets/${n}/runTickets`);const l=oe(U,"gaugeSheets",n);return await Vu(l),t(`✓ Deleted sheet ${n}`),!0}catch(t){throw console.error(`Error deleting sheet ${n}:`,t),t}}async function Ut(n,e){const t=Ae(n,e),s=await De(t);if(s.empty)return;const r=500;let i=Je(n),o=0,l=0;for(const c of s.docs)i.delete(c.ref),o++,o>=r&&(await i.commit(),l++,console.log(`  Committed batch ${l} (${r} deletes)`),i=Je(n),o=0,await new Promise(u=>setTimeout(u,100)));o>0&&(await i.commit(),l++,console.log(`  Committed final batch (${o} deletes)`))}async function wm(n,e,t){var s;try{console.log(`Adding failure history entry for well ${e} in sheet ${n}`);const r=oe(U,`gaugeSheets/${n}/wells`,e),i=await Qn(r);if(!i.exists())return console.error(`Well ${e} not found in sheet ${n}`),!1;const l=i.data().failureHistory||[],c={id:t.id,failureDate:z.fromDate(new Date(t.failureDate)),notes:t.notes||"",fileName:t.fileName,fileUrl:t.fileUrl,filePath:t.filePath,fileSize:t.fileSize,uploadedAt:z.now()},u=[...l,c];u.sort((h,m)=>{var w,C,k,x;const g=((C=(w=h.failureDate)==null?void 0:w.toDate)==null?void 0:C.call(w))||new Date(h.failureDate);return(((x=(k=m.failureDate)==null?void 0:k.toDate)==null?void 0:x.call(k))||new Date(m.failureDate))-g}),await Et(r,{failureHistory:u},{merge:!0});const d=(s=S.appData[n])==null?void 0:s.wells.find(h=>h.id===e);return d&&(d.failureHistory=u),console.log("✓ Failure history entry added successfully"),!0}catch(r){return console.error("Error adding failure history entry:",r),!1}}async function dI(n,e,t){var s;try{console.log(`Deleting failure history entry ${t} for well ${e}`);const r=oe(U,`gaugeSheets/${n}/wells`,e),i=await Qn(r);if(!i.exists())return console.error(`Well ${e} not found in sheet ${n}`),!1;const l=i.data().failureHistory||[],c=l.find(h=>h.id===t);if(!c)return console.warn(`Failure entry ${t} not found`),!1;if(c.filePath)try{await rI(c.filePath),console.log(`✓ Deleted file from storage: ${c.filePath}`)}catch(h){console.error("Error deleting file from storage:",h)}const u=l.filter(h=>h.id!==t);await Et(r,{failureHistory:u},{merge:!0});const d=(s=S.appData[n])==null?void 0:s.wells.find(h=>h.id===e);return d&&(d.failureHistory=u),console.log("✓ Failure history entry deleted successfully"),!0}catch(r){return console.error("Error deleting failure history entry:",r),!1}}async function _l(n,e=null){try{const t=(o,l)=>{console.log(o),e&&e(o,l)};if(t("Organizing fluid level readings by well...",0),!n||n.length===0)return t("No fluid level readings to save",100),!0;const s={};for(const o of n){const l=o.wellName.toLowerCase().replace(/[^a-z0-9]/g,"");s[l]||(s[l]={wellName:o.wellName,readings:[]}),s[l].readings.push({date:z.fromDate(new Date(o.date)),strokeLength:o.strokeLength,spm:o.spm,runTime:o.runTime,gasLiquidLevel:o.gasLiquidLevel,gasFreeLevel:o.gasFreeLevel,pumpIntakePressure:o.pumpIntakePressure})}const r=Object.keys(s),i=r.length;t(`Saving fluid level data for ${i} wells...`,10);for(let o=0;o<i;o++){const l=r[o],c=s[l],u=10+Math.floor(o/i*80);t(`Saving readings for ${c.wellName}...`,u);const d=oe(U,"fluidLevels",l),h=await Qn(d);let m=[];h.exists()&&(m=h.data().readings||[]);const g=new Map;for(const w of m){const C=w.date.toDate().toISOString().split("T")[0];g.set(C,w)}for(const w of c.readings){const C=w.date.toDate().toISOString().split("T")[0];g.set(C,w)}const _=Array.from(g.values());_.sort((w,C)=>{const k=w.date.toDate();return C.date.toDate()-k}),await Et(d,{wellName:c.wellName,normalizedName:l,readings:_,lastUpdated:z.now()})}return t(`Saved fluid level data for ${i} wells successfully`,100),!0}catch(t){return console.error("Error saving fluid level data:",t),!1}}async function wl(n=null){try{const e=i=>{console.log(i),n&&n(i)};e("Loading fluid level data...");const t=Ae(U,"fluidLevels"),s=await De(t),r={};return s.docs.forEach(i=>{var l,c;const o=i.data();r[i.id]={wellName:o.wellName,normalizedName:o.normalizedName,readings:o.readings.map(u=>({date:u.date.toDate(),strokeLength:u.strokeLength,spm:u.spm,runTime:u.runTime,gasLiquidLevel:u.gasLiquidLevel,gasFreeLevel:u.gasFreeLevel,pumpIntakePressure:u.pumpIntakePressure})),lastUpdated:((c=(l=o.lastUpdated)==null?void 0:l.toDate)==null?void 0:c.call(l))||o.lastUpdated}}),e(`✓ Loaded fluid level data for ${Object.keys(r).length} wells`),S.fluidLevels=r,r}catch(e){return console.error("Error loading fluid level data:",e),S.fluidLevels={},{}}}async function El(n,e=null){try{const t=(o,l)=>{console.log(o),e&&e(o,l)};if(t("Saving chemical program data...",0),!n||n.length===0)return t("No chemical programs to save",100),!0;const s=Je(U),r=n.length;let i=0;for(const o of n){const l=o.wellName.toLowerCase().replace(/[^a-z0-9]/g,""),c=oe(U,"chemicalPrograms",l);s.set(c,{wellName:o.wellName,batteryName:o.batteryName,testData:o.testData||{},truckTreating:o.truckTreating||{},continuous:o.continuous||{},lastUpdated:z.now()}),i++;const u=Math.floor(i/r*90);i%500===0&&(t(`Saving chemical programs ${i}/${r}...`,u),await s.commit())}return i%500!==0&&await s.commit(),t(`Saved ${r} chemical programs successfully`,100),!0}catch(t){return console.error("Error saving chemical program data:",t),!1}}async function os(n=null){try{const e=i=>{console.log(i),n&&n(i)};e("Loading chemical program data...");const t=Ae(U,"chemicalPrograms"),s=await De(t),r={};return s.docs.forEach(i=>{var l,c;const o=i.data();r[i.id]={wellName:o.wellName,batteryName:o.batteryName,testData:o.testData||{},truckTreating:o.truckTreating||{},continuous:o.continuous||{},lastUpdated:((c=(l=o.lastUpdated)==null?void 0:l.toDate)==null?void 0:c.call(l))||o.lastUpdated}}),e(`✓ Loaded ${Object.keys(r).length} chemical programs`),S.chemicalPrograms=r,r}catch(e){return console.error("Error loading chemical program data:",e),S.chemicalPrograms={},{}}}async function Em(){try{await os(),console.log(`Loaded ${Object.keys(S.chemicalPrograms).length} chemical programs`)}catch(n){throw console.error("Error loading Master Chemical data:",n),n}}async function vm(n){try{if(!n||Object.keys(n).length===0)return console.log("No changes to save"),!0;const e=Je(U);let t=0;for(const[s,r]of Object.entries(n)){const i=oe(U,"chemicalPrograms",s),o={};for(const[l,c]of Object.entries(r))for(const[u,d]of Object.entries(c))d===null?o[`${u}.${l}`]=hE():o[`${u}.${l}`]=Number(d),t++;o.lastUpdated=z.now(),e.update(i,o)}await e.commit(),console.log(`Successfully updated ${t} chemical values across ${Object.keys(n).length} wells`);for(const[s,r]of Object.entries(n))if(S.chemicalPrograms[s]){for(const[i,o]of Object.entries(r))for(const[l,c]of Object.entries(o))S.chemicalPrograms[s][l]||(S.chemicalPrograms[s][l]={}),c===null?delete S.chemicalPrograms[s][l][i]:S.chemicalPrograms[s][l][i]=Number(c);S.chemicalPrograms[s].lastUpdated=new Date}return!0}catch(e){throw console.error("Error updating chemical program values:",e),console.error("Error details:",{code:e.code,message:e.message,name:e.name}),e}}async function vl(n=null){try{const e=(d,h)=>{console.log(d),n&&n(d,h)};if(e("Loading chemical programs...",0),await os(),Object.keys(S.chemicalPrograms).length===0)return e("No chemical programs to match",100),{matched:0,total:0,updated:0};e("Loading all gauge sheets...",5);const{findChemicalProgramMatch:t}=await jn(async()=>{const{findChemicalProgramMatch:d}=await Promise.resolve().then(()=>gI);return{findChemicalProgramMatch:d}},void 0),s=Ae(U,"gaugeSheets"),r=await De(s);let i=0,o=0,l=0;const c=r.docs,u=c.length;e(`Found ${u} gauge sheets to process`,10);for(let d=0;d<u;d++){const m=c[d].id,g=10+Math.floor(d/u*80);e(`Processing sheet ${d+1}/${u}: ${m}`,g);const _=Ae(U,"gaugeSheets",m,"wells"),w=await De(_),C=Je(U);let k=0;for(const x of w.docs){const V=x.data();i++;const F=t(V.name,S.chemicalPrograms);if(F){o++;const G=V.chemicalProgram||{};if(JSON.stringify(G.truckTreating)!==JSON.stringify(F.truckTreating)||JSON.stringify(G.continuous)!==JSON.stringify(F.continuous)||JSON.stringify(G.testData)!==JSON.stringify(F.testData)){const b=oe(U,"gaugeSheets",m,"wells",x.id);C.update(b,{chemicalProgram:{truckTreating:F.truckTreating||{},continuous:F.continuous||{},testData:F.testData||{},matchedFrom:F.wellName,lastUpdated:z.now()}}),l++,k++,k>=500&&(await C.commit(),k=0)}}}k>0&&await C.commit()}return e(`Matching complete: ${o}/${i} wells matched, ${l} updated`,100),{total:i,matched:o,updated:l}}catch(e){throw console.error("Error matching chemical programs to wells:",e),e}}const da=Object.freeze(Object.defineProperty({__proto__:null,addFailureHistoryEntry:wm,clearExtractedDataOnly:ym,clearFirestoreData:_m,deleteFailureHistoryEntry:dI,fetchSheetFromFirestore:yl,loadChemicalProgramData:os,loadDashboardData:ur,loadFluidLevelData:wl,loadMasterChemicalData:Em,loadNavigationData:$i,loadSheetAggregateData:gl,loadWellDetails:pl,loadWellsList:dr,matchChemicalProgramsToExistingWells:vl,saveChemicalProgramData:El,saveFluidLevelData:_l,saveSheetToFirestore:ml,updateChemicalProgramValues:vm,updateWellInFirestore:pm,updateWellTests:gm},Symbol.toStringTag,{value:"Module"}));function Rn(n){if(!n)return"-";try{const e=new Date(n);return isNaN(e.getTime())?n:e.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"2-digit"})}catch{return n}}function pi(n){if(!n)return"";try{const e=new Date(n);return isNaN(e.getTime())?"":e.toISOString().split("T")[0]}catch{return""}}function Tm(n){if(!n)return"";const e=document.createElement("div");return e.textContent=n,e.innerHTML}const hI=function(n,e){return{x:e.x,y:e.y}};typeof Chart<"u"&&Chart.Tooltip&&(Chart.Tooltip.positioners.cursor=hI);function Tl(n,e=null,t=null){const s=document.getElementById("productionChartsWrapper");S.currentWellData=n,Object.values(S.wellProductionCharts).forEach(u=>{u&&u.destroy()}),S.wellProductionCharts={},s.innerHTML="";const r=n.production||[],i=n.wellTests||[],o=r.filter(u=>u.date).map(u=>new Date(u.date)).filter(u=>!isNaN(u.getTime()));o.length>0&&(S.productionDateRange.min=new Date(Math.min(...o)),S.productionDateRange.max=new Date(Math.max(...o)),fI(e,t));const c=[{key:"oil",label:"Oil (BBL)",unit:"BBL",color:"#78716c",dataKey:"oil",source:"production"},{key:"water",label:"Water (BBL)",unit:"BBL",color:"#3b82f6",dataKey:"water",source:"production"},{key:"gas",label:"Gas (MCF)",unit:"MCF",color:"#22c55e",dataKey:"gas",source:"production"}].filter(u=>(u.source==="production"?r:i).some(h=>h[u.dataKey]!==null&&h[u.dataKey]!==void 0&&!isNaN(h[u.dataKey])&&h[u.dataKey]!==0));if(c.length===0){s.innerHTML='<div class="chart-placeholder">No production data available</div>';return}c.forEach(u=>{const d=document.createElement("div");d.className="chart-section",d.innerHTML=`
            <div class="chart-label">${u.label}</div>
            <div class="canvas-wrapper">
                <canvas id="chart-${u.key}"></canvas>
            </div>
        `,s.appendChild(d);let m=(u.source==="production"?r:i).filter(_=>_.date&&_[u.dataKey]!==null&&_[u.dataKey]!==void 0).map(_=>({x:new Date(_.date),y:Number(_[u.dataKey])})).filter(_=>!isNaN(_.y)).sort((_,w)=>_.x-w.x);(e||t)&&(m=m.filter(_=>{const w=_.x.getTime();return!(e&&w<e.getTime()||t&&w>t.getTime())}));const g=document.getElementById(`chart-${u.key}`).getContext("2d");S.wellProductionCharts[u.key]=new Chart(g,{type:"scatter",data:{datasets:[{label:u.label,data:m,backgroundColor:u.color,borderColor:u.color,pointRadius:3,pointHoverRadius:5}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"nearest",axis:"x",intersect:!1},plugins:{legend:{display:!1},tooltip:{enabled:!0,position:"cursor",backgroundColor:"#282c33",titleColor:"#e8e9eb",bodyColor:"#e8e9eb",callbacks:{title:_=>new Date(_[0].parsed.x).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),label:_=>`${u.label}: ${_.parsed.y}`}}},scales:{x:{type:"time",time:{displayFormats:{day:"MMM-yy",week:"MMM-yy",month:"MMM-yy",quarter:"MMM-yy",year:"yyyy"}},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab",maxTicksLimit:8}},y:{beginAtZero:!0,title:{display:!0,text:u.unit,color:"#9ea3ab"},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab"}}}},plugins:[{id:"crosshair",afterDatasetsDraw:_=>{var w,C;if((C=(w=_.tooltip)==null?void 0:w._active)!=null&&C.length){const k=_.ctx,V=_.tooltip._active[0].element.x,F=_.scales.y.top,G=_.scales.y.bottom;k.save(),k.beginPath(),k.moveTo(V,F),k.lineTo(V,G),k.lineWidth=1,k.strokeStyle="#9ea3ab",k.setLineDash([5,5]),k.stroke(),k.restore()}}}]})})}function fI(n=null,e=null){const t=document.getElementById("productionStartDate"),s=document.getElementById("productionEndDate"),r=document.getElementById("btnResetDates");if(!t||!s||!S.productionDateRange.min||!S.productionDateRange.max)return;const i=h=>h?new Date(h).toISOString().split("T")[0]:"",o=i(S.productionDateRange.min),l=i(S.productionDateRange.max);t.min=o,t.max=l,s.min=o,s.max=l,t.value=n?i(n):o,s.value=e?i(e):l;const c=t.cloneNode(!0),u=s.cloneNode(!0),d=r.cloneNode(!0);t.parentNode.replaceChild(c,t),s.parentNode.replaceChild(u,s),r.parentNode.replaceChild(d,r),c.addEventListener("blur",cd),u.addEventListener("blur",cd),c.addEventListener("keydown",h=>{h.key==="Enter"&&h.target.blur()}),u.addEventListener("keydown",h=>{h.key==="Enter"&&h.target.blur()}),d.addEventListener("click",mI)}function cd(){if(!S.currentWellData)return;const n=document.getElementById("productionStartDate"),e=document.getElementById("productionEndDate"),t=n.value?new Date(n.value):null,s=e.value?new Date(e.value+"T23:59:59"):null;Tl(S.currentWellData,t,s)}function mI(){S.currentWellData&&Tl(S.currentWellData,null,null)}function gi(n){return n?n.toLowerCase().replace(/[^a-z0-9]/g,"").trim():""}function ud(n){if(!n)return{battery:"",numbers:""};const t=n.toLowerCase().trim().split(/[\s\-_]+/),s=[],r=[];for(const i of t)/\d/.test(i)?r.push(i.replace(/[^0-9]/g,"")):s.push(i);return{battery:s.join(""),numbers:r.join("")}}function pI(n,e){const t=gi(n),s=gi(e);if(t===s)return 1;const r=ud(n),i=ud(e);if(r.battery!==i.battery)return 0;if(r.numbers===i.numbers)return .95;if(r.numbers&&i.numbers){const o=r.numbers.length,l=i.numbers.length,c=Math.min(o,l);let u=0;for(let h=0;h<c;h++)r.numbers[h]===i.numbers[h]&&u++;return u/Math.max(o,l)*.8}return 0}function Cl(n,e,t=.8){if(!n||!e)return null;let s=null,r=0;const i=gi(n);if(e[i])return e[i];for(const[o,l]of Object.entries(e)){const c=pI(n,l.wellName);c>r&&c>=t&&(r=c,s=l)}return s}const gI=Object.freeze(Object.defineProperty({__proto__:null,findChemicalProgramMatch:Cl,normalizeWellName:gi},Symbol.toStringTag,{value:"Module"}));let ks=null;function yI(n){ks=n}function _I(){document.querySelectorAll(".btn-edit[data-edit]").forEach(i=>{const o=i.cloneNode(!0);i.parentNode.replaceChild(o,i),o.addEventListener("click",l=>{l.stopPropagation();const c=o.dataset.edit;wI(c)})});const e=document.getElementById("btnCloseModal"),t=document.getElementById("btnCancelEdit"),s=document.getElementById("editModalOverlay"),r=document.getElementById("btnSaveEdit");if(e){const i=e.cloneNode(!0);e.parentNode.replaceChild(i,e),i.addEventListener("click",Fs)}if(t){const i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),i.addEventListener("click",Fs)}if(s){const i=s.cloneNode(!0);s.parentNode.replaceChild(i,s),i.addEventListener("click",Fs)}if(r){const i=r.cloneNode(!0);r.parentNode.replaceChild(i,r),i.addEventListener("click",AI)}}function wI(n){if(!S.currentSheet||!S.currentWell)return;const e=S.appData[S.currentSheet];if(!e||!e.wells)return;const t=e.wells.find(l=>l.id===S.currentWell);if(!t)return;S.currentEditSection=n;const s=document.getElementById("editModal"),r=document.getElementById("editModalTitle"),i=document.getElementById("editModalBody"),o={chemicalProgram:"Edit Chemical Program",failureHistory:"Edit Failure History",actionItems:"Edit Action Items",pressureReadings:"Edit Pressure Readings",wellTests:"Edit Well Tests"};switch(r.textContent=o[n]||"Edit",n){case"chemicalProgram":i.innerHTML=EI(t.chemicalProgram||{});break;case"failureHistory":i.innerHTML=vI(t.failureHistory||[]),TI();break;case"actionItems":i.innerHTML=CI(t.actionItems||[]),II();break;case"pressureReadings":i.innerHTML=SI(t.pressureReadings||[]),PI();break;case"wellTests":i.innerHTML=bI(t.wellTests||[]),RI();break}s.classList.add("visible")}function Fs(){document.getElementById("editModal").classList.remove("visible"),S.currentEditSection=null}function EI(n){const e=S.appData[S.currentSheet],t=e==null?void 0:e.wells.find(c=>c.id===S.currentWell),s=t?Cl(t.name,S.chemicalPrograms):null;let r=null,i="none";if(s?(i="master",r=s):n&&(n.continuous||n.truckTreat)&&(i="manual",r={continuous:n.continuous||{},truckTreating:n.truckTreat||{}}),i==="master"){const c=new Set;Object.keys(r.truckTreating||{}).forEach(h=>c.add(h)),Object.keys(r.continuous||{}).forEach(h=>c.add(h));const u=Array.from(c).sort();r.lastUpdated&&new Date(r.lastUpdated).toLocaleDateString();let d="";return u.forEach(h=>{var _,w,C,k;const m=((_=r.continuous)==null?void 0:_[h])!==void 0&&((w=r.continuous)==null?void 0:w[h])!==null?r.continuous[h]:"",g=((C=r.truckTreating)==null?void 0:C[h])!==void 0&&((k=r.truckTreating)==null?void 0:k[h])!==null?r.truckTreating[h]:"";d+=`
                <div class="form-row-label">${h}</div>
                <input type="number" step="0.01" class="edit-form-input" 
                       data-chemical="${h}" 
                       data-category="continuous" 
                       value="${m}" 
                       placeholder="-">
                <input type="number" step="0.01" class="edit-form-input" 
                       data-chemical="${h}" 
                       data-category="truckTreating" 
                       value="${g}" 
                       placeholder="-">
            `}),`
            <div class="edit-mode-info-banner">
                <div class="info-content">
                    <p>
                        <strong>Note:</strong> This well has chemical program data from the Master Chemical Sheet. Manual edits here will be stored separately and will override the Master Chemical Sheet data when displayed.
                    </p>
                </div>
            </div>
            <div class="chemical-form-grid">
                <div class="form-column-header"></div>
                <div class="form-column-header">CONTINUOUS</div>
                <div class="form-column-header">TRUCK TREAT</div>
                ${d}
            </div>
            <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--text-secondary);">
                Leave fields blank to remove values. These values will be stored as manual overrides.
            </p>
        `}const o=(n==null?void 0:n.continuous)||{},l=(n==null?void 0:n.truckTreat)||{};return`
        <div class="chemical-form-grid">
            <div class="form-column-header"></div>
            <div class="form-column-header">Continuous</div>
            <div class="form-column-header">Truck Treat</div>

            <div class="form-row-label">Rate (gal/month)</div>
            <input type="text" class="edit-form-input" id="editChemContRate" value="${o.rate||""}" placeholder="-">
            <input type="text" class="edit-form-input" id="editChemTruckRate" value="${l.rate||""}" placeholder="-">

            <div class="form-row-label">Chems Used</div>
            <input type="text" class="edit-form-input" id="editChemContChems" value="${o.chems||""}" placeholder="-">
            <input type="text" class="edit-form-input" id="editChemTruckChems" value="${l.chems||""}" placeholder="-">

            <div class="form-row-label">PPM</div>
            <input type="text" class="edit-form-input" id="editChemContPPM" value="${o.ppm||""}" placeholder="-">
            <input type="text" class="edit-form-input" id="editChemTruckPPM" value="${l.ppm||""}" placeholder="-">
        </div>
        <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--text-secondary);">
            Leave fields blank to remove values. These values will be stored as manual overrides.
        </p>
    `}function vI(n){let e="";return n.length>0&&(e=n.map((t,s)=>`
            <tr data-row-index="${s}">
                <td><input type="date" class="edit-table-input" name="dateDown" value="${pi(t.dateDown)}"></td>
                <td><input type="date" class="edit-table-input" name="dateUp" value="${pi(t.dateUp)}"></td>
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
    `}function TI(){const n=document.getElementById("btnAddFailureRow"),e=document.getElementById("failureEditBody");n&&n.addEventListener("click",()=>{const t=document.createElement("tr");t.innerHTML=`
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
            `,e.appendChild(t),Jn(t.querySelector(".btn-delete-row"))}),e.querySelectorAll(".btn-delete-row").forEach(t=>{Jn(t)})}function CI(n){let e="";return n.length>0?e=n.map((t,s)=>`
            <div class="action-item-row" data-item-index="${s}">
                <input type="text" class="edit-form-input" name="actionItem" value="${Tm(t)}">
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
    `}function II(){const n=document.getElementById("btnAddActionItem"),e=document.getElementById("newActionItem"),t=document.getElementById("actionItemsEditor"),s=()=>{const r=e.value.trim();if(!r)return;const i=t.querySelector(".action-items-empty");i&&i.remove();const o=document.createElement("div");o.className="action-item-row",o.innerHTML=`
            <input type="text" class="edit-form-input" name="actionItem" value="${Tm(r)}">
            <button type="button" class="btn-delete-item" title="Delete item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        `,t.appendChild(o),dd(o.querySelector(".btn-delete-item")),e.value="",e.focus()};n&&n.addEventListener("click",s),e&&e.addEventListener("keypress",r=>{r.key==="Enter"&&(r.preventDefault(),s())}),t.querySelectorAll(".btn-delete-item").forEach(r=>{dd(r)})}function dd(n){n.addEventListener("click",()=>{n.closest(".action-item-row").remove();const t=document.getElementById("actionItemsEditor");t.querySelectorAll(".action-item-row").length===0&&(t.innerHTML='<div class="action-items-empty">No action items. Add one below.</div>')})}function bI(n){let e="";return n.length>0&&(e=n.map((t,s)=>`
            <tr data-row-index="${s}">
                <td><input type="date" class="edit-table-input" name="date" value="${pi(t.date)}"></td>
                <td><input type="number" step="0.01" class="edit-table-input" name="oil" value="${t.oil||""}" placeholder="-"></td>
                <td><input type="number" step="0.01" class="edit-table-input" name="water" value="${t.water||""}" placeholder="-"></td>
                <td><input type="number" step="0.01" class="edit-table-input" name="gas" value="${t.gas||""}" placeholder="-"></td>
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
            <table class="edit-table" id="wellTestEditTable">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Oil (bbl)</th>
                        <th>Water (bbl)</th>
                        <th>Gas (mcf)</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="wellTestEditBody">
                    ${e}
                </tbody>
            </table>
        </div>
        <button type="button" class="btn-add-row" id="btnAddWellTestRow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add Entry
        </button>
    `}function SI(n){let e="";return n.length>0&&(e=n.map((t,s)=>`
            <tr data-row-index="${s}">
                <td><input type="date" class="edit-table-input" name="date" value="${pi(t.date)}"></td>
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
    `}function RI(){const n=document.getElementById("btnAddWellTestRow"),e=document.getElementById("wellTestEditBody");n&&n.addEventListener("click",()=>{const t=document.createElement("tr");t.innerHTML=`
                <td><input type="date" class="edit-table-input" name="date"></td>
                <td><input type="number" step="0.01" class="edit-table-input" name="oil" placeholder="-"></td>
                <td><input type="number" step="0.01" class="edit-table-input" name="water" placeholder="-"></td>
                <td><input type="number" step="0.01" class="edit-table-input" name="gas" placeholder="-"></td>
                <td>
                    <button type="button" class="btn-delete-row" title="Delete row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </td>
            `,e.appendChild(t),Jn(t.querySelector(".btn-delete-row"))}),e.querySelectorAll(".btn-delete-row").forEach(t=>{Jn(t)})}function PI(){const n=document.getElementById("btnAddPressureRow"),e=document.getElementById("pressureEditBody");n&&n.addEventListener("click",()=>{const t=document.createElement("tr");t.innerHTML=`
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
            `,e.appendChild(t),Jn(t.querySelector(".btn-delete-row"))}),e.querySelectorAll(".btn-delete-row").forEach(t=>{Jn(t)})}function Jn(n){n.addEventListener("click",()=>{n.closest("tr").remove()})}async function AI(){if(!S.currentSheet||!S.currentWell||!S.currentEditSection)return;const n=S.appData[S.currentSheet];if(!n||!n.wells)return;const e=n.wells.findIndex(r=>r.id===S.currentWell);if(e===-1)return;const t=n.wells[e],s={};switch(S.currentEditSection){case"chemicalProgram":t.chemicalProgram=DI(),s.chemicalProgram=t.chemicalProgram;break;case"failureHistory":t.failureHistory=kI(),s.failureHistory=t.failureHistory;break;case"actionItems":t.actionItems=NI(),s.actionItems=t.actionItems;break;case"pressureReadings":t.pressureReadings=xI(),s.pressureReadings=t.pressureReadings;break;case"wellTests":const r=LI(),i=t.wellTests||[];await gm(S.currentSheet,S.currentWell,r,i),Fs(),ks&&ks(S.currentSheet,S.currentWell);return}await pm(S.currentSheet,S.currentWell,s),Fs(),ks&&ks(S.currentSheet,S.currentWell)}function DI(){var e,t,s,r,i,o;const n=document.querySelectorAll(".edit-form-input[data-chemical]");if(n.length>0){const l={},c={};return n.forEach(u=>{const d=u.dataset.chemical,h=u.dataset.category,m=u.value.trim();if(m!==""){const g=parseFloat(m);isNaN(g)||(h==="continuous"?l[d]=g:h==="truckTreating"&&(c[d]=g))}}),{continuous:l,truckTreat:c}}return{continuous:{rate:((e=document.getElementById("editChemContRate"))==null?void 0:e.value)||"",chems:((t=document.getElementById("editChemContChems"))==null?void 0:t.value)||"",ppm:((s=document.getElementById("editChemContPPM"))==null?void 0:s.value)||""},truckTreat:{rate:((r=document.getElementById("editChemTruckRate"))==null?void 0:r.value)||"",chems:((i=document.getElementById("editChemTruckChems"))==null?void 0:i.value)||"",ppm:((o=document.getElementById("editChemTruckPPM"))==null?void 0:o.value)||""}}}function kI(){const e=document.getElementById("failureEditBody").querySelectorAll("tr"),t=[];return e.forEach(s=>{var d,h,m,g,_,w;const r=(d=s.querySelector('input[name="dateDown"]'))==null?void 0:d.value,i=(h=s.querySelector('input[name="dateUp"]'))==null?void 0:h.value,o=(m=s.querySelector('input[name="downtime"]'))==null?void 0:m.value,l=(g=s.querySelector('input[name="oil"]'))==null?void 0:g.value,c=(_=s.querySelector('input[name="reason"]'))==null?void 0:_.value,u=(w=s.querySelector('input[name="comments"]'))==null?void 0:w.value;(r||i||o||l||c||u)&&t.push({dateDown:r||null,dateUp:i||null,downtime:o?Number(o):null,oil:l?Number(l):null,reason:c||"",comments:u||""})}),t}function NI(){const e=document.getElementById("actionItemsEditor").querySelectorAll('input[name="actionItem"]'),t=[];return e.forEach(s=>{const r=s.value.trim();r&&t.push(r)}),t}function LI(){const e=document.getElementById("wellTestEditBody").querySelectorAll("tr"),t=[];return e.forEach(s=>{var c,u,d,h;const r=(c=s.querySelector('input[name="date"]'))==null?void 0:c.value,i=(u=s.querySelector('input[name="oil"]'))==null?void 0:u.value,o=(d=s.querySelector('input[name="water"]'))==null?void 0:d.value,l=(h=s.querySelector('input[name="gas"]'))==null?void 0:h.value;(r||i||o||l)&&t.push({date:r||null,oil:i?Number(i):null,water:o?Number(o):null,gas:l?Number(l):null})}),t}function xI(){const e=document.getElementById("pressureEditBody").querySelectorAll("tr"),t=[];return e.forEach(s=>{var u,d,h,m,g;const r=(u=s.querySelector('input[name="date"]'))==null?void 0:u.value,i=(d=s.querySelector('input[name="casingPsi"]'))==null?void 0:d.value,o=(h=s.querySelector('input[name="tubingPsi"]'))==null?void 0:h.value,l=(m=s.querySelector('input[name="flowlinePsi"]'))==null?void 0:m.value,c=(g=s.querySelector('input[name="injVol"]'))==null?void 0:g.value;(r||i||o||l||c)&&t.push({date:r||null,casingPsi:i?Number(i):null,tubingPsi:o?Number(o):null,flowlinePsi:l?Number(l):null,injVol:c?Number(c):null})}),t}const OI={water:1e4,gas:1e4};function je(n){return n!=null&&!isNaN(n)}function MI(n,e){if(!je(e))return null;const t=Number(e);if(n==="gas"&&t<0)return 0;const s=OI[n];return s&&t>s?null:t}function pe(n){return Math.round(n*100)/100}function Hi(){const n=new Date;return n.setHours(23,59,59,999),n}function VI(n,e){const t=new Date(n);if(e==="week"){const s=t.getUTCDay(),r=s===0?-6:1-s;t.setUTCDate(t.getUTCDate()+r)}else e==="month"&&t.setUTCDate(1);return t.setUTCHours(0,0,0,0),t}function BI(n,e,t){const s=n.getTime();return!(e&&s<e.getTime()||t&&s>t.getTime())}function FI(){var r;let n=0,e=0,t=0;if((r=S.dashboardData)!=null&&r.topProducers&&(Object.values(S.appData).forEach(i=>{i!=null&&i.wells&&i.wells.forEach(o=>{o.status==="inactive"||!o.latestProduction||(n+=Number(o.latestProduction.oil)||0,e+=Number(o.latestProduction.water)||0,t+=Math.max(0,Number(o.latestProduction.gas)||0))})}),n>0||e>0||t>0))return{totalOil:pe(n),totalWater:pe(e),totalGas:pe(t)};const s=Hi();return Object.values(S.appData).forEach(i=>{var o,l;if(i)if(((o=i.batteryProduction)==null?void 0:o.length)>0){const c=i.batteryProduction.filter(u=>new Date(u.date)<=s).sort((u,d)=>new Date(d.date)-new Date(u.date));if(c.length>0){const u=c[0];je(u.oil)&&(n+=Number(u.oil)),je(u.water)&&(e+=Number(u.water)),je(u.gas)&&(t+=Math.max(0,Number(u.gas)))}}else((l=i.wells)==null?void 0:l.length)>0&&i.wells.forEach(c=>{var h;if(c.status==="inactive"||!((h=c.wellTests)!=null&&h.length))return;const u=c.wellTests.filter(m=>new Date(m.date)<=s);if(u.length===0)return;const d=u[0];je(d.oil)&&(n+=Number(d.oil)),je(d.water)&&(e+=Number(d.water)),je(d.gas)&&(t+=Math.max(0,Number(d.gas)))})}),{totalOil:pe(n),totalWater:pe(e),totalGas:pe(t)}}function UI(n="oil",e=null,t=null,s="month",r=null){const i=new Map;let o=null,l=null;const c=Hi();Object.entries(S.appData).forEach(([d,h])=>{if(!h||r!==null&&(r.size===0||!r.has(d)))return;(h.batteryProduction||[]).forEach(g=>{const _=new Date(g.date);if(!g.date||isNaN(_.getTime())||_>c)return;const w=MI(n,g[n]);if(w===null)return;const C=VI(_,s),k=C.toISOString().split("T")[0];(!o||C<o)&&(o=C),(!l||C>l)&&(l=C),i.set(k,(i.get(k)||0)+w)})});let u=Array.from(i.entries()).map(([d,h])=>({x:new Date(d),y:h})).sort((d,h)=>d.x-h.x);return(e||t)&&(u=u.filter(d=>BI(d.x,e,t))),{data:u,dateRange:{min:o,max:l}}}function $I(n=10){var s;if((s=S.dashboardData)!=null&&s.topProducers)return S.dashboardData.topProducers.slice(0,n).map(r=>{const i=qe.find(o=>o.id===r.sheetId);return{wellId:r.id,wellName:r.name,sheetId:r.sheetId,batteryName:(i==null?void 0:i.name)||"Unknown",oil:r.latestProduction?pe(r.latestProduction.oil):0,water:r.latestProduction?pe(r.latestProduction.water):0}});const e=[],t=Hi();return Object.entries(S.appData).forEach(([r,i])=>{const o=qe.find(l=>l.id===r);!(i!=null&&i.wells)||!o||i.wells.forEach(l=>{var d;if(l.status==="inactive")return;let c=0,u=0;if(((d=l.wellTests)==null?void 0:d.length)>0){const h=l.wellTests.filter(m=>new Date(m.date)<=t);if(h.length>0){const m=h[0];c=m.oil,u=m.water}}e.push({wellId:l.id,wellName:l.name,sheetId:r,batteryName:o.name,oil:je(c)?pe(c):0,water:je(u)?pe(u):0})})}),e.sort((r,i)=>i.oil-r.oil).slice(0,n)}function HI(n=10){var s;if((s=S.dashboardData)!=null&&s.recentTests)return S.dashboardData.recentTests.slice(0,n).map(r=>{var l,c,u;const i=qe.find(d=>d.id===r.sheetId);return{date:(l=r.latestTest)!=null&&l.date?((u=(c=r.latestTest.date).toDate)==null?void 0:u.call(c))||new Date(r.latestTest.date):new Date,wellId:r.id,wellName:r.name,sheetId:r.sheetId,batteryName:(i==null?void 0:i.name)||"Unknown",oil:r.latestTest?pe(r.latestTest.oil):null,water:r.latestTest?pe(r.latestTest.water):null,gas:r.latestTest?pe(Math.max(0,r.latestTest.gas)):null}});const e=[],t=Hi();return Object.entries(S.appData).forEach(([r,i])=>{const o=qe.find(l=>l.id===r);!(i!=null&&i.wells)||!o||i.wells.forEach(l=>{l.status==="inactive"||!l.wellTests||l.wellTests.forEach(c=>{const u=new Date(c.date);!c.date||u>t||e.push({date:u,wellId:l.id,wellName:l.name,sheetId:r,batteryName:o.name,oil:je(c.oil)?pe(c.oil):null,water:je(c.water)?pe(c.water):null,gas:je(c.gas)?pe(Math.max(0,c.gas)):null})})})}),e.sort((r,i)=>i.date-r.date).slice(0,n)}function jI(n=15){var s;const e=[];return(((s=S.dashboardData)==null?void 0:s.actionItems)||Object.values(S.appData).flatMap(r=>(r==null?void 0:r.wells)||[])).forEach(r=>{var o;if(r.status==="inactive"||!((o=r.actionItems)!=null&&o.length))return;const i=qe.find(l=>l.id===r.sheetId);r.actionItems.forEach(l=>{l!=null&&l.trim()&&e.push({content:l,wellId:r.id,wellName:r.name,sheetId:r.sheetId,batteryName:(i==null?void 0:i.name)||"Unknown"})})}),e.slice(0,n)}function WI(n){const e=S.appData[n];if(!e)return{totalOil:0,totalWater:0,totalGas:0};const t=e.batteryProduction||[];if(t.length>0){const s=t.filter(r=>r.date).sort((r,i)=>new Date(i.date)-new Date(r.date))[0];if(s)return{totalOil:pe(Number(s.oil)||0),totalWater:pe(Number(s.water)||0),totalGas:pe(Math.max(0,Number(s.gas)||0))}}return{totalOil:0,totalWater:0,totalGas:0}}function qI(){return Object.values(S.appData).some(n=>{var e;return((e=n==null?void 0:n.wells)==null?void 0:e.length)>0})}async function ji(n=null,e=null){Ge("oilChart"),await Il(),bl("oil",n,e)}async function Wi(n=null,e=null){Ge("waterChart"),await Il(),bl("water",n,e)}async function qi(n=null,e=null){Ge("gasChart"),await Il(),bl("gas",n,e)}async function Il(n){const e=[];for(const t in S.appData){const s=S.appData[t];s&&(s._aggregateLoaded||e.push(gl(t)))}e.length>0&&(console.log(`Loading aggregate data for ${e.length} sheets...`),await Promise.all(e),console.log("Aggregate data loaded"))}function bl(n,e=null,t=null){var _;const r={oil:{canvasId:"aggregateOilChart",label:"Oil Production (BBL)",unit:"BBL",color:"#78716c",dateRangeVar:"oilChartDateRange",startDateId:"oilChartStartDate",endDateId:"oilChartEndDate",resetBtnId:"btnResetOilDates",showFn:ji},water:{canvasId:"aggregateWaterChart",label:"Water Production (BBL)",unit:"BBL",color:"#3b82f6",dateRangeVar:"waterChartDateRange",startDateId:"waterChartStartDate",endDateId:"waterChartEndDate",resetBtnId:"btnResetWaterDates",showFn:Wi},gas:{canvasId:"aggregateGasChart",label:"Gas Production (MCF)",unit:"MCF",color:"#22c55e",dateRangeVar:"gasChartDateRange",startDateId:"gasChartStartDate",endDateId:"gasChartEndDate",resetBtnId:"btnResetGasDates",showFn:qi}}[n];if(!r)return;n==="oil"&&S.aggregateOilChart?(S.aggregateOilChart.destroy(),S.aggregateOilChart=null):n==="water"&&S.aggregateWaterChart?(S.aggregateWaterChart.destroy(),S.aggregateWaterChart=null):n==="gas"&&S.aggregateGasChart&&(S.aggregateGasChart.destroy(),S.aggregateGasChart=null);const i=GI(n),o=((_=S.chartState[n])==null?void 0:_.aggregation)||"month";S.chartState[n].selectedBatteries=i;const{data:l,dateRange:c}=UI(n,e,t,o,i);n==="oil"?S.oilChartDateRange=c:n==="water"?S.waterChartDateRange=c:n==="gas"&&(S.gasChartDateRange=c),zI(n,r,e,t,c);const u={oil:"oilChartBatteries",water:"waterChartBatteries",gas:"gasChartBatteries"},d=document.getElementById(u[n]);d&&!d.querySelector(".explorer-battery")&&XI(n),KI(n);const h=document.getElementById(r.canvasId);if(!h)return;if(l.length===0){const w=h.getContext("2d");w.clearRect(0,0,h.width,h.height),w.font="14px Archivo, sans-serif",w.fillStyle="#6b7280",w.textAlign="center",w.fillText("No production data available",h.width/2,h.height/2);return}const m=h.getContext("2d"),g=new Chart(m,{type:"line",data:{datasets:[{label:r.label,data:l,backgroundColor:r.color+"33",borderColor:r.color,borderWidth:2,fill:!0,tension:.1,pointRadius:2,pointHoverRadius:5}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#282c33",titleColor:"#e8e9eb",bodyColor:"#e8e9eb",callbacks:{title:w=>new Date(w[0].parsed.x).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),label:w=>`${r.label}: ${w.parsed.y.toLocaleString()}`}}},scales:{x:{type:"time",time:{displayFormats:{day:"MMM-yy",week:"MMM-yy",month:"MMM-yy",quarter:"MMM-yy",year:"yyyy"}},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab",maxTicksLimit:12}},y:{beginAtZero:!0,title:{display:!0,text:r.unit,color:"#9ea3ab"},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab"}}}}});n==="oil"?S.aggregateOilChart=g:n==="water"?S.aggregateWaterChart=g:n==="gas"&&(S.aggregateGasChart=g)}function zI(n,e,t,s,r){const i=document.getElementById(e.startDateId),o=document.getElementById(e.endDateId),l=document.getElementById(e.resetBtnId);if(!i||!o||!r.min||!r.max)return;const c=w=>w?new Date(w).toISOString().split("T")[0]:"",u=c(r.min),d=c(r.max);i.min=u,i.max=d,o.min=u,o.max=d,i.value=t?c(t):u,o.value=s?c(s):d;const h=i.cloneNode(!0),m=o.cloneNode(!0),g=l.cloneNode(!0);i.parentNode.replaceChild(h,i),o.parentNode.replaceChild(m,o),l.parentNode.replaceChild(g,l);const _=()=>{const w=h.value?new Date(h.value):null,C=m.value?new Date(m.value+"T23:59:59"):null;e.showFn(w,C)};h.addEventListener("blur",_),m.addEventListener("blur",_),h.addEventListener("keydown",w=>{w.key==="Enter"&&w.target.blur()}),m.addEventListener("keydown",w=>{w.key==="Enter"&&w.target.blur()}),g.addEventListener("click",()=>e.showFn(null,null))}function GI(n){const e={oil:"oilChartBatteries",water:"waterChartBatteries",gas:"gasChartBatteries"},t=document.getElementById(e[n]);if(!t)return null;const s=t.querySelectorAll(".battery-checkbox");if(s.length===0)return null;const r=new Set;return s.forEach(i=>{i.checked&&i.dataset.battery&&r.add(i.dataset.battery)}),r}function ha(n){const t={oil:{startDateId:"oilChartStartDate",endDateId:"oilChartEndDate",showFn:ji},water:{startDateId:"waterChartStartDate",endDateId:"waterChartEndDate",showFn:Wi},gas:{startDateId:"gasChartStartDate",endDateId:"gasChartEndDate",showFn:qi}}[n];if(!t)return;const s=document.getElementById(t.startDateId),r=document.getElementById(t.endDateId),i=s&&s.value?new Date(s.value):null,o=r&&r.value?new Date(r.value+"T23:59:59"):null;t.showFn(i,o)}function KI(n){var s;const e=document.querySelectorAll(`input[name="${n}Aggregation"]`);if(!e.length)return;e.forEach(r=>{const i=r.cloneNode(!0);r.parentNode.replaceChild(i,r)});const t=((s=S.chartState[n])==null?void 0:s.aggregation)||"month";document.querySelectorAll(`input[name="${n}Aggregation"]`).forEach(r=>{r.checked=r.value===t,r.addEventListener("change",i=>{S.chartState[n].aggregation=i.target.value,ha(n)})})}function XI(n){var l;const e={oil:"oilChartBatteries",water:"waterChartBatteries",gas:"gasChartBatteries"},t=document.getElementById(e[n]);if(!t)return;if(t.innerHTML="",!qI()){t.innerHTML='<div class="explorer-empty">No data uploaded</div>';return}const s=()=>{const c={oil:"btnToggleAllOil",water:"btnToggleAllWater",gas:"btnToggleAllGas"},u=document.getElementById(c[n]);if(!u)return;const d=t.querySelectorAll(".battery-checkbox");if(!d.length)return;const h=Array.from(d).every(m=>m.checked);u.textContent=h?"Deselect All":"Select All"},r=(l=S.chartState[n])==null?void 0:l.selectedBatteries;qe.forEach(c=>{const u=S.appData[c.id];if(!u||!u._metadataLoaded)return;const d=r===null||r.has(c.id),h=S.metadataCache.wellCounts[c.id]||(u.wells?u.wells.length:0),m=document.createElement("label");m.className="explorer-battery-simple explorer-checkbox",m.innerHTML=`
            <input type="checkbox" class="battery-checkbox" data-battery="${c.id}" ${d?"checked":""}>
            <span class="checkmark"></span>
            <span class="battery-name">${c.name}</span>
            <span class="battery-well-count">${h} wells</span>
        `,t.appendChild(m),m.querySelector(".battery-checkbox").addEventListener("change",()=>{ha(n),s()})});const i={oil:"btnToggleAllOil",water:"btnToggleAllWater",gas:"btnToggleAllGas"},o=document.getElementById(i[n]);if(o){const c=o.cloneNode(!0);o.parentNode.replaceChild(c,o),c.addEventListener("click",()=>{const u=t.querySelectorAll(".battery-checkbox"),h=c.textContent.trim()==="Select All";u.forEach(m=>{m.checked=h}),c.textContent=h?"Deselect All":"Select All",ha(n)}),s()}}const Sl='<div class="loading-placeholder"><div class="loading-spinner-small"></div><span>Loading...</span></div>';let Js=null;function QI(n){Js=n}function JI(){YI(),ZI(),eb(),tb()}function YI(){const n=document.getElementById("statDailyOil"),e=document.getElementById("statDailyWater"),t=document.getElementById("statDailyGas");if(S.isLoading){n.innerHTML='<span class="loading-text">...</span>',e.innerHTML='<span class="loading-text">...</span>',t.innerHTML='<span class="loading-text">...</span>';return}const s=FI();n.textContent=s.totalOil.toLocaleString(),e.textContent=s.totalWater.toLocaleString(),t.textContent=s.totalGas.toLocaleString()}function ZI(){const n=document.getElementById("topProducersBody");if(S.isLoading){n.innerHTML='<tr><td colspan="5" class="dashboard-loading">'+Sl+"</td></tr>";return}const e=$I(10);if(e.length===0){n.innerHTML='<tr><td colspan="5" class="dashboard-empty">No production data available</td></tr>';return}n.innerHTML=e.map((t,s)=>`
        <tr data-well-id="${t.wellId}" data-sheet-id="${t.sheetId}">
            <td>${s+1}</td>
            <td class="well-name-cell">${t.wellName}</td>
            <td class="battery-name-cell">${t.batteryName}</td>
            <td>${t.oil>0?t.oil:"-"}</td>
            <td>${t.water>0?t.water:"-"}</td>
        </tr>
    `).join(""),n.querySelectorAll("tr[data-well-id]").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.wellId,r=t.dataset.sheetId;St(r,s)})})}function eb(){const n=document.getElementById("recentTestsBody");if(S.isLoading){n.innerHTML='<tr><td colspan="6" class="dashboard-loading">'+Sl+"</td></tr>";return}const e=HI(10);if(e.length===0){n.innerHTML='<tr><td colspan="6" class="dashboard-empty">No test data available</td></tr>';return}n.innerHTML=e.map(t=>`
        <tr data-well-id="${t.wellId}" data-sheet-id="${t.sheetId}">
            <td>${Rn(t.date)}</td>
            <td class="well-name-cell">${t.wellName}</td>
            <td class="battery-name-cell">${t.batteryName}</td>
            <td>${t.oil!==null?t.oil:"-"}</td>
            <td>${t.water!==null?t.water:"-"}</td>
            <td>${t.gas!==null?t.gas:"-"}</td>
        </tr>
    `).join(""),n.querySelectorAll("tr[data-well-id]").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.wellId,r=t.dataset.sheetId;St(r,s)})})}function tb(){const n=document.getElementById("dashboardActionList");if(S.isLoading){n.innerHTML='<li class="dashboard-loading" style="border-left-color: #6b7280;">'+Sl+"</li>";return}const e=jI(15);if(e.length===0){n.innerHTML='<li class="dashboard-empty" style="border-left-color: #6b7280; opacity: 0.7;">No action items</li>';return}n.innerHTML=e.map(t=>`
        <li data-well-id="${t.wellId}" data-sheet-id="${t.sheetId}">
            <div class="action-item-content">${t.content}</div>
            <div class="action-item-source">
                <span class="source-well">${t.wellName}</span> - ${t.batteryName}
            </div>
        </li>
    `).join(""),n.querySelectorAll("li[data-well-id]").forEach(t=>{t.style.cursor="pointer",t.addEventListener("click",()=>{const s=t.dataset.wellId,r=t.dataset.sheetId;St(r,s)})})}function nb(){console.log("initializeDashboardHandlers called");const n=document.getElementById("btnReuploadAll"),e=document.getElementById("btnClearCache"),t=document.getElementById("reuploadModal"),s=document.getElementById("btnCloseReuploadModal"),r=document.getElementById("reuploadModalOverlay"),i=document.getElementById("clearDatabaseModal"),o=document.getElementById("btnCloseClearDatabaseModal"),l=document.getElementById("clearDatabaseModalOverlay"),c=document.getElementById("btnClearAllData"),u=document.getElementById("btnClearExtractedOnly");n&&n.addEventListener("click",()=>{t&&t.classList.add("visible")}),s&&s.addEventListener("click",()=>{t&&t.classList.remove("visible")}),r&&r.addEventListener("click",()=>{t&&t.classList.remove("visible")}),e&&e.addEventListener("click",()=>{i&&i.classList.add("visible")}),o&&o.addEventListener("click",()=>{i&&i.classList.remove("visible")}),l&&l.addEventListener("click",()=>{i&&i.classList.remove("visible")}),c&&c.addEventListener("click",async()=>{confirm("Are you sure you want to clear ALL data? This will delete everything including your manual edits. You will need to re-upload all gauge sheets.")&&(hd("Clearing All Data"),await sb())}),u&&u.addEventListener("click",async()=>{confirm("Are you sure you want to clear extracted data? This will delete production data from uploaded sheets but keep your manual edits (action items, chemical programs, etc.). You will need to re-upload gauge sheets.")&&(hd("Clearing Extracted Data"),await rb())});const d=document.getElementById("statCardOil"),h=document.getElementById("statCardWater"),m=document.getElementById("statCardGas");console.log("Initializing stat card handlers:",{statCardOil:d,statCardWater:h,statCardGas:m}),d&&d.addEventListener("click",()=>{console.log("Oil card clicked"),ji();const g=document.getElementById("nav-oil-chart");g&&pt(g)}),h&&h.addEventListener("click",()=>{console.log("Water card clicked"),Wi();const g=document.getElementById("nav-water-chart");g&&pt(g)}),m&&m.addEventListener("click",()=>{console.log("Gas card clicked"),qi();const g=document.getElementById("nav-gas-chart");g&&pt(g)})}function hd(n){const e=document.getElementById("clearOptionsView"),t=document.getElementById("clearProgressView"),s=document.getElementById("clearProgressTitle"),r=document.getElementById("clearProgressSteps");e&&(e.style.display="none"),t&&(t.style.display="block"),s&&(s.textContent=n),r&&(r.innerHTML="")}function Cm(n){const e=document.getElementById("clearProgressMessage"),t=document.getElementById("clearProgressSteps");if(e&&(e.textContent=n),t){const s=document.createElement("div");s.className="progress-step",s.innerHTML=`
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${n}</span>
        `,t.appendChild(s),t.scrollTop=t.scrollHeight}}async function sb(){await _m(Cm),Js&&Js()}async function rb(){await ym(Cm),Js&&Js()}const te={editMode:!1,editedCells:{},originalValues:{}};function Us(n,e,t){if(!n||n.length===0){alert("No data available to download.");return}const s=[];s.push(e.join(",")),n.forEach(c=>{const u=e.map(d=>{const h=c[d.toLowerCase().replace(/[^a-z0-9]/g,"")]??c[d]??"",m=String(h).replace(/"/g,'""');return m.includes(",")||m.includes('"')||m.includes(`
`)?`"${m}"`:m});s.push(u.join(","))});const r=s.join(`
`),i=new Blob([r],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a"),l=URL.createObjectURL(i);o.setAttribute("href",l),o.setAttribute("download",t),o.style.visibility="hidden",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(l)}function qr(n){return n?new Date(n).toLocaleDateString("en-US"):""}function Ge(n){document.querySelectorAll(".view").forEach(s=>s.classList.remove("active"));const t={welcome:"welcomeView",gaugeSheet:"gaugeSheetView",well:"wellView",battery:"batteryView",oilChart:"oilChartView",waterChart:"waterChartView",gasChart:"gasChartView",masterChemical:"masterChemicalView",fluidLevels:"fluidLevelsView"}[n];t&&document.getElementById(t).classList.add("active")}async function vn(){const n=document.getElementById("operationsDashboard");n&&(n.style.display="block",await ur(),JI())}async function Im(n){const e=qe.find(i=>i.id===n);if(!e)return;S.currentSheet=n,Ge("gaugeSheet"),document.getElementById("sheetName").textContent=e.name,document.getElementById("sheetBreadcrumb").textContent=`Gauge Sheet: ${e.fileName}`,document.getElementById("expectedFileName").textContent=e.fileName;const t=S.appData[n],s=document.getElementById("uploadPrompt"),r=document.getElementById("uploadStatus");if(t&&t._metadataLoaded){if(s.style.display="none",r.style.display="flex",document.getElementById("lastUploadDate").textContent=Rn(t.lastUpdated),document.getElementById("rowCount").textContent=t.rawRowCount||"-",!t._wellsLoaded){const i=document.getElementById("wellsGrid");i.innerHTML='<div class="loading-placeholder"><div class="loading-spinner-small"></div><span>Loading wells...</span></div>',await dr(n)}}else s.style.display="block",r.style.display="none";yb(n)}async function bm(n){const e=qe.find(s=>s.id===n);if(!e)return;S.currentSheet=n,Ge("battery"),document.getElementById("batteryName").textContent=e.name,document.getElementById("batteryBreadcrumb").textContent=`Battery: ${e.name}`;const t=S.appData[n];(!t||!t._wellsLoaded)&&(hb(),t&&t._metadataLoaded&&await dr(n)),t&&t._metadataLoaded&&!t._aggregateLoaded&&await gl(n),fb(n),mb(n)}async function zi(){Ge("masterChemical"),pt(document.getElementById("nav-master-chemical"));const n=document.getElementById("masterChemicalEmpty"),e=document.getElementById("masterChemicalContent"),t=document.getElementById("masterChemicalLoading");if(S.chemicalPrograms&&Object.keys(S.chemicalPrograms).length>0){n.style.display="none",e.style.display="block",yi();return}n.style.display="none",e.style.display="block",t.style.display="flex";try{await Em(),t.style.display="none",S.chemicalPrograms&&Object.keys(S.chemicalPrograms).length>0?yi():(n.style.display="flex",e.style.display="none")}catch(s){console.error("Error loading Master Chemical data:",s),t.style.display="none",n.style.display="flex",e.style.display="none"}}function yi(){const n=document.getElementById("chemicalTableBody"),e=document.getElementById("chemicalTableHeader"),t=document.getElementById("chemicalDataStats"),s=document.getElementById("chemicalSearchInput");if(!S.chemicalPrograms||Object.keys(S.chemicalPrograms).length===0)return;const r=Object.values(S.chemicalPrograms).sort((d,h)=>(d.wellName||"").localeCompare(h.wellName||""));t.innerHTML=`<span class="stat-badge">${r.length} wells</span>`;const i=new Set;r.forEach(d=>{Object.keys(d.truckTreating||{}).forEach(h=>i.add(h)),Object.keys(d.continuous||{}).forEach(h=>i.add(h))});const o=Array.from(i).sort();let l="<th>Well Name</th><th>Battery</th>";o.forEach(d=>{l+=`<th>${d}</th>`}),e.innerHTML=l;const c=d=>{if(d.length===0){n.innerHTML='<tr><td colspan="100" style="text-align: center; color: #6b7280;">No matching wells</td></tr>';return}n.innerHTML=d.map(h=>{const m=h.wellName.toLowerCase().replace(/[^a-z0-9]/g,"");let g=`<td>${h.wellName||"-"}</td><td>${h.batteryName||"-"}</td>`;return o.forEach(_=>{var G,ee;const w=(G=h.truckTreating)==null?void 0:G[_],C=(ee=h.continuous)==null?void 0:ee[_],k=w!=null?typeof w=="number"?w.toFixed(2):w:"0.00",x=C!=null?typeof C=="number"?C.toFixed(2):C:"0.00",V=w!=null||C!=null;let F;te.editMode?F=`<div style="font-size: 0.875rem;">
                        <span class="editable-cell-inline edit-mode-enabled ${w?"":"empty-value"}" 
                              contenteditable="true" 
                              data-well-name="${m}"
                              data-chemical="${_}"
                              data-category="truckTreating"
                              data-original-value="${k}"
                              style="color: #f97316;">T: ${k}</span><br>
                        <span class="editable-cell-inline edit-mode-enabled ${C?"":"empty-value"}" 
                              contenteditable="true" 
                              data-well-name="${m}"
                              data-chemical="${_}"
                              data-category="continuous"
                              data-original-value="${x}"
                              style="color: #3b82f6;">C: ${x}</span>
                    </div>`:V?w!=null&&C!==void 0&&C!==null?F=`<div style="font-size: 0.875rem;">
                            <span style="color: #f97316;">T: ${k}</span><br>
                            <span style="color: #3b82f6;">C: ${x}</span>
                        </div>`:w!=null?F=`<span style="color: #f97316;">T: ${k}</span>`:C!=null&&(F=`<span style="color: #3b82f6;">C: ${x}</span>`):F="-",g+=`<td>${F}</td>`}),`<tr>${g}</tr>`}).join(""),te.editMode&&ib()};if(c(r),s){const d=s.cloneNode(!0);s.parentNode.replaceChild(d,s),d.addEventListener("input",h=>{const m=h.target.value.toLowerCase(),g=r.filter(_=>{const w=(_.wellName||"").toLowerCase(),C=(_.batteryName||"").toLowerCase();return w.includes(m)||C.includes(m)});c(g),t.innerHTML=`<span class="stat-badge">${g.length} wells</span>`})}const u=document.getElementById("btnExportChemicalCSV");if(u){const d=u.cloneNode(!0);u.parentNode.replaceChild(d,u),d.addEventListener("click",()=>{const h=r.map(g=>{const _={wellname:g.wellName||"",battery:g.batteryName||""};return o.forEach(w=>{var x,V;const C=(x=g.truckTreating)==null?void 0:x[w],k=(V=g.continuous)==null?void 0:V[w];C!==void 0&&k!==void 0?_[w]=`T: ${C}, C: ${k}`:C!==void 0?_[w]=`T: ${C}`:k!==void 0?_[w]=`C: ${k}`:_[w]=""}),_}),m=["Well Name","Battery",...o];Us(h,m,"Master_Chemical_Sheet.csv")})}lb()}function ib(){document.querySelectorAll(".editable-cell-inline").forEach(e=>{e.addEventListener("focus",t=>{const s=t.target.dataset.wellName,r=t.target.dataset.chemical,i=t.target.dataset.category,o=t.target.dataset.originalValue;te.originalValues[s]||(te.originalValues[s]={}),te.originalValues[s][r]||(te.originalValues[s][r]={}),te.originalValues[s][r][i]=o;const l=t.target.textContent,c=l.match(/[\d.]+/);if(c){const u=document.createRange(),d=window.getSelection(),h=t.target.firstChild;if(h){const m=l.indexOf(c[0]),g=m+c[0].length;u.setStart(h,m),u.setEnd(h,g),d.removeAllRanges(),d.addRange(u)}}}),e.addEventListener("blur",t=>{ob(t.target)}),e.addEventListener("keydown",t=>{if(t.key==="Enter"){t.preventDefault(),t.target.blur();const s=Array.from(document.querySelectorAll(".editable-cell-inline")),r=s.indexOf(t.target);r<s.length-1&&s[r+1].focus()}else if(t.key==="Escape"){t.preventDefault();const s=t.target.textContent.startsWith("T:")?"T: ":"C: ";t.target.textContent=s+t.target.dataset.originalValue,t.target.classList.remove("modified"),t.target.blur()}}),e.addEventListener("input",t=>{const s=t.target.textContent,r=s.startsWith("T:")?"T: ":"C: ",l=s.replace(/[TC]:\s*/,"").trim().replace(/[^0-9.]/g,"").split("."),c=l[0]+(l.length>1?"."+l.slice(1).join(""):"");if(r+c!==s){const u=window.getSelection(),h=u.getRangeAt(0).startOffset;t.target.textContent=r+c;const m=t.target.firstChild;if(m){const g=document.createRange(),_=Math.min(h,m.length);g.setStart(m,_),g.collapse(!0),u.removeAllRanges(),u.addRange(g)}}})})}function ob(n){var h,m;const e=n.dataset.wellName,t=n.dataset.chemical,s=n.dataset.category,r=n.dataset.originalValue,i=n.textContent,o=i.match(/[\d.]+/),l=o?o[0]:"",c=parseFloat(l);if(l!==""&&(isNaN(c)||c<0)){const g=i.startsWith("T:")?"T: ":"C: ";n.textContent=g+r,n.classList.remove("modified");return}const u=parseFloat(r);if(Math.abs(c-u)>.001){const g=c.toFixed(2),_=i.startsWith("T:")?"T: ":"C: ";n.textContent=_+g,te.editedCells[e]||(te.editedCells[e]={}),te.editedCells[e][t]||(te.editedCells[e][t]={}),c<.001?te.editedCells[e][t][s]=null:te.editedCells[e][t][s]=c,n.classList.add("modified"),n.classList.remove("empty-value"),c>.001&&(n.style.opacity="",n.style.fontStyle="")}else((m=(h=te.editedCells[e])==null?void 0:h[t])==null?void 0:m[s])!==void 0&&(delete te.editedCells[e][t][s],Object.keys(te.editedCells[e][t]).length===0&&delete te.editedCells[e][t],Object.keys(te.editedCells[e]).length===0&&delete te.editedCells[e]),n.classList.remove("modified");ab()}function ab(){const n=document.getElementById("chemicalChangesIndicator"),e=Object.values(te.editedCells).reduce((t,s)=>t+Object.values(s).reduce((r,i)=>r+Object.keys(i).length,0),0);e>0?(n.textContent=`${e} change${e>1?"s":""}`,n.style.display="inline-block"):n.style.display="none"}function lb(){const n=document.getElementById("btnEditChemical"),e=document.getElementById("btnSaveChemical"),t=document.getElementById("btnCancelChemical");if(n){const s=n.cloneNode(!0);n.parentNode.replaceChild(s,n),s.addEventListener("click",cb)}if(e){const s=e.cloneNode(!0);e.parentNode.replaceChild(s,e),s.addEventListener("click",ub)}if(t){const s=t.cloneNode(!0);t.parentNode.replaceChild(s,t),s.addEventListener("click",db)}}function cb(){te.editMode=!0,te.editedCells={},te.originalValues={},document.getElementById("btnEditChemical").style.display="none",document.getElementById("btnSaveChemical").style.display="inline-flex",document.getElementById("btnCancelChemical").style.display="inline-flex";const n=document.getElementById("chemicalEditInfoBanner");if(n){n.style.display="flex";const e=document.getElementById("btnCloseEditInfo");e&&(e.onclick=()=>{n.style.display="none"})}yi()}function Sm(){te.editMode=!1,te.editedCells={},te.originalValues={};const n=document.getElementById("btnSaveChemical"),e=document.getElementById("btnCancelChemical");n&&(n.disabled=!1,n.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
        </svg> Save`),e&&(e.disabled=!1),document.getElementById("btnEditChemical").style.display="inline-flex",document.getElementById("btnSaveChemical").style.display="none",document.getElementById("btnCancelChemical").style.display="none",document.getElementById("chemicalChangesIndicator").style.display="none";const t=document.getElementById("chemicalEditInfoBanner");t&&(t.style.display="none"),yi()}async function ub(){var s;if(Object.keys(te.editedCells).length===0){alert("No changes to save");return}const n=document.getElementById("btnSaveChemical"),e=document.getElementById("btnCancelChemical"),t=n.innerHTML;n.disabled=!0,e.disabled=!0,n.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spinning">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 6v6l4 2"></path>
    </svg> Saving...`;try{await vm(te.editedCells),Sm();const r=document.getElementById("chemicalChangesIndicator");r.textContent="Saved!",r.style.display="inline-block",r.style.backgroundColor="#22c55e",setTimeout(()=>{r.style.display="none",r.style.backgroundColor=""},3e3)}catch(r){console.error("Error saving chemical changes:",r);let i="Failed to save changes. ";(s=r.message)!=null&&s.includes("ERR_BLOCKED_BY_CLIENT")||r.code==="resource-exhausted"||navigator.onLine===!1?i+=`Network issue detected. Please check:

1. Your internet connection
2. Ad blockers or browser extensions may be blocking Firestore
3. Try disabling extensions temporarily`:r.code==="permission-denied"?i+="Permission denied. Please check your authentication.":i+=`Please try again.

Error: `+(r.message||"Unknown error"),alert(i),n.disabled=!1,e.disabled=!1,n.innerHTML=t}}function db(){Object.keys(te.editedCells).length>0&&!confirm("You have unsaved changes. Are you sure you want to cancel?")||Sm()}function hb(){const n='<div class="loading-placeholder"><div class="loading-spinner-small"></div><span>Loading battery data...</span></div>',e=document.getElementById("statBatteryOil"),t=document.getElementById("statBatteryWater"),s=document.getElementById("statBatteryGas");e&&(e.innerHTML='<span class="loading-text">...</span>'),t&&(t.innerHTML='<span class="loading-text">...</span>'),s&&(s.innerHTML='<span class="loading-text">...</span>');const r=document.getElementById("batteryWellsGrid");r&&(r.innerHTML=n)}function fb(n){const e=document.getElementById("statBatteryOil"),t=document.getElementById("statBatteryWater"),s=document.getElementById("statBatteryGas"),r=S.appData[n];if(!r||!r._metadataLoaded){e&&(e.textContent="-"),t&&(t.textContent="-"),s&&(s.textContent="-");return}const i=WI(n);e&&(e.textContent=i.totalOil.toLocaleString()),t&&(t.textContent=i.totalWater.toLocaleString()),s&&(s.textContent=i.totalGas.toLocaleString())}function mb(n){const e=document.getElementById("batteryWellsGrid"),t=S.appData[n];if(!t||!t._metadataLoaded){e.innerHTML='<p class="empty-message">No data uploaded for this battery</p>';return}if(!t.wells||t.wells.length===0){e.innerHTML='<p class="empty-message">No wells found</p>';return}const s=t.wells.filter(r=>r.status!=="inactive");if(s.length===0){e.innerHTML='<p class="empty-message">No active wells</p>';return}e.innerHTML=s.map(r=>{const i=r.latestTest||r.wellTests&&r.wellTests[0],o=i&&i.oil!==void 0?Math.round(i.oil*100)/100:null,l=i&&i.gas!==void 0&&i.gas!==null?Math.round(Math.max(0,i.gas)*100)/100:null,c=i&&i.water!==void 0?Math.round(i.water*100)/100:null,u=l===null||l===0,d=u?"Latest Water":"Latest Gas",h=u?c!==null?c+" bbl":"-":l!==null?l+" mcf":"-";return`
            <div class="well-card" data-well-id="${r.id}" data-sheet-id="${n}">
                <h4>${r.name}</h4>
                <div class="well-stats">
                    <div class="well-stat">
                        <span class="well-stat-label">Latest Oil</span>
                        <span class="well-stat-value">${o!==null?o+" bbl":"-"}</span>
                    </div>
                    <div class="well-stat">
                        <span class="well-stat-label">${d}</span>
                        <span class="well-stat-value">${h}</span>
                    </div>
                </div>
            </div>
        `}).join(""),e.querySelectorAll(".well-card").forEach(r=>{r.addEventListener("click",()=>{const i=r.dataset.wellId,o=r.dataset.sheetId;St(o,i)})})}async function St(n,e){const t=S.appData[n];if(!t)return;t._wellsLoaded||await dr(n);let s=t.wells.find(o=>o.id===e);if(!s)return;S.currentSheet=n,S.currentWell=e,Ge("well");const r=qe.find(o=>o.id===n);if(document.getElementById("wellName").textContent=s.name,document.getElementById("wellBreadcrumb").textContent=`${r.name} > ${s.name}`,(!s._detailsLoaded||s._summaryOnly)&&(pb(),await pl(n,e),s=t.wells.find(o=>o.id===e),!s))return;const i=Cl(s.name,S.chemicalPrograms);Tl(s),_b(s.wellTests||[]),wb(s.chemicalProgram||{},i,s.name),Rm(s.failureHistory||[]),vb("wellActionList",s.actionItems||[]),Tb(s.pressureReadings||[]),Cb(s.pressureReadings||[]),_I(),gb(s)}function pb(){const n='<div class="loading-placeholder"><div class="loading-spinner-small"></div><span>Loading well data...</span></div>',e=document.querySelector("#productionChartCard .card-body");e&&(e.innerHTML=n);const t=document.querySelector("#wellTestTable tbody");t&&(t.innerHTML='<tr><td colspan="4" class="dashboard-loading">'+n+"</td></tr>");const s=document.querySelector("#pressureTable tbody");s&&(s.innerHTML='<tr><td colspan="5" class="dashboard-loading">'+n+"</td></tr>");const r=document.querySelector("#failureTable tbody");r&&(r.innerHTML='<tr><td colspan="6" class="dashboard-loading">'+n+"</td></tr>")}function gb(n){const e=n.name.replace(/[^a-zA-Z0-9]/g,"_"),t=document.getElementById("btnDownloadProduction");if(t){const i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),i.addEventListener("click",()=>{const o=n.production||[],l=document.getElementById("productionStartDate"),c=document.getElementById("productionEndDate");let u=o.filter(h=>h.date);if(l&&l.value){const h=new Date(l.value);u=u.filter(m=>new Date(m.date)>=h)}if(c&&c.value){const h=new Date(c.value);h.setHours(23,59,59,999),u=u.filter(m=>new Date(m.date)<=h)}u.sort((h,m)=>new Date(h.date)-new Date(m.date));const d=u.map(h=>({date:qr(h.date),oilbbl:h.oil!==null&&h.oil!==void 0?Math.round(h.oil*100)/100:"",waterbbl:h.water!==null&&h.water!==void 0?Math.round(h.water*100)/100:"",gasmcf:h.gas!==null&&h.gas!==void 0?Math.round(Math.max(0,h.gas)*100)/100:""}));Us(d,["Date","Oil (bbl)","Water (bbl)","Gas (mcf)"],`${e}_Production.csv`)})}const s=document.getElementById("btnDownloadWellTests");if(s){const i=s.cloneNode(!0);s.parentNode.replaceChild(i,s),i.addEventListener("click",()=>{const o=n.wellTests||[],l=new Date;l.setHours(23,59,59,999);const u=o.filter(d=>new Date(d.date)<=l).map(d=>({date:qr(d.date),oilbbl:d.oil!==null?Math.round(d.oil*100)/100:"",waterbbl:d.water!==null?Math.round(d.water*100)/100:"",gasmcf:d.gas!==null?Math.round(Math.max(0,d.gas)*100)/100:""}));Us(u,["Date","Oil (bbl)","Water (bbl)","Gas (mcf)"],`${e}_Well_Tests.csv`)})}const r=document.getElementById("btnDownloadPressure");if(r){const i=r.cloneNode(!0);r.parentNode.replaceChild(i,r),i.addEventListener("click",()=>{const l=(n.pressureReadings||[]).map(c=>({date:qr(c.date),casingpsi:c.casingPsi||"",tubingpsi:c.tubingPsi||"",flowlinepsi:c.flowlinePsi||"",injvol:c.injVol||""}));Us(l,["Date","Casing PSI","Tubing PSI","Flowline PSI","Inj Vol"],`${e}_Pressure_Readings.csv`)})}}function yb(n){const e=document.getElementById("wellsGrid"),t=S.appData[n];if(!t||!t.wells||t.wells.length===0){e.innerHTML='<p class="empty-message">Upload gauge sheet to see wells</p>';return}const s=t.wells.filter(r=>r.status!=="inactive");if(s.length===0){e.innerHTML='<p class="empty-message">No active wells</p>';return}e.innerHTML=s.map(r=>{const i=r.latestTest||r.wellTests&&r.wellTests[0],o=i&&i.oil!==void 0?Math.round(i.oil*100)/100:null,l=i&&i.gas!==void 0&&i.gas!==null?Math.round(Math.max(0,i.gas)*100)/100:null,c=i&&i.water!==void 0?Math.round(i.water*100)/100:null,u=l===null||l===0,d=u?"Latest Water":"Latest Gas",h=u?c!==null?c+" bbl":"-":l!==null?l+" mcf":"-";return`
            <div class="well-card" data-well-id="${r.id}" data-sheet-id="${n}">
                <h4>${r.name}</h4>
                <div class="well-stats">
                    <div class="well-stat">
                        <span class="well-stat-label">Latest Oil</span>
                        <span class="well-stat-value">${o!==null?o+" bbl":"-"}</span>
                    </div>
                    <div class="well-stat">
                        <span class="well-stat-label">${d}</span>
                        <span class="well-stat-value">${h}</span>
                    </div>
                </div>
            </div>
        `}).join(""),e.querySelectorAll(".well-card").forEach(r=>{r.addEventListener("click",()=>{const i=r.dataset.wellId,o=r.dataset.sheetId;St(o,i)})})}function _b(n){const e=document.querySelector("#wellTestTable tbody"),t=new Date;if(t.setHours(23,59,59,999),!n||n.length===0){e.innerHTML='<tr><td colspan="4" style="text-align: center; color: #6b7280;">No test data</td></tr>';return}const s=n.filter(r=>new Date(r.date)<=t);if(s.length===0){e.innerHTML='<tr><td colspan="4" style="text-align: center; color: #6b7280;">No test data</td></tr>';return}s.sort((r,i)=>new Date(i.date)-new Date(r.date)),e.innerHTML=s.map(r=>{const i=r.gas!==null?Math.round(Math.max(0,r.gas)*100)/100:null;return`
            <tr>
                <td>${Rn(r.date)}</td>
                <td>${r.oil!==null?Math.round(r.oil*100)/100:"-"}</td>
                <td>${r.water!==null?Math.round(r.water*100)/100:"-"}</td>
                <td>${i!==null?i:"-"}</td>
            </tr>
        `}).join("")}function wb(n,e,t){const s=document.querySelector("#chemicalTable").parentElement;let r="none",i=null,o=null;if(e?(r="master",i=e,o=e.lastUpdated):n&&(n.continuous||n.truckTreat)&&(r="manual",i={truckTreating:n.truckTreat||{},continuous:n.continuous||{}}),r==="none"){s.innerHTML=`
            <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                <p>No chemical program data available</p>
                <p style="font-size: 0.875rem; margin-top: 0.5rem;">Upload the Master Chemical Sheet or add data manually</p>
            </div>
        `;return}let l='<table id="chemicalTable">';if(r==="master"){const c=Object.entries(i.truckTreating||{}),u=Object.entries(i.continuous||{}),d=o?` (Updated: ${Rn(o)})`:"";l+=`
            <thead>
                <tr>
                    <th colspan="2" style="font-size: 0.875rem; color: var(--text-muted); font-weight: normal; text-align: center;">
                        From Master Chemical Sheet${d}
                    </th>
                </tr>
            </thead>
            <tbody>
        `,c.length>0&&(l+=`
                <tr>
                    <td colspan="2" style="font-weight: 600; background-color: var(--bg-tertiary); padding: 0.75rem;">
                        TRUCK TREATING (gal/month)
                    </td>
                </tr>
            `,c.forEach(([h,m])=>{const g=typeof m=="number"?m.toFixed(2):m;l+=`
                    <tr>
                        <td style="padding-left: 1.5rem;">${h}</td>
                        <td style="text-align: right;">${g}</td>
                    </tr>
                `})),u.length>0&&(l+=`
                <tr>
                    <td colspan="2" style="font-weight: 600; background-color: var(--bg-tertiary); padding: 0.75rem; padding-top: ${c.length>0?"1rem":"0.75rem"};">
                        CONTINUOUS (gal/month)
                    </td>
                </tr>
            `,u.forEach(([h,m])=>{const g=typeof m=="number"?m.toFixed(2):m;l+=`
                    <tr>
                        <td style="padding-left: 1.5rem;">${h}</td>
                        <td style="text-align: right;">${g}</td>
                    </tr>
                `})),l+="</tbody>"}else if(r==="manual"){const c=i.continuous||{},u=i.truckTreating||{};l+=`
            <thead>
                <tr>
                    <th colspan="2" style="font-size: 0.875rem; color: var(--text-muted); font-weight: normal; text-align: center;">
                        Manually Entered
                    </th>
                </tr>
                <tr>
                    <th></th>
                    <th>Continuous</th>
                    <th>Truck Treat</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Rate (gal/month)</td>
                    <td>${c.rate||"-"}</td>
                    <td>${u.rate||"-"}</td>
                </tr>
                <tr>
                    <td>Chems Used</td>
                    <td>${c.chems||"-"}</td>
                    <td>${u.chems||"-"}</td>
                </tr>
                <tr>
                    <td>PPM</td>
                    <td>${c.ppm||"-"}</td>
                    <td>${u.ppm||"-"}</td>
                </tr>
            </tbody>
        `}l+="</table>",s.innerHTML=l}function Rm(n){const e=document.querySelector("#failureTable tbody");if(!n||n.length===0){e.innerHTML='<tr><td colspan="3" style="text-align: center; color: #6b7280;">No failure history</td></tr>';return}e.innerHTML=n.map(t=>{var l,c;const s=((c=(l=t.failureDate)==null?void 0:l.toDate)==null?void 0:c.call(l))||new Date(t.failureDate),r=t.fileUrl||"#",i=t.fileName||"Unknown File",o=t.notes||"-";return`
            <tr>
                <td>${Rn(s)}</td>
                <td>
                    <a href="${r}" 
                       target="_blank" 
                       download="${i}"
                       class="file-download-link"
                       title="Download ${i}">
                        ${i}
                    </a>
                </td>
                <td>${o}</td>
                <td>
                    <button class="btn-icon btn-delete-failure" 
                            data-failure-id="${t.id}"
                            title="Delete entry">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M2 4h12M5.333 4V2.667a1.333 1.333 0 0 1 1.334-1.334h2.666a1.333 1.333 0 0 1 1.334 1.334V4m2 0v9.333a1.333 1.333 0 0 1-1.334 1.334H4.667a1.333 1.333 0 0 1-1.334-1.334V4h9.334Z" 
                                  stroke="currentColor" 
                                  stroke-width="1.5" 
                                  stroke-linecap="round" 
                                  stroke-linejoin="round"/>
                        </svg>
                    </button>
                </td>
            </tr>
        `}).join(""),e.querySelectorAll(".btn-delete-failure").forEach(t=>{t.addEventListener("click",s=>{s.stopPropagation();const r=t.dataset.failureId;Eb(r)})})}async function Eb(n){if(!confirm("Are you sure you want to delete this failure history entry? This will also delete the associated file."))return;const{deleteFailureHistoryEntry:e}=await jn(async()=>{const{deleteFailureHistoryEntry:i}=await Promise.resolve().then(()=>da);return{deleteFailureHistoryEntry:i}},void 0),t=S.currentSheet,s=S.currentWell;if(await e(t,s,n)){const{loadWellDetails:i}=await jn(async()=>{const{loadWellDetails:c}=await Promise.resolve().then(()=>da);return{loadWellDetails:c}},void 0);await i(t,s);const l=S.appData[t].wells.find(c=>c.id===s);l&&Rm(l.failureHistory||[]),alert("Failure history entry deleted successfully")}else alert("Failed to delete failure history entry. Please try again.")}function vb(n,e){const t=document.getElementById(n);if(!e||e.length===0){t.innerHTML='<li style="border-left-color: #6b7280; opacity: 0.7;">No action items</li>';return}t.innerHTML=e.map(s=>`<li>${s}</li>`).join("")}function Tb(n){const e=document.querySelector("#pressureTable tbody");if(!n||n.length===0){e.innerHTML='<tr><td colspan="5" style="text-align: center; color: #6b7280;">No pressure data</td></tr>';return}const t=[...n].sort((s,r)=>new Date(r.date)-new Date(s.date));e.innerHTML=t.map(s=>`
        <tr>
            <td>${Rn(s.date)}</td>
            <td>${s.casingPsi||"-"}</td>
            <td>${s.tubingPsi||"-"}</td>
            <td>${s.flowlinePsi||"-"}</td>
            <td>${s.injVol||"-"}</td>
        </tr>
    `).join("")}function Cb(n){const e=document.getElementById("pressureChartsCard"),t=document.getElementById("pressureChartsWrapper");if(S.pressureCharts.psi&&(S.pressureCharts.psi.destroy(),S.pressureCharts.psi=null),S.pressureCharts.injVol&&(S.pressureCharts.injVol.destroy(),S.pressureCharts.injVol=null),!n||n.length<=20){e.style.display="none";return}const s=n.some(c=>c.casingPsi!==null&&c.casingPsi!==void 0&&!isNaN(c.casingPsi)),r=n.some(c=>c.tubingPsi!==null&&c.tubingPsi!==void 0&&!isNaN(c.tubingPsi)),i=n.some(c=>c.flowlinePsi!==null&&c.flowlinePsi!==void 0&&!isNaN(c.flowlinePsi)),o=n.some(c=>c.injVol!==null&&c.injVol!==void 0&&!isNaN(c.injVol)),l=s||r||i;if(!l&&!o){e.style.display="none";return}if(e.style.display="block",t.innerHTML="",l){const c=document.createElement("div");c.className="chart-section";let u="";const d=[];s&&d.push({id:"casing",label:"Casing PSI",color:"#f97316"}),r&&d.push({id:"tubing",label:"Tubing PSI",color:"#3b82f6"}),i&&d.push({id:"flowline",label:"Flowline PSI",color:"#8b5cf6"}),d.length>1&&(u=`
                <div class="pressure-chart-filters">
                    ${d.map(_=>`
                        <label class="pressure-filter-option">
                            <input type="checkbox" class="pressure-filter-checkbox" data-psi-type="${_.id}" checked>
                            <span class="filter-color-indicator" style="background-color: ${_.color};"></span>
                            <span>${_.label}</span>
                        </label>
                    `).join("")}
                </div>
            `),c.innerHTML=`
            <div class="chart-header-with-filters">
                <div class="chart-label">Pressure Readings (PSI)</div>
                ${u}
            </div>
            <div class="canvas-wrapper">
                <canvas id="chart-pressure-psi"></canvas>
            </div>
        `,t.appendChild(c);const h=[];if(s){const _=n.filter(w=>w.date&&w.casingPsi!==null&&w.casingPsi!==void 0).map(w=>({x:new Date(w.date),y:Number(w.casingPsi)})).filter(w=>!isNaN(w.y)).sort((w,C)=>w.x-C.x);h.push({label:"Casing PSI",data:_,borderColor:"#f97316",backgroundColor:"#f97316",pointRadius:2,pointHoverRadius:5,borderWidth:2})}if(r){const _=n.filter(w=>w.date&&w.tubingPsi!==null&&w.tubingPsi!==void 0).map(w=>({x:new Date(w.date),y:Number(w.tubingPsi)})).filter(w=>!isNaN(w.y)).sort((w,C)=>w.x-C.x);h.push({label:"Tubing PSI",data:_,borderColor:"#3b82f6",backgroundColor:"#3b82f6",pointRadius:2,pointHoverRadius:5,borderWidth:2})}if(i){const _=n.filter(w=>w.date&&w.flowlinePsi!==null&&w.flowlinePsi!==void 0).map(w=>({x:new Date(w.date),y:Number(w.flowlinePsi)})).filter(w=>!isNaN(w.y)).sort((w,C)=>w.x-C.x);h.push({label:"Flowline PSI",data:_,borderColor:"#8b5cf6",backgroundColor:"#8b5cf6",pointRadius:2,pointHoverRadius:5,borderWidth:2})}const m=document.getElementById("chart-pressure-psi").getContext("2d");S.pressureCharts.psi=new Chart(m,{type:"line",data:{datasets:h},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#282c33",titleColor:"#e8e9eb",bodyColor:"#e8e9eb",callbacks:{title:_=>new Date(_[0].parsed.x).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),label:_=>`${_.dataset.label}: ${_.parsed.y} PSI`}}},scales:{x:{type:"time",time:{displayFormats:{day:"MMM-yy",week:"MMM-yy",month:"MMM-yy",quarter:"MMM-yy",year:"yyyy"}},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab",maxTicksLimit:8}},y:{beginAtZero:!0,title:{display:!0,text:"PSI",color:"#9ea3ab"},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab"}}}}}),c.querySelectorAll(".pressure-filter-checkbox").forEach((_,w)=>{_.addEventListener("change",C=>{const k=h.findIndex(x=>{const V=C.target.dataset.psiType;return V==="casing"?x.label==="Casing PSI":V==="tubing"?x.label==="Tubing PSI":V==="flowline"?x.label==="Flowline PSI":!1});if(k!==-1){const x=S.pressureCharts.psi.getDatasetMeta(k);x.hidden=!C.target.checked,S.pressureCharts.psi.update()}})})}if(o){const c=document.createElement("div");c.className="chart-section",c.innerHTML=`
            <div class="chart-label">Injection Volume</div>
            <div class="canvas-wrapper">
                <canvas id="chart-pressure-injvol"></canvas>
            </div>
        `,t.appendChild(c);const u=n.filter(h=>h.date&&h.injVol!==null&&h.injVol!==void 0).map(h=>({x:new Date(h.date),y:Number(h.injVol)})).filter(h=>!isNaN(h.y)).sort((h,m)=>h.x-m.x),d=document.getElementById("chart-pressure-injvol").getContext("2d");S.pressureCharts.injVol=new Chart(d,{type:"line",data:{datasets:[{label:"Injection Volume",data:u,borderColor:"#22c55e",backgroundColor:"#22c55e",pointRadius:2,pointHoverRadius:5,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#282c33",titleColor:"#e8e9eb",bodyColor:"#e8e9eb",callbacks:{title:h=>new Date(h[0].parsed.x).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),label:h=>`Injection Volume: ${h.parsed.y}`}}},scales:{x:{type:"time",time:{displayFormats:{day:"MMM-yy",week:"MMM-yy",month:"MMM-yy",quarter:"MMM-yy",year:"yyyy"}},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab",maxTicksLimit:8}},y:{beginAtZero:!0,title:{display:!0,text:"Volume",color:"#9ea3ab"},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab"}}}}})}}async function Gi(){Ge("fluidLevels"),pt(document.getElementById("nav-fluid-levels"));const n=document.getElementById("fluidLevelsEmpty"),e=document.getElementById("fluidLevelsContent"),t=document.getElementById("fluidLevelsLoading");if(!S.fluidLevels||Object.keys(S.fluidLevels).length===0){t.style.display="flex",n.style.display="none",e.style.display="none";const{loadFluidLevelData:s}=await jn(async()=>{const{loadFluidLevelData:r}=await Promise.resolve().then(()=>da);return{loadFluidLevelData:r}},void 0);await s(),t.style.display="none"}if(!S.fluidLevels||Object.keys(S.fluidLevels).length===0){n.style.display="flex",e.style.display="none";return}n.style.display="none",e.style.display="block",Pm(),Ib()}function Pm(n=""){const e=document.getElementById("fluidLevelsTableHeader"),t=document.getElementById("fluidLevelsTableBody"),s=document.getElementById("fluidLevelsDataStats"),r=[];Object.keys(S.appData).forEach(l=>{const c=S.appData[l];c&&c.wells&&c.wells.forEach(u=>{u.status!=="inactive"&&r.push({name:u.name,id:u.id,sheetId:l})})});const i=[];for(const l of r){const c=l.name.toLowerCase().replace(/[^a-z0-9]/g,""),u=S.fluidLevels[c];if(u&&u.readings&&u.readings.length>0){const d=[...u.readings].sort((w,C)=>new Date(C.date)-new Date(w.date)),h=d[0],m=d[1]||null;let g=null,_=null;m&&h.gasFreeLevel!==null&&m.gasFreeLevel!==null&&(g=h.gasFreeLevel-m.gasFreeLevel,_=g>0?"rising":g<0?"falling":"stable"),i.push({wellName:l.name,latestDate:h.date,latestGasFreeLevel:h.gasFreeLevel,priorGasFreeLevel:m?m.gasFreeLevel:null,change:g,changeDirection:_,strokeLength:h.strokeLength,spm:h.spm,runTime:h.runTime,pumpIntakePressure:h.pumpIntakePressure})}}let o=i;if(n){const l=n.toLowerCase();o=i.filter(c=>c.wellName.toLowerCase().includes(l))}if(o.sort((l,c)=>l.wellName.localeCompare(c.wellName)),s.innerHTML=`<span class="stat-badge">${o.length} wells</span>`,e.innerHTML=`
        <th>Well Name</th>
        <th>Last Reading</th>
        <th>Gas Free Level (ft)</th>
        <th>Prior Level (ft)</th>
        <th>Change</th>
        <th>Stroke</th>
        <th>SPM</th>
        <th>Run Time</th>
        <th>Pump Intake (psi)</th>
    `,o.length===0){t.innerHTML=`
            <tr>
                <td colspan="9" style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                    ${n?"No wells found matching your search":"No fluid level data available for dashboard wells"}
                </td>
            </tr>
        `;return}t.innerHTML=o.map(l=>{const c=l.change!==null?`${l.change>0?"+":""}${l.change.toFixed(0)} ft`:"-",u=l.changeDirection==="rising"?"change-rising":l.changeDirection==="falling"?"change-falling":"",d=l.changeDirection==="rising"?" ↑":l.changeDirection==="falling"?" ↓":"";return`
            <tr>
                <td class="well-name-cell">${l.wellName}</td>
                <td>${Rn(l.latestDate)}</td>
                <td class="numeric-cell">${l.latestGasFreeLevel!==null?l.latestGasFreeLevel.toFixed(0):"-"}</td>
                <td class="numeric-cell">${l.priorGasFreeLevel!==null?l.priorGasFreeLevel.toFixed(0):"-"}</td>
                <td class="change-cell ${u}">${c}${d}</td>
                <td>${l.strokeLength||"-"}</td>
                <td class="numeric-cell">${l.spm!==null?l.spm.toFixed(1):"-"}</td>
                <td>${l.runTime||"-"}</td>
                <td class="numeric-cell">${l.pumpIntakePressure!==null?l.pumpIntakePressure.toFixed(0):"-"}</td>
            </tr>
        `}).join("")}function Ib(){const n=document.getElementById("fluidLevelsSearchInput");if(n){const t=n.cloneNode(!0);n.parentNode.replaceChild(t,n),t.addEventListener("input",s=>{Pm(s.target.value)})}const e=document.getElementById("btnExportFluidLevelsCSV");if(e){const t=e.cloneNode(!0);e.parentNode.replaceChild(t,e),t.addEventListener("click",()=>{bb()})}}function bb(){const n=[];Object.keys(S.appData).forEach(r=>{const i=S.appData[r];i&&i.wells&&i.wells.forEach(o=>{o.status!=="inactive"&&n.push({name:o.name,id:o.id,sheetId:r})})});const e=[];for(const r of n){const i=r.name.toLowerCase().replace(/[^a-z0-9]/g,""),o=S.fluidLevels[i];if(o&&o.readings&&o.readings.length>0){const l=[...o.readings].sort((h,m)=>new Date(m.date)-new Date(h.date)),c=l[0],u=l[1]||null;let d=null;u&&c.gasFreeLevel!==null&&u.gasFreeLevel!==null&&(d=c.gasFreeLevel-u.gasFreeLevel),e.push({wellname:r.name,lastreading:qr(c.date),gasfreelevel:c.gasFreeLevel!==null?c.gasFreeLevel.toFixed(0):"",priorlevel:u&&u.gasFreeLevel!==null?u.gasFreeLevel.toFixed(0):"",change:d!==null?d.toFixed(0):"",strokelength:c.strokeLength||"",spm:c.spm!==null?c.spm.toFixed(1):"",runtime:c.runTime||"",pumpintakepressure:c.pumpIntakePressure!==null?c.pumpIntakePressure.toFixed(0):""})}}const t=["Well Name","Last Reading","Gas Free Level (ft)","Prior Level (ft)","Change (ft)","Stroke Length","SPM","Run Time","Pump Intake Pressure (psi)"],s=`Fluid_Levels_${new Date().toISOString().split("T")[0]}.csv`;Us(e,t,s)}const fd=Object.freeze(Object.defineProperty({__proto__:null,showBatteryView:bm,showFluidLevelsView:Gi,showGaugeSheetView:Im,showMasterChemicalView:zi,showView:Ge,showWellView:St,updateWelcomeStats:vn},Symbol.toStringTag,{value:"Module"}));function Sb(){const n=document.getElementById("logoLink");n&&n.addEventListener("click",e=>{e.preventDefault(),document.querySelectorAll(".nav-item").forEach(s=>s.classList.remove("active")),S.currentSheet=null,S.currentWell=null,Ge("welcome"),vn();const t=document.getElementById("nav-dashboard");t&&pt(t)})}function Rb(){const n=document.getElementById("hamburgerBtn"),e=document.getElementById("sidebar");n&&e&&(n.addEventListener("click",()=>{e.classList.toggle("collapsed");const s=e.classList.contains("collapsed");localStorage.setItem("sidebarCollapsed",s?"true":"false")}),localStorage.getItem("sidebarCollapsed")==="true"&&e.classList.add("collapsed"))}function Am(){const n=document.getElementById("navTree");n.innerHTML="";const e=md("Home","home-section",[{id:"nav-dashboard",label:"Operations Dashboard",icon:"dashboard",action:()=>{Ge("welcome"),vn()}},{id:"nav-oil-chart",label:"Oil Production",icon:"oil",action:()=>ji()},{id:"nav-water-chart",label:"Water Production",icon:"water",action:()=>Wi()},{id:"nav-gas-chart",label:"Gas Production",icon:"gas",action:()=>qi()}]);n.appendChild(e);const t=md("Chemical Programs","chemical-section",[{id:"nav-master-chemical",label:"Master Chemical Sheet",icon:"chemical",action:()=>zi()},{id:"nav-fluid-levels",label:"Fluid Levels",icon:"fluidLevel",action:()=>Gi()}]);n.appendChild(t);const s=Ab();n.appendChild(s)}function md(n,e,t){const s=document.createElement("div");s.className="nav-section",s.id=e;const r=document.createElement("div");r.className="nav-section-header expanded",r.innerHTML=`
        <span class="nav-section-title">${n}</span>
        <span class="nav-section-chevron">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </span>
    `;const i=document.createElement("div");return i.className="nav-section-children visible",t.forEach(o=>{const l=Pb(o);i.appendChild(l)}),r.addEventListener("click",()=>{r.classList.toggle("expanded"),i.classList.toggle("visible")}),s.appendChild(r),s.appendChild(i),s}function Pb(n){const e=document.createElement("div");e.className="nav-section-item";const t={dashboard:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
           </svg>`,chemical:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.95137 3C7.53466 3 7.00572 4.75542 8 5.57453V10.1716C8 10.4368 7.89464 10.6911 7.70711 10.8787L2.87868 15.7071C2.31607 16.2697 2 17.0328 2 17.8284V18C2 19.6569 3.34315 21 5 21H19C20.6569 21 22 19.6569 22 18V17.8284C22 17.0328 21.6839 16.2697 21.1213 15.7071L16.2929 10.8787C16.1054 10.6911 16 10.4368 16 10.1716V5.57453C16.9943 4.75542 16.4653 3 15.0486 3H8.95137ZM16.5858 14H7.41421L9.12132 12.2929C9.68393 11.7303 10 10.9672 10 10.1716V5.2847C10 5.18797 9.99045 5.0927 9.97203 5H14.028C14.0096 5.0927 14 5.18797 14 5.2847V10.1716C14 10.9672 14.3161 11.7303 14.8787 12.2929L16.5858 14Z" fill="currentColor"/>
           </svg>`,fluidLevel:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
            <line x1="12" y1="16" x2="12" y2="12"></line>
           </svg>`,chart:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
           </svg>`},s=t[n.icon]||t.chart;e.innerHTML=`
        <div class="nav-item" id="${n.id}" data-tooltip="${n.label}">
            <span class="nav-item-icon">${s}</span>
            <span class="nav-item-label">${n.label}</span>
        </div>
    `;const r=e.querySelector(".nav-item");return r.addEventListener("click",i=>{i.stopPropagation(),pt(r),n.action()}),e}function Ab(){const n=document.createElement("div");n.className="nav-section",n.id="wells-section";const e=document.createElement("div");e.className="nav-section-header expanded",e.innerHTML=`
        <span class="nav-section-title">Wells</span>
        <span class="nav-section-chevron">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </span>
    `;const t=document.createElement("div");return t.className="nav-section-children visible",qe.filter(s=>!s.isChemicalSheet&&!s.isFluidLevelSheet).forEach(s=>{const r=Db(s);t.appendChild(r)}),e.addEventListener("click",()=>{e.classList.toggle("expanded"),t.classList.toggle("visible")}),n.appendChild(e),n.appendChild(t),n}function Db(n){const e=document.createElement("div");e.className="nav-gauge-sheet";const t=S.appData[n.id],s=t&&t._metadataLoaded,r=t&&t._wellsLoaded,i=r?t.wells.filter(g=>g.status!=="inactive"):[],o={cowden:3,bigmax:11,bigmax1h:1,southandrews:21,polaris:2,shusa:40,mwwemac:8,unit130:1,uls35h:4},l=S.metadataCache.wellCounts[n.id];let c=l!==void 0?l:i.length;c===0&&!r&&o[n.id]!==void 0&&(c=o[n.id]);let u="No data",d="not-uploaded";s&&(o[n.id]!==void 0?(u=o[n.id]+" wells",d="uploaded"):l!==void 0||r?(u=c+" wells",d="uploaded"):(u="Loading...",d="uploaded")),e.innerHTML=`
        <div class="nav-item" data-sheet-id="${n.id}">
            <span class="icon">&#9632;</span>
            <span class="nav-battery-name">${n.name}</span>
            <span class="upload-indicator ${d}">
                ${u}
            </span>
        </div>
        <div class="nav-children" id="sheet-children-${n.id}"></div>
    `;const h=e.querySelector(".nav-item"),m=e.querySelector(".nav-children");return h.addEventListener("click",async g=>{if(g.stopPropagation(),pt(h),bm(n.id),s&&!r){const _=h.querySelector(".upload-indicator");o[n.id]===void 0&&(_.textContent="Loading..."),await dr(n.id);const C=S.appData[n.id].wells.filter(k=>k.status!=="inactive");_.textContent=C.length+" wells",m.innerHTML="",C.forEach(k=>{const x=pd(k,n);m.appendChild(x)})}r&&i.length>0&&(h.classList.toggle("expanded"),m.classList.toggle("visible"))}),r&&i.length>0&&i.forEach(g=>{const _=pd(g,n);m.appendChild(_)}),e}function pd(n,e){const t=document.createElement("div");t.className="nav-well",t.innerHTML=`
        <div class="nav-item" data-well-id="${n.id}" data-sheet-id="${e.id}">
            <span class="status-dot active"></span>
            <span class="nav-well-name">${n.name}</span>
        </div>
    `;const s=t.querySelector(".nav-item");return s.addEventListener("click",r=>{r.stopPropagation(),pt(s),St(e.id,n.id)}),t}function pt(n){document.querySelectorAll(".nav-item").forEach(e=>e.classList.remove("active")),n.classList.add("active")}function mn(){Am(),vn()}const kb={id:"cowden",name:"Cowden",expectedFileName:"Cowden Gauge Sheet1.xlsx",wells:[{id:"601h",name:"Cowden 601H",oilCol:1,waterCol:2,gasCol:3},{id:"602h",name:"Cowden 602H",oilCol:7,waterCol:8,gasCol:9},{id:"angus",name:"Angus 7-18-1H",oilCol:13,waterCol:14,gasCol:15}],pressureConfig:{sheet:"Cowden",headerRowIndex:6,dateCol:0,wells:{"601h":{csg:28,tbg:29,fl:30,inj:31},"602h":{csg:33,tbg:34,fl:35,inj:40},angus:{csg:42,tbg:43,fl:44,inj:47}}},productionConfig:{sheet:"Cowden",headerRowIndex:6,dateCol:0,oilProdCol:24,waterProdCol:25,gasProdCol:26},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.wells.length>0&&this.applyPressureReadings(n,e.wells),e.batteryProduction=this.parseBatteryProduction(n),n.Sheets["Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=new Date;t.setHours(0,0,0,0);const s=this.wells.map(i=>({id:i.id,name:i.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let i=4;i<e.length;i++){const o=e[i];if(!o||!o[0])continue;const l=o[0];let c=null;if(l instanceof Date)c=l.toISOString().split("T")[0];else if(typeof l=="number"){const d=XLSX.SSF.parse_date_code(l);d&&(c=`${d.y}-${String(d.m).padStart(2,"0")}-${String(d.d).padStart(2,"0")}`)}else typeof l=="string"&&(c=l.split(" ")[0]);!c||new Date(c)>t||(r++,this.wells.forEach((d,h)=>{const m=this.parseNumber(o[d.oilCol]),g=this.parseNumber(o[d.waterCol]),_=this.parseNumber(o[d.gasCol]);(m!==null||g!==null||_!==null)&&(s[h].wellTests.push({date:c,oil:m,water:g,gas:_}),s[h].production.push({date:new Date(c),oil:m,water:g,gas:_}))}))}return s.forEach(i=>{i.wellTests.sort((o,l)=>new Date(l.date)-new Date(o.date)),i.wellTests=i.wellTests.slice(0,60),i.production.sort((o,l)=>o.date-l.date)}),{wells:s,rowCount:r}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const s=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!s||s.length===0)return[];const r=[],i=new Date;i.setHours(0,0,0,0);for(let o=e.headerRowIndex+2;o<s.length;o++){const l=s[o];if(!l)continue;const c=this.parseDate(l[e.dateCol]);if(!c||new Date(c)>i)continue;const d=this.parseNumber(l[e.oilProdCol]),h=this.parseNumber(l[e.waterProdCol]),m=e.gasProdCol!==null?this.parseNumber(l[e.gasProdCol]):null;(d!==null||h!==null||m!==null)&&r.push({date:new Date(c),oil:d,water:h,gas:m})}return r.sort((o,l)=>o.date-l.date),r},applyPressureReadings(n,e){const t=this.pressureConfig;if(!t)return;const s=n.Sheets[t.sheet];if(!s)return;const r=XLSX.utils.sheet_to_json(s,{header:1,defval:null});if(!r||r.length===0)return;const i={};e.forEach(l=>{i[l.id]=[]});const o=new Date;o.setHours(0,0,0,0);for(let l=t.headerRowIndex+1;l<r.length;l++){const c=r[l];if(!c)continue;const u=this.parseDate(c[t.dateCol]);!u||new Date(u)>o||Object.entries(t.wells).forEach(([h,m])=>{if(!i[h])return;const g=this.parseNumber(c[m.csg]),_=this.parseNumber(c[m.tbg]),w=this.parseNumber(c[m.fl]),C=this.parseNumber(c[m.inj]);(g!==null||_!==null||w!==null||C!==null)&&i[h].push({date:u,casingPsi:g,tubingPsi:_,flowlinePsi:w,injVol:C})})}e.forEach(l=>{const c=i[l.id]||[];c.sort((u,d)=>new Date(d.date)-new Date(u.date)),l.pressureReadings=c.slice(0,60)})},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[],s=new Date;s.setHours(0,0,0,0);for(let r=3;r<e.length;r++){const i=e[r];if(!i)continue;const o=i[1];if(!o)continue;let l=null;const c=i[0];if(c)if(c instanceof Date)l=c.toISOString().split("T")[0];else if(typeof c=="number"){const u=XLSX.SSF.parse_date_code(c);u&&(l=`${u.y}-${String(u.m).padStart(2,"0")}-${String(u.d).padStart(2,"0")}`)}else typeof c=="string"&&c.trim()&&(l=c.split(" ")[0]);l&&new Date(l)>s||t.push({date:l,ticketNum:String(o),tank:this.parseNumber(i[2]),ftTop:this.parseNumber(i[3]),inTop:this.parseNumber(i[4]),ftBttm:this.parseNumber(i[5]),inBttm:this.parseNumber(i[6]),calcVol:this.parseNumber(i[7]),vol:this.parseNumber(i[8]),gravity:this.parseNumber(i[9]),bsw:this.parseNumber(i[10])})}return t.sort((r,i)=>!r.date&&!i.date?0:r.date?i.date?new Date(i.date)-new Date(r.date):-1:1),t.slice(0,100)},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},Nb={id:"bigmax",name:"Big Max",expectedFileName:"Big Max Gauge Sheet.xlsx",wells:[{id:"bigmax-1-1",name:"Big Max 1 #1",oilCol:1,waterCol:2,gasCol:3,status:"active"},{id:"bigmax-4-1",name:"Big Max 4 #1",oilCol:7,waterCol:8,gasCol:9,status:"active"},{id:"bigmax-5-2",name:"Big Max 5 #2",oilCol:13,waterCol:14,gasCol:15,status:"active"},{id:"bigmax-11-1",name:"Big Max 11 #1",oilCol:19,waterCol:20,gasCol:21,status:"active"},{id:"bigmax-11-2",name:"Big Max 11 #2",oilCol:25,waterCol:26,gasCol:27,status:"active"},{id:"bigmax-12-1",name:"Big Max 12 #1",oilCol:31,waterCol:32,gasCol:33,status:"active"},{id:"bigmax-12-2",name:"Big Max 12 #2",oilCol:37,waterCol:38,gasCol:39,status:"active"},{id:"bigmax-13-3",name:"Big Max 13 #3",oilCol:43,waterCol:44,gasCol:45,status:"active"},{id:"bigmax-13-5",name:"Big Max 13 #5",oilCol:49,waterCol:50,gasCol:51,status:"active"},{id:"bigmax-14-4",name:"Big Max 14 #4",oilCol:55,waterCol:56,gasCol:57,status:"active"}],productionConfig:{sheet:"Total",headerRowIndex:6,dateCol:0,oilProdCol:1,waterProdCol:3,gasProdCol:2},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.batteryProduction=this.parseBatteryProduction(n),n.Sheets["Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=new Date;t.setHours(0,0,0,0);const s=this.wells.map(i=>({id:i.id,name:i.name,status:i.status||"active",wellType:i.wellType||"production",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let i=4;i<e.length;i++){const o=e[i];if(!o||!o[0])continue;const l=this.parseDate(o[0]);!l||new Date(l)>t||(r++,this.wells.forEach((u,d)=>{let h=this.parseNumber(o[u.oilCol]),m=this.parseNumber(o[u.waterCol]),g=this.parseNumber(o[u.gasCol]);(h!==null||m!==null||g!==null)&&(s[d].wellTests.push({date:l,oil:h,water:m,gas:g}),s[d].production.push({date:new Date(l),oil:h,water:m,gas:g}))}))}return s.forEach(i=>{i.wellTests.sort((o,l)=>new Date(l.date)-new Date(o.date)),i.wellTests=i.wellTests.slice(0,60),i.production.sort((o,l)=>o.date-l.date)}),{wells:s,rowCount:r}},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[],s=new Date;s.setHours(0,0,0,0);for(let r=3;r<e.length;r++){const i=e[r];if(!i||!i[1])continue;const o=this.parseDate(i[0]);o&&new Date(o)>s||t.push({date:o,ticketNum:String(i[1]||""),tank:this.parseNumber(i[2]),ftTop:this.parseNumber(i[3]),inTop:this.parseNumber(i[4]),ftBttm:this.parseNumber(i[5]),inBttm:this.parseNumber(i[6]),vol:this.parseNumber(i[8])})}return t.sort((r,i)=>(i.date||"").localeCompare(r.date||"")),t.slice(0,100)},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const s=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!s||s.length===0)return[];const r=[],i=new Date;i.setHours(0,0,0,0);for(let o=e.headerRowIndex+2;o<s.length;o++){const l=s[o];if(!l)continue;const c=this.parseDate(l[e.dateCol]);if(!c||new Date(c)>i)continue;const d=this.parseNumber(l[e.oilProdCol]),h=this.parseNumber(l[e.waterProdCol]),m=e.gasProdCol!==null?this.parseNumber(l[e.gasProdCol]):null;(d!==null||h!==null||m!==null)&&r.push({date:new Date(c),oil:d,water:h,gas:m})}return r.sort((o,l)=>o.date-l.date),r},parseDate(n){if(!n)return null;if(n instanceof Date){const e=n.getFullYear(),t=String(n.getMonth()+1).padStart(2,"0"),s=String(n.getDate()).padStart(2,"0");return`${e}-${t}-${s}`}if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},Lb={id:"bigmax1h",name:"Big Max 1H",expectedFileName:"Big Max 1H Gauge Sheet.xlsx",wells:[{id:"bigmax-1-1h",name:"Big Max 1-1H",oilCol:1,waterCol:2,gasCol:3}],productionConfig:{sheet:"Big Max 1H",headerRowIndex:6,dateCol:0,oilProdCol:21,waterProdCol:22,gasProdCol:23},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.batteryProduction=this.parseBatteryProduction(n),n.Sheets["Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=new Date;t.setHours(0,0,0,0);const s=this.wells.map(i=>({id:i.id,name:i.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let i=4;i<e.length;i++){const o=e[i];if(!o||!o[0])continue;const l=this.parseDate(o[0]);!l||new Date(l)>t||(r++,this.wells.forEach((u,d)=>{const h=this.parseNumber(o[u.oilCol]),m=this.parseNumber(o[u.waterCol]),g=this.parseNumber(o[u.gasCol]);(h!==null||m!==null||g!==null)&&(s[d].wellTests.push({date:l,oil:h,water:m,gas:g}),s[d].production.push({date:new Date(l),oil:h,water:m,gas:g}))}))}return s.forEach(i=>{i.wellTests.sort((o,l)=>new Date(l.date)-new Date(o.date)),i.wellTests=i.wellTests.slice(0,60),i.production.sort((o,l)=>o.date-l.date)}),{wells:s,rowCount:r}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const s=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!s||s.length===0)return[];const r=[],i=new Date;i.setHours(0,0,0,0);for(let o=e.headerRowIndex+2;o<s.length;o++){const l=s[o];if(!l)continue;const c=this.parseDate(l[e.dateCol]);if(!c||new Date(c)>i)continue;const d=this.parseNumber(l[e.oilProdCol]),h=this.parseNumber(l[e.waterProdCol]),m=e.gasProdCol!==null?this.parseNumber(l[e.gasProdCol]):null;(d!==null||h!==null||m!==null)&&r.push({date:new Date(c),oil:d,water:h,gas:m})}return r.sort((o,l)=>o.date-l.date),r},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[],s=new Date;s.setHours(0,0,0,0);for(let r=3;r<e.length;r++){const i=e[r];if(!i||!i[1])continue;const o=this.parseDate(i[0]);o&&new Date(o)>s||t.push({date:o,ticketNum:String(i[1]||""),tank:this.parseNumber(i[2]),ftTop:this.parseNumber(i[3]),inTop:this.parseNumber(i[4]),ftBttm:this.parseNumber(i[5]),inBttm:this.parseNumber(i[6]),vol:this.parseNumber(i[8])})}return t.sort((r,i)=>(i.date||"").localeCompare(r.date||"")),t.slice(0,100)},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},xb={id:"southandrews",name:"South Andrews",expectedFileName:"South Andrews Gauge Sheet.xlsm",wellsPg1:[{id:"uls-1-30-6h",name:"1-30-6H",oilCol:1,waterCol:2,gasCol:3},{id:"uls-1-30-8h",name:"1-30-8H",oilCol:7,waterCol:8,gasCol:9},{id:"uls-1-31-2h",name:"1-31-2H",oilCol:13,waterCol:14,gasCol:15},{id:"uls-1-36-1h",name:"1-36-1H",oilCol:19,waterCol:20,gasCol:21},{id:"uls-1-36-2h",name:"1-36-2H",oilCol:25,waterCol:26,gasCol:27},{id:"uls-1-36-3h",name:"1-36-3H",oilCol:31,waterCol:32,gasCol:33},{id:"uls-1-36-4h",name:"1-36-4H",oilCol:37,waterCol:38,gasCol:39},{id:"uls-1-36-5h",name:"1-36-5H",oilCol:43,waterCol:44,gasCol:45},{id:"uls-1-36-6h",name:"1-36-6H",oilCol:49,waterCol:50,gasCol:51},{id:"uls-1-37-1h",name:"1-37-1H",oilCol:55,waterCol:56,gasCol:57},{id:"uls-1-37-3h",name:"1-37-3H",oilCol:61,waterCol:62,gasCol:63},{id:"uls-1-37-4h",name:"1-37-4H",oilCol:67,waterCol:68,gasCol:69},{id:"uls-1-37-6h",name:"1-37-6H",oilCol:73,waterCol:74,gasCol:75}],wellsPg2:[{id:"cobra-5h",name:"Cobra 5H",oilCol:1,waterCol:2,gasCol:3,status:"active"},{id:"cobra-3012",name:"Cobra 3012",oilCol:7,waterCol:8,gasCol:9,status:"active"},{id:"cobra-3033",name:"Cobra 3033",oilCol:13,waterCol:14,gasCol:15,status:"active"},{id:"fn-3731",name:"FN 3731",oilCol:19,waterCol:20,gasCol:21,status:"active"},{id:"pinnacle-1",name:"Pinnacle #1",oilCol:25,waterCol:26,gasCol:27,status:"active"},{id:"pinnacle-2h",name:"Pinnacle 2H",oilCol:31,waterCol:32,gasCol:33,status:"active"},{id:"sawgrass-2h",name:"Sawgrass 2H",oilCol:37,waterCol:38,gasCol:39,status:"inactive"},{id:"sawgrass-5h",name:"Sawgrass 5H",oilCol:43,waterCol:44,gasCol:45,status:"active"}],pressureConfig:[{sheet:"36-4H",headerRowIndex:8,dateCol:0,wells:{"uls-1-36-1h":{csg:61,tbg:62,fl:63,inj:64},"uls-1-36-2h":{csg:68,tbg:69,fl:70,inj:71},"uls-1-36-3h":{csg:73,tbg:74,fl:75,inj:76},"uls-1-36-4h":{csg:78,tbg:79,fl:80,inj:81},"uls-1-36-5h":{csg:86,tbg:87,fl:88,inj:89},"uls-1-36-6h":{csg:91,tbg:92,fl:93,inj:94},"uls-1-37-1h":{csg:96,tbg:97,fl:98,inj:99},"uls-1-37-3h":{csg:101,tbg:102,fl:103,inj:104}}},{sheet:"37-6H",headerRowIndex:8,dateCol:0,wells:{"uls-1-31-2h":{csg:34,tbg:35,fl:36,inj:37},"uls-1-37-4h":{csg:39,tbg:40,fl:41,inj:42},"uls-1-37-6h":{csg:44,tbg:45,fl:46,inj:47},"uls-1-30-6h":{csg:49,tbg:50,fl:51,inj:52},"uls-1-30-8h":{csg:54,tbg:55,fl:56,inj:57}}}],productionConfig:[{sheet:"36-4H",headerRowIndex:8,dateCol:0,oilProdCol:56,waterProdCol:57,gasProdCol:58},{sheet:"37-6H",headerRowIndex:8,dateCol:0,oilProdCol:29,waterProdCol:30,gasProdCol:31}],parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test pg1"]){const t=this.parseWellTestSheet(n.Sheets["Well Test pg1"],this.wellsPg1);e.wells.push(...t.wells),e.rawRowCount=t.rowCount}if(n.Sheets["Well Test pg2"]){const t=this.parseWellTestSheet(n.Sheets["Well Test pg2"],this.wellsPg2);e.wells.push(...t.wells)}return e.wells.length>0&&this.applyPressureReadings(n,e.wells),e.batteryProduction=this.parseBatteryProduction(n),["36-4H Tickets","37-6H Tickets","36 6H Tickets"].forEach(t=>{if(n.Sheets[t]){const s=this.parseRunTicketsSheet(n.Sheets[t]);e.runTickets.push(...s)}}),e.runTickets.sort((t,s)=>(s.date||"").localeCompare(t.date||"")),e.runTickets=e.runTickets.slice(0,100),e},parseWellTestSheet(n,e){const t=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),s=new Date;s.setHours(0,0,0,0);const r=e.map(o=>({id:o.id,name:o.name,status:o.status||"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let i=0;for(let o=4;o<t.length;o++){const l=t[o];if(!l||!l[0])continue;const c=this.parseDate(l[0]);!c||new Date(c)>s||(i++,e.forEach((d,h)=>{const m=this.parseNumber(l[d.oilCol]),g=this.parseNumber(l[d.waterCol]),_=this.parseNumber(l[d.gasCol]);(m!==null||g!==null||_!==null)&&(r[h].wellTests.push({date:c,oil:m,water:g,gas:_}),r[h].production.push({date:new Date(c),oil:m,water:g,gas:_}))}))}return r.forEach(o=>{o.wellTests.sort((l,c)=>new Date(c.date)-new Date(l.date)),o.wellTests=o.wellTests.slice(0,60),o.production.sort((l,c)=>l.date-c.date)}),{wells:r,rowCount:i}},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[],s=new Date;s.setHours(0,0,0,0);for(let r=3;r<e.length;r++){const i=e[r];if(!i||!i[1])continue;const o=this.parseDate(i[0]);o&&new Date(o)>s||t.push({date:o,ticketNum:String(i[1]||""),tank:this.parseNumber(i[2]),ftTop:this.parseNumber(i[3]),inTop:this.parseNumber(i[4]),ftBttm:this.parseNumber(i[5]),inBttm:this.parseNumber(i[6]),vol:this.parseNumber(i[8])})}return t},parseBatteryProduction(n){const e=new Map,t=new Date;t.setHours(0,0,0,0),this.productionConfig.forEach(r=>{const i=n.Sheets[r.sheet];if(!i)return;const o=XLSX.utils.sheet_to_json(i,{header:1,defval:null});if(!(!o||o.length===0))for(let l=r.headerRowIndex+2;l<o.length;l++){const c=o[l];if(!c)continue;const u=this.parseDate(c[r.dateCol]);if(!u||new Date(u)>t)continue;const h=this.parseNumber(c[r.oilProdCol]),m=this.parseNumber(c[r.waterProdCol]),g=r.gasProdCol!==null?this.parseNumber(c[r.gasProdCol]):null;if(h!==null||m!==null||g!==null){const _=e.get(u);_?(_.oil=(_.oil||0)+(h||0),_.water=(_.water||0)+(m||0),_.gas=(_.gas||0)+(g||0)):e.set(u,{date:new Date(u),oil:h||0,water:m||0,gas:g||0})}}});const s=Array.from(e.values());return s.sort((r,i)=>r.date-i.date),s},applyPressureReadings(n,e){const t={};e.forEach(i=>{t[i.id]=i,i.pressureReadings=[]});const s={};Object.keys(t).forEach(i=>{s[i]=[]});const r=new Date;r.setHours(0,0,0,0),this.pressureConfig.forEach(i=>{const o=n.Sheets[i.sheet];if(!o)return;const l=XLSX.utils.sheet_to_json(o,{header:1,defval:null});if(!(!l||l.length===0))for(let c=i.headerRowIndex+1;c<l.length;c++){const u=l[c];if(!u)continue;const d=this.parseDate(u[i.dateCol]);!d||new Date(d)>r||Object.entries(i.wells).forEach(([m,g])=>{if(!s[m])return;const _=this.parseNumber(u[g.csg]),w=this.parseNumber(u[g.tbg]),C=this.parseNumber(u[g.fl]),k=this.parseNumber(u[g.inj]);(_!==null||w!==null||C!==null||k!==null)&&s[m].push({date:d,casingPsi:_,tubingPsi:w,flowlinePsi:C,injVol:k})})}}),e.forEach(i=>{const o=s[i.id]||[];o.sort((l,c)=>new Date(c.date)-new Date(l.date)),i.pressureReadings=o.slice(0,60)})},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},Ob={id:"polaris",name:"Polaris",expectedFileName:"Polaris Gauge Sheet.xlsx",wells:[{id:"polaris-1",name:"Polaris #1",oilCol:1,waterCol:2,gasCol:null,status:"active"},{id:"polaris-2",name:"Polaris #2",oilCol:5,waterCol:6,gasCol:null,status:"inactive"}],productionConfig:{sheet:"Polaris 1",headerRowIndex:3,dateCol:0,oilProdCol:16,waterProdCol:17,gasProdCol:14,gasMeterType:"cumulative"},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.batteryProduction=this.parseBatteryProduction(n),n.Sheets["Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=new Date;t.setHours(0,0,0,0);const s=this.wells.map(i=>({id:i.id,name:i.name,status:i.status||"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let i=4;i<e.length;i++){const o=e[i];if(!o||!o[0])continue;const l=this.parseDate(o[0]);!l||new Date(l)>t||(r++,this.wells.forEach((u,d)=>{const h=this.parseNumber(o[u.oilCol]),m=this.parseNumber(o[u.waterCol]),g=this.parseNumber(o[u.gasCol]);(h!==null||m!==null||g!==null)&&(s[d].wellTests.push({date:l,oil:h,water:m,gas:g}),s[d].production.push({date:new Date(l),oil:h,water:m,gas:g}))}))}return s.forEach(i=>{i.wellTests.sort((o,l)=>new Date(l.date)-new Date(o.date)),i.wellTests=i.wellTests.slice(0,60),i.production.sort((o,l)=>o.date-l.date)}),{wells:s,rowCount:r}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const s=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!s||s.length===0)return[];const r=[],i=new Date;i.setHours(0,0,0,0);const o=[];for(let l=e.headerRowIndex+2;l<s.length;l++){const c=s[l];if(!c)continue;const u=this.parseDate(c[e.dateCol]);if(!u||new Date(u)>i)continue;const h=this.parseNumber(c[e.oilProdCol]),m=this.parseNumber(c[e.waterProdCol]),g=e.gasProdCol!==null?this.parseNumber(c[e.gasProdCol]):null;o.push({date:new Date(u),oil:h,water:m,gasMeter:g})}o.sort((l,c)=>l.date-c.date);for(let l=0;l<o.length;l++){const c=o[l];let u=null;if(e.gasMeterType==="cumulative"&&c.gasMeter!==null&&l>0){const d=o[l-1];if(d.gasMeter!==null){const h=c.gasMeter-d.gasMeter;h>0&&(u=h)}}else e.gasMeterType!=="cumulative"&&(u=c.gasMeter);(c.oil!==null||c.water!==null||u!==null)&&r.push({date:c.date,oil:c.oil,water:c.water,gas:u})}return r},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[],s=new Date;s.setHours(0,0,0,0);for(let r=3;r<e.length;r++){const i=e[r];if(!i||!i[1])continue;const o=this.parseDate(i[0]);o&&new Date(o)>s||t.push({date:o,ticketNum:String(i[1]||""),tank:this.parseNumber(i[2]),ftTop:this.parseNumber(i[3]),inTop:this.parseNumber(i[4]),ftBttm:this.parseNumber(i[5]),inBttm:this.parseNumber(i[6]),vol:this.parseNumber(i[8])})}return t.sort((r,i)=>(i.date||"").localeCompare(r.date||"")),t.slice(0,100)},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},Mb={id:"shusa",name:"Shusa",expectedFileName:"Shusa Gauge Sheet.xlsx",wells20RB:[{id:"shusa-20-1",name:"Shusa 20 #1",oilCol:1,waterCol:2,gasCol:null},{id:"shusa-20-2",name:"Shusa 20 #2",oilCol:5,waterCol:6,gasCol:null},{id:"shusa-20-3",name:"Shusa 20 #3",oilCol:9,waterCol:10,gasCol:null},{id:"shusa-20-4",name:"Shusa 20 #4",oilCol:13,waterCol:14,gasCol:null},{id:"shusa-20-5",name:"Shusa 20 #5",oilCol:17,waterCol:18,gasCol:null},{id:"rosebud-20-1",name:"Rosebud 20 #1",oilCol:21,waterCol:22,gasCol:null},{id:"rosebud-20-3",name:"Rosebud 20 #3",oilCol:25,waterCol:26,gasCol:null},{id:"rosebud-20-4",name:"Rosebud 20 #4",oilCol:29,waterCol:30,gasCol:null},{id:"rosebud-yates-1",name:"Rosebud-Yates #1",oilCol:33,waterCol:34,gasCol:35},{id:"link-2",name:"Link #2",oilCol:39,waterCol:40,gasCol:null},{id:"link-3",name:"Link #3",oilCol:43,waterCol:44,gasCol:null},{id:"link-4",name:"Link #4",oilCol:47,waterCol:48,gasCol:null},{id:"link-5",name:"Link #5",oilCol:51,waterCol:52,gasCol:null},{id:"link-6",name:"Link #6",oilCol:55,waterCol:56,gasCol:null}],productionConfig:{sheet:"Total",headerRowIndex:2,dateCol:0,oilProdCol:2,waterProdCol:3,gasProdCol:null},wells1415:[{id:"shusa-14-1",name:"Shusa 14 #1",oilCol:4,waterCol:5,gasCol:null},{id:"shusa-14-2",name:"Shusa 14 #2",oilCol:8,waterCol:9,gasCol:null},{id:"shusa-14-3",name:"Shusa 14 #3",oilCol:12,waterCol:13,gasCol:null},{id:"shusa-14-4",name:"Shusa 14 #4",oilCol:16,waterCol:17,gasCol:null},{id:"shusa-14-5",name:"Shusa 14 #5",oilCol:20,waterCol:21,gasCol:null},{id:"shusa-14-6",name:"Shusa 14 #6",oilCol:24,waterCol:25,gasCol:null},{id:"shusa-14-7",name:"Shusa 14 #7",oilCol:28,waterCol:29,gasCol:null},{id:"shusa-14-8",name:"Shusa 14 #8",oilCol:32,waterCol:33,gasCol:null},{id:"shusa-14-9",name:"Shusa 14 #9",oilCol:36,waterCol:37,gasCol:null},{id:"shusa-14-10",name:"Shusa 14 #10",oilCol:40,waterCol:41,gasCol:null},{id:"shusa-14-12",name:"Shusa 14 #12",oilCol:44,waterCol:45,gasCol:null},{id:"shusa-15-1",name:"Shusa 15 #1",oilCol:48,waterCol:49,gasCol:null},{id:"shusa-15-2",name:"Shusa 15 #2",oilCol:52,waterCol:53,gasCol:null},{id:"shusa-15-3",name:"Shusa 15 #3",oilCol:56,waterCol:57,gasCol:null},{id:"shusa-15-4",name:"Shusa 15 #4",oilCol:60,waterCol:61,gasCol:null},{id:"shusa-15-6",name:"Shusa 15 #6",oilCol:64,waterCol:65,gasCol:null},{id:"shusa-15-7",name:"Shusa 15 #7",oilCol:68,waterCol:69,gasCol:null},{id:"shusa-15-8",name:"Shusa 15 #8",oilCol:72,waterCol:73,gasCol:null},{id:"shusa-15-9",name:"Shusa 15 #9",oilCol:76,waterCol:77,gasCol:null},{id:"shusa-15-10",name:"Shusa 15 #10",oilCol:80,waterCol:81,gasCol:null},{id:"shusa-15-11",name:"Shusa 15 #11",oilCol:84,waterCol:85,gasCol:null},{id:"shusa-15-12",name:"Shusa 15 #12",oilCol:88,waterCol:89,gasCol:null},{id:"shusa-15-13",name:"Shusa 15 #13",oilCol:92,waterCol:93,gasCol:null},{id:"shusa-15-14",name:"Shusa 15 #14",oilCol:96,waterCol:97,gasCol:null},{id:"shusa-15-15",name:"Shusa 15 #15",oilCol:100,waterCol:101,gasCol:null},{id:"shusa-15-16",name:"Shusa 15 #16",oilCol:104,waterCol:105,gasCol:null}],parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test 20 RB Link"]){const t=this.parseWellTestSheet(n.Sheets["Well Test 20 RB Link"],this.wells20RB);e.wells.push(...t.wells),e.rawRowCount=t.rowCount}if(n.Sheets["Well Test 14 15"]){const t=this.parseWellTestSheet(n.Sheets["Well Test 14 15"],this.wells1415);e.wells.push(...t.wells)}return e.batteryProduction=this.parseBatteryProduction(n),["14-15 Run Tickets","20-RB Run Tickets","Link Run Tickets","Yates Run Tickets"].forEach(t=>{if(n.Sheets[t]){const s=this.parseRunTicketsSheet(n.Sheets[t]);e.runTickets.push(...s)}}),e.runTickets.sort((t,s)=>(s.date||"").localeCompare(t.date||"")),e.runTickets=e.runTickets.slice(0,100),e},parseWellTestSheet(n,e){const t=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),s=new Date;s.setHours(0,0,0,0);const r=e.map(o=>({id:o.id,name:o.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let i=0;for(let o=4;o<t.length;o++){const l=t[o];if(!l||!l[0])continue;const c=this.parseDate(l[0]);!c||new Date(c)>s||(i++,e.forEach((d,h)=>{const m=this.parseNumber(l[d.oilCol]),g=this.parseNumber(l[d.waterCol]),_=d.gasCol!==null?this.parseNumber(l[d.gasCol]):null;(m!==null||g!==null||_!==null)&&(r[h].wellTests.push({date:c,oil:m,water:g,gas:_}),r[h].production.push({date:new Date(c),oil:m,water:g,gas:_}))}))}return r.forEach(o=>{o.wellTests.sort((l,c)=>new Date(c.date)-new Date(l.date)),o.wellTests=o.wellTests.slice(0,60),o.production.sort((l,c)=>l.date-c.date)}),{wells:r,rowCount:i}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const s=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!s||s.length===0)return[];const r=[],i=new Date;i.setHours(0,0,0,0);for(let o=e.headerRowIndex+2;o<s.length;o++){const l=s[o];if(!l)continue;const c=this.parseDate(l[e.dateCol]);if(!c||new Date(c)>i)continue;const d=this.parseNumber(l[e.oilProdCol]),h=this.parseNumber(l[e.waterProdCol]),m=e.gasProdCol!==null?this.parseNumber(l[e.gasProdCol]):null;(d!==null||h!==null||m!==null)&&r.push({date:new Date(c),oil:d,water:h,gas:m})}return r.sort((o,l)=>o.date-l.date),r},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[],s=new Date;s.setHours(0,0,0,0);for(let r=3;r<e.length;r++){const i=e[r];if(!i||!i[1])continue;const o=this.parseDate(i[0]);o&&new Date(o)>s||t.push({date:o,ticketNum:String(i[1]||""),tank:this.parseNumber(i[2]),ftTop:this.parseNumber(i[3]),inTop:this.parseNumber(i[4]),ftBttm:this.parseNumber(i[5]),inBttm:this.parseNumber(i[6]),vol:this.parseNumber(i[8])})}return t},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},Vb={id:"mwwemac",name:"MW-Wemac-Sabrina-Berkley",expectedFileName:"Mw-Wemac-Sabrina-Berkley.xlsx",wells:[{id:"berkley-1",name:"Berkley #1",oilCol:1,waterCol:2,gasCol:3,status:"active"},{id:"berkley-4",name:"Berkley #4",oilCol:7,waterCol:8,gasCol:9,status:"inactive"},{id:"berkley-5",name:"Berkley #5",oilCol:13,waterCol:14,gasCol:15,status:"active"},{id:"berkley-6",name:"Berkley #6",oilCol:19,waterCol:20,gasCol:21,status:"active"},{id:"sabrina-5",name:"Sabrina #5",oilCol:25,waterCol:26,gasCol:27,status:"inactive"},{id:"miles-1",name:"Miles #1",oilCol:31,waterCol:32,gasCol:null,status:"active"},{id:"wemac-6",name:"Wemac #6",oilCol:35,waterCol:36,gasCol:null,status:"active"},{id:"mandw-1r",name:"M&W #1R",oilCol:39,waterCol:40,gasCol:null,status:"active"},{id:"jane-2",name:"Jane #2",oilCol:43,waterCol:44,gasCol:null,status:"active"}],productionConfig:{sheet:"Berkley",headerRowIndex:3,dateCol:0,oilProdCol:25,waterProdCol:26,gasProdCol:27},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets.Well_Test){const t=this.parseWellTestSheet(n.Sheets.Well_Test);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.batteryProduction=this.parseBatteryProduction(n),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=new Date;t.setHours(0,0,0,0);const s=this.wells.map(i=>({id:i.id,name:i.name,status:i.status||"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let i=4;i<e.length;i++){const o=e[i];if(!o||!o[0])continue;const l=this.parseDate(o[0]);!l||new Date(l)>t||(r++,this.wells.forEach((u,d)=>{const h=this.parseNumber(o[u.oilCol]),m=this.parseNumber(o[u.waterCol]),g=this.parseNumber(o[u.gasCol]);(h!==null||m!==null||g!==null)&&(s[d].wellTests.push({date:l,oil:h,water:m,gas:g}),s[d].production.push({date:new Date(l),oil:h,water:m,gas:g}))}))}return s.forEach(i=>{i.wellTests.sort((o,l)=>new Date(l.date)-new Date(o.date)),i.wellTests=i.wellTests.slice(0,60),i.production.sort((o,l)=>o.date-l.date)}),{wells:s,rowCount:r}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const s=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!s||s.length===0)return[];const r=[],i=new Date;i.setHours(0,0,0,0);for(let o=e.headerRowIndex+2;o<s.length;o++){const l=s[o];if(!l)continue;const c=this.parseDate(l[e.dateCol]);if(!c||new Date(c)>i)continue;const d=this.parseNumber(l[e.oilProdCol]),h=this.parseNumber(l[e.waterProdCol]),m=e.gasProdCol!==null?this.parseNumber(l[e.gasProdCol]):null;(d!==null||h!==null||m!==null)&&r.push({date:new Date(c),oil:d,water:h,gas:m})}return r.sort((o,l)=>o.date-l.date),r},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},Bb={id:"unit130",name:"1-30 Unit 1H",expectedFileName:"1-30 Unit 1H Gauge Sheet.xlsx",wells:[{id:"uls-1-30-1h",name:"ULS 1-30-1H",oilCol:1,waterCol:2,gasCol:3}],pressureConfig:{sheet:"1-30-1H Gauge Sheet",headerRowIndex:5,dateCol:0,wells:{"uls-1-30-1h":{csg:37,tbg:38,fl:null,inj:39}}},productionConfig:{sheet:"1-30-1H Gauge Sheet",headerRowIndex:5,dateCol:0,oilProdCol:30,waterProdCol:31,gasProdCol:32},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.wells.length>0&&this.applyPressureReadings(n,e.wells),e.batteryProduction=this.parseBatteryProduction(n),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=this.wells.map(r=>({id:r.id,name:r.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let s=0;for(let r=4;r<e.length;r++){const i=e[r];if(!i||!i[0])continue;const o=this.parseDate(i[0]);o&&(s++,this.wells.forEach((l,c)=>{const u=this.parseNumber(i[l.oilCol]),d=this.parseNumber(i[l.waterCol]),h=this.parseNumber(i[l.gasCol]);(u!==null||d!==null||h!==null)&&(t[c].wellTests.push({date:o,oil:u,water:d,gas:h}),t[c].production.push({date:new Date(o),oil:u,water:d,gas:h}))}))}return t.forEach(r=>{r.wellTests.sort((i,o)=>new Date(o.date)-new Date(i.date)),r.wellTests=r.wellTests.slice(0,60),r.production.sort((i,o)=>i.date-o.date)}),{wells:t,rowCount:s}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const s=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!s||s.length===0)return[];const r=[];for(let i=e.headerRowIndex+2;i<s.length;i++){const o=s[i];if(!o)continue;const l=this.parseDate(o[e.dateCol]);if(!l)continue;const c=this.parseNumber(o[e.oilProdCol]),u=this.parseNumber(o[e.waterProdCol]),d=e.gasProdCol!==null?this.parseNumber(o[e.gasProdCol]):null;(c!==null||u!==null||d!==null)&&r.push({date:new Date(l),oil:c,water:u,gas:d})}return r.sort((i,o)=>i.date-o.date),r},applyPressureReadings(n,e){const t=this.pressureConfig;if(!t)return;const s=n.Sheets[t.sheet];if(!s)return;const r=XLSX.utils.sheet_to_json(s,{header:1,defval:null});if(!r||r.length===0)return;const i={};e.forEach(o=>{i[o.id]=[]});for(let o=t.headerRowIndex+1;o<r.length;o++){const l=r[o];if(!l)continue;const c=this.parseDate(l[t.dateCol]);c&&Object.entries(t.wells).forEach(([u,d])=>{if(!i[u])return;const h=this.parseNumber(l[d.csg]),m=this.parseNumber(l[d.tbg]),g=d.fl===null?null:this.parseNumber(l[d.fl]),_=this.parseNumber(l[d.inj]);(h!==null||m!==null||g!==null||_!==null)&&i[u].push({date:c,casingPsi:h,tubingPsi:m,flowlinePsi:g,injVol:_})})}e.forEach(o=>{const l=i[o.id]||[];l.sort((c,u)=>new Date(u.date)-new Date(c.date)),o.pressureReadings=l.slice(0,60)})},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},Fb={id:"uls35h",name:"ULS 3-5H",expectedFileName:"ULS 3-5H Gauge Sheet.xlsx",wells:[{id:"uls-1-3-1h",name:"ULS 1-3-1H",oilCol:1,waterCol:2,gasCol:3},{id:"uls-1-3-3h",name:"ULS 1-3-3H",oilCol:7,waterCol:8,gasCol:9},{id:"uls-1-3-5h",name:"ULS 1-3-5H",oilCol:13,waterCol:14,gasCol:15},{id:"uls-1-3-7h",name:"ULS 1-3-7H",oilCol:19,waterCol:20,gasCol:21}],pressureConfig:{sheet:"University 3-5H",headerRowIndex:3,dateCol:0,wells:{"uls-1-3-1h":{csg:34,tbg:35,fl:36,inj:37},"uls-1-3-3h":{csg:39,tbg:40,fl:41,inj:42},"uls-1-3-5h":{csg:46,tbg:47,fl:48,inj:49},"uls-1-3-7h":{csg:51,tbg:52,fl:53,inj:54}}},productionConfig:{sheet:"University 3-5H",headerRowIndex:3,dateCol:0,oilProdCol:30,waterProdCol:31,gasProdCol:32},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.wells.length>0&&this.applyPressureReadings(n,e.wells),e.batteryProduction=this.parseBatteryProduction(n),n.Sheets["3-5H Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["3-5H Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=new Date;t.setHours(0,0,0,0);const s=this.wells.map(i=>({id:i.id,name:i.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let i=4;i<e.length;i++){const o=e[i];if(!o||!o[0])continue;const l=this.parseDate(o[0]);!l||new Date(l)>t||(r++,this.wells.forEach((u,d)=>{const h=this.parseNumber(o[u.oilCol]),m=this.parseNumber(o[u.waterCol]),g=this.parseNumber(o[u.gasCol]);(h!==null||m!==null||g!==null)&&(s[d].wellTests.push({date:l,oil:h,water:m,gas:g}),s[d].production.push({date:new Date(l),oil:h,water:m,gas:g}))}))}return s.forEach(i=>{i.wellTests.sort((o,l)=>new Date(l.date)-new Date(o.date)),i.wellTests=i.wellTests.slice(0,60),i.production.sort((o,l)=>o.date-l.date)}),{wells:s,rowCount:r}},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[],s=new Date;s.setHours(0,0,0,0);for(let r=3;r<e.length;r++){const i=e[r];if(!i||!i[1])continue;const o=this.parseDate(i[0]);o&&new Date(o)>s||t.push({date:o,ticketNum:String(i[1]||""),tank:this.parseNumber(i[2]),ftTop:this.parseNumber(i[3]),inTop:this.parseNumber(i[4]),ftBttm:this.parseNumber(i[5]),inBttm:this.parseNumber(i[6]),vol:this.parseNumber(i[8])})}return t.sort((r,i)=>(i.date||"").localeCompare(r.date||"")),t.slice(0,100)},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const s=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!s||s.length===0)return[];const r=[],i=new Date;i.setHours(0,0,0,0);for(let o=e.headerRowIndex+2;o<s.length;o++){const l=s[o];if(!l)continue;const c=this.parseDate(l[e.dateCol]);if(!c||new Date(c)>i)continue;const d=this.parseNumber(l[e.oilProdCol]),h=this.parseNumber(l[e.waterProdCol]),m=e.gasProdCol!==null?this.parseNumber(l[e.gasProdCol]):null;(d!==null||h!==null||m!==null)&&r.push({date:new Date(c),oil:d,water:h,gas:m})}return r.sort((o,l)=>o.date-l.date),r},applyPressureReadings(n,e){const t=this.pressureConfig;if(!t)return;const s=n.Sheets[t.sheet];if(!s)return;const r=XLSX.utils.sheet_to_json(s,{header:1,defval:null});if(!r||r.length===0)return;const i={};e.forEach(l=>{i[l.id]=[]});const o=new Date;o.setHours(0,0,0,0);for(let l=t.headerRowIndex+1;l<r.length;l++){const c=r[l];if(!c)continue;const u=this.parseDate(c[t.dateCol]);!u||new Date(u)>o||Object.entries(t.wells).forEach(([h,m])=>{if(!i[h])return;const g=this.parseNumber(c[m.csg]),_=this.parseNumber(c[m.tbg]),w=this.parseNumber(c[m.fl]),C=this.parseNumber(c[m.inj]);(g!==null||_!==null||w!==null||C!==null)&&i[h].push({date:u,casingPsi:g,tubingPsi:_,flowlinePsi:w,injVol:C})})}e.forEach(l=>{const c=i[l.id]||[];c.sort((u,d)=>new Date(d.date)-new Date(u.date)),l.pressureReadings=c.slice(0,60)})},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},Ub={id:"master-chemical",name:"Master Chemical Sheet",expectedFileName:"Master Chemical Sheet.xlsx",parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),chemicalPrograms:[],rawRowCount:0};let t=n.Sheets["MASTER SHEET"];if(t){const s=this.parseNewFormat(t);return e.chemicalPrograms=s.programs,e.rawRowCount=s.rowCount,e}if(t=n.Sheets.Sheet1,t){const s=this.parseOldFormat(t);return e.chemicalPrograms=s.programs,e.rawRowCount=s.rowCount,e}return console.error("No valid sheet found in Master Chemical Sheet (tried MASTER SHEET and Sheet1)"),e},parseNewFormat(n){const e=XLSX.utils.decode_range(n["!ref"]),t=[];let s=0;const r={};for(let o=e.s.c;o<=e.e.c;o++){const l=n[XLSX.utils.encode_cell({r:0,c:o})],c=n[XLSX.utils.encode_cell({r:1,c:o})];if(c&&c.v){const u=String(c.v).trim();let d=null;if(l&&l.v)d=String(l.v).trim();else for(let h=o-1;h>=e.s.c;h--){const m=n[XLSX.utils.encode_cell({r:0,c:h})];if(m&&m.v){d=String(m.v).trim();break}}r[o]={chemicalName:u,category:d,isTruckTreating:d&&d.includes("Truck Treating"),isContinuous:d&&d.includes("Continuous")}}}const i=e.s.c;for(let o=2;o<=e.e.r;o++){const l=n[XLSX.utils.encode_cell({r:o,c:i})];if(!l||!l.v)continue;const c=String(l.v).trim();s++;const u={},d={};for(let h=e.s.c;h<=e.e.c;h++){if(!r[h])continue;const m=this.getCellValue(n,o,h);if(m!=null&&!isNaN(m)&&m!==0){const{chemicalName:g,isTruckTreating:_,isContinuous:w}=r[h];if(_){let C=g,k=1;for(;u[C]!==void 0;)C=g+"."+k,k++;u[C]=Number(m)}else if(w){let C=g,k=1;for(;d[C]!==void 0;)C=g+"."+k,k++;d[C]=Number(m)}}}(Object.keys(u).length>0||Object.keys(d).length>0)&&t.push({wellName:c,batteryName:this.extractBatteryName(c),testData:{},truckTreating:u,continuous:d})}return{programs:t,rowCount:s}},parseOldFormat(n){const e=XLSX.utils.decode_range(n["!ref"]),t=[];let s=0;const r=1,i={};for(let c=e.s.c;c<=e.e.c;c++){const u=XLSX.utils.encode_cell({r,c}),d=n[u];if(d&&d.v){let h=String(d.v).trim();if(i[h]!==void 0){let m=1,g=h+"."+m;for(;i[g]!==void 0;)m++,g=h+"."+m;h=g}i[h]=parseInt(c)}}const o=["WCI2010s","SP3","CI Pellets","CAT222EB","WWT1954","CS-6248","CW-679","ASF-376","CS-6248GL","SI-415","CO-634","CAT222EB.1","PPM","OPS 2538","CI2356 Pellets","CAT 222EB","WWT 1954","PPM.1"],l=["WCI2010s.1","CW-1224","TSN-516","PPM.2"];for(let c=r+1;c<=e.e.r;c++){const u=n[XLSX.utils.encode_cell({r:c,c:i["Well Name"]})];if(!u||!u.v)continue;const d=String(u.v).trim();s++;const h={};i.Oil!==void 0&&(h.oil=this.getCellValue(n,c,i.Oil)),i.Water!==void 0&&(h.water=this.getCellValue(n,c,i.Water)),i.Total!==void 0&&(h.total=this.getCellValue(n,c,i.Total));const m={};for(const _ of o)if(i[_]!==void 0){const w=this.getCellValue(n,c,i[_]);w!=null&&!isNaN(w)&&(m[_]=Number(w))}const g={};for(const _ of l)if(i[_]!==void 0){const w=this.getCellValue(n,c,i[_]);w!=null&&!isNaN(w)&&(g[_]=Number(w))}(Object.keys(m).length>0||Object.keys(g).length>0)&&t.push({wellName:d,batteryName:this.extractBatteryName(d),testData:h,truckTreating:m,continuous:g})}return{programs:t,rowCount:s}},getCellValue(n,e,t){if(t===void 0)return null;const s=XLSX.utils.encode_cell({r:e,c:t}),r=n[s];return!r||r.v===void 0||r.v===null||r.v===""?null:r.v},extractBatteryName(n){const e=n.split(/\s+/),t=/\d/,s=[];for(const r of e){if(t.test(r))break;s.push(r)}return s.join(" ")||n}},Vo={"Yates 1":"Rosebud-Yates #1","Rosebud 1":"Rosebud 20 #1","Rosebud 2":"Rosebud 20 #2","Rosebud 3":"Rosebud 20 #3","Rosebud 4":"Rosebud 20 #4","RoseBud 2":"Rosebud 20 #2","Mc-Miles #1":"Miles #1","Miles 6":"Miles #1","Weman 6":"Wemac #6","WeMac 6":"Wemac #6","601H":"Cowden 601H","Red 4251":"Cowden 601H","Red 4253":"Cowden 602H","Janey 1":"Jane #2","Janey 2":"Jane #2","Janey 3":"Jane #2","Janey 4":"Jane #2","Janey 5":"Jane #2","JANEY 1":"Jane #2","JANEY 2":"Jane #2","JANEY 3":"Jane #2","Berhley 6":"Berkley #6","Cobra-3012":"Cobra 3012","Angus 7-18-1H":"1-37-1H","Owen 10-2":"Owens 10-2","Big Max 14SE-4":"Big Max 14 #4",Butchee:"Big Max 12 #1"},$b={id:"fluid-level",name:"Fluid Level Sheet",expectedFileName:"West Texas Fluid Level Sheet.xlsx",debugMode:!1,wellNameStats:{},normalizeWellName(n){if(!n)return"";let e=String(n).trim();const t=e;if(Vo[e])return this.debugMode&&console.log(`[Alias] "${t}" → "${Vo[e]}"`),Vo[e];if(e=e.replace(/BIG Max/gi,"Big Max").replace(/Big MaX/gi,"Big Max").replace(/Universtiy/gi,"University").replace(/Berhley/gi,"Berkley").replace(/Berkely/gi,"Berkley").replace(/Shusua/gi,"Shusa").replace(/Janey/gi,"Jane").replace(/JANEY/gi,"Jane").replace(/Weman/gi,"Wemac").replace(/RedRock/gi,"Red Rock").replace(/RoseBud/gi,"Rosebud").replace(/WeMac/gi,"Wemac").replace(/Owen\s+/gi,"Owens ").trim(),e=e.replace(/^University\s*\d*\s+(Berkley|Cobra|Sawgrass|Pinnacle|FN)\s*/gi,"$1 "),e=e.replace(/^Univ\s+/gi,"University "),e=e.replace(/^UL-CDU/gi,"ULS CDU").replace(/^UL\s+CDU/gi,"ULS CDU").replace(/^UL-/gi,"ULS ").replace(/^UL\s+/gi,"ULS ").trim(),/^602-H$/i.test(e)&&(e="Cowden 602H"),/^Big Max/i.test(e)&&(e=e.replace(/(\d+)SE-(\d+)/i,"$1 #$2"),e=e.replace(/^(Big Max)\s+(\d+)-(\d+)$/i,"$1 $2 #$3"),e=e.replace(/^(Big Max)\s+(\d+)\s+-\s*(\d+)$/i,"$1 $2 #$3")),/^Shusa/i.test(e)&&(e=e.replace(/^(Shusa)\s+(\d+)\s*-\s*(\d+)$/i,"$1 $2 #$3")),/^Link\s+\d+$/i.test(e)&&(e=e.replace(/^(Link)\s+(\d+)$/i,"$1 #$2")),/^Rosebud\s+\d+$/i.test(e)&&!/Rosebud\s+20/i.test(e)?e=e.replace(/^(Rosebud)\s+(\d+)$/i,"$1 20 #$2"):/^Rosebud\s+20-/i.test(e)&&(e=e.replace(/^(Rosebud)\s+(\d+)-(\d+)$/i,"$1 $2 #$3")),/^Polaris\s+\d+$/i.test(e)&&(e=e.replace(/^(Polaris)\s+(\d+)$/i,"$1 #$2")),/^Berkley\s+\d+$/i.test(e)&&(e=e.replace(/^(Berkley)\s+(\d+)$/i,"$1 #$2")),/^Miles\s+\d+$/i.test(e)&&(e=e.replace(/^(Miles)\s+(\d+)$/i,"$1 #$2")),/^Jane\s+\d+$/i.test(e)&&(e=e.replace(/^(Jane)\s+(\d+)$/i,"$1 #$2")),/^Wemac\s+\d+$/i.test(e)&&(e=e.replace(/^(Wemac)\s+(\d+)$/i,"$1 #$2")),/^M&W\s+\d+R$/i.test(e)&&(e=e.replace(/^(M&W)\s+(\d+R)$/i,"$1 #$2")),/^Pinnacle/i.test(e)&&(e=e.replace(/^University\s*\d*\s+/gi,""),e=e.replace(/^(Pinnacle)\s*(\d+)H?$/i,"$1 #$2")),/^Sabrina\s+\d+$/i.test(e)&&(e=e.replace(/^(Sabrina)\s+(\d+)$/i,"$1 #$2")),/^Cobra\s*-\s*\d+$/i.test(e)&&(e=e.replace(/^(Cobra)\s*-\s*(\d+)$/i,"$1 $2")),/^FN\s+\d+$/i.test(e)&&(e=e.replace(/^(FN)\s+(\d+)$/i,"$1 $2")),/^ULS\s+1-3\s+\d+H$/i.test(e)&&(e=e.replace(/^(ULS)\s+(1-3)\s+(\d+H)$/i,"$1 $2-$3")),/^University\s+1-3\s+\d+H$/i.test(e)&&(e=e.replace(/^University\s+(1-3)\s+(\d+H)$/i,"ULS $1-$2")),/^University\s+(1-3[0-7])\s+(\d+H)$/i.test(e)&&(e=e.replace(/^University\s+(1-3[0-7])\s+(\d+H)$/i,"$1-$2")),/^1-3[0-7]\s+\d+H$/i.test(e)&&(e=e.replace(/^(1-3[0-7])\s+(\d+H)$/i,"$1-$2")),/^\d{1,2}-\d{1,2}$/.test(e)&&(e=e.replace(/^(\d{1,2})-(\d{1,2})$/,"Big Max $1 #$2")),/^\d{2}-\d+H$/i.test(e)){const s=e.match(/^(\d{2})-(\d+H)$/i);if(s){const r=s[1],i=s[2];["30","31","36","37"].includes(r)&&(e=`1-${r}-${i}`)}}return e=e.replace(/\s+/g," ").trim(),this.debugMode&&e!==t&&console.log(`[Normalize] "${t}" → "${e}"`),e},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),readings:[],rawRowCount:0};this.wellNameStats={};const t={};let s=null;const r=n.SheetNames,i=["Sheet1","Fluid Levels","Data","Fluid Level","Sheet"];for(const C of i)if(r.includes(C)){s=n.Sheets[C];break}if(!s&&r.length>0&&(s=n.Sheets[r[0]]),!s)return console.error("No valid sheet found in Fluid Level file"),e;const o=XLSX.utils.decode_range(s["!ref"]),l=0,c=2,u=4,d=5,h=6,m=15,g=16,_=17,w=new Date("2025-01-01");for(let C=1;C<=o.e.r;C++){const k=s[XLSX.utils.encode_cell({r:C,c:l})];if(!k||!k.v)continue;let x;if(k.t==="n"?(x=XLSX.SSF.parse_date_code(k.v),x=new Date(x.y,x.m-1,x.d)):k.t==="d"?x=new Date(k.v):x=new Date(k.v),!x||isNaN(x.getTime())||x<w)continue;const V=s[XLSX.utils.encode_cell({r:C,c})];if(!V||!V.v)continue;const F=String(V.v).trim();if(!F)continue;const G=this.normalizeWellName(F);if(!G)continue;this.wellNameStats[G]||(this.wellNameStats[G]={count:0,rawNames:new Set}),this.wellNameStats[G].count++,this.wellNameStats[G].rawNames.add(F),t[F]||(t[F]=G),e.rawRowCount++;const ee={wellName:G,rawWellName:F,date:x.toISOString(),strokeLength:this.getCellValue(s,C,u),spm:this.getCellValue(s,C,d),runTime:this.getCellValue(s,C,h),gasLiquidLevel:this.getCellValue(s,C,m),gasFreeLevel:this.getCellValue(s,C,g),pumpIntakePressure:this.getCellValue(s,C,_)};e.readings.push(ee)}return console.log(`Parsed ${e.readings.length} fluid level readings from ${e.rawRowCount} total rows (2025+)`),this.logWellNameStatistics(t),e},logWellNameStatistics(n){const e=Object.keys(this.wellNameStats).sort();console.log(`
===== FLUID LEVEL WELL NAME STATISTICS =====`),console.log(`Found ${e.length} unique normalized well names:`),e.forEach(s=>{const r=this.wellNameStats[s],i=Array.from(r.rawNames).sort();console.log(`  ${s}: ${r.count} readings`),(i.length>1||i[0]!==s)&&console.log(`    Raw variations: ${i.join(", ")}`)});const t=Object.keys(n).sort();console.log(`
===== RAW NAME TRANSFORMATIONS (${t.length} unique) =====`),t.forEach(s=>{const r=n[s];s!==r&&console.log(`  "${s}" → "${r}"`)}),console.log(`============================================
`)},getCellValue(n,e,t){const s=XLSX.utils.encode_cell({r:e,c:t}),r=n[s];if(!r||r.v===void 0||r.v===null||r.v==="")return null;const i=r.v;if(typeof i=="number")return i;const o=parseFloat(i);return isNaN(o)?String(i):o}},Dm={CowdenParser:kb,BigMaxParser:Nb,BigMax1HParser:Lb,SouthAndrewsParser:xb,PolarisParser:Ob,ShusaParser:Mb,MWWemacParser:Vb,Unit130Parser:Bb,ULS35HParser:Fb,MasterChemicalParser:Ub,FluidLevelParser:$b};function km(n,e){if(!n||!n.wells)return e;const t={};n.wells.forEach(r=>{t[r.id]=r});const s=e.wells.map(r=>{const i=t[r.id];return i?(delete t[r.id],Hb(i,r)):r});return Object.values(t).forEach(r=>{s.push(r)}),{...e,wells:s}}function Hb(n,e){const t=jb(n.pressureReadings||[],e.pressureReadings||[]);return{...e,actionItems:n.actionItems||[],failureHistory:n.failureHistory||[],chemicalProgram:n.chemicalProgram||{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},pressureReadings:t}}function jb(n,e){const t={};n.forEach(r=>{if(r&&r.date){const i=gd(r.date);t[i]=r}}),e.forEach(r=>{if(r&&r.date){const i=gd(r.date);t[i]=r}});const s=Object.values(t);return s.sort((r,i)=>new Date(i.date)-new Date(r.date)),s.slice(0,60)}function gd(n){return n?typeof n=="string"?n.split("T")[0]:n instanceof Date?n.toISOString().split("T")[0]:String(n):""}function Wb(){const n=document.getElementById("uploadArea"),e=document.getElementById("fileInput"),t=document.getElementById("btnReupload");n.addEventListener("click",s=>{s.target.id!=="btnReupload"&&e.click()}),t.addEventListener("click",s=>{s.stopPropagation(),e.click()}),e.addEventListener("change",s=>{const r=s.target.files[0];r&&yd(r),e.value=""}),n.addEventListener("dragover",s=>{s.preventDefault(),n.classList.add("drag-over")}),n.addEventListener("dragleave",()=>{n.classList.remove("drag-over")}),n.addEventListener("drop",s=>{s.preventDefault(),n.classList.remove("drag-over");const r=s.dataTransfer.files[0];r&&yd(r)})}async function yd(n){if(!S.currentSheet){alert("Please select a gauge sheet first");return}const e=qe.find(o=>o.id===S.currentSheet);if(!e)return;const t=Dm[e.parser];if(!t){alert(`Parser not yet implemented for ${e.name}. Coming soon!`);return}const s=document.getElementById("uploadProgress"),r=document.getElementById("progressFill"),i=document.getElementById("progressText");s.style.display="block",r.style.width="10%",i.textContent="Reading file...";try{const o=await n.arrayBuffer();r.style.width="5%",i.textContent="Parsing Excel...";const l=XLSX.read(o,{type:"array",cellDates:!0});r.style.width="10%",i.textContent="Extracting data...";const c=t.parse(l);if(e.isFluidLevelSheet){r.style.width="15%",i.textContent="Saving fluid level data...";const d=new Set(c.readings.map(h=>h.wellName.toLowerCase().replace(/[^a-z0-9]/g,""))).size;await _l(c.readings,(h,m)=>{const g=15+Math.floor(m/100*60);r.style.width=`${g}%`,i.textContent=h}),r.style.width="75%",i.textContent="Reloading fluid level data...",await wl(),r.style.width="90%",i.textContent="Refreshing views...",Gi(),r.style.width="100%",i.textContent=`Complete! ${c.readings.length} readings saved for ${d} wells`,setTimeout(()=>{s.style.display="none",r.style.width="0%",mn()},2e3)}else if(e.isChemicalSheet){r.style.width="15%",i.textContent="Saving chemical programs...",await El(c.chemicalPrograms,(d,h)=>{const m=15+Math.floor(h/100*40);r.style.width=`${m}%`,i.textContent=d}),r.style.width="55%",i.textContent="Reloading chemical programs...",await os(),r.style.width="60%",i.textContent="Matching chemical programs to existing wells...";const u=await vl((d,h)=>{const m=60+Math.floor(h/100*30);r.style.width=`${m}%`,i.textContent=d});r.style.width="90%",i.textContent="Refreshing views...",zi(),r.style.width="100%",i.textContent=`Complete! ${u.matched} wells matched, ${u.updated} wells updated`,setTimeout(()=>{s.style.display="none",r.style.width="0%",mn()},2e3)}else{r.style.width="15%",i.textContent="Checking for manual edits...";const u=await yl(S.currentSheet);r.style.width="20%",i.textContent="Merging data...";const d=km(u,c);S.appData[S.currentSheet]=d,r.style.width="25%",i.textContent="Saving to cloud...",await ml(S.currentSheet,d,!0,(h,m)=>{const g=25+Math.floor(m/90*65);r.style.width=`${g}%`,i.textContent=h}),r.style.width="92%",i.textContent="Refreshing navigation data...",await $i(h=>{i.textContent=h}),r.style.width="96%",i.textContent="Refreshing dashboard data...",await ur(h=>{i.textContent=h}),r.style.width="100%",i.textContent="Complete!",setTimeout(()=>{s.style.display="none",r.style.width="0%",mn(),Im(S.currentSheet)},500)}}catch(o){console.error("Error processing file:",o),alert("Error processing file: "+o.message),s.style.display="none"}}function qb(){const n=document.getElementById("bulkUploadArea"),e=document.getElementById("bulkFileInput");!n||!e||(n.addEventListener("click",()=>{e.click()}),e.addEventListener("change",t=>{const s=Array.from(t.target.files);s.length>0&&_d(s),e.value=""}),n.addEventListener("dragover",t=>{t.preventDefault(),n.classList.add("drag-over")}),n.addEventListener("dragleave",()=>{n.classList.remove("drag-over")}),n.addEventListener("drop",t=>{t.preventDefault(),n.classList.remove("drag-over");const s=Array.from(t.dataTransfer.files);s.length>0&&_d(s)}))}async function _d(n){const e=document.getElementById("bulkUploadProgress"),t=document.getElementById("bulkProgressFill"),s=document.getElementById("bulkProgressText"),r=document.getElementById("bulkUploadResults");e.style.display="block",r.style.display="none",r.innerHTML="";const i=[];let o=0;for(const u of n){t.style.width=`${o/n.length*100}%`,s.textContent=`Processing ${u.name}...`;const d=qe.find(m=>u.name.toLowerCase().includes(m.fileName.toLowerCase().replace(".xlsx","").replace(".xlsm",""))||m.fileName.toLowerCase()===u.name.toLowerCase());if(!d){i.push({name:u.name,status:"skipped",detail:"Unknown file"}),o++;continue}const h=Dm[d.parser];if(!h){i.push({name:u.name,status:"skipped",detail:"No parser available"}),o++;continue}try{const m=await u.arrayBuffer(),g=XLSX.read(m,{type:"array",cellDates:!0}),_=h.parse(g);if(d.isFluidLevelSheet){const C=new Set(_.readings.map(k=>k.wellName.toLowerCase().replace(/[^a-z0-9]/g,""))).size;await _l(_.readings,(k,x)=>{s.textContent=k}),await wl(),i.push({name:d.name,status:"success",detail:`${_.readings.length} readings saved for ${C} wells`})}else if(d.isChemicalSheet){await El(_.chemicalPrograms,(C,k)=>{s.textContent=C}),await os(),s.textContent="Matching chemical programs to existing wells...";const w=await vl((C,k)=>{s.textContent=C});i.push({name:d.name,status:"success",detail:`${_.chemicalPrograms.length} chemical programs saved, ${w.matched} wells matched, ${w.updated} wells updated`})}else{const w=await yl(d.id),C=km(w,_);S.appData[d.id]=C,i.push({name:d.name,status:"success",detail:`${_.wells.length} wells loaded`})}}catch(m){console.error(`Error processing ${u.name}:`,m),i.push({name:u.name,status:"error",detail:m.message})}o++}const l=Object.keys(S.appData),c=l.length;if(c>0)for(let u=0;u<c;u++){const d=l[u];await ml(d,S.appData[d],!0,(h,m)=>{const g=Math.floor(u/c*85),_=Math.floor(m/90*(85/c));t.style.width=`${g+_}%`,s.textContent=`[Sheet ${u+1}/${c}] ${h}`})}t.style.width="90%",s.textContent="Refreshing navigation data...",await $i(u=>{s.textContent=u}),t.style.width="95%",s.textContent="Refreshing dashboard data...",await ur(u=>{s.textContent=u}),t.style.width="100%",s.textContent="Complete!",setTimeout(()=>{if(e.style.display="none",r.style.display="block",r.innerHTML=i.map(h=>`
            <div class="bulk-result-item ${h.status}">
                <span class="result-icon">${h.status==="success"?"OK":h.status==="error"?"X":"?"}</span>
                <span class="result-name">${h.name}</span>
                <span class="result-detail">${h.detail}</span>
            </div>
        `).join(""),mn(),i.some(h=>h.name.includes("Chemical")&&h.status==="success")){const h=document.getElementById("masterChemicalView");h&&h.classList.contains("active")&&zi(),S.currentSheet&&S.currentWell&&St(S.currentSheet,S.currentWell)}if(i.some(h=>h.name.includes("Fluid")&&h.status==="success")){const h=document.getElementById("fluidLevelsView");h&&h.classList.contains("active")&&Gi()}},500)}function zb(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){const e=Math.random()*16|0;return(n==="x"?e:e&3|8).toString(16)})}function Gb(){console.log("Initializing failure modal handlers...");const n=document.getElementById("btnAddFailure"),e=document.getElementById("failureModal"),t=document.getElementById("btnCloseFailureModal"),s=document.getElementById("btnCancelFailure"),r=document.getElementById("failureForm"),i=document.getElementById("failureFileInput"),o=document.getElementById("fileDropZone");if(document.getElementById("fileInfo"),document.getElementById("btnSubmitFailure"),console.log("btnAddFailure:",n),console.log("failureModal:",e),!n||!e){console.warn("Failure modal elements not found",{btnAddFailure:n,failureModal:e});return}console.log("Failure modal handlers initialized successfully"),n.addEventListener("click",()=>{Kb()}),t&&t.addEventListener("click",()=>{zr()}),s&&s.addEventListener("click",()=>{zr()}),e.addEventListener("click",l=>{l.target===e&&zr()}),i&&i.addEventListener("change",l=>{wd(l.target.files[0])}),o&&(o.addEventListener("click",()=>{i.click()}),o.addEventListener("dragover",l=>{l.preventDefault(),o.classList.add("drag-over")}),o.addEventListener("dragleave",()=>{o.classList.remove("drag-over")}),o.addEventListener("drop",l=>{l.preventDefault(),o.classList.remove("drag-over"),l.dataTransfer.files.length>0&&wd(l.dataTransfer.files[0])})),r&&r.addEventListener("submit",l=>{l.preventDefault(),Qb()})}function Kb(){console.log("openFailureModal called");const n=document.getElementById("failureModal"),e=document.getElementById("failureForm");e&&e.reset(),Nm();const t=document.getElementById("failureDate");if(t){const s=new Date().toISOString().split("T")[0];t.value=s}n.classList.add("visible"),document.body.style.overflow="hidden",console.log("Modal should be visible now, modal classList:",n.classList)}function zr(){document.getElementById("failureModal").classList.remove("visible"),document.body.style.overflow="";const e=document.getElementById("failureForm");e&&e.reset(),Nm()}function wd(n){if(!n)return;const e=mm(n);if(!e.valid){alert(e.error);return}document.getElementById("failureFileInput")&&Xb(n)}function Xb(n){const e=document.getElementById("fileDropZone"),t=document.getElementById("fileInfo"),s=document.getElementById("fileName"),r=document.getElementById("fileSize");if(e&&(e.style.display="none"),t&&(t.style.display="flex"),s&&(s.textContent=n.name),r){const i=(n.size/1024/1024).toFixed(2);r.textContent=`${i} MB`}}function Nm(){const n=document.getElementById("failureFileInput"),e=document.getElementById("fileDropZone"),t=document.getElementById("fileInfo");n&&(n.value=""),e&&(e.style.display="flex"),t&&(t.style.display="none")}async function Qb(){const n=document.getElementById("failureDate"),e=document.getElementById("failureNotes"),t=document.getElementById("failureFileInput"),s=document.getElementById("btnSubmitFailure"),r=document.getElementById("uploadProgress"),i=document.getElementById("progressBar"),o=document.getElementById("progressText"),l=n==null?void 0:n.value,c=(e==null?void 0:e.value)||"",u=t==null?void 0:t.files[0];if(!l){alert("Please select a failure date");return}if(!u){alert("Please select a file to upload");return}const d=mm(u);if(!d.valid){alert(d.error);return}const h=S.currentSheet,m=S.currentWell;if(!h||!m){alert("Cannot determine current well. Please try again.");return}s&&(s.disabled=!0,s.textContent="Uploading..."),r&&(r.style.display="block");try{const g=zb(),_=await sI(h,m,g,u,k=>{i&&(i.style.width=`${k}%`),o&&(o.textContent=`${Math.round(k)}%`)}),w={id:g,failureDate:new Date(l),notes:c,fileName:_.fileName,fileUrl:_.fileUrl,filePath:_.filePath,fileSize:_.fileSize};if(await wm(h,m,w)){await pl(h,m);const k=S.appData[h];if(k==null?void 0:k.wells.find(V=>V.id===m)){const{default:V}=await jn(async()=>{const{default:G}=await Promise.resolve().then(()=>fd);return{default:G}},void 0),{showWellView:F}=await jn(async()=>{const{showWellView:G}=await Promise.resolve().then(()=>fd);return{showWellView:G}},void 0);await F(h,m)}zr(),alert("Failure history entry added successfully!")}else throw new Error("Failed to save failure history to database")}catch(g){console.error("Error submitting failure entry:",g),alert(`Failed to add failure history entry: ${g.message}`)}finally{s&&(s.disabled=!1,s.textContent="Add Entry"),r&&(r.style.display="none"),i&&(i.style.width="0%"),o&&(o.textContent="0%")}}const Ki="@zarvonaenergy.com";let Bo=null;function Jb(n){Bo=n,bv(Sn,e=>{Bo&&Bo(e)})}async function Yb(n,e){try{return{success:!0,user:(await Tv(Sn,n,e)).user}}catch(t){return console.error("Sign in error:",t),{success:!1,error:Xi(t)}}}async function Zb(){try{const n=new Hn("microsoft.com");n.addScope("profile"),n.addScope("email"),n.addScope("User.Read"),n.setCustomParameters({prompt:"select_account"});const e=await zv(Sn,n),t=Hn.credentialFromResult(e),s=t==null?void 0:t.accessToken;if(s&&!e.user.photoURL)try{const r=await fetch("https://graph.microsoft.com/v1.0/me/photo/$value",{headers:{Authorization:`Bearer ${s}`}});if(r.ok){const i=await r.blob(),o=URL.createObjectURL(i);console.log("Fetched profile photo from Microsoft Graph")}}catch(r){console.log("Could not fetch profile photo:",r)}return{success:!0,user:e.user}}catch(n){return console.error("Microsoft sign in error:",n),n.code==="auth/popup-closed-by-user"?{success:!1,error:"Sign-in cancelled."}:n.code==="auth/popup-blocked"?{success:!1,error:"Pop-up blocked. Please allow pop-ups for this site."}:{success:!1,error:Xi(n)}}}async function eS(){try{return await Sv(Sn),{success:!0}}catch(n){return console.error("Sign out error:",n),{success:!1,error:n.message}}}function Lm(n){return n.toLowerCase().endsWith(Ki.toLowerCase())}async function tS(n,e){try{return Lm(n)?{success:!0,user:(await vv(Sn,n,e)).user}:{success:!1,error:`Only ${Ki} email addresses are allowed.`}}catch(t){return console.error("Create account error:",t),{success:!1,error:Xi(t)}}}async function nS(n){try{return Lm(n)?(await Ev(Sn,n),{success:!0}):{success:!1,error:`Only ${Ki} email addresses are allowed.`}}catch(e){return console.error("Password reset error:",e),{success:!1,error:Xi(e)}}}function Xi(n){switch(n.code){case"auth/invalid-email":return"Invalid email address.";case"auth/user-disabled":return"This account has been disabled.";case"auth/user-not-found":return"No account found with this email.";case"auth/wrong-password":return"Incorrect password.";case"auth/email-already-in-use":return"An account with this email already exists.";case"auth/weak-password":return"Password should be at least 6 characters.";case"auth/network-request-failed":return"Network error. Please check your connection.";case"auth/too-many-requests":return"Too many failed attempts. Please try again later.";default:return n.message||"An error occurred. Please try again."}}function xm(){const n=document.getElementById("authSplash");n&&(n.classList.add("fade-out"),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},300))}function sS(){const n=document.getElementById("loginView"),e=document.querySelector(".app-container");xm(),setTimeout(()=>{n&&(n.style.display="flex",requestAnimationFrame(()=>{n.classList.add("fade-in")})),e&&(e.style.display="none",e.classList.remove("fade-in"))},100)}function rS(){const n=document.getElementById("loginView"),e=document.querySelector(".app-container");xm(),setTimeout(()=>{n&&(n.style.display="none",n.classList.remove("fade-in")),e&&(e.style.display="flex",requestAnimationFrame(()=>{e.classList.add("fade-in")}))},100)}function iS(){const n=document.getElementById("loginForm"),e=document.getElementById("signupForm"),t=document.getElementById("showSignup"),s=document.getElementById("showLogin"),r=document.getElementById("loginContainer"),i=document.getElementById("signupContainer"),o=document.getElementById("microsoftSignIn");if(o&&o.addEventListener("click",async c=>{c.preventDefault();const u=document.getElementById("loginError"),d=document.getElementById("loginSuccess");u.textContent="",d.textContent="",o.disabled=!0;const h=o.innerHTML;o.innerHTML='<span class="btn-spinner"></span> Signing in...';const m=await Zb();m.success||(u.textContent=m.error,o.disabled=!1,o.innerHTML=h)}),n){const c=async()=>{const h=document.getElementById("loginEmail").value,m=document.getElementById("loginPassword").value,g=document.getElementById("loginError"),_=document.getElementById("loginSuccess"),w=n.querySelector('button[type="submit"]');g.textContent="",_.textContent="",w.disabled=!0,w.textContent="Signing in...";const C=await Yb(h,m);C.success||(g.textContent=C.error,w.disabled=!1,w.textContent="Sign In")};n.addEventListener("submit",h=>{h.preventDefault(),c()});const u=document.getElementById("loginEmail"),d=document.getElementById("loginPassword");[u,d].forEach(h=>{h&&h.addEventListener("keydown",m=>{m.key==="Enter"&&(m.preventDefault(),c())})})}const l=document.getElementById("forgotPassword");if(l&&l.addEventListener("click",async c=>{c.preventDefault();const u=document.getElementById("loginEmail"),d=document.getElementById("loginError"),h=document.getElementById("loginSuccess");d.textContent="",h.textContent="";const m=u.value.trim();if(!m){d.textContent="Please enter your email address first.",u.focus();return}const g=await nS(m);g.success?(h.textContent="Password reset email sent! Check your inbox.",u.value=""):d.textContent=g.error}),e){const c=async()=>{const m=document.getElementById("signupUsername").value.trim(),g=document.getElementById("signupPassword").value,_=document.getElementById("signupConfirmPassword").value,w=document.getElementById("signupError"),C=e.querySelector('button[type="submit"]');if(w.textContent="",!m){w.textContent="Please enter a username.";return}const k=m+Ki;if(g!==_){w.textContent="Passwords do not match.";return}C.disabled=!0,C.textContent="Creating account...";const x=await tS(k,g);x.success||(w.textContent=x.error,C.disabled=!1,C.textContent="Create Account")};e.addEventListener("submit",m=>{m.preventDefault(),c()});const u=document.getElementById("signupUsername"),d=document.getElementById("signupPassword"),h=document.getElementById("signupConfirmPassword");[u,d,h].forEach(m=>{m&&m.addEventListener("keydown",g=>{g.key==="Enter"&&(g.preventDefault(),c())})})}t&&t.addEventListener("click",c=>{c.preventDefault(),r.style.display="none",i.style.display="block"}),s&&s.addEventListener("click",c=>{c.preventDefault(),i.style.display="none",r.style.display="block"})}let fa=!1;async function oS(){fa||(fp(),S.isLoading=!0,await $i(),Am(),Wb(),qb(),nb(),Gb(),Sb(),Rb(),mp(),lS(),Ge("welcome"),rS(),fa=!0,aS())}async function aS(){try{await ur(),await os(),S.isLoading=!1,vn(),mn(),console.log("Background loading complete")}catch(n){console.error("Error loading dashboard summary:",n),S.isLoading=!1,vn(),mn()}}function lS(){const n=document.getElementById("userAvatarBtn"),e=document.getElementById("userDropdown"),t=document.getElementById("userEmail"),s=document.getElementById("userDisplayName"),r=document.getElementById("userAvatarImg"),i=document.getElementById("avatarIconSvg"),o=document.getElementById("userDropdownAvatar"),l=document.getElementById("btnSignOutDropdown");if(!n||!e)return;const c=Sn.currentUser;c&&(t&&(t.textContent=c.email||"No email"),c.displayName&&s&&(s.textContent=c.displayName,s.style.display="block"),c.photoURL&&(r&&i&&(r.src=c.photoURL,r.style.display="block",i.style.display="none"),o&&(o.src=c.photoURL,o.style.display="block"))),n.addEventListener("click",u=>{u.stopPropagation(),e.classList.toggle("active")}),document.addEventListener("click",u=>{!e.contains(u.target)&&u.target!==n&&e.classList.remove("active")}),l&&l.addEventListener("click",async()=>{e.classList.remove("active"),await eS()})}document.addEventListener("DOMContentLoaded",()=>{iS(),Jb(n=>{n?(console.log("User signed in:",n.email),oS()):(console.log("User signed out"),sS(),fa=!1)})});yI((n,e)=>{St(n,e)});QI(()=>{mn(),vn()});
