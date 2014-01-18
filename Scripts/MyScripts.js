$(document).ready(function() {

	
	var BreakFastimg = ['Images/idliS.JPG', 'Images/masaladosaS.JPG', 'Images/ravadosa.jpg'];
	var Riceimg = ['Images/idliS.JPG','Images/16620.jpg', 'Images/pototos.jpg', 'Images/rotti.jpg'];
	var Curryimg = ['Images/ravadosa.jpg','Images/noodels.jpg', 'Images/honeychicken.jpg', 'Images/springroll.jpg'];
	var Helithyimg = [' Images/masaladosaS.JPG','Images/otasadai.jpg', 'Images/ragiidli.jpg', 'Images/cucumber.jpg'];
	var Specialsimg= ['Images/vegtables.jpg','Images/otasadai.jpg', 'Images/ragiidli.jpg', 'Images/cucumber.jpg'];
	var Traditionalimg=['Images/idliS.JPG','Images/otasadai.jpg', 'Images/ragiidli.jpg', 'Images/cucumber.jpg'];
	var Chutneyimg=['Images/rotti.jpg','Images/otasadai.jpg', 'Images/ragiidli.jpg', 'Images/cucumber.jpg'];
	
	ChangeImgCont('#BreckFastContimgs',BreakFastimg);
	ChangeImgCont('#RiceItemsContimgs', Riceimg);
	ChangeImgCont('#CurrysContimgs',Curryimg);
	ChangeImgCont('#HelithyFoodContimgs', Helithyimg);
    ChangeImgCont('#SpecialsContimgs', Specialsimg);
    ChangeImgCont('#TraditionalContimgs',Traditionalimg );
    ChangeImgCont('#ChutneysContimgs', Chutneyimg);
    
	$("#home").click(function() {
		DisplayDiv("#HomeContent");
		HiddenDiv("#DetailsPage");
		HiddenDiv("#SoupsContent");
		HiddenDiv("#RiceItemsContent");

	});

	$("#soups").click(function() {
		DisplayDiv("#SoupsContent");
		HiddenDiv("#DetailsPage");
		HiddenDiv("#HomeContent");
		HiddenDiv("#RiceItemsContent");

	});
	$("#riceitems").click(function() {
		HiddenDiv("#SoupsContent");
		HiddenDiv("#HomeContent");
		HiddenDiv("#DetailsPage");
		DisplayDiv("#RiceItemsContent");

	});

	$("#Image1").click(function() {
		HiddenDiv("#SoupsContent");
		HiddenDiv("#HomeContent");
		HiddenDiv("#RiceItemsContent");
		DisplayDiv("#divDetails");

	});

	$("#CPRiceImg").click(function() {

		HiddenDiv("#HomeContent");
		DisplayDiv("#DetailsPage");
		$("#DetailsPage").load("DetailPages/CPRice.html");

	});
	$("#BreakFstSpan").click(function() {

		 HiddenDiv("#MainContent");
		 DisplayDiv("#MainContentDetails");
		 $("#MainContentDetails").load("DetailPages/BreakFastDetails.html");

	 });
	$("#ChennaChatImg").click(function() {
		HiddenDiv("#HomeContent");
		DisplayDiv("#DetailsPage");
		$("#DetailsPage").load("DetailPages/ChennaChat.html");

	});
	$("#TomatoSoupImg").click(function() {
		HiddenDiv("#SoupsContent");
		DisplayDiv("#DetailsPage");
		$("#DetailsPage").load("DetailPages/TomatoSoup.html");
	});
	$("#VegThaliImg").click(function() {
		HiddenDiv("#HomeContent");
		DisplayDiv("#DetailsPage");
		$("#DetailsPage").load("DetailPages/VegThalli.html");

	});
	$("#VegDiseasesImg").click(function() {
		HiddenDiv("#HomeContent");
		DisplayDiv("#DetailsPage");
		$("#DetailsPage").load("DetailPages/VegDiseases.html");

	});
	$("#HealthySoupImg").click(function() {
		HiddenDiv("#SoupsContent");
		DisplayDiv("#DetailsPage");
		$("#DetailsPage").load("DetailPages/HealthySoup.html");
	});
	$("#WinterSoupImg").click(function() {
		HiddenDiv("#SoupsContent");
		DisplayDiv("#DetailsPage");
		$("#DetailsPage").load("DetailPages/WinterSoup.html");

	});
	$("#VegiSoupImg").click(function() {
		HiddenDiv("#SoupsContent");
		DisplayDiv("#DetailsPage");
		$("#DetailsPage").load("DetailPages/VegiSoup.html");

	});
	$("#TomatoRiceImg").click(function() {
		HiddenDiv("#RiceItemsContent");
		DisplayDiv("#DetailsPage");
		$("#DetailsPage").load("DetailPages/TomatoRice.html");
	});
	$("#CarrotRiceImg").click(function() {
		HiddenDiv("#RiceItemsContent");
		DisplayDiv("#DetailsPage");
		$("#DetailsPage").load("DetailPages/CarrotRice.html");
	});
	$("#FrideRiceImg").click(function() {
		HiddenDiv("#RiceItemsContent");
		DisplayDiv("#DetailsPage");
		$("#DetailsPage").load("DetailPages/FridyRice.html");
	});
	$("#DhallRice").click(function() {
		HiddenDiv("#RiceItemsContent");
		DisplayDiv("#DetailsPage");
		$("#DetailsPage").load("DetailPages/DhallRice.html");
	});
	$("#menu").click(function() {
		HiddenDiv("#BottomContainer");
	});

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
		timeoutVar = setTimeout(changeBackground, 1000);
	}

	// Call it on the first time and it will repeat
	changeBackground();

}
