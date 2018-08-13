$(document).ready(function() {



/*Scroll on button*/
	$('.js--scroll-to-plans').click(function() {
		$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
	});

	$('.js--scroll-to-start').click(function() {
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 600);
	});

	/*Navigation Scroll*/

	$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  	/*Animation on scroll*/
  	$('.js--wp-0').waypoint(function(direction) {
  		$('.js--wp-0').addClass('animated bounceIn');
  	}, {
  		offset: '50%'
  	});

  	$('.js--wp-1').waypoint(function(direction) {
  		$('.js--wp-1').addClass('animated fadeInUp');
  	}, {
  		offset: '40%'
  	});

  	$('.js--wp-2').waypoint(function(direction) {
  		$('.js--wp-2').addClass('animated pulse');
  	}, {
  		offset: '50%'
  	});

  	$('.js--wp-4').waypoint(function(direction) {
  		$('.js--wp-4').addClass('animated bounceIn');
  	}, {
  		offset: '60%'
  	});

  	$('.js--wp-4-d').waypoint(function(direction) {
  		$('.js--wp-4-d2').addClass('animated bounceIn');
  	}, {
  		offset: '50%'
  	});

  	$('.js--wp-4-d2').waypoint(function(direction) {
  		$('.js--wp-4-d2').addClass('animated bounceIn');
  	}, {
  		offset: '50%'
  	});

    $('.js--form-left').waypoint(function(direction) {
      $('.js--form-left').addClass('animated bounceInLeft');
    }, {
      offset: '50%'
    });

    $('.js--form-right').waypoint(function(direction) {
      $('.js--form-right').addClass('animated bounceInRight');
    }, {
      offset: '50%'
    });

    $('.js--form-button').waypoint(function(direction) {
      $('.js--form-button').addClass('animated bounceInLeft');
    }, {
      offset: '50%'
    });

  	$('.js--nav-icon').click(function() {
  		var nav = $('.js--main-nav');
  		var icon = $('.js--nav-icon i');


  		nav.slideToggle(300);
  		if(icon.hasClass('ion-navicon-round')) {
  			icon.addClass('ion-close-round');
  			icon.removeClass('ion-navicon-round');

  		} else {
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
  		}
  	});

    $('.testimonials-wrapper').slick({
      autoplay: true,
      autoplaySpeed: 1500,
      speed: 1000,
      dots: true,
      cssEase: 'ease-out',
      vertical: true,
      arrows: false
    });
    
});