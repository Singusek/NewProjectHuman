<template>
    <div>
        <video 
        v-for="item in data.items" 
        :key="item"
        :player="items.player"
        :embedHtml="player.embedHtml"
        />
    </div>
</template>

<script>
import Video from '../video/Video.vue'
export default {
    data() {
            return {
                data: [],
            }
        },
    components: {
        Video
    },

    // props: {
    //     embedHtml: String
    // },
    mounted() {
            fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=player&channelId=UCj89LC_NXjDqcacxHSswI5Q&maxResults=5&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU')
            .then(res => res.json())
            .then(data => this.data = data)
            .then(data => console.log(data))
            .catch(err => console.log(err.message))
        },
}
</script>