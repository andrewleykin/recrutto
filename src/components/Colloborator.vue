<template lang="pug">
  .colloborator
    .colloborator__breadcrumbs.breadcrumbs__block
      app-breadcrumbs(:data="breadcrumbs")
    .colloborator__header
      .colloborator__title
        app-page-title(:title="title")
    .colloborator__content
      .colloborator__btn
        app-button(:info="btn")
      .colloborator__table
        app-table(:table="table")
</template>

<script>
import AppBreadcrumbs from '@/components/Breadcrumbs'
import AppPageTitle from '@/components/PageTitle'
import AppButton from '@/components/Button'
import AppTable from '@/components/Table'

export default {
  name: 'AppColloborator',
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
          text: 'Список сотрудников',
          href: '#'
        }
      ],
      title: 'Список сотрудников',
      btn: {
        text: 'Добавить сотрудника'
      },
      table: {
        title: 'СОТРУДНИКИ',
        select: {
          filter: 'Показать все',
          data: [
            {
              val: 'Показать все'
            },
            {
              val: 'Кассир'
            },
            {
              val: 'Охранник'
            },
            {
              val: 'Кассир-продавец'
            },
            {
              val: 'Грузчик / Разнорабочий'
            },
            {
              val: 'Разнорабочий'
            },
            {
              val: 'Грузчик'
            },
            {
              val: 'Уборщик'
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
            val: 'Количество смен',
            key: 'shift'
          },
          {
            val: 'ОТРАБОТАНО',
            key: 'work'
          },
          {
            val: 'ПРОГУЛ.',
            key: 'hooky'
          },
          {
            val: 'ОПОЗДАНИЙ',
            key: 'late'
          },
          {
            val: 'АДРЕС(А) ОБЪЕКТА',
            key: 'address'
          }
        ],
        tbody: [
          {
            fio: 'Иванов А.',
            post: 'Кассир',
            shift: '0',
            work: '4',
            hooky: '2/4',
            late: '12/24',
            address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
          },
          {
            fio: 'Иванов Б.',
            post: 'Охранник',
            shift: '5',
            work: '4',
            hooky: '1/1',
            late: '12/13',
            address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
          },
          {

            fio: 'Иванов В.',
            post: 'Кассир-продавец',
            shift: '2',
            work: 'НЕТ',
            hooky: '1/2',
            late: '12/12',
            address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
          },
          {
            fio: 'Иванов Г.',
            post: 'Грузчик / Разнорабочий',
            shift: '1',
            work: '2',
            hooky: '2/4',
            late: '22/44',
            address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
          },
          {
            fio: 'Иванов Д.',
            post: 'Разнорабочий',
            shift: '2',
            work: '5',
            hooky: '5/2',
            late: '21/21',
            address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
          },
          {
            fio: 'Иванов Е.',
            post: 'Грузчик',
            shift: '0',
            work: '4',
            hooky: '2/4',
            late: '12/24',
            address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
          },
          {
            fio: 'Иванов Ж.',
            post: 'Разнорабочий',
            shift: '5',
            work: '4',
            hooky: '1/1',
            late: '12/13',
            address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
          },
          {

            fio: 'Иванов З.',
            post: 'Кассир',
            shift: '2',
            work: 'НЕТ',
            hooky: '1/4',
            late: '12/12',
            address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
          },
          {
            fio: 'Иванов И.',
            post: 'Грузчик / Разнорабочий',
            shift: '5',
            work: '3',
            hooky: '2/2',
            late: '22/44',
            address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
          },
          {
            fio: 'Иванов К.',
            post: 'Уборщик',
            shift: '2',
            work: '2',
            hooky: '1/2',
            late: '1/21',
            address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
          }
        ]
      }
    }
  }
}
</script>
