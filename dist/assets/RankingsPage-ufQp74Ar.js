import{_ as q,r as m,o as J,a as I,c as L,w as o,u as t,b as s,I as x,d as K,e as Q,f as G,g as n,h as R,i as f,j as D,n as Z,k as c,l as X,m as H,p as B,F as O,q as Y,s as ee,t as ae,v as U,x as le,y as T,z as te,A as oe,B as N,C as se,D as ne}from"./index-DJjK2pav.js";const ue=g=>(se("data-v-eaa3078f"),g=g(),ne(),g),ie={class:"selects-container"},re=ue(()=>f("h1",null," Rankings ",-1)),ce={class:"center"},ve={class:"ion-padding",slot:"content"},de={__name:"RankingsPage",setup(g){const V=m({}),l=m([]),P=m(""),_=m(""),k=m(""),y=m(""),z=[["division","Division"],["rank","Rank"],["wp","WP"],["ap","AP"],["sp","SP"],["wins","Win"],["losses","Losses"],["ties","Ties"],["winPct","Win Percentage"],["numMatches","Number of matches"],["totalPoints","Total Points"],["avgPoints","Average Points"],["highScore","High Score"],["totalElevation","Total Elevation"],["totalAuto","Total Auto"],["totalAutoWp","Total Auto WP"],["totalGoalTriballs","Total Goal Triballs"],["totalZoneTriballs","Total Zone Triballs"]];function C(i){let e=i+"=",p=decodeURIComponent(document.cookie).split(";");for(let r=0;r<p.length;r++){let d=p[r];for(;d.charAt(0)==" ";)d=d.substring(1);if(d.indexOf(e)==0)return d.substring(e.length,d.length)}return""}J(async()=>{const e=await(await fetch("/data/rankings?event="+C("event"))).json(),p=await(await fetch("/data/matches?event="+C("event"))).json();l.value=e,V.value=p,l.value=l.value.sort((r,d)=>r.rank-d.rank),l.value.forEach(r=>{let d=0,S=0,E=0,M=0,h=0;V.value.forEach(F=>{const v=JSON.parse(F.data),w=v.info.alliances[0].teams,W=v.info.alliances[1].teams;if(w[0].number==r.teamnum||w[1].number==r.teamnum&&v.info.state=="SCORED")try{console.log(),d+=v.scoreData.alliances[0].scoreTypes.find(u=>u.name==="auto").val,S+=v.scoreData.alliances[0].scoreTypes.find(u=>u.name==="auto_wp").val,E+=v.scoreData.alliances[0].scoreTypes.find(u=>u.name==="goal_triballs").val,M+=v.scoreData.alliances[0].scoreTypes.find(u=>u.name==="zone_triballs").val,w[0].number==r.teamnum&&(h+=v.scoreData.alliances[0].scoreTypes.find(u=>u.name==="elevation_tier_1").val),w[1].number==r.teamnum&&(h+=v.scoreData.alliances[0].scoreTypes.find(u=>u.name==="elevation_tier_2").val)}catch(u){}if(W[0].number==r.teamnum||W[1].number==r.teamnum&&v.info.state=="SCORED")try{console.log(),d+=v.scoreData.alliances[1].scoreTypes.find(u=>u.name==="auto").val,S+=v.scoreData.alliances[1].scoreTypes.find(u=>u.name==="auto_wp").val,E+=v.scoreData.alliances[1].scoreTypes.find(u=>u.name==="goal_triballs").val,M+=v.scoreData.alliances[1].scoreTypes.find(u=>u.name==="zone_triballs").val,W[0].number==r.teamnum&&(h+=v.scoreData.alliances[1].scoreTypes.find(u=>u.name==="elevation_tier_1").val),W[1].number==r.teamnum&&(h+=v.scoreData.alliances[1].scoreTypes.find(u=>u.name==="elevation_tier_2").val)}catch(u){}}),r.totalElevation=h,r.totalAuto=d,r.totalAutoWp=S,r.totalGoalTriballs=E,r.totalZoneTriballs=M})});let b=!0;function $(){b=!0,A()}function j(){b=!1,A()}function A(){console.log(_.value),console.log(P.value),console.log(k.value);const i=k.value=="HighToLow"?1:-1;if(b)switch(console.log("Sort stats"),P.value){case"WinLoss":l.value=l.value.sort((e,a)=>(a.wins-a.losses-(e.wins-e.losses))*i);break;case"WP":l.value=l.value.sort((e,a)=>(a.wp-e.wp)*i);break;case"AP":l.value=l.value.sort((e,a)=>(a.ap-e.ap)*i);break;case"SP":l.value=l.value.sort((e,a)=>(a.sp-e.sp)*i);break;case"HighPoints":l.value=l.value.sort((e,a)=>(a.highScore-e.highScore)*i);break;case"WinPoints":l.value=l.value.sort((e,a)=>(a.wp-e.wp)*i);break;default:l.value=l.value.sort((e,a)=>(e.rank-a.rank)*i)}else if(y.value=="Total")switch(_.value){case"ZoneTriball":l.value=l.value.sort((e,a)=>(a.totalZoneTriballs-e.totalZoneTriballs)*i);break;case"GoalTriball":l.value=l.value.sort((e,a)=>(a.totalGoalTriballs-e.totalGoalTriballs)*i);break;case"AutoWin":l.value=l.value.sort((e,a)=>(a.totalAuto-e.totalAuto)*i);break;case"AutoWP":l.value=l.value.sort((e,a)=>(a.totalAutoWp-e.totalAutoWp)*i);break;case"Elevation":l.value=l.value.sort((e,a)=>(a.totalElevation-e.totalElevation)*i);break;case"Points":l.value=l.value.sort((e,a)=>(a.totalPoints-e.totalPoints)*i);break}else switch(_.value){case"ZoneTriball":l.value=l.value.sort((e,a)=>(a.totalZoneTriballs/a.numMathces-e.totalZoneTriballs/e.numMathces)*i);break;case"GoalTriball":l.value=l.value.sort((e,a)=>(a.totalGoalTriballs/a.numMathces-e.totalGoalTriballs/e.numMathces)*i);break;case"AutoWin":l.value=l.value.sort((e,a)=>(a.totalAuto/a.numMathces-e.totalAuto/e.numMathces)*i);break;case"AutoWP":l.value=l.value.sort((e,a)=>(a.totalAutoWp/a.numMathces-e.totalAutoWp/e.numMathces)*i);break;case"Elevation":l.value=l.value.sort((e,a)=>(a.totalElevation/a.numMathces-e.totalElevation/e.numMathces)*i);break;case"Points":l.value=l.value.sort((e,a)=>(a.avgPoints-e.avgPoints)*i);break}}return(i,e)=>(I(),L(t(ee),null,{default:o(()=>[s(t(R),{translucent:!0},{default:o(()=>[s(t(x),null,{default:o(()=>[s(t(K),{slot:"start"},{default:o(()=>[s(t(Q),{color:"primary"})]),_:1}),s(t(G),null,{default:o(()=>[n("Rankings")]),_:1})]),_:1})]),_:1}),s(t(Y),{fullscreen:!0},{default:o(()=>[s(t(R),{collapse:"condense"},{default:o(()=>[s(t(x),null,{default:o(()=>[s(t(G),{size:"large"},{default:o(()=>[n("Rankings")]),_:1})]),_:1})]),_:1}),f("div",ie,[s(t(D),{label:"Stats Sort By",class:Z({"italic-text":t(b)}),interface:"popover",placeholder:"Default",onIonChange:e[0]||(e[0]=a=>$()),modelValue:P.value,"onUpdate:modelValue":e[1]||(e[1]=a=>P.value=a)},{default:o(()=>[s(t(c),{value:"Default"},{default:o(()=>[n("Default")]),_:1}),s(t(c),{value:"Rank"},{default:o(()=>[n("Rank")]),_:1}),s(t(c),{value:"WinLoss"},{default:o(()=>[n("Win Loss Ratio")]),_:1}),s(t(c),{value:"WP"},{default:o(()=>[n("Total Win Points")]),_:1}),s(t(c),{value:"AP"},{default:o(()=>[n("Auto Points")]),_:1}),s(t(c),{value:"SP"},{default:o(()=>[n("Strength Points")]),_:1}),s(t(c),{value:"HighPoints"},{default:o(()=>[n("High Score Points")]),_:1}),s(t(c),{value:"WinPoints"},{default:o(()=>[n("Win Points")]),_:1})]),_:1},8,["class","modelValue"]),s(t(D),{label:"Scores Sort By",class:Z({"italic-text":!t(b)}),interface:"popover",placeholder:"Default",onIonChange:e[2]||(e[2]=a=>j()),modelValue:_.value,"onUpdate:modelValue":e[3]||(e[3]=a=>_.value=a)},{default:o(()=>[s(t(c),{value:"Default"},{default:o(()=>[n("Default")]),_:1}),s(t(c),{value:"ZoneTriball"},{default:o(()=>[n("Zone Triballs")]),_:1}),s(t(c),{value:"GoalTriball"},{default:o(()=>[n("Goal Triballs")]),_:1}),s(t(c),{value:"AutoWin"},{default:o(()=>[n("Auto Wins")]),_:1}),s(t(c),{value:"AutoWP"},{default:o(()=>[n("Auto Win Points")]),_:1}),s(t(c),{value:"Elevation"},{default:o(()=>[n("Elevation")]),_:1}),s(t(c),{value:"Points"},{default:o(()=>[n("Points")]),_:1})]),_:1},8,["class","modelValue"]),s(t(D),{label:"Direction",interface:"popover",placeholder:"Unset",value:"LowToHigh",onIonChange:e[4]||(e[4]=a=>A()),modelValue:k.value,"onUpdate:modelValue":e[5]||(e[5]=a=>k.value=a)},{default:o(()=>[s(t(c),{value:"HighToLow"},{default:o(()=>[n("High To Low")]),_:1}),s(t(c),{value:"LowToHigh"},{default:o(()=>[n("Low To High")]),_:1})]),_:1},8,["modelValue"]),s(t(D),{label:"Type",interface:"popover",placeholder:"Unset",value:"Total",onIonChange:e[6]||(e[6]=a=>A()),modelValue:y.value,"onUpdate:modelValue":e[7]||(e[7]=a=>y.value=a)},{default:o(()=>[s(t(c),{value:"Total"},{default:o(()=>[n("Total")]),_:1}),s(t(c),{value:"Average"},{default:o(()=>[n("Average")]),_:1})]),_:1},8,["modelValue"])]),re,f("div",ce,[s(t(X),null,{default:o(()=>[f("div",null,[(I(!0),H(O,null,B(l.value,a=>(I(),L(t(ae),{value:l.value.indexOf(a)},{default:o(()=>[s(t(U),{slot:"header",color:"light"},{default:o(()=>[s(t(le),{style:{display:"flex","flex-direction":"row"}},{default:o(()=>[f("h2",null,T(l.value.indexOf(a)+1),1),f("div",null,[f("div",null,[n(T(a.teamnum)+" ",1),s(t(te),null,{default:o(()=>[n(T(a.division),1)]),_:2},1024)]),f("div",null," Division Rank: "+T(a.rank),1)])]),_:2},1024)]),_:2},1024),f("div",ve,[f("div",null,[s(t(oe),{class:"grid-container"},{default:o(()=>[(I(),H(O,null,B(z,p=>s(t(U),{class:"grid-item"},{default:o(()=>[n(T(p[1])+" "+T(a[p[0]]),1)]),_:2},1024)),64)),s(t(N),null,{default:o(()=>[n("Team Matchups")]),_:1}),s(t(N),null,{default:o(()=>[n("Team Predictions")]),_:1})]),_:2},1024)])])]),_:2},1032,["value"]))),256))])]),_:1})])]),_:1})]),_:1}))}},pe=q(de,[["__scopeId","data-v-eaa3078f"]]);export{pe as default};
