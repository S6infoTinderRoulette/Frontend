import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './setup/i18n-setup'

import VuejsDialog from "vuejs-dialog"
import VuejsDialogMixin from "vuejs-dialog/dist/vuejs-dialog-mixin.min.js" // only needed in custom components
import 'vuejs-dialog/dist/vuejs-dialog.min.css'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VuejsDialog)
Vue.use(BootstrapVue);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: 'app',
  i18n,
  router,
  store,
  render: h => h(App)
})
