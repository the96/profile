<template>
  <div class="repository-card">
    <div v-if="finishedLoadRepository">
      <body class="repository" @click="openGitHubRepository()">
        <div class="image-wrapper">
          <img class="image" :src="owner.avatar_url" />
        </div>
        <div class="information">
          <div class="name font-bold">
            <span class="owner font-medium">{{ owner.login }}</span
            ><span class="split font-small">/</span><span class="repos font-medium">{{ repository.name }}</span>
          </div>
          <div class="description">
            <p class="font-xxsmall font-thin">{{ repository.description }}</p>
          </div>
        </div>
      </body>
      <footer class="github">
        <img class="github-icon" src="@/assets/github-mark.png" href="https://github.com" />
        <a class="github-link font-xxsmall" href="https://github.com">github.com</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reposName: String,
    ownerName: String,
  },
  data() {
    return {
      repository: Object,
    }
  },
  computed: {
    owner() {
      return this.repository.owner
    },
    finishedLoadRepository() {
      return !!this.repository && Object.keys(this.repository).length > 0
    },
  },
  methods: {
    fetchGitHubRepository() {
      const apiUrl = 'https://api.github.com/repos/{owner}/{repos}'
      fetch(apiUrl.replace('{owner}', this.ownerName).replace('{repos}', this.reposName))
        .then((response) => response.json())
        .then((data) => {
          this.repository = data
        })
    },
    openGitHubRepository() {
      window.open(this.repository.html_url)
    },
  },
  mounted() {
    this.fetchGitHubRepository()
  },
}
</script>

<style scoped lang="scss">
@use '@/scss/page.scss';
@use '@/scss/color.scss';

.repository-card {
  @media screen and (max-width: 599px) {
    $width: 320px;
    $height: 160px;

    width: $width;
    min-width: $width;
    max-width: $width;
    height: $height;
    min-height: $height;
    max-height: $height;

    .repository {
      $img-margin: 20px;
      $img-radius: calc($height / 2) - $img-margin;

      .image-wrapper {
        top: $img-margin;
        right: $img-margin;
        border-radius: $img-radius;

        .image {
          width: calc($img-radius * 2);
          height: calc($img-radius * 2);
        }
      }
    }

    .information {
      max-width: calc($width * 0.7);

      .description {
        margin-top: 8px;
      }
    }

    .github {
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: right;
      margin: 0 8px 8px;

      .github-icon {
        width: 28px;
      }
    }
  }

  @media screen and (min-width: 600px) {
    $width: 540px;
    $height: 160px;

    width: $width;
    min-width: $width;
    max-width: $width;
    height: $height;
    min-height: $height;
    max-height: $height;

    .repository {
      $img-margin: 20px;
      $img-radius: calc($height / 2) - $img-margin;

      .image-wrapper {
        top: $img-margin;
        right: $img-margin;
        border-radius: $img-radius;

        .image {
          width: calc($img-radius * 2);
          height: calc($img-radius * 2);
        }
      }
    }

    .information {
      max-width: calc($width * 0.7);

      .description {
        margin-top: 8px;
      }
    }

    .github {
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: right;
      margin: 0 8px 8px;

      .github-icon {
        width: 28px;
      }
    }
  }

  position: relative;
  overflow: hidden;
  font-family: 'Noto Sans JP';
  cursor: pointer;
  background-color: color.$white;
  border: 1px solid color.$grey-400;
  border-radius: 8px;

  .repository {
    margin: 12px;

    .image-wrapper {
      position: absolute;
      z-index: 1;
      overflow: hidden;

      .image {
        filter: opacity(0.5);
      }
    }

    .information {
      position: relative;
      z-index: 2;

      .name {
        display: flex;
        align-items: center;
        color: color.$black;
      }

      .description {
        margin-top: 8px;
      }
    }
  }

  .github {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: right;
    margin: 0 8px 8px;

    .github-icon {
      width: 28px;
    }

    .github-link {
      margin-left: 4px;
      color: color.$grey-700;
      text-decoration: none;
      vertical-align: baseline;

      &:hover,
      &:visited,
      &:link {
        color: none;
      }
    }
  }
}
</style>
