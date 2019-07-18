<template>
	<section class="settings">
		<div class="container">
			<div class="row justify-content-md-center">
				<div class="col-md-12 col-lg-10">
					<div class="row justify-content-md-center">
						<div class="col-sm-12 col-md-10">
							<div class="content-block">
								<h2 class="content-block__title">
									{{ staticTextJson.contentBlock.contentBlockTitle }}
								</h2>
								<div class="content-block__descript">
									{{ staticTextJson.contentBlock.contentBlockDescript }}
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 col-sm-6 col-md-4" v-for="item in settingsJson">
							<div class="cards">
								<div class="cards__col">
									<img :src="item.settingsCardImgSrc" :alt="item.settingsCardImgAlt">
								</div>
								<div class="cards__col">
									<h4 class="cards__title">
										{{ item.settingsCardTitle }}
									</h4>
									<div class="cards__descript">
										{{ item.settingsCardDescript }}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import contentJSON from './json/settings.json'
import contentBlockJSON from './json/content.json'
export default {
  data() {
		return {
			settingsJson: contentJSON,
			staticTextJson: contentBlockJSON
		}
	}  
}
</script>

<style lang="sass">

.settings
	padding: 100px 0
	@media (max-width: 767px)
		padding: 100px 0 50px  

.cards
	display: flex
	align-items: flex-start
	margin-bottom: 60px
	@media (max-width: 575px)
		max-width: 300px
		margin: 0 auto 60px
	&__col
		&:first-child
			width: 38px
			min-width: 38px
			height: 38px
			margin-right: 15px
			img
				width: 100%
				max-height: 100%
	&__title
		font-size: 20px
	&__descript
		padding-right: 30px
		font-size: 14px
		font-weight: 500
		line-height: 1.7
		@media (max-width: 575px)
			padding-right: 0                       
</style>