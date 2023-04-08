<template>
  <div class="skill page">
    <span class="font-xxlarge">Other Skills</span>
    <p>趣味や業務の本筋から逸れたスキルです。</p>
    <ul class="content">
      <li class="item">
        <span class="about font-xlarge">ワンライナー / シェル</span>
        <div class="details">
          <p class="description">
            直近checkoutしたブランチのログを出力したり、developとの差分からテストの記述されていないメソッドを検索したり。
          </p>
          <p class="description">業務効率化のために書くことが多いです。</p>
          <p class="tool-and-other-caption font-large">好きなコマンド</p>
          <ul class="tool-and-other-list">
            <li>awk</li>
            <li>rg</li>
            <li>fd</li>
            <li>xargs</li>
          </ul>
        </div>
      </li>

      <li class="item">
        <span class="about font-xlarge">その他プログラミング言語</span>
        <div class="details">
          <p class="description">趣味開発や学生時代、研究や講義でに触っていた言語など。</p>
          <p class="description">関数型のような書き方もできる言語はたのしいです。</p>
          <p class="tool-and-other-caption font-large">使用言語</p>
          <ul class="tool-and-other-list">
            <li>Java</li>
            <li>Scala</li>
            <li>C</li>
            <li>Ruby</li>
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
  background-color: color.$teal-100;

  .content {
    margin: 36px 0;

    .item {
      &:nth-child(n + 2) {
        margin-top: 24px;
      }

      &::before,
      &::marker {
        content: '';
      }

      .about {
        text-decoration: solid underline color.$teal-400 1px;
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
