import{_ as M,r as b,o as B,a as u,c as N,w as a,u as t,b as s,I as D,d as T,e as V,f as O,g as r,h as w,i as e,A as z,j as R,k as v,m as h,p as I,F as x,v as k,y as o,q as A,s as j,C as P,D as U}from"./index-LYtTyueL.js";import{_ as F}from"./MatchInfo-ETBHiPVh.js";/* empty css                                                  */const _=p=>(P("data-v-26ebfe3c"),p=p(),U(),p),L={class:"split"},$={class:"left"},q={class:"right"},E=_(()=>e("h1",null,"Match Data",-1)),H=_(()=>e("br",null,null,-1)),G=_(()=>e("hr",null,null,-1)),K={style:{display:"flex","flex-direction":"row","justify-content":"space-around",width:"100%"}},Q={style:{width:"100%"}},W=["href"],X=["href"],Y=_(()=>e("hr",null,null,-1)),Z={style:{"font-size":"15px","margin-right":"15px"}},ee={style:{"font-size":"20px","margin-right":"15px"}},te={style:{width:"100%"}},ae=["href"],se=["href"],le=_(()=>e("hr",null,null,-1)),ne={style:{"font-size":"15px","margin-right":"15px"}},oe={style:{"font-size":"20px","margin-right":"15px"}},ie={__name:"RoundsPage",setup(p){const g=b({}),f=b("1"),n=b({});function J(c){n.value=c}function C(c){let i=c+"=",m=decodeURIComponent(document.cookie).split(";");for(let y=0;y<m.length;y++){let d=m[y];for(;d.charAt(0)==" ";)d=d.substring(1);if(d.indexOf(i)==0)return d.substring(i.length,d.length)}return""}B(async()=>{S(),setInterval(S,5e3)});async function S(){const i=await(await fetch("/data/matches?event="+C("event"))).json();g.value=i,console.log(g.value)}return(c,i)=>(u(),N(t(j),null,{default:a(()=>[s(t(w),{translucent:!0},{default:a(()=>[s(t(D),null,{default:a(()=>[s(t(T),{slot:"start"},{default:a(()=>[s(t(V),{color:"primary"})]),_:1}),s(t(O),null,{default:a(()=>[r("Rounds")]),_:1})]),_:1})]),_:1}),s(t(A),{fullscreen:!0},{default:a(()=>[s(t(w),{collapse:"condense"},{default:a(()=>[s(t(D),null,{default:a(()=>[s(t(O),{size:"large"},{default:a(()=>[r("Rounds")]),_:1})]),_:1})]),_:1}),e("div",L,[e("div",$,[s(t(z),{style:{width:"350px"}},{default:a(()=>[s(t(R),{style:{padding:"5px"},label:"Division",interface:"popover",placeholder:"Unset",modelValue:f.value,"onUpdate:modelValue":i[0]||(i[0]=l=>f.value=l),onIonChange:i[1]||(i[1]=l=>{f.value=l.target.value})},{default:a(()=>[s(t(v),{value:"1"},{default:a(()=>[r("Division 1")]),_:1}),s(t(v),{value:"2"},{default:a(()=>[r("Division 2")]),_:1}),s(t(v),{value:"3"},{default:a(()=>[r("Division 3")]),_:1}),s(t(v),{value:"4"},{default:a(()=>[r("Division 4")]),_:1})]),_:1},8,["modelValue"]),e("div",null,[(u(!0),h(x,null,I(g.value.filter(l=>JSON.parse(l.data).info.matchTuple.division==f.value),l=>(u(),N(t(k),{slot:"header",style:{cursor:"pointer"},onClick:m=>J(l),color:"light"},{default:a(()=>[s(F,{match:l},null,8,["match"])]),_:2},1032,["onClick"]))),256))])]),_:1})]),e("div",q,[s(t(k),{style:{width:"100%","text-align":"center",position:"sticky",top:"0"}},{default:a(()=>[E,e("h2",null,o(n.value.round.substring(0,1))+o(n.value.match),1),H,G,e("div",K,[e("div",Q,[e("h3",null,[e("a",{style:{color:"rgba(255, 0, 0, 0.438)"},href:"teams?team="+JSON.parse(n.value.data).info.alliances[0].teams[0].number},o(JSON.parse(n.value.data).info.alliances[0].teams[0].number),9,W)]),e("h3",null,[e("a",{style:{color:"rgba(255, 0, 0, 0.438)"},href:"teams?team="+JSON.parse(n.value.data).info.alliances[0].teams[1].number},o(JSON.parse(n.value.data).info.alliances[0].teams[1].number),9,X)]),Y,(u(!0),h(x,null,I(JSON.parse(n.value.data).scoreData.alliances[0].scoreTypes,l=>(u(),h("div",null,[e("h3",null,[e("span",Z,o(l.name.replaceAll("_"," ")),1),r(),e("span",ee,o(l.val),1)])]))),256))]),e("div",te,[e("h3",null,[e("a",{style:{color:"rgba(67, 67, 253, 0.74)"},href:"teams?team="+JSON.parse(n.value.data).info.alliances[1].teams[0].number},o(JSON.parse(n.value.data).info.alliances[1].teams[0].number),9,ae)]),e("h3",null,[e("a",{style:{color:"rgba(67, 67, 253, 0.74)"},href:"teams?team="+JSON.parse(n.value.data).info.alliances[1].teams[1].number},o(JSON.parse(n.value.data).info.alliances[1].teams[1].number),9,se)]),le,(u(!0),h(x,null,I(JSON.parse(n.value.data).scoreData.alliances[1].scoreTypes,l=>(u(),h("div",null,[e("h3",null,[e("span",ne,o(l.name.replaceAll("_"," ")),1),r(),e("span",oe,o(l.val),1)])]))),256))])])]),_:1})])])]),_:1})]),_:1}))}},ce=M(ie,[["__scopeId","data-v-26ebfe3c"]]);export{ce as default};
