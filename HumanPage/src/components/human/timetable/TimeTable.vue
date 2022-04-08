<template>
    <div>
    <the-header></the-header>
    <div class="container">
        <div class="table">
        <trening
        v-for="timetable in TIMETABLE_JSON" 
        :key="timetable" 
        :day="timetable.day"
        :trainings="timetable.trainings"/>
        </div>
    </div>
    <the-footer></the-footer>
    </div>
</template>



<script>
import TIMETABLE_JSON from '../../../data/TIMETABLE_JSON.json';
import Trening from '../trening/Trening.vue';
export default {
    data() {
        return {
            TIMETABLE_JSON: TIMETABLE_JSON
        }
    },
    props: {
        day: String,
        trainings: Array
    },
    components: {
        Trening
    }
}
</script>


<style scoped>
.table {
    margin: 80px 0px;
    display: flex;
    justify-content: center;
}
</style>