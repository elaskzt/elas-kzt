$(document).ready(function() {

	$(function(){

		$('#Container').mixItUp();

	});

	//Smoothstate

	;(function($) {
	  'use strict';
	  var $body = $('html, body'),
	      content = $('#main-page').smoothState({
	      	prefetch: true,
	      	pageCacheSize: 4,
	        // Runs when a link has been activated
	        onStart: {
	          duration: 250, // Duration of our animation
	          render: function (url, $container) {
	            // toggleAnimationClass() is a public method
	            // for restarting css animations with a class
	            content.toggleAnimationClass('is-exiting');
	            // Scroll user to the top
	            $body.animate({
	              scrollTop: 0
	            });
	          }
	        }
	      }).data('smoothState');
	      //.data('smoothState') makes public methods available
	})(jQuery);

	$(function() {
		$(".tags-block button").click(function() {
		  // remove classes from all
		  $(".tags-block button").removeClass("active");
		  // add class to the one we clicked
		  $(this).addClass("active");
		  // stop the page from jumping to the top
		  return false;
		});
	});

});

