$(document).ready(function(){

	setTimeout(function() {
		$('.animated.flip').removeClass('animated flip');
	}, 1000);


	$('.links a').click(function($event){
		event.preventDefault();
			$(this).find('img').addClass('animated rollOut');

			let link = $(this).attr('href');

			setTimeout(function() {
				location.href = link;
			}, 1000);
	})
});

	