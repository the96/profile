<template>
  <Top id="top" />
  <AboutMe id="about-me" />
  <WorkSkill id="work-skill" />
  <OtherSkill id="other-skill" />
  <Works id="works" />
  <Accounts id="accounts" />
</template>

<script>
import Top from '@/components/pages/Top.vue'
import AboutMe from '@/components/pages/AboutMe.vue'
import WorkSkill from '@/components/pages/WorkSkill.vue'
import OtherSkill from '@/components/pages/OtherSkill.vue'
import Works from '@/components/pages/Works.vue'
import Accounts from '@/components/pages/Accounts.vue'

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
