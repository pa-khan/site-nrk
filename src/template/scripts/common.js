$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');


	var sliderList = $('.slider__list'),
			sliderNav = $('.slider__nav');

	sliderList.slick({
		centerMode: true,
		arrows: false,
		variableWidth: true,
		asNavFor: sliderNav,
		infinite: true,
		initialSlide: 3,
		responsive: [{
			breakpoint: 1230,
			settings: {
				centerMode: false,
				variableWidth: false,
			}}, {
			breakpoint: 992,
			settings: {
				centerMode: false,
				variableWidth: false,
				arrows: true
			}
		}]
	})

	sliderNav.slick({
		centerMode: true,
		arrows: false,
		variableWidth: true,
		asNavFor: sliderList,
		infinite: false,
		focusOnSelect: true,
		initialSlide: 3
	})



	// $('.slider__nav .slick-slide').hover(function() {
	// 	var attr = Number($(this).attr('data-slick-index'));
	// 	sliderNav.slick('slickGoTo', attr, true);
	// 	sliderList.slick('slickGoTo', attr, true);
	// 	console.log(attr)
	// })

});
