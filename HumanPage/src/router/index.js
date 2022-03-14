import { createRouter, createWebHistory } from 'vue-router';

import ContactPage from '../pages/ContactPage.vue';
import MainPage from '../pages/MainPage.vue';
import PriceList from '../pages/PriceList.vue';
import TimeTable from '../pages/TimeTable.vue';
import Players from '../pages/players/Players.vue';
import NotFound from '../pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/main' },
        { path: '/main', component: MainPage },
        { path: '/contact', component: ContactPage },
        { path: '/price-list', component: PriceList },
        { path: '/timetable', component: TimeTable },
        { path: '/players', component: Players },
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

export default router;