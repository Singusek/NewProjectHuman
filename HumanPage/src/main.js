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

const app = createApp(App)


app.component('base-button', BaseButton);
app.component('contact-card', ContactCard);
app.component('the-header', TheHeader);
app.component('the-footer', TheFooter);
app.component('YouTube', YouTube);

app.use(router)
app.use(VueAnimateOnScroll);
app.use(VueAxios, axios)

app.mount('#app')
