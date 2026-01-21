(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const qe=[{id:"cowden",name:"Cowden",fileName:"Cowden Gauge Sheet1.xlsx",parser:"CowdenParser"},{id:"bigmax",name:"Big Max",fileName:"Big Max Gauge Sheet.xlsx",parser:"BigMaxParser"},{id:"bigmax1h",name:"Big Max 1H",fileName:"Big Max 1H Gauge Sheet.xlsx",parser:"BigMax1HParser"},{id:"southandrews",name:"South Andrews",fileName:"South Andrews Gauge Sheet.xlsm",parser:"SouthAndrewsParser"},{id:"polaris",name:"Polaris",fileName:"Polaris Gauge Sheet.xlsx",parser:"PolarisParser"},{id:"shusa",name:"Shusa",fileName:"Shusa Gauge Sheet.xlsx",parser:"ShusaParser"},{id:"mwwemac",name:"MW-Wemac-Sabrina-Berkley",fileName:"Mw-Wemac-Sabrina-Berkley.xlsx",parser:"MWWemacParser"},{id:"unit130",name:"1-30 Unit 1H",fileName:"1-30 Unit 1H Gauge Sheet.xlsx",parser:"Unit130Parser"},{id:"uls35h",name:"ULS 3-5H",fileName:"ULS 3-5H Gauge Sheet.xlsx",parser:"ULS35HParser"},{id:"master-chemical",name:"Master Chemical Sheet",fileName:"Master Chemical Sheet.xlsx",parser:"MasterChemicalParser",isChemicalSheet:!0}],Mo="oilWellTheme",A={appData:{},currentSheet:null,currentWell:null,wellProductionCharts:{},batteryProductionChart:null,currentWellData:null,productionDateRange:{min:null,max:null},chartState:{oil:{aggregation:"month",selectedWells:null},water:{aggregation:"month",selectedWells:null},gas:{aggregation:"month",selectedWells:null}},aggregateOilChart:null,aggregateWaterChart:null,aggregateGasChart:null,oilChartDateRange:{min:null,max:null},waterChartDateRange:{min:null,max:null},gasChartDateRange:{min:null,max:null},pressureCharts:{psi:null,injVol:null},currentEditSection:null,isLoading:!1,loadedSheets:[],loadedWells:{},metadataCache:{wellCounts:{},wellNames:{}},dashboardData:null,chemicalPrograms:{}};function lp(){const n=localStorage.getItem(Mo);n?document.documentElement.setAttribute("data-theme",n):Ic(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{localStorage.getItem(Mo)||Ic()}),da()}function Ic(){const n=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",n?"dark":"light"),da()}function cp(){const n=document.getElementById("themeToggle");n&&n.addEventListener("click",up)}function up(){const e=(document.documentElement.getAttribute("data-theme")||"dark")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",e),localStorage.setItem(Mo,e),da()}function da(){const n=document.querySelector(".theme-toggle-label");if(n){const e=document.documentElement.getAttribute("data-theme")||"dark";n.textContent=e==="dark"?"Light Mode":"Dark Mode"}}const dp="modulepreload",hp=function(n){return"/"+n},Cc={},Br=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=hp(c),c in Cc)return;Cc[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":dp,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((m,g)=>{f.addEventListener("load",m),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},fp=()=>{};var bc={};/**
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
 */const gd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},mp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,l=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,d=i>>2,f=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),r.push(t[d],t[f],t[m],t[g])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(gd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):mp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const f=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||u==null||f==null)throw new pp;const m=i<<2|l>>4;if(r.push(m),u!==64){const g=l<<4&240|u>>2;if(r.push(g),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class pp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gp=function(n){const e=gd(n);return yd.encodeByteArray(e,!0)},zs=function(n){return gp(n).replace(/\./g,"")},_d=function(n){try{return yd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _p=()=>yp().__FIREBASE_DEFAULTS__,wp=()=>{if(typeof process>"u"||typeof bc>"u")return;const n=bc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ep=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_d(n[1]);return e&&JSON.parse(e)},yi=()=>{try{return fp()||_p()||wp()||Ep()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wd=n=>{var e,t;return(t=(e=yi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Ed=n=>{const e=wd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Td=()=>{var n;return(n=yi())==null?void 0:n.config},vd=n=>{var e;return(e=yi())==null?void 0:e[`_${n}`]};/**
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
 */class Tp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Yt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ha(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Id(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[zs(JSON.stringify(t)),zs(JSON.stringify(o)),""].join(".")}const Dr={};function vp(){const n={prod:[],emulator:[]};for(const e of Object.keys(Dr))Dr[e]?n.emulator.push(e):n.prod.push(e);return n}function Ip(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Sc=!1;function fa(n,e){if(typeof window>"u"||typeof document>"u"||!Yt(window.location.host)||Dr[n]===e||Dr[n]||Sc)return;Dr[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=vp().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,g){m.setAttribute("width","24"),m.setAttribute("id",g),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Sc=!0,o()},m}function d(m,g){m.setAttribute("id",g),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=Ip(r),g=t("text"),_=document.getElementById(g)||document.createElement("span"),w=t("learnmore"),b=document.getElementById(w)||document.createElement("a"),k=t("preprendIcon"),L=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const B=m.element;l(B),d(b,w);const $=u();c(L,k),B.append(L,_,b,$),document.body.appendChild(B)}i?(_.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function bp(){var e;const n=(e=yi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Sp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ap(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Rp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pp(){const n=Re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Dp(){return!bp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kp(){try{return typeof indexedDB=="object"}catch{return!1}}function Np(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const xp="FirebaseError";class ct extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=xp,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jr.prototype.create)}}class Jr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Lp(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new ct(s,l,r)}}function Lp(n,e){return n.replace(Op,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Op=/\{\$([^}]+)}/g;function Vp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function mn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Ac(i)&&Ac(o)){if(!mn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ac(n){return n!==null&&typeof n=="object"}/**
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
 */function Yr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ir(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Cr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Mp(n,e){const t=new Bp(n,e);return t.subscribe.bind(t)}class Bp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Up(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=wo),s.error===void 0&&(s.error=wo),s.complete===void 0&&(s.complete=wo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Up(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function wo(){}/**
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
 */function oe(n){return n&&n._delegate?n._delegate:n}class Wt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Fp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Tp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hp(e))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ln){return this.instances.has(e)}getOptions(e=ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$p(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ln){return this.component?this.component.multipleInstances?e:ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $p(n){return n===ln?void 0:n}function Hp(n){return n.instantiationMode==="EAGER"}/**
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
 */class jp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Fp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Wp={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},qp=K.INFO,zp={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Gp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=zp[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ma{constructor(e){this.name=e,this._logLevel=qp,this._logHandler=Gp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const Kp=(n,e)=>e.some(t=>n instanceof t);let Rc,Pc;function Xp(){return Rc||(Rc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qp(){return Pc||(Pc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cd=new WeakMap,Bo=new WeakMap,bd=new WeakMap,Eo=new WeakMap,pa=new WeakMap;function Jp(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Ut(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Cd.set(t,n)}).catch(()=>{}),pa.set(e,n),e}function Yp(n){if(Bo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Bo.set(n,e)}let Uo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Bo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||bd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ut(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Zp(n){Uo=n(Uo)}function eg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(To(this),e,...t);return bd.set(r,e.sort?e.sort():[e]),Ut(r)}:Qp().includes(n)?function(...e){return n.apply(To(this),e),Ut(Cd.get(this))}:function(...e){return Ut(n.apply(To(this),e))}}function tg(n){return typeof n=="function"?eg(n):(n instanceof IDBTransaction&&Yp(n),Kp(n,Xp())?new Proxy(n,Uo):n)}function Ut(n){if(n instanceof IDBRequest)return Jp(n);if(Eo.has(n))return Eo.get(n);const e=tg(n);return e!==n&&(Eo.set(n,e),pa.set(e,n)),e}const To=n=>pa.get(n);function ng(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),l=Ut(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ut(o.result),c.oldVersion,c.newVersion,Ut(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const rg=["get","getKey","getAll","getAllKeys","count"],sg=["put","add","delete","clear"],vo=new Map;function Dc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(vo.get(e))return vo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=sg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rg.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),s&&c.done]))[0]};return vo.set(e,i),i}Zp(n=>({...n,get:(e,t,r)=>Dc(e,t)||n.get(e,t,r),has:(e,t)=>!!Dc(e,t)||n.has(e,t)}));/**
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
 */class ig{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(og(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function og(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fo="@firebase/app",kc="0.14.7";/**
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
 */const pt=new ma("@firebase/app"),ag="@firebase/app-compat",lg="@firebase/analytics-compat",cg="@firebase/analytics",ug="@firebase/app-check-compat",dg="@firebase/app-check",hg="@firebase/auth",fg="@firebase/auth-compat",mg="@firebase/database",pg="@firebase/data-connect",gg="@firebase/database-compat",yg="@firebase/functions",_g="@firebase/functions-compat",wg="@firebase/installations",Eg="@firebase/installations-compat",Tg="@firebase/messaging",vg="@firebase/messaging-compat",Ig="@firebase/performance",Cg="@firebase/performance-compat",bg="@firebase/remote-config",Sg="@firebase/remote-config-compat",Ag="@firebase/storage",Rg="@firebase/storage-compat",Pg="@firebase/firestore",Dg="@firebase/ai",kg="@firebase/firestore-compat",Ng="firebase",xg="12.8.0";/**
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
 */const $o="[DEFAULT]",Lg={[Fo]:"fire-core",[ag]:"fire-core-compat",[cg]:"fire-analytics",[lg]:"fire-analytics-compat",[dg]:"fire-app-check",[ug]:"fire-app-check-compat",[hg]:"fire-auth",[fg]:"fire-auth-compat",[mg]:"fire-rtdb",[pg]:"fire-data-connect",[gg]:"fire-rtdb-compat",[yg]:"fire-fn",[_g]:"fire-fn-compat",[wg]:"fire-iid",[Eg]:"fire-iid-compat",[Tg]:"fire-fcm",[vg]:"fire-fcm-compat",[Ig]:"fire-perf",[Cg]:"fire-perf-compat",[bg]:"fire-rc",[Sg]:"fire-rc-compat",[Ag]:"fire-gcs",[Rg]:"fire-gcs-compat",[Pg]:"fire-fst",[kg]:"fire-fst-compat",[Dg]:"fire-vertex","fire-js":"fire-js",[Ng]:"fire-js-all"};/**
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
 */const Gs=new Map,Og=new Map,Ho=new Map;function Nc(n,e){try{n.container.addComponent(e)}catch(t){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pn(n){const e=n.name;if(Ho.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;Ho.set(e,n);for(const t of Gs.values())Nc(t,n);for(const t of Og.values())Nc(t,n);return!0}function _i(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Me(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Vg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new Jr("app","Firebase",Vg);/**
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
 */class Mg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const Tn=xg;function Sd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:$o,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Ft.create("bad-app-name",{appName:String(s)});if(t||(t=Td()),!t)throw Ft.create("no-options");const i=Gs.get(s);if(i){if(mn(t,i.options)&&mn(r,i.config))return i;throw Ft.create("duplicate-app",{appName:s})}const o=new jp(s);for(const c of Ho.values())o.addComponent(c);const l=new Mg(t,r,o);return Gs.set(s,l),l}function ga(n=$o){const e=Gs.get(n);if(!e&&n===$o&&Td())return Sd();if(!e)throw Ft.create("no-app",{appName:n});return e}function nt(n,e,t){let r=Lg[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(o.join(" "));return}pn(new Wt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Bg="firebase-heartbeat-database",Ug=1,Ur="firebase-heartbeat-store";let Io=null;function Ad(){return Io||(Io=ng(Bg,Ug,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ur)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ft.create("idb-open",{originalErrorMessage:n.message})})),Io}async function Fg(n){try{const t=(await Ad()).transaction(Ur),r=await t.objectStore(Ur).get(Rd(n));return await t.done,r}catch(e){if(e instanceof ct)pt.warn(e.message);else{const t=Ft.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pt.warn(t.message)}}}async function xc(n,e){try{const r=(await Ad()).transaction(Ur,"readwrite");await r.objectStore(Ur).put(e,Rd(n)),await r.done}catch(t){if(t instanceof ct)pt.warn(t.message);else{const r=Ft.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});pt.warn(r.message)}}}function Rd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const $g=1024,Hg=30;class jg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Hg){const o=zg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){pt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Lc(),{heartbeatsToSend:r,unsentEntries:s}=Wg(this._heartbeatsCache.heartbeats),i=zs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return pt.warn(t),""}}}function Lc(){return new Date().toISOString().substring(0,10)}function Wg(n,e=$g){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Oc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Oc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class qg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kp()?Np().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Fg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Oc(n){return zs(JSON.stringify({version:2,heartbeats:n})).length}function zg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Gg(n){pn(new Wt("platform-logger",e=>new ig(e),"PRIVATE")),pn(new Wt("heartbeat",e=>new jg(e),"PRIVATE")),nt(Fo,kc,n),nt(Fo,kc,"esm2020"),nt("fire-js","")}Gg("");var Vc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $t,Pd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,E){function v(){}v.prototype=E.prototype,C.F=E.prototype,C.prototype=new v,C.prototype.constructor=C,C.D=function(S,I,P){for(var T=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)T[Le-2]=arguments[Le];return E.prototype[I].apply(S,T)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(C,E,v){v||(v=0);const S=Array(16);if(typeof E=="string")for(var I=0;I<16;++I)S[I]=E.charCodeAt(v++)|E.charCodeAt(v++)<<8|E.charCodeAt(v++)<<16|E.charCodeAt(v++)<<24;else for(I=0;I<16;++I)S[I]=E[v++]|E[v++]<<8|E[v++]<<16|E[v++]<<24;E=C.g[0],v=C.g[1],I=C.g[2];let P=C.g[3],T;T=E+(P^v&(I^P))+S[0]+3614090360&4294967295,E=v+(T<<7&4294967295|T>>>25),T=P+(I^E&(v^I))+S[1]+3905402710&4294967295,P=E+(T<<12&4294967295|T>>>20),T=I+(v^P&(E^v))+S[2]+606105819&4294967295,I=P+(T<<17&4294967295|T>>>15),T=v+(E^I&(P^E))+S[3]+3250441966&4294967295,v=I+(T<<22&4294967295|T>>>10),T=E+(P^v&(I^P))+S[4]+4118548399&4294967295,E=v+(T<<7&4294967295|T>>>25),T=P+(I^E&(v^I))+S[5]+1200080426&4294967295,P=E+(T<<12&4294967295|T>>>20),T=I+(v^P&(E^v))+S[6]+2821735955&4294967295,I=P+(T<<17&4294967295|T>>>15),T=v+(E^I&(P^E))+S[7]+4249261313&4294967295,v=I+(T<<22&4294967295|T>>>10),T=E+(P^v&(I^P))+S[8]+1770035416&4294967295,E=v+(T<<7&4294967295|T>>>25),T=P+(I^E&(v^I))+S[9]+2336552879&4294967295,P=E+(T<<12&4294967295|T>>>20),T=I+(v^P&(E^v))+S[10]+4294925233&4294967295,I=P+(T<<17&4294967295|T>>>15),T=v+(E^I&(P^E))+S[11]+2304563134&4294967295,v=I+(T<<22&4294967295|T>>>10),T=E+(P^v&(I^P))+S[12]+1804603682&4294967295,E=v+(T<<7&4294967295|T>>>25),T=P+(I^E&(v^I))+S[13]+4254626195&4294967295,P=E+(T<<12&4294967295|T>>>20),T=I+(v^P&(E^v))+S[14]+2792965006&4294967295,I=P+(T<<17&4294967295|T>>>15),T=v+(E^I&(P^E))+S[15]+1236535329&4294967295,v=I+(T<<22&4294967295|T>>>10),T=E+(I^P&(v^I))+S[1]+4129170786&4294967295,E=v+(T<<5&4294967295|T>>>27),T=P+(v^I&(E^v))+S[6]+3225465664&4294967295,P=E+(T<<9&4294967295|T>>>23),T=I+(E^v&(P^E))+S[11]+643717713&4294967295,I=P+(T<<14&4294967295|T>>>18),T=v+(P^E&(I^P))+S[0]+3921069994&4294967295,v=I+(T<<20&4294967295|T>>>12),T=E+(I^P&(v^I))+S[5]+3593408605&4294967295,E=v+(T<<5&4294967295|T>>>27),T=P+(v^I&(E^v))+S[10]+38016083&4294967295,P=E+(T<<9&4294967295|T>>>23),T=I+(E^v&(P^E))+S[15]+3634488961&4294967295,I=P+(T<<14&4294967295|T>>>18),T=v+(P^E&(I^P))+S[4]+3889429448&4294967295,v=I+(T<<20&4294967295|T>>>12),T=E+(I^P&(v^I))+S[9]+568446438&4294967295,E=v+(T<<5&4294967295|T>>>27),T=P+(v^I&(E^v))+S[14]+3275163606&4294967295,P=E+(T<<9&4294967295|T>>>23),T=I+(E^v&(P^E))+S[3]+4107603335&4294967295,I=P+(T<<14&4294967295|T>>>18),T=v+(P^E&(I^P))+S[8]+1163531501&4294967295,v=I+(T<<20&4294967295|T>>>12),T=E+(I^P&(v^I))+S[13]+2850285829&4294967295,E=v+(T<<5&4294967295|T>>>27),T=P+(v^I&(E^v))+S[2]+4243563512&4294967295,P=E+(T<<9&4294967295|T>>>23),T=I+(E^v&(P^E))+S[7]+1735328473&4294967295,I=P+(T<<14&4294967295|T>>>18),T=v+(P^E&(I^P))+S[12]+2368359562&4294967295,v=I+(T<<20&4294967295|T>>>12),T=E+(v^I^P)+S[5]+4294588738&4294967295,E=v+(T<<4&4294967295|T>>>28),T=P+(E^v^I)+S[8]+2272392833&4294967295,P=E+(T<<11&4294967295|T>>>21),T=I+(P^E^v)+S[11]+1839030562&4294967295,I=P+(T<<16&4294967295|T>>>16),T=v+(I^P^E)+S[14]+4259657740&4294967295,v=I+(T<<23&4294967295|T>>>9),T=E+(v^I^P)+S[1]+2763975236&4294967295,E=v+(T<<4&4294967295|T>>>28),T=P+(E^v^I)+S[4]+1272893353&4294967295,P=E+(T<<11&4294967295|T>>>21),T=I+(P^E^v)+S[7]+4139469664&4294967295,I=P+(T<<16&4294967295|T>>>16),T=v+(I^P^E)+S[10]+3200236656&4294967295,v=I+(T<<23&4294967295|T>>>9),T=E+(v^I^P)+S[13]+681279174&4294967295,E=v+(T<<4&4294967295|T>>>28),T=P+(E^v^I)+S[0]+3936430074&4294967295,P=E+(T<<11&4294967295|T>>>21),T=I+(P^E^v)+S[3]+3572445317&4294967295,I=P+(T<<16&4294967295|T>>>16),T=v+(I^P^E)+S[6]+76029189&4294967295,v=I+(T<<23&4294967295|T>>>9),T=E+(v^I^P)+S[9]+3654602809&4294967295,E=v+(T<<4&4294967295|T>>>28),T=P+(E^v^I)+S[12]+3873151461&4294967295,P=E+(T<<11&4294967295|T>>>21),T=I+(P^E^v)+S[15]+530742520&4294967295,I=P+(T<<16&4294967295|T>>>16),T=v+(I^P^E)+S[2]+3299628645&4294967295,v=I+(T<<23&4294967295|T>>>9),T=E+(I^(v|~P))+S[0]+4096336452&4294967295,E=v+(T<<6&4294967295|T>>>26),T=P+(v^(E|~I))+S[7]+1126891415&4294967295,P=E+(T<<10&4294967295|T>>>22),T=I+(E^(P|~v))+S[14]+2878612391&4294967295,I=P+(T<<15&4294967295|T>>>17),T=v+(P^(I|~E))+S[5]+4237533241&4294967295,v=I+(T<<21&4294967295|T>>>11),T=E+(I^(v|~P))+S[12]+1700485571&4294967295,E=v+(T<<6&4294967295|T>>>26),T=P+(v^(E|~I))+S[3]+2399980690&4294967295,P=E+(T<<10&4294967295|T>>>22),T=I+(E^(P|~v))+S[10]+4293915773&4294967295,I=P+(T<<15&4294967295|T>>>17),T=v+(P^(I|~E))+S[1]+2240044497&4294967295,v=I+(T<<21&4294967295|T>>>11),T=E+(I^(v|~P))+S[8]+1873313359&4294967295,E=v+(T<<6&4294967295|T>>>26),T=P+(v^(E|~I))+S[15]+4264355552&4294967295,P=E+(T<<10&4294967295|T>>>22),T=I+(E^(P|~v))+S[6]+2734768916&4294967295,I=P+(T<<15&4294967295|T>>>17),T=v+(P^(I|~E))+S[13]+1309151649&4294967295,v=I+(T<<21&4294967295|T>>>11),T=E+(I^(v|~P))+S[4]+4149444226&4294967295,E=v+(T<<6&4294967295|T>>>26),T=P+(v^(E|~I))+S[11]+3174756917&4294967295,P=E+(T<<10&4294967295|T>>>22),T=I+(E^(P|~v))+S[2]+718787259&4294967295,I=P+(T<<15&4294967295|T>>>17),T=v+(P^(I|~E))+S[9]+3951481745&4294967295,C.g[0]=C.g[0]+E&4294967295,C.g[1]=C.g[1]+(I+(T<<21&4294967295|T>>>11))&4294967295,C.g[2]=C.g[2]+I&4294967295,C.g[3]=C.g[3]+P&4294967295}r.prototype.v=function(C,E){E===void 0&&(E=C.length);const v=E-this.blockSize,S=this.C;let I=this.h,P=0;for(;P<E;){if(I==0)for(;P<=v;)s(this,C,P),P+=this.blockSize;if(typeof C=="string"){for(;P<E;)if(S[I++]=C.charCodeAt(P++),I==this.blockSize){s(this,S),I=0;break}}else for(;P<E;)if(S[I++]=C[P++],I==this.blockSize){s(this,S),I=0;break}}this.h=I,this.o+=E},r.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var E=1;E<C.length-8;++E)C[E]=0;E=this.o*8;for(var v=C.length-8;v<C.length;++v)C[v]=E&255,E/=256;for(this.v(C),C=Array(16),E=0,v=0;v<4;++v)for(let S=0;S<32;S+=8)C[E++]=this.g[v]>>>S&255;return C};function i(C,E){var v=l;return Object.prototype.hasOwnProperty.call(v,C)?v[C]:v[C]=E(C)}function o(C,E){this.h=E;const v=[];let S=!0;for(let I=C.length-1;I>=0;I--){const P=C[I]|0;S&&P==E||(v[I]=P,S=!1)}this.g=v}var l={};function c(C){return-128<=C&&C<128?i(C,function(E){return new o([E|0],E<0?-1:0)}):new o([C|0],C<0?-1:0)}function u(C){if(isNaN(C)||!isFinite(C))return f;if(C<0)return b(u(-C));const E=[];let v=1;for(let S=0;C>=v;S++)E[S]=C/v|0,v*=4294967296;return new o(E,0)}function d(C,E){if(C.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(C.charAt(0)=="-")return b(d(C.substring(1),E));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=u(Math.pow(E,8));let S=f;for(let P=0;P<C.length;P+=8){var I=Math.min(8,C.length-P);const T=parseInt(C.substring(P,P+I),E);I<8?(I=u(Math.pow(E,I)),S=S.j(I).add(u(T))):(S=S.j(v),S=S.add(u(T)))}return S}var f=c(0),m=c(1),g=c(16777216);n=o.prototype,n.m=function(){if(w(this))return-b(this).m();let C=0,E=1;for(let v=0;v<this.g.length;v++){const S=this.i(v);C+=(S>=0?S:4294967296+S)*E,E*=4294967296}return C},n.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(_(this))return"0";if(w(this))return"-"+b(this).toString(C);const E=u(Math.pow(C,6));var v=this;let S="";for(;;){const I=$(v,E).g;v=k(v,I.j(E));let P=((v.g.length>0?v.g[0]:v.h)>>>0).toString(C);if(v=I,_(v))return P+S;for(;P.length<6;)P="0"+P;S=P+S}},n.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function _(C){if(C.h!=0)return!1;for(let E=0;E<C.g.length;E++)if(C.g[E]!=0)return!1;return!0}function w(C){return C.h==-1}n.l=function(C){return C=k(this,C),w(C)?-1:_(C)?0:1};function b(C){const E=C.g.length,v=[];for(let S=0;S<E;S++)v[S]=~C.g[S];return new o(v,~C.h).add(m)}n.abs=function(){return w(this)?b(this):this},n.add=function(C){const E=Math.max(this.g.length,C.g.length),v=[];let S=0;for(let I=0;I<=E;I++){let P=S+(this.i(I)&65535)+(C.i(I)&65535),T=(P>>>16)+(this.i(I)>>>16)+(C.i(I)>>>16);S=T>>>16,P&=65535,T&=65535,v[I]=T<<16|P}return new o(v,v[v.length-1]&-2147483648?-1:0)};function k(C,E){return C.add(b(E))}n.j=function(C){if(_(this)||_(C))return f;if(w(this))return w(C)?b(this).j(b(C)):b(b(this).j(C));if(w(C))return b(this.j(b(C)));if(this.l(g)<0&&C.l(g)<0)return u(this.m()*C.m());const E=this.g.length+C.g.length,v=[];for(var S=0;S<2*E;S++)v[S]=0;for(S=0;S<this.g.length;S++)for(let I=0;I<C.g.length;I++){const P=this.i(S)>>>16,T=this.i(S)&65535,Le=C.i(I)>>>16,tn=C.i(I)&65535;v[2*S+2*I]+=T*tn,L(v,2*S+2*I),v[2*S+2*I+1]+=P*tn,L(v,2*S+2*I+1),v[2*S+2*I+1]+=T*Le,L(v,2*S+2*I+1),v[2*S+2*I+2]+=P*Le,L(v,2*S+2*I+2)}for(C=0;C<E;C++)v[C]=v[2*C+1]<<16|v[2*C];for(C=E;C<2*E;C++)v[C]=0;return new o(v,0)};function L(C,E){for(;(C[E]&65535)!=C[E];)C[E+1]+=C[E]>>>16,C[E]&=65535,E++}function B(C,E){this.g=C,this.h=E}function $(C,E){if(_(E))throw Error("division by zero");if(_(C))return new B(f,f);if(w(C))return E=$(b(C),E),new B(b(E.g),b(E.h));if(w(E))return E=$(C,b(E)),new B(b(E.g),E.h);if(C.g.length>30){if(w(C)||w(E))throw Error("slowDivide_ only works with positive integers.");for(var v=m,S=E;S.l(C)<=0;)v=Y(v),S=Y(S);var I=te(v,1),P=te(S,1);for(S=te(S,2),v=te(v,2);!_(S);){var T=P.add(S);T.l(C)<=0&&(I=I.add(v),P=T),S=te(S,1),v=te(v,1)}return E=k(C,I.j(E)),new B(I,E)}for(I=f;C.l(E)>=0;){for(v=Math.max(1,Math.floor(C.m()/E.m())),S=Math.ceil(Math.log(v)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),P=u(v),T=P.j(E);w(T)||T.l(C)>0;)v-=S,P=u(v),T=P.j(E);_(P)&&(P=m),I=I.add(P),C=k(C,T)}return new B(I,C)}n.B=function(C){return $(this,C).h},n.and=function(C){const E=Math.max(this.g.length,C.g.length),v=[];for(let S=0;S<E;S++)v[S]=this.i(S)&C.i(S);return new o(v,this.h&C.h)},n.or=function(C){const E=Math.max(this.g.length,C.g.length),v=[];for(let S=0;S<E;S++)v[S]=this.i(S)|C.i(S);return new o(v,this.h|C.h)},n.xor=function(C){const E=Math.max(this.g.length,C.g.length),v=[];for(let S=0;S<E;S++)v[S]=this.i(S)^C.i(S);return new o(v,this.h^C.h)};function Y(C){const E=C.g.length+1,v=[];for(let S=0;S<E;S++)v[S]=C.i(S)<<1|C.i(S-1)>>>31;return new o(v,C.h)}function te(C,E){const v=E>>5;E%=32;const S=C.g.length-v,I=[];for(let P=0;P<S;P++)I[P]=E>0?C.i(P+v)>>>E|C.i(P+v+1)<<32-E:C.i(P+v);return new o(I,C.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Pd=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,$t=o}).apply(typeof Vc<"u"?Vc:typeof self<"u"?self:typeof window<"u"?window:{});var Ss=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dd,br,kd,Ls,jo,Nd,xd,Ld;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ss=="object"&&Ss];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var R=a[y];if(!(R in p))break e;p=p[R]}a=a[a.length-1],y=p[a],h=h(y),h!=y&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var p=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&p.push([y,h[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,p){return a.call.apply(a.bind,arguments)}function u(a,h,p){return u=c,u.apply(null,arguments)}function d(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function f(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(y,R,D){for(var O=Array(arguments.length-2),G=2;G<arguments.length;G++)O[G-2]=arguments[G];return h.prototype[R].apply(y,O)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function g(a){const h=a.length;if(h>0){const p=Array(h);for(let y=0;y<h;y++)p[y]=a[y];return p}return[]}function _(a,h){for(let y=1;y<arguments.length;y++){const R=arguments[y];var p=typeof R;if(p=p!="object"?p:R?Array.isArray(R)?"array":p:"null",p=="array"||p=="object"&&typeof R.length=="number"){p=a.length||0;const D=R.length||0;a.length=p+D;for(let O=0;O<D;O++)a[p+O]=R[O]}else a.push(R)}}class w{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function k(){var a=C;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class L{constructor(){this.h=this.g=null}add(h,p){const y=B.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var B=new w(()=>new $,a=>a.reset());class ${constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,te=!1,C=new L,E=()=>{const a=Promise.resolve(void 0);Y=()=>{a.then(v)}};function v(){for(var a;a=k();){try{a.h.call(a.g)}catch(p){b(p)}var h=B;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}te=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function Le(a,h){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}f(Le,I),Le.prototype.init=function(a,h){const p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Le.Z.h.call(this)},Le.prototype.h=function(){Le.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var tn="closure_listenable_"+(Math.random()*1e6|0),Dm=0;function km(a,h,p,y,R){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=R,this.key=++Dm,this.da=this.fa=!1}function ds(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function hs(a,h,p){for(const y in a)h.call(p,a[y],y,a)}function Nm(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function vl(a){const h={};for(const p in a)h[p]=a[p];return h}const Il="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cl(a,h){let p,y;for(let R=1;R<arguments.length;R++){y=arguments[R];for(p in y)a[p]=y[p];for(let D=0;D<Il.length;D++)p=Il[D],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function fs(a){this.src=a,this.g={},this.h=0}fs.prototype.add=function(a,h,p,y,R){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const O=Xi(a,h,y,R);return O>-1?(h=a[O],p||(h.fa=!1)):(h=new km(h,this.src,D,!!y,R),h.fa=p,a.push(h)),h};function Ki(a,h){const p=h.type;if(p in a.g){var y=a.g[p],R=Array.prototype.indexOf.call(y,h,void 0),D;(D=R>=0)&&Array.prototype.splice.call(y,R,1),D&&(ds(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Xi(a,h,p,y){for(let R=0;R<a.length;++R){const D=a[R];if(!D.da&&D.listener==h&&D.capture==!!p&&D.ha==y)return R}return-1}var Qi="closure_lm_"+(Math.random()*1e6|0),Ji={};function bl(a,h,p,y,R){if(Array.isArray(h)){for(let D=0;D<h.length;D++)bl(a,h[D],p,y,R);return null}return p=Rl(p),a&&a[tn]?a.J(h,p,l(y)?!!y.capture:!1,R):xm(a,h,p,!1,y,R)}function xm(a,h,p,y,R,D){if(!h)throw Error("Invalid event type");const O=l(R)?!!R.capture:!!R;let G=Zi(a);if(G||(a[Qi]=G=new fs(a)),p=G.add(h,p,y,O,D),p.proxy)return p;if(y=Lm(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)P||(R=O),R===void 0&&(R=!1),a.addEventListener(h.toString(),y,R);else if(a.attachEvent)a.attachEvent(Al(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Lm(){function a(p){return h.call(a.src,a.listener,p)}const h=Om;return a}function Sl(a,h,p,y,R){if(Array.isArray(h))for(var D=0;D<h.length;D++)Sl(a,h[D],p,y,R);else y=l(y)?!!y.capture:!!y,p=Rl(p),a&&a[tn]?(a=a.i,D=String(h).toString(),D in a.g&&(h=a.g[D],p=Xi(h,p,y,R),p>-1&&(ds(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[D],a.h--)))):a&&(a=Zi(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Xi(h,p,y,R)),(p=a>-1?h[a]:null)&&Yi(p))}function Yi(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[tn])Ki(h.i,a);else{var p=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(p,y,a.capture):h.detachEvent?h.detachEvent(Al(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=Zi(h))?(Ki(p,a),p.h==0&&(p.src=null,h[Qi]=null)):ds(a)}}}function Al(a){return a in Ji?Ji[a]:Ji[a]="on"+a}function Om(a,h){if(a.da)a=!0;else{h=new Le(h,this);const p=a.listener,y=a.ha||a.src;a.fa&&Yi(a),a=p.call(y,h)}return a}function Zi(a){return a=a[Qi],a instanceof fs?a:null}var eo="__closure_events_fn_"+(Math.random()*1e9>>>0);function Rl(a){return typeof a=="function"?a:(a[eo]||(a[eo]=function(h){return a.handleEvent(h)}),a[eo])}function Ce(){S.call(this),this.i=new fs(this),this.M=this,this.G=null}f(Ce,S),Ce.prototype[tn]=!0,Ce.prototype.removeEventListener=function(a,h,p,y){Sl(this,a,h,p,y)};function Pe(a,h){var p,y=a.G;if(y)for(p=[];y;y=y.G)p.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new I(h,a);else if(h instanceof I)h.target=h.target||a;else{var R=h;h=new I(y,a),Cl(h,R)}R=!0;let D,O;if(p)for(O=p.length-1;O>=0;O--)D=h.g=p[O],R=ms(D,y,!0,h)&&R;if(D=h.g=a,R=ms(D,y,!0,h)&&R,R=ms(D,y,!1,h)&&R,p)for(O=0;O<p.length;O++)D=h.g=p[O],R=ms(D,y,!1,h)&&R}Ce.prototype.N=function(){if(Ce.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let y=0;y<p.length;y++)ds(p[y]);delete a.g[h],a.h--}}this.G=null},Ce.prototype.J=function(a,h,p,y){return this.i.add(String(a),h,!1,p,y)},Ce.prototype.K=function(a,h,p,y){return this.i.add(String(a),h,!0,p,y)};function ms(a,h,p,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let R=!0;for(let D=0;D<h.length;++D){const O=h[D];if(O&&!O.da&&O.capture==p){const G=O.listener,me=O.ha||O.src;O.fa&&Ki(a.i,O),R=G.call(me,y)!==!1&&R}}return R&&!y.defaultPrevented}function Vm(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Pl(a){a.g=Vm(()=>{a.g=null,a.i&&(a.i=!1,Pl(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Mm extends S{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Pl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ir(a){S.call(this),this.h=a,this.g={}}f(ir,S);var Dl=[];function kl(a){hs(a.g,function(h,p){this.g.hasOwnProperty(p)&&Yi(h)},a),a.g={}}ir.prototype.N=function(){ir.Z.N.call(this),kl(this)},ir.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var to=o.JSON.stringify,Bm=o.JSON.parse,Um=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Nl(){}function xl(){}var or={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function no(){I.call(this,"d")}f(no,I);function ro(){I.call(this,"c")}f(ro,I);var nn={},Ll=null;function ps(){return Ll=Ll||new Ce}nn.Ia="serverreachability";function Ol(a){I.call(this,nn.Ia,a)}f(Ol,I);function ar(a){const h=ps();Pe(h,new Ol(h))}nn.STAT_EVENT="statevent";function Vl(a,h){I.call(this,nn.STAT_EVENT,a),this.stat=h}f(Vl,I);function De(a){const h=ps();Pe(h,new Vl(h,a))}nn.Ja="timingevent";function Ml(a,h){I.call(this,nn.Ja,a),this.size=h}f(Ml,I);function lr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function cr(){this.g=!0}cr.prototype.ua=function(){this.g=!1};function Fm(a,h,p,y,R,D){a.info(function(){if(a.g)if(D){var O="",G=D.split("&");for(let ne=0;ne<G.length;ne++){var me=G[ne].split("=");if(me.length>1){const we=me[0];me=me[1];const Ze=we.split("_");O=Ze.length>=2&&Ze[1]=="type"?O+(we+"="+me+"&"):O+(we+"=redacted&")}}}else O=null;else O=D;return"XMLHTTP REQ ("+y+") [attempt "+R+"]: "+h+`
`+p+`
`+O})}function $m(a,h,p,y,R,D,O){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+R+"]: "+h+`
`+p+`
`+D+" "+O})}function Sn(a,h,p,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+jm(a,p)+(y?" "+y:"")})}function Hm(a,h){a.info(function(){return"TIMEOUT: "+h})}cr.prototype.info=function(){};function jm(a,h){if(!a.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var p=D[a];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var R=y[0];if(R!="noop"&&R!="stop"&&R!="close")for(let O=1;O<y.length;O++)y[O]=""}}}}return to(D)}catch{return h}}var gs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Bl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ul;function so(){}f(so,Nl),so.prototype.g=function(){return new XMLHttpRequest},Ul=new so;function ur(a){return encodeURIComponent(String(a))}function Wm(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function bt(a,h,p,y){this.j=a,this.i=h,this.l=p,this.S=y||1,this.V=new ir(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Fl}function Fl(){this.i=null,this.g="",this.h=!1}var $l={},io={};function oo(a,h,p){a.M=1,a.A=_s(Ye(h)),a.u=p,a.R=!0,Hl(a,null)}function Hl(a,h){a.F=Date.now(),ys(a),a.B=Ye(a.A);var p=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),tc(p.i,"t",y),a.C=0,p=a.j.L,a.h=new Fl,a.g=wc(a.j,p?h:null,!a.u),a.P>0&&(a.O=new Mm(u(a.Y,a,a.g),a.P)),h=a.V,p=a.g,y=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(Dl[0]=R.toString()),R=Dl);for(let D=0;D<R.length;D++){const O=bl(p,R[D],y||h.handleEvent,!1,h.h||h);if(!O)break;h.g[O.key]=O}h=a.J?vl(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),ar(),Fm(a.i,a.v,a.B,a.l,a.S,a.u)}bt.prototype.ba=function(a){a=a.target;const h=this.O;h&&Rt(a)==3?h.j():this.Y(a)},bt.prototype.Y=function(a){try{if(a==this.g)e:{const G=Rt(this.g),me=this.g.ya(),ne=this.g.ca();if(!(G<3)&&(G!=3||this.g&&(this.h.h||this.g.la()||lc(this.g)))){this.K||G!=4||me==7||(me==8||ne<=0?ar(3):ar(2)),ao(this);var h=this.g.ca();this.X=h;var p=qm(this);if(this.o=h==200,$m(this.i,this.v,this.B,this.l,this.S,G,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,R=this.g;if((y=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(y)){var D=y;break t}}D=null}if(a=D)Sn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,lo(this,a);else{this.o=!1,this.m=3,De(12),rn(this),dr(this);break e}}if(this.R){a=!0;let we;for(;!this.K&&this.C<p.length;)if(we=zm(this,p),we==io){G==4&&(this.m=4,De(14),a=!1),Sn(this.i,this.l,null,"[Incomplete Response]");break}else if(we==$l){this.m=4,De(15),Sn(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else Sn(this.i,this.l,we,null),lo(this,we);if(jl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||p.length!=0||this.h.h||(this.m=1,De(16),a=!1),this.o=this.o&&a,!a)Sn(this.i,this.l,p,"[Invalid Chunked Response]"),rn(this),dr(this);else if(p.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),yo(O),O.P=!0,De(11))}}else Sn(this.i,this.l,p,null),lo(this,p);G==4&&rn(this),this.o&&!this.K&&(G==4?pc(this.j,this):(this.o=!1,ys(this)))}else op(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,De(12)):(this.m=0,De(13)),rn(this),dr(this)}}}catch{}finally{}};function qm(a){if(!jl(a))return a.g.la();const h=lc(a.g);if(h==="")return"";let p="";const y=h.length,R=Rt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return rn(a),dr(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<y;D++)a.h.h=!0,p+=a.h.i.decode(h[D],{stream:!(R&&D==y-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function jl(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function zm(a,h){var p=a.C,y=h.indexOf(`
`,p);return y==-1?io:(p=Number(h.substring(p,y)),isNaN(p)?$l:(y+=1,y+p>h.length?io:(h=h.slice(y,y+p),a.C=y+p,h)))}bt.prototype.cancel=function(){this.K=!0,rn(this)};function ys(a){a.T=Date.now()+a.H,Wl(a,a.H)}function Wl(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=lr(u(a.aa,a),h)}function ao(a){a.D&&(o.clearTimeout(a.D),a.D=null)}bt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Hm(this.i,this.B),this.M!=2&&(ar(),De(17)),rn(this),this.m=2,dr(this)):Wl(this,this.T-a)};function dr(a){a.j.I==0||a.K||pc(a.j,a)}function rn(a){ao(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,kl(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function lo(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||co(p.h,a))){if(!a.L&&co(p.h,a)&&p.I==3){try{var y=p.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var R=y;if(R[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Is(p),Ts(p);else break e;go(p),De(18)}}else p.xa=R[1],0<p.xa-p.K&&R[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=lr(u(p.Va,p),6e3));Gl(p.h)<=1&&p.ta&&(p.ta=void 0)}else on(p,11)}else if((a.L||p.g==a)&&Is(p),!T(h))for(R=p.Ba.g.parse(h),h=0;h<R.length;h++){let ne=R[h];const we=ne[0];if(!(we<=p.K))if(p.K=we,ne=ne[1],p.I==2)if(ne[0]=="c"){p.M=ne[1],p.ba=ne[2];const Ze=ne[3];Ze!=null&&(p.ka=Ze,p.j.info("VER="+p.ka));const an=ne[4];an!=null&&(p.za=an,p.j.info("SVER="+p.za));const Pt=ne[5];Pt!=null&&typeof Pt=="number"&&Pt>0&&(y=1.5*Pt,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const Dt=a.g;if(Dt){const bs=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bs){var D=y.h;D.g||bs.indexOf("spdy")==-1&&bs.indexOf("quic")==-1&&bs.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(uo(D,D.h),D.h=null))}if(y.G){const _o=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;_o&&(y.wa=_o,re(y.J,y.G,_o))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var O=a;if(y.na=_c(y,y.L?y.ba:null,y.W),O.L){Kl(y.h,O);var G=O,me=y.O;me&&(G.H=me),G.D&&(ao(G),ys(G)),y.g=O}else fc(y);p.i.length>0&&vs(p)}else ne[0]!="stop"&&ne[0]!="close"||on(p,7);else p.I==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?on(p,7):po(p):ne[0]!="noop"&&p.l&&p.l.qa(ne),p.A=0)}}ar(4)}catch{}}var Gm=class{constructor(a,h){this.g=a,this.map=h}};function ql(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function zl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Gl(a){return a.h?1:a.g?a.g.size:0}function co(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function uo(a,h){a.g?a.g.add(h):a.h=h}function Kl(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ql.prototype.cancel=function(){if(this.i=Xl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Xl(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return g(a.i)}var Ql=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Km(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const y=a[p].indexOf("=");let R,D=null;y>=0?(R=a[p].substring(0,y),D=a[p].substring(y+1)):R=a[p],h(R,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function St(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof St?(this.l=a.l,hr(this,a.j),this.o=a.o,this.g=a.g,fr(this,a.u),this.h=a.h,ho(this,nc(a.i)),this.m=a.m):a&&(h=String(a).match(Ql))?(this.l=!1,hr(this,h[1]||"",!0),this.o=mr(h[2]||""),this.g=mr(h[3]||"",!0),fr(this,h[4]),this.h=mr(h[5]||"",!0),ho(this,h[6]||"",!0),this.m=mr(h[7]||"")):(this.l=!1,this.i=new gr(null,this.l))}St.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(pr(h,Jl,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(pr(h,Jl,!0),"@"),a.push(ur(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(pr(p,p.charAt(0)=="/"?Jm:Qm,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",pr(p,Zm)),a.join("")},St.prototype.resolve=function(a){const h=Ye(this);let p=!!a.j;p?hr(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var y=a.h;if(p)fr(h,a.u);else if(p=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var R=h.h.lastIndexOf("/");R!=-1&&(y=h.h.slice(0,R+1)+y)}if(R=y,R==".."||R==".")y="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){y=R.lastIndexOf("/",0)==0,R=R.split("/");const D=[];for(let O=0;O<R.length;){const G=R[O++];G=="."?y&&O==R.length&&D.push(""):G==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),y&&O==R.length&&D.push("")):(D.push(G),y=!0)}y=D.join("/")}else y=R}return p?h.h=y:p=a.i.toString()!=="",p?ho(h,nc(a.i)):p=!!a.m,p&&(h.m=a.m),h};function Ye(a){return new St(a)}function hr(a,h,p){a.j=p?mr(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function fr(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function ho(a,h,p){h instanceof gr?(a.i=h,ep(a.i,a.l)):(p||(h=pr(h,Ym)),a.i=new gr(h,a.l))}function re(a,h,p){a.i.set(h,p)}function _s(a){return re(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function mr(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function pr(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,Xm),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Xm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Jl=/[#\/\?@]/g,Qm=/[#\?:]/g,Jm=/[#\?]/g,Ym=/[#\?@]/g,Zm=/#/g;function gr(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function sn(a){a.g||(a.g=new Map,a.h=0,a.i&&Km(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}n=gr.prototype,n.add=function(a,h){sn(this),this.i=null,a=An(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Yl(a,h){sn(a),h=An(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Zl(a,h){return sn(a),h=An(a,h),a.g.has(h)}n.forEach=function(a,h){sn(this),this.g.forEach(function(p,y){p.forEach(function(R){a.call(h,R,y,this)},this)},this)};function ec(a,h){sn(a);let p=[];if(typeof h=="string")Zl(a,h)&&(p=p.concat(a.g.get(An(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}n.set=function(a,h){return sn(this),this.i=null,a=An(this,a),Zl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=ec(this,a),a.length>0?String(a[0]):h):h};function tc(a,h,p){Yl(a,h),p.length>0&&(a.i=null,a.g.set(An(a,h),g(p)),a.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var p=h[y];const R=ur(p);p=ec(this,p);for(let D=0;D<p.length;D++){let O=R;p[D]!==""&&(O+="="+ur(p[D])),a.push(O)}}return this.i=a.join("&")};function nc(a){const h=new gr;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function An(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function ep(a,h){h&&!a.j&&(sn(a),a.i=null,a.g.forEach(function(p,y){const R=y.toLowerCase();y!=R&&(Yl(this,y),tc(this,R,p))},a)),a.j=h}function tp(a,h){const p=new cr;if(o.Image){const y=new Image;y.onload=d(At,p,"TestLoadImage: loaded",!0,h,y),y.onerror=d(At,p,"TestLoadImage: error",!1,h,y),y.onabort=d(At,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=d(At,p,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function np(a,h){const p=new cr,y=new AbortController,R=setTimeout(()=>{y.abort(),At(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(D=>{clearTimeout(R),D.ok?At(p,"TestPingServer: ok",!0,h):At(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(R),At(p,"TestPingServer: error",!1,h)})}function At(a,h,p,y,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),y(p)}catch{}}function rp(){this.g=new Um}function fo(a){this.i=a.Sb||null,this.h=a.ab||!1}f(fo,Nl),fo.prototype.g=function(){return new ws(this.i,this.h)};function ws(a,h){Ce.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(ws,Ce),n=ws.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,_r(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,yr(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,_r(this)),this.g&&(this.readyState=3,_r(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;rc(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function rc(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?yr(this):_r(this),this.readyState==3&&rc(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,yr(this))},n.Na=function(a){this.g&&(this.response=a,yr(this))},n.ga=function(){this.g&&yr(this)};function yr(a){a.readyState=4,a.l=null,a.j=null,a.B=null,_r(a)}n.setRequestHeader=function(a,h){this.A.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function _r(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ws.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function sc(a){let h="";return hs(a,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function mo(a,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=sc(p),typeof a=="string"?p!=null&&ur(p):re(a,h,p))}function ce(a){Ce.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(ce,Ce);var sp=/^https?$/i,ip=["POST","PUT"];n=ce.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ul.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){ic(this,D);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var R in y)p.set(R,y[R]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const D of y.keys())p.set(D,y.get(D));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(ip,h,void 0)>=0)||y||R||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,O]of p)this.g.setRequestHeader(D,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){ic(this,D)}};function ic(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,oc(a),Es(a)}function oc(a){a.A||(a.A=!0,Pe(a,"complete"),Pe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Pe(this,"complete"),Pe(this,"abort"),Es(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Es(this,!0)),ce.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ac(this):this.Xa())},n.Xa=function(){ac(this)};function ac(a){if(a.h&&typeof i<"u"){if(a.v&&Rt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Pe(a,"readystatechange"),Rt(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=D===0){let O=String(a.D).match(Ql)[1]||null;!O&&o.self&&o.self.location&&(O=o.self.location.protocol.slice(0,-1)),y=!sp.test(O?O.toLowerCase():"")}p=y}if(p)Pe(a,"complete"),Pe(a,"success");else{a.o=6;try{var R=Rt(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",oc(a)}}finally{Es(a)}}}}function Es(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||Pe(a,"ready");try{p.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Rt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Rt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Bm(h)}};function lc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function op(a){const h={};a=(a.g&&Rt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(T(a[y]))continue;var p=Wm(a[y]);const R=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=h[R]||[];h[R]=D,D.push(p)}Nm(h,function(y){return y.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function wr(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function cc(a){this.za=0,this.i=[],this.j=new cr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=wr("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=wr("baseRetryDelayMs",5e3,a),this.Za=wr("retryDelaySeedMs",1e4,a),this.Ta=wr("forwardChannelMaxRetries",2,a),this.va=wr("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ql(a&&a.concurrentRequestLimit),this.Ba=new rp,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=cc.prototype,n.ka=8,n.I=1,n.connect=function(a,h,p,y){De(0),this.W=a,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=_c(this,null,this.W),vs(this)};function po(a){if(uc(a),a.I==3){var h=a.V++,p=Ye(a.J);if(re(p,"SID",a.M),re(p,"RID",h),re(p,"TYPE","terminate"),Er(a,p),h=new bt(a,a.j,h),h.M=2,h.A=_s(Ye(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=wc(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ys(h)}yc(a)}function Ts(a){a.g&&(yo(a),a.g.cancel(),a.g=null)}function uc(a){Ts(a),a.v&&(o.clearTimeout(a.v),a.v=null),Is(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function vs(a){if(!zl(a.h)&&!a.m){a.m=!0;var h=a.Ea;Y||E(),te||(Y(),te=!0),C.add(h,a),a.D=0}}function ap(a,h){return Gl(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=lr(u(a.Ea,a,h),gc(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new bt(this,this.j,a);let D=this.o;if(this.U&&(D?(D=vl(D),Cl(D,this.U)):D=this.U),this.u!==null||this.R||(R.J=D,D=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=hc(this,R,h),p=Ye(this.J),re(p,"RID",a),re(p,"CVER",22),this.G&&re(p,"X-HTTP-Session-Id",this.G),Er(this,p),D&&(this.R?h="headers="+ur(sc(D))+"&"+h:this.u&&mo(p,this.u,D)),uo(this.h,R),this.Ra&&re(p,"TYPE","init"),this.S?(re(p,"$req",h),re(p,"SID","null"),R.U=!0,oo(R,p,null)):oo(R,p,h),this.I=2}}else this.I==3&&(a?dc(this,a):this.i.length==0||zl(this.h)||dc(this))};function dc(a,h){var p;h?p=h.l:p=a.V++;const y=Ye(a.J);re(y,"SID",a.M),re(y,"RID",p),re(y,"AID",a.K),Er(a,y),a.u&&a.o&&mo(y,a.u,a.o),p=new bt(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=hc(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),uo(a.h,p),oo(p,y,h)}function Er(a,h){a.H&&hs(a.H,function(p,y){re(h,y,p)}),a.l&&hs({},function(p,y){re(h,y,p)})}function hc(a,h,p){p=Math.min(a.i.length,p);const y=a.l?u(a.l.Ka,a.l,a):null;e:{var R=a.i;let G=-1;for(;;){const me=["count="+p];G==-1?p>0?(G=R[0].g,me.push("ofs="+G)):G=0:me.push("ofs="+G);let ne=!0;for(let we=0;we<p;we++){var D=R[we].g;const Ze=R[we].map;if(D-=G,D<0)G=Math.max(0,R[we].g-100),ne=!1;else try{D="req"+D+"_"||"";try{var O=Ze instanceof Map?Ze:Object.entries(Ze);for(const[an,Pt]of O){let Dt=Pt;l(Pt)&&(Dt=to(Pt)),me.push(D+an+"="+encodeURIComponent(Dt))}}catch(an){throw me.push(D+"type="+encodeURIComponent("_badmap")),an}}catch{y&&y(Ze)}}if(ne){O=me.join("&");break e}}O=void 0}return a=a.i.splice(0,p),h.G=a,O}function fc(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;Y||E(),te||(Y(),te=!0),C.add(h,a),a.A=0}}function go(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=lr(u(a.Da,a),gc(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,mc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=lr(u(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,De(10),Ts(this),mc(this))};function yo(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function mc(a){a.g=new bt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Ye(a.na);re(h,"RID","rpc"),re(h,"SID",a.M),re(h,"AID",a.K),re(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&re(h,"TO",a.ia),re(h,"TYPE","xmlhttp"),Er(a,h),a.u&&a.o&&mo(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=_s(Ye(h)),p.u=null,p.R=!0,Hl(p,a)}n.Va=function(){this.C!=null&&(this.C=null,Ts(this),go(this),De(19))};function Is(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function pc(a,h){var p=null;if(a.g==h){Is(a),yo(a),a.g=null;var y=2}else if(co(a.h,h))p=h.G,Kl(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var R=a.D;y=ps(),Pe(y,new Ml(y,p)),vs(a)}else fc(a);else if(R=h.m,R==3||R==0&&h.X>0||!(y==1&&ap(a,h)||y==2&&go(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),R){case 1:on(a,5);break;case 4:on(a,10);break;case 3:on(a,6);break;default:on(a,2)}}}function gc(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function on(a,h){if(a.j.info("Error code "+h),h==2){var p=u(a.bb,a),y=a.Ua;const R=!y;y=new St(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||hr(y,"https"),_s(y),R?tp(y.toString(),p):np(y.toString(),p)}else De(2);a.I=0,a.l&&a.l.pa(h),yc(a),uc(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function yc(a){if(a.I=0,a.ja=[],a.l){const h=Xl(a.h);(h.length!=0||a.i.length!=0)&&(_(a.ja,h),_(a.ja,a.i),a.h.i.length=0,g(a.i),a.i.length=0),a.l.oa()}}function _c(a,h,p){var y=p instanceof St?Ye(p):new St(p);if(y.g!="")h&&(y.g=h+"."+y.g),fr(y,y.u);else{var R=o.location;y=R.protocol,h=h?h+"."+R.hostname:R.hostname,R=+R.port;const D=new St(null);y&&hr(D,y),h&&(D.g=h),R&&fr(D,R),p&&(D.h=p),y=D}return p=a.G,h=a.wa,p&&h&&re(y,p,h),re(y,"VER",a.ka),Er(a,y),y}function wc(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new ce(new fo({ab:p})):new ce(a.ma),h.Fa(a.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ec(){}n=Ec.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Cs(){}Cs.prototype.g=function(a,h){return new Ue(a,h)};function Ue(a,h){Ce.call(this),this.g=new cc(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!T(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Rn(this)}f(Ue,Ce),Ue.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ue.prototype.close=function(){po(this.g)},Ue.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=to(a),a=p);h.i.push(new Gm(h.Ya++,a)),h.I==3&&vs(h)},Ue.prototype.N=function(){this.g.l=null,delete this.j,po(this.g),delete this.g,Ue.Z.N.call(this)};function Tc(a){no.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}f(Tc,no);function vc(){ro.call(this),this.status=1}f(vc,ro);function Rn(a){this.g=a}f(Rn,Ec),Rn.prototype.ra=function(){Pe(this.g,"a")},Rn.prototype.qa=function(a){Pe(this.g,new Tc(a))},Rn.prototype.pa=function(a){Pe(this.g,new vc)},Rn.prototype.oa=function(){Pe(this.g,"b")},Cs.prototype.createWebChannel=Cs.prototype.g,Ue.prototype.send=Ue.prototype.o,Ue.prototype.open=Ue.prototype.m,Ue.prototype.close=Ue.prototype.close,Ld=function(){return new Cs},xd=function(){return ps()},Nd=nn,jo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},gs.NO_ERROR=0,gs.TIMEOUT=8,gs.HTTP_ERROR=6,Ls=gs,Bl.COMPLETE="complete",kd=Bl,xl.EventType=or,or.OPEN="a",or.CLOSE="b",or.ERROR="c",or.MESSAGE="d",Ce.prototype.listen=Ce.prototype.J,br=xl,ce.prototype.listenOnce=ce.prototype.K,ce.prototype.getLastError=ce.prototype.Ha,ce.prototype.getLastErrorCode=ce.prototype.ya,ce.prototype.getStatus=ce.prototype.ca,ce.prototype.getResponseJson=ce.prototype.La,ce.prototype.getResponseText=ce.prototype.la,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Fa,Dd=ce}).apply(typeof Ss<"u"?Ss:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Xn="12.8.0";function Kg(n){Xn=n}/**
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
 */const gn=new ma("@firebase/firestore");function Dn(){return gn.logLevel}function V(n,...e){if(gn.logLevel<=K.DEBUG){const t=e.map(ya);gn.debug(`Firestore (${Xn}): ${n}`,...t)}}function gt(n,...e){if(gn.logLevel<=K.ERROR){const t=e.map(ya);gn.error(`Firestore (${Xn}): ${n}`,...t)}}function $n(n,...e){if(gn.logLevel<=K.WARN){const t=e.map(ya);gn.warn(`Firestore (${Xn}): ${n}`,...t)}}function ya(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function j(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Od(n,r,t)}function Od(n,e,t){let r=`FIRESTORE (${Xn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw gt(r),new Error(r)}function Z(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Od(e,s,r)}function q(n,e){return n}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends ct{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Se.UNAUTHENTICATED))}shutdown(){}}class Qg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Jg{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new ht;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ht,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ht)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string",31837,{l:r}),new Vd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string",2055,{h:e}),new Se(e)}}class Yg{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Zg{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Yg(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ey{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Me(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Z(this.o===void 0,3512);const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Mc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Z(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Mc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ty(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class _a{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ty(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function X(n,e){return n<e?-1:n>e?1:0}function Wo(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Co(s)===Co(i)?X(s,i):Co(s)?1:-1}return X(n.length,e.length)}const ny=55296,ry=57343;function Co(n){const e=n.charCodeAt(0);return e>=ny&&e<=ry}function Hn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Bc="__name__";class et{constructor(e,t,r){t===void 0?t=0:t>e.length&&j(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&j(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return et.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof et?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=et.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return X(e.length,t.length)}static compareSegments(e,t){const r=et.isNumericId(e),s=et.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?et.extractNumericId(e).compare(et.extractNumericId(t)):Wo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $t.fromString(e.substring(4,e.length-2))}}class se extends et{construct(e,t,r){return new se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new se(t)}static emptyPath(){return new se([])}}const sy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ve extends et{construct(e,t,r){return new ve(e,t,r)}static isValidIdentifier(e){return sy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bc}static keyField(){return new ve([Bc])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new M(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new M(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new M(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ve(t)}static emptyPath(){return new ve([])}}/**
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
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(se.fromString(e))}static fromName(e){return new F(se.fromString(e).popFirst(5))}static empty(){return new F(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new se(e.slice()))}}/**
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
 */function Md(n,e,t){if(!t)throw new M(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function iy(n,e,t,r){if(e===!0&&r===!0)throw new M(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Uc(n){if(!F.isDocumentKey(n))throw new M(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Fc(n){if(F.isDocumentKey(n))throw new M(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Bd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function wa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":j(12329,{type:typeof n})}function yt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wa(n);throw new M(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function fe(n,e){const t={typeString:n};return e&&(t.value=e),t}function Zr(n,e){if(!Bd(n))throw new M(x.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new M(x.INVALID_ARGUMENT,t);return!0}/**
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
 */const $c=-62135596800,Hc=1e6;class z{static now(){return z.fromMillis(Date.now())}static fromDate(e){return z.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Hc);return new z(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<$c)throw new M(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hc}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:z._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Zr(e,z._jsonSchema))return new z(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-$c;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}z._jsonSchemaVersion="firestore/timestamp/1.0",z._jsonSchema={type:fe("string",z._jsonSchemaVersion),seconds:fe("number"),nanoseconds:fe("number")};/**
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
 */const Fr=-1;function oy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new z(t+1,0):new z(t,r));return new qt(s,F.empty(),e)}function ay(n){return new qt(n.readTime,n.key,Fr)}class qt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new qt(W.min(),F.empty(),Fr)}static max(){return new qt(W.max(),F.empty(),Fr)}}function ly(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
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
 */const cy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Qn(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==cy)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(s=>s?N.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new N((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,t){return new N((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function dy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Jn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class wi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}wi.ce=-1;/**
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
 */const Ea=-1;function Ei(n){return n==null}function Ks(n){return n===0&&1/n==-1/0}function hy(n){return typeof n=="number"&&Number.isInteger(n)&&!Ks(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ud="";function fy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=jc(e)),e=my(n.get(t),e);return jc(e)}function my(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Ud:t+="";break;default:t+=i}}return t}function jc(n){return n+Ud+""}/**
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
 */function Wc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Zt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Fd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ae{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new As(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new As(this.root,e,this.comparator,!1)}getReverseIterator(){return new As(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new As(this.root,e,this.comparator,!0)}}class As{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Te.RED,this.left=s??Te.EMPTY,this.right=i??Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Te(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Te.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw j(27949);return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Te(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _e{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new qc(this.data.getIterator())}getIteratorFrom(e){return new qc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new _e(this.comparator);return t.data=e,t}}class qc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Fe{constructor(e){this.fields=e,e.sort(ve.comparator)}static empty(){return new Fe([])}unionWith(e){let t=new _e(ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Fe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Hn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class $d extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ie{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $d("Invalid base64 string: "+i):i}}(e);return new Ie(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ie(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ie.EMPTY_BYTE_STRING=new Ie("");const py=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zt(n){if(Z(!!n,39018),typeof n=="string"){let e=0;const t=py.exec(n);if(Z(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:de(n.seconds),nanos:de(n.nanos)}}function de(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Gt(n){return typeof n=="string"?Ie.fromBase64String(n):Ie.fromUint8Array(n)}/**
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
 */const Hd="server_timestamp",jd="__type__",Wd="__previous_value__",qd="__local_write_time__";function Ta(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[jd])==null?void 0:r.stringValue)===Hd}function Ti(n){const e=n.mapValue.fields[Wd];return Ta(e)?Ti(e):e}function $r(n){const e=zt(n.mapValue.fields[qd].timestampValue);return new z(e.seconds,e.nanos)}/**
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
 */class gy{constructor(e,t,r,s,i,o,l,c,u,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d,this.apiKey=f}}const Xs="(default)";class Hr{constructor(e,t){this.projectId=e,this.database=t||Xs}static empty(){return new Hr("","")}get isDefaultDatabase(){return this.database===Xs}isEqual(e){return e instanceof Hr&&e.projectId===this.projectId&&e.database===this.database}}function yy(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new M(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hr(n.options.projectId,e)}/**
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
 */const zd="__type__",_y="__max__",Rs={mapValue:{}},Gd="__vector__",Qs="value";function Kt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ta(n)?4:Ey(n)?9007199254740991:wy(n)?10:11:j(28295,{value:n})}function at(n,e){if(n===e)return!0;const t=Kt(n);if(t!==Kt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return $r(n).isEqual($r(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=zt(s.timestampValue),l=zt(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Gt(s.bytesValue).isEqual(Gt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return de(s.geoPointValue.latitude)===de(i.geoPointValue.latitude)&&de(s.geoPointValue.longitude)===de(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return de(s.integerValue)===de(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=de(s.doubleValue),l=de(i.doubleValue);return o===l?Ks(o)===Ks(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return Hn(n.arrayValue.values||[],e.arrayValue.values||[],at);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Wc(o)!==Wc(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!at(o[c],l[c])))return!1;return!0}(n,e);default:return j(52216,{left:n})}}function jr(n,e){return(n.values||[]).find(t=>at(t,e))!==void 0}function jn(n,e){if(n===e)return 0;const t=Kt(n),r=Kt(e);if(t!==r)return X(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return function(i,o){const l=de(i.integerValue||i.doubleValue),c=de(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return zc(n.timestampValue,e.timestampValue);case 4:return zc($r(n),$r(e));case 5:return Wo(n.stringValue,e.stringValue);case 6:return function(i,o){const l=Gt(i),c=Gt(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=X(l[u],c[u]);if(d!==0)return d}return X(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const l=X(de(i.latitude),de(o.latitude));return l!==0?l:X(de(i.longitude),de(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Gc(n.arrayValue,e.arrayValue);case 10:return function(i,o){var m,g,_,w;const l=i.fields||{},c=o.fields||{},u=(m=l[Qs])==null?void 0:m.arrayValue,d=(g=c[Qs])==null?void 0:g.arrayValue,f=X(((_=u==null?void 0:u.values)==null?void 0:_.length)||0,((w=d==null?void 0:d.values)==null?void 0:w.length)||0);return f!==0?f:Gc(u,d)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Rs.mapValue&&o===Rs.mapValue)return 0;if(i===Rs.mapValue)return 1;if(o===Rs.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let f=0;f<c.length&&f<d.length;++f){const m=Wo(c[f],d[f]);if(m!==0)return m;const g=jn(l[c[f]],u[d[f]]);if(g!==0)return g}return X(c.length,d.length)}(n.mapValue,e.mapValue);default:throw j(23264,{he:t})}}function zc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=zt(n),r=zt(e),s=X(t.seconds,r.seconds);return s!==0?s:X(t.nanos,r.nanos)}function Gc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=jn(t[s],r[s]);if(i)return i}return X(t.length,r.length)}function Wn(n){return qo(n)}function qo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=zt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Gt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return F.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=qo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${qo(t.fields[o])}`;return s+"}"}(n.mapValue):j(61005,{value:n})}function Os(n){switch(Kt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ti(n);return e?16+Os(e):16;case 5:return 2*n.stringValue.length;case 6:return Gt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Os(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Zt(r.fields,(i,o)=>{s+=i.length+Os(o)}),s}(n.mapValue);default:throw j(13486,{value:n})}}function zo(n){return!!n&&"integerValue"in n}function va(n){return!!n&&"arrayValue"in n}function Kc(n){return!!n&&"nullValue"in n}function Xc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Vs(n){return!!n&&"mapValue"in n}function wy(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[zd])==null?void 0:r.stringValue)===Gd}function kr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Zt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=kr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=kr(n.arrayValue.values[t]);return e}return{...n}}function Ey(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===_y}/**
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
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Vs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=kr(t)}setAll(e){let t=ve.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}o?r[l.lastSegment()]=kr(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Vs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Vs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Zt(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Be(kr(this.value))}}function Kd(n){const e=[];return Zt(n.fields,(t,r)=>{const s=new ve([t]);if(Vs(r)){const i=Kd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Fe(e)}/**
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
 */class Ae{constructor(e,t,r,s,i,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ae(e,0,W.min(),W.min(),W.min(),Be.empty(),0)}static newFoundDocument(e,t,r,s){return new Ae(e,1,t,W.min(),r,s,0)}static newNoDocument(e,t){return new Ae(e,2,t,W.min(),W.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new Ae(e,3,t,W.min(),W.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Js{constructor(e,t){this.position=e,this.inclusive=t}}function Qc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=F.comparator(F.fromName(o.referenceValue),t.key):r=jn(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!at(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ys{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ty(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Xd{}class ge extends Xd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Iy(e,t,r):t==="array-contains"?new Sy(e,r):t==="in"?new Ay(e,r):t==="not-in"?new Ry(e,r):t==="array-contains-any"?new Py(e,r):new ge(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Cy(e,r):new by(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(jn(t,this.value)):t!==null&&Kt(this.value)===Kt(t)&&this.matchesComparison(jn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class lt extends Xd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new lt(e,t)}matches(e){return Qd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Qd(n){return n.op==="and"}function Jd(n){return vy(n)&&Qd(n)}function vy(n){for(const e of n.filters)if(e instanceof lt)return!1;return!0}function Go(n){if(n instanceof ge)return n.field.canonicalString()+n.op.toString()+Wn(n.value);if(Jd(n))return n.filters.map(e=>Go(e)).join(",");{const e=n.filters.map(t=>Go(t)).join(",");return`${n.op}(${e})`}}function Yd(n,e){return n instanceof ge?function(r,s){return s instanceof ge&&r.op===s.op&&r.field.isEqual(s.field)&&at(r.value,s.value)}(n,e):n instanceof lt?function(r,s){return s instanceof lt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Yd(o,s.filters[l]),!0):!1}(n,e):void j(19439)}function Zd(n){return n instanceof ge?function(t){return`${t.field.canonicalString()} ${t.op} ${Wn(t.value)}`}(n):n instanceof lt?function(t){return t.op.toString()+" {"+t.getFilters().map(Zd).join(" ,")+"}"}(n):"Filter"}class Iy extends ge{constructor(e,t,r){super(e,t,r),this.key=F.fromName(r.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class Cy extends ge{constructor(e,t){super(e,"in",t),this.keys=eh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class by extends ge{constructor(e,t){super(e,"not-in",t),this.keys=eh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eh(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>F.fromName(r.referenceValue))}class Sy extends ge{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return va(t)&&jr(t.arrayValue,this.value)}}class Ay extends ge{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&jr(this.value.arrayValue,t)}}class Ry extends ge{constructor(e,t){super(e,"not-in",t)}matches(e){if(jr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!jr(this.value.arrayValue,t)}}class Py extends ge{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!va(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>jr(this.value.arrayValue,r))}}/**
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
 */class Dy{constructor(e,t=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Yc(n,e=null,t=[],r=[],s=null,i=null,o=null){return new Dy(n,e,t,r,s,i,o)}function Ia(n){const e=q(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Go(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ei(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Wn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Wn(r)).join(",")),e.Te=t}return e.Te}function Ca(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Ty(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Yd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Jc(n.startAt,e.startAt)&&Jc(n.endAt,e.endAt)}function Ko(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class vi{constructor(e,t=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function ky(n,e,t,r,s,i,o,l){return new vi(n,e,t,r,s,i,o,l)}function ba(n){return new vi(n)}function Zc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ny(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function xy(n){return n.collectionGroup!==null}function Nr(n){const e=q(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new _e(ve.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ys(i,r))}),t.has(ve.keyField().canonicalString())||e.Ie.push(new Ys(ve.keyField(),r))}return e.Ie}function rt(n){const e=q(n);return e.Ee||(e.Ee=Ly(e,Nr(n))),e.Ee}function Ly(n,e){if(n.limitType==="F")return Yc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ys(s.field,i)});const t=n.endAt?new Js(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Js(n.startAt.position,n.startAt.inclusive):null;return Yc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Xo(n,e,t){return new vi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ii(n,e){return Ca(rt(n),rt(e))&&n.limitType===e.limitType}function th(n){return`${Ia(rt(n))}|lt:${n.limitType}`}function kn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Zd(s)).join(", ")}]`),Ei(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Wn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Wn(s)).join(",")),`Target(${r})`}(rt(n))}; limitType=${n.limitType})`}function Ci(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):F.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Nr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Qc(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Nr(r),s)||r.endAt&&!function(o,l,c){const u=Qc(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Nr(r),s))}(n,e)}function Oy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function nh(n){return(e,t)=>{let r=!1;for(const s of Nr(n)){const i=Vy(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Vy(n,e,t){const r=n.field.isKeyField()?F.comparator(e.key,t.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?jn(c,u):j(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return j(19790,{direction:n.dir})}}/**
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
 */class vn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Zt(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Fd(this.inner)}size(){return this.innerSize}}/**
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
 */const My=new ae(F.comparator);function _t(){return My}const rh=new ae(F.comparator);function Sr(...n){let e=rh;for(const t of n)e=e.insert(t.key,t);return e}function sh(n){let e=rh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function un(){return xr()}function ih(){return xr()}function xr(){return new vn(n=>n.toString(),(n,e)=>n.isEqual(e))}const By=new ae(F.comparator),Uy=new _e(F.comparator);function Q(...n){let e=Uy;for(const t of n)e=e.add(t);return e}const Fy=new _e(X);function $y(){return Fy}/**
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
 */function Sa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ks(e)?"-0":e}}function oh(n){return{integerValue:""+n}}function Hy(n,e){return hy(e)?oh(e):Sa(n,e)}/**
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
 */class bi{constructor(){this._=void 0}}function jy(n,e,t){return n instanceof Zs?function(s,i){const o={fields:{[jd]:{stringValue:Hd},[qd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ta(i)&&(i=Ti(i)),i&&(o.fields[Wd]=i),{mapValue:o}}(t,e):n instanceof Wr?lh(n,e):n instanceof qr?ch(n,e):function(s,i){const o=ah(s,i),l=eu(o)+eu(s.Ae);return zo(o)&&zo(s.Ae)?oh(l):Sa(s.serializer,l)}(n,e)}function Wy(n,e,t){return n instanceof Wr?lh(n,e):n instanceof qr?ch(n,e):t}function ah(n,e){return n instanceof ei?function(r){return zo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Zs extends bi{}class Wr extends bi{constructor(e){super(),this.elements=e}}function lh(n,e){const t=uh(e);for(const r of n.elements)t.some(s=>at(s,r))||t.push(r);return{arrayValue:{values:t}}}class qr extends bi{constructor(e){super(),this.elements=e}}function ch(n,e){let t=uh(e);for(const r of n.elements)t=t.filter(s=>!at(s,r));return{arrayValue:{values:t}}}class ei extends bi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function eu(n){return de(n.integerValue||n.doubleValue)}function uh(n){return va(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function qy(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Wr&&s instanceof Wr||r instanceof qr&&s instanceof qr?Hn(r.elements,s.elements,at):r instanceof ei&&s instanceof ei?at(r.Ae,s.Ae):r instanceof Zs&&s instanceof Zs}(n.transform,e.transform)}class zy{constructor(e,t){this.version=e,this.transformResults=t}}class He{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new He}static exists(e){return new He(void 0,e)}static updateTime(e){return new He(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ms(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Si{}function dh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ai(n.key,He.none()):new es(n.key,n.data,He.none());{const t=n.data,r=Be.empty();let s=new _e(ve.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new en(n.key,r,new Fe(s.toArray()),He.none())}}function Gy(n,e,t){n instanceof es?function(s,i,o){const l=s.value.clone(),c=nu(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof en?function(s,i,o){if(!Ms(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=nu(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(hh(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Lr(n,e,t,r){return n instanceof es?function(i,o,l,c){if(!Ms(i.precondition,o))return l;const u=i.value.clone(),d=ru(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof en?function(i,o,l,c){if(!Ms(i.precondition,o))return l;const u=ru(i.fieldTransforms,c,o),d=o.data;return d.setAll(hh(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(i,o,l){return Ms(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function Ky(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=ah(r.transform,s||null);i!=null&&(t===null&&(t=Be.empty()),t.set(r.field,i))}return t||null}function tu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hn(r,s,(i,o)=>qy(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class es extends Si{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class en extends Si{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function hh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function nu(n,e,t){const r=new Map;Z(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Wy(o,l,t[s]))}return r}function ru(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,jy(i,o,e))}return r}class Ai extends Si{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xy extends Si{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Qy{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Gy(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Lr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Lr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ih();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const c=dh(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&Hn(this.mutations,e.mutations,(t,r)=>tu(t,r))&&Hn(this.baseMutations,e.baseMutations,(t,r)=>tu(t,r))}}class Aa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Z(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return By}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Aa(e,t,r,s)}}/**
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
 */class Jy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Yy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var he,J;function Zy(n){switch(n){case x.OK:return j(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return j(15467,{code:n})}}function fh(n){if(n===void 0)return gt("GRPC error has no .code"),x.UNKNOWN;switch(n){case he.OK:return x.OK;case he.CANCELLED:return x.CANCELLED;case he.UNKNOWN:return x.UNKNOWN;case he.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case he.INTERNAL:return x.INTERNAL;case he.UNAVAILABLE:return x.UNAVAILABLE;case he.UNAUTHENTICATED:return x.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case he.NOT_FOUND:return x.NOT_FOUND;case he.ALREADY_EXISTS:return x.ALREADY_EXISTS;case he.PERMISSION_DENIED:return x.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case he.ABORTED:return x.ABORTED;case he.OUT_OF_RANGE:return x.OUT_OF_RANGE;case he.UNIMPLEMENTED:return x.UNIMPLEMENTED;case he.DATA_LOSS:return x.DATA_LOSS;default:return j(39323,{code:n})}}(J=he||(he={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function e_(){return new TextEncoder}/**
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
 */const t_=new $t([4294967295,4294967295],0);function su(n){const e=e_().encode(n),t=new Pd;return t.update(e),new Uint8Array(t.digest())}function iu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $t([t,r],0),new $t([s,i],0)]}class Ra{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ar(`Invalid padding: ${t}`);if(r<0)throw new Ar(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ar(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ar(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=$t.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply($t.fromNumber(r)));return s.compare(t_)===1&&(s=new $t([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=su(e),[r,s]=iu(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ra(i,s,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const t=su(e),[r,s]=iu(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ar extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ri{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ts.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ri(W.min(),s,new ae(X),_t(),Q())}}class ts{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ts(r,t,Q(),Q(),Q())}}/**
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
 */class Bs{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=s}}class mh{constructor(e,t){this.targetId=e,this.Ce=t}}class ph{constructor(e,t,r=Ie.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ou{constructor(){this.ve=0,this.Fe=au(),this.Me=Ie.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Q(),t=Q(),r=Q();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:j(38017,{changeType:i})}}),new ts(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=au()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Z(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class n_{constructor(e){this.Ge=e,this.ze=new Map,this.je=_t(),this.He=Ps(),this.Je=Ps(),this.Ze=new ae(X)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:j(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Ko(i))if(r===0){const o=new F(i.path);this.et(t,o,Ae.newNoDocument(o,W.min()))}else Z(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=Gt(r).toUint8Array()}catch(c){if(c instanceof $d)return $n("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ra(o,s,i)}catch(c){return $n(c instanceof Ar?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Ko(l.target)){const c=new F(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Ae.newNoDocument(c,e))}i.Be&&(t.set(o,i.ke()),i.Ke())}});let r=Q();this.Je.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Ri(e,t,this.Ze,this.je,r);return this.je=_t(),this.He=Ps(),this.Je=Ps(),this.Ze=new ae(X),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new ou,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new _e(X),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new _e(X),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ou),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ps(){return new ae(F.comparator)}function au(){return new ae(F.comparator)}const r_={asc:"ASCENDING",desc:"DESCENDING"},s_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},i_={and:"AND",or:"OR"};class o_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qo(n,e){return n.useProto3Json||Ei(e)?e:{value:e}}function ti(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function a_(n,e){return ti(n,e.toTimestamp())}function st(n){return Z(!!n,49232),W.fromTimestamp(function(t){const r=zt(t);return new z(r.seconds,r.nanos)}(n))}function Pa(n,e){return Jo(n,e).canonicalString()}function Jo(n,e){const t=function(s){return new se(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function yh(n){const e=se.fromString(n);return Z(vh(e),10190,{key:e.toString()}),e}function Yo(n,e){return Pa(n.databaseId,e.path)}function bo(n,e){const t=yh(e);if(t.get(1)!==n.databaseId.projectId)throw new M(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new M(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new F(wh(t))}function _h(n,e){return Pa(n.databaseId,e)}function l_(n){const e=yh(n);return e.length===4?se.emptyPath():wh(e)}function Zo(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wh(n){return Z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function lu(n,e,t){return{name:Yo(n,e),fields:t.value.mapValue.fields}}function c_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:j(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Z(d===void 0||typeof d=="string",58123),Ie.fromBase64String(d||"")):(Z(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ie.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?x.UNKNOWN:fh(u.code);return new M(d,u.message||"")}(o);t=new ph(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=bo(n,r.document.name),i=st(r.document.updateTime),o=r.document.createTime?st(r.document.createTime):W.min(),l=new Be({mapValue:{fields:r.document.fields}}),c=Ae.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];t=new Bs(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=bo(n,r.document),i=r.readTime?st(r.readTime):W.min(),o=Ae.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Bs([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=bo(n,r.document),i=r.removedTargetIds||[];t=new Bs([],i,s,null)}else{if(!("filter"in e))return j(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Yy(s,i),l=r.targetId;t=new mh(l,o)}}return t}function u_(n,e){let t;if(e instanceof es)t={update:lu(n,e.key,e.value)};else if(e instanceof Ai)t={delete:Yo(n,e.key)};else if(e instanceof en)t={update:lu(n,e.key,e.data),updateMask:w_(e.fieldMask)};else{if(!(e instanceof Xy))return j(16599,{dt:e.type});t={verify:Yo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Zs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Wr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof qr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ei)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw j(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:a_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:j(27497)}(n,e.precondition)),t}function d_(n,e){return n&&n.length>0?(Z(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?st(s.updateTime):st(i);return o.isEqual(W.min())&&(o=st(i)),new zy(o,s.transformResults||[])}(t,e))):[]}function h_(n,e){return{documents:[_h(n,e.path)]}}function f_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=_h(n,s);const i=function(u){if(u.length!==0)return Th(lt.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:Nn(m.field),direction:g_(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Qo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:t,parent:s}}function m_(n){let e=l_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Z(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(f){const m=Eh(f);return m instanceof lt&&Jd(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(m=>function(_){return new Ys(xn(_.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,Ei(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(f){const m=!!f.before,g=f.values||[];return new Js(g,m)}(t.startAt));let u=null;return t.endAt&&(u=function(f){const m=!f.before,g=f.values||[];return new Js(g,m)}(t.endAt)),ky(e,s,o,i,l,"F",c,u)}function p_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Eh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=xn(t.unaryFilter.field);return ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xn(t.unaryFilter.field);return ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xn(t.unaryFilter.field);return ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xn(t.unaryFilter.field);return ge.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}}(n):n.fieldFilter!==void 0?function(t){return ge.create(xn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return lt.create(t.compositeFilter.filters.map(r=>Eh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return j(1026)}}(t.compositeFilter.op))}(n):j(30097,{filter:n})}function g_(n){return r_[n]}function y_(n){return s_[n]}function __(n){return i_[n]}function Nn(n){return{fieldPath:n.canonicalString()}}function xn(n){return ve.fromServerFormat(n.fieldPath)}function Th(n){return n instanceof ge?function(t){if(t.op==="=="){if(Xc(t.value))return{unaryFilter:{field:Nn(t.field),op:"IS_NAN"}};if(Kc(t.value))return{unaryFilter:{field:Nn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Xc(t.value))return{unaryFilter:{field:Nn(t.field),op:"IS_NOT_NAN"}};if(Kc(t.value))return{unaryFilter:{field:Nn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nn(t.field),op:y_(t.op),value:t.value}}}(n):n instanceof lt?function(t){const r=t.getFilters().map(s=>Th(s));return r.length===1?r[0]:{compositeFilter:{op:__(t.op),filters:r}}}(n):j(54877,{filter:n})}function w_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function vh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Ih(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class Mt{constructor(e,t,r,s,i=W.min(),o=W.min(),l=Ie.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Mt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class E_{constructor(e){this.yt=e}}function T_(n){const e=m_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xo(e,e.limit,"L"):e}/**
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
 */class v_{constructor(){this.Sn=new I_}addToCollectionParentIndex(e,t){return this.Sn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(qt.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(qt.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class I_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new _e(se.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new _e(se.comparator)).toArray()}}/**
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
 */const cu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ch=41943040;class Oe{static withCacheSize(e){return new Oe(e,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Oe.DEFAULT_COLLECTION_PERCENTILE=10,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oe.DEFAULT=new Oe(Ch,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oe.DISABLED=new Oe(-1,0,0);/**
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
 */class qn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new qn(0)}static ar(){return new qn(-1)}}/**
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
 */const uu="LruGarbageCollector",C_=1048576;function du([n,e],[t,r]){const s=X(n,t);return s===0?X(e,r):s}class b_{constructor(e){this.Pr=e,this.buffer=new _e(du),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();du(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class S_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){V(uu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Jn(t)?V(uu,"Ignoring IndexedDB error during garbage collection: ",t):await Qn(t)}await this.Ar(3e5)})}}class A_{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return N.resolve(wi.ce);const r=new b_(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(cu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),cu):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,t))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),Dn()<=K.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function R_(n,e){return new A_(n,e)}/**
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
 */class P_{constructor(){this.changes=new vn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class D_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class k_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Lr(r.mutation,s,Fe.empty(),z.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Q()){const s=un();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Sr();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=un();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Q()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,s){let i=_t();const o=xr(),l=function(){return xr()}();return t.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof en)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Lr(d.mutation,u,d.mutation.getFieldMask(),z.now())):o.set(u.key,Fe.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>l.set(u,new D_(d,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,t){const r=xr();let s=new ae((o,l)=>o-l),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let d=r.get(c)||Fe.empty();d=l.applyToLocalView(u,d),r.set(c,d);const f=(s.get(l.batchId)||Q()).add(c);s=s.insert(l.batchId,f)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,f=ih();d.forEach(m=>{if(!i.has(m)){const g=dh(t.get(m),r.get(m));g!==null&&f.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return Ny(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):N.resolve(un());let l=Fr,c=i;return o.next(u=>N.forEach(u,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),i.get(d)?N.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Q())).next(d=>({batchId:l,changes:sh(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next(r=>{let s=Sr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Sr();return this.indexManager.getCollectionParents(e,i).next(l=>N.forEach(l,c=>{const u=function(f,m){return new vi(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Ae.newInvalidDocument(d)))});let l=Sr();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Lr(d.mutation,u,Fe.empty(),z.now()),Ci(t,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class N_{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return N.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:st(s.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:T_(s.bundledQuery),readTime:st(s.readTime)}}(t)),N.resolve()}}/**
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
 */class x_{constructor(){this.overlays=new ae(F.comparator),this.Lr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=un();return N.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.bt(e,t,i)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const s=un(),i=t.length+1,o=new F(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return N.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ae((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=un(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=un(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return N.resolve(l)}bt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Jy(t,r));let i=this.Lr.get(t);i===void 0&&(i=Q(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
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
 */class L_{constructor(){this.sessionToken=Ie.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class Da{constructor(){this.kr=new _e(Ee.Kr),this.qr=new _e(Ee.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new Ee(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Ee(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new F(new se([])),r=new Ee(t,e),s=new Ee(t,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new F(new se([])),r=new Ee(t,e),s=new Ee(t,e+1);let i=Q();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ee(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ee{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return F.comparator(e.key,t.key)||X(e.Hr,t.Hr)}static Ur(e,t){return X(e.Hr,t.Hr)||F.comparator(e.key,t.key)}}/**
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
 */class O_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new _e(Ee.Kr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Qy(i,t,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new Ee(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,t){return N.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?Ea:this.Yn-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ee(t,0),s=new Ee(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const l=this.Zr(o.Hr);i.push(l)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new _e(X);return t.forEach(s=>{const i=new Ee(s,0),o=new Ee(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],l=>{r=r.add(l.Hr)})}),N.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;F.isDocumentKey(i)||(i=i.child(""));const o=new Ee(new F(i),0);let l=new _e(X);return this.Jr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)},o),N.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Z(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return N.forEach(t.mutations,s=>{const i=new Ee(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,t){const r=new Ee(t,0),s=this.Jr.firstAfterOrEqual(r);return N.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class V_{constructor(e){this.ti=e,this.docs=function(){return new ae(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():Ae.newInvalidDocument(t))}getEntries(e,t){let r=_t();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ae.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=_t();const o=t.path,l=new F(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||ly(ay(d),r)<=0||(s.has(d.key)||Ci(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,r,s){j(9500)}ni(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new M_(this)}getSize(e){return N.resolve(this.size)}}class M_ extends P_{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class B_{constructor(e){this.persistence=e,this.ri=new vn(t=>Ia(t),Ca),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.ii=0,this.si=new Da,this.targetCount=0,this.oi=qn._r()}forEachTarget(e,t){return this.ri.forEach((r,s)=>t(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),N.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new qn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.lr(t),N.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.si.containsKey(t))}}/**
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
 */class bh{constructor(e,t){this._i={},this.overlays={},this.ai=new wi(0),this.ui=!1,this.ui=!0,this.ci=new L_,this.referenceDelegate=e(this),this.li=new B_(this),this.indexManager=new v_,this.remoteDocumentCache=function(s){return new V_(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new E_(t),this.Pi=new N_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new x_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new O_(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){V("MemoryPersistence","Starting transaction:",e);const s=new U_(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return N.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class U_ extends uy{constructor(e){super(),this.currentSequenceNumber=e}}class ka{constructor(e){this.persistence=e,this.Ri=new Da,this.Ai=null}static Vi(e){return new ka(e)}get di(){if(this.Ai)return this.Ai;throw j(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.di,r=>{const s=F.fromPath(r);return this.mi(e,s).next(i=>{i||t.removeEntry(s,W.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return N.or([()=>N.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ni{constructor(e,t){this.persistence=e,this.fi=new vn(r=>fy(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=R_(this,t)}static Vi(e,t){return new ni(e,t)}Ti(){}Ii(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return N.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?N.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,t).next(l=>{l||(r++,i.removeEntry(o,W.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),N.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Os(e.data.value)),t}wr(e,t,r){return N.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Na{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=Q(),s=Q();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Na(e,t.fromCache,r,s)}}/**
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
 */class F_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $_{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Dp()?8:dy(Re())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new F_;return this.ys(e,t,o).next(l=>{if(i.result=l,this.As)return this.ws(e,t,o,l.size)})}).next(()=>i.result)}ws(e,t,r,s){return r.documentReadCount<this.Vs?(Dn()<=K.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",kn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),N.resolve()):(Dn()<=K.DEBUG&&V("QueryEngine","Query:",kn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Dn()<=K.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",kn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rt(t))):N.resolve())}gs(e,t){if(Zc(t))return N.resolve(null);let r=rt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Xo(t,null,"F"),r=rt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Q(...i);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.bs(t,l);return this.Ss(t,u,o,c.readTime)?this.gs(e,Xo(t,null,"F")):this.Ds(e,u,t,c)}))})))}ps(e,t,r,s){return Zc(t)||s.isEqual(W.min())?N.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(t,i);return this.Ss(t,o,r,s)?N.resolve(null):(Dn()<=K.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),kn(t)),this.Ds(e,o,t,oy(s,Fr)).next(l=>l))})}bs(e,t){let r=new _e(nh(e));return t.forEach((s,i)=>{Ci(e,i)&&(r=r.add(i))}),r}Ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return Dn()<=K.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",kn(t)),this.fs.getDocumentsMatchingQuery(e,t,qt.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const xa="LocalStore",H_=3e8;class j_{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new ae(X),this.Fs=new vn(i=>Ia(i),Ca),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new k_(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function W_(n,e,t,r){return new j_(n,e,t,r)}async function Sh(n,e){const t=q(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Q();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(u=>({Ns:u,removedBatchIds:o,addedBatchIds:l}))})})}function q_(n,e){const t=q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const f=u.batch,m=f.keys();let g=N.resolve();return m.forEach(_=>{g=g.next(()=>d.getEntry(c,_)).next(w=>{const b=u.docVersions.get(_);Z(b!==null,48541),w.version.compareTo(b)<0&&(f.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),d.addEntry(w)))})}),g.next(()=>l.mutationQueue.removeMutationBatch(c,f))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Q();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Ah(n){const e=q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function z_(n,e){const t=q(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const l=[];e.targetChanges.forEach((d,f)=>{const m=s.get(f);if(!m)return;l.push(t.li.removeMatchingKeys(i,d.removedDocuments,f).next(()=>t.li.addMatchingKeys(i,d.addedDocuments,f)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Ie.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),s=s.insert(f,g),function(w,b,k){return w.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=H_?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(m,g,d)&&l.push(t.li.updateTargetData(i,g))});let c=_t(),u=Q();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(G_(i,o,e.documentUpdates).next(d=>{c=d.Bs,u=d.Ls})),!r.isEqual(W.min())){const d=t.li.getLastRemoteSnapshotVersion(i).next(f=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return N.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.vs=s,i))}function G_(n,e,t){let r=Q(),s=Q();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=_t();return t.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(W.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):V(xa,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Bs:o,Ls:s}})}function K_(n,e){const t=q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ea),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function X_(n,e){const t=q(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.li.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):t.li.allocateTargetId(r).next(o=>(s=new Mt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}async function ea(n,e,t){const r=q(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Jn(o))throw o;V(xa,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function hu(n,e,t){const r=q(n);let s=W.min(),i=Q();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const f=q(c),m=f.Fs.get(d);return m!==void 0?N.resolve(f.vs.get(m)):f.li.getTargetData(u,d)}(r,o,rt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,t?s:W.min(),t?i:Q())).next(l=>(Q_(r,Oy(e),l),{documents:l,ks:i})))}function Q_(n,e,t){let r=n.Ms.get(e)||W.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ms.set(e,r)}class fu{constructor(){this.activeTargetIds=$y()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class J_{constructor(){this.vo=new fu,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new fu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Y_{Mo(e){}shutdown(){}}/**
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
 */const mu="ConnectivityMonitor";class pu{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){V(mu,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){V(mu,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ds=null;function ta(){return Ds===null?Ds=function(){return 268435456+Math.round(2147483648*Math.random())}():Ds++,"0x"+Ds.toString(16)}/**
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
 */const So="RestConnection",Z_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class ew{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Xs?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const o=ta(),l=this.Qo(e,t.toUriEncodedString());V(So,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,s,i);const{host:u}=new URL(l),d=Yt(u);return this.zo(e,l,c,r,d).then(f=>(V(So,`Received RPC '${e}' ${o}: `,f),f),f=>{throw $n(So,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}jo(e,t,r,s,i,o){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,t){const r=Z_[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class tw{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const be="WebChannelConnection",Tr=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Ln extends ew{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ln.c_){const e=xd();Tr(e,Nd.STAT_EVENT,t=>{t.stat===jo.PROXY?V(be,"STAT_EVENT: detected buffering proxy"):t.stat===jo.NOPROXY&&V(be,"STAT_EVENT: detected no buffering proxy")}),Ln.c_=!0}}zo(e,t,r,s,i){const o=ta();return new Promise((l,c)=>{const u=new Dd;u.setWithCredentials(!0),u.listenOnce(kd.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ls.NO_ERROR:const f=u.getResponseJson();V(be,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case Ls.TIMEOUT:V(be,`RPC '${e}' ${o} timed out`),c(new M(x.DEADLINE_EXCEEDED,"Request time out"));break;case Ls.HTTP_ERROR:const m=u.getStatus();if(V(be,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const w=function(k){const L=k.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(L)>=0?L:x.UNKNOWN}(_.status);c(new M(w,_.message))}else c(new M(x.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new M(x.UNAVAILABLE,"Connection failed."));break;default:j(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{V(be,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);V(be,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",d,r,15)})}T_(e,t,r){const s=ta(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const u=i.join("");V(be,`Creating RPC '${e}' stream ${s}: ${u}`,l);const d=o.createWebChannel(u,l);this.I_(d);let f=!1,m=!1;const g=new tw({Ho:_=>{m?V(be,`Not sending because RPC '${e}' stream ${s} is closed:`,_):(f||(V(be,`Opening RPC '${e}' stream ${s} transport.`),d.open(),f=!0),V(be,`RPC '${e}' stream ${s} sending:`,_),d.send(_))},Jo:()=>d.close()});return Tr(d,br.EventType.OPEN,()=>{m||(V(be,`RPC '${e}' stream ${s} transport opened.`),g.i_())}),Tr(d,br.EventType.CLOSE,()=>{m||(m=!0,V(be,`RPC '${e}' stream ${s} transport closed`),g.o_(),this.E_(d))}),Tr(d,br.EventType.ERROR,_=>{m||(m=!0,$n(be,`RPC '${e}' stream ${s} transport errored. Name:`,_.name,"Message:",_.message),g.o_(new M(x.UNAVAILABLE,"The operation could not be completed")))}),Tr(d,br.EventType.MESSAGE,_=>{var w;if(!m){const b=_.data[0];Z(!!b,16349);const k=b,L=(k==null?void 0:k.error)||((w=k[0])==null?void 0:w.error);if(L){V(be,`RPC '${e}' stream ${s} received error:`,L);const B=L.status;let $=function(C){const E=he[C];if(E!==void 0)return fh(E)}(B),Y=L.message;$===void 0&&($=x.INTERNAL,Y="Unknown error status: "+B+" with message "+L.message),m=!0,g.o_(new M($,Y)),d.close()}else V(be,`RPC '${e}' stream ${s} received:`,b),g.__(b)}}),Ln.u_(),setTimeout(()=>{g.s_()},0),g}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Ld()}}/**
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
 */function nw(n){return new Ln(n)}function Ao(){return typeof document<"u"?document:null}/**
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
 */function Pi(n){return new o_(n,!0)}/**
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
 */Ln.c_=!1;class Rh{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const gu="PersistentStream";class Ph{constructor(e,t,r,s,i,o,l,c){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Rh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(gt(t.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new M(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return V(gu,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(V(gu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rw extends Ph{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=c_(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?st(o.readTime):W.min()}(e);return this.listener.J_(t,r)}Z_(e){const t={};t.database=Zo(this.serializer),t.addTarget=function(i,o){let l;const c=o.target;if(l=Ko(c)?{documents:h_(i,c)}:{query:f_(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=gh(i,o.resumeToken);const u=Qo(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(W.min())>0){l.readTime=ti(i,o.snapshotVersion.toTimestamp());const u=Qo(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=p_(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=Zo(this.serializer),t.removeTarget=e,this.K_(t)}}class sw extends Ph{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return Z(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Z(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=d_(e.writeResults,e.commitTime),r=st(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Zo(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>u_(this.serializer,r))};this.K_(t)}}/**
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
 */class iw{}class ow extends iw{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new M(x.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Jo(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(x.UNKNOWN,i.toString())})}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Jo(t,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(x.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function aw(n,e,t,r){return new ow(n,e,t,r)}class lw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(gt(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const yn="RemoteStore";class cw{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{In(this)&&(V(yn,"Restarting streams for network reachability change."),await async function(c){const u=q(c);u.Ea.add(4),await ns(u),u.Va.set("Unknown"),u.Ea.delete(4),await Di(u)}(this))})}),this.Va=new lw(r,s)}}async function Di(n){if(In(n))for(const e of n.Ra)await e(!0)}async function ns(n){for(const e of n.Ra)await e(!1)}function Dh(n,e){const t=q(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Ma(t)?Va(t):Yn(t).O_()&&Oa(t,e))}function La(n,e){const t=q(n),r=Yn(t);t.Ia.delete(e),r.O_()&&kh(t,e),t.Ia.size===0&&(r.O_()?r.L_():In(t)&&t.Va.set("Unknown"))}function Oa(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Yn(n).Z_(e)}function kh(n,e){n.da.$e(e),Yn(n).X_(e)}function Va(n){n.da=new n_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Yn(n).start(),n.Va.ua()}function Ma(n){return In(n)&&!Yn(n).x_()&&n.Ia.size>0}function In(n){return q(n).Ea.size===0}function Nh(n){n.da=void 0}async function uw(n){n.Va.set("Online")}async function dw(n){n.Ia.forEach((e,t)=>{Oa(n,e)})}async function hw(n,e){Nh(n),Ma(n)?(n.Va.ha(e),Va(n)):n.Va.set("Unknown")}async function fw(n,e,t){if(n.Va.set("Online"),e instanceof ph&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))}(n,e)}catch(r){V(yn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ri(n,r)}else if(e instanceof Bs?n.da.Xe(e):e instanceof mh?n.da.st(e):n.da.tt(e),!t.isEqual(W.min()))try{const r=await Ah(n.localStore);t.compareTo(r)>=0&&await function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ia.get(u);d&&i.Ia.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.Ia.get(c);if(!d)return;i.Ia.set(c,d.withResumeToken(Ie.EMPTY_BYTE_STRING,d.snapshotVersion)),kh(i,c);const f=new Mt(d.target,c,u,d.sequenceNumber);Oa(i,f)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){V(yn,"Failed to raise snapshot:",r),await ri(n,r)}}async function ri(n,e,t){if(!Jn(e))throw e;n.Ea.add(1),await ns(n),n.Va.set("Offline"),t||(t=()=>Ah(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V(yn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Di(n)})}function xh(n,e){return e().catch(t=>ri(n,t,e))}async function ki(n){const e=q(n),t=Xt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ea;for(;mw(e);)try{const s=await K_(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,pw(e,s)}catch(s){await ri(e,s)}Lh(e)&&Oh(e)}function mw(n){return In(n)&&n.Ta.length<10}function pw(n,e){n.Ta.push(e);const t=Xt(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Lh(n){return In(n)&&!Xt(n).x_()&&n.Ta.length>0}function Oh(n){Xt(n).start()}async function gw(n){Xt(n).ra()}async function yw(n){const e=Xt(n);for(const t of n.Ta)e.ea(t.mutations)}async function _w(n,e,t){const r=n.Ta.shift(),s=Aa.from(r,e,t);await xh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ki(n)}async function ww(n,e){e&&Xt(n).Y_&&await async function(r,s){if(function(o){return Zy(o)&&o!==x.ABORTED}(s.code)){const i=r.Ta.shift();Xt(r).B_(),await xh(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ki(r)}}(n,e),Lh(n)&&Oh(n)}async function yu(n,e){const t=q(n);t.asyncQueue.verifyOperationInProgress(),V(yn,"RemoteStore received new credentials");const r=In(t);t.Ea.add(3),await ns(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Di(t)}async function Ew(n,e){const t=q(n);e?(t.Ea.delete(2),await Di(t)):e||(t.Ea.add(2),await ns(t),t.Va.set("Unknown"))}function Yn(n){return n.ma||(n.ma=function(t,r,s){const i=q(t);return i.sa(),new rw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:uw.bind(null,n),Yo:dw.bind(null,n),t_:hw.bind(null,n),J_:fw.bind(null,n)}),n.Ra.push(async e=>{e?(n.ma.B_(),Ma(n)?Va(n):n.Va.set("Unknown")):(await n.ma.stop(),Nh(n))})),n.ma}function Xt(n){return n.fa||(n.fa=function(t,r,s){const i=q(t);return i.sa(),new sw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:gw.bind(null,n),t_:ww.bind(null,n),ta:yw.bind(null,n),na:_w.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await ki(n)):(await n.fa.stop(),n.Ta.length>0&&(V(yn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Ba{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,l=new Ba(e,t,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ua(n,e){if(gt("AsyncQueue",`${e}: ${n}`),Jn(n))return new M(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class On{static emptySet(e){return new On(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||F.comparator(t.key,r.key):(t,r)=>F.comparator(t.key,r.key),this.keyedMap=Sr(),this.sortedSet=new ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof On)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new On;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class _u{constructor(){this.ga=new ae(F.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):j(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class zn{constructor(e,t,r,s,i,o,l,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new zn(e,t,On.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ii(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Tw{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class vw{constructor(){this.queries=wu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=q(t),i=s.queries;s.queries=wu(),i.forEach((o,l)=>{for(const c of l.ba)c.onError(r)})})(this,new M(x.ABORTED,"Firestore shutting down"))}}function wu(){return new vn(n=>th(n),Ii)}async function Vh(n,e){const t=q(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new Tw,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=Ua(o,`Initialization of query '${kn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.ba.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Fa(t)}async function Mh(n,e){const t=q(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Iw(n,e){const t=q(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&Fa(t)}function Cw(n,e,t){const r=q(n),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(t);r.queries.delete(e)}function Fa(n){n.Ca.forEach(e=>{e.next()})}var na,Eu;(Eu=na||(na={})).Ma="default",Eu.Cache="cache";class Bh{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new zn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=zn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==na.Cache}}/**
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
 */class Uh{constructor(e){this.key=e}}class Fh{constructor(e){this.key=e}}class bw{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Q(),this.mutatedKeys=Q(),this.eu=nh(e),this.tu=new On(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new _u,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,f)=>{const m=s.get(d),g=Ci(this.query,f)?f:null,_=!!m&&this.mutatedKeys.has(m.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let b=!1;m&&g?m.data.isEqual(g.data)?_!==w&&(r.track({type:3,doc:g}),b=!0):this.su(m,g)||(r.track({type:2,doc:g}),b=!0,(c&&this.eu(g,c)>0||u&&this.eu(g,u)<0)&&(l=!0)):!m&&g?(r.track({type:0,doc:g}),b=!0):m&&!g&&(r.track({type:1,doc:m}),b=!0,(c||u)&&(l=!0)),b&&(g?(o=o.add(g),i=w?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,f)=>function(g,_){const w=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j(20277,{Vt:b})}};return w(g)-w(_)}(d.type,f.type)||this.eu(d.doc,f.doc)),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],c=this.Ya.size===0&&this.current&&!s?1:0,u=c!==this.Xa;return this.Xa=c,o.length!==0||u?{snapshot:new zn(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new _u,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Q(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new Fh(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new Uh(r))}),t}cu(e){this.Za=e.ks,this.Ya=Q();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return zn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const $a="SyncEngine";class Sw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Aw{constructor(e){this.key=e,this.hu=!1}}class Rw{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new vn(l=>th(l),Ii),this.Iu=new Map,this.Eu=new Set,this.Ru=new ae(F.comparator),this.Au=new Map,this.Vu=new Da,this.du={},this.mu=new Map,this.fu=qn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Pw(n,e,t=!0){const r=zh(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await $h(r,e,t,!0),s}async function Dw(n,e){const t=zh(n);await $h(t,e,!0,!1)}async function $h(n,e,t,r){const s=await X_(n.localStore,rt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await kw(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Dh(n.remoteStore,s),l}async function kw(n,e,t,r,s){n.pu=(f,m,g)=>async function(w,b,k,L){let B=b.view.ru(k);B.Ss&&(B=await hu(w.localStore,b.query,!1).then(({documents:C})=>b.view.ru(C,B)));const $=L&&L.targetChanges.get(b.targetId),Y=L&&L.targetMismatches.get(b.targetId)!=null,te=b.view.applyChanges(B,w.isPrimaryClient,$,Y);return vu(w,b.targetId,te.au),te.snapshot}(n,f,m,g);const i=await hu(n.localStore,e,!0),o=new bw(e,i.ks),l=o.ru(i.documents),c=ts.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(l,n.isPrimaryClient,c);vu(n,t,u.au);const d=new Sw(e,t,o);return n.Tu.set(e,d),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),u.snapshot}async function Nw(n,e,t){const r=q(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Ii(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ea(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&La(r.remoteStore,s.targetId),ra(r,s.targetId)}).catch(Qn)):(ra(r,s.targetId),await ea(r.localStore,s.targetId,!0))}async function xw(n,e){const t=q(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),La(t.remoteStore,r.targetId))}async function Lw(n,e,t){const r=$w(n);try{const s=await function(o,l){const c=q(o),u=z.now(),d=l.reduce((g,_)=>g.add(_.key),Q());let f,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let _=_t(),w=Q();return c.xs.getEntries(g,d).next(b=>{_=b,_.forEach((k,L)=>{L.isValidDocument()||(w=w.add(k))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,_)).next(b=>{f=b;const k=[];for(const L of l){const B=Ky(L,f.get(L.key).overlayedDocument);B!=null&&k.push(new en(L.key,B,Kd(B.value.mapValue),He.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,k,l)}).next(b=>{m=b;const k=b.applyToLocalDocumentSet(f,w);return c.documentOverlayCache.saveOverlays(g,b.batchId,k)})}).then(()=>({batchId:m.batchId,changes:sh(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.du[o.currentUser.toKey()];u||(u=new ae(X)),u=u.insert(l,c),o.du[o.currentUser.toKey()]=u}(r,s.batchId,t),await rs(r,s.changes),await ki(r.remoteStore)}catch(s){const i=Ua(s,"Failed to persist write");t.reject(i)}}async function Hh(n,e){const t=q(n);try{const r=await z_(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Au.get(i);o&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Z(o.hu,14607):s.removedDocuments.size>0&&(Z(o.hu,42227),o.hu=!1))}),await rs(t,r,e)}catch(r){await Qn(r)}}function Tu(n,e,t){const r=q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=q(o);c.onlineState=l;let u=!1;c.queries.forEach((d,f)=>{for(const m of f.ba)m.va(l)&&(u=!0)}),u&&Fa(c)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ow(n,e,t){const r=q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new ae(F.comparator);o=o.insert(i,Ae.newNoDocument(i,W.min()));const l=Q().add(i),c=new Ri(W.min(),new Map,new ae(X),o,l);await Hh(r,c),r.Ru=r.Ru.remove(i),r.Au.delete(e),Ha(r)}else await ea(r.localStore,e,!1).then(()=>ra(r,e,t)).catch(Qn)}async function Vw(n,e){const t=q(n),r=e.batch.batchId;try{const s=await q_(t.localStore,e);Wh(t,r,null),jh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await rs(t,s)}catch(s){await Qn(s)}}async function Mw(n,e,t){const r=q(n);try{const s=await function(o,l){const c=q(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(f=>(Z(f!==null,37113),d=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);Wh(r,e,t),jh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await rs(r,s)}catch(s){await Qn(s)}}function jh(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Wh(n,e,t){const r=q(n);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function ra(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(r=>{n.Vu.containsKey(r)||qh(n,r)})}function qh(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(La(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Ha(n))}function vu(n,e,t){for(const r of t)r instanceof Uh?(n.Vu.addReference(r.key,e),Bw(n,r)):r instanceof Fh?(V($a,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||qh(n,r.key)):j(19791,{wu:r})}function Bw(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(r)||(V($a,"New document in limbo: "+t),n.Eu.add(r),Ha(n))}function Ha(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new F(se.fromString(e)),r=n.fu.next();n.Au.set(r,new Aw(t)),n.Ru=n.Ru.insert(t,r),Dh(n.remoteStore,new Mt(rt(ba(t.path)),r,"TargetPurposeLimboResolution",wi.ce))}}async function rs(n,e,t){const r=q(n),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{o.push(r.pu(c,e,t).then(u=>{var d;if((u||t)&&r.isPrimaryClient){const f=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Na.Es(c.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(c,u){const d=q(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>N.forEach(u,m=>N.forEach(m.Ts,g=>d.persistence.referenceDelegate.addReference(f,m.targetId,g)).next(()=>N.forEach(m.Is,g=>d.persistence.referenceDelegate.removeReference(f,m.targetId,g)))))}catch(f){if(!Jn(f))throw f;V(xa,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const g=d.vs.get(m),_=g.snapshotVersion,w=g.withLastLimboFreeSnapshotVersion(_);d.vs=d.vs.insert(m,w)}}}(r.localStore,i))}async function Uw(n,e){const t=q(n);if(!t.currentUser.isEqual(e)){V($a,"User change. New user:",e.toKey());const r=await Sh(t.localStore,e);t.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(c=>{c.reject(new M(x.CANCELLED,o))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await rs(t,r.Ns)}}function Fw(n,e){const t=q(n),r=t.Au.get(e);if(r&&r.hu)return Q().add(r.key);{let s=Q();const i=t.Iu.get(e);if(!i)return s;for(const o of i){const l=t.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function zh(n){const e=q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ow.bind(null,e),e.Pu.J_=Iw.bind(null,e.eventManager),e.Pu.yu=Cw.bind(null,e.eventManager),e}function $w(n){const e=q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Vw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Mw.bind(null,e),e}class si{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return W_(this.persistence,new $_,e.initialUser,this.serializer)}Cu(e){return new bh(ka.Vi,this.serializer)}Du(e){return new J_}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}si.provider={build:()=>new si};class Hw extends si{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Z(this.persistence.referenceDelegate instanceof ni,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new S_(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Oe.withCacheSize(this.cacheSizeBytes):Oe.DEFAULT;return new bh(r=>ni.Vi(r,t),this.serializer)}}class sa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Tu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Uw.bind(null,this.syncEngine),await Ew(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vw}()}createDatastore(e){const t=Pi(e.databaseInfo.databaseId),r=nw(e.databaseInfo);return aw(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,l){return new cw(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Tu(this.syncEngine,t,0),function(){return pu.v()?new pu:new Y_}())}createSyncEngine(e,t){return function(s,i,o,l,c,u,d){const f=new Rw(s,i,o,l,c,u);return d&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=q(s);V(yn,"RemoteStore shutting down."),i.Ea.add(5),await ns(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}sa.provider={build:()=>new sa};/**
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
 */class Gh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):gt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Qt="FirestoreClient";class jw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Se.UNAUTHENTICATED,this.clientId=_a.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{V(Qt,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(V(Qt,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ua(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ro(n,e){n.asyncQueue.verifyOperationInProgress(),V(Qt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Sh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Iu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ww(n);V(Qt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>yu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>yu(e.remoteStore,s)),n._onlineComponents=e}async function Ww(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(Qt,"Using user provided OfflineComponentProvider");try{await Ro(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;$n("Error using user provided cache. Falling back to memory cache: "+t),await Ro(n,new si)}}else V(Qt,"Using default OfflineComponentProvider"),await Ro(n,new Hw(void 0));return n._offlineComponents}async function Kh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(Qt,"Using user provided OnlineComponentProvider"),await Iu(n,n._uninitializedComponentsProvider._online)):(V(Qt,"Using default OnlineComponentProvider"),await Iu(n,new sa))),n._onlineComponents}function qw(n){return Kh(n).then(e=>e.syncEngine)}async function Xh(n){const e=await Kh(n),t=e.eventManager;return t.onListen=Pw.bind(null,e.syncEngine),t.onUnlisten=Nw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Dw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=xw.bind(null,e.syncEngine),t}function zw(n,e,t={}){const r=new ht;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Gh({next:m=>{d.Nu(),o.enqueueAndForget(()=>Mh(i,f));const g=m.docs.has(l);!g&&m.fromCache?u.reject(new M(x.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new M(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new Bh(ba(l.path),d,{includeMetadataChanges:!0,Ka:!0});return Vh(i,f)}(await Xh(n),n.asyncQueue,e,t,r)),r.promise}function Gw(n,e,t={}){const r=new ht;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Gh({next:m=>{d.Nu(),o.enqueueAndForget(()=>Mh(i,f)),m.fromCache&&c.source==="server"?u.reject(new M(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new Bh(l,d,{includeMetadataChanges:!0,Ka:!0});return Vh(i,f)}(await Xh(n),n.asyncQueue,e,t,r)),r.promise}function Kw(n,e){const t=new ht;return n.asyncQueue.enqueueAndForget(async()=>Lw(await qw(n),e,t)),t.promise}/**
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
 */function Qh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Xw="ComponentProvider",Cu=new Map;function Qw(n,e,t,r,s){return new gy(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Qh(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Jh="firestore.googleapis.com",bu=!0;class Su{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new M(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Jh,this.ssl=bu}else this.host=e.host,this.ssl=e.ssl??bu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ch;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<C_)throw new M(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qh(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new M(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new M(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new M(x.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ni{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Su({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Su(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xg;switch(r.type){case"firstParty":return new Zg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Cu.get(t);r&&(V(Xw,"Removing Datastore"),Cu.delete(t),r.terminate())}(this),Promise.resolve()}}function Jw(n,e,t,r={}){var u;n=yt(n,Ni);const s=Yt(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(ha(`https://${l}`),fa("Firestore",!0)),i.host!==Jh&&i.host!==l&&$n("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!mn(c,o)&&(n._setSettings(c),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=Se.MOCK_USER;else{d=Id(r.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new M(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Se(m)}n._authCredentials=new Qg(new Vd(d,f))}}/**
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
 */class xi{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xi(this.firestore,e,this._query)}}class ye{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ye(this.firestore,e,this._key)}toJSON(){return{type:ye._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Zr(t,ye._jsonSchema))return new ye(e,r||null,new F(se.fromString(t.referencePath)))}}ye._jsonSchemaVersion="firestore/documentReference/1.0",ye._jsonSchema={type:fe("string",ye._jsonSchemaVersion),referencePath:fe("string")};class Ht extends xi{constructor(e,t,r){super(e,t,ba(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ye(this.firestore,null,new F(e))}withConverter(e){return new Ht(this.firestore,e,this._path)}}function Ne(n,e,...t){if(n=oe(n),Md("collection","path",e),n instanceof Ni){const r=se.fromString(e,...t);return Fc(r),new Ht(n,null,r)}{if(!(n instanceof ye||n instanceof Ht))throw new M(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return Fc(r),new Ht(n.firestore,null,r)}}function ue(n,e,...t){if(n=oe(n),arguments.length===1&&(e=_a.newId()),Md("doc","path",e),n instanceof Ni){const r=se.fromString(e,...t);return Uc(r),new ye(n,null,new F(r))}{if(!(n instanceof ye||n instanceof Ht))throw new M(x.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return Uc(r),new ye(n.firestore,n instanceof Ht?n.converter:null,new F(r))}}/**
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
 */const Au="AsyncQueue";class Ru{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Rh(this,"async_queue_retry"),this._c=()=>{const r=Ao();r&&V(Au,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Ao();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ao();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new ht;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Jn(e))throw e;V(Au,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,gt("INTERNAL UNHANDLED ERROR: ",Pu(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Ba.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&j(47125,{Pc:Pu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Pu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Zn extends Ni{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Ru,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ru(e),this._firestoreClient=void 0,await e}}}function Yw(n,e){const t=typeof n=="object"?n:ga(),r=typeof n=="string"?n:Xs,s=_i(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Ed("firestore");i&&Jw(s,...i)}return s}function Li(n){if(n._terminated)throw new M(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Zw(n),n._firestoreClient}function Zw(n){var r,s,i,o;const e=n._freezeSettings(),t=Qw(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new jw(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class We{constructor(e){this._byteString=e}static fromBase64String(e){try{return new We(Ie.fromBase64String(e))}catch(t){throw new M(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new We(Ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:We._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Zr(e,We._jsonSchema))return We.fromBase64String(e.bytes)}}We._jsonSchemaVersion="firestore/bytes/1.0",We._jsonSchema={type:fe("string",We._jsonSchemaVersion),bytes:fe("string")};/**
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
 */class ja{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Wa{constructor(e){this._methodName=e}}/**
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
 */class it{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:it._jsonSchemaVersion}}static fromJSON(e){if(Zr(e,it._jsonSchema))return new it(e.latitude,e.longitude)}}it._jsonSchemaVersion="firestore/geoPoint/1.0",it._jsonSchema={type:fe("string",it._jsonSchemaVersion),latitude:fe("number"),longitude:fe("number")};/**
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
 */class Ke{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ke._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Zr(e,Ke._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ke(e.vectorValues);throw new M(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ke._jsonSchemaVersion="firestore/vectorValue/1.0",Ke._jsonSchema={type:fe("string",Ke._jsonSchemaVersion),vectorValues:fe("object")};/**
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
 */const eE=/^__.*__$/;class tE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new en(e,this.data,this.fieldMask,t,this.fieldTransforms):new es(e,this.data,t,this.fieldTransforms)}}class Yh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new en(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Zh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{dataSource:n})}}class qa{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new qa({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return ii(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Zh(this.dataSource)&&eE.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class nE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Pi(e)}createContext(e,t,r,s=!1){return new qa({dataSource:e,methodName:t,targetDoc:r,path:ve.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ef(n){const e=n._freezeSettings(),t=Pi(n._databaseId);return new nE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function tf(n,e,t,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);za("Data must be an object, but it was:",o,r);const l=nf(r,o);let c,u;if(i.merge)c=new Fe(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const f of i.mergeFields){const m=zr(e,f,t);if(!o.contains(m))throw new M(x.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);of(d,m)||d.push(m)}c=new Fe(d),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new tE(new Be(l),c,u)}class ss extends Wa{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ss}}function rE(n,e,t,r){const s=n.createContext(1,e,t);za("Data must be an object, but it was:",s,r);const i=[],o=Be.empty();Zt(r,(c,u)=>{const d=sf(e,c,t);u=oe(u);const f=s.childContextForFieldPath(d);if(u instanceof ss)i.push(d);else{const m=Oi(u,f);m!=null&&(i.push(d),o.set(d,m))}});const l=new Fe(i);return new Yh(o,l,s.fieldTransforms)}function sE(n,e,t,r,s,i){const o=n.createContext(1,e,t),l=[zr(e,r,t)],c=[s];if(i.length%2!=0)throw new M(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(zr(e,i[m])),c.push(i[m+1]);const u=[],d=Be.empty();for(let m=l.length-1;m>=0;--m)if(!of(u,l[m])){const g=l[m];let _=c[m];_=oe(_);const w=o.childContextForFieldPath(g);if(_ instanceof ss)u.push(g);else{const b=Oi(_,w);b!=null&&(u.push(g),d.set(g,b))}}const f=new Fe(u);return new Yh(d,f,o.fieldTransforms)}function Oi(n,e){if(rf(n=oe(n)))return za("Unsupported field value:",e,n),nf(n,e);if(n instanceof Wa)return function(r,s){if(!Zh(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Oi(l,s.childContextForArray(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Hy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=z.fromDate(r);return{timestampValue:ti(s.serializer,i)}}if(r instanceof z){const i=new z(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ti(s.serializer,i)}}if(r instanceof it)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof We)return{bytesValue:gh(s.serializer,r._byteString)};if(r instanceof ye){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pa(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ke)return function(o,l){const c=o instanceof Ke?o.toArray():o;return{mapValue:{fields:{[zd]:{stringValue:Gd},[Qs]:{arrayValue:{values:c.map(d=>{if(typeof d!="number")throw l.createError("VectorValues must only contain numeric values.");return Sa(l.serializer,d)})}}}}}}(r,s);if(Ih(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${wa(r)}`)}(n,e)}function nf(n,e){const t={};return Fd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zt(n,(r,s)=>{const i=Oi(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function rf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof z||n instanceof it||n instanceof We||n instanceof ye||n instanceof Wa||n instanceof Ke||Ih(n))}function za(n,e,t){if(!rf(t)||!Bd(t)){const r=wa(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function zr(n,e,t){if((e=oe(e))instanceof ja)return e._internalPath;if(typeof e=="string")return sf(n,e);throw ii("Field path arguments must be of type string or ",n,!1,void 0,t)}const iE=new RegExp("[~\\*/\\[\\]]");function sf(n,e,t){if(e.search(iE)>=0)throw ii(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ja(...e.split("."))._internalPath}catch{throw ii(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ii(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new M(x.INVALID_ARGUMENT,l+n+c)}function of(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class oE{convertValue(e,t="none"){switch(Kt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Gt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw j(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Zt(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Qs].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>de(o.doubleValue));return new Ke(t)}convertGeoPoint(e){return new it(de(e.latitude),de(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ti(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp($r(e));default:return null}}convertTimestamp(e){const t=zt(e);return new z(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=se.fromString(e);Z(vh(r),9688,{name:e});const s=new Hr(r.get(1),r.get(3)),i=new F(r.popFirst(5));return s.isEqual(t)||gt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class af extends oE{constructor(e){super(),this.firestore=e}convertBytes(e){return new We(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ye(this.firestore,null,t)}}/**
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
 */function aE(){return new ss("deleteField")}const Du="@firebase/firestore",ku="4.10.0";/**
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
 */class lf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(zr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class lE extends lf{data(){return super.data()}}/**
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
 */function cE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function cf(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Rr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hn extends lf{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Us(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(zr("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=hn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}hn._jsonSchemaVersion="firestore/documentSnapshot/1.0",hn._jsonSchema={type:fe("string",hn._jsonSchemaVersion),bundleSource:fe("string","DocumentSnapshot"),bundleName:fe("string"),bundle:fe("string")};class Us extends hn{data(e={}){return super.data(e)}}class Vn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Rr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Us(this._firestore,this._userDataWriter,r.key,r,new Rr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Us(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Rr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Us(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Rr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:uE(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Vn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_a.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function uE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:n})}}/**
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
 */Vn._jsonSchemaVersion="firestore/querySnapshot/1.0",Vn._jsonSchema={type:fe("string",Vn._jsonSchemaVersion),bundleSource:fe("string","QuerySnapshot"),bundleName:fe("string"),bundle:fe("string")};/**
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
 */class dE{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ef(e)}set(e,t,r){this._verifyNotCommitted();const s=Po(e,this._firestore),i=cf(s.converter,t,r),o=tf(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,He.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Po(e,this._firestore);let o;return o=typeof(t=oe(t))=="string"||t instanceof ja?sE(this._dataReader,"WriteBatch.update",i._key,t,r,s):rE(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,He.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Po(e,this._firestore);return this._mutations=this._mutations.concat(new Ai(t._key,He.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new M(x.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Po(n,e){if((n=oe(n)).firestore!==e)throw new M(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function Gr(n){n=yt(n,ye);const e=yt(n.firestore,Zn),t=Li(e);return zw(t,n._key).then(r=>hE(e,n,r))}function xe(n){n=yt(n,xi);const e=yt(n.firestore,Zn),t=Li(e),r=new af(e);return cE(n._query),Gw(t,n._query).then(s=>new Vn(e,r,n,s))}function Jt(n,e,t){n=yt(n,ye);const r=yt(n.firestore,Zn),s=cf(n.converter,e,t),i=ef(r);return Ga(r,[tf(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,He.none())])}function Nu(n){return Ga(yt(n.firestore,Zn),[new Ai(n._key,He.none())])}function Ga(n,e){const t=Li(n);return Kw(t,e)}function hE(n,e,t){const r=t.docs.get(e._key),s=new af(n);return new hn(n,s,e._key,r,new Rr(t.hasPendingWrites,t.fromCache),e.converter)}function Qe(n){return n=yt(n,Zn),Li(n),new dE(n,e=>Ga(n,e))}(function(e,t=!0){Kg(Tn),pn(new Wt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Zn(new Jg(r.getProvider("auth-internal")),new ey(o,r.getProvider("app-check-internal")),yy(o,s),o);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),nt(Du,ku,e),nt(Du,ku,"esm2020")})();var fE="firebase",mE="12.8.0";/**
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
 */nt(fE,mE,"app");function uf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pE=uf,df=new Jr("auth","Firebase",uf());/**
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
 */const oi=new ma("@firebase/auth");function gE(n,...e){oi.logLevel<=K.WARN&&oi.warn(`Auth (${Tn}): ${n}`,...e)}function Fs(n,...e){oi.logLevel<=K.ERROR&&oi.error(`Auth (${Tn}): ${n}`,...e)}/**
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
 */function ze(n,...e){throw Xa(n,...e)}function Xe(n,...e){return Xa(n,...e)}function Ka(n,e,t){const r={...pE(),[e]:t};return new Jr("auth","Firebase",r).create(e,{appName:n.name})}function ft(n){return Ka(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yE(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ze(n,"argument-error"),Ka(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return df.create(n,...e)}function H(n,e,...t){if(!n)throw Xa(e,...t)}function ut(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fs(e),new Error(e)}function wt(n,e){n||ut(e)}/**
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
 */function ia(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function _E(){return xu()==="http:"||xu()==="https:"}function xu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function wE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_E()||Ap()||"connection"in navigator)?navigator.onLine:!0}function EE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class is{constructor(e,t){this.shortDelay=e,this.longDelay=t,wt(t>e,"Short delay should be less than long delay!"),this.isMobile=Cp()||Rp()}get(){return wE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qa(n,e){wt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class hf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const TE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],IE=new is(3e4,6e4);function Tt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function vt(n,e,t,r,s={}){return ff(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Yr({key:n.config.apiKey,...o}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:c,...i};return Sp()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&Yt(n.emulatorConfig.host)&&(u.credentials="include"),hf.fetch()(await mf(n,n.config.apiHost,t,l),u)})}async function ff(n,e,t){n._canInitEmulator=!1;const r={...TE,...e};try{const s=new bE(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ks(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ks(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ks(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ks(n,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ka(n,d,u);ze(n,d)}}catch(s){if(s instanceof ct)throw s;ze(n,"network-request-failed",{message:String(s)})}}async function os(n,e,t,r,s={}){const i=await vt(n,e,t,r,s);return"mfaPendingCredential"in i&&ze(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function mf(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Qa(n.config,s):`${n.config.apiScheme}://${s}`;return vE.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function CE(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),IE.get())})}}function ks(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Xe(n,e,r);return s.customData._tokenResponse=t,s}function Lu(n){return n!==void 0&&n.enterprise!==void 0}class SE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return CE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function AE(n,e){return vt(n,"GET","/v2/recaptchaConfig",Tt(n,e))}/**
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
 */async function RE(n,e){return vt(n,"POST","/v1/accounts:delete",e)}async function ai(n,e){return vt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Or(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PE(n,e=!1){const t=oe(n),r=await t.getIdToken(e),s=Ja(r);H(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Or(Do(s.auth_time)),issuedAtTime:Or(Do(s.iat)),expirationTime:Or(Do(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Do(n){return Number(n)*1e3}function Ja(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Fs("JWT malformed, contained fewer than 3 sections"),null;try{const s=_d(t);return s?JSON.parse(s):(Fs("Failed to decode base64 JWT payload"),null)}catch(s){return Fs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ou(n){const e=Ja(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Kr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ct&&DE(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function DE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class kE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class oa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Or(this.lastLoginAt),this.creationTime=Or(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function li(n){var f;const e=n.auth,t=await n.getIdToken(),r=await Kr(n,ai(e,{idToken:t}));H(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?pf(s.providerUserInfo):[],o=xE(n.providerData,i),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new oa(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function NE(n){const e=oe(n);await li(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xE(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function pf(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function LE(n,e){const t=await ff(n,{},async()=>{const r=Yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await mf(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&Yt(n.emulatorConfig.host)&&(c.credentials="include"),hf.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function OE(n,e){return vt(n,"POST","/v2/accounts:revokeToken",Tt(n,e))}/**
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
 */class Mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ou(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=Ou(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await LE(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Mn;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mn,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
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
 */function kt(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ge{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new kE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new oa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Kr(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return PE(this,e)}reload(){return NE(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ge({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await li(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(ft(this.auth));const e=await this.getIdToken();return await Kr(this,RE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,u=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:g,providerData:_,stsTokenManager:w}=t;H(f&&w,e,"internal-error");const b=Mn.fromJSON(this.name,w);H(typeof f=="string",e,"internal-error"),kt(r,e.name),kt(s,e.name),H(typeof m=="boolean",e,"internal-error"),H(typeof g=="boolean",e,"internal-error"),kt(i,e.name),kt(o,e.name),kt(l,e.name),kt(c,e.name),kt(u,e.name),kt(d,e.name);const k=new Ge({uid:f,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:b,createdAt:u,lastLoginAt:d});return _&&Array.isArray(_)&&(k.providerData=_.map(L=>({...L}))),c&&(k._redirectEventId=c),k}static async _fromIdTokenResponse(e,t,r=!1){const s=new Mn;s.updateFromServerResponse(t);const i=new Ge({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await li(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?pf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Mn;l.updateFromIdToken(r);const c=new Ge({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new oa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Vu=new Map;function dt(n){wt(n instanceof Function,"Expected a class definition");let e=Vu.get(n);return e?(wt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Vu.set(n,e),e)}/**
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
 */class gf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gf.type="NONE";const Mu=gf;/**
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
 */function $s(n,e,t){return`firebase:${n}:${e}:${t}`}class Bn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$s(this.userKey,s.apiKey,i),this.fullPersistenceKey=$s("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ai(this.auth,{idToken:e}).catch(()=>{});return t?Ge._fromGetAccountInfoResponse(this.auth,t,e):null}return Ge._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Bn(dt(Mu),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||dt(Mu);const o=$s(r,e.config.apiKey,e.name);let l=null;for(const u of t)try{const d=await u._get(o);if(d){let f;if(typeof d=="string"){const m=await ai(e,{idToken:d}).catch(()=>{});if(!m)break;f=await Ge._fromGetAccountInfoResponse(e,m,d)}else f=Ge._fromJSON(e,d);u!==i&&(l=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Bn(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Bn(i,e,r))}}/**
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
 */function Bu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ef(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vf(e))return"Blackberry";if(If(e))return"Webos";if(_f(e))return"Safari";if((e.includes("chrome/")||wf(e))&&!e.includes("edge/"))return"Chrome";if(Tf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yf(n=Re()){return/firefox\//i.test(n)}function _f(n=Re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wf(n=Re()){return/crios\//i.test(n)}function Ef(n=Re()){return/iemobile/i.test(n)}function Tf(n=Re()){return/android/i.test(n)}function vf(n=Re()){return/blackberry/i.test(n)}function If(n=Re()){return/webos/i.test(n)}function Ya(n=Re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function VE(n=Re()){var e;return Ya(n)&&!!((e=window.navigator)!=null&&e.standalone)}function ME(){return Pp()&&document.documentMode===10}function Cf(n=Re()){return Ya(n)||Tf(n)||If(n)||vf(n)||/windows phone/i.test(n)||Ef(n)}/**
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
 */function bf(n,e=[]){let t;switch(n){case"Browser":t=Bu(Re());break;case"Worker":t=`${Bu(Re())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Tn}/${r}`}/**
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
 */class BE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function UE(n,e={}){return vt(n,"GET","/v2/passwordPolicy",Tt(n,e))}/**
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
 */const FE=6;class $E{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??FE,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class HE{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uu(this),this.idTokenSubscription=new Uu(this),this.beforeStateQueue=new BE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=df,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=dt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Bn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ai(this,{idToken:e}),r=await Ge._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Me(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await li(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(ft(this));const t=e?oe(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await UE(this),t=new $E(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Jr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await OE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&dt(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await Bn.create(this,[dt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&gE(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function It(n){return oe(n)}class Uu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mp(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jE(n){Vi=n}function Sf(n){return Vi.loadJS(n)}function WE(){return Vi.recaptchaEnterpriseScript}function qE(){return Vi.gapiScript}function zE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class GE{constructor(){this.enterprise=new KE}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class KE{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const XE="recaptcha-enterprise",Af="NO_RECAPTCHA";class QE{constructor(e){this.type=XE,this.auth=It(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{AE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new SE(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Lu(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Af)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new GE().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!t&&Lu(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=WE();c.length!==0&&(c+=l),Sf(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Fu(n,e,t,r=!1,s=!1){const i=new QE(n);let o;if(s)o=Af;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ci(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Fu(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Fu(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(o)})}/**
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
 */function JE(n,e){const t=_i(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(mn(i,e??{}))return s;ze(s,"already-initialized")}return t.initialize({options:e})}function YE(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(dt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZE(n,e,t){const r=It(n);H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Rf(e),{host:o,port:l}=eT(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){H(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),H(mn(u,r.config.emulator)&&mn(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Yt(o)?(ha(`${i}//${o}${c}`),fa("Auth",!0)):tT()}function Rf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function eT(n){const e=Rf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:$u(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:$u(o)}}}function $u(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function tT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Za{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,t){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}async function nT(n,e){return vt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function rT(n,e){return os(n,"POST","/v1/accounts:signInWithPassword",Tt(n,e))}async function sT(n,e){return vt(n,"POST","/v1/accounts:sendOobCode",Tt(n,e))}async function iT(n,e){return sT(n,e)}/**
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
 */async function oT(n,e){return os(n,"POST","/v1/accounts:signInWithEmailLink",Tt(n,e))}async function aT(n,e){return os(n,"POST","/v1/accounts:signInWithEmailLink",Tt(n,e))}/**
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
 */class Xr extends Za{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Xr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Xr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ci(e,t,"signInWithPassword",rT);case"emailLink":return oT(e,{email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ci(e,r,"signUpPassword",nT);case"emailLink":return aT(e,{idToken:t,email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Un(n,e){return os(n,"POST","/v1/accounts:signInWithIdp",Tt(n,e))}/**
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
 */const lT="http://localhost";class Et extends Za{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new Et(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Un(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Un(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Un(e,t)}buildRequest(){const e={requestUri:lT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Yr(t)}return e}}/**
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
 */function cT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uT(n){const e=Ir(Cr(n)).link,t=e?Ir(Cr(e)).deep_link_id:null,r=Ir(Cr(n)).deep_link_id;return(r?Ir(Cr(r)).link:null)||r||t||e||n}class el{constructor(e){const t=Ir(Cr(e)),r=t.apiKey??null,s=t.oobCode??null,i=cT(t.mode??null);H(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=uT(e);try{return new el(t)}catch{return null}}}/**
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
 */class er{constructor(){this.providerId=er.PROVIDER_ID}static credential(e,t){return Xr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=el.parseLink(t);return H(r,"argument-error"),Xr._fromEmailAndCode(e,r.code,r.tenantId)}}er.PROVIDER_ID="password";er.EMAIL_PASSWORD_SIGN_IN_METHOD="password";er.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class tl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class tr extends tl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Fn extends tr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return H("providerId"in t&&"signInMethod"in t,"argument-error"),Et._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return H(e.idToken||e.accessToken,"argument-error"),Et._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Fn.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Fn.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:l}=e;if(!r&&!s&&!t&&!i||!l)return null;try{return new Fn(l)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:i})}catch{return null}}}/**
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
 */class Nt extends tr{constructor(){super("facebook.com")}static credential(e){return Et._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nt.PROVIDER_ID="facebook.com";/**
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
 */class xt extends tr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Et._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return xt.credential(t,r)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
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
 */class Lt extends tr{constructor(){super("github.com")}static credential(e){return Et._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.GITHUB_SIGN_IN_METHOD="github.com";Lt.PROVIDER_ID="github.com";/**
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
 */class Ot extends tr{constructor(){super("twitter.com")}static credential(e,t){return Et._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ot.credential(t,r)}catch{return null}}}Ot.TWITTER_SIGN_IN_METHOD="twitter.com";Ot.PROVIDER_ID="twitter.com";/**
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
 */async function dT(n,e){return os(n,"POST","/v1/accounts:signUp",Tt(n,e))}/**
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
 */class _n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ge._fromIdTokenResponse(e,r,s),o=Hu(r);return new _n({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Hu(r);return new _n({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Hu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ui extends ct{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ui.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ui(e,t,r,s)}}function Pf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ui._fromErrorAndOperation(n,i,e,r):i})}async function hT(n,e,t=!1){const r=await Kr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return _n._forOperation(n,"link",r)}/**
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
 */async function fT(n,e,t=!1){const{auth:r}=n;if(Me(r.app))return Promise.reject(ft(r));const s="reauthenticate";try{const i=await Kr(n,Pf(r,s,e,n),t);H(i.idToken,r,"internal-error");const o=Ja(i.idToken);H(o,r,"internal-error");const{sub:l}=o;return H(n.uid===l,r,"user-mismatch"),_n._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ze(r,"user-mismatch"),i}}/**
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
 */async function Df(n,e,t=!1){if(Me(n.app))return Promise.reject(ft(n));const r="signIn",s=await Pf(n,r,e),i=await _n._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function mT(n,e){return Df(It(n),e)}/**
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
 */async function kf(n){const e=It(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pT(n,e,t){const r=It(n);await ci(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",iT)}async function gT(n,e,t){if(Me(n.app))return Promise.reject(ft(n));const r=It(n),o=await ci(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dT).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&kf(n),c}),l=await _n._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function yT(n,e,t){return Me(n.app)?Promise.reject(ft(n)):mT(oe(n),er.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&kf(n),r})}function _T(n,e,t,r){return oe(n).onIdTokenChanged(e,t,r)}function wT(n,e,t){return oe(n).beforeAuthStateChanged(e,t)}function ET(n,e,t,r){return oe(n).onAuthStateChanged(e,t,r)}function TT(n){return oe(n).signOut()}const di="__sak";/**
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
 */class Nf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(di,"1"),this.storage.removeItem(di),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const vT=1e3,IT=10;class xf extends Nf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ME()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,IT):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},vT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xf.type="LOCAL";const CT=xf;/**
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
 */class Lf extends Nf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Lf.type="SESSION";const Of=Lf;/**
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
 */function bT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Mi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Mi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(t.origin,i)),c=await bT(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mi.receivers=[];/**
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
 */function nl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ST{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=nl("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ot(){return window}function AT(n){ot().location.href=n}/**
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
 */function Vf(){return typeof ot().WorkerGlobalScope<"u"&&typeof ot().importScripts=="function"}async function RT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function DT(){return Vf()?self:null}/**
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
 */const Mf="firebaseLocalStorageDb",kT=1,hi="firebaseLocalStorage",Bf="fbase_key";class as{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bi(n,e){return n.transaction([hi],e?"readwrite":"readonly").objectStore(hi)}function NT(){const n=indexedDB.deleteDatabase(Mf);return new as(n).toPromise()}function aa(){const n=indexedDB.open(Mf,kT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(hi,{keyPath:Bf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(hi)?e(r):(r.close(),await NT(),e(await aa()))})})}async function ju(n,e,t){const r=Bi(n,!0).put({[Bf]:e,value:t});return new as(r).toPromise()}async function xT(n,e){const t=Bi(n,!1).get(e),r=await new as(t).toPromise();return r===void 0?null:r.value}function Wu(n,e){const t=Bi(n,!0).delete(e);return new as(t).toPromise()}const LT=800,OT=3;class Uf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await aa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>OT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mi._getInstance(DT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await RT(),!this.activeServiceWorker)return;this.sender=new ST(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await aa();return await ju(e,di,"1"),await Wu(e,di),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ju(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>xT(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Bi(s,!1).getAll();return new as(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uf.type="LOCAL";const VT=Uf;new is(3e4,6e4);/**
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
 */function Ff(n,e){return e?dt(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class rl extends Za{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Un(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Un(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Un(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function MT(n){return Df(n.auth,new rl(n),n.bypassAuthState)}function BT(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),fT(t,new rl(n),n.bypassAuthState)}async function UT(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),hT(t,new rl(n),n.bypassAuthState)}/**
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
 */class $f{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MT;case"linkViaPopup":case"linkViaRedirect":return UT;case"reauthViaPopup":case"reauthViaRedirect":return BT;default:ze(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const FT=new is(2e3,1e4);async function $T(n,e,t){if(Me(n.app))return Promise.reject(Xe(n,"operation-not-supported-in-this-environment"));const r=It(n);yE(n,e,tl);const s=Ff(r,t);return new dn(r,"signInViaPopup",e,s).executeNotNull()}class dn extends $f{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const e=nl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FT.get())};e()}}dn.currentPopupAction=null;/**
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
 */const HT="pendingRedirect",Hs=new Map;class jT extends $f{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Hs.get(this.auth._key());if(!e){try{const r=await WT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Hs.set(this.auth._key(),e)}return this.bypassAuthState||Hs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WT(n,e){const t=GT(e),r=zT(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function qT(n,e){Hs.set(n._key(),e)}function zT(n){return dt(n._redirectPersistence)}function GT(n){return $s(HT,n.config.apiKey,n.name)}async function KT(n,e,t=!1){if(Me(n.app))return Promise.reject(ft(n));const r=It(n),s=Ff(r,e),o=await new jT(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const XT=10*60*1e3;class QT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Hf(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XT&&this.cachedEventUids.clear(),this.cachedEventUids.has(qu(e))}saveEventToCache(e){this.cachedEventUids.add(qu(e)),this.lastProcessedEventTime=Date.now()}}function qu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Hf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hf(n);default:return!1}}/**
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
 */async function YT(n,e={}){return vt(n,"GET","/v1/projects",e)}/**
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
 */const ZT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ev=/^https?/;async function tv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await YT(n);for(const t of e)try{if(nv(t))return}catch{}ze(n,"unauthorized-domain")}function nv(n){const e=ia(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!ev.test(t))return!1;if(ZT.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const rv=new is(3e4,6e4);function zu(){const n=ot().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function sv(n){return new Promise((e,t)=>{var s,i,o;function r(){zu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zu(),t(Xe(n,"network-request-failed"))},timeout:rv.get()})}if((i=(s=ot().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=ot().gapi)!=null&&o.load)r();else{const l=zE("iframefcb");return ot()[l]=()=>{gapi.load?r():t(Xe(n,"network-request-failed"))},Sf(`${qE()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw js=null,e})}let js=null;function iv(n){return js=js||sv(n),js}/**
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
 */const ov=new is(5e3,15e3),av="__/auth/iframe",lv="emulator/auth/iframe",cv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dv(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Qa(e,lv):`https://${n.config.authDomain}/${av}`,r={apiKey:e.apiKey,appName:n.name,v:Tn},s=uv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Yr(r).slice(1)}`}async function hv(n){const e=await iv(n),t=ot().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:dv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Xe(n,"network-request-failed"),l=ot().setTimeout(()=>{i(o)},ov.get());function c(){ot().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const fv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mv=500,pv=600,gv="_blank",yv="http://localhost";class Gu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _v(n,e,t,r=mv,s=pv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...fv,width:r.toString(),height:s.toString(),top:i,left:o},u=Re().toLowerCase();t&&(l=wf(u)?gv:t),yf(u)&&(e=e||yv,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[g,_])=>`${m}${g}=${_},`,"");if(VE(u)&&l!=="_self")return wv(e||"",l),new Gu(null);const f=window.open(e||"",l,d);H(f,n,"popup-blocked");try{f.focus()}catch{}return new Gu(f)}function wv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Ev="__/auth/handler",Tv="emulator/auth/handler",vv=encodeURIComponent("fac");async function Ku(n,e,t,r,s,i){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Tn,eventId:s};if(e instanceof tl){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Vp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof tr){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),u=c?`#${vv}=${encodeURIComponent(c)}`:"";return`${Iv(n)}?${Yr(l).slice(1)}${u}`}function Iv({config:n}){return n.emulator?Qa(n,Tv):`https://${n.authDomain}/${Ev}`}/**
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
 */const ko="webStorageSupport";class Cv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Of,this._completeRedirectFn=KT,this._overrideRedirectResult=qT}async _openPopup(e,t,r,s){var o;wt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Ku(e,t,r,ia(),s);return _v(e,i,nl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Ku(e,t,r,ia(),s);return AT(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(wt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await hv(e),r=new QT(e);return t.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ko,{type:ko},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[ko];i!==void 0&&t(!!i),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Cf()||_f()||Ya()}}const bv=Cv;var Xu="@firebase/auth",Qu="1.12.0";/**
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
 */class Sv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Av(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Rv(n){pn(new Wt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bf(n)},u=new HE(r,s,i,c);return YE(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),pn(new Wt("auth-internal",e=>{const t=It(e.getProvider("auth").getImmediate());return(r=>new Sv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(Xu,Qu,Av(n)),nt(Xu,Qu,"esm2020")}/**
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
 */const Pv=5*60,Dv=vd("authIdTokenMaxAge")||Pv;let Ju=null;const kv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Dv)return;const s=t==null?void 0:t.token;Ju!==s&&(Ju=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Nv(n=ga()){const e=_i(n,"auth");if(e.isInitialized())return e.getImmediate();const t=JE(n,{popupRedirectResolver:bv,persistence:[VT,CT,Of]}),r=vd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=kv(i.toString());wT(t,o,()=>o(t.currentUser)),_T(t,l=>o(l))}}const s=wd("auth");return s&&ZE(t,`http://${s}`),t}function xv(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}jE({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Xe("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",xv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Rv("Browser");/**
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
 */const jf="firebasestorage.googleapis.com",Wf="storageBucket",Lv=2*60*1e3,Ov=10*60*1e3,Vv=1e3;/**
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
 */class le extends ct{constructor(e,t,r=0){super(No(e),`Firebase Storage: ${t} (${No(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,le.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return No(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ie;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ie||(ie={}));function No(n){return"storage/"+n}function sl(){const n="An unknown error occurred, please check the error payload for server response.";return new le(ie.UNKNOWN,n)}function Mv(n){return new le(ie.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Bv(n){return new le(ie.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Uv(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new le(ie.UNAUTHENTICATED,n)}function Fv(){return new le(ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function $v(n){return new le(ie.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function qf(){return new le(ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zf(){return new le(ie.CANCELED,"User canceled the upload/download.")}function Hv(n){return new le(ie.INVALID_URL,"Invalid URL '"+n+"'.")}function jv(n){return new le(ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Wv(){return new le(ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Wf+"' property when initializing the app?")}function Gf(){return new le(ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function qv(){return new le(ie.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function zv(){return new le(ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Gv(n){return new le(ie.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function la(n){return new le(ie.INVALID_ARGUMENT,n)}function Kf(){return new le(ie.APP_DELETED,"The Firebase app was deleted.")}function Kv(n){return new le(ie.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Vr(n,e){return new le(ie.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function vr(n){throw new le(ie.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class $e{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=$e.makeFromUrl(e,t)}catch{return new $e(e,"")}if(r.path==="")return r;throw jv(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u($){$.path_=decodeURIComponent($.path)}const d="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${d}/b/${s}/o${m}`,"i"),_={bucket:1,path:3},w=t===jf?"(?:storage.googleapis.com|storage.cloud.google.com)":t,b="([^?#]*)",k=new RegExp(`^https?://${w}/${s}/${b}`,"i"),B=[{regex:l,indices:c,postModify:i},{regex:g,indices:_,postModify:u},{regex:k,indices:{bucket:1,path:2},postModify:u}];for(let $=0;$<B.length;$++){const Y=B[$],te=Y.regex.exec(e);if(te){const C=te[Y.indices.bucket];let E=te[Y.indices.path];E||(E=""),r=new $e(C,E),Y.postModify(r);break}}if(r==null)throw Hv(e);return r}}class Xv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Qv(n,e,t){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...b){u||(u=!0,e.apply(null,b))}function f(b){s=setTimeout(()=>{s=null,n(g,c())},b)}function m(){i&&clearTimeout(i)}function g(b,...k){if(u){m();return}if(b){m(),d.call(null,b,...k);return}if(c()||o){m(),d.call(null,b,...k);return}r<64&&(r*=2);let B;l===1?(l=2,B=0):B=(r+Math.random())*1e3,f(B)}let _=!1;function w(b){_||(_=!0,m(),!u&&(s!==null?(b||(l=2),clearTimeout(s),f(0)):b||(l=1)))}return f(0),i=setTimeout(()=>{o=!0,w(!0)},t),w}function Jv(n){n(!1)}/**
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
 */function Yv(n){return n!==void 0}function Zv(n){return typeof n=="function"}function eI(n){return typeof n=="object"&&!Array.isArray(n)}function Ui(n){return typeof n=="string"||n instanceof String}function Yu(n){return il()&&n instanceof Blob}function il(){return typeof Blob<"u"}function Zu(n,e,t,r){if(r<e)throw la(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw la(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function nr(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Xf(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var fn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(fn||(fn={}));/**
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
 */function Qf(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class tI{constructor(e,t,r,s,i,o,l,c,u,d,f,m=!0,g=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,w)=>{this.resolve_=_,this.reject_=w,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ns(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===fn.NO_ERROR,c=i.getStatus();if(!l||Qf(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===fn.ABORT;r(!1,new Ns(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Ns(u,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());Yv(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=sl();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Kf():zf();o(c)}else{const c=qf();o(c)}};this.canceled_?t(!1,new Ns(!1,null,!0)):this.backoffId_=Qv(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Jv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ns{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function nI(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function rI(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function sI(n,e){e&&(n["X-Firebase-GMPID"]=e)}function iI(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function oI(n,e,t,r,s,i,o=!0,l=!1){const c=Xf(n.urlParams),u=n.url+c,d=Object.assign({},n.headers);return sI(d,e),nI(d,t),rI(d,i),iI(d,r),new tI(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,l)}/**
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
 */function aI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function lI(...n){const e=aI();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(il())return new Blob(n);throw new le(ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function cI(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function uI(n){if(typeof atob>"u")throw Gv("base-64");return atob(n)}/**
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
 */const tt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class xo{constructor(e,t){this.data=e,this.contentType=t||null}}function dI(n,e){switch(n){case tt.RAW:return new xo(Jf(e));case tt.BASE64:case tt.BASE64URL:return new xo(Yf(n,e));case tt.DATA_URL:return new xo(fI(e),mI(e))}throw sl()}function Jf(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function hI(n){let e;try{e=decodeURIComponent(n)}catch{throw Vr(tt.DATA_URL,"Malformed data URL.")}return Jf(e)}function Yf(n,e){switch(n){case tt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Vr(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case tt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Vr(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=uI(e)}catch(s){throw s.message.includes("polyfill")?s:Vr(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Zf{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Vr(tt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=pI(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function fI(n){const e=new Zf(n);return e.base64?Yf(tt.BASE64,e.rest):hI(e.rest)}function mI(n){return new Zf(n).contentType}function pI(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Vt{constructor(e,t){let r=0,s="";Yu(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Yu(this.data_)){const r=this.data_,s=cI(r,e,t);return s===null?null:new Vt(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Vt(r,!0)}}static getBlob(...e){if(il()){const t=e.map(r=>r instanceof Vt?r.data_:r);return new Vt(lI.apply(null,t))}else{const t=e.map(o=>Ui(o)?dI(tt.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new Vt(s,!0)}}uploadData(){return this.data_}}/**
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
 */function em(n){let e;try{e=JSON.parse(n)}catch{return null}return eI(e)?e:null}/**
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
 */function gI(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function yI(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function tm(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function _I(n,e){return e}class ke{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||_I}}let xs=null;function wI(n){return!Ui(n)||n.length<2?n:tm(n)}function nm(){if(xs)return xs;const n=[];n.push(new ke("bucket")),n.push(new ke("generation")),n.push(new ke("metageneration")),n.push(new ke("name","fullPath",!0));function e(i,o){return wI(o)}const t=new ke("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new ke("size");return s.xform=r,n.push(s),n.push(new ke("timeCreated")),n.push(new ke("updated")),n.push(new ke("md5Hash",null,!0)),n.push(new ke("cacheControl",null,!0)),n.push(new ke("contentDisposition",null,!0)),n.push(new ke("contentEncoding",null,!0)),n.push(new ke("contentLanguage",null,!0)),n.push(new ke("contentType",null,!0)),n.push(new ke("metadata","customMetadata",!0)),xs=n,xs}function EI(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new $e(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function TI(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return EI(r,n),r}function rm(n,e,t){const r=em(e);return r===null?null:TI(n,r,t)}function vI(n,e,t,r){const s=em(e);if(s===null||!Ui(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=n.bucket,f=n.fullPath,m="/b/"+o(d)+"/o/"+o(f),g=nr(m,t,r),_=Xf({alt:"media",token:u});return g+_})[0]}function sm(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Cn{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function mt(n){if(!n)throw sl()}function ol(n,e){function t(r,s){const i=rm(n,s,e);return mt(i!==null),i}return t}function II(n,e){function t(r,s){const i=rm(n,s,e);return mt(i!==null),vI(i,s,n.host,n._protocol)}return t}function ls(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Fv():s=Uv():t.getStatus()===402?s=Bv(n.bucket):t.getStatus()===403?s=$v(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function al(n){const e=ls(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Mv(n.path)),i.serverResponse=s.serverResponse,i}return t}function CI(n,e,t){const r=e.fullServerUrl(),s=nr(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,l=new Cn(s,i,ol(n,t),o);return l.errorHandler=al(e),l}function bI(n,e,t){const r=e.fullServerUrl(),s=nr(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,l=new Cn(s,i,II(n,t),o);return l.errorHandler=al(e),l}function SI(n,e){const t=e.fullServerUrl(),r=nr(t,n.host,n._protocol),s="DELETE",i=n.maxOperationRetryTime;function o(c,u){}const l=new Cn(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=al(e),l}function AI(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function im(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=AI(null,e)),r}function RI(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let B="";for(let $=0;$<2;$++)B=B+Math.random().toString().slice(2);return B}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=im(e,r,s),d=sm(u,t),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+c+"--",g=Vt.getBlob(f,r,m);if(g===null)throw Gf();const _={name:u.fullPath},w=nr(i,n.host,n._protocol),b="POST",k=n.maxUploadRetryTime,L=new Cn(w,b,ol(n,t),k);return L.urlParams=_,L.headers=o,L.body=g.uploadData(),L.errorHandler=ls(e),L}class fi{constructor(e,t,r,s){this.current=e,this.total=t,this.finalized=!!r,this.metadata=s||null}}function ll(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{mt(!1)}return mt(!!t&&(e||["active"]).indexOf(t)!==-1),t}function PI(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o=im(e,r,s),l={name:o.fullPath},c=nr(i,n.host,n._protocol),u="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=sm(o,t),m=n.maxUploadRetryTime;function g(w){ll(w);let b;try{b=w.getResponseHeader("X-Goog-Upload-URL")}catch{mt(!1)}return mt(Ui(b)),b}const _=new Cn(c,u,g,m);return _.urlParams=l,_.headers=d,_.body=f,_.errorHandler=ls(e),_}function DI(n,e,t,r){const s={"X-Goog-Upload-Command":"query"};function i(u){const d=ll(u,["active","final"]);let f=null;try{f=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{mt(!1)}f||mt(!1);const m=Number(f);return mt(!isNaN(m)),new fi(m,r.size(),d==="final")}const o="POST",l=n.maxUploadRetryTime,c=new Cn(t,o,i,l);return c.headers=s,c.errorHandler=ls(e),c}const ed=256*1024;function kI(n,e,t,r,s,i,o,l){const c=new fi(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw qv();const u=c.total-c.current;let d=u;s>0&&(d=Math.min(d,s));const f=c.current,m=f+d;let g="";d===0?g="finalize":u===d?g="upload, finalize":g="upload";const _={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${c.current}`},w=r.slice(f,m);if(w===null)throw Gf();function b($,Y){const te=ll($,["active","final"]),C=c.current+d,E=r.size();let v;return te==="final"?v=ol(e,i)($,Y):v=null,new fi(C,E,te==="final",v)}const k="POST",L=e.maxUploadRetryTime,B=new Cn(t,k,b,L);return B.headers=_,B.body=w.uploadData(),B.progressCallback=l||null,B.errorHandler=ls(n),B}const Ve={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Lo(n){switch(n){case"running":case"pausing":case"canceling":return Ve.RUNNING;case"paused":return Ve.PAUSED;case"success":return Ve.SUCCESS;case"canceled":return Ve.CANCELED;case"error":return Ve.ERROR;default:return Ve.ERROR}}/**
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
 */class NI{constructor(e,t,r){if(Zv(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function Pn(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}class xI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=fn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=fn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=fn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw vr("cannot .send() more than once");if(Yt(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw vr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw vr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw vr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw vr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class LI extends xI{initXhr(){this.xhr_.responseType="text"}}function cn(){return new LI}/**
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
 */class OI{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=nm(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(ie.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Qf(s.status,[]))if(i)s=qf();else{this.sleepTime=Math.max(this.sleepTime*2,Vv),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(ie.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=PI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,cn,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const s=DI(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,cn,t,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=ed*this._chunkMultiplier,t=new fi(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=kI(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const l=this._ref.storage._makeRequest(o,cn,s,i,!1);this._request=l,l.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){ed*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=CI(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,cn,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=RI(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,cn,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=zf(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Lo(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,s){const i=new NI(t||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Lo(this._state)){case Ve.SUCCESS:Pn(this._resolve.bind(null,this.snapshot))();break;case Ve.CANCELED:case Ve.ERROR:const t=this._reject;Pn(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Lo(this._state)){case Ve.RUNNING:case Ve.PAUSED:e.next&&Pn(e.next.bind(e,this.snapshot))();break;case Ve.SUCCESS:e.complete&&Pn(e.complete.bind(e))();break;case Ve.CANCELED:case Ve.ERROR:e.error&&Pn(e.error.bind(e,this._error))();break;default:e.error&&Pn(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class wn{constructor(e,t){this._service=e,t instanceof $e?this._location=t:this._location=$e.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new wn(e,t)}get root(){const e=new $e(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tm(this._location.path)}get storage(){return this._service}get parent(){const e=gI(this._location.path);if(e===null)return null;const t=new $e(this._location.bucket,e);return new wn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Kv(e)}}function VI(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new OI(n,new Vt(e),t)}function MI(n){n._throwIfRoot("getDownloadURL");const e=bI(n.storage,n._location,nm());return n.storage.makeRequestWithTokens(e,cn).then(t=>{if(t===null)throw zv();return t})}function BI(n){n._throwIfRoot("deleteObject");const e=SI(n.storage,n._location);return n.storage.makeRequestWithTokens(e,cn)}function UI(n,e){const t=yI(n._location.path,e),r=new $e(n._location.bucket,t);return new wn(n.storage,r)}/**
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
 */function FI(n){return/^[A-Za-z]+:\/\//.test(n)}function $I(n,e){return new wn(n,e)}function om(n,e){if(n instanceof cl){const t=n;if(t._bucket==null)throw Wv();const r=new wn(t,t._bucket);return e!=null?om(r,e):r}else return e!==void 0?UI(n,e):n}function HI(n,e){if(e&&FI(e)){if(n instanceof cl)return $I(n,e);throw la("To use ref(service, url), the first argument must be a Storage instance.")}else return om(n,e)}function td(n,e){const t=e==null?void 0:e[Wf];return t==null?null:$e.makeFromBucketSpec(t,n)}function jI(n,e,t,r={}){n.host=`${e}:${t}`;const s=Yt(e);s&&(ha(`https://${n.host}/b`),fa("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Id(i,n.app.options.projectId))}class cl{constructor(e,t,r,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=jf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Lv,this._maxUploadRetryTime=Ov,this._requests=new Set,s!=null?this._bucket=$e.makeFromBucketSpec(s,this._host):this._bucket=td(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$e.makeFromBucketSpec(this._url,e):this._bucket=td(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wn(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new Xv(Kf());{const o=oI(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const nd="@firebase/storage",rd="0.14.0";/**
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
 */const am="storage";function WI(n,e,t){return n=oe(n),VI(n,e,t)}function qI(n){return n=oe(n),MI(n)}function zI(n){return n=oe(n),BI(n)}function lm(n,e){return n=oe(n),HI(n,e)}function GI(n=ga(),e){n=oe(n);const r=_i(n,am).getImmediate({identifier:e}),s=Ed("storage");return s&&KI(r,...s),r}function KI(n,e,t,r={}){jI(n,e,t,r)}function XI(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new cl(t,r,s,e,Tn)}function QI(){pn(new Wt(am,XI,"PUBLIC").setMultipleInstances(!0)),nt(nd,rd,""),nt(nd,rd,"esm2020")}QI();const JI={apiKey:"AIzaSyDVTkhWjMht3WxUzkve7HzztbAEEderAhw",authDomain:"zarvona-energy-a85ce.firebaseapp.com",projectId:"zarvona-energy-a85ce",storageBucket:"zarvona-energy-a85ce.firebasestorage.app",messagingSenderId:"171021980471",appId:"1:171021980471:web:375df2a6e359b5e93500b2",measurementId:"G-HZXCF84BT5"},ul=Sd(JI),bn=Nv(ul),U=Yw(ul),cm=GI(ul);async function YI(n,e,t,r,s=null){try{const i=r.name.split(".").pop(),o=`failures/${n}/${e}/${t}.${i}`,l=lm(cm,o),c=WI(l,r);return new Promise((u,d)=>{c.on("state_changed",f=>{const m=f.bytesTransferred/f.totalBytes*100;s&&s(m),console.log(`Upload is ${m.toFixed(0)}% done`)},f=>{console.error("Upload error:",f),d(f)},async()=>{try{const f=await qI(c.snapshot.ref);u({fileUrl:f,filePath:o,fileName:r.name,fileSize:r.size})}catch(f){console.error("Error getting download URL:",f),d(f)}})})}catch(i){throw console.error("Error uploading file:",i),i}}async function ZI(n){try{if(!n)return console.warn("No file path provided for deletion"),!1;const e=lm(cm,n);return await zI(e),console.log(`Successfully deleted file: ${n}`),!0}catch(e){if(e.code==="storage/object-not-found")return console.warn("File not found, already deleted:",n),!0;throw console.error("Error deleting file:",e),e}}function um(n){const t=[".xlsx",".xls"],r=["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel","application/octet-stream"];if(!n)return{valid:!1,error:"No file selected"};if(n.size>10485760)return{valid:!1,error:`File size exceeds 10MB limit (${(n.size/1024/1024).toFixed(2)}MB)`};const s=n.name.toLowerCase();return t.some(o=>s.endsWith(o))?(n.type&&!r.includes(n.type)&&console.warn(`Unexpected MIME type: ${n.type}, but extension is valid`),{valid:!0,error:null}):{valid:!1,error:"Only Excel files (.xlsx, .xls) are allowed"}}async function dl(n,e,t=!1,r=null){try{const s=(l,c)=>{console.log(l),r&&r(l,c)};s(`Saving sheet ${n} to Firestore with optimized structure...`,0);const i=(e.wells||[]).map(l=>({id:l.id,name:l.name,status:l.status||"active"})).filter(l=>l.status!=="inactive");s("Saving gauge sheet metadata...",5);const o=ue(U,"gaugeSheets",n);if(await Jt(o,{id:e.id,name:e.name,lastUpdated:z.fromDate(new Date(e.lastUpdated)),rawRowCount:e.rawRowCount||0,wellList:i,wellCount:i.length},{merge:!0}),e.wells&&e.wells.length>0){const l=e.wells.length;for(let c=0;c<l;c++){const u=e.wells[c],d=10+Math.floor(c/l*60);s(`Saving well ${c+1}/${l}: ${u.name}`,d),await eC(n,u,t)}}return s("Saving battery production data...",70),e.batteryProduction&&e.batteryProduction.length>0&&await rC(n,e.batteryProduction,t),s("Saving run tickets...",80),e.runTickets&&e.runTickets.length>0&&await sC(n,e.runTickets,t),s(`Sheet ${n} saved successfully`,90),!0}catch(s){return console.error(`Error saving sheet ${n}:`,s),!1}}async function eC(n,e,t=!1){try{const r=ue(U,`gaugeSheets/${n}/wells`,e.id);let s=null;if(e.production&&e.production.length>0){const u=[...e.production].sort((d,f)=>new Date(f.date)-new Date(d.date))[0];s={date:z.fromDate(new Date(u.date)),oil:u.oil||0,water:u.water||0,gas:u.gas||0}}let i=null;if(e.wellTests&&e.wellTests.length>0){const u=[...e.wellTests].sort((d,f)=>new Date(f.date)-new Date(d.date))[0];i={date:z.fromDate(new Date(u.date)),oil:u.oil||0,water:u.water||0,gas:u.gas||0}}let o=null;if(e.production&&e.production.length>0){const c=new Date;c.setDate(c.getDate()-30);const u=e.production.filter(d=>new Date(d.date)>=c);if(u.length>0){const d=u.reduce((_,w)=>_+(w.oil||0),0),f=u.reduce((_,w)=>_+(w.water||0),0),m=u.reduce((_,w)=>_+(w.gas||0),0),g=u.length;o={avgOil:Math.round(d/g*100)/100,avgWater:Math.round(f/g*100)/100,avgGas:Math.round(m/g*100)/100,days:g}}}const l=e.actionItems&&e.actionItems.length>0;return await Jt(r,{id:e.id,name:e.name,sheetId:n,status:e.status||"active",latestProduction:s,latestTest:i,dailyStats:o,hasActionItems:l,pressureReadings:e.pressureReadings||[],chemicalProgram:e.chemicalProgram||{},failureHistory:e.failureHistory||[],actionItems:e.actionItems||[]},{merge:!0}),e.production&&e.production.length>0&&await tC(n,e.id,e.production,t),e.wellTests&&e.wellTests.length>0&&await nC(n,e.id,e.wellTests,t),!0}catch(r){return console.error(`Error saving well ${e.id}:`,r),!1}}async function tC(n,e,t,r){try{if(r){const s=Qe(U);t.slice(-500).forEach(o=>{const l=new Date(o.date).toISOString().split("T")[0],c=ue(U,`gaugeSheets/${n}/wells/${e}/production`,l);s.set(c,{date:z.fromDate(new Date(o.date)),oil:o.oil||0,water:o.water||0,gas:o.gas||0})}),await s.commit()}else{const s=new Date;s.setDate(s.getDate()-30);const i=t.filter(o=>new Date(o.date)>=s);if(i.length>0){const o=Qe(U);let l=0;for(const c of i){const u=new Date(c.date).toISOString().split("T")[0],d=ue(U,`gaugeSheets/${n}/wells/${e}/production`,u);o.set(d,{date:z.fromDate(new Date(c.date)),oil:c.oil||0,water:c.water||0,gas:c.gas||0},{merge:!0}),l++,l>=500&&(await o.commit(),l=0)}l>0&&await o.commit()}}return!0}catch(s){return console.error("Error saving production data:",s),!1}}async function nC(n,e,t,r){try{const s=r?t:t.slice(-50);if(s.length>0){const i=Qe(U);s.forEach(o=>{const l=new Date(o.date).toISOString().split("T")[0],c=ue(U,`gaugeSheets/${n}/wells/${e}/wellTests`,l);i.set(c,{date:z.fromDate(new Date(o.date)),oil:o.oil||0,water:o.water||0,gas:o.gas||0},{merge:!0})}),await i.commit()}return!0}catch(s){return console.error("Error saving well tests:",s),!1}}async function rC(n,e,t=!1){try{let r;if(t)r=e.slice(-500);else{const s=new Date;s.setDate(s.getDate()-30),r=e.filter(i=>new Date(i.date)>=s)}if(r.length>0){const s=Qe(U);r.forEach(i=>{const o=new Date(i.date).toISOString().split("T")[0],l=ue(U,`gaugeSheets/${n}/batteryProduction`,o);s.set(l,{date:z.fromDate(new Date(i.date)),oil:i.oil||0,water:i.water||0,gas:i.gas||0},{merge:!0})}),await s.commit()}return!0}catch(r){return console.error("Error saving battery production:",r),!1}}async function sC(n,e,t=!1){try{let r;if(t)r=e;else{const s=new Date;s.setDate(s.getDate()-30),r=e.filter(i=>{if(!i.date)return!1;const o=new Date(i.date);return!isNaN(o.getTime())&&o>=s})}if(r.length>0){const s=Qe(U);r.forEach((i,o)=>{const l=i.date?new Date(i.date).toISOString().split("T")[0]:"unknown",c=ue(U,`gaugeSheets/${n}/runTickets`,`${l}_${o}`);let u=null;if(i.date){const d=new Date(i.date);isNaN(d.getTime())||(u=z.fromDate(d))}s.set(c,{...i,date:u},{merge:!0})}),await s.commit()}return!0}catch(r){return console.error("Error saving run tickets:",r),!1}}async function Fi(n=null){var e,t;try{const r=f=>{console.log(f),n&&n(f)};r("Loading all data...");const s=performance.now();r("Fetching gauge sheets...");const i=Ne(U,"gaugeSheets"),o=await xe(i),l={};let c=0;const u=o.docs.length;for(let f=0;f<u;f++){const m=o.docs[f],g=m.data(),_=m.id;r(`Loading battery ${f+1}/${u}: ${g.name}...`),l[_]={id:g.id,name:g.name,lastUpdated:((t=(e=g.lastUpdated)==null?void 0:e.toDate)==null?void 0:t.call(e))||g.lastUpdated,rawRowCount:g.rawRowCount||0,wellList:g.wellList||[],wellCount:g.wellCount||0,wells:[],batteryProduction:[],runTickets:[],_metadataLoaded:!0,_wellsLoaded:!0};const w=Ne(U,`gaugeSheets/${_}/wells`);(await xe(w)).docs.forEach(k=>{const L=k.data();l[_].wells.push({id:L.id,name:L.name,sheetId:L.sheetId,status:L.status||"active",latestProduction:L.latestProduction,latestTest:L.latestTest,dailyStats:L.dailyStats,hasActionItems:L.hasActionItems||!1,pressureReadings:L.pressureReadings||[],chemicalProgram:L.chemicalProgram||{},failureHistory:L.failureHistory||[],actionItems:L.actionItems||[],production:[],wellTests:[],_detailsLoaded:!1}),c++})}r("Updating app state..."),A.appData=l,A.loadedSheets=Object.keys(l);for(const f in l)A.metadataCache.wellCounts[f]=l[f].wells.length,A.metadataCache.wellNames[f]=l[f].wells.map(m=>({id:m.id,name:m.name}));const d=performance.now();return r(`✓ Loaded ${Object.keys(l).length} batteries, ${c} wells in ${Math.round(d-s)}ms`),!0}catch(r){return console.error("Error loading data:",r),A.appData={},!1}}async function cs(n=null){try{const e=o=>{console.log(o),n&&n(o)};e("Preparing dashboard data from loaded wells...");const t=[];Object.keys(A.appData).forEach(o=>{const l=A.appData[o];l&&l.wells&&t.push(...l.wells.map(c=>({...c,sheetId:o})))}),e("Calculating top producers...");const r=t.filter(o=>o.status!=="inactive"&&o.latestProduction).sort((o,l)=>{var c,u;return(((c=l.latestProduction)==null?void 0:c.oil)||0)-(((u=o.latestProduction)==null?void 0:u.oil)||0)}).slice(0,10);e("Finding recent tests...");const s=t.filter(o=>o.status!=="inactive"&&o.latestTest).sort((o,l)=>{var d,f,m,g,_,w,b,k;const c=((m=(f=(d=o.latestTest)==null?void 0:d.date)==null?void 0:f.toDate)==null?void 0:m.call(f))||((g=o.latestTest)==null?void 0:g.date)||0;return(((b=(w=(_=l.latestTest)==null?void 0:_.date)==null?void 0:w.toDate)==null?void 0:b.call(w))||((k=l.latestTest)==null?void 0:k.date)||0)-c}).slice(0,10);e("Filtering action items...");const i=t.filter(o=>o.hasActionItems);return A.dashboardData={topProducers:r,recentTests:s,actionItems:i},e(`✓ Dashboard prepared: ${r.length} top producers, ${s.length} recent tests, ${i.length} action items`),!0}catch(e){return console.error("Error preparing dashboard data:",e),!1}}async function us(n){const e=A.appData[n];return e?(console.log(`✓ Wells already loaded for ${n}: ${e.wells.length} wells`),!0):(console.error(`Sheet ${n} not found in appData`),!1)}async function hl(n,e){try{console.log(`Loading full details for well ${e} in sheet ${n}...`);const t=A.appData[n];if(!t)return console.error(`Sheet ${n} not found in appData`),!1;let r=t.wells.find(d=>d.id===e);if(!r){const d=ue(U,`gaugeSheets/${n}/wells`,e),f=await Gr(d);if(!f.exists())return console.error(`Well ${e} not found in sheet ${n}`),!1;const m=f.data();r={id:m.id,name:m.name,production:[],wellTests:[],pressureReadings:m.pressureReadings||[],chemicalProgram:m.chemicalProgram||{},failureHistory:m.failureHistory||[],actionItems:m.actionItems||[],_detailsLoaded:!1},t.wells.push(r)}if(r._detailsLoaded&&!r._summaryOnly)return console.log(`Well details already loaded for ${e}`),!0;const s=Ne(U,`gaugeSheets/${n}/wells/${e}/production`),i=await xe(s);r.production=i.docs.map(d=>{var f,m;return{...d.data(),date:((m=(f=d.data().date)==null?void 0:f.toDate)==null?void 0:m.call(f))||new Date(d.data().date)}});const o=Ne(U,`gaugeSheets/${n}/wells/${e}/wellTests`),l=await xe(o);r.wellTests=l.docs.map(d=>{var f,m;return{...d.data(),date:((m=(f=d.data().date)==null?void 0:f.toDate)==null?void 0:m.call(f))||new Date(d.data().date)}});const c=ue(U,`gaugeSheets/${n}/wells`,e),u=await Gr(c);if(u.exists()){const d=u.data();r.pressureReadings=d.pressureReadings||[],r.chemicalProgram=d.chemicalProgram||{},r.failureHistory=d.failureHistory||[],r.actionItems=d.actionItems||[],r.status=d.status||"active"}return r._detailsLoaded=!0,r._summaryOnly=!1,console.log(`Loaded full details for well ${e}`),!0}catch(t){return console.error(`Error loading well details for ${e}:`,t),!1}}async function fl(n){try{console.log(`Loading aggregate data for ${n}...`);const e=A.appData[n];if(!e)return console.error(`Sheet ${n} not found in appData`),!1;const t=Ne(U,`gaugeSheets/${n}/batteryProduction`),r=await xe(t);e.batteryProduction=r.docs.map(o=>{var l,c;return{...o.data(),date:((c=(l=o.data().date)==null?void 0:l.toDate)==null?void 0:c.call(l))||new Date(o.data().date)}});const s=Ne(U,`gaugeSheets/${n}/runTickets`),i=await xe(s);return e.runTickets=i.docs.map(o=>o.data()),e._aggregateLoaded=!0,console.log(`Loaded aggregate data for ${n}`),!0}catch(e){return console.error(`Error loading aggregate data for ${n}:`,e),!1}}async function ml(n){var e,t;try{console.log(`Fetching existing data for ${n} from Firestore...`);const r=ue(U,"gaugeSheets",n),s=await Gr(r);if(!s.exists())return console.log(`No existing data found for ${n}`),null;const i=s.data(),o=Ne(U,`gaugeSheets/${n}/wells`),c=(await xe(o)).docs.map(u=>{const d=u.data();return{id:d.id,name:d.name,status:d.status||"active",pressureReadings:d.pressureReadings||[],chemicalProgram:d.chemicalProgram||{},failureHistory:d.failureHistory||[],actionItems:d.actionItems||[],production:[],wellTests:[]}});return console.log(`✓ Fetched ${c.length} wells with manual edits from Firestore`),{id:i.id,name:i.name,lastUpdated:((t=(e=i.lastUpdated)==null?void 0:e.toDate)==null?void 0:t.call(e))||i.lastUpdated,rawRowCount:i.rawRowCount||0,wells:c,batteryProduction:[],runTickets:[]}}catch(r){return console.error(`Error fetching sheet ${n} from Firestore:`,r),null}}async function dm(n,e,t){var r;try{t.actionItems!==void 0&&(t.hasActionItems=t.actionItems&&t.actionItems.length>0);const s=ue(U,`gaugeSheets/${n}/wells`,e);await Jt(s,t,{merge:!0});const i=(r=A.appData[n])==null?void 0:r.wells.find(o=>o.id===e);return i&&Object.assign(i,t),console.log(`✓ Manual edit saved for well ${e}`),!0}catch(s){return console.error("Error updating well:",s),!1}}async function hm(n,e,t,r){var s;try{console.log(`Updating well tests for well ${e}`);const i=Qe(U);let o=0;const l=new Set(t.filter(m=>m.date).map(m=>new Date(m.date).toISOString().split("T")[0])),c=new Set(r.filter(m=>m.date).map(m=>new Date(m.date).toISOString().split("T")[0]));for(const m of t){if(!m.date)continue;const g=new Date(m.date).toISOString().split("T")[0],_=ue(U,`gaugeSheets/${n}/wells/${e}/wellTests`,g);i.set(_,{date:z.fromDate(new Date(m.date)),oil:m.oil!==null&&m.oil!==void 0?Number(m.oil):0,water:m.water!==null&&m.water!==void 0?Number(m.water):0,gas:m.gas!==null&&m.gas!==void 0?Number(m.gas):0},{merge:!0}),o++,o>=500&&(await i.commit(),o=0)}for(const m of c)if(!l.has(m)){const g=ue(U,`gaugeSheets/${n}/wells/${e}/wellTests`,m);i.delete(g),o++,o>=500&&(await i.commit(),o=0)}o>0&&await i.commit();let u=null;if(t.length>0){const m=t.filter(g=>g.date);if(m.length>0){const _=[...m].sort((w,b)=>new Date(b.date)-new Date(w.date))[0];u={date:z.fromDate(new Date(_.date)),oil:_.oil!==null&&_.oil!==void 0?Number(_.oil):0,water:_.water!==null&&_.water!==void 0?Number(_.water):0,gas:_.gas!==null&&_.gas!==void 0?Number(_.gas):0}}}const d=ue(U,`gaugeSheets/${n}/wells`,e);await Jt(d,{latestTest:u},{merge:!0});const f=(s=A.appData[n])==null?void 0:s.wells.find(m=>m.id===e);return f&&(f.wellTests=t.map(m=>({...m,date:new Date(m.date)})),f.latestTest=u),console.log(`✓ Well tests updated successfully for well ${e}`),!0}catch(i){return console.error("Error updating well tests:",i),!1}}async function fm(n=null){try{const e=i=>{console.log(i),n&&n(i)};e("Starting to clear extracted data...");const t=Ne(U,"gaugeSheets"),r=await xe(t),s=r.docs.length;e(`Found ${s} gauge sheets`);for(let i=0;i<s;i++){const o=r.docs[i],l=o.id,c=o.data();e(`Processing ${i+1}/${s}: ${c.name||l}`);try{const u=Ne(U,`gaugeSheets/${l}/wells`),d=await xe(u),f=d.docs.length;e(`Clearing production data for ${f} wells...`);let m=0;for(const _ of d.docs){const w=_.id;m++,e(`Clearing well ${m}/${f}: ${w}`),await Bt(U,`gaugeSheets/${l}/wells/${w}/production`),await Bt(U,`gaugeSheets/${l}/wells/${w}/wellTests`);const b=ue(U,`gaugeSheets/${l}/wells`,w);await Jt(b,{latestProduction:null,latestTest:null,dailyStats:null,hasActionItems:_.data().hasActionItems||!1},{merge:!0})}e("Clearing battery production and run tickets..."),await Bt(U,`gaugeSheets/${l}/batteryProduction`),await Bt(U,`gaugeSheets/${l}/runTickets`);const g=ue(U,"gaugeSheets",l);await Jt(g,{lastUpdated:z.now(),rawRowCount:0,wellList:[],wellCount:0},{merge:!0}),e(`✓ Cleared extracted data for ${c.name||l}`)}catch(u){e(`⚠ Error clearing ${c.name||l}: ${u.message}`),console.error(`Error clearing sheet ${l}:`,u)}}return e("Clearing local state..."),A.appData={},A.dashboardData=null,e("Extracted data cleared successfully! Manual edits preserved."),!0}catch(e){return console.error("Error clearing extracted data:",e),n&&n(`Error: ${e.message}`),!1}}async function mm(n=null){try{const e=i=>{console.log(i),n&&n(i)};e("Starting to clear all data...");const t=Ne(U,"gaugeSheets"),r=await xe(t),s=r.docs.length;e(`Found ${s} gauge sheets to delete`);for(let i=0;i<s;i++){const o=r.docs[i],l=o.data();e(`Deleting ${i+1}/${s}: ${l.name||o.id}`);try{await iC(o.id,e)}catch(c){e(`⚠ Error deleting ${l.name||o.id}: ${c.message}`),console.error(`Error deleting sheet ${o.id}:`,c)}}return e("Clearing local state..."),A.appData={},A.dashboardData=null,e("All data cleared successfully!"),!0}catch(e){return console.error("Error clearing Firestore data:",e),n&&n(`Error: ${e.message}`),!1}}async function iC(n,e=null){try{const t=c=>{e&&e(c)},r=Ne(U,`gaugeSheets/${n}/wells`),s=await xe(r),i=s.docs.length;t(`Deleting ${i} wells and their data...`);let o=0;for(const c of s.docs)o++,t(`Deleting well ${o}/${i}: ${c.id}`),await Bt(U,`gaugeSheets/${n}/wells/${c.id}/production`),await Bt(U,`gaugeSheets/${n}/wells/${c.id}/wellTests`),await Nu(c.ref);t("Deleting battery production and run tickets..."),await Bt(U,`gaugeSheets/${n}/batteryProduction`),await Bt(U,`gaugeSheets/${n}/runTickets`);const l=ue(U,"gaugeSheets",n);return await Nu(l),t(`✓ Deleted sheet ${n}`),!0}catch(t){throw console.error(`Error deleting sheet ${n}:`,t),t}}async function Bt(n,e){const t=Ne(n,e),r=await xe(t);if(r.empty)return;const s=500;let i=Qe(n),o=0,l=0;for(const c of r.docs)i.delete(c.ref),o++,o>=s&&(await i.commit(),l++,console.log(`  Committed batch ${l} (${s} deletes)`),i=Qe(n),o=0,await new Promise(u=>setTimeout(u,100)));o>0&&(await i.commit(),l++,console.log(`  Committed final batch (${o} deletes)`))}async function pm(n,e,t){var r;try{console.log(`Adding failure history entry for well ${e} in sheet ${n}`);const s=ue(U,`gaugeSheets/${n}/wells`,e),i=await Gr(s);if(!i.exists())return console.error(`Well ${e} not found in sheet ${n}`),!1;const l=i.data().failureHistory||[],c={id:t.id,failureDate:z.fromDate(new Date(t.failureDate)),notes:t.notes||"",fileName:t.fileName,fileUrl:t.fileUrl,filePath:t.filePath,fileSize:t.fileSize,uploadedAt:z.now()},u=[...l,c];u.sort((f,m)=>{var w,b,k,L;const g=((b=(w=f.failureDate)==null?void 0:w.toDate)==null?void 0:b.call(w))||new Date(f.failureDate);return(((L=(k=m.failureDate)==null?void 0:k.toDate)==null?void 0:L.call(k))||new Date(m.failureDate))-g}),await Jt(s,{failureHistory:u},{merge:!0});const d=(r=A.appData[n])==null?void 0:r.wells.find(f=>f.id===e);return d&&(d.failureHistory=u),console.log("✓ Failure history entry added successfully"),!0}catch(s){return console.error("Error adding failure history entry:",s),!1}}async function oC(n,e,t){var r;try{console.log(`Deleting failure history entry ${t} for well ${e}`);const s=ue(U,`gaugeSheets/${n}/wells`,e),i=await Gr(s);if(!i.exists())return console.error(`Well ${e} not found in sheet ${n}`),!1;const l=i.data().failureHistory||[],c=l.find(f=>f.id===t);if(!c)return console.warn(`Failure entry ${t} not found`),!1;if(c.filePath)try{await ZI(c.filePath),console.log(`✓ Deleted file from storage: ${c.filePath}`)}catch(f){console.error("Error deleting file from storage:",f)}const u=l.filter(f=>f.id!==t);await Jt(s,{failureHistory:u},{merge:!0});const d=(r=A.appData[n])==null?void 0:r.wells.find(f=>f.id===e);return d&&(d.failureHistory=u),console.log("✓ Failure history entry deleted successfully"),!0}catch(s){return console.error("Error deleting failure history entry:",s),!1}}async function pl(n,e=null){try{const t=(o,l)=>{console.log(o),e&&e(o,l)};if(t("Saving chemical program data...",0),!n||n.length===0)return t("No chemical programs to save",100),!0;const r=Qe(U),s=n.length;let i=0;for(const o of n){const l=o.wellName.toLowerCase().replace(/[^a-z0-9]/g,""),c=ue(U,"chemicalPrograms",l);r.set(c,{wellName:o.wellName,batteryName:o.batteryName,testData:o.testData||{},truckTreating:o.truckTreating||{},continuous:o.continuous||{},lastUpdated:z.now()}),i++;const u=Math.floor(i/s*90);i%500===0&&(t(`Saving chemical programs ${i}/${s}...`,u),await r.commit())}return i%500!==0&&await r.commit(),t(`Saved ${s} chemical programs successfully`,100),!0}catch(t){return console.error("Error saving chemical program data:",t),!1}}async function rr(n=null){try{const e=i=>{console.log(i),n&&n(i)};e("Loading chemical program data...");const t=Ne(U,"chemicalPrograms"),r=await xe(t),s={};return r.docs.forEach(i=>{var l,c;const o=i.data();s[i.id]={wellName:o.wellName,batteryName:o.batteryName,testData:o.testData||{},truckTreating:o.truckTreating||{},continuous:o.continuous||{},lastUpdated:((c=(l=o.lastUpdated)==null?void 0:l.toDate)==null?void 0:c.call(l))||o.lastUpdated}}),e(`✓ Loaded ${Object.keys(s).length} chemical programs`),A.chemicalPrograms=s,s}catch(e){return console.error("Error loading chemical program data:",e),A.chemicalPrograms={},{}}}async function gm(){try{await rr(),console.log(`Loaded ${Object.keys(A.chemicalPrograms).length} chemical programs`)}catch(n){throw console.error("Error loading Master Chemical data:",n),n}}async function ym(n){try{if(!n||Object.keys(n).length===0)return console.log("No changes to save"),!0;const e=Qe(U);let t=0;for(const[r,s]of Object.entries(n)){const i=ue(U,"chemicalPrograms",r),o={};for(const[l,c]of Object.entries(s))for(const[u,d]of Object.entries(c))d===null?o[`${u}.${l}`]=aE():o[`${u}.${l}`]=Number(d),t++;o.lastUpdated=z.now(),e.update(i,o)}await e.commit(),console.log(`Successfully updated ${t} chemical values across ${Object.keys(n).length} wells`);for(const[r,s]of Object.entries(n))if(A.chemicalPrograms[r]){for(const[i,o]of Object.entries(s))for(const[l,c]of Object.entries(o))A.chemicalPrograms[r][l]||(A.chemicalPrograms[r][l]={}),c===null?delete A.chemicalPrograms[r][l][i]:A.chemicalPrograms[r][l][i]=Number(c);A.chemicalPrograms[r].lastUpdated=new Date}return!0}catch(e){throw console.error("Error updating chemical program values:",e),console.error("Error details:",{code:e.code,message:e.message,name:e.name}),e}}async function gl(n=null){try{const e=(d,f)=>{console.log(d),n&&n(d,f)};if(e("Loading chemical programs...",0),await rr(),Object.keys(A.chemicalPrograms).length===0)return e("No chemical programs to match",100),{matched:0,total:0,updated:0};e("Loading all gauge sheets...",5);const{findChemicalProgramMatch:t}=await Br(async()=>{const{findChemicalProgramMatch:d}=await Promise.resolve().then(()=>dC);return{findChemicalProgramMatch:d}},void 0),r=Ne(U,"gaugeSheets"),s=await xe(r);let i=0,o=0,l=0;const c=s.docs,u=c.length;e(`Found ${u} gauge sheets to process`,10);for(let d=0;d<u;d++){const m=c[d].id,g=10+Math.floor(d/u*80);e(`Processing sheet ${d+1}/${u}: ${m}`,g);const _=Ne(U,"gaugeSheets",m,"wells"),w=await xe(_),b=Qe(U);let k=0;for(const L of w.docs){const B=L.data();i++;const $=t(B.name,A.chemicalPrograms);if($){o++;const Y=B.chemicalProgram||{};if(JSON.stringify(Y.truckTreating)!==JSON.stringify($.truckTreating)||JSON.stringify(Y.continuous)!==JSON.stringify($.continuous)||JSON.stringify(Y.testData)!==JSON.stringify($.testData)){const C=ue(U,"gaugeSheets",m,"wells",L.id);b.update(C,{chemicalProgram:{truckTreating:$.truckTreating||{},continuous:$.continuous||{},testData:$.testData||{},matchedFrom:$.wellName,lastUpdated:z.now()}}),l++,k++,k>=500&&(await b.commit(),k=0)}}}k>0&&await b.commit()}return e(`Matching complete: ${o}/${i} wells matched, ${l} updated`,100),{total:i,matched:o,updated:l}}catch(e){throw console.error("Error matching chemical programs to wells:",e),e}}const sd=Object.freeze(Object.defineProperty({__proto__:null,addFailureHistoryEntry:pm,clearExtractedDataOnly:fm,clearFirestoreData:mm,deleteFailureHistoryEntry:oC,fetchSheetFromFirestore:ml,loadChemicalProgramData:rr,loadDashboardData:cs,loadMasterChemicalData:gm,loadNavigationData:Fi,loadSheetAggregateData:fl,loadWellDetails:hl,loadWellsList:us,matchChemicalProgramsToExistingWells:gl,saveChemicalProgramData:pl,saveSheetToFirestore:dl,updateChemicalProgramValues:ym,updateWellInFirestore:dm,updateWellTests:hm},Symbol.toStringTag,{value:"Module"}));function sr(n){if(!n)return"-";try{const e=new Date(n);return isNaN(e.getTime())?n:e.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"2-digit"})}catch{return n}}function mi(n){if(!n)return"";try{const e=new Date(n);return isNaN(e.getTime())?"":e.toISOString().split("T")[0]}catch{return""}}function _m(n){if(!n)return"";const e=document.createElement("div");return e.textContent=n,e.innerHTML}const aC=function(n,e){return{x:e.x,y:e.y}};typeof Chart<"u"&&Chart.Tooltip&&(Chart.Tooltip.positioners.cursor=aC);function yl(n,e=null,t=null){const r=document.getElementById("productionChartsWrapper");A.currentWellData=n,Object.values(A.wellProductionCharts).forEach(u=>{u&&u.destroy()}),A.wellProductionCharts={},r.innerHTML="";const s=n.production||[],i=n.wellTests||[],o=s.filter(u=>u.date).map(u=>new Date(u.date)).filter(u=>!isNaN(u.getTime()));o.length>0&&(A.productionDateRange.min=new Date(Math.min(...o)),A.productionDateRange.max=new Date(Math.max(...o)),lC(e,t));const c=[{key:"oil",label:"Oil (BBL)",unit:"BBL",color:"#78716c",dataKey:"oil",source:"production"},{key:"water",label:"Water (BBL)",unit:"BBL",color:"#3b82f6",dataKey:"water",source:"production"},{key:"gas",label:"Gas (MCF)",unit:"MCF",color:"#22c55e",dataKey:"gas",source:"production"}].filter(u=>(u.source==="production"?s:i).some(f=>f[u.dataKey]!==null&&f[u.dataKey]!==void 0&&!isNaN(f[u.dataKey])&&f[u.dataKey]!==0));if(c.length===0){r.innerHTML='<div class="chart-placeholder">No production data available</div>';return}c.forEach(u=>{const d=document.createElement("div");d.className="chart-section",d.innerHTML=`
            <div class="chart-label">${u.label}</div>
            <div class="canvas-wrapper">
                <canvas id="chart-${u.key}"></canvas>
            </div>
        `,r.appendChild(d);let m=(u.source==="production"?s:i).filter(_=>_.date&&_[u.dataKey]!==null&&_[u.dataKey]!==void 0).map(_=>({x:new Date(_.date),y:Number(_[u.dataKey])})).filter(_=>!isNaN(_.y)).sort((_,w)=>_.x-w.x);(e||t)&&(m=m.filter(_=>{const w=_.x.getTime();return!(e&&w<e.getTime()||t&&w>t.getTime())}));const g=document.getElementById(`chart-${u.key}`).getContext("2d");A.wellProductionCharts[u.key]=new Chart(g,{type:"scatter",data:{datasets:[{label:u.label,data:m,backgroundColor:u.color,borderColor:u.color,pointRadius:3,pointHoverRadius:5}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"nearest",axis:"x",intersect:!1},plugins:{legend:{display:!1},tooltip:{enabled:!0,position:"cursor",backgroundColor:"#282c33",titleColor:"#e8e9eb",bodyColor:"#e8e9eb",callbacks:{title:_=>new Date(_[0].parsed.x).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),label:_=>`${u.label}: ${_.parsed.y}`}}},scales:{x:{type:"time",time:{displayFormats:{day:"MMM-yy",week:"MMM-yy",month:"MMM-yy",quarter:"MMM-yy",year:"yyyy"}},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab",maxTicksLimit:8}},y:{beginAtZero:!0,title:{display:!0,text:u.unit,color:"#9ea3ab"},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab"}}}},plugins:[{id:"crosshair",afterDatasetsDraw:_=>{var w,b;if((b=(w=_.tooltip)==null?void 0:w._active)!=null&&b.length){const k=_.ctx,B=_.tooltip._active[0].element.x,$=_.scales.y.top,Y=_.scales.y.bottom;k.save(),k.beginPath(),k.moveTo(B,$),k.lineTo(B,Y),k.lineWidth=1,k.strokeStyle="#9ea3ab",k.setLineDash([5,5]),k.stroke(),k.restore()}}}]})})}function lC(n=null,e=null){const t=document.getElementById("productionStartDate"),r=document.getElementById("productionEndDate"),s=document.getElementById("btnResetDates");if(!t||!r||!A.productionDateRange.min||!A.productionDateRange.max)return;const i=f=>f?new Date(f).toISOString().split("T")[0]:"",o=i(A.productionDateRange.min),l=i(A.productionDateRange.max);t.min=o,t.max=l,r.min=o,r.max=l,t.value=n?i(n):o,r.value=e?i(e):l;const c=t.cloneNode(!0),u=r.cloneNode(!0),d=s.cloneNode(!0);t.parentNode.replaceChild(c,t),r.parentNode.replaceChild(u,r),s.parentNode.replaceChild(d,s),c.addEventListener("blur",id),u.addEventListener("blur",id),c.addEventListener("keydown",f=>{f.key==="Enter"&&f.target.blur()}),u.addEventListener("keydown",f=>{f.key==="Enter"&&f.target.blur()}),d.addEventListener("click",cC)}function id(){if(!A.currentWellData)return;const n=document.getElementById("productionStartDate"),e=document.getElementById("productionEndDate"),t=n.value?new Date(n.value):null,r=e.value?new Date(e.value+"T23:59:59"):null;yl(A.currentWellData,t,r)}function cC(){A.currentWellData&&yl(A.currentWellData,null,null)}function pi(n){return n?n.toLowerCase().replace(/[^a-z0-9]/g,"").trim():""}function od(n){if(!n)return{battery:"",numbers:""};const t=n.toLowerCase().trim().split(/[\s\-_]+/),r=[],s=[];for(const i of t)/\d/.test(i)?s.push(i.replace(/[^0-9]/g,"")):r.push(i);return{battery:r.join(""),numbers:s.join("")}}function uC(n,e){const t=pi(n),r=pi(e);if(t===r)return 1;const s=od(n),i=od(e);if(s.battery!==i.battery)return 0;if(s.numbers===i.numbers)return .95;if(s.numbers&&i.numbers){const o=s.numbers.length,l=i.numbers.length,c=Math.min(o,l);let u=0;for(let f=0;f<c;f++)s.numbers[f]===i.numbers[f]&&u++;return u/Math.max(o,l)*.8}return 0}function _l(n,e,t=.8){if(!n||!e)return null;let r=null,s=0;const i=pi(n);if(e[i])return e[i];for(const[o,l]of Object.entries(e)){const c=uC(n,l.wellName);c>s&&c>=t&&(s=c,r=l)}return r}const dC=Object.freeze(Object.defineProperty({__proto__:null,findChemicalProgramMatch:_l,normalizeWellName:pi},Symbol.toStringTag,{value:"Module"}));let Pr=null;function hC(n){Pr=n}function fC(){document.querySelectorAll(".btn-edit[data-edit]").forEach(i=>{const o=i.cloneNode(!0);i.parentNode.replaceChild(o,i),o.addEventListener("click",l=>{l.stopPropagation();const c=o.dataset.edit;mC(c)})});const e=document.getElementById("btnCloseModal"),t=document.getElementById("btnCancelEdit"),r=document.getElementById("editModalOverlay"),s=document.getElementById("btnSaveEdit");if(e){const i=e.cloneNode(!0);e.parentNode.replaceChild(i,e),i.addEventListener("click",Mr)}if(t){const i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),i.addEventListener("click",Mr)}if(r){const i=r.cloneNode(!0);r.parentNode.replaceChild(i,r),i.addEventListener("click",Mr)}if(s){const i=s.cloneNode(!0);s.parentNode.replaceChild(i,s),i.addEventListener("click",CC)}}function mC(n){if(!A.currentSheet||!A.currentWell)return;const e=A.appData[A.currentSheet];if(!e||!e.wells)return;const t=e.wells.find(l=>l.id===A.currentWell);if(!t)return;A.currentEditSection=n;const r=document.getElementById("editModal"),s=document.getElementById("editModalTitle"),i=document.getElementById("editModalBody"),o={chemicalProgram:"Edit Chemical Program",failureHistory:"Edit Failure History",actionItems:"Edit Action Items",pressureReadings:"Edit Pressure Readings",wellTests:"Edit Well Tests"};switch(s.textContent=o[n]||"Edit",n){case"chemicalProgram":i.innerHTML=pC(t.chemicalProgram||{});break;case"failureHistory":i.innerHTML=gC(t.failureHistory||[]),yC();break;case"actionItems":i.innerHTML=_C(t.actionItems||[]),wC();break;case"pressureReadings":i.innerHTML=TC(t.pressureReadings||[]),IC();break;case"wellTests":i.innerHTML=EC(t.wellTests||[]),vC();break}r.classList.add("visible")}function Mr(){document.getElementById("editModal").classList.remove("visible"),A.currentEditSection=null}function pC(n){const e=A.appData[A.currentSheet],t=e==null?void 0:e.wells.find(c=>c.id===A.currentWell),r=t?_l(t.name,A.chemicalPrograms):null;let s=null,i="none";if(r?(i="master",s=r):n&&(n.continuous||n.truckTreat)&&(i="manual",s={continuous:n.continuous||{},truckTreating:n.truckTreat||{}}),i==="master"){const c=new Set;Object.keys(s.truckTreating||{}).forEach(f=>c.add(f)),Object.keys(s.continuous||{}).forEach(f=>c.add(f));const u=Array.from(c).sort();s.lastUpdated&&new Date(s.lastUpdated).toLocaleDateString();let d="";return u.forEach(f=>{var _,w,b,k;const m=((_=s.continuous)==null?void 0:_[f])!==void 0&&((w=s.continuous)==null?void 0:w[f])!==null?s.continuous[f]:"",g=((b=s.truckTreating)==null?void 0:b[f])!==void 0&&((k=s.truckTreating)==null?void 0:k[f])!==null?s.truckTreating[f]:"";d+=`
                <div class="form-row-label">${f}</div>
                <input type="number" step="0.01" class="edit-form-input" 
                       data-chemical="${f}" 
                       data-category="continuous" 
                       value="${m}" 
                       placeholder="-">
                <input type="number" step="0.01" class="edit-form-input" 
                       data-chemical="${f}" 
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
    `}function gC(n){let e="";return n.length>0&&(e=n.map((t,r)=>`
            <tr data-row-index="${r}">
                <td><input type="date" class="edit-table-input" name="dateDown" value="${mi(t.dateDown)}"></td>
                <td><input type="date" class="edit-table-input" name="dateUp" value="${mi(t.dateUp)}"></td>
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
    `}function yC(){const n=document.getElementById("btnAddFailureRow"),e=document.getElementById("failureEditBody");n&&n.addEventListener("click",()=>{const t=document.createElement("tr");t.innerHTML=`
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
            `,e.appendChild(t),Gn(t.querySelector(".btn-delete-row"))}),e.querySelectorAll(".btn-delete-row").forEach(t=>{Gn(t)})}function _C(n){let e="";return n.length>0?e=n.map((t,r)=>`
            <div class="action-item-row" data-item-index="${r}">
                <input type="text" class="edit-form-input" name="actionItem" value="${_m(t)}">
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
    `}function wC(){const n=document.getElementById("btnAddActionItem"),e=document.getElementById("newActionItem"),t=document.getElementById("actionItemsEditor"),r=()=>{const s=e.value.trim();if(!s)return;const i=t.querySelector(".action-items-empty");i&&i.remove();const o=document.createElement("div");o.className="action-item-row",o.innerHTML=`
            <input type="text" class="edit-form-input" name="actionItem" value="${_m(s)}">
            <button type="button" class="btn-delete-item" title="Delete item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        `,t.appendChild(o),ad(o.querySelector(".btn-delete-item")),e.value="",e.focus()};n&&n.addEventListener("click",r),e&&e.addEventListener("keypress",s=>{s.key==="Enter"&&(s.preventDefault(),r())}),t.querySelectorAll(".btn-delete-item").forEach(s=>{ad(s)})}function ad(n){n.addEventListener("click",()=>{n.closest(".action-item-row").remove();const t=document.getElementById("actionItemsEditor");t.querySelectorAll(".action-item-row").length===0&&(t.innerHTML='<div class="action-items-empty">No action items. Add one below.</div>')})}function EC(n){let e="";return n.length>0&&(e=n.map((t,r)=>`
            <tr data-row-index="${r}">
                <td><input type="date" class="edit-table-input" name="date" value="${mi(t.date)}"></td>
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
    `}function TC(n){let e="";return n.length>0&&(e=n.map((t,r)=>`
            <tr data-row-index="${r}">
                <td><input type="date" class="edit-table-input" name="date" value="${mi(t.date)}"></td>
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
    `}function vC(){const n=document.getElementById("btnAddWellTestRow"),e=document.getElementById("wellTestEditBody");n&&n.addEventListener("click",()=>{const t=document.createElement("tr");t.innerHTML=`
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
            `,e.appendChild(t),Gn(t.querySelector(".btn-delete-row"))}),e.querySelectorAll(".btn-delete-row").forEach(t=>{Gn(t)})}function IC(){const n=document.getElementById("btnAddPressureRow"),e=document.getElementById("pressureEditBody");n&&n.addEventListener("click",()=>{const t=document.createElement("tr");t.innerHTML=`
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
            `,e.appendChild(t),Gn(t.querySelector(".btn-delete-row"))}),e.querySelectorAll(".btn-delete-row").forEach(t=>{Gn(t)})}function Gn(n){n.addEventListener("click",()=>{n.closest("tr").remove()})}async function CC(){if(!A.currentSheet||!A.currentWell||!A.currentEditSection)return;const n=A.appData[A.currentSheet];if(!n||!n.wells)return;const e=n.wells.findIndex(s=>s.id===A.currentWell);if(e===-1)return;const t=n.wells[e],r={};switch(A.currentEditSection){case"chemicalProgram":t.chemicalProgram=bC(),r.chemicalProgram=t.chemicalProgram;break;case"failureHistory":t.failureHistory=SC(),r.failureHistory=t.failureHistory;break;case"actionItems":t.actionItems=AC(),r.actionItems=t.actionItems;break;case"pressureReadings":t.pressureReadings=PC(),r.pressureReadings=t.pressureReadings;break;case"wellTests":const s=RC(),i=t.wellTests||[];await hm(A.currentSheet,A.currentWell,s,i),Mr(),Pr&&Pr(A.currentSheet,A.currentWell);return}await dm(A.currentSheet,A.currentWell,r),Mr(),Pr&&Pr(A.currentSheet,A.currentWell)}function bC(){var e,t,r,s,i,o;const n=document.querySelectorAll(".edit-form-input[data-chemical]");if(n.length>0){const l={},c={};return n.forEach(u=>{const d=u.dataset.chemical,f=u.dataset.category,m=u.value.trim();if(m!==""){const g=parseFloat(m);isNaN(g)||(f==="continuous"?l[d]=g:f==="truckTreating"&&(c[d]=g))}}),{continuous:l,truckTreat:c}}return{continuous:{rate:((e=document.getElementById("editChemContRate"))==null?void 0:e.value)||"",chems:((t=document.getElementById("editChemContChems"))==null?void 0:t.value)||"",ppm:((r=document.getElementById("editChemContPPM"))==null?void 0:r.value)||""},truckTreat:{rate:((s=document.getElementById("editChemTruckRate"))==null?void 0:s.value)||"",chems:((i=document.getElementById("editChemTruckChems"))==null?void 0:i.value)||"",ppm:((o=document.getElementById("editChemTruckPPM"))==null?void 0:o.value)||""}}}function SC(){const e=document.getElementById("failureEditBody").querySelectorAll("tr"),t=[];return e.forEach(r=>{var d,f,m,g,_,w;const s=(d=r.querySelector('input[name="dateDown"]'))==null?void 0:d.value,i=(f=r.querySelector('input[name="dateUp"]'))==null?void 0:f.value,o=(m=r.querySelector('input[name="downtime"]'))==null?void 0:m.value,l=(g=r.querySelector('input[name="oil"]'))==null?void 0:g.value,c=(_=r.querySelector('input[name="reason"]'))==null?void 0:_.value,u=(w=r.querySelector('input[name="comments"]'))==null?void 0:w.value;(s||i||o||l||c||u)&&t.push({dateDown:s||null,dateUp:i||null,downtime:o?Number(o):null,oil:l?Number(l):null,reason:c||"",comments:u||""})}),t}function AC(){const e=document.getElementById("actionItemsEditor").querySelectorAll('input[name="actionItem"]'),t=[];return e.forEach(r=>{const s=r.value.trim();s&&t.push(s)}),t}function RC(){const e=document.getElementById("wellTestEditBody").querySelectorAll("tr"),t=[];return e.forEach(r=>{var c,u,d,f;const s=(c=r.querySelector('input[name="date"]'))==null?void 0:c.value,i=(u=r.querySelector('input[name="oil"]'))==null?void 0:u.value,o=(d=r.querySelector('input[name="water"]'))==null?void 0:d.value,l=(f=r.querySelector('input[name="gas"]'))==null?void 0:f.value;(s||i||o||l)&&t.push({date:s||null,oil:i?Number(i):null,water:o?Number(o):null,gas:l?Number(l):null})}),t}function PC(){const e=document.getElementById("pressureEditBody").querySelectorAll("tr"),t=[];return e.forEach(r=>{var u,d,f,m,g;const s=(u=r.querySelector('input[name="date"]'))==null?void 0:u.value,i=(d=r.querySelector('input[name="casingPsi"]'))==null?void 0:d.value,o=(f=r.querySelector('input[name="tubingPsi"]'))==null?void 0:f.value,l=(m=r.querySelector('input[name="flowlinePsi"]'))==null?void 0:m.value,c=(g=r.querySelector('input[name="injVol"]'))==null?void 0:g.value;(s||i||o||l||c)&&t.push({date:s||null,casingPsi:i?Number(i):null,tubingPsi:o?Number(o):null,flowlinePsi:l?Number(l):null,injVol:c?Number(c):null})}),t}const DC={water:1e4,gas:1e4};function je(n){return n!=null&&!isNaN(n)}function kC(n,e){if(!je(e))return null;const t=Number(e);if(n==="gas"&&t<0)return 0;const r=DC[n];return r&&t>r?null:t}function pe(n){return Math.round(n*100)/100}function $i(){const n=new Date;return n.setHours(23,59,59,999),n}function NC(n,e){const t=new Date(n);if(e==="week"){const r=t.getUTCDay(),s=r===0?-6:1-r;t.setUTCDate(t.getUTCDate()+s)}else e==="month"&&t.setUTCDate(1);return t.setUTCHours(0,0,0,0),t}function xC(n,e,t){const r=n.getTime();return!(e&&r<e.getTime()||t&&r>t.getTime())}function LC(){var s;let n=0,e=0,t=0;if((s=A.dashboardData)!=null&&s.topProducers&&(Object.values(A.appData).forEach(i=>{i!=null&&i.wells&&i.wells.forEach(o=>{o.status==="inactive"||!o.latestProduction||(n+=Number(o.latestProduction.oil)||0,e+=Number(o.latestProduction.water)||0,t+=Math.max(0,Number(o.latestProduction.gas)||0))})}),n>0||e>0||t>0))return{totalOil:pe(n),totalWater:pe(e),totalGas:pe(t)};const r=$i();return Object.values(A.appData).forEach(i=>{var o,l;if(i)if(((o=i.batteryProduction)==null?void 0:o.length)>0){const c=i.batteryProduction.filter(u=>new Date(u.date)<=r).sort((u,d)=>new Date(d.date)-new Date(u.date));if(c.length>0){const u=c[0];je(u.oil)&&(n+=Number(u.oil)),je(u.water)&&(e+=Number(u.water)),je(u.gas)&&(t+=Math.max(0,Number(u.gas)))}}else((l=i.wells)==null?void 0:l.length)>0&&i.wells.forEach(c=>{var f;if(c.status==="inactive"||!((f=c.wellTests)!=null&&f.length))return;const u=c.wellTests.filter(m=>new Date(m.date)<=r);if(u.length===0)return;const d=u[0];je(d.oil)&&(n+=Number(d.oil)),je(d.water)&&(e+=Number(d.water)),je(d.gas)&&(t+=Math.max(0,Number(d.gas)))})}),{totalOil:pe(n),totalWater:pe(e),totalGas:pe(t)}}function OC(n="oil",e=null,t=null,r="month",s=null){const i=new Map;let o=null,l=null;const c=$i();Object.entries(A.appData).forEach(([d,f])=>{if(!f||s!==null&&(s.size===0||!s.has(d)))return;(f.batteryProduction||[]).forEach(g=>{const _=new Date(g.date);if(!g.date||isNaN(_.getTime())||_>c)return;const w=kC(n,g[n]);if(w===null)return;const b=NC(_,r),k=b.toISOString().split("T")[0];(!o||b<o)&&(o=b),(!l||b>l)&&(l=b),i.set(k,(i.get(k)||0)+w)})});let u=Array.from(i.entries()).map(([d,f])=>({x:new Date(d),y:f})).sort((d,f)=>d.x-f.x);return(e||t)&&(u=u.filter(d=>xC(d.x,e,t))),{data:u,dateRange:{min:o,max:l}}}function VC(n=10){var r;if((r=A.dashboardData)!=null&&r.topProducers)return A.dashboardData.topProducers.slice(0,n).map(s=>{const i=qe.find(o=>o.id===s.sheetId);return{wellId:s.id,wellName:s.name,sheetId:s.sheetId,batteryName:(i==null?void 0:i.name)||"Unknown",oil:s.latestProduction?pe(s.latestProduction.oil):0,water:s.latestProduction?pe(s.latestProduction.water):0}});const e=[],t=$i();return Object.entries(A.appData).forEach(([s,i])=>{const o=qe.find(l=>l.id===s);!(i!=null&&i.wells)||!o||i.wells.forEach(l=>{var d;if(l.status==="inactive")return;let c=0,u=0;if(((d=l.wellTests)==null?void 0:d.length)>0){const f=l.wellTests.filter(m=>new Date(m.date)<=t);if(f.length>0){const m=f[0];c=m.oil,u=m.water}}e.push({wellId:l.id,wellName:l.name,sheetId:s,batteryName:o.name,oil:je(c)?pe(c):0,water:je(u)?pe(u):0})})}),e.sort((s,i)=>i.oil-s.oil).slice(0,n)}function MC(n=10){var r;if((r=A.dashboardData)!=null&&r.recentTests)return A.dashboardData.recentTests.slice(0,n).map(s=>{var l,c,u;const i=qe.find(d=>d.id===s.sheetId);return{date:(l=s.latestTest)!=null&&l.date?((u=(c=s.latestTest.date).toDate)==null?void 0:u.call(c))||new Date(s.latestTest.date):new Date,wellId:s.id,wellName:s.name,sheetId:s.sheetId,batteryName:(i==null?void 0:i.name)||"Unknown",oil:s.latestTest?pe(s.latestTest.oil):null,water:s.latestTest?pe(s.latestTest.water):null,gas:s.latestTest?pe(Math.max(0,s.latestTest.gas)):null}});const e=[],t=$i();return Object.entries(A.appData).forEach(([s,i])=>{const o=qe.find(l=>l.id===s);!(i!=null&&i.wells)||!o||i.wells.forEach(l=>{l.status==="inactive"||!l.wellTests||l.wellTests.forEach(c=>{const u=new Date(c.date);!c.date||u>t||e.push({date:u,wellId:l.id,wellName:l.name,sheetId:s,batteryName:o.name,oil:je(c.oil)?pe(c.oil):null,water:je(c.water)?pe(c.water):null,gas:je(c.gas)?pe(Math.max(0,c.gas)):null})})})}),e.sort((s,i)=>i.date-s.date).slice(0,n)}function BC(n=15){var r;const e=[];return(((r=A.dashboardData)==null?void 0:r.actionItems)||Object.values(A.appData).flatMap(s=>(s==null?void 0:s.wells)||[])).forEach(s=>{var o;if(s.status==="inactive"||!((o=s.actionItems)!=null&&o.length))return;const i=qe.find(l=>l.id===s.sheetId);s.actionItems.forEach(l=>{l!=null&&l.trim()&&e.push({content:l,wellId:s.id,wellName:s.name,sheetId:s.sheetId,batteryName:(i==null?void 0:i.name)||"Unknown"})})}),e.slice(0,n)}function UC(n){const e=A.appData[n];if(!e)return{totalOil:0,totalWater:0,totalGas:0};const t=e.batteryProduction||[];if(t.length>0){const r=t.filter(s=>s.date).sort((s,i)=>new Date(i.date)-new Date(s.date))[0];if(r)return{totalOil:pe(Number(r.oil)||0),totalWater:pe(Number(r.water)||0),totalGas:pe(Math.max(0,Number(r.gas)||0))}}return{totalOil:0,totalWater:0,totalGas:0}}function FC(){return Object.values(A.appData).some(n=>{var e;return((e=n==null?void 0:n.wells)==null?void 0:e.length)>0})}async function Hi(n=null,e=null){Je("oilChart"),await wl(),El("oil",n,e)}async function ji(n=null,e=null){Je("waterChart"),await wl(),El("water",n,e)}async function Wi(n=null,e=null){Je("gasChart"),await wl(),El("gas",n,e)}async function wl(n){const e=[];for(const t in A.appData){const r=A.appData[t];r&&(r._aggregateLoaded||e.push(fl(t)))}e.length>0&&(console.log(`Loading aggregate data for ${e.length} sheets...`),await Promise.all(e),console.log("Aggregate data loaded"))}function El(n,e=null,t=null){var _;const s={oil:{canvasId:"aggregateOilChart",label:"Oil Production (BBL)",unit:"BBL",color:"#78716c",dateRangeVar:"oilChartDateRange",startDateId:"oilChartStartDate",endDateId:"oilChartEndDate",resetBtnId:"btnResetOilDates",showFn:Hi},water:{canvasId:"aggregateWaterChart",label:"Water Production (BBL)",unit:"BBL",color:"#3b82f6",dateRangeVar:"waterChartDateRange",startDateId:"waterChartStartDate",endDateId:"waterChartEndDate",resetBtnId:"btnResetWaterDates",showFn:ji},gas:{canvasId:"aggregateGasChart",label:"Gas Production (MCF)",unit:"MCF",color:"#22c55e",dateRangeVar:"gasChartDateRange",startDateId:"gasChartStartDate",endDateId:"gasChartEndDate",resetBtnId:"btnResetGasDates",showFn:Wi}}[n];if(!s)return;n==="oil"&&A.aggregateOilChart?(A.aggregateOilChart.destroy(),A.aggregateOilChart=null):n==="water"&&A.aggregateWaterChart?(A.aggregateWaterChart.destroy(),A.aggregateWaterChart=null):n==="gas"&&A.aggregateGasChart&&(A.aggregateGasChart.destroy(),A.aggregateGasChart=null);const i=HC(n),o=((_=A.chartState[n])==null?void 0:_.aggregation)||"month";A.chartState[n].selectedBatteries=i;const{data:l,dateRange:c}=OC(n,e,t,o,i);n==="oil"?A.oilChartDateRange=c:n==="water"?A.waterChartDateRange=c:n==="gas"&&(A.gasChartDateRange=c),$C(n,s,e,t,c);const u={oil:"oilChartBatteries",water:"waterChartBatteries",gas:"gasChartBatteries"},d=document.getElementById(u[n]);d&&!d.querySelector(".explorer-battery")&&WC(n),jC(n);const f=document.getElementById(s.canvasId);if(!f)return;if(l.length===0){const w=f.getContext("2d");w.clearRect(0,0,f.width,f.height),w.font="14px Archivo, sans-serif",w.fillStyle="#6b7280",w.textAlign="center",w.fillText("No production data available",f.width/2,f.height/2);return}const m=f.getContext("2d"),g=new Chart(m,{type:"line",data:{datasets:[{label:s.label,data:l,backgroundColor:s.color+"33",borderColor:s.color,borderWidth:2,fill:!0,tension:.1,pointRadius:2,pointHoverRadius:5}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#282c33",titleColor:"#e8e9eb",bodyColor:"#e8e9eb",callbacks:{title:w=>new Date(w[0].parsed.x).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),label:w=>`${s.label}: ${w.parsed.y.toLocaleString()}`}}},scales:{x:{type:"time",time:{displayFormats:{day:"MMM-yy",week:"MMM-yy",month:"MMM-yy",quarter:"MMM-yy",year:"yyyy"}},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab",maxTicksLimit:12}},y:{beginAtZero:!0,title:{display:!0,text:s.unit,color:"#9ea3ab"},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab"}}}}});n==="oil"?A.aggregateOilChart=g:n==="water"?A.aggregateWaterChart=g:n==="gas"&&(A.aggregateGasChart=g)}function $C(n,e,t,r,s){const i=document.getElementById(e.startDateId),o=document.getElementById(e.endDateId),l=document.getElementById(e.resetBtnId);if(!i||!o||!s.min||!s.max)return;const c=w=>w?new Date(w).toISOString().split("T")[0]:"",u=c(s.min),d=c(s.max);i.min=u,i.max=d,o.min=u,o.max=d,i.value=t?c(t):u,o.value=r?c(r):d;const f=i.cloneNode(!0),m=o.cloneNode(!0),g=l.cloneNode(!0);i.parentNode.replaceChild(f,i),o.parentNode.replaceChild(m,o),l.parentNode.replaceChild(g,l);const _=()=>{const w=f.value?new Date(f.value):null,b=m.value?new Date(m.value+"T23:59:59"):null;e.showFn(w,b)};f.addEventListener("blur",_),m.addEventListener("blur",_),f.addEventListener("keydown",w=>{w.key==="Enter"&&w.target.blur()}),m.addEventListener("keydown",w=>{w.key==="Enter"&&w.target.blur()}),g.addEventListener("click",()=>e.showFn(null,null))}function HC(n){const e={oil:"oilChartBatteries",water:"waterChartBatteries",gas:"gasChartBatteries"},t=document.getElementById(e[n]);if(!t)return null;const r=t.querySelectorAll(".battery-checkbox");if(r.length===0)return null;const s=new Set;return r.forEach(i=>{i.checked&&i.dataset.battery&&s.add(i.dataset.battery)}),s}function ca(n){const t={oil:{startDateId:"oilChartStartDate",endDateId:"oilChartEndDate",showFn:Hi},water:{startDateId:"waterChartStartDate",endDateId:"waterChartEndDate",showFn:ji},gas:{startDateId:"gasChartStartDate",endDateId:"gasChartEndDate",showFn:Wi}}[n];if(!t)return;const r=document.getElementById(t.startDateId),s=document.getElementById(t.endDateId),i=r&&r.value?new Date(r.value):null,o=s&&s.value?new Date(s.value+"T23:59:59"):null;t.showFn(i,o)}function jC(n){var r;const e=document.querySelectorAll(`input[name="${n}Aggregation"]`);if(!e.length)return;e.forEach(s=>{const i=s.cloneNode(!0);s.parentNode.replaceChild(i,s)});const t=((r=A.chartState[n])==null?void 0:r.aggregation)||"month";document.querySelectorAll(`input[name="${n}Aggregation"]`).forEach(s=>{s.checked=s.value===t,s.addEventListener("change",i=>{A.chartState[n].aggregation=i.target.value,ca(n)})})}function WC(n){var l;const e={oil:"oilChartBatteries",water:"waterChartBatteries",gas:"gasChartBatteries"},t=document.getElementById(e[n]);if(!t)return;if(t.innerHTML="",!FC()){t.innerHTML='<div class="explorer-empty">No data uploaded</div>';return}const r=()=>{const c={oil:"btnToggleAllOil",water:"btnToggleAllWater",gas:"btnToggleAllGas"},u=document.getElementById(c[n]);if(!u)return;const d=t.querySelectorAll(".battery-checkbox");if(!d.length)return;const f=Array.from(d).every(m=>m.checked);u.textContent=f?"Deselect All":"Select All"},s=(l=A.chartState[n])==null?void 0:l.selectedBatteries;qe.forEach(c=>{const u=A.appData[c.id];if(!u||!u._metadataLoaded)return;const d=s===null||s.has(c.id),f=A.metadataCache.wellCounts[c.id]||(u.wells?u.wells.length:0),m=document.createElement("label");m.className="explorer-battery-simple explorer-checkbox",m.innerHTML=`
            <input type="checkbox" class="battery-checkbox" data-battery="${c.id}" ${d?"checked":""}>
            <span class="checkmark"></span>
            <span class="battery-name">${c.name}</span>
            <span class="battery-well-count">${f} wells</span>
        `,t.appendChild(m),m.querySelector(".battery-checkbox").addEventListener("change",()=>{ca(n),r()})});const i={oil:"btnToggleAllOil",water:"btnToggleAllWater",gas:"btnToggleAllGas"},o=document.getElementById(i[n]);if(o){const c=o.cloneNode(!0);o.parentNode.replaceChild(c,o),c.addEventListener("click",()=>{const u=t.querySelectorAll(".battery-checkbox"),f=c.textContent.trim()==="Select All";u.forEach(m=>{m.checked=f}),c.textContent=f?"Deselect All":"Select All",ca(n)}),r()}}const Tl='<div class="loading-placeholder"><div class="loading-spinner-small"></div><span>Loading...</span></div>';let Qr=null;function qC(n){Qr=n}function zC(){GC(),KC(),XC(),QC()}function GC(){const n=document.getElementById("statDailyOil"),e=document.getElementById("statDailyWater"),t=document.getElementById("statDailyGas");if(A.isLoading){n.innerHTML='<span class="loading-text">...</span>',e.innerHTML='<span class="loading-text">...</span>',t.innerHTML='<span class="loading-text">...</span>';return}const r=LC();n.textContent=r.totalOil.toLocaleString(),e.textContent=r.totalWater.toLocaleString(),t.textContent=r.totalGas.toLocaleString()}function KC(){const n=document.getElementById("topProducersBody");if(A.isLoading){n.innerHTML='<tr><td colspan="5" class="dashboard-loading">'+Tl+"</td></tr>";return}const e=VC(10);if(e.length===0){n.innerHTML='<tr><td colspan="5" class="dashboard-empty">No production data available</td></tr>';return}n.innerHTML=e.map((t,r)=>`
        <tr data-well-id="${t.wellId}" data-sheet-id="${t.sheetId}">
            <td>${r+1}</td>
            <td class="well-name-cell">${t.wellName}</td>
            <td class="battery-name-cell">${t.batteryName}</td>
            <td>${t.oil>0?t.oil:"-"}</td>
            <td>${t.water>0?t.water:"-"}</td>
        </tr>
    `).join(""),n.querySelectorAll("tr[data-well-id]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.wellId,s=t.dataset.sheetId;Ct(s,r)})})}function XC(){const n=document.getElementById("recentTestsBody");if(A.isLoading){n.innerHTML='<tr><td colspan="6" class="dashboard-loading">'+Tl+"</td></tr>";return}const e=MC(10);if(e.length===0){n.innerHTML='<tr><td colspan="6" class="dashboard-empty">No test data available</td></tr>';return}n.innerHTML=e.map(t=>`
        <tr data-well-id="${t.wellId}" data-sheet-id="${t.sheetId}">
            <td>${sr(t.date)}</td>
            <td class="well-name-cell">${t.wellName}</td>
            <td class="battery-name-cell">${t.batteryName}</td>
            <td>${t.oil!==null?t.oil:"-"}</td>
            <td>${t.water!==null?t.water:"-"}</td>
            <td>${t.gas!==null?t.gas:"-"}</td>
        </tr>
    `).join(""),n.querySelectorAll("tr[data-well-id]").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.wellId,s=t.dataset.sheetId;Ct(s,r)})})}function QC(){const n=document.getElementById("dashboardActionList");if(A.isLoading){n.innerHTML='<li class="dashboard-loading" style="border-left-color: #6b7280;">'+Tl+"</li>";return}const e=BC(15);if(e.length===0){n.innerHTML='<li class="dashboard-empty" style="border-left-color: #6b7280; opacity: 0.7;">No action items</li>';return}n.innerHTML=e.map(t=>`
        <li data-well-id="${t.wellId}" data-sheet-id="${t.sheetId}">
            <div class="action-item-content">${t.content}</div>
            <div class="action-item-source">
                <span class="source-well">${t.wellName}</span> - ${t.batteryName}
            </div>
        </li>
    `).join(""),n.querySelectorAll("li[data-well-id]").forEach(t=>{t.style.cursor="pointer",t.addEventListener("click",()=>{const r=t.dataset.wellId,s=t.dataset.sheetId;Ct(s,r)})})}function JC(){console.log("initializeDashboardHandlers called");const n=document.getElementById("btnReuploadAll"),e=document.getElementById("btnClearCache"),t=document.getElementById("reuploadModal"),r=document.getElementById("btnCloseReuploadModal"),s=document.getElementById("reuploadModalOverlay"),i=document.getElementById("clearDatabaseModal"),o=document.getElementById("btnCloseClearDatabaseModal"),l=document.getElementById("clearDatabaseModalOverlay"),c=document.getElementById("btnClearAllData"),u=document.getElementById("btnClearExtractedOnly");n&&n.addEventListener("click",()=>{t&&t.classList.add("visible")}),r&&r.addEventListener("click",()=>{t&&t.classList.remove("visible")}),s&&s.addEventListener("click",()=>{t&&t.classList.remove("visible")}),e&&e.addEventListener("click",()=>{i&&i.classList.add("visible")}),o&&o.addEventListener("click",()=>{i&&i.classList.remove("visible")}),l&&l.addEventListener("click",()=>{i&&i.classList.remove("visible")}),c&&c.addEventListener("click",async()=>{confirm("Are you sure you want to clear ALL data? This will delete everything including your manual edits. You will need to re-upload all gauge sheets.")&&(ld("Clearing All Data"),await YC())}),u&&u.addEventListener("click",async()=>{confirm("Are you sure you want to clear extracted data? This will delete production data from uploaded sheets but keep your manual edits (action items, chemical programs, etc.). You will need to re-upload gauge sheets.")&&(ld("Clearing Extracted Data"),await ZC())});const d=document.getElementById("statCardOil"),f=document.getElementById("statCardWater"),m=document.getElementById("statCardGas");console.log("Initializing stat card handlers:",{statCardOil:d,statCardWater:f,statCardGas:m}),d&&d.addEventListener("click",()=>{console.log("Oil card clicked"),Hi();const g=document.getElementById("nav-oil-chart");g&&jt(g)}),f&&f.addEventListener("click",()=>{console.log("Water card clicked"),ji();const g=document.getElementById("nav-water-chart");g&&jt(g)}),m&&m.addEventListener("click",()=>{console.log("Gas card clicked"),Wi();const g=document.getElementById("nav-gas-chart");g&&jt(g)})}function ld(n){const e=document.getElementById("clearOptionsView"),t=document.getElementById("clearProgressView"),r=document.getElementById("clearProgressTitle"),s=document.getElementById("clearProgressSteps");e&&(e.style.display="none"),t&&(t.style.display="block"),r&&(r.textContent=n),s&&(s.innerHTML="")}function wm(n){const e=document.getElementById("clearProgressMessage"),t=document.getElementById("clearProgressSteps");if(e&&(e.textContent=n),t){const r=document.createElement("div");r.className="progress-step",r.innerHTML=`
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${n}</span>
        `,t.appendChild(r),t.scrollTop=t.scrollHeight}}async function YC(){await mm(wm),Qr&&Qr()}async function ZC(){await fm(wm),Qr&&Qr()}const ee={editMode:!1,editedCells:{},originalValues:{}};function Ws(n,e,t){if(!n||n.length===0){alert("No data available to download.");return}const r=[];r.push(e.join(",")),n.forEach(c=>{const u=e.map(d=>{const f=c[d.toLowerCase().replace(/[^a-z0-9]/g,"")]??c[d]??"",m=String(f).replace(/"/g,'""');return m.includes(",")||m.includes('"')||m.includes(`
`)?`"${m}"`:m});r.push(u.join(","))});const s=r.join(`
`),i=new Blob([s],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a"),l=URL.createObjectURL(i);o.setAttribute("href",l),o.setAttribute("download",t),o.style.visibility="hidden",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(l)}function Oo(n){return n?new Date(n).toLocaleDateString("en-US"):""}function Je(n){document.querySelectorAll(".view").forEach(r=>r.classList.remove("active"));const t={welcome:"welcomeView",gaugeSheet:"gaugeSheetView",well:"wellView",battery:"batteryView",oilChart:"oilChartView",waterChart:"waterChartView",gasChart:"gasChartView",masterChemical:"masterChemicalView"}[n];t&&document.getElementById(t).classList.add("active")}async function En(){const n=document.getElementById("operationsDashboard");n&&(n.style.display="block",await cs(),zC())}async function Em(n){const e=qe.find(i=>i.id===n);if(!e)return;A.currentSheet=n,Je("gaugeSheet"),document.getElementById("sheetName").textContent=e.name,document.getElementById("sheetBreadcrumb").textContent=`Gauge Sheet: ${e.fileName}`,document.getElementById("expectedFileName").textContent=e.fileName;const t=A.appData[n],r=document.getElementById("uploadPrompt"),s=document.getElementById("uploadStatus");if(t&&t._metadataLoaded){if(r.style.display="none",s.style.display="flex",document.getElementById("lastUploadDate").textContent=sr(t.lastUpdated),document.getElementById("rowCount").textContent=t.rawRowCount||"-",!t._wellsLoaded){const i=document.getElementById("wellsGrid");i.innerHTML='<div class="loading-placeholder"><div class="loading-spinner-small"></div><span>Loading wells...</span></div>',await us(n)}}else r.style.display="block",s.style.display="none";hb(n)}async function Tm(n){const e=qe.find(r=>r.id===n);if(!e)return;A.currentSheet=n,Je("battery"),document.getElementById("batteryName").textContent=e.name,document.getElementById("batteryBreadcrumb").textContent=`Battery: ${e.name}`;const t=A.appData[n];(!t||!t._wellsLoaded)&&(ab(),t&&t._metadataLoaded&&await us(n)),t&&t._metadataLoaded&&!t._aggregateLoaded&&await fl(n),lb(n),cb(n)}async function qi(){Je("masterChemical"),jt(document.getElementById("nav-master-chemical"));const n=document.getElementById("masterChemicalEmpty"),e=document.getElementById("masterChemicalContent"),t=document.getElementById("masterChemicalLoading");if(A.chemicalPrograms&&Object.keys(A.chemicalPrograms).length>0){n.style.display="none",e.style.display="block",gi();return}n.style.display="none",e.style.display="block",t.style.display="flex";try{await gm(),t.style.display="none",A.chemicalPrograms&&Object.keys(A.chemicalPrograms).length>0?gi():(n.style.display="flex",e.style.display="none")}catch(r){console.error("Error loading Master Chemical data:",r),t.style.display="none",n.style.display="flex",e.style.display="none"}}function gi(){const n=document.getElementById("chemicalTableBody"),e=document.getElementById("chemicalTableHeader"),t=document.getElementById("chemicalDataStats"),r=document.getElementById("chemicalSearchInput");if(!A.chemicalPrograms||Object.keys(A.chemicalPrograms).length===0)return;const s=Object.values(A.chemicalPrograms).sort((d,f)=>(d.wellName||"").localeCompare(f.wellName||""));t.innerHTML=`<span class="stat-badge">${s.length} wells</span>`;const i=new Set;s.forEach(d=>{Object.keys(d.truckTreating||{}).forEach(f=>i.add(f)),Object.keys(d.continuous||{}).forEach(f=>i.add(f))});const o=Array.from(i).sort();let l="<th>Well Name</th><th>Battery</th>";o.forEach(d=>{l+=`<th>${d}</th>`}),e.innerHTML=l;const c=d=>{if(d.length===0){n.innerHTML='<tr><td colspan="100" style="text-align: center; color: #6b7280;">No matching wells</td></tr>';return}n.innerHTML=d.map(f=>{const m=f.wellName.toLowerCase().replace(/[^a-z0-9]/g,"");let g=`<td>${f.wellName||"-"}</td><td>${f.batteryName||"-"}</td>`;return o.forEach(_=>{var Y,te;const w=(Y=f.truckTreating)==null?void 0:Y[_],b=(te=f.continuous)==null?void 0:te[_],k=w!=null?typeof w=="number"?w.toFixed(2):w:"0.00",L=b!=null?typeof b=="number"?b.toFixed(2):b:"0.00",B=w!=null||b!=null;let $;ee.editMode?$=`<div style="font-size: 0.875rem;">
                        <span class="editable-cell-inline edit-mode-enabled ${w?"":"empty-value"}" 
                              contenteditable="true" 
                              data-well-name="${m}"
                              data-chemical="${_}"
                              data-category="truckTreating"
                              data-original-value="${k}"
                              style="color: #f97316;">T: ${k}</span><br>
                        <span class="editable-cell-inline edit-mode-enabled ${b?"":"empty-value"}" 
                              contenteditable="true" 
                              data-well-name="${m}"
                              data-chemical="${_}"
                              data-category="continuous"
                              data-original-value="${L}"
                              style="color: #3b82f6;">C: ${L}</span>
                    </div>`:B?w!=null&&b!==void 0&&b!==null?$=`<div style="font-size: 0.875rem;">
                            <span style="color: #f97316;">T: ${k}</span><br>
                            <span style="color: #3b82f6;">C: ${L}</span>
                        </div>`:w!=null?$=`<span style="color: #f97316;">T: ${k}</span>`:b!=null&&($=`<span style="color: #3b82f6;">C: ${L}</span>`):$="-",g+=`<td>${$}</td>`}),`<tr>${g}</tr>`}).join(""),ee.editMode&&eb()};if(c(s),r){const d=r.cloneNode(!0);r.parentNode.replaceChild(d,r),d.addEventListener("input",f=>{const m=f.target.value.toLowerCase(),g=s.filter(_=>{const w=(_.wellName||"").toLowerCase(),b=(_.batteryName||"").toLowerCase();return w.includes(m)||b.includes(m)});c(g),t.innerHTML=`<span class="stat-badge">${g.length} wells</span>`})}const u=document.getElementById("btnExportChemicalCSV");if(u){const d=u.cloneNode(!0);u.parentNode.replaceChild(d,u),d.addEventListener("click",()=>{const f=s.map(g=>{const _={wellname:g.wellName||"",battery:g.batteryName||""};return o.forEach(w=>{var L,B;const b=(L=g.truckTreating)==null?void 0:L[w],k=(B=g.continuous)==null?void 0:B[w];b!==void 0&&k!==void 0?_[w]=`T: ${b}, C: ${k}`:b!==void 0?_[w]=`T: ${b}`:k!==void 0?_[w]=`C: ${k}`:_[w]=""}),_}),m=["Well Name","Battery",...o];Ws(f,m,"Master_Chemical_Sheet.csv")})}rb()}function eb(){document.querySelectorAll(".editable-cell-inline").forEach(e=>{e.addEventListener("focus",t=>{const r=t.target.dataset.wellName,s=t.target.dataset.chemical,i=t.target.dataset.category,o=t.target.dataset.originalValue;ee.originalValues[r]||(ee.originalValues[r]={}),ee.originalValues[r][s]||(ee.originalValues[r][s]={}),ee.originalValues[r][s][i]=o;const l=t.target.textContent,c=l.match(/[\d.]+/);if(c){const u=document.createRange(),d=window.getSelection(),f=t.target.firstChild;if(f){const m=l.indexOf(c[0]),g=m+c[0].length;u.setStart(f,m),u.setEnd(f,g),d.removeAllRanges(),d.addRange(u)}}}),e.addEventListener("blur",t=>{tb(t.target)}),e.addEventListener("keydown",t=>{if(t.key==="Enter"){t.preventDefault(),t.target.blur();const r=Array.from(document.querySelectorAll(".editable-cell-inline")),s=r.indexOf(t.target);s<r.length-1&&r[s+1].focus()}else if(t.key==="Escape"){t.preventDefault();const r=t.target.textContent.startsWith("T:")?"T: ":"C: ";t.target.textContent=r+t.target.dataset.originalValue,t.target.classList.remove("modified"),t.target.blur()}}),e.addEventListener("input",t=>{const r=t.target.textContent,s=r.startsWith("T:")?"T: ":"C: ",l=r.replace(/[TC]:\s*/,"").trim().replace(/[^0-9.]/g,"").split("."),c=l[0]+(l.length>1?"."+l.slice(1).join(""):"");if(s+c!==r){const u=window.getSelection(),f=u.getRangeAt(0).startOffset;t.target.textContent=s+c;const m=t.target.firstChild;if(m){const g=document.createRange(),_=Math.min(f,m.length);g.setStart(m,_),g.collapse(!0),u.removeAllRanges(),u.addRange(g)}}})})}function tb(n){var f,m;const e=n.dataset.wellName,t=n.dataset.chemical,r=n.dataset.category,s=n.dataset.originalValue,i=n.textContent,o=i.match(/[\d.]+/),l=o?o[0]:"",c=parseFloat(l);if(l!==""&&(isNaN(c)||c<0)){const g=i.startsWith("T:")?"T: ":"C: ";n.textContent=g+s,n.classList.remove("modified");return}const u=parseFloat(s);if(Math.abs(c-u)>.001){const g=c.toFixed(2),_=i.startsWith("T:")?"T: ":"C: ";n.textContent=_+g,ee.editedCells[e]||(ee.editedCells[e]={}),ee.editedCells[e][t]||(ee.editedCells[e][t]={}),c<.001?ee.editedCells[e][t][r]=null:ee.editedCells[e][t][r]=c,n.classList.add("modified"),n.classList.remove("empty-value"),c>.001&&(n.style.opacity="",n.style.fontStyle="")}else((m=(f=ee.editedCells[e])==null?void 0:f[t])==null?void 0:m[r])!==void 0&&(delete ee.editedCells[e][t][r],Object.keys(ee.editedCells[e][t]).length===0&&delete ee.editedCells[e][t],Object.keys(ee.editedCells[e]).length===0&&delete ee.editedCells[e]),n.classList.remove("modified");nb()}function nb(){const n=document.getElementById("chemicalChangesIndicator"),e=Object.values(ee.editedCells).reduce((t,r)=>t+Object.values(r).reduce((s,i)=>s+Object.keys(i).length,0),0);e>0?(n.textContent=`${e} change${e>1?"s":""}`,n.style.display="inline-block"):n.style.display="none"}function rb(){const n=document.getElementById("btnEditChemical"),e=document.getElementById("btnSaveChemical"),t=document.getElementById("btnCancelChemical");if(n){const r=n.cloneNode(!0);n.parentNode.replaceChild(r,n),r.addEventListener("click",sb)}if(e){const r=e.cloneNode(!0);e.parentNode.replaceChild(r,e),r.addEventListener("click",ib)}if(t){const r=t.cloneNode(!0);t.parentNode.replaceChild(r,t),r.addEventListener("click",ob)}}function sb(){ee.editMode=!0,ee.editedCells={},ee.originalValues={},document.getElementById("btnEditChemical").style.display="none",document.getElementById("btnSaveChemical").style.display="inline-flex",document.getElementById("btnCancelChemical").style.display="inline-flex";const n=document.getElementById("chemicalEditInfoBanner");if(n){n.style.display="flex";const e=document.getElementById("btnCloseEditInfo");e&&(e.onclick=()=>{n.style.display="none"})}gi()}function vm(){ee.editMode=!1,ee.editedCells={},ee.originalValues={};const n=document.getElementById("btnSaveChemical"),e=document.getElementById("btnCancelChemical");n&&(n.disabled=!1,n.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
        </svg> Save`),e&&(e.disabled=!1),document.getElementById("btnEditChemical").style.display="inline-flex",document.getElementById("btnSaveChemical").style.display="none",document.getElementById("btnCancelChemical").style.display="none",document.getElementById("chemicalChangesIndicator").style.display="none";const t=document.getElementById("chemicalEditInfoBanner");t&&(t.style.display="none"),gi()}async function ib(){var r;if(Object.keys(ee.editedCells).length===0){alert("No changes to save");return}const n=document.getElementById("btnSaveChemical"),e=document.getElementById("btnCancelChemical"),t=n.innerHTML;n.disabled=!0,e.disabled=!0,n.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spinning">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 6v6l4 2"></path>
    </svg> Saving...`;try{await ym(ee.editedCells),vm();const s=document.getElementById("chemicalChangesIndicator");s.textContent="Saved!",s.style.display="inline-block",s.style.backgroundColor="#22c55e",setTimeout(()=>{s.style.display="none",s.style.backgroundColor=""},3e3)}catch(s){console.error("Error saving chemical changes:",s);let i="Failed to save changes. ";(r=s.message)!=null&&r.includes("ERR_BLOCKED_BY_CLIENT")||s.code==="resource-exhausted"||navigator.onLine===!1?i+=`Network issue detected. Please check:

1. Your internet connection
2. Ad blockers or browser extensions may be blocking Firestore
3. Try disabling extensions temporarily`:s.code==="permission-denied"?i+="Permission denied. Please check your authentication.":i+=`Please try again.

Error: `+(s.message||"Unknown error"),alert(i),n.disabled=!1,e.disabled=!1,n.innerHTML=t}}function ob(){Object.keys(ee.editedCells).length>0&&!confirm("You have unsaved changes. Are you sure you want to cancel?")||vm()}function ab(){const n='<div class="loading-placeholder"><div class="loading-spinner-small"></div><span>Loading battery data...</span></div>',e=document.getElementById("statBatteryOil"),t=document.getElementById("statBatteryWater"),r=document.getElementById("statBatteryGas");e&&(e.innerHTML='<span class="loading-text">...</span>'),t&&(t.innerHTML='<span class="loading-text">...</span>'),r&&(r.innerHTML='<span class="loading-text">...</span>');const s=document.getElementById("batteryWellsGrid");s&&(s.innerHTML=n)}function lb(n){const e=document.getElementById("statBatteryOil"),t=document.getElementById("statBatteryWater"),r=document.getElementById("statBatteryGas"),s=A.appData[n];if(!s||!s._metadataLoaded){e&&(e.textContent="-"),t&&(t.textContent="-"),r&&(r.textContent="-");return}const i=UC(n);e&&(e.textContent=i.totalOil.toLocaleString()),t&&(t.textContent=i.totalWater.toLocaleString()),r&&(r.textContent=i.totalGas.toLocaleString())}function cb(n){const e=document.getElementById("batteryWellsGrid"),t=A.appData[n];if(!t||!t._metadataLoaded){e.innerHTML='<p class="empty-message">No data uploaded for this battery</p>';return}if(!t.wells||t.wells.length===0){e.innerHTML='<p class="empty-message">No wells found</p>';return}const r=t.wells.filter(s=>s.status!=="inactive");if(r.length===0){e.innerHTML='<p class="empty-message">No active wells</p>';return}e.innerHTML=r.map(s=>{const i=s.latestTest||s.wellTests&&s.wellTests[0],o=i&&i.oil!==void 0?Math.round(i.oil*100)/100:null,l=i&&i.gas!==void 0&&i.gas!==null?Math.round(Math.max(0,i.gas)*100)/100:null,c=i&&i.water!==void 0?Math.round(i.water*100)/100:null,u=l===null||l===0,d=u?"Latest Water":"Latest Gas",f=u?c!==null?c+" bbl":"-":l!==null?l+" mcf":"-";return`
            <div class="well-card" data-well-id="${s.id}" data-sheet-id="${n}">
                <h4>${s.name}</h4>
                <div class="well-stats">
                    <div class="well-stat">
                        <span class="well-stat-label">Latest Oil</span>
                        <span class="well-stat-value">${o!==null?o+" bbl":"-"}</span>
                    </div>
                    <div class="well-stat">
                        <span class="well-stat-label">${d}</span>
                        <span class="well-stat-value">${f}</span>
                    </div>
                </div>
            </div>
        `}).join(""),e.querySelectorAll(".well-card").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.wellId,o=s.dataset.sheetId;Ct(o,i)})})}async function Ct(n,e){const t=A.appData[n];if(!t)return;t._wellsLoaded||await us(n);let r=t.wells.find(o=>o.id===e);if(!r)return;A.currentSheet=n,A.currentWell=e,Je("well");const s=qe.find(o=>o.id===n);if(document.getElementById("wellName").textContent=r.name,document.getElementById("wellBreadcrumb").textContent=`${s.name} > ${r.name}`,(!r._detailsLoaded||r._summaryOnly)&&(ub(),await hl(n,e),r=t.wells.find(o=>o.id===e),!r))return;const i=_l(r.name,A.chemicalPrograms);yl(r),fb(r.wellTests||[]),mb(r.chemicalProgram||{},i,r.name),Im(r.failureHistory||[]),gb("wellActionList",r.actionItems||[]),yb(r.pressureReadings||[]),_b(r.pressureReadings||[]),fC(),db(r)}function ub(){const n='<div class="loading-placeholder"><div class="loading-spinner-small"></div><span>Loading well data...</span></div>',e=document.querySelector("#productionChartCard .card-body");e&&(e.innerHTML=n);const t=document.querySelector("#wellTestTable tbody");t&&(t.innerHTML='<tr><td colspan="4" class="dashboard-loading">'+n+"</td></tr>");const r=document.querySelector("#pressureTable tbody");r&&(r.innerHTML='<tr><td colspan="5" class="dashboard-loading">'+n+"</td></tr>");const s=document.querySelector("#failureTable tbody");s&&(s.innerHTML='<tr><td colspan="6" class="dashboard-loading">'+n+"</td></tr>")}function db(n){const e=n.name.replace(/[^a-zA-Z0-9]/g,"_"),t=document.getElementById("btnDownloadProduction");if(t){const i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),i.addEventListener("click",()=>{const o=n.production||[],l=document.getElementById("productionStartDate"),c=document.getElementById("productionEndDate");let u=o.filter(f=>f.date);if(l&&l.value){const f=new Date(l.value);u=u.filter(m=>new Date(m.date)>=f)}if(c&&c.value){const f=new Date(c.value);f.setHours(23,59,59,999),u=u.filter(m=>new Date(m.date)<=f)}u.sort((f,m)=>new Date(f.date)-new Date(m.date));const d=u.map(f=>({date:Oo(f.date),oilbbl:f.oil!==null&&f.oil!==void 0?Math.round(f.oil*100)/100:"",waterbbl:f.water!==null&&f.water!==void 0?Math.round(f.water*100)/100:"",gasmcf:f.gas!==null&&f.gas!==void 0?Math.round(Math.max(0,f.gas)*100)/100:""}));Ws(d,["Date","Oil (bbl)","Water (bbl)","Gas (mcf)"],`${e}_Production.csv`)})}const r=document.getElementById("btnDownloadWellTests");if(r){const i=r.cloneNode(!0);r.parentNode.replaceChild(i,r),i.addEventListener("click",()=>{const o=n.wellTests||[],l=new Date;l.setHours(23,59,59,999);const u=o.filter(d=>new Date(d.date)<=l).map(d=>({date:Oo(d.date),oilbbl:d.oil!==null?Math.round(d.oil*100)/100:"",waterbbl:d.water!==null?Math.round(d.water*100)/100:"",gasmcf:d.gas!==null?Math.round(Math.max(0,d.gas)*100)/100:""}));Ws(u,["Date","Oil (bbl)","Water (bbl)","Gas (mcf)"],`${e}_Well_Tests.csv`)})}const s=document.getElementById("btnDownloadPressure");if(s){const i=s.cloneNode(!0);s.parentNode.replaceChild(i,s),i.addEventListener("click",()=>{const l=(n.pressureReadings||[]).map(c=>({date:Oo(c.date),casingpsi:c.casingPsi||"",tubingpsi:c.tubingPsi||"",flowlinepsi:c.flowlinePsi||"",injvol:c.injVol||""}));Ws(l,["Date","Casing PSI","Tubing PSI","Flowline PSI","Inj Vol"],`${e}_Pressure_Readings.csv`)})}}function hb(n){const e=document.getElementById("wellsGrid"),t=A.appData[n];if(!t||!t.wells||t.wells.length===0){e.innerHTML='<p class="empty-message">Upload gauge sheet to see wells</p>';return}const r=t.wells.filter(s=>s.status!=="inactive");if(r.length===0){e.innerHTML='<p class="empty-message">No active wells</p>';return}e.innerHTML=r.map(s=>{const i=s.latestTest||s.wellTests&&s.wellTests[0],o=i&&i.oil!==void 0?Math.round(i.oil*100)/100:null,l=i&&i.gas!==void 0&&i.gas!==null?Math.round(Math.max(0,i.gas)*100)/100:null,c=i&&i.water!==void 0?Math.round(i.water*100)/100:null,u=l===null||l===0,d=u?"Latest Water":"Latest Gas",f=u?c!==null?c+" bbl":"-":l!==null?l+" mcf":"-";return`
            <div class="well-card" data-well-id="${s.id}" data-sheet-id="${n}">
                <h4>${s.name}</h4>
                <div class="well-stats">
                    <div class="well-stat">
                        <span class="well-stat-label">Latest Oil</span>
                        <span class="well-stat-value">${o!==null?o+" bbl":"-"}</span>
                    </div>
                    <div class="well-stat">
                        <span class="well-stat-label">${d}</span>
                        <span class="well-stat-value">${f}</span>
                    </div>
                </div>
            </div>
        `}).join(""),e.querySelectorAll(".well-card").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.wellId,o=s.dataset.sheetId;Ct(o,i)})})}function fb(n){const e=document.querySelector("#wellTestTable tbody"),t=new Date;if(t.setHours(23,59,59,999),!n||n.length===0){e.innerHTML='<tr><td colspan="4" style="text-align: center; color: #6b7280;">No test data</td></tr>';return}const r=n.filter(s=>new Date(s.date)<=t);if(r.length===0){e.innerHTML='<tr><td colspan="4" style="text-align: center; color: #6b7280;">No test data</td></tr>';return}r.sort((s,i)=>new Date(i.date)-new Date(s.date)),e.innerHTML=r.map(s=>{const i=s.gas!==null?Math.round(Math.max(0,s.gas)*100)/100:null;return`
            <tr>
                <td>${sr(s.date)}</td>
                <td>${s.oil!==null?Math.round(s.oil*100)/100:"-"}</td>
                <td>${s.water!==null?Math.round(s.water*100)/100:"-"}</td>
                <td>${i!==null?i:"-"}</td>
            </tr>
        `}).join("")}function mb(n,e,t){const r=document.querySelector("#chemicalTable").parentElement;let s="none",i=null,o=null;if(e?(s="master",i=e,o=e.lastUpdated):n&&(n.continuous||n.truckTreat)&&(s="manual",i={truckTreating:n.truckTreat||{},continuous:n.continuous||{}}),s==="none"){r.innerHTML=`
            <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                <p>No chemical program data available</p>
                <p style="font-size: 0.875rem; margin-top: 0.5rem;">Upload the Master Chemical Sheet or add data manually</p>
            </div>
        `;return}let l='<table id="chemicalTable">';if(s==="master"){const c=Object.entries(i.truckTreating||{}),u=Object.entries(i.continuous||{}),d=o?` (Updated: ${sr(o)})`:"";l+=`
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
            `,c.forEach(([f,m])=>{const g=typeof m=="number"?m.toFixed(2):m;l+=`
                    <tr>
                        <td style="padding-left: 1.5rem;">${f}</td>
                        <td style="text-align: right;">${g}</td>
                    </tr>
                `})),u.length>0&&(l+=`
                <tr>
                    <td colspan="2" style="font-weight: 600; background-color: var(--bg-tertiary); padding: 0.75rem; padding-top: ${c.length>0?"1rem":"0.75rem"};">
                        CONTINUOUS (gal/month)
                    </td>
                </tr>
            `,u.forEach(([f,m])=>{const g=typeof m=="number"?m.toFixed(2):m;l+=`
                    <tr>
                        <td style="padding-left: 1.5rem;">${f}</td>
                        <td style="text-align: right;">${g}</td>
                    </tr>
                `})),l+="</tbody>"}else if(s==="manual"){const c=i.continuous||{},u=i.truckTreating||{};l+=`
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
        `}l+="</table>",r.innerHTML=l}function Im(n){const e=document.querySelector("#failureTable tbody");if(!n||n.length===0){e.innerHTML='<tr><td colspan="3" style="text-align: center; color: #6b7280;">No failure history</td></tr>';return}e.innerHTML=n.map(t=>{var l,c;const r=((c=(l=t.failureDate)==null?void 0:l.toDate)==null?void 0:c.call(l))||new Date(t.failureDate),s=t.fileUrl||"#",i=t.fileName||"Unknown File",o=t.notes||"-";return`
            <tr>
                <td>${sr(r)}</td>
                <td>
                    <a href="${s}" 
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
        `}).join(""),e.querySelectorAll(".btn-delete-failure").forEach(t=>{t.addEventListener("click",r=>{r.stopPropagation();const s=t.dataset.failureId;pb(s)})})}async function pb(n){if(!confirm("Are you sure you want to delete this failure history entry? This will also delete the associated file."))return;const{deleteFailureHistoryEntry:e}=await Br(async()=>{const{deleteFailureHistoryEntry:i}=await Promise.resolve().then(()=>sd);return{deleteFailureHistoryEntry:i}},void 0),t=A.currentSheet,r=A.currentWell;if(await e(t,r,n)){const{loadWellDetails:i}=await Br(async()=>{const{loadWellDetails:c}=await Promise.resolve().then(()=>sd);return{loadWellDetails:c}},void 0);await i(t,r);const l=A.appData[t].wells.find(c=>c.id===r);l&&Im(l.failureHistory||[]),alert("Failure history entry deleted successfully")}else alert("Failed to delete failure history entry. Please try again.")}function gb(n,e){const t=document.getElementById(n);if(!e||e.length===0){t.innerHTML='<li style="border-left-color: #6b7280; opacity: 0.7;">No action items</li>';return}t.innerHTML=e.map(r=>`<li>${r}</li>`).join("")}function yb(n){const e=document.querySelector("#pressureTable tbody");if(!n||n.length===0){e.innerHTML='<tr><td colspan="5" style="text-align: center; color: #6b7280;">No pressure data</td></tr>';return}const t=[...n].sort((r,s)=>new Date(s.date)-new Date(r.date));e.innerHTML=t.map(r=>`
        <tr>
            <td>${sr(r.date)}</td>
            <td>${r.casingPsi||"-"}</td>
            <td>${r.tubingPsi||"-"}</td>
            <td>${r.flowlinePsi||"-"}</td>
            <td>${r.injVol||"-"}</td>
        </tr>
    `).join("")}function _b(n){const e=document.getElementById("pressureChartsCard"),t=document.getElementById("pressureChartsWrapper");if(A.pressureCharts.psi&&(A.pressureCharts.psi.destroy(),A.pressureCharts.psi=null),A.pressureCharts.injVol&&(A.pressureCharts.injVol.destroy(),A.pressureCharts.injVol=null),!n||n.length<=20){e.style.display="none";return}const r=n.some(c=>c.casingPsi!==null&&c.casingPsi!==void 0&&!isNaN(c.casingPsi)),s=n.some(c=>c.tubingPsi!==null&&c.tubingPsi!==void 0&&!isNaN(c.tubingPsi)),i=n.some(c=>c.flowlinePsi!==null&&c.flowlinePsi!==void 0&&!isNaN(c.flowlinePsi)),o=n.some(c=>c.injVol!==null&&c.injVol!==void 0&&!isNaN(c.injVol)),l=r||s||i;if(!l&&!o){e.style.display="none";return}if(e.style.display="block",t.innerHTML="",l){const c=document.createElement("div");c.className="chart-section";let u="";const d=[];r&&d.push({id:"casing",label:"Casing PSI",color:"#f97316"}),s&&d.push({id:"tubing",label:"Tubing PSI",color:"#3b82f6"}),i&&d.push({id:"flowline",label:"Flowline PSI",color:"#8b5cf6"}),d.length>1&&(u=`
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
        `,t.appendChild(c);const f=[];if(r){const _=n.filter(w=>w.date&&w.casingPsi!==null&&w.casingPsi!==void 0).map(w=>({x:new Date(w.date),y:Number(w.casingPsi)})).filter(w=>!isNaN(w.y)).sort((w,b)=>w.x-b.x);f.push({label:"Casing PSI",data:_,borderColor:"#f97316",backgroundColor:"#f97316",pointRadius:2,pointHoverRadius:5,borderWidth:2})}if(s){const _=n.filter(w=>w.date&&w.tubingPsi!==null&&w.tubingPsi!==void 0).map(w=>({x:new Date(w.date),y:Number(w.tubingPsi)})).filter(w=>!isNaN(w.y)).sort((w,b)=>w.x-b.x);f.push({label:"Tubing PSI",data:_,borderColor:"#3b82f6",backgroundColor:"#3b82f6",pointRadius:2,pointHoverRadius:5,borderWidth:2})}if(i){const _=n.filter(w=>w.date&&w.flowlinePsi!==null&&w.flowlinePsi!==void 0).map(w=>({x:new Date(w.date),y:Number(w.flowlinePsi)})).filter(w=>!isNaN(w.y)).sort((w,b)=>w.x-b.x);f.push({label:"Flowline PSI",data:_,borderColor:"#8b5cf6",backgroundColor:"#8b5cf6",pointRadius:2,pointHoverRadius:5,borderWidth:2})}const m=document.getElementById("chart-pressure-psi").getContext("2d");A.pressureCharts.psi=new Chart(m,{type:"line",data:{datasets:f},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#282c33",titleColor:"#e8e9eb",bodyColor:"#e8e9eb",callbacks:{title:_=>new Date(_[0].parsed.x).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),label:_=>`${_.dataset.label}: ${_.parsed.y} PSI`}}},scales:{x:{type:"time",time:{displayFormats:{day:"MMM-yy",week:"MMM-yy",month:"MMM-yy",quarter:"MMM-yy",year:"yyyy"}},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab",maxTicksLimit:8}},y:{beginAtZero:!0,title:{display:!0,text:"PSI",color:"#9ea3ab"},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab"}}}}}),c.querySelectorAll(".pressure-filter-checkbox").forEach((_,w)=>{_.addEventListener("change",b=>{const k=f.findIndex(L=>{const B=b.target.dataset.psiType;return B==="casing"?L.label==="Casing PSI":B==="tubing"?L.label==="Tubing PSI":B==="flowline"?L.label==="Flowline PSI":!1});if(k!==-1){const L=A.pressureCharts.psi.getDatasetMeta(k);L.hidden=!b.target.checked,A.pressureCharts.psi.update()}})})}if(o){const c=document.createElement("div");c.className="chart-section",c.innerHTML=`
            <div class="chart-label">Injection Volume</div>
            <div class="canvas-wrapper">
                <canvas id="chart-pressure-injvol"></canvas>
            </div>
        `,t.appendChild(c);const u=n.filter(f=>f.date&&f.injVol!==null&&f.injVol!==void 0).map(f=>({x:new Date(f.date),y:Number(f.injVol)})).filter(f=>!isNaN(f.y)).sort((f,m)=>f.x-m.x),d=document.getElementById("chart-pressure-injvol").getContext("2d");A.pressureCharts.injVol=new Chart(d,{type:"line",data:{datasets:[{label:"Injection Volume",data:u,borderColor:"#22c55e",backgroundColor:"#22c55e",pointRadius:2,pointHoverRadius:5,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#282c33",titleColor:"#e8e9eb",bodyColor:"#e8e9eb",callbacks:{title:f=>new Date(f[0].parsed.x).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),label:f=>`Injection Volume: ${f.parsed.y}`}}},scales:{x:{type:"time",time:{displayFormats:{day:"MMM-yy",week:"MMM-yy",month:"MMM-yy",quarter:"MMM-yy",year:"yyyy"}},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab",maxTicksLimit:8}},y:{beginAtZero:!0,title:{display:!0,text:"Volume",color:"#9ea3ab"},grid:{color:"#3a3f47"},ticks:{color:"#9ea3ab"}}}}})}}const cd=Object.freeze(Object.defineProperty({__proto__:null,showBatteryView:Tm,showGaugeSheetView:Em,showMasterChemicalView:qi,showView:Je,showWellView:Ct,updateWelcomeStats:En},Symbol.toStringTag,{value:"Module"}));function wb(){const n=document.getElementById("logoLink");n&&n.addEventListener("click",e=>{e.preventDefault(),document.querySelectorAll(".nav-item").forEach(r=>r.classList.remove("active")),A.currentSheet=null,A.currentWell=null,Je("welcome"),En();const t=document.getElementById("nav-dashboard");t&&jt(t)})}function Eb(){const n=document.getElementById("hamburgerBtn"),e=document.getElementById("sidebar");n&&e&&(n.addEventListener("click",()=>{e.classList.toggle("collapsed");const r=e.classList.contains("collapsed");localStorage.setItem("sidebarCollapsed",r?"true":"false")}),localStorage.getItem("sidebarCollapsed")==="true"&&e.classList.add("collapsed"))}function Cm(){const n=document.getElementById("navTree");n.innerHTML="";const e=ud("Home","home-section",[{id:"nav-dashboard",label:"Operations Dashboard",icon:"dashboard",action:()=>{Je("welcome"),En()}},{id:"nav-oil-chart",label:"Oil Production",icon:"oil",action:()=>Hi()},{id:"nav-water-chart",label:"Water Production",icon:"water",action:()=>ji()},{id:"nav-gas-chart",label:"Gas Production",icon:"gas",action:()=>Wi()}]);n.appendChild(e);const t=ud("Chemical Programs","chemical-section",[{id:"nav-master-chemical",label:"Master Chemical Sheet",icon:"chemical",action:()=>qi()}]);n.appendChild(t);const r=vb();n.appendChild(r)}function ud(n,e,t){const r=document.createElement("div");r.className="nav-section",r.id=e;const s=document.createElement("div");s.className="nav-section-header expanded",s.innerHTML=`
        <span class="nav-section-title">${n}</span>
        <span class="nav-section-chevron">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </span>
    `;const i=document.createElement("div");return i.className="nav-section-children visible",t.forEach(o=>{const l=Tb(o);i.appendChild(l)}),s.addEventListener("click",()=>{s.classList.toggle("expanded"),i.classList.toggle("visible")}),r.appendChild(s),r.appendChild(i),r}function Tb(n){const e=document.createElement("div");e.className="nav-section-item";const t={dashboard:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
           </svg>`,chart:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
           </svg>`},r=t[n.icon]||t.chart;e.innerHTML=`
        <div class="nav-item" id="${n.id}" data-tooltip="${n.label}">
            <span class="nav-item-icon">${r}</span>
            <span class="nav-item-label">${n.label}</span>
        </div>
    `;const s=e.querySelector(".nav-item");return s.addEventListener("click",i=>{i.stopPropagation(),jt(s),n.action()}),e}function vb(){const n=document.createElement("div");n.className="nav-section",n.id="wells-section";const e=document.createElement("div");e.className="nav-section-header expanded",e.innerHTML=`
        <span class="nav-section-title">Wells</span>
        <span class="nav-section-chevron">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </span>
    `;const t=document.createElement("div");return t.className="nav-section-children visible",qe.forEach(r=>{const s=Ib(r);t.appendChild(s)}),e.addEventListener("click",()=>{e.classList.toggle("expanded"),t.classList.toggle("visible")}),n.appendChild(e),n.appendChild(t),n}function Ib(n){const e=document.createElement("div");e.className="nav-gauge-sheet";const t=A.appData[n.id],r=t&&t._metadataLoaded,s=t&&t._wellsLoaded,i=s?t.wells.filter(g=>g.status!=="inactive"):[],o={cowden:3,bigmax:11,bigmax1h:1,southandrews:21,polaris:2,shusa:40,mwwemac:8,unit130:1,uls35h:4},l=A.metadataCache.wellCounts[n.id];let c=l!==void 0?l:i.length;c===0&&!s&&o[n.id]!==void 0&&(c=o[n.id]);let u="No data",d="not-uploaded";r&&(o[n.id]!==void 0?(u=o[n.id]+" wells",d="uploaded"):l!==void 0||s?(u=c+" wells",d="uploaded"):(u="Loading...",d="uploaded")),e.innerHTML=`
        <div class="nav-item" data-sheet-id="${n.id}">
            <span class="icon">&#9632;</span>
            <span class="nav-battery-name">${n.name}</span>
            <span class="upload-indicator ${d}">
                ${u}
            </span>
        </div>
        <div class="nav-children" id="sheet-children-${n.id}"></div>
    `;const f=e.querySelector(".nav-item"),m=e.querySelector(".nav-children");return f.addEventListener("click",async g=>{if(g.stopPropagation(),jt(f),Tm(n.id),r&&!s){const _=f.querySelector(".upload-indicator");o[n.id]===void 0&&(_.textContent="Loading..."),await us(n.id);const b=A.appData[n.id].wells.filter(k=>k.status!=="inactive");_.textContent=b.length+" wells",m.innerHTML="",b.forEach(k=>{const L=dd(k,n);m.appendChild(L)})}s&&i.length>0&&(f.classList.toggle("expanded"),m.classList.toggle("visible"))}),s&&i.length>0&&i.forEach(g=>{const _=dd(g,n);m.appendChild(_)}),e}function dd(n,e){const t=document.createElement("div");t.className="nav-well",t.innerHTML=`
        <div class="nav-item" data-well-id="${n.id}" data-sheet-id="${e.id}">
            <span class="status-dot active"></span>
            <span class="nav-well-name">${n.name}</span>
        </div>
    `;const r=t.querySelector(".nav-item");return r.addEventListener("click",s=>{s.stopPropagation(),jt(r),Ct(e.id,n.id)}),t}function jt(n){document.querySelectorAll(".nav-item").forEach(e=>e.classList.remove("active")),n.classList.add("active")}function Kn(){Cm(),En()}const Cb={id:"cowden",name:"Cowden",expectedFileName:"Cowden Gauge Sheet1.xlsx",wells:[{id:"601h",name:"Cowden 601H",oilCol:1,waterCol:2,gasCol:3},{id:"602h",name:"Cowden 602H",oilCol:7,waterCol:8,gasCol:9},{id:"angus",name:"Angus 7-18-1H",oilCol:13,waterCol:14,gasCol:15}],pressureConfig:{sheet:"Cowden",headerRowIndex:6,dateCol:0,wells:{"601h":{csg:28,tbg:29,fl:30,inj:31},"602h":{csg:33,tbg:34,fl:35,inj:40},angus:{csg:42,tbg:43,fl:44,inj:47}}},productionConfig:{sheet:"Cowden",headerRowIndex:6,dateCol:0,oilProdCol:24,waterProdCol:25,gasProdCol:26},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.wells.length>0&&this.applyPressureReadings(n,e.wells),e.batteryProduction=this.parseBatteryProduction(n),n.Sheets["Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=new Date;t.setHours(0,0,0,0);const r=this.wells.map(i=>({id:i.id,name:i.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let s=0;for(let i=4;i<e.length;i++){const o=e[i];if(!o||!o[0])continue;const l=o[0];let c=null;if(l instanceof Date)c=l.toISOString().split("T")[0];else if(typeof l=="number"){const d=XLSX.SSF.parse_date_code(l);d&&(c=`${d.y}-${String(d.m).padStart(2,"0")}-${String(d.d).padStart(2,"0")}`)}else typeof l=="string"&&(c=l.split(" ")[0]);!c||new Date(c)>t||(s++,this.wells.forEach((d,f)=>{const m=this.parseNumber(o[d.oilCol]),g=this.parseNumber(o[d.waterCol]),_=this.parseNumber(o[d.gasCol]);(m!==null||g!==null||_!==null)&&(r[f].wellTests.push({date:c,oil:m,water:g,gas:_}),r[f].production.push({date:new Date(c),oil:m,water:g,gas:_}))}))}return r.forEach(i=>{i.wellTests.sort((o,l)=>new Date(l.date)-new Date(o.date)),i.wellTests=i.wellTests.slice(0,60),i.production.sort((o,l)=>o.date-l.date)}),{wells:r,rowCount:s}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[],i=new Date;i.setHours(0,0,0,0);for(let o=e.headerRowIndex+2;o<r.length;o++){const l=r[o];if(!l)continue;const c=this.parseDate(l[e.dateCol]);if(!c||new Date(c)>i)continue;const d=this.parseNumber(l[e.oilProdCol]),f=this.parseNumber(l[e.waterProdCol]),m=e.gasProdCol!==null?this.parseNumber(l[e.gasProdCol]):null;(d!==null||f!==null||m!==null)&&s.push({date:new Date(c),oil:d,water:f,gas:m})}return s.sort((o,l)=>o.date-l.date),s},applyPressureReadings(n,e){const t=this.pressureConfig;if(!t)return;const r=n.Sheets[t.sheet];if(!r)return;const s=XLSX.utils.sheet_to_json(r,{header:1,defval:null});if(!s||s.length===0)return;const i={};e.forEach(l=>{i[l.id]=[]});const o=new Date;o.setHours(0,0,0,0);for(let l=t.headerRowIndex+1;l<s.length;l++){const c=s[l];if(!c)continue;const u=this.parseDate(c[t.dateCol]);!u||new Date(u)>o||Object.entries(t.wells).forEach(([f,m])=>{if(!i[f])return;const g=this.parseNumber(c[m.csg]),_=this.parseNumber(c[m.tbg]),w=this.parseNumber(c[m.fl]),b=this.parseNumber(c[m.inj]);(g!==null||_!==null||w!==null||b!==null)&&i[f].push({date:u,casingPsi:g,tubingPsi:_,flowlinePsi:w,injVol:b})})}e.forEach(l=>{const c=i[l.id]||[];c.sort((u,d)=>new Date(d.date)-new Date(u.date)),l.pressureReadings=c.slice(0,60)})},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[],r=new Date;r.setHours(0,0,0,0);for(let s=3;s<e.length;s++){const i=e[s];if(!i)continue;const o=i[1];if(!o)continue;let l=null;const c=i[0];if(c)if(c instanceof Date)l=c.toISOString().split("T")[0];else if(typeof c=="number"){const u=XLSX.SSF.parse_date_code(c);u&&(l=`${u.y}-${String(u.m).padStart(2,"0")}-${String(u.d).padStart(2,"0")}`)}else typeof c=="string"&&c.trim()&&(l=c.split(" ")[0]);l&&new Date(l)>r||t.push({date:l,ticketNum:String(o),tank:this.parseNumber(i[2]),ftTop:this.parseNumber(i[3]),inTop:this.parseNumber(i[4]),ftBttm:this.parseNumber(i[5]),inBttm:this.parseNumber(i[6]),calcVol:this.parseNumber(i[7]),vol:this.parseNumber(i[8]),gravity:this.parseNumber(i[9]),bsw:this.parseNumber(i[10])})}return t.sort((s,i)=>!s.date&&!i.date?0:s.date?i.date?new Date(i.date)-new Date(s.date):-1:1),t.slice(0,100)},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},bb={id:"bigmax",name:"Big Max",expectedFileName:"Big Max Gauge Sheet.xlsx",wells:[{id:"bigmax-1-1",name:"Big Max 1 #1",oilCol:1,waterCol:2,gasCol:3,status:"active"},{id:"bigmax-4-1",name:"Big Max 4 #1",oilCol:7,waterCol:8,gasCol:9,status:"active"},{id:"bigmax-5-2",name:"Big Max 5 #2",oilCol:13,waterCol:14,gasCol:15,status:"active"},{id:"bigmax-11-1",name:"Big Max 11 #1",oilCol:19,waterCol:20,gasCol:21,status:"active"},{id:"bigmax-11-2",name:"Big Max 11 #2",oilCol:25,waterCol:26,gasCol:27,status:"active"},{id:"bigmax-12-1",name:"Big Max 12 #1",oilCol:31,waterCol:32,gasCol:33,status:"active"},{id:"bigmax-12-2",name:"Big Max 12 #2",oilCol:37,waterCol:38,gasCol:39,status:"active"},{id:"bigmax-13-3",name:"Big Max 13 #3",oilCol:43,waterCol:44,gasCol:45,status:"active"},{id:"bigmax-13-5",name:"Big Max 13 #5",oilCol:49,waterCol:50,gasCol:51,status:"active"},{id:"bigmax-14-4",name:"Big Max 14 #4",oilCol:55,waterCol:56,gasCol:57,status:"active"}],productionConfig:{sheet:"Total",headerRowIndex:6,dateCol:0,oilProdCol:1,waterProdCol:3,gasProdCol:2},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.batteryProduction=this.parseBatteryProduction(n),n.Sheets["Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=new Date;t.setHours(0,0,0,0);const r=this.wells.map(i=>({id:i.id,name:i.name,status:i.status||"active",wellType:i.wellType||"production",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let s=0;for(let i=4;i<e.length;i++){const o=e[i];if(!o||!o[0])continue;const l=this.parseDate(o[0]);!l||new Date(l)>t||(s++,this.wells.forEach((u,d)=>{let f=this.parseNumber(o[u.oilCol]),m=this.parseNumber(o[u.waterCol]),g=this.parseNumber(o[u.gasCol]);(f!==null||m!==null||g!==null)&&(r[d].wellTests.push({date:l,oil:f,water:m,gas:g}),r[d].production.push({date:new Date(l),oil:f,water:m,gas:g}))}))}return r.forEach(i=>{i.wellTests.sort((o,l)=>new Date(l.date)-new Date(o.date)),i.wellTests=i.wellTests.slice(0,60),i.production.sort((o,l)=>o.date-l.date)}),{wells:r,rowCount:s}},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[],r=new Date;r.setHours(0,0,0,0);for(let s=3;s<e.length;s++){const i=e[s];if(!i||!i[1])continue;const o=this.parseDate(i[0]);o&&new Date(o)>r||t.push({date:o,ticketNum:String(i[1]||""),tank:this.parseNumber(i[2]),ftTop:this.parseNumber(i[3]),inTop:this.parseNumber(i[4]),ftBttm:this.parseNumber(i[5]),inBttm:this.parseNumber(i[6]),vol:this.parseNumber(i[8])})}return t.sort((s,i)=>(i.date||"").localeCompare(s.date||"")),t.slice(0,100)},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[],i=new Date;i.setHours(0,0,0,0);for(let o=e.headerRowIndex+2;o<r.length;o++){const l=r[o];if(!l)continue;const c=this.parseDate(l[e.dateCol]);if(!c||new Date(c)>i)continue;const d=this.parseNumber(l[e.oilProdCol]),f=this.parseNumber(l[e.waterProdCol]),m=e.gasProdCol!==null?this.parseNumber(l[e.gasProdCol]):null;(d!==null||f!==null||m!==null)&&s.push({date:new Date(c),oil:d,water:f,gas:m})}return s.sort((o,l)=>o.date-l.date),s},parseDate(n){if(!n)return null;if(n instanceof Date){const e=n.getFullYear(),t=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`${e}-${t}-${r}`}if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},Sb={id:"bigmax1h",name:"Big Max 1H",expectedFileName:"Big Max 1H Gauge Sheet.xlsx",wells:[{id:"bigmax-1-1h",name:"Big Max 1-1H",oilCol:1,waterCol:2,gasCol:3}],productionConfig:{sheet:"Big Max 1H",headerRowIndex:6,dateCol:0,oilProdCol:21,waterProdCol:22,gasProdCol:23},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.batteryProduction=this.parseBatteryProduction(n),n.Sheets["Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=new Date;t.setHours(0,0,0,0);const r=this.wells.map(i=>({id:i.id,name:i.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let s=0;for(let i=4;i<e.length;i++){const o=e[i];if(!o||!o[0])continue;const l=this.parseDate(o[0]);!l||new Date(l)>t||(s++,this.wells.forEach((u,d)=>{const f=this.parseNumber(o[u.oilCol]),m=this.parseNumber(o[u.waterCol]),g=this.parseNumber(o[u.gasCol]);(f!==null||m!==null||g!==null)&&(r[d].wellTests.push({date:l,oil:f,water:m,gas:g}),r[d].production.push({date:new Date(l),oil:f,water:m,gas:g}))}))}return r.forEach(i=>{i.wellTests.sort((o,l)=>new Date(l.date)-new Date(o.date)),i.wellTests=i.wellTests.slice(0,60),i.production.sort((o,l)=>o.date-l.date)}),{wells:r,rowCount:s}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[],i=new Date;i.setHours(0,0,0,0);for(let o=e.headerRowIndex+2;o<r.length;o++){const l=r[o];if(!l)continue;const c=this.parseDate(l[e.dateCol]);if(!c||new Date(c)>i)continue;const d=this.parseNumber(l[e.oilProdCol]),f=this.parseNumber(l[e.waterProdCol]),m=e.gasProdCol!==null?this.parseNumber(l[e.gasProdCol]):null;(d!==null||f!==null||m!==null)&&s.push({date:new Date(c),oil:d,water:f,gas:m})}return s.sort((o,l)=>o.date-l.date),s},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[],r=new Date;r.setHours(0,0,0,0);for(let s=3;s<e.length;s++){const i=e[s];if(!i||!i[1])continue;const o=this.parseDate(i[0]);o&&new Date(o)>r||t.push({date:o,ticketNum:String(i[1]||""),tank:this.parseNumber(i[2]),ftTop:this.parseNumber(i[3]),inTop:this.parseNumber(i[4]),ftBttm:this.parseNumber(i[5]),inBttm:this.parseNumber(i[6]),vol:this.parseNumber(i[8])})}return t.sort((s,i)=>(i.date||"").localeCompare(s.date||"")),t.slice(0,100)},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},Ab={id:"southandrews",name:"South Andrews",expectedFileName:"South Andrews Gauge Sheet.xlsm",wellsPg1:[{id:"uls-1-30-6h",name:"1-30-6H",oilCol:1,waterCol:2,gasCol:3},{id:"uls-1-30-8h",name:"1-30-8H",oilCol:7,waterCol:8,gasCol:9},{id:"uls-1-31-2h",name:"1-31-2H",oilCol:13,waterCol:14,gasCol:15},{id:"uls-1-36-1h",name:"1-36-1H",oilCol:19,waterCol:20,gasCol:21},{id:"uls-1-36-2h",name:"1-36-2H",oilCol:25,waterCol:26,gasCol:27},{id:"uls-1-36-3h",name:"1-36-3H",oilCol:31,waterCol:32,gasCol:33},{id:"uls-1-36-4h",name:"1-36-4H",oilCol:37,waterCol:38,gasCol:39},{id:"uls-1-36-5h",name:"1-36-5H",oilCol:43,waterCol:44,gasCol:45},{id:"uls-1-36-6h",name:"1-36-6H",oilCol:49,waterCol:50,gasCol:51},{id:"uls-1-37-1h",name:"1-37-1H",oilCol:55,waterCol:56,gasCol:57},{id:"uls-1-37-3h",name:"1-37-3H",oilCol:61,waterCol:62,gasCol:63},{id:"uls-1-37-4h",name:"1-37-4H",oilCol:67,waterCol:68,gasCol:69},{id:"uls-1-37-6h",name:"1-37-6H",oilCol:73,waterCol:74,gasCol:75}],wellsPg2:[{id:"cobra-5h",name:"Cobra 5H",oilCol:1,waterCol:2,gasCol:3,status:"active"},{id:"cobra-3012",name:"Cobra 3012",oilCol:7,waterCol:8,gasCol:9,status:"active"},{id:"cobra-3033",name:"Cobra 3033",oilCol:13,waterCol:14,gasCol:15,status:"active"},{id:"fn-3731",name:"FN 3731",oilCol:19,waterCol:20,gasCol:21,status:"active"},{id:"pinnacle-1",name:"Pinnacle #1",oilCol:25,waterCol:26,gasCol:27,status:"active"},{id:"pinnacle-2h",name:"Pinnacle 2H",oilCol:31,waterCol:32,gasCol:33,status:"active"},{id:"sawgrass-2h",name:"Sawgrass 2H",oilCol:37,waterCol:38,gasCol:39,status:"inactive"},{id:"sawgrass-5h",name:"Sawgrass 5H",oilCol:43,waterCol:44,gasCol:45,status:"active"}],pressureConfig:[{sheet:"36-4H",headerRowIndex:8,dateCol:0,wells:{"uls-1-36-1h":{csg:61,tbg:62,fl:63,inj:64},"uls-1-36-2h":{csg:68,tbg:69,fl:70,inj:71},"uls-1-36-3h":{csg:73,tbg:74,fl:75,inj:76},"uls-1-36-4h":{csg:78,tbg:79,fl:80,inj:81},"uls-1-36-5h":{csg:86,tbg:87,fl:88,inj:89},"uls-1-36-6h":{csg:91,tbg:92,fl:93,inj:94},"uls-1-37-1h":{csg:96,tbg:97,fl:98,inj:99},"uls-1-37-3h":{csg:101,tbg:102,fl:103,inj:104}}},{sheet:"37-6H",headerRowIndex:8,dateCol:0,wells:{"uls-1-31-2h":{csg:34,tbg:35,fl:36,inj:37},"uls-1-37-4h":{csg:39,tbg:40,fl:41,inj:42},"uls-1-37-6h":{csg:44,tbg:45,fl:46,inj:47},"uls-1-30-6h":{csg:49,tbg:50,fl:51,inj:52},"uls-1-30-8h":{csg:54,tbg:55,fl:56,inj:57}}}],productionConfig:[{sheet:"36-4H",headerRowIndex:8,dateCol:0,oilProdCol:56,waterProdCol:57,gasProdCol:58},{sheet:"37-6H",headerRowIndex:8,dateCol:0,oilProdCol:29,waterProdCol:30,gasProdCol:31}],parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test pg1"]){const t=this.parseWellTestSheet(n.Sheets["Well Test pg1"],this.wellsPg1);e.wells.push(...t.wells),e.rawRowCount=t.rowCount}if(n.Sheets["Well Test pg2"]){const t=this.parseWellTestSheet(n.Sheets["Well Test pg2"],this.wellsPg2);e.wells.push(...t.wells)}return e.wells.length>0&&this.applyPressureReadings(n,e.wells),e.batteryProduction=this.parseBatteryProduction(n),["36-4H Tickets","37-6H Tickets","36 6H Tickets"].forEach(t=>{if(n.Sheets[t]){const r=this.parseRunTicketsSheet(n.Sheets[t]);e.runTickets.push(...r)}}),e.runTickets.sort((t,r)=>(r.date||"").localeCompare(t.date||"")),e.runTickets=e.runTickets.slice(0,100),e},parseWellTestSheet(n,e){const t=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),r=new Date;r.setHours(0,0,0,0);const s=e.map(o=>({id:o.id,name:o.name,status:o.status||"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let i=0;for(let o=4;o<t.length;o++){const l=t[o];if(!l||!l[0])continue;const c=this.parseDate(l[0]);!c||new Date(c)>r||(i++,e.forEach((d,f)=>{const m=this.parseNumber(l[d.oilCol]),g=this.parseNumber(l[d.waterCol]),_=this.parseNumber(l[d.gasCol]);(m!==null||g!==null||_!==null)&&(s[f].wellTests.push({date:c,oil:m,water:g,gas:_}),s[f].production.push({date:new Date(c),oil:m,water:g,gas:_}))}))}return s.forEach(o=>{o.wellTests.sort((l,c)=>new Date(c.date)-new Date(l.date)),o.wellTests=o.wellTests.slice(0,60),o.production.sort((l,c)=>l.date-c.date)}),{wells:s,rowCount:i}},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[],r=new Date;r.setHours(0,0,0,0);for(let s=3;s<e.length;s++){const i=e[s];if(!i||!i[1])continue;const o=this.parseDate(i[0]);o&&new Date(o)>r||t.push({date:o,ticketNum:String(i[1]||""),tank:this.parseNumber(i[2]),ftTop:this.parseNumber(i[3]),inTop:this.parseNumber(i[4]),ftBttm:this.parseNumber(i[5]),inBttm:this.parseNumber(i[6]),vol:this.parseNumber(i[8])})}return t},parseBatteryProduction(n){const e=new Map,t=new Date;t.setHours(0,0,0,0),this.productionConfig.forEach(s=>{const i=n.Sheets[s.sheet];if(!i)return;const o=XLSX.utils.sheet_to_json(i,{header:1,defval:null});if(!(!o||o.length===0))for(let l=s.headerRowIndex+2;l<o.length;l++){const c=o[l];if(!c)continue;const u=this.parseDate(c[s.dateCol]);if(!u||new Date(u)>t)continue;const f=this.parseNumber(c[s.oilProdCol]),m=this.parseNumber(c[s.waterProdCol]),g=s.gasProdCol!==null?this.parseNumber(c[s.gasProdCol]):null;if(f!==null||m!==null||g!==null){const _=e.get(u);_?(_.oil=(_.oil||0)+(f||0),_.water=(_.water||0)+(m||0),_.gas=(_.gas||0)+(g||0)):e.set(u,{date:new Date(u),oil:f||0,water:m||0,gas:g||0})}}});const r=Array.from(e.values());return r.sort((s,i)=>s.date-i.date),r},applyPressureReadings(n,e){const t={};e.forEach(i=>{t[i.id]=i,i.pressureReadings=[]});const r={};Object.keys(t).forEach(i=>{r[i]=[]});const s=new Date;s.setHours(0,0,0,0),this.pressureConfig.forEach(i=>{const o=n.Sheets[i.sheet];if(!o)return;const l=XLSX.utils.sheet_to_json(o,{header:1,defval:null});if(!(!l||l.length===0))for(let c=i.headerRowIndex+1;c<l.length;c++){const u=l[c];if(!u)continue;const d=this.parseDate(u[i.dateCol]);!d||new Date(d)>s||Object.entries(i.wells).forEach(([m,g])=>{if(!r[m])return;const _=this.parseNumber(u[g.csg]),w=this.parseNumber(u[g.tbg]),b=this.parseNumber(u[g.fl]),k=this.parseNumber(u[g.inj]);(_!==null||w!==null||b!==null||k!==null)&&r[m].push({date:d,casingPsi:_,tubingPsi:w,flowlinePsi:b,injVol:k})})}}),e.forEach(i=>{const o=r[i.id]||[];o.sort((l,c)=>new Date(c.date)-new Date(l.date)),i.pressureReadings=o.slice(0,60)})},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},Rb={id:"polaris",name:"Polaris",expectedFileName:"Polaris Gauge Sheet.xlsx",wells:[{id:"polaris-1",name:"Polaris #1",oilCol:1,waterCol:2,gasCol:null,status:"active"},{id:"polaris-2",name:"Polaris #2",oilCol:5,waterCol:6,gasCol:null,status:"inactive"}],productionConfig:{sheet:"Polaris 1",headerRowIndex:3,dateCol:0,oilProdCol:16,waterProdCol:17,gasProdCol:14,gasMeterType:"cumulative"},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.batteryProduction=this.parseBatteryProduction(n),n.Sheets["Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=new Date;t.setHours(0,0,0,0);const r=this.wells.map(i=>({id:i.id,name:i.name,status:i.status||"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let s=0;for(let i=4;i<e.length;i++){const o=e[i];if(!o||!o[0])continue;const l=this.parseDate(o[0]);!l||new Date(l)>t||(s++,this.wells.forEach((u,d)=>{const f=this.parseNumber(o[u.oilCol]),m=this.parseNumber(o[u.waterCol]),g=this.parseNumber(o[u.gasCol]);(f!==null||m!==null||g!==null)&&(r[d].wellTests.push({date:l,oil:f,water:m,gas:g}),r[d].production.push({date:new Date(l),oil:f,water:m,gas:g}))}))}return r.forEach(i=>{i.wellTests.sort((o,l)=>new Date(l.date)-new Date(o.date)),i.wellTests=i.wellTests.slice(0,60),i.production.sort((o,l)=>o.date-l.date)}),{wells:r,rowCount:s}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[],i=new Date;i.setHours(0,0,0,0);const o=[];for(let l=e.headerRowIndex+2;l<r.length;l++){const c=r[l];if(!c)continue;const u=this.parseDate(c[e.dateCol]);if(!u||new Date(u)>i)continue;const f=this.parseNumber(c[e.oilProdCol]),m=this.parseNumber(c[e.waterProdCol]),g=e.gasProdCol!==null?this.parseNumber(c[e.gasProdCol]):null;o.push({date:new Date(u),oil:f,water:m,gasMeter:g})}o.sort((l,c)=>l.date-c.date);for(let l=0;l<o.length;l++){const c=o[l];let u=null;if(e.gasMeterType==="cumulative"&&c.gasMeter!==null&&l>0){const d=o[l-1];if(d.gasMeter!==null){const f=c.gasMeter-d.gasMeter;f>0&&(u=f)}}else e.gasMeterType!=="cumulative"&&(u=c.gasMeter);(c.oil!==null||c.water!==null||u!==null)&&s.push({date:c.date,oil:c.oil,water:c.water,gas:u})}return s},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[],r=new Date;r.setHours(0,0,0,0);for(let s=3;s<e.length;s++){const i=e[s];if(!i||!i[1])continue;const o=this.parseDate(i[0]);o&&new Date(o)>r||t.push({date:o,ticketNum:String(i[1]||""),tank:this.parseNumber(i[2]),ftTop:this.parseNumber(i[3]),inTop:this.parseNumber(i[4]),ftBttm:this.parseNumber(i[5]),inBttm:this.parseNumber(i[6]),vol:this.parseNumber(i[8])})}return t.sort((s,i)=>(i.date||"").localeCompare(s.date||"")),t.slice(0,100)},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},Pb={id:"shusa",name:"Shusa",expectedFileName:"Shusa Gauge Sheet.xlsx",wells20RB:[{id:"shusa-20-1",name:"Shusa 20 #1",oilCol:1,waterCol:2,gasCol:null},{id:"shusa-20-2",name:"Shusa 20 #2",oilCol:5,waterCol:6,gasCol:null},{id:"shusa-20-3",name:"Shusa 20 #3",oilCol:9,waterCol:10,gasCol:null},{id:"shusa-20-4",name:"Shusa 20 #4",oilCol:13,waterCol:14,gasCol:null},{id:"shusa-20-5",name:"Shusa 20 #5",oilCol:17,waterCol:18,gasCol:null},{id:"rosebud-20-1",name:"Rosebud 20 #1",oilCol:21,waterCol:22,gasCol:null},{id:"rosebud-20-3",name:"Rosebud 20 #3",oilCol:25,waterCol:26,gasCol:null},{id:"rosebud-20-4",name:"Rosebud 20 #4",oilCol:29,waterCol:30,gasCol:null},{id:"rosebud-yates-1",name:"Rosebud-Yates #1",oilCol:33,waterCol:34,gasCol:35},{id:"link-2",name:"Link #2",oilCol:39,waterCol:40,gasCol:null},{id:"link-3",name:"Link #3",oilCol:43,waterCol:44,gasCol:null},{id:"link-4",name:"Link #4",oilCol:47,waterCol:48,gasCol:null},{id:"link-5",name:"Link #5",oilCol:51,waterCol:52,gasCol:null},{id:"link-6",name:"Link #6",oilCol:55,waterCol:56,gasCol:null}],productionConfig:{sheet:"Total",headerRowIndex:2,dateCol:0,oilProdCol:2,waterProdCol:3,gasProdCol:null},wells1415:[{id:"shusa-14-1",name:"Shusa 14 #1",oilCol:4,waterCol:5,gasCol:null},{id:"shusa-14-2",name:"Shusa 14 #2",oilCol:8,waterCol:9,gasCol:null},{id:"shusa-14-3",name:"Shusa 14 #3",oilCol:12,waterCol:13,gasCol:null},{id:"shusa-14-4",name:"Shusa 14 #4",oilCol:16,waterCol:17,gasCol:null},{id:"shusa-14-5",name:"Shusa 14 #5",oilCol:20,waterCol:21,gasCol:null},{id:"shusa-14-6",name:"Shusa 14 #6",oilCol:24,waterCol:25,gasCol:null},{id:"shusa-14-7",name:"Shusa 14 #7",oilCol:28,waterCol:29,gasCol:null},{id:"shusa-14-8",name:"Shusa 14 #8",oilCol:32,waterCol:33,gasCol:null},{id:"shusa-14-9",name:"Shusa 14 #9",oilCol:36,waterCol:37,gasCol:null},{id:"shusa-14-10",name:"Shusa 14 #10",oilCol:40,waterCol:41,gasCol:null},{id:"shusa-14-12",name:"Shusa 14 #12",oilCol:44,waterCol:45,gasCol:null},{id:"shusa-15-1",name:"Shusa 15 #1",oilCol:48,waterCol:49,gasCol:null},{id:"shusa-15-2",name:"Shusa 15 #2",oilCol:52,waterCol:53,gasCol:null},{id:"shusa-15-3",name:"Shusa 15 #3",oilCol:56,waterCol:57,gasCol:null},{id:"shusa-15-4",name:"Shusa 15 #4",oilCol:60,waterCol:61,gasCol:null},{id:"shusa-15-6",name:"Shusa 15 #6",oilCol:64,waterCol:65,gasCol:null},{id:"shusa-15-7",name:"Shusa 15 #7",oilCol:68,waterCol:69,gasCol:null},{id:"shusa-15-8",name:"Shusa 15 #8",oilCol:72,waterCol:73,gasCol:null},{id:"shusa-15-9",name:"Shusa 15 #9",oilCol:76,waterCol:77,gasCol:null},{id:"shusa-15-10",name:"Shusa 15 #10",oilCol:80,waterCol:81,gasCol:null},{id:"shusa-15-11",name:"Shusa 15 #11",oilCol:84,waterCol:85,gasCol:null},{id:"shusa-15-12",name:"Shusa 15 #12",oilCol:88,waterCol:89,gasCol:null},{id:"shusa-15-13",name:"Shusa 15 #13",oilCol:92,waterCol:93,gasCol:null},{id:"shusa-15-14",name:"Shusa 15 #14",oilCol:96,waterCol:97,gasCol:null},{id:"shusa-15-15",name:"Shusa 15 #15",oilCol:100,waterCol:101,gasCol:null},{id:"shusa-15-16",name:"Shusa 15 #16",oilCol:104,waterCol:105,gasCol:null}],parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test 20 RB Link"]){const t=this.parseWellTestSheet(n.Sheets["Well Test 20 RB Link"],this.wells20RB);e.wells.push(...t.wells),e.rawRowCount=t.rowCount}if(n.Sheets["Well Test 14 15"]){const t=this.parseWellTestSheet(n.Sheets["Well Test 14 15"],this.wells1415);e.wells.push(...t.wells)}return e.batteryProduction=this.parseBatteryProduction(n),["14-15 Run Tickets","20-RB Run Tickets","Link Run Tickets","Yates Run Tickets"].forEach(t=>{if(n.Sheets[t]){const r=this.parseRunTicketsSheet(n.Sheets[t]);e.runTickets.push(...r)}}),e.runTickets.sort((t,r)=>(r.date||"").localeCompare(t.date||"")),e.runTickets=e.runTickets.slice(0,100),e},parseWellTestSheet(n,e){const t=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),r=new Date;r.setHours(0,0,0,0);const s=e.map(o=>({id:o.id,name:o.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let i=0;for(let o=4;o<t.length;o++){const l=t[o];if(!l||!l[0])continue;const c=this.parseDate(l[0]);!c||new Date(c)>r||(i++,e.forEach((d,f)=>{const m=this.parseNumber(l[d.oilCol]),g=this.parseNumber(l[d.waterCol]),_=d.gasCol!==null?this.parseNumber(l[d.gasCol]):null;(m!==null||g!==null||_!==null)&&(s[f].wellTests.push({date:c,oil:m,water:g,gas:_}),s[f].production.push({date:new Date(c),oil:m,water:g,gas:_}))}))}return s.forEach(o=>{o.wellTests.sort((l,c)=>new Date(c.date)-new Date(l.date)),o.wellTests=o.wellTests.slice(0,60),o.production.sort((l,c)=>l.date-c.date)}),{wells:s,rowCount:i}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[],i=new Date;i.setHours(0,0,0,0);for(let o=e.headerRowIndex+2;o<r.length;o++){const l=r[o];if(!l)continue;const c=this.parseDate(l[e.dateCol]);if(!c||new Date(c)>i)continue;const d=this.parseNumber(l[e.oilProdCol]),f=this.parseNumber(l[e.waterProdCol]),m=e.gasProdCol!==null?this.parseNumber(l[e.gasProdCol]):null;(d!==null||f!==null||m!==null)&&s.push({date:new Date(c),oil:d,water:f,gas:m})}return s.sort((o,l)=>o.date-l.date),s},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[],r=new Date;r.setHours(0,0,0,0);for(let s=3;s<e.length;s++){const i=e[s];if(!i||!i[1])continue;const o=this.parseDate(i[0]);o&&new Date(o)>r||t.push({date:o,ticketNum:String(i[1]||""),tank:this.parseNumber(i[2]),ftTop:this.parseNumber(i[3]),inTop:this.parseNumber(i[4]),ftBttm:this.parseNumber(i[5]),inBttm:this.parseNumber(i[6]),vol:this.parseNumber(i[8])})}return t},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},Db={id:"mwwemac",name:"MW-Wemac-Sabrina-Berkley",expectedFileName:"Mw-Wemac-Sabrina-Berkley.xlsx",wells:[{id:"berkley-1",name:"Berkley #1",oilCol:1,waterCol:2,gasCol:3,status:"active"},{id:"berkley-4",name:"Berkley #4",oilCol:7,waterCol:8,gasCol:9,status:"inactive"},{id:"berkley-5",name:"Berkley #5",oilCol:13,waterCol:14,gasCol:15,status:"active"},{id:"berkley-6",name:"Berkley #6",oilCol:19,waterCol:20,gasCol:21,status:"active"},{id:"sabrina-5",name:"Sabrina #5",oilCol:25,waterCol:26,gasCol:27,status:"inactive"},{id:"sabrina-7",name:"Sabrina #7",oilCol:31,waterCol:32,gasCol:33,status:"inactive"},{id:"sabrina-3",name:"Sabrina #3",oilCol:37,waterCol:38,gasCol:39,status:"inactive"},{id:"sabrina-12",name:"Sabrina #12",oilCol:43,waterCol:44,gasCol:45,status:"inactive"}],productionConfig:{sheet:"Berkley",headerRowIndex:3,dateCol:0,oilProdCol:25,waterProdCol:26,gasProdCol:27},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets.Well_Test){const t=this.parseWellTestSheet(n.Sheets.Well_Test);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.batteryProduction=this.parseBatteryProduction(n),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=new Date;t.setHours(0,0,0,0);const r=this.wells.map(i=>({id:i.id,name:i.name,status:i.status||"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let s=0;for(let i=4;i<e.length;i++){const o=e[i];if(!o||!o[0])continue;const l=this.parseDate(o[0]);!l||new Date(l)>t||(s++,this.wells.forEach((u,d)=>{const f=this.parseNumber(o[u.oilCol]),m=this.parseNumber(o[u.waterCol]),g=this.parseNumber(o[u.gasCol]);(f!==null||m!==null||g!==null)&&(r[d].wellTests.push({date:l,oil:f,water:m,gas:g}),r[d].production.push({date:new Date(l),oil:f,water:m,gas:g}))}))}return r.forEach(i=>{i.wellTests.sort((o,l)=>new Date(l.date)-new Date(o.date)),i.wellTests=i.wellTests.slice(0,60),i.production.sort((o,l)=>o.date-l.date)}),{wells:r,rowCount:s}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[],i=new Date;i.setHours(0,0,0,0);for(let o=e.headerRowIndex+2;o<r.length;o++){const l=r[o];if(!l)continue;const c=this.parseDate(l[e.dateCol]);if(!c||new Date(c)>i)continue;const d=this.parseNumber(l[e.oilProdCol]),f=this.parseNumber(l[e.waterProdCol]),m=e.gasProdCol!==null?this.parseNumber(l[e.gasProdCol]):null;(d!==null||f!==null||m!==null)&&s.push({date:new Date(c),oil:d,water:f,gas:m})}return s.sort((o,l)=>o.date-l.date),s},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},kb={id:"unit130",name:"1-30 Unit 1H",expectedFileName:"1-30 Unit 1H Gauge Sheet.xlsx",wells:[{id:"uls-1-30-1h",name:"ULS 1-30-1H",oilCol:1,waterCol:2,gasCol:3}],pressureConfig:{sheet:"1-30-1H Gauge Sheet",headerRowIndex:5,dateCol:0,wells:{"uls-1-30-1h":{csg:37,tbg:38,fl:null,inj:39}}},productionConfig:{sheet:"1-30-1H Gauge Sheet",headerRowIndex:5,dateCol:0,oilProdCol:30,waterProdCol:31,gasProdCol:32},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.wells.length>0&&this.applyPressureReadings(n,e.wells),e.batteryProduction=this.parseBatteryProduction(n),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=this.wells.map(s=>({id:s.id,name:s.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let r=0;for(let s=4;s<e.length;s++){const i=e[s];if(!i||!i[0])continue;const o=this.parseDate(i[0]);o&&(r++,this.wells.forEach((l,c)=>{const u=this.parseNumber(i[l.oilCol]),d=this.parseNumber(i[l.waterCol]),f=this.parseNumber(i[l.gasCol]);(u!==null||d!==null||f!==null)&&(t[c].wellTests.push({date:o,oil:u,water:d,gas:f}),t[c].production.push({date:new Date(o),oil:u,water:d,gas:f}))}))}return t.forEach(s=>{s.wellTests.sort((i,o)=>new Date(o.date)-new Date(i.date)),s.wellTests=s.wellTests.slice(0,60),s.production.sort((i,o)=>i.date-o.date)}),{wells:t,rowCount:r}},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[];for(let i=e.headerRowIndex+2;i<r.length;i++){const o=r[i];if(!o)continue;const l=this.parseDate(o[e.dateCol]);if(!l)continue;const c=this.parseNumber(o[e.oilProdCol]),u=this.parseNumber(o[e.waterProdCol]),d=e.gasProdCol!==null?this.parseNumber(o[e.gasProdCol]):null;(c!==null||u!==null||d!==null)&&s.push({date:new Date(l),oil:c,water:u,gas:d})}return s.sort((i,o)=>i.date-o.date),s},applyPressureReadings(n,e){const t=this.pressureConfig;if(!t)return;const r=n.Sheets[t.sheet];if(!r)return;const s=XLSX.utils.sheet_to_json(r,{header:1,defval:null});if(!s||s.length===0)return;const i={};e.forEach(o=>{i[o.id]=[]});for(let o=t.headerRowIndex+1;o<s.length;o++){const l=s[o];if(!l)continue;const c=this.parseDate(l[t.dateCol]);c&&Object.entries(t.wells).forEach(([u,d])=>{if(!i[u])return;const f=this.parseNumber(l[d.csg]),m=this.parseNumber(l[d.tbg]),g=d.fl===null?null:this.parseNumber(l[d.fl]),_=this.parseNumber(l[d.inj]);(f!==null||m!==null||g!==null||_!==null)&&i[u].push({date:c,casingPsi:f,tubingPsi:m,flowlinePsi:g,injVol:_})})}e.forEach(o=>{const l=i[o.id]||[];l.sort((c,u)=>new Date(u.date)-new Date(c.date)),o.pressureReadings=l.slice(0,60)})},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},Nb={id:"uls35h",name:"ULS 3-5H",expectedFileName:"ULS 3-5H Gauge Sheet.xlsx",wells:[{id:"uls-1-3-1h",name:"ULS 1-3-1H",oilCol:1,waterCol:2,gasCol:3},{id:"uls-1-3-3h",name:"ULS 1-3-3H",oilCol:7,waterCol:8,gasCol:9},{id:"uls-1-3-5h",name:"ULS 1-3-5H",oilCol:13,waterCol:14,gasCol:15},{id:"uls-1-3-7h",name:"ULS 1-3-7H",oilCol:19,waterCol:20,gasCol:21}],pressureConfig:{sheet:"University 3-5H",headerRowIndex:3,dateCol:0,wells:{"uls-1-3-1h":{csg:34,tbg:35,fl:36,inj:37},"uls-1-3-3h":{csg:39,tbg:40,fl:41,inj:42},"uls-1-3-5h":{csg:46,tbg:47,fl:48,inj:49},"uls-1-3-7h":{csg:51,tbg:52,fl:53,inj:54}}},productionConfig:{sheet:"University 3-5H",headerRowIndex:3,dateCol:0,oilProdCol:30,waterProdCol:31,gasProdCol:32},parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),wells:[],runTickets:[],rawRowCount:0,batteryProduction:[]};if(n.Sheets["Well Test"]){const t=this.parseWellTestSheet(n.Sheets["Well Test"]);e.wells=t.wells,e.rawRowCount=t.rowCount}return e.wells.length>0&&this.applyPressureReadings(n,e.wells),e.batteryProduction=this.parseBatteryProduction(n),n.Sheets["3-5H Run Tickets"]&&(e.runTickets=this.parseRunTicketsSheet(n.Sheets["3-5H Run Tickets"])),e},parseWellTestSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=new Date;t.setHours(0,0,0,0);const r=this.wells.map(i=>({id:i.id,name:i.name,status:"active",wellTests:[],production:[],chemicalProgram:{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},failureHistory:[],pressureReadings:[],actionItems:[]}));let s=0;for(let i=4;i<e.length;i++){const o=e[i];if(!o||!o[0])continue;const l=this.parseDate(o[0]);!l||new Date(l)>t||(s++,this.wells.forEach((u,d)=>{const f=this.parseNumber(o[u.oilCol]),m=this.parseNumber(o[u.waterCol]),g=this.parseNumber(o[u.gasCol]);(f!==null||m!==null||g!==null)&&(r[d].wellTests.push({date:l,oil:f,water:m,gas:g}),r[d].production.push({date:new Date(l),oil:f,water:m,gas:g}))}))}return r.forEach(i=>{i.wellTests.sort((o,l)=>new Date(l.date)-new Date(o.date)),i.wellTests=i.wellTests.slice(0,60),i.production.sort((o,l)=>o.date-l.date)}),{wells:r,rowCount:s}},parseRunTicketsSheet(n){const e=XLSX.utils.sheet_to_json(n,{header:1,defval:null}),t=[],r=new Date;r.setHours(0,0,0,0);for(let s=3;s<e.length;s++){const i=e[s];if(!i||!i[1])continue;const o=this.parseDate(i[0]);o&&new Date(o)>r||t.push({date:o,ticketNum:String(i[1]||""),tank:this.parseNumber(i[2]),ftTop:this.parseNumber(i[3]),inTop:this.parseNumber(i[4]),ftBttm:this.parseNumber(i[5]),inBttm:this.parseNumber(i[6]),vol:this.parseNumber(i[8])})}return t.sort((s,i)=>(i.date||"").localeCompare(s.date||"")),t.slice(0,100)},parseBatteryProduction(n){const e=this.productionConfig;if(!e)return[];const t=n.Sheets[e.sheet];if(!t)return[];const r=XLSX.utils.sheet_to_json(t,{header:1,defval:null});if(!r||r.length===0)return[];const s=[],i=new Date;i.setHours(0,0,0,0);for(let o=e.headerRowIndex+2;o<r.length;o++){const l=r[o];if(!l)continue;const c=this.parseDate(l[e.dateCol]);if(!c||new Date(c)>i)continue;const d=this.parseNumber(l[e.oilProdCol]),f=this.parseNumber(l[e.waterProdCol]),m=e.gasProdCol!==null?this.parseNumber(l[e.gasProdCol]):null;(d!==null||f!==null||m!==null)&&s.push({date:new Date(c),oil:d,water:f,gas:m})}return s.sort((o,l)=>o.date-l.date),s},applyPressureReadings(n,e){const t=this.pressureConfig;if(!t)return;const r=n.Sheets[t.sheet];if(!r)return;const s=XLSX.utils.sheet_to_json(r,{header:1,defval:null});if(!s||s.length===0)return;const i={};e.forEach(l=>{i[l.id]=[]});const o=new Date;o.setHours(0,0,0,0);for(let l=t.headerRowIndex+1;l<s.length;l++){const c=s[l];if(!c)continue;const u=this.parseDate(c[t.dateCol]);!u||new Date(u)>o||Object.entries(t.wells).forEach(([f,m])=>{if(!i[f])return;const g=this.parseNumber(c[m.csg]),_=this.parseNumber(c[m.tbg]),w=this.parseNumber(c[m.fl]),b=this.parseNumber(c[m.inj]);(g!==null||_!==null||w!==null||b!==null)&&i[f].push({date:u,casingPsi:g,tubingPsi:_,flowlinePsi:w,injVol:b})})}e.forEach(l=>{const c=i[l.id]||[];c.sort((u,d)=>new Date(d.date)-new Date(u.date)),l.pressureReadings=c.slice(0,60)})},parseDate(n){if(!n)return null;if(n instanceof Date)return n.toISOString().split("T")[0];if(typeof n=="number"){const e=XLSX.SSF.parse_date_code(n);if(e)return`${e.y}-${String(e.m).padStart(2,"0")}-${String(e.d).padStart(2,"0")}`}return typeof n=="string"?n.split(" ")[0]:null},parseNumber(n){if(n==null||n==="")return null;const e=parseFloat(n);return isNaN(e)?null:e<0?0:e}},xb={id:"master-chemical",name:"Master Chemical Sheet",expectedFileName:"Master Chemical Sheet.xlsx",parse(n){const e={id:this.id,name:this.name,lastUpdated:new Date().toISOString(),chemicalPrograms:[],rawRowCount:0};let t=n.Sheets["MASTER SHEET"];if(t){const r=this.parseNewFormat(t);return e.chemicalPrograms=r.programs,e.rawRowCount=r.rowCount,e}if(t=n.Sheets.Sheet1,t){const r=this.parseOldFormat(t);return e.chemicalPrograms=r.programs,e.rawRowCount=r.rowCount,e}return console.error("No valid sheet found in Master Chemical Sheet (tried MASTER SHEET and Sheet1)"),e},parseNewFormat(n){const e=XLSX.utils.decode_range(n["!ref"]),t=[];let r=0;const s={};for(let o=e.s.c;o<=e.e.c;o++){const l=n[XLSX.utils.encode_cell({r:0,c:o})],c=n[XLSX.utils.encode_cell({r:1,c:o})];if(c&&c.v){const u=String(c.v).trim();let d=null;if(l&&l.v)d=String(l.v).trim();else for(let f=o-1;f>=e.s.c;f--){const m=n[XLSX.utils.encode_cell({r:0,c:f})];if(m&&m.v){d=String(m.v).trim();break}}s[o]={chemicalName:u,category:d,isTruckTreating:d&&d.includes("Truck Treating"),isContinuous:d&&d.includes("Continuous")}}}const i=e.s.c;for(let o=2;o<=e.e.r;o++){const l=n[XLSX.utils.encode_cell({r:o,c:i})];if(!l||!l.v)continue;const c=String(l.v).trim();r++;const u={},d={};for(let f=e.s.c;f<=e.e.c;f++){if(!s[f])continue;const m=this.getCellValue(n,o,f);if(m!=null&&!isNaN(m)&&m!==0){const{chemicalName:g,isTruckTreating:_,isContinuous:w}=s[f];if(_){let b=g,k=1;for(;u[b]!==void 0;)b=g+"."+k,k++;u[b]=Number(m)}else if(w){let b=g,k=1;for(;d[b]!==void 0;)b=g+"."+k,k++;d[b]=Number(m)}}}(Object.keys(u).length>0||Object.keys(d).length>0)&&t.push({wellName:c,batteryName:this.extractBatteryName(c),testData:{},truckTreating:u,continuous:d})}return{programs:t,rowCount:r}},parseOldFormat(n){const e=XLSX.utils.decode_range(n["!ref"]),t=[];let r=0;const s=1,i={};for(let c=e.s.c;c<=e.e.c;c++){const u=XLSX.utils.encode_cell({r:s,c}),d=n[u];if(d&&d.v){let f=String(d.v).trim();if(i[f]!==void 0){let m=1,g=f+"."+m;for(;i[g]!==void 0;)m++,g=f+"."+m;f=g}i[f]=parseInt(c)}}const o=["WCI2010s","SP3","CI Pellets","CAT222EB","WWT1954","CS-6248","CW-679","ASF-376","CS-6248GL","SI-415","CO-634","CAT222EB.1","PPM","OPS 2538","CI2356 Pellets","CAT 222EB","WWT 1954","PPM.1"],l=["WCI2010s.1","CW-1224","TSN-516","PPM.2"];for(let c=s+1;c<=e.e.r;c++){const u=n[XLSX.utils.encode_cell({r:c,c:i["Well Name"]})];if(!u||!u.v)continue;const d=String(u.v).trim();r++;const f={};i.Oil!==void 0&&(f.oil=this.getCellValue(n,c,i.Oil)),i.Water!==void 0&&(f.water=this.getCellValue(n,c,i.Water)),i.Total!==void 0&&(f.total=this.getCellValue(n,c,i.Total));const m={};for(const _ of o)if(i[_]!==void 0){const w=this.getCellValue(n,c,i[_]);w!=null&&!isNaN(w)&&(m[_]=Number(w))}const g={};for(const _ of l)if(i[_]!==void 0){const w=this.getCellValue(n,c,i[_]);w!=null&&!isNaN(w)&&(g[_]=Number(w))}(Object.keys(m).length>0||Object.keys(g).length>0)&&t.push({wellName:d,batteryName:this.extractBatteryName(d),testData:f,truckTreating:m,continuous:g})}return{programs:t,rowCount:r}},getCellValue(n,e,t){if(t===void 0)return null;const r=XLSX.utils.encode_cell({r:e,c:t}),s=n[r];return!s||s.v===void 0||s.v===null||s.v===""?null:s.v},extractBatteryName(n){const e=n.split(/\s+/),t=/\d/,r=[];for(const s of e){if(t.test(s))break;r.push(s)}return r.join(" ")||n}},bm={CowdenParser:Cb,BigMaxParser:bb,BigMax1HParser:Sb,SouthAndrewsParser:Ab,PolarisParser:Rb,ShusaParser:Pb,MWWemacParser:Db,Unit130Parser:kb,ULS35HParser:Nb,MasterChemicalParser:xb};function Sm(n,e){if(!n||!n.wells)return e;const t={};n.wells.forEach(s=>{t[s.id]=s});const r=e.wells.map(s=>{const i=t[s.id];return i?(delete t[s.id],Lb(i,s)):s});return Object.values(t).forEach(s=>{r.push(s)}),{...e,wells:r}}function Lb(n,e){const t=Ob(n.pressureReadings||[],e.pressureReadings||[]);return{...e,actionItems:n.actionItems||[],failureHistory:n.failureHistory||[],chemicalProgram:n.chemicalProgram||{continuous:{rate:null,chems:"-",ppm:null},truckTreat:{rate:null,chems:"-",ppm:null}},pressureReadings:t}}function Ob(n,e){const t={};n.forEach(s=>{if(s&&s.date){const i=hd(s.date);t[i]=s}}),e.forEach(s=>{if(s&&s.date){const i=hd(s.date);t[i]=s}});const r=Object.values(t);return r.sort((s,i)=>new Date(i.date)-new Date(s.date)),r.slice(0,60)}function hd(n){return n?typeof n=="string"?n.split("T")[0]:n instanceof Date?n.toISOString().split("T")[0]:String(n):""}function Vb(){const n=document.getElementById("uploadArea"),e=document.getElementById("fileInput"),t=document.getElementById("btnReupload");n.addEventListener("click",r=>{r.target.id!=="btnReupload"&&e.click()}),t.addEventListener("click",r=>{r.stopPropagation(),e.click()}),e.addEventListener("change",r=>{const s=r.target.files[0];s&&fd(s),e.value=""}),n.addEventListener("dragover",r=>{r.preventDefault(),n.classList.add("drag-over")}),n.addEventListener("dragleave",()=>{n.classList.remove("drag-over")}),n.addEventListener("drop",r=>{r.preventDefault(),n.classList.remove("drag-over");const s=r.dataTransfer.files[0];s&&fd(s)})}async function fd(n){if(!A.currentSheet){alert("Please select a gauge sheet first");return}const e=qe.find(o=>o.id===A.currentSheet);if(!e)return;const t=bm[e.parser];if(!t){alert(`Parser not yet implemented for ${e.name}. Coming soon!`);return}const r=document.getElementById("uploadProgress"),s=document.getElementById("progressFill"),i=document.getElementById("progressText");r.style.display="block",s.style.width="10%",i.textContent="Reading file...";try{const o=await n.arrayBuffer();s.style.width="5%",i.textContent="Parsing Excel...";const l=XLSX.read(o,{type:"array",cellDates:!0});s.style.width="10%",i.textContent="Extracting data...";const c=t.parse(l);if(e.isChemicalSheet){s.style.width="15%",i.textContent="Saving chemical programs...",await pl(c.chemicalPrograms,(d,f)=>{const m=15+Math.floor(f/100*40);s.style.width=`${m}%`,i.textContent=d}),s.style.width="55%",i.textContent="Reloading chemical programs...",await rr(),s.style.width="60%",i.textContent="Matching chemical programs to existing wells...";const u=await gl((d,f)=>{const m=60+Math.floor(f/100*30);s.style.width=`${m}%`,i.textContent=d});s.style.width="90%",i.textContent="Refreshing views...",qi(),s.style.width="100%",i.textContent=`Complete! ${u.matched} wells matched, ${u.updated} wells updated`,setTimeout(()=>{r.style.display="none",s.style.width="0%",Kn()},2e3)}else{s.style.width="15%",i.textContent="Checking for manual edits...";const u=await ml(A.currentSheet);s.style.width="20%",i.textContent="Merging data...";const d=Sm(u,c);A.appData[A.currentSheet]=d,s.style.width="25%",i.textContent="Saving to cloud...",await dl(A.currentSheet,d,!0,(f,m)=>{const g=25+Math.floor(m/90*65);s.style.width=`${g}%`,i.textContent=f}),s.style.width="92%",i.textContent="Refreshing navigation data...",await Fi(f=>{i.textContent=f}),s.style.width="96%",i.textContent="Refreshing dashboard data...",await cs(f=>{i.textContent=f}),s.style.width="100%",i.textContent="Complete!",setTimeout(()=>{r.style.display="none",s.style.width="0%",Kn(),Em(A.currentSheet)},500)}}catch(o){console.error("Error processing file:",o),alert("Error processing file: "+o.message),r.style.display="none"}}function Mb(){const n=document.getElementById("bulkUploadArea"),e=document.getElementById("bulkFileInput");!n||!e||(n.addEventListener("click",()=>{e.click()}),e.addEventListener("change",t=>{const r=Array.from(t.target.files);r.length>0&&md(r),e.value=""}),n.addEventListener("dragover",t=>{t.preventDefault(),n.classList.add("drag-over")}),n.addEventListener("dragleave",()=>{n.classList.remove("drag-over")}),n.addEventListener("drop",t=>{t.preventDefault(),n.classList.remove("drag-over");const r=Array.from(t.dataTransfer.files);r.length>0&&md(r)}))}async function md(n){const e=document.getElementById("bulkUploadProgress"),t=document.getElementById("bulkProgressFill"),r=document.getElementById("bulkProgressText"),s=document.getElementById("bulkUploadResults");e.style.display="block",s.style.display="none",s.innerHTML="";const i=[];let o=0;for(const u of n){t.style.width=`${o/n.length*100}%`,r.textContent=`Processing ${u.name}...`;const d=qe.find(m=>u.name.toLowerCase().includes(m.fileName.toLowerCase().replace(".xlsx","").replace(".xlsm",""))||m.fileName.toLowerCase()===u.name.toLowerCase());if(!d){i.push({name:u.name,status:"skipped",detail:"Unknown file"}),o++;continue}const f=bm[d.parser];if(!f){i.push({name:u.name,status:"skipped",detail:"No parser available"}),o++;continue}try{const m=await u.arrayBuffer(),g=XLSX.read(m,{type:"array",cellDates:!0}),_=f.parse(g);if(d.isChemicalSheet){await pl(_.chemicalPrograms,(b,k)=>{r.textContent=b}),await rr(),r.textContent="Matching chemical programs to existing wells...";const w=await gl((b,k)=>{r.textContent=b});i.push({name:d.name,status:"success",detail:`${_.chemicalPrograms.length} chemical programs saved, ${w.matched} wells matched, ${w.updated} wells updated`})}else{const w=await ml(d.id),b=Sm(w,_);A.appData[d.id]=b,i.push({name:d.name,status:"success",detail:`${_.wells.length} wells loaded`})}}catch(m){console.error(`Error processing ${u.name}:`,m),i.push({name:u.name,status:"error",detail:m.message})}o++}const l=Object.keys(A.appData),c=l.length;if(c>0)for(let u=0;u<c;u++){const d=l[u];await dl(d,A.appData[d],!0,(f,m)=>{const g=Math.floor(u/c*85),_=Math.floor(m/90*(85/c));t.style.width=`${g+_}%`,r.textContent=`[Sheet ${u+1}/${c}] ${f}`})}t.style.width="90%",r.textContent="Refreshing navigation data...",await Fi(u=>{r.textContent=u}),t.style.width="95%",r.textContent="Refreshing dashboard data...",await cs(u=>{r.textContent=u}),t.style.width="100%",r.textContent="Complete!",setTimeout(()=>{if(e.style.display="none",s.style.display="block",s.innerHTML=i.map(d=>`
            <div class="bulk-result-item ${d.status}">
                <span class="result-icon">${d.status==="success"?"OK":d.status==="error"?"X":"?"}</span>
                <span class="result-name">${d.name}</span>
                <span class="result-detail">${d.detail}</span>
            </div>
        `).join(""),Kn(),i.some(d=>d.name.includes("Chemical")&&d.status==="success")){const d=document.getElementById("masterChemicalView");d&&d.classList.contains("active")&&qi(),A.currentSheet&&A.currentWell&&Ct(A.currentSheet,A.currentWell)}},500)}function Bb(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){const e=Math.random()*16|0;return(n==="x"?e:e&3|8).toString(16)})}function Ub(){console.log("Initializing failure modal handlers...");const n=document.getElementById("btnAddFailure"),e=document.getElementById("failureModal"),t=document.getElementById("btnCloseFailureModal"),r=document.getElementById("btnCancelFailure"),s=document.getElementById("failureForm"),i=document.getElementById("failureFileInput"),o=document.getElementById("fileDropZone");if(document.getElementById("fileInfo"),document.getElementById("btnSubmitFailure"),console.log("btnAddFailure:",n),console.log("failureModal:",e),!n||!e){console.warn("Failure modal elements not found",{btnAddFailure:n,failureModal:e});return}console.log("Failure modal handlers initialized successfully"),n.addEventListener("click",()=>{Fb()}),t&&t.addEventListener("click",()=>{qs()}),r&&r.addEventListener("click",()=>{qs()}),e.addEventListener("click",l=>{l.target===e&&qs()}),i&&i.addEventListener("change",l=>{pd(l.target.files[0])}),o&&(o.addEventListener("click",()=>{i.click()}),o.addEventListener("dragover",l=>{l.preventDefault(),o.classList.add("drag-over")}),o.addEventListener("dragleave",()=>{o.classList.remove("drag-over")}),o.addEventListener("drop",l=>{l.preventDefault(),o.classList.remove("drag-over"),l.dataTransfer.files.length>0&&pd(l.dataTransfer.files[0])})),s&&s.addEventListener("submit",l=>{l.preventDefault(),Hb()})}function Fb(){console.log("openFailureModal called");const n=document.getElementById("failureModal"),e=document.getElementById("failureForm");e&&e.reset(),Am();const t=document.getElementById("failureDate");if(t){const r=new Date().toISOString().split("T")[0];t.value=r}n.classList.add("visible"),document.body.style.overflow="hidden",console.log("Modal should be visible now, modal classList:",n.classList)}function qs(){document.getElementById("failureModal").classList.remove("visible"),document.body.style.overflow="";const e=document.getElementById("failureForm");e&&e.reset(),Am()}function pd(n){if(!n)return;const e=um(n);if(!e.valid){alert(e.error);return}document.getElementById("failureFileInput")&&$b(n)}function $b(n){const e=document.getElementById("fileDropZone"),t=document.getElementById("fileInfo"),r=document.getElementById("fileName"),s=document.getElementById("fileSize");if(e&&(e.style.display="none"),t&&(t.style.display="flex"),r&&(r.textContent=n.name),s){const i=(n.size/1024/1024).toFixed(2);s.textContent=`${i} MB`}}function Am(){const n=document.getElementById("failureFileInput"),e=document.getElementById("fileDropZone"),t=document.getElementById("fileInfo");n&&(n.value=""),e&&(e.style.display="flex"),t&&(t.style.display="none")}async function Hb(){const n=document.getElementById("failureDate"),e=document.getElementById("failureNotes"),t=document.getElementById("failureFileInput"),r=document.getElementById("btnSubmitFailure"),s=document.getElementById("uploadProgress"),i=document.getElementById("progressBar"),o=document.getElementById("progressText"),l=n==null?void 0:n.value,c=(e==null?void 0:e.value)||"",u=t==null?void 0:t.files[0];if(!l){alert("Please select a failure date");return}if(!u){alert("Please select a file to upload");return}const d=um(u);if(!d.valid){alert(d.error);return}const f=A.currentSheet,m=A.currentWell;if(!f||!m){alert("Cannot determine current well. Please try again.");return}r&&(r.disabled=!0,r.textContent="Uploading..."),s&&(s.style.display="block");try{const g=Bb(),_=await YI(f,m,g,u,k=>{i&&(i.style.width=`${k}%`),o&&(o.textContent=`${Math.round(k)}%`)}),w={id:g,failureDate:new Date(l),notes:c,fileName:_.fileName,fileUrl:_.fileUrl,filePath:_.filePath,fileSize:_.fileSize};if(await pm(f,m,w)){await hl(f,m);const k=A.appData[f];if(k==null?void 0:k.wells.find(B=>B.id===m)){const{default:B}=await Br(async()=>{const{default:Y}=await Promise.resolve().then(()=>cd);return{default:Y}},void 0),{showWellView:$}=await Br(async()=>{const{showWellView:Y}=await Promise.resolve().then(()=>cd);return{showWellView:Y}},void 0);await $(f,m)}qs(),alert("Failure history entry added successfully!")}else throw new Error("Failed to save failure history to database")}catch(g){console.error("Error submitting failure entry:",g),alert(`Failed to add failure history entry: ${g.message}`)}finally{r&&(r.disabled=!1,r.textContent="Add Entry"),s&&(s.style.display="none"),i&&(i.style.width="0%"),o&&(o.textContent="0%")}}const zi="@zarvonaenergy.com";let Vo=null;function jb(n){Vo=n,ET(bn,e=>{Vo&&Vo(e)})}async function Wb(n,e){try{return{success:!0,user:(await yT(bn,n,e)).user}}catch(t){return console.error("Sign in error:",t),{success:!1,error:Gi(t)}}}async function qb(){try{const n=new Fn("microsoft.com");n.addScope("profile"),n.addScope("email"),n.addScope("User.Read"),n.setCustomParameters({prompt:"select_account"});const e=await $T(bn,n),t=Fn.credentialFromResult(e),r=t==null?void 0:t.accessToken;if(r&&!e.user.photoURL)try{const s=await fetch("https://graph.microsoft.com/v1.0/me/photo/$value",{headers:{Authorization:`Bearer ${r}`}});if(s.ok){const i=await s.blob(),o=URL.createObjectURL(i);console.log("Fetched profile photo from Microsoft Graph")}}catch(s){console.log("Could not fetch profile photo:",s)}return{success:!0,user:e.user}}catch(n){return console.error("Microsoft sign in error:",n),n.code==="auth/popup-closed-by-user"?{success:!1,error:"Sign-in cancelled."}:n.code==="auth/popup-blocked"?{success:!1,error:"Pop-up blocked. Please allow pop-ups for this site."}:{success:!1,error:Gi(n)}}}async function zb(){try{return await TT(bn),{success:!0}}catch(n){return console.error("Sign out error:",n),{success:!1,error:n.message}}}function Rm(n){return n.toLowerCase().endsWith(zi.toLowerCase())}async function Gb(n,e){try{return Rm(n)?{success:!0,user:(await gT(bn,n,e)).user}:{success:!1,error:`Only ${zi} email addresses are allowed.`}}catch(t){return console.error("Create account error:",t),{success:!1,error:Gi(t)}}}async function Kb(n){try{return Rm(n)?(await pT(bn,n),{success:!0}):{success:!1,error:`Only ${zi} email addresses are allowed.`}}catch(e){return console.error("Password reset error:",e),{success:!1,error:Gi(e)}}}function Gi(n){switch(n.code){case"auth/invalid-email":return"Invalid email address.";case"auth/user-disabled":return"This account has been disabled.";case"auth/user-not-found":return"No account found with this email.";case"auth/wrong-password":return"Incorrect password.";case"auth/email-already-in-use":return"An account with this email already exists.";case"auth/weak-password":return"Password should be at least 6 characters.";case"auth/network-request-failed":return"Network error. Please check your connection.";case"auth/too-many-requests":return"Too many failed attempts. Please try again later.";default:return n.message||"An error occurred. Please try again."}}function Pm(){const n=document.getElementById("authSplash");n&&(n.classList.add("fade-out"),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},300))}function Xb(){const n=document.getElementById("loginView"),e=document.querySelector(".app-container");Pm(),setTimeout(()=>{n&&(n.style.display="flex",requestAnimationFrame(()=>{n.classList.add("fade-in")})),e&&(e.style.display="none",e.classList.remove("fade-in"))},100)}function Qb(){const n=document.getElementById("loginView"),e=document.querySelector(".app-container");Pm(),setTimeout(()=>{n&&(n.style.display="none",n.classList.remove("fade-in")),e&&(e.style.display="flex",requestAnimationFrame(()=>{e.classList.add("fade-in")}))},100)}function Jb(){const n=document.getElementById("loginForm"),e=document.getElementById("signupForm"),t=document.getElementById("showSignup"),r=document.getElementById("showLogin"),s=document.getElementById("loginContainer"),i=document.getElementById("signupContainer"),o=document.getElementById("microsoftSignIn");if(o&&o.addEventListener("click",async c=>{c.preventDefault();const u=document.getElementById("loginError"),d=document.getElementById("loginSuccess");u.textContent="",d.textContent="",o.disabled=!0;const f=o.innerHTML;o.innerHTML='<span class="btn-spinner"></span> Signing in...';const m=await qb();m.success||(u.textContent=m.error,o.disabled=!1,o.innerHTML=f)}),n){const c=async()=>{const f=document.getElementById("loginEmail").value,m=document.getElementById("loginPassword").value,g=document.getElementById("loginError"),_=document.getElementById("loginSuccess"),w=n.querySelector('button[type="submit"]');g.textContent="",_.textContent="",w.disabled=!0,w.textContent="Signing in...";const b=await Wb(f,m);b.success||(g.textContent=b.error,w.disabled=!1,w.textContent="Sign In")};n.addEventListener("submit",f=>{f.preventDefault(),c()});const u=document.getElementById("loginEmail"),d=document.getElementById("loginPassword");[u,d].forEach(f=>{f&&f.addEventListener("keydown",m=>{m.key==="Enter"&&(m.preventDefault(),c())})})}const l=document.getElementById("forgotPassword");if(l&&l.addEventListener("click",async c=>{c.preventDefault();const u=document.getElementById("loginEmail"),d=document.getElementById("loginError"),f=document.getElementById("loginSuccess");d.textContent="",f.textContent="";const m=u.value.trim();if(!m){d.textContent="Please enter your email address first.",u.focus();return}const g=await Kb(m);g.success?(f.textContent="Password reset email sent! Check your inbox.",u.value=""):d.textContent=g.error}),e){const c=async()=>{const m=document.getElementById("signupUsername").value.trim(),g=document.getElementById("signupPassword").value,_=document.getElementById("signupConfirmPassword").value,w=document.getElementById("signupError"),b=e.querySelector('button[type="submit"]');if(w.textContent="",!m){w.textContent="Please enter a username.";return}const k=m+zi;if(g!==_){w.textContent="Passwords do not match.";return}b.disabled=!0,b.textContent="Creating account...";const L=await Gb(k,g);L.success||(w.textContent=L.error,b.disabled=!1,b.textContent="Create Account")};e.addEventListener("submit",m=>{m.preventDefault(),c()});const u=document.getElementById("signupUsername"),d=document.getElementById("signupPassword"),f=document.getElementById("signupConfirmPassword");[u,d,f].forEach(m=>{m&&m.addEventListener("keydown",g=>{g.key==="Enter"&&(g.preventDefault(),c())})})}t&&t.addEventListener("click",c=>{c.preventDefault(),s.style.display="none",i.style.display="block"}),r&&r.addEventListener("click",c=>{c.preventDefault(),i.style.display="none",s.style.display="block"})}let ua=!1;async function Yb(){ua||(lp(),A.isLoading=!0,await Fi(),Cm(),Vb(),Mb(),JC(),Ub(),wb(),Eb(),cp(),eS(),Je("welcome"),Qb(),ua=!0,Zb())}async function Zb(){try{await cs(),await rr(),A.isLoading=!1,En(),Kn(),console.log("Background loading complete")}catch(n){console.error("Error loading dashboard summary:",n),A.isLoading=!1,En(),Kn()}}function eS(){const n=document.getElementById("userAvatarBtn"),e=document.getElementById("userDropdown"),t=document.getElementById("userEmail"),r=document.getElementById("userDisplayName"),s=document.getElementById("userAvatarImg"),i=document.getElementById("avatarIconSvg"),o=document.getElementById("userDropdownAvatar"),l=document.getElementById("btnSignOutDropdown");if(!n||!e)return;const c=bn.currentUser;c&&(t&&(t.textContent=c.email||"No email"),c.displayName&&r&&(r.textContent=c.displayName,r.style.display="block"),c.photoURL&&(s&&i&&(s.src=c.photoURL,s.style.display="block",i.style.display="none"),o&&(o.src=c.photoURL,o.style.display="block"))),n.addEventListener("click",u=>{u.stopPropagation(),e.classList.toggle("active")}),document.addEventListener("click",u=>{!e.contains(u.target)&&u.target!==n&&e.classList.remove("active")}),l&&l.addEventListener("click",async()=>{e.classList.remove("active"),await zb()})}document.addEventListener("DOMContentLoaded",()=>{Jb(),jb(n=>{n?(console.log("User signed in:",n.email),Yb()):(console.log("User signed out"),Xb(),ua=!1)})});hC((n,e)=>{Ct(n,e)});qC(()=>{Kn(),En()});
