<template>
<div>
  <the-header></the-header>
    <div class="container">
        <div class="row">
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator img" src="src/img/pudzian.jpg">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4"><div v-for="name1 in name1" :key="name1.id">{{ name1.name1 }}</div><i class="material-icons right">more_vert</i></span>
      <p><a class="black-text"><div v-for="cadre1 in cadre1" :key="cadre1.id">{{ cadre1.cadre1 }}</div></a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Osiągnięcia<i class="material-icons right">close</i></span>
      <p v-for="achievements1 in achievements1" :key="achievements1.id">{{ achievements1.achievements1 }}</p>
    </div>
  </div>
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="images/office.jpg">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
        </div>

        <main>
            <h5 v-for="name1 in name1" :key="name1.id">{{ name1.name1 }}</h5>
            <h6 v-for="cadre1 in cadre1" :key="cadre1.id">{{ cadre1.cadre1 }}</h6>
            <!-- <div v-for="array in achievements1" :key="array">
            <div v-for="(nameAchievement) in array" :key="nameAchievement">{{ nameAchievement }}</div>
            </div> -->
        </main>
    </div>
    <the-footer></the-footer>
</div>
</template>

<script>
import TheFooter from '../../components/layout/TheFooter.vue';
import playersData from '../players/players.json';

export default {
  components: { TheFooter },
    
        data() {
            return {
                name1: playersData,
                cadre1: playersData,
                achievements1: playersData,
        };
    },
    
}

//const array = achievements1;
//const keys = array.map(arr => arr.nameAchievement)
</script>

<style scoped>
 .row {
     display: flex;
    padding: 20px;
 }

 .card {
     margin: 20px;
 }
 .img {
     height: 300px;
 }
</style>