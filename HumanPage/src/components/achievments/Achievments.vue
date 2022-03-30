<template>
    <div>
        <achievment v-for="achievment in achievments" :key="achievment" :title="achievment.title"/>
    </div>
</template>

<script>
import Achievment from '../../components/achievments/Achievment.vue';
import TRAINERS_JSON from '../../components/data/TRAINERS_JSON.json';

export default{
  components: {
       Achievment 
       }, 
    data() {
        return {
            TRAINERS_JSON: TRAINERS_JSON,
            achievments: TRAINERS_JSON
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