import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'materialize-css'
import BaseButton from '../src/components/UI/BaseButton.vue';
import ContactCard from '../src/components/UI/ContactCard.vue';
import TheHeader from '../src/components/layout/TheHeader.vue';
import TheFooter from '../src/components/layout/TheFooter.vue';
import VueAnimateOnScroll from 'vue3-animate-onscroll';
import YouTube from 'vue3-youtube'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Paginate from "vuejs-paginate-next";
import VuePaginationTw from "vue-pagination-tw";
import Pagination from 'v-pagination-3';
import LaravelVuePagination from 'laravel-vue-pagination';
import Loading from 'vue3-loading-screen'


const app = createApp(App)

app.component('base-button', BaseButton);
app.component('contact-card', ContactCard);
app.component('the-header', TheHeader);
app.component('the-footer', TheFooter);
app.component('YouTube', YouTube);
app.component("VuePaginationTw", VuePaginationTw);
app.component('pagination', Pagination);
app.component('laravel-pagination', LaravelVuePagination);

app.use(router)
app.use(VueAnimateOnScroll);
app.use(VueAxios, axios)
app.use(Paginate)
app.use(Loading, {
    bg: '#FFFAFAad',
    icon: 'refresh',
    size: 3,
    icon_color: 'black',
    slot: `
    <div class="px-5 py-3 bg-gray-800 rounded">
      <h3 class="text-3xl text-white"><i class="fas fa-circle-notch fa-spin"></i><img class="img" src="../src/img/350.png"/></h3>
    </div>
  `
})


app.mount('#app')
