$(document).ready(function() {
	

	$('#BreckFastContImgs').cycle({
						fx : 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
						delay:  -8000
					});
    $('#RiceItemsContImgs').cycle({

	                    fx : 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
						delay:  -8000
					});
	$('#CurrysContImgs').cycle({
						fx : 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
						delay:  -8000
					});		
	$('#ChutneysContImgs').cycle({
						fx : 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
						delay:  -8000
					});				
							
					
	$('#SpecialsContImgs').cycle({
						fx : 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
						delay:  -8000
					});				
	$('#TraditionalContImgs').cycle({
						fx : 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
						delay:  -8000
					});				
	$('#HelithyFoodContImgs').cycle({
						fx : 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
						delay:  -8000
					});	
    	$('#MainContentAddImg').cycle({
						fx : 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
						delay:  -8000
					});				
					
	BreatkFastScripts();

});

function DisplayDiv(id) {
	$(id).show();
}

function HiddenDiv(id) {
	$(id).hide();

}

function ChangeImgCont(ContName, images) {
	var i = 0;
	var timeoutVar;

	function changeBackground() {
		clearTimeout(timeoutVar);

		$(ContName).css('background-image', function() {

			if (i >= images.length) {

				i = 0;
			}
			return 'url(' + images[i++] + ')';

		});

		// call the setTimeout every time to repeat the function
		timeoutVar = setTimeout(changeBackground, 3000);
	}

	// Call it on the first time and it will repeat
	changeBackground();

}



