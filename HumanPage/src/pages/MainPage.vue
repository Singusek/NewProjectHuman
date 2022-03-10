<template>
<div class="main-div">
    <the-header></the-header>
    <div class="photo">
    <base-card></base-card>
    </div>
    <main-card></main-card>
    <div class="main-photo">
    <div class="photo">
        <div class="h5"> 
        <h5 class="icons">Trenując z nami kształtujesz :</h5>
        </div>
        <a style="display: flex" class="op">
            <div class="icons">
            <img src="src/img/technika.png" style="margin: 20px; padding: 25px" />
            <h6>Technika</h6>
            </div>
            <div>
            <img src="src/img/biceps.png" style="margin: 20px; padding: 25px"/>
            <h6 class="icons" style="padding-bottom: 25px;">Siła</h6>
            </div>
            <div>
            <img src="src/img/mozg.png" style="margin: 20px; padding: 25px"/>
            <h6 class="icons">Charakter</h6>
            </div>
            <div>
            <img src="src/img/serce.png" style="margin: 20px; padding: 25px"/>
            <h6 class="icons">Kondycja</h6>
            </div>
        </a>
    </div>
    <gallery></gallery>
    </div>

</div>
</template>

<script>
import TheHeader from '../components/layout/TheHeader.vue';
import BaseCard from '../components/UI/BaseCard.vue';
import MainCard from '../components/UI/MainCard.vue';
import Gallery from '../components/UI/Gallery.vue';
export default {
    components: {
        TheHeader,
        BaseCard,
        MainCard,
        Gallery
    },
}
</script>


<style>
.photo {
    background-color: rgb(54, 53, 53);  
    padding: 15px;
    
     
}

.icons {
    color: white;
    
}
.op {
    justify-content: center;
    padding: 10px;
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