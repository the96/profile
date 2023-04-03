<template>
  <h1>Index</h1>
  <router-link to="/">root</router-link><br>
  <router-link to="/content">content</router-link><br>
  <router-link to="/credit">credit</router-link>
  <router-view name="main-content-view"></router-view>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style scoped>
</style>
