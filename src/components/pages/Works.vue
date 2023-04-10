<template>
  <div class="skill page">
    <span class="font-xxlarge">Work</span>
    <p>過去の制作物です。工事中</p>
    <ul class="content">
      <li class="item">
        <p>制作物というより記事ですが、お気に入りのワンライナーなのでぜひ。</p>
        <a class="item-link" href="https://tech.mobilefactory.jp/entry/2021/12/23/000000"
          >gitを少し快適に扱うためのワンライナー3選</a
        >
      </li>
      <li class="item">
        <p>Google Meetの出欠確認をするChrome拡張です。</p>
        <p>業務中のMTGでメンバーの確認に時間がかかっていて無駄だと思ったため、拡張機能として実装しました。</p>
        <p>現在では公式で出欠確認できるようになったため、晴れてお役御免となりました。</p>
        <RepositoryCard owner-name="the96" repos-name="AttendanceChecker" class="card" />
      </li>
      <li class="item">
        <p>ぷよぷよテトリスの勝敗を自動でカウントするツールです。</p>
        <p>
          ぷよぷよ公式SNSで公開<a href="https://puyo-camp.jp/posts/57455">[1]</a
          ><a href="https://puyo-camp.jp/posts/57876">[2]</a>し、コミュニティ内で当時のデイリー2,
          3位くらいの反応をいただきました。
        </p>
        <RepositoryCard owner-name="the96" repos-name="PT-Logger" class="card" />
      </li>
      <li class="item">
        <p>このサイトのリポジトリです。</p>
        <p>突貫工事でしたが、普段触らないViteやlint、prettierなどのフロントの環境構築をちょっとがんばりました</p>
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
@use '@/scss/color.scss';

.skill {
  background-color: color.$teal-200;

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

      .about {
        text-decoration: solid underline color.$indigo-400 1px;
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
