<template>
  <div class="skill page">
    <span class="font-xxlarge">Work</span>
    <p>過去の制作物です。工事中</p>
    <ul class="content">
      <li class="item">
        <p class="description">制作物というより記事ですが、お気に入りのワンライナーなのでぜひ。</p>
        <a class="item-link description" href="https://tech.mobilefactory.jp/entry/2021/12/23/000000"
          >gitを少し快適に扱うためのワンライナー3選</a
        >
      </li>
      <li class="item">
        <p class="description">Google Meetの出欠確認をするChrome拡張です。</p>
        <p class="description">
          業務中のMTGでメンバーの確認に時間がかかっていて無駄だと思ったため、拡張機能として実装しました。
        </p>
        <p class="description">（現在では公式で出欠確認できるようになったため、晴れてお役御免となりました）</p>
        <RepositoryCard owner-name="the96" repos-name="AttendanceChecker" class="card" />
      </li>
      <li class="item">
        <p class="description">ぷよぷよテトリスの連戦の際の勝敗を自動でカウントするツールです。</p>
        <p class="description">OpenCVでプレイ画面を監視し、勝敗が表示された回数をカウントします。</p>
        <RepositoryCard owner-name="the96" repos-name="PT-Logger" class="card" />
      </li>
      <li class="item">
        <p class="description">このサイトのリポジトリです。</p>
        <p class="description">
          突貫工事でしたが、普段触らないViteやlint、prettierなどのフロントの環境構築をちょっとがんばりました
        </p>
        <RepositoryCard owner-name="the96" repos-name="profile" class="card" />
      </li>
    </ul>
  </div>
</template>

<script>
import RepositoryCard from '@/components/presentationals/RepositoryCard.vue'

export default {
  components: {
    RepositoryCard,
  },
}
</script>

<style scoped lang="scss">
@use '@/scss/page.scss';
@use '@/scss/fonts.scss';
@use '@/scss/color.scss';

.skill {
  background-color: color.$teal-200;

  .content {
    margin: 36px 0;

    .item {
      list-style: none;

      @media screen and (max-width: 800px) {
        .description {
          font-size: fonts.$size-xsmall;
        }
      }

      &:nth-child(n + 2) {
        margin-top: 24px;
      }

      a.item-link {
        &::before {
          display: inline-block;
          text-decoration: none;
          content: '・';
        }
      }

      .card {
        margin: 24px auto 0;
      }
    }
  }
}
</style>
