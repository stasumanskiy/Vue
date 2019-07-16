<template>
  <div class="container">
		<div class="row justify-content-md-center">
			<div class="col-sm-10">
				<b-carousel
					id="carousel-1"
					v-model="slide"
					:interval="0"
					fade
					indicators
					background="#ababab"
					img-width="1024"
					img-height="630"
					@sliding-start="onSlideStart"
					@sliding-end="onSlideEnd"
				>
					<b-carousel-slide img-blank>
						<div class="b-carousel-slide__row">
							<div class=" b-carousel-slide__col b-carousel-slide__col--left">
								<h3 class="b-carousel-slide__title">
									Inspire your inspiration
								</h3>
								<div class="b-carousel-slide__wrap">
									<div class="b-carousel-slide__descript">
										Simple to use for your app, products
										showcase and your inspiration
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
										a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
									</p>
								</div>
								<div class="b-carousel-slide__block">
									<a href="#" class="b-carousel-slide__link">
										<img src="./assets/apple-logo.png" alt="Apple-logo">
									</a>
									<a href="#" class="b-carousel-slide__link">
										<img src="./assets/android-logo.png" alt="Android-logo">
									</a>
									<a href="#" class="b-carousel-slide__link">
										<img src="./assets/windows-logo.png" alt="Windows-logo">
									</a>
								</div>
							</div>
							<div class="b-carousel-slide__col b-carousel-slide__col--right">
								<div class="b-carousel-slide__img">
									<img src="./assets/tablet.png" alt="">
								</div>
							</div>
						</div>
					</b-carousel-slide>
					<b-carousel-slide img-blank>
						<div class="b-carousel-slide__row">
							<div class=" b-carousel-slide__col b-carousel-slide__col--left">
								<h3 class="b-carousel-slide__title">
									Inspire your inspiration 2
								</h3>
								<div class="b-carousel-slide__wrap">
									<div class="b-carousel-slide__descript">
										Simple to use for your app, products
										showcase and your inspiration
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
										a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
									</p>
								</div>
								<div class="b-carousel-slide__block">
									<a href="#" class="b-carousel-slide__link">
										<img src="./assets/apple-logo.png" alt="Apple-logo">
									</a>
									<a href="#" class="b-carousel-slide__link">
										<img src="./assets/android-logo.png" alt="Android-logo">
									</a>
									<a href="#" class="b-carousel-slide__link">
										<img src="./assets/windows-logo.png" alt="Windows-logo">
									</a>
								</div>
							</div>
							<div class="b-carousel-slide__col b-carousel-slide__col--right">
								<div class="b-carousel-slide__img">
									<img src="./assets/tablet.png" alt="">
								</div>
							</div>
						</div>
					</b-carousel-slide>
					<b-carousel-slide img-blank>
						<div class="b-carousel-slide__row">
							<div class=" b-carousel-slide__col b-carousel-slide__col--left">
								<h3 class="b-carousel-slide__title">
									Inspire your inspiration 3
								</h3>
								<div class="b-carousel-slide__wrap">
									<div class="b-carousel-slide__descript">
										Simple to use for your app, products
										showcase and your inspiration
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
										a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
									</p>
								</div>
								<div class="b-carousel-slide__block">
									<a href="#" class="b-carousel-slide__link">
										<img src="./assets/apple-logo.png" alt="Apple-logo">
									</a>
									<a href="#" class="b-carousel-slide__link">
										<img src="./assets/android-logo.png" alt="Android-logo">
									</a>
									<a href="#" class="b-carousel-slide__link">
										<img src="./assets/windows-logo.png" alt="Windows-logo">
									</a>
								</div>
							</div>
							<div class="b-carousel-slide__col b-carousel-slide__col--right">
								<div class="b-carousel-slide__img">
									<img src="./assets/tablet.png" alt="">
								</div>
							</div>
						</div>
					</b-carousel-slide>
				</b-carousel>
			</div>
		</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			slide: 0,
			sliding: null
		}
	},
	methods: {
		onSlideStart(slide) {
			this.sliding = true
		},
		onSlideEnd(slide) {
			this.sliding = false
		}
	}
}
</script>

<style lang="sass">

	.carousel
		margin-top: 50px
		&-indicators 
			@media (min-width: 992px)
				margin-bottom: 50px
			li
				width: 14px
				height: 14px
				border-radius: 50%
				outline: none
				margin-right: 5px
				margin-left: 5px
		&-item
			@media (max-width: 992px)
				min-height: 440px
	.carousel-caption
		position: absolute
		top: 0
		right: 0
		bottom: 0
		left: 0
		background-color: #ffd900

	.b-carousel-slide
		&__row	
			display: flex
			align-items: center
		&__col
			&--left
				padding: 0 15px
				flex: 1 1 60%
				text-align: left
				color: #000	
				@media (min-width: 992px)
					padding-left: 20px
			&--right		
				padding-left: 35px
				padding-right: 20px
				flex: 1 1 40%
				@media (max-width: 767px)
					display: none
		&__img
			width: 100%
			max-width: 300px
			img
				width: 100%
		&__title
			margin-bottom: 25px
			font-size: 32px
			font-weight: 700
		&__wrap		
			width: 100%
			max-width: 450px
			margin-bottom: 40px
			p
				font-size: 14px
		&__descript
			font-size: 18px
			margin-bottom: 20px
		&__block
			display: flex	
		&__link
			width: 40px
			height: 40px
			border-radius: 50%
			transform: scale(1)
			transition: transform .2s
			&:not(:last-child)
				margin-right: 35px
			&:hover
				img
				transform: scale(1.1) 
			img
				max-width: 100%

				

</style>
