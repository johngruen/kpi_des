$(function(){
	var p = $("#palette");
	$("#palette_toggle").click(function(){
		if(p.hasClass('showing')) {
			p.animate({left:-200},100);
			p.removeClass('showing');
		} else {
			p.animate({left:-0},100);
			p.addClass('showing');
			

		}
		
	})
});