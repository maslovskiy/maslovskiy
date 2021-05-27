$(document).ready(function() {

	$(".tile.is-ancestor").css("height", $(window).height());
	// $(".aside_news").css("height", $(window).height());

	$('.coach_a').click(function(){
		// $('html, body').animate({scrollTop : 0},800);
		$("html, body").animate({scrollTop: $('#coach_a').offset().top },2000);
		return false;
	});
	$('.gallery_a').click(function(){
		// $('html, body').animate({scrollTop : 0},800);
		$("html, body").animate({scrollTop: $('#gallery').offset().top },2000);
		return false;
	});
});