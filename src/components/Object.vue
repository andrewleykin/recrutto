<template lang="pug">
  .object
    .object__breadcrumbs.breadcrumbs__block
      app-breadcrumbs(:data="breadcrumbs")
    .object__header
      .object__title
        app-page-title(:title="maindata.title")
      .object__calendar
        app-calendar
    .object__infoblock
      app-info-block(:data="maindata.infoBlock")
    .object__content.row
      .object__graph.col-2.block
        .object__graph-header.block__header
          span.object__graph-title.block__title Текучесть кадров
          .object__graph-ellipsis
            include ../assets/pug/ellipsis.pug
        .object__graph-content
          app-graph-line(:dataset="maindata.dataset" :width="400" :height="240" class="graph-line")
      .object__card.col-2
        app-card-block(:info="maindata.cardblock")
    .object__table
      app-table(:table="maindata.table")
</template>

<script>
import AppBreadcrumbs from '@/components/Breadcrumbs'
import AppPageTitle from '@/components/PageTitle'
import AppInfoBlock from '@/components/InfoBlock'
import AppCalendar from '@/components/Calendar'
import AppGraphLine from '@/components/GraphLine'
import AppCardBlock from '@/components/CardBlock'
import AppTable from '@/components/Table'

export default {
  name: 'AppObject',
  components: {
    AppBreadcrumbs,
    AppPageTitle,
    AppInfoBlock,
    AppCalendar,
    AppGraphLine,
    AppCardBlock,
    AppTable
  },
  mounted () {
    this.routeUpdate()
  },
  methods: {
    routeUpdate () {
      this.city = this.$route.params.city
      switch (this.city) {
        case 'moscow':
          this.city = 'Москва'
          break
        case 'volgograd':
          this.city = 'Волгоград'
          break
        case 'tambov':
          this.city = 'Тамбов'
          break
        case 'sankt-peterburg':
          this.city = 'Санкт-Петербург'
          break
        case 'tumen':
          this.city = 'Тюмень'
          break
        default:
          this.city = 'Москва'
          break
      }
      this.object = this.$route.params.id
      switch (this.object) {
        case 'shop':
          this.object = 'Магазины'
          break
        case 'office':
          this.object = 'Офисы'
          break
        case 'stock':
          this.object = 'Склады'
          break
        default:
          this.object = 'Магазины'
          break
      }
      this.breadcrumbs[2].text = this.city
      this.breadcrumbs[3].text = this.object
    }
  },
  data () {
    return {
      city: '',
      object: '',
      breadcrumbs: [
        {
          text: 'Панель управления',
          href: '#'
        },
        {
          text: 'Список объектов',
          href: '#'
        },
        {
          text: null,
          href: '#'
        },
        {
          text: null,
          href: '#'
        },
        {
          text: '«Продукты», Ленинский проспект, д.15',
          href: '#'
        }
      ]
    }
  },
  computed: {
    maindata () {
      var info = {
        city: this.$route.params.city,
        object: this.$route.params.id
      }
      return this.$store.getters['object/main'](info)
    }
  },
  watch: {
    '$route' (to, from) {
      this.routeUpdate()
    }
  }
}
</script>
