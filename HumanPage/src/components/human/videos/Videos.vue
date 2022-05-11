<template>
<div class="container">
    <div class="row">
        <film 
            class="videos col s12 m12 l2 xl2"
            v-for="item in data.items" 
            :key="item"
            :embedHtml="item.player.embedHtml"/>
    </div>
</div>
</template>

<script>
import Film from '../film/Film.vue'
export default {
    data() {
            return {
                data: [],
            }
        },
    components: {
        Film
    },
    mounted() {
            fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=player&channelId=UCj89LC_NXjDqcacxHSswI5Q&maxResults=5&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU')
            .then(res => res.json())
            .then(data => this.data = data)
            .then(data => console.log(data))
            .catch(err => console.log(err.message))
        },
}
</script>

<style scoped>
   
</style>