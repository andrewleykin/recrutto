<template lang="pug">
  .statistics
    .statistics__breadcrumbs.breadcrumbs__block
      app-breadcrumbs(:data="breadcrumbs")
    .statistics__header
      .statistics__title
        app-page-title(:title="title")
      .statistics__calendar
        app-calendar
    .statistics__infoblock
      app-info-block(:data="infoBlock")
    .statistics__content.row
      .statistics__graph.col-2.block
        .statistics__graph-header.block__header
          span.statistics__graph-title.block__title Текучесть кадров
          .statistics__graph-ellipsis
            include ../assets/pug/ellipsis.pug
        .statistics__graph-content
          app-graph-line(:dataset="graph" :width="400" :height="240" class="graph-line")
      .statistics__bid.col-1.block
        .statistics__bid-header.block__header
          span.statistics__bid-title.block__title ЗАЯВКИ
          .statistics__bid-ellipsis
            include ../assets/pug/ellipsis.pug
        .statistics__bid-content
          .statistics__bid-list
            .statistics__bid-item.ready
              .statistics__bid-info
                p.statistics__bid-text Елена Соколова
                  span разместила новую заявку
                  | 5 кассиров в г. Муром (Петровская, 15) в магазин «Продукты»
                .statistics__bid-time
                  .statistics__bid-icon
                    img(src="/static/img/general/time.png" alt="time icon")
                  span.statistics__bid-timetext 1 ДЕНЬ НАЗАД
              .statistics__bid-status
                .statistics__bid-man
                  img.statistics__bid-man--white(src="/static/img/general/man-white.png" alt="man white icon")
                  img.statistics__bid-man--black(src="/static/img/general/man-black.png" alt="man black icon")
                p.statistics__bid-text Заявка обработана
            .statistics__bid-item.work
              .statistics__bid-info
                p.statistics__bid-text Марина Семаева
                  span разместила новую заявку
                  | 12 кассиров, 10 охранников, 10 консультантов в г. Владимир (Ленина, 5) в магазин «Продукты»
                .statistics__bid-time
                  .statistics__bid-icon
                    img(src="/static/img/general/time.png" alt="time icon")
                  span.statistics__bid-timetext 4 ДНЯ НАЗАД
              .statistics__bid-status
                .statistics__bid-man
                  img.statistics__bid-man--white(src="/static/img/general/man-white.png" alt="man white icon")
                  img.statistics__bid-man--black(src="/static/img/general/man-black.png" alt="man black icon")
                p.statistics__bid-text Заявка выполнена на
                  i.statistics__bid-text-perc 78%
</template>

<script>
import AppBreadcrumbs from '@/components/Breadcrumbs'
import AppPageTitle from '@/components/PageTitle'
import AppInfoBlock from '@/components/InfoBlock'
import AppCalendar from '@/components/Calendar'
import AppGraphLine from '@/components/GraphLine'

export default {
  name: 'AppStatistics',
  components: {
    AppBreadcrumbs,
    AppPageTitle,
    AppInfoBlock,
    AppCalendar,
    AppGraphLine
  },
  data () {
    return {
      breadcrumbs: [
        {
          text: 'Панель управления',
          href: '#'
        },
        {
          text: 'Общая статистика',
          href: '#'
        }
      ],
      title: 'Общая статистика',
      infoBlock: [
        {
          cnt: 5
        },
        {
          cnt: 217
        },
        {
          cnt: 58
        },
        {
          cnt: 125
        }
      ],
      graph: [
        {
          label: 'Уволено',
          backgroundColor: 'rgba(30,176,228,0.5)',
          data: [40, 20, 52, 39, 50, 40, 39, 140, 40, 20, 52, 20]
        },
        {
          label: 'Нанято',
          backgroundColor: 'rgba(36,123,160,0.5)',
          data: [20, 60, 52, 32, 30, 50, 32, 25, 20, 30, 57, 30]
        }
      ]
    }
  }
}
</script>
