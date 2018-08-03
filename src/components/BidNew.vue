<template lang="pug">
  .bid-new
    .bid-new__breadcrumbs.breadcrumbs__block
      app-breadcrumbs(:data="breadcrumbs")
    .bid-new__header
      .bid-new__title
        app-page-title(:title="title")
      .bid-new__header-btn
        app-button(:info="btn.remove")
    .bid-new__content
      .row
        .col-3
          .bid-new__block
            h3.bid-new__subtitle Шаг 1. Выберете сотрудников
            .bid-new__colloborator.bnc
              .bid-new__list
                .bid-new__item(v-for="(item,index) in bnc.list" :key="index")
                  span.bnc__count {{index+1}}.
                  .bnc__select.js-container(:class="{active: item.selectHide}")
                    .bnc__option.js-main-option(@click="item.selectHide = !item.selectHide")
                      .bnc__option-icon
                        img(:src="bnc.select[0].icon" alt="bnc.select[0].text")
                      span.bnc__option-text {{bnc.select[0].text}}
                    .bnc__option-hide(v-show="item.selectHide")
                      .bnc__option.js-hide-option(v-for="(val,itemIndex) in bnc.select" :key="itemIndex" @click="changeActiveSelect(itemIndex, index)")
                        .bnc__option-icon
                          img(:src="val.icon" alt="val.text")
                        span.bnc__option-text {{val.text}}
                  span.bnc__text.bnc__text--bold x
                  .bnc__form-group.bnc__form-group--count.form-group
                    input.form-number(type="number"  value="0")
                  span.bnc__text Человека, с зарплатой от
                  .bnc__form-group.form-group
                    input.form-number(type="number" value="0")
                  span.bnc__text до
                  .bnc__form-group.form-group
                    input.form-number(type="number" value="0")
                  span.bnc__text рублей в месяц
                  span.bid-new__remove(@click="remove(item, bnc.list)")
              .bnc__add(@click="add(bnc.list)")
                .bnc__add-icon
                  img(src="/static/img/general/newbid.png" alt="new bnc")
                span.bnc__add-text Добавить еще одну позицию
          .bid-new__block
            h3.bid-new__subtitle Шаг 2. Выберете объект (место работы)
            .bid-new__object.bno
              .bid-new__list.bno__list
                .bid-new__item.bno__item(v-for="(item,index) in bno.list" :key="index")
                  select.bno__select
                    option.bno__option(v-for="(val,optionIndex) in bno.select") {{val.text}}
                  span.bid-new__remove(@click="remove(item, bno.list)")
              .bnc__add(@click="add(bno.list)")
                .bnc__add-icon
                  img(src="/static/img/general/newbid.png" alt="new bnc")
                span.bnc__add-text Добавить новый объект
          .bid-new__block
            h3.bid-new__subtitle.red Шаг 3. Выберете дату либо период встречи / выхода на работу
            p.bid-new__subsubtitle Сотрудники могут прийти в один день или в течении нескольких. В одно время или с&nbsp;определенным интервалом.
            .bid-new__date.bnd
              span.bnc__text с
              .bnd__date
                datepicker(:language="ru")
              span.bnc__text по
              .bnd__date.bnd__date--last
                datepicker(:language="ru")
              spn.bnc__text с
              .bnd__time
                vue-timepicker(:minute-interval="10" v-model="bnd.start")
              span.bnc__text по
              .bnd__time.bnd__time--last
                vue-timepicker(:minute-interval="10" v-model="bnd.finish")
              .bnd__check
                input.bnd__check-input(type="checkbox" id="bnd-check" name="bnd-check" checked)
                label.bnd__check-label(for="bnd-check") с интервалом
              .bnd__time
                vue-timepicker(format="mm:ss" :minute-interval="10"  v-model="bnd.interval")
              span.bnc__text минут
          .bid-new__block
            h3.bid-new__subtitle Шаг 4. Выберете куратора
            p.bid-new__subsubtitle Этот человек будет проводить собеседование и/или нанимать сотрудников на работу
            .bid-new__curator.bncr
              select.bno__select
                option.bno__option(v-for="(val,optionIndex) in bncr.select") {{val.text}}
          .bid-new__block
            .bid-new__buttons
              .bid-new__button
                app-button(:info="btn.add")
              .bid-new__button
                app-button(:info="btn.draft")
              .bid-new__button
                app-button(:info="btn.remove")
</template>

<script>
import AppBreadcrumbs from '@/components/Breadcrumbs'
import AppPageTitle from '@/components/PageTitle'
import AppButton from '@/components/Button'
import Datepicker from 'vuejs-datepicker'
import {ru} from 'vuejs-datepicker/dist/locale'
import VueTimepicker from 'vue2-timepicker'

export default {
  name: 'AppBidNew',
  components: {
    AppBreadcrumbs,
    AppPageTitle,
    AppButton,
    Datepicker,
    VueTimepicker
  },
  data () {
    return {
      ru: ru,
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
      title: 'Новая Заявка',
      btn: {
        remove: {
          text: 'УДАЛИТЬ',
          class: 'red'
        },
        add: {
          text: 'СОЗДАТЬ',
          class: 'blue'
        },
        draft: {
          text: 'В ЧЕРНОВИК',
          class: 'yellow'
        }
      },
      bnc: {
        list: [
          {
            selectActive: 0,
            selectHide: false
          },
          {
            selectActive: 0,
            selectHide: false
          }
        ],
        select: [
          {
            icon: '/static/img/general/mans-security.png',
            text: 'Охранник'
          },
          {
            icon: '/static/img/general/mans-porter-green.png',
            text: 'Грузчик'
          },
          {
            icon: '/static/img/general/mans-cashier.png',
            text: 'Кассир-продавец'
          },
          {
            icon: '/static/img/general/mans-porter.png',
            text: 'Уборщик'
          },
          {
            icon: '/static/img/general/mans-porter-green.png',
            text: 'Разнорабочий'
          },
          {
            icon: '/static/img/general/mans-cashier.png',
            text: 'Кассир'
          }
        ]
      },
      bno: {
        select: [
          {
            text: '«Продукты»  (Москва, Красноармейская 70)'
          },
          {
            text: '«Продукты»  (Москва, Красноармейская 69)'
          },
          {
            text: '«Продукты»  (Москва, Красноармейская 68)'
          },
          {
            text: '«Продукты»  (Москва, Красноармейская 67)'
          },
          {
            text: '«Продукты»  (Москва, Красноармейская 66)'
          },
          {
            text: '«Продукты»  (Москва, Красноармейская 65)'
          }
        ],
        list: [
          {
            id: 0
          }
        ]
      },
      bnd: {
        start: {
          HH: '12',
          mm: '00'
        },
        finish: {
          HH: '17',
          mm: '00'
        },
        interval: {
          mm: '30',
          ss: '00'
        }
      },
      bncr: {
        select: [
          {
            text: 'Селиханов Андрей Константинович (директор магазина «Продукты») — это вы'
          },
          {
            text: 'Селиханов Антон Константинович (директор магазина «Продукты»)'
          },
          {
            text: 'Селиханов Денис Константинович (директор магазина «Продукты»)'
          },
          {
            text: 'Селиханов Альберт Константинович (директор магазина «Продукты»)'
          },
          {
            text: 'Селиханов Лев Константинович (директор магазина «Продукты»)'
          }
        ]
      }
    }
  },
  methods: {
    changeActiveSelect (itemIndex, index) {
      let container = document.getElementsByClassName('js-container')[index]
      let main = container.getElementsByClassName('js-main-option')[0]
      let item = container.getElementsByClassName('js-hide-option')[itemIndex]
      main.innerHTML = item.innerHTML
      this.bnc.list[index].selectHide = false
    },
    add (list) {
      if (typeof list[0]['selectHide'] !== 'undefined') {
        list.push({
          selectActive: 0,
          selectHide: false
        })
      } else {
        list.push({
          id: 0
        })
      }
    },
    remove (index, list) {
      let pos = list.indexOf(index)
      console.log(pos)
      if (pos !== -1) {
        list.splice(pos, 1)
      }
    }
  }
}
</script>
