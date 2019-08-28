<template>
  <div>
    <div v-if="isLoggedIn" class="images">
      <!-- src comes from a variable thus we are using : (bindling) -->
      <img v-for="image in allImages" :src="image.link" :key="image.id" />
    </div>
    <h2 v-else>Please Log in to see the contents</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  // computed property to read info into our component & make it accessible in our template
  computed: mapGetters(["allImages", "isLoggedIn"]),
  methods: mapActions(["fetchImages"]), // action located inside of images.js store module
  created() {
    this.fetchImages();
  }
};
</script>

<style lang="scss" scoped>
.images {
  display: flex;
  flex-wrap: wrap;
}

img {
  // hight is auto defined
  width: 300px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  margin-bottom: 10px;
}

h2 {
  text-align: center;
}
</style>