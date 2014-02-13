/**
 * @author srisudha
 */
function TraditionalsDetailsScripts() {
  
   	$("#TraditionalsContent").click(function() {		
		
		HiddenDiv("#MainContent");
		
		DisplayDiv("#MainContentDetails");
		HiddenDiv("#TipContent");
		
	
		$("#MainContentDetails").load("DetailPages/TraditionalDetails.html  #TraditionalDishesDetailsContent", function() {

		});
	});



}	