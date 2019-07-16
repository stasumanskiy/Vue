<template>
  <div>
    <h1>Parent: {{ carName }}</h1>
    <app-car
            :carName="carName"
            :carYear="carYear"
    ></app-car>
  </div>
</template>

<script>
import Car from './Car.vue'

export default {
  data () {
    return {
      carName: 'BMW from parent',
      carYear: '2017 from parent',
    }
  },
  components: {
    appCar: Car
  }
}
</script>

<style>
#app {}
</style>
