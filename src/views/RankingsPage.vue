<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Rankings</ion-title>
      </ion-toolbar>
    </ion-header>
    <!-- {{ $route.params.id }} -->

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Rankings</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="selects-container">
        <ion-select label="Stats Sort By" v-bind:class="{ 'italic-text': statsActive }" interface="popover" placeholder="Default" @ionChange="stats()" v-model="sortstats">
          <ion-select-option value="Default">Default</ion-select-option>
          <ion-select-option value="Rank">Rank</ion-select-option>
          <ion-select-option value="WinLoss">Win Loss Ratio</ion-select-option>
          <ion-select-option value="WP">Total Win Points</ion-select-option>
          <ion-select-option value="AP">Auto Points</ion-select-option>
          <ion-select-option value="SP">Strength Points</ion-select-option>
          <ion-select-option value="HighPoints">High Score Points</ion-select-option>
        </ion-select>
        <ion-select label="Scores Sort By" v-bind:class="{ 'italic-text': !statsActive }" interface="popover" placeholder="Default" @ionChange="scores()" v-model="sortscores">
          <ion-select-option value="Default">Default</ion-select-option>
          <ion-select-option value="ZoneTriball">Zone Triballs</ion-select-option>
          <ion-select-option value="GoalTriball">Goal Triballs</ion-select-option>
          <ion-select-option value="AutoWin">Auto Wins</ion-select-option>
          <ion-select-option value="AutoWP">Auto Win Points</ion-select-option>
          <ion-select-option value="Elevation">Elevation</ion-select-option>
          <ion-select-option value="AveragePoints">Points</ion-select-option>
        </ion-select>
        <ion-select label="Direction" interface="popover" placeholder="Default" value="LowToHigh" @ionChange="updateList()" v-model="sortdirection">
          <ion-select-option value="HighToLow">High To Low</ion-select-option>
          <ion-select-option value="LowToHigh">Low To High</ion-select-option>
        </ion-select>
        <ion-select label="Type" interface="popover" placeholder="Default" value="Total" @ionChange="updateList()" v-model="sorttype">
          <ion-select-option value="Total">Total</ion-select-option>
          <ion-select-option value="Average">Average</ion-select-option>
        </ion-select>
        <!-- <ion-select label="Filter" multiple="true" interface="alert" placeholder="No Filter">
          <ion-select-option value="A">Option 1</ion-select-option>
          <ion-select-option value="option2">Option 2</ion-select-option>
          <ion-select-option value="option3">Option 3</ion-select-option>
        </ion-select> -->
      </div>      
      <h1>
        Rankings
      </h1>

      <div class="center">
        <ion-accordion-group>
          <div>
            <ion-accordion :value="rankings.indexOf(ranking)" v-for="ranking in rankings">
              <ion-item slot="header" color="light">
                
                <ion-label style="display: flex; flex-direction: row;">
                  <h2>{{ rankings.indexOf(ranking) + 1 }}</h2>
                  <div>
                    <div>
                      {{ ranking.teamnum }} <ion-note>{{ ranking.division }}</ion-note>
                    </div>
                    <div>
                      Division Rank: {{ ranking.rank }}
                    </div>
                  </div>
                </ion-label>
              </ion-item>
              <div class="ion-padding" slot="content">
                <div>
                  <ion-list class="grid-container">
                    <ion-item class="grid-item" v-for="dat in dataToShow">
                      {{ dat[1] }} {{ ranking[dat[0]] }}
                    </ion-item>
                  </ion-list>
                </div>
              </div>
            </ion-accordion>
          </div>


        </ion-accordion-group>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonAccordionGroup, IonAccordion, IonItem, IonList, IonLabel, IonSelect, IonSelectOption, IonNote } from '@ionic/vue';
import { ref, onMounted } from 'vue';

const matches = ref({});
const rankings = ref([]);
const sortstats = ref("");
const sortscores = ref("");
const sortdirection = ref("");
const sorttype = ref("");

const dataToShow = [
["division", "Division"],
["rank", "Rank"],
["wp", "WP"],
["ap", "AP"],
["sp", "SP"],
["wins", "Win"],
["losses", "Losses"],
["ties", "Ties"],
["winPct", "Win Percentage"],
["numMatches", "Number of matches"],
["totalPoints", "Total Points"],
["avgPoints", "Average Points"],
["highScore", "High Score"],
["totalElevation", "Total Elevation"],
["totalAuto", "Total Auto"],
["totalAutoWp", "Total Auto WP"],
["totalGoalTriballs", "Total Goal Triballs"],
["totalZoneTriballs", "Total Zone Triballs"],
]

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

onMounted(async () => {

  const response = await fetch("/data/rankings?event=" + getCookie("event"));
  const data = await response.json();
  const responseMatches = await fetch("/data/matches?event=" + getCookie("event"));
  const dataMatches = await responseMatches.json();
  rankings.value = data;
  matches.value = dataMatches;

  rankings.value = rankings.value.sort((a, b) => a.rank-b.rank);


  rankings.value.forEach(team => {
    let totalAuto = 0;
    let totalAutoWp = 0;
    let totalGoalTriballs = 0;
    let totalZoneTriballs = 0;
    let totalElevation = 0;
    
    matches.value.forEach(match => {
      const matchData = JSON.parse(match.data);
      // Alliance 0
      const teams0 = matchData.info.alliances[0].teams;
      const teams1 = matchData.info.alliances[1].teams;

      if (teams0[0].number == team.teamnum || teams0[1].number == team.teamnum && matchData.info.state == "SCORED") {
        try {
          console.log();
          totalAuto += matchData.scoreData.alliances[0].scoreTypes.find(item => item.name === "auto").val;
          totalAutoWp += matchData.scoreData.alliances[0].scoreTypes.find(item => item.name === "auto_wp").val;
          totalGoalTriballs += matchData.scoreData.alliances[0].scoreTypes.find(item => item.name === "goal_triballs").val;
          totalZoneTriballs += matchData.scoreData.alliances[0].scoreTypes.find(item => item.name === "zone_triballs").val;
          if (teams0[0].number == team.teamnum) {
            totalElevation += matchData.scoreData.alliances[0].scoreTypes.find(item => item.name === "elevation_tier_1").val;
          }
          if (teams0[1].number == team.teamnum) {
            totalElevation += matchData.scoreData.alliances[0].scoreTypes.find(item => item.name === "elevation_tier_2").val;
          } 
        } catch (e) {
          // ignored
        }

     
      }
      if (teams1[0].number == team.teamnum || teams1[1].number == team.teamnum && matchData.info.state == "SCORED") {
        try {
          console.log();
          totalAuto += matchData.scoreData.alliances[1].scoreTypes.find(item => item.name === "auto").val;
          totalAutoWp += matchData.scoreData.alliances[1].scoreTypes.find(item => item.name === "auto_wp").val;
          totalGoalTriballs += matchData.scoreData.alliances[1].scoreTypes.find(item => item.name === "goal_triballs").val;
          totalZoneTriballs += matchData.scoreData.alliances[1].scoreTypes.find(item => item.name === "zone_triballs").val;
          if (teams1[0].number == team.teamnum) {
            totalElevation += matchData.scoreData.alliances[1].scoreTypes.find(item => item.name === "elevation_tier_1").val;
          }
          if (teams1[1].number == team.teamnum) {
            totalElevation += matchData.scoreData.alliances[1].scoreTypes.find(item => item.name === "elevation_tier_2").val;
          }
        } catch (e) {
          // ignored
        }
      }
    });
    team["totalElevation"] = totalElevation;
    team["totalAuto"] = totalAuto;
    team["totalAutoWp"] = totalAutoWp;
    team["totalGoalTriballs"] = totalGoalTriballs;
    team["totalZoneTriballs"] = totalZoneTriballs;
  });
 
});

let statsActive = true;

function stats() {
  statsActive = true;
  updateList();
}
function scores() {
  statsActive = false;
  updateList();
}

function updateList() {
  console.log(sortscores.value);
  console.log(sortstats.value);
  console.log(sortdirection.value);
  const multiple = (sortdirection.value == "HighToLow")?1:-1;

  if (!statsActive) {
    if (sorttype.value == "Total") {
      switch (sortscores.value) {
        case "ZoneTriball":
          rankings.value = rankings.value.sort((a, b) => (b.totalZoneTriballs-a.totalZoneTriballs)*multiple);
          break;
        case "GoalTriball":
          rankings.value = rankings.value.sort((a, b) => (b.totalGoalTriballs-a.totalGoalTriballs)*multiple);
          break;
        case "AutoWin":
          rankings.value = rankings.value.sort((a, b) => (b.totalAuto-a.totalAuto)*multiple);
          break;
        case "AutoWP":
          rankings.value = rankings.value.sort((a, b) => (b.totalAutoWp-a.totalAutoWp)*multiple);
          break;
        case "Elevation":
          rankings.value = rankings.value.sort((a, b) => (b.totalElevation-a.totalElevation)*multiple);
          break;
        case "Points":
          rankings.value = rankings.value.sort((a, b) => (b.totalPoints-a.totalPoints)*multiple);
          break;

      }
    } else {
      switch (sortscores.value) {
        case "ZoneTriball":
          rankings.value = rankings.value.sort((a, b) => ((b.totalZoneTriballs/b.numMathces)-(a.totalZoneTriballs)/a.numMathces)*multiple);
          break;
        case "GoalTriball":
          rankings.value = rankings.value.sort((a, b) => ((b.totalGoalTriballs/b.numMathces)-(a.totalGoalTriballs/a.numMathces))*multiple);
          break;
        case "AutoWin":
          rankings.value = rankings.value.sort((a, b) => ((b.totalAuto/b.numMathces)-(a.totalAuto/a.numMathces))*multiple);
          break;
        case "AutoWP":
          rankings.value = rankings.value.sort((a, b) => ((b.totalAutoWp/b.numMathces)-(a.totalAutoWp/a.numMathces))*multiple);
          break;
        case "Elevation":
          rankings.value = rankings.value.sort((a, b) => ((b.totalElevation/b.numMathces)-(a.totalElevation/a.numMathces))*multiple);
          break;
        case "Points":
          rankings.value = rankings.value.sort((a, b) => (b.avgPoints-a.avgPoints)*multiple);
          break;

      }
    }


  } else {
    console.log("Sort stats");
    switch (sortstats.value) {
      case "WinLoss": 
        rankings.value = rankings.value.sort((a, b) => ((b.wins-b.losses)-(a.wins-a.losses))*multiple);
        break;
      case "WP": 
      rankings.value = rankings.value.sort((a, b) => (b.wp-a.wp)*multiple);
        break;
      case "AP": 
      rankings.value = rankings.value.sort((a, b) => (b.ap-a.ap)*multiple);
        break;
      case "SP": 
      rankings.value = rankings.value.sort((a, b) => (b.sp-a.sp)*multiple);
        break;
      case "HighPoints": 
        rankings.value = rankings.value.sort((a, b) => (b.highScore-a.highScore)*multiple);
        break;

      default:
        rankings.value = rankings.value.sort((a, b) => (a.rank-b.rank)*multiple);

    }
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}


.selects-container * {
  margin-right: 20px;
  margin-left: 20px;
  width: 300px;
}
h1 {
  width: 100%;
  text-align: center;
}

.italic-text {
  font-style: italic;
  font-weight: 600;
}
.center {
  display: flex;
  justify-content: center;
  width: 100%;
}
ion-accordion-group {
  width: 95%;
}
h2 {
  font-size: 30px;
  margin-right: 15px;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns of equal width */
  gap: 10px; /* Optional: Adds space between items */
}
</style>
