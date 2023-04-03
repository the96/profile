<template>
  <div class="content-root">
    <h1>Index</h1>
    <router-link to="/">
      root
    </router-link><br>
    <router-link to="/content">
      content
    </router-link><br>
    <router-link to="/credit">
      credit
    </router-link><br>
    <router-link to="/color_scheme">
      color_scheme
    </router-link><br>

    <router-view name="main-content-view" />
  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style scoped>
.content-root {
  margin: 16px;
}
</style>
