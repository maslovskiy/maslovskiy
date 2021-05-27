$(document).ready(function() {

	$(".main_head").css("height", $(window).height());

	$.fn.extend({
		animateCss: function (animationName) {
			var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			this.addClass('animated ' + animationName).one(animationEnd, function() {
				$(this).removeClass('animated ' + animationName);
			});
		}
	});

	
	// ANIMATIONS

	$(".tile.is-6.is-vertical h2").animated("fadeInDown");
	$(".tile.is-6.is-vertical h6").animated("fadeInUp");


	$(".about_me_section_img").animated("flipInY", "flipOutY");

	$(".upper").animated("fadeInUp","fadeOutDown");
	$(".lower").animated("fadeInDown","fadeOutDown");
	$(".section_container1").animated("fadeIn","fadeOut");

	$(".footer_line").animated("zoomIn","zoomOut");
	$(".vertical_line").animated("zoomIn","zoomOut");


	$("hr").animated("zoomIn","zoomOut");

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".nav-item a").click(function() {
		$(".nav-container").fadeOut(600);
		$(".sandwich").toggleClass("active");
	});

	// FADEOUT NAME
	$(".toggle_mnu").click(function(){

		if ($(".nav-container").is(":visible")){
			$(".sandwich").removeClass("active");
			$(".tile.is-ancestor").fadeIn(500);
			$(".nav-container").fadeOut(600);

		}else {
			$(".sandwich").addClass("active");
			$(".nav-container").fadeIn(700);
			$(".tile.is-ancestor").fadeOut(100);	
		}
		
	});

});
// FADEOUT MAIN TITLE

$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('.tile.is-ancestor').fadeOut(100);
	} else {
		$('.tile.is-ancestor').fadeIn(700);
	}
});


// SCROLL BUTTON

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},1000);
		return false;
	});
	
});

// PRELOADER

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

//Click event to scroll to id
$('#about_me').click(function(){
	// $('html, body').animate({scrollTop : 0},800);
	$("html, body").animate({scrollTop: $('.about_me').offset().top }, 1000);
	return false;
});

$('#portfolio').click(function(){
	// $('html, body').animate({scrollTop : 0},800);
	$("html, body").animate({scrollTop: $('.portfolio_title').offset().top }, 1000);
	return false;
});
$('#cv').click(function(){
	// $('html, body').animate({scrollTop : 0},800);
	$("html, body").animate({scrollTop: $('.cv').offset().top }, 1000);
	return false;
});
$('#conacts').click(function(){
	// $('html, body').animate({scrollTop : 0},800);
	$("html, body").animate({scrollTop: $('.conacts').offset().top }, 1000);
	return false;
});


