import{_ as O,r as g,o as V,a as T,c as E,w as o,u as s,b as n,I as x,d as Z,e as z,f as R,g as I,h as W,i as c,v as A,y as P,m as B,p as M,F as L,q as j,s as F,A as H,C as U,D as q}from"./index-NtGZGETo.js";/* empty css                                                  */const J=f=>(U("data-v-7180a48e"),f=f(),q(),f),K={class:"split"},Q={class:"left"},X=J(()=>c("div",null,null,-1)),Y={style:{margin:"0",padding:"0"}},$=["href"],ee={__name:"TeamsPage",setup(f){const k=g({});g({});const u=g(p("team")),S=new URLSearchParams(window.location.search);S.has("team")?u.value=S.get("team"):u.value=p("team");const _=g([]),N=[["division","Division"],["rank","Rank"],["wp","WP"],["ap","AP"],["sp","SP"],["wins","Win"],["losses","Losses"],["ties","Ties"],["winPct","Win Percentage"],["numMatches","Number of matches"],["totalPoints","Total Points"],["avgPoints","Average Points"],["highScore","High Score"],["totalElevation","Total Elevation"],["totalAuto","Total Auto"],["totalAutoWp","Total Auto WP"],["totalGoalTriballs","Total Goal Triballs"],["totalZoneTriballs","Total Zone Triballs"]];function p(b){let d=b+"=",i=decodeURIComponent(document.cookie).split(";");for(let a=0;a<i.length;a++){let l=i[a];for(;l.charAt(0)==" ";)l=l.substring(1);if(l.indexOf(d)==0)return l.substring(d.length,l.length)}return""}V(async()=>{C(),setInterval(C,5e3)});async function C(){const d=await(await fetch("/data/rankings?event="+p("event"))).json(),i=await(await fetch("/data/matches?event="+p("event"))).json();_.value=d,k.value=i,console.log(_.value),_.value.forEach(a=>{let l=0,y=0,w=0,D=0,m=0;k.value.forEach(G=>{const t=JSON.parse(G.data),v=t.info.alliances[0].teams,h=t.info.alliances[1].teams;if(v[0].number==a.teamnum||v[1].number==a.teamnum&&t.info.state=="SCORED")try{console.log(),l+=t.scoreData.alliances[0].scoreTypes.find(e=>e.name==="auto").val,y+=t.scoreData.alliances[0].scoreTypes.find(e=>e.name==="auto_wp").val,w+=t.scoreData.alliances[0].scoreTypes.find(e=>e.name==="goal_triballs").val,D+=t.scoreData.alliances[0].scoreTypes.find(e=>e.name==="zone_triballs").val,v[0].number==a.teamnum&&(m+=t.scoreData.alliances[0].scoreTypes.find(e=>e.name==="elevation_tier_1").val),v[1].number==a.teamnum&&(m+=t.scoreData.alliances[0].scoreTypes.find(e=>e.name==="elevation_tier_2").val)}catch(e){}if(h[0].number==a.teamnum||h[1].number==a.teamnum&&t.info.state=="SCORED")try{console.log(),l+=t.scoreData.alliances[1].scoreTypes.find(e=>e.name==="auto").val,y+=t.scoreData.alliances[1].scoreTypes.find(e=>e.name==="auto_wp").val,w+=t.scoreData.alliances[1].scoreTypes.find(e=>e.name==="goal_triballs").val,D+=t.scoreData.alliances[1].scoreTypes.find(e=>e.name==="zone_triballs").val,h[0].number==a.teamnum&&(m+=t.scoreData.alliances[1].scoreTypes.find(e=>e.name==="elevation_tier_1").val),h[1].number==a.teamnum&&(m+=t.scoreData.alliances[1].scoreTypes.find(e=>e.name==="elevation_tier_2").val)}catch(e){}}),a.totalElevation=m,a.totalAuto=l,a.totalAutoWp=y,a.totalGoalTriballs=w,a.totalZoneTriballs=D})}return(b,d)=>(T(),E(s(F),null,{default:o(()=>[n(s(W),{translucent:!0},{default:o(()=>[n(s(x),null,{default:o(()=>[n(s(Z),{slot:"start"},{default:o(()=>[n(s(z),{color:"primary"})]),_:1}),n(s(R),null,{default:o(()=>[I("Team Analysis")]),_:1})]),_:1})]),_:1}),n(s(j),{fullscreen:!0},{default:o(()=>[n(s(W),{collapse:"condense"},{default:o(()=>[n(s(x),null,{default:o(()=>[n(s(R),{size:"large"},{default:o(()=>[I("Team Analysis")]),_:1})]),_:1})]),_:1}),c("div",K,[c("div",Q,[X,n(s(A),{style:{width:"100%","text-align":"center"}},{default:o(()=>[c("h1",null,P(u.value)+" Analysis",1),(T(!0),B(L,null,M(_.value.filter(r=>r.teamnum==u.value),r=>(T(),E(s(A),{key:r.teamnum},{default:o(()=>[c("div",Y,[n(s(H),{class:"grid-container",style:{margin:"0",padding:"0"}},{default:o(()=>[(T(),B(L,null,M(N,i=>n(s(A),{style:{margin:"0",padding:"0"},class:"grid-item"},{default:o(()=>[I(P(i[1])+" "+P(r[i[0]]),1)]),_:2},1024)),64))]),_:2},1024)]),c("a",{href:"https://www.robotevents.com/teams/VRC/"+u.value,target:"_blank"}," RobotEvents Link ",8,$)]),_:2},1024))),128))]),_:1})])])]),_:1})]),_:1}))}},se=O(ee,[["__scopeId","data-v-7180a48e"]]);export{se as default};
