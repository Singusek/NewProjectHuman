<template>
    <div>
        <div 
        v-for="item in data.items" 
        :key="item">
        {{ item.player.embedHtml
        .split(' ')[3]
        .split('="')[1]
        .slice(0, -1) }}
        </div>
        
    </div>
</template>

<script>
import Videos from '../videos/Videos.vue'
export default {
        data() {
            return {
                data: [],
                api: process.env.VUE_APP_API
            }
        },
        mounted() {
            fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=player&channelId=UCj89LC_NXjDqcacxHSswI5Q&maxResults=5&key=${api}`)
            .then(res => res.json())
            .then(data => this.data = data)
            .then(data => console.log(data))
            .catch(err => console.log(err.message))
        },
        // methods: {
        //     ApiKey() {
        //         return console.log(process.env.VUE_APP_API)
        //     }
        // },
        components: {
             Videos
        },
        
}
</script>

