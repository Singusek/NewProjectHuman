<template>
    <div>
        <the-header></the-header>
        <div>
         <trainer v-for="trainer in trainers" :key="trainer.id" :id="trainer.id" :name="trainer.name" :info="trainer.info" :achievments="trainer.achievments"/>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<script>
import Trainer from './Trainer.vue';
import trainers from './trainers.json';
import Achievment from './Achievment.vue';

export default {
    data() {
        return {
            trainers: trainers
        }
    },
    components: {
        Trainer,
        Achievment
    }
}
</script>
