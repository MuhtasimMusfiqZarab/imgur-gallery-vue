<template>
  <div class>Please wait...</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AuthHandler",

  methods: mapActions(["finalizeLogin"]),

  // auto called when we define the component at a certain point (best for initial data loading)
  created() {
    //invoke finalizeLogin action from here
    // window.location.hash contains the url part after the hash
    this.finalizeLogin(window.location.hash);
  }
};
</script>