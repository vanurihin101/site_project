jQuery(document).ready(function($) {
	var images = ["Layer 38.png", "Layer 39.png"];
	var currentImage = 0;
	jQuery("#img").attr('src', 'images[currentImage]');
	jQuery("#up").click(function {
		if (currentImage !=0) {
			currentImage --;
			Query("#img").attr('src', 'images[currentImage]');
		}
	});
	jQuery("#down").click(function {
		if (currentImage != images.length - 1) {
			currentImage ++;
			Query("#img").attr('src', 'images[currentImage]');
		}
	});
	});
});