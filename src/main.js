// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template:    '<App/>',
  components: { App }
});
document.cookie = 'Webstorm-ffdbea1a=5bdfa25f-2404-4891-a602-0c6a5e6341ea'
