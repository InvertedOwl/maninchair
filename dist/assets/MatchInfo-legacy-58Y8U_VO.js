System.register(["./MatchInfo.vue_vue_type_style_index_0_lang-legacy-RT43QL9R.js","./index-legacy-nXV_AGdI.js"],(function(a,e){"use strict";var t,n,s,l;return{setters:[null,a=>{t=a.a,n=a.m,s=a.i,l=a.y}],execute:function(){const e={class:"Master"},r={id:"Left1",class:"column"},c={id:"Match"},i={id:"Left2",class:"column"},m=["href"],u=["href"],h={id:"Center",class:"column"},o={id:"Right1",class:"column"},d={id:"Right2",class:"column"},f=["href"],S=["href"];a("_",{__name:"MatchInfo",props:["match"],setup(a){function p(a){const e=new Date(a);return`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`}const g=a;return(a,b)=>(t(),n("div",e,[s("div",r,[s("h2",null,l(g.match.round.substring(0,1))+l(g.match.match),1),s("h3",null,l(p(1e3*JSON.parse(g.match.data).info.timeScheduled)),1)]),s("div",c,[s("div",i,[s("h3",null,[s("a",{style:{color:"rgba(255, 0, 0, 0.438)"},href:"teams?team="+JSON.parse(g.match.data).info.alliances[0].teams[0].number},l(JSON.parse(g.match.data).info.alliances[0].teams[0].number),9,m)]),s("h3",null,[s("a",{style:{color:"rgba(255, 0, 0, 0.438)"},href:"teams?team="+JSON.parse(g.match.data).info.alliances[0].teams[1].number},l(JSON.parse(g.match.data).info.alliances[0].teams[1].number),9,u)])]),s("div",h,[s("h1",null,l(JSON.parse(g.match.data).finalScore.allianceScores[0]),1)]),s("div",o,[s("h1",null,l(JSON.parse(g.match.data).finalScore.allianceScores[1]),1)]),s("div",d,[s("h3",null,[s("a",{style:{color:"rgba(67, 67, 253, 0.74)"},href:"teams?team="+JSON.parse(g.match.data).info.alliances[1].teams[0].number},l(JSON.parse(g.match.data).info.alliances[1].teams[0].number),9,f)]),s("h3",null,[s("a",{style:{color:"rgba(67, 67, 253, 0.74)"},href:"teams?team="+JSON.parse(g.match.data).info.alliances[1].teams[1].number},l(JSON.parse(g.match.data).info.alliances[1].teams[1].number),9,S)])])])]))}})}}}));
