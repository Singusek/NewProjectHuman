<template>
<div class="container">
    <div class="row">
        <film 
            class="videos col s12 m12 l12 xl2 page-item"
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
        <VuePaginationTw
        :total-items="50"
        :current-page="1"
        :per-page="15"
        @page-changed="getNextPage"
        :go-button="false"
        styled="centered"/>

      <!-- <paginate
      class="pagination"
        v-model="page"
        :page-count="5"
        :page-range="3"
        :margin-pages="2"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'container'"
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
   
    <!-- <div>{{ NextPage() }}</div> -->
     <!-- <ul class="pagination">
    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
    <li class="active"><a href="#!">1</a></li>
    <li class="waves-effect"><a href="#!">2</a></li>
    <li class="waves-effect"><a href="#!">3</a></li>
    <li class="waves-effect"><a href="#!">4</a></li>
    <li class="waves-effect"><a href="#!">5</a></li>
    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
  </ul> -->
  <!-- <paginate
    class="pagination"
    :page-count="4"
    :click-handler="updatePage"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'videos'">
    </paginate> -->
    
</div>
</template>

<script>
import Film from '../film/Film.vue'
import Paginate from 'vuejs-paginate-next';
import "vue-pagination-tw/styles";
// import Paginate from '../../UI/Paginate.vue'

export default {
    data() {
            return {
                data: [],
                page: 15,
                // pageNum: 0
                // currenPage: 0,
                // pageSize: 15,
                // visibleVideo: [],
                
            }
        },
    components: {
        Film,
        // paginate: Paginate,
        // Paginate
    },
    onBeforeMount: function() {
        this.updateVisibleVideo();
    },
    mounted() {
            fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=player&channelId=UCJrOtniJ0-NWz37R30urifQ&maxResults=50&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU`)
            .then(res => res.json())
            .then(data => this.data = data)
            .then(data => console.log(data))
            .catch(err => console.log(err.message))
        },
        methods: {
            updatePage(pageNumber) {
                this.currenPage = pageNumber;
                this.updateVisibleVideo();
            },
            dataFi() {
                return this.data.items 
            },
            updateVisibleVideo() {
               this.visibleVideo = this.dataFi().slice(this.currenPage * this.pageSize, (this.currenPage * this.pageSize) + this.pageSize);

            },
            // function dont working logic is god variable is empty ??? 
            

            // NextPage() {
            //     return this.data.nextPageToken
            // }
        },
            getNextPage() {
                return this.currentPage += 1;
            }
        // clickCallback(pageNum)  {
        // console.log(pageNum)
        //       }

        }

// https://youtube.googleapis.com/youtube/v3/playlists?part=player&channelId=UCj89LC_NXjDqcacxHSswI5Q&maxResults=5&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU
// https://youtube.googleapis.com/youtube/v3/playlists?part=player&channelId=UCJrOtniJ0-NWz37R30urifQ&maxResults=50&key=AIzaSyCm1-B66mC_hDqEzv4wAQ-ORER9WSoqGQU api z 50 filmami
</script>

<style scoped>
    /* @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"; */
    
  
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