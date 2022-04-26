<template>
    <div class="row">
    <div class="container">
        <h2 class="center-align">GRAFIK</h2>
        <transition-group 
            name="animation" 
            appear
            @before-enter="beforeEnter"
            @enter="enter"> 
        <day
            class="days 
            col s12 m12 l2 xl2 
            center-align"
            v-show="show"
            v-for="(object, index) in TIMETABLE_JSON" 
            :data-index="index"
            :key="object" 
            :day="object.day"
            :trainings="object.trainings"/>
        </transition-group>
    </div>
    </div>
</template>

<script>
import 'animate.css';
import gsap from 'gsap';
import TIMETABLE_JSON from '../../../data/TIMETABLE_JSON.json';
import Trainings from '../trainings/Trainings.vue';
import Day from '../day/Day.vue';
export default {
    data() {
        return {
            TIMETABLE_JSON: TIMETABLE_JSON,
            show: true
        }
    },
    components: {
        Day,
        Trainings 
    },
    methods: {
        beforeEnter(el) {
            el.style.opacity = 0;
        },

        enter(el, done) {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                onComplete: done,
                delay: el.dataset.index * 0.3
            });
        },
    },
}
</script>

<style scoped>
.days {
    margin-top: 20px;  
}
.container {
    height: 55rem;
}
</style>