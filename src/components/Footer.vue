<template lang="pug">
  footer.footer
    p.footer__text ©
      span.footer__year {{curYear}}
      | Все права защищены Панель управления
      span.footer__company Recruitto
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    curYear () {
      var date = new Date()
      return date.getFullYear()
    }
  }
}
</script>
