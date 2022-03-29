<template>
    <div>
        <achievment v-for="achievment in achievments" :key="achievment" :title="achievment.title"/>
    </div>
</template>

<script>
import Achievment from '../achievments/Achievment.vue';
import trainers from '../data-json/trainers.json';

export default{
  components: {
       Achievment 
       }, 
    data() {
        return {
            trainers: trainers,
            achievments: trainers
        }
    },
    props: {
        achievments:{
            type: Array,
            required: true
        },
        id: {
            type: Number
        },
        title: String
    },
}
</script>