import{_ as y,r as i,o as B,a as _,c as g,w as a,u as e,b as t,I as w,d as S,e as V,f as I,g as p,h as C,i as m,E as L,x as N,v as M,y as R,A as U,m as D,p as E,F as O,q as T,s as A}from"./index-BjtHITeT.js";import{_ as F}from"./MatchInfo-hlCtaHhK.js";/* empty css                                                  */const $={class:"split"},j={class:"left"},q={__name:"MatchupsPage",setup(z){const f=i({});i("");const b=i({}),h=i(!1),s=i(d("team")),v=new URLSearchParams(window.location.search);v.has("team")?s.value=v.get("team"):s.value=d("team");function k(u){b.value=u}function d(u){let c=u+"=",n=decodeURIComponent(document.cookie).split(";");for(let r=0;r<n.length;r++){let o=n[r];for(;o.charAt(0)==" ";)o=o.substring(1);if(o.indexOf(c)==0)return o.substring(c.length,o.length)}return""}return B(async()=>{const c=await(await fetch("/data/matches?event="+d("event"))).json();f.value=c,console.log(f.value);const l=new URLSearchParams(window.location.search);l.has("team")?s.value=l.get("team"):s.value=d("team")}),(u,c)=>(_(),g(e(A),null,{default:a(()=>[t(e(C),{translucent:!0},{default:a(()=>[t(e(w),null,{default:a(()=>[t(e(S),{slot:"start"},{default:a(()=>[t(e(V),{color:"primary"})]),_:1}),t(e(I),null,{default:a(()=>[p("Matchups")]),_:1})]),_:1})]),_:1}),t(e(T),{fullscreen:!0},{default:a(()=>[t(e(C),{collapse:"condense"},{default:a(()=>[t(e(w),null,{default:a(()=>[t(e(I),{size:"large"},{default:a(()=>[p("Matchups")]),_:1})]),_:1})]),_:1}),m("div",$,[m("div",j,[m("div",null,[t(e(L),{modelValue:h.value,"onUpdate:modelValue":c[0]||(c[0]=l=>h.value=l)},{default:a(()=>[t(e(N),null,{default:a(()=>[p(" Show Completed ")]),_:1})]),_:1},8,["modelValue"])]),t(e(M),{style:{width:"100%","text-align":"center"}},{default:a(()=>[m("h1",null,"Matchups for "+R(s.value),1),t(e(U),{style:{width:"100%"}},{default:a(()=>[(_(!0),D(O,null,E(f.value.filter(l=>{let n=JSON.parse(l.data),r=n.info.alliances[0].teams[0].number,o=n.info.alliances[0].teams[1].number,x=n.info.alliances[1].teams[0].number,P=n.info.alliances[1].teams[1].number;return(s.value==r||s.value==o||s.value==x||s.value==P)&&(n.info.state!="SCORED"||h.value)}),l=>(_(),g(e(M),{slot:"header",color:"light"},{default:a(()=>[t(F,{match:l,onClick:n=>k(l)},null,8,["match","onClick"])]),_:2},1024))),256))]),_:1})]),_:1})])])]),_:1})]),_:1}))}},K=y(q,[["__scopeId","data-v-f7fe2114"]]);export{K as default};
