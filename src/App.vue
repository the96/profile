<template>
  <Top :ref="refs[0]" />
  <AboutMe :ref="refs[1]" />
  <WorkSkill :ref="refs[2]" />
  <OtherSkill :ref="refs[3]" />
  <Works :ref="refs[4]" />
  <Accounts :ref="refs[5]" />
</template>

<script>
import Top from '@/components/pages/Top.vue'
import AboutMe from '@/components/pages/AboutMe.vue'
import WorkSkill from '@/components/pages/WorkSkill.vue'
import OtherSkill from '@/components/pages/OtherSkill.vue'
import Works from '@/components/pages/Works.vue'
import Accounts from '@/components/pages/Accounts.vue'

import _ from 'lodash'

export default {
  components: { Top, AboutMe, WorkSkill, OtherSkill, Works, Accounts },
  data() {
    return {
      event: Object,
      scrollIdx: 0,
      scrollEvent: null,
      scrollAt: null,
      refs: [
        //
        'top',
        'about-me',
        'work-skill',
        'other-skill',
        'works',
        'accounts',
      ],
    }
  },
  methods: {
    onScroll(event) {
      this.event = event
      if (this.event.deltaY > 0) {
        this.goToNextElement()
      } else if (this.event.deltaY < 0) {
        this.goToPrevElement()
      }
    },
    goToNextElement() {
      const element = this.getNextElement()
      this.$scrollTo(element.$el)
    },
    goToPrevElement() {
      const element = this.getPrevElement()
      this.$scrollTo(element.$el)
    },
    getNextElement() {
      const y = window.scrollY
      const height = window.innerHeight
      const num = Math.floor(y / height)
      const index = Math.min(num + 1, this.refs.length - 1)
      return this.$refs[this.refs[index]]
    },
    getPrevElement() {
      const y = window.scrollY
      const height = window.innerHeight
      const num = Math.floor(y / height)
      const index = Math.max(num, 0)
      return this.$refs[this.refs[index]]
    },
  },
  mounted() {
    this.scrollEvent = _.throttle(
      (event) => {
        this.onScroll(event)
      },
      100,
      {
        leading: false,
        trailing: true,
      }
    )
    document.addEventListener('wheel', this.scrollEvent, { passive: false })
  },
  unmounted() {
    document.removeEventListener('wheel', this.scrollEvent.cancel)
  },
}
</script>

<style lang="scss">
@use '@/scss/fonts.scss';
@use '@/scss/app.scss';

* {
  padding: 0;
  margin: 0;
}

#id {
  scroll-behavior: smooth;
}
</style>
