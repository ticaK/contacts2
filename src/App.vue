<template>
  <div id="app">
    <add-contacts />
   <app-contacts/>
  </div>
</template>

<script>
import AppContacts from './components/AppContacts.vue'
import AddContacts from './components/AddContacts.vue'

export default {
  name: 'app',
  components: {
    AppContacts,
    AddContacts
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
