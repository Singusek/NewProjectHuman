<template>
    <div>
        <the-header></the-header>
        <div>
        <h4 class="center-align title">O NAS</h4>
        <div class="container">{{ aboutUs.text }}</div>
        </div>
        <h5 class="trainer-text center-align ">TRENERZY</h5>
        <div>
         <trainer v-for="trainer in trainers" :key="trainer.id" :id="trainer.id" :name="trainer.name" :info="trainer.info" :achievments="trainer.achievments"/>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<script>
import Trainer from './Trainer.vue';
import trainers from '../data-json/trainers.json';
import Achievment from '../achievments/Achievment.vue';
import aboutUs from '../data-json/about-us.json';

export default {
    data() {
        return {
            trainers: trainers,
            aboutUs: aboutUs
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