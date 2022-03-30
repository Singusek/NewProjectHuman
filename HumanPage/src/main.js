import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'materialize-css'
import BaseButton from '../src/components/human/UI/BaseButton.vue';
import ContactCard from '../src/components/human/UI/ContactCard.vue';
import TheHeader from '../src/components/human/layout/TheHeader.vue';
import TheFooter from '../src/components/human/layout/TheFooter.vue';

const app = createApp(App)

app.component('base-button', BaseButton);
app.component('contact-card', ContactCard);
app.component('the-header', TheHeader);
app.component('the-footer', TheFooter);

app.use(router)

app.mount('#app')
