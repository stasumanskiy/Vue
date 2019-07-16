<template>
  <div class="wrapper">
    <div class="hero">
      <app-header></app-header>
      <app-slider></app-slider>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap')

body
  margin: 0
  padding: 0
  min-width: 320px
  background: #fff
  font-family: 'Roboto', sans-serif 
  font-size: 16px
  line-height: 1.4

.hero
  position: relative
  padding-top: 90px
  width: 100%
  background-color: #ffd900
  @media (min-width: 992px)
    padding-top: 160px

.wrapper
	width: 100%
	max-width: 1920px
	margin: 0 auto

.inner
  max-width: 1024px
  padding: 0 15px
  margin: 0 auto 

.container
  @media (max-width: 992px)
    max-width: 100%

button
  outline: none!important    
</style>
