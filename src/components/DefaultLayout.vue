<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">the96</router-link>
    </div>
    <ul class="navigation">
      <li v-for="navigation in navigations" :key="navigation.key" class="navigation-item">
        <router-link class="navigation-label" :to="navigation.path">{{ navigation.label }}</router-link>
      </li>
    </ul>
  </header>
  <div class="content-root">
    <router-view name="main-content-view" />
  </div>
</template>

<script>
import navigations from '../values/navigation'

export default {
  methods: {},
  computed: {
    navigations() {
      return navigations
    },
  },
}
</script>

<style scoped lang="scss">
@use '@/fonts.scss';

.header {
  $header-color: #3cb371;

  display: flex;
  align-items: center;
  height: 48px;
  background-color: $header-color;

  .logo {
    $logo-color: #3d5c8d;

    height: 32px;
    padding: 0 8px;
    margin: 4px 0 4px 24px;
    font-family: fonts.$logo-font;
    font-size: 20px;
    color: $logo-color;
    background-color: #fff;
    border-radius: 8px;

    a {
      text-decoration: none;

      &:link,
      &:visited,
      &:active {
        color: $logo-color;
      }
    }
  }

  .navigation {
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    margin: 0 4px;

    .navigation-item {
      display: flex;
      height: 32px;
      margin: 0 4px;

      &::before,
      &::marker {
        content: '';
      }

      .navigation-label {
        $text-color: #333;

        padding: 4px 10px;
        font-weight: 700;
        color: $text-color;
        text-decoration: none;
        background-color: lighten($header-color, 15%);
        border-radius: 8px;

        &:link,
        &:visited,
        &:active {
          color: $text-color;
        }

        &:hover {
          background-color: lighten($header-color, 25%);
        }
      }
    }
  }
}

.content-root {
  margin: 16px;
}
</style>
