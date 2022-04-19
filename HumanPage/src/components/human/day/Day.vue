<template>
    <div class="z-depth-2">
      <div class="day orange lighten-5">
          <p>{{ day }}</p>
      </div>
      <trainings 
      :trainingsParam="trainings"/>
    </div>
</template>

<script>
import Trainings from '../trainings/Trainings.vue';
export default {
    props: {
        day: String,
        trainings: Array
    },
    components: {
        Trainings
    }
}
</script>

<style scoped>
.day {
    height: 60px;
    border: 1px solid rgba(0, 0, 0, 0.425);
}
</style>