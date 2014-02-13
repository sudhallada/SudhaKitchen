/**
 * @author srisudha
 */
function NonVegetarianDetailsScripts() {
  
   	$("#NonVegContent").click(function() {		
		
		HiddenDiv("#MainContent");
		
		DisplayDiv("#MainContentDetails");
		HiddenDiv("#TipContent");
		
	
		$("#MainContentDetails").load("DetailPages/NonVegetarianDetails.html  #NonVegetarianDetailsContent", function() {

		});
	});



}	