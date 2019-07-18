<template>
	<section class="footer">
		<div class="container">
			<div class="row justify-content-md-center">
				<div class="col-xs-12 col-md-11">
					<div class="row justify-content-md-center">
						<div class="cols col-xs-12 col-sm-12 col-md-4">
							<p>
								{{ footerJson.footerContactColStatic.footerContactText0 }}
							</p>
							<p>
								{{ footerJson.footerContactColStatic.footerContactText1 }}
							</p>
							<p>
								{{ footerJson.footerContactColStatic.footerContactText2 }}
							</p>
							<a :href="footerJson.footerContactColStatic.footerContactMailLinkHref" class="contact-mail">
								{{ footerJson.footerContactColStatic.footerContactMailLink }}
							</a>
							<a :href="footerJson.footerContactColStatic.footerContactPhoneLinkHref" class="contact-phone">
								{{ footerJson.footerContactColStatic.footerContactPhoneLink }}
							</a>
						</div>
						<div class="cols col-xs-6 col-sm-3 col-md-2" v-for="item in footerJson">
								<a href="#" class="contact-link">
									{{ item.footerContactLink0 }}
								</a>
								<a href="#" class="contact-link">
									{{ item.footerContactLink1 }}
								</a>
								<a href="#" class="contact-link">
									{{ item.footerContactLink2 }}
								</a>
								<a href="#" class="contact-link">
									{{ item.footerContactLink3 }}
								</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>


<script>
import contentJSON from './json/footer.json'

export default {
  data() {
		return {
			footerJson: contentJSON
		}
	}  
}
</script>

<style lang="sass">
.footer
	padding: 40px 0 120px
	background-color: #000
	font-size: 16px
	font-weight: 400
	color: #fff
	@media (max-width: 992px)
		text-align: center
		.cols
			margin-bottom: 40px
	@media (max-width: 567px)		
		padding: 40px 0
	p
		margin-bottom: 0

.contact-mail,
.contact-phone,
.contact-link
	display: block
	color: #fff
	transition: color .3s
	&:hover
		text-decoration: none
		color: #ffd900

.contact-mail
	margin: 15px 0
</style>
