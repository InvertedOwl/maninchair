System.register(["./index-legacy-QH2Xk9P2.js"],(function(a,e){"use strict";var l,t,o,n,s,i,u,r,c,v,d,f,m,b,h,p,g,_,T,P,k,A,y,w,W,x,D,S,E,R,M,V,G;return{setters:[a=>{l=a._,t=a.r,o=a.o,n=a.a,s=a.c,i=a.w,u=a.u,r=a.b,c=a.I,v=a.d,d=a.e,f=a.f,m=a.g,b=a.h,h=a.i,p=a.j,g=a.n,_=a.k,T=a.l,P=a.m,k=a.p,A=a.F,y=a.q,w=a.s,W=a.t,x=a.v,D=a.x,S=a.y,E=a.z,R=a.A,M=a.B,V=a.C,G=a.D}],execute:function(){var e=document.createElement("style");e.textContent="#container[data-v-e13db38b]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container strong[data-v-e13db38b]{font-size:20px;line-height:26px}#container p[data-v-e13db38b]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container a[data-v-e13db38b]{text-decoration:none}.selects-container *[data-v-e13db38b]{margin-right:20px;margin-left:20px;width:300px}h1[data-v-e13db38b]{width:100%;text-align:center}.italic-text[data-v-e13db38b]{font-style:italic;font-weight:600}.center[data-v-e13db38b]{display:flex;justify-content:center;width:100%}ion-accordion-group[data-v-e13db38b]{width:95%}h2[data-v-e13db38b]{font-size:30px;margin-right:15px}.grid-container[data-v-e13db38b]{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n",document.head.appendChild(e);const H={class:"selects-container"},L=(a=>(V("data-v-e13db38b"),a=a(),G(),a))((()=>h("h1",null," Rankings ",-1))),Z={class:"center"},C={class:"ion-padding",slot:"content"};a("default",l({__name:"RankingsPage",setup(a){const e=t({}),l=t([]),V=t("Rank"),G=t(""),I=t("LowToHigh"),z=t(""),U=[["division","Division"],["rank","Rank"],["wp","WP"],["ap","AP"],["sp","SP"],["wins","Win"],["losses","Losses"],["ties","Ties"],["winPct","Win Percentage"],["numMatches","Number of matches"],["totalPoints","Total Points"],["avgPoints","Average Points"],["highScore","High Score"],["totalElevation","Total Elevation"],["totalAuto","Total Auto"],["totalAutoWp","Total Auto WP"],["totalGoalTriballs","Total Goal Triballs"],["totalZoneTriballs","Total Zone Triballs"]];function O(a){let e=a+"=",l=decodeURIComponent(document.cookie).split(";");for(let t=0;t<l.length;t++){let a=l[t];for(;" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(e))return a.substring(e.length,a.length)}return""}async function j(){const a=await fetch("/data/rankings?event="+O("event")),t=await a.json(),o=await fetch("/data/matches?event="+O("event")),n=await o.json();l.value=t,e.value=n,l.value=l.value.sort(((a,e)=>a.rank-e.rank)),l.value.forEach((a=>{let l=0,t=0,o=0,n=0,s=0;e.value.forEach((e=>{const i=JSON.parse(e.data),u=i.info.alliances[0].teams,r=i.info.alliances[1].teams;if(u[0].number==a.teamnum||u[1].number==a.teamnum&&"SCORED"==i.info.state)try{console.log(),l+=i.scoreData.alliances[0].scoreTypes.find((a=>"auto"===a.name)).val,t+=i.scoreData.alliances[0].scoreTypes.find((a=>"auto_wp"===a.name)).val,o+=i.scoreData.alliances[0].scoreTypes.find((a=>"goal_triballs"===a.name)).val,n+=i.scoreData.alliances[0].scoreTypes.find((a=>"zone_triballs"===a.name)).val,u[0].number==a.teamnum&&(s+=i.scoreData.alliances[0].scoreTypes.find((a=>"elevation_tier_1"===a.name)).val),u[1].number==a.teamnum&&(s+=i.scoreData.alliances[0].scoreTypes.find((a=>"elevation_tier_2"===a.name)).val)}catch(c){}if(r[0].number==a.teamnum||r[1].number==a.teamnum&&"SCORED"==i.info.state)try{console.log(),l+=i.scoreData.alliances[1].scoreTypes.find((a=>"auto"===a.name)).val,t+=i.scoreData.alliances[1].scoreTypes.find((a=>"auto_wp"===a.name)).val,o+=i.scoreData.alliances[1].scoreTypes.find((a=>"goal_triballs"===a.name)).val,n+=i.scoreData.alliances[1].scoreTypes.find((a=>"zone_triballs"===a.name)).val,r[0].number==a.teamnum&&(s+=i.scoreData.alliances[1].scoreTypes.find((a=>"elevation_tier_1"===a.name)).val),r[1].number==a.teamnum&&(s+=i.scoreData.alliances[1].scoreTypes.find((a=>"elevation_tier_2"===a.name)).val)}catch(c){}})),a.totalElevation=s,a.totalAuto=l,a.totalAutoWp=t,a.totalGoalTriballs=o,a.totalZoneTriballs=n})),N()}o((async()=>{j(),setInterval(j,5e3)}));let B=!0;function N(){console.log(G.value),console.log(V.value),console.log(I.value);const a="HighToLow"==I.value?1:-1;if(B)switch(console.log("Sort stats"),V.value){case"WinLoss":l.value=l.value.sort(((e,l)=>(l.wins-l.losses-(e.wins-e.losses))*a));break;case"WP":case"WinPoints":l.value=l.value.sort(((e,l)=>(l.wp-e.wp)*a));break;case"AP":l.value=l.value.sort(((e,l)=>(l.ap-e.ap)*a));break;case"SP":l.value=l.value.sort(((e,l)=>(l.sp-e.sp)*a));break;case"HighPoints":l.value=l.value.sort(((e,l)=>(l.highScore-e.highScore)*a));break;default:l.value=l.value.sort(((e,l)=>(l.rank-e.rank)*a))}else if("Total"==z.value)switch(G.value){case"ZoneTriball":l.value=l.value.sort(((e,l)=>(l.totalZoneTriballs-e.totalZoneTriballs)*a));break;case"GoalTriball":l.value=l.value.sort(((e,l)=>(l.totalGoalTriballs-e.totalGoalTriballs)*a));break;case"AutoWin":l.value=l.value.sort(((e,l)=>(l.totalAuto-e.totalAuto)*a));break;case"AutoWP":l.value=l.value.sort(((e,l)=>(l.totalAutoWp-e.totalAutoWp)*a));break;case"Elevation":l.value=l.value.sort(((e,l)=>(l.totalElevation-e.totalElevation)*a));break;case"Points":l.value=l.value.sort(((e,l)=>(l.totalPoints-e.totalPoints)*a))}else switch(G.value){case"ZoneTriball":l.value=l.value.sort(((e,l)=>(l.totalZoneTriballs/l.numMathces-e.totalZoneTriballs/e.numMathces)*a));break;case"GoalTriball":l.value=l.value.sort(((e,l)=>(l.totalGoalTriballs/l.numMathces-e.totalGoalTriballs/e.numMathces)*a));break;case"AutoWin":l.value=l.value.sort(((e,l)=>(l.totalAuto/l.numMathces-e.totalAuto/e.numMathces)*a));break;case"AutoWP":l.value=l.value.sort(((e,l)=>(l.totalAutoWp/l.numMathces-e.totalAutoWp/e.numMathces)*a));break;case"Elevation":l.value=l.value.sort(((e,l)=>(l.totalElevation/l.numMathces-e.totalElevation/e.numMathces)*a));break;case"Points":l.value=l.value.sort(((e,l)=>(l.avgPoints-e.avgPoints)*a))}}return(a,e)=>(n(),s(u(w),null,{default:i((()=>[r(u(b),{translucent:!0},{default:i((()=>[r(u(c),null,{default:i((()=>[r(u(v),{slot:"start"},{default:i((()=>[r(u(d),{color:"primary"})])),_:1}),r(u(f),null,{default:i((()=>[m("Rankings")])),_:1})])),_:1})])),_:1}),r(u(y),{fullscreen:!0},{default:i((()=>[r(u(b),{collapse:"condense"},{default:i((()=>[r(u(c),null,{default:i((()=>[r(u(f),{size:"large"},{default:i((()=>[m("Rankings")])),_:1})])),_:1})])),_:1}),h("div",H,[r(u(p),{label:"Stats Sort By",class:g({"italic-text":u(B)}),interface:"popover",placeholder:"Default",onIonChange:e[0]||(e[0]=a=>(B=!0,void N())),modelValue:V.value,"onUpdate:modelValue":e[1]||(e[1]=a=>V.value=a)},{default:i((()=>[r(u(_),{value:"Default"},{default:i((()=>[m("Default")])),_:1}),r(u(_),{value:"Rank"},{default:i((()=>[m("Rank")])),_:1}),r(u(_),{value:"WinLoss"},{default:i((()=>[m("Win Loss Ratio")])),_:1}),r(u(_),{value:"WP"},{default:i((()=>[m("Total Win Points")])),_:1}),r(u(_),{value:"AP"},{default:i((()=>[m("Auto Points")])),_:1}),r(u(_),{value:"SP"},{default:i((()=>[m("Strength Points")])),_:1}),r(u(_),{value:"HighPoints"},{default:i((()=>[m("High Score Points")])),_:1}),r(u(_),{value:"WinPoints"},{default:i((()=>[m("Win Points")])),_:1})])),_:1},8,["class","modelValue"]),r(u(p),{label:"Scores Sort By",class:g({"italic-text":!u(B)}),interface:"popover",placeholder:"Default",onIonChange:e[2]||(e[2]=a=>(B=!1,void N())),modelValue:G.value,"onUpdate:modelValue":e[3]||(e[3]=a=>G.value=a)},{default:i((()=>[r(u(_),{value:"Default"},{default:i((()=>[m("Default")])),_:1}),r(u(_),{value:"ZoneTriball"},{default:i((()=>[m("Zone Triballs")])),_:1}),r(u(_),{value:"GoalTriball"},{default:i((()=>[m("Goal Triballs")])),_:1}),r(u(_),{value:"AutoWin"},{default:i((()=>[m("Auto Wins")])),_:1}),r(u(_),{value:"AutoWP"},{default:i((()=>[m("Auto Win Points")])),_:1}),r(u(_),{value:"Elevation"},{default:i((()=>[m("Elevation")])),_:1}),r(u(_),{value:"Points"},{default:i((()=>[m("Points")])),_:1})])),_:1},8,["class","modelValue"]),r(u(p),{label:"Direction",interface:"popover",placeholder:"Unset",value:"LowToHigh",onIonChange:e[4]||(e[4]=a=>N()),modelValue:I.value,"onUpdate:modelValue":e[5]||(e[5]=a=>I.value=a)},{default:i((()=>[r(u(_),{value:"HighToLow"},{default:i((()=>[m("High To Low")])),_:1}),r(u(_),{value:"LowToHigh"},{default:i((()=>[m("Low To High")])),_:1})])),_:1},8,["modelValue"]),r(u(p),{label:"Type",interface:"popover",placeholder:"Unset",value:"Total",onIonChange:e[6]||(e[6]=a=>N()),modelValue:z.value,"onUpdate:modelValue":e[7]||(e[7]=a=>z.value=a)},{default:i((()=>[r(u(_),{value:"Total"},{default:i((()=>[m("Total")])),_:1}),r(u(_),{value:"Average"},{default:i((()=>[m("Average")])),_:1})])),_:1},8,["modelValue"])]),L,h("div",Z,[r(u(T),null,{default:i((()=>[h("div",null,[(n(!0),P(A,null,k(l.value,(a=>(n(),s(u(W),{value:l.value.indexOf(a)},{default:i((()=>[r(u(x),{slot:"header",color:"light"},{default:i((()=>[r(u(D),{style:{display:"flex","flex-direction":"row"}},{default:i((()=>[h("h2",null,S(l.value.indexOf(a)+1),1),h("div",null,[h("div",null,[m(S(a.teamnum)+" ",1),r(u(E),null,{default:i((()=>[m(S(a.division),1)])),_:2},1024)]),h("div",null," Division Rank: "+S(a.rank),1)])])),_:2},1024)])),_:2},1024),h("div",C,[h("div",null,[r(u(R),{class:"grid-container"},{default:i((()=>[(n(),P(A,null,k(U,(e=>r(u(x),{class:"grid-item"},{default:i((()=>[m(S(e[1])+" "+S(a[e[0]]),1)])),_:2},1024))),64)),r(u(M),{href:"teams?team="+a.teamnum},{default:i((()=>[m("Team Analysis")])),_:2},1032,["href"]),r(u(M),{href:"matchups?team="+a.teamnum},{default:i((()=>[m("Team Matchups")])),_:2},1032,["href"])])),_:2},1024)])])])),_:2},1032,["value"])))),256))])])),_:1})])])),_:1})])),_:1}))}},[["__scopeId","data-v-e13db38b"]]))}}}));
