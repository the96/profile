<template>
  <Top id="top" />
  <AboutMe id="about-me" />
  <WorkSkill id="work-skill" />
  <OtherSkill id="other-skill" />
  <Works id="works" />
  <Accounts id="accounts" />
</template>

<script>
import Top from '@/components/Top.vue'
import AboutMe from '@/components/AboutMe.vue'
import WorkSkill from '@/components/WorkSkill.vue'
import OtherSkill from '@/components/OtherSkill.vue'
import Works from '@/components/Works.vue'
import Accounts from '@/components/Accounts.vue'

export default {
  components: { Top, AboutMe, WorkSkill, OtherSkill, Works, Accounts },
}
</script>

<style lang="scss">
@use '@/scss/fonts.scss';
@use '@/scss/app.scss';

* {
  padding: 0;
  margin: 0;
}
</style>
