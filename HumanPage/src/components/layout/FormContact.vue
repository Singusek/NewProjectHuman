<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="firstname">Imie</label>
            <input type="text" id="firstname" v-model.trim="firstName"/>
        </div>
        <div class="form-control">
            <label for="lastname">Nazwisko</label>
            <input type="text" id="lastname" v-model.trim="lastName"/>
        </div>
        <div class="form-control">
            <label for="description">Wiadomość</label>
            <textarea rows="5" id="description" v-model.trim="description"></textarea>
        </div>
        <div class="form-control">
            <label for="email">Email</label>
            <input type="email" id="email" v-model.trim="email"/>
        </div>
        <base-button>Wyślij</base-button>
    </form>
</template>

<script>
export default {
    data() {
       return {
           firstName: '',
           lastName: '',
           description: '',
           email: ''
       }; 
    },
    methods: {
        submitForm() {
            const formData = {
                first: this.firstName,
                last: this.lastName,
                desc: this.description,
                email: this.email
            };
            console.log(formData);
        }
    },
}
</script>