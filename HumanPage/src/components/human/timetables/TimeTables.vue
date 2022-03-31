<template>
    <div>
    <the-header></the-header>
    <div class="table">
    <time-table 
    v-for="timetable in TIMETABLE_JSON" 
    :key="timetable" 
    :day="timetable.day"
    :trainings="timetable.trainings" />
    </div>
    <the-footer></the-footer>
    </div>
</template>

<script>
import TimeTable from '../timetable/TimeTable.vue';
import TIMETABLE_JSON from '../../../data/TIMETABLE_JSON.json';
export default {
  components: { TimeTable },
    data() {
        return {
            TIMETABLE_JSON: TIMETABLE_JSON
        }
    },
}
</script>

<style scoped>
.table {
margin: 80px 0px;
}
</style>