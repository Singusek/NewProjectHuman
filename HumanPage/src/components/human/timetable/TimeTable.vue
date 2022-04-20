<template>
    <div class="row">
    <div  
    class="container">
    <h2 class="center-align">GRAFIK</h2>
    <transition-group name="animation">
        <day
        class="days 
        col s12 m12 l2 xl2 
        center-align"
        v-for="(object, index) in TIMETABLE_JSON" 
        :data-index="index"
        :key="object" 
        :day="object.day"
        :trainings="object.trainings"/>
    </transition-group>
    </div>
</div>
</template>

<script>
import TIMETABLE_JSON from '../../../data/TIMETABLE_JSON.json';
import Day from '../day/Day.vue';
import Trainings from '../trainings/Trainings.vue';
export default {
    data() {
        return {
            TIMETABLE_JSON: TIMETABLE_JSON
        }
    },
    components: {
        Day,
        Trainings 
    }
}
</script>

<style scoped>
.days {
    margin-top: 20px;
    margin-bottom: 20px;
}
.animation-enter-from { 
    opacity: 0; 
    transform: translateY(100px);
} 
.animation-enter-to { 
    opacity: 1; 
    transform: translateY(0);
    animation-duration: 0.8s;
    animation-delay: 0.2; 
    /* animation-delay: index * 0.2; */
} 
.animation-enter-active  { 
    transition: opacity 2s ease; 
}
</style>