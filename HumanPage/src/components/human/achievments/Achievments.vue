<template>
    <div>
        <achievment 
        v-for="achievment in achievments" 
        :key="achievment" 
        :title="achievment.title"/>
    </div>
</template>

<script>
import Achievment from '../achievment/Achievment.vue';


export default{
  components: {
       Achievment 
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