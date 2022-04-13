<template>
    <div class="row">
      <div class="col s12 m12 l2 xl2 day">
          <p>{{ day }}</p>
      </div>
    </div>
</template>

<script>
import Trainings from '../trainings/Trainings.vue';
export default {
    props: {
        day: String
    },
    components: {
        Trainings
    }
}
</script>

<style scoped>
.day {
    height: 80px;
    border: 1px solid black;
    text-align: center;
}
.row:after {
    display: none;
}

</style>