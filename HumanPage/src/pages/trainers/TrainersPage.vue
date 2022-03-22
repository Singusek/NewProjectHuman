<template>
    <div>
        <the-header></the-header>
        <div class="container">
            <div class="col s12 m8 offset-m2 l6 offset-l3">
                <div class="card-panel grey lighten-5 z-depth-1">
                <div class="row valign-wrapper">
                    <div class="col s2">
                    <img src="src/img/trainer.jpg" alt="" class="circle responsive-img img"> <!-- notice the "circle" class -->
                    </div>
                    <div class="col s10">
                    <span class="black-text" v-for="trainer in trainer" :key="trainer.id">{{ trainer.name }}</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "TrainerInfo",
    data() {
        return {
            trainer: []
        };
    },
    async created() {
        try {
            const res = await axios.get(`http://localhost:3001/trainer`);

            this.trainer = res.data;
        } catch (e) {
            console.error(e);
        }
    },
};
</script>

<style scoped>
.img {
    height: 200px;
    width: 200px;
    border:  5px rgb(202, 130, 21) solid;
    
}
</style>