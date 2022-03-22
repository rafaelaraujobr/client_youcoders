import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './quasar'

Vue.config.productionTip = false

import globalMixin from './mixins/globalMixin';
Vue.mixin(globalMixin);

import moment from './plugins/moment'

import http from './plugins/http'

new Vue({
  moment,
  http,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
