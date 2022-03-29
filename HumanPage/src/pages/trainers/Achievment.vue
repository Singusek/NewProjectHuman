<template>
    <div>{{ title }}</div>
</template>

<script>
import trainers from './trainers.json';

export default {
    data() {
        return {
            trainers: trainers,
        }
    },
    props: ['title'],
    computed() {
            console.log(this.title + 'error title');
        
    }
}
</script>