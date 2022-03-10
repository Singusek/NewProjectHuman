import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'materialize-css'
import BaseButton from './components/UI/BaseButton.vue';
import ContactCard from './components/UI/ContactCard.vue';

const app = createApp(App)

app.component('base-button', BaseButton);
app.component('contact-card', ContactCard);

app.use(router)

app.mount('#app')
