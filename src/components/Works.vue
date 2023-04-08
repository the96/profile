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
        <p>Google Meetの出欠確認ツールでした。</p>
        <p>公式で出欠確認できるようになったため、晴れてお役御免となりました。</p>
        <div class="item-link">
          <object
            type="image/svg+xml"
            data="https://gh-card.dev/repos/the96/AttendanceChecker.svg?fullname=&link_target=_blank"
          ></object>
        </div>
      </li>
    </ul>
  </div>
</template>

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

      div.item-link {
        margin: 24px;
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
