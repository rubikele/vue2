import Vue from 'vue';
import Vuex from 'vuex';

import home from './home';
import user from './user';
Vue.use(Vuex);

const state = {}
const mutations = {}
const cations = {}
const getters = {}

export default new Vuex.Store({
  state,
  mutations,
  cations,
  getters,
  modules: {
    home,
    user
  }
})