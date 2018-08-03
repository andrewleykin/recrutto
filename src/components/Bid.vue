<template lang="pug">
  .bid
    .bid__breadcrumbs.breadcrumbs__block
      app-breadcrumbs(:data="breadcrumbs")
    .bid__header
      .bid__title
        app-page-title(:title="title")
    .bid__content
      .bid__btn
        app-button(:info="btn")
      .bid__table
        app-table(:table="table")
</template>

<script>
import {mapGetters} from 'vuex'
import AppBreadcrumbs from '@/components/Breadcrumbs'
import AppPageTitle from '@/components/PageTitle'
import AppButton from '@/components/Button'
import AppTable from '@/components/Table'

export default {
  name: 'AppBid',
  components: {
    AppBreadcrumbs,
    AppPageTitle,
    AppButton,
    AppTable
  },
  computed: {
    ...mapGetters('bid', {
      table: 'table'
    })
  },
  data () {
    return {
      breadcrumbs: [
        {
          text: 'Панель управления',
          href: '#'
        },
        {
          text: 'Заявки',
          href: '#'
        }
      ],
      title: 'Заявки',
      btn: {
        text: 'Новая Заявка',
        link: true,
        href: '/bid/new'
      }
    }
  }
}
</script>
