<template>
    <div>{{ title }}</div>
</template>

<script>
import TRAINERS_JSON from '../../components/data/TRAINERS_JSON.json';

export default {
    data() {
        return {
            TRAINERS_JSON: TRAINERS_JSON,
        }
    },
    props: ['title'],
}
</script>