import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './setup/i18n-setup'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: 'app',
  i18n,
  router,
  store,
  render: h => h(App)
})
