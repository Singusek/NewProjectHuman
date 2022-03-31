import { createRouter, createWebHistory } from 'vue-router';

import ContactPage from '../pages/ContactPage.vue';
import MainPage from '../pages/MainPage.vue';
import PriceList from '../pages/PriceList.vue';
import TimeTables from '../components/human/timetables/TimeTables.vue';
import Players from '../components/human/players/Players.vue';
import NotFound from '../pages/NotFound.vue';
import Trainers from '../components/human/trainers/Trainers.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/main' },
        { path: '/main', component: MainPage },
        { path: '/contact', component: ContactPage },
        { path: '/price-list', component: PriceList },
        { path: '/timetable', component: TimeTables },
        { path: '/players', component: Players },
        { path: '/about-us', component: Trainers },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

export default router;