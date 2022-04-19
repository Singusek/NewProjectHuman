<template>
    <div class="row">
    <div  
    class="container">
    <h2 class="center-align">GRAFIK</h2>
        <day
        class="days 
        col s12 m12 l2 xl2 
        center-align"
        v-for="object in TIMETABLE_JSON" 
        :key="object" 
        :day="object.day"
        :trainings="object.trainings"/>
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

</style>