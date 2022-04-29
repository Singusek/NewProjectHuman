<template>
<div class="container">
    <div>
        <h4 class="center-align title">O NAS</h4>
        <div class="container">{{ ABOUTUS_JSON.text }}</div>
    </div>
    <you-tube 
        class="container"
        src="https://www.youtube.com/watch?v=G3nYrw9MMGw&ab_channel=NiekompatybilnyX" 
        @ready="onReady"
        ref="youtube" />
</div>
</template>

<script>
import ABOUTUS_JSON from '../../../data/ABOUTUS_JSON.json';

export default {
     data() {
        return {
            ABOUTUS_JSON: ABOUTUS_JSON
        }
    },
    props: ['text']
}
</script>

<style scoped>
    .container {
        margin-top: 50px;
        margin-bottom: 70px;  
        text-align: justify;
        font-size: 18px;                             
    }
</style>