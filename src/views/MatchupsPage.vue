<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Matchups</ion-title>
      </ion-toolbar>
    </ion-header>
    <!-- {{ $route.params.id }} -->

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Matchups</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="split">
        <div class="left">
          <div>
              <ion-checkbox v-model="showCompleted">
                <ion-label>
                  Show Completed
                </ion-label>
              </ion-checkbox>
            </div>
            <ion-item style="width: 100%; text-align: center;">
            <h1>Matchups for {{ team }}</h1>



            <ion-list style="width: 100%;">
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
            </ion-list>
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
const division = ref("");
const selectedMatch = ref({});
const showCompleted = ref(false);

const team = ref(getCookie("team"));
const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has('team')) {
  team.value = urlParams.get('team');
} else {
  team.value = getCookie("team");
}
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

  const responseMatches = await fetch("/data/matches?event=" + getCookie("event"));
  const dataMatches = await responseMatches.json();
  matches.value = dataMatches;
  console.log(matches.value);
 
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has('team')) {
    team.value = urlParams.get('team');
  } else {
    team.value = getCookie("team");
  }


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
