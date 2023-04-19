<template>
  <div class="scroll-controller-root">
    <div class="scroll-wrapper">
      <ScrollBar :pageCount="pageCount" :current="currentPageNumber" class="scroll-bar" @onClick="clickScroller" />
    </div>
  </div>
  <Top :ref="refs[0]" :id="refs[0]" />
  <AboutMe :ref="refs[1]" :id="refs[1]" />
  <WorkSkill :ref="refs[2]" :id="refs[2]" />
  <OtherSkill :ref="refs[3]" :id="refs[3]" />
  <Works :ref="refs[4]" :id="refs[4]" />
  <Accounts :ref="refs[5]" :id="refs[5]" />
</template>

<script>
import Top from '@/components/pages/Top.vue'
import AboutMe from '@/components/pages/AboutMe.vue'
import WorkSkill from '@/components/pages/WorkSkill.vue'
import OtherSkill from '@/components/pages/OtherSkill.vue'
import Works from '@/components/pages/Works.vue'
import Accounts from '@/components/pages/Accounts.vue'

import _ from 'lodash'
import ScrollBar from '@/components/presentationals/ScrollBar.vue'

export default {
  components: {
    //
    Top,
    AboutMe,
    WorkSkill,
    OtherSkill,
    Works,
    Accounts,
    //
    ScrollBar,
  },
  data() {
    return {
      event: Object,
      scrollIdx: 1,
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
  computed: {
    pageCount() {
      return this.refs.length
    },
    currentPageNumber() {
      return this.scrollIdx + 1
    },
  },
  methods: {
    clickScroller(num) {
      this.goToIdx(num - 1)
    },
    onScroll(event) {
      this.event = event
      const idx = this.getCurrentElementIdx()
      if (this.event.deltaY > 0) {
        const nextIdx = this.getNextElementIdx(idx)
        this.goToIdx(nextIdx)
      } else if (this.event.deltaY < 0) {
        const prevIdx = this.getPrevElementIdx(idx)
        this.goToIdx(prevIdx)
      }
    },
    goToIdx(idx) {
      const element = this.$refs[this.refs[idx]]
      if (!element) return
      this.$scrollTo(element.$el)
      this.scrollIdx = idx
    },
    getCurrentElementIdx() {
      const y = window.scrollY
      const height = window.innerHeight
      return Math.floor(y / height)
    },
    getNextElementIdx(num) {
      return Math.min(num + 1, this.refs.length - 1)
    },
    getPrevElementIdx(num) {
      return Math.max(num, 0)
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

.scroll-controller-root {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .scroll-wrapper {
    position: sticky;
    top: 0;
    width: 100vw;
    height: 100vh;
  }
}
</style>
