<template>
    <div>
        <the-header></the-header>
        <div>
        <h4 class="center-align title">O NAS</h4>
        <div class="container">{{ ABOUTUS_JSON.text }}</div>
        </div>
        <h5 class="trainer-text center-align">TRENERZY</h5>
        <div>
         <trainer 
         v-for="trainer in TRAINERS_JSON" 
         :key="trainer.id" :id="trainer.id" 
         :name="trainer.name" 
         :info="trainer.info" 
         :achievments="trainer.achievments"/>
        </div>
        <the-footer></the-footer>
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

<style scoped>
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