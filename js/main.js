$(document).ready(function() {
	

	if ( $.fn.quote_rotator ) {
		$('#quotes').quote_rotator({
			rotation_speed: 10000,
		});
	}
		
	if ( $.fn.vegas ) {

		$(".site-content").vegas({
			delay: 10000,
			cover: true,
		    slides: [
		        { src:"media/galaxies.jpg" },
		        { src:"media/pair.jpg" },
		        { src:"media/earth.jpg" },
		        { src:"media/large_web.jpg" },
		        { src:"media/cauldron.jpg" },
		        { src:"media/nebula.jpg" },
	    	]
		});
	}
});

