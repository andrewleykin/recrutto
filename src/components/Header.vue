<template lang="pug">
  header.header
    .header__logo
      .logo
        img(:src="logo.img.src" :alt="logo.img.alt")
    a.header__burger(href="#" @click="changeSidebarEmit")
      span
    .header__search
      form.header__search-form
        .form__group.header__search-group
          input.form__input.header__search-input(type="text" name="search" id="header-search" v-model="search")
          label.form__label.header__search-label(for="header-search" :class="{'hide' : search.length > 0}") Поиск...
        button.header__search-btn(type="submit")
          img(src="/static/img/general/search.png" alt="search icon")
    router-link(:to="bidnew.href" tag='a' class="header__block")
      .header__img
        img(:src="bidnew.icon.src" :alt="bidnew.icon.alt")
      span.header__text {{ bidnew.text }}
    a.header__block(href="#")
      .header__img
        img(src="/static/img/general/favorites.png" alt="Favorites icon")
      span.header__text Избранное
    .header__icons
      a.header__icon.header__letter.active(href="#")
        img(src="/static/img/general/letter.png" alt="Letter icon")
      a.header__icon(href="#")
        img(src="/static/img/general/settings.png" alt="Settings icon")
    .header__user
      .header__user-photo
        img(src="/static/img/general/user.png" alt="User photo")
      span.header__user-name Андрей Иванов
      .header__user-icon
        img(src="/static/img/general/arrow-down.png" alt="Arrow-down icon")
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      search: '',
      bidnew: {
        href: '/bid/new',
        icon: {
          src: '/static/img/general/newbid.png',
          alt: 'New Bid Icon'
        },
        text: 'Создать новую заявку'
      }
    }
  },
  computed: {
    ...mapGetters([
      'logo'
    ])
  },
  methods: {
    changeSidebarEmit () {
      this.$emit('changeSidebar')
    }
  }
}
</script>
