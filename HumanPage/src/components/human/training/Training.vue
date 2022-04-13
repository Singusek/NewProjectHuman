<template>
    <div class="row">
        <div class="col s12 m12 l12 xl12 training"
            v-for="trening in trainings" 
            :key="trening" 
            :type="trening.type"
            :time="trening.time">
            {{ trening.type }}<br/>
            {{ trening.time }}</div>
      </div>
</template>

<script>
export default {
    props: {
        trainings: Array
    }
}
</script>

<style scoped>
.training {
    height: 80px;
    border: 1px solid black;
    text-align: center;
}

</style>