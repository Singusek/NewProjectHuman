<template>
<div>
    <div class="container">
            <div class="col s12 m8 offset-m2 l6 offset-l3 ">
                <div class="card-panel grey lighten-5 z-depth-1">
                <div class="row valign-wrapper">
                    <div class="col s2">
                    <img src="src/img/trainer.png" alt="" class="circle responsive-img img"> 
                    </div>
                    <div class="col s10">
                    <div>{{ name }}</div>
                    <div>{{ info }}</div>
                    <br/>
                    <div v-for="(achivment, index) in achivments" :key="index">{{ achivment }}</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
</div>
</template>

<script>
export default {
    props: {
        name: String, 
        info: String, 
        achivments:{
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
</style>