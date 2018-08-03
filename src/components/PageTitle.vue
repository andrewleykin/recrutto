<template lang="pug">
  .page-title
    h1.page-title__title {{title}}
    .page-title__info
      span.page-title__welcom Добро пожаловать, Андрей
      .page-title__place
        .page-title__icon
          img(src="/static/img/general/place.png" alt="place icon")
        .page-title__text Москва
</template>

<script>
export default {
  props: ['title']
}
</script>
