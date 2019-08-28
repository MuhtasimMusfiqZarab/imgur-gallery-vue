<template>
  <div class="dropper">
    <input type="file" />
    <span>Drag Files here!</span>
  </div>
</template>

<script>
export default {
  name: "UploadForm"
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