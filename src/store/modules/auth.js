// we are gonna define 4 different object here (4 pieces of a module)

//import the api file
import api from "../../api/imgur";
import qs from "qs";

const state = {
  // without initializing with null, we need to check the localStorage for this specified domain if token exists or not (data persistance)
  token: window.localStorage.getItem("imgur_token") //initially this is null
};

const getters = {
  // getters object stores function which works on the state (filters)
  // here state is an argument in a different point in time
  isLoggedIn: state => !!state.token // !! turns the value into boolean
};

// the first argument of an antion is an object that has a bunch of helper methods tied to it that allow us to modify our vuex module..ex: {commit} function inside an object
// commit function allow us to call mutations
//2nd argument is the argument passed to it while calling this method from a component
const actions = {
  //1st argument( is an object) inside every single action has a couple of different properties assigned to it to let us work with vuex instance
  // other arguments are given by the users
  // commit is a function used to call mutation defined underneath ( thus we dont directly call mutation but we use the commit function)
  logout: ({ commit }) => {
    commit("setToken", null); //2nd argument is the token argument put inside the setToken mutation
  },
  //attempting to login here (creating api login function)
  login: () => {
    api.login(); //(instaltly navigate away form the appilication)
  },
  // extracting access token from url
  // argument passed here while calling it, will be found on its 2nd argument
  finalizeLogin({ commit }, hash) {
    //replacing # of hash with an empty string
    // parsing query string using qs module
    const query = qs.parse(hash.replace("#", "")); // the result is an object
    // being an object, query has the access token property inside this
    commit("setToken", query.access_token); // calling setToken mutation with value

    //saving this token in localStorage for data persistancy
    window.localStorage.setItem("imgur_token", query.access_token);
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
};
