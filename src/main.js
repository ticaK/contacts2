import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'

import AppLogin from '@/components/AppLogin'
import AppContacts from '@/components/AppContacts'
import {authService} from '@/services/Auth'
Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: AppLogin
  },
  {
    path: '/',
    redirect: 'contacts'
  },
  {
    path: '/contacts',
    component: AppContacts
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

import { contactsService } from '@/services/ContactsService'

const store = new Vuex.Store({
  state: {
    contacts: []
  },

  actions: {
    async login(context, credencials){
      await authService.login(credencials)

    },
    async fetchContacts (context) {
      const response = await contactsService.getAll()
      context.commit('SET_CONTACTS', response.data)
    },

    async createContact (context, contact) {
      const response = await contactsService.create(contact)
      context.commit('ADD_CONTACT', response.data)
    }
  },

  mutations: {
    SET_CONTACTS (state, contacts) {
      state.contacts = contacts
    },

    ADD_CONTACT (state, contact) {
      state.contacts.push(contact)
    }
  },

  getters: {
    contacts: state => state.contacts
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')