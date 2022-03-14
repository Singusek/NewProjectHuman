<template>
    <section class="container">
        <main>
            <h2>{{ name }}</h2>
        </main>
    </section>
</template>

<script>
import { ref } from 'vue';

import PLAYERS_DATA from '../players/players.json';

export default {
    setup() {
      const players = ref(PLAYERS_DATA);
      const selectedPlayers = ref(null);

      function selectPlayers(name) {
          selectedPlayers.value = players.find((usr) => usr.name === name );
      }

      return { selectedPlayers, players, selectPlayers };
    },
   
}
</script>