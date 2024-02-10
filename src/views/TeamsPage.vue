<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Team Analysis</ion-title>
      </ion-toolbar>
    </ion-header>
    <!-- {{ $route.params.id }} -->

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Team Analysis</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="split">
        <div class="left">
          <div>
              <!-- <ion-checkbox v-model="showCompleted">
                <ion-label>
                  Show Completed
                </ion-label>
              </ion-checkbox> -->
            </div>
            <ion-item style="width: 100%; text-align: center;">
            <h1>{{ team }} Analysis</h1>

            <ion-item v-bind:key="ranking.teamnum" v-for="ranking in rankings.filter((e) => {
              return e.teamnum == team;
            })">
              <div style="margin: 0; padding: 0;">
                <ion-list class="grid-container" style="margin: 0; padding: 0;">
                  <ion-item style="margin: 0; padding: 0;" class="grid-item" v-for="dat in dataToShow">
                    {{ dat[1] }} {{ ranking[dat[0]] }}
                  </ion-item>
                </ion-list>
              </div>
              <a :href="'https://www.robotevents.com/teams/VRC/' + team" target="_blank">
                RobotEvents Link
              </a>
            </ion-item>

            <!-- <ion-list style="width: 100%;">
              <ion-item slot="header" color="light" v-for="match in matches.filter(i => {
                    let parsedData = JSON.parse(i.data);
                    let alliance1 = parsedData.info.alliances[0].teams[0].number;
                    let alliance2 = parsedData.info.alliances[0].teams[1].number;
                    let alliance3 = parsedData.info.alliances[1].teams[0].number;
                    let alliance4 = parsedData.info.alliances[1].teams[1].number;
                    return (team == alliance1 || team == alliance2 || team == alliance3 || team == alliance4) && (parsedData.info.state != 'SCORED' || showCompleted);
                })">
                <MatchInfo :match="match" @click="selectMatch(match)"/>
              </ion-item>
            </ion-list> -->
          </ion-item>
        </div>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonCheckbox, IonButton, IonPage, IonTitle, IonToolbar, IonAccordionGroup, IonAccordion, IonItem, IonList, IonLabel, IonSelect, IonSelectOption, IonNote } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import MatchInfo from './MatchInfo.vue';

const matches = ref({});
const selectedMatch = ref({});
const team = ref(getCookie("team"));
const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has('team')) {
  team.value = urlParams.get('team');
} else {
  team.value = getCookie("team");
}
const rankings = ref([]);
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


function selectMatch(match) {
  selectedMatch.value = match;
}

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
  console.log(rankings.value);
 
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
.left {
  display: flex;
  justify-content: left;
  width: 100%;
  margin-left: 15px;
  flex-direction: column;
}
.right {
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
  grid-template-columns: 1fr 1fr;
  gap: 0px;
  width: 100%;
}

.split {
  display: flex;
  flex-direction: row;
}

hr {
  width: 90%;
  height: 2px;
  background-color: #8c8c8c;
  margin-bottom: 0px;
}

h3 {
  font-size: 20px;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns of equal width */
  gap: 10px; /* Optional: Adds space between items */
}
</style>
