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
    <div class="content">
      <router-view name="main-content-view" />
    </div>
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
@use '@/color.scss';

$header-height: 64px;
.header {
  $header-color: color.$main-color;

  display: flex;
  align-items: center;
  background-color: $header-color;
  height: $header-height;

  .logo {
    display: flex;
    align-items: center;
    margin: 4px 0 4px 24px;
    border-radius: 8px;
    background-color: #fff;
    padding: 0 8px;
    height: 48px;
    color: color.$logo-color;
    font-size: 20px;
    font-family: fonts.$logo-font;

    a {
      text-align: center;
      text-decoration: none;

      &:link,
      &:visited,
      &:active {
        color: color.$logo-color;
      }
    }
  }

  .navigation {
    display: flex;
    align-items: center;
    margin: 0 4px;
    width: 100%;
    .navigation-item {
      display: flex;
      align-items: center;
      margin: 0 4px;
      border-radius: 8px;
      background-color: lighten($header-color, 15%);
      height: 48px;

      &::before,
      &::marker {
        content: '';
      }

      &:hover {
        background-color: lighten($header-color, 25%);
      }

      .navigation-label {
        padding: 4px 10px;
        font-weight: 700;
        text-decoration: none;

        &:link,
        &:visited,
        &:active {
          color: color.$text-color;
        }
      }
    }
  }
}

.content-root {
  position: absolute;
  top: $header-height;
  background-color: color.$background-color;
  width: 100%;

  .content {
    margin: auto;
    background-color: color.$white;
    padding: 16px 48px 96px;
    width: 80vw;
  }
}
</style>
