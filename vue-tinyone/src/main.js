import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import BootstrapVue from "bootstrap-vue";
import { NavbarPlugin } from "bootstrap-vue";

Vue.use(NavbarPlugin);

Vue.component('app-header', Header)

new Vue({
  el: '#app',
  render: h => h(App)
})
