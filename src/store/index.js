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

// This is what we are getting inside the url after allowing the oauth flow
// http://localhost:8080/oauth2/callback#access_token=a033787e5c81943c02d275d8dadb5d53566a14bc&expires_in=315360000&token_type=bearer&refresh_token=dac78d78b9741fdc25d0bfe06273b777d3d8a466&account_username=Zarab&account_id=113124703
