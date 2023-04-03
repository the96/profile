<template>
  <h2>ColorScheme</h2>
  <button @click="changeScheme()">change scheme</button>
  <h3>colorScheme: {{ currentSchemeKey }}</h3>
  <template v-for="colorCode in currentScheme" :key="colorCode.key">
    <div :style="{ background: getBackgroundColor(colorCode) }">
      <div class="color-sample" :style="{ background: colorCode }" />
      <span class="color-code" :style="{ color: colorCode }">{{ colorCode }}</span>
    </div>
  </template>

  <div ref="tweet" class="tweet">
    <blockquote class="twitter-tweet" data-partner="tweetdeck">
      <p lang="ja" dir="ltr">
        カラースキーム考えるの面倒くさくてChatGPTに考えてもらった
        <a href="https://t.co/h7TCykBt3Y">pic.twitter.com/h7TCykBt3Y</a>
      </p>
      &mdash; the96 (@the96pm)
      <a href="https://twitter.com/the96pm/status/1642842989994336257?ref_src=twsrc%5Etfw">April 3, 2023</a>
    </blockquote>
  </div>
</template>

<script>
const greenScheme = ['#0B3C49', '#006D77', '#00A5A5', '#F2D7B6', '#BF9D7E']

const blueScheme = ['#2B2D42', '#8D99AE', '#B0B4C1', '#F7F7FF', '#FF2E63']

const turquoiseScheme = ['#00B4A9', '#F7F7FF', '#394648', '#FFA8B5', '#D1D1D1']

const bluePurpleScheme = ['#1A1B2E', '#2F2E41', '#9A8C98', '#E1DBE8', '#FFCAD4']

const deepGreenScheme = ['#2E3B2F', '#405F43', '#9BBC97', '#DDECC2', '#F6F7D7']

const lightBluePurpleScheme = ['#363062', '#574B90', '#A66DD1', '#F2E9E4', '#D97D8F']

const blueAndGreenScheme = ['#F5F5F5', '#333333', '#3CB371', '#ADD8E6', '#FFFFFF']
export default {
  data() {
    return {
      schemeIndex: 0,
      schemes: [
        {
          key: 'GreenScheme',
          scheme: greenScheme,
        },
        {
          key: 'BlueScheme',
          scheme: blueScheme,
        },
        {
          key: 'turquoiseScheme',
          scheme: turquoiseScheme,
        },
        {
          key: 'BluePurpleScheme',
          scheme: bluePurpleScheme,
        },
        {
          key: 'DeepGreenScheme',
          scheme: deepGreenScheme,
        },
        {
          key: 'LightBluePurpleScheme',
          scheme: lightBluePurpleScheme,
        },
        {
          key: 'BlueAndGreenScheme',
          scheme: blueAndGreenScheme,
        },
      ],
    }
  },
  computed: {
    currentSchemeKey() {
      return this.schemes[this.schemeIndex].key
    },
    currentScheme() {
      return this.schemes[this.schemeIndex].scheme
    },
  },
  mounted() {
    const { tweet } = this.$refs
    twttr.ready(() => {
      twttr.widgets.load(tweet)
    })
  },
  methods: {
    changeScheme() {
      const lastIndex = this.schemes.length - 1
      if (lastIndex >= this.schemeIndex + 1) {
        this.schemeIndex += 1
      } else {
        this.schemeIndex = 0
      }
    },
    getBackgroundColor(colorCode) {
      /* eslint no-bitwise: ["error", { "allow": ["&", ">>"] }] */
      const hex = parseInt(colorCode.replace('#', ''), 16)
      const red = hex & (0xff0000 >> 4)
      const green = hex & (0x00ff00 >> 2)
      const blue = hex & (0x0000ff >> 0)
      const needWhite = (red < 0x7f ? 1 : 0) + (green < 0x7f ? 1 : 0) + (blue < 0x7f ? 1 : 0)
      return needWhite ? '#ffffff' : '#000000'
    },
  },
}
</script>

<style scoped>
.color-sample {
  width: 1em;
  height: 1em;
  border-radius: 0.5em;
  border: 0px;
}

.tweet {
  margin-top: 48px;
}
</style>
