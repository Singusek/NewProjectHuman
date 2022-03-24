<template>
<div>
    <div class="container">
            <div class="col s12 m8 offset-m2 l6 offset-l3 ">
                <div class="card-panel grey lighten-5 z-depth-1">
                <div class="row valign-wrapper">
                    <div class="col s2">
                    <img src="src/img/trainer.jpg" alt="" class="circle responsive-img img"> 
                    </div>
                    <div class="col s10">
                    <div v-for="trainer in trainers" :key="trainer.id"><h6 v-if="trainer.id == 1">{{ trainer.name }}</h6></div>
                    <div v-for="trainer in trainers" :key="trainer.id"><p v-if="trainer.id == 1">{{ trainer.info }}</p></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="col s12 m8 offset-m2 l6 offset-l3">
                <div class="card-panel grey lighten-5 z-depth-1">
                <div class="row valign-wrapper">
                    <div class="col s10">
                    <div v-for="trainer in trainers" :key="trainer.id"><h6 v-if="trainer.id == 2">{{ trainer.name }}</h6></div>
                    <div v-for="trainer in trainers" :key="trainer.id"><p v-if="trainer.id == 2">{{ trainer.info }}</p></div>
                    </div>
                    <div class="col s2">
                    <img src="src/img/trainer.jpg" alt="" class="circle responsive-img img"> 
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="col s12 m8 offset-m2 l6 offset-l3">
                <div class="card-panel grey lighten-5 z-depth-1">
                <div class="row valign-wrapper">
                    <div class="col s2">
                    <img src="src/img/trainer.jpg" alt="" class="circle responsive-img img"> 
                    </div>
                    <div class="col s10">
                    <div v-for="trainer in trainers" :key="trainer.id"><h6 v-if="trainer.id == 3">{{ trainer.name }}</h6></div>
                    <div v-for="trainer in trainers" :key="trainer.id"><p v-if="trainer.id == 3">{{ trainer.info }}</p></div>
                    <p>Puchar Świata K-1 Rules Węgry, Szeged 2011 r.
                        <br/> Zawodowe mistrzostwo Polski K-1 Zawodowy pas federacji USW-M, 2014
                        <br/>Mistrz Polski Muay Thai, Świebodzice 2011
                        <br/>Vice Mistrz Europy K-1 Rules, Włochy 2011
                        <br/>Mistrz Polski Seniorów low-kick, 2014
                        <br/> Międzynarodowy Mistrz Polski K-1 Rules, Gdańsk 2011
                        <br/>Międzynarodowy Mistrz Litwy seniorów K-1 Rules 63.5kg, 2012
                        <br/>Międzynarodowy Mistrz Litwy seniorów K-1 Rules 67kg, 2012
                        <br/>Mistrz Polski Kick-Boxing K-1 Rules, Głogów 2010
                        <br/>Mistrz Polski Kick-Boxing K-1 Rules, Głogów 2011
                        <br/>Mistrz Polski w Kick-Boxingu K1 i low kick, Skarżysko Kamienna 2011
                        <br/>Najlepszy zawodnik Mistrzostw Polski w Kick-Boxingu K1 i low-kick, Skarżysko Kamienna 2011
                        <br/>Puchar Polski full contact, Węgrów 2010
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="col s12 m8 offset-m2 l6 offset-l3">
                <div class="card-panel grey lighten-5 z-depth-1">
                <div class="row valign-wrapper">
                    <div class="col s10">
                    <div v-for="trainer in trainers" :key="trainer.id"><h6 v-if="trainer.id == 4">{{ trainer.name }}</h6></div>
                    <div v-for="trainer in trainers" :key="trainer.id"><p v-if="trainer.id == 4">{{ trainer.info }}</p></div>
                    </div>
                    <div class="col s2">
                    <img src="src/img/trainer.jpg" alt="" class="circle responsive-img img"> 
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="col s12 m8 offset-m2 l6 offset-l3">
                <div class="card-panel grey lighten-5 z-depth-1">
                <div class="row valign-wrapper">
                    <div class="col s2">
                    <img src="src/img/trainer.jpg" alt="" class="circle responsive-img img"> 
                    </div>
                    <div class="col s10">
                    <div v-for="trainer in trainers" :key="trainer.id"><h6 v-if="trainer.id == 5">{{ trainer.name }}</h6></div>
                    <div v-for="trainer in trainers" :key="trainer.id"><p v-if="trainer.id == 5">{{ trainer.info }}</p></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
</div>
</template>

<script>
import trainer from './trainer.json';

export default {
    name: 'NameSingle',
    data() {
        return {
            name: trainer,
            singleName: undefined,
            info: trainer,
            trainers: trainer
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
            //  let data = this.name
            //  console.log(data[1]);
            //  let json

            //  this.singleName = data.filter(t => t.id == 2);
        }
        
    },
}
</script>


<style scoped>
.img {
    height: 200px;
    width: 200px;
    border:  5px rgb(202, 130, 21) solid;
    
}
</style>