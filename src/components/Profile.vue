<template>
  <div class="about-me">
    <h2>About me</h2>
    <div class="profile" v-if="visible">
      <div class="icon">
        <img src="src/assets/icon.jpg" class="icon-img" />
      </div>
      <div class="information">
        <div class="info-group"><span class="label">name.</span><span class="name">the96</span></div>
        <div class="info-group">
          <span class="label">about.</span>
          <div class="about-group">
            <p class="about">2020年3月、4年制大学で情報学を修了し、同年4月に都内のIT企業に入社しました。</p>
            <br />
            <p class="about">
              業務では、Web系の技術を用いてモバイルゲームの新機能開発・運用に従事し、<span class="emphasis">設計から実装、テスト、レビューまで</span
              >、リリースに必要な業務を一気通貫して経験しました。
            </p>
            <p class="about">
              その中でも主に<span class="emphasis">バックエンドの負荷を意識した実装</span
              >に感心を持ち、ボトルネックとなりがちなDB、特にMySQLに興味を持っています。
            </p>
            <br />
            <p class="about">
              新機能の実装や不具合の修正のほかにも、型チェックを追加したりPerl::Criticの導入など、開発環境の改善にも積極的に取り組んでいます。
            </p>
            <p class="about">
              そのほか、APIのレスポンスタイムの計測や、チーム内の非常時のフローの改善など、改善業務を通してチームをサポートする事にも取り組んできました。
            </p>
            <br />
            <p class="about">
              私は、<span class="emphasis">ユーザが夢中になれるような充実感を提供できるエンターテイメント</span>を開発することにやりがいを感じます。
            </p>
            <p class="about">また、技術面ではパフォーマンスを意識した実装に興味があります。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    }
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible
    },
  },
}
</script>

<style scoped lang="scss">
@use '@/scss/color.scss';
@use '@/scss/fonts.scss';

.profile {
  display: flex;
  margin: 36px 0;

  .emphasis {
    font-weight: 700;
    text-decoration: underline solid 4px color.$main-color;
  }

  .icon {
    $size: 200px;

    flex-shrink: 0;
    box-shadow: 3px 3px 6px 0 #777;
    border: 2px solid #e0e0e0;
    border-radius: calc($size / 2);
    width: $size;
    height: $size;
    overflow: hidden;

    .icon-img {
      border: 2px solid #fff;
      border-radius: calc($size / 2 - 4px);
      width: $size - 4px;
      height: $size - 4px;
    }
  }

  .information {
    margin-left: 24px;
    line-break: anywhere;

    .info-group {
      margin: 0 0 12px;

      .label {
        color: color.$gray;
        font-size: fonts.$size-small;
      }

      .name {
        margin-left: 16px;
        font-weight: 700;
        font-size: fonts.$size-large;
      }

      .about-group {
        margin-top: 16px;

        .about {
          margin-left: 16px;
          text-indent: 1em;
        }
      }
    }
  }
}
</style>
