$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');


	var sliderList = $('.slider__list'),
			sliderNav = $('.slider__nav');

	sliderList.slick({
		centerMode: true,
		arrows: false,
		variableWidth: true,
		asNavFor: sliderNav,
		infinite: false,
		initialSlide: 3
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
});
