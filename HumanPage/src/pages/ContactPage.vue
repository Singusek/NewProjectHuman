<template>
    <div>
        <div class="row">
            <div class="col s12">
                <div class="content-info">
                <img src="/src/img/logo-contact.png" alt="" class="img-logo">
                <p style="margin: 10px;">Dojazd<br/><br/>Białystok ul. Warszawska 79 / nad Sklepem Wars
                    <br/>Wejście od strony ulicy - pierwsze piętro.
                    <br/><br/><i class="tiny material-icons">language</i> https://www.facebook.com/HUMANKickboxing/
                    <br/><br/><i class="tiny material-icons">phone</i> 696 044 388
                    <br/><br/><i class="tiny material-icons">email</i> human25@wp.pl
                    <br/><br/><br/>Zapraszamy wszystkich na zajęcia kick-boxingu K-1,od pon do pt o godz 9-ej,17.30 i 18.50 a także 20.10, soboty 9.00 na ul. Warszawskiej 79 a dzieci w pon,wt,czw i pt o 16.30-17.30, młodzież 11-15 wtorki, czwartki 17. 30, soboty 10.30.
                </p>
                </div>
                </div>
            <div class="col s12">
                <contact-card class="basic-card">
                <h5>Napisz do nas!</h5>
            <form-contact></form-contact>
                </contact-card>
            </div>
        </div>
    </div>
</template>

<script>
import TheHeader from '../components/layout/TheHeader.vue';
import FormContact from '../components/layout/FormContact.vue';
import TheFooter from '../components/layout/TheFooter.vue';

export default {
    components: {
        TheHeader,
        FormContact,
        TheFooter
    }
}
</script>

<style scoped>
.row {
    display: flex;
}
.content-info {
    text-align: center;
    display: flex;
    margin: 80px;
}
.img-logo {
    height: 22em;
    width: 22em;
    margin: 12px;
}

</style>