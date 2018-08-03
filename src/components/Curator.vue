<template lang="pug">
  .curator
    .curator__breadcrumbs.breadcrumbs__block
      app-breadcrumbs(:data="breadcrumbs")
    .curator__header
      .curator__title
        app-page-title(:title="title")
    .curator__content
      .curator__btn
        app-button(:info="btn")
      .curator__table
        app-table(:table="table")
</template>

<script>
import AppBreadcrumbs from '@/components/Breadcrumbs'
import AppPageTitle from '@/components/PageTitle'
import AppButton from '@/components/Button'
import AppTable from '@/components/Table'

export default {
  name: 'AppCurator',
  components: {
    AppBreadcrumbs,
    AppPageTitle,
    AppButton,
    AppTable
  },
  data () {
    return {
      breadcrumbs: [
        {
          text: 'Панель управления',
          href: '#'
        },
        {
          text: 'Кураторы',
          href: '#'
        }
      ],
      title: 'Кураторы',
      btn: {
        text: 'Добавить куратора'
      },
      table: {
        title: 'Кураторы',
        select: {
          filter: 'Показать все',
          data: [
            {
              val: 'Показать все'
            },
            {
              val: 'Директор магазина'
            },
            {
              val: 'Старший администратор'
            },
            {
              val: 'Другой какой-то куратор'
            }
          ]
        },
        thead: [
          {
            val: 'ФИО',
            key: 'fio'
          },
          {
            val: 'ДОЛЖНОСТЬ',
            key: 'post'
          },
          {
            val: 'Активные заявки',
            key: 'activity'
          },
          {
            val: 'Недостаток',
            key: 'no'
          },
          {
            val: 'Текучесть мес.',
            key: 'month'
          },
          {
            val: 'Текучесть кварт.',
            key: 'cvart'
          },
          {
            val: 'АДРЕС(А) ОБЪЕКТА',
            key: 'address'
          }
        ],
        tbody: [
          {
            fio: 'Иванов А.',
            post: 'Директор магазина',
            activity: '0',
            no: '4',
            month: '2/4',
            cvart: '12/24',
            address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
          },
          {
            fio: 'Иванов Б.',
            post: 'Директор магазина',
            activity: '4',
            no: '8',
            month: '2/4',
            cvart: '12/24',
            address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
          },
          {
            fio: 'Иванов А.',
            post: 'Старший администратор',
            activity: '0',
            no: '4',
            month: '2/4',
            cvart: '12/24',
            address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
          },
          {
            fio: 'Иванов А.',
            post: 'Директор магазина',
            activity: '0',
            no: '4',
            month: '2/4',
            cvart: '12/24',
            address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
          },
          {
            fio: 'Иванов А.',
            post: 'Другой какой-то куратор',
            activity: '0',
            no: '4',
            month: '2/4',
            cvart: '12/24',
            address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
          },
          {
            fio: 'Иванов А.',
            post: 'Старший администратор',
            activity: '2',
            no: '4',
            month: '2/4',
            cvart: '12/24',
            address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
          },
          {
            fio: 'Иванов А.',
            post: 'Старший администратор',
            activity: '0',
            no: '4',
            month: '2/4',
            cvart: '12/24',
            address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
          },
          {
            fio: 'Иванов А.',
            post: 'Другой какой-то куратор',
            activity: '0',
            no: '4',
            month: '2/4',
            cvart: '12/24',
            address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
          }
        ]
      }
    }
  }
}
</script>
