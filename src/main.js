// VUE CLI boots up and search for this file at the begining
import Vue from "vue";
import App from "./App";

// new vue instance to render it on the screen

new Vue({
  render: h => h(App) //here App is the parent file
}).$mount("#app"); //in id of app the application is shown
