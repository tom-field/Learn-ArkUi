import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {Routers} from './router.js';
import ArkUi from '@syman/ark-ui'
import '@syman/ark-ui/dist/styles/ark-ui.css'
import '@syman/ark-ui/dist/styles/bjIconfonts/iconfont.css';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(ArkUi);

// The routing configuration
const RouterConfig = {
  routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
