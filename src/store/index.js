// initial setup of vuex is put here

import Vuex from "vuex";
import Vue from "vue";
import auth from "./modules/auth";

Vue.use(Vuex); // initial handshake between vue and vuex

// create new vuex store
export default new Vuex.Store({
  // wiring the modules for vuex
  modules: {
    // whatever name(key) we are using here is going to affect how we will access data within the vue component
    // this wares up auth module to our vuec instance
    auth
  }
});
