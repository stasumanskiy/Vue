import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Slider from './Slider.vue'
import Settings from './Settings.vue'
import Contacts from './Contacts.vue'
import Footer from './Footer.vue'
import { NavbarPlugin } from 'bootstrap-vue';
import { CarouselPlugin } from 'bootstrap-vue';
import { FormPlugin } from 'bootstrap-vue';
import { BFormInput } from 'bootstrap-vue';
import { ButtonPlugin } from 'bootstrap-vue';
import { BForm } from 'bootstrap-vue';
import { BFormGroup } from 'bootstrap-vue';

Vue.component('b-form-group', BFormGroup);
Vue.component('b-form', BForm);
Vue.component('b-form-input', BFormInput);
Vue.use(ButtonPlugin);
Vue.use(NavbarPlugin);
Vue.use(CarouselPlugin);
Vue.use(FormPlugin);

Vue.component('app-header', Header)
Vue.component('app-slider', Slider)
Vue.component('app-settings', Settings)
Vue.component('app-contacts', Contacts)
Vue.component('app-footer', Footer)

new Vue({
  el: '#app',
  render: h => h(App)
})
