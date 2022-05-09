<template>
    <div>
        <div><iframe v-for="items in data" :key="items" class="video" src="https://www.youtube.com/embed/videoseries?list={{ data.items[0].id }}"/></div>
        <!-- <div v-for="items in data" :key="items" >{{ data.data.items[0].player.embedHtml }}</div>
        <div v-for="items in data" :key="items" :player="items.player">{{ embedHtml }}</div> -->
        
        <!-- <div v-for="players in info" :key="players">
            {{ players.embedHtml }}
            <div>
            <span v-html="rawHTML"></span>{{ player.embedHtml | playersvideo }}
            </div>
        </div> -->
        <!-- <div v-for="data in result.json" :key="data" :items="data.items">{{ data.items }}</div> -->
        <!-- <div v-for="video in videos" :key="video" :video="video.videos">{{ video.videos }}</div> -->
        <!-- <div v-for="video in data.json" :key="video">{{ data.json }}</div> -->
        <!-- <div class="youtube-component"></div> -->
         <!-- <you-tube 
         v-for="items in data" :key="items"
        class="container youtube"
        src="'https://www.youtube.com/embed/videoseries?list='${data.items[0].id}" 
        ref="youtube" /> -->
    </div>
</template>

<script>
export default {
        data() {
            return {
                player: null,
                items: Array,
                data: null,
                embedHtml: null, // undifaied
                id: null
            }
        },
        // mounted() {
        //     axios
        //     .get('https://youtube.googleapis.com/youtube/v3/playlists?part=player&channelId=UCJrOtniJ0-NWz37R30urifQ&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU')
        //     .then(response => (this.data = response))
        //     .then(response => (this.items = response))
        //     .then(data => console.log(data))
        // },
        mounted() {
            axios
            .get('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCRUKO34OGs6wfLGUcGlnU5g&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU')
            .then(response => (this.data = response))
            .then(response => (this.items = response))
            .then(data => console.log(data))
        },
        // mounted() {
        //     axios
        //     .get('https://youtube.googleapis.com/youtube/v3/playlists?part=player&channelId=UCJrOtniJ0-NWz37R30urifQ&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU')
        //     .then(response => (this.info = response.data.bpi))
        // },
        filters: {

        }
    
        
        // fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC58utp9cl1w6S8mmbHrRZuQ&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU', {
        //     headers: { 'Content-type': 'application/json' },
        // }).then((result) => {
        //     return result.json()
        // }).then((data) => {
        //     console.log(data)
        //     let videos = data.items
        //     let videoComponent = document.querySelector(".youtube-component")
        //     for(videos of videos){
        //         videoComponent.innerHTML += `
        //         <img src="${videos.snippet.thumbnails.medium.url}">
        //         <you-tube src="'https://www.youtube.com/embed/'${videos.videoId}" />
        //         `
        //     }
        // });

        // fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=player&channelId=UCJrOtniJ0-NWz37R30urifQ&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU', {
        //     headers: { 'Content-type': 'application/json' },
        // }).then((result) => {
        //     return result.json()
        // }).then((data) => {
        //     console.log(data)
        //     // console.log(process.env.VUE_APP_API_KEY)
        // });

      
}
</script>

