<template lang="pug">
  .table.block
    .table__header.block__header
      span.table__title.block__title {{table.title}}
      .table__search.header__search-form
        .form__group.header__search-group
          input.form__input.header__search-input(type="text" name="search" id="table-search" v-model="search")
          label.form__label.header__search-label(for="table-search" :class="{'hide' : search.length > 0}") Поиск...
        button.header__search-btn(type="submit")
          img(src="/static/img/general/search.png" alt="search icon")
      .table__filter
        select.table__select(v-model="table.select.filter" @click="activeSelect = true")
          option.table__option(v-for="(item, index) in table.select.data" :key="index" :value="item.val") {{item.val}}
      .table__ellipsis
        include ../assets/pug/ellipsis.pug
    .table__content
      table.table__table
        thead
          tr(:class="{active: activeTableHead}")
            th(v-for="key in table.thead" @click="sortBy(key)" :class="{ active: sortKey == key }") {{ key.val }}
        tbody
          tr(v-for="(entry,trIndex) in filteredData" :class="{'error': trIndex === 4}")
            td(v-for="(key,index) in table.thead" :key="index")
              .icon(v-if="index == table.columnIndexIcon && entry.icon")
                img(:src="entry.icon")
              span(:class="classBid(entry[key.key], index)") {{ entry[key.key] }}
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Table',
  props: {
    table: Object
  },
  data: function () {
    var sortOrders = {}
    this.table.thead.forEach(function (key) {
      sortOrders[key.key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders,
      search: '',
      activeCol: false,
      activeSelect: false,
      heightTableBody: 300
    }
  },
  computed: {
    ...mapGetters('bid', {
      filterName: 'filterName'
    }),
    filteredData () {
      var sortKey = this.sortKey
      var filterKey = this.search && this.search.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.table.tbody
      var select = this.table.select.filter && this.table.select.filter.toLowerCase()
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (this.activeCol) {
        order = -1
      } else {
        order = 1
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey.key]
          b = b[sortKey.key]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      if (select && this.activeSelect) {
        if (select === this.table.select.data[0].val || select === this.table.select.data[0].val.toLowerCase()) {
          return data
        }
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(select) > -1
          })
        })
      }
      if (this.table.bid) {
        data = data.filter((x) => this.filterName === 'all' ? x : this.filterName === x.filterinfo)
      }
      return data
    },
    activeTableHead () {
      if (this.heightTableBody < 300) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    sortBy (key) {
      if (this.sortKey === key) {
        this.activeCol = !this.activeCol
      } else {
        this.sortKey = key
        this.activeCol = !this.activeCol
      }
      this.sortOrders[key.key] = this.sortOrders[key.key] * -1
    },
    classBid (value, index) {
      let val = value.toLowerCase()
      if (index === this.table.columnIndexState) {
        switch (val) {
          case 'подбор':
            return 'bid selection'
          case 'выполнена':
            return 'bid ready'
          case 'собеседование':
            return 'bid interview'
          case 'черновик':
            return 'bid draft'
          case 'невыполнена':
            return 'bid noready'
          default:
            return false
        }
      }
    }
  },
  updated () {
    let table = document.getElementsByClassName('table__table')
    let tableBody = table[0].tBodies
    this.heightTableBody = tableBody[0].offsetHeight
  }
}
</script>
