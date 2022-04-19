<template>
    <div class="row">
    <div 
    style="height: 600px;" 
    class="container">
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
    margin-bottom: 10px;
    margin-top: 80px;
}
.row .col {
    padding: 0px;
    padding-right: 20px;
}
</style>