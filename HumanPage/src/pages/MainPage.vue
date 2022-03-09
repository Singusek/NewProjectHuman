<template>
<div class="main-div">
    <the-header></the-header>
    <base-card></base-card>
    <main-card></main-card>
</div>
</template>

<script>
import TheHeader from '../components/layout/TheHeader.vue';
import BaseCard from '../components/UI/BaseCard.vue';
import MainCard from '../components/UI/MainCard.vue';
export default {
    components: {
        TheHeader,
        BaseCard,
        MainCard
        
    },
}
</script>
<style>


   
</style>