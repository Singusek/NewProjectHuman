<template>
    <div>
        <div v-for="(achievment, index) in achievments" :key="index"><p v-if="id == 3">{{ achievment }}</p></div>
    </div>
</template>

<script>
import trainers from './trainers.json';

export default {
    data() {
        return {
            trainers: trainers
        }
    },
    props: {
        achievments:{
            type: Array,
            required: true
        },
        id: {
            type: Number
        }
    }
}
</script>