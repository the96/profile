<template>
  <div class="skill page">
    <span class="font-xxlarge">Work Skills</span>
    <p>仕事で培ったスキルです。</p>
    <ul class="content">
      <li class="item">
        <span class="about font-xlarge">バックエンド</span>
        <div class="details">
          <p class="description font-medium">
            3年間、モバイルゲームの新機能実装や機能改修のバックエンドの実装を行っていました。
          </p>
          <p class="description font-medium">
            負荷とメンテナンス性の両方を意識して実装したり、レビューすることができます。
          </p>
          <p class="tool-and-other-caption font-large">使用言語など</p>
          <ul class="tool-and-other-list">
            <li class="font-medium">Perl (Plack)</li>
            <li class="font-medium">MySQL</li>
          </ul>
        </div>
      </li>
      <li class="item">
        <span class="about font-xlarge">フロントエンド</span>
        <div class="details">
          <p class="description font-medium">WebViewで動作するモバイルゲームのフロントエンドの開発を行っていました。</p>
          <p class="description font-medium">
            基本のUIやロジックの実装、ちょっとしたアニメーションの実装などが可能です。
          </p>
          <p class="tool-and-other-caption font-large">使用言語など</p>
          <ul class="tool-and-other-list">
            <li class="font-medium">JavaScript (Vue.js)</li>
            <li class="font-medium">SCSS</li>
          </ul>
        </div>
      </li>
      <li class="item">
        <span class="about font-xlarge">スマートフォンアプリ</span>
        <div class="details">
          <p class="description font-medium">
            ゲーム内キャラクターを合成して撮影できるカメラアプリの開発を行いました。
          </p>
          <p class="description font-medium">開発期間2か月で上記アプリの立ち上げからリリースまでを担当しました。</p>
          <p class="tool-and-other-caption font-large">使用言語など</p>
          <ul class="tool-and-other-list">
            <li class="font-medium">Dart (Flutter, Riverpod)</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use '@/scss/page.scss';
@use '@/scss/color.scss';

.skill {
  background-color: color.$indigo-200;

  .content {
    margin: 36px 0;

    .item {
      list-style: none;

      &:nth-child(n + 2) {
        margin-top: 24px;
      }

      .about {
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-decoration-style: solid;
        text-decoration-color: color.$indigo-400;
      }

      .details {
        margin-left: 36px;

        .tool-and-other-caption,
        .tool-and-other-profiency {
          margin-top: 16px;
        }

        .tool-and-other-list {
          margin-left: 24px;
        }
      }
    }
  }
}
</style>
