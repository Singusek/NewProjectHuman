<template>
<div>
    <div>
            <div class="col s12 m8 offset-m2 l6 offset-l3 z-depth-3">
                <div class="card-panel blue-grey darken-4 white-text">
                <div class="row valign-wrapper">
                    <div class="container">
                    <div class="col s2">
                    <img src="src/img/trainer.png" alt="" :class="imgLocation">
                    <div class="center-align name">{{ name }}</div>
                    </div>
                    <div class="col s10">
                    <div>{{ info }}</div>
                    <br/>
                    <achievments  :achievments="achievments"></achievments>
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
import TRAINERS_JSON from '../data/TRAINERS_JSON.json';

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
     computed: {
          imgLocation() {
              console.log(this.id + 'Error in key!')
               let flag = this.id % 2 === 0;
               console.log(flag)
              return  flag ? "circle responsive-img img right-align" : "circle responsive-img img left-align" 
             
          },
     }
     
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