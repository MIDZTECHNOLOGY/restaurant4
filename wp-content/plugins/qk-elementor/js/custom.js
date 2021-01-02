(function($){
	"use strict";
	// wrap the input in a new div that we can style to hide the default checkboxes
	$(".option").wrap("<div class='new'></div>");

	// add a span after each checkbox that we can style as our new checkboxes
	$('input[type="checkbox"]').after('<span class="check-box"></span>');

	$('input[type="radio"]').after('<span class="check-box"></span>');
	$(".new").on('click', function() {
		if($(this).hasClass( "checked" )){
			
	  		$( this ).removeClass( "checked" );
	  	}else{
	  		
	  		$( this ).addClass( "checked" );
	  	}
	  	
	});
})(jQuery);