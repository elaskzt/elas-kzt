$(document).ready(function() {

	$(function(){

		$('#Container').mixItUp();

	});

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

