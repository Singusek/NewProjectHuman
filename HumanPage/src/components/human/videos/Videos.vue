<template>
<div class="container">
    <div class="row">
    <film 
        class="videos col s12 m12 l12 xl2"
        v-for="item in updatevisibleVideo()"
        :video="video"
        :currenPage="currenPage"
        :key="item"
        :embedHtml="item.player.embedHtml"/>
    </div> 
    <paginate
        class="center-align"
        v-bind:video="video"
        v-on:page:update="updatePage"
        v-bind:currenPage="currenPage"
        v-bind:pageSize="pageSize">
    </paginate>
</div>
</template>

<script>
import Film from '../film/Film.vue'
import Paginate from '../../UI/Paginate.vue'

export default {
    data() {
            return {
                data: [],
                video: [],
                currenPage: 0,
                pageSize: 15,
            }
        },
    components: {
        Film,
        Paginate
    },
    mounted() {
            fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=player&channelId=UCJrOtniJ0-NWz37R30urifQ&maxResults=50&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU`)
            .then(res => res.json())
            .then(data => this.data = data)
            .then(data => this.video = data.items)
            .then(data => console.log(data))
            .catch(err => console.log(err.message))
        },
        methods: {
            updatePage(pageNumber) {
                this.currenPage = pageNumber;
                this.updateVisibleVideo();
            },
            updatevisibleVideo() {
              return this.video.slice(this.currenPage * this.pageSize, (this.currenPage * this.pageSize) + this.pageSize) 
            },
        },
    }
</script>

<style scoped>
   .row {
       margin-top: 50px;
       margin-bottom: 70px;
   }
   .container {
       height: 90vh;
   }
   @media screen and (max-width: 1024px) {
     .container {
       height: 100%;
        }
    }
</style>