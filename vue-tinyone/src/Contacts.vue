<template>
	<section class="contacts">
		<div class="container">
			<div class="row justify-content-md-center">
				<div class="col-sm-12 col-md-8">
					<div class="content-block content-block--color">
						<h2 class="content-block__title">
							{{ staticTextJson.contentBlock.contentBlockTitle }}
						</h2>
						<div class="content-block__descript">
							{{ staticTextJson.contentBlock.contentBlockDescript }}
						</div>
					</div>
				</div>
			</div>
			<div class="row justify-content-md-center">
				<div class="col-sm-12 col-md-8">
					<b-form class="contact-form" @submit="onSubmit" @reset="onReset" v-if="show">
						<div class="contact-form__col contact-form__col--left">
							<b-form-group
								id="input-group-1"
								label-for="input-1"
							>
								<b-form-input
									id="input-1"
									v-model="form.email"
									type="email"
									required
									:placeholder="form.placeholder"
								></b-form-input>
							</b-form-group>
						</div>
						<div class="contact-form__col contact-form__col--right">
							<b-button class="button" type="submit" variant="primary">
								{{ contactJson.contactContent.contactContentBtn }}
								</b-button>
						</div>
					</b-form>
				</div>
			</div>
			<div class="row justify-content-md-center">	
				<div class="col-sm-12">
					<div class="social">
						<a class="social__icon" href="#">
							<img src="./assets/facebook-logo.svg" alt="Facebook">
						</a>
						<a class="social__icon" href="#">
							<img src="./assets/twitter-sign.svg" alt="Twitter">
						</a>
						<a class="social__icon" href="#">
							<img src="./assets/google-plus.svg" alt="Google-plus">
						</a>
						<a class="social__icon" href="#">
							<img src="./assets/pinterest.svg" alt="Pinterest">
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import contentJSON from './json/contact.json'
import contentBlockJSON from './json/content.json'

export default {
	data() {
      return {
        form: {
					email: '',
					placeholder: 'Enter email to update'
        },
        show: true,
				contactJson: contentJSON,
				staticTextJson: contentBlockJSON
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>

<style lang="sass">

.contacts
	padding: 100px 0
	background-color: #000
	@media (max-width: 767px)
		padding: 100px 0 50px

.contact-form
	margin-bottom: 70px
	@media (min-width: 576px)
		display: flex
	&__col
		&--left
			width: 100%
			max-width: 570px
			margin-right: 15px
			@media (max-width: 576px)
				margin-bottom: 30px
		&--right
			text-align: center	
			@media (max-width: 576px)
				width: 100%
	.form-control
		height: 46px
		border: transparent	
	.btn-primary
		height: 46px
		padding: 5px 25px
		background-color: #000
		font-size: 18px
		font-weight: 500
		border-color: #ffd900
		text-transform: uppercase
		color: #000
	.btn-primary.focus, 
	.btn-primary:focus
		box-shadow: none
		border-color: #ffd900
		color: #000

	.btn-primary:not(:disabled):not(.disabled).active:focus, 
	.btn-primary:not(:disabled):not(.disabled):active:focus,
	.show>.btn-primary.dropdown-toggle:focus	
		box-shadow: none
		border-color: #ffd900
		color: #fff

	.btn-primary:not(:disabled):not(.disabled).active, 
	.btn-primary:not(:disabled):not(.disabled):active, 
	.show>.btn-primary.dropdown-toggle	
		background-color: #000
		border-color: #ffd900
		color: #ffd

.button
	color: #fff
	border: 3px solid #ffd900
	background-image: -webkit-linear-gradient(30deg, #ffd900 50%, transparent 50%)
	background-image: linear-gradient(30deg, #ffd900 50%, transparent 50%)
	background-size: 500px
	background-repeat: no-repeat
	background-position: 0%
	-webkit-transition: background .3s ease-in-out
	transition: background .3s ease-in-out
.button:hover
	border-color: #ffd900
	background-position: 100%
	color: #ffd900!important

.social
	text-align: center
	&__icon
		display: inline-block
		transition: transform .2s ease-in-out
		&:not(:last-child)
			margin-right: 30px
		&:hover
			transform: scale(1.15)	
	img
		width: 40px
		height: 40px
		border-radius: 9px
</style>
