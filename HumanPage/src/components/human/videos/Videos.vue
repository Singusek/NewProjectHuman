<template>
<div>
<div class="container">
    <div class="row">
    <film
        class="videos col s12 m12 l13 xl6 animate__animated animate__zoomIn"
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
</div>
</template>

<script>
import Film from '../film/Film.vue'
import Paginate from '../../UI/Paginate.vue'
import axios from 'axios'

export default {
    data() {
            return {
                data: [],
                video: [],
                currenPage: 0,
                pageSize: 4
            }
        },
    components: {
        Film,
        Paginate
    },
    mounted() {
            this.fetch()
        },
        methods: {
            async fetch () {
                this.$isLoading(true)
                let data = await axios.get('https://youtube.googleapis.com/youtube/v3/playlists?part=player&channelId=UCJrOtniJ0-NWz37R30urifQ&maxResults=50&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU')
                this.data = data.data
                this.video = data.data.items
                setTimeout(() => {
                this.$isLoading(false)}, 1500);
            },
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

<style  scoped>
   .row {
       margin-top: 30px;
       margin-bottom: 50px;
   }
   .container {
       height: 95vh;
   }
   @media screen and (max-width: 1024px) {
     .container {
       height: 100%;
        }
    }
</style>