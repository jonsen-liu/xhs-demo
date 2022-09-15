import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  strict: process.env.NODE_ENV !== 'production'
})

export default store
