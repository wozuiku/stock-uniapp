import App from './App'
import store from './store'
import i18n from './lang/i18n'
import uView from '@/uni_modules/uview-ui'
import cuCustom from '@/uni_modules/colorui/components/cu-custom.vue'


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.use(uView);
Vue.component('cu-custom',cuCustom)

App.mpType = 'app'
const app = new Vue({
	i18n,
	store,
	...App
})
app.$mount()
// #endif


// #ifdef VUE3
import {createSSRApp} from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	app.use(i18n)
	app.use(store)
	return {app}
}
// #endif
