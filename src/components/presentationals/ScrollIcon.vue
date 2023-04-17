<template>
  <div class="scroll-icon-wrapper">
    <button class="scroll-icon-prev" v-if="visiblePrevIcon" @click="onPrevClick"></button>
    <button class="scroll-icon-next" v-if="visibleNextIcon" @click="onNextClick"></button>
  </div>
</template>

<script>
export default {
  props: {
    pageCount: Number,
    current: Number,
  },
  computed: {
    visiblePrevIcon() {
      return this.current > 1
    },
    visibleNextIcon() {
      return this.current < this.pageCount
    },
  },
  methods: {
    onPrevClick() {
      this.$emit('onClick', this.current - 1)
    },
    onNextClick() {
      this.$emit('onClick', this.current + 1)
    },
  },
}
</script>

<style lang="scss" scoped>
@use '@/scss/color.scss';

.scroll-icon-wrapper {
  width: fit-content;
  margin: auto;

  .scroll-icon-next {
    position: absolute;
    bottom: 32px;
    left: calc(50% - 15px);
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: 5px solid;
    border-color: transparent transparent color.$grey-700 color.$grey-700;
    transform: rotate(-45deg);
  }

  .scroll-icon-prev {
    position: absolute;
    top: 32px;
    left: calc(50% - 15px);
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: 5px solid;
    border-color: color.$grey-700 color.$grey-700 transparent transparent;
    transform: rotate(-45deg);
  }
}
</style>
