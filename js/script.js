$(document).ready(function () {
	$('.carousel__inner').slick({
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		// adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<button type="button" class="slick-prev"><img src="../img/left-solid.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../img/right-solid.png"></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			}
		]
	});
});