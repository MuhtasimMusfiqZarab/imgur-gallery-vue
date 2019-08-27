<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Image Storage</router-link>
    <!-- logout button  -->

    <div class="right menu">
      <!-- isLoggedIn getter is called here -->
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a class="item" @click="logout">Logout</a>
      </div>
      <a v-else class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>



<script>
//this is to wire up actions & getters form vuex to use inside of this module
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  // this allows to read data and it gets acces inside of out template
  computed: mapGetters(["isLoggedIn"]),

  // we use methods to modify data (write,change,delete etc) or react to events
  // define actions inside of methods to be used by this component // calling map actions function and pass an array of actions name
  methods: mapActions(["login", "logout"]) // this syntax is used to include only one method (without using the object to wrap it)
};
</script>


<style lang="scss">
.horizontal {
  display: flex;
}
</style>


