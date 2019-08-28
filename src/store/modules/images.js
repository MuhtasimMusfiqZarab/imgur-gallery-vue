// this is to work with images
import api from "../../api/imgur";
import { router } from "../../main"; // this is for redirection

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  // 1st argument of action is always an object with some properties {commit(for mutation), rootState(reff to all of the state held inside of vuex store/ instance)}
  // rootState lets us access to other modules and let us access their state held inside of them
  async fetchImages({ rootState, commit }) {
    // auth is the name of the module written inside of index.js
    // auth has token property inside of state object
    const response = await api.fetchImages(rootState.auth.token);
    //saving to state
    commit("setImages", response.data.data);
  },
  // receiving images from input event as argument
  async uploadImages({ rootState }, images) {
    // console.log(images);
    // Get the access token
    const { token } = rootState.auth; // takes token from state of auth module
    // Call api to upload images
    await api.uploadImages(images, token);
    //Redirect to other URL to see the uploaded images
    router.push("/");
  }
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

// exporting this for index.js
export default {
  state,
  getters,
  actions,
  mutations
};
