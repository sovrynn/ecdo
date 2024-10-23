/**
 * copyright	Copyright (C) 2015 Cedric KEIFLIN alias ced1870
 * http://www.joomlack.fr
 * http://www.template-creator.com
 * license		GNU/GPL
 * Image Effect CK
 * @version 1.1.1
 **/

(function($) {
	var ImageEffectck = function() {
		// var image.wrap;
		$("img[class^='effectck'], img.fadeck, img.edafck, img.puffck").each(function(i, image) {
			// do only if the image is not yet wrapped
			if (! $(image).parent().is('figure')) {

			var w = $(image).attr('width');
			var fl = $(image).css('float');

			$(image).wrap('<figure class="imageeffectck ' + $(image).attr('class') + '"><div class="imageeffectck_img"></div></div>');
			image.wrap = $(image).parent().parent();
			image.wrapinner = $(image).parent();

			var props = Array('border-top-left-radius'
			, 'border-top-right-radius'
			, 'border-bottom-left-radius'
			, 'border-bottom-right-radius'
			, 'float'
			);

			for (i=0;i<props.length;i++) {
				catchCssProperty(image, props[i]);
			}

			// fix for Chrome
			if (parseInt(w) > 0) {
				image.wrap.width(w).css('max-width', '100%');
			} else if ($(image).attr('class').match(/circle/)) {
				image.wrap.width(500);
				console.log('Image Effect CK message : default width set, missing on image : ');
				console.log(image);
			}
			// if (fl) image.wrap.css('float', fl);

			// get the the text from the image title
			var imgtitle, txt_title, txt_desc;
			if (imgtitle = $(image).attr('title')) {
				imgtitle = imgtitle.split('::');
				if (imgtitle.length >= 1) {
					txt_title = imgtitle[0];
				}
				if (imgtitle.length >= 2) {
					txt_desc = imgtitle[1];
				}
			}

			// remove the attribute on the image to avoid conflicts
			$(image).attr('class', '')
					.attr('width', '')
					.attr('height', '')
					.attr('title', '')
					.css('float', '');

			// create the final code
			image.wrapinner.append('<figcaption>'
					+'<div>'
						+ ( txt_title ? '<div class="imageeffectck_title">' + txt_title + '</div>' : '' )
						+ ( txt_desc ? '<div class="imageeffectck_desc">' + txt_desc + '</div>' : '' )
						// + ( $(image).attr('href', '') ? '<a href="' + $(image).attr('href') + '"></a>' : '' ) // il faut d�tecter parent ancre >> pas besoin l'ancre s'applique sur figure
					+'</div>'
					+'</figcaption>')
			}

			// for mobile only, allow the 1st tap to show the effect, 2nd tap to open the link
			// check if there is a link on the figure
			if (image.wrap.parents('a').length) {
				image.wrap.parents('a')[0].addEventListener("touchstart", touchStart, false);

				// initialize the data if we click outside
				image.wrap.parent('a').on('mouseleave', (function(e) {
					$(this).data('touch', '0');
				}));
			}
		});

		/**
		 * Catch the tap event on touch device
		 * 
		 * @param {type} event
		 * @returns void
		 */
		function touchStart(event) {
			if (! $(this).attr('rel')) {
				if ($(this).data('touch') !== '1') {
					$(this).data('href', $(this).attr('href'));
					$(this).removeAttr('href');
					$(this).data('touch', '1');
				} else {
					$(this).attr('href', $(this).data('href'));
					$(this).data('touch', '0');
				}
			}
		}

		/**
		 * Catch the css of the image and apply it to the figure
		 * 
		 * @param {type} image
		 * @param {type} prop
		 * @returns {undefined}
		 */
		function catchCssProperty(image, prop) {
			var v = $(image).css(prop);
			if (parseInt(v)) {
				$(image).css(prop, '');
				$(image.wrap).css(prop, v);
			}
		}
	}
	window.ImageEffectck = ImageEffectck;
})(jQuery);

// autoloader
jQuery(document).ready(function(){
	new ImageEffectck();
});