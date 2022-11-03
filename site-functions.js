jQuery(document).ready(function ($) {
	
	
	// video pause/play on modal fade out / fade in
	jQuery('.modal-videos').on('hidden.bs.modal', function (e) { // change #vidModal to the ID of your modal
	$(this).find('video').get(0).pause()
	});
	
	jQuery('.modal-videos').on('show.bs.modal', function (e) { // change #vidModal to the ID of your modal
	$(this).find('video').get(0).play()
	});
	
	
	
	$('.carousel-control').click(function(){
		$('.item.active .navbar-collapse').hide();
		});
	
	});