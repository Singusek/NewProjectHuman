<template>
    <div class="row">
    <div  
    class="container">
    <h2 v-if="show" class="center-align">GRAFIK</h2>
        <day
        class=" animate__animated animate__fadeInDown
        days 
        col s12 m12 l2 xl2 
        center-align"
        v-show="show"
        v-for="(object, index) in TIMETABLE_JSON" 
        :data-index="index"
        :key="object" 
        :day="object.day"
        :trainings="object.trainings"/>
    </div>
</div>
</template>

<script>
import 'animate.css';
import TIMETABLE_JSON from '../../../data/TIMETABLE_JSON.json';
import Day from '../day/Day.vue';
import Trainings from '../trainings/Trainings.vue';
export default {
    data() {
        return {
            TIMETABLE_JSON: TIMETABLE_JSON,
            show: true
        }
    },
    components: {
        Day,
        Trainings 
    },
   
}
</script>

<style scoped>
.days {
    margin-top: 20px;
    margin-bottom: 20px;
}
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
</style>