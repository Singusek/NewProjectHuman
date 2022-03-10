<template>
    <div>
        <the-header></the-header>
        <section>
            <contact-card>
            <h5>Napisz do nas!</h5>
        <form-contact></form-contact>
            </contact-card>
        </section>
        <the-footer></the-footer>
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