<template>
    <div>
        <h4 class="trainer-text center-align tittle">TRENERZY</h4>
         <trainer 
         v-animate-onscroll="{down:  index  % 2 == 0 ? 'animate__animated animate__fadeInLeft animate__slower 1.5s'  : 'animate__animated animate__fadeInRight animate__slower 1.5s'}"
         v-for="(trainer, index) in TRAINERS_JSON" 
         :data-index="index"
         :key="trainer.id" :id="trainer.id" 
         :name="trainer.name" 
         :info="trainer.info" 
         :achievments="trainer.achievments"/>
    </div>
</template>

<script>
import Trainer from '../trainer/Trainer.vue';
import Achievment from '../achievment/Achievment.vue';
import TRAINERS_JSON from '../../../data/TRAINERS_JSON.json';

export default {
    data() {
        return {
            TRAINERS_JSON: TRAINERS_JSON
        }
    },
    components: {
        Trainer,
        Achievment
    },
}
</script>

<style lang="scss" scoped>

.trainer-text {
   padding-top: 80px;
   padding-bottom: 80px;
   margin: 0px;
   background-color: #ef6c0088;
}
</style>