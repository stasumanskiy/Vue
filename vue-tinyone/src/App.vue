<template>
  <div class="wrapper">
    <section class="hero">
      <app-header></app-header>
      <app-slider></app-slider>
    </section>
    <main>
      <app-settings></app-settings>
      <app-contacts></app-contacts>
    </main>
    <app-footer></app-footer>
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

.content-block 
  padding: 0 0 100px 0
  text-align: center
  &__title
    font-weight: 700
    margin-bottom: 18px
  &__descript
    font-size: 18px
    font-weight: 500
  &--color
    color: #fff  

button
  outline: none!important    
</style>
