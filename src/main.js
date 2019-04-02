import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import {contactsService} from './services/ContactsService'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    contacts:[]
    

  },

  actions:{
    async fetchContacts(context){
      //zove metodu servisa i komituje mutaciju
      const response = await contactsService.getAll()
      context.commit('SET_CONTACTS', response.data);
    },

    async createContact(context, contact){
      const response = await contactsService.create(contact);
      context.commit('ADD_CONTACT',response.data);

    }

  },

  getters:{
    contacts:state=>state.contacts
  },

  mutations:{
      SET_CONTACTS(state, contacts){
        state.contacts=contacts;
        //kontakti koje imamo na state su ovi koji su stigli

      },
      ADD_CONTACT(state, contact){
        state.contacts.push(contact);
      }
  }

})
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
