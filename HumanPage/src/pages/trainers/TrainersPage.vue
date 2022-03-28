<template>
    <div>
        <the-header></the-header>
        <div>
         <trainer v-for="trainer in trainers" :key="trainer.id" :name="trainer.name" :info="trainer.info" :achivments="trainer.achivments"/>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<script>
import Trainer from './Trainer.vue';
import trainers from './trainers.json';

export default {
    data() {
        return {
            trainers: trainers
        }
    },
    components: {
        Trainer
    }
}
</script>
