<template>
    <div>{{ title }}</div>
</template>

<script>
import TRAINERS_JSON from '../../../data/TRAINERS_JSON.json';

export default {
    data() {
        return {
            TRAINERS_JSON: TRAINERS_JSON,
        }
    },
    props: ['title'],
}
</script>