$(function(){var t=$(window).width();$(window).resize(function(){var t=$(window).width(),e=$(".mobile-block.active"),o=$(".tab.active").attr("href");768>=t?($(".tab").hide(),$(".mobile-block, .tabs_block, .tabs_block_name").css("display","block"),$(".tabs_block_name").css("margin","0 -19px"),$(".tabs-content").hide(),$(e).next().show()):($(".tabs_block_mobile-content").hide(),$(".mobile-block").hide(),$(".tab").css("display","table-cell"),$(".tabs-content").show(),$(".tabs_block_content").hide(),$(o).css("display","table-cell"))}),$(".services-slider").slick({vertical:!0,verticalSwiping:!0,prevArrow:'<button type="button" class="slick-prev"></button>',nextArrow:'<button type="button" class="slick-next"></button>'}),$(".mobile-block").click(function(t){t.preventDefault(),$(".tabs_block_mobile-content").slideUp(),$(".mobile-block").removeClass("active"),$(this).addClass("active"),$(this).next().stop().slideDown()}),$(".tab").click(function(t){t.preventDefault();var e=$(this).attr("href");$(".tab").removeClass("active"),$(this).addClass("active"),$(".tabs_block_content").stop().fadeOut(),$(e).delay(400).fadeIn()}),768>=t?($(".tab").hide(),$(".mobile-block, .tabs_block, .tabs_block_name").css("display","block"),$(".tabs_block_name").css("margin","0 -19px"),$(".tabs_block_mobile-content").hide(),$(".tabs-content").hide(),$(".mobile-block").eq(0).next().show()):($(".tab").show(),$(".mobile-block").hide(),$(".tabs_block_mobile-content").hide(),$(".tabs-content").show(),$(".tabs_block_content").hide().eq(0).show()),$("#mobileBtn").click(function(){$(this).next().stop().slideToggle()}),$("input, textarea").placeholder()}),lightgallery.init({enableZoom:!0});