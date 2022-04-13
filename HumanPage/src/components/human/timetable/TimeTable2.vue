<template>
    <div class="container">
    <div>
        <day
        class="days"
        v-for="timetable in TIMETABLE_JSON" 
        :key="timetable" 
        :day="timetable.day"/>
        <trainings class="box"/>
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
.box {
    margin-bottom: 70px;
    margin-top: 50px;
}
.days {
    margin-bottom: 10px;
}
</style>