<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image Storage</a>
    <!-- logout button  -->
    <div class="right menu">
      <a href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>



<script>
//this is to wire up actions & getters form vuex to use inside of this module
import { mapActions } from "vuex";

export default {
  name: "AppHeader",
  // define actions inside of methods to be used by this component // calling map actions function and pass an array of actions name
  methods: mapActions(["login"]) // this syntax is used to include only one method (without using the object to wrap it)
};
</script>



