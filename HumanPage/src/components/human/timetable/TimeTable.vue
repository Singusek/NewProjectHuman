<template>
    <div>
    <the-header></the-header>
    <div class="container">
           <table class="responsive-table">
            <thead>
            <tr>
                <th 
                v-for="timetable in TIMETABLE_JSON" 
                :key="timetable" 
                :day="timetable.day" 
                class="day-table">{{ timetable.day }}</th> 
            </tr>
            </thead>
            <tbody>
             <tr>
                <th class="trening"
                v-for="timetable in TIMETABLE_JSON" 
                :key="timetable">{{ timetable.trainings[0].type }} 
                <br/> {{ timetable.trainings[0].time }}</th> 
            </tr>
            <tr>
                <th class="trening"
                v-for="timetable in TIMETABLE_JSON" 
                :key="timetable">{{ timetable.trainings[1].type }} 
                <br/> {{ timetable.trainings[1].time }}</th> 
            </tr>
            <tr>
                <th class="trening"
                v-for="timetable in TIMETABLE_JSON" 
                :key="timetable">{{ timetable.trainings[2].type }} 
                <br/> {{ timetable.trainings[2].time }}</th> 
            </tr>
            <tr>
                <th class="trening"
                v-for="timetable in TIMETABLE_JSON" 
                :key="timetable">{{ timetable.trainings[3].type }} 
                <br/> {{ timetable.trainings[3].time }}</th> 
            </tr>
            <tr>
                <th class="trening"
                v-for="timetable in TIMETABLE_JSON" 
                :key="timetable">{{ timetable.trainings[4].type }} 
                <br/> {{ timetable.trainings[4].time }}</th> 
            </tr>
            <tr>
                <th class="trening"
                v-for="timetable in TIMETABLE_JSON" 
                :key="timetable">{{ timetable.trainings[5].type }} 
                <br/> {{ timetable.trainings[5].time }}</th> 
            </tr>
            </tbody>
            </table>
        </div>
    <the-footer></the-footer>
    </div>
</template>


<script>
import TIMETABLE_JSON from '../../../data/TIMETABLE_JSON.json';
export default {
    data() {
        return {
            TIMETABLE_JSON: TIMETABLE_JSON
        }
    },
    props: {
        day: String,
        trainings: Array
    }
}
</script>


<style scoped>
th { 
    border: 1px solid black; 
    justify-content: center;
    height: 80px;
    width: 150px;
    } 
.trening {
    background-color: rgba(235, 135, 41, 0.2);
}
.trening:hover {
    background-color: rgb(235, 135, 41);
}
.day-table {
    background-color: rgba(235, 135, 41, 0.5);
    text-align: center;
}
.trening {
    text-align: center;
    height: 80px;
    width: 150px;
}
.container {
    margin-top: 50px;
    margin-bottom: 50px;
}
</style>