// this is to work with images
import api from "../../api/imgur";

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

  async uploadImages({ commit }, images) {
    console.log(images);
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
