<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="contact.first_name"/>
        <input type="text" v-model="contact.last_name"/>
        <input type="text" v-model="contact.email"/>
        <button type="submit"> Add </button>
    </form>

</template>

<script>
import{mapActions, mapGetters, mapMutations} from 'vuex'

export default {
    data(){
        return {
            contact:{
                first_name:"",
                last_name:"",
                email:""
                
            }
            //blueprint kontakta koji nas backend ocekuje
        }
    },
    methods:{
        ...mapActions(['createContact']),
        handleSubmit(){
            this.createContact(this.contact);
            
        }
    }
}
</script>
