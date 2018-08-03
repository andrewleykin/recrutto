<template lang="pug">
  .sidebar
    .sidebar__user
      .sidebar__user-photo
        img(src="/static/img/general/user.png" alt="User photo")
      .sidebar__user-info
        span.sidebar__user-name Андрей Иванов
        .sidebar__user-status В СЕТИ
      // .sidebar__user-switch
      //   img(src="/static/img/general/switch.png" alt="Switch icon")
    .sidebar__nav
      ul.sidebar__list
        router-link(v-for="(item, index) in items" :key="index" :to="item.href" tag="li" class="sidebar__item" active-class="active" exact :class="{'active': subIsActive(item.href), 'bid' : item.bid}" )
          a.sidebar__link(href="#")
            .sidebar__icon
              img( :src="item.icon" :alt="item.text")
            span.sidebar__text {{item.text}}
            .sidebar__letter(v-if="item.mod == 'letter'")
              span.sidebar__letter-cnt 3
            .sidebar__arrow(v-else-if="showArrow(item)")
              img(src="/static/img/general/arrow-down-white.png" alt="arrow down sidebar")
          ul.sidebar__sublist(v-if="item.sublist && showSublist")
            li.sidebar__subitem(v-for="(city, ind) in item.sublist" :key="ind" :class="{'active' : activeSublist == ind}")
              span.sidebar__sublink(@click="sublist(ind)" :class="{'active' : activeSublist == ind}") {{city.city}}
                .sidebar__toggle-block(v-if="item.bid")
                  label.sidebar__toggle-label
                    input.sidebar__toggle-input(type="checkbox" @click="onToggleClick(ind, city.eng)" :checked="checkedToggle[ind]")
                    span.sidebar__toggle
                ul.sidebar__subsublist(v-if="item.subitems" :class="{'active' : activeSublist == ind}")
                  li.sidebar__subitem(v-for="(object, i) in item.subitems" :key="i")
                    router-link(:to="objectLink(ind,i)" tag="li" class="sidebar__sublink" active-class="active") {{object.object}}
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      activeSublist: null,
      showSublist: true,
      checkedToggle: [false, false, false]
    }
  },
  computed: {
    ...mapGetters('menu', {
      items: 'items'
    })
  },
  methods: {
    showArrow (data) {
      if (!data.bid && data.mod === 'arrow') {
        return true
      }
      if (data.bid && this.showSublist) {
        return true
      }
    },
    sublist (index) {
      this.activeSublist = index
    },
    objectLink (ind, i) {
      let city = this.items[2].sublist[ind].eng
      let object = this.items[2].subitems[i].eng
      let result = '/object/' + city + '/' + object
      return result
    },
    subIsActive (input) {
      if (input === '/') {
        return false
      }
      const paths = Array.isArray(input) ? input : [input]
      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0
      })
    },
    onToggleClick (index, info) {
      if (this.checkedToggle[index]) {
        this.checkedToggle[index] = false
        info = 'all'
      } else {
        for (let i = 0; i < this.checkedToggle.length; i++) {
          this.checkedToggle[i] = false
        }
        this.checkedToggle[index] = true
      }
      this.filter(info)
    },
    ...mapActions('bid', {
      filter: 'toggleFilter'
    })
  },
  watch: {
    '$route' (to, from) {
      if (to.path === '/bid') {
        this.sublist(null)
      }
      if (to.path === '/bid/new') {
        this.showSublist = false
      } else {
        this.showSublist = true
      }
    }
  }
}
</script>
