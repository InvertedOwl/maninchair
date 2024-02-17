<<<<<<<< HEAD:dist/assets/status-tap-UUlPhU2n.js
import{P as a,Q as i,R as c,S as d,T as l}from"./index-LYtTyueL.js";/*!
========
import{P as a,Q as i,R as c,S as d,T as l}from"./index-_2qMS62a.js";/*!
>>>>>>>> 306b8261e61f28475e30d39a960be0bf0a13d2e6:dist/assets/status-tap-r_7VaKfu.js
 * (C) Ionic http://ionicframework.com - MIT License
 */const m=()=>{const e=window;e.addEventListener("statusTap",()=>{a(()=>{const o=e.innerWidth,s=e.innerHeight,n=document.elementFromPoint(o/2,s/2);if(!n)return;const t=i(n);t&&new Promise(r=>c(t,r)).then(()=>{d(async()=>{t.style.setProperty("--overflow","hidden"),await l(t,300),t.style.removeProperty("--overflow")})})})})};export{m as startStatusTap};
