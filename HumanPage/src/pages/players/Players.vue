<template>
    <section class="container">
        <main>
            <h2 v-for="name in name" :key="name.cadre">{{ name.name }}</h2>
        </main>
    </section>
</template>

<script>
import playersData from '../players/players.json';

export default {
        data() {
            return {
                name: playersData,
        };
    },
}
</script>