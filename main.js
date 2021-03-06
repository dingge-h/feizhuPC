import Vue from 'vue'
import App from './App'

//引入vuex文件
import store from './pages/store/store.js'
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})
app.$mount()