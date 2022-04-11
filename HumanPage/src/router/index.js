import { createRouter, createWebHistory } from 'vue-router';

import ContactPage from '../pages/ContactPage.vue';
import MainPage from '../pages/MainPage.vue';
import PriceList from '../pages/PriceList.vue';
import TimeTables from '../components/human/timetable/TimeTable.vue';
import Players from '../components/human/players/Players.vue';
import NotFound from '../pages/NotFound.vue';
import Trainers from '../components/human/trainers/Trainers.vue';
import Table2 from '../components/human/timetable/TableComponent.vue';

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
        { path: '/:notFound(.*)', component: NotFound },
        { path: '/Table2', component: Table2  },
    ]
});

export default router;