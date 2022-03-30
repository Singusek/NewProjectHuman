<template>
    <div>
    <div>
         <div class="col s12 m8 offset-m2 l6 offset-l3 z-depth-3">
            <div class="card-panel">
                <div class="row valign-wrapper">
                    <div class="container">
                    <div class="col s2">
                    <img src="src/img/pudzian.jpg" alt="" class="circle img">
                    <div class="center-align name">{{ name }}</div>
                    <div class="center-align name">{{ cadre }}</div>
                    </div>
                    <div class="col s10">
                    <div class="achiev left-align">
                    <achievments :achievments="achievments"/>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Achievments from '../achievments/Achievments.vue';
import PLAYERS_JSON from '../../../data/PLAYERS_JSON.json';
export default {
    components: {
        Achievments
    },
    data() {
        return {
            PLAYERS_JSON: PLAYERS_JSON
        }
    },
    props: {
        name: String,
        cadre: String,
        achievments: Array
    },
}
</script>

<style scoped>
.img {
    border:  5px rgb(202, 130, 21) solid;
    height: 200px;
    width: 210px;
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
.achiev {
    margin: 0px 0px 0px 100px;
    font-size: 100%;
}
</style>