<template>
<div class="container">
    <div class="row">
        <film 
            class="videos col s12 m12 l12 xl2"
            v-for="item in dataFi()"
            :visibleVideo="visibleVideo"
            :currenPage="currenPage"
            :key="item"
            :embedHtml="item.player.embedHtml"/>
            <!-- <film 
            class="videos col s12 m12 l12 xl2"
            v-for="item in data.items" 
            :key="item"
            :embedHtml="item.player.embedHtml"/> -->
    </div> 
       <!-- <paginate
       class="pagination"
        :page-count="4"
        :page-range="15"
        :margin-pages="2"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'">
        </paginate> -->

    <!-- <paginate
        :data="data"
        :page:update="updatePage"
        :currenPage="currenPage"
        :pageSize="pageSize">
      </paginate> -->
     <!-- <paginate  class="paginate center-align">
     </paginate> -->
   
    
</div>
</template>

<script>
import Film from '../film/Film.vue'
import Paginate from 'vuejs-paginate-next';


// import "vue-pagination-tw/styles";
// import Paginate from '../../UI/Paginate.vue'

export default {
    data() {
            return {
                data: [],
                video: [],
                // page: 1,
                // perPgae: 15
                // page: 15,
                // pageNum: 0
                currenPage: 0,
                pageSize: 15,
                visibleVideo: [],
                
            }
        },
    components: {
        Film,
        paginate: Paginate,
        // Pagination
        // Paginate
    },
    // onBeforeMount: function() {
    //     this.updateVisibleVideo();
    // },
    mounted() {
            fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=player&channelId=UCJrOtniJ0-NWz37R30urifQ&maxResults=50&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU`)
            .then(res => res.json())
            .then(data => this.data = data)
            .then(data => console.log(data))
            .catch(err => console.log(err.message))
        },
        methods: {
            // updatePage(pageNumber) {
            //     this.currenPage = pageNumber;
            //     this.updateVisibleVideo();
            // },
            dataFi() {
                return this.data.items 
            },
            update() {
               this.visibleVideo = this.dataFi() // Czasami dziala jak sie odswierzy to nie dziala 
            },
            // updatevisibleVideo() {
            //     this.visibleVideo.slice(this.currenPage * this.pageSize, (this.currenPage * this.pageSize) + this.pageSize);
            // }
            // getResults() {
            //      getResults(page = '&pageToken=CA8QAA') {
            // axios.get('https://youtube.googleapis.com/youtube/v3/playlists?part=player&channelId=UCJrOtniJ0-NWz37R30urifQ&maxResults=15&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU' + page)
            //     .then(response => {
            //         this.laravelData = response.data;
            //     });
            // }
            // updateVisibleVideo() {
            //     this.dataFi().slice(this.currenPage * this.pageSize, (this.currenPage * this.pageSize) + this.pageSize);
            // },
            // this.visibleVideo =

            // function dont working logic is god variable is empty ??? 
            
        },
    }

</script>

<style scoped>
    @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
    
  
    .pagination {
        justify-content: center;
    }
    
   .row {
       margin-top: 50px;
       margin-bottom: 70px;
   }
   .container {
       height: 100%;
   }
</style>