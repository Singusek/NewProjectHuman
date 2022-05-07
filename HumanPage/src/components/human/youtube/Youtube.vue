<template>
    <div>
        <!-- <div v-for="data in result.json" :key="data" :items="data.items">{{ data.items }}</div> -->
        <!-- <div v-for="video in videos" :key="video" :video="video.videos">{{ video.videos }}</div> -->
        <!-- <div v-for="video in data.json" :key="video">{{ data.json }}</div> -->
        <!-- <div class="youtube-component"></div> -->
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() { 
        
         
        //  const state = ref({});

        // fetch('https://youtube.googleapis.com/youtube/v3/search?channelId=UC58utp9cl1w6S8mmbHrRZuQ&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU'), {
        //     headers: { 'Content-type': 'application/json' }
        //     .then(response => response.json())
        //     .then(data => state.value = data);

        // return { state }
        // props: {'videos', 'etag', 'items', 'kind', 'video'}
        // const result = ref(null) 

        // fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCu_ddLC4r2z4RZGBNCBg3SA&maxResults=25&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU') 
        // .then(response => response.json()) 
        // .then(data => result.value = data)
        // .then(list => console.log(list));

        // return { result } 

        // const getYtVideo = () => {
        // fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCu_ddLC4r2z4RZGBNCBg3SA&maxResults=25&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU', {
        //     headers: { 'Content-type': 'application/json' },
        // }).then(res=>res.json()).then((videos) => {
        //     console.log({ videos })
        // }).catch((error) => {
        //     console.log('Looks like there was a problem: \n', error);
        // });
        // }

        // getYtVideo()
        // },

        
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


        fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=player&channelId=UCJrOtniJ0-NWz37R30urifQ&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU', {
            headers: { 'Content-type': 'application/json' },
        }).then((result) => {
            return result.json()
        }).then((data) => {
            console.log(data)
            console.log(process.env.VUE_APP_API_KEY)
        });

    

        // <iframe width="853" height="480" src="${src}" frameborder="0" allowfullscreen></iframe>

        //  fetch('https://youtube.googleapis.com/youtube/v3/search?channelId=UC58utp9cl1w6S8mmbHrRZuQ&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU', {
        //     headers: { 'Content-type': 'application/json' },
        // }).then((result) => {
        //     return result.json()
        // }).then((data) => {
        //     console.log(data)
        // });


       
        // }
    }
      
}
</script>