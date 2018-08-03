/* eslint-disable */
export default {
  namespaced: true,
  state: {
    table: {
      title: 'Заявки',
      bid: true,
      select: {
        filter: 'Показать все',
        data: [
          {
            val: 'Показать все'
          },
          {
            val: 'Охранников'
          },
          {
            val: 'Продавцов-кассиров'
          },
          {
            val: 'Сотрудников'
          },
          {
            val: 'Уборщиков'
          },
          {
            val: 'Грузчиков'
          }
        ]
      },
      thead: [
        {
          val: 'Тип заявки',
          key: 'type'
        },
        {
          val: 'Куратор',
          key: 'curator'
        },
        {
          val: 'Создана',
          key: 'start'
        },
        {
          val: 'СОСТОЯНИЕ',
          key: 'state'
        },
        {
          val: 'ПЛАНИРОВАНИЕ.',
          key: 'plane'
        },
        {
          val: 'ОКОНЧАНИЕ',
          key: 'finish'
        },
        {
          val: 'АДРЕС(А) ОБЪЕКТА',
          key: 'address'
        }
      ],
      tbody: [
        {
          icon: '/static/img/general/mans-security.png',
          type: '15 Охранников',
          curator: 'Иванов А.',
          start: '12 ЯНВ 2018',
          state: 'ПОДБОР',
          plane: '19 ЯНВ 2018',
          finish: '19 ЯНВ 2018',
          address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )',
          filterinfo: 'activity'
        },
        {
          icon: '/static/img/general/mans-cashier.png',
          type: '5  Продавцов-кассиров',
          curator: 'Филимонов Б.',
          start: '20 ФЕВ 2018',
          state: 'ВЫПОЛНЕНА',
          plane: '27 ФЕВ 2018',
          finish: '27 ФЕВ 2018',
          address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )',
          filterinfo: 'ready'
        },
        {
          icon: '/static/img/general/mans.png',
          type: '20 Сотрудников',
          curator: 'Иванов А.',
          start: '12 ЯНВ 2018',
          state: 'СОБЕСЕДОВАНИЕ',
          plane: '19 ЯНВ 2018',
          finish: '19 ЯНВ 2018',
          address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )',
          filterinfo: 'activity'
        },
        {
          icon: '/static/img/general/mans-porter.png',
          type: '5 Уборщиков',
          curator: 'Иванов А.',
          start: '12 ЯНВ 2018',
          state: 'ЧЕРНОВИК',
          plane: '19 ЯНВ 2018',
          finish: '19 ЯНВ 2018',
          address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )',
          filterinfo: 'draft'
        },
        {
          icon: '/static/img/general/mans-cashier.png',
          type: '10 Продавцов-кассиров',
          curator: 'Иванов А.',
          start: '12 ЯНВ 2018',
          state: 'НЕВЫПОЛНЕНА',
          plane: '19 ЯНВ 2018',
          finish: '19 ЯНВ 2018',
          address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )',
          filterinfo: 'activity'
        },
        {
          icon: '/static/img/general/mans-security.png',
          type: '15 Охранников',
          curator: 'Иванов А.',
          start: '12 ЯНВ 2018',
          state: 'ПОДБОР',
          plane: '19 ЯНВ 2018',
          finish: '19 ЯНВ 2018',
          address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )',
          filterinfo: 'activity'
        },
        {
          icon: '/static/img/general/mans-cashier.png',
          type: '5  Продавцов-кассиров',
          curator: 'Филимонов Б.',
          start: '20 ФЕВ 2018',
          state: 'ВЫПОЛНЕНА',
          plane: '27 ФЕВ 2018',
          finish: '27 ФЕВ 2018',
          address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )',
          filterinfo: 'ready'
        },
        {
          icon: '/static/img/general/mans.png',
          type: '20 Сотрудников',
          curator: 'Иванов А.',
          start: '12 ЯНВ 2018',
          state: 'СОБЕСЕДОВАНИЕ',
          plane: '19 ЯНВ 2018',
          finish: '19 ЯНВ 2018',
          address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )',
          filterinfo: 'activity'
        },
        {
          icon: '/static/img/general/mans-porter.png',
          type: '8 Грузчиков',
          curator: 'Иванов А.',
          start: '12 ЯНВ 2018',
          state: 'ЧЕРНОВИК',
          plane: '19 ЯНВ 2018',
          finish: '19 ЯНВ 2018',
          address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )',
          filterinfo: 'draft'
        },
        {
          icon: '/static/img/general/mans-cashier.png',
          type: '10 Продавцов-кассиров',
          curator: 'Иванов А.',
          start: '12 ЯНВ 2018',
          state: 'НЕВЫПОЛНЕНА',
          plane: '19 ЯНВ 2018',
          finish: '19 ЯНВ 2018',
          address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )',
          filterinfo: 'activity'
        }
      ],
      columnIndexIcon: 0,
      columnIndexState: 3
    },
    filterName: 'all'
  },
  getters: {
    table (state) {
      return state.table
    },
    filter (state) {
      return state.filter
    },
    filterName (state) {
      return state.filterName
    },
    classList (state) {
      return state.classList
    }
  },
  mutations: {
    toggleFilter (state, filter) {
      state.filterName = filter
    }
  },
	actions: {
		toggleFilter(store, filter) {
			store.commit('toggleFilter', filter)
		}
	}
}