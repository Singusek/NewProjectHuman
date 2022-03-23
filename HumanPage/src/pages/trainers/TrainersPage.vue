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
                    <!-- <span class="black-text" v-for="name in name" :key="name">{{ name.name }}</span> -->
                    <p>{{ singleName }}{{ singleName.id }}</p>
                    <!-- <p v-for="name in assingSingaleName($route.params.id)" :key="name.id">{{ name }}</p> -->
                    </div>
                </div>
                </div>
            </div>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<script>
// import axios from "axios";
import trainer from '../trainers/trainer.json';

export default {
    name: 'NameSingle',
    data() {
        return {
            name: trainer,
            singleName: undefined,
            info: trainer
        }
    },
    computed: {
        name () {
            return this.$route.params.id
        }
    },
    created() {
        this.assingSingaleName();
    },
    methods: {
        assingSingaleName() {
            let data = this.name
            data.filter(item => {
                return item.id == this.id
            });

            this.singleName = data
        }
        
    },
}


//     name: "TrainerInfo",
//     data() {
//         return {
//             trainer: []
//         };
//     },
//     async created() {
//         try {
//             const res = await axios.get(`http://localhost:3001/trainer`);

//             this.trainer = res.data;
//         } catch (e) {
//             console.error(e);
//         }
//     },
// };
</script>

<style scoped>
.img {
    height: 200px;
    width: 200px;
    border:  5px rgb(202, 130, 21) solid;
    
}
</style>