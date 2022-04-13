<template>
<div>
  <div>
    <player 
    v-for="player in PLAYERS_JSON" 
    :key="player.id"
    :id="player.id"
    :name="player.name"
    :cadre="player.cadre"
    :achievments="player.achievments" />
  </div>
</div>
</template>

<script>
import Player from '../player/Player.vue';
import TheFooter from '../../layout/TheFooter.vue';
import PLAYERS_JSON from '../../../data/PLAYERS_JSON.json';

export default {
  components: { 
    TheFooter,
    Player
   },
  data() {
     return {
         PLAYERS_JSON: PLAYERS_JSON
      };
  },
}
</script>

<style scoped>
.container {
    margin-top: 50px;
    margin-bottom: 70px;  
    text-align: justify;
    font-size: 18px;                             
}
.title {
    margin-top: 50px;
}
.trainer-text {
    margin-bottom: 40px;
    margin-top: 100px;
}
</style>