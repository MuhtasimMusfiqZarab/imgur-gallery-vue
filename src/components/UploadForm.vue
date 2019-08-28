<template>
  <div class="dropper">
    <!-- sending necessary data from the event (not the whole event) -->
    <!-- event.target.files contains the images, event obj comes from trigering @change, thats why $ sign is used -->
    <input type="file" @change="uploadImages($event.target.files)" multiple accept="image/*" />
    <span>Drag Files here!</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UploadForm",
  methods: mapActions(["uploadImages"])
};
</script>


<style lang="scss">
.dropper {
  height: 30vh;
  border: 2px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    background-color: #eee;
  }
}

// input becomes invisible and stretches the whole div
input {
  width: 100%;
  height: 100%;
  position: absolute; // doing it stops affecting the Drag  files here text
  opacity: 0; // make it invisible
}
</style>