<template>
<div>
    <div>
    <the-header></the-header>  
    </div>
    <div>
        <trening
        v-for="timetable in TIMETABLE_JSON" 
        :key="timetable" 
        :day="timetable.day"
        :trainings="timetable.trainings"/>
    </div>
<div>
</div>
</div>
</template>



<script>
import TIMETABLE_JSON from '../../../data/TIMETABLE_JSON.json';
import TheFooter from '../../layout/TheFooter.vue';
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
        Trening,
        TheFooter
    }
}
</script>

