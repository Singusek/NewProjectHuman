<template>
    <div>
        <!-- <achievment :title="trainer.achievments"/> -->
        <achievment v-for="achievment in achievments" :key="achievment" :title="title.achivments"/>
        <!-- <achievment v-for="title in achievments" :key="title"></achievment> -->
         <!-- <achievment v-for="(achievment, index) in achievments" :key="index">{{ achievment }}</achievment> -->
    </div>
</template>

<script>
import Achievment from './Achievment.vue';
import trainers from './trainers.json';

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
    computed() {
        console.log(this.achievments + 'achievment error');
    }
}
</script>