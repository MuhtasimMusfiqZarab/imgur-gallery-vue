<template>
  <div class="images">
    <!-- src comes from a variable thus we are using : (bindling) -->
    <img v-for="image in allImages" :src="image.link" :key="image.id" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  // computed property to read info into our component & make it accessible in our template
  computed: mapGetters(["allImages"]),
  methods: mapActions(["fetchImages"]), // action located inside of images.js store module
  created() {
    this.fetchImages();
  }
};
</script>

<style lang="scss" scoped>
.images {
  display: flex;
}

img {
  // hight is auto defined
  width: 33.3%;
}
</style>