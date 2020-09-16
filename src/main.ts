import Vue from 'vue';
import './include';
import store from "./store";
import router from "./router";

import App from "@/App.vue";

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');