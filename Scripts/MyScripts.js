$(document).ready(function() {

/*$("#home").on("click", function(){
	
	$("#HomeContent").css("visibility","visible");
		
	});*/

$("#home").click(function(){
	DisplayDiv("#HomeContent");
	HiddenDiv("#DetailsPage");
	HiddenDiv("#SoupsContent");
    HiddenDiv("#RiceItemsContent");
	
});


$("#soups").click(function(){
	DisplayDiv("#SoupsContent");
	HiddenDiv("#DetailsPage");
    HiddenDiv("#HomeContent");
    HiddenDiv("#RiceItemsContent");
    
});
$("#riceitems").click(function(){
	HiddenDiv("#SoupsContent");
    HiddenDiv("#HomeContent");
	HiddenDiv("#DetailsPage");
    DisplayDiv("#RiceItemsContent");

});

$("#Image1").click(function(){
	HiddenDiv("#SoupsContent");
    HiddenDiv("#HomeContent");
    HiddenDiv("#RiceItemsContent");
	DisplayDiv("#divDetails");

});

$("#CPRiceImg").click(function(){
 
	 HiddenDiv("#HomeContent");
	 DisplayDiv("#DetailsPage");
	 $("#DetailsPage").load("DetailPages/CPRice.html");
 
});
$("#BreadandSoupImg").click(function(){
	
	HiddenDiv("#HomeContent");
	DisplayDiv("#DetailsPage");	
	$("#DetailsPage").load("DetailPages/BreadandSoup.html");
	
});
$("#ChennaChatImg").click(function(){
	HiddenDiv("#HomeContent");
	DisplayDiv("#DetailsPage");
	$("#DetailsPage").load("DetailPages/ChennaChat.html");
	
});
$("#TomatoSoupImg").click(function(){
	HiddenDiv("#SoupsContent");
	DisplayDiv("#DetailsPage");
	$("#DetailsPage").load("DetailPages/TomatoSoup.html");
});
$("#VegThaliImg").click(function(){
	HiddenDiv("#HomeContent");
	DisplayDiv("#DetailsPage");	
	$("#DetailsPage").load("DetailPages/VegThalli.html");
	
	
});
$("#VegDiseasesImg").click(function(){
	HiddenDiv("#HomeContent");
	DisplayDiv("#DetailsPage");	
	$("#DetailsPage").load("DetailPages/VegDiseases.html");
	
});
$("#HealthySoupImg").click(function(){
	HiddenDiv("#SoupsContent");
	DisplayDiv("#DetailsPage");
	$("#DetailsPage").load("DetailPages/HealthySoup.html");
});
$("#WinterSoupImg").click(function(){
	HiddenDiv("#SoupsContent");
	DisplayDiv("#DetailsPage");
	$("#DetailsPage").load("DetailPages/WinterSoup.html");

});
$("#VegiSoupImg").click(function(){
	HiddenDiv("#SoupsContent");
	DisplayDiv("#DetailsPage");
	$("#DetailsPage").load("DetailPages/VegiSoup.html");

});
$("#TomatoRiceImg").click(function(){
	HiddenDiv("#RiceItemsContent");
	DisplayDiv("#DetailsPage");
	$("#DetailsPage").load("DetailPages/TomatoRice.html");
});
$("#CarrotRiceImg").click(function(){
	HiddenDiv("#RiceItemsContent");
	DisplayDiv("#DetailsPage");
	$("#DetailsPage").load("DetailPages/CarrotRice.html");
});
$("#FrideRiceImg").click(function(){
	HiddenDiv("#RiceItemsContent");
	DisplayDiv("#DetailsPage");
	$("#DetailsPage").load("DetailPages/FridyRice.html");
});
$("#DhallRice").click(function(){
	HiddenDiv("#RiceItemsContent");
	DisplayDiv("#DetailsPage");
	$("#DetailsPage").load("DetailPages/DhallRice.html");
});
$("#menu").click(function(){
	HiddenDiv("#BottomContainer");
});
 
});

function DisplayDiv(id)
{
	$(id).show();
	//$(id).css("visibility","visible");
}

function HiddenDiv(id)
{
	$(id).hide();
	//$(id).css("visibility","hidden",);
	//$(id).css("display","none",);
}

