$(document).ready(function(){
  
  $('#js--slider').slick({
  	autoplay: true,
  	dots: true,
  	infinite: true,
  	speed: 500,
  	fade: true,
  	cssEase: 'ease-in'
  });


// Animation on scroll

	$('.js--wp-1').waypoint(function(direction) {
		$('.js--wp-1').addClass('animated bounceIn');	
	});

	$('.js--wp-2').waypoint(function(direction) {
		$('.js--wp-2').addClass('animated rotateInUpLeft');	
	});

	$('.js--wp-3').waypoint(function(direction) {
		$('.js--wp-3').addClass('animated slideInUp');	
	});

	$('.js--wp-4').waypoint(function(direction) {
		$('.js--wp-4').addClass('animated bounceIn');	
	});

});