$(document).ready(function() {

	var BreakFastimg = ['Images/idliS.JPG', 'Images/masaladosaS.JPG', 'Images/ravadosa.jpg'];
	var Riceimg = ['Images/idliS.JPG', 'Images/16620.jpg', 'Images/pototos.jpg', 'Images/rotti.jpg'];
	var Curryimg = ['Images/ravadosa.jpg', 'Images/noodels.jpg', 'Images/honeychicken.jpg', 'Images/springroll.jpg'];
	var Helithyimg = [' Images/masaladosaS.JPG', 'Images/otasadai.jpg', 'Images/ragiidli.jpg', 'Images/cucumber.jpg'];
	var Specialsimg = ['Images/vegtables.jpg', 'Images/otasadai.jpg', 'Images/ragiidli.jpg', 'Images/cucumber.jpg'];
	var Traditionalimg = ['Images/idliS.JPG', 'Images/otasadai.jpg', 'Images/ragiidli.jpg', 'Images/cucumber.jpg'];
	var Chutneyimg = ['Images/rotti.jpg', 'Images/otasadai.jpg', 'Images/ragiidli.jpg', 'Images/cucumber.jpg'];


	ChangeImgCont1('#BreckFastContimgs', BreakFastimg);
	ChangeImgCont('#RiceItemsContimgs', Riceimg);
	ChangeImgCont('#CurrysContimgs', Curryimg);
	ChangeImgCont('#HelithyFoodContimgs', Helithyimg);
	ChangeImgCont('#SpecialsContimgs', Specialsimg);
	ChangeImgCont('#TraditionalContimgs', Traditionalimg);
	ChangeImgCont('#ChutneysContimgs', Chutneyimg);

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

function ChangeImgCont1(ContName, images) {
	var i = 0;
	var timeoutVar;

	function changeBackground() {
		clearTimeout(timeoutVar);

		$(ContName).fadeOut(500, function() {

			$(ContName).css('background-image', function() {

				if (i >= images.length) {

					i = 0;
				}
				return 'url(' + images[i++] + ')';

			});

		}).fadeIn(500);

		/* $(ContName).fadeTo('slow', 0.3, function() {
		$(this).css('background-image', function() {

		if (i >= images.length) {

		i = 0;
		}
		return 'url(' + images[i++] + ')';

		});
		}).delay(500).fadeTo('slow', 1); */

		// call the setTimeout every time to repeat the function
		timeoutVar = setTimeout(changeBackground, 0);

	}

	// Call it on the first time and it will repeat
	changeBackground();

}

