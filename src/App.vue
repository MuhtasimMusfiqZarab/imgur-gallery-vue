<template>
  <div>
    <AppHeader />
    <!-- This tells view router that any time it matches a route, take the component & stick it right here  -->
    <div class="ui container">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>

<style lang="scss" scoped>
</style>