import Vue from 'vue'
import Vuex from 'vuex'
import object from './modules/object'
import menu from './modules/menu'
import bid from './modules/bid'

Vue.use(Vuex)

export const store = new Vuex.Store({
  namespaced: true,
  modules: {
    object,
    menu,
    bid
  },
  state: {
    logo: {
      title: 'Dashboard',
      subtitle: 'admin panel template',
      img: {
        src: '/static/img/general/logo.png',
        alt: 'Recrutto - admin panel'
      }
    }
  },
  getters: {
    logo (state) {
      return state.logo
    }
  },
  mutations: {},
  actions: {},
  strict: process.env.NODE_ENV !== 'production'
})
