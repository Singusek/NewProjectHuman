<template>
<div>
    <the-header></the-header>
    <router-view></router-view>
    <the-footer></the-footer>
</div>
</template>

<script>
import TheHeader from '../src/components/layout/TheHeader.vue';

export default {
    components: {
        TheHeader
    },
   
}
</script>

<style>
</style>