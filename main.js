import Vue from 'vue'
import App from './App'

import uView from 'uview-ui';
import store from './store'
import utils from './static/utils'
Vue.use(uView);

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store
Vue.prototype.$utils = utils

const app = new Vue({
	store,
    ...App
})
app.$mount()
