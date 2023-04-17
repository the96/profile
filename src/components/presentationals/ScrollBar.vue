<template>
  <div class="scroll-bar-wrapper">
    <template v-for="num in pageNumbers" :key="num">
      <button class="dot" :class="[getColorClass(num), getSelectedClass(num)]" @click="click(num)"></button>
    </template>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    pageCount: Number,
    current: Number,
  },
  computed: {
    pageNumbers() {
      return _.range(1, this.pageCount + 1)
    },
  },
  methods: {
    getSelectedClass(number) {
      return number === this.current ? 'selected' : ''
    },
    getColorClass(number) {
      return `dot-color-${number}`
    },
    click(num) {
      this.$emit('onClick', num)
    },
  },
}
</script>

<style lang="scss" scoped>
@use '@/scss/color.scss';

$colors: (
  //
  color.$indigo-50,
  color.$indigo-100,
  color.$indigo-200,
  color.$teal-100,
  color.$teal-200,
  color.$light-green-100
);

.scroll-bar-wrapper {
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  height: 100%;

  .dot {
    width: 16px;
    height: 16px;
    margin: 16px;
    list-style: none;
    border: none;
    border-radius: 50%;
  }

  .selected {
    box-sizing: content-box;
    margin-right: calc(16px - 3px);
    border: 3px solid color.$white;
  }

  $i: 1;

  @each $color in $colors {
    .dot-color-#{$i} {
      background-color: $color;
    }

    $i: $i + 1;
  }
}
</style>
