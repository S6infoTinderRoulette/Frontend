import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './setup/i18n-setup'
import VuejsDialog from "vuejs-dialog"
import VuejsDialogMixin from "vuejs-dialog/dist/vuejs-dialog-mixin.min.js" // only needed in custom components
 
// include the default style
import 'vuejs-dialog/dist/vuejs-dialog.min.css'

Vue.use(VuejsDialog)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: 'app',
  i18n,
  router,
  store,
  render: h => h(App)
})
