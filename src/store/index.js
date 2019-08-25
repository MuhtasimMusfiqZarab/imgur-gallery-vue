// initial setup of vuex is put here

import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex); // initial handshake between vue and vuex

// create new vuex store
export default new Vuex.Store({
  modules: {}
});
