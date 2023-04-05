<template>
  <h2>Profile</h2>
  <div class="icon">
    <img src="src/assets/icon.jpg" class="icon-img" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.icon {
  $size: 200px;

  box-shadow: 3px 3px 6px 0 #777;
  border: 2px solid #e0e0e0;
  border-radius: calc($size / 2);
  width: $size;
  height: $size;
  overflow: hidden;

  .icon-img {
    border: 2px solid #fff;
    border-radius: calc($size / 2 - 4px);
    width: $size - 4px;
    height: $size - 4px;
  }
}
</style>
