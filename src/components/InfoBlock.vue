<template lang="pug">
  .infoblock
    .row.infoblock__row
      .col-1.infoblock__block(v-for="item,index in infoStatic" :key="index")
        .infoblock__info
          span.infoblock__cnt {{ getCnt(index) }}
          span.infoblock__text {{item.text}}
        .infoblock__img
          img(:src="item.icon" :alt="item.text")
</template>

<script>
export default {
  props: ['data'],
  methods: {
    getCnt (index) {
      return this.data[index].cnt
    }
  },
  data () {
    return {
      infoStatic: [
        {
          text: 'АКТИВНЫХ ЗАЯВОК',
          icon: '/static/img/general/graph.png'
        },
        {
          text: 'СОТРУДНИКОВ РАБОТАЕТ',
          icon: '/static/img/general/statistics-user.png'
        },
        {
          text: 'В ПРОЦЕССЕ НАЙМА',
          icon: '/static/img/general/statistics-revenue.png'
        },
        {
          text: 'НЕЗАКРЫТЫХ РАБОЧИХ МЕСТ',
          icon: '/static/img/general/statistics-bookings.png'
        }
      ]
    }
  }
}
</script>
