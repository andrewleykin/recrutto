<template lang="pug">
  .card.block
    .card__ellipsis
      include ../assets/pug/ellipsis.pug
    .card__photo
      img(:src="info.photo.src" :alt="info.photo.alt")
    .card__info
      h3.card__name {{ info.name }}
      p.card__post {{ info.post }}
        span.card__place {{ info.place }}
      a.card__phone(v-for="item in info.links" :href="item.href" :class="'card__' + item.class") {{ item.text }}
</template>

<script>
export default {
  name: 'CardBlock',
  props: ['info']
}
</script>
