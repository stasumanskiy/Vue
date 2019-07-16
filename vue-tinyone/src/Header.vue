<template>
<header class="header">
	<!-- <header class="header">
		<div class="header__inner inner">
			<div class="header__wrap">
				<div class="header__logo">
					<a href="#" class="logo">
						<span class="logo__icon">
							<img src="./assets/logo.svg" alt="Logo"> 
						</span>
						<span class="logo__text">
							tinyone
						</span>
					</a>
				</div>
				<div class="header__nav" :class="{'is-active': isActive}">
					<nav class="nav">
						<ul class="nav-list">
							<li class="nav-list__item" v-for="item in navList">
								<a href="#" class="nav-list__link">
									{{ item }}
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<div 
						class="toggle" 
						@click="isActive = !isActive"
						:class="{'is-active': isActive}"
						>
						<div class="toggle__wrap">
							<span class="toggle__line"></span>
						</div>
						<span class="toggle__text">
							Menu
						</span>
				</div>
			</div>
		</header>
	</header> -->
		<div class="container">
				<div class="row justify-content-md-center">
					<div class="col-xs-12 col-md-10">
						<b-navbar toggleable="lg" type="dark" variant="info">
							<b-navbar-brand href="#">
								<img src="./assets/logo.svg" class="d-inline-block" alt="Logo">
							</b-navbar-brand>
							<b-navbar-toggle target="nav-collapse"
										class="toggle" 
										@click="isActive = !isActive"
										:class="{'is-active': isActive}"
										>
										<div class="toggle__wrap">
											<span class="toggle__line"></span>
										</div>
										<span class="toggle__text">
											Menu
										</span>
							</b-navbar-toggle>
							<b-collapse id="nav-collapse" is-nav>
								<b-navbar-nav right>
									<b-nav-item href="#" v-for="item in navList">
										{{ item }}
									</b-nav-item>
								</b-navbar-nav>
							</b-collapse>
						</b-navbar>
					</div>
				</div>
		</div>
</header>	
</template>

<script>
export default {
	data() {
		return {
			navList: [
				'Features',
				'Support',
				'Blog'
			],
			isActive: false
		}
	}
}
</script>

<style lang="sass">

.bg-info
	background-color: transparent!important

.header
	position: fixed
	top: 0
	right: 0
	left: 0
	padding: 15px
	background-color: rgba(#ffd900, .9)
	z-index: 100
	@media (min-width: 992px)
		padding: 50px 0
		position: absolute


	&__wrap
		display: flex
		align-items: center
		justify-content: space-between

.navbar
	padding: 0
	@media (max-width: 992px)
		padding: 20px 0
	.nav-item:not(:first-child)
		@media (min-width: 992px)
			margin-left: 60px

.navbar-dark .navbar-nav .nav-link
	padding: 0
	font-size: 20px
	font-weight: 800
	color: #000
	text-decoration: none
	transition: background-color .2s, color .2s
	&:hover
		color: #fff
	@media (max-width: 992px)
		padding: 20px 0 
		&:hover
			background-color: rgba(255,255,255, .3)

.navbar-dark .navbar-brand
	width: 110px
	font-size: 28px
	font-weight: 800
	line-height: 1
	color: #000!important
	@media (min-width: 992px)
		width: 146px

.navbar-expand-lg .navbar-collapse
	justify-content: center
	text-align: center
	@media (min-width: 992px)
		justify-content: flex-end

.navbar-toggler
	padding: 0

.toggle
	display: none
	&__wrap
		position: relative
		width: 34px
		height: 26px
		background-color: transparent
		border-radius: 4px
		cursor: pointer
	&__line
		position: absolute
		display: block
		width: 32px
		height: 4px
		background-color: #000
		top: 50%
		left: 50%
		transform: translate(-50%, -50%)
		box-shadow: 0 2px 2px rgba(0,0,0, .2)
		border-radius: 5px
		transition:  background .1s, box-shadow .1s
		transition-delay: .3s
		&::before
			position: absolute
			display: block
			content: ''
			width: 100%
			height: 100%
			background-color: #000
			top: -9px
			left: 0
			box-shadow: 0 2px 2px rgba(0,0,0, .2)
			border-radius: 5px
			transition-property: top , transform
			transition-delay: 0.3s, 0s
			transition-duration: 0.3s, 0.3s
		&::after
			position: absolute
			display: block
			content: ''
			width: 100%
			height: 100%
			background-color: #000
			top: 9px
			left: 0
			box-shadow: 0 2px 2px rgba(0,0,0, .2)
			border-radius: 5px
			transition-property: top , transform
			transition-delay: 0.3s, 0s
			transition-duration: 0.3s, 0.3s
	&[aria-expanded="true"] 
		.toggle__line::before
			top: 0
			transform: rotate(45deg)
			transition-delay: 0s, 0.3s
	&[aria-expanded="true"]
		.toggle__line::after
			top: 0
			transform: rotate(-45deg)
			transition-delay: 0s, 0.3s
	&[aria-expanded="true"]
		.toggle__line
			background: transparent
			box-shadow: 0 2px 2px rgba(0,0,0,0)
	&__text
		margin-left: 10px
		font-size: 20px
		font-weight: 800
		line-height: 1.3
		color: #000

@media (max-width: 1024px)
	.toggle
		display: flex		
		align-items: center

	.header
		&__nav
			display: none
			&.is-active
				display: block		

</style>
