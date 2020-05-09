import Vue from 'vue'
import App from './App.vue'
import CarbonComponentsVue from '@carbon/vue'
import './styles/_carbon.scss'
import Router from './router';
import Apollo from './apollo';
import store from './store'

Vue.use(CarbonComponentsVue)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  apolloProvider: Apollo,
  router: Router,
  render: h => h(App),
  store,
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'Some Default Title';
      }
    },
  }
}).$mount('#app')
