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

      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonButton, IonPage, IonTitle, IonToolbar, IonAccordionGroup, IonAccordion, IonItem, IonList, IonLabel, IonSelect, IonSelectOption, IonNote } from '@ionic/vue';
  import { ref, onMounted } from 'vue';

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
  