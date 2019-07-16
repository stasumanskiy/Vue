<template>
  <div class="car">
    <h3>Name: {{ carName }} \ {{ reverseName }}</h3>
    <p>Year: {{ carYear }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      carName: {
        type: String,
        required: true,
        default: 'Default text'
      },
      carYear: Number
    },
    computed: {
      reverseName() {
        return this.carName.split('').reverse().join('')
      }
    }
  }
</script>

<style>
.car {
  border: 1px solid black;
}

.car h3 {
  margin-bottom: 10px;
}
</style>
