// VUE CLI boots up and search for this file at the begining
import Vue from "vue";
// getting vue router libraty
import VueRouter from "vue-router";
import App from "./App";
// importing all the modules we wrote (to be used inside of the router)
import AuthHandler from "./components/AuthHandler";
import ImageList from "./components/ImageList";
import UploadForm from "./components/UploadForm";

// hooking vuex store (the instance we have created)(what we created)
import store from "./store";

// tell vue library about the existance of the vue router
Vue.use(VueRouter); //(initial handshake)
//create vue router instance (with initial configuration(about the route available inside of out application))
// we exporting this router instance because we want to use it to programatically navigate users to other location (redirect without hard refresh)
export const router = new VueRouter({
  mode: "history", // the string history tells to use browser router mode (not hash router) whenever to look at the url (reason: fetch url and route accordingly)
  routes: [
    // array of objects
    { path: "/", component: ImageList },
    { path: "/upload", component: UploadForm },
    { path: "/oauth2/callback", component: AuthHandler }
  ]
});

// new vue instance to render it on the screen
new Vue({
  router, //passing the router instance to the vue instance
  store, //pass the store in the vue instance(same key value) (hooking up the instance with vue )
  render: h => h(App) //here App is the parent file
}).$mount("#app"); //in id of app the application is shown
