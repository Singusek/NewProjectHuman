<template>
    <div>
        <div>
        <training
        v-for="training in trainingsParam"
        :key="training"
        :type="training.type"
        :time="training.time" />
        </div>
    </div>
</template>

<script>
import Training from '../training/Training.vue';
export default {
    props: {
        day: String,
        trainingsParam: Array
    },
    components: {
        Training
    }
}
</script>
