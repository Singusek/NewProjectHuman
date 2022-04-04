<template>
        <div>
           <table>
            <thead>
            <tr>
                <th class="day-table">{{ day }}</th> 
            </tr>
            </thead>
            <tbody>
            <tr>
                <th class="trening"
                v-for="trening in trainings" 
                :key="trening" 
                :type="trening.type"
                :time="trening.time">{{ trening.type }} <br/> {{ trening.time }}</th> 
            </tr>
            </tbody>

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
th { 
    border: 1px solid black; 
    display: block;
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
tr {
    display: block;
}
</style>