<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Rounds</ion-title>
      </ion-toolbar>
    </ion-header>
    <!-- {{ $route.params.id }} -->

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Rounds</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="split">
        <div class="left">
          <ion-list style="width: 350px;">
            <ion-select style="padding: 5px;" label="Division" interface="popover" placeholder="Unset" v-model="division" @ionChange="division = $event.target.value;">
              <ion-select-option value="1">Division 1</ion-select-option>
              <ion-select-option value="2">Division 2</ion-select-option>
              <ion-select-option value="3">Division 3</ion-select-option>
              <ion-select-option value="4">Division 4</ion-select-option>
            </ion-select>
            
            <div>
              <ion-item slot="header" style="cursor: pointer;" @click="selectMatch(match)" color="light" v-for="match in matches.filter(i => {
                  let parsedData = JSON.parse(i.data);
                  return parsedData.info.matchTuple.division == division;
              })">
                <MatchInfo :match="match"/>
              </ion-item>
            </div>
          </ion-list>

        </div>
        <div class="right">
          <ion-item style="width: 100%; text-align: center;">
            <h1>Match Data</h1>
            <h2>
              {{ selectedMatch.round.substring(0, 1) }}{{ selectedMatch.match }}
            </h2>
            <br>
            <hr>
            <div style="display: flex; flex-direction: row; justify-content: space-around; width: 100%;">
              
              <div style="width: 100%;"> 
                <h3> <a style="color: rgba(255, 0, 0, 0.438);" :href="'teams?team=' + JSON.parse(selectedMatch.data).info.alliances[0].teams[0].number">{{ JSON.parse(selectedMatch.data).info.alliances[0].teams[0].number }}</a> </h3> 
                <h3> <a style="color: rgba(255, 0, 0, 0.438);" :href="'teams?team=' + JSON.parse(selectedMatch.data).info.alliances[0].teams[1].number">{{ JSON.parse(selectedMatch.data).info.alliances[0].teams[1].number }}</a> </h3> 
                <hr>
                <div v-for="score in JSON.parse(selectedMatch.data).scoreData.alliances[0].scoreTypes">
                  <h3> <span style="font-size: 15px; margin-right: 15px;">{{ score.name.replaceAll("_", " ") }}</span> <span style="font-size: 20px; margin-right: 15px;">{{ score.val }}</span> </h3> 
                </div>
              </div>

              <div style="width: 100%;">                 
                <h3> <a style="color: rgba(67, 67, 253, 0.74);" :href="'teams?team=' + JSON.parse(selectedMatch.data).info.alliances[1].teams[0].number">{{ JSON.parse(selectedMatch.data).info.alliances[1].teams[0].number }}</a> </h3> 
                <h3> <a style="color: rgba(67, 67, 253, 0.74);" :href="'teams?team=' + JSON.parse(selectedMatch.data).info.alliances[1].teams[1].number">{{ JSON.parse(selectedMatch.data).info.alliances[1].teams[1].number }}</a> </h3> 
                <hr>
                <div v-for="score in JSON.parse(selectedMatch.data).scoreData.alliances[1].scoreTypes">
                  <h3> <span style="font-size: 15px; margin-right: 15px;">{{ score.name.replaceAll("_", " ") }}</span> <span style="font-size: 20px; margin-right: 15px;">{{ score.val }}</span> </h3> 
                </div>
              </div>
            
            </div>
          </ion-item>
        </div>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonButton, IonPage, IonTitle, IonToolbar, IonAccordionGroup, IonAccordion, IonItem, IonList, IonLabel, IonSelect, IonSelectOption, IonNote } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import MatchInfo from './MatchInfo.vue';

const matches = ref({});
const division = ref("");
const selectedMatch = ref({});

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
  getData();
  setInterval(getData, 5000);
});

async function getData() {
  const responseMatches = await fetch("/data/matches?event=" + getCookie("event"));
  const dataMatches = await responseMatches.json();
  matches.value = dataMatches;
  console.log(matches.value);
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
  grid-template-columns: 1fr 1fr; /* Two columns of equal width */
  gap: 10px; /* Optional: Adds space between items */
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

</style>
