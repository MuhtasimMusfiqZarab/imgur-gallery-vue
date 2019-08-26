// we are gonna define 4 different object here (4 pieces of a module)

//import the api file
import api from "../../api/imgur";

const state = {
  token: null //initial
};

const getters = {
  // getters object stores function which works on the state (filters)
  // here state is an argument in a different point in time
  isLoggedIn: state => !!state.token // !! turns the value into boolean
};

const actions = {
  //1st argument( is an object) inside every single action has a couple of different properties assigned to it to let us work with vuex instance
  // other arguments are given by the users
  // commit is a function used to call mutation defined underneath ( thus we dont directly call mutation but we use the commit function)
  logout: ({ commit }) => {
    commit("setToken", null); //2nd argument is the token argument put inside the setToken mutation
  }
  //attempting to login here (creating api login function)
  login: ()=>{
    api.login(); //(instaltly navigate away form the appilication)
  }
};

const mutations = {
  // mutation change only one piece/set of values
  setToken: (state, token) => {
    state.token = token;
  }
};


// exporting this module to use by other files

export default {
  state,
  getters,
  actions,
  mutations
}