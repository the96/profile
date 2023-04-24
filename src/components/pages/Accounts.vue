<template>
  <div class="accounts page">
    <span class="font-xxlarge">Account</span>
    <GithubAccountCard user-name="the96"></GithubAccountCard>
  </div>
</template>

<script>
import GithubAccountCard from '@/components/presentationals/GithubAccountCard.vue'

export default {
  components: {
    GithubAccountCard,
  },
}
</script>

<style scoped lang="scss">
@use '@/scss/page.scss';
@use '@/scss/color.scss';

.accounts {
  background-color: color.$light-green-100;

  .content {
    margin: 36px 0;

    .item {
      &:nth-child(n + 2) {
        margin-top: 24px;
      }

      &::before,
      &::marker {
        content: '';
      }

      a.item-link {
        &::before {
          display: inline-block;
          text-decoration: none;
          content: '・';
        }
      }

      div.item-link {
        margin: 24px;
      }

      .about {
        text-decoration: solid underline color.$indigo-400 1px;
      }

      .details {
        margin-left: 36px;

        .tool-and-other-caption,
        .tool-and-other-profiency {
          margin-top: 16px;
        }

        .tool-and-other-list {
          margin-left: 24px;
        }
      }
    }
  }
}
</style>
