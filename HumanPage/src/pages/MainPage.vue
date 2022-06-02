<template>
<div class="main-div">
    <div class="photo center-align">
    <base-card></base-card>
    </div>
    <main-card style="padding-top: 30px;"></main-card>
    <div class="main-photo">
    <div class="back">
    <div class="container">
    <div class="photo-icons row">
        <div class="h5"> 
        <h5 class="icons-text">Trenując z nami kształtujesz :</h5>
        </div>
        <a style="display: flex" class="op">
            <div class="icons col s4">
            <img class="responsive-img" src="src/img/technika.png"/>
            <h6 class="icons">Technika</h6>
            </div>
            <div class="col s4 icons">
            <img class="responsive-img" src="src/img/biceps.png"/>
            <h6 class="icons">Siła</h6>
            </div>
            <div class="col s4 icons">
            <img class="responsive-img" src="src/img/mozg.png"/>
            <h6 class="icons">Charakter</h6>
            </div>
            <div class="col s4 icons">
            <img class="responsive-img" src="src/img/serce.png"/>
            <h6 class="icons">Kondycja</h6>
            </div>
        </a>
    </div>
    </div>
    </div>
    <gallery style="padding-bottom: 40px;"></gallery>
    </div>
</div>
</template>

<script>
import TheHeader from '../components/layout/TheHeader.vue';
import BaseCard from '../components/UI/BaseCard.vue';
import MainCard from '../components/UI/MainCard.vue';
import Gallery from '../components/UI/Gallery.vue';
import TheFooter from '../components/layout/TheFooter.vue';
export default {
    components: {
        TheHeader,
        BaseCard,
        MainCard,
        Gallery,
        TheFooter
    },
}
</script>


<style>
.back {
    background-color: rgb(54, 53, 53); 
}
.photo {
    background-color: rgb(54, 53, 53);  
    height: 50vh;
}
.photo-icons {
    background-color: rgb(54, 53, 53);  
    height: 400px;
}
.icons {
    color: white;
    margin-top: 30px;
}
.icons-text {
    color: white;
    margin-top: 20px;
}
.op {
    justify-content: center;
    text-align:center;
}
.h5 {
    margin-left: auto;
    margin-right: auto;
    width: 23em;
    padding: 15px;
    text-align:center;
} 
</style>