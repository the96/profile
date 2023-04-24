<template>
  <div class="account-card">
    <div v-if="finishedLoadUser">
      <body class="account" @click="openGitHubProfile()">
        <div class="avatar">
          <img :src="user.avatar_url" />
        </div>
        <div class="name-area">
          <h1 class="name font-bold font-large">{{ user.name }}</h1>
          <span class="nickname font-xthin">{{ user.name }}</span>
        </div>
        <div class="profile">
          <p class="bio font-xsmall font-thin">{{ user.bio }}</p>
          <div class="social font-xxxsmall">
            <a class="social-link" :href="followersPageLink"
              ><span>{{ user.followers }}</span
              ><span class="postfix"> followers</span></a
            ><span class="split">·</span
            ><a class="social-link" :href="followingPageLink"
              ><span>{{ user.following }}</span
              ><span class="postfix"> following</span></a
            >
          </div>
        </div>
      </body>
      <div class="github">
        <img class="github-icon" src="@/assets/github-mark.png" href="https://github.com" />
        <a class="github-link font-xxsmall" href="https://github.com">github.com</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userName: String,
  },
  data() {
    return {
      user: Object,
    }
  },
  computed: {
    finishedLoadUser() {
      return !!this.user && Object.keys(this.user).length > 0
    },
    followersPageLink() {
      return `${this.user.html_url}?tab=followers`
    },
    followingPageLink() {
      return `${this.user.html_url}?tab=following`
    },
  },
  methods: {
    fetchGitHubUser() {
      const apiUrl = 'https://api.github.com/users/{username}'
      fetch(apiUrl.replace('{username}', this.userName))
        .then((response) => response.json())
        .then((data) => {
          this.user = data
        })
    },
    openGitHubProfile() {
      window.open(this.user.html_url)
    },
  },
  mounted() {
    this.fetchGitHubUser()
  },
}
</script>

<style scoped lang="scss">
@use '@/scss/page.scss';
@use '@/scss/color.scss';

.account-card {
  $width: 240px;
  $height: 450px;
  $padding: 20px;

  position: relative;
  height: $height;
  font-family: 'Noto Sans JP';
  cursor: pointer;
  background-color: color.$white;
  border: 1px solid color.$grey-400;
  border-radius: 8px;

  .account {
    position: relative;
    width: $width;
    padding: $padding;

    .avatar {
      $avatar-radius: 100px;

      width: $avatar-radius * 2;
      height: $avatar-radius * 2;
      margin: auto;
      overflow: hidden;
      border: 2px solid color.$grey-300;
      border-radius: $avatar-radius;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .name-area {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 16px 0;
    }

    .profile {
      display: flex;
      flex-direction: column;

      .nickname {
        color: color.$grey-500;
      }

      .bio {
        line-break: anywhere;
      }

      .social {
        margin-top: 12px;

        .social-link {
          color: color.$black;
          text-decoration: none;

          &:hover,
          &:visited,
          &:link {
            color: none;
          }

          .postfix {
            color: color.$grey-500;
          }
        }

        .split {
          margin: 0 0.25em;
        }
      }
    }
  }

  .github {
    position: absolute;
    right: 0;
    bottom: 0;
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
