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
  background-color: $header-color;
  height: 48px;

  .logo {
    $logo-color: #3d5c8d;

    margin: 4px 0 4px 24px;
    border-radius: 8px;
    background-color: #fff;
    padding: 0 8px;
    height: 32px;
    color: $logo-color;
    font-size: 20px;
    font-family: fonts.$logo-font;

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
    margin: 0 4px;
    width: 100%;
    height: 48px;

    .navigation-item {
      display: flex;
      margin: 0 4px;
      height: 32px;

      &::before,
      &::marker {
        content: '';
      }

      .navigation-label {
        $text-color: #333;

        border-radius: 8px;
        background-color: lighten($header-color, 15%);
        padding: 4px 10px;
        color: $text-color;
        font-weight: 700;
        text-decoration: none;

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
