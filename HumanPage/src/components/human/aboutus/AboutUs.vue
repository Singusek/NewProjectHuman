<template>
<div class="container">
    <div class="row tittle">
        <h4 class="center-align col s12 m12 l12 xl12">O NAS</h4>
        <div class="container">{{ ABOUTUS_JSON.text }}</div>
    </div>
    <you-tube 
        class="container youtube"
        :src="ABOUTUS_JSON.videoUrl" 
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
    props: ['text'],
}
</script>

<style scoped>
    .tittle {
        margin-top: 50px;
        margin-bottom: 70px;  
        text-align: justify;
        font-size: 18px;                             
    }
    .youtube {
        margin-bottom: 70px;
    }
</style>