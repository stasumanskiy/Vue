import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Slider from './Slider.vue'
import Settings from './Settings.vue'
import { NavbarPlugin } from "bootstrap-vue";
import { CarouselPlugin } from "bootstrap-vue";

Vue.use(NavbarPlugin);
Vue.use(CarouselPlugin);

Vue.component('app-header', Header)
Vue.component('app-slider', Slider)
Vue.component('app-settings', Settings)

new Vue({
  el: '#app',
  render: h => h(App)
})
