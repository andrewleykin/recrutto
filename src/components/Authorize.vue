<template lang="pug">
  .auth
    .auth__bg
      .auth__row
        .auth__col
        .auth__col
        .auth__col
        .auth__col
        .auth__col
    .auth__content
      .auth__header
        .logo
          h1.logo__title {{logo.title}}
          span.logo__subtitle {{logo.subtitle}}
      .auth__main.block
        .auth__subheader.block__header
          span.auth__enter.block__title  {{data.enter}}
          .auth__noacc
            span.auth__noacc-text {{data.noacc.text}}
            a.auth__link.auth__noacc-link(href="#") {{data.noacc.link}}
        .auth__social
          a.auth__social-block(href="#")
            .auth__social-icon
              img(src="/static/img/general/fb.png" :alt="data.social.fb.icon.alt")
            span.auth__social-text {{data.social.fb.text}}
          a.auth__social-block(href="#")
            .auth__social-icon
              img(src="/static/img/general/vk.png" :alt="data.social.vk.icon.alt")
            span.auth__social-text {{data.social.vk.text}}
        form.auth__form(action="#")
          .auth__group
            .auth__sublabel
              .auth__sublabel-text Email
            .auth__subgroup.form__group
              input.form__input.auth__input(type="email" name="email" id="auth-email" v-model="email")
              label.form__label.auth__label(for="auth-email" :class="{'hide' : email.length > 0}") Email или логин
          .auth__group
            .auth__sublabel
              span.auth__sublabel-text Пароль
              a.auth__link.auth__sublabel-link(href="#") Забыли пароль?
            .auth__subgroup.form__group
              input.form__input.auth__input(type="password" name="password" id="auth-password" v-model="password")
              label.form__label.auth__label(for="auth-password" :class="{'hide' : password.length > 0}") *****
          button.auth__btn(type="submit" @click.prevent="changeAuthorize") {{data.enter}}
          .auth__check
            input.auth__check-input(type="checkbox" name="check" id="auth-check" checked)
            label.auth__check-label(for="auth-check") Запомнить меня
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Authorize',
  data () {
    return {
      email: '',
      password: '',
      data: {
        enter: 'Войти',
        noacc: {
          text: 'Нет аккаунта?',
          link: 'Зарегистрироваться'
        },
        social: {
          fb: {
            icon: {
              src: '../assets/img/general/fb.png',
              alt: 'fb icon'
            },
            text: 'регистрация через facebook'
          },
          vk: {
            icon: {
              src: '../assets/img/general/vk.png',
              alt: 'vk icon'
            },
            text: 'регистрация через ВКОНТАКТЕ'
          }
        },
        form: {
          sublabel: {
            email: 'Email',
            password: 'Пароль'
          },
          forgot: 'Забыли пароль?',
          check: 'Запомнить меня'
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'logo'
    ])
  },
  methods: {
    changeAuthorize () {
      this.$emit('changeAuthorize')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../assets/stylus/base/helpers.styl'
</style>
