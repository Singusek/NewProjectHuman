<template>
<div>
    <div class="container">
            <div class="col s12 m8 offset-m2 l6 offset-l3 ">
                <div class="card-panel grey lighten-5 z-depth-1">
                <div class="row valign-wrapper">
                    <div class="col s2">
                    <img src="src/img/trainer.png" alt="" :class="imgLocation">
                    </div>
                    <div class="col s10">
                    <div>{{ name }}</div>
                    <div>{{ info }}</div>
                    <br/>
                    <achievments :achievments="trainer.achievments"></achievments>
                    </div>
                </div>
                </div>
            </div>
        </div>
</div>
</template>

<script>
import Achievments from './Achievment.vue';
import trainers from './trainers.json';

export default {
    data() {
        return {
            trainers: trainers
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
</style>