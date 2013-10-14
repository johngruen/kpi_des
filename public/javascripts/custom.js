$(function(){
	var p = $("#palette");
	$("#palette_toggle").click(function(){
		if(p.hasClass('showing')) {
			p.animate({left:-200},100);
			p.removeClass('showing');
			p.find("#palette_control").removeClass("icon-chevron-left").addClass('icon-chevron-right');
		} else {
			p.animate({left:-0},100);
			p.addClass('showing');
			p.find("#palette_control").removeClass("icon-chevron-right").addClass('icon-chevron-left');

			

		}
		
	});

	$("#date_slider").slider({ values: [ 1,99],range:true });
});