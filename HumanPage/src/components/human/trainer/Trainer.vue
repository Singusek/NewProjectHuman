<template>
<div>
    <div class="container">
    <div class="row">
    <div class="col s12 m12 l8 xl3 center-align">
        <img src="src/img/trainer.png" alt="" class="center-align circle img responsive-img" >
        <div class="center-align name">{{ name }}</div>
    </div>
    <div class="col s12 m12 l8 xl8">
        <div class="info">{{ info }}</div>
        <br/>
        <achievments class="info" :achievments="achievments"></achievments>
    </div>
    </div>
    </div>
</div>
</template>

<script>
import Achievments from '../achievments/Achievments.vue';
import TRAINERS_JSON from '../../../data/TRAINERS_JSON.json';

export default {
    data() {
        return {
            TRAINERS_JSON: TRAINERS_JSON
        }
    },
    components: {
        Achievments
    },
    props: {
        name: String, 
        info: String, 
        id: Number,
        achievments:{
            type: Array,
            required: true
        }
    },
}
</script>


<style scoped>
.img {
    border:  5px rgb(202, 130, 21) solid;
}
.card-panel {
    margin: 2px;
    
}
.name {
    margin-top: 20px;
}
.valign-wrapper {
    margin-top: 50px;
    margin-bottom: 50px;
}
</style>