<template>
    <div>
        <the-header></the-header>
        <div>
        <h4 class="center-align title">O NAS</h4>
        <div class="container">{{ ABOUTUS_JSON.text }}</div>
        </div>
        <h5 class="trainer-text center-align">TRENERZY</h5>
        <div>
            <transition-group
            name="animation"
            appear
            @before-enter="beforeEnter"
            @enter="enter">
         <trainer 
         v-for="(trainer, index) in TRAINERS_JSON" 
         :data-index="index"
         :key="trainer.id" :id="trainer.id" 
         :name="trainer.name" 
         :info="trainer.info" 
         :achievments="trainer.achievments"/>
            </transition-group>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Trainer from '../trainer/Trainer.vue';
import Achievment from '../achievment/Achievment.vue';
import TRAINERS_JSON from '../../../data/TRAINERS_JSON.json';
import ABOUTUS_JSON from '../../../data/ABOUTUS_JSON.json';

gsap.registerPlugin(ScrollTrigger);

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
    methods: {
        beforeEnter(el) {
            el.style.opacity = 0;
            el.style.transform = el.dataset.index  % 2 == 0 ? 'translateX(-400px)' : 'translateX(400px)';

            // ScrollTrigger.create({
            //     trigger: " animation"
            // })
            // el.style.transform =  'translateX(-150px)' && el.dataset.index  % 2 == 0;
        },
        enter(el, done) {
            gsap.to(el, {
                scrollTrigger: el,
                opacity: 1,
                x: 0,
                // x: el.dataset.index  % 2 == 0 ? 0 : 0,
                // x: 0 && el.dataset.index  % 2 == 0,
                duration: 1.3,
                onComplete: done,
                
            }) 
        },
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