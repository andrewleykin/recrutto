<template lang="pug">
  .breadcrumbs
    ul.breadcrumbs__list
      li.breadcrumbs__item
        a.breadcrumbs__link(href="#")
          img.breadcrumbs__img(src="/static/img/general/home.png" alt="Home icon")
      li.breadcrumbs__item(v-for="item,index in data" :key="index")
        a.breadcrumbs__link(:href="item.href") {{item.text}}
</template>

<script>
export default {
  props: ['data']
}
</script>
