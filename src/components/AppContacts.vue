<template>
    <ul>
        <li v-for="contact in contacts" :key="contact.id">
            {{contact.first_name}}
        </li>
    </ul>
</template>

<script>
import{mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  
   
  created(){
       this.fetchContacts();

    // ili   this.$store.dispatch('fetchContacts')

  },

 methods:{
     ...mapActions(['fetchContacts'])
    },

computed:{
    ...mapGetters(['contacts'])
}
    
}
</script>

<style>

</style>
