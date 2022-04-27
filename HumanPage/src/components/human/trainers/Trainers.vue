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
            appear
            @before-enter="beforeEnter"
            @enter="enter">
         <trainer 
         class="animation"
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
            //  gsap.to(el, {
            //     ScrollTrigger: 1
            // })
            el.style.opacity = 0;
            el.style.transform = el.dataset.index  % 2 == 0 ? 'translateX(-400px)' : 'translateX(400px)';
            console.log("ScrollTrigger", ScrollTrigger)
            // el.ScrollTrigger = el.dataset.index * ".animation"
            // ScrollTrigger.create({
            //     trigger: " animation"
            // })
            // el.style.transform =  'translateX(-150px)' && el.dataset.index  % 2 == 0;
        },
        enter(el, done) {

            // ScrollTrigger.create({
            //     trigger: ".animation",
            //     opacity: 1,
            //     x: 0,
            //     duration: 2,
            //     onComplete: done,
            // })

            gsap.to(el, {
                // ScrollTrigger: el.dataset.index * "#animation",
                // scrollTrigger: ".animation",
                // scrollTrigger: {
				//     trigger: el,
                //     markers: true
			    // },
                opacity: 1,
                x: 0,
                duration: 2,
                onComplete: done,
                // scrollTrigger: el
                // ScrollTrigger.getById()
            });
        }

            // Vue.directive('clipscroll', {
            // inserted: function (el, binding) {
            //     let f = function (evt) {
            //     var hasRun = false
            //     if (!hasRun && window.scrollY > binding.value.start) {
            //         hasRun = true
            //         TweenMax.to(el, 2, {
            //         morphSVG: binding.value.toPath,
            //         ease: Sine.easeIn
            //         })
            //     }
            //     if (window.scrollY > binding.value.end) {
            //         window.removeEventListener('scroll', f)
            //     }
            //     }
            //     window.addEventListener('scroll', f)
            // }
            // })
                //  window.addEventListener('scroll')

        
            // gsap.timeline({
            //     scrollTrigger: {
            //         trigger: ".container",
            //         start: "center bottom",
            //          end: "center top",
            //     }
            // });
            // gsap.to(".b", {
            //     x: 400,
            //     rotation: 360,
            //     scrollTrigger: {
            //         trigger: ".b",
            //         start: "top center",
            //         end: "top 100px",
            //         scrub: true,
            //         markers: true,
            //         id: "scrub"
            //     }
            //     });

    
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