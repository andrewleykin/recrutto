<template lang="pug">
  router-link(v-if="info.link" :to="info.href" tag="button" class="btn" :class="info.class") {{info.text}}
  button.btn(v-else type="button" :class="info.class") {{info.text}}
</template>

<script>
export default {
  name: 'AppButton',
  props: ['info']
}
</script>
