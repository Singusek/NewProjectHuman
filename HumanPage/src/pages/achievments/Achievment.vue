<template>
    <div>{{ title }}</div>
</template>

<script>
import trainers from '../data-json/trainers.json';

export default {
    data() {
        return {
            trainers: trainers,
        }
    },
    props: ['title'],
}
</script>