import { createRouter, createWebHistory } from 'vue-router';

import ContactPage from '../pages/ContactPage.vue';
import MainPage from '../pages/MainPage.vue';
import PriceList from '../pages/PriceList.vue';
import Players from '../components/human/players/Players.vue';
import NotFound from '../pages/NotFound.vue';
import Trainers from '../components/human/trainers/Trainers.vue';
import TimeTable from '../components/human/timetable/TimeTable.vue';
import AboutUs from '../components/human/aboutus/AboutUs.vue';
import Videos from '../components/human/videos/Videos.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/main' },
        { path: '/main', component: MainPage },
        { path: '/contact', component: ContactPage },
        { path: '/price-list', component: PriceList },
        { path: '/players', component: Players },
        { path: '/trainers', component: Trainers },
        { path: '/about-us', component: AboutUs },
        { path: '/:notFound(.*)', component: NotFound },
        { path: '/timetable', component: TimeTable },
        { path: '/videos', component: Videos },
    ]
});

export default router;