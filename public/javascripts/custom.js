$(function() {

	var p = $('#palette');

	$('#palette_toggle').on( 'click', function() {

		if ( p.hasClass('showing')) {

			p
				.animate({left:-200},100)
				.removeClass('showing')
				.find('#palette_control')
				.removeClass('icon-chevron-left')
				.addClass('icon-chevron-right');
		} else {
			p
				.animate({left:-0},100)
				.addClass('showing')
				.find('#palette_control')
				.removeClass('icon-chevron-right')
				.addClass('icon-chevron-left');
		}
		
	});

	$('#date_slider').slider({ values: [ 5, 95 ], range: true });

	$('select').each( function() {

			var title = $(this).attr('title');

			if ( $('option:selected', this).val() != ''  ) {
				title = $('option:selected',this).text();
			}

			$(this)
				.css({
					'z-index': 10,
					'opacity': 0,
					'-khtml-appearance': 'none'
				})
				.after('<span class="select ">' + title + '<span class="icon-caret-down"></span></span>')
				.change( function() {

					var val = $('option:selected',this).text();

					$(this)
						.next()
						.text( val );
				 });
		});
});
