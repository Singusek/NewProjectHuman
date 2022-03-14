<template>
    <section class="container">
        <main>
            <h5 v-for="name in name" :key="name.id">{{ name.name }}</h5>
            <h6 v-for="cadre in cadre" :key="cadre.id">{{ cadre.cadre }}</h6>
            <p v-for="achievements in achievements" :key="achievements.id">{{ achievements.achievements }}</p>
        </main>
    </section>
</template>

<script>
import playersData from '../players/players.json';

export default {
        data() {
            return {
                name: playersData,
                cadre: playersData,
                achievements: playersData,
                nameAchievement: playersData
        };
    },
}
</script>