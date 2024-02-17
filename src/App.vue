<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="inbox-list">
            <div style="display: flex; flex-direction: column; width: 100%; align-items: center;">
              <h1>Man In Chair</h1>
              <h5 class="version">V0.0.4p</h5>
              <ion-input placeholder="Event ID" style="font-style: italic; text-align:center; text-decoration: underline;" v-model="event" @ionChange="save()"></ion-input>
              <ion-input placeholder="Team" style="font-style: italic; text-align:center; text-decoration: underline;" v-model="team" @ionChange="save()"></ion-input>
            </div>

          

            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPages" :key="i">
              <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none" :detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                <ion-icon aria-hidden="true" slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
            <hr>
            <h1>
              Upcoming Matches
            </h1>
            <ion-select label="Division" interface="popover" placeholder="Unset" v-model="division" @ionChange="division = $event.target.value; updateList()">
              <ion-select-option value="1">Division 1</ion-select-option>
              <ion-select-option value="2">Division 2</ion-select-option>
              <ion-select-option value="3">Division 3</ion-select-option>
              <ion-select-option value="4">Division 4</ion-select-option>
            </ion-select>
            <!-- {{ division }} -->

            <ion-item v-for="i in matches.filter(i => {
                let parsedData = JSON.parse(i.data);
                return parsedData.info.state == 'UNPLAYED' && parsedData.info.matchTuple.division == division;
            })">
              <div style="display: flex; flex-direction: row; align-items: center;">
                <h2> {{ i.round.substring(0, 1) }}{{ i.match }} </h2>
                <ion-list>
                  <ion-item>
                    <span class="red">{{ JSON.parse(i.data).info.alliances[0].teams[0].number }}</span>
                  </ion-item>
                  <ion-item>
                    <span class="red">{{ JSON.parse(i.data).info.alliances[0].teams[1].number }}</span>
                  </ion-item>
                </ion-list>

                <ion-list>
                  <ion-item>
                    <span class="blue">{{ JSON.parse(i.data).info.alliances[1].teams[0].number }}</span>
                  </ion-item>
                  <ion-item>
                    <span class="blue">{{ JSON.parse(i.data).info.alliances[1].teams[1].number }}</span>
                  </ion-item>
                </ion-list>
              </div>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup>
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
  IonInput
} from '@ionic/vue';
import { ref, onMounted } from 'vue';
import {
  starOutline,
  gameControllerOutline,
  peopleCircleOutline,
  businessOutline

} from 'ionicons/icons';

const event = ref("");
const team = ref("");
const division = ref("1");
const selectedIndex = ref(0);

const appPages = [
  {
    title: 'Rankings',
    url: '/rankings',
    iosIcon: starOutline,
    mdIcon: starOutline,
  },
  {
    title: 'Rounds',
    url: '/rounds',
    iosIcon: gameControllerOutline,
    mdIcon: gameControllerOutline,
  },
  {
    title: 'Matchups',
    url: '/matchups',
    iosIcon: peopleCircleOutline,
    mdIcon: peopleCircleOutline,
  },
  {
    title: 'Teams',
    url: '/teams',
    iosIcon: businessOutline,
    mdIcon: businessOutline,
  }
];

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
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
const matches = ref([]);

function updateList() {
  // console.log(division.value);
}

onMounted(async () => {
  team.value = getCookie("team");
  event.value = getCookie("event");

  getData();
  setInterval(getData, 5000);
});

async function getData() {
  const responseMatches = await fetch("/data/matches?event=" + getCookie("event"));
  const dataMatches = await responseMatches.json();
  matches.value = dataMatches;
  // console.log(matches.value);
}

function save() {
  setCookie("team", team.value, 10);
  setCookie("event", event.value, 10);
  // console.log("Cookies saved");
}

const path = window.location.pathname.split('folder/')[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
}


</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}

.blue {
  background-color: rgba(0, 0, 255, 0.363) !important;
  padding: 5px;
  border-radius: 5px;
}
.red {
  background-color: rgba(255, 0, 0, 0.24) !important;
  padding: 5px;
  border-radius: 5px;
}

.version {
  margin: 0px;
  padding: 0px;
  font-size: 10px;
  color: gray;
  position: relative;
  top: -12px;
}
</style>
