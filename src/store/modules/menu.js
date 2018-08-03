/* eslint-disable */
export default {
  namespaced: true,
  state: {
    items: [
      {
        href: '/',
        text: 'ОБЩАЯ СТАТИСТИКА',
        icon: '/static/img/general/nav-statistics.png',
        mod: 'base'
      },
      {
        href: '/bid',
        text: 'ЗАЯВКИ',
        icon: '/static/img/general/nav-bid.png',
        mod: 'arrow',
        sublist: [
          {
            city: 'Активные',
            eng: 'activity'
          },
          {
            city: 'Черновик',
            eng: 'draft'
          },
          {
            city: 'Выполненные',
            eng: 'ready'
          }
        ],
        bid: true
      },
      {
        href: '/object',
        text: 'ОБЪЕКТЫ',
        icon: '/static/img/general/nav-object.png',
        mod: 'arrow',
        sublist: [
          {
            city: 'Волгоград',
            eng: 'volgograd'
          },
          {
            city: 'Москва',
            eng: 'moscow'
          },
          {
            city: 'Тамбов',
            eng: 'tambov'
          },
          {
            city: 'Санкт-Петербург',
            eng: 'sankt-peterburg'
          },
          {
            city: 'Тюмень',
            eng: 'tumen'
          }
        ],
        subitems: [
          {
            object: 'Магазины',
            eng: 'shop'
          },
          {
            object: 'Офисы',
            eng: 'office'
          },
          {
            object: 'Склады',
            eng: 'stock'
          }
        ]
      },
      {
        href: '/curator',
        text: 'КУРАТОРЫ',
        icon: '/static/img/general/nav-curator.png',
        mod: 'base'
      },
      {
        href: '/colloborator',
        text: 'СПИСОК СОТРУДНИКОВ',
        icon: '/static/img/general/nav-collaborator.png',
        mod: 'base'
      },
      {
        href: '/letter',
        text: 'СООБЩЕНИЯ',
        icon: '/static/img/general/nav-letter.png',
        mod: 'letter'
      },
      {
        href: '/settings',
        text: 'НАСТРОЙКИ',
        icon: '/static/img/general/nav-settings.png',
        mod: 'base'
      }
    ]
  },
  getters: {
    items (state) {
      return state.items
    }
  }
}