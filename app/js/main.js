$(function () {

	var wid = $(window).width();

/* **************** SHOW/HIDE ELEMENTS ON RESIZE ****************** */
	$(window).resize(function(){
	var wid = $(window).width();
	var activeTab = $('.mobile-block.active');
	var id = $('.tab.active').attr('href');
		if ( wid <= 768 ) {
			$('.tab').hide();
			$('.mobile-block, .tabs_block, .tabs_block_name').css('display', 'block');
			$('.tabs_block_name').css('margin', '0 -19px');
			$('.tabs-content').hide();
			$(activeTab).next().show();
		} else {
			$('.tabs_block_mobile-content').hide();
			$('.mobile-block').hide();
			$('.tab').css('display', 'table-cell');
			$('.tabs-content').show();
			$('.tabs_block_content').hide();
			$(id).css('display', 'table-cell');
		};
	});

/* **************** SLIDER ****************** */

	$('.services-slider').slick({
		vertical: true,
		verticalSwiping: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>'
	});


/* **************** TABS ****************** */
		$('.mobile-block').click(function(e) {
			e.preventDefault();
			$('.tabs_block_mobile-content').slideUp();
			$('.mobile-block').removeClass('active');
			$(this).addClass('active');
			$(this).next().stop().slideDown();
		});

		$('.tab').click(function (e) {
			e.preventDefault();
			var id = $(this).attr('href');
			$('.tab').removeClass('active');
			$(this).addClass('active');
			$('.tabs_block_content').stop().fadeOut();
			$(id).delay(400).fadeIn();
		});

	if ( wid <= 768 ) {
		$('.tab').hide();
		$('.mobile-block, .tabs_block, .tabs_block_name').css('display', 'block');
		$('.tabs_block_name').css('margin', '0 -19px');
		$('.tabs_block_mobile-content').hide();
		$('.tabs-content').hide();
		$('.mobile-block').eq(0).next().show();
	} else {
		$('.tab').show();
		$('.mobile-block').hide();
		$('.tabs_block_mobile-content').hide();
		$('.tabs-content').show();
		$('.tabs_block_content').hide().eq(0).show();

	};


/* **************** NAV ****************** */


	$('#mobileBtn').click(function() {
		$(this).next().stop().slideToggle();
	});


/* **************** PLACEHOLDERS ****************** */
	$('input, textarea').placeholder();

});

/* **************** SERTIFICAT PREVIEW ****************** */
	lightgallery.init({enableZoom: true});



