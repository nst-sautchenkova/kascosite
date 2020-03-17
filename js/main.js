//load
$(window).on('load', function () {
	$preloader = $('#loader'),
	  $loader = $preloader.find('.spinner');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
	$('body').removeClass('js-loading');

	
	$('.start-anim').addClass('anim');
});


$(document).scroll(function () {
	var WinTop = $(window).scrollTop();
	var docHeight = $(window).height();

	$('.fadeEl').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('anim');
		}
	});
	
	$('.animation').each(function () {
		var topIn = $(this).offset().top -docHeight * 0.80 ; 
		if (WinTop > topIn) {
			$(this).addClass('start-animation');
		}
	});
	
});


// HOVER LINE
$(document).on("ready", function () {
	
	$(function(){

		var $el, leftPos, newWidth,
			$mainNav = $(".header_top .hover_line")
		
		/*
			menu top
		*/
		$mainNav.append("<li class='h-line'></li>");
		
		var $magicLine = $(".header_top .h-line");
		
		$magicLine
			.width($(".header_top .active").width())
			.css("left", $(".hover_line .active a").position().left)
			.data("origLeft", $magicLine.position().left)
			.data("origWidth", $magicLine.width());
			
		$(".header_top .hover_line li").find("a").hover(function() {
			$el = $(this);
			leftPos = $el.position().left;
			newWidth = $el.parent().width();
			
			$magicLine.stop().animate({
				left: leftPos,
				width: newWidth
			});
		}, function() {
			$magicLine.stop().animate({
				left: $magicLine.data("origLeft"),
				width: $magicLine.data("origWidth")
			});    
		});
		
	});
});
						
$(document).on("ready", function () {
	$("#header_compare .compare_show").click(function () {
		$("#header_compare").toggleClass('show');
		$('#main').addClass('show-compare');
	
		$('#header_compare .compare-block').on("mouseenter", function() {
			$('#header_compare').addClass('show');
			$('#main').addClass('show-compare');
		}).on("mouseleave", function() {
			function hidemessage() {
				$('#header_compare').removeClass('show');
				$('#main').removeClass('show-compare');
			}
			setTimeout(hidemessage, 1200);
		});	
		
	});
	
	$("#header_compare.show .compare_show").click(function () {
		$("#header_compare").toggleClass('show');
		$('#main').removeClass('show-compare');
	});
	
});

$(document).on("ready", function () {
	$(".navigation-menu > li").hover(function () {
		$(".navigation-menu > li").removeClass('active');
		$(this).addClass('active');
	});
});


$(document).on("ready", function () {
	$(".search .show-search").click(function () {
		$(this).parents('.search').toggleClass('show');
		$('#main').toggleClass('show-search');
		
		$('.search.show .search-panel').on("mouseenter", function() {
			$('.search').addClass('show');
			$('#main').addClass('show-search');
		}).on("mouseleave", function() {
			function hides() {
				$('.search').removeClass('show');
				$('#main').removeClass('show-search');
			}
			setTimeout(hides, 1200);
		});	
		

	});
	$(".search.show .show-search").click(function () {
		$(".search.show").toggleClass('show');
		$('#main').removeClass('show-search');
	});
});


$(document).on("ready", function () {
	if( window.innerWidth <= 760 ){
		
	  $('#kasco_offer-parameters .left-block .tit').click(function () {
		   $('#main').addClass('ov-hidden');
		   $('#main').addClass('kasco_offer-parameters');
		   $('#kasco_offer-parameters .right-block').addClass('open');
		});	 
	  $('#kasco_offer-parameters .mob-close').click(function () {
		   $('#main').removeClass('ov-hidden');
		   $('#kasco_offer-parameters .right-block').removeClass('open');
		   $('#main').removeClass('kasco_offer-parameters');
		});		 
	} 
});


$(document).on("ready", function () {
	if( window.innerWidth <= 820 ){
      $('.footer-menu').addClass('m_accordion-item');
	  $('.footer-menu .tit').addClass('m_accordion-tit');
	  $('.footer-menu ul').addClass('m_accordion-panel'); 

	} 
});



$(document).on("ready", function () {
	$("#adaptive_menu .menu-show").click(function () {
		$("#adaptive_menu").addClass('open');
		$("#main").addClass('ov-hidden');
	});
	$("#adaptive_menu .menu-hide").click(function () {
		$("#adaptive_menu").removeClass('open');
		$("#main").removeClass('ov-hidden');
	});
	
	
	$('.m_accordion-tit').on('click', function(e) {
		e.preventDefault();
		if($(this).closest('.m_accordion-item').hasClass('active')) {
			$('.m_accordion-item').removeClass('active');
		} else {
			$('.m_accordion-item').removeClass('active');
			$(this).closest('.m_accordion-item').addClass('active');
		}
		var $content = $(this).next();
		$content.slideToggle(500);
		$('.m_accordion-item .m_accordion-panel').not($content).slideUp('slow');
	});

	$("#adaptive_menu .mpanel_link").click(function () {
		$(this).parents('.mpanel').addClass('open');
	});
	
	$("#adaptive_menu .mpanel .mpanel-back").click(function () {
		$('.mpanel').removeClass('open');
	});

});


$(document).on("ready", function () {
   var wmenu = $("#navigation").width();
   
   if (wmenu > 1140){
	   	$("#navigation").addClass('mmore');
   }
});











