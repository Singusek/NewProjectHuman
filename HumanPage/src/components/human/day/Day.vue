<template>
    <div>
      <div class="day orange lighten-3">
          <p>{{ day }}</p>
      </div>
      <trainings 
      class="trainings"
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
    },
}
</script>

<style scoped>
.day {
    height: 70px;
    border: 1px solid rgba(0, 0, 0, 0.979);
    font-weight: 700;
    border-bottom: 0px;
    box-shadow: 0 0 20px rgba(115, 115, 115, 0.445);
}
.trainings {
    border: 1px solid black;
    box-shadow: 0 10px 15px rgba(115, 115, 115, 0.479);
}
p {
    margin-top: 22px;
} 

@media screen and (max-width: 600px) {
    .margin {
        font-size: 20px;
    }
    .day {
        font-size: 18px;
        color: rgb(0, 0, 0);
    }
}
</style>

