$(document).ready(function() {

	$('#BreckFastContImgs').cycle({
		fx : 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		delay : -900
	});
	$('#RiceItemsContImgs').cycle({

		fx : 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		delay : -900
	});
	$('#CurrysContImgs').cycle({
		fx : 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		delay : -900
	});
	$('#ChutneysContImgs').cycle({
		fx : 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		delay : -900
	});

	$('#SpecialsContImgs').cycle({
		fx : 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		delay : -900
	});
	$('#TraditionalContImgs').cycle({
		fx : 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		delay : -900
	});
	$('#NonVegFoodContImgs').cycle({
		fx : 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		delay : -900
	});
	$('#MainContentAddImg').cycle({
		fx : 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		delay : -900
	});

	$('#homebtn').click(function() {
		DisplayDiv("#MainContent");
		HiddenDiv("#MainContentDetails");
		$("#MainContent").load("SudhasKitchen/main.html");

	});

	BreatkFastScripts();
	RiceItemDetailsScripts();
	CurryDetailsScripts();
	ChutneyDetailsScripts();
	SpecialsDetailsScripts();
	TraditionalsDetailsScripts();
	NonVegetarianDetailsScripts();
	

	var pfHeaderImgUrl = '';
	var pfHeaderTagline = '';
	var pfdisableClickToDel = 0;
	var pfHideImages = 0;
	var pfImageDisplayStyle = 'right';
	var pfDisablePDF = 0;
	var pfDisableEmail = 0;
	var pfDisablePrint = 0;
	var pfCustomCSS = '';
	var pfBtVersion = '1';
	(function() {
		var js, pf;
		pf = document.createElement('script');
		pf.type = 'text/javascript';
		if ('https:' == document.location.protocol) {
			js = 'https://pf-cdn.printfriendly.com/ssl/main.js';
		} else {
			js = 'http://cdn.printfriendly.com/printfriendly.js';
		}
		pf.src = js;
		document.getElementsByTagName('head')[0].appendChild(pf);
	})();

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

