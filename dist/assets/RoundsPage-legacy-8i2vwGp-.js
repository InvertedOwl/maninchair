System.register(["./index-legacy-iXvqJNV2.js","./MatchInfo-legacy-uwAOqi2t.js","./MatchInfo.vue_vue_type_style_index_0_lang-legacy-RT43QL9R.js"],(function(a,e){"use strict";var t,l,n,i,s,r,d,o,u,c,f,p,h,v,m,g,x,b,y,_,w,O,S,J,N,z,D,j;return{setters:[a=>{t=a._,l=a.r,n=a.o,i=a.a,s=a.c,r=a.w,d=a.u,o=a.b,u=a.I,c=a.d,f=a.e,p=a.f,h=a.g,v=a.h,m=a.i,g=a.A,x=a.j,b=a.k,y=a.m,_=a.p,w=a.F,O=a.v,S=a.y,J=a.q,N=a.s,z=a.C,D=a.D},a=>{j=a._},null],execute:function(){var e=document.createElement("style");e.textContent="#container[data-v-a0da4b08]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container strong[data-v-a0da4b08]{font-size:20px;line-height:26px}#container p[data-v-a0da4b08]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container a[data-v-a0da4b08]{text-decoration:none}.selects-container *[data-v-a0da4b08]{margin-right:20px;margin-left:20px;width:300px}h1[data-v-a0da4b08]{width:100%;text-align:center}.italic-text[data-v-a0da4b08]{font-style:italic;font-weight:600}.left[data-v-a0da4b08]{display:flex;justify-content:left;width:100%;margin-left:15px;flex-direction:column}.right[data-v-a0da4b08]{width:100%}ion-accordion-group[data-v-a0da4b08]{width:95%}h2[data-v-a0da4b08]{font-size:30px;margin-right:15px}.grid-container[data-v-a0da4b08]{display:grid;grid-template-columns:1fr 1fr;gap:10px}.split[data-v-a0da4b08]{display:flex;flex-direction:row}hr[data-v-a0da4b08]{width:90%;height:2px;background-color:#8c8c8c;margin-bottom:0}h3[data-v-a0da4b08]{font-size:20px}\n",document.head.appendChild(e);const C=a=>(z("data-v-a0da4b08"),a=a(),D(),a),I={class:"split"},k={class:"left"},A={class:"right"},R=C((()=>m("h1",null,"Match Data",-1))),M=C((()=>m("br",null,null,-1))),T=C((()=>m("hr",null,null,-1))),U={style:{display:"flex","flex-direction":"row","justify-content":"space-around",width:"100%"}},V={style:{width:"100%"}},q=["href"],E=["href"],F=C((()=>m("hr",null,null,-1))),P={style:{"font-size":"15px","margin-right":"15px"}},Y={style:{"font-size":"20px","margin-right":"15px"}},B={style:{width:"100%"}},G=["href"],H=["href"],K=C((()=>m("hr",null,null,-1))),L={style:{"font-size":"15px","margin-right":"15px"}},Q={style:{"font-size":"20px","margin-right":"15px"}};a("default",t({__name:"RoundsPage",setup(a){const e=l({}),t=l(""),z=l({});async function D(){const a=await fetch("/data/matches?event="+function(a){let e=a+"=",t=decodeURIComponent(document.cookie).split(";");for(let l=0;l<t.length;l++){let a=t[l];for(;" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(e))return a.substring(e.length,a.length)}return""}("event")),t=await a.json();e.value=t,console.log(e.value)}return n((async()=>{D(),setInterval(D,5e3)})),(a,l)=>(i(),s(d(N),null,{default:r((()=>[o(d(v),{translucent:!0},{default:r((()=>[o(d(u),null,{default:r((()=>[o(d(c),{slot:"start"},{default:r((()=>[o(d(f),{color:"primary"})])),_:1}),o(d(p),null,{default:r((()=>[h("Rounds")])),_:1})])),_:1})])),_:1}),o(d(J),{fullscreen:!0},{default:r((()=>[o(d(v),{collapse:"condense"},{default:r((()=>[o(d(u),null,{default:r((()=>[o(d(p),{size:"large"},{default:r((()=>[h("Rounds")])),_:1})])),_:1})])),_:1}),m("div",I,[m("div",k,[o(d(g),{style:{width:"350px"}},{default:r((()=>[o(d(x),{style:{padding:"5px"},label:"Division",interface:"popover",placeholder:"Unset",modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=a=>t.value=a),onIonChange:l[1]||(l[1]=a=>{t.value=a.target.value})},{default:r((()=>[o(d(b),{value:"1"},{default:r((()=>[h("Division 1")])),_:1}),o(d(b),{value:"2"},{default:r((()=>[h("Division 2")])),_:1}),o(d(b),{value:"3"},{default:r((()=>[h("Division 3")])),_:1}),o(d(b),{value:"4"},{default:r((()=>[h("Division 4")])),_:1})])),_:1},8,["modelValue"]),m("div",null,[(i(!0),y(w,null,_(e.value.filter((a=>JSON.parse(a.data).info.matchTuple.division==t.value)),(a=>(i(),s(d(O),{slot:"header",style:{cursor:"pointer"},onClick:e=>function(a){z.value=a}(a),color:"light"},{default:r((()=>[o(j,{match:a},null,8,["match"])])),_:2},1032,["onClick"])))),256))])])),_:1})]),m("div",A,[o(d(O),{style:{width:"100%","text-align":"center"}},{default:r((()=>[R,m("h2",null,S(z.value.round.substring(0,1))+S(z.value.match),1),M,T,m("div",U,[m("div",V,[m("h3",null,[m("a",{style:{color:"rgba(255, 0, 0, 0.438)"},href:"teams?team="+JSON.parse(z.value.data).info.alliances[0].teams[0].number},S(JSON.parse(z.value.data).info.alliances[0].teams[0].number),9,q)]),m("h3",null,[m("a",{style:{color:"rgba(255, 0, 0, 0.438)"},href:"teams?team="+JSON.parse(z.value.data).info.alliances[0].teams[1].number},S(JSON.parse(z.value.data).info.alliances[0].teams[1].number),9,E)]),F,(i(!0),y(w,null,_(JSON.parse(z.value.data).scoreData.alliances[0].scoreTypes,(a=>(i(),y("div",null,[m("h3",null,[m("span",P,S(a.name.replaceAll("_"," ")),1),h(),m("span",Y,S(a.val),1)])])))),256))]),m("div",B,[m("h3",null,[m("a",{style:{color:"rgba(67, 67, 253, 0.74)"},href:"teams?team="+JSON.parse(z.value.data).info.alliances[1].teams[0].number},S(JSON.parse(z.value.data).info.alliances[1].teams[0].number),9,G)]),m("h3",null,[m("a",{style:{color:"rgba(67, 67, 253, 0.74)"},href:"teams?team="+JSON.parse(z.value.data).info.alliances[1].teams[1].number},S(JSON.parse(z.value.data).info.alliances[1].teams[1].number),9,H)]),K,(i(!0),y(w,null,_(JSON.parse(z.value.data).scoreData.alliances[1].scoreTypes,(a=>(i(),y("div",null,[m("h3",null,[m("span",L,S(a.name.replaceAll("_"," ")),1),h(),m("span",Q,S(a.val),1)])])))),256))])])])),_:1})])])])),_:1})])),_:1}))}},[["__scopeId","data-v-a0da4b08"]]))}}}));
