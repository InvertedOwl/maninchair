<template>
    <div class="Master">
        <div id="Left1" class="column">
            <h2> {{ props.match.round.substring(0, 1) }}{{ props.match.match }} </h2>
            <h3> {{ getTime(JSON.parse(props.match.data).info.timeScheduled * 1000) }} </h3>
        </div>
        <div id="Match">


            <div id="Left2" class="column">
                <h3> <a style="color: rgba(255, 0, 0, 0.438);" :href="'teams?team=' + JSON.parse(props.match.data).info.alliances[0].teams[0].number">{{ JSON.parse(props.match.data).info.alliances[0].teams[0].number }}</a> </h3> 
                <h3> <a style="color: rgba(255, 0, 0, 0.438);" :href="'teams?team=' + JSON.parse(props.match.data).info.alliances[0].teams[1].number">{{ JSON.parse(props.match.data).info.alliances[0].teams[1].number }}</a> </h3> 

            </div>
            <div id="Center" class="column">
                <h1> {{ JSON.parse(props.match.data).finalScore.allianceScores[0] }} </h1>
            </div>
            <div id="Right1" class="column">
                <h1> {{ JSON.parse(props.match.data).finalScore.allianceScores[1] }} </h1>
            </div>
            <div id="Right2" class="column">
                <h3> <a style="color: rgba(67, 67, 253, 0.74);" :href="'teams?team=' + JSON.parse(props.match.data).info.alliances[1].teams[0].number">{{ JSON.parse(props.match.data).info.alliances[1].teams[0].number }}</a> </h3> 
                <h3> <a style="color: rgba(67, 67, 253, 0.74);" :href="'teams?team=' + JSON.parse(props.match.data).info.alliances[1].teams[1].number">{{ JSON.parse(props.match.data).info.alliances[1].teams[1].number }}</a> </h3> 

            </div>
        </div>

    </div>


</template>

<style>
#Match {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px;
}

#Left2, #Center {
    color: rgba(255, 0, 0, 0.438);
}
#Right2, #Right1 {
    color: rgba(67, 67, 253, 0.74);
}

h3 {
    font-size: 13px;
}

.Master {
    display: flex;
    flex-direction: row;
    align-items: space-evenly;
}
</style>

<script setup>
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonButton, IonPage, IonTitle, IonToolbar, IonAccordionGroup, IonAccordion, IonItem, IonList, IonLabel, IonSelect, IonSelectOption, IonNote } from '@ionic/vue';
import { ref, onMounted } from 'vue';

function getTime(timestamp) {
    const now = new Date(timestamp);
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const time = `${hours}:${minutes}`;
    return time;
}

const props = defineProps(['match'])

</script>