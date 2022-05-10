<template>
<div class="container">
    <div class="row tittle">
        <h4 class="center-align col s12 m12 l12 xl12">O NAS</h4>
        <div class="container">{{ ABOUTUS_JSON.text }}</div>
    </div>
    <!-- <youtube v-for="item in items" :key="item" :player="items.player" :embedHtml="player.embedHtml"/> -->
    <you-tube 
        class="container youtube"
        src="https://www.youtube.com/watch?v=G3nYrw9MMGw&ab_channel=NiekompatybilnyX" 
        @ready="onReady"
        ref="youtube" />
        
</div>
</template>

<script>
import ABOUTUS_JSON from '../../../data/ABOUTUS_JSON.json';
// import Youtube from '../youtube/Youtube.vue'


export default {
     data() {
        return {
            ABOUTUS_JSON: ABOUTUS_JSON
        }
    },
    components: {
        // Youtube
    },
    props: ['text'],
    // mounted() {
    //     fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=player&channelId=UCj89LC_NXjDqcacxHSswI5Q&maxResults=5&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU')
    //         .then(res => res.json())
    //         .then(data => this.items = data)
    //         .then(data => this.player = data)
    //         // .then(data => this.embedHtml = data)
    //         .catch(err => console.log(err.message))
    //         // axios
    // },
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