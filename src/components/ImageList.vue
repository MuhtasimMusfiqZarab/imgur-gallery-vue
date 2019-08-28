<template>
  <div>Image List</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ImageList",
  methods: mapActions(["fetchImages"]), // action located inside of images.js store module
  created() {
    this.fetchImages();
  }
};
</script>