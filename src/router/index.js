import Vue from 'vue'
import Router from 'vue-router'
import AppStatistics from '@/components/Statistics'
import AppObject from '@/components/Object'
import AppCurator from '@/components/Curator'
import AppColloborator from '@/components/Colloborator'
import AppBid from '@/components/Bid'
import AppBidNew from '@/components/BidNew'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppStatistics',
      component: AppStatistics
    },
    {
      path: '/object',
      name: 'AppObject',
      component: AppObject
    },
    {
      path: '/object/:city/:id',
      name: 'AppObject',
      component: AppObject
    },
    {
      path: '/curator',
      name: 'AppCurator',
      component: AppCurator
    },
    {
      path: '/colloborator',
      name: 'AppColloborator',
      component: AppColloborator
    },
    {
      path: '/bid',
      name: 'AppBid',
      component: AppBid
    },
    {
      path: '/bid/new',
      name: 'AppBidNew',
      component: AppBidNew
    }
  ],
  mode: 'history'
})
