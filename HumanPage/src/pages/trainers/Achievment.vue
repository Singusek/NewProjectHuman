<template>
    <div>
        <div v-for="(achivment, index) in achivments" :key="index">{{ achivment }}</div>
    </div>
</template>

<script>
export default {
    props: {
        achivments:{
            type: Array,
            required: true
        }
    }
}
</script>