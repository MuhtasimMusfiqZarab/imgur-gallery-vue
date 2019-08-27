<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image Storage</a>
    <!-- logout button  -->

    <div class="right menu">
      <!-- isLoggedIn getter is called here -->
      <div v-if="isLoggedIn">
        Galleries Buttons
        Upload Buttons
        Logout Buttons
      </div>
      <a v-else href="#" class="ui item" @click="login">Login</a>
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
  methods: mapActions(["login"]) // this syntax is used to include only one method (without using the object to wrap it)
};
</script>



