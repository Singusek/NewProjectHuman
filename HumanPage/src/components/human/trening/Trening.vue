<template>
<div class="container">
    <div class="row">
      <div class="col s12 m6 l2 xl2 day"><p>{{ day }}</p>
      <div>
      <div class="col s12 m12 l12 xl12 trning"
            v-for="trening in trainings" 
            :key="trening" 
            :type="trening.type"
            :time="trening.time">{{ trening.type }}<br/>{{ trening.time }}</div>
      </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        day: String,
        trainings: Array
    }
}
</script>

<style scoped>
.day {
    width: 150px;
    border: 1px solid black; 
    text-align: center;  
    background-color: rgba(235, 135, 41, 0.37);
}
.trning {
    width: 150px;
    height: 90px;
    border: 1px solid black;
    background-color: rgba(235, 135, 41, 0.2);
}

p {
    margin: 30px;
}
.row .col {
    padding: 0.4rem;
}
div {
    align-content: center;
}
.trning:hover {
    background-color: rgb(235, 135, 41);
}
.row:after {
    display: none;
}

</style>