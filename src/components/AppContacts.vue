<template>
<div>
    <ul>
        <li v-for="contact in contacts" :key="contact.id">
            {{contact.first_name}}
        </li>
    </ul>
    <button @click="handleLogout">Log out </button>
    </div>
</template>

<script>
import{mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  
   
  created(){
       this.fetchContacts();

    // ili   this.$store.dispatch('fetchContacts')

  },

 methods:{
     ...mapActions(['fetchContacts','logout']),
     handleLogout(){
         this.logout();
         this.$router.push('/login');
     }
    },

computed:{
    ...mapGetters(['contacts'])
}
    
}
</script>

<style>

</style>
