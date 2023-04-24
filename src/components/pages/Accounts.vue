<template>
  <div class="accounts page">
    <span class="font-xxlarge">Account</span>
    <p class="font-medium">ご連絡は下記アカウントまでお願いします。</p>
    <GithubAccountCard user-name="the96" class="card"></GithubAccountCard>
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

  .card {
    margin-top: 24px;
  }
}
</style>
