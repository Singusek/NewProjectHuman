<template>
        <div>
           <table class="container">
            <tr class="first-table">
                <td class="day-table">{{ day }}</td> 
                <td class="trening"
                v-for="trening in trainings" 
                :key="trening" 
                :type="trening.type"
                :time="trening.time">{{ trening.type }} <br/> {{ trening.time }}</td> 
            </tr>
            </table>
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
td { 
    border: 1px solid black; 
    width: 100px;
    } 
table {
    background: #000;
    background: linear-gradient(rgb(235, 135, 41, 0.3) 5%, rgba(255, 255, 255, 0.9) 100%);
    }
.container {
    padding-top: 20px;
}
.first-table {
    background-color: rgba(235, 135, 41, 0.3);

}
td:hover {
    background-color: rgb(235, 135, 41);
}
.day-table {
    background-color: rgba(235, 135, 41, 0.5);
    text-align: center;
    width: 150px;
}
.trening {
    text-align: center;
}
</style>