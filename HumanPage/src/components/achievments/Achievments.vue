<template>
    <div>
        <achievment 
        v-for="achievment in achievments" 
        :key="achievment" 
        :title="achievment.title"/>
    </div>
</template>

<script>
import Achievment from '../../components/achievment/Achievment.vue';
import TRAINERS_JSON from '../../data/TRAINERS_JSON.json';

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