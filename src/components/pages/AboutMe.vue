<template>
  <div class="about-me page">
    <p class="font-xxlarge title">About me</p>
    <p class="font-medium">経歴や興味など、簡単なプロフィールです。</p>
    <div class="content">
      <div class="icon">
        <img src="/src/assets/icon.jpg" class="icon-img" />
      </div>
      <div class="profile">
        <div class="information">
          <div class="info-group">
            <span class="label font-small">name.</span><span class="name font-large">the96</span>
          </div>
          <div class="info-group">
            <span class="label font-small">about.</span>
            <div class="about-group font-medium">
              <p class="about">2020年3月、4年制大学で情報学を修了し、同年4月に都内のIT企業に入社しました。</p>
              <br />
              <p class="about">
                業務では、Web系の技術を用いてモバイルゲームの新機能開発・運用に従事し、<span class="emphasis"
                  >設計から実装、テスト、レビューまで</span
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
                そのほか、APIのレスポンスタイムの計測や、チーム内の一部運用フローの改善など、改善業務を通してチームをサポートする事にも取り組んできました。
              </p>
              <br />
              <p class="about">
                私は、<span class="emphasis">ユーザが夢中になれるような充実感を提供できるエンターテイメント</span
                >を開発することにやりがいを感じます。
              </p>
              <p class="about">また、技術面ではパフォーマンスを意識した実装に興味があります。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/scss/page.scss';
@use '@/scss/color.scss';
@use '@/scss/fonts.scss';

.about-me {
  background-color: color.$indigo-100;

  .content {
    display: flex;

    @media screen and (max-width: 599px) {
      margin: 8px 0;
    }

    @media screen and (min-width: 600px) {
      margin: 36px 0;
    }

    .emphasis {
      font-weight: 700;
      text-decoration: underline;
      text-decoration-thickness: 4px;
      text-decoration-style: solid;
      text-decoration-color: color.$indigo-700;
    }

    .icon {
      flex-shrink: 0;
      overflow: hidden;
      border: 2px solid #e0e0e0;
      box-shadow: 3px 3px 6px 0 #777;

      .icon-img {
        border: 2px solid #fff;
      }

      @media screen and (max-width: 599px) {
        display: none;
      }

      @media screen and (min-width: 600px) {
        $size: 200px;

        width: $size;
        height: $size;
        border-radius: calc($size / 2);

        .icon-img {
          width: $size - 4px;
          height: $size - 4px;
          border-radius: calc($size / 2 - 4px);
        }
      }
    }

    .information {
      @media screen and (min-width: 600px) {
        margin-left: 24px;
      }

      line-break: anywhere;

      .info-group {
        margin: 0 0 12px;

        .label {
          color: color.$grey-700;
        }

        .name {
          margin-left: 16px;
          font-weight: 700;
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
}
</style>
