<template>
    <div class="row">
        <training
        class="col s12 m12 l2 xl2 traninigs"
        v-for="timetable in TIMETABLE_JSON" 
        :key="timetable" 
        :trainings="timetable.trainings"/>
    </div>
</template>

<script>
import TIMETABLE_JSON from '../../../data/TIMETABLE_JSON.json';
import Training from '../training/Training.vue';
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
        Training
    }
}
</script>

<style scoped>
.row .col {
    padding: 0px;
}

 </style>