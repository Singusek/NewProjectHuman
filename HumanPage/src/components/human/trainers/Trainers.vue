<template>
    <div>
        <div>
        <h4 class="center-align title">O NAS</h4>
        <div class="container">{{ ABOUTUS_JSON.text }}</div>
        </div>
        <h5 class="trainer-text center-align">TRENERZY</h5>
        <div>
         <trainer 
         v-animate-onscroll="{down:  index  % 2 == 0 ? 'animate__animated animate__fadeInLeft animate__slower 1.5s'  : 'animate__animated animate__fadeInRight animate__slower 1.5s'}"
         v-for="(trainer, index) in TRAINERS_JSON" 
         :data-index="index"
         :key="trainer.id" :id="trainer.id" 
         :name="trainer.name" 
         :info="trainer.info" 
         :achievments="trainer.achievments"/>
        </div>
    </div>
</template>

<script>
import Trainer from '../trainer/Trainer.vue';
import Achievment from '../achievment/Achievment.vue';
import TRAINERS_JSON from '../../../data/TRAINERS_JSON.json';
import ABOUTUS_JSON from '../../../data/ABOUTUS_JSON.json';

export default {
    data() {
        return {
            TRAINERS_JSON: TRAINERS_JSON,
            ABOUTUS_JSON: ABOUTUS_JSON
        }
    },
    components: {
        Trainer,
        Achievment
    },
    props: ['text']
}
</script>

<style lang="scss" scoped>
.container {
    margin-top: 50px;
    margin-bottom: 70px;  
    text-align: justify;
    font-size: 18px;                             
}
.title {
    margin-top: 50px;
}
.trainer-text {
    margin-bottom: 40px;
    margin-top: 100px;
}
</style>